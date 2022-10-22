import React from "react";

const FeatureItem = ({ item, setPopupItem }) => {
  return (
    <div className="featured-item">
      <div className="featured-item__img">
        {/* <div
          style={{ backgroundImage: `url(${item.thumbnail})` }}
          className="featured-item__img-img"
        ></div> */}
        <img src={item.thumbnail} alt="Featured item image" />
        {item.new ? <p className="featured-item__img--new">NEW</p> : <></>}
        <div className="featured-item__img--mask">
          <button onClick={() => setPopupItem(item)}>QUICK VIEW</button>
        </div>
      </div>
      <div className="featured-item__content">
        <h3 className="featured-item__content--header">{item.title}</h3>
        <p className="featured-item__content--price">${item.price}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
