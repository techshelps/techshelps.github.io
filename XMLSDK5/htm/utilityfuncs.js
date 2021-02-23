function msieversion()
{
   var ua = window.navigator.userAgent
   var msie = ua.indexOf ( "MSIE " )

   if ( msie > 0 )      // If Internet Explorer, return version number
      return parseInt (ua.substring (msie+5, ua.indexOf (".", msie )))
   else                 // If another browser, return 0
      return 0

}

function versionerror()
{
   window.alert("You need Internet Explorer 5 or later for this tutorial to work.");
}


function msxmlNotInstalledError() {

      alert("This sample requires Microsoft XML Core Services (MSXML) 5.0 for Microsoft Office.\n"+
            "To run this sample, please visit http://msdn.microsoft.com/xml\n" +
            "and install MSXML 5.0.");
      return;
}
