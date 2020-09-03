import React, { FC, HTMLAttributes } from "react";
import { cn } from "@bem-react/classname";

import "./Avatar.scss";

interface IAvatarProps {
  /**
   * Ссылка на изображение
   */
  src?: string;
  /**
   * Альтернативный текст
   */
  alt?: string;
  /**
   * Размер аватара
   */
  size: "s" | "m" | "xl";
}

const cnAvatar = cn("avatar");

export const Avatar: FC<IAvatarProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { src, alt, size, className, ...restAvatarProps } = props;

  return (
    <div className={cnAvatar({ size }, [className])} {...restAvatarProps}>
      {src && <img className="avatar__image" src={src} alt={alt} />}
    </div>
  );
};
