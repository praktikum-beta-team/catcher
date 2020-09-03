import React, { FC, HTMLAttributes } from "react";
import { cn } from "@bem-react/classname";

import "./Button.scss";

interface IButtonProps {
  /**
   * Внешний вид кнопки
   */
  view: "plain" | "action" | "pseudo";
}

const cnButton = cn("button");

export const Button: FC<IButtonProps & HTMLAttributes<HTMLButtonElement>> = (props) => {
  const { view, className, ...restButtonProps } = props;

  return <button className={cnButton({ view }, [className])} {...restButtonProps} />;
};
