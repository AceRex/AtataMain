import React, { useState } from "react";
import SmallCard from "../../card/smallCard";
import Header from "../../header/mainHeader";
import Footer from "../../footer/footer";
import "./categoriespage.css";
import CategoriesData from "./CategoriesData";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";
//Carousel
import CarouselSlider from "./cart-slider";

function Categories() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <>
      <Header />
      <div className="cart-container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="bd-text">
            Home
          </Link>
          <Link to="/">Category</Link>
        </Breadcrumbs>
        {/* Mobile Category Header */}
        <div
          style={{ padding: `0 ${chevronWidth}px` }}
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
            {CategoriesData.SideNav.map((menu) => (
              <li key={menu.id}>
                <Link to="/">{menu.category}</Link>
              </li>
            ))}
          </section>
          <section className="shop">
            {CategoriesData.Items.map((item) => (
              <SmallCard
                key={item.id}
                img={item.img}
                title={item.title}
                amount={item.amount}
                category={item.category}
              />
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Categories;
