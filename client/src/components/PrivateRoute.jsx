import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { auth } = useAuth();

  if (auth === false) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
