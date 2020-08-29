import React, { Component, ErrorInfo } from "react";

/**
 * Пока реализован как классовый компонент,
 * в следующих спринтах возможно нужно будет написать хук (или хук и хок)
 */

interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component {
  state: IErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): Partial<IErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      errorInfo,
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <h1>Что-то пошло не так</h1>
          <details>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
          </details>
        </>
      );
    }

    return this.props.children;
  }
}
