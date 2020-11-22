import React, { FC, HTMLProps } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelectors } from "app/services/auth";
import { ROUTES } from "app/constants/routes";
import { cn } from "app/helpers/classname";
import { Avatar } from "../Avatar";
import { HeaderNav } from "./Nav";

import "./Header.css";

const b_ = cn("header");

export const Header: FC<HTMLProps<HTMLHeadElement>> = (props) => {
  const { className, ...restHeaderProps } = props;
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const avatar = useSelector(authSelectors.getAvatar);

  return (
    <header className={b_({}, [className])} {...restHeaderProps}>
      <HeaderNav className={b_("nav")} />
      {isAuthenticated && (
        <div className={b_("user")}>
          <Avatar src={avatar} size="s" container={<Link to={ROUTES.SETTINGS} />} />
        </div>
      )}
    </header>
  );
};
