export function getCurrentAuth() {
  return ["user"];
}

export function checkAuth(auth) {
  const currentAuth = getCurrentAuth();
  return currentAuth.some((item) => auth.includes(item));
}

export function isLogin() {
  const currentAuth = getCurrentAuth();
  return currentAuth && currentAuth[0] !== "guest";
}
