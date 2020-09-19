import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserDataSuccess: (_, { payload }: PayloadAction<any>) => payload,
  },
});

export const userReducer = user.reducer;
export const { fetchUserDataSuccess } = user.actions;
