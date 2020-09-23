import React, { ComponentType, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authOperations, authSelectors } from "services/auth";

export const withStartup = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): FC<P> => {
  const WrappedComponent = (props: P) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(authSelectors.getAuthStatus);

    useEffect(() => {
      if (isAuthenticated) {
        dispatch(authOperations.fetchUserData());
      }
    }, []);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
