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
      <p className="header">Latest Items</p>
     
            <div className="items-card-display">
              {this.props.products.map((items) => (
                <SmallCard
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
