import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutRequest } from "services/auth/actions";

export const Logout: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutRequest());
  }, []);

  return <Redirect to="/" />;
};
