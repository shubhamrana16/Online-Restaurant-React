import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";

 const RootReducer = combineReducers({
          login: loginReducer,
 });

 export default RootReducer;