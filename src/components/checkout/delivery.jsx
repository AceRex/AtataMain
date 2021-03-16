import React from 'react'
import './mainCheckout.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Delivery() {
    const [active, setActive] = useState(true)

   
    return (
        <div className='delivery-container'>
            <div className='delivery-add'>
                <div className='delivery-add-top'>
                    <p>Delivery Address </p>
                    <Link to='#'>Change</Link>
                </div>
                <div className='delivery-res'>
                    <span>20, olademiji street, Ikosi-ketu, Lagos state, NG</span>

                </div>
            </div>
            <div className='delivery-add'>
                <div className='delivery-add-top'>
                    <p>Delivery type </p>
                </div>
                <div className='delivery-res'>
                    <span>Pay Before Delivery</span>

                </div>
            </div>
           
        </div>
    )
}