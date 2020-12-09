import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { DeepPartial } from "redux";

import auth, { IAuthSliceState } from "app/store/auth";
import leaderboard, { ILeaderboardSliceState } from "app/store/leaderboard";

export interface IRootState {
  auth: IAuthSliceState;
  leaderboard: ILeaderboardSliceState;
}

export type PreloadedState = DeepPartial<IRootState>;

const reducer = {
  auth,
  leaderboard,
};

const middleware = getDefaultMiddleware({
  thunk: true,
});

export const createStore = (preloadedState: PreloadedState = {}) => {
  return configureStore({
    reducer,
    middleware,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
};
