import React, { FC } from "react";

import { cn } from "helpers/classname";

import { Header } from "components/UI";

const b_ = cn("standard-layout");

export const StandardLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className={b_()}>
      <Header className={b_("header")} />
      {children}
    </div>
  );
};
