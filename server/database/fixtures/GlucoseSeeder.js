const AbstractSeeder = require("./AbstractSeeder");

class GlucoseSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "glucose", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeGlucose = {
        amount: this.faker.number.int({ max: 500 }),
        heure: this.faker.date.between({
          from: "2024-01-06T00:00:00.000Z",
          to: "2024-30-06T00:00:00.000Z",
        }),
      };
      this.insert(fakeGlucose);
    }
  }
}

module.exports = GlucoseSeeder;
