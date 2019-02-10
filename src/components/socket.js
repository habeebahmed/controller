import io from 'socket.io-client'; 

var socket = null;


const socketStart = (code) => {
    socket = io('http://192.168.43.243:7777')
    socket.on('connect', (res) => {
        console.log('Connection Established')    
        socket.emit('CONTROLLER_START_UP', { sessionId: code });
    })
}

export { socket , socketStart };