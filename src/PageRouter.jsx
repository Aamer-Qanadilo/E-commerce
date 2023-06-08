import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserContext } from "./components/UserContext/UserContext";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";

const PageRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {!user ? (
            <>
              <Route path="/E-commerce/login" element={<Login />} />
              <Route path="/E-commerce/register" element={<Register />} />
            </>
          ) : null}
          <Route index element={<Homepage />} />
          <Route
            path="/E-commerce/product-list"
            element={<ProductListPage />}
          />
          <Route path="/E-commerce/product/:id" element={<ProductPage />} />

          <Route path="/E-commerce/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
