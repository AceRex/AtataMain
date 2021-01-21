import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../logoComponents/logo2.png";

function Footer() {
  return (
    <Main>
      <Navigation>
        <span className="header"> Navigation</span>
        <ul>
          <Link to="/topcategories">Top Seller</Link>
          <Link to="/topcategories">Top Products</Link>
          <Link to="/"> About Us</Link>
          <Link to="/">Career</Link>
          <Link to="/">Blog</Link>
        </ul>
      </Navigation>
      <Services>
        <span className="header"> Services</span>
        <ul>
          <a href='http://###'>Atata Auction</a>
        </ul>
      </Services>
      <SocialLinks>
        <span className="header"> Our Page</span>
        <ul>
          <a href="https://www.facebook.com/atata57" target="_blank">
            <i class="fab fa-facebook-square"></i>/ atat57
          </a>
          <a href="https://www.twitter.com/atata57" target="_blank">
            <i class="fab fa-twitter-square"></i>/ atat57
          </a>
          <a href="https://instagram.com/atata57" target='_blank'>
            <i class="fab fa-instagram"></i>/ atat57
          </a>
        </ul>
      </SocialLinks>
      <NewsLetter>
        <span className="header"> NewsLetter</span>
        <div className="subscribe">
          <input type="text" placeholder="Enter Email Here" />
          <button className="btn btn-primary">subscribe</button>
          <small>Enter Your email to recieve our monthly NewsLetter</small>
          <img src={img} alt="Logo"/>
        </div>
      </NewsLetter>
    </Main>
  );
}

const Main = styled.div`
  background-color: var(--colorBlack);
  display: flex;
  color: var(--colorYellow);
  padding: 50px 50px;
@media screen and (max-width: 1080px) {
  display: none;
}
`;

const Navigation = styled.div`
  margin: 20px 50px;
  .header {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bolder;
    font-family: "Muli", sans-serif;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  a {
    color: var(--colorAsh);
    padding: 10px;
    width: 150px;
    font-size: 15px;
    :hover {
      color: var(--colorGreen);
    }
  }
`;

const Services = styled.div`
  margin: 20px 90px;
  .header {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bolder;
    font-family: "Muli", sans-serif;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  a {
    color: var(--colorAsh);
    padding: 10px;
    font-size: 15px;
    width: 150px;
    :hover {
      color: var(--colorGreen);
    }
  }
`;

const SocialLinks = styled.div`
  margin: 20px 50px;
  .header {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bolder;
    font-family: "Muli", sans-serif;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  i {
    font-size: 30px;
    padding: 0 1px;
  }
  a {
    color: var(--colorAsh);
    padding: 10px;
    font-size: 15px;
    width: 150px;
    :hover {
      color: var(--colorGreen);
    }
  }
`;

const NewsLetter = styled.div`
  margin: 20px 0px;
  width: 90%;
  .header {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bolder;
    font-family: "Muli", sans-serif;
  }
  .subscribe {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      padding: 15px;
      border: none;
      margin: 10px 0;
    }

    .btn {
      background-color: var(--colorGreen) !important;
      width: 70%;
      margin: auto;
      border: none;
      padding: 5px;
      margin: 5px 0 10px 0;
      :hover{
        background-color: var(--colorRed) !important;
      }
    }
    small{
      color: var(--colorAsh);
    }
  }
  img{
    margin-top: 70px;
    width:200px;
  }
`;

export default Footer;
