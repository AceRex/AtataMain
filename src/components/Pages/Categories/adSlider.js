import React from 'react'
import './categoriespage.css'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AdsBanner from "../categoryImages/ADS.png";
import AdsBanner1 from "../categoryImages/ADS1.png";
import AdsBanner2 from "../categoryImages/ADS2.png";


export default function AdsSlider() {
  return (
    <div className="Ads-slider">
      {/* <AliceCarousel autoPlay autoPlayInterval="4000">
        <img src={AdsBanner} />
        <img src={AdsBanner1} />
        <img src={AdsBanner2} />
      </AliceCarousel> */}
    </div>
  );
}