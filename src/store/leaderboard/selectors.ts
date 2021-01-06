import { IRootState } from "store";

export const getPending = (state: IRootState) => state.leaderboard.pending;

export const getLeaders = (state: IRootState) => state.leaderboard.entries;

export const getError = (state: IRootState) => state.leaderboard.error;
