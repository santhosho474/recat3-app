import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { AdminLoginReducer } from "./AdminLoginReducer";
import { UserLoginReducer } from "./UserLoginReducer";
import { UserReducer } from "./UserReducer";
import {MechanicReducer} from "./MechanicReducer";
const rootReducer = combineReducers({
  user: UserReducer,
  UserLogin: UserLoginReducer,
  AdminLogin: AdminLoginReducer,
  mechanic: MechanicReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
