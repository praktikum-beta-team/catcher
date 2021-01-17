import React, { FC } from "react";
import { useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Loading } from "components/UI";
import { SettingsForm, SettingsAvatar, StandardLayout } from "components";
import { authSelectors } from "store/auth";

import "./Settings.css";

const b_ = cn("settings");

export const Settings: FC = () => {
  const user = useSelector(authSelectors.getUser);

  return user ? (
    <StandardLayout>
      <div className={b_()}>
        <h1 className={b_("title")}>{TEXT.SETTINGS.TITLE}</h1>
        <div className={b_("layout")}>
          <div className={b_("column")}>
            <SettingsAvatar />
          </div>
          <div className={b_("column")}>
            <SettingsForm />
          </div>
        </div>
      </div>
    </StandardLayout>
  ) : (
    <Loading />
  );
};
