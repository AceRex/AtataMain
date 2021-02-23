import {combineReducers, createStore} from "redux";
import countReducer from "./count";
import addToCartReducer from "./addToCart";
import currencyReducer from "./currency"

const rootReducer =  combineReducers({
  count: countReducer,
  cart: addToCartReducer,
  currencyReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store