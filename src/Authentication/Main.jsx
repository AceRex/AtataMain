import React, { useState, useEffect, createContext } from 'react'
import { getStorageData, setStorageData, StorageKeys } from './AUTH_actions'
import Loading from '../loading/loading'
import axios from 'axios'

export const BASEURL = "http://api.atata57.com"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.cookie

// const DefaultContextValue = {
//     user_data : null,
//     onUserChange: (user) => {
//         throw new Error(`Default function should not be used: ${user.displayName}`);
//     },
// }

export const AUTH_CONTEXT = createContext(null);


export const AUTH_PROVIDER = props => {
    const [USER, setUSER] = useState(getStorageData(StorageKeys.User));
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   initApp()
    // }, [])

    // function initApp(){
    //     const userStored = getStorageData(StorageKeys.User)
    //     if (userStored) {
    //         setUSER(userStored)
    //     }
    //     setLoading(false)
    // }
    // function onUserChange(val){
    //     setUSER(val)
    // }
    // if (loading){
    //     return <Loading/>
    // }
    return (
        <AUTH_CONTEXT.Provider
            value={{USER}}>
            {props.children}
        </AUTH_CONTEXT.Provider>
    )
}

