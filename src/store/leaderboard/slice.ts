import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILeaderboardEntry } from "types/models/leaderboard";

export interface ILeaderboardSliceState {
  entries: ILeaderboardEntry[];
  pending: boolean;
  error: null | string;
}

export const initialState: ILeaderboardSliceState = {
  entries: [],
  pending: false,
  error: null,
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    fetchLeadersPending: (state) => {
      state.pending = true;
    },
    /**
     * В сваггере нет описания ответа сервера
     * https://ya-praktikum.tech/api/v2/swagger/#/
     */
    fetchLeadersSuccess: (state, { payload }: PayloadAction<unknown>) => {
      state.entries = <ILeaderboardEntry[]>payload;
      state.pending = false;
    },
    fetchLeadersFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.pending = false;
    },
  },
});

export const { reducer, actions } = leaderboardSlice;
