// Copyright (c) 2002-2005 Quadralay Corporation.  All rights reserved.
//

function  WebWorksDropDown_Object()
{
  this.fWriteArrow    = WebWorksDropDown_WriteArrow;
  this.fWriteDIVOpen  = WebWorksDropDown_WriteDIVOpen;
  this.fWriteDIVClose = WebWorksDropDown_WriteDIVClose;
}

function  WebWorksDropDown_WriteArrow(ParamBaseURL,
                                      ParamID,
                                      bParamExpanded)
{
  var  VarIMGSrc;

  if ((typeof(document.all) != "undefined") ||
      (typeof(document.getElementById) != "undefined"))
  {
    document.write(" <a href=\"javascript:WebWorksDropDown_ToggleDIV('" + ParamID + "');\">");

    if (bParamExpanded)
    {
      VarIMGSrc = ParamBaseURL + "images/expanded.gif";
    }
    else
    {
      VarIMGSrc = ParamBaseURL + "images/collapse.gif";
    }

    document.write("<img id=\"" + ParamID + "_arrow\" src=\"" + VarIMGSrc + "\" border=\"0\" alt=\"\">");
    document.write("</a>");
  }
}

function  WebWorksDropDown_WriteDIVOpen(ParamID,
                                        bParamExpanded)
{
  if ((typeof(document.all) != "undefined") ||
      (typeof(document.getElementById) != "undefined"))
  {
    if (bParamExpanded)
    {
      document.write("<div id=\"" + ParamID + "\" style=\"visibility: visible; display: block;\">");
    }
    else
    {
      document.write("<div id=\"" + ParamID + "\" style=\"visibility: hidden; display: none;\">");
    }
  }
}

function  WebWorksDropDown_WriteDIVClose()
{
  if ((typeof(document.all) != "undefined") ||
      (typeof(document.getElementById) != "undefined"))
  {
    document.write("</div>");
  }
}

function  WebWorksDropDown_ToggleDIV(ParamBaseURL,
                                     ParamID)
{
  var  VarImageID;
  var  VarIMG;
  var  VarDIV;


  VarImageID = ParamID + "_arrow";

  if (typeof(document.all) != "undefined")
  {
    // Reference image
    //
    VarIMG = document.all[VarImageID];
    if ((typeof(VarIMG) != "undefined") &&
        (VarIMG != null))
    {
      // Nothing to do
    }
    else
    {
      VarIMG = null;
    }

    // Reference DIV tag
    //
    VarDIV = document.all[ParamID];
    if ((typeof(VarDIV) != "undefined") &&
        (VarDIV != null))
    {
      if (VarDIV.style.display == "block")
      {
        if (VarIMG != null)
        {
          VarIMG.src = ParamBaseURL + "images/collapse.gif";
        }

        VarDIV.style.visibility = "hidden";
        VarDIV.style.display = "none";
      }
      else
      {
        if (VarIMG != null)
        {
          VarIMG.src = ParamBaseURL + "images/expanded.gif";
        }

        VarDIV.style.visibility = "visible";
        VarDIV.style.display = "block";
      }
    }
  }
  else if (typeof(document.getElementById) != "undefined")
  {
    // Reference image
    //
    VarIMG = document[VarImageID];
    if ((typeof(VarIMG) != "undefined") &&
        (VarIMG != null))
    {
      // Nothing to do
    }
    else
    {
      VarIMG = null;
    }

    // Reference DIV tag
    //
    VarDIV = document.getElementById(ParamID);
    if ((typeof(VarDIV) != "undefined") &&
        (VarDIV != null))
    {
      if (VarDIV.style.display == "block")
      {
        if (VarIMG != null)
        {
          VarIMG.src = ParamBaseURL + "images/collapse.gif";
        }

        VarDIV.style.visibility = "hidden";
        VarDIV.style.display = "none";
      }
      else
      {
        if (VarIMG != null)
        {
          VarIMG.src = ParamBaseURL + "images/expanded.gif";
        }

        VarDIV.style.visibility = "visible";
        VarDIV.style.display = "block";
      }
    }
  }
}
