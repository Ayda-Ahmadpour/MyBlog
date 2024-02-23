import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import themSlice from "./theme/theme";
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themSlice,
  },
});
