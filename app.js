var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/502', function(req, res) {
	res.sendFile(__dirname+'/502.html', function() {
		res.end();
	});
});


server.listen(7122);
