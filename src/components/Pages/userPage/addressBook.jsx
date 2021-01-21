import React from 'react'
import './userpage.css'
import {IoIosArrowBack} from 'react-icons/io'




export default function Order(){
    return(
        <div className='order-container'>
            <div className='order-container'>
                <form>
                    <div className='form-group'>
                        <label>Contact Address <span>*</span></label>
                        <input type='address' placeholder='Firstname' />
                    </div>
                    <div className='form-group'>
                        <label>Delivery Address <span>*</span></label>
                        <input type='address' placeholder='Firstname' />
                    </div>
                    <div className='order-btn'>
                        <button className='bck-btn'><IoIosArrowBack /></button>
                        <button className='save'>Save</button>

                    </div>

                </form>
            </div>
        </div>
    )
}