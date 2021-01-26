import React from "react";
import "./categoryCard.css";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
// import { Component } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/addToCart";

function ItemCards(props) {
  // handleClick = (e) => {
  //   e.preventDefault();
  //   this.addToCart(this.state.products);
  // };
  const dispatch = useDispatch();

  return (
    <Link to="/product-page" key={props.key}>
      <div className="item-card">
        <div className="image-container">
          <img src={props.img} alt="display" />
        </div>
        <div className="Card-top">
          <p>{props.title}</p>
          <span className="category">
            {/* Category: <Link to="/"></Link> */}
          </span>
        </div>
        <div className="amount">
          <NumberFormat
            className={"px-1"}
            value={2000}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </div>
        <div className="addToCartBtn">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addCartItem("Hello"));
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ItemCards;
