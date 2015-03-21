var express = require('express');
var redis = require('redis');
var bodyParser = require('body-parser');
var client = redis.createClient();
var app = express();

app.use(bodyParser.json());

app.get('/read', function(req, res){

  client.rpop('text_queue', function sendPoppedText (err, reply) {
    res.status(200).send('hello world: ' + (reply || ''));
  });

});

module.exports = app;
