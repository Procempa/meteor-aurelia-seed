/*globals require*/
var ncp = require('ncp').ncp;
var fs = require('fs');

if (!fs.existsSync('public')) {
	fs.mkdir('public', function (err) {
		if (err) {
			return console.error(err);
		}
	});
}

ncp.limit = 16;

ncp('node_modules/font-awesome/fonts/', 'public/fonts/', function (err) {
	if (err) {
		return console.error(err);
	}
	console.log('done!');
});
