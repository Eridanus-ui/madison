import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { set } from "mongoose";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const signIn = (user) => {
    setUser(user);
    setAuth(true);
    setLoading(false);
  };

  const signOut = async () => {
    try {
      setUser(null);
      setAuth(false);
      Cookies.remove("access_token");
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, user, signIn, signOut, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthVar = () => useContext(AuthContext);

export const useAuth = () => {
  return useAuthVar();
};
