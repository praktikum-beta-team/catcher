import React, { FC, HTMLProps } from "react";

import { cn } from "helpers/classname";

import "./Modal.scss";

interface IModalProps {
  /**
   * Заголовок
   */
  title: string;
}

const cnModal = cn("modal");

export const Modal: FC<IModalProps & HTMLProps<HTMLDivElement>> = (props) => {
  const { title, children, className } = props;
  return (
    <div className={cnModal({}, [className])}>
      {title && (
        <div className={cnModal("header")}>
          <span className={cnModal("title")}>{title}</span>
        </div>
      )}
      <div className={cnModal("content")}>{children}</div>
    </div>
  );
};
