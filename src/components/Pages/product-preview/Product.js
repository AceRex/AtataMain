import React, { useState, useEffect } from "react";
import ImagePreview from "./imageView/imagePreview";
import Order from "./orderInput/OrderMain";
import "./productMain.css";
// import SmallCard from "../../card/smallCard";
import { connect } from 'react-redux'
import { addToCart } from "../../../Redux/ShoppingCart/Shopping_Actions"

function Product({ currentItem, addToCart}) {
  const ScrollToToponMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null
  }

  return (
    <>
      <div className="prd-contaniner">
        <>
          <ScrollToToponMount />
          <section className="prd-display">
            <div className="imagePreview">
              <ImagePreview image={currentItem.img} />
            </div>
            <div className="order">
              <Order products={currentItem} />
              <button
              className='add-to-cart'
                onClick={() => addToCart(currentItem._id)}
              >
                Add to Cart
        </button>
            </div>
          </section>
          <section className="prd-details-display">
            <p className="header">Product Details</p>
            <div className="item-description">
              <div className="item-group">
                <p>Description: </p>
                <span className="description">{currentItem.Description}</span>
              </div>
              <div className="item-group">
                <p>General Specification: </p>
                <span className="description">
                  <li>
                    Item ID: <p>{currentItem.GeneralSpecs.ID}</p>
                  </li>
                  <li>
                    Color: <p>{currentItem.GeneralSpecs.Color}</p>
                  </li>
                  <li>
                    Material: <p>{currentItem.GeneralSpecs.Material}</p>
                  </li>
                  <li>
                    Product Country:{" "}
                    <p>{currentItem.GeneralSpecs.ProductCountry}</p>
                  </li>
                  <li>
                    Product Label:{" "}
                    <p>{currentItem.GeneralSpecs.ProductLabel}</p>
                  </li>
                  <li>
                    Weight(kg): <p>{currentItem.GeneralSpecs.Weight}</p>
                  </li>
                </span>
              </div>
            </div>
          </section>
          <section className="prd-details-display">
            <p className="header">Customer Feedback</p>
          </section>
          {/* <section className="prd-details-display">
              <p className="header">Related Items</p>
              <div className=" prd-items">
              {Categories.RecentlyViewed.map((items) => (

                  <li>
                    <SmallCard
                      _id={items._id}
                      img={items.img}
                      category={items.category}
                      title={items.title}
                      amount={items.amount}
                      addToCart={props.addToCart}
                    />
                  </li>
                ))}
              </div>
            </section> */}
          {/* <section className="prd-details-display">
              <p className="header">Recently viewed Items</p>
              <div className="prd-items">
                {Categories.RecentlyViewed.map((items) => (
                  <li key={items.id}>
                    <SmallCard
                      _id={items._id}
                      img={items.img}
                      category={items.category}
                      title={items.title}
                      amount={items.amount}
                      addToCart={props.addToCart}
                    />
                  </li>
                ))}
              </div>

            </section> */}
        </>


      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}
const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
