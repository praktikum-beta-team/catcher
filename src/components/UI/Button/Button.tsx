import React, { ButtonHTMLAttributes, cloneElement, FC, isValidElement, ReactElement } from "react";

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
  /**
   * Контейнер элемента, напрмер, <Link />
   */
  container?: ReactElement;
}

const b_ = cn("button");

export const Button: FC<IButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "width">> = (
  props
) => {
  const { children, view, width, className, container, ...restButtonProps } = props;
  const buttonChildren = <span className={b_("text")}>{children}</span>;

  return cloneElement(
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    isValidElement(container) ? container : <button />,
    {
      className: b_({ view, width }, [className]),
      ...restButtonProps,
    },
    buttonChildren
  );
};
