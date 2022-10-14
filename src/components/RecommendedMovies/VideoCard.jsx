import React from "react";
import "./styles.css";

const VideoCard = ({ title, imageUrl }) => {
  return (
    <div className="recommended-videos__body--item">
      <div
        className="recommended-videos__body--item__img"
        style={{ backgroundImage: `url(imageUrl)` }}
      >
        <img src={imageUrl} alt="" />
        <i class="fa-regular fa-circle-play"></i>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default VideoCard;
