import { UserInformation } from "./UserInformation";

export interface UsersState {
  user: UserInformation | null;
  fetched: false;
  loading: false;
  error: Error | null;
}