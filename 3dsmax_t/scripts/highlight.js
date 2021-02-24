var highlightingEnabled = top.highlightingEnabled;
var highlightingShow = top.highlightingShow;
var searchWordList = top.searchWordList;


var  highlightStartTag = "<font style='color:black; background-color:yellow;'>";
var  highlightEndTag = "</font>";


function doHighlight(searchText, searchTerm)
{
  var  newText = "";
  var  i = -1;
  var  lcSearchTerm = searchTerm;
  var  lcSearchText = searchText.toLowerCase();
  var  matchedString;

  if (lcSearchTerm.indexOf("[^\\s]*") == 0) lcSearchTerm = "\\s"+lcSearchTerm;
  while (searchText.length > 0) {
      var position = lcSearchText.substr(i+1).search(lcSearchTerm);
      if (position > 0) {
        var arr = lcSearchText.substr(i+1).match(lcSearchTerm);
        matchedString = arr[0];
      }
      if (position > 0 && i != -1 ) {
          i += position + 1;
      } else {
          i = position;
      }
    if (i < 0) {
      newText += searchText;
      searchText = "";
    } else {
      // skip anything inside an HTML tag
      if (searchText.lastIndexOf(">", i) >= searchText.lastIndexOf("<", i))
      {
        // skip anything inside a <script> block
        if (lcSearchText.lastIndexOf("/script>", i) >= lcSearchText.lastIndexOf("<script", i))
        {
          newText += searchText.substring(0, i) + highlightStartTag + searchText.substr(i, matchedString.length) + highlightEndTag;
          searchText = searchText.substr(i + matchedString.length);
          lcSearchText = searchText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  return newText;
}

function highlightSearchResults()
{
  var Mi, i, Mj, j, Mk, k;

  var bodyClean = "";
  var cleaner=/<[^<>]*>/gi;
  var bodyArr = new Array;
  var wordArr = new Array;

  var word, Expression, regWord, sword;
  var searchArr = new Array;

  var astk=/\*/gi;

  if ((highlightingEnabled) && (highlightingShow) && (searchWordList != null))
  {

    if(searchWordList.length > 0)
    {

//      var DocFrame = eval(WWHFrame.WWHHelp.fGetFrameReference("WWHDocumentFrame"));
      var bodyText = document.body.innerHTML;

      bodyClean = bodyText.replace(cleaner, "");
      bodyClean = bodyClean.toLowerCase();

      //Split body into array of single words
      bodyArr = bodyClean.split(' ');
/*
      for (Mi = searchWordList.length, i = 0 ; i < Mi ; i++)
      {
         //Split searchWordList[i] in case it is a phrase, if not the first element is processed

	     wordArr = searchWordList[i].split(' ');

      	 for (Mj = wordArr.length, j = 0 ; j < Mj ; j++)
         {
		    word = wordArr[j]
            Expression = word;
            regWord = new RegExp(Expression, "i");

		   //Use loop to check if word is in body, add it to the list if it is not already there
	       for (Mk = bodyArr.length, k = 0 ; k < Mk ; k++)
		   {
			  if(regWord.test(bodyArr[k]))
              {
                 if(!chkArray(bodyArr[k], searchArr)) // if the word is not already in the highlight array, add it
                 {
		           searchArr[searchArr.length] = bodyArr[k];
                 }
              }
           }
	    }
     }
*/
     var commonBodyText = bodyText.substr(bodyText.indexOf('<div class="head-margin">&nbsp;</div>'));
     if(searchWordList.length > 0) {
         for (Mi = searchWordList.length, i = 0 ; i < Mi && searchWordList[i].length > 0; i++)
         {
            commonBodyText = doHighlight(commonBodyText, searchWordList[i]);
         }
     }
     document.body.innerHTML = bodyText.substr(0,bodyText.indexOf('<div class="head-margin">&nbsp;</div>')) + commonBodyText;
    }
  }

  top.highlightingShow = false;
}


function chkArray(ParamWord, ParamArr)
{

  var Mi, i;
  var isThere = false;

  for (Mi = ParamArr.length, i = 0 ; i < Mi ; i++)
  {
     if(ParamArr[i]==ParamWord)
     {
       isThere = true;
     }
  }
  return isThere
}
