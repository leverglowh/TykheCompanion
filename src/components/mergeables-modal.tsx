import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ICard } from "model/card.model";
import { sortCardByNameAscTierDiscUIDAsc } from 'utils/general-utils';

export interface IMergeablesModalProps {
  invData: any;
  handleMerge: (cat: string, uids: number[]) => void;
  closeModal: () => void;
}

const MergeablesModal: React.FC<IMergeablesModalProps> = props => {
  const [filteredMergeables, setFilteredMergeables] = useState<{
    [key: string]: { [key: string]: ICard[] };
  }>({});
  useEffect(() => {
    const temp: { [key: string]: { [key: string]: ICard[] } } = {};
    for (const cat in props.invData) {
      const tempCat: { [key: string]: ICard[] } = {};
      const cardsInCat = props.invData[cat];
      cardsInCat.forEach((card: ICard, i: number) => {
        if (i === 0) return; // skip first one
        const prevCard: ICard = cardsInCat[i - 1];
        if (card.name === prevCard.name && card.tier === prevCard.tier) {
          const oldList =
            tempCat[card.name]?.filter(c => c.uid !== prevCard.uid) || [];
          // Me and prev are dupe
          tempCat[card.name] = [...oldList, prevCard, card];
        }
      });
      if (Object.keys(tempCat).length > 0) temp[cat] = tempCat;
    }
    setFilteredMergeables(temp);
  }, [props.invData]);

  const handleMerge = (e: any) => {
    e.persist();
    const { cat, name, pair, tier } = e.target.dataset;
    const uids = pair.split('-').map((uid: string) => Number(uid));
    // remove these 2 cards, add one card with uid = uids[0]
    props.handleMerge(cat, uids);

    let newList = filteredMergeables[cat][name].filter(c => !uids.includes(c.uid));
    if (newList.length < 2) newList = [];

    const newCard: ICard = { tier: Number(tier) + 1, name, uid: uids[0] };
    const nextMergeable = props.invData[cat].find((card: ICard) => card.name === name && card.tier === Number(tier) + 1);
    if (nextMergeable) {
      newList.unshift(...[nextMergeable, newCard].sort(sortCardByNameAscTierDiscUIDAsc));
    }

    const temp = {...filteredMergeables};
    if (!newList.length) {
      delete temp[cat][name];
      if (Object.keys(temp[cat]).length === 0) delete temp[cat];
    } else {
      temp[cat][name] = newList;
    }
    const checkbox:any = document.getElementById(`merge-${name}`);
    if (checkbox) checkbox.checked = false;

    setFilteredMergeables(temp);
  };

  return (
    <Modal show onHide={props.closeModal} className='mergeables-modal'>
      <Modal.Header closeButton>Mergeable cards</Modal.Header>
      <Modal.Body>
        <div>
          {Object.keys(filteredMergeables).length === 0 && (
            <div>
              No mergeable cards, well done!
            </div>
          )}
          {Object.keys(filteredMergeables).map((cat, i) => (
            <Fragment key={"mergeable-" + cat}>
              {i !== 0 && <hr />}
              <div>
                <div
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {cat}
                </div>
                {Object.keys(filteredMergeables[cat]).map(cardName => (
                  <div>
                    <div>
                      <Form.Check type="checkbox">
                        <Form.Check.Input type="checkbox" id={`merge-${cardName}`} onChange={handleMerge} data-cat={cat} data-tier={filteredMergeables[cat][cardName][0].tier} data-name={cardName} data-pair={`${filteredMergeables[cat][cardName][0].uid}-${filteredMergeables[cat][cardName][1].uid}`}/>
                        <Form.Check.Label><i>
                        !m m, {filteredMergeables[cat][cardName][0].uid},{" "}
                        {filteredMergeables[cat][cardName][1].uid}
                      </i></Form.Check.Label>
                      </Form.Check>
                      
                    </div>
                    <div>
                      {filteredMergeables[cat][cardName].map(card => (
                        <div
                          className={`card-line star${card.tier}`}
                          id={"mergeable-" + card.uid}
                        >
                          <span>{`${card.tier}s - ${card.name} - ${card.uid}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          id='new-subcat-input-button'
          onClick={props.closeModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MergeablesModal;
