import { ICard } from "model/card.model";
import { Sort } from './constants';

export const CARD_INPUT_REGEX = /(^:[1-5](star128|_star):\W*-\W*(.+)\W*-\W*[0-9]{4}$)|(^[1-5](s|star)?[\s-]{1}(.+)[\s-]{1}[0-9]{4}$)/;

export const sortCardByNameAscTierDiscUIDAsc = (card1: ICard, card2: ICard) => {
  if (card1.name === card2.name) {
    if (card1.tier > card2.tier) {
      return -1;
    } else if (card1.tier < card2.tier) {
      return 1;
    } else {
      return card1.uid - card2.uid;
    }
  } else {
    if (card1.name < card2.name) {
      return -1;
    } else {
      return 1;
    }
  }
};

export const sortCardByTierDiscNameAscUIDAsc = (card1: ICard, card2: ICard) => {
  if (card1.tier === card2.tier) {
    if (card1.name < card2.name) {
      return -1;
    } else if (card1.name > card2.name) {
      return 1;
    } else {
      return card1.uid - card2.uid;
    }
  } else {
    if (card1.tier > card2.tier) {
      return -1;
    } else {
      return 1;
    }
  }
}

export const handleSort = (sort: Sort) => (card1: ICard, card2: ICard) => {
  switch (sort) {
    case Sort.TierFirst:
      return sortCardByTierDiscNameAscUIDAsc(card1, card2);
    case Sort.NameFirst:
      return sortCardByNameAscTierDiscUIDAsc(card1, card2);
    default:
      return sortCardByNameAscTierDiscUIDAsc(card1, card2);
  }
};

export const parseCard = (line: string) => {
  console.log(line);
  let tier = 0;
  let uid = 0;
  let name = "";
  if (line?.[0] === ":") {
    // copied from inv
    if (!/^:[0-5](star128|_star):/.test(line)) return null;

    tier = Number(line[1]);
    const temp_vals = [
      ...line.split("-").map((word: string) => word.trim()),
    ].filter(w => w.length > 0); // remove empty words
    uid = Number(temp_vals[temp_vals.length - 1]);
    name = line
      .slice(line.indexOf(temp_vals[1]), line.indexOf(uid + "") - 1)
      .trim();
    if (name[name.length - 1] === '-') {
      name = name.slice(0, name.length-2).trim();
    }
  } else {
    if (!/^[1-5][^0-9]+/.test(line)) return null;
    let temp_vals = [];

    temp_vals = [...line.split("-").map((word: string) => word.trim())].filter(
      w => w.length > 0
    );

    const numberPattern = /\d+/g;

    tier = Number(temp_vals[0].match(numberPattern)?.[0]) || 0;
    uid = Number(temp_vals[temp_vals.length - 1]);
    name = line
      .slice(line.indexOf(temp_vals[1]), line.indexOf(uid + "") - 1)
      .trim();
    if (name[name.length - 1] === '-') {
      name = name.slice(0, name.length-2).trim();
    }

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

export const dataCheck = (tier: number, name: string, uid: number) => {
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

export const fireSubmitOnEnter = (e: any, elementId: string) => {
  if (e.key === "Enter") {
    document.getElementById(elementId)?.click();
  }
};
