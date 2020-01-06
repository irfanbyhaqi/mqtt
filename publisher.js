var mqtt = require("mqtt");
var client = mqtt.connect('ws://mqtt-carepol.herokuapp.com:80');

client.on('connect', () => {
    setInterval(() => {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent')
    }, 5000)
})

client.on('error', (err) => {
    console.log(err);  
})