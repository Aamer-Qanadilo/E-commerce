import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loader from "../common/Loader";

const FeaturedContext = createContext([]);

export const FeaturedProvider = ({ children }) => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);

  const getFeaturedItems = async () => {
    setLoading(true);

    const response = await axios.get("https://fakestoreapi.com/products");
    setFeaturedItems(await response.data);
  };

  const filterFeaturedItems = async (filter) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${filter}`,
    );
    setFeaturedItems(await response.data);
  };

  const getProduct = async (id) => {
    setLoading(true);
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(response);
    console.log(await response.data);
    setProduct(await response.data);
  };

  const getCategories = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories",
    );
    setCategories(response.data);
  };

  useEffect(() => {
    getFeaturedItems();
    getCategories();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [featuredItems, product]);

  return (
    <FeaturedContext.Provider
      value={{
        featuredItems,
        product,
        categories,
        filterFeaturedItems,
        getFeaturedItems,
        getProduct,
      }}
    >
      {loading ? <Loader /> : children}
    </FeaturedContext.Provider>
  );
};

export default FeaturedContext;
