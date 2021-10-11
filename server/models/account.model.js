module.exports = (mongoose) => {
  const Account = mongoose.model(
    "accounts",
    mongoose.Schema(
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
          minLength: [5, "The minimum character length is 5"],
          maxLength: [50, "The maximum character length is 50"],
        },
      },
      { timestamps: true }
    )
  );

  return Account;
};
