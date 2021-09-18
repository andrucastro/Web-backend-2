const http = require('http');
const routes = require('./practiceRoute.js')

const server = http.createServer(routes);

server.listen(3000);