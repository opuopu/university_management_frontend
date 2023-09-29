import { jwtDecode } from "@/utiles/jwt";
import { getFromLocalStroage, setToLocalStroage } from "@/utiles/local.stroage";

export const storeTokenToStroage = (token: string) => {
  if (token) {
    return setToLocalStroage("accessToken", token);
  }
};

export const getUserInfo = () => {
  const authUserInfo = getFromLocalStroage("accessToken");
  return jwtDecode(authUserInfo!);
};
export const isLoggedIn = () => {
  const authToken = getFromLocalStroage("accessToken");
  return !!authToken;
};

export const userLogOut = (key: string) => {
  return localStorage.removeItem(key);
};
