(function(window){
	var helloSpeaker={};
	helloSpeaker.names="nawal";

	var speakWord = "Hello";
	function speak(names) {
  console.log(speakWord + " " + names);
}
window.helloSpeaker=helloSpeaker;
})(window);


