import { combineReducers } from "redux";
import trucksReducer from "./slices/trucksSlice";

const rootReducer = combineReducers({
  trucks: trucksReducer,
});

export default rootReducer;
