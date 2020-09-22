import React, { FC } from "react";
import { useSelector } from "react-redux";

import { cn } from "helpers/classname";
import { Layout, Loading } from "components/UI";
import { SettingsForm } from "components/SettingsForm";
import { SettingsAvatar } from "components/SettingsAvatar";
import { userSelector } from "services/auth";

import "./Settings.css";

export const TEXT = {
  TITLE: "Профиль",
};

const cnSettings = cn("settings");

export const Settings: FC = () => {
  const user = useSelector(userSelector);

  return user ? (
    <Layout>
      <div className={cnSettings()}>
        <div className={cnSettings("inner")}>
          <h1 className={cnSettings("title")}>{TEXT.TITLE}</h1>
          <div className={cnSettings("layout")}>
            <div className={cnSettings("column")}>
              <SettingsAvatar />
            </div>
            <div className={cnSettings("column")}>
              <SettingsForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};
