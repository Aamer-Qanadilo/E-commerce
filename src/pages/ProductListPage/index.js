import React, { useContext, useEffect, useMemo, useState } from "react";

import FeatureItem from "../../components/Features/FeatureItem";
import "../../components/Features/styles.css";
import ProductListPageFilters from "./ProductListPageFilters";
import styles from "./styles.module.css";
import FeaturedContext from "../../components/FeaturedContext";
import ProductListHeader from "./components/ProductListHeader";
import ProductListNav from "./components/ProductListNav";
import PopupQuickView from "../../components/QuickView/PopupQuickView";
import { Backdrop, CircularProgress } from "@mui/material";

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
  const [filterLoading, setFilterLoading] = useState(false);
  const { featuredItems, getFeaturedItems } = useContext(FeaturedContext);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    setFilterLoading(false);
  }, featuredItems);

  // useEffect(() => {
  //   return () => {
  //     getFeaturedItems();
  //   };
  // }, []);

  // const featuredItemsSorted = useMemo(() => {
  //   return featuredItems.sort(
  //     (item, nextItem) =>
  //       parseFloat(nextItem[sortBy.toLowerCase()]) -
  //       parseFloat(item[sortBy.toLowerCase()]),
  //   );
  // }, [sortBy]);

  const featuredItemsSorted = useMemo(() => {
    return featuredItems.sort((item, nextItem) => {
      // console.log(nextItem[sortProducts[sortBy]], item[sortProducts[sortBy]]);
      return (
        parseFloat(nextItem[sortProducts[sortBy]]) -
        parseFloat(item[sortProducts[sortBy]])
      );
    });
  }, [sortBy, featuredItems]);

  // console.log(featuredItemsSorted, sortProducts[sortBy]);

  return (
    <React.Fragment>
      {filterLoading ? (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={filterLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      {popupItem && (
        <PopupQuickView popupItem={popupItem} setPopupItem={setPopupItem} />
      )}
      {<ProductListHeader filter={filter} />}
      {<ProductListNav sortBy={sortBy} onChange={handleChange} />}
      <div className={styles.productListPageContainer}>
        <ProductListPageFilters
          filter={filter}
          setFilter={setFilter}
          setFilterLoading={setFilterLoading}
        />
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
