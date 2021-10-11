const { Schema, model } = require("mongoose");
const { Password } = require("../utils/Password");

const accountSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      lowerCase: "Every character must be on lower case.",
      required: "Username is required!",
      minLength: [5, "The minimum character length is 5"],
      maxLength: [20, "The maximum character length is 20"],
    },
    password: {
      type: String,
      required: "Password is required!",
    },
  },
  { timestamps: true }
);

accountSchema.set("toObject", { virtuals: true });
accountSchema.set("toJSON", { virtuals: true });

accountSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

module.exports = model("Account", accountSchema);
