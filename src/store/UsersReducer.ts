import { UsersState } from "../interfaces/UsersState";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { UserInformation } from "../interfaces/UserInformation";

const initialUsersState = {
  userResult: null
} as UsersState

const addUser = createAction<UserInformation>("add");
const clearUser = createAction<UserInformation>("clear");

export const UsersReducer = createReducer(initialUsersState, (builder) => {
  builder
      .addCase(addUser, (state, action) => {
        return {...state, userResult: action.payload};
      })
});