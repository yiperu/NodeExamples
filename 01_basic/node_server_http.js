var http = require('http');
var port = 8180;

function handle_GET_request(response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Se ha solicitado request Get');
}

function handle_POST_request(response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Se ha solicitado request Post');
}

function handle_PUT_request(response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Se ha solicitado request Put');
}

function handle_HEAD_request(response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Se ha solicitado request Head');
}

function handle_DELETE_request(response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Se ha solicitado request DELETE');
}

function handle_bat_request(response){
	response.writeHead(400, {'Content-Type' : 'text/plain'});
	response.end('request incorrecta');
}

function handle_request(request, response){

	switch (request.method) {
		case 'GET':
			handle_GET_request(response);
			break;
		case 'POST':
			handle_POST_request(response);
			break;
		case 'PUT':
			handle_PUT_request(response);
			break;
		case 'HEAD':
			handle_HEAD_request(response);
			break;
		case 'DELETE':
			handle_DELETE_request(response);
			break;
		default:
			handle_bat_request(response);
			break;
	}
	console.log('Precesamiento request finalizado');
}

http.createServer(handle_request).listen(port, '127.0.0.1');
console.log('Empezando server http Node.js en http://127.0.0.1:'+ port);
