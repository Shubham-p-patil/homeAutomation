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

//Initialize reference varialble to create a new child
var usersRef = ref.child("users");
usersRef.set({

});
admin.auth().getUserByEmail("mandarsadye@gmail.com")
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    var userRecordtmp = userRecord.toJSON();
    console.log("Successfully fetched user data:", userRecordtmp.uid);
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });

/*
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
*/
usersRef.update({
  "nickname": "Amazing Grace"
});
usersRef.set({
"nickname": "Chicha"
});
