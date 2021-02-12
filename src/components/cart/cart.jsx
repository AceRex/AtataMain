import React from 'react'
import Header from '../header/mainHeader'
import Footer from '../footer/footer'
import './cart.css'
import Img from './Ankarasneaker.jpg'
import { Link } from 'react-router-dom'
import {carts} from '../../data.json'
import CartCard from './cartCard'
import { TiShoppingCart } from 'react-icons/ti'
import { Component } from 'react'
import NumberFormat from "react-number-format";


export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: carts,
            img: Img,
            // // unitPrice: carts.amount,
            // unitQty: 3,
            // totalPrice: null,
            deleteItem: true,

        }

    }

    componentDidMount() {
        this.setState({
            totalPrice: this.state.unitPrice * this.state.unitQty
        })
    }
    // componentDidUpdate() {
    //         this.setState({
    //             totalPrice: 0
    //         })
    //     }

    render() {

        return (
            <>
                <Header />
                {this.state.cartItem.length === 0 ?
                    <div className='emptyCart'>
                        <TiShoppingCart className='icon' />
                        <span>Cart is Empty</span>
                    </div> :
                    <>
                        <div className="cart-container">
                            {/* {this.state.cartItem.map((items) => ( */}
                                <CartCard
                                    Img={this.state.Img}
                                    unitPrice={carts.amount}
                                    unitQty={carts.qty}
                                    totalPrice={this.state.totalPrice}
                                    deleteItem={this.state.deleteItem}
                                />
                             {/* ))
                            } */}

                        </div>
                        <div className='total-amount'>
                            <span>Total price:</span>
                            <p>
                                <NumberFormat
                                    className={"px-1"}
                                    value={this.state.totalPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₦"}
                                />
                            </p>
                        </div>
                        <div className="btns">
                            <button className='cnt-btn'>
                                <Link to='/'>
                                    Continue Shopping
                    </Link>
                            </button>
                            <button className="confirm-btn">
                                <Link to='/checkout'>
                                    Confirm Payment
                    </Link>
                            </button>
                        </div>
                    </>
                }
                <Footer />

            </>
        )
    }
}
