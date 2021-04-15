import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASEURL } from '../../../Authentication/Main'
import ErrorAlert from '../../../errors/errors'
import {getStorageData} from '../../../Authentication/AUTH_actions'

function ScrollToToponMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null
}


function Password() {

  const [old_password, setOldPassword] = useState("")
  const [new_password, setNewPassword] = useState("")
  const [confirm_password, setRetypePassword] = useState("")
  const [status, setStatus] = useState("")
  const [alert, setAlert] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASEURL}/auth/password/update`,
    {
      old_password,
      new_password,
      confirm_password
    })
      .then(res => {
        setStatus('Password Changed Successfully!');
        setAlert('success');
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
          <h3>Password Setting</h3>
          <div className="form-group">
            <label>Old Password</label>
            <input className='db-input'
              type='password'
              value={old_password}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input className='db-input'
              type='password'
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Retype Password</label>
            <input className='db-input'
              type='password'
              value={confirm_password}
              onChange={(e) => setRetypePassword(e.target.value)}
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

export default Password;