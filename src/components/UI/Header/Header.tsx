import React, { FC, HTMLProps } from "react";

import { cn } from "helpers/classname";

import "./Header.css";

const cnHeader = cn("header");

export const Header: FC<HTMLProps<HTMLHeadElement>> = (props) => {
  const { className, ...restHeaderProps } = props;

  return <header className={cnHeader({}, [className])} {...restHeaderProps}></header>;
};
