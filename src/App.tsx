import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import { loadUserInformation } from "./Api";
import { useDispatch } from "react-redux";
import { UserInformation } from "./interfaces/UserInformation";
import { userFetchSucceeded } from "./store/Actions";

export default function App() {
  const dispatch = useDispatch();

  const searchUser = (userName) => {
    const username = userName();
    dispatch({ type: "userFetchStarted", payload: {
      user: null,
        fetched: true,
        loading: true,
        error: null
      }});
    loadUserInformation(username).then((response: any) => {
        dispatch({ type: "userFetchSucceeded", payload: {
            user: new UserInformation(response.login, response.id,
                response.avatar_url, response.html_url,
                response.bio),
            fetched: true,
            loading: false,
            error: null
          }});
    })
        .catch((error: Error) => {
          dispatch({ type: "userFetchFailed", payload: {
              user: null,
              fetched: true,
              loading: false,
              error: error
            }});
        });
  }

  return (
      <div className="container">
        <Search search={searchUser}/>
        <SearchResult/>
      </div>
  )
}

