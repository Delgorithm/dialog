const AbstractSeeder = require("./AbstractSeeder");

class GlucoseSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "glucose", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const randomDate = this.faker.date.between({
        from: "2024-06-15",
        to: "2024-06-18",
      });

      const date = randomDate.toISOString().substring(0, 10);
      const time = randomDate.toISOString().substring(11, 19);

      const fakeGlucose = {
        amount: this.faker.number.int({ max: 500 }),
        date: date,
        time: time,
      };
      this.insert(fakeGlucose);
    }
  }
}

module.exports = GlucoseSeeder;
