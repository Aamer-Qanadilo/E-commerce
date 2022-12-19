import React from "react";
import SectionTitle from "../common/SectionTitle";
import ShopItem from "./ShopItem";
import shopItems from "./shopItems";

const Shop = () => {
  return (
    <section className="shop">
      <div className="container-wrapper">
        <SectionTitle sectionHeader="Shop" />
        <div className="shop-body">
          {shopItems.map((item, index) => (
            <ShopItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
