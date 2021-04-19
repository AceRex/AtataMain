import React, { useState } from "react";
import "./login.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import { useAuth } from '../../../Authentication/Main'
import { StorageKeys } from '../../../Authentication/AUTH_actions'
import { AUTH_CONTEXT } from '../../../Authentication/Main'


function Login() {
  // const siginin = useContext(AUTH_CONTEXT)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [clicked, setClicked] = useState(false)
  const [status, setStatus] = useState('')
  const [alert, SetAlert] = useState('')

  let auth = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    setClicked(!clicked)
    auth.signin(email, password)
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
              >
                {
                  clicked ?
                    <CircularProgress style={{ color: "#fff", width: "15px", height: "15px" }} />
                    :
                    "Login"
                }
              </button>
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
      {/* <ErrorAlert ERR_TYPE={alert} ERR_MSG={status} /> */}
    </div>
  );
}


// mapDispatchToProps () => {

// }
export default (Login);
