import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import rooms from "./room";
 
const rootReducer = combineReducers({ rooms });
export type RootState = ReturnType<typeof rootReducer>;
 
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
 
export default store