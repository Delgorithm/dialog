const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.users.readAll();
    if (users == null) {
      res.sendStatus(404);
    }
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    console.log("Fetching user with ID:", req.params.id);
    const user = await tables.users.read(req.params.id);
    console.log("User data from database:", user);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error in read controller:", err);
    res.status(500).json({ message: "Internal server error" });
    next();
  }
};

const edit = async (req, res, next) => {
  try {
    const user = { ...req.body, id: req.params.id };
    await tables.users.update(user);
    if (user == null) {
      res.sendStatus(404);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { email, hashed_password, username } = req.body;

    const existingUser = await tables.users.readByEmailWithPassword(email);
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const insertId = await tables.users.create({
      email,
      hashed_password,
      username,
    });
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.users.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
