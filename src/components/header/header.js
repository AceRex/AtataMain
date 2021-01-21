import React, { Component, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../logoComponents/headerLogo.png";
import { VscAccount } from "react-icons/vsc";
import process from "../../Redux/addToCart";
import { Provider } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

function Account() {
  const [hover, setHover] = useState("hidden");
  const [clicked, setClicked] = useState(false);

  const handleHover = (hover) => {
    setTimeout(() => {
      setHover(" ");
    }, 500);
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };
  const handleClicked = (clicked) => {
    setTimeout(() => {
      setClicked(true);
    }, 500);
  };
  const shoppingCart = useSelector((state) => state);

  return (
    <>
      <div className="login" onMouseEnter={handleHover}>
        <li>
          <p className="icon">
            <VscAccount />
          </p>
        </li>
        <li>
          <p className="icon">
            <FiShoppingCart />
          </p>
          <span> {shoppingCart} items in cart</span>
        </li>
      </div>
      

      {/* dropdowns */}

      <div className={`login-dropdown ${hover}`} onMouseLeave={handleHoverOut}>
        <Link to="/signin">
          <li>
            Login <i class="fas fa-sign-in-alt"></i>
          </li>
        </Link>
        <Link to="/register">
          <li>
            Register <i class="far fa-user"></i>
          </li>
        </Link>
      </div>
    </>
  );
}

export default class Header extends Component {
  render() {
    return (
      <Provider store={process}>

        <div className="MainHeader">
          <div className="PagesHeader">
            <div className="logo-container">
              <Link to="/" className="logo">
                <img src={HeaderLogo} />
               
              </Link>
            </div>
            <div className="mobile-contain">
            <div className="search-mobile-container">
              <div className="search">
              <input placeholder="search for products here..." />
              <button>Click to Search</button>
              </div>

            </div>
            <Account />
            </div>
            
            <div className="search-container">
              <div className="search">
              <input placeholder="search for products here..." />
              <button>Click to Search</button>
              </div>

            </div>
            <Account />
            
          </div>
        </div>
      </Provider>
    );
  }
}
