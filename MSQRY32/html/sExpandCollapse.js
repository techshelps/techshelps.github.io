function ExpandDiv(theDivName)
{
	if (null == theDivName || typeof(theDivName) == "undefined") return; var theDiv = allDivs[theDivName]; if (null == theDiv || typeof(theDiv) == "undefined") return;
	theDiv.style.display = "block";

	var thePic = allImages[theDivName + "_img"];
	if (null != thePic && typeof(thePic) != "undefined")
		thePic.src = "/global/images/default.aspx?AssetID=ZA790050011033";
}

function CollapseDiv(theDivName)
{
	if (null == theDivName || typeof(theDivName) == "undefined") return; var theDiv = allDivs[theDivName]; if (null == theDiv || typeof(theDiv) == "undefined") return;
	theDiv.style.display = "none";

	var thePic = allImages[theDivName + "_img"];
	if (null != thePic && typeof(thePic) != "undefined")
		thePic.src = "/global/images/default.aspx?AssetID=ZA790050001033";
}

function ToggleDiv(theDivName)
{
	if (null == theDivName || typeof(theDivName) == "undefined") return; var theDiv = allDivs[theDivName]; if (null == theDiv || typeof(theDiv) == "undefined") return;

	if (theDiv.style.display.toUpperCase() == "NONE")
		ExpandDiv(theDivName);
	else
		CollapseDiv(theDivName);
}

function AlterAllDivs(displayStyle)
{
	if (null == allDivs || typeof(allDivs) == "undefined")
		return;		

	for (i=0; i < allDivs.length; i++)
		{
		if (0 == allDivs[i].id.indexOf("divExpCollAsst_")) 
			if (displayStyle == "block")
				ExpandDiv(allDivs[i].id);
			else
				CollapseDiv(allDivs[i].id);
		}
}

function ToggleAllDivs()
{
	if (fExpanded)
	{
		AlterAllDivs("none");

		if (null != imgShowAll && typeof(imgShowAll) != "undefined")
			imgShowAll.src = "/global/images/default.aspx?AssetID=ZA790050031033"
	}
	else
	{
		AlterAllDivs("block");

		if (null != imgShowAll && typeof(imgShowAll) != "undefined")
			imgShowAll.src = "/global/images/default.aspx?AssetID=ZA790050021033"
	}

	fExpanded = !fExpanded;
}

function ToggleAll()
{
	ToggleAllDivs();
}

var allDivs = document.body.getElementsByTagName("DIV");
var allImages = document.body.getElementsByTagName("IMG");
var fExpanded = false;
var imgShowAll = allImages["picHeader"];
