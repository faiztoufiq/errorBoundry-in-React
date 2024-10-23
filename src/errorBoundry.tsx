import React, { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { text } from "./common/constants";
import { routes } from "./common/routes";
interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      const error = event.error || new Error(text.unknownError);
      const stack = error.stack || text.noStackTraceAvailable;

      navigate(routes.error, {
        state: { error: error.message, errorInfo: stack },
        replace: true,
      });
    };

    window.addEventListener("error", handleGlobalError);

    return () => {
      window.removeEventListener("error", handleGlobalError);
    };
  }, [navigate]);

  return <>{children}</>;
};

export default ErrorBoundary;
