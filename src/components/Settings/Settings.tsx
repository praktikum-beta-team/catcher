import React, { FC } from "react";
import { useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Layout, Loading } from "components/UI";
import { SettingsForm } from "components/SettingsForm";
import { SettingsAvatar } from "components/SettingsAvatar";
import { authSelectors } from "services/auth";

import "./Settings.css";

const b_ = cn("settings");

export const Settings: FC = () => {
  const user = useSelector(authSelectors.getUser);

  return user ? (
    <Layout>
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
    </Layout>
  ) : (
    <Loading />
  );
};
