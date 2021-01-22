import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";
import Data from '../../data.json'

function Account() {
  const [hover, setHover] = useState("hidden active");

  const handleHover = (hover) => {
    setTimeout(() => {
      setHover(" ");
    }, 500);
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };

  return (
    <>
      <li className="sign-in" onMouseEnter={handleHover}>
        <VscAccount />
      </li>

      {/* dropdowns */}

      <div
        className={`account-dropdown ${hover}`}
        onMouseLeave={handleHoverOut}
      >
        <Link to="/signin">
          <li>
            Login <i className="fas fa-sign-in-alt"></i>
          </li>
        </Link>
        <Link to="/register">
          <li>
            Register <i className="far fa-user"></i>
          </li>
        </Link>
      </div>
    </>
  );
}

function OtherServices() {
  // const shoppingCart = useSelector((state) => state);
  const CartLenght = Data.Cart;

  return (
    <div className="other-services">
      <div className="others">
        <li>Blog</li>
        <li>Lang</li>
      </div>
      <div className="rght-itm">
        <Account />

        <li className="cart">
          <Link to="/cart">
            <p className="icon">
              <FiShoppingCart />
              <span> {CartLenght.length} items in cart</span>
            </p>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default OtherServices;
