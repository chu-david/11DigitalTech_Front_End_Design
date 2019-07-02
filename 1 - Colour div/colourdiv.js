// JavaScript Document


$(document).ready(function() {

	var interval; //object for the timing aspect of the code//
    
	var counter = 0;
	
	document.getElementsByClassName("colourdiv")[0].style.lineHeight = "300px";
	document.getElementsByClassName("colourdiv")[0].style.fontSize = "150px";
	document.getElementsByClassName("colourdiv")[0].style.color = "white";
	document.getElementsByClassName("colourdiv")[0].style.textAlign = "center";

	$('.colourdiv').click(function() {
        
		if(counter == 0){
			
			document.getElementsByClassName('colourdiv')[0].style.backgroundColor = "lime"; //change to using JQuery//
			
		}else if(counter == 1){
			
			document.getElementsByClassName('colourdiv')[0].style.backgroundColor = "red"; //change to using JQuery//
			
		}else if(counter==2){
			document.getElementsByClassName('colourdiv')[0].style.backgroundColor = "blue"; //change to using JQuery//
			
		}else if(counter==3){
			
			document.getElementsByClassName('colourdiv')[0].style.backgroundColor = "purple"; //change to using JQuery//
			
		}else if(counter == 4){
			
			document.getElementsByClassName('colourdiv')[0].style.backgroundColor = "orange"; //change to using JQuery//
			
		}else{
			
			document.getElementsByClassName('colourdiv')[0].style.backgroundColor = "yellow"; //change to using JQuery//
			
			counter =-1;
			
		}
		
		
		counter++;
		
		document.getElementsByClassName('colourdiv')[0].innerHTML = counter; //change to JQuery format
		
	
	});	
});