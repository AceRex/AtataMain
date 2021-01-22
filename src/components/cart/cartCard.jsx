import React from 'react';
import './cart.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'


export default function CartCard(props) {
    return (
        <>
            <div className="cart-item">
                <div className="cart-img-container">
                    <img src={props.Img} alt='Cartimage' />
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
        </>
    );
}
