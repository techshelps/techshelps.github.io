var strLocalRootPath = null;
//Load Menu and Ribbon Data
function loadMenuData() 
{
    try 
    {
        //Find atleast one type of dynamic help tag.
        var dynHelps = document.all("divDynamicHelpMenu");
        if(dynHelps == null)
            dynHelps = document.all("divDynamicHelpDashboard");
        if(dynHelps == null)
            dynHelps = document.all("divDynamicHelpDashboardThenMenu");
        //For Backwards compatibility   
        if(dynHelps == null)
            dynHelps = document.all("divDynamicHelp");    
        //If no type of supported DynamicHelp tag exists - Nothing to do !
        if(dynHelps == null)
            return;
        
        //Workaround for loading ActiveX without warning dialog.
        var ocxObject = new ActiveXObject("ADDYNHELP.AdDynHelpCtrl.1");
        if (ocxObject == null)
            return;
        
        var strObj = "<object height=\"0\" width=\"0\" id=\"AdDynHelp\" CLASSID=\"clsid:C4B6CE2E-5743-4450-B798-5BE5CEC3BE9D\"></object>";
        
        //If single entry
        if (dynHelps.innerHTML != null)
            dynHelps.innerHTML = strObj + dynHelps.innerHTML;
        else  // Multiple DynHelp elements in the same page
            dynHelps(0).innerHTML = strObj + dynHelps(0).innerHTML;
        
        //invoke the mothod of ActiveX control
        var xmlFile = (document.getElementById("AdDynHelp")).GetDynHelpFile(getcurpath());
        if (xmlFile == null)
            return;
            
        strLocalRootPath = getcurpath();
        var indexofLastSlash = xmlFile.lastIndexOf("\\");
        if(indexofLastSlash != -1)
            strLocalRootPath = xmlFile.substr(0,indexofLastSlash);
        
        
        //define XMLDOMdocument object to analyse the xml file
        var objxml = new ActiveXObject("MSXML2.DOMDocument.3.0");
        objxml.async=false;
        objxml.load(xmlFile);
        objxml.setProperty("SelectionLanguage","XPath");
        
        // Update tags for all types of dynamic help entries on this page
        if (objxml.parseError.errorCode == 0)
        {
            DoDynamicHelpForMenu(objxml);
            DoDynamicHelpForDashboard(objxml);
            DoDynamicHelpForDashboardThenMenu(objxml);        
        }
    }
    catch(exception)
    {
        // check for "Automation server can't create object"
        if (exception.number & 0x7FFFFFFF == 0x000A01AD)
        {
                  
        }
    }
}

if(window.onload==null)
{
    window.onload=loadMenuData;
}
else
{
    var fnOnload=window.onload;
    window.onload=function(){loadMenuData();fnOnload();}
}

// Gets the Full external path to this CHM File
function getcurpath () 
{
    var path = unescape(location.pathname);
    if( path.indexOf("@MSITStore:") == 0 ) 
    {
        path = path.substring(11,path.length);
    }
    if( path.indexOf("/") == 0 ) 
    {
        path = path.substring(1,path.length);
    }
    var i = path.lastIndexOf("::\\");
    if (i>0)
        path = path.substring(0,i);
    i = path.lastIndexOf("\\")
    path = path.substring(0,i+1);
    return path;
}

function DoDynamicHelpForMenu (objxml)
{
    var dynHelps = document.all("divDynamicHelpMenu");
    //For backwards compatibility
    if(dynHelps == null)
        dynHelps = document.all("divDynamicHelp");
    if(dynHelps == null)
        return;
    if(dynHelps.innerHTML != null)
        DoDynamicHelpForMenuItem(dynHelps,objxml);
    else
    {
        for (j=0; j<dynHelps.length; j++)
        {
            DoDynamicHelpForMenuItem(dynHelps(j),objxml);
        }
    }
}

function DoDynamicHelpForDashboard(objxml)
{
    var dynHelps = document.all("divDynamicHelpDashboard");
    if(dynHelps == null)
        return;
    if(dynHelps.innerHTML != null)
        DoDynamicHelpForDashboardItem(dynHelps,objxml, true);
    else
    {
        for (j=0; j<dynHelps.length; j++)
        {
            DoDynamicHelpForDashboardItem(dynHelps(j),objxml, true);
        }
    }
}

function DoDynamicHelpForDashboardThenMenu(objxml)
{
    var dynHelps = document.all("divDynamicHelpDashboardThenMenu");
    if(dynHelps != null);
    if(dynHelps.innerHTML != null)
    {
        if (DoDynamicHelpForDashboardItem(dynHelps,objxml, false)== false)
            DoDynamicHelpForMenuItem(dynHelps,objxml);
        
    }
    else
    {
        for (j=0; j<dynHelps.length; j++)
        {
            if (DoDynamicHelpForDashboardItem(dynHelps(j),objxml, false)== false)
                DoDynamicHelpForMenuItem(dynHelps(j),objxml);
        }
    }
}
            
