const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT

// static folder
app.use(express.static('public'));

app.listen(port, ()=>{ console.log(`Server is running on ${port}`)});