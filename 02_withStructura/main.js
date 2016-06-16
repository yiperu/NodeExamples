var httpModule = require('./module/http_module');

var http = require('http');
var port = 8180;

http.createServer(httpModule.handle_request).listen(port, '127.0.0.1');
console.log('Empezando server http Node.js en http://127.0.0.1:'+ port);

// http.createServer(handle_request).listen(port, '127.0.0.1');
// console.log('Empezando server http Node.js en http://127.0.0.1:'+ port);