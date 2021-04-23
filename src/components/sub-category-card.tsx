import { ICard } from "model/card.model";
import React, { Fragment, useEffect, useState } from "react";
import { Filter, Sort } from "utils/constants";
import {
  sortCardByNameAscTierDiscUIDAsc,
  CARD_INPUT_REGEX,
  fireSubmitOnEnter,
  parseCard,
  handleSort,
} from "utils/general-utils";

export interface ISubCategoryCardProps {
  category: string;
  invData: any;
  filter: Filter;
  editingCategory: string;
  editingUID: number;
  sort: Sort;
  updateInvData: (newInv: any) => void;
  updateEditingUID: (uid: number) => void;
  updateRemoveInfo: (info: any) => void;
  updateEditingCategory: (cat: string) => void;
  updateCreatingNewCat: (isCreating: boolean) => void;
}

const SubCategoryCard: React.FC<ISubCategoryCardProps> = props => {
  const {
    category,
    invData,
    sort,
    editingUID,
    editingCategory,
    updateInvData,
    updateCreatingNewCat,
    updateEditingUID,
    updateRemoveInfo,
    updateEditingCategory,
  } = props;
  const [inputCardValue, setInputCardValue] = useState("");

  useEffect(() => {
    document.onkeyup = (e: any) => {
      if (e.key === "Escape") {
        updateEditingCategory("");
        setInputCardValue("");
        document
          .getElementById(editingUID + "")
          ?.style.setProperty("text-decoration", "none");
        updateEditingUID(0);
      }
    };
  }, [editingUID, updateEditingUID, updateEditingCategory]);

  const handleInputChange = (e: any) => {
    setInputCardValue(e.target.value);
  };

  const addNewCard = (e: any) => {
    e.persist();
    const cat = e.target?.dataset?.cat;
    updateEditingCategory(cat);
    setInputCardValue("");
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
    updateEditingCategory(cat);
    updateEditingUID(uid);
    setInputCardValue(old?.firstElementChild?.innerHTML || "");
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
    updateRemoveInfo({ cat, ...toBeRemoved });
  };

  const handleNewCardSubmit = (e: any) => {
    const inputString: string = (inputCardValue || "")
      .replace(":lock:", "")
      .trim();

    if (inputString === "JSON") {
      // secret command
      document.getElementById("downloadJSON")?.click();
      updateEditingCategory("");
      updateEditingUID(0);
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
      updateCreatingNewCat(true);
      e.preventDefault();
      return;
    }

    if (inputString === "DELETE CAT") {
      // secret command
      updateRemoveInfo({ cat: editingCategory, tier: 0, name: "", uid: 0 });
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

    if (editingUID) {
      // edit existing
      const card = (invData[editingCategory] as ICard[]).find(
        c => c.uid === editingUID
      );
      // if (!card) BOH
      if (parsedCard?.name !== card?.name) {
        alert(
          "Attention: you input a different card name, the old card will be replaced."
        );
      }
      updateInvData({
        ...invData,
        [editingCategory]: [
          ...invData[editingCategory].filter(
            (c: ICard) => c.uid !== editingUID
          ),
          { ...parsedCard },
        ].sort(sortCardByNameAscTierDiscUIDAsc),
      });

      document
        .getElementById(editingUID + "")
        ?.style.removeProperty("text-decoration");
    } else {
      const isDuplicate = Object.keys(invData).some(cat =>
        (invData[cat] as ICard[]).some(card => card.uid === parsedCard?.uid)
      );
      if (isDuplicate) {
        alert("Duplicate UID, please check your data.");
        return;
      }

      updateInvData({
        ...invData,
        [editingCategory]: [
          ...invData[editingCategory],
          { ...parsedCard },
        ].sort(handleSort(sort)),
      });
    }

    updateEditingUID(0);
    setInputCardValue("");
    updateEditingCategory("");
    e.preventDefault();
  };

  return (
    <div className='cat'>
      <div className='cat-header'>
        <b>{category}</b>
        <span
          className='abs-right-button'
          title='Add a new card'
          data-cat={category}
          onClick={addNewCard}
        >
          +
        </span>
      </div>
      <div className='cat-body'>
        {editingCategory === category && (
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
                fireSubmitOnEnter(e, "new-card-input-submit-button")
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
          {(invData[category] as ICard[]).sort(handleSort(sort)).map((card, i) => {
            const isSpare = invData[category]?.[i - 1]?.name === card.name;
            const meargeable =
              (invData[category]?.[i - 1]?.tier === card.tier &&
                invData[category]?.[i - 1]?.name === card.name) ||
              (invData[category]?.[i + 1]?.name === card.name &&
                invData[category]?.[i + 1]?.tier === card.tier);
            return (
              <Fragment key={card.uid}>
                {!isSpare && <hr />}
                <div
                  className={`card-line star${card.tier} ${
                    meargeable ? "mergeable" : "non-mergeable"
                  }`}
                  id={card.uid + ""}
                >
                  <span>{`${card.tier}s - ${card.name} - ${card.uid}`}</span>
                  <span
                    className='edit-card-button unselectable'
                    data-cat={category}
                    data-uid={card.uid}
                    onClick={editCard}
                  >
                    <b>&#9998;</b>
                  </span>
                  <span
                    className='delete-card-button unselectable'
                    data-cat={category}
                    data-uid={card.uid}
                    onClick={removeCard}
                  >
                    <b>&times;</b>
                  </span>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
