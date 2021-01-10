import React, { FC } from "react";

import { b_ } from "../Layout";

import "./Layout__Body.css";

export const Layout__Body: FC = (props) => {
  const { children } = props;

  return <main className={b_("body")}>{children}</main>;
};
