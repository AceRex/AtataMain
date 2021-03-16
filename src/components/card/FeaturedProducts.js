import React from "react";
import SmallCard from "./smallCard";
import "./categoryCard.css";

function CategoryCard({ productsData }) {
  return (
    <div
      className="items-card-container"
    >
      <p className="header">Featured Products</p>

      <div className="items-card-display">
        {productsData.map((item) => (
          <SmallCard productsData={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;
