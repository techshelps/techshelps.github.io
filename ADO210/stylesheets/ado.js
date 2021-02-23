//.NET Enterprise Server Feedback
//Version 1.1.

//*************************************************************************
//***IMPORTANT: Enter your own feedback alias,                          ***
//***            product version, and explanatory text here.            ***
//***		 (Localization section 1 of 3.)				***
//*************************************************************************
var sFeedbackAlias = "mailto:adodoc@microsoft.com";
var sProduct = "ado";
var sProductVer = "2.7";
var sDocVer = "0402";

var sTechSupportAbsoluteURL="";
var sTechSupportFolder = "";
var sTechSupportHTM = "psspsoverview.htm";
	//(a)If the technical support topic is an external Web site,
	//   put the URL in sTechSupportAbsoluteURL, and set the other variables to "".
	//(b)If the technical support topic is in the same project as the current topic,
	//   put the .htm filename in sTechSupportHTM, and set the other variables to "".
	//(c)If the technical support topic is in a different project at the same level--
	//   for example, in another project within a collection-- put the project name in
	//   sTechSupportFolder, put the .htm filename in sTechSupportHTM, and set the other
	//   variable to "". If there is a path from the project folder to the .htm folder,
	//   include the path in sTechSupportHTM: "htm/techsupport.htm".
if (sTechSupportAbsoluteURL != "") {sTechSupportHREF = sTechSupportAbsoluteURL;}
else {sTechSupportHREF = buildTechSupport(sTechSupportFolder, sTechSupportHTM);}

var fbParagraph_Text = 'The MDAC documentation team cannot answer technical support questions, but welcomes your suggestions and comments about the documentation and samples. You can quickly and directly send e-mail feedback using the link below. All feedback must be in English. If you need technical support, see <A HREF=\"' + sTechSupportHREF + '\">Additional MDAC Resources</A>.';
//*************************************************************************
//***End: Localization section 1 of 3					***
//***	  (This is the only section modified for US version.)        	***
//*************************************************************************


function startFeedback(obj)
{
var stream;
if(document.body.innerHTML.search(/fbRating/) != -1)  {fbReload();} 

var fbTitle_Text = 'Documentation Feedback';


// ******Start: Localization Section 2 of 3*******************************

var fbRateThisTopic_Text = 'Rate this topic (1-5):';
var fbPoor_Text = "Poor";
var fbExcellent_Text = "Excellent";
var fbEnterFeedbackHere_Text = 'To submit written feedback about this topic, click here:';
var fbCancel_Text = 'Cancel';

// ******End: Localization Section 2 of 3*********************************


stream = '<DIV ID="feedbackarea">'
	+ '<br>'
	+ '<hr COLOR="#99CCFF">'
	+ '<H6 STYLE="margin-top:0.5em;">' + fbTitle_Text + '</H6>'
	+ '<P>' + fbParagraph_Text + '</P>'
	+ '<FORM METHOD="post" ENCTYPE="text/plain" NAME="formRating">'
	+ '<P>' + fbRateThisTopic_Text + '&nbsp;&nbsp;&nbsp;&nbsp;'
	+ fbPoor_Text + '&nbsp;<INPUT TYPE="radio" value="1" NAME="fbRating">'
	+ '<INPUT TYPE="radio" value="2" NAME="fbRating">'
	+ '<INPUT TYPE="radio" value="3" NAME="fbRating">'
	+ '<INPUT TYPE="radio" value="4" NAME="fbRating">'
	+ '<INPUT TYPE="radio" value="5" NAME="fbRating">&nbsp;' + fbExcellent_Text + '</P>'
	+ '</FORM>'
	+ '<P>' + fbEnterFeedbackHere_Text + '&nbsp;&nbsp;&nbsp;&nbsp;'
	+ '<SPAN ONCLICK="feedbackarea.style.display=\'none\';' + obj.id + '.innerHTML=\'\'">'+ submitFeedback() + '</SPAN></P>'
	+ '<P STYLE="width:97%;position:relative;float:left;clear:left;margin-bottom:-0.7em;margin-top:0em;" align=right><A HREF="#Feedback" ONCLICK=startFeedback(' + obj.id + ')>' + fbCancel_Text
	+ '</A>&nbsp;</P><BR>'
	+ '<hr COLOR="#99CCFF">'
	+ '</div>';

obj.innerHTML = stream;
}



