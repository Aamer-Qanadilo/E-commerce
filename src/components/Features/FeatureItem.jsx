import React from "react";

const FeatureItem = ({
  productCardClass,
  item,
  setPopupItem,
  isNewItem = false,
}) => {
  return (
    <div
      className={`featured-item ${productCardClass ? productCardClass : ""}`}
    >
      <div className="featured-item__img">
        {/* <div
          style={{ backgroundImage: `url(${item.thumbnail})` }}
          className="featured-item__img-img"
        ></div> */}
        <div
          className={"cartCardImage"}
          style={{ backgroundImage: `url(${item.image || item.images[0]})` }}
        ></div>
        {/* <img src={item.image} alt="Featured item" /> */}
        {isNewItem ? <p className="featured-item__img--new">NEW</p> : <></>}
        <div className="featured-item__img--mask">
          <button onClick={() => setPopupItem(item)}>QUICK VIEW</button>
        </div>
      </div>
      <div className="featured-item__content">
        <h3 className="featured-item__content--header">
          {item.title.slice(0, 40)} {item.title.length > 40 ? "..." : ""}
        </h3>
        <p className="featured-item__content--price">${item.price}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
