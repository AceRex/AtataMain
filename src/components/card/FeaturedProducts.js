import React from "react";
import SmallCard from "./smallCard";
import "./categoryCard.css";
import { Component } from "react";

class CategoryCard extends Component {
  render() {

    return (
      <div
        className="items-card-container"
      >
        <p className="header">Featured Products</p>

        <div className="items-card-display">
          {this.props.products.map((items) => (
            <li key={items._id}>
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
      </div>
    );
  }
}

export default CategoryCard;
