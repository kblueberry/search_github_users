import { UserInformation } from "../interfaces/UserInformation";

export default function UserResultCard({ user }: { user: UserInformation }) {
  return <div className="container py-3 w-100">
    <img className="w-50" src={user.avatar_url} alt={`${user.login} avatar`}/>
    <div className="py-3">
      <UserDetails label={"Username"} value={user.login} />
      <UserDetails label={"Bio"} value={user.bio || "No bio"}/>
      <UserDetails label={"Link to GitHub"} value={user.html_url}/>
    </div>
  </div>
}

function UserDetails({ label, value }: { label: string, value: string }) {
  return <span className="d-flex flex-row justify-content-start">
    <b>{label}:</b>
    {label === "Link to GitHub" ? <a href={value} target={"_blank"}>{value}</a> : <p>{value}</p>}
  </span>
}