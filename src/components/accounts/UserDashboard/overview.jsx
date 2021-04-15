import React, { useState, useContext } from 'react'
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import ScrollToToponMount from '../../scrollToTopOnMount'
import {getStorageData, StorageKeys} from '../../../Authentication/AUTH_actions'



function Overview() {
  const [USER, setUSER] = useState(getStorageData(StorageKeys.User))
  const [first_name, setFirstName] = useState(USER.first_name)
  const [last_name, setLastName] = useState(USER.last_name)
  const [email, setEmail] = useState(USER.email)
  const [phone, setPhone] = useState(USER.phone)
  const [gender, setGender] = useState()
  const [DOB, setDOB] = useState()
  const [status, setStatus] = useState("")
  const [alert, setAlert] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://api.atata57.com/buyers/${USER.id}`, {
      first_name,
      last_name,
      email,
      phone,
      gender,
      DOB
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
            <label>First Name</label>
            <input className='db-input'
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input className='db-input'
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
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