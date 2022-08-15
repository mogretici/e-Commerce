import { useContext, useState, useEffect, createContext } from "react";
import { fetchMe, fetchLogout } from "../Api";
import { Flex, Spinner } from "@chakra-ui/react";
import { EncryptStorage } from "encrypt-storage";
import { useCart } from "./CartContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setCart } = useCart();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const encryptStorage = new EncryptStorage("secret-key", {
    prefix: "@eCommerceCart:",
  });
  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setLoggedIn(true);
        setUser(me);
        setLoading(false);
        console.log(me);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const Login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const Logout = async () => {
    setLoggedIn(false);
    setUser(null);
    await fetchLogout();
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    encryptStorage.removeItem("item");
    setCart([]);
  };
  const values = { user, loggedIn, Login, Logout };

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
        />
      </Flex>
    );
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
