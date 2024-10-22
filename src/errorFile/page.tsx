import React from "react";
import errorImage from "../assets/errorImage.png";
import { text } from "../common/constants";
interface ErrorFileProps {
  error?: string;
  errorInfo?: string;
}

const ErrorFile: React.FC<ErrorFileProps> = ({ error, errorInfo }) => {
    
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img src={errorImage} alt="Error occurred" className="w-60 h-60" />
        </div>
        <div className="text-center">
          <p className="text-gray-400">
            {text.Error} {error || "Unknown error"}
          </p>
          <p className="text-gray-400">
            {text.errorInfo} {errorInfo || "No additional information"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorFile;
