const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const tables = require("../../database/tables");

const verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user === null) {
      res.sendStatus(422).json({ message: "Invalid email or password" });
    }

    const verified = await bcrypt.compare(password, user.password);

    if (verified) {
      delete user.hashed_password;

      const adminRole = user.is_Admin === 1 ? user.is_Admin : null;

      const token = jwt.sign(
        { sub: user.id, role: adminRole },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token });
    } else {
      res.sendStatus(422).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyUser,
};
