import React, { useState, useEffect, createContext, useContext } from 'react'
import { getStorageData, setStorageData, StorageKeys } from './AUTH_actions'
import Loading from '../loading/loading'
import axios from 'axios'

export const BASEURL = "http://api.atata57.com"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.cookie

export const AUTH_USER = {
    isAuthenticated: false,
    signin(cb){
        AUTH_USER.isAuthenticated = true;
        setTimeout(cb, 100)
    },
    signout(cb) {
        AUTH_USER.isAuthenticated = false;
        setTimeout(cb, 100)
    }
}
export const AUTH_CONTEXT = createContext();

export const ProvideAuth = ({children}) => {
    const auth = useAUTH_PROVIDER();   
    return (
        <AUTH_CONTEXT.Provider
            value={auth}>
            {children}
        </AUTH_CONTEXT.Provider>
    )
}

export const useAuth =() => {
    useContext(AUTH_CONTEXT)
}

export const useAUTH_PROVIDER = () => {
    const [USER, setUSER] = useState(null);
   
    const signin = cb => {
        return AUTH_USER.signin(() => {
            setUSER(getStorageData(StorageKeys.User))
            cb();
        })
    }
    const signout = cb => {
        return AUTH_USER.signout(() => {
            setUSER(null)
            cb();
        })
    }
    return (
        USER,
        signin,
        signout
    )
}

