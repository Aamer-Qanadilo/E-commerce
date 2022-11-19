import React, { useContext, useMemo, useState } from "react";

import FeatureItem from "../../components/Features/FeatureItem";
import QuickView from "../../components/QuickView/QuickView";
import "../../components/Features/styles.css";
import ProductListPageFilters from "./ProductListPageFilters";
import styles from "./styles.module.css";
import FeaturedContext from "../../components/FeaturedContext";
import ProductListHeader from "./components/ProductListHeader";
import ProductListNav from "./components/ProductListNav";

const sortProducts = {
  Price: "price",
  Rate: "rating.rate",
  Size: "size",
};

const ProductListPage = () => {
  const [popupItem, setPopupItem] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("Price");
  const [productsSize, setProductsSize] = useState(12);
  const { featuredItems } = useContext(FeaturedContext);
  console.log(featuredItems);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  // const featuredItemsSorted = useMemo(() => {
  //   return featuredItems.sort(
  //     (item, nextItem) =>
  //       parseFloat(nextItem[sortBy.toLowerCase()]) -
  //       parseFloat(item[sortBy.toLowerCase()]),
  //   );
  // }, [sortBy]);

  const featuredItemsSorted = useMemo(() => {
    return featuredItems.sort((item, nextItem) => {
      console.log(nextItem[sortProducts[sortBy]], item[sortProducts[sortBy]]);
      return (
        parseFloat(nextItem[sortProducts[sortBy]]) -
        parseFloat(item[sortProducts[sortBy]])
      );
    });
  }, [sortBy, featuredItems]);

  // console.log(featuredItemsSorted, sortProducts[sortBy]);

  return (
    <React.Fragment>
      {popupItem && (
        <QuickView popupItem={popupItem} setPopupItem={setPopupItem} />
      )}
      {<ProductListHeader />}
      {<ProductListNav sortBy={sortBy} onChange={handleChange} />}
      <div className={styles.productListPageContainer}>
        <ProductListPageFilters filter={filter} setFilter={setFilter} />
        <div className="featured-list">
          {(featuredItemsSorted.length ? featuredItemsSorted : featuredItems)
            .slice(0, productsSize)
            .map((item) => (
              <FeatureItem
                productCardClass={styles.productListCard}
                item={item}
                setPopupItem={setPopupItem}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductListPage;
