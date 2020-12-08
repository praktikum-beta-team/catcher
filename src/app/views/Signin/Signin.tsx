import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { TEXT } from "app/constants/text";
import { authSelectors } from "app/store/auth";
import { cn } from "app/helpers/classname";
import { Modal } from "app/components/UI";
import { SigninForm } from "app/components/SigninForm";
import { ROUTES } from "app/constants/routes";

import "./Signin.css";

const b_ = cn("signin");

export const Signin: FC = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return isAuthenticated ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={b_()}>
      <Modal title={TEXT.SIGNIN.TITLE}>
        <SigninForm />
      </Modal>
    </div>
  );
};
