var express = require('express');
var fs = require('fs');
var util = require('util');
var app = express();
var http = require('http').Server(app);
var logger = require("./utils/logger");
var io = require('socket.io')(http);
var tmpSocket = require("./socket.js");
var tempmqtt = require('mqtt')
var mqtt = require('./mqtt.js');
var MongoClient = require('mongodb').MongoClient;
//tmpSocket.initializeSocket(io);
var client = mqtt.mqttConnect(tempmqtt);
//var MONGODB_URI = 'mongodb://localhost:27017/mydb';
//var db;//Create db collection pool
app.get('/', function(req, res) {
	console.log('requestmade')
	res.sendfile('./index.html');
});

app.post('/light/1',function(req,res){
	req.on('data', function(chunk) {
	//console.log(chunk);
	var client = mqtt.mqttConnect(tempmqtt);
	mqtt.mqtt_pub(client,chunk);
	mqtt.mqtt_sub(client,'/light/1');
	mqtt.payload(client);
	});

	res.send('ohyeah');
});

//mqtt.mqtt_sub(client,'/light/intensity');
//mqtt.mqtt_pub(client,'{"topic":"/light/intensity","message":"60"}');

// MongoClient.connect(MONGODB_URI, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });



http.listen(443,function(){
	logger.info("Signallng server is listening on port 443");
});

//var message= '{"topic":"presence","message" : "working lovely" }';
/*

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) throw err;
  db.createCollection("customer_status_id", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customer_status_id").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) throw err;
  var myobj = { name: message.userName , address: "Highway 37" };
  db.collection("customer_status_id").insertOne(myobj, function(err, res) {
   if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) throw err;
  db.collection("").findOne({name:"elijah"}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) throw err;
 db.collection("").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
