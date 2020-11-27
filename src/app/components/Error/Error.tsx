import React, { FC } from "react";

import { cn } from "app/helpers/classname";

import "./Error.css";

interface IErrorProps {
  title: string;
}

const b_ = cn("error");

export const Error: FC<IErrorProps> = ({ title, children }) => (
  <div className={b_()}>
    <h1 className={b_("title")}>{title}</h1>
    {children}
  </div>
);
