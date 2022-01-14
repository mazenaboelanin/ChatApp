const dotenv = require('dotenv').config({path:'../.env'});

// Create a Connection
const socket = io.connect(`http://localhost:${process.env.PORT}`);
