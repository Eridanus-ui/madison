// import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const currentUser = null;

  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
