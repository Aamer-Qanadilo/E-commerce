import React from "react";
import SectionTitle from "../common/SectionTitle";
import VideoCard from "./VideoCard";
import "./styles.css";

const RecommendedVideos = () => {
  const videos = [
    {
      title: "Jamdani",
      imageUrl: "/assets/images/recommended1.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imageUrl: "/assets/images/recommended2.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imageUrl: "/assets/images/recommended3.png",
    },
  ];

  return (
    <section className="recommended-videos">
      <div className="container-wrapper">
        <SectionTitle sectionHeader="Recommended Videos" />
        <div className="recommended-videos__body">
          {videos.map((video) => (
            <VideoCard {...video} />
          ))}
        </div>
        <button className="recommended-videos-button">Show More</button>
      </div>
    </section>
  );
};

export default RecommendedVideos;
