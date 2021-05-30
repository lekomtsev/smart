export default function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  /* if (user && user.token) { */
  if (user) {
    return {
      'Authorization': 'Bearer ' + user.token,
    };
  } else {
    return {};
  }
}
