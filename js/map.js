window.onload = function() {

var button1 = document.getElementById('button1')
var stopsNumber;


var stopValueA = document.getElementById('stopA');

var stopValueB = document.getElementById('stopb');


var subWay = {
	'lineN' : ['8th', 'unionSquare', '23rd', '28th', '34th', 'timeSquare'],
	'linesixth' : ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central'],
	'lineL' : ['1st', '3rd', 'Union Square', '6th', '8th',]
};


calculateStops = function(){
	getOn = subWay.lineN.indexOf(stopValueA.value);
    getOff = subWay.lineN.indexOf(stopValueB.value);
    console.log(getOn);
    console.log(getOff)
	stopsNumber = getOn - getOff;
	console.log('you have ' + stopsNumber + ' stops to go');
}  

button1.addEventListener('click', function(e){
	e.preventDefault();
	console.log('button1 clicked')
   calculateStops()
 
});


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

}