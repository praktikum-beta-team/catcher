import React, { FC } from "react";

import { cn } from "helpers/classname";

import "./Error.css";

interface IErrorProps {
  title: string;
  details?: string;
}

const cnError = cn("error");

export const Error: FC<IErrorProps> = ({ title, details }) => {
  return (
    <div className={cnError()}>
      <span className={cnError("title")}>{title}</span>
      <span className={cnError("details")}>{details}</span>
    </div>
  );
};
