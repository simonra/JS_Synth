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

// osc.type = "sawtooth";
// osc2.type = "square";
// osc3.type = "triangle";
// osc4.type = "sine";
// osc5.type = "triangle";

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


gain.gain.value = 0.2;
gain2.gain.value = 0.2;
gain3.gain.value = 0.2;
gain4.gain.value = 0.2;
gain5.gain.value = 0.2;
gain6.gain.value = 0.2;
gain7.gain.value = 0.2;
gain8.gain.value = 0.2;
gain9.gain.value = 0.2;
gain10.gain.value = 0.2;
gain11.gain.value = 0.2;
gain12.gain.value = 0.2;

osc.start(0);
osc2.start(0);
osc3.start(0);
osc4.start(0);
osc5.start(0);
osc6.start(0);
osc7.start(0);
osc8.start(0);
osc9.start(0);
osc10.start(0);
osc11.start(0);
osc12.start(0);

// Set all oscilators to same type:
function setAllSine() {
	osc.type = "sine";
	osc2.type = "sine";
	osc3.type = "sine";
	osc4.type = "sine";
	osc5.type = "sine";
	osc6.type = "sine";
	osc7.type = "sine";
	osc8.type = "sine";
	osc9.type = "sine";
	osc10.type = "sine";
	osc11.type = "sine";
	osc12.type = "sine";
}
function setAllSquare() {
	osc.type = "square";
	osc2.type = "square";
	osc3.type = "square";
	osc4.type = "square";
	osc5.type = "square";
	osc6.type = "square";
	osc7.type = "square";
	osc8.type = "square";
	osc9.type = "square";
	osc10.type = "square";
	osc11.type = "square";
	osc12.type = "square";
}
function setAllSawtooth() {
	osc.type = "sawtooth";
	osc2.type = "sawtooth";
	osc3.type = "sawtooth";
	osc4.type = "sawtooth";
	osc5.type = "sawtooth";
	osc6.type = "sawtooth";
	osc7.type = "sawtooth";
	osc8.type = "sawtooth";
	osc9.type = "sawtooth";
	osc10.type = "sawtooth";
	osc11.type = "sawtooth";
	osc12.type = "sawtooth";
}
function setAllTriangle() {
	osc.type = "triangle";
	osc2.type = "triangle";
	osc3.type = "triangle";
	osc4.type = "triangle";
	osc5.type = "triangle";
	osc6.type = "triangle";
	osc7.type = "triangle";
	osc8.type = "triangle";
	osc9.type = "triangle";
	osc10.type = "triangle";
	osc11.type = "triangle";
	osc12.type = "triangle";
}
// window.onload = stopPlaying();
// function startPlaying() {
// 	context.resume();
// }

// function stopPlaying() {
// 	context.suspend();
// }

// The console logging is to debug n key rollover issues
document.onkeydown = function(evt){
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);
	// console.log(charString); // Use this for debugging the keys to the left of the 'l'-cahracter
	switch(charString){
		case 'A':
			// osc.connect(context.destination);
			gain.connect(context.destination);
			console.log("a down");
			break;
		case 'S':
			// osc2.connect(context.destination);
			gain2.connect(context.destination);
			console.log("s down");
			break;
		case 'D':
			// osc3.connect(context.destination);
			gain3.connect(context.destination);
			console.log("d down");
			break;
		case 'F':
			// osc4.connect(context.destination);
			gain4.connect(context.destination);
			console.log("f down");
			break;
		case 'G':
			// osc5.connect(context.destination);
			gain5.connect(context.destination);
			console.log("g down");
			break;
		case 'H':
			// osc5.connect(context.destination);
			gain6.connect(context.destination);
			console.log("h down");
			break;
		case 'J':
			// osc5.connect(context.destination);
			gain7.connect(context.destination);
			console.log("j down");
			break;
		case 'K':
			// osc5.connect(context.destination);
			gain8.connect(context.destination);
			console.log("k down");
			break;
		case 'L':
			// osc5.connect(context.destination);
			gain9.connect(context.destination);
			console.log("l down");
			break;
		case 'º':
			// osc5.connect(context.destination);
			gain10.connect(context.destination);
			console.log("; down");
			break;
		case 'Þ':
			// osc5.connect(context.destination);
			gain11.connect(context.destination);
			console.log("' down");
			break;
		case 'Ü':
			// osc5.connect(context.destination);
			gain12.connect(context.destination);
			console.log("\\ down");
			break;
	}
}

document.onkeyup = function(evt){
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);
	switch(charString){
		case 'A':
			// osc.disconnect(context.destination);
			gain.disconnect(context.destination);
			console.log("a up");
			break;
		case 'S':
			// osc2.disconnect(context.destination);
			gain2.disconnect(context.destination);
			console.log("s up");
			break;
		case 'D':
			// osc3.disconnect(context.destination);
			gain3.disconnect(context.destination);
			console.log("d up");
			break;
		case 'F':
			// osc4.disconnect(context.destination);
			gain4.disconnect(context.destination);
			console.log("f up");
			break;
		case 'G':
			// osc5.disconnect(context.destination);
			gain5.disconnect(context.destination);
			console.log("g up");
			break;
		case 'H':
			// osc5.disconnect(context.destination);
			gain6.disconnect(context.destination);
			console.log("h down");
			break;
		case 'J':
			// osc5.disconnect(context.destination);
			gain7.disconnect(context.destination);
			console.log("j down");
			break;
		case 'K':
			// osc5.disconnect(context.destination);
			gain8.disconnect(context.destination);
			console.log("k down");
			break;
		case 'L':
			// osc5.disconnect(context.destination);
			gain9.disconnect(context.destination);
			console.log("l down");
			break;
		case 'º':
			// osc5.disconnect(context.destination);
			gain10.disconnect(context.destination);
			console.log("; down");
			break;
		case 'Þ':
			// osc5.disconnect(context.destination);
			gain11.disconnect(context.destination);
			console.log("' down");
			break;
		case 'Ü':
			// osc5.disconnect(context.destination);
			gain12.disconnect(context.destination);
			console.log("\\ down");
			break;
	}
}
