import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function LoginDropDown(){
    return(
        <Links className="d-flex">
            <li><Link to='/signin'>Login</Link></li>
            <li> or </li>
            <li><Link to='/Register'>Register</Link></li>
        </Links>

    )
}

const Links = styled.div`
list-style-type: none;
font-size: 14px;
li{
    margin: 3px;
    
a:hover{
    font-weight: 700px;
}
}
`

export default LoginDropDown;