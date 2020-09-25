import React, { FC } from "react";
import { useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Layout, Loading } from "components/UI";
import { SettingsForm } from "components/SettingsForm";
import { SettingsAvatar } from "components/SettingsAvatar";
import { authSelectors } from "services/auth";

import "./Settings.css";

const cnSettings = cn("settings");

export const Settings: FC = () => {
  const user = useSelector(authSelectors.getUser);

  return user ? (
    <Layout>
      <div className={cnSettings()}>
        <h1 className={cnSettings("title")}>{TEXT.SETTINGS.TITLE}</h1>
        <div className={cnSettings("layout")}>
          <div className={cnSettings("column")}>
            <SettingsAvatar />
          </div>
          <div className={cnSettings("column")}>
            <SettingsForm />
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};
