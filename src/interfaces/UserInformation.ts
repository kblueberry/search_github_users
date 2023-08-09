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
}