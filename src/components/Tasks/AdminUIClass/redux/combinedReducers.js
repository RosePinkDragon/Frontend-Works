import loginReducers from "./reducers/loginReducers";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
  loginReducers: loginReducers,
});

export default combinedReducers;
