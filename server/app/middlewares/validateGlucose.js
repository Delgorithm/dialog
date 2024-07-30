const validateGlucose = (req, res, next) => {
  const { amount } = req.body;

  const errors = [];

  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ validationErrors: errors });
  }
};

module.exports = validateGlucose;
