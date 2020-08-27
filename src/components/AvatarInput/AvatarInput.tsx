import React, { FC, useRef } from "react";

import { Avatar } from "../Avatar";

import "./AvatarInput.scss";

export const AvatarInput: FC = () => {
  const controlRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    const node = controlRef.current;
    if (node) {
      node.click();
    }
  };

  return (
    <>
      <Avatar size="xl" onClick={handleClick} className="avatar-input" />
      <input type="file" ref={controlRef} hidden />
    </>
  );
};
