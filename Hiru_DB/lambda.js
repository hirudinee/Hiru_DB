let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.put({
		TableName: 'Hiru001',
		Item: { 'sample': '001' }
	}, function (err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});





	callback(null, 'Successfully executed');
}