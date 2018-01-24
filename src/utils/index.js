export const matches = (filter, card) => {
  let bool = null;
  if (filter === "") {
    return true;
  } else {
    bool = card.front.indexOf(filter) !== -1;
  }
  return bool;
};
