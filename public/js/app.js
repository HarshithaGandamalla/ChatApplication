var socket = io();
var name=getQueryVariable('name')||'Anonymous';
var room=getQueryVariable('room');

socket.on('connect', function () {
	console.log('Connected to socket.io server!');


	socket.emit('joinRoom',{
		name : name ,
		room : room
	});
});


    jQuery('.room-title').text(room);





    socket.on('message', function (message) {

    var $messages=jQuery('.messages');
    var $message=jQuery('<li class="list-group-item"></li>')
       var ts = message.timestamp;
    var tsmoment=moment.utc(ts);
     console.log(tsmoment.local().format('h:mm a'));
	console.log('New message:');
	console.log(message.text);
   $message.append('<p><strong> '+ message.name +' ' +tsmoment.local().format('h:mm a')+'</p></strong>');
   $message.append('<p>'+message.text + ' </p>');
    $messages.append($message);
});

// Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function (event){
	
	event.preventDefault();

  var $message=$form.find('input[name=message]');
	socket.emit('message',{
		name: name,
		text: $message.val()

	});


	$message.val(' ');

});