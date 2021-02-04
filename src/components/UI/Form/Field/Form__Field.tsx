import React, { FC, HTMLAttributes } from "react";

import { classnames } from "helpers/classname";
import { b_ } from "../Form";

import "./Form__Field.css";

export const Form__Field: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...restFormFieldProps } = props;

  return (
    <div className={classnames(b_("field"), className)} {...restFormFieldProps}>
      {children}
    </div>
  );
};
