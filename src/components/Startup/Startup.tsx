import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { fetchUserRequest } from "services/auth";

export const Startup: FC = ({ children }) => {
  const dispatch = useDispatch();

  if (localStorage.getItem("isAuthenticated")) {
    dispatch(fetchUserRequest());
  }

  return children as React.ReactElement;
};
