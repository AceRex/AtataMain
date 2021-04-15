import React, { useContext} from "react";
import "./App.css";
import Simpleslider from "./components/carousel/carousel";
import Featured from "./components/card/FeaturedProducts";
import Latest from "./components/card/LatestItem";
import CategoryCard from "./components/card/categoryCard";
import { connect } from 'react-redux'
import {useAuth} from './Authentication/Main'


function App({ products }) {
   const value = useAuth()
   console.log(value)
  return (
    <main className="index-page-container">
      <Simpleslider />
      <CategoryCard key={products._id} productsData={products} />
      <Featured key={products._id} productsData={products} />
      <Latest key={products._id} productsData={products} />
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  }
}



export default connect(mapStateToProps)(App);
