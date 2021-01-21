import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import SmallCard from "./smallCard";
import Categories from "../Pages/Categories/CategoriesData";
import "./categoryCard.css";

function CategoryCard() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
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
        <div className="items-card-display">
          {Categories.Items.map((items) => (
            <SmallCard
              img={items.img}
              category={items.category}
              title={items.title}
              amount={items.amount}
            />
          ))}
        </div>
        <div className="items-card-display">
          {Categories.Items.map((items) => (
            <SmallCard
              img={items.img}
              category={items.category}
              title={items.title}
              amount={items.amount}
            />
          ))}
        </div>
        <div className="items-card-display">
          {Categories.Items.map((items) => (
            <SmallCard
              img={items.img}
              category={items.category}
              title={items.title}
              amount={items.amount}
            />
          ))}
        </div>
      </ItemsCarousel>
    </div>
  );
}

export default CategoryCard;
