import React, { FC, HTMLProps } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelectors } from "store/auth";
import { ROUTES } from "constants/routes";
import { cn } from "helpers/classname";

import { Avatar } from "../Avatar";
import { Nav } from "../Nav";

import "./Header.css";

const b_ = cn("header");

export const Header: FC<HTMLProps<HTMLHeadElement>> = (props) => {
  const { className, children, ...restHeaderProps } = props;
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const avatar = useSelector(authSelectors.getAvatar);

  return (
    <header className={b_({}, [className])} {...restHeaderProps}>
      <Nav />
      {isAuthenticated && (
        <Avatar
          className={b_("user")}
          src={avatar}
          size="s"
          container={<Link to={ROUTES.SETTINGS} />}
        />
      )}
    </header>
  );
};
