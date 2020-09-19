import React, { FC, HTMLProps } from "react";

import { cn } from "helpers/classname";

import "./Input.css";

interface IInputProps {
  /**
   * Сообщение об ошибке
   */
  error?: string;
}

const cnInput = cn("input");

export const Input: FC<IInputProps & HTMLProps<HTMLInputElement>> = ({
  error,
  className,
  ...restInputProps
}) => (
  <div className={cnInput({ invalid: Boolean(error) }, [className])}>
    <input className={cnInput("control")} {...restInputProps} />
    {error && <span className={cnInput("error")}>{error}</span>}
  </div>
);
