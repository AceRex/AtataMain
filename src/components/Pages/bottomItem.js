import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";
import NumberFormat from "react-number-format";
import Item1 from "./categoryImages/accessories.png";
import Item2 from "./categoryImages/appliance.png";
import Item3 from "./categoryImages/clothes.png";
import Item4 from "./categoryImages/Computer.png";
import Item5 from "./categoryImages/Furniture.png";
import Item6 from "./categoryImages/gadgets.png";
import Item7 from "./categoryImages/machine.png";
import Item8 from "./categoryImages/phones.png";
import Item9 from "./categoryImages/shoes.png";

export default class bottomItem extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, info, price, price2 } = value.detailProduct;
          return (
            <MyCateCard>
              <div className='CategoryName'>
                Most Viewed Items
              </div>
              <div
                className="bottomItems"
                onClick={() => value.handleDetail(id)}
              >
                <div className="row mb-3 py-2">
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item1} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item3} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item5} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item5} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item9} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item4} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item2} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item4} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                  <div className="bottomItem d-flex">
                    <div className="imageContainer ">
                      <img src={Item8} />
                    </div>
                    <div className="details">
                      <span className="title py-2">{title}</span>
                      <span className="price py-2">
                        <NumberFormat
                          className={"px-1"}
                          value={price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />{" "}
                        -{" "}
                        <NumberFormat
                          className={"px-1"}
                          value={price2}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </span>

                      <span
                        className="button"
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </MyCateCard>
          );
        }}
      </ProductConsumer>
    );
  }
}


const MyCateCard = styled.div`
  width: 90%;
  background-color: var(--colorLight);
  margin: 5px auto;
  padding: 10px;
  .CategoryName {
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 10px;
  }
  .FeaturedItems{
    display: flex;
  }
  .row{
    width:100%;
    margin: auto;
  }
  .bottomItem {
    background-color: var(--colorWhite);
    margin: 10px auto;
    height: 150px;
    width: 360px;
    padding: 15px;
  }
  .imageContainer {
    width: 150px;
    height: 120px;
    overflow: hidden;
    border: solid 0.5px var(--colorAsh);
  }
  .imageContainer img {
    width: 150px;
    height: 120px;
    &:hover {
      transition: all 1s linear;
      transform: scale(1.2);
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align:center;
  }
  .title {
    color: var(--colorBlack);
    font-size: 16px;
    text-align:center;
    font-weight: bold;
  }

  .price {
    font-size: 18px;
    text-align:center;
    font-weight: bolder;
    color: var(--colorYellow);
  }
  .button {
    padding: 10px;
    width: 70%;
    margin: auto;
    text-align: center;
    color: var(--colorAsh);
    &:hover {
      background-color: var(--colorYellow);
      color: var(--colorWhite);
    }
  }
`;

