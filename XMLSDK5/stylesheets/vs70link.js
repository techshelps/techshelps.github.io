writeCSS(scriptPath());

function scriptPath()
{
	var col = document.scripts;
	return col[col.length - 1].src;
}

function writeCSS(spath)
{
	// Get a base CSS name based on the browser.
	var css = "vs70_n.css";
	if (navigator.appName == "Microsoft Internet Explorer") {
		var sVer = navigator.appVersion;
		sVer = sVer.substring(0, sVer.indexOf("."));
		if (sVer >= 4) {
			document.writeln('<SCRIPT FOR="reftip" EVENT=onclick>window.event.cancelBubble = true;</SCRIPT>');
			document.writeln('<SCRIPT FOR="cmd_lang" EVENT=onclick>langClick(this);</SCRIPT>');
			document.writeln('<SCRIPT FOR="cmd_filter" EVENT=onclick>filterClick(this);</SCRIPT>');

			css = "vs70_5.css";
		}
		else
			css = "vs70_5.css";
	}

	// The CSS is in the same directory as the script.
	spath = spath.toLowerCase();
	css = spath.replace(/vs70link.js/, css);
	document.writeln('<LINK REL="stylesheet" HREF="' + css + '">');
}

