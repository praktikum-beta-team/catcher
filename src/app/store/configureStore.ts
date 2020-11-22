import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { DeepPartial } from "redux";

import { name as authName, reducer as authReducer, IAuthSliceState } from "app/store/auth";

export interface IRootState {
  [authName]: IAuthSliceState;
}

const reducer = {
  [authName]: authReducer,
};

const middleware = getDefaultMiddleware({
  thunk: true,
});

export const createStore = (preloadedState: DeepPartial<IRootState> = {}) => {
  return configureStore({
    reducer,
    middleware,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
};
