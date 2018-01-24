const showBackReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_BACK":
      return action.data || false;

    default:
      return state || false;
  }
};

export default showBackReducer;
