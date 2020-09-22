import React, { FC, HTMLProps } from "react";

import { cn } from "helpers/classname";

import "./Loading.css";

const TEXT = {
  LOADING: "Загрузка...",
};

const cnLoading = cn("loader");

export const Loading: FC<HTMLProps<HTMLSpanElement>> = () => {
  return <div className={cnLoading()}>{TEXT.LOADING}</div>;
};
