var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://172.10.10.26');

client.on('connect', () => {
    client.subscribe('myTopic')
})

client.on('message', (topic, message) => {
    context = message.toString();
    console.log(context)
})