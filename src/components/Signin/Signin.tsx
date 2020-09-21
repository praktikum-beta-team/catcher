import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { isAuthenticatedSelector } from "services/auth/selectors";
import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SigninForm } from "components/SigninForm";

import "./Signin.css";
import { ROUTES } from "constants/routes";

const TEXT = {
  TITLE: "Вход",
};

const cnSignin = cn("signin");

export const Signin: FC = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return isAuthenticated ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={cnSignin()}>
      <Modal title={TEXT.TITLE}>
        <SigninForm />
      </Modal>
    </div>
  );
};
