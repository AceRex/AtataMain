import React, { Component } from "react";
import "./App.css";
import MainHeader from "./components/header/mainHeader";
import Simpleslider from "./components/carousel/carousel";
import Footer from "./components/footer/footer";
import IndexBlog from "./components/Pages/IndexBlog";
import Featured from "./components/card/FeaturedProducts";
import Latest from "./components/card/LatestItem";
import Data from "./data.json";
import CategoryCard from "./components/card/categoryCard";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: Data.products,
      cartItems: Data.Cart,
    };
  }

  render() {
    return (
      <main className="index-page-container">
        <MainHeader />
        <Simpleslider />
        <CategoryCard products={this.state.products} />
        {/* <Auction /> */}
        <Featured products={this.state.products} />
        <Latest products={this.state.products} />
        {/* <IndexBlog /> */}
        <div className="notification">This website is still been tested</div>
        <Footer />
      </main>
    );
  }
}
