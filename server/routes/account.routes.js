module.exports = (app) => {
  var router = require("express").Router();
  const accountController = require("../controllers/account.controllers");

  router.get("/", accountController.getAccounts);
  router.get("/logged-in", accountController.getLoggedInAccount);
  router.post("/", accountController.createAccount);
  router.post("/login", accountController.login);
  app.use("/api/accounts", router);
};
