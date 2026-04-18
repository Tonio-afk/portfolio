var main = function() {
   var state;
    // The PLAY button
 $('#play').click(function() {
   $('#message').text("Playing track");
   $('#player').trigger("play");
 });
  // The PAUSE button
 $('#pause').click(function(){
     $('#message').text("Track paused");
     $('#player').trigger("pause");
 });




 // The MUTE button
 $('#mute').click(function(){
     $('#player').prop('muted', true);
     $('#message').text("Muted");
 });




 // The UNMUTE button
 $('#unmute').click(function(){
     $('#player').prop('muted', false);
     $('#message').text("Sound ON");
 });




 // The STOP button
 $('#stop').click(function(){
     // 1. Pause the music first
     $('#player').trigger("pause");
   
     // 2. Reset the time to the beginning (0 seconds)
     $('#player').prop('currentTime', 0);
   
     // 3. Update the message bar
     $('#message').text("Track stopped");
 });




 // Volume UP
 $('#vol-up').click(function(){
     // Get current volume, add 0.1, and set it back
     var currentVol = $('#player').prop('volume');
     $('#player').prop('volume', currentVol + 0.1);
     $('#message').text("Volume Up");
 });




 // Volume DOWN
 $('#vol-down').click(function(){
     // Get current volume, subtract 0.1, and set it back
     var currentVol = $('#player').prop('volume');
     $('#player').prop('volume', currentVol - 0.1);
     $('#message').text("Volume Down");
 });
}












$(document).ready(main);




