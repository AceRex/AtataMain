import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import { BASEURL } from '../../../Authentication/Main'
import {saveStorageData, StorageKeys} from '../../../Authentication/AUTH_actions'
import {AUTH_CONTEXT} from '../../../Authentication/Main'

function Login() {
  const setUSER = useContext(AUTH_CONTEXT)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState('')
  const [alert, SetAlert] = useState('')
  
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASEURL}/auth/login`, {
      email: email,
      password: password
    })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem(StorageKeys.User, JSON.stringify(res.data.user))
          document.cookie = `${res.data.token}; secure`
          setUSER(res.data.user)
          setStatus('Login Successful')
          SetAlert('success')
          setTimeout(() =>
            history.push('/'), 3000)
        }

      })
      .catch(err => {
        if (err.response) {
          setStatus((err.response.data.message));
          SetAlert('error')

        } else {
          SetAlert('success')
        }
      });


  }
  return (
    <div className="LoginContainer">
      <div className="formContaniner">
        <div className="login">
          <h3>Login</h3>
          <hr />
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="email"
                name='email'
                placeholder="emailaddress@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="Password"
                name='password'
                placeholder="Enter password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <button className="btn"
                onClick={onSubmit}
              >Login</button>
              <Link to="/forgotpassword">
                <p className="forgetPwd">Forgot password?</p>
              </Link>
            </div>
            <div className="reg">

              <p>Don't have an account ? {' '}
                <Link to="/register">
                  Click here to register
              </Link> </p>

            </div>
          </form>
        </div>
      </div>
      <ErrorAlert ERR_TYPE={alert} ERR_MSG={status} />
    </div>
  );
}


// mapDispatchToProps () => {

// }
export default (Login);
