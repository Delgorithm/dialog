const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

class GlucoseSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "glucose", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const userRef = this.getRef(`user_${i}`);

      const fakeGlucose = {
        user_id: userRef.insertId,
        amount: this.faker.number.int({ min: 50, max: 500 }),
      };

      this.insert(fakeGlucose);
    }
  }
}

module.exports = GlucoseSeeder;
