const { ipcRenderer } = require("electron");
const zmq = require("zeromq/v5-compat");

const socket = zmq.createSocket("dealer");

ipcRenderer.on("my-channel", (event, action) => {
    console.log(`Received IPC message from main process. Action: "${action}"`)
    switch(action) {
        case "reload":
            socket.close();
            console.log("Socket closed...");
            break;
        default:
            console.error("Unknown action:", action);
    }
});