function DoDynamicHelpForMenuItem(dynHelp, objxml)
{
    //According to menu's ID in HTML to determine which menu to load in HTML from xml file
    var value = objxml.selectSingleNode("//MenuItem[@ID='" + dynHelp.title.toUpperCase() + "']");
    var defaultContent=dynHelp.parentElement.all("DefaultContent");
    if(value!=null)
    {
        
        var re=/:/g;
        var result=(value.text).replace(re,"&nbsp;<span class=\"glyphArrow\"><img src=\"images\\ac.menuaro.gif\"></span>");
     
        var reDialogEllipses=/\.\.\./g;
        //Within the Default Content Node - there are two types of data
        //  1. uis-unspecified tagged text that needs to be replaced
        //  2. plain text
        if(defaultContent.childNodes != null)
        {
            var children = defaultContent.childNodes;
            for(i=0;i<children.length; i++)
            {
                var thisNode = defaultContent.childNodes[i];
                if(thisNode.className=="uis-unspecified") 
                {
                    defaultContent.removeChild(thisNode);
                }
            }
            var dynText = value.text;
            var indexOfFirstColon = dynText.indexOf(":");
            if(indexOfFirstColon != -1)
            {
                var splitDynText1 = dynText.substr(0,indexOfFirstColon);
                var splitDynText2 = dynText.substr(indexOfFirstColon,dynText.length-1);
                result = splitDynText1 + defaultContent.innerText + splitDynText2;
                result = result.replace(re,"&nbsp;<span class=\"glyphArrow\"><img src=\"images\\ac.menuaro.gif\"></span>");
                result = result.replace(reDialogEllipses,"");

            }
        }
        defaultContent.innerHTML = result;
        return true;
    }
    else 
    {
        var altContent = dynHelp.parentElement.all("AltContent");
        if( altContent != null &&
            altContent.innerHTML !=null &&
            altContent.innerHTML != "" && 
            altContent.innerHTML != " ")
        {
            var relatedContentElements = dynHelp.parentElement.all("RelatedContent");
            relatedContentElements[0].className="RelatedContentHidden";
            relatedContentElements[1].className="RelatedContentHidden";
            altContent.className="RelatedContent";
            defaultContent.className="RelatedContentHidden";
            return false;
        }
    }
    return false;
}


function DoDynamicHelpForDashboardItem(dynHelp, objxml, useAltContent)
{
    //According to menu's ID in HTML to determine which menu to load in HTML from xml file
    var value = objxml.selectSingleNode("//RibbonItem[@ID='" + dynHelp.title.toUpperCase() + "']");
    var defaultContent=dynHelp.parentElement.all("DefaultContent");
    if(value!=null)
    {
        var result;
        var re=/:/g;
        result=(value.text).replace(re,"&nbsp;<span class=\"glyphArrow\"><img src=\"images\\ac.menuaro.gif\"></span>");
        
        var reDialogEllipses=/\.\.\./g;
        //Within the Default Content Node - there are two types of data
        //  1. uis-unspecified tagged text that needs to be replaced
        //  2. plain text
        if(defaultContent.childNodes != null)
        {
            var children = defaultContent.childNodes;
            for(i=0;i<children.length; i++)
            {
                var thisNode = defaultContent.childNodes[i];
                if(thisNode.className=="uis-unspecified") 
                {
                    defaultContent.removeChild(thisNode);
                }
            }
            var dynText = value.text;
            var indexOfFirstColon = dynText.indexOf(":");
            if(indexOfFirstColon != -1)
            {
                var splitDynText1 = dynText.substr(0,indexOfFirstColon);
                var splitDynText2 = dynText.substr(indexOfFirstColon,dynText.length-1);
                result = splitDynText1 + defaultContent.innerText + splitDynText2;
                result = result.replace(re,"&nbsp;<span class=\"glyphArrow\"><img src=\"images\\ac.menuaro.gif\"></span>");
                result = result.replace(reDialogEllipses,"");
                result = result.replace(/expander/g,"<img src=\"images\\ac.ribbonexpander.gif\">");
            }
        }
        defaultContent.innerHTML = result;
        return true;
    }
    else if(useAltContent)
    {
        var altContent = dynHelp.parentElement.all("AltContent");
        if( altContent != null &&
            altContent.innerHTML !=null &&
            altContent.innerHTML != "" && 
            altContent.innerHTML != " ")
        {
            var relatedContentElements = dynHelp.parentElement.all("RelatedContent");
            relatedContentElements[0].className="RelatedContentHidden";
            relatedContentElements[1].className="RelatedContentHidden";
            altContent.className="RelatedContent";
            defaultContent.className="RelatedContentHidden";
            return false;
        }
    }
    return false;
}
