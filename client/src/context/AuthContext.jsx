import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthVar = () => useContext(AuthContext);

export const useAuth = () => {
  return useAuthVar;
};
