import React, { FC, InputHTMLAttributes } from "react";

import { cn } from "helpers/classname";

import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Сообщение об ошибке
   */
  error?: string;
}

const b_ = cn("input");

export const Input: FC<IInputProps> = ({ error, className, ...restInputProps }) => (
  <div className={b_({ invalid: Boolean(error) }, [className])}>
    <input className={b_("control")} {...restInputProps} />
    {error && <span className={b_("error")}>{error}</span>}
  </div>
);
