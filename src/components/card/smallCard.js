import React from "react";
import "./categoryCard.css";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BiShowAlt } from "react-icons/bi";
import { connect, useSelector } from "react-redux";
import { addToCart, loadCurrentItem } from "../../Redux/ShoppingCart/Shopping_Actions"

function ItemCards({ productsData, addToCart, loadCurrentItem }) {

  const activeCurrency = useSelector((activeCurrency) => activeCurrency);
  const value = activeCurrency.currencyReducer.defaultValue;

  return (

    <div className="item-card">
      <div className="Card-top ">
        <span className="category">
          <Link to={`/category/${productsData.category}`}>{productsData.category}</Link>
        </span>
        <p>{productsData.title}</p>
      </div>
      <div className="image-container">
        <img src={productsData.img} alt={productsData.title} />
      </div>
      <div className="card-bottom">
        <div className="amount">
          <small>Price</small>
          <NumberFormat
            className={"px-1"}
            value={productsData.price * value.currencyRate}
            displayType={"text"}
            thousandSeparator={true}
            prefix={value.currencySymbol}
          />
        </div>
        <div className="addToCartBtn">
          <Link to={`/product/${productsData._id}`}>
            <button
              className='view__item'
              onClick={() => loadCurrentItem(productsData)}
            >
              <BiShowAlt />

            </button>
          </Link>
          <button
            className='addtocart'
            onClick={() => addToCart(productsData._id)}
          >
            <FiShoppingCart />

          </button>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}
function mapStateToProps(state) {
  return {
    activeCurrency: state.activeCurrency,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCards);
