import React, { FC } from "react";

import { cn } from "helpers/classname";

import "./Error.css";

interface IErrorProps {
  title: string;
}

const cnError = cn("error");

export const Error: FC<IErrorProps> = ({ title, children }) => {
  return (
    <div className={cnError()}>
      <h1 className={cnError("title")}>{title}</h1>
      {children}
    </div>
  );
};
