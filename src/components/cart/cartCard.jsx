import React, { Component } from 'react';
import './cart.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import NumberFormat from "react-number-format";


export default class CartCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteItem: this.props.deleteItem,
            cartItems: this.props.cartItems,
            unitPrice: this.props.unitPrice,
            unitQty: this.props.unitQty,
            totalPrice: this.props.totalPrice,
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.setState({
            deleteItem: true,
            totalPrice: null,
        })
    }
    componentDidMount() {
        this.setState({
            totalPrice: this.state.unitPrice * this.state.unitQty
        })
    }
   
    render() {
        return (
            <>
                <div className={this.state.deleteItem ? 'hidden' : 'cart-item'}>
                    <div className="cart-img-container">
                        <img src={this.props.Img} alt='Cartimage' />
                    </div>
                    <div className="cart-item-details">
                        <p>Ankara Sneaker</p>
                        <span>Unit Price: {' '}
                            <NumberFormat
                                className={"px-1"}
                                value={this.state.unitPrice}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            {` x${this.state.unitQty} `}
                        </span>
                        <h6>Seller: My Ankara Store</h6>

                    </div>
                    <div className="cart-item-qty">
                        <NumberFormat
                            className={"px"}
                            value={this.state.totalPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                        />
                    </div>
                    <button onClick={this.handleDelete}
                        className="btn-dlt">
                        <RiDeleteBin6Fill />
                    </button>

                </div>
            </>
        );
    }
}
