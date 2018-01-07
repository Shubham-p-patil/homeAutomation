var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./alien-array-172810-firebase-adminsdk-rioe9-4b8e099d56.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://alien-array-172810.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
//Initialize a reference variable for accesing he database
var ref = db.ref("u49HVir7ibZMybz4bOXEBr6InM22/irrigation/fertilizerPump");
ref.once("value",function(snapshot){
  console.log(snapshot.val());
});
db.ref("ledStatus").update({
"ledStatus":45})
