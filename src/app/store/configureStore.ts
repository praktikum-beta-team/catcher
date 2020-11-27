import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { DeepPartial } from "redux";

import { name as authName, reducer as authReducer, IAuthSliceState } from "app/store/auth";

export interface IRootState {
  [authName]: IAuthSliceState;
}

export type PreloadedState = DeepPartial<IRootState>;

const reducer = {
  [authName]: authReducer,
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
