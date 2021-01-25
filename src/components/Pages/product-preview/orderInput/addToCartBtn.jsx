import React from 'react'
import { useDispatch} from "react-redux";
import { addCartItem } from "../../../../Redux/addToCart"
import '../productMain.css'


export default function AddToCartBtn() {
    const dispatch = useDispatch();
    return (
            <button className='add-to-cart' onClick={() => dispatch(addCartItem("Hello"))}>Add to Cart </button>
    )
}