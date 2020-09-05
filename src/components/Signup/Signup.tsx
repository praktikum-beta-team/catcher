import React, { FC } from "react";

import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SignupForm as Form } from "components/SignupForm";

import "./Signup.scss";

const TEXT = {
  TITLE: "Регистрация",
};

const cnSignup = cn("signup");

export const Signup: FC = () => (
  <div className={cnSignup("wrapper")}>
    <Modal title={TEXT.TITLE}>
      <Form />
    </Modal>
  </div>
);
