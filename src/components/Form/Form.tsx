import React, { FC, HTMLProps } from "react";

import "./Form.scss";

interface IFormProps {
  error?: string;
}

export const Form: FC<IFormProps & HTMLProps<HTMLFormElement>> = ({
  error,
  children,
  ...restFormProps
}) => {
  return (
    <form {...restFormProps}>
      {error && <span className="form__error">{error}</span>}
      {children}
    </form>
  );
};
