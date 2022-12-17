import React, { useContext, useEffect } from "react";
import About from "../../components/About/About";
import Explore from "../../components/Explore/Explore";
import Featured from "../../components/Features/Featured";
// import featuredItems from "../Features/FeaturedList";
import Header from "../../components/Header/Header";
import RecommendedVideos from "../../components/RecommendedMovies/RecommendedVideos";
import Shop from "../../components/Shop/Shop";
import Sponsors from "../../components/Sponsors/Sponsors";
import exploreContent from "../../components/Explore/ExploreArr";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/common/Slider";
import FeaturedContext from "../../components/FeaturedContext";

const Homepage = ({ featuredItems }) => {
  const { getFeaturedItems } = useContext(FeaturedContext);
  const headerBackgrounds = [
    "/assets/images/header.png",
    "/assets/images/header2.png",
  ];

  // useEffect(() => {
  //   getFeaturedItems();
  // }, []);

  return (
    <React.Fragment>
      <Slider
        sliders={headerBackgrounds.map((background) => (
          <Header headerBackground={background}>
            <h1>Perfume Tips Tricks</h1>
            <button>Shop Now</button>
          </Header>
        ))}
      />

      <Featured />
      <About />
      <Shop />
      <Explore exploreContent={exploreContent} />
      <RecommendedVideos />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
