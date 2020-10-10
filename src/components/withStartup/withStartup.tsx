import React, { ComponentType, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import OfflinePluginRuntime from "offline-plugin/runtime";

import { authOperations, authSelectors } from "services/auth";

export const withStartup = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): FC<P> => {
  const WrappedComponent = (props: P) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    if (isAuthenticated) {
      dispatch(authOperations.fetchUserData());
    }

    OfflinePluginRuntime.install();

    return <Component {...props} />;
  };

  return WrappedComponent;
};
