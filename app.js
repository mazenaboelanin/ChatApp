const express = require('express');
const dotenv = require('dotenv').config();
let socket = require('socket.io');
const port = process.env.PORT || 4000;


// App
const app = express();
const server = app.listen(port, ()=>{ console.log(`Server is running on ${port}`)});
// static folder
app.use(express.static('public'));


// Socket 
let io = socket(server);

// listen on connection

io.on('connection', function(socket){
    console.log('we are heree', socket.id);

    // listen for message and send it back to all sockets
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    // Broadcast Message
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
