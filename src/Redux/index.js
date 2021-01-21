import {combineReducers, createStore} from "redux";
import countReducer from "./count";
import addToCartReducer from "./addToCart";

const rootReducer =  combineReducers({
  countReducer,
  addToCartReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store