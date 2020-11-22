import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { TEXT } from "app/constants/text";
import { cn } from "app/helpers/classname";
import { Modal } from "app/components/UI";
import { SignupForm } from "app/components/SignupForm";
import { authSelectors } from "app/services/auth";

import "./Signup.css";
import { ROUTES } from "app/constants/routes";

const b_ = cn("signup");

export const Signup: FC = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return isAuthenticated ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={b_()}>
      <Modal title={TEXT.SIGNUP.TITLE}>
        <SignupForm />
      </Modal>
    </div>
  );
};
