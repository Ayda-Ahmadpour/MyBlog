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
  },
});

export const { setUser, successfulSignIn, failSignIn } = userSlice.actions;
export default userSlice.reducer;
