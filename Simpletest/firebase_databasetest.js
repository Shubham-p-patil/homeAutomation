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
//Initialize a reference variable for accesing he database
var ref = db.ref("/");
db.ref("/").once("value",function(snapshot){
  console.log(snapshot.val());
});

//Initialize reference varialble to create a new child
var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//       date_of_birth: "June 23, 1912",
//       full_name: "Alan Turing"
//     },
//     gracehop: {
//       date_of_birth: "December 9, 1906",
//       full_name: "Grace Hopper"
//     }
//
// });

// app.post('/light/1',function(req,res){
// 	req.on('data', function(chunk) {
// admin.auth().getUserByEmail("mandarsadye@gmail.com")
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     var userRecordtmp = userRecord.toJSON();
//     console.log("Successfully fetched user data:", userRecordtmp.uid);
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });

  /*db.ref("/responseRequired").on("value", function(snapshot) {
  	var uid = snapshot.val().split(" ");
  	console.log(snapshot.val());
  	for(i=0;i<uid.length;i++){
  		db.ref("/"+snapshot.val()).on("value", function(snapshot) {
  			console.log(snapshot.val());
  		});
  	//}
  });
  // db.ref("/").update({
  // "responseRequired": "Shubham"
  // });
db.ref("/responseRequired").once("value",function(snapshot){
  console.log(snapshot.val());
});
// do some stuff once
db.ref("/NI6FuroAFmaFYci4BXoPft7mcvL2").once("value", function(snapshot) {
  console.log(snapshot.val());
});

// Attach an asynchronous callback to read the data at our posts reference
db.ref("/Ledstatus").on("value", function(snapshot) {
  console.log(snapshot.val());
});

// Retrieve new posts as they are added to our database
ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

db.ref("/").update({
"responseRequired": "B5oRvBKX1oXrzLLnF4olhrs0YF03"
});
db.ref("/B5oRvBKX1oXrzLLnF4olhrs0YF03").update({
"fan":"100"
});
*/
