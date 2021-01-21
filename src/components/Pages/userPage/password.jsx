import React from 'react'
import './userpage.css'
import { IoIosArrowBack } from 'react-icons/io'

export default function Order() {
    return (
        <div className='order-container'>
            <div className='order-container'>
                <form>
                    <div className='form-group'>
                        <label>Current Password <span>*</span></label>
                        <input type='address' placeholder='Firstname' />
                    </div>
                    <div className='form-group'>
                        <label>New Password <span>*</span></label>
                        <input type='address' placeholder='Firstname' />
                    </div>
                    <div className='form-group'>
                        <label>Retype New Password <span>*</span></label>
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