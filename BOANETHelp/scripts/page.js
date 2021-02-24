// Copyright (c) 2002-2005 Quadralay Corporation.  All rights reserved.
//

function  HTMLHelpUtility_NotifyClickedPopup()
{
  // Not a member function, need to access via variable
  //
  WebWorksHTMLHelp.mbPopupClicked = true;
}

function  HTMLHelp_Object()
{
  this.mbPopupClicked  = false;
  this.mbOverPopupLink = false;
  this.mEvent          = null;
  this.mPopup          = new HTMLHelpPopup_Object("WebWorksHTMLHelp.mPopup",
                                                  "window",
                                                  HTMLHelpUtility_NotifyClickedPopup,
                                                  "HTMLHelpPopupDIV", "HTMLHelpPopupText",
                                                  10, 12, 20, 200);
  this.mPopupLoaded    = false;

  this.fNotifyClicked   = HTMLHelp_NotifyClicked;
  this.fMouseOverPopup  = HTMLHelp_MouseOverPopup;
  this.fMouseOutPopup   = HTMLHelp_MouseOutPopup;
  this.fShowPopup       = HTMLHelp_ShowPopup;
  this.fPopupAdjustSize = HTMLHelp_PopupAdjustSize;
  this.fPopupLoaded     = HTMLHelp_PopupLoaded;
  this.fRevealPopup     = HTMLHelp_RevealPopup;
  this.fHidePopup       = HTMLHelp_HidePopup;
  this.fPopupDivTag     = HTMLHelp_PopupDivTag;
}

function  HTMLHelp_NotifyClicked()
{
  if (this.mbPopupClicked)
  {
    this.mbPopupClicked = false;
  }
  else if ( ! this.mbOverPopupLink)
  {
    this.fHidePopup();
  }
}

function  HTMLHelp_MouseOverPopup(ParamEvent)
{
  this.mbOverPopupLink = true;

  this.mEvent = new Object();
  this.mEvent.x = ParamEvent.x;
  this.mEvent.y = ParamEvent.y;
}

function  HTMLHelp_MouseOutPopup()
{
  this.mbOverPopupLink = false;
}

function  HTMLHelp_ShowPopup(ParamLink)
{
  var  VarHTML;

  if (this.mEvent != null)
  {
    VarHTML = "<iframe id=\"WWHPopupIFrame\" frameborder=\"0\" scrolling=\"no\" width=\"" + this.mPopup.mWidth + "\" src=\"" + ParamLink + "\" onload=\"javascript:WebWorksHTMLHelp.fPopupLoaded()\"></iframe>";
    this.mbPopupClicked = false;
    this.mPopup.fShow(VarHTML, this.mEvent);

    // WORKAROUND: Need to size popup after IFrame has loaded
    //
    if (this.mPopup.mSetTimeoutID != null)
    {
      clearTimeout(this.mPopup.mSetTimeoutID);
      this.mPopup.mSetTimeoutID = null;

      this.mPopupLoaded = false;
      this.mPopup.mSetTimeoutID = setTimeout("WebWorksHTMLHelp.fRevealPopup()", this.mPopup.mTimeout);
    }
  }

  this.mEvent = null;
}

function  HTMLHelp_PopupAdjustSize()
{
  var  VarPopupWindow = eval(this.mPopup.mWindowRef);
  var  VarPopupDocument = VarPopupWindow.document;
  var  VarDocumentElement;
  var  VarMaxHeight;
  var  VarIFrame;
  var  VarElement;
  var  VarWidth;
  var  VarHeight;
  var  VarDistanceToRightEdge;

  // Access popup iframe
  //
  VarIFrame = VarPopupDocument.all['WWHPopupIFrame'];

  // Access document elements
  //
  if ((typeof(VarPopupDocument.documentElement) != "undefined") &&
      (typeof(VarPopupDocument.documentElement.clientWidth) != "undefined") &&
      (typeof(VarPopupDocument.documentElement.clientHeight) != "undefined") &&
      ((VarPopupDocument.documentElement.clientWidth != 0) ||
       (VarPopupDocument.documentElement.clientHeight != 0)))
  {
    VarDocumentElement = VarPopupDocument.documentElement;
    VarElement = VarIFrame.contentWindow.document.documentElement;
  }
  else
  {
    VarDocumentElement = VarPopupDocument.body;
    VarElement = VarIFrame.contentWindow.document.body;
  }

  // Determine maximum height
  //
  VarMaxHeight = VarDocumentElement.clientHeight - 16;

  // Record width
  //
  VarWidth = (VarElement.scrollWidth > VarElement.offsetWidth) ? VarElement.scrollWidth : VarElement.offsetWidth;

  // Determine height
  //
  VarHeight = (VarElement.scrollHeight > VarElement.offsetHeight) ? VarElement.scrollHeight : VarElement.offsetHeight;
  VarHeight += 4;
  if (VarHeight > VarMaxHeight)
  {
    VarHeight = VarMaxHeight;

    // Find widest area to left or right of cursor position
    //
    VarDistanceToRightEdge = VarPopupDocument.documentElement.offsetWidth - this.mPopup.mPositionX;
    if (VarDistanceToRightEdge < this.mPopup.mPositionX)
    {
      VarWidth = this.mPopup.mPositionX;
    }
    else
    {
      VarWidth = VarDistanceToRightEdge;
    }
  }

  // Update IFrame width/height
  //
  if (VarWidth > VarIFrame.style.width)
  {
    VarIFrame.style.width = VarWidth;
  }
  if (VarHeight > VarIFrame.style.height)
  {
    VarIFrame.style.height = VarHeight;
  }
}

function  HTMLHelp_PopupLoaded()
{
  this.fPopupAdjustSize();

  this.mPopupLoaded = true;
}

function  HTMLHelp_RevealPopup()
{
  if (this.mPopupLoaded)
  {
    // Reveal
    //
    this.mPopup.fReveal();

    // Access popup IFrame
    //
    VarPopupDocument = eval(this.mPopup.mWindowRef + ".document");
    VarIFrame = VarPopupDocument.all['WWHPopupIFrame'];
    VarElement = VarIFrame.contentWindow.document.body;

    // "Toggle" IFrame content
    //
    VarElement.innerHTML = VarElement.innerHTML;
  }
  else
  {
    this.mPopup.mSetTimeoutID = setTimeout("WebWorksHTMLHelp.fRevealPopup()", 10);
  }
}

function  HTMLHelp_HidePopup()
{
  this.mPopup.fHide();
}

function  HTMLHelp_PopupDivTag()
{
  return this.mPopup.fDivTagText();
}
