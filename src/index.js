import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, } from 'react-router-dom'
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./Redux/main";
import { ProvideAuth } from './Authentication/Main'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
