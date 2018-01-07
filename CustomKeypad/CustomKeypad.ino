/* @file password.ino
|| @version 1.0
|| @author Shubham Patil
|| @contact patilshubham1002@gmail.com
||
|| @description
|| | Demonstrates changing the keypad size and key values.
|| #
*/
#include <Keypad.h>
#include <MD5.h>
const byte ROWS = 4; //four rows
const byte COLS = 4; //four columns
//define the cymbols on the buttons of the keypads
char hexaKeys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
char* hashed =  "b59c67bf196a4758191e42f76670ceba";
byte rowPins[ROWS] = {9,8,7,6};//connect to the row pinouts of the keypad
byte colPins[COLS]= {5,4,3,2};  //connect to the column pinouts of the keypad

//initialize an instance of class NewKeypad
Keypad customKeypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);

void setup(){
  Serial.begin(9600);
}

int passwordCheck(){

int i=0;
char customKey ;
char password[5] = {'0'};
Serial.println("Enter the Pin:");
for(i=0;i<4;i++){

      customKey = customKeypad.waitForKey();
      password[i] = customKey;
}
password[5]='\0';
Serial.println(password);
//generate the MD5 hash for our string
unsigned char* hash=MD5::make_hash(password);
//generate the digest (hex encoding) of our hash
char *md5str = MD5::make_digest(hash, 16);
free(hash);
Serial.println(md5str);
//print it on our serial monitor
if(String(md5str)=="b59c67bf196a4758191e42f76670ceba"){
  Serial.println("Password Successfully Accessed");
  return 1;
}
free(md5str);
Serial.println("Password Is Worng");
return 0;
//Give the Memory back to the System if you run the md5 Hash generation in a loop

}
void loop(){
  passwordCheck();
}


