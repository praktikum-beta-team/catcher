import React, { FC } from "react";

import { TEXT } from "constants/text";
import { Layout, Layout__Body, Layout__Title } from "components/UI";
import { Leaderboard } from "components";

export const LeaderboardView: FC = () => {
  return (
    <Layout>
      <Layout__Body>
        <Layout__Title>{TEXT.LEADERBOARD.TITLE}</Layout__Title>
        <Leaderboard />
      </Layout__Body>
    </Layout>
  );
};
