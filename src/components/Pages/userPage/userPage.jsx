import React from 'react'
import { Link } from 'react-router-dom'
import './userpage.css'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import { FaSignOutAlt } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'
import { BiDetail } from 'react-icons/bi'
import { ImAddressBook } from 'react-icons/im'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Order from './order'
import AddressBook from './addressBook'
import Details from './details'
import Password from './password'


const menuItems = [

    {
        id: 0,
        menu: 'Details',
        link: '/user-details',
        icon: <BiDetail />
    },
    {
        id: 1,
        menu: 'orders',
        link: '/order',
        icon: <GoPackage />
    },
    {
        id: 2,
        menu: 'Address Book',
        link: '/address-book',
        icon: <ImAddressBook />

    },
    {
        id: 3,
        menu: 'Password',
        link: '/change-password',
        icon: <RiLockPasswordLine />

    }
]

export default function UserPage() {
    return (
        <>
            <Header />
            <div className='mobile-user-page-container'>
                <div className='user-page-head'>
                    <div className='user'>
                        <p className='user-name'>Welcome <span>UserFirstName</span></p>
                        <p className='user-email'>example@example.com</p>
                    </div>
                    <div className='logout'>
                        <FaSignOutAlt />
                    </div>
                </div>
                <div className='user-page-menu'>
                    <p>my account</p>
                    {menuItems.map((items) => {
                        return (
                            <Link to={items.link} key={items.id}>
                                <li>
                                    <span className='icon'>{items.icon}</span>
                                    <span className='icon-label'>{items.menu}</span>

                                </li>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='container'>
                <Tabs >
                    <TabList>
                        {menuItems.map((items) => {
                            return (
                                <Tab>
                                    <span className='icon'>{items.icon}</span>
                                    <span className='icon-label'>{items.menu}</span>

                                </Tab>
                            )
                        })}
                    </TabList>
                    <TabPanel>
                        <Details />
                    </TabPanel>
                    <TabPanel>
                        <Order />
                    </TabPanel>
                    <TabPanel>
                        <AddressBook />
                    </TabPanel>
                    <TabPanel>
                        <Password />
                    </TabPanel>
                </Tabs>
            </div>
            <Footer />
        </>
    )
}