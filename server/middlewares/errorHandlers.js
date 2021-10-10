exports.mongooseErrors = (err, req, res, next) => {
  if (err) {
    const errors = err.errors;
    let errorMessages = [];
    for (var key in errors) {
      errorMessages.push(errors[key].message);
    }
    res.send(result);
  } else {
    next();
  }
};
