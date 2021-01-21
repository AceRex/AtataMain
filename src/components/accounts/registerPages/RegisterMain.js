import React, { Component, useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "./register.css";
import { Link } from "react-router-dom";
import Logo from "../../logoComponents/logo2.png";
import styled from "styled-components";

export default class UserReg extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    const { country, region } = this.state;

    return (
      <div className="ind-reg">
        <div className="LogoContaniner">
          <div className="logo">
            <img src={Logo} />
          </div>
        </div>
        <div className="ind-reg-form">
          <div className="form">
            <h3>Registration</h3>
            <hr />
            <form>
              <div className="group">
                <div className="form-group">
                  <label>First Name</label>
                  <input input="text" placeholder="Enter first name..." />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter Last name..." />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter phone number..." />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email name..." />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="form-group">
                  <label>Retype Password</label>
                  <input type="password" />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Country</label>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => this.selectCountry(val)}
                  />
                </div>
                <div className="form-group">
                  <label>State/Region</label>
                  <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(val) => this.selectRegion(val)}
                  />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Address</label>
                  <input input="text" placeholder="Enter address here..." />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <Link to="/register">
                    <button className="btn-back">{'<< '}Back</button>
                  </Link>
                </div>
                <div className="form-group">
                  <Link to="/">
                    <button className="btn">Register</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
