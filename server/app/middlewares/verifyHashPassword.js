const bcrypt = require("bcrypt");

const saltRounds = 10;

const verifyHashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.hashed_password = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyHashPassword,
};
