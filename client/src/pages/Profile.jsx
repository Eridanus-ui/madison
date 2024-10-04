import React from "react";
import { useAuth } from "../context/AuthContext";
import PolicyList from "../components/PolicyList";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="">
      <div className="mb-4 text-xl  font-yantramanav">
        Hello, {user.firstName} {user.secondName}.
      </div>
      <div className="font-muktaVaani flex sm:justify-start md:justify-center mb-3 text-blue-600 ml-1">
        You've consented to the following policies:
      </div>
      <PolicyList />
    </div>
  );
}
