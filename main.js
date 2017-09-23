var context = new AudioContext();

var numberOfKeys = 12;
var gains = new Array(numberOfKeys);
var oscillators = new Array(numberOfKeys);

for (i = 0; i < numberOfKeys; i++) {
	gains[i] = context.createGain();
	gains[i].gain.value = 0.2;
	oscillators[i] = context.createOscillator();
	oscillators[i].connect(gains[i]);
	oscillators[i].start(0);
}

// Major pentatonic scale, C, D, E, G, A
// Start at C4:
oscillators[0].frequency.value = 261.626;
oscillators[1].frequency.value = 293.665;
oscillators[2].frequency.value = 329.628;
oscillators[3].frequency.value = 391.995;
oscillators[4].frequency.value = 440.000;
oscillators[5].frequency.value = 523.251;
oscillators[6].frequency.value = 587.330;
oscillators[7].frequency.value = 659.255;
oscillators[8].frequency.value = 783.991;
oscillators[9].frequency.value = 880.000;
oscillators[10].frequency.value = 1046.50;
oscillators[11].frequency.value = 1174.66;

// Set all oscilators to same type:
function setAllSine() {
	for(i = 0; i < gains.length; i++){
		oscillators[i].type = "sine";
	}
}
function setAllSquare() {
	for(i = 0; i < gains.length; i++){
		oscillators[i].type = "square";
	}
}
function setAllSawtooth() {
	for(i = 0; i < gains.length; i++){
		oscillators[i].type = "sawtooth";
	}
}
function setAllTriangle() {
	for(i = 0; i < gains.length; i++){
		oscillators[i].type = "triangle";
	}
}

var keyboardToGainMapping = {
	A:gains[0],
	S:gains[1],
	D:gains[2],
	F:gains[3],
	G:gains[4],
	H:gains[5],
	J:gains[6],
	K:gains[7],
	L:gains[8],
	º:gains[9],
	Þ:gains[10],
	Ü:gains[11]
};

// The console logging is to debug n key rollover issues
document.onkeydown = function(evt){
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);
	// console.log(charString); // Use this for debugging the keys to the left of the 'l'-cahracter
	keyboardToGainMapping[charString].connect(context.destination);
}

document.onkeyup = function(evt){
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);

	keyboardToGainMapping[charString].disconnect(context.destination);
}
