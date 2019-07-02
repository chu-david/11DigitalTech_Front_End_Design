// JavaScript Document
$(document).ready(function() {
	var j = 255;
	
	for(var i = 0; i < 2500; i++) {
		$('.container').append("<div class=\"heatbox\"></div>");
	}
	
	$('.heatbox').mouseenter(function() {
		var x = $(this).css("background-color");
		//alert(x);
		var blue = x.substring(4,7);
		//alert(blue);
		
		j = blue - 10;	
	
		var colour = "rgb(" + j + "," + j + ",255)";
		$(this).css({"background-color": colour});
		
		
		
	});
});