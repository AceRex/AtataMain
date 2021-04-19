import React, { useState } from "react";
import "./resetPassword.css";
// import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from "../../../Authentication/Main";

function ForgotPassword() {

  let auth = useAuth()

  const [clicked, setClicked] = useState(false)
  const [password, setPassword] = useState();
  const [confirm_Password, setConfirmPassword] = useState()

  const handleSubmit = (e) => {

    e.preventDefault();
    auth.passwordReset(password, confirm_Password)
    setTimeout(() => {
      setClicked(!clicked);
    }, 500)
  }


  return (
    <div className='mainContainer'>
      <div className="rp-container contain">
        <p>Create New Password</p>
        <form>
          <div className="form-group c-flex">
            <label>Enter New Password</label>
            <input type="password" placeholder="Enter New Password" />
          </div>
          <div className="form-group c-flex">
            <label>Retype New Password</label>
            <input type="password" placeholder="Retype New Password" />
          </div>
          <div className='form-group buttons'>

            <button className="btn" onClick={handleSubmit} disabled={clicked}>
              {clicked ?
                <CircularProgress style={{ color: '#fff', width: '20px', height: '20px' }} />
                :
                'Change Password'}
            </button>
          </div>



        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
