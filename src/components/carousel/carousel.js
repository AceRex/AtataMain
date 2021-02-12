import React, { Component } from "react";
import "./carousel.css";
import TextLoop from "react-text-loop";
import IMG1 from "./Images/model-Image.png";
import IMG2 from "./Images/sculpture.png";
import IMG3 from "./Images/zebra.png";
import IMG4 from "./Images/map.png";
import IMG5 from "./Images/art.png";


export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="carousel-container">
        <div className="mobile-loop">
          <TextLoop className="loops1">
          <div className="text1">Home of African Artworks and Handicrafts</div>
          <img src={IMG2} className="image2" alt='img'/>
          <div className='text3'>Animal Skin at ease</div>
          <img src={IMG4} className="image4" alt='img'/>
          <div className='text5'>Buy and Bid for African Painting</div>

        </TextLoop>{" "}
        <TextLoop className="loops2">
          <img src={IMG1} className="image1" alt='img'/>
          <div className="text2">Sculpture at your Click</div>
          <img src={IMG3} className="image3" alt='img'/>
          <div className='text4'>one big african market</div>
          <img src={IMG5} className="image5" alt='img'/>

        </TextLoop>{" "}
        </div>
        <div className="non-mobile-loop">          
        <TextLoop className="loops1">
          <div className="text1">Home of African Artworks and Handicrafts</div>
          <img src={IMG2} className="image2" alt='img'/>
          <div className='text3'>Animal Skin at ease</div>
          <img src={IMG4} className="image4" alt='img'/>
          <div className='text5'>Buy and Bid for African Painting</div>

        </TextLoop>{" "}
        <TextLoop className="loops2">
          <img src={IMG1} className="image1" alt='img'/>
          <div className="text2">Sculpture at your Click</div>
          <img src={IMG3} className="image3" alt='img'/>
          <div className='text4'>one big african market</div>
          <img src={IMG5} className="image5" alt='img'/>

        </TextLoop>{" "}
        </div>
      </div>
    );
  }
}
