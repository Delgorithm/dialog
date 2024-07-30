const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows[0];
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password, username) VALUES (?, ?, ?)`,
      [user.email, user.hashed_password, user.username]
    );

    return result.insertId;
  }

  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, city = ?, email = ? WHERE id = ?`,
      [user.username, user.city, user.email, user.id]
    );

    return result.affectedRows;
  }

  async delete(userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [userId]
    );

    return result.affectedRows;
  }
}

module.exports = UserRepository;
