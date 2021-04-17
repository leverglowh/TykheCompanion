import React, { Fragment, useCallback, useEffect, useState } from "react";
import "./App.css";
import { cardSort, CARD_INPUT_REGEX } from "./utils/general-utils";
import { ICard } from "./model/card.model";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const App = () => {
  const [invData, setInvData] = useState<any>(null);
  const [editCat, setEditCat] = useState("");
  const [editUid, setEditUid] = useState(0);
  const [inputCardValue, setInputCardValue] = useState("");
  const [removeInfo, setRemoveInfo] = useState<{
    cat: string;
    tier: number;
    name: string;
    uid: number;
  } | null>(null);
  const [errorLog, setErrorLog] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [createNewCat, setCreateNewCat] = useState(false);

  const remoteSync = useCallback((data?: any) => {
    const binId = localStorage.getItem("binId");
    if (!binId) {
      // create a new bin
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          localStorage.setItem("binId", JSON.parse(req.response).metadata.id);
          alert(
            "Save this id so you can restore your inv in future: " +
              JSON.parse(req.response).metadata.id
          );
        }
      };

      req.open("POST", "https://api.jsonbin.io/v3/b", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-BIN-PRIVATE", "false");
      req.setRequestHeader(
        "X-Master-Key",
        "$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"
      );
      req.send(data ? JSON.stringify(data) : localStorage.getItem("inv"));
    } else {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          console.log(JSON.parse(req.response).metadata ? 'Sync success' : 'Sync error');
        }
      };

      req.open("PUT", "https://api.jsonbin.io/v3/b/" + binId, true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader(
        "X-Master-Key",
        "$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"
      );
      req.send(data ? JSON.stringify(data) : localStorage.getItem("inv"));
    }
  }, []);

  const fetchDataFromJsonBin = useCallback((binId: string) => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        const inv = JSON.parse(req.response).record;
        if (typeof inv !== "object") {
          alert(
            "Invalid data, please check your backup id or upload an inv file."
          );
          (document.getElementById(
            "backup-id-input"
          ) as HTMLInputElement).value = "";
          localStorage.clear();
          return;
        }
        const cats = Object.keys(inv);
        const isValid = cats.every(
          cat =>
          Array.isArray(inv[cat]) &&
            inv[cat].every((card: any) =>
              dataCheck(card.tier, card.name, card.uid)
            )
        );
        if (isValid) {
          localStorage.setItem("inv", JSON.stringify(inv));
          localStorage.setItem("binId", binId);
          window.location.reload();
        } else {
          alert(
            "Invalid data, please check your backup id or upload an inv file."
          );
          (document.getElementById(
            "backup-id-input"
          ) as HTMLInputElement).value = "";
          localStorage.clear();
          return;
        }
      }
    };

    req.open("GET", `https://api.jsonbin.io/v3/b/${binId}/latest`, true);
    req.send();
  }, []);

  useEffect(() => {
    const loadedInv = localStorage.getItem("inv");
    const binId = localStorage.getItem("binId");
    if (loadedInv) {
      setInvData(JSON.parse(loadedInv));
      remoteSync(JSON.parse(loadedInv));
    } else {
      if (binId) {
        fetchDataFromJsonBin(binId);
      }
    }
  }, [remoteSync, fetchDataFromJsonBin]);

  useEffect(() => {
    document.onkeyup = (e: any) => {
      if (e.key === "Escape") {
        setEditCat("");
        setInputCardValue("");
        document
          .getElementById(editUid + "")
          ?.style.setProperty("text-decoration", "none");
        setEditUid(0);
      }
    };
  }, [editUid]);

  useEffect(() => {
    if (!invData) return;
    localStorage.setItem("inv", JSON.stringify(invData));
  }, [invData]);

  const handleBackupIdInput = (e: any) => {
    const id: string = (document.getElementById(
      "backup-id-input"
    ) as HTMLInputElement)?.value;

    if (!id) {
      alert(
        "Invalid input, please check your backup id or upload an inv file."
      );
      return;
    }
    fetchDataFromJsonBin(id);
  };

  const dataCheck = (tier: number, name: string, uid: number) => {
    const uidString = uid + "";
    return !(
      !tier ||
      !name ||
      !uid ||
      tier > 5 ||
      tier < 1 ||
      name.length <= 0 ||
      uidString.includes(".") ||
      uidString.includes(",") ||
      uidString.length !== 4 ||
      uid < 1000
    );
  };

  const handleInputChange = (e: any) => {
    setInputCardValue(e.target.value);
  };

  const handleInputKeyUp = (e: any, elementId: string) => {
    if (e.key === "Enter") {
      document.getElementById(elementId)?.click();
    }
  };

  const addNewCard = (e: any) => {
    e.persist();
    const cat = e.target?.dataset?.cat;
    setEditCat(cat);
    setInputCardValue("");
  };

  const parseCard = (line: string) => {
    let tier = 0;
    let uid = 0;
    let name = "";
    if (line?.[0] === ":") {
      // copied from inv
      if (!/^:[0-5]star128:/.test(line)) return null;

      tier = Number(line[1]);
      const temp_vals = [
        ...line.split("-").map((word: string) => word.trim()),
      ].filter(w => w.length > 0); // remove empty words
      uid = Number(temp_vals[temp_vals.length - 1]);
      name = temp_vals.slice(1, temp_vals.length - 1).join(" - ");
    } else {
      if (!/^[1-5][^0-9]+/.test(line)) return null;
      let temp_vals = [];

      temp_vals = [
        ...line.split("-").map((word: string) => word.trim()),
      ].filter(w => w.length > 0);

      const numberPattern = /\d+/g;

      tier = Number(temp_vals[0].match(numberPattern)?.[0]) || 0;
      uid = Number(temp_vals[temp_vals.length - 1]);
      name = temp_vals.slice(1, temp_vals.length - 1).join(" - ");

      if (!dataCheck(tier, name, uid)) {
        // retry with space as split string
        temp_vals = [
          ...line.split(" ").map((word: string) => word.trim()),
        ].filter(w => w.length > 0);

        tier = Number(line[0]);
        uid = Number(temp_vals[temp_vals.length - 1]);
        name = temp_vals.slice(1, temp_vals.length - 1).join(" ");
      }
    }

    // sanity check
    if (!dataCheck(tier, name, uid)) {
      return null;
    }

    return { tier, name, uid };
  };

  const handleNewCardSubmit = (e: any) => {
    const inputString: string = (inputCardValue || "")
      .replace(":lock:", "")
      .trim();

    if (inputString === "JSON") {
      // secret command
      document.getElementById("downloadJSON")?.click();
      setEditCat("");
      setEditUid(0);
      setInputCardValue("");
      e.preventDefault();
      return;
    }

    if (inputString === "CLEAR") {
      // secret command
      localStorage.clear();
      window.location.reload();
      return;
    }

    if (inputString === "CREATE CAT") {
      // secret command
      setCreateNewCat(true);
      e.preventDefault();
      return;
    }

    if (inputString === "DELETE CAT") {
      // secret command
      setRemoveInfo({ cat: editCat, tier: 0, name: "", uid: 0 });
      e.preventDefault();
      return;
    }

    // Sanity check
    if (!CARD_INPUT_REGEX.test(inputString)) {
      alert("Non valid input, abort! abort!");
      return;
    }

    const parsedCard = parseCard(inputString);

    if (!parsedCard) {
      alert("Non valid input, abort! abort!");
      return;
    }

    if (editUid) {
      // edit existing
      const card = (invData[editCat] as ICard[]).find(c => c.uid === editUid);
      // if (!card) BOH
      if (parsedCard?.name !== card?.name) {
        alert(
          "Attention: you input a different card name, the old card will be replaced."
        );
      }
      setInvData({
        ...invData,
        [editCat]: [
          ...invData[editCat].filter((c: ICard) => c.uid !== editUid),
          { ...parsedCard },
        ].sort(cardSort),
      });

      document
        .getElementById(editUid + "")
        ?.style.removeProperty("text-decoration");
    } else {
      Object.keys(invData).forEach(cat => {
        const isDuplicate = !!(invData[cat] as ICard[]).find(
          c => c.uid === parsedCard?.uid
        );
        if (isDuplicate) {
          alert("Duplicate UID, please check your data.");
          // eslint-disable-next-line no-throw-literal
          throw "Duplicate UID, please check your data.";
        }
      });

      setInvData({
        ...invData,
        [editCat]: [...invData[editCat], { ...parsedCard }].sort(cardSort),
      });
    }

    setEditCat("");
    setEditUid(0);
    setInputCardValue("");
    e.preventDefault();
  };

  const removeCard = (e: any) => {
    e.persist();
    if (e.target.tagName === "B") {
      e.target.parentElement.click();
      return;
    }
    const cat = e.target?.dataset?.cat;
    const uid = Number(e.target?.dataset?.uid);
    if (!cat || !uid) return;
    const toBeRemoved = invData[cat].find((c: any) => c.uid === uid);
    setRemoveInfo({ cat, ...toBeRemoved });
  };

  const confirmRemove = () => {
    if (!removeInfo?.cat) return;
    if (!removeInfo.tier && removeInfo.cat) {
      // removing whole cat
      const copy = { ...invData };
      delete copy[removeInfo.cat];
      setInvData(copy);
      setRemoveInfo(null);
      return;
    }
    if (!removeInfo.uid) return;
    setInvData({
      ...invData,
      [removeInfo.cat]: [
        ...invData[removeInfo.cat].filter(
          (c: ICard) => c.uid !== removeInfo.uid
        ),
      ],
    });
    setRemoveInfo(null);
  };

  const abortRemove = () => {
    setRemoveInfo(null);
  };

  const editCard = (e: any) => {
    e.persist();
    if (e.target.tagName === "B") {
      e.target.parentElement.click();
      return;
    }
    const cat = e.target?.dataset?.cat;
    const uid = Number(e.target?.dataset?.uid);
    if (!cat || !uid) return;

    const old = document.getElementById(uid + "");

    old?.style.setProperty("text-decoration", "line-through");
    setEditCat(cat);
    setEditUid(uid);
    setInputCardValue(old?.firstElementChild?.innerHTML || "");
  };

  const handleInvInput = (event: any) => {
    const file = event?.target?.files?.[0];
    console.log(file);
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        const removed_locks = (evt?.target?.result as string)?.replace(
          ":lock:",
          ""
        );

        const built_inv: any = {};
        let last_cat = "";
        const lines = removed_locks.split("\n");
        let invalidCounter = 0;
        const tempLog: string[] = [];
        lines.forEach(line => {
          if (line.startsWith(":") || /^[0-9]/.test(line)) {
            // starts with : or number -> is inv item line
            const parsedCard = parseCard(line.trim());

            if (!last_cat || !parsedCard) {
              invalidCounter++;
              tempLog.push(line);
              return;
            } else {
              built_inv[last_cat].push({
                ...parsedCard,
              });
            }
          } else {
            // cat or line break
            if (line.length > 1) {
              // is sub cat line
              const current_cat = line.trim();
              if (current_cat !== last_cat) {
                // new cat
                if (!built_inv[current_cat]) built_inv[current_cat] = [];
              }
              last_cat = current_cat;
            }
          }
        });

        // now inv should be complete
        const sortedInv: any = {};
        const keys = [...Object.keys(built_inv)];
        keys.forEach(k => {
          if (built_inv[k].length === 0) {
            delete built_inv[k];
            tempLog.push(k);
            return;
          }
          sortedInv[k] = built_inv[k].sort(cardSort);
        });

        localStorage.setItem("inv", JSON.stringify(sortedInv));

        if (invalidCounter > 0) {
          setErrorLog(tempLog);
          setShowResult(true);
        } else {
          window.location.reload();
        }
      };
      reader.onerror = function (evt) {
        alert("error");
      };
    }
  };

  const closeImportResultModal = () => {
    window.location.reload();
  };

  const addSub = () => {
    const cat = (document.getElementById(
      "new-subcat-input"
    ) as HTMLInputElement).value;
    if (!cat) {
      alert("Invalid category name");
      return;
    } else {
      setInvData({
        ...invData,
        [cat]: [],
      });
      setCreateNewCat(false);
      setEditCat("");
      setEditUid(0);
      setInputCardValue("");
    }
  };
  return (
    <div className='main-container'>
      {!invData ? (
        <div className='file-input-container'>
          <div>
            <div className='text-align-left'>
              Hi, please upload inventory text file.
            </div>
            <br />
            <input
              type='file'
              name='initial-inv-input'
              id='initial-inv-input'
              accept='text/plain'
              onChange={handleInvInput}
            />
          </div>
          <div>
            <div className='text-align-left'>Or input the backup id:</div>
            <div className='backup-id-input-container'>
              <Form.Control
                placeholder='607b400f0ed6f819beae5284'
                id='backup-id-input'
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleInputKeyUp(e, "backup-id-input-button")
                }
              />
              &nbsp;
              <Button id='backup-id-input-button' onClick={handleBackupIdInput}>
                Enter
              </Button>
            </div>
          </div>
        </div>
      ) : (
        Object.keys(invData)
          .sort()
          .map(cat => {
            return (
              <div key={cat} className='cat'>
                <div className='cat-header'>
                  <b>{cat}</b>
                  <span
                    className='abs-right-button'
                    title='Add a new card'
                    data-cat={cat}
                    onClick={addNewCard}
                  >
                    +
                  </span>
                </div>
                <div className='cat-body'>
                  {editCat === cat && (
                    <div id='new-card-form'>
                      <div className='card-format'>
                        ?
                        <span className='card-format-info'>
                          Copy from inv:
                          <br />
                          <b>:2star128: - Hawkeye (Kate Bishop) - 2333</b>
                          <br />
                          or manually insert
                          <br />
                          <b>2s Hawkeye (Kate Bishop) 2333</b>
                        </span>
                      </div>
                      <input
                        id='new-card-input-box'
                        className='new-card-input-box'
                        type='text'
                        autoFocus
                        value={inputCardValue}
                        onChange={handleInputChange}
                        onKeyUp={e =>
                          handleInputKeyUp(e, "new-card-input-submit-button")
                        }
                        placeholder='2s Hawkeye (Kate Bishop) 2333'
                      />
                      <input
                        type='button'
                        id='new-card-input-submit-button'
                        value='✓'
                        onClick={handleNewCardSubmit}
                      />
                    </div>
                  )}
                  <div className='hide-overflow'>
                    {(invData[cat] as ICard[]).map((card, i) => (
                      <Fragment key={card.uid}>
                        {invData[cat]?.[i - 1]?.name !== card.name && <hr />}
                        <div
                          className={"card-line star" + card.tier}
                          id={card.uid + ""}
                        >
                          <span>{`${card.tier}s - ${card.name} - ${card.uid}`}</span>
                          <span
                            className='edit-card-button unselectable'
                            data-cat={cat}
                            data-uid={card.uid}
                            onClick={editCard}
                          >
                            <b>&#9998;</b>
                          </span>
                          <span
                            className='delete-card-button unselectable'
                            data-cat={cat}
                            data-uid={card.uid}
                            onClick={removeCard}
                          >
                            <b>&times;</b>
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
      )}
      <a
        id='downloadJSON'
        href={
          "data:text/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(invData))
        }
        download='inv.json'
        style={{ display: "none" }}
      >
        DOWNLOAD JSON
      </a>
      {removeInfo && (
        <Modal show backdrop='static' keyboard={false}>
          <Modal.Header>Are you sure?</Modal.Header>
          <Modal.Body>
            <Alert variant='danger'>
              Are you sure you want to remove this?
              <br />
              <b>
                {removeInfo.tier
                  ? `${removeInfo.tier}s - ${removeInfo.name} - ${removeInfo.uid}`
                  : `Category: ${removeInfo.cat}`}
              </b>
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={abortRemove}>
              Don't remove
            </Button>
            <Button variant='danger' onClick={confirmRemove}>
              Yes, do it.
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {showResult && errorLog.length > 0 && (
        <Modal show backdrop='static' keyboard={false}>
          <Modal.Header>Error encountered</Modal.Header>
          <Modal.Body>
            <Alert variant='danger'>
              {errorLog.length} error(s) encountered in these lines:
            </Alert>
            <div className='import-error-log-container'>
              {errorLog.map((l, i) => (
                <div>
                  <span className='error-log-index unselectable'>
                    {i + 1}&nbsp;
                  </span>
                  {l}
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeImportResultModal}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {createNewCat && (
        <Modal show>
          <Modal.Header closeButton>New sub category</Modal.Header>
          <Modal.Body>
            <Form.Control
              id='new-subcat-input'
              placeholder='Marvel Cinematic Universe'
              autoFocus
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleInputKeyUp(e, "new-subcat-input-button")
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='primary'
              id='new-subcat-input-button'
              onClick={addSub}
            >
              ADD
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default App;
