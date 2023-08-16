import { UsersState } from "../interfaces/UsersState";
import { createReducer } from "@reduxjs/toolkit";
import { userFetchFailed, userFetchStarted, userFetchSucceeded } from "./Actions";

const initialUsersState = {
  user: null,
  fetched: false,
  loading: false,
  error: null,
} as UsersState

export const UserReducer = createReducer(initialUsersState, (builder) => {
  builder
      .addCase(userFetchStarted, (state, action) => {
        return Object.assign(state, action.payload)
      })
      .addCase(userFetchSucceeded, (state, action) => {
        return Object.assign(state, action.payload)
      })
      .addCase(userFetchFailed, (state, action) => {
        return Object.assign(state, action.payload)
      })
});