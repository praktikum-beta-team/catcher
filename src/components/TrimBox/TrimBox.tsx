import React, { FC, HTMLProps } from "react";

import { cn, classnames } from "helpers/classname";

import "./TrimBox.css";

const b_ = cn("trim-box");

export const TrimBox: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className } = props;

  return <div className={classnames(b_(), className)}>{children}</div>;
};
