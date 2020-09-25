import React, { FC, HTMLProps } from "react";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";

import "./Loading.css";

const cnLoading = cn("loader");

export const Loading: FC<HTMLProps<HTMLSpanElement>> = () => {
  return <div className={cnLoading()}>{TEXT.LOADING}</div>;
};
