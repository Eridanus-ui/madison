import React from "react";
import { useAuth } from "../context/AuthContext";
import PolicyList from "../components/PolicyList";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();
  const handleSignOut = async () => {
    Cookies.remove("access_token");
    await signOut();
    navigate("/sign-in");
  };

  return (
    <div className="">
      <div className="mb-4 text-xl  font-yantramanav">
        Hello, {user.firstName} {user.secondName}.
      </div>
      <div className="font-muktaVaani flex sm:justify-start md:justify-center mb-3 text-blue-600 ml-1">
        You've consented to the following policies:
      </div>
      <PolicyList />

      {/* Sign-Out Button */}
      <div className="flex justify-center py-4">
        <button
          onClick={handleSignOut}
          className="flex items-center px-4 py-2 bg-red-500 text-gray-700 rounded-lg shadow hover:bg-red-300 transition"
        >
          <LogOut className="mr-2 w-5 h-5" color="white" />
          <span className="font-imprima text-white">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
