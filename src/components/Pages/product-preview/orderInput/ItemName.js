import React from "react";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import NumberFormat from "react-number-format";

function ItemName(props) {
  const activeCurrency = useSelector((activeCurrency) => activeCurrency);
  const value = activeCurrency.currencyReducer.defaultValue;

  return (
    <div>
      <Item>
        <span>{props.products.category}</span>
        <p>{props.products.title}</p>
        <NumberFormat
          className={"amount"}
          value={props.products.amount * value.currencyRate}
          displayType={"text"}
          thousandSeparator={true}
          prefix={value.currencySymbol}
        />
      </Item>
    </div>
  );
}

const Item = styled.div`
  padding: 10px;
  p {
    font-size: 17px;
    font-weight: 200;
    margin-bottom: 7px;
  }
  span {
    display: flex;
    font-size: 13px;
    margin-bottom: 10px;
    p {
      font-size: 13px;
      margin: 0px 20px;
    }
  }

  .amount {
    font-size: 25px;
    font-weight: 800;
  }
`;

function mapStateToProps(state) {
  return { activeCurrency: state.activeCurrency };
}
export default connect(mapStateToProps)(ItemName);
