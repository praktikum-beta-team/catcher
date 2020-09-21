import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutRequest } from "services/auth/actions";
import { ROUTES } from "constants/routes";
import { isAuthenticatedSelector } from "services/auth/selectors";
import { Loading } from "components/UI";

export const Logout: FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  useEffect(() => {
    dispatch(logoutRequest());
  }, []);

  return isAuthenticated ? <Loading /> : <Redirect to={ROUTES.SIGNIN} />;
};
