class Token {
  get() {
    const token = localStorage.getItem("token");
    if (
      token === undefined ||
      token === "undefined" ||
      token === null ||
      token === ""
    ) {
      return "";
    } else {
      return token;
    }
  }

  set(token) {
    localStorage.setItem("token", token);
  }
}

export default new Token();
