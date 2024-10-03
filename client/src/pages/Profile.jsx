import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return <div className="">Hello, {user.firstName}.</div>;
}
