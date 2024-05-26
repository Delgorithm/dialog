const db = require("../config/db");

exports.insertData = (values) => {
	return newPromise((resolve, reject) => {
		const query = "INSERT INTO dialogbdd (rate, hour, day) VALUES ?";
		db.query(query, [values], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	});
};
