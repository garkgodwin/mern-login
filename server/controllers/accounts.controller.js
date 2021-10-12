const Account = require("../models").accounts;
const { mongooseErrors } = require("../handlers/errorHandlers");
const { Password } = require("../utils/Password");
const { generate, decode } = require("../utils/Token");

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
  await Account.create({ username: username, password: password }, (error) => {
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

//login and get get data if logged in controllers
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
  const account = await Account.findOne({ username: username }).exec();
  if (account) {
    const dbPass = account.password;
    const isMatch = await Password.compare(account.password, password);
    if (isMatch) {
      const tokenResult = generate(account.id, account.username);
      result = {
        ...result,
        success: tokenResult.success,
        error: tokenResult.error,
        message: "Credentials are valid.",
        token: tokenResult.token,
      };
    } else {
      result = {
        ...result,
        invalid: true,
        message: "Invalid username or password.",
      };
    }
  } else {
    result = {
      ...result,
      invalid: true,
      message: "Invalid username or password.",
    };
  }
  res.send(result);
};
exports.getDataForLoggedIn = async (req, res) => {
  let result = {
    success: false,
    failure: false,
    invalid: false,
    error: false,
    message: "",
    data: null,
  };
  //TODO FIX THIS THIS AFTER FIXING NVM NODE
  const decodedResult = decode(req);
  if (decodedResult.success) {
    const id = decodedResult.decoded.id;
    const username = decodedResult.decoded.username;
    await Account.findOne({ id: id, username: username })
      .then((account) => {
        if (account) {
          result = {
            ...result,
            success: true,
            message: "Fetched the data needed for logged-in account.",
            data: account,
          };
        } else {
          result = {
            ...result,
            failure: false,
            message: "Cannot find the account.",
          };
        }
      })
      .catch((error) => {
        result = {
          ...result,
          error: true,
          message: error.message,
        };
      });
  } else {
    result = {
      ...result,
      error: true,
      message: decodedResult.message,
    };
  }
  res.send(result);
};
