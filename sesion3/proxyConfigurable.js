const net = require("net");

const LOCAL_PORT = 8000;
let LOCAL_IP = "127.0.0.1"; // process.argv[2]
const REMOTE_PORT = 80;
let  REMOTE_IP = "158.42.4.23"; // www.upv.es [process.argv[3]]



if(process.argv[2] != "") LOCAL_IP = process.argv[2].toString();
if(process.argv[3] != "") REMOTE_IP = process.argv[3].toString();

const server = net
  .createServer(function (socket) {
    const serviceSocket = new net.Socket();
    serviceSocket.connect(parseInt(REMOTE_PORT), REMOTE_IP, function () {
      socket.on("data", function (msg) {
        serviceSocket.write(msg);
      });
      serviceSocket.on("data", function (data) {
        socket.write(data);
      });
    });
  })
  .listen(LOCAL_PORT, LOCAL_IP);
console.log("TCP server accepting connection on port: " + LOCAL_PORT);