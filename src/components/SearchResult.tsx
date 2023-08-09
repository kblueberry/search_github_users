import { useSelector } from "react-redux";
import { UsersState } from "../interfaces/UsersState";
import NoResultsFound from "./NoResultsFound";
import UserResultCard from "./UserResultCard";

export default function SearchResult() {
  const userFound = useSelector<UsersState, UsersState["user"]>(state => state.user);
  const loading = useSelector<UsersState, UsersState["loading"]>(state => state.loading);
  const fetched = useSelector<UsersState, UsersState["fetched"]>(state => state.fetched);
  const error = useSelector<UsersState, UsersState["error"]>(state => state.error);

  if (loading) {
    return <p>Loading...</p>
  }

  if (fetched && !!error) {
    return <NoResultsFound/>
  }

  if (!loading && userFound) {
    return <UserResultCard user={userFound}/>
  }
}