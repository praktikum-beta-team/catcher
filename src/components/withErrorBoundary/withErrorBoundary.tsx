import React, { ComponentType, FC } from "react";

import { ErrorBoundary } from "components/ErrorBoundary";

export const withErrorBoundary = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): FC<P> => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  return WrappedComponent;
};
