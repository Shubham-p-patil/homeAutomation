import paho.mqtt.client as mqtt
import requests

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

def on_publish(client,userdata,result):             #create function for callback
    print("data published \n")
    pass
def on_message(client, userdata,msg):
      if msg.topic == '/light/intensity' and msg.payload == '0':
          client.publish("/light/1","off",qos=0,retain=False)
      if msg.topic == '/light/intensity' and msg.payload == '50':
          client.publish("/light/1","on",qos=0,retain=False)
          
      print(msg.topic+" "+str(msg.payload))
            
client = mqtt.Client()

client.connect("13.126.45.185")

#res = requests.post("http://192.168.1.6:443/light/1",data='{"topic":"/light/intensity","message":"50"}',verify=False)
client.on_connect = on_connect
client.on_publish = on_publish
client.subscribe("/light/intensity")
#client.publish("/light/intensity","20",qos=0,retain=False)

client.on_message = on_message

client.loop_forever()
