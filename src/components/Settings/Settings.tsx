import React, { FC } from "react";
import { useSelector } from "react-redux";

import { cn } from "helpers/classname";
import { Header, Loading } from "components/UI";
import { SettingsForm } from "components/SettingsForm";
import { userSelector } from "services/auth";

import "./Settings.css";

export const TEXT = {
  TITLE: "Профиль",
};

const cnSettings = cn("settings");

export const Settings: FC = () => {
  const user = useSelector(userSelector);

  return user ? (
    <>
      <Header />
      <div className={cnSettings()}>
        <div className={cnSettings("inner")}>
          <h1 className={cnSettings("title")}>{TEXT.TITLE}</h1>
          <SettingsForm />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};
