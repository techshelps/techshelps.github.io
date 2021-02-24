function initFrame(url,topicNumber) {
//    alert(top.id);
	if (top.frameName != null) {
		if (top.frameName != 'Autodesk online help') {
			window.location.replace('../index.html?url='+url+',topicNumber='+topicNumber);
		}
	} else setTimeout("initFrame('"+url+"','"+topicNumber+"')",100);
}

function initPage(title,bookTitle) {
	if (parent.name != null && top.document.title != null) {
		if (parent.name != "iframeSearch") {
			top.document.title = bookTitle+": "+title;
		}
	} else setTimeout("initPage('"+title+"','"+bookTitle+"')",100);
}

function showInContents(topicNumber) {
    top.contentTree.expandTOCNode(topicNumber);
    top.left_tab.selectTab(0);
}

function syncWithContents(topicNumber) {
    if (parent.name != 'iframeSearch') {
        top.contentTree.expandTOCNode(topicNumber);
    }
}

//Symbols converting function

var symboltab = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8704,0,8707,0,0,
8715,0,0,8727,0,0,8722,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,8773,913,914,935,8710,917,934,915,919,921,
977,922,923,924,925,927,928,920,929,931,932,933,962,
8486,926,936,918,0,8756,0,8869,0,8254,945,946,967,
948,949,966,947,951,953,981,954,955,956,957,959,960,
952,961,963,964,965,982,969,958,968,950,0,0,0,8764,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,978,8242,8804,8725,8734,402,9827,9830,
9829,9824,8596,8592,8593,8594,8595,176,177,8243,
8805,215,8733,8706,8226,247,8800,8801,8776,8230,0,
0,8629,8501,8465,8476,8472,8855,8853,8709,8745,8746,
8835,8839,8836,8834,8838,8712,8713,8736,8711,174,169,
8482,8719,8730,8901,172,8743,8744,8660,8656,8657,
8658,8659,9674,9001,174,169,8482,8721,0,0,0,0,0,0,0,
0,0,0,0,9002,8747,8992,0,8993,0,0,0,0,0,0,0,0,0,
0];

function convSymbols() {
	var x = document.getElementsByName("glyph_span");
	if(navigator.appName == "Netscape")
	{
		for (var i=0;i < x.length;i++) {
			var y = x[i];
			var ch = y.innerHTML.charCodeAt(0);
			if (ch < 256 && symboltab[ch] != 0) {
				ch = symboltab[ch];
				y.innerHTML=String.fromCharCode(ch);
			}
		}
	}
}

