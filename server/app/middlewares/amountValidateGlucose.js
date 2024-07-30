const amountValidateGlucose = (req, res, next) => {
  if (typeof req.body.amount !== "number") {
    res.sendStatus(401);
  } else {
    next();
  }
};

module.exports = amountValidateGlucose;
