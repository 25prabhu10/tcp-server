import * as net from "node:net";

const serverIp = '127.0.0.1';

const socket = new net.Socket()

socket.connect(3000, serverIp, () => {
    const request = process.argv[2]
    socket.write(request)
})

socket.on('data', (response) => {
    console.log(response.toString())
})
