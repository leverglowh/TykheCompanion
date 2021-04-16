import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { cardSort } from "./utils/general-utils";
import { ICard } from "./model/card.model";

const App = () => {
  const [invData, setInvData] = useState<any>(null);
  const [editCat, setEditCat] = useState("");
  const [editUid, setEditUid] = useState(0);
  const [inputCardValue, setInputCardValue] = useState("");
  useEffect(() => {
    const loadedInv = localStorage.getItem("inv");
    if (loadedInv) {
      setInvData(JSON.parse(loadedInv));
    }
  }, []);

  useEffect(() => {
    document.onkeyup = (e: any) => {
      if (e.key === "Escape") {
        setEditCat("");
        setInputCardValue("");
        document
          .getElementById(editUid + "")?.style.setProperty('text-decoration', 'none');
        setEditUid(0);
      }
    };
  }, [editUid]);

  useEffect(() => {
    if (editCat) {
    }
  }, [editCat]);

  useEffect(() => {
    if (!invData) return;
    localStorage.setItem("inv", JSON.stringify(invData));
  }, [invData]);

  const handleInputChange = (e: any) => {
    setInputCardValue(e.target.value);
  };

  const addNewCard = (e: any) => {
    e.persist();
    const cat = e.target?.dataset?.cat;
    setEditCat(cat);
    setInputCardValue("");
  };

  const handleNewCardSubmit = (e: any) => {
    const inputString: string = (inputCardValue || "").replace(":lock:", "");
    let tier = 0;
    let uid = 0;
    let name = "";
    if (inputString?.[0] === ":") {
      // copied from inv
      tier = Number(inputString[1]);
      const temp_vals = [
        ...inputString.split("-").map((word: string) => word.trim()),
      ];
      uid = Number(temp_vals[temp_vals.length - 1]);
      name = temp_vals.slice(1, temp_vals.length - 1).join(" - ");
    } else {
      let temp_vals = [];
      let splitString = "";
      if (inputString?.[3] === "-") {
        splitString = "-";
      } else {
        splitString = " ";
      }
      temp_vals = [
        ...inputString.split(splitString).map((word: string) => word.trim()),
      ];
      tier = Number(inputString[0]);
      uid = Number(temp_vals[temp_vals.length - 1]);
      name = temp_vals
        .slice(1, temp_vals.length - 1)
        .join(splitString === "-" ? " - " : splitString);
    }

    if (!tier || !name || !uid) {
      alert("Non valid input, abort abort!");
      return;
    }

    if (editUid) {
      // edit existing
      const card = (invData[editCat] as ICard[]).find(c => c.uid === editUid);
      // if (!card) BOH
      if (name !== card?.name) {
        alert(
          "Attention: you input a different card name, the old card will be replaced."
        );
      }
      setInvData({
        ...invData,
        [editCat]: [
          ...invData[editCat].filter((c: ICard) => c.uid !== editUid),
          {
            tier,
            name,
            uid,
          },
        ].sort(cardSort),
      });

      document
        .getElementById(editUid + "")
        ?.style.removeProperty("text-decoration");
    } else {
      Object.keys(invData).forEach(cat => {
        const isDuplicate = !!(invData[cat] as ICard[]).find(
          c => c.uid === uid
        );
        if (isDuplicate) {
          alert("Duplicate UID, please check your data.");
          // eslint-disable-next-line no-throw-literal
          throw "Duplicate UID, please check your data.";
        }
      });

      setInvData({
        ...invData,
        [editCat]: [
          ...invData[editCat],
          {
            tier,
            name,
            uid,
          },
        ].sort(cardSort),
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

    setInvData({
      ...invData,
      [cat]: [...invData[cat].filter((c: ICard) => c.uid !== uid)],
    });
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
        // console.log(evt.target.result);
        const removed_locks = (evt?.target?.result as string)?.replace(
          ":lock:",
          ""
        );

        const built_inv: any = {};
        let last_cat = "";
        const lines = removed_locks.split("\n");
        lines.forEach(line => {
          if (line.startsWith(":")) {
            // is inv item line
            const tier = Number(line[1]);

            const temp_vals = [...line.split("-").map(word => word.trim())];
            const uid = Number(temp_vals[temp_vals.length - 1]);
            const name = temp_vals.slice(1, temp_vals.length - 1).join(" - ");
            if (!last_cat) {
              // eslint-disable-next-line no-throw-literal
              throw "error, bye";
            } else {
              built_inv[last_cat].push({
                tier,
                name,
                uid,
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
        const keys = [...Object.keys(built_inv)].sort();
        keys.forEach(k => {
          sortedInv[k] = built_inv[k].sort(cardSort);
        });

        localStorage.setItem("inv", JSON.stringify(sortedInv));
        window.location.reload();
      };
      reader.onerror = function (evt) {
        alert("error");
      };
    }
  };
  return (
    <div className='container'>
      {!invData ? (
        <div className='file-input-container'>
          <label htmlFor='initial-inv-input'>
            Hi, please upload inventory text file.
          </label>
          <br />
          <input
            type='file'
            name='initial-inv-input'
            id='initial-inv-input'
            accept='text/plain'
            onChange={handleInvInput}
          />
        </div>
      ) : (
        Object.keys(invData).map(cat => {
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
                      placeholder='2s Hawkeye (Kate Bishop) 2333'
                    />
                    <input
                      type='button'
                      value='✓'
                      onClick={handleNewCardSubmit}
                    />
                  </div>
                )}
                <div className="hide-overflow">
                {(invData[cat] as ICard[]).map((card, i) => (
                  <Fragment key={card.uid}>
                    {invData[cat]?.[i - 1]?.name !== card.name && <hr />}
                    <div className={"card star" + card.tier} id={card.uid + ""}>
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
    </div>
  );
};

export default App;
