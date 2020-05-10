import { LOGIN, LOGOUT } from "../constants";

export function login(userObj) {
  return { type: LOGIN, userObj };
}

export function logout() {
  return { type: LOGOUT };
}