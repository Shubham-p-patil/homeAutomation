var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";


/*
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbase = db.db("mydb");
  dbase.createCollection("customers_uid", function(err, res) {
    console.log("Collection created!");
     db.close();
 });
 });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { uid:"NI6FuroAFmaFYci4BXoPft7mcvL2",
                paramerters:{
                ac: 61,
                acOn: false,
                age: 55,
                fan: 66,
                fanOn: false,
                height: 96,
                latitude: 0.3338800072669983,
                lightB: 204,
                lightG: 76,
                lightOn: true,
                lightR: 176,
                lock: true,
                lockHash: 'b59c67bf196a4758191e42f76670ceba',
                longitude: 1.2726165056228638,
                monitoringData: '0 0 0 0 0 0 0 0 0 0 5 0 0 0 0 0 0 0 0 0 0 0 0 0',
                monitoringRadius: 123,
                name: 'mandar',
                numberOfAC: 0,
                numberOfFans: 0,
                numberOfLights: 0,
                numberofTemperatureSetters: 0,
                sleepDuration: 275,
                temp: 99,
                temperature: 99,
                temperatureInput: 0,
                temperatureOn: false,
                weight: 66
              }
            };
  var dbase = db.db("mydb");
  dbase.collection("customers_uid").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");

   db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Shubham", address: "Kossine" };
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("2 record inserted");

   db.close();
  });
});
{uid:"KMbzqgQMfsXLhrxotK8lLhrYnLK2"}
*/


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbase = db.db("mydb");
 dbase.collection("customers_uid").find({uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].paramerters.name);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = {uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"};
  var newvalues = {$set:{ "paramerters.name" : "Mandar"}};
  var dbase  = db.db("mydb");
  dbase.collection("customers_uid").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
