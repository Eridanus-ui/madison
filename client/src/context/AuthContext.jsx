import { createContext, useContext, useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const auth = useRef(false);
  const activeUser = useRef(null);
  let user = activeUser.current;

  const checkAuthStatus = () => {
    const token = Cookies.get("user");
    if (token) {
      console.log("Token:", token);
      const authorizedUser = JSON.parse(token);
      activeUser.current = authorizedUser;

      // try {
      //   const decodedUser = jwtDecode(token);
      //   console.log("Decoded User:", decodedUser.user);
      //   auth.current = true;
      //   activeUser.current = decodedUser.user;
      //   Cookies.set("logged_in", true, { expires: 1 / 24 });
      // } catch (error) {
      //   console.error("Failed to decode token:", error);
      //   signOut();
      // }
    } else {
      signOut();
    }
  };

  useEffect(() => {
    setLoading(true);
    checkAuthStatus();
    setLoading(false);
  }, []);

  const signIn = (user) => {
    console.log(user);
    setLoading(true);
    activeUser.current = user;
    auth.current = true;
    Cookies.set("user", JSON.stringify(user));
    Cookies.set("logged_in", true, { expires: 1 / 24 });
    setLoading(false);
  };

  const signOut = async () => {
    try {
      activeUser.current = null;
      auth.current = false;
      Cookies.remove("access_token");
      Cookies.remove("user");
      Cookies.set("logged_in", false);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, activeUser, signIn, signOut, loading, setLoading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthVar = () => useContext(AuthContext);

export const useAuth = () => {
  return useAuthVar();
};
