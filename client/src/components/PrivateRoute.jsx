import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user } = useAuth();
  console.log(user);

  return user ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
