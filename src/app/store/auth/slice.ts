import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IUser } from "app/types/models/user";
import type { IUserRequest } from "app/services/api/users";
import type { IUserResponse } from "app/services/api/auth";

export interface IAuthSliceState {
  isAuthenticated: boolean;
  error: null | string;
  user: null | IUser;
  yaToken: null | string;
}

const initialState: IAuthSliceState = {
  isAuthenticated: false,
  error: null,
  user: null,
  yaToken: null,
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
    setYaToken: (state, { payload: token }: PayloadAction<string>) => {
      state.yaToken = token;
    },
  },
});

export const { reducer, actions } = authSlice;
