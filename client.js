const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // log a conneted message on connection
  conn.on('connect', () => {
    console.log('Succesfully connected to server');
    // setup interface to handle
    conn.write('Name: JPK');
  });

  // accept incoming data from server and log to console
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");

module.exports = {
  connect
};