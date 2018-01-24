import { combineReducers } from "redux";
import cardsReducer from "../reducers/cardsReducer";
import decksReducer from "./decksReducer";
import toggleDeckField from "./toggleDeckField";
import searchReducer from "../reducers/searchReducer";
import showBackReducer from "../reducers/showBackReducer";

const appReducer = combineReducers({
  cardsReducer,
  decksReducer,
  toggleDeckField,
  searchReducer,
  showBackReducer
});

export default appReducer;
