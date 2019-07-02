// JavaScript Document
$(document).ready(function() {
	
	$('body').append("<div></div>");
	
	$('body').children().addClass('container');
	
	for(var i = 0; i<25;i++){
	
	$('.container').append('<div></div>');
	
	}
	
	$('.container').children().addClass("cells");
	
	$(".cells:even").addClass("firstClass");
	
	$(".cells:odd").addClass("secondClass");
	

	
	
	$(".firstClass").on("change",function(){
		
		
		$(".firstClass").removeClass("firstClass");
		$(".secondClass").removeClass("secondClass").addClass("firstClass");
		
		$(".cells:not('.firstClass')").addClass("secondClass");
		
		//add some cool effects you learned from Lesson 1
		
	})
	
	$(".secondClass").click(function(){
		
		$(".secondClass").removeClass("secondClass");
		$(".firstClass").removeClass("firstClass").addClass("secondClass");	
		
		$(".cells:not('.secondClass')").addClass("firstClass");
		
		//add some cool effects you learned from Lesson 1
	})
	
	
	
	
});

