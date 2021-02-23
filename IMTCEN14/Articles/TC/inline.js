// 01/19/99	jpbagel
// 02/25/00	jpbagel (Fix to #999)
// 04/03/00	jpbagel (Fix to #1126)

var L_UNDEFINED_TEXT="Unable to find this definition in the Help";

function AppendPopup(oSource, sPopup)
{
	var sPopupText;
	if (oSource.tagName=="A" && oSource.getAttribute("State")!="On")
	{
	
		sPopupText= GetGlossaryTerms(sPopup);
	
		// Have we found a definition?
		if (sPopupText != L_UNDEFINED_TEXT)
		{
			oSource.insertAdjacentHTML("BeforeEnd", "<SPAN ID='Pop' class='GlossaryDef'>&nbsp;&#40;" + sPopupText + "&#41;</SPAN>");
			oSource.setAttribute("State", "On")
			window.event.returnValue=false;
		}
		else
		{
			alert(L_UNDEFINED_TEXT);
		}
	}
	else if (oSource.tagName=="A" && oSource.getAttribute("State")=="On" )
	{
		oSource.all("Pop").outerHTML=""
		oSource.setAttribute("State", "Off")
		window.event.returnValue=false;
	}
}


function GetGlossaryTerms(sPopup)
{
	var sTemp
	switch (sPopup)

	{
		// Generated on 11/17/2000 5:42:20 PM

		// START Definitions for PHIME
		case 'phNotYet':
			L_phNotYet_TEXT=' NOTYET ';
			sTemp=L_phNotYet_TEXT;
			break;
		case 'phConversionScope':
			L_phConversionScope_TEXT='Composition Window: When input in Chinese, there will be a dotted line under the phrase you are entering, all characters on this dotted line are to be converted.';
			sTemp=L_phConversionScope_TEXT;
			break;
		case 'phLangBar':
			L_phLangBar_TEXT='Language Bar: A floating toolbar on the lower right of the desktop, and it replaces the traditional IME Status Window.';
			sTemp=L_phLangBar_TEXT;
			break;
		case 'phTaskbar':
			L_phTaskbar_TEXT='Taskbar: The bar on which Start button resides, where all programs in use are displayed as buttons.';
			sTemp=L_phTaskbar_TEXT;
			break;
		case 'phSentEndSymbol':
			L_phSentEndSymbol_TEXT='Sentence Complete Punctuation: Sentence Complete Punctuations are symbols indicating the end of a phrase or completion of input.';
			sTemp=L_phSentEndSymbol_TEXT;
			break;
		case 'phIntelligentLegacyMode':
			L_phIntelligentLegacyMode_TEXT='New Phonetic IME Mode: Simply enter phonetic symbols and Microsoft New Phonetic IME will modify the character or phrase according to what you have inputted and the context. The maximum length of characters that the IME can modify is 31. When there are more than 31 characters, IME will output the preceding characters automatically. If the characters are followed by the characters for which Candidate list will not open, such as half-width symbols including numbers, letters and symbols, as well as full-width numbers and English letters, these characters will be output together.';
			sTemp=L_phIntelligentLegacyMode_TEXT;
			break;
		case 'phLegacyMode':
			L_phLegacyMode_TEXT='Legacy IME: The usage of Legacy IME is the same as the traditional Phonetic IME. You need to select a character from the candidate list every time you enter a character. You can set Query input and Associate phrase functions.';
			sTemp=L_phLegacyMode_TEXT;
			break;
		case 'quIntelligentMode':
			L_quIntelligentMode_TEXT='Intelligent legacy mode: Simply enter a quick input sequence, and Microsoft New Quick IME will modify the character or phrase according to what you have inputted and the context. The maximum length of characters that the IME can modify is 31. When there are more than 31 characters, IME will output the preceding characters automatically. If the characters are followed by the characters for which Candidate list will not open, such as half-width symbols including numbers, letters and symbols, as well as full-width numbers and English letters, these characters will be output together.';
			sTemp=L_quIntelligentMode_TEXT;
			break;
		case 'IntelligentIME':
			L_IntelligentIME_TEXT='Intelligent IME: Simply enter phonetic symbols or input sequences and the Intelligent IME will modify the character or phrase according to what you have inputted and the context.';
			sTemp=L_IntelligentIME_TEXT;
			break;
		default:
			sTemp=L_UNDEFINED_TEXT;
			break;
	}
	return sTemp;
}

