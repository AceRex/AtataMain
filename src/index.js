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
// import TopCategories from './components/Pages/Categories/TopCategory';
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
import store from "./Redux/";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        {/* <Route path="/topcategories" component={TopCategories} /> */}
        <Route path="/categories" component={Categories} />
        <Route path="/Signin" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/forgotpassword" component={Forgotpwd} />
        <Route path="/newpassword" component={NewPwd} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product-page" component={ProductPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/user-page" component={UserPage} />
        <Route path="/order" component={Order} />
        <Route path="/address-book" component={AddressBook} />
        <Route path="/user-details" component={Details} />
        <Route path="/change-password" component={Password} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
