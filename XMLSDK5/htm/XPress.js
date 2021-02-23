//
// JScript File: XPress.js
//   XPath Expression Demo to be used in each XPath Reference page.
//   to help understand the meaning of an XPath expression.
//
  
var getID, source, stylesheet, contextNode;

  ///////////////////////////////
  function Init() {

    try {
      getID = new ActiveXObject("Msxml2.DOMDocument.4.0");
      source = new ActiveXObject("Msxml2.DOMDocument.4.0");
      stylesheet = new ActiveXObject("Msxml2.DOMDocument.4.0");
    }
    catch (e) {
      alert("Microsoft XML Core Service 4.0 is not installed.\n"+
            "Please visit http://msdn.microsoft.com/xml\n" +
            "to install MSXML 4.0 before continuing.");
      return;
    }
      
    try {
      getID.async = false;
      getID.load("makeID.xsl");
   
      source.async=false;

      stylesheet.async = false;
      stylesheet.load("XPress.xsl");

    }
    catch (e) {
      alert("error occurred in init():\n"+e.description);
    }
  }
  
  //////////////////////////////
  function LoadXML(path, target) {
     if (target == null) 
        return;
     try {
       if (source == null || getID == null) {
          Init();
       }
       source.load(path);
       result = source.transformNode(stylesheet);
       target.all.item("divXmlSrc").innerHTML = result;
     }
     catch (e) {
       alert(e.description+"\n"+e.url);
       return;
     }
  }

//////////////////////////////
function ShowContextNode(expr) {
  var q;
  if (source == null || getID == null) {
     Init();
  }
  divXmlSrc.innerHTML = result;
  try {
    contextNode= source.selectSingleNode(expr);
  }
  catch(e) {
 //   alert("Select Context Node:\n"+e.description);
    return;
  }

  try 
  {
    eID = contextNode.transformNode(getID); 
    document.all.item(eID).style.backgroundColor = "cyan";
  }
  catch (exception) 
  {
    result = reportRuntimeError(exception);
    alert(result);
  }	  
}

//////////////////////////////
function ShowXPath(expr) {
  var q;
  if (source == null || getID == null) {
     Init();
  }

  ShowContextNode( ctxNode.options[ctxNode.value].text );

  try {
    q= contextNode.selectNodes(expr);
  }
  catch(e) {
    alert("SelectNodes:\n"+e.description);
  }

  for (var e = q.nextNode(); e != null; e = q.nextNode())
  {
    try 
    {
       eID = e.transformNode(getID); 
       document.all.item(eID).style.backgroundColor = "yellow";
    }
    catch (exception) 
    {
       result = reportRuntimeError(exception);
       alert(result);
    }	  
  }
}

//
toggleSwitch = -1;

function SetXML(sender, target)
{
  if (sender.id != "divTIMenu" || target.id != "divTIMain")
     return;

  switch(toggleSwitch) 
  {
    case -1:
      toggleSwitch *= -1;
      target.style.display = "block";
      LoadXML('bookstore.xml', target);
      sender.innerText = "Click here to close Try It!";
      break;
    case 1:
      toggleSwitch *= -1;
      target.style.display = "none";
      sender.innerText = "Click here to start Try It!";
      break;
  }
}

function SetContext(sender)
{
  if (sender.id != "ctxNode") 
  {
     return;
  }
  var ctxPath = sender.options[sender.value].text;
  ShowContextNode(ctxPath);

  switch (ctxPath) 
  {
    case "/":
      xpression.selectedIndex = 0;
      xpression.options[1].text="bookstore/book";
      xpression.options[2].text="bookstore/@specialty";
      xpression.options[3].text="//author";
      break;
    case "/bookstore/book[1]":
      xpression.selectedIndex = 0;
      xpression.options[1].text="author";
      xpression.options[2].text="author/*";
      xpression.options[3].text="*";
      break;
    case "/bookstore/magazine[1]":
      xpression.selectedIndex = 0;
      xpression.options[1].text="@style";
      xpression.options[2].text="@*";
      xpression.options[3].text="price";
      break;
    default:
      xpression.selectedIndex = 0;
      xpression.options[1].text="";
      xpression.options[2].text="";
      xpression.options[3].text="";
      break;
  }
}

function SetXPath(expr, context)
{
  if (expr.id != "xpression" || context.id != "ctxNode") 
  {
     return;
  }

  ShowXPath(expr.options[expr.value].text);
}


// Parse error formatting function
function reportParseError(error)
{
  var s = "";
  for (var i=1; i<error.linepos; i++) {
    s += " ";
  }
  r = "<font face=Verdana size=2><font size=4>XML Error loading '" + 
      error.url + "'</font>" +
      "<P><B>" + error.reason + 
      "</B></P></font>";
  if (error.line > 0)
    r += "<font size=3><XMP>" +
    "at line " + error.line + ", character " + error.linepos +
    "\n" + error.srcText +
    "\n" + s + "^" +
    "</XMP></font>";
  return r;
}


// Runtime error formatting function.
function reportRuntimeError(exception)
{
  return "<font face=Verdana size=2>"+
         "  <font size=4>XSL Runtime Error</font>" +
         "  <P><B>"+exception.description+"</B></P>"+
         "</font>" + 
         "<P>"+exception+"</P>";
}

