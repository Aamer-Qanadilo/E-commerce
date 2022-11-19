import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage/Homepage";
import ProductListPage from "./pages/ProductListPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/product-list" element={<ProductListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
