import redux, {createStore} from 'redux'

export function addCartItem(item) {
  return {
    type: "ADD_CART_ITEM",
    payload: item,
  };
}
export function removeCartItem(item) {
  return {
    type: "REMOVE_CART_ITEM",
  };
}
const initialState = {
  cartItem: [true, 2],
};

function addToCartReducer(shoppingCart = initialState.cartItem.length, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return  [...shoppingCart.cartItem, action.payload]
    case "REMOVE_CART_ITEM":
      return {
        ...shoppingCart,
      };
    default:
      return shoppingCart;
  }
}

const process = createStore(addToCartReducer);
process.subscribe(() => {
  console.log(process.getState());

});
export default process