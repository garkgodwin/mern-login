const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

exports.generate = (id, username) => {
  let result = {
    success: false,
    error: false,
    token: null,
  };
  const payload = {
    id,
    username,
  };
  var token = jwt.sign(payload, SECRET);
  if (token) {
    result = {
      ...result,
      success: true,
      token: token,
    };
  } else {
    result = {
      ...result,
      error: true,
    };
  }
  return result;
};

exports.decode = (req) => {
  let result = {
    success: false,
    error: false,
    message: "",
    decoded: {},
  };
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      const decoded = jwt.verify(token, SECRET);
      if (decoded) {
        result = {
          ...result,
          success: true,
          message: "Decoded token is valid.",
          decoded: decoded,
        };
      } else {
        result = {
          ...result,
          error: true,
          message: "Invalid or malformed token.",
        };
      }
    } else {
      result = {
        ...result,
        error: true,
        message: "Token from authorization is not found.",
      };
    }
  } else {
    result = {
      ...result,
      error: true,
      message: "Authorization header is not found.",
    };
  }
  return result;
};
