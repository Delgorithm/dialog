const AbstractRepository = require("./AbstractRepository");

class GlucoseRepository extends AbstractRepository {
  constructor() {
    super({ table: "glucose" });
  }

  // The C of CRUD - Create operation

  async create(glucose) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (amount) VALUES (?)`,
      [glucose.amount]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT amount, hour FROM ${this.table} WHERE date = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async update(glucose, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET amount = ?, hour = ?, date = ? WHERE id = ?`,
      [glucose.amount, glucose.hour, glucose.date, id]
    );

    return result.affectedRows;
  }
}

module.exports = GlucoseRepository;
