import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ErrorAlert from '../../../errors/errors'
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Switch from '@material-ui/core/Switch';
import { useAuth } from '../../../Authentication/Main';

function ScrollToToponMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null
}


function Password() {
    let auth = useAuth()

    const [id, setId] = useState(auth.user.id)
    const [first_name, setFirstName] = useState(auth.user.first_name)
    const [last_name, setLastName] = useState(auth.user.last_name)
    const [phone, setPhone] = useState(auth.user.phone)
    const [address, setAddress] = useState(auth.user.address)
    const [delivery_address, setDelivery] = useState(auth.user.delivery_address)
    const [region, setRegion] = useState(auth.user.region)
    const [country, setCountry] = useState(auth.user.country)
    const [status, setStatus] = useState("")
    const [alert, setAlert] = useState("")

    // Toggle state
    const [toggle, setToggle] = useState({
        checkedA: true,
        checkedB: true,
    });
    const handleToggle = (event) => {
        setToggle({ ...toggle, [event.target.name]: event.target.checked });
    };

    // toggle state Ends

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.userUpdate(id, first_name, last_name, phone, address, country, region)

      }

    return (
        <div className='account__'>
            <ScrollToToponMount />
            {/* <ErrorAlert ERR_TYPE={alert} ERR_MSG={status} /> */}
            <div className="profile">
                <form>
                    <h3>Address Book</h3>
                    <div className='form-group'>
                        <label>Street</label>
                        <input className='db-input'
                            name='address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Delivery Address</label>
                        <input className='db-input'
                            name='delivery_address'
                            value={delivery_address}
                            onChange={(e) => setDelivery(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Country</label>
                        <CountryDropdown
                            value={country}
                            onChange={(val) => setCountry(val)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Region</label>
                        <RegionDropdown
                            country={country}
                            value={region}
                            name='region'
                            onChange={(val) => setRegion(val)}
                        />
                    </div>

                    <div className="form-toggle-group">
                        <label>Send me Newsletter</label>
                        <Switch
                            checked={toggle.checkedB}
                            onChange={handleToggle}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>

                    <div className='account_save_btn'>
                        <button className='db-btn'
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Password;



