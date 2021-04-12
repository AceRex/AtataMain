import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import {BASEURL} from '../../../Authentication/Main'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState('')
  const [alert, SetAlert] = useState('')


  const onSubmit = (e) => {
    e.preventDefault();
   axios.post(`${BASEURL}/auth/login`, {
      email: email,
      password: password
    })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setStatus('Login Successful');
        SetAlert('success')
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
          <form>
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

export default Login;
