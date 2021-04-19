import React, { useState } from "react";
import './forgotpassword.css'
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from "../../../Authentication/Main";

function ForgotPassword() {

  let auth = useAuth()

  const [email, setEmail] = useState()
  const [clicked, setClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    auth.forgotPassword(email)
    setClicked(true)
  }

  return (
    <div className='mainContainer'>

      <div className="fp-container">
        <p>Don't Worry, you will get back in a minute</p>
        <small>
          You will have your account back, kindly enter you email below.
        </small>
        <form>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter you registered email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <button className="btn" onClick={onSubmit}>
              {clicked ? <CircularProgress style={{ color: '#fff', width: '20px', height: '20px' }} /> : "Reset Password"}
            </button>

          </div>

          <Link to="/signin">
            <button className="back">{"<<BACK"}</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
