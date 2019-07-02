// JavaScript Document
$(document).ready(function() {
	
	//CHECKING FOR COOKIE//
	
	
	$('body').append('<input class="name"></input>').append("<div>Name</div>");

	$('.name').attr('value',name);
	
	var houses=["Ruby","Emerald","Topaz"];
	
	$('body').append("<select class='dropdown'></select>");
	
	//Use a loop to append each of the houses as drop down options
    
    for(var i=0;i<houses.length;i++){
        
        $('.dropdown').append("<option>"+houses[i]+"</option>");
        
    }
	
	$('body').append("<div>Score</div>").append('<input type ="number" class="age"></input>');
	
	
	$('body').append('<input type="button" value="submit" class="submit">');
    
    
    if(doesCookieExist("house")==true){
        
        alert("House Exists");
        
        $('.dropdown').val(getCookieValue("house"));
        
    }
    
    
    if(doesCookieExist("name")==true){
        
        alert("name exists");
        
        $('.name').val(getCookieValue("name"));
        
    }
    

	$('.submit').click(function(){
	
	   var inputs = ["name","house", "age","favourite Station"];
	
        
        inputs[0] = $('.name').val();
        
        inputs[3] = $('input:radio:checked').val();
        
        inputs[1] = $('.dropdown').val();
        
        console.log(inputs);
        
        setCookie("house",inputs[1],10);
        setCookie("name",inputs[0],10);
        
        
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

