const AbstractRepository = require("./AbstractRepository");

class GlucoseRepository extends AbstractRepository {
  constructor() {
    super({ table: "glucose" });
  }

  async create(glucose) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (amount) VALUES (?)`,
      [glucose.amount]
    );

    return result.insertId;
  }

  async readByUserId(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );

    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async update(glucose, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET amount = ?, date = ? WHERE id = ?`,
      [glucose.amount, glucose.date, id]
    );

    return result.affectedRows;
  }
}

module.exports = GlucoseRepository;
