const express = require('express')
const app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.use('/api/',require('./router'));
// app.get('/', (req, res) => res.send('Hello World!  '))









app.listen(port, () => console.log(`Example app listening on port ${port}!`))