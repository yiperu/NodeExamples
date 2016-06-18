var express = require('express');
var app = express();

app.get('/hola', function(request, response){
	response.send('Hola ruta');
});

app.listen(3000);