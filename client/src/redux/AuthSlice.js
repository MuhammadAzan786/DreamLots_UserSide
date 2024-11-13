import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const AuthSlice = createSlice({
  name: "authslice",
  initialState: initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { SetUser, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
