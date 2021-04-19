import React, { useState, useContext } from 'react'
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import ScrollToToponMount from '../../scrollToTopOnMount'
import { useAuth } from '../../../Authentication/Main'



function Overview() {
  let auth = useAuth()

  const [id, setId] = useState(auth.user.id)
  const [first_name, setFirstName] = useState(auth.user.first_name)
  const [last_name, setLastName] = useState(auth.user.last_name)
  const [email, setEmail] = useState(auth.user.email)
  const [phone, setPhone] = useState(auth.user.phone)
  const [gender, setGender] = useState()
  const [DOB, setDOB] = useState()
  const [address, setAdress] = useState(auth.user.address)
  const [country, setRegion] = useState(auth.user.country)
  const [region, setRegiono] = useState(auth.user.region)
  const [status, setStatus] = useState("")
  const [alert, setAlert] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.userUpdate(id, first_name, last_name, phone, address, country, region)
    
  }

  return (
    <div className='account__'>
      <ScrollToToponMount />
      {/* <ErrorAlert ERR_TYPE={alert} ERR_MSG={status} /> */}
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