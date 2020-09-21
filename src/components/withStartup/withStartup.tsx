import React, { ComponentType, FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUserRequest } from "services/auth";

export const withStartup = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): FC<P> => {
  const WrappedComponent = (props: P) => {
    const dispatch = useDispatch();

    useEffect(() => {
      if (localStorage.getItem("isAuthenticated")) {
        dispatch(fetchUserRequest());
      }
    }, []);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
