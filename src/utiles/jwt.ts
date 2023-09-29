import jwt_decode from "jwt-decode";

export const jwtDecode = (token: string) => {
  const decoded = jwt_decode(token);

  return decoded;
};
