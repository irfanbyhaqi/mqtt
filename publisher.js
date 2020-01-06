var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://mqtt-sse.herokuapp.com:1883');

client.on('connect', () => {
    setInterval(() => {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent')
    }, 1000)
})

client.on('error', (err) => {
    console.log(err);  
})