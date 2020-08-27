import React, { FC, HTMLProps } from "react";

import "./Modal.scss";

interface IModalProps {
  title: string;
}

export const Modal: FC<IModalProps & HTMLProps<HTMLDivElement>> = ({ title, children }) => {
  return (
    <div className="modal">
      {title && (
        <div className="modal__header">
          <span className="moadal__title">{title}</span>
        </div>
      )}
      <div className="modal__content">{children}</div>
    </div>
  );
};
