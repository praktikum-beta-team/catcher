import React, { FC } from "react";

import { cn } from "helpers/classname";

import { Header } from "../Header";

export const b_ = cn("layout");

export const Layout: FC = (props) => {
  const { children } = props;

  return (
    <div className={b_()}>
      <Header />
      {children}
    </div>
  );
};
