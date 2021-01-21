import React from 'react'
import './categoriespage.css'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Banner2 from "../categoryImages/cart-banner1.png";
import Banner3 from "../categoryImages/cart-banner2.png";
import Banner4 from "../categoryImages/cart-banner3.png";


export default function CarouselSlider() {
    return (
      <div className="Cart-slider">
        <AliceCarousel autoPlay autoPlayInterval="4000">
          <img src={Banner2} className='cart-slider-image' />
          <img src={Banner3} />
          <img src={Banner4} />
        </AliceCarousel>
      </div>
    );
  }