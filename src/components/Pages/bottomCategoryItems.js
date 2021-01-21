import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Img1 from '../Image/officeChair.jpg'
import Img2 from '../Image/doublesitter.jpg'
import Img3 from "../Image/Furniture.png";
import Img4 from '../Image/bed.jpg'
import Img5 from "../Image/officefurni.jpg";
import Img6 from "../Image/accesory.jpg";


function Card(props) {
  return (
    <Link to="/">
    <ItemCard>
      <div className="Imagecontainer">
        <img src={props.img} />
      </div>
      <div className="Details">
        <p className="title">{props.title}</p>
        <p>MOQ from: {props.MOQRange}</p>
      </div>
    </ItemCard>
  </Link>
  );
}

const ItemCard = styled.div`
  display: flex;
  background-color: var(--colorWhite);
  border-radius: 5px;
  width: 350px;
  height: 200px;
  overflow: hidden;
  margin: 5px;
  .Imagecontainer {
    width: 40%;
    height: 90%;
    overflow: hidden;
    img {
      margin-top: 25px;
      width: 98%;
    }
  }

  .Details {
    width: 60%;
    margin: 50px 10px;
    color:black;

    .title {
      font-size: 20px;
      font-weight: bold;
    }
    p{
      font-size: 15px;
      color: var(--colorDark);
    }
  }
`;

function CategoryCard(props) {
  return (
    <MyCateCard>
      <div className="CategoryName">
        <p>Recommended Furniture for you</p>
      </div>
      <div className="FeaturedItems">
        <Card img={Img3} title='Single Chair for Home' MOQRange="20pcs - 100pcs"/>
        <Card img={Img2} title='Double Chair for Home' MOQRange="20pcs - 100pcs"/>
        <Card img={Img4} title='Other home furnitures' MOQRange="20pcs - 100pcs"/>
      </div>
      <div className="FeaturedItems">
        <Card img={Img1} title='Single Chair for Office' MOQRange="20pcs - 100pcs"/>
        <Card img={Img5} title='Office furnitures' MOQRange="20pcs - 100pcs"/>
        <Card img={Img6} title='furniture Accessories' MOQRange="20pcs - 100pcs"/>
      </div>
    </MyCateCard>
  );
}

const MyCateCard = styled.div`
  width: 90%;
  background-color: var(--colorLight);
  margin: 5px auto;
  padding: 5px;
  .CategoryName {
    font-size: 20px;
    font-weight: bold;
  }
  .FeaturedItems {
    display: flex;
    flex-wrap: wrap;
  justify-content: center;
  }
`;

export default CategoryCard;
