import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SignupForm } from "components/SignupForm";
import { getUser } from "store/auth/selectors";

import "./Signup.css";
import { ROUTES } from "constants/routes";

const b_ = cn("signup");

export const Signup: FC = () => {
  const user = useSelector(getUser);

  return user ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={b_()}>
      <Modal title={TEXT.SIGNUP.TITLE}>
        <SignupForm />
      </Modal>
    </div>
  );
};
