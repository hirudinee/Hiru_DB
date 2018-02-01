let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	// var insert = {};
	// insert.id = String(event.id);
	// insert.name = Sring(event.name);
	// insert.role = String(event.role);

	ddb.put({
		TableName: 'Hiru_001',
		Item: { 'ID': '001', 'Name': 'Hiru', 'JobRole': 'QA' }
	}, function (err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});

	callback(null, 'Successfully executed');
}