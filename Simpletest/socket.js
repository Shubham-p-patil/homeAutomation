var logger = require("./utils/logger");
//var assert = require('assert');
//var coll; // db collection
var namespaceMap = {};
var socketIo;
var callReceivedCount = 0;
//var MONGODB_URI = 'mongodb://127.0.0.1:27017/mydb';
//var db; // create db connection pool
var userNameSocketMap = {};

exports.initializeSocket = function (io) {
	socketIo = io;
	io.of("/").on('connect', function (socket) {

	    logger.info("a user connected to default namespace");
		var defaultNamespace = io.of('/');
        var defaultSocket = socket;

	/**************** Write the Events Here *******************/
});
};
