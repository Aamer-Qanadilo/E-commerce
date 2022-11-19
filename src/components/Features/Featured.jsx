import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import SectionTitle from "../common/SectionTitle";
import FeatureItem from "./FeatureItem";
import getProducts from "./FeaturedList";
import QuickView from "../QuickView/QuickView";
import FeaturedContext from "../FeaturedContext";

const Featured = () => {
  // const [products, setProducts] = useState([]);
  const [popupItem, setPopupItem] = useState(null);
  const { featuredItems } = useContext(FeaturedContext);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productsList = await getProducts();
  //     setProducts(productsList);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <React.Fragment>
      {popupItem && (
        <QuickView popupItem={popupItem} setPopupItem={setPopupItem} />
      )}
      <section className="featured">
        <div className="container-wrapper">
          <SectionTitle sectionHeader="Featured" />
          <div className="featured-list">
            {featuredItems.slice(0, 8).map((item) => (
              <FeatureItem item={item} setPopupItem={setPopupItem} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Featured;
