import React from "react";
import ProductListPage from "../../pages/ProductListPage";
import Navbar from "../Navbar/Navbar";
import TopPageInfo from "../TopPageInfo/TopPageInfo";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <TopPageInfo />
      <Navbar />
      {/* <Homepage featuredItems={featuredItems} />
      <ProductListPage featuredItems={featuredItems} /> */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
