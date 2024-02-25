import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: null, error: null, loading: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      state.error = null;
      state.loading = true;
    },
    successfulSignIn: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    failSignIn: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    SignOutSuccess: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  setUser,
  successfulSignIn,
  failSignIn,
  updateStart,
  updateSuccess,
  updateFailure,
  SignOutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
