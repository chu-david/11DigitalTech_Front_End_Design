// JavaScript Document
$(document).ready(function() {
	var counter = 0;
	var timeGap = 1000;
	var boxSize = 50;
	
	$('#clickBox').animate({"height": boxSize+"px","width": boxSize+"px","fontSize":(boxSize/2)+"px"},'slow','swing');
		
	var interval = setInterval(function() {
		//var value = Math.random()*800 + "px";	
		$('#clickBox').animate({"left":Math.random()*800,"top":Math.random()*600},'slow','swing');

		}
	, timeGap);
	
	$('#clickBox').click(function() {
		counter++;
		timeGap = timeGap - 20;
		boxSize = boxSize - 2;	
		$('#clickBox').animate({"left":Math.random()*800,"top":Math.random()*600,"height":boxSize+"px","width":boxSize+"px","fontSize":(boxSize/2)+"px","line-height":boxSize+"px"},'slow','swing');	
		
		
		$('#clickBox').html("" + counter);
	
		clearInterval(interval);
		interval = setInterval(function() {
			
			$('#clickBox').animate({"left":Math.random()*800,"top":Math.random()*600},'slow','swing');

		}
		, timeGap);
	});	
	
	
	/*$('#clickBox').mouseover(function() {
		//counter++;
		timeGap = timeGap - 20;
		boxSize = boxSize - 2;		
		$('#clickBox').animate({"left":Math.random()*800,"top":Math.random()*600,"height":boxSize+"px","width":boxSize+"px","fontSize":(boxSize/2)+"px","line-height":boxSize+"px"},'slow','swing');

		$('#clickBox').html("" + counter);
	
		clearInterval(interval);
		interval = setInterval(function() {
			
			$('#clickBox').animate({"left":Math.random()*800,"top":Math.random()*600},'slow','swing');

		}
		, timeGap);
	});
	*/
});