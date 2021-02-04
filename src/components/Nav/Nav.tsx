import React, { FC, HTMLProps } from "react";
import { NavLink } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { cn } from "helpers/classname";

import "./Nav.css";
import { TEXT } from "constants/text";

const b_ = cn("nav");

export const Nav: FC<HTMLProps<HTMLDivElement>> = ({ className, ...restNavProps }) => (
  <nav className={b_(null, [className])} {...restNavProps}>
    <ul className={b_("list")}>
      <li className={b_("item")}>
        <NavLink
          className={b_("link")}
          to={ROUTES.GAME}
          activeClassName={b_("link", { active: true })}
        >
          {TEXT.NAVIGATION.GAME}
        </NavLink>
      </li>
      <li className={b_("item")}>
        <NavLink
          className={b_("link")}
          to={ROUTES.LEADERBOARD}
          activeClassName={b_("link", { active: true })}
        >
          {TEXT.NAVIGATION.LEADERBOARD}
        </NavLink>
      </li>
    </ul>
  </nav>
);
