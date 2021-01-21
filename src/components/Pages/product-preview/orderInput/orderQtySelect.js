import React from "react";
import styled from "styled-components";
import { Component } from "react";

class OrderQtySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <QtySelect>
        <table style={{ width: "68%" }}>
          <tr>
            <td>
              <p className="Name"> Qty: </p>
            </td>
            <td>
              <div className="Select">
                <button className="dec" onClick={(e) => this.decrement(e)}>
                  -
                </button>
                <input placeholder={this.state.count} disabled />

                <button className="inc" onClick={(e) => this.increment(e)}>
                  +
                </button>
              </div>
            </td>
          </tr>
        </table>
      </QtySelect>
    );
  }
}

const QtySelect = styled.div`
  display: flexbox;
  font-family: "Quicksand", sans-serif;
  p {
    font-weight: 700;
  }
  .Select {
    list-style-type: none;
    display: flex;
    width: 50px;
    height: 30px;
    margin: auto;
  }
  button{
      width:70px;      
      border: solid 0.5px var(--colorAsh);      
      background: var(--colorWhite);
      padding: 0 12px;
      outline: none;
      :hover{
        background: var(--colorAsh);
        border: solid 0.5px var(--colorAsh);
        color: var(--colorWhite);
    }
  }
  input{
      width: 40px;
      text-align: center;
      border: solid 0.5px var(--colorAsh);
      
  }
  .Name{
    font-size: 14px;
    font-weight: normal;
  }
`;

export default OrderQtySelect;
