import React, { useState } from 'react'
import "./error.css"


export default function InlineERR({ message }) {
    return (
        <p className=
            {message !== "" ? 'inline__ERR' : 'hidden'}>
            {message}
        </p>
    )
}