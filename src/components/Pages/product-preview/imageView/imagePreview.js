import React, { Component } from "react";
import Img3 from '../Images/3.png';
import '../productMain.css'



class ImagePreview extends Component {
    
  constructor(props){
    super(props)
    
    this.state = {
      mainUrl: Img3,
    }
    this.Swap = this.Swap.bind(this)

  }
  Swap(url){
    this.setState({mainUrl: url})
  };
  
  render() {
    
    return (
      <div className='image-section'>
        <div className="Preview">
          <img src={this.props.img} alt='img' id="main" />
        </div>
       
      </div>
    );
  }
}



export default ImagePreview;
