import React, { FC, HTMLProps } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "components";
import { authSelectors } from "store/auth";
import { TEXT } from "constants/text";
import { ROUTES } from "constants/routes";
import { cn } from "helpers/classname";

import { Avatar } from "../UI/Avatar";

import "./Header.css";

const b_ = cn("header");

export const Header: FC<HTMLProps<HTMLHeadElement>> = (props) => {
  const { className, children, ...restHeaderProps } = props;
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const avatar = useSelector(authSelectors.getAvatar("s"));

  return (
    <header className={b_({}, [className])} {...restHeaderProps}>
      <Nav />
      {isAuthenticated ? (
        <Avatar
          className={b_("user")}
          src={avatar}
          size="s"
          container={<Link to={ROUTES.SETTINGS} />}
        />
      ) : (
        <NavLink className={b_("link")} to={ROUTES.SIGNIN} activeClassName={b_("user")}>
          {TEXT.NAVIGATION.SIGNIN}
        </NavLink>
      )}
    </header>
  );
};
