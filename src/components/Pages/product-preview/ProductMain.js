import React, { Component } from "react";
import ImagePreview from "./imageView/imagePreview";
import Order from "./orderInput/OrderMain";
import "./productMain.css";
import {products} from '../../../data.json'
import Categories from "../Categories/CategoriesData";
//Header
import Header from "../../header/mainHeader";
//Header
import Footer from "../../footer/footer";
import SmallCard from "../../card/smallCard";
import AddToCartBtn from "./orderInput/addToCartBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: products[1],
    };
  }
  render() {

    return (
      <>
        <Header />
        <div className="prd-contaniner">
          <section className="prd-display">
            <div className="imagePreview">
              <ImagePreview img={this.state.product.img}/>
            </div>
            <div className="order">
              <Order products={this.state.product}/>
              <AddToCartBtn />
            </div>
          </section>
          <section className="prd-details-display">
            <p className="header">Product Details</p>
            <div className="item-description">
              <div className="item-group">
                <p>Description: </p>
                <span className="description">{this.state.product.Description}</span>
              </div>
              <div className="item-group">
                <p>General Specification: </p>
                <span className="description">
                  <li>
                    Item ID: <p>{this.state.product.GeneralSpecs.ID}</p>
                  </li>
                  <li>
                    Color: <p>{this.state.product.GeneralSpecs.Color}</p>
                  </li>
                  <li>
                    Material: <p>{this.state.product.GeneralSpecs.Material}</p>
                  </li>
                  <li>
                    Product Country:{" "}
                    <p>{this.state.product.GeneralSpecs.ProductCountry}</p>
                  </li>
                  <li>
                    Product Label:{" "}
                    <p>{this.state.product.GeneralSpecs.ProductLabel}</p>
                  </li>
                  <li>
                    Weight(kg): <p>{this.state.product.GeneralSpecs.Weight}</p>
                  </li>
                </span>
              </div>
            </div>
          </section>
          <section className="prd-details-display">
            <p className="header">Customer Feedback</p>
          </section>
          <section className="prd-details-display">
            <p className="header">Related Items</p>
            <div className=" prd-items">
              {Categories.RelatedItems.map((items) => (
                <li key={items.id}>
                  <SmallCard
                    _id={items._id}
                    img={items.img}
                    category={items.category}
                    title={items.title}
                    amount={items.amount}
                    addToCart={this.props.addToCart}
                  />
                </li>
              ))}
            </div>
          </section>
          <section className="prd-details-display">
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
                    addToCart={this.props.addToCart}
                  />
                </li>
              ))}
            </div>
            
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
