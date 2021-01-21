import React, { useState } from "react";
import "./header.css";
import { AllCatMenuItems } from "./AllCateData";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";

class HeaderBottom extends React.Component {
  

  render() {
   
    function Nav() {
      const [activeItemIndex, setActiveItemIndex] = useState(0);
      const chevronWidth = 40;

      return (
        <div
          className="all-categories"
          style={{ padding: `0 ${chevronWidth}px` }}
        >
          <ul>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={6}
              gutter={5}
              leftChevron={
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "var(--colorLight)",
                  }}
                >
                  {"<"}
                </button>
              }
              rightChevron={
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "var(--colorLight)",
                  }}
                >
                  {">"}
                </button>
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {/* Datas are been read from ./AllCateData.js */}
              {AllCatMenuItems.map((items) => (
                <Link to={items.link} style={{color: '#fff'}}>
                  <li>{items.cate}</li>
                </Link>
              ))}
            </ItemsCarousel>
          </ul>
        </div>
      );
    }
    return <Nav />;
  }
}
export default HeaderBottom;
