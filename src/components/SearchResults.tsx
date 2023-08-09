import { useSelector } from "react-redux";
import { UsersState } from "../interfaces/UsersState";
import NoResultsFound from "./NoResultsFound";
import UserResultCard from "./UserResultCard";

export default function SearchResults() {
  const searchResult = useSelector<UsersState, UsersState["userResult"]>(state => state.userResult);

  console.log('search result', searchResult);
  if (!searchResult) {
    return <NoResultsFound/>
  }

  return <UserResultCard user={searchResult}/>
}