import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./register.css";
import { Link } from "react-router-dom";
import Logo from "../../logoComponents/logo2.png";
import { GoHome } from 'react-icons/go'
import InlineERR from '../../../errors/InlineError'
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import {BASEURL} from '../../../Authentication/Main'



export default class UserReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirm_Password: "",
      country: "",
      region: "",
      address: "",
      phoneNumberERR: "",
      emailERR: "",
      passwordERR: "",
      confirm_passwordERR: "",
      status: "",
      Alert: ""

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    axios.post(`${BASEURL}auth/register`, {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      phone: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_Password,
      country: this.state.country,
    })
      .then(res => {
        console.log(res)
        this.setState({
          Alert: "success",
          status: res.data.message
        })
      })
      .catch(err => {
        this.setState({ phoneNumberERR: err.response.data.message.phone })
        this.setState({ emailERR: err.response.data.message.email })
        this.setState({ passwordERR: err.response.data.message.password })
        this.setState({ confirm_passwordERR: err.response.data.message.confirm_password })

        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);

        } else {


        }
      }
      );
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
        <div className="ind-reg-form">
          <div className="form">
            <h3>Registration</h3>
            <hr />
            <form onSubmit={this.onSubmit}>
              <div className="group">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={this.onChange}
                    value={this.state.firstName}
                    placeholder="Enter first name..."
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={this.onChange}
                    value={this.state.lastName}
                    placeholder="Enter Last name..."
                  />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name='phoneNumber'
                    onChange={this.onChange}
                    value={this.state.phoneNumber}
                    type="tel"
                    placeholder="Enter phone number..." />
                  <InlineERR message={this.state.phoneNumberERR} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name='email'
                    onChange={this.onChange}
                    value={this.state.email}
                    placeholder="Enter Email name..." />
                  <InlineERR message={this.state.emailERR} />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange}
                    type="password" />
                  <InlineERR message={this.state.passwordERR} />
                </div>
                <div className="form-group">
                  <label>Retype Password</label>
                  <input
                    name='confirm_Password'
                    value={this.state.confirm_Password}
                    onChange={this.onChange}
                    type="password" />
                  <InlineERR message={this.state.confirm_passwordERR} />
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
                    name='region'
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
              <div className="btn-group">
                <Link to="/" className="btn-back">
                  <GoHome />
                </Link>
                <button className="btn-reg" onClick={this.onSubmit}>Register</button>
              </div>
            </form>
          </div>
        </div>
        <ErrorAlert ERR_TYPE={this.state.Alert} ERR_MSG={this.state.status} />
      </div>
    );
  }
}
