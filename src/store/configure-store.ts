import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { DeepPartial } from "redux";

import auth, { IAuthSliceState } from "store/auth";

export interface IRootState {
  auth: IAuthSliceState;
}

export type PreloadedState = DeepPartial<IRootState>;

const reducer = {
  auth,
};

const middleware = getDefaultMiddleware({
  thunk: true,
});

export const createStore = (preloadedState: PreloadedState = {}) => {
  return configureStore({
    reducer,
    middleware,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
};
