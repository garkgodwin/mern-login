const Account = require("../models").accounts;
const { mongooseErrors } = require("../handlers/errorHandlers");

exports.getAccounts = async (req, res) => {
  let result = {
    success: false,
    failure: false,
    invalid: false,
    error: false,
    message: "",
    data: [],
  };

  await Account.find({})
    .then((data) => {
      result = {
        ...result,
        success: true,
        message: "Retrieved all accounts successfully.",
        data: data,
      };
      res.send(result);
    })
    .catch((error) => {
      result = {
        ...result,
        error: true,
        message: "Encountered an error while retrieving all accounts.",
      };
      mongooseErrors(error, res, result);
    });
};

exports.createAccount = async (req, res, next) => {
  let result = {
    success: false,
    failure: false,
    invalid: false,
    error: false,
    message: "",
    errorMessages: [],
  };
  const username = req.body.username;
  const password = req.body.password;
  const filterAll = {
    username: username,
    password: password,
  };
  await Account.create(filterAll, (error, account) => {
    if (!error) {
      result = {
        ...result,
        success: true,
        message: "Successfully created an account.",
      };
      res.send(result);
    } else {
      result = {
        ...result,
        error: true,
        message: "Encountered an error while creating an account.",
      };
      mongooseErrors(error, res, result);
    }
  });
  //?TODO: SET PASSWORD HASHED BEFORE SAVING
};

exports.login = async (req, res) => {
  let result = {
    success: false,
    failure: false,
    invalid: false,
    error: false,
    message: "",
    token: null,
  };
  const username = req.body.username;
  const password = req.body.password;

  const filter = {
    username: username,
    password: password,
  };
  await Account.findOne({ filter }, (error, account) => {
    if (!error) {
      if (account) {
        result = {
          ...result,
          success: true,
          message: "Credentials are valid.",
        };
      } else {
        result = {
          ...result,
          invalid: true,
          message: "Invalid username or password.",
        };
      }
      res.send(result);
    } else {
      result = {
        ...result,
        error: true,
        message: "Encountered an error while logging in.",
      };
      mongooseErrors(error, res, result);
    }
  });

  //TODO: compare hashed password, see salt hash sha256
  //TODO: GENERATE TOKEN THEN respond if login successsful
};
