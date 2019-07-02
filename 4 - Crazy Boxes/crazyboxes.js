// JavaScript Document
$(document).ready(function() {
	var colours = ["yellow", "red", "blue", "lime", "purple", "orange", "magenta", "cyan"];
	
	var containerWidth;
	var containerHeight;
	var count = 0;
	
	var interval;
	
	$('body').append("<div class=\"container\"></div>");
	
	refill();
	
	$(window).resize(function(){
		refill();
	});

	
	function refill(){
		
		clearInterval(interval);
		
		$('.container').html("");
		
		$(".container").css({"width":"80%"});
	
		containerWidth = $(".container").width();

		containerHeight = $(".container").height();
		
		var cellNum = Math.floor((containerWidth/25))*Math.floor((containerHeight/25));
		
		for(var i = 0; i < cellNum; i++) {
			$('.container').append("<div class=\"cell\"></div>");
		}	
			
		$('.cell').attr("enterCount",count);
				
		$('.cell').mouseenter(function() {
		
		var currentCount = parseInt($(this).attr('enterCount'));
			
		currentCount = currentCount + 1;
			
		$(this).attr('enterCount', currentCount).html(currentCount);
		
		//var num = Math.floor(Math.random()*8);
		
		//$(this).css({"background-color": colours[num]});
		
		//HeatMap// rgb(x,y,z)
		
		$(this).css({"background-color": "rgb(255,"+(255-currentCount*5)+",0)"});
		
		interval = setInterval(function(){
			
		$('.cell').attr('enterCount',($('.cell').attr('enterCount')-1));
			
		$('.cell').html($('cell').attr('enterCount'));
		
	},500);
	
			
		});
		
	};
});