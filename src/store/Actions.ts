import { createAction } from "@reduxjs/toolkit";
import { UsersState } from "../interfaces/UsersState";

export const userFetchStarted = createAction<UsersState>("userFetchStarted");
export const userFetchSucceeded = createAction<UsersState>("userFetchSucceeded");
export const userFetchFailed = createAction<UsersState>("userFetchFailed");