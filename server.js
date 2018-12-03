const mqtt = require('mqtt');
const http = require("http");
var io = require('socket.io')();
io.listen('8080');

const client = mqtt.connect('mqtt://10.0.81.66:666')

//conectar mqtt
client.on("connect", () => {
    console.log("mqtt conectado");
});

io.on('connection', function (socket) {
    console.log("ws conectado");
    socket.on("topic", (message) => {
        var codigo = message.split(":");
        var topicos = codigo[0];
        if (codigo[1] === "sub") {
            client.subscribe(topicos.split(","));
        } else {
            client.unsubscribe(topicos.split(","));
        }
        client.on("message", (topic, message) => {
            socket.emit("message", topic + "=> " + message);
        });
    })
});
    