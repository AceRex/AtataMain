import React from "react";
import "./categoryCard.css";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

function ItemCards(props) {
  return (
    <Link to="/product-page">
      {" "}
      <div className="item-card">
        <div className="image-container">
          <img src={props.img} />
        </div>
        <div className="Card-top">
          <p>{props.title}</p>
          <span className="category">
            Category: <Link to="/">{props.category}</Link>
          </span>
        </div>
        <div className="amount">
          <NumberFormat
            className={"px-1"}
            value={props.amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </div>
      </div>
    </Link>
  );
}

export default ItemCards;
