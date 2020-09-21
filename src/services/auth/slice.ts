import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserResponse } from "utils/request/auth";

interface IAuthSliceState {
  isAuthenticated: boolean;
  error: null | string;
  user: null | IUserResponse;
}

const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

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
    clearAuthError: (state) => {
      state.error = null;
    },
    fetchUserSuccess: (state, { payload: user }: PayloadAction<IUserResponse>) => {
      state.user = user;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {
  authFailure,
  authSuccess,
  logoutSuccess,
  clearAuthError,
  fetchUserSuccess,
} = authSlice.actions;
