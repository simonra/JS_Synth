var context = null; // Hack for handling problem of AudioContext's not being createable immediately upon load, should have been initialized here.

var numberOfKeys = 17;
var gains = new Array(numberOfKeys);
var oscillators = new Array(numberOfKeys);

var keyboardToGainMapping = null; // Hack for handling problem of AudioContext's not being createable immediately upon load, should have been initialized here right after the for loop now placed inside initializeOscilators().

// Workaround for the problem of having to have interaction before sond can be set up, sacrificing performance and ease of creativity.
// A sincere wish of suffering and misery on the people contributing to the web not being a place where creating audiovisual art is effortless and our highest priority.
// May your every effort misreably fail, and all you wanted to achieve in life perish before you, leaving behind only the opposite of whatever you desire.
var uninitialized = true;

function initializeOscilators() {
	if(uninitialized){
		context = new AudioContext();
		for (i = 0; i < numberOfKeys; i++) {
			gains[i] = context.createGain();
			gains[i].gain.value = 0.2;
			oscillators[i] = context.createOscillator();
			oscillators[i].connect(gains[i]);
			oscillators[i].start(0);
			oscillators[i].frequency.value  = midiFrequencies[i + 60];
		}

		keyboardToGainMapping = {
			// Q:
			A:gains[0],
			W:gains[1],
			S:gains[2],
			E:gains[3],
			D:gains[4],
			// R:gains[0],
			F:gains[5],
			T:gains[6],
			G:gains[7],
			Y:gains[8],
			H:gains[9],
			U:gains[10],
			J:gains[11],
			// I:gains[0],
			K:gains[12],
			O:gains[13],
			L:gains[14],
			P:gains[15],
			";":gains[16],//;
			// º:gains[16],//;
			// {:gains[0],
			// Þ:gains[17],
			// Ü:gains[18]
		};

		uninitialized = false;
	}
}


function setOscillatorToOctave(octave){
	if(uninitialized){
		return;
	}
	// add 1 to octave because they are 0-indexed:
	var octaveOffset = (Number(octave) + 1)*12;
	for(i = 0; i < numberOfKeys; i++){
		var midiNumber = i + octaveOffset;
		if(midiNumber >= midiFrequencies.length){
			midiNumber = midiFrequencies.length - 1;
		}
		else if (midiNumber < 0){
			midiNumber = 0;
		}
		oscillators[i].frequency.value  = midiFrequencies[midiNumber];
	}
	// Major pentatonic scale, C, D, E, G, A
	// oscillators[0].frequency.value  = noteFrequencies.C4;
	// oscillators[1].frequency.value  = noteFrequencies.D4;
	// oscillators[2].frequency.value  = noteFrequencies.E4;
	// oscillators[3].frequency.value  = noteFrequencies.G4;
	// oscillators[4].frequency.value  = noteFrequencies.A4;
	// oscillators[5].frequency.value  = noteFrequencies.C5;
	// oscillators[6].frequency.value  = noteFrequencies.D5;
	// oscillators[7].frequency.value  = noteFrequencies.E5;
	// oscillators[8].frequency.value  = noteFrequencies.G5;
	// oscillators[9].frequency.value  = noteFrequencies.A5;
	// oscillators[10].frequency.value = noteFrequencies.C6;
	// oscillators[11].frequency.value = noteFrequencies.D6;
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

// The console logging is to debug n key rollover issues
document.onkeydown = function(evt){
	initializeOscilators();
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);
	// console.log(charString); // Use this for debugging the keys to the left of the 'l'-cahracter

	if(keyboardToGainMapping[charString] == undefined) {
		return;
	}
	keyboardToGainMapping[charString].connect(context.destination);
}

document.onkeyup = function(evt){
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charString = String.fromCharCode(charCode);

	if(keyboardToGainMapping == null) {
		// Can happen if reloaded with ctrl+r, when releasing one of them. You cannto recover at this point by calling initializeOscilators(), because it apparently doesn't count as an interaction with the page.
		// May every unfortune befall the ones who contributed to the "An AudioContext was prevented from starting automatically. It must be created or resumed after a user gesture on the page." anti creativity and performance behavior.
		return;
	};
	if(keyboardToGainMapping[charString] == undefined) {
		return;
	}
	keyboardToGainMapping[charString].disconnect(context.destination);
}
