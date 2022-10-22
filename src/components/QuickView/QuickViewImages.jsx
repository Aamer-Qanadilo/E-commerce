import React from "react";
import styles from "./styles.module.css";

const QuickViewImages = ({ item, displayedImage, setDisplayedImage }) => {
  return (
    <div className={styles.quickViewImagesContainer}>
      <div className={styles.quickViewImagesChooser}>
        {item.images.map((image) => (
          <div
            className={styles.quickViewImagesOption}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setDisplayedImage(image)}
          ></div>
        ))}
      </div>
      <div className={styles.quickViewDisplayedImage}>
        <img src={displayedImage} alt={`${item.title}'s displayed image`} />
      </div>
    </div>
  );
};

export default QuickViewImages;
