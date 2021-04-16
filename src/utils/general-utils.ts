import { ICard } from 'model/card.model';

export const cardSort = (card1:ICard, card2:ICard) => {
  if (card1.name === card2.name) {
    if (card1.tier > card2.tier) {
      return -1;
    } else if (card1.tier > card2.tier) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (card1.name < card2.name) {
      return -1;
    } else {
      return 1
    }
  }
};