// JavaScript Document
$(document).ready(function() {
	var minutes;
	var seconds;
	var interval;
	var active = false;
	
	function initialise() {
		minutes =67;;
		seconds = 0;
		$(".container").css({"background-color": "white", "color": "black"});
		display();
		interval = setInterval(countdown, 1000);
	}
	
	function countdown() {
		if(seconds == 1 && minutes == 0) {
			seconds--;
			$(".container").css({"background-color": "red", "color": "white"});
			$('.button').html("Start");
			active = false;
		} else if(seconds > 0) {
			seconds--;
		} else if(minutes > 0) {
			minutes--;
			seconds = 59;
		}
		
		display(); 
	}
	
	function display() {
		if (seconds < 10) {
			$(".container").html(minutes + ":0" + seconds);	
		} else {
			$(".container").html(minutes + ":" + seconds);	
		}
	}
	
	$('.button').click(function() {
		if(!active) {
			active = true;
			$('.button').html("Reset");
		}
		
	clearInterval(interval);
		initialise();
	});	
});