import React, { FC, HTMLAttributes, isValidElement, cloneElement, ReactElement } from "react";

import { cn } from "helpers/classname";

import "./Avatar.css";

import defaultSrc from "./assets/default.jpg";

interface IAvatarProps {
  /**
   * Ссылка на изображение
   */
  src?: null | string;
  /**
   * Размер аватара
   */
  size: "s" | "m" | "xl";
  /**
   * Контейнер элемента, напрмер, <Link />
   */
  container?: ReactElement;
}

const b_ = cn("avatar");

export const Avatar: FC<IAvatarProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { src, size, className, children, container, ...restAvatarProps } = props;

  return cloneElement(
    isValidElement(container) ? container : <div />,
    {
      role: "img",
      className: b_({ size }, [className]),
      style: {
        backgroundImage: `url(${src || defaultSrc})`,
      },
      ...restAvatarProps,
    },
    children
  );
};
