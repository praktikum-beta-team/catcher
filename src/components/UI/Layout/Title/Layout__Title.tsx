import React, { FC } from "react";

import { b_ } from "../Layout";

import "./Layout__Title.css";

export const Layout__Title: FC = (props) => {
  const { children } = props;

  return <h1 className={b_("title")}>{children}</h1>;
};
