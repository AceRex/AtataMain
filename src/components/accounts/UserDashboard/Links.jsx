import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Links() {
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
        <NavLink to='/dashboard/created_events'
          activeClassName='active'
        >
          Address Book
        </NavLink>
        {/* <Link to='/'
        onClick={(e) => handleLogout(e)}
        >
          Logout
        </Link> */}
      </>
    )
  }