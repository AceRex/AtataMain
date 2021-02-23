import React from "react";
import { Link } from "react-router-dom";
import img from "../logoComponents/logo2.png";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgTwitter } from "react-icons/cg";
import { RiFacebookFill } from "react-icons/ri";
import { Component } from "react";
import { connect } from "react-redux";
import { changeCurrency } from "../../Redux/currency";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.changeCurrency(value);
  }
  render() {
    return (
      <>
        <footer>
          <section>
            <span className="header"> Navigation</span>
            <ul>
              <li>
                <Link to="/topcategories">Top Seller</Link>
              </li>
              <li>
                <Link to="/topcategories">Top Products</Link>
              </li>
              <li>
                <Link to="/"> About Us</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </section>
          <section>
            <span className="header"> Services</span>
            <ul>
              <li>
                <a href="http://###">Atata Auction</a>
              </li>
            </ul>
          </section>
          <section>
            <span className="header"> Our Page</span>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/atata57"
                  target="_blank"
                >
                  <RiFacebookFill /> / atata57
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.twitter.com/atata57"
                  target="_blank"
                >
                  <CgTwitter /> / atata57
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://instagram.com/atata57"
                  target="_blank"
                >
                  <AiOutlineInstagram /> / atata57
                </a>
              </li>
            </ul>
          </section>
          <section>
            <span className="header"> NewsLetter</span>
            <div className="subscribe">
              <div className="inputs">
                <input type="text" placeholder="Enter Email Here" />
                <button className="btn btn-primary">subscribe</button>
              </div>
              <small>Enter Your email to recieve our NewsLetter</small>
              <img src={img} alt="Logo" />
            </div>
          </section>
        </footer>
        <div className="footer-bottom">
        <div className='copryt'>
          © 2021 all rights resevered | Atata57 synergy and alignment limited
          </div>
          <select
            name="selectValue"
            onChange={this.handleChange}
            value={this.state.selectValue}
          >
            <option selectd value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
         
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  changeCurrency,
};
export default connect(null, mapDispatchToProps)(Footer);
