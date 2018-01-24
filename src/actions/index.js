export const newDeck = (name, id) => ({ type: "ADD_DECK", name: name, id: id });
export const showAddDeck = () => ({ type: "SHOW_ADD_DECK" });
export const hideAddDeck = () => ({ type: "HIDE_ADD_DECK" });

export const addCard = card => ({ type: "ADD_CARD", data: card });
export const updateCard = card => ({ type: "UPDATE_CARD", data: card });
export const deleteCard = cardId => ({ type: "DELETE_CARD", data: cardId });
export const searchCard = query => ({ type: "SEARCH_CARD", data: query });

export const setShowBack = back => ({ type: "SHOW_BACK", data: back });

// export const receiveData = data => ( { type: 'RECEIVE_DATA', data: data } )

// export const fetchData = () => {
// 	return dispatch => {
//
// 		fetch('/api/data')
// 			.then(res => res.json())
// 			.then(json => dispatch(receiveData(json)))
// 			.catch(error => console.log(error))
// 	}
// }
