import { createSelector } from "@reduxjs/toolkit";
import { IUserRequest } from "app/utils/request/types";
import type { IRootState } from "app/store";

export const getIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated;
export const getError = (state: IRootState) => state.auth.error;

export const getUser = (state: IRootState) => state.auth.user;
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
