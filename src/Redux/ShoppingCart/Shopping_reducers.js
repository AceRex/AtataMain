import * as actionsTypes from './Shopping_types'
import { products } from '../../data.json'

const INITIAL_STATE = {
    products: products,
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {


    switch (action.type) {
        
        case actionsTypes.ADD_TO_CART:
            // passing Items Data from products key
            const item = state.products.find((prod) => prod._id === action.payload.id);
            // check if item is already in cart
            const inCart = state.cart.find((item) => item._id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item._id === action.payload.id ? { ...item, qty: item.qty + 1 }
                    : item) : [...state.cart, { ...item, qty: 1 }],
            }
        case actionsTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id === action.payload.id),

            }
        case actionsTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        case actionsTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state;
    }
};


export default shopReducer;