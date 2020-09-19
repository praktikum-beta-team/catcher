import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutRequest } from "services/auth/actions";
import { ROUTES } from "constants/routes";

export const Logout: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutRequest());
  }, []);

  return <Redirect to={ROUTES.SIGNIN} />;
};
