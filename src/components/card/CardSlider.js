import React from "react";
import styled from "styled-components";
import SliderCard from "./slidercard/SliderCardforMadeinAfrica";
import { Link } from "react-router-dom";

function Card() {
  return (
    <PreviewCard>
      <div className="Content">
        <p>Made in Africa</p>
        <h5 className="sm-text">Click the button below to see more</h5>
        <Link to='/' className="content_btn">View More</Link>
      </div>
      <div className="slides">
        <SliderCard />
      </div>
    </PreviewCard>
  );
}

const PreviewCard = styled.div`
  width: 90%;
  margin:auto;
  height: 270px;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  background-color: #660404;
  padding: 5px;


  .Content {
    color: var(--colorWhite);
    width: 30%;
    font-size: 2rem;
    margin-top: 40px;
    padding-left: 15px;
    p {
      font-weight: bold;
    }
    .sm-text {
      font-size: 15px;
      padding-left: 10px;
    }
  }
  .content_btn {
    width: 20px;
    background-color: Black;
    color: var(--colorWhite);
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: -10%;
    margin-left: 10px;
  }
  .slides {
    width: 70%;
  }

  
@media screen and (max-width: 1080px) {
  flex-direction: column;
  height: 280px;
  .slides {
    width: 100%;
  }
  
  .Content{ 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    p{
      width: 40%;
      font-size: 18px;
    }
    h5{
      display: none;
    }
    .content_btn{
      width: 30%;
      font-size: 13px;
      text-align: right;
      background-color: transparent;
    }
  }
}
`;


export default Card;
