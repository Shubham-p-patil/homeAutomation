var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./firebase.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://*************.firebaseio.com/"
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
	usersRef.set({
   		"user":"name"
 });

 
//Access the uid and search through a number of uid for change in any particular child value or child

admin.auth().getUserByEmail("random@gmail.com")
	.then(function(userRecord) {
	     // See the UserRecord reference doc for the contents of userRecord.
	     var userRecordtmp = userRecord.toJSON();
    		 console.log("Successfully fetched user data:", userRecordtmp.uid);
   	})
   	.catch(function(error) {
    		 console.log("Error fetching user data:", error);
 	});

db.ref("/responseRequired").on("value", function(snapshot) {
  	var uid = snapshot.val().split(" ");
  	console.log(snapshot.val());
  	for(i=0;i<uid.length;i++){
  		db.ref("/"+snapshot.val()).on("value", function(snapshot) {
  			console.log(snapshot.val());
  		});
  	}
  });

//Update any existing value present in the data base without changing any other value
db.ref("/").update({
  "responseRequired": "Shubham"
 });

// do some stuff once
db.ref("/responseRequired").once("value",function(snapshot){
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


