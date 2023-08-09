import { UserInformation } from "../interfaces/UserInformation";

export default function UserResultCard({user}: {user: UserInformation}) {
  return <div className="container border-1 border-black rounded-2">
    <div className="w-25 rounded">
      <img src={user.avatar_url} alt={`${user.login} avatar`}/>
    </div>
    <div>
      <p><b>Username:</b> {user.login}</p>
      <p><b>Bio:</b> {user.bio || "No biography about this user"}</p>
      <p><b>Link to GitHub:</b> {user.html_url}</p>
    </div>
  </div>
}