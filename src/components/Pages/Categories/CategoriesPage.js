import React, { useState } from "react";
import SmallCard from "../../card/smallCard";
import "./categoriespage.css";
import CategoriesData from "./CategoriesData";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";
//Carousel
import CarouselSlider from "./cart-slider";
import {connect} from 'react-redux'



function Categories({products}) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <>
      <div className="cart-container">
        
        <div
          className="mobile-category-menu"
        >
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={5}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {CategoriesData.SideNav.map((menu) => (
              <li key={menu.id}>{menu.category}</li>
            ))}
          </ItemsCarousel>
        </div>
        {/* Mobile Category Header ends*/}

        <section className="top-display">
          <CarouselSlider />
        </section>

        <div className="category-shop">
          <section className="side-nav">
            <p>Categories</p>
            {CategoriesData.SideNav.map((menu) => (
              <li key={menu.id}>
                {menu.category}
              </li>
            ))}
          </section>
          <section className="shop">
            {products.map((item) => (
              <SmallCard productsData={item}/>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    products: state.shop.products
  }
}
export default connect(mapStateToProps)(Categories);
