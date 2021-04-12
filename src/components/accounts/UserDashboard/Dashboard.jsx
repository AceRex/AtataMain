import React, { useState } from "react";
import "./Dashboard.css";
import { Route, NavLink} from "react-router-dom";
import Overview from "./overview";
import Password from "./password";
import { FaBars } from 'react-icons/fa'



function Links() {
  return (
    <>
      <NavLink exact to='/dashboard/'
        activeClassName='active'
      >
        Account
            </NavLink>
      <NavLink to='/dashboard/password'
        activeClassName='active'
      >
        Password
      </NavLink>
      {/* <NavLink to='/dashboard/created_events'
        activeClassName='active'
      >
        Events
      </NavLink> */}
      {/* <Link to='/'
      onClick={(e) => handleLogout(e)}
      >
        Logout
      </Link> */}
    </>
  )
}

function Dashboard() {

  const [clicked, setClicked] = useState(false)

  const handleClicked = () => {
    setClicked(!clicked)
  }
  return (
    <div className="db-container">
     <div className="db__container">

      <p
          className={clicked ? 'mobile-menu' : 'mobile-menu-off'}
          onClick={handleClicked}
          >
            <FaBars />
          </p>
        <nav className={clicked ? 'nav' : 'nav nav-active'}
        >
         
          <div className='user_Image'>
            <div className='img__'>
              <div className='img__container'>
                {/* <img src={displayPicture} /> */}
              </div>
            </div>
          </div>
          <Links />
        </nav>
        <div className='content'>
          <Route exact path="/dashboard/">
            <Overview />
          </Route>
          <Route exact path="/dashboard/password">
            <Password />
          </Route>
          <Route exact path="/dashboard/created_events">
            {/* <Events /> */}
          </Route>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
