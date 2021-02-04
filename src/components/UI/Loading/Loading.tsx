import React, { FC, HTMLProps } from "react";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";

import "./Loading.css";

const b_ = cn("loader");

export const Loading: FC<HTMLProps<HTMLSpanElement>> = () => (
  <div className={b_()}>{TEXT.LOADING}</div>
);
