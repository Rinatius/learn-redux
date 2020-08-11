import {combineReducers} from "redux";
import crementReducer from "./slices/crement"
import storageReducer from "./slices/storage"

export default combineReducers({
  crement: crementReducer,
  storage: storageReducer
})