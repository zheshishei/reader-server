var app = require('./app.js');
var server = app.listen(5000);

console.log('server is listening on port : ', 5000);

module.exports = server;
