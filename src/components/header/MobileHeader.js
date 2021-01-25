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
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {this.state.AllCatMenuItems.map((items) => (
            <Link to={items.link + items._id}  key={items._id} style={{ color: "#fff" }}>
              <li>{items.category}</li>
            </Link>
          ))}
        </div>
        <div className="mobile-logo">
          <div className="logo">
            <img src={Logo} alt='Logo'/>
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
              Login <i className="fas fa-sign-in-alt"></i>
            </li>
          </Link>
          <Link to="/register">
            <li>
              Register <i className="far fa-user"></i>
            </li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
