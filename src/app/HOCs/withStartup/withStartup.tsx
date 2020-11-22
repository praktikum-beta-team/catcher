import React, { ComponentType, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authOperations, authSelectors } from "app/services/auth";

export const withStartup = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): FC<P> => {
  const WrappedComponent = (props: P) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    if (isAuthenticated) {
      dispatch(authOperations.fetchUserData());
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};