function submitFeedback()
{

// *****Start: Localization Section 3 of 3********************************

var fbTypeHere_Text = 'Please type comments here, leaving the subject line in place.'
var fbSubmit_Text = 'Submit feedback';

// ******End: Localization Section 3 of 3*********************************


  //Build the subject line.
  var sTitle = ParseTitle(document.title);
  var sLocation = window.location.href.replace(/#Feedback/g,"");
  var sLocation = sLocation.replace(/\/htm\//g,"\/");
  var sLocation = sLocation.replace(/\/html\//g,"\/");
  var sLocation = sLocation.replace(/.asp/g,".htm");
  var delivType = checkDeliverable(sLocation);
  var sURL = parseTheURL(sLocation, delivType);
  var sLang = navigator.systemLanguage;
  var sFBVer = "12";

  var sSubject =  sTitle + ' (' + "/1:" + sProduct + "/2:" + sProductVer + "/3:" + sDocVer + '/4:' + sURL + '/6:' + '\' +         GetRating() + \'/7:' + delivType + '/8:' + sLang +  '/9:' + sFBVer + ')'; 
  var sEntireMailMessage = sFeedbackAlias + '?subject=' + sSubject 
	+ '&body=---' + fbTypeHere_Text + '---';
  var sHREF = '<A HREF=\"' + sFeedbackAlias + '" ONCLICK=\"this.href=\''
	+ sEntireMailMessage + '\';\">' + fbSubmit_Text + '</A>';
  return sHREF;
}

//Checks deliverable type.
function checkDeliverable(sLocation)
{
	if (sLocation.indexOf("ms-help://")!=-1) {return("h");}
	if (sLocation.indexOf(".chm::/")!=-1) {return("c");}
	if (sLocation.indexOf("http://")!=-1) {return("w");}
	if (sLocation.indexOf("file:")!=-1) {return("f");}
	return("0");
}

//Parses URL.
function parseTheURL(sLocation, delivType)
{

	if ((delivType=="h") || (delivType=="w")|| (delivType=="f"))
	{
  		var x = sLocation.lastIndexOf("/");
		var a = sLocation.substr(0,x);
		var b = a.lastIndexOf("/");
		var c = a.substr(b + 1);

		sURL = c + "/5:" + sLocation.substr(x + 1) ;

  		return(sURL);
	}

	if (delivType=="c") 
	{
  		var theLastSlash = sLocation.lastIndexOf("\\");
  		var theLen = sLocation.length;
  		sLocation = sLocation.substr(theLastSlash + 1, theLen  - 		  theLastSlash);
  		var x = sLocation.lastIndexOf("/");

		sURL = sLocation.substr(0, (x-6)) + "/" + 			sLocation.substr(x + 1);

  		return(sURL);

	}
	return("unknown");
}

//---Parses document title.---
function ParseTitle(theTitle)
{
	theTitle = theTitle.replace(/\"/g,"--");
  	theTitle = theTitle.replace(/'/g,"-");
	if (theTitle == "") {theTitle = "Documentation Feedback";}
	if (theTitle.length > 50) {theTitle = theTitle.slice(0,47) + "...";}
	return theTitle;
}

//---Gets topic rating.---
function GetRating()
{
	sRating = "0";
	for(var x = 0;x < 5;x++)
  	{
      		if(document.formRating.fbRating(x).checked) {sRating = x + 1;}
  	}
	return sRating;
}

function buildTechSupport(sTechSupportFolder, sTechSupportHTM)
{
  var delivType = checkDeliverable(window.location.href);
  var sTechSupportHREF="";
  if (delivType=="c") 
  {
	if (sTechSupportFolder != "")
	{
		sTechSupportHREF = sTechSupportFolder + ".chm::/";
	}
	sTechSupportHREF += sTechSupportHTM;
	return sTechSupportHREF;
  }
  else
  {
	if (sTechSupportFolder != "")
	{
		sTechSupportHREF = "../" + sTechSupportFolder + "/";
	}
	sTechSupportHREF += sTechSupportHTM;
	return sTechSupportHREF;
  }
}

//---Reloads window.---
function fbReload()
{
	window.location.reload(true);

}

//
//Enhancements over v1.0:
//	-Deliverable-neutral URLs.
//	-Autodetection of deliverable (one version for .chm, .hxs, and Web).
//	-Product version information in subject line.
//	-Feedback version information in subject line.
//	-Deliverable type information in subject line.