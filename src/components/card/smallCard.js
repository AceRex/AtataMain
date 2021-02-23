import React from "react";
import "./categoryCard.css";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { connect, useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/addToCart";

function ItemCards(props) {
  const activeCurrency = useSelector((activeCurrency) => activeCurrency);
  const value = activeCurrency.currencyReducer.defaultValue;

  console.log(activeCurrency.initialState);

  const dispatch = useDispatch();

  return (
    <Link to="/product-page" key={props._id}>
      <div className="item-card">
        <div className="Card-top ">
          <span className="category">
            <Link to="/">{props.category}</Link>
          </span>
          <p>{props.title}</p>
        </div>
        <div className="image-container">
          <img src={props.img} alt="display" />
        </div>
        <div className="card-bottom">
          <div className="amount">
            <small>Price</small>
            <NumberFormat
              className={"px-1"}
              value={props.amount * value.currencyRate}
              displayType={"text"}
              thousandSeparator={true}
              prefix={value.currencySymbol}
            />
          </div>
          <div className="addToCartBtn">
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addCartItem("Hello"));
              }}
            >
                            <FiShoppingCart />

            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
function mapStateToProps(state) {
  return { activeCurrency: state.activeCurrency };
}
export default connect(mapStateToProps)(ItemCards);
