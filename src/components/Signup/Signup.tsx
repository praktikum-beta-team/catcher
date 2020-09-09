import React, { FC } from "react";

import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SignupForm } from "components/SignupForm";

import "./Signup.scss";

const TEXT = {
  TITLE: "Регистрация",
};

const cnSignup = cn("signup");

export const Signup: FC = () => (
  <div className={cnSignup()}>
    <Modal title={TEXT.TITLE}>
      <SignupForm />
    </Modal>
  </div>
);
