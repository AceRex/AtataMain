// import redux, {createStore} from 'redux'

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
  cartItem: [],
};

function addToCartReducer(shoppingCart = initialState, action) {
  console.log(shoppingCart)
  switch (action.type) {
    case "ADD_CART_ITEM":
      const newstate = [...shoppingCart.cartItem]
      newstate.push(action.payload);

      return {
        ...shoppingCart,
        cartItem: newstate,
      }
    case "REMOVE_CART_ITEM":
      return {
        ...shoppingCart, 
        // filter by item ID
      };
    default:
      return shoppingCart;
  }
}

// const process = createStore(addToCartReducer);
// process.subscribe(() => {
//   console.log(process.getState());

// });
export default addToCartReducer