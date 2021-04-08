import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../logoComponents/headerLogo.png";
import Data from "../../data.json";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { MdClose } from "react-icons/md";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      loginClicked: false,
      AllCatMenuItems: Data.allcategory
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleLoginClick = () => {
    this.setState({ loginClicked: !this.state.loginClicked });
  };
  render() {
    return (
      <div className="mobile-header">
        <div className="mobile-menu" onClick={this.handleClick}>
          {this.state.clicked ? <MdClose /> : <BiMenuAltLeft />}
        </div>
        {/* Category Menu Here */}
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {this.state.AllCatMenuItems.map((items) => (
            <Link to={items.link}  key={items._id} style={{ color: "#fff" }}>
              <li onClick={this.handleClick}>{items.category}</li>
            </Link>
          ))}
        </div>
        {/* Category Menu Ends */}
        {/* Logo Starts Here */}
        <div className="mobile-logo">
          <Link to ='/' className="logo">
            <img src={Logo} alt='Logo'/>
          </Link>
        </div>
        {/* Logo Ends Here */}
        {/* Login and Cart Here */}
        <div className="mobile-cart">
          <li onClick={this.handleLoginClick}>
            <VscAccount />
          </li>
          <li>
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
          </li>
        </div>
        {/* Login and Cart Ends */}
        {/* Login Dropdown */}        
        <div
          className={
            this.state.loginClicked ? "login-menu active" : "login-menu"
          }
        >
          <Link to="/signin">
            <li onClick={this.handleLoginClick}>
              Login <i className="fas fa-sign-in-alt"></i>
            </li>
          </Link>
          <Link to="/register">
            <li onClick={this.handleLoginClick}>
              Register <i className="far fa-user"></i>
            </li>
          </Link>
        </div>
        {/* Login Dropdown Ends */}
      </div>

    );
  }
}

export default Header;
