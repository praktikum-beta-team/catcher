import { createSelector } from "@reduxjs/toolkit";
import { IUserRequest } from "utils/request/types/user";
import type { RootState } from "store";

export const getAuthStatus = (state: RootState) => state.auth.isAuthenticated;
export const getError = (state: RootState) => state.auth.error;
export const getUser = (state: RootState) => state.auth.user;

export const getAvatar = createSelector(getUser, (state) => state?.avatar);
export const getCurrentSettings = createSelector(
  getUser,
  (state) =>
    ({
      first_name: state?.first_name,
      second_name: state?.second_name,
      display_name: state?.display_name,
      login: state?.login,
      email: state?.email,
      phone: state?.phone,
    } as IUserRequest)
);
