import React, { useState, useEffect } from "react";
import ItemName from "./ItemName";
import { connect } from "react-redux";
import { increment, decrement } from "../../../../Redux/count";
import "../productMain.css";
import { FaPlus, FaMinus } from 'react-icons/fa'
import { adjustQTY } from '../../../../Redux/ShoppingCart/Shopping_Actions'

function OrderInput({ products, adjustQTY, count, decrement, increment }) {

  return (
    <>
      <ItemName products={products} />
      <div className="count-btn">
        {count === 0 ? (
          <button className="btn-disabled"><FaMinus /></button>
        ) : (
          <button className="btn-decr"
            onClick={() => decrement()}
          >
            <FaMinus />
          </button>
        )}
        <input
          type="text"
          value={count}
          defaultChecked />
        <button className="btn-incr" onClick={() => increment()}><FaPlus /></button>
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    adjustQTY: (id, value) => dispatch(adjustQTY(id, value)),
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment())

  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInput)
