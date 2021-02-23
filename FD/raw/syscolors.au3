#include-once
Global Const $COLOR_ACTIVEBORDER	= _GetSysColor("ActiveBorder")
Global Const $COLOR_ACTIVECAPTION	= _GetSysColor("ActiveTitle")
Global Const $COLOR_APPWORKSPACE	= _GetSysColor("AppWorkSpace")
Global Const $COLOR_BACKGROUND		= _GetSysColor("Background")
Global Const $COLOR_BTNFACE		= _GetSysColor("ButtonFace")
Global Const $COLOR_BTNHIGHLIGHT	= _GetSysColor("ButtonHilight")
Global Const $COLOR_BTNSHADOW		= _GetSysColor("ButtonShadow")
Global Const $COLOR_BTNTEXT		= _GetSysColor("ButtonText")
Global Const $COLOR_CAPTIONTEXT		= _GetSysColor("TitleText")
Global Const $COLOR_GRADIENTACTIVECAPTION	= _GetSysColor("GradientActiveTitle")
Global Const $COLOR_GRADIENTINACTIVECAPTION	= _GetSysColor("GradientInactiveTitle")
Global Const $COLOR_GRAYTEXT		= _GetSysColor("GrayText")
Global Const $COLOR_HIGHLIGHT		= _GetSysColor("Hilight")
Global Const $COLOR_HIGHLIGHTTEXT	= _GetSysColor("HilightText")
Global Const $COLOR_HOTLIGHT		= _GetSysColor("HotTrackingColor")
Global Const $COLOR_INACTIVEBORDER	= _GetSysColor("InactiveBorder")
Global Const $COLOR_INACTIVECAPTION	= _GetSysColor("InactiveTitle")
Global Const $COLOR_INACTIVECAPTIONTEXT	= _GetSysColor("InactiveTitleText")
Global Const $COLOR_INFOBK		= _GetSysColor("InfoWindow")
Global Const $COLOR_INFOTEXT		= _GetSysColor("InfoText")
Global Const $COLOR_MENU		= _GetSysColor("Menu")
Global Const $COLOR_MENUBAR		= _GetSysColor("MenuBar")
Global Const $COLOR_MENUHIGHLIGHT	= _GetSysColor("MenuHilight")
Global Const $COLOR_MENUTEXT		= _GetSysColor("MenuText")
Global Const $COLOR_SCROLLBAR		= _GetSysColor("Scrollbar")
Global Const $COLOR_3DDKSHADOW		= _GetSysColor("ButtonDkShadow")
Global Const $COLOR_3DLIGHT		= _GetSysColor("ButtonLight")
Global Const $COLOR_WINDOW		= _GetSysColor("Window")
Global Const $COLOR_WINDOWFRAME		= _GetSysColor("WindowFrame")
Global Const $COLOR_WINDOWTEXT		= _GetSysColor("WindowText")


Func _GetSysColor($sValue, $nDefColor = 0)
  Local $nResult = $nDefColor
  Local $sResult = RegRead("HKEY_CURRENT_USER\Control Panel\Colors", $sValue)
  If not (($sResult = "") or @error) Then
    Local $aTemp = StringRegExp($sResult, "^(\d{1,3})\s(\d{1,3})\s(\d{1,3})$", 1)
    If @extended Then $nResult = BitShift($aTemp[0], -16) + BitShift($aTemp[1], -8) + $aTemp[2]
  EndIf
  Return $nResult
EndFunc