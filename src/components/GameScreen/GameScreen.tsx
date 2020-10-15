import React, { FC } from "react";

import { cn } from "helpers/classname";

import "./GameScreen.css";

const b_ = cn("game-screen");

export const GameScreen: FC = () => (
  <div className={b_()}>
    <span role="img" aria-label="">
      😼
    </span>
  </div>
);
