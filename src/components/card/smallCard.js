import React from "react";
import "./categoryCard.css";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { Component } from "react";
// import Data from "../../data.json";

class ItemCards extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cartItems: Data.Cart,
  //     products: Data.products,
  //   };
  // }
  
  handleClick = (e) => {
    e.preventDefault();
    this.addToCart(this.state.products);
  };
  render() {
    
    return (
      <Link to="/product-page">
        <div className="item-card">
          <div className="image-container">
            <img src={this.props.img} alt={this.props.title} />
          </div>
          <div className="Card-top">
            <p>{this.props.title}</p>
            <span className="category">
              Category: <Link to="/">{this.props.category}</Link>
            </span>
          </div>
          <div className="amount">
            <NumberFormat
              className={"px-1"}
              value={this.props.amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </div>
          <div className="addToCartBtn">
            <button
              onClick={() =>this.props.addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default ItemCards;
