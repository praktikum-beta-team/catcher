import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthSliceState {
  isAuthenticated: boolean;
  error?: string;
}

const initialState: IAuthSliceState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = undefined; // TODO: уточнить
    },
    signinError: (state, { payload }: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.error = payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { signinError, signinSuccess, logoutSuccess } = authSlice.actions;
