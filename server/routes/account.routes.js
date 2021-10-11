module.exports = (app) => {
  var router = require("express").Router();
  const accountController = require("../controllers/accounts.controller");

  router.get("/", accountController.getAccounts);
  router.get("/logged-in", accountController.getDataForLoggedIn);
  router.post("/", accountController.createAccount);
  router.post("/login", accountController.login);
  app.use("/api/accounts", router);
};
