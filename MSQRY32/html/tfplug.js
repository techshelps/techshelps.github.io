// Pluggable UI Terms
// Terry - May 2000
// Copyright (c) Microsoft Corportation - All rights reserved

// Main function
function plugUITerms()
{
	if ( msieversion() < 5 )	// only support IE 5.0 and higher
		return;

	var findParentMarker;
	findParentMarker = findItem("INPUT", "plugUILang");

	if (findParentMarker > 0)
	{
		if (document.location.href.search(parent.document.all.tags("INPUT")(findParentMarker-1).value) != -1)
			doPlug(parent.plugFrame);
	}
	else
	{
		var msoLang;
		msoLang = new ActiveXObject("MsoLang.LanguageResources");
		var uiLang;
		uiLang = msoLang.UILanguage;

		// indicate that the parent was visited
		var oNewNode;
		oNewNode = parent.document.createElement("INPUT");
		parent.document.body.insertBefore(oNewNode);
		oNewNode.outerHTML = "<INPUT style=display:none id=\"plugUILang\" value=" + uiLang.toString() + "></INPUT>";

		var href = document.location.href;

		if (uiLang != -1 && href.search(uiLang.toString()) == -1)
			parent.loadPlugFrame(uiLang.toString())
	}

}

// Find if a given ID value can be found for a corresponding tag name
// returns: 0 if not found, or index+1 for the found item
function findItem(itemTag, itemID)
{
	var findItemNum = 0;	// assume it wont be found
	var numItems = parent.document.all.tags(itemTag).length;

	for (i = 0; i < numItems; i++)
	{
		var chkItem = parent.document.all.tags(itemTag)(i);
		if (chkItem.id == itemID)
			findItemNum = i+1;
	}
	return findItemNum;
}

function loadPlugFrame(systemLocale)
{
	var href = parent.document.location.href;
	href.toLowerCase();
	var pos = href.search("/Office10/");

	if (pos == -1)
	{
		pos = href.search("\\\\Office10\\\\");
	}

	if (pos == -1)
	{
		//alert("Error: Help is not installed in the Office10 folder: " + href);
		returnVal = 1;
	}
	else
	{
		// Now build up a string to the system help langauge
		pos = pos + "/Office10/".length;
		var systemHelpPath = href.substr(0, pos) + systemLocale;
		systemHelpPath = systemHelpPath + href.substr(systemHelpPath.length, href.length - (systemHelpPath.length));

		var plugFrame;
		plugFrame = parent.plugFrame;

		var findFrame
		findFrame = findItem("IFRAME", "plugFrame");
		if (findFrame == 0)
		{
			var oNewNode = parent.document.createElement("FRAME");
			parent.document.body.insertBefore(oNewNode);
			oNewNode.outerHTML = "<IFRAME id=plugFrame style=width:0;height:0; FRAMEBORDER=0 SCROLLING=no src=" + systemHelpPath + " ></IFRAME>";
		}

	}

}


// function to swap bold tags from one document into <span id=plug> of this document
function doPlug(plugFrame)
{
	var d,szmeasure;
	d = new Date();
	szmeasure = d.toGMTString();
	window.status = szmeasure;

	var TitleText;

	window.offscreenBuffering = "true";

	var doc;
	doc = plugFrame.parent.document;

	var numToImages;
	numToImages = doc.all.tags("IMG").length;
	numFromImages = plugFrame.document.all.tags("IMG").length
	for (i = 0; i < numToImages; i++)
	{
		var copyToImage = doc.all.tags("IMG")(i);
		if (i < numFromImages)
			{
			copyFromImage = plugFrame.document.all.tags("IMG")(i)
			copyToImage.src = copyFromImage.src
			}
	}
	


	// save the terms

	var srcUITerms = plugFrame.document.all.tags("B")
	var numNames = srcUITerms.length
	var nameArray = new Array(numNames)
	var termArray = new Array(numNames)
	for (i = 0; i < numNames; i++)
	{
		if (srcUITerms(i).className == "UI")
			{
			nameArray[i] = srcUITerms(i).name;
			termArray[i] = srcUITerms(i).innerText;
			//termArray[i] = "Swapped Term " + i;
			}
		else
			{
			nameArray[i] = "";
			}
	}
	

	var numPlugs, numBolds;

	var tgtUITerms = doc.all.tags("B")	
	numPlugs = tgtUITerms.length;
	//numBolds = plugFrame.document.all.tags("B").length;

	var met = new Date();
	szmeasure += met.toGMTString();
	window.status = szmeasure;

	var i, copyTo, j;
	for (i=0; i < numPlugs; i++)
	{
		copyTo = tgtUITerms(i);

		if (copyTo.className == "UI")
		{
			TitleText = copyTo.innerText;

			for (j = 0; j< numNames; j++)
			{	
				if (nameArray[j] == copyTo.name)
				{
					copyTo.innerText = termArray[j];
					copyTo.title = TitleText;
					break;
				}
			}
		}
	}

	window.offscreenBuffering = "auto";

	var et = new Date();
	szmeasure += et.toGMTString();


	window.status = szmeasure;
	
}

// determine IE version
function msieversion()
   {
      var ua = window.navigator.userAgent
      var msie = ua.indexOf ( "MSIE " )

      if ( msie > 0 )      // If Internet Explorer, return version number
         return parseInt (ua.substring (msie+5, ua.indexOf (".", msie )))
      else                 // If another browser, return 0
         return 0

   }
