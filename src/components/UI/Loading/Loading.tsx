import React, { FC, HTMLProps } from "react";

import { cn } from "helpers/classname";

import "./Loading.scss";

const TEXT = {
  LOADING: "Загрузка...",
};

const cnLoading = cn("loading");

export const Loading: FC<HTMLProps<HTMLSpanElement>> = (props) => {
  const { className, ...restLoadingProps } = props;

  return (
    <span className={cnLoading({}, [className])} {...restLoadingProps}>
      {TEXT.LOADING}
    </span>
  );
};
