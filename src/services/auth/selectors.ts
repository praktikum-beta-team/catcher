import { RootState } from "store";

export const isAuthenticatedSelector = (state: RootState) => state.auth.isAuthenticated;
export const errorSelector = (state: RootState) => state.auth.error;
export const userSelector = (state: RootState) => state.auth.user;
export const avatarSelector = (state: RootState) => state.auth.user?.avatar;
