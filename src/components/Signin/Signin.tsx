import React, { FC } from "react";

import { cn } from "helpers/classname";
import { Modal } from "components/UI";
import { SigninForm as Form } from "components/SigninForm";

import "./Signin.scss";

const TEXT = {
  TITLE: "Вход",
};

const cnSignin = cn("signin");

export const Signin: FC = () => (
  <div className={cnSignin("wrapper")}>
    <Modal title={TEXT.TITLE}>
      <Form />
    </Modal>
  </div>
);
