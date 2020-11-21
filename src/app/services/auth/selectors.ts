import { createSelector } from "@reduxjs/toolkit";
import { IUserRequest } from "utils/request/types";
import type { RootState } from "store";

export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const getError = (state: RootState) => state.auth.error;

export const getUser = (state: RootState) => state.auth.user;
export const getAvatar = createSelector(getUser, (user) => user?.avatar);
export const getSettings = createSelector(getUser, (user) =>
  user
    ? <IUserRequest>{
        first_name: user?.first_name,
        second_name: user?.second_name,
        display_name: user?.display_name,
        login: user?.login,
        email: user?.email,
        phone: user?.phone,
      }
    : null
);
