// ofvbanli.js
// Purpose: Navigation hyperlink functions for Office VBA Help
// This file contains the functions used by the inline frame.
// Created: 09/01/1999 WadeT
// Change history:
// -Moved functions used by the inline frame into this file to avoid timing issues, 11/2/99 WadeT
// -Added code to use navhidden class if the specifics nav list is empty, 1/26/00 WadeT
// -Added code to gray out example link if there is no example, 06/13/00 Nick

// Global variables and constants
var iDefHeight=200;	// Default height and width of hyperlink list popup window
var iDefWidth=250;

// Event handlers: Capture various window and document events
document.onreadystatechange=doIt;
document.onclick=window.parent.closeList;
document.onkeypress=handleEnterPressed;

// Function: Translate Enter key press to mouse click
function handleEnterPressed() {
	window.event.cancelBubble=true;
	if (window.event.keyCode==13) event.srcElement.click();
	}
// Function: Add nav links text to parent after frame is loaded
function doIt() {
	if (document.readyState=="complete") setTimeout("addNavLinks();",50);
	}
// Function: Enable and disable navigation links
function addNavLinks() {
	var bFound,listcoll;
	var coll=window.parent.document.all.tags("DIV");

	// Display the description toggle text
//Uncomment/comment the following 2 lines to enable show/hide descriptions
//	ofVBADescToggle.innerHTML=lookupString("show");
//	ofVBADescToggle.tabIndex=0;
	if (coll.length) {
		// If tags exist, examine all DIVs in the topic
		for (var i=0;i<coll.length;i++) {
			// Process the nav link spans
			if (coll[i].className.toLowerCase()=="ofvbanav") {
				coll=coll[i].all.tags("SPAN")
				for (var i2=0;i2<coll.length;i2++) {
					with (coll[i2]) {
						// Replace any nav reusable text spans with localized strings
						if ((className.toLowerCase()=="ofvbanavreuse") && (id!=null)) {
							innerHTML=lookupString(id.toLowerCase());
							}
						if (id.toLowerCase()=="example") {
							tabIndex=0;

							//check to see if there is an example							
							var bExampleExists,exColl;
							bExampleExists=false;
							exColl=window.parent.document.all.tags("A");
							for (var iEx=0;iEx<exColl.length;iEx++) {
								if (exColl[iEx].name=="#example") {									
									bExampleExists=true;									
									break;
									}								
								}							
							//if there is no example, gray out the example link
							if (!bExampleExists) {
								className="ofvbanavunused";
								tabIndex=-1;
								onclick="";
								}			
							}								
						else {
							bFound=false;
							// If the DIV appears in the link file, show it
							listcoll=window.document.all.tags("DIV");
							for (var i3=0;i3<listcoll.length;i3++) {
								if (id.toLowerCase()==listcoll[i3].id.toLowerCase()) {
									tabIndex=0;
									bFound=true;
									break;
									}
								}
							if (!bFound) {
								if (id.toLowerCase()=="specifics") {
									// Hide the hyperlink list
									className="ofvbanavhidden";
									tabIndex=-1;
									onclick="";
									}
								else {
									// Grey out the hyperlink list
									className="ofvbanavunused";
									tabIndex=-1;
									onclick="";
									}
								}
							}
						}
					}
				// If a nav section was found, exit after processing it
				break;
				}
			}
		}
	}
// Function: Lookup the localized string in the string table
function lookupString(sKey) {
	var sRecord,sAltText;

	with (document.ofVBANavText) {
		// Set the filter value and get the first record
		Filter="INDEX="+sKey;
		Reset();
		sRecord=recordset; 
		}
	// If data was returned, get the string
	if (!sRecord.EOF) {
		sRecord.moveFirst();
		sAltText=sRecord.fields("TEXT").value;
		}
	else {
		// Otherwise return an empty string
		sAltText="";
		}
	return sAltText;
	}
// Function: Show or hide hyperlink topic descriptions
function toggleDesc(bChk) {
	var sToggleText,iTop;
	var sDispStyle="";
	var iHeight=iDefHeight;
	var coll=document.all.tags("SPAN");

	if (coll.length) {
		// If spans exist, prevent events from bubbling up to parent handlers
		window.event.cancelBubble=true;
		// For all descriptive spans, change the display style setting to its opposite value
		for (var i=0;i<coll.length;i++) {
			if (coll[i].className.toLowerCase()=="ofvbadesc") {
				if (sDispStyle.length==0) {
					if (coll[i].style.display=="none") {
						sDispStyle="inline";
						sToggleText="hide";
						}
					else {
						sDispStyle="none";
						sToggleText="show";
						}
					}
				coll[i].style.display=sDispStyle;
				ofVBADescToggle.innerHTML=lookupString(sToggleText);
				}
			}
		with (window.parent.ofVBAISpan) {
			// Calculate the top left position of the popup window
			style.display="inline";
			// Set the default vertical and horizontal position
			iTop=style.pixelTop;
			// Adjust the vertical position and height for short windows
			if ((offsetHeight>0)&&(offsetHeight<iHeight)) iHeight=offsetHeight;
			}
		with (document.body) {
			if (iTop+iHeight>scrollTop+offsetHeight) iTop=scrollTop+offsetHeight-iHeight-0;
			if (iTop<scrollTop) iTop=scrollTop;
			if (iHeight>offsetHeight) iHeight=offsetHeight-20;
			}
		// Position the popup window
		window.parent.ofVBAISpan.style.pixelHeight=iHeight;
		}
	}
