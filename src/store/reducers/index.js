import { combineReducers } from "redux";
import { resultReducer } from "./result";
const rootReducers = combineReducers({
  resultReducer: resultReducer,
});

export default rootReducers;
