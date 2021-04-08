import React, { useState } from "react";
import'./forgotpassword.css'
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

function ForgotPassword (){
 
   const [clicked, setClicked] = useState(false);

    return (
      <div className='mainContainer'>
        
      <div className="fp-container">
        <p>Don't Worry, you will get back in a minute</p>
        <small>
          You will have your account back, kindly enter you email below.
        </small>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Enter you registered email address here" />
            <button className="btn" onClick={() => setClicked(true)}>
              {clicked ? <CircularProgress style={{color:'#fff', width: '20px', height:'20px'}} /> : "Reset Password"}
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
