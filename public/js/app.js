// var socket= io();

// socket.on('Connect',function(){
	
// 	console.log('Connected to socket');
// }); 

// socket.emit('message',function (message){
	
// 	console.log('Message sent');
// 	console.log(message.text);
// } );

var socket = io();

socket.on('connect', function () {
	console.log('Conncted to socket.io server!');
});

socket.on('message', function (message) {
	console.log('New message:');
	console.log(message.text);
});