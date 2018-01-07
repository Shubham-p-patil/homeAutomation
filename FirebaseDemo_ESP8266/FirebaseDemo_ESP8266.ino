#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
// Set these to run example.
#define FIREBASE_HOST "hackerthondata.firebaseio.com"
#define FIREBASE_AUTH "UhSHqqCgupzUyRDj3JMo6BZTBhCpBpoRPFwAkvJ3"
#define WIFI_SSID "chinmay"
#define WIFI_PASSWORD "chinmaykhopde"

void setup() {
  Serial.begin(9600);


  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Serial.println("Connection to firebase databse established");
  Firebase.setInt("Ledstatus",0);
}

//int n = 0;

void loop() {
// set value
int incomingByte = Serial.read();
if(incomingByte){
  Firebase.setBool("KMbzqgQMfsXLhrxotK8lLhrYnLK2/lock",1);
  // handle error
  if (Firebase.failed()) {
     Serial.print("pushing Successfull");
     Serial.println(Firebase.error());
     return;
 }
 else
 Firebase.setBool("KMbzqgQMfsXLhrxotK8lLhrYnLK2/lock",1);
 delay(1000);
}
