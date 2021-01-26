import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { connect, useSelector } from "react-redux";

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

function OtherServices(props) {
  const shoppingCart = useSelector((state) => state.cart);
  const number = shoppingCart.cartItem.length
 
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
              <span> {number} items in cart</span>
            </p>
          </Link>
        </li>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}
export default connect(mapStateToProps)(OtherServices);
