import { combineReducers } from "redux";
import trucksReducer from "./slices/trucksSlice";
import catalogReducer from "./slices/catalogSlice";

const rootReducer = combineReducers({
  trucks: trucksReducer,
  catalog: catalogReducer,
});

export default rootReducer;
