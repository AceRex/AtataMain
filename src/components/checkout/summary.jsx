import React from 'react'
import './mainCheckout.css'
import NumberFormat from "react-number-format";

function ItemInCart() {
    return (
        <div className='item-in-cart'>
            <div className="items-in-cart-details">
                <p>Ankara Sneaker made in Ghana</p>
                <span>Unit Price
                    <NumberFormat
                        className={"px-1"}
                        value={5000}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                    />
                X3
                </span>
            </div>
            <div className="items-in-cart-amount">
                <NumberFormat
                    className={"px-1"}
                    value={15000}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                />
            </div>
        </div>
    )
}

export default function summary() {
    return (
        <div className='summary-container'>
            <div className='item-summary'>
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
            </div>
            <div className='total-container'>
                <div className='ttl'>
                    <p>Subtotal</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={15000}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                        />
                    </p>

                </div>
                <div className='ttl'>
                    <p>VAT(10%)</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={1500}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                        />
                    </p>

                </div>

            </div>
            <div className="total-amount">
                <div className='ttl'>
                    <p>Total</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={16500}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}