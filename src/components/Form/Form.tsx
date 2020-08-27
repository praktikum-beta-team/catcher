import React, { FC, HTMLProps } from "react";

import "./Form.scss";

interface IFormProps {
  /**
   * Сообщение об ошибке
   */
  error?: string;
}

export const Form: FC<IFormProps & HTMLProps<HTMLFormElement>> = ({
  error,
  children,
  ...restFormProps
}) => (
  <form {...restFormProps}>
    {error && <span className="form__error">{error}</span>}
    {children}
  </form>
);
