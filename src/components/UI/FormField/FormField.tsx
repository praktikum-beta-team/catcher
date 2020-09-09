import React, { FC, HTMLAttributes } from "react";

import { cn } from "helpers/classname";

import "./FormField.scss";

const cnFormField = cn("form-field");

export const FormField: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...restFormFieldProps } = props;

  return (
    <div className={cnFormField({}, [className])} {...restFormFieldProps}>
      {children}
    </div>
  );
};
