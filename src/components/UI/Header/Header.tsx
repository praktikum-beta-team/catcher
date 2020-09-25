import React, { FC, HTMLProps } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelectors } from "services/auth";
import { ROUTES } from "constants/routes";
import { cn } from "helpers/classname";
import { Avatar } from "../Avatar";
import { HeaderNav } from "./Nav";

import "./Header.css";

const cnHeader = cn("header");

export const Header: FC<HTMLProps<HTMLHeadElement>> = (props) => {
  const { className, ...restHeaderProps } = props;
  const isAuthenticated = useSelector(authSelectors.getAuthStatus);
  const avatar = useSelector(authSelectors.getAvatar);

  return (
    <header className={cnHeader({}, [className])} {...restHeaderProps}>
      <HeaderNav className={cnHeader("nav")} />
      {isAuthenticated && (
        <div className={cnHeader("user")}>
          <Avatar src={avatar} size="s" container={<Link to={ROUTES.SETTINGS} />} />
        </div>
      )}
    </header>
  );
};
