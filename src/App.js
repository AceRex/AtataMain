import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./mainpage"
import MainHeader from "./components/header/mainHeader";
import NotFound from "./components/Pages/pageNotFound/PageNotFound";
import Login from "./components/accounts/login/Login";
import Register from "./components/accounts/registerPages/RegisterMain";
import Forgotpwd from "./components/accounts/forgotPassword/forgotPassword";
import NewPwd from "./components/accounts/resetPassword/resetPassword";
import Categories from "./components/Pages/Categories/CategoriesPage";
import ProductPage from "./components/Pages/product-preview/Product";
import Checkout from "./components/checkout/mainCheckout";
import Cart from "./components/cart/cart";
import UserPage from "./components/Pages/userPage/userPage";
import Order from "./components/Pages/userPage/order";
import AddressBook from "./components/Pages/userPage/addressBook";
import Details from "./components/Pages/userPage/details";
import Password from "./components/Pages/userPage/password";
import Footer from "./components/footer/footer"
import Dashboard from "./components/accounts/UserDashboard/Dashboard"
import { connect } from 'react-redux'
import { AUTH_PROVIDER } from './Authentication/Main'
import { AUTH_CONTEXT } from './Authentication/Main'


function App({ currentItem }) {
  return (
    <AUTH_PROVIDER>
      <main className="index-page-container">
        <MainHeader />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>          
          <Route path="/Signin">
            <Login />
          </Route>
         <Route path="/Register">
            <Register />
          </Route>
          <Route path="/forgotpassword">
            <Forgotpwd />
          </Route>
          <Route path="/newpassword">
            <NewPwd />
          </Route>          
          <Route path="/change-password">
            <Password />
          </Route>
            <Route path="/categories/:id">
              <Categories />
            </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/user-page">
            <UserPage />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/address-book">
            <AddressBook />
          </Route>
          <Route path="/user-details">
            <Details />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route component={NotFound} />
          {currentItem === null ? <Redirect to='/' />
            :
            <Route path="/product/:title">
              <ProductPage />
            </Route>
          }
        </Switch>
        <Footer />
      </main>
    </AUTH_PROVIDER>
  );
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem

  }
}

export default connect(mapStateToProps)(App)
