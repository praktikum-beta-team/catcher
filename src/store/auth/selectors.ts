import { createSelector } from "@reduxjs/toolkit";
import type { IRootState } from "store";
import type { IUserData } from "./slice";

type UserSettings = Pick<
  IUserData,
  "firstName" | "secondName" | "displayName" | "login" | "email" | "phone"
>;

const getIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated;
const getError = (state: IRootState) => state.auth.error;
const getUser = (state: IRootState) => state.auth.user;
const getAvatar = createSelector(getUser, (user) => user?.avatar);
const getUserSettings = createSelector(getUser, (user) =>
  user
    ? <UserSettings>{
        firstName: user?.firstName,
        secondName: user?.secondName,
        displayName: user?.displayName,
        login: user?.login,
        email: user?.email,
        phone: user?.phone,
      }
    : null
);

export { getIsAuthenticated, getError, getUser, getAvatar, getUserSettings };
