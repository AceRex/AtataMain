import React, { useState, useEffect, useCallback } from 'react'
import Switch from '@material-ui/core/Switch';
import axios from 'axios'
import { AUTH_USER } from '../../../Authentication/User'
import { BASEURL } from '../../../Authentication/Main'
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ErrorAlert from '../../../errors/errors'
import ScrollToToponMount from '../../scrollToTopOnMount'


function Overview() {

  axios.get(`${BASEURL}/buyers/34`)
    .then(res => {
      // setUser(res.data.data.first_name)
      console.log(res.data.data.first_name)
    })
    .catch(err => console.log((err)))


  const [first_name, setFirstName] = useState()
  const [last_name, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [gender, setGender] = useState()
  const [DOB, setDOB] = useState()
  const [street, setStreet] = useState()
  const [delivery_address, setDelivery] = useState()
  const [region, setRegion] = useState()
  const [country, setCountry] = useState()
  const [status, setStatus] = useState("")
  const [alert, setAlert] = useState("")

  // Toggle state
  const [toggle, setToggle] = useState({
    checkedA: true,
    checkedB: true,
  });
  const handleToggle = (event) => {
    setToggle({ ...toggle, [event.target.name]: event.target.checked });
  };

  // toggle state Ends

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`${BASEURL}/buyers/34`, {
      first_name,
      last_name,
      email,
      phone,
      gender,
      DOB,
      street,
      delivery_address,
      region,
      country,
    })
      .then(res => {
        setStatus('Login Successful');
        setAlert('success')
      })
      .catch(err => {
        if (err.response) {
          setStatus((err.response.data.message));
          setAlert('info')

        } else {
          setAlert('success')

        }
      });
  }

  return (
    <div className='account__'>
      <ScrollToToponMount />
      <ErrorAlert ERR_TYPE={alert} ERR_MSG={status} />
      <div className="profile">
        <form>
          <h3>Account settings</h3>

          <div className="form-group">
            <label>Fullname</label>
            <input className='db-input'
              value={`${first_name} ${last_name}`}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className='db-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Phone Number</label>
            <input className='db-input'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)} >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>D.O.B</label>
            <input className='db-input'
              type='date'
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>


        </form>
      </div>
      <div className="profile">
        <form>
          <div className='form-group'>
            <label>Street</label>
            <input className='db-input'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Delivery Address</label>
            <input className='db-input'
              value={delivery_address}
              onChange={(e) => setDelivery(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Country</label>
            <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)}
            />
          </div>
          <div className="form-group">
            <label>Region</label>
            <RegionDropdown
              country={country}
              value={region}
              name='region'
              onChange={(val) => setRegion(val)}
            />
          </div>

          <div className="form-toggle-group">
            <label>Send me Newsletter</label>
            <Switch
              checked={toggle.checkedB}
              onChange={handleToggle}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
          <div className='account_save_btn'>
            <button className='db-btn'
              onClick={(e) => handleSubmit(e)}
            >
              Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Overview;