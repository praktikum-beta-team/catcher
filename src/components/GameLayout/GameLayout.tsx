import React, { FC } from "react";

import { cn } from "helpers/classname";

import { Header } from "components/UI";

import "./GameLayout.css";

const b_ = cn("game-layout");

export const GameLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className={b_()}>
      <Header className={b_("header")} />
      <div className={b_("body")}>{children}</div>
    </div>
  );
};
