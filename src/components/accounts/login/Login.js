import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch } from 'react-redux'
// import { login } from '../../Redux/AccountStore'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState(false)
  const [wrongInput, setWrongInput] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className="LoginContainer">
      <div className="formContaniner">
        <div className="login">
          <h3>Login</h3>
          <hr/>
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
              // onClick={handleSubmit}
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
    </div>
  );
}

export default Login;
