import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import SmallCard from "./smallCard";
import "./categoryCard.css";
import Data from "../../data.json";

function CategoryCard() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const Steps = ["", "",""];
  const product = Data.products

  return (
    <div
      style={{ padding: `0 ${chevronWidth}px` }}
      className="items-card-container"
    >
      <p className="header">Latest Items</p>
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
              {product.map((items) => (
                <SmallCard
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
