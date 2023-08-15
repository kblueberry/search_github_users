import { dispatchUserFetchFailed, dispatchUserFetchStarted, dispatchUserFetchSucceeded } from "./store/DispatchActions";
import { Store } from "@reduxjs/toolkit";

export const loadUserInformation = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          throw new Error("User with given name was not found")
        } else {
          throw new Error("Request to GitHub API failed!")
        }
      })
}

export const searchGitHubUser = (userName: Function, store: Store) => {
  const username = userName();

  dispatchUserFetchStarted(store);
  loadUserInformation(username).then((response: any) => {
    dispatchUserFetchSucceeded(store, response);
  })
      .catch((error: Error) => {
        dispatchUserFetchFailed(store, error)
      });
}