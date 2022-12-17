import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../common/Popup";
import FeaturedContext from "../FeaturedContext";
import QuickViewContent from "./QuickViewContent/QuickViewContent";
import QuickViewImages from "./QuickViewImages";
import styles from "./styles.module.css";

const QuickView = ({ popupItem: item, setPopupItem, children }) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  document.body.style.overflow = "hidden";
  const { getProduct } = useContext(FeaturedContext);
  console.log(item);

  return (
    <div
      className={
        styles.quickViewContainer +
        " " +
        (setPopupItem ? "" : styles.quickViewProductContainer)
      }
    >
      <div
        className={
          styles.quickViewNav +
          " " +
          (setPopupItem ? "" : styles.quickViewNavSingleProduct)
        }
      >
        {setPopupItem ? (
          <>
            <h3>{item.title}</h3>
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                document.body.style.overflow = "auto";

                setPopupItem(null);
              }}
            ></i>
          </>
        ) : (
          <h3>{`${item.category} > ${item.title}`}</h3>
        )}
      </div>
      <div
        className={
          styles.quickViewBody +
          " " +
          (setPopupItem ? "" : styles.quickViewProductBody)
        }
      >
        <QuickViewImages
          item={{ images: [item.image] }}
          displayedImageIndex={displayedImageIndex}
          setDisplayedImageIndex={setDisplayedImageIndex}
        />
        <QuickViewContent
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      {children ? children : <></>}
      <div className={styles.quickViewFooter}>
        {setPopupItem && (
          <Link to={`/product/${item.id}`} onClick={() => getProduct(item.id)}>
            View Full product details
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuickView;
