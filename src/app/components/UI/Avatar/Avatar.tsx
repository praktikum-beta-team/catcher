import React, { FC, HTMLAttributes, isValidElement, cloneElement, ReactElement } from "react";

import { BASE_DOMAIN } from "constants/api";
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

const b_ = cn("avatar");

export const Avatar: FC<IAvatarProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { src, size, className, children, container, ...restAvatarProps } = props;

  // С бэкенда возвращается адрес изображения относительно корня сервера
  const fullSrc = src ? `${BASE_DOMAIN}${src}` : src;

  return cloneElement(
    isValidElement(container) ? container : <div />,
    {
      role: "img",
      className: b_({ size }, [className]),
      style: {
        backgroundImage: `url(${fullSrc ?? DEFAULT_SRC})`,
      },
      ...restAvatarProps,
    },
    children
  );
};
