import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { connect } from "react-redux";
import { AUTH_CONTEXT, BASEURL } from '../../Authentication/Main'
import axios from "axios";
import ErrorAlert from '../../errors/errors'
import {useAuth} from '../../Authentication/Main'


function Account() {
  const [hover, setHover] = useState("hidden active");
  const [Alert, setAlert] = useState('')
  const [status, setStatus] = useState('')
  let auth = useAuth();
  let history = useHistory()
  // const USER = useContext(AUTH_CONTEXT)
  // console.log(USER)

  const handleHover = (hover) => {
    setTimeout(() => {
      setHover(" ");
    }, 500);
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };

  // const refreshPage = () => {
  //   window.location.reload()
  // }

  const Logout = () => {
    axios.get(`${BASEURL}/auth/logout`)
      .then(res => {
        if (res.status === 200) {
          localStorage.clear()
           auth.signout(() => history.push('/') ) 
        }
      }
      )
      .catch(err => console.log(err))
  }
    return (
      <>
        {/* { auth.user ? */}
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
                <li>
                  Login <i className="fas fa-sign-in-alt"></i>
                </li>
              </Link>
              <Link to="/register">
                <li>
                  Register <i className="far fa-user"></i>
                </li>
              </Link>
            </div>
          </>
          {/* : */}
          <>
            <li className="sign-in" onMouseEnter={handleHover}>
              <VscAccount />
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
        {/* } */}
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

  // const Shop = useSelector((state) => state.shop);
  // const number = Shop.cart.length

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
