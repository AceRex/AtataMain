import React, { useState, useEffect } from "react";
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

const OtherServices = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty;
    });
    setCartCount(count)
  },
    [cart, cartCount]
  )

  // const Shop = useSelector((state) => state.shop);
  // const number = Shop.cart.length

  return ( 
    <div className="other-services">

      <div className="rght-itm">
        <Account />

        <li className="cart">
          <Link to="/cart">
            <p className="icon">
              <FiShoppingCart />
              <span> {cartCount} items in cart</span>
            </p>
          </Link>
        </li>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.shop.cart
  };
};
export default connect(mapStateToProps)(OtherServices);
