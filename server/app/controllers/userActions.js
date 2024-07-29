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
    const { email, username, password } = req.body;

    const existingUser = await tables.users.readByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const insertId = await tables.users.create({ email, username, password });
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
  edit,
  add,
  destroy,
};
