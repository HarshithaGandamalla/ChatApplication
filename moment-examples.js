var moment=require('moment');
var now=moment();

console.log(now.format());

 console.log(now.format('X'));
 console.log(now.format('x'));
console.log(now.valueOf());

var timestamp=1483240687762;

var tsmoment=moment.utc(timestamp);
console.log(tsmoment.local().format('h:mm a'));


// now.subtract(1,'year');

// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma'));
// console.log(now.format('h:mma'));