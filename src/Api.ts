export const loadUserInformation = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          throw new Error("User with given name was not found")
        } else {
          throw new Error("Request to GitHub API failed!")
        }
      })
}