const zmq = require("zeromq/v5-compat");

const socket = zmq.createSocket("dealer");
socket.pause();

socket.on("connect", (fd, ep) => {
    console.log("Connected");
    socket.resume();
});

socket.on("disconnect", (fd, ep) => {
    console.log("Disconnected")
    socket.pause();
});


