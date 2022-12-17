import { createContext, useEffect, useState } from "react";
import cookies from "react-cookies";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(cookies.load("token") || {});
  const [cart, setCart] = useState(cookies.load("cart") || []);

  const AddToCart = (product, quantity) => {
    const tempCart = [...cart];
    let flag = true;
    tempCart.forEach((cartItem, index) => {
      if (cartItem.id == product.id) {
        const newQuantity = quantity + cartItem.quantity;
        const productItem = { ...product, quantity: newQuantity };
        tempCart.splice(index, 1, productItem);
        flag = false;
      }
    });
    if (flag) {
      const productItem = { ...product, quantity };
      tempCart.push(productItem);
    }
    setCart(tempCart);
  };

  useEffect(() => {
    cookies.save("cart", cart);
  }, [cart]);

  return (
    <UserContext.Provider value={{ user, cart, setUser, setCart, AddToCart }}>
      {children}
    </UserContext.Provider>
  );
};
