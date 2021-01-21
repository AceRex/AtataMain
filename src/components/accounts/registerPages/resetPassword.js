import React, { Component } from "react";
import "../forgotpassword.css";
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
        
      <div className="fp-container contain">
        <p>Change Password</p>        
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
           
            <button className="btn" onClick={this.handleClick} disabled={clicked}>
              {clicked && <CircularProgress style={{color:'#fff', width: '20px', height:'20px'}} />}
              {!clicked && 'Change Password'}
            </button>
            </div>
            

          
        </form>
      </div>
      </div>
    );
  }
}
export default ForgotPassword;
