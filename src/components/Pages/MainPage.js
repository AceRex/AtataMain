import React, {Component} from "react";
import  '../../App.css'
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import CategoryLinks from "./bottomCategoryItems";
import Footer from "../footer/footer";
import IndexBlog from "../Pages/IndexBlog";
import Auction from "../Auction/auction";
import CategoryCard from "../card/categoryCard";
import Featured from "../card/FeaturedProducts";
import Latest from "../card/LatestItem";


class Page extends Component {
  constructor(){
    super();
    this.state = {
     cartItems: []
    }
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
  }
  render(){
  return (
    <main className="index-page-container">      

      <MainHeader/>
      
      <Simpleslider  />

      <CategoryCard/>

      {/* <Auction /> */}

      <Featured />

      <Latest />

      <IndexBlog />

      <Footer />
    </main>
  );
}
}

export default Page;
