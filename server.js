const http = require('http');
const app = require('./app');
require('dotenv').config();

console.log(process.env);

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);