import React, { ChangeEvent, FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "app/constants/text";
import { Avatar } from "app/components/UI";
import { authOperations, authSelectors } from "app/store/auth";
import { cn } from "app/helpers/classname";

import "./SettingsAvatar.css";

const MIME_TYPES = "image/*";

const b_ = cn("settings-avatar");

export const SettingsAvatar: FC = () => {
  const src = useSelector(authSelectors.getAvatar);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();
      const nextAvatar = target.files![0];

      formData.append("avatar", nextAvatar);
      dispatch(authOperations.changeUserAvatarRequest(formData));
    },
    [dispatch]
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <Avatar src={src} size="xl" className={b_()} container={<label />}>
      <div className={b_("overlay")}>
        <span className={b_("overlay-text")}>{TEXT.SETTINGS.CHANGE_AVATAR}</span>
      </div>
      <input type="file" accept={MIME_TYPES} onChange={handleChange} hidden />
    </Avatar>
  );
};
