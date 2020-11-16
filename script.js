/*
 (function(window){
   var helloSpeaker={};
   helloSpeaker.names="";
  var speakWord = "Hello";
   function speak(names) {
   console.log(speakWord + " " + names);
 }
 window.helloSpeaker=helloSpeaker;
 })(window);
 (function(window){
   var byeSpeaker ={};
   byeSpeaker.names="";
   var speakWord = "Good Bye";
   function speak(names) {
   console.log(speakWord + " " + names);
 }
 window.byeSpeaker=byeSpeaker;
 })(window);
 (function (window) {
 console.log(names);*/
/*
(function(window){
   var helloSpeaker={};
   helloSpeaker.names="";
  var speakWord = "Hello";
   function speak(names) {
   console.log(speakWord + " " + names);
 }
})(window);*/


(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var firstLetter=[];
for (var i = 0; i < names.length; i++) {
      firstLetter.push(names[i].charAt(0).toLowerCase());
      if( firstLetter[i]=="j"){ 
        console.log("Goodbye"+" "+names[i]);
      }
      else
      {
        console.log("Hello"+" "+names[i]);
                   
      }
    }
    
  })(window);
   /*


    /*if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
      } else {
      helloSpeaker.speak(names[i]);
      }
console.log(speakWord+" "+byeSpeaker.speak(names[i]));

       console.log(speakWord+" "+helloSpeaker.speak(names[i])); 
     window.names[i]=names[i];*/

// helloSpeaker.speak();
// byeSpeaker.speak();
// speak(names[i]);
