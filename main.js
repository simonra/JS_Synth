var context = new AudioContext();

var gain = context.createGain();
var gain2 = context.createGain();
var gain3 = context.createGain();
var gain4 = context.createGain();
var gain5 = context.createGain();
var gain6 = context.createGain();
var gain7 = context.createGain();
var gain8 = context.createGain();
var gain9 = context.createGain();
var gain10 = context.createGain();
var gain11 = context.createGain();
var gain12 = context.createGain();

var gains = [
	gain,
	gain2,
	gain3,
	gain4,
	gain5,
	gain6,
	gain7,
	gain8,
	gain9,
	gain10,
	gain11,
	gain12
];

var osc = context.createOscillator();
var osc2 = context.createOscillator();
var osc3 = context.createOscillator();
var osc4 = context.createOscillator();
var osc5 = context.createOscillator();
var osc6 = context.createOscillator();
var osc7 = context.createOscillator();
var osc8 = context.createOscillator();
var osc9 = context.createOscillator();
var osc10 = context.createOscillator();
var osc11 = context.createOscillator();
var osc12 = context.createOscillator();

var oscillators = [
	osc,
	osc2,
	osc3,
	osc4,
	osc5,
	osc6,
	osc7,
	osc8,
	osc9,
	osc10,
	osc11,
	osc12
];

// Major pentatonic scale, C, D, E, G, A
// Start at C4:
osc.frequency.value = 261.626;
osc2.frequency.value = 293.665;
osc3.frequency.value = 329.628;
osc4.frequency.value = 391.995;
osc5.frequency.value = 440.000;
osc6.frequency.value = 523.251;
osc7.frequency.value = 587.330;
osc8.frequency.value = 659.255;
osc9.frequency.value = 783.991;
osc10.frequency.value = 880.000;
osc11.frequency.value = 1046.50;
osc12.frequency.value = 1174.66;

osc.connect(gain);
osc2.connect(gain2);
osc3.connect(gain3);
osc4.connect(gain4);
osc5.connect(gain5);
osc6.connect(gain6);
osc7.connect(gain7);
osc8.connect(gain8);
osc9.connect(gain9);
osc10.connect(gain10);
osc11.connect(gain11);
osc12.connect(gain12);

// osc4.connect(context.destination);
// osc5.type = "sine";
// osc4.connect(context.destination);

for(i = 0; i < gains.length; i++){
	gains[i].gain.value = 0.2;
}

for(i = 0; i < gains.length; i++){
	oscillators[i].start(0);
}

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
	A:gain,
	S:gain2,
	D:gain3,
	F:gain4,
	G:gain5,
	H:gain6,
	J:gain7,
	K:gain8,
	L:gain9,
	º:gain10,
	Þ:gain11,
	Ü:gain12
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
