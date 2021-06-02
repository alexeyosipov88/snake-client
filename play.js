const net = require("net");
const connect = require("../snake-client/client")

// establishes a connection with the game server
console.log("Connecting ...");
connect();