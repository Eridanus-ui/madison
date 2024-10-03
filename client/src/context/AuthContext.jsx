import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const signIn = (user) => {
    setUser(user);
    setAuth(true);
  };

  const signOut = () => {
    setUser(null);
    setAuth(false);
    Cookies.remove("access_token");
  };

  return (
    <AuthContext.Provider value={{ auth, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthVar = () => useContext(AuthContext);

export const useAuth = () => {
  return useAuthVar();
};
