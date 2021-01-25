import React, { useState } from "react";
import "./header.css";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";
import Data from "../../data.json";

class HeaderBottom extends React.Component {

  render() {
    function Nav() {
      const [activeItemIndex, setActiveItemIndex] = useState(0);
      const chevronWidth = 40;
      const MenuItems = Data.allcategory
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
              {MenuItems.map((items) => (
                <Link to={items.link} key={items._id} style={{ color: "#fff" }} >
                  <li>{items.category}</li>
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
