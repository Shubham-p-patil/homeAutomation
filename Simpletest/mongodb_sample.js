var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    console.log("Table created!");
    db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, function(err, res) {
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
MongoClient.connect(url, function(err, db) {  
  if (err) throw err;  
 db.collection("customers").find({}).toArray(function(err, result) {  
    if (err) throw err;  
    console.log(result);  
    db.close();  
  });  
}); 
