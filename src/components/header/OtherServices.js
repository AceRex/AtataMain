import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { connect } from "react-redux";
import {useAuth} from '../../Authentication/Main'
import {IoCaretDownCircleOutline} from 'react-icons/io5'

function Account() {
  const [hover, setHover] = useState("hidden active");
  const [Alert, setAlert] = useState('')
  const [status, setStatus] = useState('')
  let auth = useAuth();
  let history = useHistory()
  const handleHover = (hover) => {
    setTimeout(() => {
      setHover(" ");
    }, 500);
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };

  const Logout = () => {
    auth.logout()  
  }

    return (
      <>
        { auth.user === null ?
          <>
            <li className="sign-in" onMouseEnter={handleHover}>
              <VscAccount />
            </li>

            {/* dropdowns */}


            <div
              className={`account-dropdown ${hover}`}
              onMouseLeave={handleHoverOut}
            >
              <Link to="/signin">
                <li className='login'>
                  Login
                </li>
              </Link>
              <Link to="/register">
                <li className='register'>
                  Register
                </li>
              </Link>
            </div>
          </>
           : 
          <>
            <li className="sign-in" onMouseEnter={handleHover}>
             <div className='user-name'><p>Hi, </p> {auth.user.first_name}<span><IoCaretDownCircleOutline /></span></div> 
            </li>
            <div
              className={`account-dropdown ${hover}`}
              onMouseLeave={handleHoverOut}
            >
              <Link to="/dashboard">
                <li>
                  My Account
          </li>
              </Link>
              <li
                onClick={() => Logout()}
              >
                Logout
          </li>
            </div>
          </>
         }
      </>
    )
  // return (



  // );
}


const OtherServices = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty;
    });
    setCartCount(count)
  },
    [cart, cartCount]
  )
  return (
    <>

      <div className="other-services">
        <div className="rght-itm">
          <Account />

          <li className="cart">
            <Link to="/cart">
              <p className="icon">
                <FiShoppingCart />
                <span> {cartCount}</span>
              </p>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.shop.cart
  };
};
export default connect(mapStateToProps)(OtherServices);
