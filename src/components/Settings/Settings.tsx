import React, { FC } from "react";

import { cn } from "helpers/classname";
import { Header } from "components/UI";
import { SettingsForm } from "components/SettingsForm";

import "./Settings.scss";

export const TEXT = {
  TITLE: "Профиль",
};

const cnSettings = cn("settings");

export const Settings: FC = () => (
  <>
    <Header />
    <div className={cnSettings()}>
      <div className={cnSettings("inner")}>
        <h1 className={cnSettings("title")}>{TEXT.TITLE}</h1>
        <SettingsForm />
      </div>
    </div>
  </>
);
