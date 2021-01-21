import React, { Component } from 'react'
import styled from 'styled-components'
import {Data} from '../../../../dummyUserData'

class ItemName extends Component {
  render() {
    return (
        <div>
        <Item>
            <p>Men's Designer Long Sleeve Dress Shirt White</p>
            <span>Category: <p>{Data.product.category}</p></span>
            <p className='amount'>₦{Data.product.amount}</p>
        </Item>     
      </div>
    )
  }
}

const Item = styled.div`
padding: 10px;
p{
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 7px;
}
span{
  display: flex;
    font-size: 14px;
    margin-bottom: 10px;
    p{
    font-size: 13px;
    margin: 0px 20px;
    }
}

.amount{
  font-size: 30px;
  font-weight: 600;
}


`

export default ItemName;
