import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import {
  sortCardByNameAscTierDiscUIDAsc,
  dataCheck,
  fireSubmitOnEnter,
  parseCard,
} from "./utils/general-utils";
import { ICard } from "./model/card.model";
import { Filter } from "utils/constants";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SubCategoryCard from "components/sub-category-card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import MergeablesModal from "components/mergeables-modal";

export interface IInv {
  [cat: string]: ICard[];
}

const App = () => {
  const [invData, setInvData] = useState<IInv>();
  const [editingCategory, setEditingCategory] = useState("");
  const [editingUID, setEditingUID] = useState(0);

  const [removeInfo, setRemoveInfo] = useState<{
    cat: string;
    tier: number;
    name: string;
    uid: number;
  } | null>(null);
  const [errorLog, setErrorLog] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCreatingNewCat, setCreatingNewCat] = useState(false);
  const [showMergeablesModal, setShowMergeablesModal] = useState(false);

  const [filter, setFilter] = useState<Filter>(Filter.None);

  const remoteSync = useCallback((data?: any) => {
    const binId = localStorage.getItem("binId");
    if (!binId) {
      // create a new bin
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          const binId = JSON.parse(req.response).metadata.id;
          if (!binId) return;

          localStorage.setItem("binId", binId);
          localStorage.setItem("last-fetch", new Date().valueOf() + "");
          alert(
            "Save this id so you can restore your inv in future: " +
              JSON.parse(req.response).metadata.id
          );
        }
      };

      req.open("POST", "https://api.jsonbin.io/v3/b", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-BIN-PRIVATE", "false");
      req.setRequestHeader("X-Bin-Versioning", "false");
      req.setRequestHeader(
        "X-Master-Key",
        "$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"
      );
      req.send(data ? JSON.stringify(data) : localStorage.getItem("inv"));
    } else {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          localStorage.setItem("last-fetch", new Date().valueOf() + "");
          console.log(
            JSON.parse(req.response).metadata ? "Sync success" : "Sync error"
          );
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
          const localData = localStorage.getItem("inv");
          if (!localData) {
            // no local, only remote
            localStorage.setItem("inv", JSON.stringify(inv));
          } else if (JSON.stringify(inv) !== localData) {
            // remote !== local
            alert("Discrepancy remote vs local, keeping remote for now.");
            localStorage.setItem("inv", JSON.stringify(inv));
          }
          localStorage.setItem("last-fetch", new Date().valueOf() + "");
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
    const lastFetch = Number(localStorage.getItem("last-fetch")) || 0;
    const isFetchedIn1Min = new Date().valueOf() - lastFetch < 1 * 60 * 1000;
    const hasLocal = loadedInv !== null;
    const hasRemote = binId !== null;

    if (hasRemote && isFetchedIn1Min && hasLocal) {
      setInvData(JSON.parse(loadedInv as string));
    } else if (hasLocal && !hasRemote) {
      const loadedData = JSON.parse(loadedInv as string);
      setInvData(loadedData);
      remoteSync(loadedData);
    } else if (hasRemote) {
      fetchDataFromJsonBin(binId as string);
    }
  }, [remoteSync, fetchDataFromJsonBin]);

  useEffect(() => {
    document.onkeyup = (e: any) => {
      if (e.key === "Escape") {
        document
          .getElementById(editingUID + "")
          ?.style.setProperty("text-decoration", "none");
        setEditingUID(0);
      }
    };
  }, [editingUID]);

  useEffect(() => {
    if (!invData) return;
    localStorage.setItem("inv", JSON.stringify(invData));
    const binId = localStorage.getItem("binId");
    binId && remoteSync(invData);
  }, [invData, remoteSync]);

  const updateInvData = (newInv: any) => {
    if (newInv) {
      setInvData(newInv);
    }
  };

  const updateEditingCategory = (cat: string) => {
    setEditingCategory(cat);
  };
  const updateEditingUID = (uid: number) => {
    setEditingUID(uid);
  };
  const updateCreatingNewCat = (isCreating: boolean) => {
    setCreatingNewCat(isCreating);
  };
  const updateRemoveInfo = (info: any) => {
    setRemoveInfo(info);
  };

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
        ...(invData?.[removeInfo.cat]?.filter(
          (c: ICard) => c.uid !== removeInfo.uid
        ) || []),
      ],
    });
    setRemoveInfo(null);
  };

  const abortRemove = () => {
    setRemoveInfo(null);
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

        if (keys.length === 0) {
          // Empty obj
          invalidCounter++;
          tempLog.push("No lines found.");
        } else {
          keys.forEach(k => {
            if (built_inv[k].length === 0) {
              delete built_inv[k];
              tempLog.push(k);
              return;
            }
            sortedInv[k] = built_inv[k].sort(sortCardByNameAscTierDiscUIDAsc);
          });

          localStorage.setItem("inv", JSON.stringify(sortedInv));
        }

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
      setCreatingNewCat(false);
      setEditingCategory("");
      setEditingUID(0);
    }
  };

  const handleFilterChange = (e: any) => {
    e.persist();
    const newFilter = e.target.dataset.filter;
    if (newFilter === filter) return;
    switch (newFilter) {
      default:
        setFilter(Filter.None);
        break;
    }
  };

  const toggleMergeablesModal = () => {
    setShowMergeablesModal(!showMergeablesModal);
  };

  const handleMerge = (cat: string, uids: number[]) => {
    const keptCard = invData?.[cat]?.find(c => c.uid === uids[0]);
    if (!keptCard) return;
    const newList = [
      ...(invData?.[cat]?.filter(c => !uids.includes(c.uid)) || []),
      { ...keptCard, tier: keptCard.tier + 1 },
    ].sort(sortCardByNameAscTierDiscUIDAsc);
    setInvData({
      ...invData,
      [cat]: newList,
    });
  };

  return (
    <>
      {invData && (
        <Navbar bg='dark' variant='dark' fixed='top' collapseOnSelect>
          <Navbar.Brand>TC</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown title='Sort' id='sort-dropdown'>
                <NavDropdown.Item disabled active>
                  by Name
                </NavDropdown.Item>
                <NavDropdown.Item disabled>by star (WIP)</NavDropdown.Item>
                <NavDropdown.Item disabled>by UID (WIP)</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Filter' id='filter-dropdown'>
                <NavDropdown.Item
                  active={filter === Filter.None}
                  onClick={handleFilterChange}
                >
                  No Filter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled>5 star (WIP)</NavDropdown.Item>
                <NavDropdown.Item disabled>4 star (WIP)</NavDropdown.Item>
                <NavDropdown.Item disabled>3 star (WIP)</NavDropdown.Item>
                <NavDropdown.Item disabled>2 star (WIP)</NavDropdown.Item>
                <NavDropdown.Item disabled>1 star (WIP)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant='outline-warning' onClick={toggleMergeablesModal}>
              Show mergeables
            </Button>
            {/* <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-warning'>Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      )}
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
                    fireSubmitOnEnter(e, "backup-id-input-button")
                  }
                />
                &nbsp;
                <Button
                  id='backup-id-input-button'
                  onClick={handleBackupIdInput}
                >
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
                <SubCategoryCard
                  key={cat}
                  category={cat}
                  filter={filter}
                  invData={invData}
                  editingCategory={editingCategory}
                  editingUID={editingUID}
                  updateInvData={updateInvData}
                  updateRemoveInfo={updateRemoveInfo}
                  updateEditingUID={updateEditingUID}
                  updateCreatingNewCat={updateCreatingNewCat}
                  updateEditingCategory={updateEditingCategory}
                />
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
        {isCreatingNewCat && (
          <Modal show>
            <Modal.Header closeButton>New sub category</Modal.Header>
            <Modal.Body>
              <Form.Control
                id='new-subcat-input'
                placeholder='Marvel Cinematic Universe'
                autoFocus
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  fireSubmitOnEnter(e, "new-subcat-input-button")
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
        {showMergeablesModal && (
          <MergeablesModal
            invData={invData}
            handleMerge={handleMerge}
            closeModal={toggleMergeablesModal}
          />
        )}
      </div>
    </>
  );
};

export default App;
