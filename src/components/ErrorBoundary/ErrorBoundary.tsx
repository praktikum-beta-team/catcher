import React, { Component, ErrorInfo } from "react";

interface IErrorBoundaryState {
  error: null | Error;
  errorInfo?: ErrorInfo;
}

const TEXT = {
  TITLE: "Что-то пошло не так",
};

export class ErrorBoundary extends Component {
  state: IErrorBoundaryState = {
    error: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): React.ReactNode {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>{TEXT.TITLE}</h1>
          <details>
            <summary>{error && error.toString()}</summary>
            {errorInfo && errorInfo.componentStack}
          </details>
        </>
      );
    }

    return children;
  }
}
