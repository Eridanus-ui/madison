import React from "react";
import logo from "/logo.png";
export default function Header() {
  return (
    <>
      <div className="flex justify-center">
        <img src={logo} alt="" className="w-72" />
      </div>
    </>
  );
}
