module.exports = (app) => {
  var router = require("express").Router();
  const accountController = require("../controllers/account.controllers");

  /*
? commented code blocks:
 * 1. get all accounts route
 * 2. create account route
*/
  // router.get("/", accountController.getAccounts);
  router.get("/logged-in", accountController.getLoggedInAccount);
  //router.post("/", accountController.createAccount);
  router.post("/login", accountController.login);
  app.use("/api/accounts", router);
};
