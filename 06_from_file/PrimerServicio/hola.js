var express = require('express');
var app = express();

app.get('/hola/:nombre', function(request, response){
	response.send('Hola ' + request.params.nombre);
});

app.listen(3000);