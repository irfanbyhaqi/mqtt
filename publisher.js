var mqtt = require("mqtt");
var client = mqtt.connect('wss://mqtt-carepol.herokuapp.com:443');

client.on('connect', () => {
    setInterval(() => {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent')
    }, 5000)
})

client.on('error', (err) => {
    console.log(err);  
})