import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { getStorageData, saveStorageData, setStorageData, StorageKeys } from './AUTH_actions'
import Loading from '../loading/loading'


// Axios credentials
export const BASEURL = "http://api.atata57.com"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.cookie


const authContext = createContext();
// Provider component that wraps your app and makes auth object available to any child component that calls useAuth().


export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object  and re-render when it changes.


export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state


function useProvideAuth() {
    const [user, setUser] = useState(null);
    let history = useHistory()

    // Wrap any axios methods we want to use making sure to save the user to state.

    const signin = (email, password) => {
        return (
            axios.post(`${BASEURL}/auth/login`, { email, password })
                .then((response => {
                    setUser(response.data.user)
                    saveStorageData('user', response.data.user)
                    document.cookie = `${response.data.token}; secure`
                    history.push('/')
                }))
        )
    };

    const register = (first_name, last_name, phone, email, password, confirm_password, country, region, address) => {
        return (
            axios.post(`${BASEURL}/auth/register`, {
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                email: email,
                password: password,
                confirm_password: confirm_password,
                country: country,
                region: region,
                address: address
            })
                .then((response => {
                    setUser(response.data.user)
                    saveStorageData('user', response.data.user)
                    document.cookie = `${response.data.token}; secure`
                    setTimeout(() =>
                        history.push('/'), 3000)
                }))
        )
    };
    const logout = () => {
        return (
            axios.get(`${BASEURL}/auth/logout`)
                .then((response => {
                    setUser(null)
                    localStorage.clear()
                    history.push('/')
                }))
        )
    };
    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    //   useEffect(() => {
    //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //       if (user) {
    //         setUser(user);
    //       } else {
    //         setUser(false);
    //       }
    //     });
    //     // Cleanup subscription on unmount
    //     return () => unsubscribe();
    //   }, []);
    // Return the user object and auth methods
    return {
        user,
        signin,
        register,
        logout,
    };
}