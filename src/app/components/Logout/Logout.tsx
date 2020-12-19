import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authOperations, authSelectors } from "app/store/auth";
import { ROUTES } from "app/constants/routes";
import { Loading } from "app/components/UI";

export const Logout: FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  useEffect(() => {
    dispatch(authOperations.logoutRequest());
  }, [dispatch]);

  return isAuthenticated ? <Loading /> : <Redirect to={ROUTES.SIGNIN} />;
};
