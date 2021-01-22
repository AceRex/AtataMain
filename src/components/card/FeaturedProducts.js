import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import SmallCard from "./smallCard";
import "./categoryCard.css";
import Data from "../../data.json";

function CategoryCard() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const Steps = ["", ""];
  const products = Data.products;

  return (
    <div
      style={{ padding: `0 ${chevronWidth}px` }}
      className="items-card-container"
    >
      <p className="header">Featured Products</p>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button className="left-btn">{"<"}</button>}
        rightChevron={<button className="right-btn">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {Steps.map(() => {
          return (
            <div className="items-card-display">
              {products.map((items) => (
                <SmallCard
                  _id={items._id}
                  img={items.img}
                  category={items.category}
                  title={items.title}
                  amount={items.amount}
                />
              ))}
            </div>
          );
        })}
      </ItemsCarousel>
    </div>
  );
}

export default CategoryCard;
