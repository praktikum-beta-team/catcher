import React, { FC } from "react";
import { useSelector } from "react-redux";

import { TEXT } from "app/constants/text";
import { cn } from "app/helpers/classname";
import { Layout, Loading } from "app/components/UI";
import { SettingsForm } from "app/components/SettingsForm";
import { SettingsAvatar } from "app/components/SettingsAvatar";
import { authSelectors } from "app/store/auth";

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
