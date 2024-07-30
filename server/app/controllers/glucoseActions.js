const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const glucose = await tables.glucose.readAll();
    res.json(glucose);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // const glucose = await tables.glucose.read(req.params.id);
    const { date } = req.params;
    const glucose = await tables.glucose.read(date);
    console.log(date);
    console.log(glucose);

    if (glucose == null) {
      res.sendStatus(404);
    } else {
      res.json(glucose);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  const glucose = req.body;
  try {
    const insertId = await tables.glucose.update(glucose, req.params.id);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const glucose = req.body;

  try {
    const insertId = await tables.glucose.create(glucose);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.glucose.delete(req.params.id);

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
