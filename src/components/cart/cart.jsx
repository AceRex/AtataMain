import React, { useState, useEffect } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import CartCard from './cartCard'
import { TiShoppingCart } from 'react-icons/ti'
import NumberFormat from "react-number-format";
import { connect, useSelector } from 'react-redux'
import axios from 'axios'

function Cart(props) {

    const activeCurrency = useSelector((activeCurrency) => activeCurrency);
    const value = activeCurrency.currencyReducer.defaultValue;
    const [cartItem, setCartItem] = useState(props.cart)
    const [currency, setCurrency] = useState(value)
    const [rate, setRate] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let price = 0;

        cartItem.forEach(item => {
            price += item.qty * item.price;
        })
        setTotal(price)

    }, [cartItem, total]);

    return (
        <>
            {cartItem.length === 0 ?

                // if Cart is empty return the below

                <div className='emptyCart'>
                    <TiShoppingCart className='icon' />
                    <span>Cart is Empty</span>
                </div>
                :
                // if Cart has items in it return the below
                <>
                    <div className="cart-container">
                        {cartItem.map((item) => (
                            <CartCard key={item.id} itemData={item} currency={currency} />
                        ))
                        }

                    </div>
                    <div className='total-amount'>
                        <span>Total price:</span>
                        <p>
                            <NumberFormat
                                className={"px-1"}
                                value={total * value.currencyRate}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={value.currencySymbol}
                            />
                        </p>
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

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        activeCurrency: state.activeCurrency
    }
}

export default connect(mapStateToProps)(Cart);
