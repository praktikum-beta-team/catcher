import React, { FC } from "react";
import { createCn } from "bem-react-classname";

import "./Avatar.scss";

interface IAvatarProps {
  src?: string;
  alt?: string;
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
