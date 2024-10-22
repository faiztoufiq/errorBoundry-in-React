import React, { Component, ReactNode } from "react";
import ErrorFile from "../src/errorFile/page";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: string;
  errorInfo?: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error.message,
      errorInfo: error.stack,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
    logErrorToMyService(error, errorInfo);

    window.history.pushState({}, "", "/something-went-wrong");
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFile error={this.state.error} errorInfo={this.state.errorInfo} />
      );
    }

    return this.props.children;
  }
}

function logErrorToMyService(error: Error, errorInfo: React.ErrorInfo) {}
