import React, { useState } from "react";
import Popup from "../common/Popup";
import QuickViewContent from "./QuickViewContent/QuickViewContent";
import QuickViewImages from "./QuickViewImages";
import styles from "./styles.module.css";

const QuickView = ({ popupItem: item, setPopupItem }) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  document.body.style.overflow = "hidden";

  return (
    <Popup>
      <div className={styles.quickViewContainer}>
        <div className={styles.quickViewNav}>
          <h3>{item.title}</h3>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              document.body.style.overflow = "auto";

              setPopupItem(null);
            }}
          ></i>
        </div>
        <div className={styles.quickViewBody}>
          <QuickViewImages
            item={item}
            displayedImageIndex={displayedImageIndex}
            setDisplayedImageIndex={setDisplayedImageIndex}
          />
          <QuickViewContent
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        <div className={styles.quickViewFooter}>
          <button>View Full product details</button>
        </div>
      </div>
    </Popup>
  );
};

export default QuickView;
