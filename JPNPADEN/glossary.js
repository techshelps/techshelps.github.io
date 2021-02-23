/*
	Glossary.js ver 1.00.4 - 6:48 PM 7/24/2001
*/
/* Start Localize */
var L_EntryNotFound		= "<SPAN STYLE='color:red; font-weight:bold'>Definition not found.</SPAN>";
var L_PopUpTitle		= "Glossary Term";
/* End Localize */
var bIE					= 0;
var bNN					= 0;
var glbPlatformCode		= 0;
var glbBrowserCode		= 0;
var glbVersion			= 0;
var glbSubVersion		= 0;
var uav 				= window.navigator.appVersion;
var uan 				= window.navigator.appName;
if (parseInt(uan.indexOf("Internet Explorer")) >= 0){
	glbBrowserCode = 10;
	glbVersion = parseInt(uav.substring(uav.indexOf("MSIE ") + 5,uav.indexOf("MSIE ") + 7));
	glbSubVersion = parseInt(uav.substring(uav.indexOf("MSIE ") + 7,uav.indexOf("MSIE ") + 9));
	bIE = 1;
}
if (parseInt(uan.indexOf("Netscape")) >= 0){
	glbBrowserCode = 20;
	glbVersion = parseInt(uav.substring(0,4));
	glbSubVersion = parseInt(uav.substring(2,4));
	bNN = 1;
}
if (uav.lastIndexOf("Win") >= 0){
	glbPlatformCode = 10;
	if ((uav.lastIndexOf("Windows 95") >= 0) || (uav.lastIndexOf("Win95") >= 0)){
	glbPlatformCode = 11;
	}
	if ((uav.lastIndexOf("Windows 98") >= 0) || (uav.lastIndexOf("Win98") >= 0)){
	glbPlatformCode = 12;
	}
	if ((uav.lastIndexOf("Windows NT") >= 0) || (uav.lastIndexOf("WinNT") >= 0)){
	glbPlatformCode = 20;
	}	
}
else
{
	if (uav.lastIndexOf("Mac") >= 0){
		glbPlatformCode = 30;	
	}
}
var oPopup 			= 0;
var sDBGlossary 	= "../dbGlossary_cl.csv";
var bDataSetComplete = 0;
function InitializePopUp()
{
	if (bIE && ( ( glbVersion >=5 && glbSubVersion >= 5) || (glbVersion >= 6) ) ){
		setPopUp();
		enablePopUp();
	}
	else{
		disablePopUp();
	}
}
function setPopUp(){
	oPopup = window.createPopup();
}
function enablePopUp(){
	var sStyle = "";
	sStyle += '<STYLE> #PopUp{cursor: hand; color: green; text-decoration: underline;}</STYLE>\n';
	sStyle += '<STYLE> #idGlossary{cursor: hand; color: green; text-decoration: underline;}</STYLE>\n';
	var sOnClickEvent = "";
	sOnClickEvent += '<SCR' + 'IPT LANGUAGE="JScript" FOR="PopUp" EVENT="onclick">';
	sOnClickEvent += '	getTermDefinition(this); return false';
	sOnClickEvent += '</SCR' + 'IPT>\n' ;
	sOnClickEvent += '<SCR' + 'IPT LANGUAGE="JScript" FOR="idGlossary" EVENT="onclick">';
	sOnClickEvent += '	getTermDefinition(this); return false';
	sOnClickEvent += '</SCR' + 'IPT>\n' ;
	var sOnMouseOverEvent = "";
	sOnMouseOverEvent += '<SCR' + 'IPT LANGUAGE="JScript" FOR="PopUp" EVENT="onmouseover">';
	sOnMouseOverEvent += '	this.title = "' + L_PopUpTitle + '";'
	sOnMouseOverEvent += '</SCR' + 'IPT>\n' ;
	sOnMouseOverEvent += '<SCR' + 'IPT LANGUAGE="JScript" FOR="idGlossary" EVENT="onmouseover">';
	sOnMouseOverEvent += '	this.title = "' + L_PopUpTitle + '";'
	sOnMouseOverEvent += '</SCR' + 'IPT>\n' ;
	var sObj = "";
	sObj += '<OBJECT ID="dbGlossary" CLASSID="clsid:333C7BC4-460F-11D0-BC04-0080C7055A83" STYLE="height: 0; width: 0; display:none; position:absolute;" ondatasetcomplete="bDataSetComplete = 1">';
	sObj += '	<PARAM NAME="DataURL" VALUE="' + sDBGlossary + '">';
	sObj += '	<PARAM NAME="UseHeader" VALUE="True">';
	sObj += '	<PARAM NAME="TextQualifier" VALUE="|">';
	sObj += '</OBJECT>\n';
	var sDynLen = "";
	sDynLen = "<DIV ID='idDynamicLength' STYLE='width:400; height:10; overflow:scroll; visibility:hidden; position:absolute;'></DIV></NOBR>";
	window.self.document.write(sStyle);
	window.self.document.write(sOnClickEvent);
	window.self.document.write(sOnMouseOverEvent);
	window.self.document.write(sObj);
	window.self.document.write(sDynLen);
}
function disablePopUp(){
	var sStyle = "";
	sStyle += '<STYLE> #PopUp{color: black; text-decoration: none; cursor="default"}</STYLE>';
	var sStyle1 = "";
	sStyle1 += '<STYLE> #idGlossary{color: black; text-decoration: none; cursor="default"}</STYLE>';
	window.self.document.write(sStyle);
	var sOnClickEvent = "";
	sOnClickEvent += '<SCR' + 'IPT LANGUAGE="JScript" FOR="PopUp" EVENT="onclick">';
	sOnClickEvent += '	return false;';
	sOnClickEvent += '</SCR' + 'IPT>\n' ;
	window.self.document.write(sStyle);
	window.self.document.write(sOnClickEvent);
}
function getTermDefinition(oObj){
	var ar, sRid;
	if (oObj.href){
		ar = oObj.href.split("#");
		ar.length > 1 ? sRid = ar[1] : sRid = "";
	}
	else{
		sRid = oObj.RID;
	}
	var Gls = getDefinition(sRid);
	if (Gls.found){
		idDynamicLength.innerHTML = Gls.definition;
		Gls.definition = idDynamicLength.innerText;
	}
	var sDef = "<DIV STYLE='width:100%; height:100%; font-family:verdana; font-size: 11; padding: .25em; background-color: #BBDEFC; border-color:#000000 ; border-width:1; border-style:solid;'>";
	sDef += formatTerm(Gls.term);
	sDef += formatDefinition(Gls.definition);
	sDef += "</DIV>\n";
	
	idDynamicLength.innerHTML = sDef;
	var nWidth = idDynamicLength.scrollWidth + 4;
	var nHeight = idDynamicLength.scrollHeight + 4;
	oPopup.document.body.innerHTML = sDef;
	oPopup.show(0, -nHeight, nWidth, nHeight, oObj);
}
function getDefinition(sKey){
	var oRecordSet = dbGlossary.recordset;
	oRecordSet.MoveFirst();
	var def = new DEF();
	for(var i = 0; i < oRecordSet.RecordCount; i++)
	{
		if(sKey.toLowerCase() == oRecordSet.fields.item('rid').value.toLowerCase())
		{
			def.term = oRecordSet.fields.item('key').value;
			def.definition = oRecordSet.fields.item('def').value;
			def.found = 1;
			return def;
		}
		oRecordSet.MoveNext();
	}
	def.term = sKey;
	def.definition = L_EntryNotFound;
	return def;
}
function DEF(){
	this.term = "";
	this.definition = "";
	this.found = 0;
}
function formatTerm(sStr){
		return ("<B>" + sStr + "</B><BR>");
}
function formatDefinition(sStr){
		return (" " + sStr + " ");
}
InitializePopUp();
