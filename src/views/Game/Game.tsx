import React, { FC } from "react";

import { Game } from "components";
import { Layout, Layout__Body } from "components/UI";

export const GameView: FC = () => (
  <Layout>
    <Layout__Body>
      <Game />
    </Layout__Body>
  </Layout>
);
