import React, { FC, HTMLProps } from "react";
import { createCn } from "bem-react-classname";

import "./Input.scss";

interface IInputProps {
  /**
   * Сообщение об ошибке
   */
  error?: string;
}

export const Input: FC<IInputProps & HTMLProps<HTMLInputElement>> = ({
  error,
  ...restInputProps
}) => {
  const cn = createCn("input");

  return (
    <div className={cn({ invalid: !!error })}>
      <input className="input__control" {...restInputProps} />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};
