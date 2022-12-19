import React, { useContext } from "react";
import FeaturedContext from "../../components/FeaturedContext";
import styles from "./styles.module.css";

const ProductListPageFilters = ({ filter, setFilter, setFilterLoading }) => {
  const { filterFeaturedItems, getFeaturedItems, categories } =
    useContext(FeaturedContext);

  const filterProducts = (category) => {
    setFilterLoading(true);
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
        {categories.map((category, index) => (
          <li key={index} onClick={() => filterProducts(category)}>
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
