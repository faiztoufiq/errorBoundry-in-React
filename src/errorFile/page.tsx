import errorImage from "../assets/errorImage.png";
import { text } from "../common/constants";
import { useLocation } from "react-router-dom";

export const ErrorFile = () => {
  const location = useLocation();
  const { error, errorInfo } = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img src={errorImage} alt="Error occurred" className="w-60 h-60" />
        </div>
        <div className="text-center">
          <p className="text-gray-400">
            {text.Error} {error || text.unknownError}
          </p>
          <p className="text-gray-400">
            {text.errorInfo} {errorInfo || text.noAdditionalInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorFile;
