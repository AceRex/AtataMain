import React from 'react'
import {NavLink} from 'react-router-dom'
import {FiUser} from 'react-icons/fi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FaRegAddressBook} from 'react-icons/fa'
import {BiStore, BiBox} from 'react-icons/bi'
import {MdRecentActors} from 'react-icons/md'

export default function Links() {
    return (
      <>
        <NavLink exact to='/dashboard/'
          activeClassName='active'
        >
         <span><FiUser /></span>Account
              </NavLink>
        <NavLink to='/dashboard/password'
          activeClassName='active'
        >
          <span><RiLockPasswordLine/></span>Password
        </NavLink>
        <NavLink to='/dashboard/created_events'
          activeClassName='active'
        >
         <span><FaRegAddressBook/></span>Address Book
        </NavLink>
        <NavLink to='/dashboard/created_events'
          activeClassName='active'
        >
         <span><BiBox/></span>My Order
        </NavLink>
        <NavLink to='/dashboard/created_events'
          activeClassName='active'
        >
         <span><BiStore/></span>Saved Items
        </NavLink>
        <NavLink to='/dashboard/created_events'
          activeClassName='active'
        >
         <span><MdRecentActors/></span>Viewed Items
        </NavLink>
      </>
    )
  }