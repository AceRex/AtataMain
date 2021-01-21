import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './cart.css'
import Img from './Ankarasneaker.jpg'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Cart() {
    return (
        <>
            <Header />
            <div className="cart-container">
                <div className="cart-item">
                    <div className="cart-img-container">
                        <img src={Img} />
                    </div>
                    <div className="cart-item-details">
                        <p>Ankara Sneaker</p>
                        <span>Unit Price: #5000</span>
                        <h6>Seller: My Ankara Store</h6>

                    </div>
                    <div className="cart-item-qty">
                        <p>#15,000</p>
                        <span> x3</span>
                    </div>
                    <button className="btn-dlt"><RiDeleteBin6Fill /></button>

                </div>
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
            <Footer />

        </>
    )
}
