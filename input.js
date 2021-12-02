const {connect} = require('./client');
conn = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "\u001b[A") {
      conn.write('Move: up')
  } else if (key === "\u001b[B") {
      conn.write('Move: down')
  } else if (key === "\u001b[D") {
      conn.write('Move: left')
  } else if (key === "\u001b[C") {
      conn.write('Move: right')
  }
};

module.exports = {
  setupInput
};