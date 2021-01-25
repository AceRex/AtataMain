import React from "react";
import "./header.css";
import MobileHeader from "./MobileHeader"
import HeaderTop from "./headerTop";
import HeaderBottom from "./headerBottom";
import OtherServices from "./OtherServices";

function MainHeader() {
  return (
      <div className="MainHeader">
        <MobileHeader/>
        <OtherServices />
        <HeaderTop />
        <HeaderBottom />
      </div>
  );
}

export default MainHeader;
