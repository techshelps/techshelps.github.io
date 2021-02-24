// Copyright (c) 2002-2005 Quadralay Corporation.  All rights reserved.
//

function  WebWorksSeeAlso_Object()
{
  this.mSetTimeoutID = null;

  this.fOnClickButton = WebWorksSeeAlso_OnClickButton;
  this.fOnClickLink   = WebWorksSeeAlso_OnClickLink;
  this.fShowSeeAlso   = WebWorksSeeAlso_ShowSeeAlso;
}

function  WebWorksSeeAlso_OnClickButton(ParamSeeAlsoObjectID)
{
  if (this.mSetTimeoutID == null)
  {
    this.mSetTimeoutID = setTimeout("window.WebWorksSeeAlso.fShowSeeAlso(\"" + ParamSeeAlsoObjectID + "\");", 10);
  }
}

function  WebWorksSeeAlso_OnClickLink(ParamSeeAlsoObjectID)
{
  if (this.mSetTimeoutID == null)
  {
    this.mSetTimeoutID = setTimeout("window.WebWorksSeeAlso.fShowSeeAlso(\"" + ParamSeeAlsoObjectID + "\");", 10);
  }
}

function  WebWorksSeeAlso_ShowSeeAlso(ParamSeeAlsoObjectID)
{
  var  VarSeeAlsoObject;

  // Insure target object exists
  //
  VarSeeAlsoObject = eval("document." + ParamSeeAlsoObjectID);
  if ((VarSeeAlsoObject != null) &&
      (typeof(VarSeeAlsoObject) != "undefined"))
  {
    // Show see also control
    //
    setTimeout("document." + ParamSeeAlsoObjectID + ".Click();", 1);
  }

  this.mSetTimeoutID = null;
}
