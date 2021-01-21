import React from 'react'
import './mainCheckout.css'


export default function CustomerDetails() {
    return (
        <div className='customer-details-container'>
            <div className='customer-details'>
                <p className='heading'> Confirm your details</p>
                <div className='details'>
                    <span>Fullname</span>
                    <div className='response'>
                        <h6>FirstName</h6>
                        <h6>SecondName</h6>
                        <h6>ThirdName</h6>
                    </div>
                    <span>Contact Address</span>
                    <div className='response'>
                        <h6> 20, olademiji street, Ikosi-ketu, Lagos state, NG</h6>         
                    </div>
                    <span>Delivery Address</span>
                    <div className='response'>
                        <h6> 20, olademiji street, Ikosi-ketu, Lagos state, NG</h6>         
                    </div>
                    <span>Postal Code</span>
                    <div className='response'>
                        <h6> +23401</h6>         
                    </div>
                    <span>Contact Phone Number 1</span>
                    <div className='response'>
                        <h6> +234 7034 6789 345</h6>         
                    </div>
                    <span>Contact Phone Number 2</span>
                    <div className='response'>
                        <h6> Not Available</h6>         
                    </div>
                    <span>Email</span>
                    <div className='response'>
                        <h6> example@example.com</h6>         
                    </div>
                </div>
            </div>
        </div>
    )
}