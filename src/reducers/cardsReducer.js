const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CARD_DATA':
    	return action.data || state

    case "ADD_CARD":
      let newCard = Object.assign({}, action.data, {
        score: 1
      });

      return state.concat([newCard]);

    case "UPDATE_CARD":
      let cardUpdate = action.data;
      return state.map(
        card =>
          card.id !== cardUpdate.id ? card : Object.assign({}, card, cardUpdate)
      );

    case "DELETE_CARD":
      return state.filter(c => c.id !== action.data);

    default:
      return state || [];
  }
};

export default cardsReducer;
