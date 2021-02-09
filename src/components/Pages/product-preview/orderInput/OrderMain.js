import React from "react";
import ItemName from "./ItemName";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../../Redux/count";
import "../productMain.css";
import {FaPlus,FaMinus} from 'react-icons/fa'

function OrderInput() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <ItemName />
      <div className="count-btn">
        {count === 0 ? (
          <button className="btn-disabled"><FaMinus/></button>
        ) : (
          <button className="btn-decr" onClick={() => dispatch(decrement())}><FaMinus/></button>
        )}
        <input type="text" value={count} defaultChecked/>
        <button className="btn-incr" onClick={() => dispatch(increment())}><FaPlus/></button>
      </div>
    </>
  );
}

export default OrderInput;
