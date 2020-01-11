var mqtt = require("mqtt");
var client = mqtt.connect('ws://mqtt-carepol.herokuapp.com:80');

client.on('connect', () => {
    client.subscribe('myTopic')
})

client.on('message', (topic, message) => {
    context = message.toString();
    console.log(context)
})