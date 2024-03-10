import { createServer } from 'node:net'

const server = createServer((socket) => {

    socket.on('data', (data) => {
        const request = data.toString()
        // Write your implementation for the method
        const response = `I am getting response for request data: ${request}`
        socket.write(response)
        socket.end()
    })
})


server.listen(3000)
