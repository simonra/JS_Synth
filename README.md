# JS_Synth

##Calculation of MIDI values

The frequencies for MIDI values can be calculated using the code in `frequency-calculator.js`. It is set up so that `midiFrequencies[n] = getFrequencyForMidi(n)`. An interesting thing to note is that one can sometimes find the formula for obtaining frequencies from MIDI numbers stated as `440*2^((midiNumber-69)/12)`, which is equivalent to `(440/32)*2^((midiNumber-9)/12)` that I've used in `frequency-calculator.js`.

For reading about frequencies and MIDI numbers i found this table helpful: https://en.wikipedia.org/wiki/Scientific_pitch_notation#Table_of_note_frequencies
