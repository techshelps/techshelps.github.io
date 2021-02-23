// ofvbanl.js
// Purpose: Navigation hyperlink functions for Office VBA Help
// Created: 09/01/1999 WadeT
// Change history:
// -Workaround for IE4 CSS height bug: do not set list height to 0, 10/12/99 WadeT
// -Added addFavorites and lookupString functions, 10/13/99 WadeT
// -Rename script file and changed to positioned IFrames, 11/2/99 WadeT
// -Changed the offset for the popup to 15 (from 10), 06/13/00 Nick

// Global variables and constants
var iDefHeight=200;	// Default height and width of hyperlink list popup window
var iDefWidth=250;
var iPopupOpen=false;	// Whether the popup window is visible

// Event handlers: Capture various window and document events
window.onresize=closeList;
window.onscroll=closeList;
document.onclick=closeList;
document.onkeypress=handleEnterPressed;

// Function: Translate Enter key press to mouse click
function handleEnterPressed() {
	window.event.cancelBubble=true;
	if (window.event.keyCode==13) event.srcElement.click();
	}
// Function: Close navigation list pop up window
function closeList() {
	if (iPopupOpen) {
		ofVBAISpan.style.display="none";
		iPopupOpen=false;
		}
	}
// Function: Show or hide the navigation list pop up window
function toggleList() {
	var iWidth=iDefWidth;
	var iHeight=iDefHeight;
	var oClicked=event.srcElement;
	var iTop=oClicked.offsetTop+15;
	var iLeft=oClicked.offsetLeft;
	var coll=ofVBAIFrame.document.all.tags("DIV");
	
	// Make sure that events do not bubble up to parent handlers and close lists
	window.event.cancelBubble=true;
	closeList();
	// Make the clicked DIVs visible and hide the others
	if (coll.length) {
		for (var i=0;i<coll.length;i++) {
			if (coll[i].id.toLowerCase()==oClicked.id.toLowerCase()) {
				coll[i].style.display="inline";
				}
			else {
				coll[i].style.display="none";
				}
			}
		}
	ofVBAISpan.style.display="inline";

	while (oClicked.offsetParent.tagName.toLowerCase()!="body") {
		oClicked = oClicked.offsetParent;
		iTop+=oClicked.offsetTop;
		iLeft+=oClicked.offsetLeft;
		}

	with (document.body) {
		// Adjust the horizontal position and width for narrow windows
		if (iLeft+iWidth>scrollLeft+offsetWidth) iLeft=scrollLeft+offsetWidth-iWidth-20;
		if (iLeft<scrollLeft) iLeft=scrollLeft;
		if (iWidth>offsetWidth) iWidth=offsetWidth-20;
		// Adjust the vertical position and height for short windows
		if ((ofVBAISpan.offsetHeight>0)&&(ofVBAISpan.offsetHeight<iHeight)) iHeight=ofVBAISpan.offsetHeight;
		if (iTop+iHeight>scrollTop+offsetHeight) iTop=scrollTop+offsetHeight-iHeight-20;
		if (iTop<scrollTop) iTop=scrollTop;
		if (iHeight>offsetHeight) iHeight=offsetHeight-20;
		}
	with (ofVBAISpan.style) {
		// Position the popup window
		pixelLeft=iLeft;
		pixelTop=iTop;
		pixelWidth=iWidth;
		pixelHeight=iHeight;
		}
	iPopupOpen=true;
	}
