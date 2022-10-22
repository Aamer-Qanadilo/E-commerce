import React from "react";
import styles from "./styles.module.css";

const QuickViewImages = ({
  item,
  displayedImageIndex,
  setDisplayedImageIndex,
}) => {
  return (
    <div className={styles.quickViewImagesContainer}>
      <div className={styles.quickViewImagesChooser}>
        {item.images.map((image, index) => (
          <div
            className={
              styles.quickViewImagesOption +
              " " +
              (displayedImageIndex == index
                ? styles.quickViewImagesChooserActive
                : "")
            }
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setDisplayedImageIndex(index)}
          ></div>
        ))}
      </div>
      <div className={styles.quickViewDisplayedImage}>
        <img
          src={item.images[displayedImageIndex]}
          alt={`${item.title}'s displayed image`}
        />
      </div>
    </div>
  );
};

export default QuickViewImages;
