import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

function ItemCards(props) {
  return (
    <ItemCard>
      <div className="Card-top">
        <p>{props.title}</p>
      </div>
      <div className="image-container">
        <img src={props.img} />
      </div>
      <div className="amount">
        <NumberFormat
          className={"px-1"}
          value={props.amount1}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
        -
        <NumberFormat
          className={"px-1"}
          value={props.amount2}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
      </div>
      <div className="details mb-2">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in",
        </p>
      </div>
      <div className="footer">
          {/* <Link to ='/'> */}
        <span className='btn'>View Details</span>
        {/* </Link> */}
      </div>
    </ItemCard>
  );
}

const ItemCard = styled.div`
  background-color: var(--colorWhite);
  margin-top: 6rem;
  margin: 0 2px;
  width: 240px;
  height: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0px 0px 50px #00000015;
  padding: 10px;
  border: solid 0.5px transparent;
  :hover {
    transition: 0.3s;
    border: solid 0.5px var(--colorAsh);
  }
  .Card-top {
    p {
      margin-top: 4px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: "Muli", sans-serif;
    }
  }
  .image-container {
    width: 200px;
    margin: 0 auto;
    height: 250px;
    overflow: hidden;
    align-content: center;
    justify-content: center;
    align-item: center;
    img {
      width: 200px;
      margin: auto;
      height: 170px;
    }
  }
  .amount {
    text-align: center;
    margin-top: -75px;
    span {
      font-size: 15px;
      font-weight: 700;
    }
  }
  .details {
    p {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--colorAsh);
    }
  }
  .footer {
    display: flex;
    padding: 3px;
    background-color: var(--colorLight);
    .btn {
      background-color: var(--colorGreen);
      color: var(--colorLight);
      padding: 10px;
      margin: 2px auto;
      width: 70%;
      text-align: center;
      font-size: 15px;
      margin-bottom: 5px;
    }
    .show {
      width: 50%;
      padding: 5px;
      text-align: center;
    }
  }
`;
export default ItemCards;
