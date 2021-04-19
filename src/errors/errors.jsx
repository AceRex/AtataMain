import React, { useState } from 'react'
import "./error.css"
import { MdError } from 'react-icons/md'
import Fade from 'react-reveal/Fade';
import {IoCheckmarkCircle} from 'react-icons/io5'
import {VscInfo} from 'react-icons/vsc'
import {IoAlertCircle} from 'react-icons/io5'

export default function ErrorAlert(props) {
    const [close, setClose] = useState(false)
    let ERR_POP = setTimeout(() => {
        return (
            <Fade right>
            <div className=
            // {close ?
             'success' 
            // : props.ERR_TYPE}
            >
                <div className='icon'>{props.ERR_TYPE === 'error' ? <MdError /> : ' '}</div>
                <div className='icon'>{props.ERR_TYPE === 'success' ? <IoCheckmarkCircle/> : ' '}</div>
                <div className='icon'>{props.ERR_TYPE === 'info' ? <VscInfo/> : ' '}</div>
                <div className='icon'>{props.ERR_TYPE === 'warning' ? <IoAlertCircle/> : ' '}</div>
                <div className="msg__">
                    <p>{props.ERR_TYPE}</p>
                    {props.ERR_MSG}
                </div>
            </div>
            </Fade>
        )
    }, 1000)

    clearTimeout(ERR_POP)
    return ERR_POP
    
}
