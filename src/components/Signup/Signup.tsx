import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SignupForm } from "components";
import { authSelectors } from "services/auth";

import "./Signup.css";
import { ROUTES } from "constants/routes";

const TEXT = {
  TITLE: "Регистрация",
};

const cnSignup = cn("signup");

export const Signup: FC = () => {
  const isAuthenticated = useSelector(authSelectors.getAuthStatus);

  return isAuthenticated ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={cnSignup()}>
      <Modal title={TEXT.TITLE}>
        <SignupForm />
      </Modal>
    </div>
  );
};
