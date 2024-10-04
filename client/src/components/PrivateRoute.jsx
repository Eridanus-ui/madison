import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";

export default function PrivateRoute() {
  const { loading } = useAuth();

  const authorizedBool = Cookies.get("logged_in") === "true";
  const token = Cookies.get("user");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authorizedBool || !token) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
