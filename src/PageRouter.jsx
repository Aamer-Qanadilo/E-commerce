import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./pages/Homepage/Homepage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
