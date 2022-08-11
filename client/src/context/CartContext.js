import { useContext, useState, useEffect, createContext } from "react";
import { EncryptStorage } from "encrypt-storage";

const CartContext = createContext();

const encryptStorage = new EncryptStorage("secret-key", {
  prefix: "@eCommerceCart:",
});
const def = encryptStorage.getItem("item");

var DefaultCart = def || [];
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(DefaultCart);

  useEffect(() => {
    encryptStorage.setItem("item", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log(cart);
  };

  const values = { cart, setCart, addToCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
