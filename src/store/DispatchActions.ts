import { UserInformation } from "../interfaces/UserInformation";

export const dispatchUserFetchStarted = (store) => {
  store.dispatch({
    type: "userFetchStarted", payload: {
      user: "",
      fetched: true,
      loading: true,
      error: null
    }
  });
}

export const dispatchUserFetchSucceeded = (store, response) => {
  store.dispatch({
    type: "userFetchSucceeded", payload: {
      user: new UserInformation(response.login, response.id,
          response.avatar_url, response.html_url,
          response.bio),
      fetched: true,
      loading: false,
      error: null
    }
  });
}

export const dispatchUserFetchFailed = (store, error) => {
  store.dispatch({
    type: "userFetchFailed", payload: {
      user: "",
      fetched: true,
      loading: false,
      error: error
    }
  });
}