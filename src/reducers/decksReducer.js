const decksReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DECK_DATA':
    	return action.data || state

    case "ADD_DECK":
      let newDeck = { name: action.name, id: action.id };
      return state.concat([newDeck]);

    default:
      return state || [];
  }
};

export default decksReducer;
