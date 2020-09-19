import { RootState } from "store";

export const isAuthenticatedSelector = (state: RootState): boolean => state.auth.isAuthenticated;
export const errorSelector = (state: RootState): string | undefined => state.auth.error;
