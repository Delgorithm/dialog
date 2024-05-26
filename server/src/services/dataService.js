const dataModel = require("../models/dataModel");

exports.addData = async (data) => {
	const values = data.map((item) => [item.rate, item.hour, item.day]);
	return await dataModel.insertData(values);
};
