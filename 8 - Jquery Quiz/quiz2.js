// JavaScript Document
var score = 0;
var attempts = 0;
$(document).ready(function() {
	
	$('.result').html("");
	
	$('#submit').click(function() {
		
		
		
		
		if($('input:radio[id = q1_1]:checked').val()) {
			$('.q1_1').css({"color": "lime"});
			//document.getElementById("q1_1").disabled = true;
			//document.getElementById("q1_2").disabled = true;
			//document.getElementById("q1_3").disabled = true;
			//document.getElementById("q1_4").disabled = true;
			
			$('input:radio[name = q1]').attr('disabled',true);
			
			if(attempts == 0) {
				score += 1;
			} else if (attempts == 1) {
				score += 0.5;
			} else if (attempts == 2) {
				score += 0.25;	
			}
			
		} else if($('input:radio[id = q1_2]:checked').val()) {
			$('.q1_2').css({"color": "red"});
			document.getElementById("q1_2").disabled = true;
			attempts++;
			
		} else if($('input:radio[id = q1_3]:checked').val()) {
			$('.q1_3').css({"color": "red"});
			document.getElementById("q1_3").disabled = true;
			attempts++;
			
		} else if($('input:radio[id = q1_4]:checked').val()) {
			$('.q1_4').css({"color": "red"});
			document.getElementById("q1_4").disabled = true;
			attempts++;
			
		}

		if($('input:radio[id = q3_3]:checked').val()) {
			$('.q3_3').css({"color": "lime"});
			document.getElementById("q3_1").disabled = true;
			document.getElementById("q3_2").disabled = true;
			document.getElementById("q3_3").disabled = true;
			document.getElementById("q3_4").disabled = true;
			if(attempts == 0) {
				score += 1;
			} else if (attempts == 1) {
				score += 0.5;
			} else if (attempts == 2) {
				score += 0.25;	
			}
			
		} else if($('input:radio[id = q3_2]:checked').val()) {
			$('.q3_2').css({"color": "red"});
			document.getElementById("q3_2").disabled = true;
			attempts++;
			
		} else if($('input:radio[id = q3_1]:checked').val()) {
			$('.q3_1').css({"color": "red"});
			document.getElementById("q3_1").disabled = true;
			attempts++;
			
		} else if($('input:radio[id = q3_4]:checked').val()) {
			$('.q3_4').css({"color": "red"});
			document.getElementById("q3_4").disabled = true;
			attempts++;
			
		}

		if($('input:radio[id = q2_2]:checked').val()) {
			$('.q2_2').css({"color": "lime"});
			document.getElementById("q2_1").disabled = true;
			document.getElementById("q2_2").disabled = true;
			document.getElementById("q2_3").disabled = true;
			document.getElementById("q2_4").disabled = true;
			if(attempts == 0) {
				score += 1;
			} else if (attempts == 1) {
				score += 0.5;
			} else if (attempts == 2) {
				score += 0.25;	
			}
			
		} else if($('input:radio[id = q2_1]:checked').val()) {
			$('.q2_1').css({"color": "red"});
			document.getElementById("q2_1").disabled = true;
			attempts++;
			
		} else if($('input:radio[id = q2_3]:checked').val()) {
			$('.q2_3').css({"color": "red"});
			document.getElementById("q2_3").disabled = true;
			attempts++;
			
		} else if($('input:radio[id = q2_4]:checked').val()) {
			$('.q2_4').css({"color": "red"});
			document.getElementById("q2_4").disabled = true;
			attempts++;
			
		}
		
		//$('.result').html("You scored : " + score + " out of 1");
	});
});