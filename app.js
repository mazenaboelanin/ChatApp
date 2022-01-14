const express = require('express');
const dotenv = require('dotenv').config();
const socket = require('socket.io');
const port = process.env.PORT


// App
const app = express();
const server = app.listen(port, ()=>{ console.log(`Server is running on ${port}`)});
// static folder
app.use(express.static('public'));


// Socket 
const io = socket(server);

// listen on connection

io.on('connection', function(socket){
    console.log('we are heree', socket);
});
