// netclient.js
const net = require("net");

const client = net.connect({ port: 8000 }, function () {
  //connect listener
  console.log("client connected");
  client.write("world!\r\n");
});

client.on("data", function (data) {
  console.log(data.toString());
  client.load();
  client.end();
});

client.on("load", function (carga) {
  console.log(carga.toString());
  client.end();
});

client.on("end", function () {
  console.log("client disconnected");
});