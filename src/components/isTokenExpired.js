function isTokenExpired(token) {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload.exp * 1000 < Date.now() /// token expire if exp < now
  } catch (err) {
    return true; // invalid token
  }
}
export default isTokenExpired