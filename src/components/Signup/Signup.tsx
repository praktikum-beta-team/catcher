import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SignupForm } from "components/SignupForm";
import { authSelectors } from "services/auth";

import "./Signup.css";
import { ROUTES } from "constants/routes";

const cnSignup = cn("signup");

export const Signup: FC = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return isAuthenticated ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={cnSignup()}>
      <Modal title={TEXT.SIGNUP.TITLE}>
        <SignupForm />
      </Modal>
    </div>
  );
};
