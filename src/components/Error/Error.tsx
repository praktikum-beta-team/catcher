import React, { FC } from "react";

import "./Error.css";

interface IErrorProps {
  title: string;
  details?: string;
}

export const Error: FC<IErrorProps> = ({ title, details }) => {
  return (
    <div className="error">
      <span className="error__title">{title}</span>
      <span className="error__details">{details}</span>
    </div>
  );
};
