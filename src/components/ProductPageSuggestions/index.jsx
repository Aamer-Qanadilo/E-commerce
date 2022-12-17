import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import FeatureItem from "../Features/FeatureItem";
import PopupQuickView from "../QuickView/PopupQuickView";
import styles from "./styles.module.css";

const ProductPageSuggestion = ({ featuredItems, currentId }) => {
  const [popupItem, setPopupItem] = useState(null);

  return (
    <React.Fragment>
      {popupItem && (
        <PopupQuickView popupItem={popupItem} setPopupItem={setPopupItem} />
      )}
      <section className="featured">
        <div className="container-wrapper">
          <SectionTitle sectionHeader="You may also like" />
          <div className="featured-list">
            {featuredItems
              .filter((item) => item.id !== currentId)
              .slice(0, 4)
              .map((item) => (
                <FeatureItem
                  item={item}
                  setPopupItem={setPopupItem}
                  isNewItem={true}
                />
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductPageSuggestion;
