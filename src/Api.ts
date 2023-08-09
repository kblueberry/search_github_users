export const loadUsers = (textQuery: string) => {
  return fetch(`https://api.github.com/users/${textQuery}`).then(response => response.json())
}