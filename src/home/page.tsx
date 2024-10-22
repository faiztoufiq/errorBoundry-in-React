import React, { useState } from "react";
import { text } from "../common/constants";

const Home: React.FC = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const handleErrorClick = () => {
    setShouldThrowError(true);
  };

  if (shouldThrowError) {
    throw new Error("Test Error from button click");
  }

  return (
    <div className="flex gap-10 justify-center items-center h-screen">
      <h1 className="mb-4 text-2xl font-bold">{text.homePageTitle}</h1>
      <button
        onClick={handleErrorClick}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
      >
        {text.throwError}
      </button>
    </div>
  );
};

export default Home;
