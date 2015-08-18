window.onload = function() {

var button1 = document.getElementById('button1')
var stopsNumber;


var stopValueA = document.getElementById('stopA');
var stopValueB = document.getElementById('stopb');
var stopValueC = document.getElementById('stopC');
var stopValueD = document.getElementById('stopD');
var stopValueE = document.getElementById('stopE');
var stopValueF = document.getElementById('stopF');


var subWay = {
	'lineN' : ['8th', 'unionSquare', '23rd', '28th', '34th', 'timeSquare'],
	'linesixth' : ['astorPlace', 'unionSquare', '23rd', '28th', '33rd', 'grandCentral'],
	'lineL' : ['1st', '3rd', 'unionSquare', '6th', '8th',]
};

// math for the N-line

lineNStops = function(){
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
   lineNStops();
 
});

// math for the l-line

lineLStops = function(){
	getOnL = subWay.lineL.indexOf(stopValueC.value);
    getOffL = subWay.lineL.indexOf(stopValueD.value);
    console.log(getOnL);
    console.log(getOffL)
	stopsNumberL = getOnL - getOffL;
	console.log('you have ' + stopsNumberL + ' stops to go');
}  

button2.addEventListener('click', function(e){
	e.preventDefault();
	console.log('button2 clicked')
   lineLStops();
 
});

// math for the 6th line
lineSixthStops = function(){
	getOnS = subWay.linesixth.indexOf(stopValueE.value);
    getOffS = subWay.linesixth.indexOf(stopValueF.value);
    console.log(getOnS);
    console.log(getOffS)
	stopsNumberS = getOnS - getOffS;
	console.log('you have ' + stopsNumberS + ' stops to go');
}  

button3.addEventListener('click', function(e){
	e.preventDefault();
	console.log('button2 clicked')
   lineSixthStops();
 
});

}