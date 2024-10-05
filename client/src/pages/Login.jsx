import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "0123456789",
    idNumber: "123456789",
    firstName: "John",
    secondName: "Doe",
  });

  const { signIn } = useAuth();
  const navigate = useNavigate();

  //   // Verify token on initial load
  //   const persistentSignIn = async () => {
  //     try {
  //       const res = await fetch("api/user/verifyToken", {
  //         method: "GET",
  //         credentials: "include",
  //       });
  //       const response = await res.json();
  //       if (!res.ok) {
  //         console.log(response.message);
  //         return response.message;
  //       }
  //       signIn(response.user);
  //       setLoading(false);
  //       console.log(response.user);
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //     }
  //   };

  //   persistentSignIn();
  // }, []);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      const response = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 500) {
          throw Error("Server Error!!");
        }

        console.log(errorData);
        throw Error(errorData.error);
      }

      const responseData = await response.json();
      signIn(responseData.user);
      navigate("/");
      return responseData;
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      handleSubmit(),
      {
        loading: "Just a moment...",
        success: "Successfully logged in!",
        error: (error) => error.message || "Error when fetching user!",
      },
      {
        id: "loginToast",
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <Header />
      <div className="flex items-center justify-center my-4">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center font-yantramanav">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-start">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="block w-full p-2 border font-muktaVaani border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-start">
              ID Number
            </label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              required
              className="block w-full p-2 border font-muktaVaani border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your ID number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-start">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="block w-full p-2 border font-muktaVaani border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-start">
              Second Name
            </label>
            <input
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleInputChange}
              required
              className="block w-full p-2 border font-muktaVaani border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your second name"
            />
          </div>

          <button
            disabled={submitting}
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 font-yantramanav rounded hover:bg-blue-600 transition duration-200"
          >
            {submitting ? "Submitting..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
