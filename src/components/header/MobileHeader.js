import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../logoComponents/headerLogo.png";
import { AllCatMenuItems } from "./AllCateData";
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
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {AllCatMenuItems.map((items, index) => (
            <Link key={index} to={items.link} style={{ color: "#fff" }}>
              <li>{items.cate}</li>
            </Link>
          ))}
        </div>
        <div className="mobile-logo">
          <div className="logo">
            <img src={Logo} />
          </div>
        </div>
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
        <div
          className={
            this.state.loginClicked ? "login-menu active" : "login-menu"
          }
        >
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
      </div>
    );
  }
}

export default Header;
