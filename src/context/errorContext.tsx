import React, { createContext, useContext, ReactNode } from "react";
import { text } from "../common/constants";
interface ErrorContextType {
  error: string | undefined;
  errorInfo: string | undefined;
  setError: (error: string | undefined, errorInfo: string | undefined) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [errorInfo, setErrorInfo] = React.useState<string | undefined>(
    undefined
  );

  const value = {
    error,
    errorInfo,
    setError: (error: string | undefined, errorInfo: string | undefined) => {
      setError(error);
      setErrorInfo(errorInfo);
    },
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error(text.useErrorErrorProvider);
  }
  return context;
};
