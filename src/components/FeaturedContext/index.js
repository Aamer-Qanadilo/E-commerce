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

    // let response = await axios.get("https://fakestoreapi.com/products");
    // setFeaturedItems(await response.data);

    let response = await axios.get("https://dummyjson.com/products");
    setFeaturedItems(await response.data.products);

    // if (response.status !== 200) {
    //   return;
    // }
  };

  const filterFeaturedItems = async (filter) => {
    // const response = await axios.get(
    //   `https://fakestoreapi.com/products/category/${filter}`,
    // );
    // setFeaturedItems(await response.data);
    const response = await axios.get(
      `https://dummyjson.com/products/category/${filter}`,
    );
    setFeaturedItems(await response.data.products);
  };

  const getProduct = async (id) => {
    setLoading(true);
    // const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // setProduct(await response.data);
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(await response.data);
  };

  const getCategories = async () => {
    // const response = await axios.get(
    //   "https://fakestoreapi.com/products/categories",
    // );
    const response = await axios.get(
      "https://dummyjson.com/products/categories",
    );

    if (response.data?.length > 5) setCategories(response.data.slice(0, 5));
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
