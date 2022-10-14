import React from "react";
import About from "../About/About";
import Explore from "../Explore/Explore";
import Featured from "../Features/Featured";
import featuredItems from "../Features/FeaturedList";
import Header from "../Header/Header";
import RecommendedVideos from "../RecommendedMovies/RecommendedVideos";
import Shop from "../Shop/Shop";
import Sponsors from "../Sponsors/Sponsors";
import exploreContent from "../Explore/ExploreArr";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <Featured featuredItems={featuredItems} />
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
