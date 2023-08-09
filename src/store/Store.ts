import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./UsersReducer";

export const store = configureStore({
  reducer: UsersReducer
})