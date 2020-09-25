import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { TEXT } from "constants/text";
import { getAuthStatus } from "services/auth/selectors";
import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SigninForm } from "components/SigninForm";
import { ROUTES } from "constants/routes";

import "./Signin.css";

const cnSignin = cn("signin");

export const Signin: FC = () => {
  const isAuthenticated = useSelector(getAuthStatus);

  return isAuthenticated ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={cnSignin()}>
      <Modal title={TEXT.SIGNIN.TITLE}>
        <SigninForm />
      </Modal>
    </div>
  );
};
