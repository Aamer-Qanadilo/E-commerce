import React, { lazy, useContext, Suspense } from "react";
import About from "../../components/About/About";
// import Explore from "../../components/Explore/Explore";
// import RecommendedVideos from "../../components/RecommendedMovies/RecommendedVideos";
// import Sponsors from "../../components/Sponsors/Sponsors";
import Featured from "../../components/Features/Featured";
// import featuredItems from "../Features/FeaturedList";
import Header from "../../components/Header/Header";
import Shop from "../../components/Shop/Shop";
import exploreContent from "../../components/Explore/ExploreArr";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/common/Slider";
import FeaturedContext from "../../components/FeaturedContext";

const Explore = lazy(() => import("../../components/Explore/Explore"));
const RecommendedVideos = lazy(() =>
  import("../../components/RecommendedMovies/RecommendedVideos"),
);
const Sponsors = lazy(() => import("../../components/Sponsors/Sponsors"));

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
        sliders={headerBackgrounds.map((background, index) => (
          <Header key={index} headerBackground={background}>
            <h1>Perfume Tips Tricks</h1>
            <button>Shop Now</button>
          </Header>
        ))}
      />

      <Featured />
      <About />
      <Shop />
      <Suspense fallback={<div>Loading...</div>}>
        <Explore exploreContent={exploreContent} />
        <RecommendedVideos />
        <Sponsors />
      </Suspense>
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
