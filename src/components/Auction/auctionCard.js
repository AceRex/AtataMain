import React from "react";
import "./auction.css";
import img from "./sculpture.png";

export default function AuctionCard(props) {
  return (
    <div className="auction-card">
      <div className="auction-top">
        <div className="image-container">
          <img src={img} />
        </div>
        <div className="auction-details">
          <div className="bids">
            <p className='highest-bider'>Highest Bid: $9000 </p>
            <p className='previous-bider'>Previous Bid: $8000 </p>
            <p className='previous-bider'> Bid Opens: $1000</p>
          </div>
          <div className="max-amount">
            <p> max-bid $1000</p>
          </div>
          <div className="auction-timer">
            <span>Time Left:</span>
            <div className="time">
              <p className="hh">01</p> : <p className="mm">50</p>
            </div>
          </div>
        </div>
      </div>
      <button className="place-btn">Place Bid</button>
    </div>
  );
}
