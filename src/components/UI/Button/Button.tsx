import React, { ButtonHTMLAttributes, FC } from "react";

import { cn } from "helpers/classname";

import "./Button.css";

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

export const Button: FC<IButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "width">> = (
  props
) => {
  const { children, view, width, className, ...restButtonProps } = props;

  return (
    <button className={cnButton({ view, width }, [className])} {...restButtonProps}>
      <span className={cnButton("text")}>{children}</span>
    </button>
  );
};
