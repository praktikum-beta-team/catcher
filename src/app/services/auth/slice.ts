import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IUserResponse, IUserRequest } from "app/utils/request/types";

interface IAuthSliceState {
  isAuthenticated: boolean;
  error: null | string;
  user: null | IUserResponse;
}

const isAuthenticated = false; // Boolean(localStorage.getItem("isAuthenticated"));

const initialState: IAuthSliceState = {
  isAuthenticated,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    authFailure: (state, { payload: error }: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.error = error;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    fetchUserSuccess: (state, { payload: user }: PayloadAction<IUserResponse>) => {
      state.user = user;
    },
    changeUserSuccess: (state, { payload }: PayloadAction<IUserRequest>) => {
      Object.assign(state, payload);
    },
    changeUserFailure: (state, { payload: error }: PayloadAction<string>) => {
      state.error = error;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { name, reducer, actions } = authSlice;
