import React from "react";
import { CircleCheckBig } from "lucide-react";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function PolicyCard({ policy }) {
  const navigate = useNavigate();

  const handleViewPress = () => {
    navigate("/policy");
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg max-w-sm mx-auto border border-gray-200">
      <div className="flex items-start">
        {/* Title and Description */}
        <div className="ml-3 flex flex-col justify-between relative">
          <div className="bg-green-500 w-4 h-4 rounded-full absolute right-0">
            <CircleCheckBig className="w-4 h-4" color="white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 font-muktaVaani line-clamp-1">
            {`${policy.title.slice(0, 18)}...`}
          </h3>
          <p className="text-sm text-gray-600 font-imprima line-clamp-2">
            {policy.description}
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-4 flex justify-between">
        {/* Download Button */}
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          <AiOutlineDownload className="mr-2 w-5 h-5" />
          <span className="font-imprima">Download</span>
        </button>

        {/* View Button */}
        <button
          onClick={handleViewPress}
          className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition"
        >
          <AiOutlineEye className="mr-2 w-5 h-5" />
          <span className="font-imprima">View</span>
        </button>
      </div>
    </div>
  );
}
