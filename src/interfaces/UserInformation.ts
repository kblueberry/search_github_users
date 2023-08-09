export class UserInformation {
  constructor(login, id, avatar, profileLink, bio) {
    this.login = login;
    this.id =  id;
    this.avatar_url = avatar;
    this.html_url = profileLink;
    this.bio = bio
  }
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  bio: string;

  // node_id: string;

  // gravatar_id: string;
  // url: string,
  // followers_url: string,
  // following_url: string,
  // gists_url: string,
  // starred_url: string,
  // subscriptions_url: string,
  // organizations_url: string,
  // repos_url: string,
  // events_url: string,
  // received_events_url: string,
  // type: string,
  // site_admin: boolean,
  // score: number
}