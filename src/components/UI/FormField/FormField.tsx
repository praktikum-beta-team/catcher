import React, { FC, HTMLAttributes } from "react";

import { cn } from "helpers/classname";

import "./FormField.css";

const b_ = cn("form-field");

export const FormField: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...restFormFieldProps } = props;

  return (
    <div className={b_({}, [className])} {...restFormFieldProps}>
      {children}
    </div>
  );
};
