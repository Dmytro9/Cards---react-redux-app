const searchReducer = (state, action) => {
  if (action.type === "SEARCH_CARD") {
    return action.data;
  } else {
    return state || "";
  }
};

export default searchReducer;
