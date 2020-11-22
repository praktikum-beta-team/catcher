import React, { FC, HTMLProps } from "react";

import { TEXT } from "app/constants/text";
import { cn } from "app/helpers/classname";

import "./Loading.css";

const b_ = cn("loader");

export const Loading: FC<HTMLProps<HTMLSpanElement>> = () => (
  <div className={b_()}>{TEXT.LOADING}</div>
);
