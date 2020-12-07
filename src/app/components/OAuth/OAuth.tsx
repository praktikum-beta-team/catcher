import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authSelectors } from "app/store/auth";
import { ROUTES } from "app/constants/routes";
import { Loading } from "app/components/UI";

export const OAuth: FC = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const Error = useSelector(authSelectors.getError);

  if (isAuthenticated) {
    return <Redirect to={ROUTES.GAME} />;
  }
  if (Error) {
    return <Redirect to={ROUTES.SIGNIN} />;
  }
  return <Loading />;
};
