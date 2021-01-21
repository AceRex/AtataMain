import React from "react";
import styled from "styled-components";
import BgImg from "../Images/bg.png";
import { Link } from "react-router-dom";

class SubMenuList extends React.Component {
  render(){
  function Onhover(e) {
    const Hover = document.getElementById("SubMenuList");
    const Hoverer = document.getElementById("allCate-SubMenu");
    Hover.classList.remove("hidden");
    Hoverer.classList.remove("hidden");
  }
  function OnLeave(e) {
    const Hover = document.getElementById("SubMenuList");
    const Hoverer = document.getElementById("allCate-SubMenu");
    Hover.classList.add("hidden");
    Hoverer.classList.add("hidden");
  }
  return (
    <SubMenu onMouseEnter={Onhover} onMouseLeave={OnLeave}>
      <div className="list">
        <p>Heading</p>
        <div className="menu">
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
        </div>
      </div>
      <div className="list">
        <p>Heading</p>
        <div className="menu">
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
        </div>
      </div>
      <div className="list">
        <p>Heading</p>
        <div className="menu">
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
        </div>
      </div>
      <div className="list">
        <p>Heading</p>
        <div className="menu">
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
        </div>
      </div>
      <div className="list">
        <p>Heading</p>
        <div className="menu">
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
        </div>
      </div>
      <div className="list">
        <p>Heading</p>
        <div className="menu">
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
          <li><Link to='/categories'>Placeholder</Link></li>
        </div>
      </div>
    </SubMenu>
  );
}
}

const SubMenu = styled.div`
  width: 110%;
  height: 100%;
  display: flex;
  background-image: url(${BgImg});
  background-origin: content-box;
  background-size: 900px 150px;
  background-repeat: no-repeat;
  background-position: bottom, left;
  background-color: var(--colorWhite);
  .list {
    width: 90%;
    text-align: center;
    p {
      width: 10%;
      font-size: 15px;
      font-weight: 700;
      padding: 10px;
      color: var(--colorGreen);
      text-transform: uppercase;
    }
    .menu {
      list-style-type: none;
      font-size: 13px;
      padding: 10px;
      width: 10%;
      li {
        padding: 5px;
      }
    }
  }
`;
export default SubMenuList;
