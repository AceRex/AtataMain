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

    const [street, setStreet] = useState(auth.user.address)
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
        axios.post(`http://api.atata57.com/auth/password/update`, {
            street,
            delivery_address,
            region,
            country,
        })
            .then(res => {
                setStatus('Login Successful');
                setAlert('success');
            })
            .catch(err => {
                if (err.response) {
                    setStatus((err.response.data.message));
                    setAlert('info')

                } else {
                    setAlert('success')

                }
            });
    }

    return (
        <div className='account__'>
            <ScrollToToponMount />
            <ErrorAlert ERR_TYPE={alert} ERR_MSG={status} />
            <div className="profile">
                <form>
                    <h3>Address Book</h3>
                    <div className='form-group'>
                        <label>Street</label>
                        <input className='db-input'
                            name='street'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
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



