
/* If number of users requests increases*/
db.ref("/responseRequired").on("value", function(snapshot) {
	var uid = snapshot.val().split(" ");
	console.log(snapshot.val());
	for(i=0;i<uid.length;i++){

            db.ref("/"+uid[i]+"/ac").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/acOn").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/ac").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/fan").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/fanOn").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/lightR").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/lightB").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/lightG").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/lightOn").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/lock").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/lockHash").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/temperatureInput").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});

            db.ref("/"+uid[i]+"/temperatureOn").on("value", function(snapshot) {
        			console.log(snapshot.val());
        		});
	}
});



//var message= '{"topic":"presence","message" : "working lovely" }';
//mqtt.mqtt_sub(client,'/light/intensity');
//mqtt.mqtt_pub(client,'{"topic":"/light/intensity","message":"60"}');

// MongoClient.connect(MONGODB_URI, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// app.post('/userRecord',function(req,res){
// 	req.on('data', function(chunk) {
//     var user = JSON.parse(chunk);
//     admin.auth().getUserByEmail(JSON.stringify(user.email))
//           .then(function(userRecord) {
//           // See the UserRecord reference doc for the contents of userRecord.
//                 var userR
// 								ecordtmp = userRecord.toJSON();
//                 console.log("Successfully fetched user data:", userRecordtmp.uid);
// 								db.ref("/"+userRecordtmp.uid).on("value", function(snapshot) {
// 								  console.log(snapshot.val());
//
//               })
//           .catch(function(error) {
//                 console.log("Error fetching user data:", error);
//               });
//
//     });
//     res.send("Successfully Done")
// });
/*
db.ref("/KMbzqgQMfsXLhrxotK8lLhrYnLK2").on("value", function(snapshot) {
	//console.log(snapshot.val());
  utils = snapshot.val();
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb");
    var myquery = {uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"};
   dbase.collection("customers_uid").find(myquery).toArray(function(err, result) {
      if (err) throw err;

              if(utils.lightR != result[0].paramerters.lightR)
    	         {
                //	var	chunk = '{"topic":"/light","message":"'+snapshot.val()+'"}'
                var dbase = db.db("mydb");
                	var	chunk = '{"topic":"/light","message":"lightR '+utils.lightR+'"}';
                	mqtt.mqtt_pub(client,chunk);
                  var myquery = {uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"};
                  var newvalues = {$set:{ "paramerters.lightR" : utils.lightR}};
                  dbase.collection("customers_uid").updateOne(myquery, newvalues, function(err, res) {
                      if (err) throw err;
                      console.log("1 document updated");
                    });
              }
              if(utils.lightG != result[0].paramerters.lightG)
    	         {
                //	var	chunk = '{"topic":"/light","message":"'+snapshot.val()+'"}'
                	var	chunk = '{"topic":"/light","message":"'+utils.lightG+'"}';
                	mqtt.mqtt_pub(client,chunk);
                  var dbase = db.db("mydb");
                  var myquery = {uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"};
                  var newvalues = {$set:{ "paramerters.lightG" : utils.lightG}};
                  dbase.collection("customers_uid").updateOne(myquery, newvalues, function(err, res) {
                      if (err) throw err;
                      console.log("1 document updated");
                    });
              }
              if(utils.lightB != result[0].paramerters.lightB)
    	         {
                //	var	chunk = '{"topic":"/light","message":"'+snapshot.val()+'"}'
                	var	chunk = '{"topic":"/light","message":"'+utils.lightB+'"}';
                	mqtt.mqtt_pub(client,chunk);
                  var dbase = db.db("mydb");
                  var myquery = {uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"};
                  var newvalues = {$set:{ "paramerters.lightB" : utils.lightB}};
                  dbase.collection("customers_uid").updateOne(myquery, newvalues, function(err, res) {
                      if (err) throw err;
                      console.log("1 document updated");
                    });
              }
             if(utils.lightOn != result[0].paramerters.lightOn)
    	         {
                //	var	chunk = '{"topic":"/light","message":"'+snapshot.val()+'"}'
                	var	chunk = '{"topic":"/light","message":"'+utils.lightOn+'"}';
                	mqtt.mqtt_pub(client,chunk);
                  var dbase = db.db("mydb");
                  var myquery = {uid:"NI6FuroAFmaFYci4BXoPft7mcvL2"};
                  var newvalues = {$set:{ "paramerters.lightOn" : utils.lightOn}};
                  dbase.collection("customers_uid").updateOne(myquery, newvalues, function(err, res) {
                      if (err) throw err;
                      console.log("1 document updated");
                    });
              }

      console.log(utils.lightR);
      console.log(utils.lightG);
      console.log(utils.lightB);
      console.log(result[0].paramerters.lightR);
      console.log(result[0].paramerters.lightG);
      console.log(result[0].paramerters.lightB);
      db.close();
    });

  });
	});
*/
