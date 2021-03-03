// Hilites the text in the code sample
// oStart - reference to start of block
// sText - string to find and hilite
function HiliteText(oStart, sText)
{

	var oRng = document.body.createTextRange();
	oRng.moveToElementText(oStart);
	var oRngFixed = oRng.duplicate();

	if (typeof(HiliteText.tokens) == 'undefined')
	{
		HiliteText.tokens = new Array(1);
	}
	else
	{
		for (i = 0; i < HiliteText.tokens.length; i++)
		{
			if (HiliteText.tokens[i].m_sSectionID == oStart.id && HiliteText.tokens[i].m_sToken == sText)
			{
				return;
			}
		}

		HiliteText.tokens.length++;
	}


	while (oRng.findText(sText, 1000000, 6) && oRngFixed.inRange(oRng)) 
	{    
		oRng.execCommand('bold');
		oRng.collapse(false);
	}

	HiliteText.tokens[HiliteText.tokens.length-1] = new CHilitedToken(oStart.id, sText);

}

// a tuple representing the id of the section and the token to be hilited
// the object is stored in an array to prevent the code from running twice on the same section
function CHilitedToken(sSectionID, sToken)
{
	this.m_sSectionID = sSectionID;
	this.m_sToken = sToken;
}


// Toggles the display of the content contained within oCode
// oCode - reference to code block
// sToken - string to bolden
function ToggleSample(oCode, sToken)
{
	if (ShowHideSection(window.event.srcElement, 'Sample Code'))
	{
		HiliteText(oCode, sToken);
	}
}

// If hidden, show. If shown, hide. Modify the caption of the element appropriately
// Returns true if showing on return, false if hidden on return
function ShowHideSection(oHead, sText)
{
	var bRet = false;
	var oChild = document.all(oHead.getAttribute('child', false));

	if (typeof(oChild) == null)
	{
		return bRet;
	}

	var sClass = oChild.className;
	var sAction = "Show";
	if (sClass == "collapsed")
	{
		sAction = "Hide";
		bRet = true; // we'll be showing upon return, so return true
	}

	sAction = sAction + ' ' + sText;
	oChild.className = (sClass == "collapsed" ? "expanded" : "collapsed");
	oHead.innerText = sAction;
	return bRet;
}

// Set the caption of the specified element
// oElem - reference to element to modify. Typically a Hn
// sCaption - New caption for the element
// bShow - boolean indicating whether or not the element should be made visible
function SetExpandableCaption(oElem, sCaption, bShow)
{
	oElem.innerText = sCaption;
	if (bShow) oElem.style.display = 'inline';
}

function AddStyleSheet()
{
   var sVR = '/msdn/sdk/inetsdk/help/basicSDK'	// Set root for the style sheet
   var sCSS = '<LINK REL="stylesheet" HREF="' + sVR;

   if(navigator.appVersion.lastIndexOf("MSIE 4.") > -1) // For all MSIE 4.0 versions
      sCSS += 'IE4';
   else if(navigator.appVersion.lastIndexOf("MSIE 3.") > -1) // For all MSIE 3.0 versions
      sCSS += 'IE3';
   else if(navigator.appName.lastIndexOf("Netscape") != -1) // For all Nav versions
      sCSS += 'NAV';
   else
   {
      // do nothing. result will be basicSDK.css
   }

   sCSS += '.css" TYPE="text/css">';
   document.writeln(sCSS);
}

// Set the caption for the TOC link, and fix up the href. IE4 only
function SetTOC()
{
	if (typeof(TOC) != 'object')
		return;

	// build a string for the 'Show Contents' case
	var sPath = location.pathname;
	
	var sMask = (location.href.indexOf('ttp://') > 0) ? "/d3drm/" : "\\d3drm\\";	
	
	if (sPath.lastIndexOf(sMask) < 0) // doc isn't located under help
	{
		TOC.style.visibility = "hidden"; // in case the style sheet wasn't hooked up
		
return;
	}

	var iStart = sPath.lastIndexOf(sMask)+sMask.length;
	sFramed = sPath.substring(0,sPath.lastIndexOf(sMask)) +
			 sMask+"" +
			 (sPath.substring(iStart) == "" ? "default.htm" : sPath.substring(iStart));
	
	if (window.top != self) 
	{
		if (window.top.frames.length>1 && window.top.frames[0].name=="TOC") 
		{
			TOC.innerText = "Hide Contents";
			TOC.href = location.pathname;
			TOC.target = "_top";
		}
	}
	else 
	{
		TOC.innerText = "Show Contents";
		TOC.href = sFramed;
	}

	TOC.style.visibility = "visible";
}

function CheckCAB(n)
{
	return true;
}
