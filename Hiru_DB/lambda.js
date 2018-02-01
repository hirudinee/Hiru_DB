let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.put({
		TableName: 'Hiru001',
		Item: { 'ID': '001', 'Name': 'Hiru', 'Role': 'QA' }
	}, function (err, data) {
		if (err) {
			console.log('error', err);
		} else {
			console.log('data', data);
		}
	});

	ddb.put({
		TableName: 'Hiru_error',
		Item: { 'sample': '001' }
	}, function (err, data) {
		if (err) {
			console.log('error', err);
		} else {
			console.log('data', data);
		}
	});

	ddb.put({
		TableName: 'sample',
		Item: {}
	}, function (err, data) {
		if (err) {
			console.log('error', err);
		} else {
			console.log('data', data);
		}
	});




	callback(null, 'Successfully executed');
}