import React, { ChangeEvent, FC, useCallback } from "react";
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
  const dispatch = useDispatch();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const nextAvatar = event.target.files![0];

    formData.append("avatar", nextAvatar);
    dispatch(authOperations.changeUserAvatar(formData));
  }, []);

  return (
    <Avatar
      src={src}
      size="xl"
      className={cnSettingsAvatar()}
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      container={<label />}
    >
      <div className={cnSettingsAvatar("overlay")}>
        <span className={cnSettingsAvatar("overlay-text")}>{TEXT.SETTINGS.CHANGE_AVATAR}</span>
      </div>
      <input type="file" accept={MIME_TYPES} onChange={handleChange} hidden />
    </Avatar>
  );
};
