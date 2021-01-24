import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IUser } from "types/models/user";

import type { IUserRequest, IUserResponse } from "services/api";

export interface IAuthSliceState {
  isAuthenticated: boolean;
  error: string | null;
  user: IUser | null;
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
      const user: IUser = {
        id: payload.id,
        firstName: payload.first_name,
        secondName: payload.second_name,
        displayName: payload.display_name,
        login: payload.login,
        email: payload.email,
        phone: payload.phone,
        avatar: { base: payload.avatar },
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
    getYandexOAuthTokenSuccess: (state, { payload: token }: PayloadAction<string>) => {
      state.yandexOAuthToken = token;
    },
  },
});

export const { reducer, actions } = authSlice;
