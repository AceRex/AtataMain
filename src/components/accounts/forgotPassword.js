import React, { Component } from "react";
import "./forgotpassword.css";
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

class ForgotPassword extends Component {
  state = {
        clicked: false
  }

  handleClick = () => {
      this.setState({clicked: true});

      setTimeout(() => {
          this.setState({clicked : false});
      }, 2000)
  }
 
  render() {
    const {clicked} = this.state;

   
    return (
      <div className='mainContainer'>
        
      <div className="fp-container">
        <p>Don't Worry, you will get back in a minute</p>
        <small>
          You will have your account back, kindly enter you email below.
        </small>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Enter you email address here" />
            <button className="btn" onClick={this.handleClick} disabled={clicked}>
              {clicked && <CircularProgress style={{color:'#fff', width: '20px', height:'20px'}} />}
              {!clicked && 'Reset Password'}
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
}
export default ForgotPassword;
