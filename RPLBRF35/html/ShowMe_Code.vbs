Dim L_ShowMe_ErrorMessage(10)
Dim msouierrSuccess
Dim msouierrFail
Dim msouierrNotValidId
Dim msouierrNoDialog
Dim msouierrWrongDialog
Dim msouierrAdminDisabled
Dim msouierrDisabled
Dim msouierrOn
Dim msouierrOff
Dim msouierrUnknown
Dim msouierrAppModal
Dim sSecurityMSG

'LOCALIZABLE: There needs to be a "Dim" statement for each "L_Security??_ErrorMessage" constant:
	Dim L_SecurityT1_ErrorMessage
	Dim L_SecurityT2_ErrorMessage
	Dim L_SecurityE1_ErrorMessage
	Dim L_SecurityE2_ErrorMessage
	Dim L_SecurityE3_ErrorMessage
	Dim L_SecurityE4_ErrorMessage
	Dim L_App_DialogTitle


'------------------------
' Detect if IE is >=4.0 -
'------------------------
Function DetectBrowserVersion()
   Dim iVersion
   iVersion=navigator.appversion
   If Left(iVersion,1)>=4 Then
       DetectBrowserVersion="4.0>"
   Else
       DetectBrowserVersion="3.0x"
   End if
End Function

'----------------------------------------
' Display the appropriate error message -
'----------------------------------------

Sub DisplayError(retVal)
    Call InitConstants
    Msgbox L_ShowMe_ErrorMessage(retVal), 4144, L_APP_DialogTitle
End Sub

Sub InitConstants()
	'NON-LOCALIZABLE: Return values from OUACtrl.ocx. Used by the "Show Me" jumps.
   msouierrSuccess=0
   msouierrFail=1
   msouierrNotValidId=2
   msouierrNoDialog=3
   msouierrWrongDialog=4
   msouierrAdminDisabled=5
   msouierrDisabled=6
   msouierrOn=7
   msouierrOff=8
   msouierrUnknown=9
   msouierrAppModal=10

   'LOCALIZABLE: Possible error messages displayed to the user, in order of frequency
   L_ShowMe_ErrorMessage(msouierrFail)="This task cannot be automatically completed. Please complete the steps manually."		'Message to display when there is a general Show Me failure
   L_ShowMe_ErrorMessage(msouierrAppModal)="A dialog box is already displayed."																'Message to display when the application is already displaying a dialog
   L_ShowMe_ErrorMessage(msouierrDisabled)="This task cannot be automatically completed. Please complete the steps manually."	'Message to display when the application is in a state that makes the feature disabled
   L_ShowMe_ErrorMessage(msouierrNoDialog)="The dialog box was not displayed."																'Message to display when the application doesn't display the requested dialog
   L_ShowMe_ErrorMessage(msouierrAdminDisabled)="The command you are trying to use has been disabled by your administrator."	'Message to display when the feature we're trying to use is disabled by an administrator
   L_ShowMe_ErrorMessage(msouierrWrongDialog)="The option does not exist in the specified dialog box."								'Message to display when we attempt to "click" a non-existent control on a dialog ("Do It" jumps -- not really used)
   L_ShowMe_ErrorMessage(msouierrNotValidId)="Internal error. Please complete the steps manually."										'Message to display when our Show Me code calls the wrong TCID (This should never display!)
   

   '***********************************************************************************
   'NOTE TO VENDORS: These string resources need to be the same as the ones in
   '              "IE 3.0x Fixes.xls"!!  Please do the following:
   '                 - Click the "Copy MsgBox" on the worksheet.
   '                 - Remove the existing lines below between "BEGIN" and "END"
   '                 - Paste the contents of the clipboard between "BEGIN" and "END"
   '                 - Insert a "Dim" statement at the top of this file for each
	'                   constant
	'
   '*** BEGIN *** BEGIN *** BEGIN *** BEGIN *** BEGIN *** BEGIN *** BEGIN *** BEGIN ***

		'LOCALIZABLE: Problem/Solution style dialog for "Security setting too high"
		L_SecurityT1_ErrorMessage="Help can't show you this procedure because the security setting in your browser is set too high"	'Line 1 of problem text
		L_SecurityT2_ErrorMessage="or the ActiveX control Ouactrl.ocx didn't install correctly."													'Line 2 of problem text
		L_SecurityE1_ErrorMessage="- Select a lower security setting in your browser"																	'Line 1 of solution text
		L_SecurityE2_ErrorMessage="- If you receive this message after selecting a lower security setting, please see your system"		'Line 2 of solution text
		L_SecurityE3_ErrorMessage="  administrator for help troubleshooting the installation of the ActiveX control Ouactrl.ocx"		'Line 3 of solution text
		L_SecurityE4_ErrorMessage="  located in the folder you installed Microsoft Office to."														'Line 4 of solution text

		'LOCALIZABLE: 
		sSecurityMSG=L_SecurityT1_ErrorMessage & Chr(13) & L_SecurityT2_ErrorMessage & Chr(13) & Chr(13) & L_SecurityE1_ErrorMessage & Chr(13) & L_SecurityE2_ErrorMessage & Chr(13) & L_SecurityE3_ErrorMessage & Chr(13) & L_SecurityE4_ErrorMessage

		'LOCALIZABLE: Title for error dialogs
		L_App_DialogTitle="Microsoft Office Help"		'Title for error dialogs
	
   '*** END *** END *** END *** END *** END *** END *** END *** END *** END *** END ***
	
End Sub

Sub InitErrorMsgs()
	'Leave this here just in case we forgot to remove a call.
End Sub

'---------------------------------------------
' Mouse over, mouse out, rollover procedures -
'---------------------------------------------
Sub ColorSteps(sColor)
	If sColor="LightBlue" Then
		steps.className = "Highlight"
	Else
		steps.className = "Normal"
	End If
End Sub

