import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IUserRequest, IUserResponse } from "services/api";

export interface IUserData {
  firstName: string;
  secondName: string;
  displayName: string;
  login: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface IAuthSliceState {
  isAuthenticated: boolean;
  error: string | null;
  user: IUserData | null;
  yandexOAuthToken?: string;
}

export const initialState: IAuthSliceState = {
  isAuthenticated: false,
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
    fetchUserDataSuccess: (state, { payload }: PayloadAction<IUserResponse>) => {
      const user: IUserData = {
        firstName: payload.first_name,
        secondName: payload.second_name,
        displayName: payload.display_name,
        login: payload.login,
        email: payload.email,
        phone: payload.phone,
        avatar: payload.avatar,
      };
      state.user = user;
    },
    changeUserDataSuccess: (state, { payload }: PayloadAction<IUserRequest>) => {
      Object.assign(state, payload);
    },
    changeUserDataFailure: (state, { payload: error }: PayloadAction<string>) => {
      state.error = error;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { reducer, actions } = authSlice;
