import React from 'react'
import './userpage.css'
import {IoIosArrowBack} from 'react-icons/io'


export default function Order(){
    return(
        <div className='order-container'>
            <form>
                <div className='form-group'>
                    <label>First Name <span>*</span></label>
                    <input type='text' placeholder='Firstname' />
                </div>
                <div className='form-group'>
                    <label>Last Name <span>*</span></label>
                    <input type='text' placeholder='Firstname' />
                </div>
                <div className='form-group'>
                    <label>Email <span>*</span></label>
                    <input type='email' placeholder='email' />
                </div>
                <div className='form-group'>
                    <label>Phone Number <span>*</span></label>
                    <input type='phone number' placeholder='phone number' />
                </div>
                <div className='order-btn'>
                    <button className='bck-btn'><IoIosArrowBack/></button>
                    <button className='save'>Save</button>

                </div>
                
            </form>
        </div>
    )
}