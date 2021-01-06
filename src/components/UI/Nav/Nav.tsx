import React, { FC, HTMLProps } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { cn } from "helpers/classname";

import "./Nav.css";

const b_ = cn("nav");

export const Nav: FC<HTMLProps<HTMLDivElement>> = ({ className, ...restNavProps }) => (
  <nav className={b_(null, [className])} {...restNavProps}>
    <ul className={b_("list")}>
      <li className={b_("item")}>
        <Link className={b_("link")} to={ROUTES.LEADERBOARD}>
          Список лидеров
        </Link>
      </li>
    </ul>
  </nav>
);
