import {combineReducers, createStore} from "redux";
import countReducer from "./count";
import addToCartReducer from "./addToCart";
import currencyReducer from "./currency"
import shopReducer from './ShoppingCart/Shopping_reducers'


const rootReducer =  combineReducers({
  shop: shopReducer,
  count: countReducer,
  cart: addToCartReducer,
  currencyReducer,
});

const store = createStore(rootReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
export default store