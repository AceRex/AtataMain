import React from "react";
import { Link } from "react-router-dom"
import SmallCard from "./smallCard";
import "./categoryCard.css";
import { loadCurrentItem } from "../../Redux/ShoppingCart/Shopping_Actions";
import { connect } from "react-redux";

function CategoryCard({productsData}) {
  return (
    <>
      <div
        className="items-card-container"
      >
        <p className="header">Top From All Categories</p>

        <div className="items-card-display">
          {productsData.map((item) => (
              <SmallCard productsData={item}/>
          ))}
        </div>
      </div>

    </>

  );

}

const mapDispatchToProps = dispatch => {
  return{
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}
export default connect(mapDispatchToProps)(CategoryCard);
