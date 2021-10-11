const app = require("./app");
const HTTP_PORT = process.env.HTTP_PORT;
const ATLAS_URI = process.env.ATLAS_URI;
const main = async () => {
  //?database
  const db = require("./models");
  await db.mongoose
    .connect(ATLAS_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("connected");
      //?routes
      require("./routes")(app);
    })
    .catch((error) => {
      console.error(error);
      process.exit();
    });
  app.listen(HTTP_PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${HTTP_PORT}`);
  });
};

main();
