// JavaScript Document
$(document).ready(function() {
	var counter = 0;
	var interval;
	
	$('.colourdiv').css({
		"line-height": "300px", 
		"font-size": "150px", 
		"color": "white", 
		"text-align": "center"
	});
	
	$('.colourdiv').click(function() {
    	
		clearInterval(interval);
		
		switch(counter) {
			case 0: $('.colourdiv').css({"background-color": "lime"}); break;
			case 1: $('.colourdiv').css({"background-color": "red"}); break;
			case 2: $('.colourdiv').css({"background-color": "blue"}); break;
			case 3: $('.colourdiv').css({"background-color": "purple"}); break;
			case 4: $('.colourdiv').css({"background-color": "orange"}); break;
			default: $('.colourdiv').css({"background-color": "yellow"}); counter =-1; break;
		}
		
		counter++;
		$('.colourdiv').html(counter);
		
		interval = setInterval(function() {
			$('.colourdiv').css({"background-color": "white"});
		}, 1500);
		
	
	});	
});