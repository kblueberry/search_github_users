import './App.css'
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { loadUsers } from "./Api";
import { useDispatch } from "react-redux";
import { UserInformation } from "./interfaces/UserInformation";

function App() {
  const dispatch = useDispatch();

  const searchUsers = (searchQuery) => {
    const textQuery = searchQuery();
    loadUsers(textQuery).then((response: any) => {
      const userResult = new UserInformation(response.login, response.id,
          response.avatar_url, response.html_url,
          response.bio);
      dispatch({ type: "add", payload: userResult })
    });
  }

  return (
      <div className="container">
        <Search search={searchUsers}/>
        <SearchResults/>
      </div>
  )
}

export default App
