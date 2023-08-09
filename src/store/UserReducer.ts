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
      // .addCase(addUser, (state, action) => {
      //   return {...state, user: action.payload};
      // })
      .addCase(userFetchStarted, (state, action) => {
        return Object.assign(state, {
          user: action.payload.user,
          fetched: action.payload.fetched,
          loading: action.payload.loading,
          error: action.payload.error
        })
      })
      .addCase(userFetchSucceeded, (state, action) => {
        return Object.assign(state, {
          user: action.payload.user,
          fetched: action.payload.fetched,
          loading: action.payload.loading,
          error: action.payload.error
        })
      })
      .addCase(userFetchFailed, (state, action) => {
        return Object.assign(state, {
          user: action.payload.user,
          fetched: action.payload.fetched,
          loading: action.payload.loading,
          error: action.payload.error
        })
      })
});