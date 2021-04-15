import React, { Component, useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../logoComponents/headerLogo.png";
import Data from "../../data.json";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import { useAuth } from '../../Authentication/Main'


function Header({ cart }) {
  const [clicked, setClicked] = useState(false)
  const [loginClicked, setLoginClicked] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [AllCatMenuItems, setAllCatMenuItems] = useState(Data.allcategory)
  let auth = useAuth()

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLoginClick = () => {
    setLoginClicked(!loginClicked);
  };

  const Logout = () => {
    auth.logout()
  }

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty;
    });
    setCartCount(count)
  },
    [cart, cartCount]
  )
  return (
    <div className="mobile-header">
      <div className="mobile-menu" onClick={handleClick}>
        {clicked ? <MdClose /> : <BiMenuAltLeft />}
      </div>
      {/* Category Menu Here */}
      <div className={clicked ? "nav-menu active" : "nav-menu"}>
        {AllCatMenuItems.map((items) => (
          <Link to={items.link} key={items._id} style={{ color: "#fff" }}>
            <li onClick={handleClick}>{items.category}</li>
          </Link>
        ))}
      </div>
      {/* Category Menu Ends */}
      {/* Logo Starts Here */}
      <div className="mobile-logo">
        <Link to='/' className="logo">
          <img src={Logo} alt='Logo' />
        </Link>
      </div>
      {/* Logo Ends Here */}
      {/* Login and Cart Here */}

      <div className="mobile-cart">
        {auth.user === null ?
          <>
            <li onClick={handleLoginClick}>
              <VscAccount />
            </li>
            <li>
              <Link to="/cart">
                <FiShoppingCart />
                <span>{cartCount}</span>
              </Link>
            </li>
          </>
          :
          <>
            <li className='user-name' onClick={handleLoginClick}>
                {auth.user.first_name}
            </li>
            <li>
              <Link to="/cart">
                <FiShoppingCart />
                <span>{cartCount}</span>
              </Link>
            </li>
          </>
        }
      </div>
      {/* Login and Cart Ends */}
      {/* Login Dropdown */}
      <div
        className={
          loginClicked ? "login-menu active" : "login-menu"
        }
      >
        {auth.user === null ?
          <>
            <Link to="/signin">
              <li onClick={handleLoginClick}>
                Login <i className="fas fa-sign-in-alt"></i>
              </li>
            </Link>
            <Link to="/register">
              <li onClick={handleLoginClick}>
                Register <i className="far fa-user"></i>
              </li>
            </Link>
          </>
          :
          <>
            <Link to="/dashboard">
              <li onClick={handleLoginClick}>
                My Account
          </li>
            </Link>
              <li onClick={Logout}>
                Logout
          </li>
          </>
        }
      </div>
      {/* Login Dropdown Ends */}
    </div>

  );
}

function mapStateToProps(state) {

  return {
    cart: state.shop.cart
  };
};
export default connect(mapStateToProps)(Header);

