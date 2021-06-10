import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { AdminLoginReducer } from "./AdminLoginReducer";
import { UserLoginReducer } from "./UserLoginReducer";
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  UserLogin: UserLoginReducer,
  AdminLogin: AdminLoginReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
