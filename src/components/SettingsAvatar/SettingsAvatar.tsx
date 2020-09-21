import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Avatar } from "components/UI";
import { avatarSelector, changeAvatarRequest } from "services/auth";
import { cn } from "helpers/classname";
import { BASE_DOMAIN } from "constants/api";

import "./SettingsAvatar.css";

const MIME_TYPES = "image/*";

const TEXT = {
  PICK: "Изменить фото профиля",
};

const cnSettingsAvatar = cn("settings-avatar");

export const SettingsAvatar: FC = () => {
  const src = useSelector(avatarSelector);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  // С бэкенда возвращается адрес изображения относительно корня сервера
  const fullSrc = src ? `${BASE_DOMAIN}${src}` : src;

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
      dispatch(changeAvatarRequest(formData));
    }
  };

  return (
    <Avatar src={fullSrc} size="xl" onClick={handleClick} className={cnSettingsAvatar()}>
      <div className={cnSettingsAvatar("overlay")}>
        <span className={cnSettingsAvatar("overlay-text")}>{TEXT.PICK}</span>
      </div>
      <input type="file" accept={MIME_TYPES} onChange={handleChange} ref={inputRef} hidden />
    </Avatar>
  );
};
