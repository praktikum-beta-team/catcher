import React, { FC, HTMLProps } from "react";
import { cn } from "@bem-react/classname";

import "./Input.scss";

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
}) => {
  return (
    <div className={cnInput({ invalid: !!error }, [className])}>
      <input className="input__control" {...restInputProps} />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};
