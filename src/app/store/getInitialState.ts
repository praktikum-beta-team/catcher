import type { IRootState } from "./configureStore";

import { initialState as auth } from "./auth/slice";
import { initialState as leaderboard } from "./leaderboard/slice";

export const getInitialState = (): IRootState => {
  return {
    auth,
    leaderboard,
  };
};
