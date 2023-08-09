import { UserInformation } from "./UserInformation";

export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Array<UserInformation>
}