import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import { searchGitHubUser } from "./Api";
import "./App.css";
import { useStore } from "react-redux";

export default function App() {
  const store = useStore();

  const searchUser = (userName) => {
    searchGitHubUser(userName, store);
  }

  return (
      <div className="container mx-auto">
        <Search search={searchUser}/>
        <SearchResult/>
      </div>
  )
}

