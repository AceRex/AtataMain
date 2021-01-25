import React from "react";
import SmallCard from "./smallCard";
import "./categoryCard.css";
import { Component } from "react";

class CategoryCard extends Component {

  render(){
  const chevronWidth = 40;

  return (
    <div
      style={{ padding: `0 ${chevronWidth}px` }}
      className="items-card-container"
    >
      <p className="header">Featured Products</p>
    
            <div className="items-card-display">
              {this.props.products.map((items) => (
                <SmallCard
                  _id={items._id}
                  img={items.img}
                  category={items.category}
                  title={items.title}
                  amount={items.amount}
                />
              ))}
            </div>
    </div>
  );
}
}

export default CategoryCard;
