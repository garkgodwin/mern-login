const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
//?middlewares
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

module.exports = app;
