import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

import { authOperations, authSelectors, authActions } from "app/store/auth";
import { ROUTES } from "app/constants/routes";
import { Loading } from "app/components/UI";

const getHashParam = (hash: string, param: string) => {
  const value = new RegExp(`${param}=([^&]+)`).exec(hash);
  return value ? decodeURI(value[1]) : null;
};

export const OAuth: FC = () => {
  const { hash } = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const Error = useSelector(authSelectors.getError);
  const token = getHashParam(hash, "access_token");
  const tokenError = getHashParam(hash, "error_description");

  useEffect(() => {
    if (token) {
      dispatch(authActions.setYaToken(token));
      dispatch(authOperations.getYandexPasportInfo(token));
    }
    if (tokenError) {
      dispatch(authActions.authFailure(tokenError));
    }
  }, [dispatch, token, tokenError]);

  if (isAuthenticated) {
    return <Redirect to={ROUTES.GAME} />;
  }
  if (Error || !token) {
    return <Redirect to={ROUTES.SIGNIN} />;
  }
  return <Loading />;
};
