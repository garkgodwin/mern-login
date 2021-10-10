exports.mongooseErrors = (err, res, result) => {
  if (err) {
    const errors = err.errors;
    let errorMessages = [];
    for (var key in errors) {
      errorMessages.push(errors[key].message);
    }
    result = {
      ...result,
      errorMessages: errorMessages,
    };
  }
  res.send(result);
};
