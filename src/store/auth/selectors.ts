import { createSelector } from "@reduxjs/toolkit";
import { IUser } from "types/models/user";
import type { IRootState } from "store";

export const getIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated;
export const getError = (state: IRootState) => state.auth.error;
export const getToken = (state: IRootState) => state.auth.yaToken;
export const getUser = (state: IRootState) => state.auth.user;
export const getAvatar = (size: "s" | "xl") =>
  createSelector(getUser, (user) => {
    const avatar = user?.avatar;
    return `${avatar?.base || ""}${avatar?.[size] || ""}`;
  });

export const getUserSettings = createSelector(getUser, (user) =>
  user
    ? <IUser>{
        firstName: user?.firstName,
        secondName: user?.secondName,
        displayName: user?.displayName,
        login: user?.login,
        email: user?.email,
        phone: user?.phone,
      }
    : null
);
