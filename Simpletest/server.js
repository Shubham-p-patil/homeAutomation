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
var admin = require("firebase-admin");
// Fetch the service account key JSON file contents
var serviceAccount = require("./HackerthonData-c3fbad41c806.json");
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackerthondata.firebaseio.com/"
});
// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
//tmpSocket.initializeSocket(io);
var FCM = require('fcm-node');
var serverKey = 'AAAAzFEgPlk:APA91bFAKoSxQzBMgLtd3a_eEKDI3hhzQb4D7fD3rUNCn6DhUaawEcXn7sVEmklqfEIr-qPTNnlxDXu8CnvNq3WOLKWmbPpf4BGQLOVumSCF9ZSUB4AjeDucUvIY5vTi6afSHg8PtAOr'; //put your server key here
var fcm = new FCM(serverKey);
var client = mqtt.mqttConnect(tempmqtt);
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
var utils;



app.get('/', function(req, res) {
	console.log('requestmade')
	res.sendfile('./index.html');
});



           db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/ac").on("value", function(snapshot) {
             var	chunk = '{"topic":"/light","message":"c'+snapshot.val()+'"}';
             mqtt.mqtt_pub(client,chunk);
            console.log(snapshot.val());
        		});

            db.ref("/5HcvohqcS8Owhyc2C2xO5kRpsJC2/acOn").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"a'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);

              console.log(snapshot.val());
        		});


            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/fan").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"t'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);
              console.log(snapshot.val());
        		});

            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/fanOn").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"fanOn '+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);
              console.log(snapshot.val());
        		});

            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/lightR").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"r'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);

              console.log(snapshot.val());
        		});

            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/lightB").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"b'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);
              console.log(snapshot.val());
        		});

            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/lightG").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"g'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);
        			console.log(snapshot.val());
        		});

            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/lightOn").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"l'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);
        			console.log(snapshot.val());
        		});

            db.ref("/5HcvohqcS8Owhyc2C2xO5kRpsJC2/lock").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"lock '+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);
              var notify = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
                  to: 'fuIa0o0Q3yQ:APA91bGunbf6easDqa4xM30-5EA4HcLQU7g6luBpwV5dfhvCyKAG2UL4vdqquc64XsP-MQ1PiZWglNQzAqhZfB38VacNuoSl4JSAh8UheSP6qp-uY107I9rCK8z5t_iI_2NDE9079uSS',

                  notification: {
                      'title': 'Home Security',
                      'body': 'Someone Unlocked And Entered Your House'
                  },

              };
              if(snapshot.val()){
              fcm.send(notify, function(err, response){
                  if (err) {
                      console.log("Something has gone wrong!");
                  } else {
                      console.log("Successfully sent with response: ", response);
                  }
              });
              }


              console.log(snapshot.val());
        		});

            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/lockHash").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"ockHash '+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);

              console.log(snapshot.val());
        		});


            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/temperatureOn").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"emperatureOn '+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);

              console.log(snapshot.val());
        		});
            db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2/temperature").on("value", function(snapshot) {
              var	chunk = '{"topic":"/light","message":"c'+snapshot.val()+'"}';
              mqtt.mqtt_pub(client,chunk);

              console.log(snapshot.val());
            });


            db.ref("/5HcvohqcS8Owhyc2C2xO5kRpsJC2/smoke").on("value", function(snapshot) {
              var notify = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
                  to: 'fuIa0o0Q3yQ:APA91bGunbf6easDqa4xM30-5EA4HcLQU7g6luBpwV5dfhvCyKAG2UL4vdqquc64XsP-MQ1PiZWglNQzAqhZfB38VacNuoSl4JSAh8UheSP6qp-uY107I9rCK8z5t_iI_2NDE9079uSS',

                  notification: {
                      'title': 'Smoke Alert',
                      'body': 'Please Check With Your Neighbours For Any Calamity'
                  },

              };
              if(snapshot.val()){
              fcm.send(notify, function(err, response){
                  if (err) {
                      console.log("Something has gone wrong!");
                  } else {
                      console.log("Successfully sent with response: ", response);
                  }
              });
            }
              console.log(snapshot.val());
        });

        db.ref("/5HcvohqcS8Owhyc2C2xO5kRpsJC2/tempInput").on("value", function(snapshot) {
            var notify = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
              to: 'fuIa0o0Q3yQ:APA91bGunbf6easDqa4xM30-5EA4HcLQU7g6luBpwV5dfhvCyKAG2UL4vdqquc64XsP-MQ1PiZWglNQzAqhZfB38VacNuoSl4JSAh8UheSP6qp-uY107I9rCK8z5t_iI_2NDE9079uSS',

              notification: {
                  'title': 'Temperature ',
                  'body': 'Temperature Exceeded Threshold'
              },

          };
          if(snapshot.val()>'30'){
          fcm.send(notify, function(err, response){
              if (err) {
                  console.log("Something has gone wrong!");
              } else {
                  console.log("Successfully sent with response: ", response);
              }
          });
        }

          console.log(snapshot.val());
      });




app.post('/light',function(req,res){
	req.on('data', function(chunk) {
	//console.log(chunk);
	var client = mqtt.mqttConnect(tempmqtt);
	mqtt.mqtt_pub(client,chunk);
	mqtt.mqtt_sub(client,'/light');
	//mqtt.payload(client);
	});

	res.send('ohyeah');
});




http.listen(443,function(){
	logger.info("Signallng server is listening on port 443");
});
