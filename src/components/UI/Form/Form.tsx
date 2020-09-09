import React, { FC, HTMLProps } from "react";

import { cn } from "helpers/classname";

import "./Form.scss";

interface IFormProps {
  /**
   * Сообщение об ошибке
   */
  error?: string;
}

const cnForm = cn("form");

export const Form: FC<IFormProps & HTMLProps<HTMLFormElement>> = (props) => {
  const { error, children, className, ...restFormProps } = props;

  return (
    <form className={cnForm({}, [className])} {...restFormProps}>
      {error && <span className={cnForm("error")}>{error}</span>}
      {children}
    </form>
  );
};
