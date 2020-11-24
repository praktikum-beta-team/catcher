import React, { FC, HTMLProps } from "react";

import { cn } from "app/helpers/classname";

import "./Form.css";

interface IFormProps {
  /**
   * Сообщение об ошибке
   */
  error: null | string;
}

const b_ = cn("form");

export const Form: FC<IFormProps & HTMLProps<HTMLFormElement>> = (props) => {
  const { error, children, className, ...restFormProps } = props;

  return (
    <form className={b_({}, [className])} {...restFormProps}>
      {error && <span className={b_("error")}>{error}</span>}
      {children}
    </form>
  );
};