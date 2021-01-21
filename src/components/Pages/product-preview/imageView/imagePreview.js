import React, { Component } from "react";
import styled from "styled-components";
import Img1 from '../Images/1.png';
import Img2 from '../Images/2.png';
import Img3 from '../Images/3.png';
import Img4 from '../Images/4.png';
import Img5 from '../Images/5.png';



class ImagePreview extends Component {
    
  constructor(){
    super()
    
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
      <Preview>
        <div className="ImagePreview">
          <img src={this.state.mainUrl} id="main" />
        </div>
        {/* <div className="ImageList">
          <li>
           <img src={Img1} onClick={()=> this.Swap(Img1)} id="p-img" />
          </li>
          <li>
            <img src={Img2} onClick={()=> this.Swap(Img2)} id="p-img" />
          </li>
          <li>
            <img src={Img3} onClick={()=> this.Swap(Img3)} id="p-img" />
          </li>
          <li>
            <img src={Img4} onClick={()=> this.Swap(Img4)} id="p-img" />
          </li>
          <li>
            <img src={Img5} onClick={()=> this.Swap(Img5)} id="p-img" />
          </li>
        </div> */}
      </Preview>
    );
  }
}



const Preview = styled.div`
  width: 100%;
  margin: auto;
  .ImagePreview {
    border: solid 1px var(--colorAsh);
    width: 90%;
    height: 350px;
    margin: auto;
    padding: auto;
    overflow: hidden;
    img {
      width: 550px;
      height: 500px;
    }
  }
  .ImageList {
    width: 90%;
    margin: auto;
    margin-top: 3px;
    padding: 10px;
    display: flex;
    list-style-type: none;
    background-color: var(--colorAsh);

    li {
      border: solid 1px var(--colorAsh);
      overflow: hidden;
      width: 50%;
      height: 80px;
      margin: auto;
      margin: 0 1px;

      img {
        width: 100px;
        height: 80px;
      }
    }
  }
`;
export default ImagePreview;
