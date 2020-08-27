import React, { FC } from "react";
import { createCn } from "bem-react-classname";

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

export const Avatar: FC<IAvatarProps> = ({ src, alt, size, ...restAvatarProps }) => {
  const cn = createCn("avatar");

  return (
    <div className={cn({ size })} {...restAvatarProps}>
      {src && <img className="avatar__image" src={src} alt={alt} />}
    </div>
  );
};
