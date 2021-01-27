import { createSelector } from "@reduxjs/toolkit";
import type { IRootState } from "store";
import type { IUserData } from "./slice";

type UserSettings = Pick<
  IUserData,
  "firstName" | "secondName" | "displayName" | "login" | "email" | "phone"
>;

export const getIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated;
export const getError = (state: IRootState) => state.auth.error;
export const getYabdexOAuthToken = (state: IRootState) => state.auth.yandexOAuthToken;
export const getUser = (state: IRootState) => state.auth.user;
export const getAvatar = (size: "s" | "m" | "xl") =>
  createSelector(getUser, (user) => {
    const avatar = user?.avatar;
    return `${avatar?.base || ""}${avatar?.[size] || ""}`;
  });
export const getUserSettings = createSelector(getUser, (user) =>
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
