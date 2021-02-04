import React, { FC } from "react";

import { TEXT } from "constants/text";
import { StandardLayout, Leaderboard, TrimBox } from "components";

export const LeaderboardView: FC = () => {
  return (
    <StandardLayout>
      <TrimBox>
        <h1>{TEXT.LEADERBOARD.TITLE}</h1>
        <Leaderboard />
      </TrimBox>
    </StandardLayout>
  );
};
