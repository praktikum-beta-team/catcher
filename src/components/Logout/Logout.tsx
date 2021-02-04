import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { Loading } from "components/UI";
import { logoutRequest } from "store/auth/operations";
import { getIsAuthenticated } from "store/auth/selectors";
import { ROUTES } from "constants/routes";

export const Logout: FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);

  useEffect(() => {
    dispatch(logoutRequest());
  }, [dispatch]);

  return isAuthenticated ? <Loading /> : <Redirect to={ROUTES.SIGNIN} />;
};
