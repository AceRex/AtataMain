import React, { Component } from "react";
import SmallCard from "./smallCard";
import "./categoryCard.css";

class CategoryCard extends Component {
  render() {
  const chevronWidth = 40;
    
    return (
      <div
        style={{ padding: `0 ${chevronWidth}px` }}
        className="items-card-container"
      >
        <p className="header">Top From All Categories</p>
        
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
