import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../logoComponents/logo2.png";
import { GoHome } from 'react-icons/go'
import InlineERR from '../../../errors/InlineError'
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import {BASEURL} from '../../../Authentication/Main'
import {StorageKeys} from '../../../Authentication/AUTH_actions'

export default function UserReg () {
  let history = useHistory();

      const [firstName, setFirstName] = useState();
      const [lastName, setLastName] = useState();
      const [phoneNumber, setPhoneNumber]= useState();
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [confirm_Password, setConfirmPassword] = useState()
      const [country, setCountry] = useState()
      const [region, setRegion] = useState()
      const [address, setAddress] = useState()
      const [phoneNumberERR, setPhoneERR] = useState()
      const [emailERR, setEmailERR] = useState()
      const [passwordERR, setPasswordERR] = useState()
      const [confirm_passwordERR, setConfirmPasswordERR] = useState()
      const [status, setStatus] = useState()
      const [Alert, setAlert] = useState()

 const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASEURL}/auth/register`, {
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      email: email,
      password: password,
      confirm_password: confirm_Password,
      country: country,
      region: region,
      address: address
    })
      .then(res => {        
        localStorage.setItem(StorageKeys.User, JSON.stringify(res.data.user))
        document.cookie = `${res.data.token}; secure`
        setAlert("success")
        setStatus(res.data.message)  
        setTimeout(() =>
        history.push('/'), 3000)
          
      })
      .catch(err => {
        setPhoneERR(err.response.data.message.phone)
        setEmailERR(err.response.data.message.email)
        setPasswordERR(err.response.data.message.password)
        setConfirmPasswordERR(err.response.data.message.confirm_password)

        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);

        } else {


        }
      }
      );
  }

    return (
      <div className="ind-reg">
        <div className="ind-reg-form">
          <div className="form">
            <h3>Registration</h3>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="group">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name..."
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last name..."
                  />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel"
                    placeholder="Enter phone number..." />
                  <InlineERR message={phoneNumberERR} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email name..." />
                  <InlineERR message={emailERR} />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" />
                  <InlineERR message={passwordERR} />
                </div>
                <div className="form-group">
                  <label>Retype Password</label>
                  <input
                    name='confirm_Password'
                    value={confirm_Password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password" />
                  <InlineERR message={confirm_passwordERR} />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Country</label>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
                <div className="form-group">
                  <label>State/Region</label>
                  <RegionDropdown
                    country={country}
                    value={region}
                    name='region'
                    onChange={(val) => setRegion(val)}
                  />
                </div>
              </div>
              <div className="group">
                <div className="form-group">
                  <label>Address</label>
                  <input input="text"
                  placeholder="Enter address here..."
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="btn-group">
                <Link to="/" className="btn-back">
                  <GoHome />
                </Link>
                <button className="btn-reg" onClick={onSubmit}>Register</button>
              </div>
            </form>
          </div>
        </div>
        <ErrorAlert ERR_TYPE={Alert} ERR_MSG={status} />
      </div>
    );
  }
