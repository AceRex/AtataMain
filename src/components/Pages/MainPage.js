import React, { Component } from "react";
import "../../App.css";
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import Footer from "../footer/footer";
import IndexBlog from "../Pages/IndexBlog";
import Auction from "../Auction/auction";
import CategoryCard from "../card/categoryCard";
import Featured from "../card/FeaturedProducts";
import Latest from "../card/LatestItem";
import Data from "../../data.json";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      products: Data.products,
      cartItems: Data.Cart,
    };
  }
  
  componentWillMount() {
  
  }
  render() {
    return (
      <main className="index-page-container">
        <MainHeader />

        <Simpleslider />

        <CategoryCard products={this.state.products} />

        {/* <Auction /> */}

        <Featured products={this.state.products}/>

        <Latest products={this.state.products}/>

        <IndexBlog />

        <Footer />
      </main>
    );
  }
}

export default Page;
