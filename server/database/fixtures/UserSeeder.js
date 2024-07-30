const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "users", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        username: this.faker.internet.userName(),
        email: this.faker.internet.email(),
        hashed_password: this.faker.internet.password(),
        is_Admin: i === 2 ? 1 : 0,
        refName: `user_${i}`,
      };
      this.insert(fakeUser);
    }
  }
}

module.exports = UserSeeder;
