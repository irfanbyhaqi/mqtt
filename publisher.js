var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://192.168.1.3');

client.on('connect', () => {
    setInterval(() => {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent')
    }, 1000)
})

client.on('error', (err) => {
    console.log(err);  
})