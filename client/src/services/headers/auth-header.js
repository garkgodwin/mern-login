import Token from "../token/Token";

export default function authHeader() {
  const token = Token.get();

  if (token || token !== "") {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
