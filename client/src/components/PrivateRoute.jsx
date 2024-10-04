import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { auth, loading } = useAuth();

  if (loading) {
    // Display a loading message or spinner while authentication is in progress
    return <div>Loading...</div>; // You can replace this with a spinner or any other loading indicator.
  }

  if (auth === false) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
