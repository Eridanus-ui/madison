import React from "react";
import BeatLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <BeatLoader className="h-12 w-12" color="blue" />
    </div>
  );
}
