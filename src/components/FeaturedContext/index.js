import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FeaturedContext = createContext([]);

export const FeaturedProvider = ({ children }) => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeaturedItems = async () => {
    setLoading(true);

    const response = await axios.get("https://fakestoreapi.com/products");
    setFeaturedItems(await response.data);
  };

  const filterFeaturedItems = async (filter) => {
    setLoading(true);

    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${filter}`,
    );
    setFeaturedItems(await response.data);
  };

  useEffect(() => {
    getFeaturedItems();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [featuredItems]);

  return (
    <FeaturedContext.Provider
      value={{ featuredItems, filterFeaturedItems, getFeaturedItems }}
    >
      {loading ? (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
          onClick={() => setLoading(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      {children}
    </FeaturedContext.Provider>
  );
};

export default FeaturedContext;
