import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import NotFound from "./components/Pages/pageNotFound/PageNotFound";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/registerPages/RegisterMain";
import Forgotpwd from "./components/accounts/forgotPassword";
import NewPwd from "./components/accounts/registerPages/resetPassword";
import Categories from "./components/Pages/Categories/CategoriesPage";
import ProductPage from "./components/Pages/product-preview/ProductMain";
import Checkout from "./components/checkout/mainCheckout";
import Cart from "./components/cart/cart";
import UserPage from "./components/Pages/userPage/userPage";
import Order from "./components/Pages/userPage/order";
import AddressBook from "./components/Pages/userPage/addressBook";
import Details from "./components/Pages/userPage/details";
import Password from "./components/Pages/userPage/password";
import { Provider } from "react-redux";
import store from "./Redux/main";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/categories">
          <Categories />
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
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/product-page">
          <ProductPage />
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
        <Route path="/change-password">
          <Password />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
