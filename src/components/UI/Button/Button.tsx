import React, { FC, HTMLAttributes } from "react";

import { cn } from "helpers/classname";

import "./Button.scss";

interface IButtonProps {
  /**
   * Ширина кнопки
   */
  width?: "auto" | "max";
  /**
   * Внешний вид кнопки
   */
  view: "plain" | "action" | "pseudo";
}

const cnButton = cn("button");

export const Button: FC<IButtonProps & Omit<HTMLAttributes<HTMLButtonElement>, "width">> = (
  props
) => {
  const { children, view, width, className, ...restButtonProps } = props;

  return (
    <button className={cnButton({ view, width }, [className])} {...restButtonProps}>
      <span className={cnButton("text")}>{children}</span>
    </button>
  );
};
