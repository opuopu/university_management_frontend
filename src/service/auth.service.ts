import { setToLocalStroage } from "@/utiles/local.stroage";

export const storeTokenToStroage = (token: string) => {
  if (token) {
    setToLocalStroage("accessToken", token);
  }
};
