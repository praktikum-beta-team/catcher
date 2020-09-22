import React, { Component, ErrorInfo } from "react";

interface IErrorBoundaryState {
  error: null | Error;
  errorInfo?: ErrorInfo;
}

const TEXT = {
  TITLE: "Что-то пошло не так",
};

export class ErrorBoundary extends Component<Record<string, unknown>, IErrorBoundaryState> {
  state: IErrorBoundaryState = {
    error: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>{TEXT.TITLE}</h1>
          <details>
            <summary>{error.toString()}</summary>
            {errorInfo && errorInfo.componentStack}
          </details>
        </>
      );
    }

    return children;
  }
}
