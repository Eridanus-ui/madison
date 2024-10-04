import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { set } from "mongoose";

export default function PrivateRoute() {
  // const authorized = useRef(false);
  const authorizedBool = Cookies.get("logged_in");
  const token = Cookies.get("user");

  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authorizedBool === false && !token) {
    console.log(authorizedBool);

    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
