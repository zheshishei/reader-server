var app = require('./app.js');
var server = app.listen(5001);

console.log('server is listening on port : ', 5001);

module.exports = server;
