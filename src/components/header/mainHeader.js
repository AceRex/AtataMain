import React from "react";
import "./header.css";
import MobileHeader from "./MobileHeader"
import HeaderTop from "./headerTop";
import HeaderBottom from "./headerBottom";
import OtherServices from "./OtherServices";
import process from "../../Redux/addToCart";
import { Provider } from "react-redux";

function MainHeader() {
  return (
    <Provider store={process}>
      <div className="MainHeader">
        <MobileHeader/>
        <OtherServices />
        <HeaderTop />
        <HeaderBottom />
      </div>
    </Provider>
  );
}

export default MainHeader;
