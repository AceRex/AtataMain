import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './cart.css'
import Img from './Ankarasneaker.jpg'
import { Link } from 'react-router-dom'
import Data from '../../data.json'
import CartCard from './cartCard'
import {TiShoppingCart} from 'react-icons/ti'

export default function Cart() {
    const CartItem = Data.Cart;
    return (
        <>
            <Header />
            {CartItem.length === 0 ?
            <div className='emptyCart'>
               <TiShoppingCart className='icon' /> 
                <span>Cart is Empty</span>
            </div> :
                <>
                    <div className="cart-container">
                        <CartCard Img={Img} />
                    </div>
                    <div className="total-amount">
                        <span>Total price:</span>
                        <p>#15,000</p>
                    </div>
                    <div className="btns">
                        <button className='cnt-btn'>
                            <Link to='/'>
                                Continue Shopping
                    </Link>
                        </button>
                        <button className="confirm-btn">
                            <Link to='/checkout'>
                                Confirm Payment
                    </Link>
                        </button>
                    </div>
                </>
            }
            <Footer />

        </>
    )
}
