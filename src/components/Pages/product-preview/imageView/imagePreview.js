import React, { Component } from "react";
import Img3 from '../Images/3.png';
import '../productMain.css'



function ImagePreview ({image}) {
    
    return (
      <div className='image-section'>
        <div className="Preview">
          <img src={image} alt='img' id="main" />
        </div>
       
      </div>
    );
  }


export default ImagePreview;
