var socket = io();


socket.on('connect', function () {
	console.log('Conncted to socket.io server!');
});

    socket.on('message', function (message) {

    // var ts=1483307423931;
       var ts = message.timestamp;
    var tsmoment=moment.utc(ts);
     console.log(tsmoment.local().format('h:mm a'));
	console.log('New message:');
	console.log(message.text);

   jQuery('.messages').append('<p><strong>'+tsmoment.local().format('h:mm a')+': '+'</strong>'+ ' '+message.text + ' </p>');

});

// Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function (event){
	
	event.preventDefault();

  var $message=$form.find('input[name=message]');
	socket.emit('message',{
		text: $message.val()

	});


	$message.val(' ');

});