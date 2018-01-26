import {
  createStore
  // applyMiddleware
} from "redux";
import appReducer from "../reducers/index";
// import reduxThunk from 'redux-thunk'
// import {fetchData} from '../actions'

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(reduxThunk)
);

// function save() {
// 	let state = store.getState()
//
// 	fetch('/api/data', {
// 		method: 'POST',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			decks: state.decksReducer,
// 			card: state.cardsReducer
// 		})
// 	})
// }




// store.dispatch(fetchData())

export default store;
