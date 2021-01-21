import React from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import process from "../../../../Redux/addToCart";
import { addCartItem } from "../../../../Redux/addToCart"
import '../productMain.css'


export default function AddToCartBtn() {
    const dispatch = useDispatch();
    return (
        <Provider store={process}>
            <button className='add-to-cart' onClick={() => dispatch(addCartItem("Hello"))}>Add to Cart </button>
        </Provider>
    )
}