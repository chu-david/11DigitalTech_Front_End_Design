// JavaScript Document
$(document).ready(function() {
	
		
	var containerHeight = $('.container').css('height');

    var containerWidth = $('.container').css('width');
    
    var noCells = Math.floor(parseInt(containerHeight)/25)*Math.floor(parseInt(containerWidth)/25);
    
        console.log(noCells);
    
    $('.container').html("");
    
    for(var i=0;i<noCells;i++){
    
    $('.container').append("<div class='cell'></div>")
    }
    
    $('.cell').mouseenter(function(){
    
    $(this).css("background-color","blue");
	

});
    
    $(window).resize(function(){
	
	var containerHeight = $('.container').css('height');
     
    var containerWidth = $('.container').css('width');
    
    var noCells = Math.floor(parseInt(containerHeight)/25)*Math.floor(parseInt(containerWidth)/25);
    
        console.log(noCells);
    
    $('.container').html("");
    
    for(var i=0;i<noCells;i++){
    
    $('.container').append("<div class='cell'></div>")
    }
        
            
    $('.cell').mouseenter(function(){
    
    $(this).css("background-color","blue");
	

});
});
	
});





