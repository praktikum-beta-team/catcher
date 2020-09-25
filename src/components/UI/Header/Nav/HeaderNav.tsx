import React, { FC, HTMLProps } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { cn } from "helpers/classname";

import "./HeaderNav.css";

const cnNav = cn("nav");

export const HeaderNav: FC<HTMLProps<HTMLDivElement>> = ({ className, ...restNavProps }) => (
  <nav className={cnNav(null, [className])} {...restNavProps}>
    <ul className={cnNav("list")}>
      <li className={cnNav("item")}>
        <Link className={cnNav("link")} to={ROUTES.LEADERBOARD}>
          Список лидеров
        </Link>
      </li>
    </ul>
  </nav>
);
