import React, { FC, HTMLAttributes, isValidElement, cloneElement, ReactElement } from "react";

import { cn } from "helpers/classname";

import "./Avatar.css";

const DEFAULT_SRC = "https://api.adorable.io/avatars/220/abott@adorable.png"; // В дальнейшем заменим на собственное изображение

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

const cnAvatar = cn("avatar");

export const Avatar: FC<IAvatarProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { src, size, className, children, container, ...restAvatarProps } = props;

  return cloneElement(
    isValidElement(container) ? container : <div />,
    {
      role: "img",
      className: cnAvatar({ size }, [className]),
      style: {
        backgroundImage: `url(${src ?? DEFAULT_SRC})`,
      },
      ...restAvatarProps,
    },
    children
  );
};
