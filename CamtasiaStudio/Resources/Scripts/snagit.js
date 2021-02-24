// JavaScript Document



//Runs the javascript onces the document has fully loaded

$(document).ready(function() {
	
	//Opens an XmlHttpRequest using jQuery's low level ajax function and requests an object
	//I'm using an image on screencast.com as the object here
	$.ajax({
		   url: 'http://screencast.com/img/header/screencastlogo.gif',
		   cache: false,
		   success: function() {
			    //Appends a hidden object to the body tag
				//I'm doing this so that the image's size can be evaluated
				$("body").append("<img src='http://screencast.com/img/header/screencastlogo.gif' class='tester' style='display:none' />");
				//this tests the width attribute of the object above
				$('img.tester').load(function() {
					//if the object fails to load, then the functions below will not load in the page
					if ($(this).width() >= 200) {
						//removes the image after it has been evaluated
						$(this).remove();
						goodConnection();
					}
					else {
						noConnection();	
					}
				});
		   }
	});
	
	//this only runs if the client has access to the internet 
	//and the object was loaded from the .ajax function
	function goodConnection() {
		$('#displayVideoContent').slideDown('slow');
	}
	//This runs if no connection is detected.
	//TODO: regurally test for an internet connection?
	//TODO display alternate content if not connection is available?
	function noConnection() {
		$('#displayVideoContent').slideUp('slow');	
	}
	
	//Two seperate click function to show and hide the video,
	//HTML must have two anchor tags on the page
	//one anchor to show the video (which shows the video and hides that link)
	//and another anchor to hide the video (which then shows the other link)
	$('#showVideo').click(function() {
		$('#videoBox').slideDown(1500);
		$('#showVideo').hide();
		$('#hideVideo').show();
	});
	$('#hideVideo').click(function() {
		$('#videoBox').slideUp(1500);
		$('#showVideo').show();
		$('#hideVideo').hide();
	});
});

	