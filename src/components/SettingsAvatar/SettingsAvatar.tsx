import React, { ChangeEvent, FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { Avatar } from "components/UI";
import { authOperations, authSelectors } from "services/auth";
import { cn } from "helpers/classname";

import "./SettingsAvatar.css";

const MIME_TYPES = "image/*";

const b_ = cn("settings-avatar");

export const SettingsAvatar: FC = () => {
  const src = useSelector(authSelectors.getAvatar);
  const dispatch = useDispatch();

  const handleChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const nextAvatar = target.files![0];

    formData.append("avatar", nextAvatar);
    dispatch(authOperations.changeUserAvatar(formData));
  }, [dispatch]);

  return (
    <Avatar
      src={src}
      size="xl"
      className={b_()}
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      container={<label />}
    >
      <div className={b_("overlay")}>
        <span className={b_("overlay-text")}>{TEXT.SETTINGS.CHANGE_AVATAR}</span>
      </div>
      <input type="file" accept={MIME_TYPES} onChange={handleChange} hidden />
    </Avatar>
  );
};
