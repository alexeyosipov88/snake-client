const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
// IP address here,
    host: "135.23.222.131",
    port: 50542
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // conn.write('Move: up');
    conn.write('Name: OAO');
    
  });
  conn.setEncoding("utf8");
  return conn;
};

module.exports = connect;