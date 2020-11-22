import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authOperations, authSelectors } from "app/services/auth";
import { ROUTES } from "app/constants/routes";
import { Loading } from "app/components/UI";

export const Logout: FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  useEffect(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return isAuthenticated ? <Loading /> : <Redirect to={ROUTES.SIGNIN} />;
};
