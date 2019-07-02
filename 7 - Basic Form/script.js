// JavaScript Document
$(document).ready(function() {
	
	//CHECKING FOR COOKIE//
	
	if(doesCookieExist('username') == true){
	
		var name = getCookieValue('username');		
	
	}else{	
	
		var name="";
	}
	
	$('body').append('<input class="name"></input>').append("<div>Name</div>");

	$('.name').attr('value',name);
	
	var houses=["Ruby","Emerald","Topaz","diamonds"];
	
	$('body').append("<select class='dropdown'></select>");
	
	for(var i=0;i<houses.length;i++){
	
		$("select").append("<option></option>").children().eq(i).html(houses[i]);	
			
	}
	
	$('body').append("<div>Score</div>").append('<input type ="number" class="age"></input>');
	
	
	$('body').append('<input type="button" value="submit" class="submit">');

	$('.submit').click(function(){
	
	var inputs = ["name","house", "age","favourite Station"];
	
	inputs[1] = $('.dropdown').val();
	
	inputs[0] = $('.name').val();	
	inputs[2] = parseInt($('.age').val());
	inputs[3] = $('input:radio:checked').val();
	
	console.log(inputs);
	
	//STORING COOKIE//
	
	setCookie("username",inputs[0],10);
	
	});	

function setCookie(cookieName,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var  cookieValue=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=cookieName + "=" + cookieValue;
}

function doesCookieExist(cookieName) {
	var value=getCookie(cookieName);
	if (value!=null && value!="") {
		return true;
	} else {
	  	return false;
	}
}

function getCookieValue(cookieName) {
	var value=getCookie(cookieName);
	if (value!=null && value!="") {
		return value.split(",")[0];
	} else {
	  	return null;
	}
}

function deleteCookie(cookieName) {
	setCookie(cookieName, "", -1);	
}

function getCookie(cookieName) {
	var cookie = document.cookie;
	var c_start = cookie.indexOf(" " + cookieName + "=");
	if (c_start == -1) {
		c_start = cookie.indexOf(cookieName + "=");
	}
	
	if (c_start == -1) {
		cookie = null;
	} else {
		c_start = cookie.indexOf("=", c_start) + 1;
		var c_end = cookie.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = cookie.length;
		}
		cookie = unescape(cookie.substring(c_start,c_end));
	}
	
	return cookie;
}
	
});//close document.ready

