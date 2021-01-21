import React, { useState } from "react";
import "./auction.css";
import AuctionCard from "./auctionCard";
import ItemsCarousel from "react-items-carousel";

export default function Auction() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="Auction">
      <p className="auction-header">Featured Products</p>
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
        <div className="Auction-container">
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
        </div>
      </ItemsCarousel>
    </div>
  );
}
