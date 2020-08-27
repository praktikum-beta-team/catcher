import React, { FC, HTMLAttributes } from "react";
import { createCn } from "bem-react-classname";

import "./Button.scss";

interface IButtonProps {
  view: "plain" | "action" | "pseudo";
  to?: string;
}

export const Button: FC<IButtonProps & HTMLAttributes<HTMLButtonElement>> = (props) => {
  const cn = createCn("button");
  const { view, className, ...restButtonProps } = props;
  const buttonClassName = cn({ view }) + (className ? ` ${className}` : "");

  return <button className={buttonClassName} {...restButtonProps} />;
};
