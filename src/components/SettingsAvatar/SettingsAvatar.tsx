import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { Avatar } from "components/UI";
import { authOperations, authSelectors } from "services/auth";
import { cn } from "helpers/classname";

import "./SettingsAvatar.css";

const MIME_TYPES = "image/*";

const cnSettingsAvatar = cn("settings-avatar");

export const SettingsAvatar: FC = () => {
  const src = useSelector(authSelectors.getAvatar);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleClick = (): void => {
    const input = inputRef.current;

    if (input) {
      input.click();
    }
  };

  const handleChange = () => {
    const input = inputRef.current;

    if (input && input.files?.length) {
      const nextAvatarFile = input.files[0];
      const formData = new FormData();

      formData.append("avatar", nextAvatarFile);
      dispatch(authOperations.changeUserAvatar(formData));
    }
  };

  return (
    <Avatar src={src} size="xl" onClick={handleClick} className={cnSettingsAvatar()}>
      <div className={cnSettingsAvatar("overlay")}>
        <span className={cnSettingsAvatar("overlay-text")}>{TEXT.SETTINGS.CHANGE_AVATAR}</span>
      </div>
      <input type="file" accept={MIME_TYPES} onChange={handleChange} ref={inputRef} hidden />
    </Avatar>
  );
};
