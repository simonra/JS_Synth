// Don't try to access elements before they are loaded.
// Use  DOMContentLoaded event instead of trying to do
// stuff like overriding onload-functions.
document.addEventListener(
	"DOMContentLoaded",
	function(event){
		var octaveSlider = document.getElementById("octave-selector-input");
		var octaveDisplayField = document.getElementById("octave-selected");

		octaveDisplayField.innerHTML = octaveSlider.value;
		setOscillatorToOctave(octaveSlider.value);
		octaveSlider.oninput = function() {
			octaveDisplayField.innerHTML = octaveSlider.value;
			setOscillatorToOctave(octaveSlider.value);
		}
	}
);
