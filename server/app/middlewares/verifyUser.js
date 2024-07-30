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

    const user = await tables.users.readByEmailWithPassword(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const verified = await bcrypt.compare(password, user.hashed_password);

    if (verified) {
      delete user.hashed_password;

      const adminRole = user.is_Admin === 1 ? "admin" : "user";

      const token = jwt.sign(
        { sub: user.id, role: adminRole },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({ token });
    }
    return res.status(401).json({ message: "Invalid email or password" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyUser,
};
