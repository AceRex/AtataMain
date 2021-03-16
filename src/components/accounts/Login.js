import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Logo from "../logoComponents/headerLogo.png";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch} from 'react-redux'
// import { login } from '../../Redux/AccountStore'



function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(false)
    const [wrongInput, setWrongInput] = useState(false)

    const dispatch = useDispatch()

    // const handleSubmit = (event) => {
    //   event.preventDefault();
  
    //   dispatch(
    //     login({
    //       email: email,
    //       password: password,
    //       loggedIn: true
    //     })
    //   )
    // }

  return (
    <div className="LoginContainer">
      <div className="LogoContaniner">
        <div className="logo">
          <img src={Logo} alt="Logo"/>
        </div>
      </div>
      <div className="formContaniner">
        <div className="form">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email"
              name='email'
              placeholder="emailaddress@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="Password"
              name='password'
              placeholder="Enter password here..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              Remember Me
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
             <p>Don't have an account ?</p> 
              <Link to="/register">
                <p className="toReg">Click here to register</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
