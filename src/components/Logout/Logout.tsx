import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authOperations, authSelectors } from "store/auth";
import { ROUTES } from "constants/routes";
import { Loading } from "components/UI";

export const Logout: FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const authType = useSelector(authSelectors.getAuthType);

  useEffect(() => {
    dispatch(authType === "API" ? authOperations.logoutRequest() : authOperations.logoutSuccess());
  }, [authType, dispatch]);

  return isAuthenticated ? <Loading /> : <Redirect to={ROUTES.SIGNIN} />;
};
