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
oscillators[0].frequency.value  = noteFrequencies.C6;
oscillators[1].frequency.value  = noteFrequencies.D6;
oscillators[2].frequency.value  = noteFrequencies.E6;
oscillators[3].frequency.value  = noteFrequencies.G6;
oscillators[4].frequency.value  = noteFrequencies.A6;
oscillators[5].frequency.value  = noteFrequencies.C7;
oscillators[6].frequency.value  = noteFrequencies.D7;
oscillators[7].frequency.value  = noteFrequencies.E7;
oscillators[8].frequency.value  = noteFrequencies.G7;
oscillators[9].frequency.value  = noteFrequencies.A7;
oscillators[10].frequency.value = noteFrequencies.C8;
oscillators[11].frequency.value = noteFrequencies.D8;

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

	if(keyboardToGainMapping[charString] == undefined) return;
	keyboardToGainMapping[charString].connect(context.destination);
}

document.onkeyup = function(evt){
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);

	if(keyboardToGainMapping[charString] == undefined) return;
	keyboardToGainMapping[charString].disconnect(context.destination);
}
