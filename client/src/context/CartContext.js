import { useContext, useState, useEffect, createContext } from "react";
import { EncryptStorage } from "encrypt-storage";
import { toaster } from "evergreen-ui";


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
    if (cart.find((item) => item._id === product._id)) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toaster.success('Your item has been successfully added from your cart!');
    console.log(cart);
  };
  const removeFromCart = (item_id, quantity) => {
    if (quantity > 1) {
      setCart(
        cart.map((item) =>
          item._id === item_id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item._id !== item_id));
    }
    toaster.warning('Your item has been removed from your cart!');
    console.log(cart);
  }
  const values = { cart, setCart, addToCart, removeFromCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
