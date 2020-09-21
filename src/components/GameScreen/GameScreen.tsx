import React, { FC } from "react";

import { cn } from "helpers/classname";

import "./GameScreen.css";

const cnGameScreen = cn("game-screen");

export const GameScreen: FC = () => (
  <div className={cnGameScreen()}>
    <span role="img" aria-label="">
      😼
    </span>
  </div>
);
