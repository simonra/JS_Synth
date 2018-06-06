function getFrequencyForMidi(midiNumber){
	return getFreqencyForMidiGivenTuning(midiNumber, 440);
}

function getFreqencyForMidiGivenTuning(midiNumber, tuningFrequency){
	return (tuningFrequency/32)*Math.pow(2,(midiNumber-9)/12)
}

function getFundamentalFrequencyForSemitone(semitone){
	return getFundamentalFrequencyForSemitoneGivenTuning(semitone,440);
}
function getFundamentalFrequencyForSemitoneGivenTuning(semitone, tuningFrequency){
	return tuningFrequency*Math.pow(2,(semitone-9)/12);
}
