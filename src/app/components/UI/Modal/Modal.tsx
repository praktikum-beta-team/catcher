import React, { FC, HTMLProps } from "react";

import { cn } from "app/helpers/classname";

import "./Modal.css";

interface IModalProps {
  /**
   * Заголовок
   */
  title: string;
}

const b_ = cn("modal");

export const Modal: FC<IModalProps & HTMLProps<HTMLDivElement>> = (props) => {
  const { title, children, className } = props;
  return (
    <div className={b_({}, [className])}>
      {title && (
        <div className={b_("header")}>
          <span className={b_("title")}>{title}</span>
        </div>
      )}
      <div className={b_("content")}>{children}</div>
    </div>
  );
};
