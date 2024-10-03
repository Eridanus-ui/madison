import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("api/user/verifyToken", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          throw new Error("Token verification failed");
        }
      })
      .then((data) => {
        setUser(data.user); // Access userId from the JSON response
      })
      .catch((error) => {
        console.error("Token verification error:", error); // Log the error
        Cookies.remove("access_token");
        setAuth(null);
      })
      .finally(() => {
        setLoading(false); // Ensure loading is false regardless of outcome
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthVar = () => useContext(AuthContext);

export const useAuth = () => {
  return useAuthVar();
};
