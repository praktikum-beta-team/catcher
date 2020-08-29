import React, { FC, HTMLAttributes } from "react";
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

export const Avatar: FC<IAvatarProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { src, alt, size, className, ...restAvatarProps } = props;
  const cn = createCn("avatar", className);

  return (
    <div className={cn({ size })} {...restAvatarProps}>
      {src && <img className="avatar__image" src={src} alt={alt} />}
    </div>
  );
};
