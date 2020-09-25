import React, { Component, ErrorInfo } from "react";

import { Error } from "../Error";

interface IErrorBoundaryState {
  error: null | Error;
  errorInfo?: ErrorInfo;
}

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
        <Error title={error.toString()}>
          <details>details={errorInfo?.componentStack}</details>
        </Error>
      );
    }

    return children;
  }
}
