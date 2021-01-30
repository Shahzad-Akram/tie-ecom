import loginUser from "./loginUser";
import signInModal from "./signInModal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: loginUser,
  signIn: signInModal,
});

export default allReducers;
