window.onload = function() {

var button1 = document.getElementById('button1')
var stopsNumber;
var stopValueA = document.getElementById('stopA').value;
console.log(stopValueA)
var stopValueB = document.getElementById('stopb').value;
console.log(stopValueB)

var subWay = {
	N: ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
	sixth: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central'],
	l: ['1st', '3rd', 'Union Square', '6th', '8th',]
};


getOn = indexOf.call(subWay{N:}, stopValueA);
console.log(getOn)
getOff = indexOf.call(subWay{N:}, stopValueB);
console.log(getOff)
calculateStops = function(){
	getOn - getOff
}


// button1.addEventListener('click', function(e){
// 	e.preventDefault();
// 	console.log('button1 clicked');
//  calculateStops();
// });

// function calculateStops(){
// 	console.log(stopValueA)
// stopsNumber = stopValueA + stopValueB;
// };

// console.log();

// }