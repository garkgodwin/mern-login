const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.accounts = require("./account.model")(mongoose);

module.exports = db;
