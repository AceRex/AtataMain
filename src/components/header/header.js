import React, { Component, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../logoComponents/headerLogo.png";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import Data from '../../data.json'


function Account() {
  const [hover, setHover] = useState("hidden");
  // const [clicked, setClicked] = useState(false);

  const handleHover = (hover) => {
    setTimeout(() => {
      setHover(" ");
    }, 500);
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };
  // const handleClicked = (clicked) => {
  //   setTimeout(() => {
  //     setClicked(true);
  //   }, 500);
  // };
  // const shoppingCart = useSelector((state) => state);
  const CartLenght = Data.Cart;

  return (
    <>
      <div className="login" onMouseEnter={handleHover}>
        <li>
          <p className="icon">
            <VscAccount />
          </p>
        </li>
        <Link to='/cart'>
          <p className="icon">
            <FiShoppingCart />
          </p>
          <span> {CartLenght.length} items in cart</span>
        </Link>
      </div>
      

      {/* dropdowns */}

      <div className={`login-dropdown ${hover}`} onMouseLeave={handleHoverOut}>
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

export default class Header extends Component {
  render() {
    return (

        <div className="MainHeader">
          <div className="PagesHeader">
            <div className="logo-container">
              <Link to="/" className="logo">
                <img src={HeaderLogo} alt='Logo'/>
               
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
    );
  }
}
