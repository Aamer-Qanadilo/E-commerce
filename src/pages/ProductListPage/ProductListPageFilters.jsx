import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import FeaturedContext from "../../components/FeaturedContext";
import styles from "./styles.module.css";

const ProductListPageFilters = ({ filter, setFilter }) => {
  const [categories, setCategories] = useState([]);
  const { filterFeaturedItems, getFeaturedItems } = useContext(FeaturedContext);

  const getCategories = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories",
    );
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const filterProducts = (category) => {
    if (filter !== category) {
      filterFeaturedItems(category);
      setFilter(category);
    } else {
      getFeaturedItems();
      setFilter("");
    }
  };

  const resetFilter = () => {
    getFeaturedItems();
    setFilter("");
  };

  return (
    <div className={styles.productListPageFilters}>
      <p>
        <span>FILTERS</span>
        <span onClick={resetFilter}>RESET</span>
      </p>
      <ul>
        {categories.map((category) => (
          <li onClick={() => filterProducts(category)}>
            <span>{category}</span>
            {filter === category ? (
              <i class="fa fa-angle-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPageFilters;
