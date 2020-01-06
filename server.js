const express = require('express');
//const helmet = require('helmet');
//const bodyParser = require('body-parser');
//const morgan = require('morgan');
//const path = require('path');

const app = express();

/**
* Mosca Server Settings below
*/
var mosca = require('mosca');
//var http = require('http');
//var httpServer = http.createServer(app);

var setting = {
    port:process.env.PORT_2 || 1883
}

var httpServer= new mosca.Server(setting)

httpServer.on('ready', function() {
    console.log('Mosca is running');
});
httpServer.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});
httpServer.on('published', function(packet, client) {
    console.log('Published : ', packet.payload);
});
httpServer.on('subscribed', function(topic, client) {
    console.log('subscribed : ', topic);
});
httpServer.on('unsubscribed', function(topic, client) {
    console.log('unsubscribed : ', topic);
});
httpServer.on('clientDisconnecting', function(client) {
    console.log('clientDisconnecting : ', client.id);
});
httpServer.on('clientDisconnected', function(client) {
    console.log('clientDisconnected : ', client.id);
});
/**
* End of Mosca Server Settings
*/
// app.listen(process.env.PORT, () => {
//     console.log(`Magic happens on port`);
// });

//module.exports = app;