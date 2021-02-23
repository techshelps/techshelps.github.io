// Created : 04/12/2002

var L_UNDEFINED_TEXT="Help could not locate this inline definition";

function AppendPopup(oSource, sPopup)
{
	var sPopupText;
	if (oSource.tagName=="A" && oSource.getAttribute("State")!="On")
	{
	
		sPopupText= GetGlossaryTerms(sPopup);
	
		// Have we found a definition?
		if (sPopupText != L_UNDEFINED_TEXT)
		{
			oSource.insertAdjacentHTML("BeforeEnd", "<SPAN ID='Pop' class='GlossaryDef'>&nbsp;" + sPopupText + "</SPAN>");
			oSource.setAttribute("State", "On");
			window.event.returnValue=false;
		}
		else
		{
			alert(L_UNDEFINED_TEXT);
		}
	}
	else if (oSource.tagName=="A" && oSource.getAttribute("State")=="On" )
	{
		oSource.all("Pop").outerHTML="";
		oSource.setAttribute("State", "Off");
		window.event.returnValue=false;
	}
}


function GetGlossaryTerms(sPopup)
{
	var sTemp;
	switch (sPopup)

	{
		// Generated on 05/07/2003 4:00:30 AM

		// Access

		case 'AcAdeFile':
			L_AcAdeFile_TEXT='(ADE file: A Microsoft Access project (.adp) file with all modules compiled and all editable source code removed.)';
			sTemp=L_AcAdeFile_TEXT;
			break;
		case 'AcAnsiSqlQueryMode':
			L_AcAnsiSqlQueryMode_TEXT='(ANSI SQL query mode: One of two types of SQL syntax: ANSI-89 SQL (also called Microsoft Jet SQL and ANSI SQL), which is the traditional Jet SQL syntax; and ANSI-92 SQL, which has new and different reserved words, syntax rules, and wildcard characters.)';
			sTemp=L_AcAnsiSqlQueryMode_TEXT;
			break;
		case 'AcAutofiltering':
			L_AcAutofiltering_TEXT='(autofiltering: Filtering data in PivotTable or PivotChart view by selecting one or more items in a field that allows filtering.)';
			sTemp=L_AcAutofiltering_TEXT;
			break;
		case 'AcBigintDataType':
			L_AcBigintDataType_TEXT='(bigint data type: In an Access project, a data type of 8 bytes (64 bits) that stores whole numbers in the range of -2^63 (-9,223,372,036,854,775,808) through 2^63-1 (9,223,372,036,854,775,807).)';
			sTemp=L_AcBigintDataType_TEXT;
			break;
		case 'AcCategoryField':
			L_AcCategoryField_TEXT='(category field: A field that is displayed in the category area of PivotChart view. Items in a category field appear as labels on the category axis.)';
			sTemp=L_AcCategoryField_TEXT;
			break;
		case 'AcClassModule':
			L_AcClassModule_TEXT='(class module: A module that can contain the definition for a new object. Each instance of a class creates a new object. Procedures defined in the module become properties and methods of the object. Class modules can exist alone or with forms and reports.)';
			sTemp=L_AcClassModule_TEXT;
			break;
		case 'AcColumnArea':
			L_AcColumnArea_TEXT='(column area: The part of PivotTable view that contains column fields.)';
			sTemp=L_AcColumnArea_TEXT;
			break;
		case 'AcColumnField':
			L_AcColumnField_TEXT='(column field: A field in the column area of PivotTable view. Items in column fields are listed across the top of a PivotTable list. Inner column fields are closest to the detail area; outer column fields are above the inner column fields.)';
			sTemp=L_AcColumnField_TEXT;
			break;
		case 'AcConditionalFiltering':
			L_AcConditionalFiltering_TEXT='(conditional filtering: Filtering a field to show the top or bottom <I>n</I> items based on a total. For example, you could filter for the three cities that generated the most sales or the five products that are least profitable.)';
			sTemp=L_AcConditionalFiltering_TEXT;
			break;
		case 'AcConstraint':
			L_AcConstraint_TEXT='(constraint: A restriction placed on the value that can be entered into a column or a row. For example, values in the Age column cannot be less than 0 or greater than 110.)';
			sTemp=L_AcConstraint_TEXT;
			break;
		case 'AcCustomGroup':
			L_AcCustomGroup_TEXT='(custom group: An item of a custom group field. A custom group contains two or more items from a row or column field.)';
			sTemp=L_AcCustomGroup_TEXT;
			break;
		case 'AcCustomGroupField':
			L_AcCustomGroupField_TEXT='(custom group field: A field in the row or column area that contains custom groups as its items.)';
			sTemp=L_AcCustomGroupField_TEXT;
			break;
		case 'AcCustomOrder':
			L_AcCustomOrder_TEXT='(custom order: User-defined sort order. For example, you could define a custom sort order to display values in the EmployeeTitle column on the basis of the title\'s seniority.)';
			sTemp=L_AcCustomOrder_TEXT;
			break;
		case 'AcDataArea':
			L_AcDataArea_TEXT='(data area: The part of PivotTable or PivotChart view that contains summary data. Values in the data area are displayed as records in PivotTable view and as data points in PivotChart view.)';
			sTemp=L_AcDataArea_TEXT;
			break;
		case 'AcDatabaseDiagram':
			L_AcDatabaseDiagram_TEXT='(database diagram: A graphical representation of any portion of a database schema. It can be either a whole or partial picture of the structure of the database. It includes tables, the columns they contain, and the relationships between the tables.)';
			sTemp=L_AcDatabaseDiagram_TEXT;
			break;
		case 'AcDataField':
			L_AcDataField_TEXT='(data field: A field that contains summarized data in PivotTable or PivotChart view. A data field usually contains numeric data.)';
			sTemp=L_AcDataField_TEXT;
			break;
		case 'AcDataLabel':
			L_AcDataLabel_TEXT='(data label: A label that provides additional information about a data marker, which represents a single data point or value.)';
			sTemp=L_AcDataLabel_TEXT;
			break;
		case 'AcDataMarker':
			L_AcDataMarker_TEXT='(data marker: A bar, area, dot, slice, or other symbol in a chart that represents a single data point or value. Related data markers in a chart constitute a data series.)';
			sTemp=L_AcDataMarker_TEXT;
			break;
		case 'AcDataOutline':
			L_AcDataOutline_TEXT='(data outline: A window that you can display when a data access page is open in Design view. The data outline provides a tree view of the data model of a page. You can select and set properties of the elements that are displayed in the window.)';
			sTemp=L_AcDataOutline_TEXT;
			break;
		case 'AcDataSeries':
			L_AcDataSeries_TEXT='(data series: Related data points that are plotted in a chart. Each data series in a chart has a unique color or pattern. You can plot one or more data series in a chart.)';
			sTemp=L_AcDataSeries_TEXT;
			break;
		case 'AcDetailArea':
			L_AcDetailArea_TEXT='(detail area: The part of PivotTable view that contains detail and total fields.)';
			sTemp=L_AcDetailArea_TEXT;
			break;
		case 'AcDetailField':
			L_AcDetailField_TEXT='(Detail field: A field that displays all rows, or records, from the underlying record source.)';
			sTemp=L_AcDetailField_TEXT;
			break;
		case 'AcDetailSection':
			L_AcDetailSection_TEXT='(detail section: Used to contain the main body of a form or report. This section usually contains controls bound to the fields in the record source but can also contain unbound controls, such as labels that identify a field\'s contents.)';
			sTemp=L_AcDetailSection_TEXT;
			break;
		case 'AcDropArea':
			L_AcDropArea_TEXT='(drop area: An area in PivotTable or PivotChart view where you can drop fields from the field list to display the data in the field. The labels on each drop area indicate the types of fields that you can create in the view.)';
			sTemp=L_AcDropArea_TEXT;
			break;
		case 'AcEditControl':
			L_AcEditControl_TEXT='(edit control: Also known as a text box, an edit control is a rectangular window in which a user can enter and edit text.)';
			sTemp=L_AcEditControl_TEXT;
			break;
		case 'AcFilterArea':
			L_AcFilterArea_TEXT='(filter area: The part of PivotTable or PivotChart view that contains filter fields.)';
			sTemp=L_AcFilterArea_TEXT;
			break;
		case 'AcFilterField':
			L_AcFilterField_TEXT='(filter field: A field in the filter area that you can use to filter data displayed in PivotTable or PivotChart view. Filter fields perform the same functions as page fields in Microsoft Excel PivotTable reports.)';
			sTemp=L_AcFilterField_TEXT;
			break;
		case 'AcFormFooter':
			L_AcFormFooter_TEXT='(form footer: Used to display instructions for using a form, command buttons, or unbound controls to accept input. Appears at the bottom of the form in Form view and at the end of a printout.)';
			sTemp=L_AcFormFooter_TEXT;
			break;
		case 'AcFormHeader':
			L_AcFormHeader_TEXT='(form header: Used to display a title for a form, instructions for using it, or command buttons that open related forms or carry out other tasks. Appears at the top of the form in Form view and at the beginning of a printout.)';
			sTemp=L_AcFormHeader_TEXT;
			break;
		case 'AcFunction':
			L_AcFunction_TEXT='(function: A query that takes input parameters and returns a result like a stored procedure. Types: scalar (multistatement; returns one value), inline (one statement; an updateable table value), and table (multistatement; table value).)';
			sTemp=L_AcFunction_TEXT;
			break;
		case 'AcGroupFooter':
			L_AcGroupFooter_TEXT='(group footer: Used to place information, such as group name or group total, at the end of a group of records.)';
			sTemp=L_AcGroupFooter_TEXT;
			break;
		case 'AcGroupHeader':
			L_AcGroupHeader_TEXT='(group header: Used to place information, such as group name or group total, at the beginning of a group of records.)';
			sTemp=L_AcGroupHeader_TEXT;
			break;
		case 'AcItem':
			L_AcItem_TEXT='(item: A unique element of data within a field. When a lower level of items is available for display in a PivotTable list or the field list, an expand indicator (+) appears beside the item.)';
			sTemp=L_AcItem_TEXT;
			break;
		case 'AcLayoutPreview':
			L_AcLayoutPreview_TEXT='(Layout preview: A preview of a report that uses a minimum amount of data to display the general layout of the report. Click <b>Print Preview</b> to display the exact data that appears in the report.)';
			sTemp=L_AcLayoutPreview_TEXT;
			break;
		case 'AcLegend':
			L_AcLegend_TEXT='(legend: A box that identifies the patterns or colors assigned to data series or categories in a chart.)';
			sTemp=L_AcLegend_TEXT;
			break;
		case 'AcMacro':
			L_AcMacro_TEXT='(macro: An action or set of actions that you can use to automate tasks.)';
			sTemp=L_AcMacro_TEXT;
			break;
		case 'AcMdeFile':
			L_AcMdeFile_TEXT='(MDE file: Microsoft Access database (.mdb) file with all modules compiled and all editable source code removed.)';
			sTemp=L_AcMdeFile_TEXT;
			break;
		case 'AcMicrosoftAccessDatabase':
			L_AcMicrosoftAccessDatabase_TEXT='(Microsoft Access database: A collection of data and objects (such as tables, queries, or forms) that is related to a particular topic or purpose. The Microsoft Jet database engine manages the data.)';
			sTemp=L_AcMicrosoftAccessDatabase_TEXT;
			break;
		case 'AcMicrosoftSqlServerDatabase':
			L_AcMicrosoftSqlServerDatabase_TEXT='(Microsoft SQL Server database: A database in Microsoft SQL Server, it consists of tables, views, indexes, stored procedures, functions, and triggers.)';
			sTemp=L_AcMicrosoftSqlServerDatabase_TEXT;
			break;
		case 'acMoveHandle':
			L_acMoveHandle_TEXT='(move handle: The large square that is displayed in the upper-left corner of the selected control in Design view. You can click and move the handle to move the control to another location.)';
			sTemp=L_acMoveHandle_TEXT;
			break;
		case 'AcPageFooter':
			L_AcPageFooter_TEXT='(page footer: Used to display page summaries, dates, or page numbers at the bottom of every page in a form or report. In a form, the page footer appears only when you print the form.)';
			sTemp=L_AcPageFooter_TEXT;
			break;
		case 'AcPageHeader':
			L_AcPageHeader_TEXT='(page header: Used to display a title, column headings, dates, or page numbers at the top of every page in a form or report. In a form, the page header appears only when you print the form.)';
			sTemp=L_AcPageHeader_TEXT;
			break;
		case 'AcPivotchartView':
			L_AcPivotchartView_TEXT='(PivotChart view: A view that shows a graphical analysis of data in a datasheet or form. You can see different levels of detail or specify the layout by dragging fields and items or by showing and hiding items in the drop-down lists for the fields.)';
			sTemp=L_AcPivotchartView_TEXT;
			break;
		case 'AcPivottableView':
			L_AcPivottableView_TEXT='(PivotTable view: A view that summarizes and analyzes data in a datasheet or form. You can use different levels of detail or organize data by dragging the fields and items or by showing and hiding items in the drop-down lists for the fields.)';
			sTemp=L_AcPivottableView_TEXT;
			break;
		case 'AcReplicaSetTopology':
			L_AcReplicaSetTopology_TEXT='(replica set topology: The order in which changes are propagated from replica to replica. Topology determines how quickly changes in another replica appear in your replica.)';
			sTemp=L_AcReplicaSetTopology_TEXT;
			break;
		case 'AcReportFooter':
			L_AcReportFooter_TEXT='(report footer: A report section that is used to place information that normally appears at the bottom of the page, such as page numbers, dates, and sums.)';
			sTemp=L_AcReportFooter_TEXT;
			break;
		case 'AcReportHeader':
			L_AcReportHeader_TEXT='(report header: A report section that is used to place information (such as a title, date, or report introduction) at the beginning of a report.)';
			sTemp=L_AcReportHeader_TEXT;
			break;
		case 'AcRowArea':
			L_AcRowArea_TEXT='(row area: The part of PivotTable view that contains row fields.)';
			sTemp=L_AcRowArea_TEXT;
			break;
		case 'AcRowField':
			L_AcRowField_TEXT='(row field: A field in the row area of PivotTable view. Items in row fields are listed down the left side of the view. Inner row fields are closest to the detail area; outer row fields are to the left of the inner row fields.)';
			sTemp=L_AcRowField_TEXT;
			break;
		case 'AcSectionBar':
			L_AcSectionBar_TEXT='(section bar: The horizontal bar above a data access page section in Design view. The section bar displays the type and name of the section. Use it to access the section\'s property sheet.)';
			sTemp=L_AcSectionBar_TEXT;
			break;
		case 'AcSeriesField':
			L_AcSeriesField_TEXT='(series field: A field that is displayed in the series area of a chart and that contains series items. A series is a group of related data points.)';
			sTemp=L_AcSeriesField_TEXT;
			break;
		case 'AcSeriesPoint':
			L_AcSeriesPoint_TEXT='(series point: An individual data value that is plotted in a chart and represented by a column, bar, line, pie or doughnut slice, or other type of data marker.)';
			sTemp=L_AcSeriesPoint_TEXT;
			break;
		case 'AcSqlVariantDataType':
			L_AcSqlVariantDataType_TEXT='(sql_variant data type: In an Access project, a data type that stores values of several data types, except for text, ntext, image, timestamp, and sql_variant types. It is used in a column, parameter, variable, or return value of a user-defined function.)';
			sTemp=L_AcSqlVariantDataType_TEXT;
			break;
		case 'AcTableDataType':
			L_AcTableDataType_TEXT='(table data type: In an Access project, a special data type that is used to store a result set in a local variable or return value of a user-defined function for later processing. It can be used in place of a temporary table stored in the tempdb database.)';
			sTemp=L_AcTableDataType_TEXT;
			break;
		case 'AcTotalField':
			L_AcTotalField_TEXT='(total field: A field that summarizes data from the underlying record source. A total field might use a summary function, such as Sum or Count, or use an expression to calculate summary values.)';
			sTemp=L_AcTotalField_TEXT;
			break;
		case 'AcTrigger':
			L_AcTrigger_TEXT='(trigger: A special form of a stored procedure that is carried out automatically when data in a specified table is modified. Triggers are often created to enforce referential integrity or consistency among logically related data in different tables.)';
			sTemp=L_AcTrigger_TEXT;
			break;
		case 'AcUserDefinedDataType':
			L_AcUserDefinedDataType_TEXT='(user-defined data type: In a Microsoft SQL Server database, a definition of the type of data a column can contain. It is defined by the user with existing system data types. Rules and defaults can only be bound to user-defined data types.)';
			sTemp=L_AcUserDefinedDataType_TEXT;
			break;
		case 'AcView(object)':
			L_AcViewobject_TEXT='(view (object): In an Access project, a type of query that is a virtual table based on an <b>SQL SELECT</b> statement. For example, a view might contain only 3 out of 10 available columns in a join of two tables, in order to limit access to certain data.)';
			sTemp=L_AcViewobject_TEXT;
			break;
		case 'AcXmlAttribute':
			L_AcXmlAttribute_TEXT='(XML attribute: Information that is added to a tag to provide more information about the tag, such as &lt;ingredient quantity=\"2\"units=\"cups\"&gt;flour&lt;/ingredient&gt;.)';
			sTemp=L_AcXmlAttribute_TEXT;
			break;
		case 'AcXmlElement':
			L_AcXmlElement_TEXT='(XML element: Information that is delimited by a start and end tag in an Extended Markup Language (XML) document. An example would be &lt;LastName&gt;Davalio&lt;/LastName&gt;.)';
			sTemp=L_AcXmlElement_TEXT;
			break;
		case 'AcXmlEntities':
			L_AcXmlEntities_TEXT='(XML entities: Combinations of characters and symbols that replace other characters when an XML document is parsed, usually those that have other meanings in XML. For example, &amp;lt; represents the &lt; symbol which is also the opening bracket for a tag.)';
			sTemp=L_AcXmlEntities_TEXT;
			break;
		case 'defAction':
			L_defAction_TEXT='(action: The basic building block of a macro; a self-contained instruction that can be combined with other actions to automate tasks. This is sometimes called a command in other macro languages.)';
			sTemp=L_defAction_TEXT;
			break;
		case 'defActionArgument':
			L_defActionArgument_TEXT='(action argument: Additional information required by some macro actions. For example, the object affected by the action or special conditions under which the action is carried out.)';
			sTemp=L_defActionArgument_TEXT;
			break;
		case 'defActionList':
			L_defActionList_TEXT='(action list: The list that appears when you click the arrow in the Action column of the Macro window.)';
			sTemp=L_defActionList_TEXT;
			break;
		case 'defActionQuery':
			L_defActionQuery_TEXT='(action query: A query that copies or changes data. Action queries include append, delete, make-table, and update queries. They are identified by an exclamation point (!) next to their names in the Database window.)';
			sTemp=L_defActionQuery_TEXT;
			break;
		case 'defActionRow':
			L_defActionRow_TEXT='(action row: A row in the upper part of the Macro window in which you enter macro names, actions, conditions, and comments associated with a particular macro or macro group.)';
			sTemp=L_defActionRow_TEXT;
			break;
		case 'defAdminAccount':
			L_defAdminAccount_TEXT='(Admin account: The default user account. When you install Access, the Setup program automatically includes the Admin user account in the workgroup information file that it creates.)';
			sTemp=L_defAdminAccount_TEXT;
			break;
		case 'defAdminsGroup':
			L_defAdminsGroup_TEXT='(Admins group: The system administrator\'s group account, which retains full permissions on all databases used by a workgroup. The Setup program automatically adds the default Admin user account to the Admins group.)';
			sTemp=L_defAdminsGroup_TEXT;
			break;
		case 'defAdvancedFilterSort':
			L_defAdvancedFilterSort_TEXT='(Advanced Filter/Sort window: A window in which you can create a filter from scratch. You enter criteria expressions in the filter design grid to restrict the records in the open form or datasheet to a subset of records that meet the criteria.)';
			sTemp=L_defAdvancedFilterSort_TEXT;
			break;
		case 'defAggregateFunction':
			L_defAggregateFunction_TEXT='(aggregate function: A function, such as <b>Sum</b>, <b>Count</b>, <b>Avg</b>, or <b>Var</b>, that you use to calculate totals.)';
			sTemp=L_defAggregateFunction_TEXT;
			break;
		case 'defAppendQuery':
			L_defAppendQuery_TEXT='(append query: An action query that adds the records in a query\'s result set to the end of an existing table.)';
			sTemp=L_defAppendQuery_TEXT;
			break;
		case 'defApplicationBackground':
			L_defApplicationBackground_TEXT='(application background: The background area of an application window. In Access, this is the screen area behind the Database window or any other open window, but it is contained within the Access application window.)';
			sTemp=L_defApplicationBackground_TEXT;
			break;
		case 'defAttachedTable':
			L_defAttachedTable_TEXT='(linked table: A table stored in a file outside the open database from which Access can access records. You can add, delete, and edit records in a linked table, but you cannot change its structure.)';
			sTemp=L_defAttachedTable_TEXT;
			break;
		case 'defAttachLink':
			L_defAttachLink_TEXT='(link (tables): An action that establishes a connection to data from another application so that you can view and edit the data in both the original application and in Access.)';
			sTemp=L_defAttachLink_TEXT;
			break;
		case 'defAutoformat':
			L_defAutoformat_TEXT='(autoformat: A collection of formats that determines the appearance of the controls and sections in a form or report.)';
			sTemp=L_defAutoformat_TEXT;
			break;
		case 'defAutomaticLink':
			L_defAutomaticLink_TEXT='(automatic link: A link from an OLE object in Access to an OLE server that automatically updates the object in Access when the information in the object file changes.)';
			sTemp=L_defAutomaticLink_TEXT;
			break;
		case 'defAutoNumber':
			L_defAutoNumber_TEXT='(AutoNumber data type: In a Microsoft Access database, a field data type that automatically stores a unique number for each record as it\'s added to a table. Three kinds of numbers can be generated: sequential, random, and Replication ID.)';
			sTemp=L_defAutoNumber_TEXT;
			break;
		case 'defBitMask':
			L_defBitMask_TEXT='(bit mask: A value that is used with bitwise operators (<b>And</b>, <b>Eqv</b>, <b>Imp</b>, <b>Not</b>, <b>Or</b>, and <b>Xor</b>) to test, set, or reset the state of individual bits in a bitwise field value.)';
			sTemp=L_defBitMask_TEXT;
			break;
		case 'defBookmark':
			L_defBookmark_TEXT='(Bookmark: A property of a <b>Recordset</b> object or a form that contains a binary string identifying the current record.)';
			sTemp=L_defBookmark_TEXT;
			break;
		case 'defBoundColumn':
			L_defBoundColumn_TEXT='(bound column: The column in a list box, combo box, or drop-down list box that\'s bound to the field specified by the control\'s <bterm>ControlSource</bterm> property.)';
			sTemp=L_defBoundColumn_TEXT;
			break;
		case 'defBoundField':
			L_defBoundField_TEXT='(bound control: A control used on a form, report, or data access page to display or modify data from a table, query, or SQL statement. The control\'s <bterm>ControlSource</bterm> property stores the field name to which the control is bound.)';
			sTemp=L_defBoundField_TEXT;
			break;
		case 'defBoundObjectFrame':
			L_defBoundObjectFrame_TEXT='(bound object frame: A control on a form or report that is used to display and manipulate OLE objects that are stored in tables.)';
			sTemp=L_defBoundObjectFrame_TEXT;
			break;
		case 'defBuilder':
			L_defBuilder_TEXT='(builder: An Access tool that simplifies a task. For example, you can quickly create a complex expression with the Expression Builder.)';
			sTemp=L_defBuilder_TEXT;
			break;
		case 'defBuildingApplications':
			L_defBuildingApplications_TEXT='(<i>Microsoft Access: Building Applications with Forms and Reports</i> contains additional information about Visual Basic, security, ActiveX controls, and delivering Access applications. It is available on the Microsoft Web site at www.microsoft.com.)';
			sTemp=L_defBuildingApplications_TEXT;
			break;
		case 'defBuiltInToolbar':
			L_defBuiltInToolbar_TEXT='(built-in toolbar: A toolbar that is part of Access when it\'s installed on your computer. In contrast, a custom toolbar is one that you create for your own application.)';
			sTemp=L_defBuiltInToolbar_TEXT;
			break;
		case 'defByteDataType':
			L_defByteDataType_TEXT='(Byte data type: An Access database data type that is used to hold small positive integers ranging from 0 to 255.)';
			sTemp=L_defByteDataType_TEXT;
			break;
		case 'defCalculatedControl':
			L_defCalculatedControl_TEXT='(calculated control: A control that is used on a form, report, or data access page to display the result of an expression. The result is recalculated each time there is a change in any of the values on which the expression is based.)';
			sTemp=L_defCalculatedControl_TEXT;
			break;
		case 'defCalculatedField':
			L_defCalculatedField_TEXT='(calculated field: A field, defined in a query, that displays the result of an expression rather than displaying stored data. The value is recalculated each time a value in the expression changes.)';
			sTemp=L_defCalculatedField_TEXT;
			break;
		case 'defCallTree':
			L_defCallTree_TEXT='(call tree: All modules that might be called by any procedure in the module in which code is currently running.)';
			sTemp=L_defCallTree_TEXT;
			break;
		case 'defCascadeDelete':
			L_defCascadeDelete_TEXT='(cascading delete: For relationships that enforce referential integrity between tables, the deletion of all related records in the related table or tables when a record in the primary table is deleted.)';
			sTemp=L_defCascadeDelete_TEXT;
			break;
		case 'defCascadeUpdate':
			L_defCascadeUpdate_TEXT='(cascading update: For relationships that enforce referential integrity between tables, the updating of all related records in the related table or tables when a record in the primary table is changed.)';
			sTemp=L_defCascadeUpdate_TEXT;
			break;
		case 'defCascadingEvent':
			L_defCascadingEvent_TEXT='(cascading event: A sequence of events caused by an event procedure directly or indirectly calling itself; also called an event cascade or a recursion. Be careful using cascading events, because they often result in stack-overflow or other run-time errors.)';
			sTemp=L_defCascadingEvent_TEXT;
			break;
		case 'defChannelNumber':
			L_defChannelNumber_TEXT='(channel number: An integer that corresponds to an open Dynamic Data Exchange (DDE) channel. Channel numbers are assigned by Microsoft Windows 95 or later, created with the <B>DDEInitiate</B> function, and used by other DDE functions and statements.)';
			sTemp=L_defChannelNumber_TEXT;
			break;
		case 'defCheckBox':
			L_defCheckBox_TEXT='(check box: A control that indicates whether an option is selected. A check mark appears in the box when the option is selected.)';
			sTemp=L_defCheckBox_TEXT;
			break;
		case 'defClassName':
			L_defClassName_TEXT='(class name: The name used to refer to a class module. If the class module is a form or report module, the class name is prefaced with the type of module. For example, Form_OrderForm.)';
			sTemp=L_defClassName_TEXT;
			break;
		case 'defClassNameOLE':
			L_defClassNameOLE_TEXT='(class name (OLE): A predefined name used to refer to an OLE object in Visual Basic. It consists of the name of the application used to create the OLE object, the object\'s type, and, optionally, the version number of the application. Example: Excel.Sheet.)';
			sTemp=L_defClassNameOLE_TEXT;
			break;
		case 'defCodeStub':
			L_defCodeStub_TEXT='(code stub: A segment of Visual Basic code that defines the beginning and end of a procedure.)';
			sTemp=L_defCodeStub_TEXT;
			break;
		case 'defColumn':
			L_defColumn_TEXT='(column: A location within a database table that stores a particular type of data. It is also the visual representation of a field in a datasheet, and in an Access database, the query design grid or the filter design grid.)';
			sTemp=L_defColumn_TEXT;
			break;
		case 'defcolumnselector':
			L_defcolumnselector_TEXT='(column selector: The horizontal bar at the top of a column. You can click a column selector to select an entire column in the query design grid or the filter design grid.)';
			sTemp=L_defcolumnselector_TEXT;
			break;
		case 'defComboBox':
			L_defComboBox_TEXT='(combo box: A control used on a form that provides the combined functionality of a list box and a text box. You can type a value, or you can click the control to display a list and then select an item from that list.)';
			sTemp=L_defComboBox_TEXT;
			break;
		case 'defCommandButton':
			L_defCommandButton_TEXT='(command button: A control that runs a macro, calls a Visual Basic function, or runs an event procedure. This is sometimes called a push button in other applications.)';
			sTemp=L_defCommandButton_TEXT;
			break;
		case 'defComparisonOperator':
			L_defComparisonOperator_TEXT='(comparison operator: An operator that is used to compare two values or expressions. For example, <b>< </b>(less than), <b>> </b>(greater than), and <b>=</b> (equal to).)';
			sTemp=L_defComparisonOperator_TEXT;
			break;
		case 'defCompoundControl':
			L_defCompoundControl_TEXT='(compound control: A control and an attached label, such as a text box with an attached label.)';
			sTemp=L_defCompoundControl_TEXT;
			break;
		case 'defConnectionString':
			L_defConnectionString_TEXT='(connection string: A string expression that is used to open an external database.)';
			sTemp=L_defConnectionString_TEXT;
			break;
		case 'defContainerApplication':
			L_defContainerApplication_TEXT='(OLE container: An application that contains a linked or embedded OLE object from another application. For example, if an OLE object in an Access database contains a Microsoft Excel worksheet, Access is the OLE container.)';
			sTemp=L_defContainerApplication_TEXT;
			break;
		case 'defContinuousForm':
			L_defContinuousForm_TEXT='(continuous form: A form that displays more than one record on the screen in Form view.)';
			sTemp=L_defContinuousForm_TEXT;
			break;
		case 'defControlContainingHyperlink':
			L_defControlContainingHyperlink_TEXT='(control containing a hyperlink: A control that makes it possible for a user to jump to a document, Web page, or object. For example, a text box that is bound to a field that contains hyperlinks.)';
			sTemp=L_defControlContainingHyperlink_TEXT;
			break;
		case 'defCrosstabQuery':
			L_defCrosstabQuery_TEXT='(crosstab query: A query that calculates a sum, average, count, or other type of total on records, and then groups the result by two types of information: one down the left side of the datasheet and the other across the top.)';
			sTemp=L_defCrosstabQuery_TEXT;
			break;
		case 'defCurrencyDataType':
			L_defCurrencyDataType_TEXT='(Currency data type: In a Microsoft Access database, a data type that is useful for calculations involving money or for fixed-point calculations in which accuracy is extremely important.)';
			sTemp=L_defCurrencyDataType_TEXT;
			break;
		case 'defCurrentRecord':
			L_defCurrentRecord_TEXT='(current record: The record in a recordset that you can modify or retrieve data from. There is only one current record in a recordset, but a recordset may have no current record, for example, after a record has been deleted from a dynaset-type recordset.)';
			sTemp=L_defCurrentRecord_TEXT;
			break;
		case 'defCustomPropertiesDialog':
			L_defCustomPropertiesDialog_TEXT='(custom properties dialog box: A custom property sheet that allows users to set properties for an ActiveX control.)';
			sTemp=L_defCustomPropertiesDialog_TEXT;
			break;
		case 'defCustomToolbar':
			L_defCustomToolbar_TEXT='(custom toolbar: A toolbar that you create for your application. In contrast, a built-in toolbar is part of Access when it\'s installed on your computer.)';
			sTemp=L_defCustomToolbar_TEXT;
			break;
		case 'defDatabaseObjects':
			L_defDatabaseObjects_TEXT='(database objects: An Access database contains objects such as tables, queries, forms, reports, pages, macros, and modules. An Access project contains objects such as forms, reports, pages, macros, and modules.)';
			sTemp=L_defDatabaseObjects_TEXT;
			break;
		case 'defDatabaseWindow':
			L_defDatabaseWindow_TEXT='(Database window: The window that appears when you open an Access database or an Access project. It displays shortcuts for creating new database objects and opening existing objects.)';
			sTemp=L_defDatabaseWindow_TEXT;
			break;
		case 'defDataDefinitionQuery':
			L_defDataDefinitionQuery_TEXT='(data-definition query: An SQL-specific query that contains data definition language (DDL) statements. These statements allow you to create or alter objects in the database.)';
			sTemp=L_defDataDefinitionQuery_TEXT;
			break;
		case 'defDataItem':
			L_defDataItem_TEXT='(data item: An application-specific piece of data that can be transferred over a (Dynamic Data Exchange) DDE channel.)';
			sTemp=L_defDataItem_TEXT;
			break;
		case 'defDatasheet':
			L_defDatasheet_TEXT='(datasheet: Data from a table, form, query, view, or stored procedure that is displayed in a row-and-column format.)';
			sTemp=L_defDatasheet_TEXT;
			break;
		case 'defDatasheetView':
			L_defDatasheetView_TEXT='(Datasheet view: A window that displays data from a table, form, query, view, or stored procedure in a row-and-column format. In Datasheet view, you can edit fields, add and delete data, and search for data.)';
			sTemp=L_defDatasheetView_TEXT;
			break;
		case 'defDateDataType':
			L_defDateDataType_TEXT='(Date/Time data type: An Access database data type that is used to hold date and time information.)';
			sTemp=L_defDateDataType_TEXT;
			break;
		case 'defDeclarationsSection':
			L_defDeclarationsSection_TEXT='(declarations section: The section of a module containing declarations that apply to every procedure in the module. It can include declarations for variables, constants, user-defined data types, and external procedures in a dynamic-link library.)';
			sTemp=L_defDeclarationsSection_TEXT;
			break;
		case 'defDefaultProperty':
			L_defDefaultProperty_TEXT='(default property: A property that you can set for a control so that each time a new control of that type is created, this property will have the same value.)';
			sTemp=L_defDefaultProperty_TEXT;
			break;
		case 'defDefaultValue':
			L_defDefaultValue_TEXT='(default value: A value that is automatically entered in a field or control when you add a new record. You can either accept the default value or override it by typing a value.)';
			sTemp=L_defDefaultValue_TEXT;
			break;
		case 'defDeleteQuery':
			L_defDeleteQuery_TEXT='(delete query: A query (SQL statement) that removes rows matching the criteria that you specify from one or more tables.)';
			sTemp=L_defDeleteQuery_TEXT;
			break;
		case 'defDesignView':
			L_defDesignView_TEXT='(Design view: A window that shows the design of these database objects: tables, queries, forms, reports, macros, and data access pages. In Design view, you can create new database objects and modify the design of existing ones.)';
			sTemp=L_defDesignView_TEXT;
			break;
		case 'defDisabledField':
			L_defDisabledField_TEXT='(disabled control: A control that appears dimmed on a form or data access page. A disabled control cannot get the focus and will not respond to mouse clicks.)';
			sTemp=L_defDisabledField_TEXT;
			break;
		case 'defDLL':
			L_defDLL_TEXT='(Dynamic Link Library: A set of routines that can be called from Visual Basic procedures and are loaded and linked into your application at run time.)';
			sTemp=L_defDLL_TEXT;
			break;
		case 'defDomain':
			L_defDomain_TEXT='(domain: A set of records that is defined by a table, a query, or an SQL expression. Domain aggregate functions return statistical information about a specific domain or set of records.)';
			sTemp=L_defDomain_TEXT;
			break;
		case 'defDomainFunction':
			L_defDomainFunction_TEXT='(domain aggregate function: A function, such as <b>DAvg</b> or <b>DMax</b>, that is used to calculate statistics over a set of records (a domain).)';
			sTemp=L_defDomainFunction_TEXT;
			break;
		case 'defEcho':
			L_defEcho_TEXT='(echo: The process of Access updating or repainting the screen while a macro is running.)';
			sTemp=L_defEcho_TEXT;
			break;
		case 'defEmbed':
			L_defEmbed_TEXT='(embed: To insert a copy of an OLE object from another application. The source of the object, called the OLE server, can be any application that supports object linking and embedding. Changes to an embedded object are not reflected in the original object.)';
			sTemp=L_defEmbed_TEXT;
			break;
		case 'defEnabledDatabase':
			L_defEnabledDatabase_TEXT='(enabled database: A previous-version database that has been opened in Access 2000 or later without converting its format. To change the design of the database, you must open it in the version of Access in which it was created.)';
			sTemp=L_defEnabledDatabase_TEXT;
			break;
		case 'defExclusive':
			L_defExclusive_TEXT='(exclusive: A type of access to data in a database that is shared over a network. When you open a database in exclusive mode, you prevent others from opening the database.)';
			sTemp=L_defExclusive_TEXT;
			break;
		case 'defExpressionBuilder':
			L_defExpressionBuilder_TEXT='(Expression Builder: An Access tool that you can use to create an expression. It includes a list of common expressions that you can select.)';
			sTemp=L_defExpressionBuilder_TEXT;
			break;
		case 'defExternalDatabase':
			L_defExternalDatabase_TEXT='(external database: The source of the table that is to be linked or imported to the current database, or the destination of a table that is to be exported.)';
			sTemp=L_defExternalDatabase_TEXT;
			break;
		case 'defExternalTable':
			L_defExternalTable_TEXT='(external table: A table outside the open Access database or Access project.)';
			sTemp=L_defExternalTable_TEXT;
			break;
		case 'defFieldDataType':
			L_defFieldDataType_TEXT='(field data type: A characteristic of a field that determines what kind of data it can store. For example, a field whose data type is Text can store data consisting of either text or number characters, but a Number field can  store only numerical data.)';
			sTemp=L_defFieldDataType_TEXT;
			break;
		case 'defFieldList':
			L_defFieldList_TEXT='(field list: A window that lists all the fields in the underlying record source or database object, except in data access page Design view. In data access page Design view, it lists all the record sources and their fields in the underlying database.)';
			sTemp=L_defFieldList_TEXT;
			break;
		case 'defFieldSelector':
			L_defFieldSelector_TEXT='(field selector: A small box or bar that you click to select an entire column in a datasheet.)';
			sTemp=L_defFieldSelector_TEXT;
			break;
		case 'defFilter':
			L_defFilter_TEXT='(filter: A set of criteria applied to data in order to display a subset of the data or to sort the data. In Access, you can use filtering techniques such as Filter By Selection and Filter By Form to filter data.)';
			sTemp=L_defFilter_TEXT;
			break;
		case 'defFilterByForm':
			L_defFilterByForm_TEXT='(Filter By Form: A technique for filtering data that uses a version of the current form or datasheet with empty fields in which you can type the values that you want the filtered records to contain.)';
			sTemp=L_defFilterByForm_TEXT;
			break;
		case 'defFilterBySelection':
			L_defFilterBySelection_TEXT='(Filter By Selection: A technique for filtering records in a form, datasheet, or data access page in which you retrieve only records that contain the selected value.)';
			sTemp=L_defFilterBySelection_TEXT;
			break;
		case 'defFilterForInput':
			L_defFilterForInput_TEXT='(Filter For Input: A technique for filtering records that uses a value or expression that you enter to find only records that contain the value or satisfy the expression.)';
			sTemp=L_defFilterForInput_TEXT;
			break;
		case 'defFixedWidthText':
			L_defFixedWidthText_TEXT='(fixed-width text file: A file containing data where each field has a fixed width.)';
			sTemp=L_defFixedWidthText_TEXT;
			break;
		case 'defFloatingToolbar':
			L_defFloatingToolbar_TEXT='(floating: Able to move freely as its own window. A floating window is always on top. Toolbars, menu bars, the toolbox, and palettes can float.)';
			sTemp=L_defFloatingToolbar_TEXT;
			break;
		case 'defForeignKey':
			L_defForeignKey_TEXT='(foreign key: One or more table fields (columns) that refer to the primary key field or fields in another table. A foreign key indicates how the tables are related.)';
			sTemp=L_defForeignKey_TEXT;
			break;
		case 'defForeignTable':
			L_defForeignTable_TEXT='(foreign table: A table (such as Customer Orders) that contains a foreign key field (such as CustomerID) that\'s the primary key field in another table (such as Customers) in the database and that is usually on the \"many\" side of a one-to-many relationship)';
			sTemp=L_defForeignTable_TEXT;
			break;
		case 'defForm':
			L_defForm_TEXT='(form: An Access database object on which you place controls for taking actions or for entering, displaying, and editing data in fields.)';
			sTemp=L_defForm_TEXT;
			break;
		case 'defFormat':
			L_defFormat_TEXT='(format: Specifies how data is displayed and printed. An Access database provides standard formats for specific data types, as does an Access project for the equivalent SQL data types. You can also create custom formats.)';
			sTemp=L_defFormat_TEXT;
			break;
		case 'defFormModule':
			L_defFormModule_TEXT='(form module: A module that includes code for all event procedures triggered by events occurring on a specific form or its controls.)';
			sTemp=L_defFormModule_TEXT;
			break;
		case 'defFormProperties':
			L_defFormProperties_TEXT='(form properties: Attributes of a form that affect its appearance or behavior. For example, the <b>DefaultView</b> property is a form property that determines whether a form will automatically open in Form view or Datasheet view.)';
			sTemp=L_defFormProperties_TEXT;
			break;
		case 'defFormSelector':
			L_defFormSelector_TEXT='(form selector: The box where the rulers meet, in the upper-left corner of a form in Design view. Use the box to perform form-level operations, such as selecting the form.)';
			sTemp=L_defFormSelector_TEXT;
			break;
		case 'defFormView':
			L_defFormView_TEXT='(Form view: A window that displays a form to either show or accept data. Form view is the primary means of adding and modifying data in tables. You cannot change the design of a form in this view.)';
			sTemp=L_defFormView_TEXT;
			break;
		case 'defFormWindow':
			L_defFormWindow_TEXT='(Form window: A window in which you work with forms in Design view, Form view, Datasheet view, or Print Preview.)';
			sTemp=L_defFormWindow_TEXT;
			break;
		case 'defFrontBackEndApp':
			L_defFrontBackEndApp_TEXT='(front-end/back-end application: An application consisting of a \"back-end\" database file that contains tables, and copies of a \"front-end\" database file that contain all other database objects with links to the \"back-end\" tables.)';
			sTemp=L_defFrontBackEndApp_TEXT;
			break;
		case 'defFunctionProcedure':
			L_defFunctionProcedure_TEXT='(<bterm>Function</bterm> procedure: A procedure that returns a value and that can be used in an expression. You declare a function with the <bterm>Function</bterm> statement and end it with the <bterm>End Function</bterm> statement.)';
			sTemp=L_defFunctionProcedure_TEXT;
			break;
		case 'defGlobalMenuBar':
			L_defGlobalMenuBar_TEXT='(global menu bar: A special custom menu bar that replaces the built-in menu bar in all windows in your application, except where you\'ve specified a custom menu bar for a form or report.)';
			sTemp=L_defGlobalMenuBar_TEXT;
			break;
		case 'defGlobalShortcutMenu':
			L_defGlobalShortcutMenu_TEXT='(global shortcut menu: A custom shortcut menu that replaces the built-in shortcut menu for the following objects: fields in table and query datasheets; forms and form controls in Form view, Datasheet view, and Print Preview; and reports in Print Preview.)';
			sTemp=L_defGlobalShortcutMenu_TEXT;
			break;
		case 'defGlobalVariable':
			L_defGlobalVariable_TEXT='(public variable: A variable that you declare with the <b>Public</b> keyword in the Declarations section of a module. A public variable can be shared by all the procedures in every module in a database.)';
			sTemp=L_defGlobalVariable_TEXT;
			break;
		case 'defGraph':
			L_defGraph_TEXT='(chart: A graphical representation of data in a form, report, or data access page.)';
			sTemp=L_defGraph_TEXT;
			break;
		case 'defGrid':
			L_defGrid_TEXT='(grid (Design view): An arrangement of vertical and horizontal dotted and solid lines that help you position controls precisely when you design a form, report, or data access page.)';
			sTemp=L_defGrid_TEXT;
			break;
		case 'defGroupAccount':
			L_defGroupAccount_TEXT='(group account: A collection of user accounts in a workgroup, identified by group name and personal ID (PID). Permissions assigned to a group apply to all users in the group.)';
			sTemp=L_defGroupAccount_TEXT;
			break;
		case 'defGroupLevel':
			L_defGroupLevel_TEXT='(group level: The depth at which a group in a report or data access page is nested inside other groups. Groups are nested when a set of records is grouped by more than one field, expression, or group record source.)';
			sTemp=L_defGroupLevel_TEXT;
			break;
		case 'defHandle':
			L_defHandle_TEXT='(handle: A unique <b>Integer</b> value (<b>Long</b> in a 32-bit environment) you use to identify and access a Form or Report window. Use the <b>hWnd</b> property to return the handle.)';
			sTemp=L_defHandle_TEXT;
			break;
		case 'defHyperlinkAddress':
			L_defHyperlinkAddress_TEXT='(hyperlink address: The path to a destination such as an object, document, or Web page. A hyperlink address can be a URL (address to an Internet or intranet site) or a UNC network path (address to a file on a local area network).)';
			sTemp=L_defHyperlinkAddress_TEXT;
			break;
		case 'defHyperlinkDataType':
			L_defHyperlinkDataType_TEXT='(Hyperlink data type: A data type for an Access database field that stores hyperlink addresses. An address can have up to four parts and is written using the following format: <i>displaytext</i><b>#</b><i>address</i><b>#</b><i>subaddress</i><b>#</b>.)';
			sTemp=L_defHyperlinkDataType_TEXT;
			break;
		case 'defIDCHTXfiles':
			L_defIDCHTXfiles_TEXT='(IDC/HTX files: Microsoft Internet Information Server uses an IDC file and an HTX file to retrieve data from an ODBC data source and format it as an HTML document.)';
			sTemp=L_defIDCHTXfiles_TEXT;
			break;
		case 'defIdentifier':
			L_defIdentifier_TEXT='(identifier (expressions): An element of an expression that refers to the value of a field, control, or property. For example, Forms![Orders]![OrderID] is an identifier that refers to the value in the OrderID control on the Orders form.)';
			sTemp=L_defIdentifier_TEXT;
			break;
		case 'defImageFrame':
			L_defImageFrame_TEXT='(image control: A control that is used to display a picture on a form, report, or data access page.)';
			sTemp=L_defImageFrame_TEXT;
			break;
		case 'defImport':
			L_defImport_TEXT='(import: To copy data from a text file, spreadsheet, or database table into an Access table. You can use the imported data to create a new table, or you can append (add) it to an existing table that has a matching data structure.)';
			sTemp=L_defImport_TEXT;
			break;
		case 'defImportExportSpec':
			L_defImportExportSpec_TEXT='(import/export specification: A specification that stores the information that Access needs to import or export a fixed-width or delimited text file.)';
			sTemp=L_defImportExportSpec_TEXT;
			break;
		case 'defIndex':
			L_defIndex_TEXT='(index: A feature that speeds up searching and sorting in a table based on key values and can enforce uniqueness on the rows in a table. The primary key of a table is automatically indexed. Some fields can\'t be indexed because of their data type.)';
			sTemp=L_defIndex_TEXT;
			break;
		case 'defIndexesWindow':
			L_defIndexesWindow_TEXT='(Indexes window: In an Access database, a window in which you can view or edit a table\'s indexes or create multiple-field indexes.)';
			sTemp=L_defIndexesWindow_TEXT;
			break;
		case 'defInPlaceActivation':
			L_defInPlaceActivation_TEXT='(in-place activation: Activation of an OLE object\'s OLE server from within a field or control. For example, you can play a waveform audio (.wav) file contained in a control by double-clicking the control.)';
			sTemp=L_defInPlaceActivation_TEXT;
			break;
		case 'defInputMask':
			L_defInputMask_TEXT='(input mask: A format that consists of literal display characters (such as parentheses, periods, and hyphens) and mask characters that specify where data is to be entered as well as what kind of data and how many characters are allowed.)';
			sTemp=L_defInputMask_TEXT;
			break;
		case 'defInstance':
			L_defInstance_TEXT='(instance: An object that is created from the class that contains its definition. For example, multiple instances of a form class share the same code and are loaded with the same controls that were used to design the form class.)';
			sTemp=L_defInstance_TEXT;
			break;
		case 'defIntegerDataType':
			L_defIntegerDataType_TEXT='(Integer data type: A fundamental data type that holds integers. An <b>Integer</b> variable is stored as a 16-bit (2-byte) number ranging in value from -32,768 to 32,767.)';
			sTemp=L_defIntegerDataType_TEXT;
			break;
		case 'defIntrinsicConstant':
			L_defIntrinsicConstant_TEXT='(intrinsic constant: A constant that is supplied by Access, VBA, ADO, or DAO. These constants are available in the Object Browser by clicking <b><globals></b> in each of these libraries.)';
			sTemp=L_defIntrinsicConstant_TEXT;
			break;
		case 'defKeyboardHandler':
			L_defKeyboardHandler_TEXT='(keyboard handler: Code that determines and responds to keys or key combinations pressed by the user.)';
			sTemp=L_defKeyboardHandler_TEXT;
			break;
		case 'defLabel':
			L_defLabel_TEXT='(label: A control that displays descriptive text, such as a title, a caption, or instructions, on a form, report, or data access page. Labels may or may not be attached to another control.)';
			sTemp=L_defLabel_TEXT;
			break;
		case 'defLeftOuterJoin':
			L_defLeftOuterJoin_TEXT='(left outer join: An outer join in which all the records from the left side of the LEFT JOIN operation in the query\'s SQL statement are added to the query\'s results, even if there are no matching values in the joined field from the table on the right.)';
			sTemp=L_defLeftOuterJoin_TEXT;
			break;
		case 'defLibraryDatabase':
			L_defLibraryDatabase_TEXT='(library database: A collection of procedures and database objects that you can call from any application. In order to use the items in the library, you must first establish a reference from the current database to the library database.)';
			sTemp=L_defLibraryDatabase_TEXT;
			break;
		case 'defLink':
			L_defLink_TEXT='(OLE/DDE link: A connection between an OLE object and its OLE server, or between a Dynamic Data Exchange (DDE) source document and a destination document.)';
			sTemp=L_defLink_TEXT;
			break;
		case 'defListIndex':
			L_defListIndex_TEXT='(list index: The sequence of numbers for items in a list, starting with 0 for the first item, 1 for the second item, and so on.)';
			sTemp=L_defListIndex_TEXT;
			break;
		case 'defLocked':
			L_defLocked_TEXT='(locked: The condition of a record, recordset, or database that makes it read-only to all users except the user currently modifying it.)';
			sTemp=L_defLocked_TEXT;
			break;
		case 'defLookupField':
			L_defLookupField_TEXT='(Lookup field: A field, used on a form or report in an Access database, that either displays a list of values retrieved from a table or query, or stores a static set of values.)';
			sTemp=L_defLookupField_TEXT;
			break;
		case 'defMacroGroup':
			L_defMacroGroup_TEXT='(macro group: A collection of related macros that are stored together under a single macro name. The collection is often referred to simply as a macro.)';
			sTemp=L_defMacroGroup_TEXT;
			break;
		case 'defMainForm':
			L_defMainForm_TEXT='(main form: A form that contains one or more subforms.)';
			sTemp=L_defMainForm_TEXT;
			break;
		case 'defMakeTableQuery':
			L_defMakeTableQuery_TEXT='(make-table query: A query (SQL statement) that creates a new table and then creates records (rows) in it by copying records from an existing table.)';
			sTemp=L_defMakeTableQuery_TEXT;
			break;
		case 'defManualLink':
			L_defManualLink_TEXT='(manual link: A link that requires you to take action to update your data after the data in the source document changes.)';
			sTemp=L_defManualLink_TEXT;
			break;
		case 'defManyToManyRelationship':
			L_defManyToManyRelationship_TEXT='(many-to-many relationship: An association between two tables in which one record in either table can relate to many records in the other table. To establish one, create a third table and add the primary key fields from the other two tables to this table.)';
			sTemp=L_defManyToManyRelationship_TEXT;
			break;
		case 'defMemoDataType':
			L_defMemoDataType_TEXT='(Memo data type: In a Microsoft Access database, this is a field data type. Memo fields can contain up to 65,535 characters.)';
			sTemp=L_defMemoDataType_TEXT;
			break;
		case 'defModuleLevel':
			L_defModuleLevel_TEXT='(module level: Describes any variable or constant declared in the Declarations section of a module or outside of a procedure. Variables or constants declared at the module level are available to all procedures in a module.)';
			sTemp=L_defModuleLevel_TEXT;
			break;
		case 'defModuleLevelVariable':
			L_defModuleLevelVariable_TEXT='(module-level variable: A variable that\'s declared in the Declarations section of a module by using the <b>Private</b> keyword. These variables are available to all procedures in the module.)';
			sTemp=L_defModuleLevelVariable_TEXT;
			break;
		case 'defMoveMode':
			L_defMoveMode_TEXT='(Move mode: The mode in which you can move column(s) in Datasheet view by using the left and right arrow keys.)';
			sTemp=L_defMoveMode_TEXT;
			break;
		case 'defMSAccessObject':
			L_defMSAccessObject_TEXT='(Microsoft Access object: An object defined by Access that relates to Access, its interface, or an application\'s forms, reports, and data access pages, and that you use to program the elements of the interface used for entering and displaying data.)';
			sTemp=L_defMSAccessObject_TEXT;
			break;
		case 'defMSJetDatabaseEngine':
			L_defMSJetDatabaseEngine_TEXT='(Microsoft Jet database engine: The part of the Access database system that retrieves and stores data in user and system databases. It can be thought of as a data manager upon which database systems, such as Access, are built.)';
			sTemp=L_defMSJetDatabaseEngine_TEXT;
			break;
		case 'defMultiUserDatabase':
			L_defMultiUserDatabase_TEXT='(multiuser (shared) database: A database that permits more than one user to access and modify the same set of data at the same time.)';
			sTemp=L_defMultiUserDatabase_TEXT;
			break;
		case 'defNavigationButtons':
			L_defNavigationButtons_TEXT='(navigation buttons: The buttons that you use to move through records. They are located in the lower-left corner of the Datasheet view and Form view windows. They are also available during previewing so that you can move through the pages of your document.)';
			sTemp=L_defNavigationButtons_TEXT;
			break;
		case 'defNormalize':
			L_defNormalize_TEXT='(normalize: To minimize the duplication of information in a relational database through effective table design. You can use the Table Analyzer Wizard to normalize your database.)';
			sTemp=L_defNormalize_TEXT;
			break;
		case 'defNull':
			L_defNull_TEXT='(<b>Null</b>: A value you can enter in a field or use in expressions or queries to indicate missing or unknown data. In Visual Basic, the <B>Null</B> keyword indicates a <B>Null</B> value. Some fields, such as primary key fields, can\'t contain <b>Null</b>.)';
			sTemp=L_defNull_TEXT;
			break;
		case 'defNullField':
			L_defNullField_TEXT='(null field: A field containing a <b>Null</b> value. A null field isn\'t the same as a field that contains a zero-length string (\" \") or a field with a value of 0.)';
			sTemp=L_defNullField_TEXT;
			break;
		case 'defNumberDataType':
			L_defNumberDataType_TEXT='(Number data type: In a Microsoft Access database, a field data type designed for numerical data that will be used in mathematical calculations. Use the Currency data type, however, to display or calculate currency values.)';
			sTemp=L_defNumberDataType_TEXT;
			break;
		case 'defObjectApplication':
			L_defObjectApplication_TEXT='(OLE server: An application or DLL that supplies a linked or embedded OLE object to another application. For example, if an OLE object in an Access database contains a Microsoft Excel worksheet, Excel is the OLE server.)';
			sTemp=L_defObjectApplication_TEXT;
			break;
		case 'defObjectDataType':
			L_defObjectDataType_TEXT='(Object data type: A fundamental data type representing any object that can be recognized by Visual Basic. Although you can declare any object variable as type <b>Object</b>, it is best to declare object variables according to their specific types.)';
			sTemp=L_defObjectDataType_TEXT;
			break;
		case 'defObjectLibrary':
			L_defObjectLibrary_TEXT='(object library: A file that contains definitions of objects and their methods and properties. The file that contains an object library typically has the extension .olb.)';
			sTemp=L_defObjectLibrary_TEXT;
			break;
		case 'defODBCConnectStringBuilder':
			L_defODBCConnectStringBuilder_TEXT='(ODBC Connection String Builder: An Access tool that you can use to connect to an SQL database when you create a pass-through query. If you save the query, the connection string is stored with the query.)';
			sTemp=L_defODBCConnectStringBuilder_TEXT;
			break;
		case 'defODBCDatabase':
			L_defODBCDatabase_TEXT='(ODBC database: A database for which an Open Database Connectivity (ODBC) driver that you can use for importing, linking to, or exporting data is supplied.)';
			sTemp=L_defODBCDatabase_TEXT;
			break;
		case 'defODBCDataSource':
			L_defODBCDataSource_TEXT='(ODBC data source: Data and the information needed to access that data from programs and databases that support the Open Database Connectivity (ODBC) protocol.)';
			sTemp=L_defODBCDataSource_TEXT;
			break;
		case 'defODBCDirect':
			L_defODBCDirect_TEXT='(ODBCDirect: A technology that allows you to access ODBC data sources directly by using DAO features that bypass the Microsoft Jet database engine.)';
			sTemp=L_defODBCDirect_TEXT;
			break;
		case 'defOLEObject':
			L_defOLEObject_TEXT='(OLE object: An object supporting the OLE protocol for object linking and embedding. An OLE object from an OLE server (for example, a Windows Paint picture or a Microsoft Excel spreadsheet) can be linked or embedded in a field, form, or report.)';
			sTemp=L_defOLEObject_TEXT;
			break;
		case 'defOLEObjectDataType':
			L_defOLEObjectDataType_TEXT='(OLE Object data type: A field data type that you use for objects created in other applications that can be linked or embedded (inserted) in an Access database.)';
			sTemp=L_defOLEObjectDataType_TEXT;
			break;
		case 'defOneToMany':
			L_defOneToMany_TEXT='(one-to-many relationship: An association between two tables in which the primary key value of each record in the primary table corresponds to the value in the matching field or fields of many records in the related table.)';
			sTemp=L_defOneToMany_TEXT;
			break;
		case 'defOneToOne':
			L_defOneToOne_TEXT='(one-to-one relationship: An association between two tables in which the primary key value of each record in the primary table corresponds to the value in the matching field or fields of one, and only one, record in the related table.)';
			sTemp=L_defOneToOne_TEXT;
			break;
		case 'defOptionButton':
			L_defOptionButton_TEXT='(option button: A control, also called a radio button, that is typically used as part of an option group to present alternatives on a form, report, or data access page. The user cannot select more than one option.)';
			sTemp=L_defOptionButton_TEXT;
			break;
		case 'defOptionGroup':
			L_defOptionGroup_TEXT='(option group: A frame that can contain check boxes, toggle buttons, and option buttons on a form, report, or data access page. You use an option group to present alternatives from which the user can select a single option.)';
			sTemp=L_defOptionGroup_TEXT;
			break;
		case 'defOuterJoin':
			L_defOuterJoin_TEXT='(outer join: A join in which each matching record from two tables is combined into one record in the query\'s results, and one table contributes all of its records, even if the values in the joined field don\'t match those in the other table.)';
			sTemp=L_defOuterJoin_TEXT;
			break;
		case 'defOwner':
			L_defOwner_TEXT='(owner: When security is being used, the user account that has control over a database or database object. By default, the user account that created a database or database object is the owner.)';
			sTemp=L_defOwner_TEXT;
			break;
		case 'defPage':
			L_defPage_TEXT='(page (data storage): A portion of the database (.mdb) file in which record data is stored. Depending on the size of the records, a page (4 KB in size) may contain more than one record.)';
			sTemp=L_defPage_TEXT;
			break;
		case 'defParameterQuery':
			L_defParameterQuery_TEXT='(parameter query: A query in which a user interactively specifies one or more criteria values. A parameter query is not a separate kind of query; rather, it extends the flexibility of a query.)';
			sTemp=L_defParameterQuery_TEXT;
			break;
		case 'defPassThroughQuery':
			L_defPassThroughQuery_TEXT='(pass-through query: An SQL-specific query you use to send commands directly to an ODBC database server. By using pass-through queries, you work directly with the tables on the server instead of having the Microsoft Jet database engine process the data.)';
			sTemp=L_defPassThroughQuery_TEXT;
			break;
		case 'defPermissions':
			L_defPermissions_TEXT='(permissions: A set of attributes that specifies what kind of access a user has to data or objects in a database.)';
			sTemp=L_defPermissions_TEXT;
			break;
		case 'defPin':
			L_defPin_TEXT='(personal ID: A case-sensitive alphanumeric string that is 4 to 20 characters long and that Access uses in combination with the account name to identify a user or group in an Access workgroup.)';
			sTemp=L_defPin_TEXT;
			break;
		case 'defPivotTable':
			L_defPivotTable_TEXT='(PivotTable form: An interactive table that summarizes large amounts of data by using format and calculation methods that you choose. You can rotate its row and column headings to view the data in different ways, similar to an Excel PivotTable report.)';
			sTemp=L_defPivotTable_TEXT;
			break;
		case 'defPlusPointer':
			L_defPlusPointer_TEXT='(plus pointer: The pointer that appears when you move the pointer to the left edge of a field in a datasheet. When the plus pointer appears, you can click to select the entire field.)';
			sTemp=L_defPlusPointer_TEXT;
			break;
		case 'defPopup':
			L_defPopup_TEXT='(pop-up form: A form that stays on top of other windows. A pop-up form can be modal or modeless.)';
			sTemp=L_defPopup_TEXT;
			break;
		case 'defPrimaryKey':
			L_defPrimaryKey_TEXT='(primary key: One or more fields (columns) whose values uniquely identify each record in a table. A primary key cannot allow <b>Null</b> values and must always have a unique index. A primary key is used to relate a table to foreign keys in other tables.)';
			sTemp=L_defPrimaryKey_TEXT;
			break;
		case 'defPrimaryTable':
			L_defPrimaryTable_TEXT='(primary table: The \"one\" side of two related tables in a one-to-many relationship. A primary table should have a primary key and each record should be unique.)';
			sTemp=L_defPrimaryTable_TEXT;
			break;
		case 'defPrivateProcedure':
			L_defPrivateProcedure_TEXT='(private procedure: A <B>Sub</B> or <B>Function</B> procedure is declared as private by using the <B>Private</B> keyword in a <B>Declare</B> statement. Private procedures are available for use only by other procedures within the same module.)';
			sTemp=L_defPrivateProcedure_TEXT;
			break;
		case 'defProcedure':
			L_defProcedure_TEXT='(procedure: A sequence of declarations and statements in a module that are executed as a unit. Procedures in Visual Basic include both <b>Sub</b> and <b>Function</b> procedures.)';
			sTemp=L_defProcedure_TEXT;
			break;
		case 'defProcedureLevel':
			L_defProcedureLevel_TEXT='(procedure level: Describes any variables or constants declared within a procedure. Variables and constants declared within a procedure are available to that procedure only.)';
			sTemp=L_defProcedureLevel_TEXT;
			break;
		case 'defProcedureLevelVariable':
			L_defProcedureLevelVariable_TEXT='(procedure-level variable: A variable that\'s declared within a procedure. Procedure-level variables are always private to the procedure in which they\'re declared.)';
			sTemp=L_defProcedureLevelVariable_TEXT;
			break;
		case 'defProject':
			L_defProject_TEXT='(project: The set of all code modules in a database, including standard modules and class modules. By default, the project has the same name as the database.)';
			sTemp=L_defProject_TEXT;
			break;
		case 'defPropertySheet':
			L_defPropertySheet_TEXT='(property sheet: A window that is used to view or modify the properties of various objects such as tables, queries, fields, forms, reports, data access pages, and controls.)';
			sTemp=L_defPropertySheet_TEXT;
			break;
		case 'defPublish':
			L_defPublish_TEXT='(publish: The process of exporting datasheets, forms, or reports to static HTML or server-generated HTML, or creating data access pages and setting up these files and all related files as a Web application on a Web server such as Microsoft IIS.)';
			sTemp=L_defPublish_TEXT;
			break;
		case 'defQBEGrid':
			L_defQBEGrid_TEXT='(design grid: The grid that you use to design a query or filter in query Design view or in the Advanced Filter/Sort window. For queries, this grid was formerly known as the QBE grid.)';
			sTemp=L_defQBEGrid_TEXT;
			break;
		case 'defQuery':
			L_defQuery_TEXT='(query: A question about the data stored in your tables, or a request to perform an action on the data. A query can bring together data from multiple tables to serve as the source of data for a form, report, or data access page.)';
			sTemp=L_defQuery_TEXT;
			break;
		case 'defQueryWindow':
			L_defQueryWindow_TEXT='(Query window: A window in which you work with queries in Design view, Datasheet view, SQL view, or Print Preview.)';
			sTemp=L_defQueryWindow_TEXT;
			break;
		case 'defRecordNumberBox':
			L_defRecordNumberBox_TEXT='(record number box: A small box that displays the current record number in the lower-left corner in Datasheet view and Form view. To move to a specific record, you can type the record number in the box, and press ENTER.)';
			sTemp=L_defRecordNumberBox_TEXT;
			break;
		case 'defRecordSelector':
			L_defRecordSelector_TEXT='(record selector: A small box or bar to the left of a record that you can click to select the entire record in Datasheet view and Form view.)';
			sTemp=L_defRecordSelector_TEXT;
			break;
		case 'defRecordset':
			L_defRecordset_TEXT='(recordset: The collective name given to table-, dynaset-, and snapshot-type <b>Recordset</b> objects, which are sets of records that behave as objects.)';
			sTemp=L_defRecordset_TEXT;
			break;
		case 'defRecordSource':
			L_defRecordSource_TEXT='(record source: The underlying source of data for a form, report, or data access page. In an Access database, it could be a table, query, or SQL statement. In an Access project, it could be a table, view, SQL statement, or stored procedure.)';
			sTemp=L_defRecordSource_TEXT;
			break;
		case 'defReferencedDatabase':
			L_defReferencedDatabase_TEXT='(referenced database: The Access database to which the user has established a reference from the current database. The user can create a reference to a database and then call procedures within standard modules in that database.)';
			sTemp=L_defReferencedDatabase_TEXT;
			break;
		case 'defReferencingDatabase':
			L_defReferencingDatabase_TEXT='(referencing database: The current Access database from which the user has created a reference to another Access database. The user can create a reference to a database and then call procedures within standard modules in that database.)';
			sTemp=L_defReferencingDatabase_TEXT;
			break;
		case 'defReferentialIntegrity':
			L_defReferentialIntegrity_TEXT='(referential integrity: Rules that you follow to preserve the defined relationships between tables when you enter or delete records.)';
			sTemp=L_defReferentialIntegrity_TEXT;
			break;
		case 'defRefresh':
			L_defRefresh_TEXT='(refresh: In an Access database, to redisplay the records in a form or datasheet to reflect changes that other users have made. In an Access project, to rerun a query underlying the active form or datasheet in order to reflect changes to records.)';
			sTemp=L_defRefresh_TEXT;
			break;
		case 'defRelationship':
			L_defRelationship_TEXT='(relationship: An association that is established between common fields (columns) in two tables. A relationship can be one-to-one, one-to-many, or many-to-many.)';
			sTemp=L_defRelationship_TEXT;
			break;
		case 'defRelationshipsWindow':
			L_defRelationshipsWindow_TEXT='(Relationships window: A window in which you view, create, and modify relationships between tables and queries.)';
			sTemp=L_defRelationshipsWindow_TEXT;
			break;
		case 'defRepaint':
			L_defRepaint_TEXT='(repaint: To redraw the screen. The <b>Repaint</b> method completes any pending screen updates for a specified form.)';
			sTemp=L_defRepaint_TEXT;
			break;
		case 'defReport':
			L_defReport_TEXT='(report: An Access database object that prints information that is formatted and organized according to your specifications. Examples of reports are sales summaries, phone lists, and mailing labels.)';
			sTemp=L_defReport_TEXT;
			break;
		case 'defReportModule':
			L_defReportModule_TEXT='(report module: A module that includes code for all event procedures triggered by events occurring on a specific report or its controls.)';
			sTemp=L_defReportModule_TEXT;
			break;
		case 'defReportSelector':
			L_defReportSelector_TEXT='(report selector: The box where the rulers meet in the upper-left corner of a report in Design view. Use the box to perform report-level operations, such as selecting the report.)';
			sTemp=L_defReportSelector_TEXT;
			break;
		case 'defReportWindow':
			L_defReportWindow_TEXT='(Report window: A window in which you work with reports in Design view, Layout Preview, or Print Preview.)';
			sTemp=L_defReportWindow_TEXT;
			break;
		case 'defRequery':
			L_defRequery_TEXT='(requery: To rerun a query underlying the active form or datasheet in order to reflect changes to the records, display newly added records, and eliminate deleted records.)';
			sTemp=L_defRequery_TEXT;
			break;
		case 'defReservedWord':
			L_defReservedWord_TEXT='(keyword: A word that\'s part of the Visual Basic for Applications programming language. Keywords include the names of statements, data types, methods, operators, objects, and predefined functions. Don\'t use keywords for variable or object names.)';
			sTemp=L_defReservedWord_TEXT;
			break;
		case 'defRightOuterJoin':
			L_defRightOuterJoin_TEXT='(right outer join: An outer join in which all the records from the right side of the RIGHT JOIN operation in the query\'s SQL statement are added to the query\'s results, even if there are no matching values in the joined field from the table on the left.)';
			sTemp=L_defRightOuterJoin_TEXT;
			break;
		case 'defRowSelector':
			L_defRowSelector_TEXT='(row selector: A small box or bar that, when clicked, selects an entire row in table or macro Design view, or when you sort and group records in report Design view.)';
			sTemp=L_defRowSelector_TEXT;
			break;
		case 'defScriptWindow':
			L_defScriptWindow_TEXT='(Macro window: The window in which you create and modify macros.)';
			sTemp=L_defScriptWindow_TEXT;
			break;
		case 'defSection':
			L_defSection_TEXT='(section: A part of a form, report, or data access page such as a header, footer, or detail section.)';
			sTemp=L_defSection_TEXT;
			break;
		case 'defSectionSelector':
			L_defSectionSelector_TEXT='(section selector: The box on the left side of a section bar when an object is open in Design view. Use the box to perform section-level operations, such as selecting the section.)';
			sTemp=L_defSectionSelector_TEXT;
			break;
		case 'defSecureSystem':
			L_defSecureSystem_TEXT='(security-enabled workgroup: An Access workgroup in which users log on with a user name and password and in which access to database objects is restricted according to permissions granted to specific user accounts and groups.)';
			sTemp=L_defSecureSystem_TEXT;
			break;
		case 'defSelectionRectangle':
			L_defSelectionRectangle_TEXT='(selection rectangle: The rectangle formed by the currently selected rows (records) and columns (fields) within Datasheet view.)';
			sTemp=L_defSelectionRectangle_TEXT;
			break;
		case 'defSelectQuery':
			L_defSelectQuery_TEXT='(select query: A query that asks a question about the data stored in your tables and returns a result set in the form of a datasheet, without changing the data.)';
			sTemp=L_defSelectQuery_TEXT;
			break;
		case 'defSelfJoin':
			L_defSelfJoin_TEXT='(self-join: A join in which a table is joined to itself. Records from the table are combined with other records from the same table when there are matching values in the joined fields.)';
			sTemp=L_defSelfJoin_TEXT;
			break;
		case 'defSeparator':
			L_defSeparator_TEXT='(separator: A character that separates units of text or numbers.)';
			sTemp=L_defSeparator_TEXT;
			break;
		case 'defSession':
			L_defSession_TEXT='(session: A sequence of operations performed by the Microsoft Jet database engine that begins when a user logs on and ends when the user logs off. All operations during a session form one transaction scope and are subject to the user\'s logon permissions.)';
			sTemp=L_defSession_TEXT;
			break;
		case 'defSnapshot':
			L_defSnapshot_TEXT='(snapshot: A static image of a set of data, such as the records displayed as the result of a query. Snapshot-type <b>Recordset</b> objects can be created from a base table, a query, or another recordset.)';
			sTemp=L_defSnapshot_TEXT;
			break;
		case 'defSQLDatabaseODBC':
			L_defSQLDatabaseODBC_TEXT='(SQL database: A database that is based on Structured Query Language (SQL).)';
			sTemp=L_defSQLDatabaseODBC_TEXT;
			break;
		case 'defSQLSpecificQuery':
			L_defSQLSpecificQuery_TEXT='(SQL-specific query: A query that consists of an SQL statement. Subqueries and pass-through, union, and data-definition queries are SQL-specific queries.)';
			sTemp=L_defSQLSpecificQuery_TEXT;
			break;
		case 'defSQLString':
			L_defSQLString_TEXT='(SQL string/statement: An expression that defines an SQL command, such as <b>SELECT</b>, <b>UPDATE</b>, or <b>DELETE</b>, and includes clauses such as WHERE and ORDER BY. SQL strings/statements are typically used in queries and in aggregate functions.)';
			sTemp=L_defSQLString_TEXT;
			break;
		case 'defSQLView':
			L_defSQLView_TEXT='(SQL view: A window that displays the SQL statement for the current query or that is used to create an SQL-specific query (union, pass-through, or data definition). When you create a query in Design view, Access constructs the SQL equivalent in SQL view.)';
			sTemp=L_defSQLView_TEXT;
			break;
		case 'defStandardModule':
			L_defStandardModule_TEXT='(standard module: A module in which you can place <b>Sub</b> and <b>Function</b> procedures that you want to be available to other procedures throughout your database.)';
			sTemp=L_defStandardModule_TEXT;
			break;
		case 'defStoredProcedure':
			L_defStoredProcedure_TEXT='(stored procedure: A precompiled collection of SQL statements and optional control-of-flow statements that is stored under a name and processed as a unit. The collection is stored in an SQL database and can be run with one call from an application.)';
			sTemp=L_defStoredProcedure_TEXT;
			break;
		case 'defStringDelimiter':
			L_defStringDelimiter_TEXT='(string delimiter: Text characters that set apart a string embedded within a string. Single quotation marks (\') and double quotation marks (\") are string delimiters.)';
			sTemp=L_defStringDelimiter_TEXT;
			break;
		case 'defSubform':
			L_defSubform_TEXT='(subform: A form contained within another form or a report.)';
			sTemp=L_defSubform_TEXT;
			break;
		case 'defSubformSubreport':
			L_defSubformSubreport_TEXT='(subform/subreport control: A control that displays a subform in a form or a subform or a subreport in a report.)';
			sTemp=L_defSubformSubreport_TEXT;
			break;
		case 'defSubProcedure':
			L_defSubProcedure_TEXT='(<b>Sub </b> procedure: A procedure that carries out an operation. Unlike a <b>Function</b> procedure, a <b>Sub</b> procedure doesn\'t return a value. You begin a <b>Sub</b> procedure with a <b>Sub</b> statement and end it with an <b>End Sub</b> statement.)';
			sTemp=L_defSubProcedure_TEXT;
			break;
		case 'defSubquery':
			L_defSubquery_TEXT='(subquery: An <b>SQL SELECT</b> statement that is inside another select or action query.)';
			sTemp=L_defSubquery_TEXT;
			break;
		case 'defSubreport':
			L_defSubreport_TEXT='(subreport: A report that is contained within another report.)';
			sTemp=L_defSubreport_TEXT;
			break;
		case 'defSystemObjects':
			L_defSystemObjects_TEXT='(system object: Database objects that are defined by the system, such as the table MSysIndexes, or by the user. You can create a system object by naming the object with USys as the first four characters in the object name.)';
			sTemp=L_defSystemObjects_TEXT;
			break;
		case 'defTabControl':
			L_defTabControl_TEXT='(tab control: A control that you can use to construct a single form or dialog box that contains several pages, each with a tab, and each containing similar controls, such as text boxes or option buttons. When a user clicks a tab, that page becomes active.)';
			sTemp=L_defTabControl_TEXT;
			break;
		case 'defTable':
			L_defTable_TEXT='(table: A database object that stores data in records (rows) and fields (columns). The data is usually about a particular category of things, such as employees or orders.)';
			sTemp=L_defTable_TEXT;
			break;
		case 'defTableProperties':
			L_defTableProperties_TEXT='(table properties: In an Access database, attributes of a table that affect the appearance or behavior of the table as a whole. Table properties are set in table Design view, as are field properties.)';
			sTemp=L_defTableProperties_TEXT;
			break;
		case 'defTableWindow':
			L_defTableWindow_TEXT='(Table window: In an Access database, a window in which you work with tables in Design view or Datasheet view.)';
			sTemp=L_defTableWindow_TEXT;
			break;
		case 'defTextBox':
			L_defTextBox_TEXT='(text box: A control, also called an edit field, that is used on a form, report, or data access page to display text or accept data entry. It can have a label attached to it.)';
			sTemp=L_defTextBox_TEXT;
			break;
		case 'defTextDataType':
			L_defTextDataType_TEXT='(Text data type: In a Microsoft Access database, this is a field data type. Text fields can contain up to 255 characters or the number of characters specified by the <B>FieldSize</B> property, whichever is less.)';
			sTemp=L_defTextDataType_TEXT;
			break;
		case 'defToggleButton':
			L_defToggleButton_TEXT='(toggle button: A control that is used to provide on/off options on a form or report. It can display either text or a picture and can be stand-alone or part of an option group.)';
			sTemp=L_defToggleButton_TEXT;
			break;
		case 'defToolbox':
			L_defToolbox_TEXT='(toolbox: A set of tools that is available in Design view to add controls to a form, report, or data access page. The toolset available in page Design view is different from the toolset available in form and report Design view.)';
			sTemp=L_defToolbox_TEXT;
			break;
		case 'defToolProperties':
			L_defToolProperties_TEXT='(default control style: The default property setting of a control type. You customize a control type before you create two or more similar controls to avoid customizing each control individually.)';
			sTemp=L_defToolProperties_TEXT;
			break;
		case 'defToolTips':
			L_defToolTips_TEXT='(ToolTips: Brief descriptions of the names of buttons and boxes on toolbars and in the toolbox. A ToolTip is displayed when the mouse pointer rests on the button or combo box.)';
			sTemp=L_defToolTips_TEXT;
			break;
		case 'defTotalsQuery':
			L_defTotalsQuery_TEXT='(totals query: A query that displays a summary calculation, such as an average or sum, for values in various fields from a table or tables. A totals query is not a separate kind of query; rather, it extends the flexibility of select queries.)';
			sTemp=L_defTotalsQuery_TEXT;
			break;
		case 'defTransaction':
			L_defTransaction_TEXT='(transaction: A series of changes made to a database\'s data and schema.)';
			sTemp=L_defTransaction_TEXT;
			break;
		case 'defUnboundField':
			L_defUnboundField_TEXT='(unbound control: A control that is not connected to a field in an underlying table, query, or SQL statement. An unbound control is often used to display informational text or decorative pictures.)';
			sTemp=L_defUnboundField_TEXT;
			break;
		case 'defUnboundFormReport':
			L_defUnboundFormReport_TEXT='(unbound form or report: A form or report that isn\'t connected to a record source such as a table, query, or SQL statement. (The form\'s or report\'s <b>RecordSource</b> property is blank.))';
			sTemp=L_defUnboundFormReport_TEXT;
			break;
		case 'defUnboundObjectFrame':
			L_defUnboundObjectFrame_TEXT='(unbound object frame: A control that you place on a form or report to contain an unbound object. An unbound object is an object, such as a picture, whose value isn\'t derived from data stored in a table.)';
			sTemp=L_defUnboundObjectFrame_TEXT;
			break;
		case 'defUnionQuery':
			L_defUnionQuery_TEXT='(union query: A query that uses the <b>UNION</b> operator to combine the results of two or more select queries.)';
			sTemp=L_defUnionQuery_TEXT;
			break;
		case 'defUniqueIndex':
			L_defUniqueIndex_TEXT='(unique index: An index defined by setting a field\'s <b>Indexed</b> property to <b>Yes (No Duplicates)</b>. A unique index will not allow duplicate entries in the indexed field. Setting a field as the primary key automatically defines the field as unique.)';
			sTemp=L_defUniqueIndex_TEXT;
			break;
		case 'defUpdate':
			L_defUpdate_TEXT='(update: To accept changes to data in a record. The changes are saved in the database when you move to another record on a form, datasheet, or data access page, or when you explicitly save the record.)';
			sTemp=L_defUpdate_TEXT;
			break;
		case 'defUpdateQuery':
			L_defUpdateQuery_TEXT='(update query: An action query (SQL statement) that changes a set of records according to criteria (search conditions) that you specify.)';
			sTemp=L_defUpdateQuery_TEXT;
			break;
		case 'defUserAccount':
			L_defUserAccount_TEXT='(user account: An account identified by a user name and personal ID (PID) that is created to manage the user\'s permissions to access database objects in an Access workgroup.)';
			sTemp=L_defUserAccount_TEXT;
			break;
		case 'defUserDefinedCollection':
			L_defUserDefinedCollection_TEXT='(user-defined collection: A collection that you create by adding objects to a <b>Collection</b> object. Items in a collection defined by the <b>Collection</b> object are indexed, beginning with 1.)';
			sTemp=L_defUserDefinedCollection_TEXT;
			break;
		case 'defUserDefinedFunction':
			L_defUserDefinedFunction_TEXT='(user-defined function: A query that takes input parameters and returns a result like a stored procedure. Types: scalar (multistatement; returns one value), inline (one statement; an updateable table value), and table (multistatement; table value).)';
			sTemp=L_defUserDefinedFunction_TEXT;
			break;
		case 'defUserDefinedObject':
			L_defUserDefinedObject_TEXT='(user-defined object: A custom object that is defined in a form or report class module. In a class module, you can create methods and properties for a new object, create a new instance of this object, and manipulate it with these properties and methods.)';
			sTemp=L_defUserDefinedObject_TEXT;
			break;
		case 'defUserLevelSecurity':
			L_defUserLevelSecurity_TEXT='(user-level security: When using user-level security in an Access database, a database administrator or an object\'s owner can grant individual users or groups of users specific permissions to tables, queries, forms, reports, and macros.)';
			sTemp=L_defUserLevelSecurity_TEXT;
			break;
		case 'defUsersGroup':
			L_defUsersGroup_TEXT='(Users group: The group account that contains all user accounts. Access automatically adds user accounts to the Users group when you create them.)';
			sTemp=L_defUsersGroup_TEXT;
			break;
		case 'defValidation':
			L_defValidation_TEXT='(validation: The process of checking whether entered data meets certain conditions or limitations.)';
			sTemp=L_defValidation_TEXT;
			break;
		case 'defValidationRule':
			L_defValidationRule_TEXT='(validation rule: A property that defines valid input values for a field or record in a table, or a control on a form. Access displays the message specified in the <b>ValidationText</b> property when the rule is violated.)';
			sTemp=L_defValidationRule_TEXT;
			break;
		case 'defVBIdentifier':
			L_defVBIdentifier_TEXT='(identifier (Visual Basic): A data member in a Visual Basic code module. An identifier can be a <b>Sub</b>, <b>Function</b>, or <b>Property</b> procedure, a variable, a constant, a <b>DECLARE</b> statement, or a user-defined data type.)';
			sTemp=L_defVBIdentifier_TEXT;
			break;
		case 'defWhereClause':
			L_defWhereClause_TEXT='(WHERE clause: The part of an SQL statement that specifies which records to retrieve.)';
			sTemp=L_defWhereClause_TEXT;
			break;
		case 'defWorkGroup':
			L_defWorkGroup_TEXT='(workgroup: A group of users in a multiuser environment who share data and the same workgroup information file.)';
			sTemp=L_defWorkGroup_TEXT;
			break;
		case 'defWorkgroupID':
			L_defWorkgroupID_TEXT='(workgroup ID: A case-sensitive alphanumeric string that is 4 to 20 characters long and that you enter when creating a new workgroup information file by using the Workgroup Administrator. This uniquely identifies the Admin group for this workgroup file.)';
			sTemp=L_defWorkgroupID_TEXT;
			break;
		case 'defWorkgroupInformationFile':
			L_defWorkgroupInformationFile_TEXT='(workgroup information file: A file that Access reads at startup that contains information about the users in a workgroup. This information includes users\' account names, their passwords, and the groups of which they are members.)';
			sTemp=L_defWorkgroupInformationFile_TEXT;
			break;
		case 'defYesNoDataType':
			L_defYesNoDataType_TEXT='(Yes/No data type: A field data type that you use for fields that will contain only one of two values, such as Yes or No and True or False. Null values are not allowed.)';
			sTemp=L_defYesNoDataType_TEXT;
			break;
		case 'defZeroLengthString':
			L_defZeroLengthString_TEXT='(zero-length string: A string that contains no characters. You can use a zero-length string to indicate that you know no value exists for a field. You enter a zero-length string by typing two double quotation marks with no space between them (\" \").)';
			sTemp=L_defZeroLengthString_TEXT;
			break;
		case 'IDH_acdefAbsolutePositioning':
			L_IDH_acdefAbsolutePositioning_TEXT='(absolute or fixed positioning: Places the element relative to either the element\'s parent or, if there isn\'t one, the body. Values for the element\'s <b>Left</b> and <b>Top</b> properties are relative to the upper-left corner of the element\'s parent.)';
			sTemp=L_IDH_acdefAbsolutePositioning_TEXT;
			break;
		case 'IDH_acdefAccessProject':
			L_IDH_acdefAccessProject_TEXT='(Microsoft Access project: An Access file that connects to a Microsoft SQL Server database and is used to create client/server applications. A project file doesn\'t contain any data or data-definition-based objects such as tables and views.)';
			sTemp=L_IDH_acdefAccessProject_TEXT;
			break;
		case 'IDH_acdefAnonymousReplica':
			L_IDH_acdefAnonymousReplica_TEXT='(anonymous replica: In an Access database, a special type of replica in which you don\'t keep track of individual users. The anonymous replica is particularly useful in an Internet situation where you expect many users to download replicas.)';
			sTemp=L_IDH_acdefAnonymousReplica_TEXT;
			break;
		case 'IDH_acdefBinaryDataType':
			L_IDH_acdefBinaryDataType_TEXT='(binary data type: In an Access project, a fixed-length data type with a maximum of 8,000 bytes of binary data.)';
			sTemp=L_IDH_acdefBinaryDataType_TEXT;
			break;
		case 'IDH_acdefBitDataType':
			L_IDH_acdefBitDataType_TEXT='(bit data type: In an Access project, a data type that stores either a 1 or 0 value. Integer values other than 1 or 0 are accepted, but they are always interpreted as 1.)';
			sTemp=L_IDH_acdefBitDataType_TEXT;
			break;
		case 'IDH_acdefBody':
			L_IDH_acdefBody_TEXT='(body: The basic design surface of a data access page. It displays informational text, controls bound to data, and sections.)';
			sTemp=L_IDH_acdefBody_TEXT;
			break;
		case 'IDH_acdefBoundHTMLControl':
			L_IDH_acdefBoundHTMLControl_TEXT='(bound span control: A control that is used on a data access page to bind HTML code to a Text or Memo field in an Access database or to a text, ntext, or varchar column in an Access project. You cannot edit the contents of a bound span control.)';
			sTemp=L_IDH_acdefBoundHTMLControl_TEXT;
			break;
		case 'IDH_acdefBoundHyperlinkControl':
			L_IDH_acdefBoundHyperlinkControl_TEXT='(bound hyperlink control: A control that is used on a data access page to bind a link, an intranet address, or an Internet address to an underlying Text field. You can click the hyperlink to go to the target location.)';
			sTemp=L_IDH_acdefBoundHyperlinkControl_TEXT;
			break;
		case 'IDH_acdefBoundPicture':
			L_IDH_acdefBoundPicture_TEXT='(bound picture: A control that is used on a form, report, or data access page to bind an image to an OLE Object field in an Access database or an image column in an Access project.)';
			sTemp=L_IDH_acdefBoundPicture_TEXT;
			break;
		case 'IDH_acdefCaptionSection':
			L_IDH_acdefCaptionSection_TEXT='(caption section: The section on a grouped data access page that displays captions for columns of data. It appears immediately before the group header. You cannot add a bound control to a caption section.)';
			sTemp=L_IDH_acdefCaptionSection_TEXT;
			break;
		case 'IDH_acdefCharDataType':
			L_IDH_acdefCharDataType_TEXT='(char data type: In an Access project, a fixed-length data type with a maximum of 8,000 ANSI characters.)';
			sTemp=L_IDH_acdefCharDataType_TEXT;
			break;
		case 'IDH_acdefConditionalFormatting':
			L_IDH_acdefConditionalFormatting_TEXT='(conditional formatting: Formatting the contents of a control in a form or report based on one or more conditions. A condition can reference another control, the control with focus, or a user-defined Visual Basic for Applications function.)';
			sTemp=L_IDH_acdefConditionalFormatting_TEXT;
			break;
		case 'IDH_acdefConflict':
			L_IDH_acdefConflict_TEXT='(conflict: Can occur if data has changed in the same record of two replica set members. When a conflict occurs, a winning change is selected and applied in all replicas, and the losing change is recorded as a conflict at all replicas.)';
			sTemp=L_IDH_acdefConflict_TEXT;
			break;
		case 'IDH_acdefCursorDataType':
			L_IDH_acdefCursorDataType_TEXT='(cursor data type: In an Access project, a data type you can use only for creating a cursor variable. This data type cannot be used for columns in a table. A cursor is a mechanism used to work with one row at a time in the result set of a SELECT statement.)';
			sTemp=L_IDH_acdefCursorDataType_TEXT;
			break;
		case 'IDH_acdefDataAccessPageProperties':
			L_IDH_acdefDataAccessPageProperties_TEXT='(data access page properties: Attributes of a data access page that identify the database to which the page is connected and define the page\'s appearance and behavior.)';
			sTemp=L_IDH_acdefDataAccessPageProperties_TEXT;
			break;
		case 'IDH_acdefDataAccessPageWindow':
			L_IDH_acdefDataAccessPageWindow_TEXT='(Data Access Page window: The window that displays data access pages in Design view and Page view.)';
			sTemp=L_IDH_acdefDataAccessPageWindow_TEXT;
			break;
		case 'IDH_acdefDataDefinition':
			L_IDH_acdefDataDefinition_TEXT='(data definition: The fields in underlying tables and queries, and the expressions, that make up the record source for a data access page.)';
			sTemp=L_IDH_acdefDataDefinition_TEXT;
			break;
		case 'IDH_acdefDataFiles':
			L_IDH_acdefDataFiles_TEXT='(Microsoft Access file: An Access database or Access project file. An Access database stores database objects and data in an .mdb file. A project file doesn\'t contain data and is used to connect to a Microsoft SQL Server database.)';
			sTemp=L_IDH_acdefDataFiles_TEXT;
			break;
		case 'IDH_acdefDataSourceControl':
			L_IDH_acdefDataSourceControl_TEXT='(data source control: The engine behind data access pages and Microsoft Office Web Components that manages the connection to the underlying data source. The data source control has no visual representation.)';
			sTemp=L_IDH_acdefDataSourceControl_TEXT;
			break;
		case 'IDH_acdefDatetimeDataType':
			L_IDH_acdefDatetimeDataType_TEXT='(datetime data type: In an Access project, a date and time data type that ranges from January 1, 1753, to December 31, 9999, to an accuracy of three-hundredths of a second, or 3.33 milliseconds.)';
			sTemp=L_IDH_acdefDatetimeDataType_TEXT;
			break;
		case 'IDH_acdefDecimalDataType':
			L_IDH_acdefDecimalDataType_TEXT='(decimal data type (Access project): An exact numeric data type that holds values from -10^38 - 1 through 10^38 - 1. You can specify the scale (maximum total number of digits) and precision (maximum number of digits to the right of the decimal point).)';
			sTemp=L_IDH_acdefDecimalDataType_TEXT;
			break;
		case 'IDH_acdefDecimalDataTypeMicrosoftAccessDatabase':
			L_IDH_acdefDecimalDataTypeMicrosoftAccessDatabase_TEXT='(decimal data type (Access database): An exact numeric data type that holds values from -10^28 - 1 through 10^28 - 1. You can specify the scale (maximum number of digits) and precision (maximum total number of digits to the right of the decimal point).)';
			sTemp=L_IDH_acdefDecimalDataTypeMicrosoftAccessDatabase_TEXT;
			break;
		case 'IDH_acdefDesignMaster':
			L_IDH_acdefDesignMaster_TEXT='(Design Master: The only member of the replica set in which you can make changes to the database structure that can be propagated to other replicas.)';
			sTemp=L_IDH_acdefDesignMaster_TEXT;
			break;
		case 'IDH_acdefDirectSynchronization':
			L_IDH_acdefDirectSynchronization_TEXT='(direct synchronization: A method used to synchronize data between replicas that are connected directly to the local area network and are available through shared network folders.)';
			sTemp=L_IDH_acdefDirectSynchronization_TEXT;
			break;
		case 'IDH_acdefDocumentProperties':
			L_IDH_acdefDocumentProperties_TEXT='(document properties: Properties, such as title, subject, and author, that are stored with each data access page.)';
			sTemp=L_IDH_acdefDocumentProperties_TEXT;
			break;
		case 'IDH_acdefDropdownListBox':
			L_IDH_acdefDropdownListBox_TEXT='(drop-down list box: A control on a data access page that, when clicked, displays a list from which you can select a value. You cannot type a value in a drop-down list box.)';
			sTemp=L_IDH_acdefDropdownListBox_TEXT;
			break;
		case 'IDH_acdefExpandControl':
			L_IDH_acdefExpandControl_TEXT='(expand control: A control on a data access page that, when clicked, expands or collapses a grouped record to display or hide its detail records.)';
			sTemp=L_IDH_acdefExpandControl_TEXT;
			break;
		case 'IDH_acdefExpandIndicator':
			L_IDH_acdefExpandIndicator_TEXT='(expand indicator: A button that is used to expand or collapse groups of records; it displays the plus (+) or minus (-) sign.)';
			sTemp=L_IDH_acdefExpandIndicator_TEXT;
			break;
		case 'IDH_acdefExport':
			L_IDH_acdefExport_TEXT='(export: To output data and database objects to another database, spreadsheet, or file format so another database or program can use the data or database objects. You can export data to a variety of supported databases, programs, and file formats.)';
			sTemp=L_IDH_acdefExport_TEXT;
			break;
		case 'IDH_acdefFill':
			L_IDH_acdefFill_TEXT='(Fill: A report magnification that fills the Report Snapshot window by fitting either the width or the height of a page, depending on whether the report is in portrait or landscape orientation.)';
			sTemp=L_IDH_acdefFill_TEXT;
			break;
		case 'IDH_acdefFilterExcludingSelection':
			L_IDH_acdefFilterExcludingSelection_TEXT='(Filter Excluding Selection: A technique in which you filter records in a form, datasheet, or data access page to retrieve only those records that don\'t contain the selected value.)';
			sTemp=L_IDH_acdefFilterExcludingSelection_TEXT;
			break;
		case 'IDH_acdefFloatDataType':
			L_IDH_acdefFloatDataType_TEXT='(float data type: In an Access project, an approximate numeric data type with 15-digit precision. It can hold positive values from approximately 2.23E - 308 through 1.79E + 308, negative values from approximately -2.23E - 308 through -1.79E + 308, or zero.)';
			sTemp=L_IDH_acdefFloatDataType_TEXT;
			break;
		case 'IDH_acdefGeneralSortOrder':
			L_IDH_acdefGeneralSortOrder_TEXT='(General sort order: The default sort order determines how characters are sorted in the entire database, such as in tables, queries, and reports. Define General sort order if you plan to use a database with multiple language editions of Access.)';
			sTemp=L_IDH_acdefGeneralSortOrder_TEXT;
			break;
		case 'IDH_acdefGlobalReplica':
			L_IDH_acdefGlobalReplica_TEXT='(global replica: A replica in which changes are fully tracked and can be exchanged with any global replica in the set. A global replica can also exchange changes with any local or anonymous replicas for which it becomes the hub.)';
			sTemp=L_IDH_acdefGlobalReplica_TEXT;
			break;
		case 'IDH_acdefGridDatasheetView':
			L_IDH_acdefGridDatasheetView_TEXT='(grid (Datasheet view): Vertical and horizontal lines that visually divide rows and columns of data into cells in a table, query, form, view, or stored procedure. You can show and hide these grid lines.)';
			sTemp=L_IDH_acdefGridDatasheetView_TEXT;
			break;
		case 'IDH_acdefGroup':
			L_IDH_acdefGroup_TEXT='(grouped controls: Two or more controls that can be treated as one unit while designing a form or report. You can select the group instead of selecting each individual control as you\'re arranging controls or assigning properties.)';
			sTemp=L_IDH_acdefGroup_TEXT;
			break;
		case 'IDH_acdefGroupedDataAccessPage':
			L_IDH_acdefGroupedDataAccessPage_TEXT='(grouped data access page: A data access page that has two or more group levels.)';
			sTemp=L_IDH_acdefGroupedDataAccessPage_TEXT;
			break;
		case 'IDH_acdefGroupFilterControl':
			L_IDH_acdefGroupFilterControl_TEXT='(group filter control: A drop-down list box control on a data access page that retrieves records from an underlying recordset based on the value that you select from the list. On a grouped page, the control retrieves a specific group of records.)';
			sTemp=L_IDH_acdefGroupFilterControl_TEXT;
			break;
		case 'IDH_acdefHotspot':
			L_IDH_acdefHotspot_TEXT='(hyperlink image control: A control that is used on a data access page to display an unbound image that represents a hyperlink to a file or Web page. In Browse mode, you can click the image to go to the target location.)';
			sTemp=L_IDH_acdefHotspot_TEXT;
			break;
		case 'IDH_acdefHub':
			L_IDH_acdefHub_TEXT='(hub: A global replica to which all replicas in the replica set synchronize their changes. The hub serves as the parent replica.)';
			sTemp=L_IDH_acdefHub_TEXT;
			break;
		case 'IDH_acdefHyperlinkField':
			L_IDH_acdefHyperlinkField_TEXT='(hyperlink field: A field that stores hyperlink addresses. In an Access database (.mdb), it\'s a field with a Hyperlink data type. In an Access project (.adp), it\'s a field that has the <b>IsHyperlink</b> property set to <b>True</b>.)';
			sTemp=L_IDH_acdefHyperlinkField_TEXT;
			break;
		case 'IDH_acdefImageOLEObjectDataType':
			L_IDH_acdefImageOLEObjectDataType_TEXT='(image data type: In an Access project, a variable-length data type that can hold a maximum of 2^31 - 1 (2,147,483,647) bytes of binary data. It is used to store Binary Large Objects (BLOBs), such as pictures, documents, sounds, and compiled code.)';
			sTemp=L_IDH_acdefImageOLEObjectDataType_TEXT;
			break;
		case 'IDH_acdefIndirectSynchronization':
			L_IDH_acdefIndirectSynchronization_TEXT='(indirect synchronization: A synchronization method that is used in a disconnected environment, such as when you travel with a portable computer. You must use the Replication Manager to configure indirect synchronization.)';
			sTemp=L_IDH_acdefIndirectSynchronization_TEXT;
			break;
		case 'IDH_acdefIntDataType':
			L_IDH_acdefIntDataType_TEXT='(int data type: In an Access project, a data type of 4 bytes (32 bits) that stores whole numbers in the range of -2^31 (-2,147,483,648) through 2^31 - 1 (2,147,483,647).)';
			sTemp=L_IDH_acdefIntDataType_TEXT;
			break;
		case 'IDH_acdefInternetSynchronization':
			L_IDH_acdefInternetSynchronization_TEXT='(Internet synchronization: Used to synchronize replicas in a disconnected environment in which an Internet server is configured. You must use the Replication Manager to configure Internet synchronization.)';
			sTemp=L_IDH_acdefInternetSynchronization_TEXT;
			break;
		case 'IDH_acdefJROJetReplicationObjects':
			L_IDH_acdefJROJetReplicationObjects_TEXT='(JRO: A set of automation interfaces that you can use to perform actions specific to Microsoft Jet databases. Using JRO, you can compact databases, refresh data from the cache, and create and maintain replicated databases.)';
			sTemp=L_IDH_acdefJROJetReplicationObjects_TEXT;
			break;
		case 'IDH_acdefLocalObject':
			L_IDH_acdefLocalObject_TEXT='(local object: A table, query, form, report, macro, or module that remains in the replica or Design Master where it was created. Neither the object nor changes to the object are copied to other members in the replica set.)';
			sTemp=L_IDH_acdefLocalObject_TEXT;
			break;
		case 'IDH_acdefLocalReplica':
			L_IDH_acdefLocalReplica_TEXT='(local replica: A replica that exchanges data with its hub or a global replica but not with other replicas in the replica set.)';
			sTemp=L_IDH_acdefLocalReplica_TEXT;
			break;
		case 'IDH_acdefMarquee':
			L_IDH_acdefMarquee_TEXT='(marquee: Moving text that is used on a data access page to draw the user\'s attention to a specific page element, such as a headline or an important announcement. To place a marquee on a page, create a scrolling text control.)';
			sTemp=L_IDH_acdefMarquee_TEXT;
			break;
		case 'IDH_acdefMaximumRecordLimit':
			L_IDH_acdefMaximumRecordLimit_TEXT='(maximum record limit: To improve performance, you can specify the maximum number of records that will be retrieved from a Microsoft SQL Server database for a form or datasheet in an Access project.)';
			sTemp=L_IDH_acdefMaximumRecordLimit_TEXT;
			break;
		case 'IDH_acdefMicrosoftDataEngineMSDE':
			L_IDH_acdefMicrosoftDataEngineMSDE_TEXT='(MSDE 2000: A client/server data engine that provides local data storage on a smaller computer system, such as a single-user computer or small workgroup server, and that is compatible with Microsoft SQL Server 6.5, 7.0, and 2000.)';
			sTemp=L_IDH_acdefMicrosoftDataEngineMSDE_TEXT;
			break;
		case 'IDH_acdefMoneyDataType':
			L_IDH_acdefMoneyDataType_TEXT='(money data type: In an Access project, a data type that stores monetary values in the range -922,337,203,685,477.5707 through 922,337,203,685,477.5807, with accuracy to a ten-thousandth of a monetary unit.)';
			sTemp=L_IDH_acdefMoneyDataType_TEXT;
			break;
		case 'IDH_acdefNameAutoCorrect':
			L_IDH_acdefNameAutoCorrect_TEXT='(Name AutoCorrect: A feature that automatically corrects common side effects that occur when you rename forms, reports, tables, queries, fields, or controls on forms and reports. However, Name AutoCorrect cannot repair all references to renamed objects.)';
			sTemp=L_IDH_acdefNameAutoCorrect_TEXT;
			break;
		case 'IDH_acdefNcharDataType':
			L_IDH_acdefNcharDataType_TEXT='(nchar data type: In an Access project, a fixed-length data type with a maximum of 4,000 Unicode characters. Unicode characters use 2 bytes per character and support all international characters.)';
			sTemp=L_IDH_acdefNcharDataType_TEXT;
			break;
		case 'IDH_acdefNtextDataType':
			L_IDH_acdefNtextDataType_TEXT='(ntext data type: In an Access project, a variable-length data type that can hold a maximum of 2^30 - 1 (1,073,741,823) characters. Columns with the ntext data type store a 16-byte pointer in the data row, and the data is stored separately.)';
			sTemp=L_IDH_acdefNtextDataType_TEXT;
			break;
		case 'IDH_acdefNumericDataType':
			L_IDH_acdefNumericDataType_TEXT='(numeric data type: In an Access project, an exact numeric data type that holds values from -10^38 - 1 through 10^38 - 1. You can specify the scale (maximum total number of digits) and precision (maximum number of digits to the right of the decimal point).)';
			sTemp=L_IDH_acdefNumericDataType_TEXT;
			break;
		case 'IDH_acdefNvarchaDataType':
			L_IDH_acdefNvarchaDataType_TEXT='(nvarchar(n) data type: In an Access project, a variable-length data type with a maximum of 4,000 Unicode characters. Unicode characters use 2 bytes per character and support all international characters.)';
			sTemp=L_IDH_acdefNvarchaDataType_TEXT;
			break;
		case 'IDH_acdefOLEDB':
			L_IDH_acdefOLEDB_TEXT='(OLE DB: A component database architecture that provides efficient network and Internet access to many types of data sources, including relational data, mail files, flat files, and spreadsheets.)';
			sTemp=L_IDH_acdefOLEDB_TEXT;
			break;
		case 'IDH_acdefOLEDBProvider':
			L_IDH_acdefOLEDBProvider_TEXT='(OLE DB provider: A program in the OLE DB architecture that enables native access to data, instead of accessing data by using ODBC or IISAM drivers, which are external ways to access the data.)';
			sTemp=L_IDH_acdefOLEDBProvider_TEXT;
			break;
		case 'IDH_acdefPageView':
			L_IDH_acdefPageView_TEXT='(Page view: An Access window in which you can browse the contents of a data access page. Pages have the same functionality in Page view as in Internet Explorer 5.0 or later.)';
			sTemp=L_IDH_acdefPageView_TEXT;
			break;
		case 'IDH_acdefPartialReplica':
			L_IDH_acdefPartialReplica_TEXT='(partial replica: A database that contains only a subset of the records in a full replica. With a partial replica, you can set filters and identify relationships that define which subset of the records in the full replica should be present in the database.)';
			sTemp=L_IDH_acdefPartialReplica_TEXT;
			break;
		case 'IDH_acdefPivotTableList':
			L_IDH_acdefPivotTableList_TEXT='(PivotTable list: A Microsoft Office Web Component that is used to analyze data interactively on a Web page. Data displayed in a row and column format can be moved, filtered, sorted, and calculated in ways that are meaningful for your audience.)';
			sTemp=L_IDH_acdefPivotTableList_TEXT;
			break;
		case 'IDH_acdefPublication':
			L_IDH_acdefPublication_TEXT='(publication: In an Access project, a publication can contain one or more published tables or stored procedure articles from one user database. Each user database can have one or more publications. An article is a grouping of data replicated as a unit.)';
			sTemp=L_IDH_acdefPublication_TEXT;
			break;
		case 'IDH_acdefRealDataType':
			L_IDH_acdefRealDataType_TEXT='(real data type: In an Access project, an approximate numeric data type with seven-digit precision. It can hold positive values from approximately 1.18E - 38 through 3.40E + 38, negative values from approximately -1.18E - 38 through -3.40E + 38, or zero.)';
			sTemp=L_IDH_acdefRealDataType_TEXT;
			break;
		case 'IDH_acdefRecordNavigationControl':
			L_IDH_acdefRecordNavigationControl_TEXT='(record navigation control: A control used on a data access page to display a record navigation toolbar. In a grouped page, you can add a navigation toolbar to each group level. You can customize the record navigation control by changing its properties.)';
			sTemp=L_IDH_acdefRecordNavigationControl_TEXT;
			break;
		case 'IDH_acdefRecordNavigationSection':
			L_IDH_acdefRecordNavigationSection_TEXT='(record navigation section: A section in a data access page that displays the record navigation control for a specific group level. It appears after the corresponding group header section. You can\'t place bound controls in a record navigation section.)';
			sTemp=L_IDH_acdefRecordNavigationSection_TEXT;
			break;
		case 'IDH_acdefRelativePositioning':
			L_IDH_acdefRelativePositioning_TEXT='(relative or inline positioning: Places the element in the natural HTML flow of the document but offsets the position of the element based on the preceding content.)';
			sTemp=L_IDH_acdefRelativePositioning_TEXT;
			break;
		case 'IDH_acdefReplicaSet':
			L_IDH_acdefReplicaSet_TEXT='(replica set: The Design Master and all replicas that share the same database design and unique replica set identifier.)';
			sTemp=L_IDH_acdefReplicaSet_TEXT;
			break;
		case 'IDH_acdefReportSnapshot':
			L_IDH_acdefReportSnapshot_TEXT='(report snapshot: A file (.snp extension) that contains a high-fidelity copy of each page of an Access report. It preserves the two-dimensional layout, graphics, and other embedded objects of the report.)';
			sTemp=L_IDH_acdefReportSnapshot_TEXT;
			break;
		case 'IDH_acdefScrollingTextControl':
			L_IDH_acdefScrollingTextControl_TEXT='(scrolling text control: A control used on a data access page to display a marquee, or moving text. You can customize the display of text by setting options such as direction and speed. Browsers that do not support scrolling text will display static text.)';
			sTemp=L_IDH_acdefScrollingTextControl_TEXT;
			break;
		case 'IDH_acdefServerFilterByForm':
			L_IDH_acdefServerFilterByForm_TEXT='(Server Filter By Form: A technique that uses a version of the current form or datasheet with empty fields in which you can type values you want the filtered records to contain. The data is filtered by the server before it\'s retrieved from the database.)';
			sTemp=L_IDH_acdefServerFilterByForm_TEXT;
			break;
		case 'IDH_acdefServergeneratedHTML':
			L_IDH_acdefServergeneratedHTML_TEXT='(server-generated HTML: An Active Server Pages (ASP) or IDC/HTX file that is output from a table, query, or form, connected to an ODBC data source, and processed by the Internet Information Server to dynamically create read-only HTML files.)';
			sTemp=L_IDH_acdefServergeneratedHTML_TEXT;
			break;
		case 'IDH_acdefSmalldatetimeDataType':
			L_IDH_acdefSmalldatetimeDataType_TEXT='(smalldatetime data type: In an Access project, a date and time data type that is less precise than the datetime data type. Data values range from January 1, 1900, through June 6, 2079, to an accuracy of one minute.)';
			sTemp=L_IDH_acdefSmalldatetimeDataType_TEXT;
			break;
		case 'IDH_acdefSmallintDataType':
			L_IDH_acdefSmallintDataType_TEXT='(smallint data type: In an Access project, a data type of 2 bytes (16 bits) that stores whole numbers in the range of -2^15 (-32,768) through 2^15 - 1 (32,767).)';
			sTemp=L_IDH_acdefSmallintDataType_TEXT;
			break;
		case 'IDH_acdefSmallmoneyDataType':
			L_IDH_acdefSmallmoneyDataType_TEXT='(smallmoney data type: In an Access project, a data type that stores monetary values from -214,748.3648 to 214,748.3647, with accuracy to a ten-thousandth of a monetary unit. When smallmoney values are displayed, they are rounded up to two decimal places.)';
			sTemp=L_IDH_acdefSmallmoneyDataType_TEXT;
			break;
		case 'IDH_acdefSnapshotViewer':
			L_IDH_acdefSnapshotViewer_TEXT='(Snapshot Viewer: A program that you can use to view, print, or mail a snapshot, such as a report snapshot. Snapshot Viewer 11.0 consists of a stand-alone executable program, a Snapshot Viewer control (Snapview.ocx), and other related files.)';
			sTemp=L_IDH_acdefSnapshotViewer_TEXT;
			break;
		case 'IDH_acdefSnapshotViewerControl':
			L_IDH_acdefSnapshotViewerControl_TEXT='(Snapshot Viewer control: An ActiveX control (Snapview.ocx) that you use to view a snapshot report from Microsoft Internet Explorer 3.0 or later, or from any application that supports ActiveX controls, such as Access or Microsoft Visual Basic.)';
			sTemp=L_IDH_acdefSnapshotViewerControl_TEXT;
			break;
		case 'IDH_acdefSubdatasheet':
			L_IDH_acdefSubdatasheet_TEXT='(subdatasheet: A datasheet that is nested within another datasheet and that contains data related or joined to the first datasheet.)';
			sTemp=L_IDH_acdefSubdatasheet_TEXT;
			break;
		case 'IDH_acdefSubscribe':
			L_IDH_acdefSubscribe_TEXT='(subscribe: To agree to receive a publication in an Access database (.mdb) or an Access project (.adp). A subscriber database subscribes to replicated data from a publisher database.)';
			sTemp=L_IDH_acdefSubscribe_TEXT;
			break;
		case 'IDH_acdefSubscription':
			L_IDH_acdefSubscription_TEXT='(subscription: The database that receives tables and data replicated from a publisher database in an Access project (.adp).)';
			sTemp=L_IDH_acdefSubscription_TEXT;
			break;
		case 'IDH_acdefSysnameDataType':
			L_IDH_acdefSysnameDataType_TEXT='(sysname data type: In an Access project, a special system-supplied, user-defined data type that is used for table columns, variables, and stored procedure parameters that store object names.)';
			sTemp=L_IDH_acdefSysnameDataType_TEXT;
			break;
		case 'IDH_acdefTextmemoDataType':
			L_IDH_acdefTextmemoDataType_TEXT='(text data type: In an Access project, a variable-length data type that can hold a maximum of 2^31 - 1 (2,147,483,647) characters; default length is 16.)';
			sTemp=L_IDH_acdefTextmemoDataType_TEXT;
			break;
		case 'IDH_acdefTheme':
			L_IDH_acdefTheme_TEXT='(theme: A collection of formats that determines the appearance of the controls, sections, body, and text on a data access page.)';
			sTemp=L_IDH_acdefTheme_TEXT;
			break;
		case 'IDH_acdefTimestampDataType':
			L_IDH_acdefTimestampDataType_TEXT='(timestamp data type: In an Access project, a data type that is automatically updated every time a row is inserted or updated. Values in timestamp columns are not datetime data, but binary(8) or varbinary(8), indicating the sequence of data modifications.)';
			sTemp=L_IDH_acdefTimestampDataType_TEXT;
			break;
		case 'IDH_acdefTinyintDataType':
			L_IDH_acdefTinyintDataType_TEXT='(tinyint data type: In an Access project, a data type of 1 byte (8 bits) that stores whole numbers in the range of 0 through 255.)';
			sTemp=L_IDH_acdefTinyintDataType_TEXT;
			break;
		case 'IDH_acdefTopology':
			L_IDH_acdefTopology_TEXT='(topology: The order in which changes are propagated from replica to replica. Topology is important because it determines how quickly changes in another replica appear in your replica.)';
			sTemp=L_IDH_acdefTopology_TEXT;
			break;
		case 'IDH_acdefUniqueidentifierDataType':
			L_IDH_acdefUniqueidentifierDataType_TEXT='(uniqueidentifier data type: In an Access project, a 16-byte globally unique identifier (GUID).)';
			sTemp=L_IDH_acdefUniqueidentifierDataType_TEXT;
			break;
		case 'IDH_acdefUpdatableSnapshot':
			L_IDH_acdefUpdatableSnapshot_TEXT='(updateable snapshot: A type of recordset that works efficiently in a client/server environment by caching data on the client and minimizing round trips to the server to access and update data.)';
			sTemp=L_IDH_acdefUpdatableSnapshot_TEXT;
			break;
		case 'IDH_acdefVarbinaryDataType':
			L_IDH_acdefVarbinaryDataType_TEXT='(varbinary data type: In an Access project, a variable-length data type with a maximum of 8,000 bytes of binary data.)';
			sTemp=L_IDH_acdefVarbinaryDataType_TEXT;
			break;
		case 'IDH_acdefVarchartextDataType':
			L_IDH_acdefVarchartextDataType_TEXT='(varchar (n) data type: In an Access project, a variable-length data type with a maximum of 8,000 ANSI characters.)';
			sTemp=L_IDH_acdefVarchartextDataType_TEXT;
			break;
		case 'IDH_acdefVisibility':
			L_IDH_acdefVisibility_TEXT='(visibility: A property of a replica that indicates which members of the replica set it can synchronize with and which conflict resolution rules apply. Replicas fall into three visibility types: global, local, and anonymous.)';
			sTemp=L_IDH_acdefVisibility_TEXT;
			break;
		case 'IDH_acdefWebPagePreview':
			L_IDH_acdefWebPagePreview_TEXT='(Web Page Preview: Opens a data access page for preview in Microsoft Internet Explorer 5 or later.)';
			sTemp=L_IDH_acdefWebPagePreview_TEXT;
			break;
		case 'rpldefDBReplication':
			L_rpldefDBReplication_TEXT='(database replication: The process of creating two or more special copies (replicas) of an Access database. Replicas can be synchronized, changes made to data in one replica, or design changes made in the Design Master, are sent to other replicas.)';
			sTemp=L_rpldefDBReplication_TEXT;
			break;
		case 'rpldefGUID':
			L_rpldefGUID_TEXT='(GUID: A 16-byte field used in an Access database to establish a unique identifier for replication. GUIDs are used to identify replicas, replica sets, tables, records, and other objects. In an Access database, GUIDs are referred to as Replication IDs.)';
			sTemp=L_rpldefGUID_TEXT;
			break;
		case 'rpldefReplica':
			L_rpldefReplica_TEXT='(replica: A copy of a database that is a member of a replica set and can be synchronized with other replicas in the set. Changes to the data in a replicated table in one replica are sent and applied to the other replicas.)';
			sTemp=L_rpldefReplica_TEXT;
			break;
		case 'rpldefReplication':
			L_rpldefReplication_TEXT='(replication: The process of copying a database so that two or more copies can exchange updates of data or replicated objects. This exchange is called synchronization.)';
			sTemp=L_rpldefReplication_TEXT;
			break;
		case 'rpldefSynchronization':
			L_rpldefSynchronization_TEXT='(synchronization: The process of updating two members of a replica set by exchanging all updated records and objects in each member. Two replica set members are synchronized when the changes in each have been applied to the other.)';
			sTemp=L_rpldefSynchronization_TEXT;
			break;

		// Excel

		case 'defDDEConversation':
			L_defDDEConversation_TEXT='(DDE conversation: The interaction between two applications that are communicating and exchanging data through special functions and code known as dynamic data exchange (DDE).)';
			sTemp=L_defDDEConversation_TEXT;
			break;
		case 'defQueryChannel':
			L_defQueryChannel_TEXT='(query channel: You use a query channel in a DDE conversation between the destination application and a specific query (for example, Query1) in Query. To use a query channel, you must have already opened the query window using a system channel.)';
			sTemp=L_defQueryChannel_TEXT;
			break;
		case 'defSystemChannel':
			L_defSystemChannel_TEXT='(system channel: Used in a DDE conversation between applications to get information about the system, such as the current connections, open queries, and the status of the destination application.)';
			sTemp=L_defSystemChannel_TEXT;
			break;
		case 'dldefmovingBorder':
			L_dldefmovingBorder_TEXT='(moving border: An animated border that appears around a worksheet range that has been cut or copied. To cancel a moving border, press ESC.)';
			sTemp=L_dldefmovingBorder_TEXT;
			break;
		case 'grColumnHeading':
			L_grColumnHeading_TEXT='(column heading: The shaded area at the top of each Data pane column that contains the field name.)';
			sTemp=L_grColumnHeading_TEXT;
			break;
		case 'grdefChartArea':
			L_grdefChartArea_TEXT='(chart area: The entire chart and all its elements.)';
			sTemp=L_grdefChartArea_TEXT;
			break;
		case 'grdefComparisonOperator':
			L_grdefComparisonOperator_TEXT='(comparison operator: A sign that is used in comparison criteria to compare two values. The six standard comparison operators are = Equal to, > Greater than, < Less than, >= Greater than or equal to, <= Less than or equal to, and <> Not equal to.)';
			sTemp=L_grdefComparisonOperator_TEXT;
			break;
		case 'grdefDataLabel':
			L_grdefDataLabel_TEXT='(data label: A label that provides additional information about a data marker, which represents a single data point or value that originates from a datasheet cell.)';
			sTemp=L_grdefDataLabel_TEXT;
			break;
		case 'grdefDataMarker':
			L_grdefDataMarker_TEXT='(data marker: A bar, area, dot, slice, or other symbol in a chart that represents a single data point or value that originates from a datasheet cell. Related data markers in a chart constitute a data series.)';
			sTemp=L_grdefDataMarker_TEXT;
			break;
		case 'grdefDataPoints':
			L_grdefDataPoints_TEXT='(data points: Individual values plotted in a chart and represented by bars, columns, lines, pie or doughnut slices, dots, and various other shapes called data markers. Data markers of the same color constitute a data series.)';
			sTemp=L_grdefDataPoints_TEXT;
			break;
		case 'grdefDataRegion':
			L_grdefDataRegion_TEXT='(data region: A range of cells that contains data and that is bounded by empty cells or datasheet borders.)';
			sTemp=L_grdefDataRegion_TEXT;
			break;
		case 'grdefDataSeries':
			L_grdefDataSeries_TEXT='(data series: Related data points that are plotted in a chart and originate from datasheet rows or columns. Each data series in a chart has a unique color or pattern. You can plot one or more data series in a chart. Pie charts have only one data series.)';
			sTemp=L_grdefDataSeries_TEXT;
			break;
		case 'grdefDataTableInCharts':
			L_grdefDataTableInCharts_TEXT='(data table in a chart: A grid attached to a chart that displays the data used to create the chart. The data table usually is attached to the category axis of the chart and replaces the tick-mark labels on the category axis.)';
			sTemp=L_grdefDataTableInCharts_TEXT;
			break;
		case 'grdefErrorBars':
			L_grdefErrorBars_TEXT='(error bars: Usually used in statistical or scientific data, error bars show potential error or degree of uncertainty relative to each data marker in a series.)';
			sTemp=L_grdefErrorBars_TEXT;
			break;
		case 'grdefPoint':
			L_grdefPoint_TEXT='(point: A unit of measurement equal to 1/72 of an inch.)';
			sTemp=L_grdefPoint_TEXT;
			break;
		case 'grdefSelect':
			L_grdefSelect_TEXT='(select: To highlight a cell or range of cells on a datasheet. The selected cells will be affected by the next command or action.)';
			sTemp=L_grdefSelect_TEXT;
			break;
		case 'grdefTextBox':
			L_grdefTextBox_TEXT='(text box: A rectangular object on a chart in which you can type text.)';
			sTemp=L_grdefTextBox_TEXT;
			break;
		case 'grdefToolbar':
			L_grdefToolbar_TEXT='(toolbar: A bar with buttons and options that you can use to carry out commands. To display a toolbar, point to <b>Toolbars</b> on the <b>View</b> menu, and then click the toolbar you want. If the button you want doesn\'t appear, click <b>More Buttons</b>.)';
			sTemp=L_grdefToolbar_TEXT;
			break;
		case 'grRowHeading':
			L_grRowHeading_TEXT='(row heading: The numbered gray area to the left of each row. Click the row heading to select an entire row.)';
			sTemp=L_grRowHeading_TEXT;
			break;
		case 'grSelectAllButton':
			L_grSelectAllButton_TEXT='(Select All button: The gray rectangle in the upper-left corner of a datasheet where the row and column headings meet. Click this button to select all cells on a datasheet.)';
			sTemp=L_grSelectAllButton_TEXT;
			break;
		case 'IDH_grdefDropdownlist':
			L_IDH_grdefDropdownlist_TEXT='(drop-down list box: A control on a menu, toolbar, or dialog box that displays a list of options when you click the small arrow next to the list box.)';
			sTemp=L_IDH_grdefDropdownlist_TEXT;
			break;
		case 'IDH_grdefRsquaredValue':
			L_IDH_grdefRsquaredValue_TEXT='(R-squared value: A number from 0 to 1 that reveals how closely the estimated values for the trendline correspond to your actual data. A trendline is most reliable when its R-squared value is at or near 1. Also known as the coefficient of determination.)';
			sTemp=L_IDH_grdefRsquaredValue_TEXT;
			break;
		case 'IDH_grdefVertexes':
			L_IDH_grdefVertexes_TEXT='(vertexes: Black, square, draggable points that appear at the ends and intersections of lines or curves in certain AutoShapes (such as freeforms, scribbles, and curves) when you edit points on the AutoShape.)';
			sTemp=L_IDH_grdefVertexes_TEXT;
			break;
		case 'IDH_qudefAddress':
			L_IDH_qudefAddress_TEXT='(address: The path to an object, document, file, page, or other destination. An address can be a URL (Web address) or a UNC path (network address), and can include a specific location within a file, such as a Word bookmark or an Excel cell range.)';
			sTemp=L_IDH_qudefAddress_TEXT;
			break;
		case 'IDH_qudefCalculatedField':
			L_IDH_qudefCalculatedField_TEXT='(calculated field: A field in the result set of a query that displays the result of an expression rather than data from a database.)';
			sTemp=L_IDH_qudefCalculatedField_TEXT;
			break;
		case 'IDH_qudefConstant':
			L_IDH_qudefConstant_TEXT='(constant: A value that is not calculated. For example, the number 210 and the text \"Quarterly Earnings\" are constants. An expression, or a value resulting from an expression, is not a constant.)';
			sTemp=L_IDH_qudefConstant_TEXT;
			break;
		case 'IDH_qudefCriteriaPane':
			L_IDH_qudefCriteriaPane_TEXT='(criteria pane: The area of the window that displays the criteria used to limit the records included in the result set of your query.)';
			sTemp=L_IDH_qudefCriteriaPane_TEXT;
			break;
		case 'IDH_qudefDataPane':
			L_IDH_qudefDataPane_TEXT='(data pane: The area of the window that displays the result set of your query.)';
			sTemp=L_IDH_qudefDataPane_TEXT;
			break;
		case 'IDH_qudefExternalData':
			L_IDH_qudefExternalData_TEXT='(external data: Data that is stored in a database, such as Access, dBASE, or SQL Server, that is separate from Query and the program from which you started Query.)';
			sTemp=L_IDH_qudefExternalData_TEXT;
			break;
		case 'IDH_qudefFunction':
			L_IDH_qudefFunction_TEXT='(function: An expression that returns a value based on the results of a calculation. Query assumes that data sources support the Avg, Count, Max, Min, and Sum functions. Some data sources may not support all of these, or may support additional functions.)';
			sTemp=L_IDH_qudefFunction_TEXT;
			break;
		case 'IDH_qudefIndex':
			L_IDH_qudefIndex_TEXT='(index: A database component that speeds up searching for data. When a table has an index, data in the table can be found by looking it up in the index.)';
			sTemp=L_IDH_qudefIndex_TEXT;
			break;
		case 'IDH_qudefJoin':
			L_IDH_qudefJoin_TEXT='(join: A connection between multiple tables where records from related fields that match are combined and shown as one record. Records that don\'t match may be included or excluded, depending on the type of join.)';
			sTemp=L_IDH_qudefJoin_TEXT;
			break;
		case 'IDH_qudefName':
			L_IDH_qudefName_TEXT='(name: A word or string of characters in Excel that represents a cell, range of cells, formula, or constant value.)';
			sTemp=L_IDH_qudefName_TEXT;
			break;
		case 'IDH_qudefPassword':
			L_IDH_qudefPassword_TEXT='(password: A word, phrase, or string of characters used to prevent unauthorized access to a database. To gain access to the database, you must enter the password correctly.)';
			sTemp=L_IDH_qudefPassword_TEXT;
			break;
		case 'IDH_qudefPivotTable':
			L_IDH_qudefPivotTable_TEXT='(PivotTable report: An interactive, crosstabulated Excel report that summarizes and analyzes data, such as database records, from various sources including ones external to Excel.)';
			sTemp=L_IDH_qudefPivotTable_TEXT;
			break;
		case 'IDH_qudefQuerysDesign':
			L_IDH_qudefQuerysDesign_TEXT='(query design: All elements included in the Query window, such as tables, criteria, the order in which fields are arranged, and so on. The design also specifies whether Auto Query is turned on, and whether you can edit the source data.)';
			sTemp=L_IDH_qudefQuerysDesign_TEXT;
			break;
		case 'IDH_qudefReadonly':
			L_IDH_qudefReadonly_TEXT='(read-only: A setting that allows a file to be read or copied but not changed or saved.)';
			sTemp=L_IDH_qudefReadonly_TEXT;
			break;
		case 'IDH_qudefSortOrder':
			L_IDH_qudefSortOrder_TEXT='(sort order: A way to arrange data based on value or data type. You can sort data alphabetically, numerically, or by date. Sort orders use an ascending (1 to 9, A to Z) or descending (9 to 1, Z to A) order.)';
			sTemp=L_IDH_qudefSortOrder_TEXT;
			break;
		case 'IDH_qudefStructuredQueryLanguageSQL':
			L_IDH_qudefStructuredQueryLanguageSQL_TEXT='(SQL: A language used to retrieve, update, and manage data. When you create a query, Query uses SQL to build the corresponding <b>SQL SELECT</b> statement. If you know SQL, you can view or change the <b>SQL SELECT</b> statement.)';
			sTemp=L_IDH_qudefStructuredQueryLanguageSQL_TEXT;
			break;
		case 'IDH_qudefTablePane':
			L_IDH_qudefTablePane_TEXT='(table pane: The area of the Query window that displays the tables in a query. Each table displays the fields from which you can retrieve data.)';
			sTemp=L_IDH_qudefTablePane_TEXT;
			break;
		case 'IDH_qudefWorldWideWeb':
			L_IDH_qudefWorldWideWeb_TEXT='(World Wide Web: A system for navigating the Internet by using hyperlinks. When you use a Web browser, the Web appears as a collection of text, pictures, sounds, and digital movies.)';
			sTemp=L_IDH_qudefWorldWideWeb_TEXT;
			break;
		case 'IDH_xldef3DReference':
			L_IDH_xldef3DReference_TEXT='(3-D reference: A reference to a range that spans two or more worksheets in a workbook.)';
			sTemp=L_IDH_xldef3DReference_TEXT;
			break;
		case 'IDH_xldefArgument':
			L_IDH_xldefArgument_TEXT='(argument: The values that a function uses to perform operations or calculations. The type of argument a function uses is specific to the function. Common arguments that are used within functions include numbers, text, cell references, and names.)';
			sTemp=L_IDH_xldefArgument_TEXT;
			break;
		case 'IDH_xldefArrayFormula':
			L_IDH_xldefArrayFormula_TEXT='(array formula: A formula that performs multiple calculations on one or more sets of values, and then returns either a single result or multiple results. Array formulas are enclosed between braces { } and are entered by pressing CTRL+SHIFT+ENTER.)';
			sTemp=L_IDH_xldefArrayFormula_TEXT;
			break;
		case 'IDH_xldefBaseAddress':
			L_IDH_xldefBaseAddress_TEXT='(base address: The relative path that Excel uses for the destination address when you insert a hyperlink. This can be an Internet address (URL), a path to a folder on your hard drive, or a path to a folder on a network.)';
			sTemp=L_IDH_xldefBaseAddress_TEXT;
			break;
		case 'IDH_xldefCalculatedField':
			L_IDH_xldefCalculatedField_TEXT='(calculated field: A field in a PivotTable report or PivotChart report that uses a formula you create. Calculated fields can perform calculations by using the contents of other fields in the PivotTable report or PivotChart report.)';
			sTemp=L_IDH_xldefCalculatedField_TEXT;
			break;
		case 'IDH_xldefCalculatedItem':
			L_IDH_xldefCalculatedItem_TEXT='(calculated item: An item within a PivotTable field or PivotChart field that uses a formula you create. Calculated items can perform calculations by using the contents of other items within the same field of the PivotTable report or PivotChart report.)';
			sTemp=L_IDH_xldefCalculatedItem_TEXT;
			break;
		case 'IDH_xldefCertifyingAuthority':
			L_IDH_xldefCertifyingAuthority_TEXT='(certifying authority: A commercial organization, or a group within a company, that uses tools such as Microsoft Certificate Server to provide digital certificates that software developers can use to sign macros and users can use to sign documents.)';
			sTemp=L_IDH_xldefCertifyingAuthority_TEXT;
			break;
		case 'IDH_xldefColumnHeading':
			L_IDH_xldefColumnHeading_TEXT='(column heading: The lettered or numbered gray area at the top of each column. Click the column heading to select an entire column. To increase or decrease the width of a column, drag the line to the right of the column heading.)';
			sTemp=L_IDH_xldefColumnHeading_TEXT;
			break;
		case 'IDH_xldefConditionalFormat':
			L_IDH_xldefConditionalFormat_TEXT='(conditional format: A format, such as cell shading or font color, that Excel automatically applies to cells if a specified condition is true.)';
			sTemp=L_IDH_xldefConditionalFormat_TEXT;
			break;
		case 'IDH_xldefDataAccessPageDesignView':
			L_IDH_xldefDataAccessPageDesignView_TEXT='(data access page Design view: A window in Access in which you design data access pages, Web pages with connections to databases.)';
			sTemp=L_IDH_xldefDataAccessPageDesignView_TEXT;
			break;
		case 'IDH_xldefDataSourceDriver':
			L_IDH_xldefDataSourceDriver_TEXT='(data source driver: A program file used to connect to a specific database. Each database program or management system requires a different driver.)';
			sTemp=L_IDH_xldefDataSourceDriver_TEXT;
			break;
		case 'IDH_xldefDefaultWorkbookTemplate':
			L_IDH_xldefDefaultWorkbookTemplate_TEXT='(default workbook template: The Book.xlt template that you create to change the default format of new workbooks. Excel uses the template to create a blank workbook when you start Excel or create a new workbook without specifying a template.)';
			sTemp=L_IDH_xldefDefaultWorkbookTemplate_TEXT;
			break;
		case 'IDH_xldefDropArea':
			L_IDH_xldefDropArea_TEXT='(drop area: An area in a PivotTable or PivotChart report where you can drop fields from the <b>Field List</b> dialog box to display the data in the field. The labels on each drop area indicate the types of fields you can create in the report.)';
			sTemp=L_IDH_xldefDropArea_TEXT;
			break;
		case 'IDH_xldefDropdownListBox':
			L_IDH_xldefDropdownListBox_TEXT='(drop-down list box: A control on a menu, toolbar, or dialog box that displays a list of options when you click the small arrow next to the list box.)';
			sTemp=L_IDH_xldefDropdownListBox_TEXT;
			break;
		case 'IDH_xldefExternalDataRange':
			L_IDH_xldefExternalDataRange_TEXT='(external data range: A range of data that is brought into a worksheet but that originates outside of Excel, such as in a database or text file. In Excel, you can format the data or use it in calculations as you would any other data.)';
			sTemp=L_IDH_xldefExternalDataRange_TEXT;
			break;
		case 'IDH_xldefExternalReference':
			L_IDH_xldefExternalReference_TEXT='(external reference: A reference to a cell or range on a sheet in another Excel workbook, or a reference to a defined name in another workbook.)';
			sTemp=L_IDH_xldefExternalReference_TEXT;
			break;
		case 'IDH_xldefField':
			L_IDH_xldefField_TEXT='(field: A category of information, such as last name or order amount, that is stored in a table. When Query displays a result set in its Data pane, a field is represented as a column.)';
			sTemp=L_IDH_xldefField_TEXT;
			break;
		case 'IDH_xldefFormulaPalette':
			L_IDH_xldefFormulaPalette_TEXT='(Formula Palette: A tool that helps you create or edit a formula and also provides information about functions and their arguments.)';
			sTemp=L_IDH_xldefFormulaPalette_TEXT;
			break;
		case 'IDH_xldefFunction':
			L_IDH_xldefFunction_TEXT='(function: A prewritten formula that takes a value or values, performs an operation, and returns a value or values. Use functions to simplify and shorten formulas on a worksheet, especially those that perform lengthy or complex calculations.)';
			sTemp=L_IDH_xldefFunction_TEXT;
			break;
		case 'IDH_xldefHistoryWorksheet':
			L_IDH_xldefHistoryWorksheet_TEXT='(History worksheet: A separate worksheet that lists changes being tracked in a shared workbook, including the name of the person who made the change, when and where it was made, what data was deleted or replaced, and how conflicts were resolved.)';
			sTemp=L_IDH_xldefHistoryWorksheet_TEXT;
			break;
		case 'IDH_xldefImplicitIntersection':
			L_IDH_xldefImplicitIntersection_TEXT='(implicit intersection: A reference to a range of cells, instead of a single cell, that is calculated like a single cell. If cell C10 contains the formula =B5:B15*5, Excel multiplies the value in cell B10 by 5 because cells B10 and C10 are in the same row.)';
			sTemp=L_IDH_xldefImplicitIntersection_TEXT;
			break;
		case 'IDH_xldefJoinLine':
			L_IDH_xldefJoinLine_TEXT='(join line: In Query, a line that connects fields between two tables and shows Query how the data is related. The type of join indicates which records are selected for the query\'s result set.)';
			sTemp=L_IDH_xldefJoinLine_TEXT;
			break;
		case 'IDH_xldefLockedFieldOrRecord':
			L_IDH_xldefLockedFieldOrRecord_TEXT='(locked field or record: The condition of a record, field, or other object in a database that permits it to be viewed but not changed (read-only) in Query.)';
			sTemp=L_IDH_xldefLockedFieldOrRecord_TEXT;
			break;
		case 'IDH_xldefMatrix':
			L_IDH_xldefMatrix_TEXT='(matrix: A rectangular array of values or a range of cells that is combined with other arrays or ranges to produce multiple sums or products. Excel has predefined matrix functions that can produce the sums or products.)';
			sTemp=L_IDH_xldefMatrix_TEXT;
			break;
		case 'IDH_xldefMergedCell':
			L_IDH_xldefMergedCell_TEXT='(merged cell: A single cell that is created by combining two or more selected cells. The cell reference for a merged cell is the upper-left cell in the original selected range.)';
			sTemp=L_IDH_xldefMergedCell_TEXT;
			break;
		case 'IDH_xldefMultCategoryLabels':
			L_IDH_xldefMultCategoryLabels_TEXT='(multiple-level category labels: Category labels in a chart that, based on worksheet data, are automatically displayed on more than one line in a hierarchy. For example, the heading Produce might appear above a row with headings Tofu, Apples, and Pears.)';
			sTemp=L_IDH_xldefMultCategoryLabels_TEXT;
			break;
		case 'IDH_xldefName':
			L_IDH_xldefName_TEXT='(name: A word or string of characters that represents a cell, range of cells, formula, or constant value. Use easy-to-understand names, such as Products, to refer to hard to understand ranges, such as Sales!C20:C30.)';
			sTemp=L_IDH_xldefName_TEXT;
			break;
		case 'IDH_xldefNonOLAP':
			L_IDH_xldefNonOLAP_TEXT='(non-OLAP source data: Underlying data for a PivotTable or PivotChart report that comes from a source other than an OLAP database. These sources include relational databases, lists on Excel worksheets, and text file databases.)';
			sTemp=L_IDH_xldefNonOLAP_TEXT;
			break;
		case 'IDH_xldefOperand':
			L_IDH_xldefOperand_TEXT='(operand: Items on either side of an operator in a formula. In Excel, operands can be values, cell references, names, labels, and functions.)';
			sTemp=L_IDH_xldefOperand_TEXT;
			break;
		case 'IDH_xldefOuterJoin':
			L_IDH_xldefOuterJoin_TEXT='(outer join: Join in which all records from one table are selected, even if there are no matching records in another table. Records that match are combined and shown as one. Records that don\'t have matches in the other table are shown as empty.)';
			sTemp=L_IDH_xldefOuterJoin_TEXT;
			break;
		case 'IDH_xldefOutlineData':
			L_IDH_xldefOutlineData_TEXT='(outline data: The data that is contained within a worksheet outline. Outline data includes both the summary and detail rows or columns of an outline.)';
			sTemp=L_IDH_xldefOutlineData_TEXT;
			break;
		case 'IDH_xldefPageBreak':
			L_IDH_xldefPageBreak_TEXT='(page break: Divider that breaks a worksheet into separate pages for printing. Excel inserts automatic page breaks based on the paper size, margin settings, scaling options, and the positions of any manual page breaks that you insert.)';
			sTemp=L_IDH_xldefPageBreak_TEXT;
			break;
		case 'IDH_xldefParameterQuery':
			L_IDH_xldefParameterQuery_TEXT='(parameter query: A type of query that, when you run it, prompts for values (criteria) to use to select the records for the result set so that the same query can be used to retrieve different result sets.)';
			sTemp=L_IDH_xldefParameterQuery_TEXT;
			break;
		case 'IDH_xldefPivotChart':
			L_IDH_xldefPivotChart_TEXT='(PivotChart report: A chart that provides interactive analysis of data, like a PivotTable report. You can change views of data, see different levels of detail, or reorganize the chart layout by dragging fields and by showing or hiding items in fields.)';
			sTemp=L_IDH_xldefPivotChart_TEXT;
			break;
		case 'IDH_xldefPivotChartCatField':
			L_IDH_xldefPivotChartCatField_TEXT='(PivotChart category field: A field that is assigned a category orientation in a PivotChart report. In a chart, categories usually appear on the x-axis, or horizontal axis, of the chart.)';
			sTemp=L_IDH_xldefPivotChartCatField_TEXT;
			break;
		case 'IDH_xldefPivotChartSeriesField':
			L_IDH_xldefPivotChartSeriesField_TEXT='(PivotChart series field: A field that is assigned a series orientation in a PivotChart report. In a chart, series are represented in the legend.)';
			sTemp=L_IDH_xldefPivotChartSeriesField_TEXT;
			break;
		case 'IDH_xldefPivotTableRefresh':
			L_IDH_xldefPivotTableRefresh_TEXT='(refresh: To update the contents of a PivotTable or PivotChart report to reflect changes to the underlying source data. If the report is based on external data, refreshing runs the underlying query to retrieve new or changed data.)';
			sTemp=L_IDH_xldefPivotTableRefresh_TEXT;
			break;
		case 'IDH_xldefPrimaryKey':
			L_IDH_xldefPrimaryKey_TEXT='(primary key: One or more fields that uniquely identify each record in a table. In the same way that a license plate number identifies a car, the primary key uniquely identifies a record.)';
			sTemp=L_IDH_xldefPrimaryKey_TEXT;
			break;
		case 'IDH_xldefPrintTitles':
			L_IDH_xldefPrintTitles_TEXT='(print titles: Row or column labels that are printed at the top of or on the left side of every page on a printed worksheet.)';
			sTemp=L_IDH_xldefPrintTitles_TEXT;
			break;
		case 'IDH_xldefQueryTemplate':
			L_IDH_xldefQueryTemplate_TEXT='(report template: An Excel template (.xlt file) that includes one or more queries or PivotTable reports that are based on external data. When you save a report template, Excel saves the query definition but doesn\'t store the queried data in the template.)';
			sTemp=L_IDH_xldefQueryTemplate_TEXT;
			break;
		case 'IDH_xldefRefresh':
			L_IDH_xldefRefresh_TEXT='(refresh: To update data from an external data source. Each time you refresh data, you see the most recent version of the information in the database, including any changes that were made to the data.)';
			sTemp=L_IDH_xldefRefresh_TEXT;
			break;
		case 'IDH_xldefRemoteReference':
			L_IDH_xldefRemoteReference_TEXT='(remote reference: A reference to data stored in a document from another program.)';
			sTemp=L_IDH_xldefRemoteReference_TEXT;
			break;
		case 'IDH_xldefRevisionHistory':
			L_IDH_xldefRevisionHistory_TEXT='(change history: In a shared workbook, information that is maintained about changes made in past editing sessions. The information includes the name of the person who made each change, when the change was made, and what data was changed.)';
			sTemp=L_IDH_xldefRevisionHistory_TEXT;
			break;
		case 'IDH_xldefRowHeading':
			L_IDH_xldefRowHeading_TEXT='(row heading: The numbered gray area to the left of each row. Click the row heading to select an entire row. To increase or decrease the height of a row, drag the line below the row heading.)';
			sTemp=L_IDH_xldefRowHeading_TEXT;
			break;
		case 'IDH_xldefSharedWorkbook':
			L_IDH_xldefSharedWorkbook_TEXT='(shared workbook: A workbook set up to allow multiple users on a network to view and make changes at the same time. Each user who saves the workbook sees the changes made by other users. You must have Excel 97 or later to modify a shared workbook.)';
			sTemp=L_IDH_xldefSharedWorkbook_TEXT;
			break;
		case 'IDH_xldefTable':
			L_IDH_xldefTable_TEXT='(table: A collection of data about a particular subject that is stored in records (rows) and fields (columns).)';
			sTemp=L_IDH_xldefTable_TEXT;
			break;
		case 'IDH_xldefTotals':
			L_IDH_xldefTotals_TEXT='(totals: One of the five calculation types Query defines for you: Sum, Avg, Count, Min, and Max.)';
			sTemp=L_IDH_xldefTotals_TEXT;
			break;
		case 'IDH_xldefTracerArrows':
			L_IDH_xldefTracerArrows_TEXT='(tracer arrows: Arrows that show the relationship between the active cell and its related cells. Tracer arrows are blue when pointing from a cell that provides data to another cell, and red if a cell contains an error value, such as #DIV/0!.)';
			sTemp=L_IDH_xldefTracerArrows_TEXT;
			break;
		case 'IDH_xldefVertexes':
			L_IDH_xldefVertexes_TEXT='(vertexes: Black, square, draggable points that appear at the ends and intersections of lines or curves in certain AutoShapes, such as freeforms, scribbles, and curves.)';
			sTemp=L_IDH_xldefVertexes_TEXT;
			break;
		case 'IDH_xldefWeb':
			L_IDH_xldefWeb_TEXT='(Web: A system for navigating through a collection of workbooks and other Office documents connected by hyperlinks and located on a network share, a company intranet, and the Internet.)';
			sTemp=L_IDH_xldefWeb_TEXT;
			break;
		case 'IDH_xldefWebQuery':
			L_IDH_xldefWebQuery_TEXT='(Web query: A query that retrieves data stored on your intranet or&nbsp;the Internet.)';
			sTemp=L_IDH_xldefWebQuery_TEXT;
			break;
		case 'IDH_xldefWhatifAnalysis':
			L_IDH_xldefWhatifAnalysis_TEXT='(what-if analysis: A process of changing the values in cells to see how those changes affect the outcome of formulas on the worksheet. For example, varying the interest rate that is used in an amortization table to determine the amount of the payments.)';
			sTemp=L_IDH_xldefWhatifAnalysis_TEXT;
			break;
		case 'IDH_xldefWorkspaceFile':
			L_IDH_xldefWorkspaceFile_TEXT='(workspace file: A file that saves display information about open workbooks, so that you can later resume work with the same window sizes, print areas, screen magnification, and display settings. A workspace file doesn\'t contain the workbooks themselves.)';
			sTemp=L_IDH_xldefWorkspaceFile_TEXT;
			break;
		case 'IxldefHighlowLines':
			L_IxldefHighlowLines_TEXT='(high-low lines: In 2-D line charts, lines that extend from the highest to the lowest value in each category. High-low lines are often used in stock charts.)';
			sTemp=L_IxldefHighlowLines_TEXT;
			break;
		case 'qudecIdentifier':
			L_qudecIdentifier_TEXT='(identifier: A field name used in an expression. For example, Order Amount is the identifier (field name) for a field that contains order amounts. You can use an expression (such as Price*Quantity) in place of an identifier.)';
			sTemp=L_qudecIdentifier_TEXT;
			break;
		case 'qudefCriteria':
			L_qudefCriteria_TEXT='(criteria: Conditions you specify to limit which records are included in the result set of a query. For example, the following criterion selects records for which the value for the Order Amount field is greater than 30,000: Order Amount > 30000.)';
			sTemp=L_qudefCriteria_TEXT;
			break;
		case 'qudefDatabase':
			L_qudefDatabase_TEXT='(database: A collection of data related to a particular subject or purpose. Within a database, information about a particular entity, such as an employee or order, is categorized into tables, records, and fields.)';
			sTemp=L_qudefDatabase_TEXT;
			break;
		case 'qudefDataSource':
			L_qudefDataSource_TEXT='(data source: A stored set of \"source\" information used to connect to a database. A data source can include the name and location of the database server, the name of the database driver, and information that the database needs when you log on.)';
			sTemp=L_qudefDataSource_TEXT;
			break;
		case 'qudefExpression':
			L_qudefExpression_TEXT='(expression: A combination of operators, field names, functions, literals, and constants that evaluates to a single value. Expressions can specify criteria (such as Order Amount>10000) or perform calculations on field values (such as Price*Quantity).)';
			sTemp=L_qudefExpression_TEXT;
			break;
		case 'qudefField':
			L_qudefField_TEXT='(field: A category of information, such as last name or order amount, that is stored in a table. When Query displays a result set in its Data pane, a field is represented as a column.)';
			sTemp=L_qudefField_TEXT;
			break;
		case 'qudefInnerJoin':
			L_qudefInnerJoin_TEXT='(inner join: In Query, default type of join between two tables where only the records that have the same values in the joined fields are selected. The two matching records from each table are combined and displayed as one record in the result set.)';
			sTemp=L_qudefInnerJoin_TEXT;
			break;
		case 'qudefJoinLine':
			L_qudefJoinLine_TEXT='(join line: In Query, a line that connects fields between two tables and shows how the data is related. The type of join indicates which records are selected for the query\'s result set.)';
			sTemp=L_qudefJoinLine_TEXT;
			break;
		case 'qudefOperator':
			L_qudefOperator_TEXT='(operator: A sign or symbol that specifies the type of calculation to perform within an expression. There are mathematical, comparison, logical, and reference operators.)';
			sTemp=L_qudefOperator_TEXT;
			break;
		case 'qudefOuterJoin':
			L_qudefOuterJoin_TEXT='(outer join: In Query, a join where all records from one table are selected, even if there are no matching records in another table. Records that match are combined and shown as one. Records that don\'t have matches in the other table are shown empty.)';
			sTemp=L_qudefOuterJoin_TEXT;
			break;
		case 'qudefRecord':
			L_qudefRecord_TEXT='(record: A collection of information about a particular person, place, event, or thing. When Query displays a result set in the Data pane, a record is represented as a row.)';
			sTemp=L_qudefRecord_TEXT;
			break;
		case 'qudefResultset':
			L_qudefResultset_TEXT='(result set: The set of records returned when you run a query. You can see the result set of a query in Query, or you can return a result set to an Excel worksheet for further analysis.)';
			sTemp=L_qudefResultset_TEXT;
			break;
		case 'qudefTable':
			L_qudefTable_TEXT='(table: A collection of data about a particular subject that is stored in records (rows) and fields (columns).)';
			sTemp=L_qudefTable_TEXT;
			break;
		case 'quRowHeading':
			L_quRowHeading_TEXT='(row heading: In Query, the numbered gray area to the left of each row. Click a row heading to select an entire row.)';
			sTemp=L_quRowHeading_TEXT;
			break;
		case 'XlCategoryField':
			L_XlCategoryField_TEXT='(category field: A field that\'s displayed in the category area of the PivotChart report. Items in a category field appear as the labels on the category axis.)';
			sTemp=L_XlCategoryField_TEXT;
			break;
		case 'xlCurrentRegion':
			L_xlCurrentRegion_TEXT='(current region: The block of filled-in cells that includes the currently selected cell or cells. The region extends in all directions to the first empty row or column.)';
			sTemp=L_xlCurrentRegion_TEXT;
			break;
		case 'XlDataTable':
			L_XlDataTable_TEXT='(data table: A range of cells that shows the results of substituting different values in one or more formulas. There are two types of data tables: one-input tables and two-input tables.)';
			sTemp=L_XlDataTable_TEXT;
			break;
		case 'xldecIdentifier':
			L_xldecIdentifier_TEXT='(identifier: A field name used in a Query expression. For example, Order Amount is the identifier (field name) for a field that contains order amounts. You can use an expression (such as Price*Quantity) in place of an identifier.)';
			sTemp=L_xldecIdentifier_TEXT;
			break;
		case 'xldef3DWallsAndFloor':
			L_xldef3DWallsAndFloor_TEXT='(3-D walls and floor: The areas surrounding many 3-D chart types that give dimension and boundaries to the chart. Two walls and one floor are displayed within the plot area.)';
			sTemp=L_xldef3DWallsAndFloor_TEXT;
			break;
		case 'xldefActivate':
			L_xldefActivate_TEXT='(activate: To make a chart sheet or worksheet the active, or selected, sheet. The sheet that you activate determines which menu bar and toolbars are displayed. To activate a sheet, click the tab for the sheet in the workbook.)';
			sTemp=L_xldefActivate_TEXT;
			break;
		case 'xldefActiveCell':
			L_xldefActiveCell_TEXT='(active cell: The selected cell in which data is entered when you begin typing. Only one cell is active at a time. The active cell is bounded by a heavy border.)';
			sTemp=L_xldefActiveCell_TEXT;
			break;
		case 'xldefActiveSheet':
			L_xldefActiveSheet_TEXT='(active sheet: The sheet that you\'re working on in a workbook. The name on the tab of the active sheet is bold.)';
			sTemp=L_xldefActiveSheet_TEXT;
			break;
		case 'xldefAddin':
			L_xldefAddin_TEXT='(Excel add-in: Components that can be installed on your computer to add commands and functions to Excel. These add-in programs are specific to Excel. Other add-in programs that are available for Excel or Office are Component Object Model (COM) add-ins.)';
			sTemp=L_xldefAddin_TEXT;
			break;
		case 'xldefAlternateStartupFolder':
			L_xldefAlternateStartupFolder_TEXT='(alternate startup folder: A folder in addition to the XLStart folder that contains workbooks or other files that you want to be opened automatically when you start Excel and templates that you want to be available when you create new workbooks.)';
			sTemp=L_xldefAlternateStartupFolder_TEXT;
			break;
		case 'xldefArray':
			L_xldefArray_TEXT='(array: Used to build single formulas that produce multiple results or that operate on a group of arguments that are arranged in rows and columns. An array range shares a common formula; an array constant is a group of constants used as an argument.)';
			sTemp=L_xldefArray_TEXT;
			break;
		case 'xldefAssocPT':
			L_xldefAssocPT_TEXT='(associated PivotTable report: The PivotTable report that supplies the source data to the PivotChart report. It is created automatically when you create a new PivotChart report. When you change the layout of either report, the other also changes.)';
			sTemp=L_xldefAssocPT_TEXT;
			break;
		case 'XlDefaultWorksheetTemplate':
			L_XlDefaultWorksheetTemplate_TEXT='(default worksheet template: The Sheet.xlt template that you create to change the default format of new worksheets. Excel uses the template to create a blank worksheet when you add a new worksheet to a workbook.)';
			sTemp=L_XlDefaultWorksheetTemplate_TEXT;
			break;
		case 'xldefAutoformat':
			L_xldefAutoformat_TEXT='(autoformat: A built-in collection of cell formats (such as font size, patterns, and alignment) that you can apply to a range of data. Excel determines the levels of summary and detail in the selected range and applies the formats accordingly.)';
			sTemp=L_xldefAutoformat_TEXT;
			break;
		case 'xldefAxis':
			L_xldefAxis_TEXT='(axis: A line bordering the chart plot area used as a frame of reference for measurement. The y axis is usually the vertical axis and contains data. The x-axis is usually the horizontal axis and contains categories.)';
			sTemp=L_xldefAxis_TEXT;
			break;
		case 'xldefCellReference':
			L_xldefCellReference_TEXT='(cell reference: The set of coordinates that a cell occupies on a worksheet. For example, the reference of the cell that appears at the intersection of column B and row 3 is B3.)';
			sTemp=L_xldefCellReference_TEXT;
			break;
		case 'xldefChartArea':
			L_xldefChartArea_TEXT='(chart area: The entire chart and all its elements.)';
			sTemp=L_xldefChartArea_TEXT;
			break;
		case 'xldefChartSheet':
			L_xldefChartSheet_TEXT='(chart sheet: A sheet in a workbook that contains only a chart. A chart sheet is beneficial when you want to view a chart or a PivotChart report separately from worksheet data or a PivotTable report.)';
			sTemp=L_xldefChartSheet_TEXT;
			break;
		case 'xldefComparisonCriteria':
			L_xldefComparisonCriteria_TEXT='(comparison criteria: A set of search conditions that is used to find data. Comparison criteria can be a series of characters that you want to match, such as \"Northwind Traders,\" or an expression, such as \">300.\")';
			sTemp=L_xldefComparisonCriteria_TEXT;
			break;
		case 'xldefComparisonOperator':
			L_xldefComparisonOperator_TEXT='(comparison operator: A sign that is used in comparison criteria to compare two values. Operators include: = Equal to, > Greater than, < Less than, >= Greater than or equal to, <= Less than or equal to, and <> Not equal to.)';
			sTemp=L_xldefComparisonOperator_TEXT;
			break;
		case 'xldefConsolidationTable':
			L_xldefConsolidationTable_TEXT='(consolidation table: The table of combined results that appears in the destination area. Excel creates the consolidation table by applying the summary function that you select to the source area values that you specify.)';
			sTemp=L_xldefConsolidationTable_TEXT;
			break;
		case 'xldefConstraints':
			L_xldefConstraints_TEXT='(constraints: The limitations placed on a Solver problem. You can apply constraints to adjustable cells, the target cell, or other cells that are directly or indirectly related to the target cell.)';
			sTemp=L_xldefConstraints_TEXT;
			break;
		case 'xldefcopyArea':
			L_xldefcopyArea_TEXT='(copy area: The cells that you copy when you want to paste data into another location. After you copy cells, a moving border appears around them to indicate that they\'ve been copied.)';
			sTemp=L_xldefcopyArea_TEXT;
			break;
		case 'xldefCubeDef':
			L_xldefCubeDef_TEXT='(cube definition: Information, stored by the OLAP Cube Wizard in an .oqy file, that defines how to construct an OLAP cube in memory using data retrieved from a relational database.)';
			sTemp=L_xldefCubeDef_TEXT;
			break;
		case 'xldefCustomCalculation':
			L_xldefCustomCalculation_TEXT='(custom calculation: A method of summarizing values in the data area of a PivotTable report by using the values in other cells in the data area. Use the <b>Show data as</b> list on the PivotTable Field dialog for a data field to create custom calculations.)';
			sTemp=L_xldefCustomCalculation_TEXT;
			break;
		case 'xldefDataForm':
			L_xldefDataForm_TEXT='(data form: A dialog box that displays one complete record at a time. You can use data forms to add, change, locate, and delete records.)';
			sTemp=L_xldefDataForm_TEXT;
			break;
		case 'xldefDataLabel':
			L_xldefDataLabel_TEXT='(data label: A label that provides additional information about a data marker, which represents a single data point or value that originates from a worksheet cell.)';
			sTemp=L_xldefDataLabel_TEXT;
			break;
		case 'xldefDataMarker':
			L_xldefDataMarker_TEXT='(data marker: A bar, area, dot, slice, or other symbol in a chart that represents a single data point or value that originates from a worksheet cell. Related data markers in a chart constitute a data series.)';
			sTemp=L_xldefDataMarker_TEXT;
			break;
		case 'xldefDataPoints':
			L_xldefDataPoints_TEXT='(data points: Individual values that are plotted in a chart. Related data points make up a data series. Data points are represented by bars, columns, lines, slices, dots, and other shapes. These shapes are called data markers.)';
			sTemp=L_xldefDataPoints_TEXT;
			break;
		case 'xldefDataRegion':
			L_xldefDataRegion_TEXT='(data region: A range of cells that contains data and that is bounded by empty cells or worksheet borders.)';
			sTemp=L_xldefDataRegion_TEXT;
			break;
		case 'xldefDataSeries':
			L_xldefDataSeries_TEXT='(data series: Related data points that are plotted in a chart. Each data series in a chart has a unique color or pattern and is represented in the chart legend. You can plot one or more data series in a chart. Pie charts have only one data series.)';
			sTemp=L_xldefDataSeries_TEXT;
			break;
		case 'xldefDataSource':
			L_xldefDataSource_TEXT='(data source: A stored set of \"source\" information used to connect to a database. A data source can include the name and location of the database server, the name of the database driver, and information that the database needs when you log on.)';
			sTemp=L_xldefDataSource_TEXT;
			break;
		case 'xldefDataTable':
			L_xldefDataTable_TEXT='(data table: A range of cells that shows the results of substituting different values in one or more formulas. There are two types of data tables: one-input tables and two-input tables.)';
			sTemp=L_xldefDataTable_TEXT;
			break;
		case 'xldefDataTableInCharts':
			L_xldefDataTableInCharts_TEXT='(data table in charts: A grid that can be added to some charts and contains the numeric data used to create the chart. The data table usually is attached to the category axis of the chart and replaces the tick-mark labels on the category axis.)';
			sTemp=L_xldefDataTableInCharts_TEXT;
			break;
		case 'xldefDataValidation':
			L_xldefDataValidation_TEXT='(data validation: An Excel feature that you can use to define restrictions on what data can or should be entered in a cell, and to display messages that prompt users for correct entries and notify users about incorrect entries.)';
			sTemp=L_xldefDataValidation_TEXT;
			break;
		case 'xldefDefaultStartupWorkbook':
			L_xldefDefaultStartupWorkbook_TEXT='(default startup workbook: The new, unsaved workbook that\'s displayed when you start Excel. The default startup workbook is displayed only if you haven\'t included other workbooks in the XLStart folder.)';
			sTemp=L_xldefDefaultStartupWorkbook_TEXT;
			break;
		case 'xldefDependents':
			L_xldefDependents_TEXT='(dependents: Cells that contain formulas that refer to other cells. For example, if cell D10 contains the formula =B5, cell D10 is a dependent of cell B5.)';
			sTemp=L_xldefDependents_TEXT;
			break;
		case 'xldefDestinationArea':
			L_xldefDestinationArea_TEXT='(destination area: The range of cells that you select to hold the summarized data in a consolidation. The destination area can be on the same worksheet as the source data or on a different worksheet. A worksheet can contain only one consolidation.)';
			sTemp=L_xldefDestinationArea_TEXT;
			break;
		case 'xldefDetailData':
			L_xldefDetailData_TEXT='(detail data: For automatic subtotals and worksheet outlines, the subtotal rows or columns that are totaled by summary data. Detail data is typically adjacent to and either above or to the left of the summary data.)';
			sTemp=L_xldefDetailData_TEXT;
			break;
		case 'xldefDropLines':
			L_xldefDropLines_TEXT='(drop lines: In line and area charts, lines that extend from a data point to the category (x) axis. Useful in area charts to clarify where one data marker ends and the next begins.)';
			sTemp=L_xldefDropLines_TEXT;
			break;
		case 'xldefEmbeddedChart':
			L_xldefEmbeddedChart_TEXT='(embedded chart: A chart that is placed on a worksheet rather than on a separate chart sheet. Embedded charts are beneficial when you want to view or print a chart or a PivotChart report with its source data or other information in a worksheet.)';
			sTemp=L_xldefEmbeddedChart_TEXT;
			break;
		case 'xldefErrorBars':
			L_xldefErrorBars_TEXT='(error bars: Usually used in statistical or scientific data, error bars show potential error or degree of uncertainty relative to each data marker in a series.)';
			sTemp=L_xldefErrorBars_TEXT;
			break;
		case 'xldefFieldButton':
			L_xldefFieldButton_TEXT='(field button: Button that identifies a field in a PivotTable or PivotChart report. You can drag the field buttons to change the layout of the report, or click the arrows next to the buttons to change the level of detail displayed in the report.)';
			sTemp=L_xldefFieldButton_TEXT;
			break;
		case 'XldefFillHandle':
			L_XldefFillHandle_TEXT='(fill handle: The small black square in the lower-right corner of the selection. When you point to the fill handle, the pointer changes to a black cross.)';
			sTemp=L_XldefFillHandle_TEXT;
			break;
		case 'xldefFilter':
			L_xldefFilter_TEXT='(filter: To display only the rows in a list that satisfy the conditions you specify. You use the AutoFilter command to display rows that match one or more specific values, calculated values, or conditions.)';
			sTemp=L_xldefFilter_TEXT;
			break;
		case 'xldefFormula':
			L_xldefFormula_TEXT='(formula: A sequence of values, cell references, names, functions, or operators in a cell that together produce a new value. A formula always begins with an equal sign (=).)';
			sTemp=L_xldefFormula_TEXT;
			break;
		case 'xldefFormulaBar':
			L_xldefFormulaBar_TEXT='(formula bar: A bar at the top of the Excel window that you use to enter or edit values or formulas in cells or charts. Displays the constant value or formula stored in the active cell.)';
			sTemp=L_xldefFormulaBar_TEXT;
			break;
		case 'xldefGoalSeeking':
			L_xldefGoalSeeking_TEXT='(goal seek: A method to find a specific value for a cell by adjusting the value of one other cell. When goal seeking, Excel varies the value in a cell that you specify until a formula that\'s dependent on that cell returns the result you want.)';
			sTemp=L_xldefGoalSeeking_TEXT;
			break;
		case 'xldefGridlines':
			L_xldefGridlines_TEXT='(gridlines in charts: Lines you can add to a chart that make it easier to view and evaluate data. Gridlines extend from the tick marks on an axis across the plot area.)';
			sTemp=L_xldefGridlines_TEXT;
			break;
		case 'xldefGroup':
			L_xldefGroup_TEXT='(group: In an outline or PivotTable report, one or more detail rows or columns that are adjacent and subordinate to a summary row or column.)';
			sTemp=L_xldefGroup_TEXT;
			break;
		case 'xldefInputCell':
			L_xldefInputCell_TEXT='(input cell: The cell in which each input value from a data table is substituted. Any cell on a worksheet can be the input cell. Although the input cell does not need to be part of the data table, the formulas in data tables must refer to the input cell.)';
			sTemp=L_xldefInputCell_TEXT;
			break;
		case 'xldefIteration':
			L_xldefIteration_TEXT='(iteration: Repeated calculation of a worksheet until a specific numeric condition is met.)';
			sTemp=L_xldefIteration_TEXT;
			break;
		case 'xldefLegend':
			L_xldefLegend_TEXT='(legend: A box that identifies the patterns or colors that are assigned to the data series or categories in a chart.)';
			sTemp=L_xldefLegend_TEXT;
			break;
		case 'xldefLegendKey':
			L_xldefLegendKey_TEXT='(legend keys: Symbols in legends that show the patterns and colors assigned to the data series (or categories) in a chart. Legend keys appear to the left of legend entries. Formatting a legend key also formats the data marker that\'s associated with it.)';
			sTemp=L_xldefLegendKey_TEXT;
			break;
		case 'xldefList':
			L_xldefList_TEXT='(list: A series of rows that contains related data or a series of rows that you designate to function as a datasheet by using the <bterm>Create List</bterm> command.)';
			sTemp=L_xldefList_TEXT;
			break;
		case 'xldefMovingAverage':
			L_xldefMovingAverage_TEXT='(moving average: A sequence of averages computed from parts of a data series. In a chart, a moving average smooths the fluctuations in data, thus showing the pattern or trend more clearly.)';
			sTemp=L_xldefMovingAverage_TEXT;
			break;
		case 'xldefNetscapeNot':
			L_xldefNetscapeNot_TEXT='(Internet Explorer: A Web browser that interprets HTML files, formats them into Web pages, and displays them to the user. You can download Internet Explorer from the Microsoft Web site at http://www.microsoft.com.)';
			sTemp=L_xldefNetscapeNot_TEXT;
			break;
		case 'xldefNonadjacentSelections':
			L_xldefNonadjacentSelections_TEXT='(nonadjacent selection: A selection of two or more cells or ranges that don\'t touch each other. When plotting nonadjacent selections in a chart, make sure that the combined selections form a rectangular shape.)';
			sTemp=L_xldefNonadjacentSelections_TEXT;
			break;
		case 'xldefOfflineCubeFile':
			L_xldefOfflineCubeFile_TEXT='(offline cube file: A file you create on your hard disk or a network share to store OLAP source data for a PivotTable or PivotChart report. Offline cube files allow you to keep working when you are not connected to the OLAP server.)';
			sTemp=L_xldefOfflineCubeFile_TEXT;
			break;
		case 'xldefOLAP':
			L_xldefOLAP_TEXT='(OLAP: A database technology that has been optimized for querying and reporting, instead of processing transactions. OLAP data is organized hierarchically and stored in cubes instead of tables.)';
			sTemp=L_xldefOLAP_TEXT;
			break;
		case 'xldefOLAPProvider':
			L_xldefOLAPProvider_TEXT='(OLAP provider: A set of software that provides access to a particular type of OLAP database. This software can include a data source driver and other client software that is necessary to connect to a database.)';
			sTemp=L_xldefOLAPProvider_TEXT;
			break;
		case 'xldefOutline':
			L_xldefOutline_TEXT='(outline: Worksheet data in which rows or columns of detail data are grouped so that you can create summary reports. The outline can summarize either an entire worksheet or a selected portion of it.)';
			sTemp=L_xldefOutline_TEXT;
			break;
		case 'xldefOutlineSymbols':
			L_xldefOutlineSymbols_TEXT='(outline symbols: Symbols that you use to change the view of an outlined worksheet. You can show or hide detailed data by pressing the plus sign, minus sign, and the numbers 1, 2, 3, or 4, indicating the outline level.)';
			sTemp=L_xldefOutlineSymbols_TEXT;
			break;
		case 'XldefPassword':
			L_XldefPassword_TEXT='(password: A way to restrict access to a workbook, worksheet, or part of a worksheet. Excel passwords can be up to 255 letters, numbers, spaces, and symbols. You must type uppercase and lowercase letters correctly when you set and enter passwords.)';
			sTemp=L_XldefPassword_TEXT;
			break;
		case 'xldefPasteArea':
			L_xldefPasteArea_TEXT='(paste area: The target destination for data that\'s been cut or copied by using the Office Clipboard.)';
			sTemp=L_xldefPasteArea_TEXT;
			break;
		case 'xldefPivotArea':
			L_xldefPivotArea_TEXT='(pivot area: The worksheet area into which you drag PivotTable or PivotChart fields to change the layout of the report. On a new report, dashed blue outlines indicate the pivot area on the worksheet.)';
			sTemp=L_xldefPivotArea_TEXT;
			break;
		case 'xldefPivotList':
			L_xldefPivotList_TEXT='(PivotTable list: A Microsoft Office Web Component that allows you to create a structure similar to an Excel PivotTable report. Users can view the PivotTable list in a Web browser and change its layout in a manner similar to an Excel PivotTable report.)';
			sTemp=L_xldefPivotList_TEXT;
			break;
		case 'xldefPivotTable':
			L_xldefPivotTable_TEXT='(PivotTable report: An interactive, crosstabulated Excel report that summarizes and analyzes data, such as database records, from various sources, including ones that are external to Excel.)';
			sTemp=L_xldefPivotTable_TEXT;
			break;
		case 'xldefPivotTableColumnField':
			L_xldefPivotTableColumnField_TEXT='(column field: A field that\'s assigned a column orientation in a PivotTable report. Items associated with a column field are displayed as column labels.)';
			sTemp=L_xldefPivotTableColumnField_TEXT;
			break;
		case 'xldefPivotTableData':
			L_xldefPivotTableData_TEXT='(PivotTable data: In a PivotTable report, the summarized data that\'s calculated from the data fields of a source list or table.)';
			sTemp=L_xldefPivotTableData_TEXT;
			break;
		case 'xldefPivotTableDataArea':
			L_xldefPivotTableDataArea_TEXT='(data area: The part of a PivotTable report that contains summary data. Values in each cell of the data area represent a summary of data from the source records or rows.)';
			sTemp=L_xldefPivotTableDataArea_TEXT;
			break;
		case 'xldefPivotTableDataField':
			L_xldefPivotTableDataField_TEXT='(data field: A field from a source list, table, or database that contains data that is summarized in a PivotTable report or PivotChart report. A data field usually contains numeric data, such as statistics or sales amounts.)';
			sTemp=L_xldefPivotTableDataField_TEXT;
			break;
		case 'xldefPivotTableField':
			L_xldefPivotTableField_TEXT='(field: In a PivotTable or PivotChart report, a category of data that\'s derived from a field in the source data. PivotTable reports have row, column, page, and data fields. PivotChart reports have series, category, page, and data fields.)';
			sTemp=L_xldefPivotTableField_TEXT;
			break;
		case 'xldefPivotTableGrandTotals':
			L_xldefPivotTableGrandTotals_TEXT='(PivotTable grand totals: Total values for all cells in a row or all cells in a column of a PivotTable report. Values in a grand total row or column are calculated by using the same summary function used in the data area of the PivotTable report.)';
			sTemp=L_xldefPivotTableGrandTotals_TEXT;
			break;
		case 'xldefPivotTableItem':
			L_xldefPivotTableItem_TEXT='(item: A subcategory of a field in PivotTable and PivotChart reports. For instance, the field \"Month\" could have items such as \"January,\" \"February,\" and so on.)';
			sTemp=L_xldefPivotTableItem_TEXT;
			break;
		case 'xldefPivotTablePageField':
			L_xldefPivotTablePageField_TEXT='(page field: A field that\'s assigned to a page orientation in a PivotTable or PivotChart report. You can either display a summary of all items in a page field, or display one item at a time, which filters out the data for all other items.)';
			sTemp=L_xldefPivotTablePageField_TEXT;
			break;
		case 'xldefPivotTableRowField':
			L_xldefPivotTableRowField_TEXT='(row field: A field that\'s assigned a row orientation in a PivotTable report. Items associated with a row field are displayed as row labels.)';
			sTemp=L_xldefPivotTableRowField_TEXT;
			break;
		case 'xldefPivotTableSubtotal':
			L_xldefPivotTableSubtotal_TEXT='(PivotTable subtotal: A row or column that uses a summary function to display the total of detail items in a PivotTable field.)';
			sTemp=L_xldefPivotTableSubtotal_TEXT;
			break;
		case 'xldefPlotArea':
			L_xldefPlotArea_TEXT='(plot area: In a 2-D chart, the area bounded by the axes, including all data series. In a 3-D chart, the area bounded by the axes, including the data series, category names, tick-mark labels, and axis titles.)';
			sTemp=L_xldefPlotArea_TEXT;
			break;
		case 'xldefPrecedents':
			L_xldefPrecedents_TEXT='(precedents: Cells that are referred to by a formula in another cell. For example, if cell D10 contains the formula =B5, cell B5 is a precedent to cell D10.)';
			sTemp=L_xldefPrecedents_TEXT;
			break;
		case 'xldefPrintArea':
			L_xldefPrintArea_TEXT='(print area: One or more ranges of cells that you designate to print when you don\'t want to print the entire worksheet. If a worksheet includes a print area, only the print area is printed.)';
			sTemp=L_xldefPrintArea_TEXT;
			break;
		case 'xldefProtect':
			L_xldefProtect_TEXT='(protect: To make settings for a worksheet or workbook that prevent users from viewing or gaining access to the specified worksheet or workbook elements.)';
			sTemp=L_xldefProtect_TEXT;
			break;
		case 'xldefQuery':
			L_xldefQuery_TEXT='(query: In Query or Access, a means of finding the records that answer a particular question you ask about the data stored in a database.)';
			sTemp=L_xldefQuery_TEXT;
			break;
		case 'xldefRange':
			L_xldefRange_TEXT='(range: Two or more cells on a sheet. The cells in a range can be adjacent or nonadjacent.)';
			sTemp=L_xldefRange_TEXT;
			break;
		case 'xldefRegressionAnalysis':
			L_xldefRegressionAnalysis_TEXT='(regression analysis: A form of statistical analysis used for forecasting. Regression analysis estimates the relationship between variables so that a given variable can be predicted from one or more other variables.)';
			sTemp=L_xldefRegressionAnalysis_TEXT;
			break;
		case 'xldefRelativeReference':
			L_xldefRelativeReference_TEXT='(relative reference: In a formula, the address of a cell based on the relative position of the cell that contains the formula and the cell referred to. If you copy the formula, the reference automatically adjusts. A relative reference takes the form A1.)';
			sTemp=L_xldefRelativeReference_TEXT;
			break;
		case 'xldefRsquaredValue':
			L_xldefRsquaredValue_TEXT='(R-squared value: A number from 0 to 1 that reveals how closely the estimated values for the trendline correspond to your actual data. A trendline is most reliable when its R-squared value is at or near 1. Also known as the coefficient of determination.)';
			sTemp=L_xldefRsquaredValue_TEXT;
			break;
		case 'xldefScenario':
			L_xldefScenario_TEXT='(scenario: A named set of input values that you can substitute in a worksheet model.)';
			sTemp=L_xldefScenario_TEXT;
			break;
		case 'xldefScrollLock':
			L_xldefScrollLock_TEXT='(scroll lock: With scroll lock turned on, the arrow keys scroll the active sheet rather than make a different cell active. To turn scroll lock off or on, press the SCROLL LOCK key.)';
			sTemp=L_xldefScrollLock_TEXT;
			break;
		case 'xldefSection':
			L_xldefSection_TEXT='(section: Any combination of a worksheet, view, and scenario that you choose when you create a report. A report can contain several sections.)';
			sTemp=L_xldefSection_TEXT;
			break;
		case 'xldefSelect':
			L_xldefSelect_TEXT='(select: To highlight a cell or range of cells on a worksheet. The selected cells will be affected by the next command or action.)';
			sTemp=L_xldefSelect_TEXT;
			break;
		case 'xldefSeriesLines':
			L_xldefSeriesLines_TEXT='(series lines: In 2-D stacked bar and column charts, lines that connect the data markers in each data series that are used to emphasize the difference in measurement between each series.)';
			sTemp=L_xldefSeriesLines_TEXT;
			break;
		case 'xldefSourceAreas':
			L_xldefSourceAreas_TEXT='(source areas: The cell ranges that you consolidate in the destination area you specify. Source areas can be on any worksheet in a workbook, in other open or closed workbooks, or on Lotus 1-2-3 worksheets.)';
			sTemp=L_xldefSourceAreas_TEXT;
			break;
		case 'xldefSourceDataForPivotTables':
			L_xldefSourceDataForPivotTables_TEXT='(source data: The list or table that\'s used to create a PivotTable or PivotChart report. Source data can be taken from an Excel list or range, an external database or cube, or another PivotTable report.)';
			sTemp=L_xldefSourceDataForPivotTables_TEXT;
			break;
		case 'xldefStandardFont':
			L_xldefStandardFont_TEXT='(standard font: The default text font for worksheets. The standard font determines the default font for the Normal cell style.)';
			sTemp=L_xldefStandardFont_TEXT;
			break;
		case 'xldefSummaryData':
			L_xldefSummaryData_TEXT='(summary data: For automatic subtotals and worksheet outlines, all rows or columns that summarize detail data. Summary data usually is adjacent to and below the detail data.)';
			sTemp=L_xldefSummaryData_TEXT;
			break;
		case 'xldefSummaryFunction':
			L_xldefSummaryFunction_TEXT='(summary function: A type of calculation that combines source data in a PivotTable report or a consolidation table, or when you are inserting automatic subtotals in a list or database. Examples of summary functions include Sum, Count, and Average.)';
			sTemp=L_xldefSummaryFunction_TEXT;
			break;
		case 'xldefTemplate':
			L_xldefTemplate_TEXT='(template: A workbook that you create and use as the basis for other similar workbooks. You can create templates for workbooks and worksheets. The default template for workbooks is called Book.xlt. The default template for worksheets is called Sheet.xlt.)';
			sTemp=L_xldefTemplate_TEXT;
			break;
		case 'xldefTextBox':
			L_xldefTextBox_TEXT='(text box: A rectangular object on a worksheet or chart, in which you can type text.)';
			sTemp=L_xldefTextBox_TEXT;
			break;
		case 'xldefTickMarksAndTickMarkLabels':
			L_xldefTickMarksAndTickMarkLabels_TEXT='(tick marks and tick-mark labels: Tick marks are small lines of measurement, similar to divisions on a ruler, that intersect an axis. Tick-mark labels identify the categories, values, or series in the chart.)';
			sTemp=L_xldefTickMarksAndTickMarkLabels_TEXT;
			break;
		case 'xldefTitlesInCharts':
			L_xldefTitlesInCharts_TEXT='(titles in charts: Descriptive text that is automatically aligned to an axis or centered at the top of a chart.)';
			sTemp=L_xldefTitlesInCharts_TEXT;
			break;
		case 'xldefTrendline':
			L_xldefTrendline_TEXT='(trendline: A graphic representation of trends in data series, such as a line sloping upward to represent increased sales over a period of months. Trendlines are used for the study of problems of prediction, also called regression analysis.)';
			sTemp=L_xldefTrendline_TEXT;
			break;
		case 'xldefTrendlineLabel':
			L_xldefTrendlineLabel_TEXT='(trendline label: Optional text for a trendline, including either the regression equation or the R-squared value, or both. A trendline label can be formatted and moved; it cannot be sized.)';
			sTemp=L_xldefTrendlineLabel_TEXT;
			break;
		case 'xldefUpdownBars':
			L_xldefUpdownBars_TEXT='(up-down bars: In line charts with multiple data series, bars that indicate the difference between data points in the first and last series.)';
			sTemp=L_xldefUpdownBars_TEXT;
			break;
		case 'xldefView':
			L_xldefView_TEXT='(view: A set of display and print settings that you can name and apply to a workbook. You can create more than one view of the same workbook without saving separate copies of the workbook.)';
			sTemp=L_xldefView_TEXT;
			break;
		case 'xldefVisualPrint':
			L_xldefVisualPrint_TEXT='(page break preview: Worksheet view that displays the areas to be printed and the locations of page breaks. The area to be printed is displayed in white, automatic page breaks appear as dashed lines, and manual page breaks appear as solid lines.)';
			sTemp=L_xldefVisualPrint_TEXT;
			break;
		case 'xldefWorksheet':
			L_xldefWorksheet_TEXT='(worksheet: The primary document that you use in Excel to store and work with data. Also called a spreadsheet. A worksheet consists of cells that are organized into columns and rows; a worksheet is always stored in a workbook.)';
			sTemp=L_xldefWorksheet_TEXT;
			break;
		case 'xldefXLControl':
			L_xldefXLControl_TEXT='(Microsoft Excel control: A native Excel control other than an ActiveX control.)';
			sTemp=L_xldefXLControl_TEXT;
			break;
		case 'xlhowExternalData':
			L_xlhowExternalData_TEXT='(external data: Data that is stored outside of Excel. Examples include databases created in Access, dBASE, SQL Server, or on a Web server.)';
			sTemp=L_xlhowExternalData_TEXT;
			break;
		case 'xlinsertrow':
			L_xlinsertrow_TEXT='(Insert row: In a list, a special row that facilitates data entry. The Insert row is indicated by an asterisk.)';
			sTemp=L_xlinsertrow_TEXT;
			break;
		case 'XlItemProperties':
			L_XlItemProperties_TEXT='(property fields: Independent attributes associated with items, or members, in an OLAP cube. For example, if city items have size and population properties stored in the server cube, a PivotTable report can display the size and population of each city.)';
			sTemp=L_XlItemProperties_TEXT;
			break;
		case 'xlmappedrange':
			L_xlmappedrange_TEXT='(mapped range: A range in an XML list that has been linked to an element in an XML map.)';
			sTemp=L_xlmappedrange_TEXT;
			break;
		case 'XlNameBox':
			L_XlNameBox_TEXT='(Name box: Box at left end of the formula bar that identifies the selected cell, chart item, or drawing object. To name a cell or range, type the name in the Name box and press ENTER. To move to and select a named cell, click its name in the Name box.)';
			sTemp=L_XlNameBox_TEXT;
			break;
		case 'XlObjectlink':
			L_XlObjectlink_TEXT='(ObjectLink: An OLE data format that describes a linked object, identifying the class, document name, and name of an object. Each of these data items&nbsp;is a null-terminated string.)';
			sTemp=L_XlObjectlink_TEXT;
			break;
		case 'XlOwnerlink':
			L_XlOwnerlink_TEXT='(OwnerLink: An OLE data format that describes an embedded object, identifying the class, document name, and name of an object. Each of these data items is a null-terminated string.)';
			sTemp=L_XlOwnerlink_TEXT;
			break;
		case 'XlSeriesField':
			L_XlSeriesField_TEXT='(series field:&nbsp;A field that\'s displayed in the series area of a PivotChart report. Items in a series field are listed in the legend and provide the names of the individual data series.)';
			sTemp=L_XlSeriesField_TEXT;
			break;
		case 'xlsinglemappedcell':
			L_xlsinglemappedcell_TEXT='(single-mapped cell: A cell that has been linked to a non-repeating element in an XML map.)';
			sTemp=L_xlsinglemappedcell_TEXT;
			break;
		case 'xltotalrow':
			L_xltotalrow_TEXT='(total row: A special row in a list that provides a selection of aggregate functions useful for working with numerical data.)';
			sTemp=L_xltotalrow_TEXT;
			break;
		case 'XlVisualBasicHelp':
			L_XlVisualBasicHelp_TEXT='(Microsoft Visual Basic Help: To get help for Visual Basic in Excel, point to <b>Macro </b>on the <b>Tools</b>menu, and then click <b>Visual Basic Editor</b>. On the Help menu, click <b>Microsoft Visual Basic Help</b>.)';
			sTemp=L_XlVisualBasicHelp_TEXT;
			break;

		// Office

		case 'acdefbidiAlefHamza':
			L_acdefbidiAlefHamza_TEXT='(Alef Hamzas: A single Arabic character that represents the two-character combination Alef plus Hamza.)';
			sTemp=L_acdefbidiAlefHamza_TEXT;
			break;
		case 'acdefbidiBidirectional':
			L_acdefbidiBidirectional_TEXT='(bidirectional: Describes an environment in which attributes of right-to-left and left-to-right behavior are used together, such as Arabic and English text that appear in the same sentence.)';
			sTemp=L_acdefbidiBidirectional_TEXT;
			break;
		case 'acdefbidiContext':
			L_acdefbidiContext_TEXT='(Context: A reading order and alignment setting that is commonly used in controls that display text. When you select the Context setting, the reading order is determined by the first strong character (not a numeral or special character) that you type.)';
			sTemp=L_acdefbidiContext_TEXT;
			break;
		case 'acdefbidiControlChars':
			L_acdefbidiControlChars_TEXT='(control characters: Characters that are inserted in right-to-left and mixed text to specify the formatting of text when the inherent directionality of the text is insufficient to display expected results.)';
			sTemp=L_acdefbidiControlChars_TEXT;
			break;
		case 'acdefbidiDiacritics':
			L_acdefbidiDiacritics_TEXT='(diacritics: Markings that are printed above, below, or next to a character that indicate how to pronounce it.)';
			sTemp=L_acdefbidiDiacritics_TEXT;
			break;
		case 'acdefbidiDirection':
			L_acdefbidiDirection_TEXT='(direction: Specifies the reading order, alignment, and/or visual appearance of right-to-left text and documents, regardless of the keyboard language. Direction also describes how the user interface, controls, and other screen objects are oriented.)';
			sTemp=L_acdefbidiDirection_TEXT;
			break;
		case 'acdefbidiEnabledLanguage':
			L_acdefbidiEnabledLanguage_TEXT='(enabled languages: Languages that can be added for text editing in Microsoft Office programs. These languages are in addition to the installed language version of the product, and provide additional features to work in a mixed-language environment.)';
			sTemp=L_acdefbidiEnabledLanguage_TEXT;
			break;
		case 'acdefbidiGeneral':
			L_acdefbidiGeneral_TEXT='(General alignment: A format that normally left aligns text and right aligns numbers. When right-to-left features are active, General alignment is extended to include Text mode (always available) and Interface mode (sometimes available).)';
			sTemp=L_acdefbidiGeneral_TEXT;
			break;
		case 'acdefbidiGregorian':
			L_acdefbidiGregorian_TEXT='(Gregorian calendar: The calendar in general use in Western countries. It was introduced in 1582 A.D. as a revision to the Julian calendar.)';
			sTemp=L_acdefbidiGregorian_TEXT;
			break;
		case 'acdefbidiHijri':
			L_acdefbidiHijri_TEXT='(Hijri calendar: The lunar calendar that is used in Islamic regions.)';
			sTemp=L_acdefbidiHijri_TEXT;
			break;
		case 'acdefbidiHindi':
			L_acdefbidiHindi_TEXT='(Hindi numerals: A numeral set that is used in several Arabic regions. Also referred to as Indic numerals.)';
			sTemp=L_acdefbidiHindi_TEXT;
			break;
		case 'acdefbidiKashida':
			L_acdefbidiKashida_TEXT='(kashidas: Special characters used to extend the joiner between two Arabic characters. Used to improve the appearance of justified text by visually lengthening words rather than increasing the spacing between words. Can also function like a hyphen.)';
			sTemp=L_acdefbidiKashida_TEXT;
			break;
		case 'acdefbidiKeyboardLanguage':
			L_acdefbidiKeyboardLanguage_TEXT='(keyboard language: The language selected for entering text.)';
			sTemp=L_acdefbidiKeyboardLanguage_TEXT;
			break;
		case 'acdefbidiLeftToRight':
			L_acdefbidiLeftToRight_TEXT='(left-to-right: Refers to keyboard settings, document views, user interface objects, and the direction in which text is displayed. English and most other European languages are left-to-right languages.)';
			sTemp=L_acdefbidiLeftToRight_TEXT;
			break;
		case 'acdefbidiLogical':
			L_acdefbidiLogical_TEXT='(logical: Used to describe insertion point movement and text selection when working with bidirectional text. Movement progresses within bidirectional text according to the direction of the language encountered.)';
			sTemp=L_acdefbidiLogical_TEXT;
			break;
		case 'acdefbidiNeutrals':
			L_acdefbidiNeutrals_TEXT='(neutral characters: Characters that do not have strong right-to-left or left-to-right language attributes. Numerals are an example of neutral characters.)';
			sTemp=L_acdefbidiNeutrals_TEXT;
			break;
		case 'acdefbidiReadingOrder':
			L_acdefbidiReadingOrder_TEXT='(reading order: The visual order in which characters, words, and groups of words are displayed. English and most other European languages are displayed in left-to-right order and Hebrew, Arabic, Farsi, and Urdu are displayed in right-to-left order.)';
			sTemp=L_acdefbidiReadingOrder_TEXT;
			break;
		case 'defNavigationMode':
			L_defNavigationMode_TEXT='(Navigation mode: The mode in Microsoft Access in which an entire field is selected and the insertion point is not visible. In Navigation mode, you can move between fields by using the arrow keys.)';
			sTemp=L_defNavigationMode_TEXT;
			break;
		case 'IDH_ofdefActiveXAddin':
			L_IDH_ofdefActiveXAddin_TEXT='(COM add-in: A supplemental program that extends the capabilities of a Microsoft Office program by adding custom commands and specialized features. COM add-ins can run in one or more Office programs. COM add-ins use the file name extension .dll or .exe.)';
			sTemp=L_IDH_ofdefActiveXAddin_TEXT;
			break;
		case 'IDH_ofdefApplicationNote':
			L_IDH_ofdefApplicationNote_TEXT='(Application Note: A technical article, written and distributed by Microsoft, that provides additional information about a Microsoft product or a fix for a known issue. May include a disk that contains new software, documentation, or sample files.)';
			sTemp=L_IDH_ofdefApplicationNote_TEXT;
			break;
		case 'IDH_ofdefAutoshapes':
			L_IDH_ofdefAutoshapes_TEXT='(AutoShapes: A group of ready-made shapes that includes basic shapes, such as rectangles and circles, plus a variety of lines and connectors, block arrows, flowchart symbols, stars and banners, and callouts.)';
			sTemp=L_IDH_ofdefAutoshapes_TEXT;
			break;
		case 'IDH_ofdefBrowser':
			L_IDH_ofdefBrowser_TEXT='(browser: Software that interprets HTML files, formats them into Web pages, and displays them. A Web browser, such as Microsoft Internet Explorer, can follow hyperlinks, transfer files, and play sound or video files that are embedded in Web pages.)';
			sTemp=L_IDH_ofdefBrowser_TEXT;
			break;
		case 'IDH_ofdefCache':
			L_IDH_ofdefCache_TEXT='(cache: A special memory subsystem in which frequently used data values, such as files that are made available for use offline, are duplicated for quick access. Changes made to the cached copy of a file are not reflected in the source copy of the file.)';
			sTemp=L_IDH_ofdefCache_TEXT;
			break;
		case 'IDH_ofdefCascadingStyleSheets':
			L_IDH_ofdefCascadingStyleSheets_TEXT='(cascading style sheets (CSS): Declarations, either embedded in a Web page or stored in a separate .css file that is linked to a Web page, that specify the appearance of particular HTML elements.)';
			sTemp=L_IDH_ofdefCascadingStyleSheets_TEXT;
			break;
		case 'IDH_ofdefCondition':
			L_IDH_ofdefCondition_TEXT='(condition: Part of the criteria that a field must meet for searching or filtering. Some conditions must be used with a value; for example, the field Author with the condition <b>equals</b> with the value Jane.)';
			sTemp=L_IDH_ofdefCondition_TEXT;
			break;
		case 'IDH_ofdefDataAccessPage':
			L_IDH_ofdefDataAccessPage_TEXT='(data access page: A Web page, published from Access, that has a connection to a database. In a data access page, you can view, add to, edit, and manipulate the data stored in the database. A page can also include data from other sources, such as Excel.)';
			sTemp=L_IDH_ofdefDataAccessPage_TEXT;
			break;
		case 'IDH_ofdefDigitalCertificate':
			L_IDH_ofdefDigitalCertificate_TEXT='(digital certificate: Attachment for a file, macro project, or e-mail message that vouches for authenticity, provides secure encryption, or supplies a verifiable signature. To digitally sign macro projects, you must install a digital certification.)';
			sTemp=L_IDH_ofdefDigitalCertificate_TEXT;
			break;
		case 'IDH_ofdefDigitalSignature':
			L_IDH_ofdefDigitalSignature_TEXT='(digital signature: An electronic, encryption-based, secure stamp of authentication on a macro or document. This signature confirms that the macro or document originated from the signer and has not been altered.)';
			sTemp=L_IDH_ofdefDigitalSignature_TEXT;
			break;
		case 'IDH_ofdefDirectoryServer':
			L_IDH_ofdefDirectoryServer_TEXT='(directory server: Also called an Internet Locator Service (ILS) server. A computer that lists the names and e-mail addresses of people who are running NetMeeting and who are logged on to the server. This information is used to connect to their computers.)';
			sTemp=L_IDH_ofdefDirectoryServer_TEXT;
			break;
		case 'IDH_ofdefDynamicHTML':
			L_IDH_ofdefDynamicHTML_TEXT='(DHTML: An extension of Hypertext Markup Language (HTML) that adds multimedia, database access, and an object model that programs can use to change styles and attributes of page elements (objects) and to replace existing elements (objects) with new ones.)';
			sTemp=L_IDH_ofdefDynamicHTML_TEXT;
			break;
		case 'IDH_ofdefEncoding':
			L_IDH_ofdefEncoding_TEXT='(encoding: The byte (or sequence of bytes) representing each character in an HTML or plain text file. Unicode encoding supports all characters in all languages and is readable in Microsoft Internet Explorer 4.0 or later and Netscape Navigator 4.0 or later.)';
			sTemp=L_IDH_ofdefEncoding_TEXT;
			break;
		case 'IDH_ofdefExpression':
			L_IDH_ofdefExpression_TEXT='(expression: Any combination of mathematical or logical operators, constants, functions, and names of fields, controls, and properties that evaluates to a single value. Expressions can perform calculations, manipulate characters, or test data.)';
			sTemp=L_IDH_ofdefExpression_TEXT;
			break;
		case 'IDH_ofdefFileServer':
			L_IDH_ofdefFileServer_TEXT='(file server: A file-storage device on a local area network that is accessible to users on the network. A file server not only stores files but manages them and maintains order as network users request files and make changes to them.)';
			sTemp=L_IDH_ofdefFileServer_TEXT;
			break;
		case 'IDH_ofdefFixedFileLocation':
			L_IDH_ofdefFixedFileLocation_TEXT='(fixed file location: The full or absolute address of a file. For example, www.microsoft.com/location/sublocation/filename.htm. By contrast, a relative file location is an address that\'s relative to the active document or a hyperlink base.)';
			sTemp=L_IDH_ofdefFixedFileLocation_TEXT;
			break;
		case 'IDH_ofdefGlobalTextDirection':
			L_IDH_ofdefGlobalTextDirection_TEXT='(Global text direction: Defines the flow of text in text entry boxes and edit controls. You can choose a left-to-right or right-to-left direction, or base the direction on the context of the first strong character that is detected.)';
			sTemp=L_IDH_ofdefGlobalTextDirection_TEXT;
			break;
		case 'IDH_ofdefGraphicsInterchangeFormatGIF':
			L_IDH_ofdefGraphicsInterchangeFormatGIF_TEXT='(GIF: A graphics file format (.gif extension in Windows) used to display indexed-color graphics on the World Wide Web. It supports up to 256 colors and uses lossless compression, meaning that no image data is lost when the file is compressed.)';
			sTemp=L_IDH_ofdefGraphicsInterchangeFormatGIF_TEXT;
			break;
		case 'IDH_ofdefHTMLExtensions':
			L_IDH_ofdefHTMLExtensions_TEXT='(HTML extensions: A feature or setting that is an extension to the formal HTML specification. Extensions may not be supported by all Web browsers, but they may be used widely by Web authors. An example of an extension is marquee scrolling text.)';
			sTemp=L_IDH_ofdefHTMLExtensions_TEXT;
			break;
		case 'IDH_ofdefIndexingTasks':
			L_IDH_ofdefIndexingTasks_TEXT='(indexing tasks: An action that Find Fast performs on an index, such as creating an index, or deleting or updating an existing index.)';
			sTemp=L_IDH_ofdefIndexingTasks_TEXT;
			break;
		case 'IDH_ofdefJavaApplet':
			L_IDH_ofdefJavaApplet_TEXT='(Java applet: A small software program written in the Java language, a programming language that is used primarily on the World Wide Web. A Java applet is located within an HTML document and can be used to add to animation, music, page updates, and so on.)';
			sTemp=L_IDH_ofdefJavaApplet_TEXT;
			break;
		case 'IDH_ofdefJPEG':
			L_IDH_ofdefJPEG_TEXT='(JPEG: A graphics file format (.jpg extension in Microsoft Windows) supported by many Web browsers that was developed for compressing and storing photographic images. It\'s best used for graphics with many colors, such as scanned photos.)';
			sTemp=L_IDH_ofdefJPEG_TEXT;
			break;
		case 'IDH_ofdefKeywords':
			L_IDH_ofdefKeywords_TEXT='(keyword: A word or phrase that identifies important topics in a workbook, presentation, or other Microsoft Office document. You can use keywords to index files you created in Microsoft Excel, Word, PowerPoint, and Outlook.)';
			sTemp=L_IDH_ofdefKeywords_TEXT;
			break;
		case 'IDH_ofdefLanguageFolder':
			L_IDH_ofdefLanguageFolder_TEXT='(language folder: The folder in which various translated files are stored. Each language has a different subfolder that corresponds to its locale identification number (LCID). For example, in a U.S. English installation, the LCID is 1033.)';
			sTemp=L_IDH_ofdefLanguageFolder_TEXT;
			break;
		case 'IDH_ofdefMacroProject':
			L_IDH_ofdefMacroProject_TEXT='(macro project: A collection of components, including forms, code, and class modules, that make up a macro. Macro projects created in Microsoft Visual Basic for Applications can be included in add-ins and in most Microsoft Office programs.)';
			sTemp=L_IDH_ofdefMacroProject_TEXT;
			break;
		case 'IDH_ofdefMicrosoftDownloadService':
			L_IDH_ofdefMicrosoftDownloadService_TEXT='(MSDL: A standard bulletin board system. It contains the Microsoft Software Library (MSL), technical articles, device drivers, Help files, and other support files you can download from Microsoft.)';
			sTemp=L_IDH_ofdefMicrosoftDownloadService_TEXT;
			break;
		case 'IDH_ofdefMicrosoftFrontPage':
			L_IDH_ofdefMicrosoftFrontPage_TEXT='(Microsoft FrontPage: A program you can use to create and manage Internet and intranet sites without programming. Available with Microsoft Office or as a stand-alone product.)';
			sTemp=L_IDH_ofdefMicrosoftFrontPage_TEXT;
			break;
		case 'IDH_ofdefMicrosoftKnowledgeBase':
			L_IDH_ofdefMicrosoftKnowledgeBase_TEXT='(Microsoft Knowledge Base (KB): The primary source of product information for Microsoft support engineers and customers. A complete collection of articles containing detailed how-to information, answers to technical-support questions, and known issues.)';
			sTemp=L_IDH_ofdefMicrosoftKnowledgeBase_TEXT;
			break;
		case 'IDH_ofdefMicrosoftOfficeServerExtensionsOSE':
			L_IDH_ofdefMicrosoftOfficeServerExtensionsOSE_TEXT='(Microsoft Office Server Extensions: Software that enhances the functionality of Microsoft Office 2002 and your Web browser by extending the functionality of a Web server to provide publishing, collaboration, and document management capabilities.)';
			sTemp=L_IDH_ofdefMicrosoftOfficeServerExtensionsOSE_TEXT;
			break;
		case 'IDH_ofdefMicrosoftSoftwareLibrary':
			L_IDH_ofdefMicrosoftSoftwareLibrary_TEXT='(MSL: A collection of free binary (nontext) files for all Microsoft products that is located on the Internet. The MSL contains device drivers, utilities, Help files, and technical articles.)';
			sTemp=L_IDH_ofdefMicrosoftSoftwareLibrary_TEXT;
			break;
		case 'IDH_ofdefMultipurposeInternetMailExtensionsMIME':
			L_IDH_ofdefMultipurposeInternetMailExtensionsMIME_TEXT='(MIME: A list of standards for conveying multimedia resources via Internet connections. The MIME type informs a program what the object contains (for instance, graphics, sounds, or videos).)';
			sTemp=L_IDH_ofdefMultipurposeInternetMailExtensionsMIME_TEXT;
			break;
		case 'IDH_ofdefNavigationPane':
			L_IDH_ofdefNavigationPane_TEXT='(navigation pane: The area in the Help window that contains the Table of Contents, the Answer Wizard, and the Index.)';
			sTemp=L_IDH_ofdefNavigationPane_TEXT;
			break;
		case 'IDH_ofdefOffline':
			L_IDH_ofdefOffline_TEXT='(offline: In reference to one or more computers, not being connected to a network.)';
			sTemp=L_IDH_ofdefOffline_TEXT;
			break;
		case 'IDH_ofdefOLE':
			L_IDH_ofdefOLE_TEXT='(OLE: A program-integration technology that you can use to share information between programs. All Office programs support OLE, so you can share information through linked and embedded objects.)';
			sTemp=L_IDH_ofdefOLE_TEXT;
			break;
		case 'IDH_ofdefOperatingSystem':
			L_IDH_ofdefOperatingSystem_TEXT='(operating system: The software that controls the allocation and usage of hardware resources such as memory, central processing unit (CPU) time, disk space, and peripheral devices. The operating system is the foundation on which programs are built.)';
			sTemp=L_IDH_ofdefOperatingSystem_TEXT;
			break;
		case 'IDH_ofdefPath':
			L_IDH_ofdefPath_TEXT='(path: The route that the operating system uses to locate a folder or file; for example, C:\\House finances\\March.doc.)';
			sTemp=L_IDH_ofdefPath_TEXT;
			break;
		case 'IDH_ofdefPortalNetworkGraphicsPNG':
			L_IDH_ofdefPortalNetworkGraphicsPNG_TEXT='(PNG: A graphic file format that is supported by some World Wide Web browsers. PNG supports variable transparency of images (alpha channels) and control of image brightness on different computers (gamma correction). PNG files are compressed bitmaps.)';
			sTemp=L_IDH_ofdefPortalNetworkGraphicsPNG_TEXT;
			break;
		case 'IDH_ofdefPublish':
			L_IDH_ofdefPublish_TEXT='(publish: To save a copy of a file in Hypertext Markup Language (HTML) format to a Web server.)';
			sTemp=L_IDH_ofdefPublish_TEXT;
			break;
		case 'IDH_ofdefRealtime':
			L_IDH_ofdefRealtime_TEXT='(real time: The actual time in which events occur. When documents are shared in real time, any changes made to them are instantly visible to everyone sharing the document.)';
			sTemp=L_IDH_ofdefRealtime_TEXT;
			break;
		case 'IDH_ofdefRelationalDatabase':
			L_IDH_ofdefRelationalDatabase_TEXT='(relational database: A type of database that stores information in tables. Uses matching values from two tables to relate data in one table to data in the other table. In a relational database, you typically store a specific type of data just once.)';
			sTemp=L_IDH_ofdefRelationalDatabase_TEXT;
			break;
		case 'IDH_ofdefRelativeLink':
			L_IDH_ofdefRelativeLink_TEXT='(relative link: When a hyperlink uses a path based on a relative link, you can move the file that contains the hyperlink and the hyperlink destination without breaking the hyperlink. Move the file that contains the hyperlink and its destination together.)';
			sTemp=L_IDH_ofdefRelativeLink_TEXT;
			break;
		case 'IDH_ofdefReplication':
			L_IDH_ofdefReplication_TEXT='(replication: A process, used by the synchronization feature, that copies selected files from a Web server to your hard disk. This process makes it possible for you to view and modify these files when you are not connected to the Web server.)';
			sTemp=L_IDH_ofdefReplication_TEXT;
			break;
		case 'IDH_ofdefRichText':
			L_IDH_ofdefRichText_TEXT='(rich text field: A field that can show formatting and graphics, such as an embedded object, and not just text.)';
			sTemp=L_IDH_ofdefRichText_TEXT;
			break;
		case 'IDH_ofdefRoamingUserProfile':
			L_IDH_ofdefRoamingUserProfile_TEXT='(roaming user profile: A group of settings that defines customization preferences and options for a particular user, as well as personalized files, such as custom dictionaries and templates.)';
			sTemp=L_IDH_ofdefRoamingUserProfile_TEXT;
			break;
		case 'IDH_ofdefScreenTips':
			L_IDH_ofdefScreenTips_TEXT='(ScreenTips: Notes that appear on the screen to provide information about a toolbar button, tracked change, or comment, or to display a footnote or endnote. ScreenTips also display the text that will appear if you choose to insert a date or AutoText entry.)';
			sTemp=L_IDH_ofdefScreenTips_TEXT;
			break;
		case 'IDH_ofdefScriptAnchor':
			L_IDH_ofdefScriptAnchor_TEXT='(script anchor: The visual representation of a script on a Web page that you open in a Microsoft Office program. Script anchors are not displayed by default. Different script anchors represent scripts written in different scripting languages.)';
			sTemp=L_IDH_ofdefScriptAnchor_TEXT;
			break;
		case 'IDH_ofdefSecureSocketsLayerSSL':
			L_IDH_ofdefSecureSocketsLayerSSL_TEXT='(Secure Sockets Layer (SSL): A proposed open standard that was developed by Netscape Communications for establishing a secure communications channel to prevent the interception of critical information, such as credit card numbers.)';
			sTemp=L_IDH_ofdefSecureSocketsLayerSSL_TEXT;
			break;
		case 'IDH_ofdefSecurityFile':
			L_IDH_ofdefSecurityFile_TEXT='(security file: A file that contains a digital code that makes it possible to seal messages or to add a digital signature to messages. This file can be stored on a 3.5-inch disk or on your computer\'s hard disk.)';
			sTemp=L_IDH_ofdefSecurityFile_TEXT;
			break;
		case 'IDH_ofdefServer':
			L_IDH_ofdefServer_TEXT='(server: On a local area network, a computer that controls access to all or part of the network and its resources, such as printers. On the World Wide Web, a computer running Web server software that responds to HTTP protocol requests. Also called a host.)';
			sTemp=L_IDH_ofdefServer_TEXT;
			break;
		case 'IDH_ofdefShortcut':
			L_IDH_ofdefShortcut_TEXT='(shortcut: An icon that points to a program or file that is stored in another location.)';
			sTemp=L_IDH_ofdefShortcut_TEXT;
			break;
		case 'IDH_ofdefSynchronization':
			L_IDH_ofdefSynchronization_TEXT='(synchronization: The process of comparing files that have been replicated from a Web server to another computer, for the purpose of keeping the files updated.)';
			sTemp=L_IDH_ofdefSynchronization_TEXT;
			break;
		case 'IDH_ofdefTextQuery':
			L_IDH_ofdefTextQuery_TEXT='(text query: One or more phrases that can contain operators, quotation marks, wildcards such as * or ?, and parentheses.)';
			sTemp=L_IDH_ofdefTextQuery_TEXT;
			break;
		case 'IDH_ofdefTheMicrosoftNetwork':
			L_IDH_ofdefTheMicrosoftNetwork_TEXT='(MSN: Internet connectivity service with which you can exchange messages with people worldwide; read news, sports, weather, and financial information; find answers to technical questions; and download from a collection of thousands of programs.)';
			sTemp=L_IDH_ofdefTheMicrosoftNetwork_TEXT;
			break;
		case 'IDH_ofdefThreadedDiscussion':
			L_IDH_ofdefThreadedDiscussion_TEXT='(threaded discussion: In an online forum, such as a newsgroup, a series of messages or articles in which replies to a message are nested directly under it instead of arranged in chronological or alphabetical order.)';
			sTemp=L_IDH_ofdefThreadedDiscussion_TEXT;
			break;
		case 'IDH_ofdefTopicPane':
			L_IDH_ofdefTopicPane_TEXT='(topic pane: The area of the Help window that contains a Help topic.)';
			sTemp=L_IDH_ofdefTopicPane_TEXT;
			break;
		case 'IDH_ofdefUserProfile':
			L_IDH_ofdefUserProfile_TEXT='(user profile: Settings that define customization preferences for a particular user, as well as personalized files such as custom dictionaries and AutoCorrect lists. The operating system uses these settings to configure your computer when you log on.)';
			sTemp=L_IDH_ofdefUserProfile_TEXT;
			break;
		case 'IDH_ofdefValue':
			L_IDH_ofdefValue_TEXT='(value: The text, date, number, or logical input that completes a condition that a field must meet for searching or filtering. For example, the field Author with the condition <b>equals</b> must include a value, such as <b>John</b>, to be complete.)';
			sTemp=L_IDH_ofdefValue_TEXT;
			break;
		case 'IDH_ofdefVectorGraphics':
			L_IDH_ofdefVectorGraphics_TEXT='(vector graphics: The representation of graphic objects such as lines, arcs, and squares by using geometrical formulas. By contrast, bitmapped graphics (also called raster graphics) are stored as a collection of pixels.)';
			sTemp=L_IDH_ofdefVectorGraphics_TEXT;
			break;
		case 'IDH_ofdefVectorMarkupLanguageVML':
			L_IDH_ofdefVectorMarkupLanguageVML_TEXT='(Vector Markup Language (VML): A system of marking up, or tagging, two-dimensional vector graphics for publishing on the World Wide Web. VML graphics are scalable and editable, usually take less time to download, and require less disk space.)';
			sTemp=L_IDH_ofdefVectorMarkupLanguageVML_TEXT;
			break;
		case 'IDH_ofdefWAV':
			L_IDH_ofdefWAV_TEXT='(WAV: A file format in which Windows stores sounds as waveforms. Such files have the extension .wav. Depending on various factors, one minute of sound can occupy as little as 644 kilobytes or as much as 27 megabytes of storage.)';
			sTemp=L_IDH_ofdefWAV_TEXT;
			break;
		case 'IDH_ofdefWhiteboard':
			L_IDH_ofdefWhiteboard_TEXT='(Whiteboard: Microsoft NetMeeting feature that opens a separate window in which online meeting participants can type text; draw shapes; copy, paste, and delete objects; and highlight or point to text and graphics.)';
			sTemp=L_IDH_ofdefWhiteboard_TEXT;
			break;
		case 'IDH_ofdefWorldWideWeb':
			L_IDH_ofdefWorldWideWeb_TEXT='(World Wide Web (WWW): The multimedia branch of the Internet that presents not only text, but also graphics, sound, and video. On the Web, users can easily jump from item to item, page to page, or site to site by using hyperlinks.)';
			sTemp=L_IDH_ofdefWorldWideWeb_TEXT;
			break;
		case 'IDH_oftipServer':
			L_IDH_oftipServer_TEXT='(Web server: A computer that hosts Web pages and responds to requests from browsers. Also known as an HTTP server, a Web server stores files whose URLs begin with <b>http://</b>.)';
			sTemp=L_IDH_oftipServer_TEXT;
			break;
		case 'IDH_oftipToolbar':
			L_IDH_oftipToolbar_TEXT='(toolbar: A bar with buttons and options that you use to carry out commands. To display a toolbar, click  <b>Customize</b> on the <b>Tools</b> menu, and then click the <b>Toolbars</b> tab.)';
			sTemp=L_IDH_oftipToolbar_TEXT;
			break;
		case 'IDH_ppdefJavaScript':
			L_IDH_ppdefJavaScript_TEXT='(JavaScript: A scripting language that can be used to add functionality to a Web page or a Web site, or to enhance the look of one. JavaScript scripts can run on any type of client or server computer.)';
			sTemp=L_IDH_ppdefJavaScript_TEXT;
			break;
		case 'IDH_redefPublicFolder':
			L_IDH_redefPublicFolder_TEXT='(public folder: Folder on a public server that people can use to share information, such as work information, discussions, contacts, tasks, and classified ads. Permissions determine who can view and alter the folder and to what extent.)';
			sTemp=L_IDH_redefPublicFolder_TEXT;
			break;
		case 'ofAbsoluteCellReference':
			L_ofAbsoluteCellReference_TEXT='(absolute cell reference: In a formula, the exact address of a cell, regardless of the position of the cell that contains the formula. An absolute cell reference takes the form $A$1.)';
			sTemp=L_ofAbsoluteCellReference_TEXT;
			break;
		case 'OfAbsoluteLink':
			L_OfAbsoluteLink_TEXT='(absolute link: A hyperlink to the exact location of a file on a file server, the World Wide Web, or a company intranet. Absolute links use an exact path; if you move the file containing the hyperlink or a hyperlink destination, the link breaks.)';
			sTemp=L_OfAbsoluteLink_TEXT;
			break;
		case 'ofAbsoluteURL':
			L_ofAbsoluteURL_TEXT='(absolute URL: The full Internet address of a page or other World Wide Web resource. The absolute URL includes a protocol, such as \"http,\" network location, and optional path and file name. For example, http://example.microsoft.com/.)';
			sTemp=L_ofAbsoluteURL_TEXT;
			break;
		case 'ofAccessibility':
			L_ofAccessibility_TEXT='(accessibility: The quality of a given system of hardware or software that makes it usable by people with one or more physical disabilities, such as restricted mobility, blindness, or deafness.)';
			sTemp=L_ofAccessibility_TEXT;
			break;
		case 'OfAccessibilityAids':
			L_OfAccessibilityAids_TEXT='(accessibility aids: Utilities that make computers easier to use for people with disabilities. Examples of accessibility aids include screen readers, speech recognition programs, and on-screen keyboards.)';
			sTemp=L_OfAccessibilityAids_TEXT;
			break;
		case 'ofAccessKey':
			L_ofAccessKey_TEXT='(access key: A key combination, such as ALT+F, that moves the focus to a menu, command, or control, without using the mouse.)';
			sTemp=L_ofAccessKey_TEXT;
			break;
		case 'OfActions':
			L_OfActions_TEXT='(actions: Tasks that can be performed by using smart tags. For example, adding a name to a Microsoft Outlook Contacts folder is one action that might be taken with a person name smart tag.)';
			sTemp=L_OfActions_TEXT;
			break;
		case 'ofActiveHyperlink':
			L_ofActiveHyperlink_TEXT='(active hyperlink: A hyperlink that is currently selected in a Web browser. Some Web browsers indicate the active hyperlink by changing its color.)';
			sTemp=L_ofActiveHyperlink_TEXT;
			break;
		case 'ofActiveServerPage':
			L_ofActiveServerPage_TEXT='(Active Server Page (ASP): A file that contains embedded server-side scripting that is executed on a server and sent to and displayed in a client Web browser as a standard HTML file.)';
			sTemp=L_ofActiveServerPage_TEXT;
			break;
		case 'ofActiveX':
			L_ofActiveX_TEXT='(ActiveX: A set of technologies that enables software components to interact with one another in a networked environment, regardless of the language in which the components were created.)';
			sTemp=L_ofActiveX_TEXT;
			break;
		case 'ofActiveXComponent':
			L_ofActiveXComponent_TEXT='(component/ActiveX component: An application that can use objects supplied by another application, or that exposes its own objects for use by another application.)';
			sTemp=L_ofActiveXComponent_TEXT;
			break;
		case 'ofActiveXControl':
			L_ofActiveXControl_TEXT='(ActiveX control: A control, such as a check box or button that offers options to users or runs macros or scripts that automate a task. You can write macros for the control in Microsoft Visual Basic for Applications or scripts in Microsoft Script Editor.)';
			sTemp=L_ofActiveXControl_TEXT;
			break;
		case 'ofAddIn':
			L_ofAddIn_TEXT='(add-in: A supplemental program that adds custom commands or custom features to Microsoft Office.)';
			sTemp=L_ofAddIn_TEXT;
			break;
		case 'ofAdjustmentHandle':
			L_ofAdjustmentHandle_TEXT='(adjustment handle: A diamond-shaped handle used to adjust the appearance but not the size of most AutoShapes. For example, you can adjust a rounded rectangle to be more or less rounded.)';
			sTemp=L_ofAdjustmentHandle_TEXT;
			break;
		case 'ofADO':
			L_ofADO_TEXT='(ActiveX Data Objects (ADO): A data access interface that communicates with OLE DB-compliant data sources to connect to, retrieve, manipulate, and update data.)';
			sTemp=L_ofADO_TEXT;
			break;
		case 'ofAliasSQL':
			L_ofAliasSQL_TEXT='(alias (SQL): An alternative name for a table or field in expressions. Often used to shorten the table or field name for subsequent references in code, to prevent possible ambiguous references, or to provide a more descriptive name in query output.)';
			sTemp=L_ofAliasSQL_TEXT;
			break;
		case 'ofAliasVBA':
			L_ofAliasVBA_TEXT='(alias (VBA): An alternate name that you give to an external procedure to avoid conflict with a Visual Basic keyword, public variable, constant, or a name not allowed by the Visual Basic naming conventions.)';
			sTemp=L_ofAliasVBA_TEXT;
			break;
		case 'ofAlignment':
			L_ofAlignment_TEXT='(alignment: The consistent positioning of text, graphics, and other objects. Types of alignment include left, right, and justified.)';
			sTemp=L_ofAlignment_TEXT;
			break;
		case 'ofAlternativeText':
			L_ofAlternativeText_TEXT='(alternative text: Used by Web browsers to display text during image downloads for users who have graphics turned off and for users who rely on screen-reading software to convert graphics on the screen to spoken words.)';
			sTemp=L_ofAlternativeText_TEXT;
			break;
		case 'ofAnonymousNamedBinding':
			L_ofAnonymousNamedBinding_TEXT='(anonymous and named binding: Ways of binding to a directory. Anonymous users can access a limited area of the directory. Named users may be able to set attributes and may have access to more areas of the directory, if the administrator allows it.)';
			sTemp=L_ofAnonymousNamedBinding_TEXT;
			break;
		case 'ofANSICharacterSet':
			L_ofANSICharacterSet_TEXT='(ANSI character set: An 8-bit character set used by Microsoft Windows that allows you to represent up to 256 characters (0 through 255) by using your keyboard. The ASCII character set is a subset of the ANSI set.)';
			sTemp=L_ofANSICharacterSet_TEXT;
			break;
		case 'ofantialiasing':
			L_ofantialiasing_TEXT='(anti-aliasing: The smoothing of jagged edges in graphical elements and text. Anti-aliasing softens the roughness of jagged lines or curves by shading neighboring pixels.)';
			sTemp=L_ofantialiasing_TEXT;
			break;
		case 'ofApplet':
			L_ofApplet_TEXT='(applet: A Java class that is loaded and run by an already-running Java application (any Web browser capable of interpreting Java). Java applets are frequently used to add multimedia effects and interactivity to Web pages, such as video and animations.)';
			sTemp=L_ofApplet_TEXT;
			break;
		case 'ofArgument':
			L_ofArgument_TEXT='(argument: A value that provides information to an action, an event, a method, a property, a function, or a procedure.)';
			sTemp=L_ofArgument_TEXT;
			break;
		case 'ofArray':
			L_ofArray_TEXT='(array: A variable that contains a finite number of elements that have a common name and data type. Each element of an array is identified by a unique index number. Changes made to one element of an array don\'t affect the other elements.)';
			sTemp=L_ofArray_TEXT;
			break;
		case 'ofASCII':
			L_ofASCII_TEXT='(ASCII: Code representing characters in the English language as numbers. Each character is assigned a number from 0 to 127. Most computers use ASCII to represent text and to transfer data from one computer to another.)';
			sTemp=L_ofASCII_TEXT;
			break;
		case 'ofAssistantOb':
			L_ofAssistantOb_TEXT='(Assistant object: The <B>Assistant</B> is the shared Microsoft Office Assistant object. It is a fully programmable object.)';
			sTemp=L_ofAssistantOb_TEXT;
			break;
		case 'OfAssistantShape':
			L_OfAssistantShape_TEXT='(assistant shape: In an organization chart, a shape that is placed below and connected to any other shape with an elbow connector. This shape is placed above any additional subordinate shapes for the particular superior shape it is attached to.)';
			sTemp=L_OfAssistantShape_TEXT;
			break;
		case 'ofAttribute':
			L_ofAttribute_TEXT='(attribute: An object or text feature, such as line fill or text color, that you can manipulate by using drawing tools and menu commands.)';
			sTemp=L_ofAttribute_TEXT;
			break;
		case 'OfAuthenticate':
			L_OfAuthenticate_TEXT='(authenticate: Process used to validate a certificate\'s source delivered by a Web site or used to sign a macro. If the security level enabled on the computer cannot authenticate the digital signature, the certificate is ignored or the user is prompted.)';
			sTemp=L_OfAuthenticate_TEXT;
			break;
		case 'ofAuthentication':
			L_ofAuthentication_TEXT='(authentication: In a multiuser or network environment, the process of validating user logon information. A name and password are compared to an authorized list, and, if there is a match, access is granted with the level of permission specified.)';
			sTemp=L_ofAuthentication_TEXT;
			break;
		case 'ofAuthenticationdatabase':
			L_ofAuthenticationdatabase_TEXT='(authentication database: A database on a server that matches user names to passwords.)';
			sTemp=L_ofAuthenticationdatabase_TEXT;
			break;
		case 'ofAutomation':
			L_ofAutomation_TEXT='(Automation: A way to work with an application\'s objects from another application or development tool. Formerly called OLE Automation, Automation is an industry standard and a feature of the Component Object Model (COM).)';
			sTemp=L_ofAutomation_TEXT;
			break;
		case 'ofAutomationObject':
			L_ofAutomationObject_TEXT='(Automation object: An object supplied by a component that supports Automation. Can also be called an ActiveX object or simply an object.)';
			sTemp=L_ofAutomationObject_TEXT;
			break;
		case 'ofBevel':
			L_ofBevel_TEXT='(bevel: A three-dimensional edge effect that is applied to the border of an object.)';
			sTemp=L_ofBevel_TEXT;
			break;
		case 'ofbidiDecoTypeNaskh':
			L_ofbidiDecoTypeNaskh_TEXT='(DecoType Ruq\'ah: Enriches the display of Arabic text by using the Ruq\'ah script. This script uses object linking and embedding (OLE) to create and add objects to a document.)';
			sTemp=L_ofbidiDecoTypeNaskh_TEXT;
			break;
		case 'ofbidiDecoTypeRuqah':
			L_ofbidiDecoTypeRuqah_TEXT='(DecoType Naskh: Enriches the display of Arabic text by using the Naskh script. This script uses object linking and embedding (OLE) to create and add objects to a document.)';
			sTemp=L_ofbidiDecoTypeRuqah_TEXT;
			break;
		case 'ofBinary':
			L_ofBinary_TEXT='(binary: A file that contains encoded information that is interpreted according to the application that created it. In general, a binary file can be edited only by the application in which it was created.)';
			sTemp=L_ofBinary_TEXT;
			break;
		case 'ofBinder':
			L_ofBinder_TEXT='(Binder: A Microsoft Office program that you can use to organize related documents. You can check spelling, number pages consecutively across all documents in the binder, and print the documents.)';
			sTemp=L_ofBinder_TEXT;
			break;
		case 'ofBitmap':
			L_ofBitmap_TEXT='(bitmap: A picture made from a series of small dots, much like a piece of graph paper with certain squares filled in to form shapes and lines. When stored as files, bitmaps usually have the extension .bmp.)';
			sTemp=L_ofBitmap_TEXT;
			break;
		case 'ofBleed':
			L_ofBleed_TEXT='(bleed: The extent to which a picture runs off the printed page.)';
			sTemp=L_ofBleed_TEXT;
			break;
		case 'ofBookmark':
			L_ofBookmark_TEXT='(bookmark: A location or selection of text in a file that you name for reference purposes. Bookmarks identify a location within your file that you can later refer or link to.)';
			sTemp=L_ofBookmark_TEXT;
			break;
		case 'ofBoolean':
			L_ofBoolean_TEXT='(Boolean: An expression that can be evaluated as either true (nonzero) or false (0). You can use the keywords <B>True</B> and <B>False</B> to supply the values of -1 and 0, respectively. The field data type Yes/No is Boolean and has the value of -1 for Yes)';
			sTemp=L_ofBoolean_TEXT;
			break;
		case 'ofBreakMode':
			L_ofBreakMode_TEXT='(break mode: A temporary suspension of program execution while in the development environment. In break mode, you can examine, debug, reset, step through, or continue program execution.)';
			sTemp=L_ofBreakMode_TEXT;
			break;
		case 'ofBreakPoint':
			L_ofBreakPoint_TEXT='(breakpoint: A line of code in a <B>Function</B> or <B>Sub</B> procedure at which Microsoft Visual Basic automatically suspends execution.)';
			sTemp=L_ofBreakPoint_TEXT;
			break;
		case 'ofBrokenHyperlink':
			L_ofBrokenHyperlink_TEXT='(broken hyperlink: A hyperlink that points to an incorrect URL or a missing page or file.)';
			sTemp=L_ofBrokenHyperlink_TEXT;
			break;
		case 'ofBrowserSafe':
			L_ofBrowserSafe_TEXT='(browser safe: Designed to be used with a range of Web browsers. For example, a browser-safe color palette protects against color flashing or inaccurate color mapping, problems common to pictures whose palettes are incompatible with certain browsers.)';
			sTemp=L_ofBrowserSafe_TEXT;
			break;
		case 'ofBrowsersafepalette':
			L_ofBrowsersafepalette_TEXT='(browser-safe palette: A palette of colors designed to display pictures on the Web, regardless of the browser or operating system used. A browser-safe color palette protects against color-flashing or inaccurate color mapping.)';
			sTemp=L_ofBrowsersafepalette_TEXT;
			break;
		case 'OfBuiltinMenu':
			L_OfBuiltinMenu_TEXT='(built-in menu: A menu included with Microsoft Office; it is not created by the user.)';
			sTemp=L_OfBuiltinMenu_TEXT;
			break;
		case 'OfBuiltinToolbar':
			L_OfBuiltinToolbar_TEXT='(built-in toolbar: A toolbar included with Microsoft Office programs; it is not created by the user.)';
			sTemp=L_OfBuiltinToolbar_TEXT;
			break;
		case 'ofBullet':
			L_ofBullet_TEXT='(bullet: A dot or other symbol that is placed before text, such as items in a list, to add emphasis.)';
			sTemp=L_ofBullet_TEXT;
			break;
		case 'ofCaseSensitive':
			L_ofCaseSensitive_TEXT='(case-sensitive: Capable of distinguishing between uppercase and lowercase letters. A case-sensitive search finds only text that is an exact match of uppercase and lowercase letters.)';
			sTemp=L_ofCaseSensitive_TEXT;
			break;
		case 'ofCell':
			L_ofCell_TEXT='(cell: A box formed by the intersection of a row and column in a worksheet or a table, in which you enter information.)';
			sTemp=L_ofCell_TEXT;
			break;
		case 'ofCharacter':
			L_ofCharacter_TEXT='(character: A letter, number, punctuation mark, or symbol.)';
			sTemp=L_ofCharacter_TEXT;
			break;
		case 'ofCharacterEntity':
			L_ofCharacterEntity_TEXT='(character entity: A code that\'s used in HTML to describe symbols, international letters, and other special characters. Character entities are maintained by the International Standards Organization (ISO).)';
			sTemp=L_ofCharacterEntity_TEXT;
			break;
		case 'ofCharacterFormatting':
			L_ofCharacterFormatting_TEXT='(character formatting: Formatting you can apply to selected text characters.)';
			sTemp=L_ofCharacterFormatting_TEXT;
			break;
		case 'OfCharacterSet':
			L_OfCharacterSet_TEXT='(character set: A grouping of alphabetic, numeric, and other characters that have some relationship in common. For example, the standard ASCII character set includes letters, numbers, symbols, and control codes that make up the ASCII coding scheme.)';
			sTemp=L_OfCharacterSet_TEXT;
			break;
		case 'ofCharacterspacing':
			L_ofCharacterspacing_TEXT='(character spacing: The distance between characters in a line of text. Tracking, kerning, and scaling can be used to adjust the space between characters.)';
			sTemp=L_ofCharacterspacing_TEXT;
			break;
		case 'OfChartComponent':
			L_OfChartComponent_TEXT='(Chart Component: A Microsoft Office Web Component that provides interactive charting functionality on a Web page. You can illustrate data in a chart and give users the ability to change data, change chart options, and see changes reflected in the chart.)';
			sTemp=L_OfChartComponent_TEXT;
			break;
		case 'ofCitation':
			L_ofCitation_TEXT='(citation: A reference to a specific legal case, statute, or other legal document.)';
			sTemp=L_ofCitation_TEXT;
			break;
		case 'ofClass':
			L_ofClass_TEXT='(class: The definition for an object, including its name, its properties and methods, and any events that it has. When you create an instance of a class, you create a new object with all of the characteristics defined by that class.)';
			sTemp=L_ofClass_TEXT;
			break;
		case 'ofClassModule':
			L_ofClassModule_TEXT='(class module: A module that can contain the definition for a new object. When you create a new instance of a class, you create the new object. Procedures defined in the module become the properties and methods of the object.)';
			sTemp=L_ofClassModule_TEXT;
			break;
		case 'ofClear':
			L_ofClear_TEXT='(clear: To change a setting to \"off\" or to remove a value.)';
			sTemp=L_ofClear_TEXT;
			break;
		case 'ofClip':
			L_ofClip_TEXT='(clip: A single media file, including art, sound, animation, or movies.)';
			sTemp=L_ofClip_TEXT;
			break;
		case 'ofclipart':
			L_ofclipart_TEXT='(clip art: A single piece of ready-made art, often appearing as a bitmap or a combination of drawn shapes.)';
			sTemp=L_ofclipart_TEXT;
			break;
		case 'OfClipCollection':
			L_OfClipCollection_TEXT='(clip collection: A hierarchical organization of media clips. You can create your own clip collections, import clip collections, or add, move, or copy clips from one collection to another.)';
			sTemp=L_OfClipCollection_TEXT;
			break;
		case 'OfClipGallery':
			L_OfClipGallery_TEXT='(Clip Organizer: Microsoft Office program that contains drawings, photographs, sounds, videos, and other media files that you can insert and use in presentations, publications, and other Office documents.)';
			sTemp=L_OfClipGallery_TEXT;
			break;
		case 'OfCodePage':
			L_OfCodePage_TEXT='(code page: A table that relates the binary character codes used by a program to keys on the keyboard or to the appearance of characters on the display. Code pages are a means of providing support for the languages used in different countries.)';
			sTemp=L_OfCodePage_TEXT;
			break;
		case 'ofCodeWindow':
			L_ofCodeWindow_TEXT='(Code window: A window in the Microsoft Visual Basic Editor in which you write, display, and edit Visual Basic code. You can open as many Code windows as you have modules.)';
			sTemp=L_ofCodeWindow_TEXT;
			break;
		case 'ofCollection':
			L_ofCollection_TEXT='(collection: An object that contains a set of related objects. An object\'s position in the collection can change whenever a change occurs in the collection; therefore, the position of any specific object in the collection may vary.)';
			sTemp=L_ofCollection_TEXT;
			break;
		case 'ofColumn':
			L_ofColumn_TEXT='(column: Either the vertical arrangement of text into one or more side-by-side sections, or the vertical arrangement of cells in a table.)';
			sTemp=L_ofColumn_TEXT;
			break;
		case 'ofCommandLine':
			L_ofCommandLine_TEXT='(command line: The string of characters used to start an application.)';
			sTemp=L_ofCommandLine_TEXT;
			break;
		case 'ofCompileTime':
			L_ofCompileTime_TEXT='(compile time: The time during which Visual Basic prepares code for execution. Modules automatically compile before they run.)';
			sTemp=L_ofCompileTime_TEXT;
			break;
		case 'ofcomponentobjectmodelcom':
			L_ofcomponentobjectmodelcom_TEXT='(Component Object Model (COM): A specification developed by Microsoft for building software components that can be assembled into programs or can add functionality to existing programs running on Microsoft Windows operating systems.)';
			sTemp=L_ofcomponentobjectmodelcom_TEXT;
			break;
		case 'ofCompressionutility':
			L_ofCompressionutility_TEXT='(compression utility: A software program that reduces a file\'s size for storage on a disk. If a compressed file is too large to fit onto a single disk, the compression utility copies it onto multiple disks.)';
			sTemp=L_ofCompressionutility_TEXT;
			break;
		case 'ofConcordance':
			L_ofConcordance_TEXT='(concordance file: An index file with two columns: the first column lists the text in the document that you want to index, and the second column lists the index entries to generate from the text in the first column.)';
			sTemp=L_ofConcordance_TEXT;
			break;
		case 'ofConditionalCompilerConstant':
			L_ofConditionalCompilerConstant_TEXT='(conditional compiler constant: A Visual Basic identifier that\'s defined in the host application or by using the <b>#Const</b> compiler directive, and used by other compiler directives to determine when or if certain blocks of code are compiled.)';
			sTemp=L_ofConditionalCompilerConstant_TEXT;
			break;
		case 'ofConditionalExpression':
			L_ofConditionalExpression_TEXT='(conditional expression: An expression evaluated and compared to a value; for example, <b>If...Then</b> and <b>Select Case</b> statements. If the condition is met, one or more operations are performed. If it isn\'t met, the operation is skipped.)';
			sTemp=L_ofConditionalExpression_TEXT;
			break;
		case 'ofConstant':
			L_ofConstant_TEXT='(constant: A value that is not calculated and, therefore, does not change. For example, the number 210, and the text \"Quarterly Earnings\" are constants. An expression, or a value resulting from an expression, is not a constant.)';
			sTemp=L_ofConstant_TEXT;
			break;
		case 'ofControl':
			L_ofControl_TEXT='(control: A graphical user interface object, such as a text box, check box, scroll bar, or command button, that lets users control the program. You use controls to display data or choices, perform an action, or make the user interface easier to read.)';
			sTemp=L_ofControl_TEXT;
			break;
		case 'ofCoordinatePair':
			L_ofCoordinatePair_TEXT='(coordinate pair: A pair of values representing the x- and y-coordinates of a point that are stored in a two-dimensional array that can contain coordinates for many points.)';
			sTemp=L_ofCoordinatePair_TEXT;
			break;
		case 'ofCounter':
			L_ofCounter_TEXT='(counter: A program that is used on a Web page to count the number of people that have visited that site.)';
			sTemp=L_ofCounter_TEXT;
			break;
		case 'OfCoworkerShape':
			L_OfCoworkerShape_TEXT='(coworker shape: In an organization chart, a shape next to another shape that is connected to the same superior (or manager) shape.)';
			sTemp=L_OfCoworkerShape_TEXT;
			break;
		case 'ofCriteria':
			L_ofCriteria_TEXT='(criteria: Conditions you specify to limit which records are included in the result set of a query or filter.)';
			sTemp=L_ofCriteria_TEXT;
			break;
		case 'ofCrop':
			L_ofCrop_TEXT='(crop: To trim vertical or horizontal edges of an object. Pictures are often cropped to focus attention on a particular area.)';
			sTemp=L_ofCrop_TEXT;
			break;
		case 'ofCube':
			L_ofCube_TEXT='(cube: An OLAP data structure. A cube contains dimensions, like Country/Region/City, and data fields, like Sales Amount. Dimensions organize types of data into hierarchies with levels of detail, and data fields measure quantities.)';
			sTemp=L_ofCube_TEXT;
			break;
		case 'ofCustomDialogBox':
			L_ofCustomDialogBox_TEXT='(custom dialog box: A modal pop-up form you create to ask the user for additional information or to display a message.)';
			sTemp=L_ofCustomDialogBox_TEXT;
			break;
		case 'ofCustomdictionary':
			L_ofCustomdictionary_TEXT='(custom dictionary: A list of words not in the standard dictionary that an author wants the spelling checker to accept as correct.)';
			sTemp=L_ofCustomdictionary_TEXT;
			break;
		case 'OfCycleDiagram':
			L_OfCycleDiagram_TEXT='(Cycle diagram: A diagram that is used to show a process that has a continuous cycle.)';
			sTemp=L_OfCycleDiagram_TEXT;
			break;
		case 'ofDAO':
			L_ofDAO_TEXT='(Data Access Objects (DAO): A data access interface that communicates with Microsoft Jet and ODBC-compliant data sources to connect to, retrieve, manipulate, and update data and the database structure.)';
			sTemp=L_ofDAO_TEXT;
			break;
		case 'ofDatabase':
			L_ofDatabase_TEXT='(database: A collection of data related to a particular subject or purpose. Within a database, information about a particular entity, such as an employee or order, is categorized into tables, records, and fields.)';
			sTemp=L_ofDatabase_TEXT;
			break;
		case 'ofDataSource':
			L_ofDataSource_TEXT='(data source: A file that contains the information to be merged into a document. For example, the list of names and addresses you want to use in a mail merge. You must connect to the data source before you can use the information in it.)';
			sTemp=L_ofDataSource_TEXT;
			break;
		case 'ofDataType':
			L_ofDataType_TEXT='(data type: The characteristic of a field that determines what type of data it can hold. Data types include Boolean, Integer, Long, Currency, Single, Double, Date, String, and Variant (default).)';
			sTemp=L_ofDataType_TEXT;
			break;
		case 'ofDDEchannel':
			L_ofDDEchannel_TEXT='(Dynamic Data Exchange (DDE) channel: An active link between Microsoft Windows programs over which data can be exchanged.)';
			sTemp=L_ofDDEchannel_TEXT;
			break;
		case 'ofDebugging':
			L_ofDebugging_TEXT='(debugging: The process of finding and fixing errors in a Visual Basic procedure or a macro. Debugging usually involves executing specific portions of the procedure or macro and analyzing them at various points.)';
			sTemp=L_ofDebugging_TEXT;
			break;
		case 'ofdefAnimatedGIF':
			L_ofdefAnimatedGIF_TEXT='(animated GIF: A file that contains a series of Graphics Interchange Format (GIF) images that are displayed in rapid sequence by some Web browsers to produce an animated effect.)';
			sTemp=L_ofdefAnimatedGIF_TEXT;
			break;
		case 'ofDefault':
			L_ofDefault_TEXT='(default: A predefined setting. You can accept the default option settings, or you can change them to suit your own preferences.)';
			sTemp=L_ofDefault_TEXT;
			break;
		case 'ofDefaultProperty':
			L_ofDefaultProperty_TEXT='(default properties and methods: Visual Basic applies the default property or method to a given object to resolve an expression that wouldn\'t otherwise be valid. You can omit the keywords for default properties or methods in your code.)';
			sTemp=L_ofDefaultProperty_TEXT;
			break;
		case 'ofdefBinding':
			L_ofdefBinding_TEXT='(early and late binding: The verification of an object variable referring to an object from another application, either at compile time (early) or run time (late). Late bound code is slower than early bound code.)';
			sTemp=L_ofdefBinding_TEXT;
			break;
		case 'ofdefButtonControl':
			L_ofdefButtonControl_TEXT='(button control: A button on a toolbar or a menu item on a menu, submenu, or shortcut menu that runs a command when it\'s clicked. Toolbar buttons and menu items share the same properties and methods.)';
			sTemp=L_ofdefButtonControl_TEXT;
			break;
		case 'ofdefComboBoxControl':
			L_ofdefComboBoxControl_TEXT='(combo box control: A custom edit box, drop-down list box, or combo box on a menu bar, toolbar, menu, submenu, or shortcut menu. When a toolbar is docked vertically, any custom combo box controls that it contains aren\'t visible.)';
			sTemp=L_ofdefComboBoxControl_TEXT;
			break;
		case 'ofdefCommandBar':
			L_ofdefCommandBar_TEXT='(command bar: Toolbars, menu bars, and shortcut (right-click) menus are combined into a single functionality, called \"toolbars\" in the user interface, and \"command bars\" in VBA. Command bars can be one of three types: menu bar, toolbar, or pop-up menu.)';
			sTemp=L_ofdefCommandBar_TEXT;
			break;
		case 'ofdefCommandBarControl':
			L_ofdefCommandBarControl_TEXT='(command bar control: A built-in or custom control on a menu bar, toolbar, menu, submenu, or shortcut menu. Custom controls you can add to command bars include buttons, edit boxes, drop-down list boxes, and pop-up controls, which display a menu or submenu.)';
			sTemp=L_ofdefCommandBarControl_TEXT;
			break;
		case 'ofdefInputMethodEditor':
			L_ofdefInputMethodEditor_TEXT='(IME: A program that enters East Asian text (Traditional Chinese, Simplified Chinese, Japanese, or Korean) into programs by converting keystrokes into complex East Asian characters. The IME is treated as an alternate type of keyboard layout.)';
			sTemp=L_ofdefInputMethodEditor_TEXT;
			break;
		case 'ofdefListBox':
			L_ofdefListBox_TEXT='(list box: A control that provides a list of choices. A list box consists of a list and an optional label.)';
			sTemp=L_ofdefListBox_TEXT;
			break;
		case 'ofdefLiteral':
			L_ofdefLiteral_TEXT='(literal: A value used exactly as you see it. For example, the number 25 and the string \"Hello\" are both literals. You can use literals in expressions, and you can assign literals to constants or variables in Visual Basic.)';
			sTemp=L_ofdefLiteral_TEXT;
			break;
		case 'ofdefLocalizedVersion':
			L_ofdefLocalizedVersion_TEXT='(localized version: A version of a program that has been translated into another language, also known as an international version. For example, France, Hungary, and the United States all use different localized versions of Microsoft Word.)';
			sTemp=L_ofdefLocalizedVersion_TEXT;
			break;
		case 'ofdefLocalsWindow':
			L_ofdefLocalsWindow_TEXT='(Locals window: A window in the Visual Basic Editor that automatically displays all of the declared variables, and their values, in the current procedure.)';
			sTemp=L_ofdefLocalsWindow_TEXT;
			break;
		case 'ofdefLogo':
			L_ofdefLogo_TEXT='(logo: A distinctive symbol that identifies you, your business, or your organization. It can combine a name, motto, and graphics.)';
			sTemp=L_ofdefLogo_TEXT;
			break;
		case 'ofdefLongDataType':
			L_ofdefLongDataType_TEXT='(Long data type: A fundamental data type that holds large integers. A <b>Long</b> variable is stored as a 32-bit number ranging in value from -2,147,483,648 to 2,147,483,647.)';
			sTemp=L_ofdefLongDataType_TEXT;
			break;
		case 'ofdefMacro':
			L_ofdefMacro_TEXT='(macro: An action or a set of actions you can use to automate tasks. Macros are recorded in the Visual Basic for Applications programming language.)';
			sTemp=L_ofdefMacro_TEXT;
			break;
		case 'ofdefMailto':
			L_ofdefMailto_TEXT='(mailto: The Internet protocol used to send electronic mail.)';
			sTemp=L_ofdefMailto_TEXT;
			break;
		case 'ofdefMainDocument':
			L_ofdefMainDocument_TEXT='(main document: In a mail-merge operation in Word, the document that contains the text and graphics that are the same for each version of the merged document, for example, the return address or salutation in a form letter.)';
			sTemp=L_ofdefMainDocument_TEXT;
			break;
		case 'ofdefMAPI':
			L_ofdefMAPI_TEXT='(MAPI: The Microsoft interface specification that allows different messaging and workgroup applications (including e-mail, voice mail, and fax) to work through a single client.)';
			sTemp=L_ofdefMAPI_TEXT;
			break;
		case 'ofdefMargin':
			L_ofdefMargin_TEXT='(margin: The blank space outside the printing area on a page.)';
			sTemp=L_ofdefMargin_TEXT;
			break;
		case 'ofdefMenu':
			L_ofdefMenu_TEXT='(menu: A list of commands that is displayed when you click a menu name on a menu bar or other toolbar.)';
			sTemp=L_ofdefMenu_TEXT;
			break;
		case 'ofdefMenuBar':
			L_ofdefMenuBar_TEXT='(menu bar: The horizontal bar below the title bar that contains the names of menus. A menu bar can be the built-in menu bar or a custom menu bar.)';
			sTemp=L_ofdefMenuBar_TEXT;
			break;
		case 'ofdefMenuBarMacro':
			L_ofdefMenuBarMacro_TEXT='(menu bar macro: A macro containing AddMenu actions that you can use to create a custom menu bar or shortcut menu.)';
			sTemp=L_ofdefMenuBarMacro_TEXT;
			break;
		case 'ofdefMergeField':
			L_ofdefMergeField_TEXT='(merge field: A placeholder that you insert in the main document. For example, insert the merge field Â«CityÂ» to have Word insert a city name, such as \"Paris,\" that\'s stored in the City data field.)';
			sTemp=L_ofdefMergeField_TEXT;
			break;
		case 'ofdefMetafile':
			L_ofdefMetafile_TEXT='(metafile: A vector-based graphic. Metafiles are represented as collections of lines rather than pixels, so you can manipulate them without the distortions common to bitmap (raster) graphics.)';
			sTemp=L_ofdefMetafile_TEXT;
			break;
		case 'ofdefMETAtag':
			L_ofdefMETAtag_TEXT='(META tag: An HTML tag that appears in the HEAD portion of the Web page. META tags supply information about a page but do not affect its appearance. A standard META tag, \"generator,\" is used to indicate the content of a Web page.)';
			sTemp=L_ofdefMETAtag_TEXT;
			break;
		case 'ofdefMethod':
			L_ofdefMethod_TEXT='(method: A procedure similar to a statement or function that operates on specific objects. For example, you can apply the <b>Print</b> method to the <b>Debug</b> object to transfer printed output to the Immediate window.)';
			sTemp=L_ofdefMethod_TEXT;
			break;
		case 'ofdefMicrosoftVisualBasic':
			L_ofdefMicrosoftVisualBasic_TEXT='(Microsoft Visual Basic: A high-level, visual-programming version of Basic. Visual Basic was developed by Microsoft for building Windows-based applications.)';
			sTemp=L_ofdefMicrosoftVisualBasic_TEXT;
			break;
		case 'ofdefMicrosoftVisualBasicforApplications':
			L_ofdefMicrosoftVisualBasicforApplications_TEXT='(Visual Basic for Applications (VBA): A macro-language version of Microsoft Visual Basic that is used to program Windows applications and is included with several Microsoft applications.)';
			sTemp=L_ofdefMicrosoftVisualBasicforApplications_TEXT;
			break;
		case 'ofdefMicrosoftVisualBasicScriptingEdition':
			L_ofdefMicrosoftVisualBasicScriptingEdition_TEXT='(Visual Basic Scripting Edition (VBScript): A subset of the Microsoft Visual Basic programming system. Microsoft Internet Explorer version 3.0 or later, along with the other Web browsers, can read VBScript programs that are embedded in HTML pages.)';
			sTemp=L_ofdefMicrosoftVisualBasicScriptingEdition_TEXT;
			break;
		case 'ofdefMicrosoftVisualScriptEditor':
			L_ofdefMicrosoftVisualScriptEditor_TEXT='(Microsoft Script Editor: Used to add text, edit HTML tags, and edit any Microsoft Visual Basic Scripting Edition (VBScript) code in a data access page. You can also view your page in the Script Editor as it would appear in a Web browser.)';
			sTemp=L_ofdefMicrosoftVisualScriptEditor_TEXT;
			break;
		case 'ofdefMicrosoftVisualSourceSafe':
			L_ofdefMicrosoftVisualSourceSafe_TEXT='(Microsoft Visual SourceSafe: A professional document source-control system developed by Microsoft. FrontPage can be integrated with Visual SourceSafe when both applications are installed on the same computer.)';
			sTemp=L_ofdefMicrosoftVisualSourceSafe_TEXT;
			break;
		case 'ofdefModal':
			L_ofdefModal_TEXT='(modal: A window or dialog box that requires the user to take some action before the focus can switch to another form or dialog box. Dialog boxes and messages are usually modal.)';
			sTemp=L_ofdefModal_TEXT;
			break;
		case 'ofdefModule':
			L_ofdefModule_TEXT='(module: A collection of declarations, statements, and procedures stored together as one named unit. There are two types of modules: standard modules and class modules.)';
			sTemp=L_ofdefModule_TEXT;
			break;
		case 'ofdefMultipleSelection':
			L_ofdefMultipleSelection_TEXT='(multiple selection: The process of selecting nonadjacent and adjacent files and objects.)';
			sTemp=L_ofdefMultipleSelection_TEXT;
			break;
		case 'ofdefNetworklocation':
			L_ofdefNetworklocation_TEXT='(network location: In a URL, a unique name that identifies an Internet server. A network location has two or more parts, separated by periods, as in microsoft.com. Also called host name and Internet address.)';
			sTemp=L_ofdefNetworklocation_TEXT;
			break;
		case 'ofdefNonbreakingspace':
			L_ofdefNonbreakingspace_TEXT='(nonbreaking space: A space that\'s used to prevent multiple words from breaking if they fall at the end of a line. For example, you can prevent \"Microsoft Office\" from breaking; instead, the entire item moves to the beginning of the next line.)';
			sTemp=L_ofdefNonbreakingspace_TEXT;
			break;
		case 'ofdefNonprintingregion':
			L_ofdefNonprintingregion_TEXT='(nonprinting region: The area along the edges of a page that cannot be printed on. Different printers have different nonprinting regions.)';
			sTemp=L_ofdefNonprintingregion_TEXT;
			break;
		case 'ofdefNumericExpression':
			L_ofdefNumericExpression_TEXT='(numeric expression: Any expression that evaluates to a number. The expression can be any combination of variables, constants, functions, and operators.)';
			sTemp=L_ofdefNumericExpression_TEXT;
			break;
		case 'ofdefObject':
			L_ofdefObject_TEXT='(object: A table, chart, graphic, equation, or other form of information. Objects created in one application, for example spreadsheets, and linked or embedded in another application are OLE objects.)';
			sTemp=L_ofdefObject_TEXT;
			break;
		case 'ofdefObjectBrowser':
			L_ofdefObjectBrowser_TEXT='(Object Browser: A dialog box that displays information about objects, properties, methods, and constants in the current project and in referenced object libraries, and that you use to search for an element, get help on it, or paste it into a module.)';
			sTemp=L_ofdefObjectBrowser_TEXT;
			break;
		case 'ofdefODBCDriver':
			L_ofdefODBCDriver_TEXT='(Open Database Connectivity (ODBC) driver: A program file used to connect to a particular database. Each database program, such as Access or dBASE, or database management system, such as SQL Server, requires a different driver.)';
			sTemp=L_ofdefODBCDriver_TEXT;
			break;
		case 'ofdefOpenDatabaseConnectivity':
			L_ofdefOpenDatabaseConnectivity_TEXT='(Open Database Connectivity (ODBC): A standard method of sharing data between databases and programs. ODBC drivers use the standard Structured Query Language (SQL) to gain access to external data.)';
			sTemp=L_ofdefOpenDatabaseConnectivity_TEXT;
			break;
		case 'ofdefOperator':
			L_ofdefOperator_TEXT='(operator: A sign or symbol that specifies the type of calculation to perform within an expression. There are mathematical, comparison, logical, and reference operators.)';
			sTemp=L_ofdefOperator_TEXT;
			break;
		case 'ofdefPane':
			L_ofdefPane_TEXT='(pane: A portion of the document window bounded by and separated from other portions by vertical or horizontal bars.)';
			sTemp=L_ofdefPane_TEXT;
			break;
		case 'ofdefParagraphStyle':
			L_ofdefParagraphStyle_TEXT='(paragraph style: A combination of character- and paragraph-formatting characteristics that are named and stored as a set. You can select a paragraph and use the style to apply all of the formatting characteristics to the paragraph at one time.)';
			sTemp=L_ofdefParagraphStyle_TEXT;
			break;
		case 'ofdefPassword':
			L_ofdefPassword_TEXT='(password: A security method used to restrict access to computer systems and sensitive files. On the World Wide Web, passwords are strings of characters allowing visitors access to Internet services, if authentication is required.)';
			sTemp=L_ofdefPassword_TEXT;
			break;
		case 'ofdefPixel':
			L_ofdefPixel_TEXT='(pixel: A single unit of measurement that your computer\'s display hardware uses to paint images on your screen. These units, which often appear as tiny dots, compose the pictures displayed by your screen.)';
			sTemp=L_ofdefPixel_TEXT;
			break;
		case 'ofdefPoint':
			L_ofdefPoint_TEXT='(point: Unit of measure referring to the height of a printed character. A point equals 1/72 of an inch, or approximately 1/28 of a centimeter.)';
			sTemp=L_ofdefPoint_TEXT;
			break;
		case 'ofdefPopupControl':
			L_ofdefPopupControl_TEXT='(pop-up control: A built-in or custom control on a menu bar or toolbar that displays a menu when it\'s clicked, or a built-in or custom menu item on a menu, submenu, or shortcut menu that displays a submenu when the pointer is positioned over it.)';
			sTemp=L_ofdefPopupControl_TEXT;
			break;
		case 'ofdefpProtocol':
			L_ofdefpProtocol_TEXT='(protocol: A method of accessing a document or service over the Internet, such as File Transfer Protocol (FTP) or Hypertext Transfer Protocol (HTTP).)';
			sTemp=L_ofdefpProtocol_TEXT;
			break;
		case 'ofdefPrintPreview':
			L_ofdefPrintPreview_TEXT='(print preview: A view of a document as it will appear when you print it.)';
			sTemp=L_ofdefPrintPreview_TEXT;
			break;
		case 'ofdefProgID':
			L_ofdefProgID_TEXT='(programmatic identifier (ProgID): An identifier in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide) that\'s used by the Windows registry to uniquely identify an object.)';
			sTemp=L_ofdefProgID_TEXT;
			break;
		case 'ofdefProperty':
			L_ofdefProperty_TEXT='(property: A named attribute of a control, a field, or an object that you set to define one of the object\'s characteristics (such as size, color, or screen location) or an aspect of its behavior (such as whether the object is hidden).)';
			sTemp=L_ofdefProperty_TEXT;
			break;
		case 'ofdefQuestionMarkPointer':
			L_ofdefQuestionMarkPointer_TEXT='(question-mark pointer: Use the question-mark pointer to get context-sensitive Help on toolbar buttons, dialog box options, tools in the toolbox, and other parts of the window.)';
			sTemp=L_ofdefQuestionMarkPointer_TEXT;
			break;
		case 'ofdefReadonly':
			L_ofdefReadonly_TEXT='(read-only: A setting that allows a file to be read or copied, but not changed or saved. If you change a read-only file, you can save your changes only if you give the document a new name.)';
			sTemp=L_ofdefReadonly_TEXT;
			break;
		case 'ofdefRecord':
			L_ofdefRecord_TEXT='(record: A collection of data about a person, a place, an event, or some other item. Records are the logical equivalents of rows in a table.)';
			sTemp=L_ofdefRecord_TEXT;
			break;
		case 'ofdefTWAIN':
			L_ofdefTWAIN_TEXT='(TWAIN: A cross-platform interface for acquiring electronic images that have been captured by scanners, digital cameras, and still-frame video capture boards.)';
			sTemp=L_ofdefTWAIN_TEXT;
			break;
		case 'ofdefVisualBasicEditor':
			L_ofdefVisualBasicEditor_TEXT='(Microsoft Visual Basic Editor: An environment in which you can edit macros that you\'ve recorded and write new macros and Visual Basic for Applications programs.)';
			sTemp=L_ofdefVisualBasicEditor_TEXT;
			break;
		case 'ofdefWebComponent':
			L_ofdefWebComponent_TEXT='(Microsoft Office Web Components: Interactive components, such as worksheets, charts, and PivotTable lists on Web pages that facilitate data analysis. To use these components, you must have a Microsoft Office license.)';
			sTemp=L_ofdefWebComponent_TEXT;
			break;
		case 'ofDelimitedText':
			L_ofDelimitedText_TEXT='(delimited text file: A file containing data where individual field values are separated by a character, such as a comma or a tab.)';
			sTemp=L_ofDelimitedText_TEXT;
			break;
		case 'ofDesignTime':
			L_ofDesignTime_TEXT='(design time: The time during which you create and modify the design of the objects and code in your application. For example, you design custom dialog boxes and controls. In contrast, during run time, you interact with the program as a user would.)';
			sTemp=L_ofDesignTime_TEXT;
			break;
		case 'ofDestination':
			L_ofDestination_TEXT='(destination: General term for the name of the element you go to from a hyperlink.)';
			sTemp=L_ofDestination_TEXT;
			break;
		case 'ofDestinationFile':
			L_ofDestinationFile_TEXT='(destination file: The file that a linked or embedded object is inserted into. The source file contains the information that is used to create the object. When you change information in a destination file, the information is not updated in the source file.)';
			sTemp=L_ofDestinationFile_TEXT;
			break;
		case 'OfDigitalDashboard':
			L_OfDigitalDashboard_TEXT='(digital dashboard: A user-configurable Web page that functions as an information portal. A digital dashboard consolidates personal, team, corporate, and external information and provides single-click access to database, analytical, and workgroup tools.)';
			sTemp=L_OfDigitalDashboard_TEXT;
			break;
		case 'ofdimension':
			L_ofdimension_TEXT='(dimension: An OLAP structure that organizes data into levels, such as Country/Region/City for a Geography dimension. In a PivotTable or PivotChart report, each dimension becomes a set of fields where you can expand and collapse detail.)';
			sTemp=L_ofdimension_TEXT;
			break;
		case 'ofdiscussion':
			L_ofdiscussion_TEXT='(discussion: A feature of a Web site that enables site visitors to post and reply to conversational topics. Visitors can post stand-alone discussions or they can associate conversational topics with the content of a document.)';
			sTemp=L_ofdiscussion_TEXT;
			break;
		case 'OfDiscussionBoard':
			L_OfDiscussionBoard_TEXT='(discussion board: A Web site component that enables users to participate in topics of discussion by posting and replying to comments. Requires a Web server that is running Microsoft\'s SharePoint Team Services.)';
			sTemp=L_OfDiscussionBoard_TEXT;
			break;
		case 'OfDiscussionComment':
			L_OfDiscussionComment_TEXT='(discussion comment: A remark or topic of discussion that is associated with a Web page or Microsoft Office file and is stored on a discussion server.)';
			sTemp=L_OfDiscussionComment_TEXT;
			break;
		case 'OfDiscussionRights':
			L_OfDiscussionRights_TEXT='(discussion rights: Rights that allow a user to view, add, modify, and close discussion comments that are attached to a Web page or document.)';
			sTemp=L_OfDiscussionRights_TEXT;
			break;
		case 'OfDiscussionServer':
			L_OfDiscussionServer_TEXT='(discussion server: A computer that stores discussion text and information about the location of the file being discussed.)';
			sTemp=L_OfDiscussionServer_TEXT;
			break;
		case 'ofdistributedannotationsystemdas':
			L_ofdistributedannotationsystemdas_TEXT='(Distributed Annotation System (DAS): License server, a single client integrates/calls on information from multiple DAS servers)';
			sTemp=L_ofdistributedannotationsystemdas_TEXT;
			break;
		case 'ofdistributedauthoringandversioningdav':
			L_ofdistributedauthoringandversioningdav_TEXT='(Distributed Authoring and Versioning (DAV): Servers that allow collaborative editing and managing of files.)';
			sTemp=L_ofdistributedauthoringandversioningdav_TEXT;
			break;
		case 'ofdocked':
			L_ofdocked_TEXT='(docked: Fixed to the top, bottom, or side of the window. You can dock a task pane, the toolbox, the menu bar, and all toolbars.)';
			sTemp=L_ofdocked_TEXT;
			break;
		case 'OfDocumentLibrary':
			L_OfDocumentLibrary_TEXT='(document library: A folder where a collection of files is shared and the files often use the same template. Each file in a library is associated with user-defined information that is displayed in the content listing for that library.)';
			sTemp=L_OfDocumentLibrary_TEXT;
			break;
		case 'ofdocumentobjectmodeldom':
			L_ofdocumentobjectmodeldom_TEXT='(Document Object Model (DOM): A World Wide Web Consortium specification that describes the structure of dynamic HTML and XML documents in a way that allows them to be manipulated through a Web browser.)';
			sTemp=L_ofdocumentobjectmodeldom_TEXT;
			break;
		case 'ofdocumentworkspace':
			L_ofdocumentworkspace_TEXT='(Document Workspace: A Microsoft Windows SharePoint Services site that is created for collaborating on one or more documents.)';
			sTemp=L_ofdocumentworkspace_TEXT;
			break;
		case 'ofDoubleDataType':
			L_ofDoubleDataType_TEXT='(Double data type: A fundamental data type that holds double-precision floating-point numbers. It\'s stored as a 64-bit number ranging in value from approximately -1.797E308 to -4.940E-324 (negative), from 4.94E-324 to 1.797E308 (positive), and 0.)';
			sTemp=L_ofDoubleDataType_TEXT;
			break;
		case 'ofdrawing':
			L_ofdrawing_TEXT='(drawing: Any ink that you add to a file that is not recognized as handwriting.)';
			sTemp=L_ofdrawing_TEXT;
			break;
		case 'OfDrawingCanvas':
			L_OfDrawingCanvas_TEXT='(drawing canvas: An area on which you can draw multiple shapes. Because the shapes are contained within the drawing canvas, they can be moved and resized as a unit.)';
			sTemp=L_OfDrawingCanvas_TEXT;
			break;
		case 'ofdrawingobject':
			L_ofdrawingobject_TEXT='(drawing object: Any graphic you draw or insert, which can be changed and enhanced. Drawing objects include AutoShapes, curves, lines, and WordArt.)';
			sTemp=L_ofdrawingobject_TEXT;
			break;
		case 'ofDynamicDataExchangedde':
			L_ofDynamicDataExchangedde_TEXT='(Dynamic Data Exchange (DDE): An established protocol for exchanging data between Microsoft Windows-based programs.)';
			sTemp=L_ofDynamicDataExchangedde_TEXT;
			break;
		case 'ofembeddedobject':
			L_ofembeddedobject_TEXT='(embedded object: Information (object) contained in a source file and inserted into a destination file. Once embedded, the object becomes part of the destination file. Changes you make to the embedded object are reflected in the destination file.)';
			sTemp=L_ofembeddedobject_TEXT;
			break;
		case 'ofEmbeddedstylesheet':
			L_ofEmbeddedstylesheet_TEXT='(embedded style sheet: A cascading style sheet that is embedded on a page. Styles in an embedded style sheet can be applied only to the page containing the style sheet and will extend or override styles in any external style sheet linked to the page.)';
			sTemp=L_ofEmbeddedstylesheet_TEXT;
			break;
		case 'ofempty':
			L_ofempty_TEXT='(Empty: The state of an uninitialized <B>Variant</B> variable (which returns a <B>VarType</B> of 0). Not to be confused with <B>Null</B> (a variable state indicating invalid data), variables with zero-length strings (\" \"), or numeric variables equal zero.)';
			sTemp=L_ofempty_TEXT;
			break;
		case 'ofenumerateddatatype':
			L_ofenumerateddatatype_TEXT='(enumerated data type: A data type consisting of a sequence of named values given in a particular order.)';
			sTemp=L_ofenumerateddatatype_TEXT;
			break;
		case 'OfErrorBars':
			L_OfErrorBars_TEXT='(error bars: Usually used in statistical or scientific data, error bars show potential error or degree of uncertainty relative to each data marker in a series.)';
			sTemp=L_OfErrorBars_TEXT;
			break;
		case 'ofEvent':
			L_ofEvent_TEXT='(event: An action recognized by an object, such as a mouse click or key press, for which you can define a response. An event can be caused by a user action or a Visual Basic statement, or it can be triggered by the system.)';
			sTemp=L_ofEvent_TEXT;
			break;
		case 'ofEventProcedure':
			L_ofEventProcedure_TEXT='(event procedure: A procedure that is automatically executed in response to an event initiated by the user or program code, or that is triggered by the system.)';
			sTemp=L_ofEventProcedure_TEXT;
			break;
		case 'ofEventProperty':
			L_ofEventProperty_TEXT='(event property: A named attribute of a control, form, report, data access page, or section you use to respond to an associated event. You can run a procedure or macro when an event occurs by setting the related event property.)';
			sTemp=L_ofEventProperty_TEXT;
			break;
		case 'ofexefile':
			L_ofexefile_TEXT='(.exe file: A file that contains an executable program that runs on a computer when the file name is double-clicked.)';
			sTemp=L_ofexefile_TEXT;
			break;
		case 'OfExtensibleMarkupLanguage':
			L_OfExtensibleMarkupLanguage_TEXT='(Extensible Markup Language (XML): A condensed form of Standard Generalized Markup Language (SGML) that enables developers to create customized tags that offer flexibility in organizing and presenting  information.)';
			sTemp=L_OfExtensibleMarkupLanguage_TEXT;
			break;
		case 'OfExtensibleStyleLanguage':
			L_OfExtensibleStyleLanguage_TEXT='(Extensible Stylesheet Language (XSL): An XML vocabulary that is used to transform XML data to another form, such as HTML, by means of a style sheet that defines presentation rules.)';
			sTemp=L_OfExtensibleStyleLanguage_TEXT;
			break;
		case 'ofextensiblestylesheetlanguagexsl':
			L_ofextensiblestylesheetlanguagexsl_TEXT='(Extensible Stylesheet Language (XSL): An XML vocabulary that is used to transform XML data to another form, such as HTML, by means of a style sheet that defines presentation rules.)';
			sTemp=L_ofextensiblestylesheetlanguagexsl_TEXT;
			break;
		case 'ofextensivestylesheetlanguagetransformation':
			L_ofextensivestylesheetlanguagetransformation_TEXT='(XSL Transformation (XSLT): A file that is used to transform XML documents into other types of documents, such as HTML or XML. It is designed for use as part of XSL.)';
			sTemp=L_ofextensivestylesheetlanguagetransformation_TEXT;
			break;
		case 'offield':
			L_offield_TEXT='(field: An element of a table that contains a specific item of information, such as a last name. A Title field might contain Mr. or Ms. Databases such as Microsoft SQL Server refer to fields as columns.)';
			sTemp=L_offield_TEXT;
			break;
		case 'offieldcode':
			L_offieldcode_TEXT='(field code: Placeholder text that shows where specified information from your data source will appear; the elements in a field that generate a field\'s result. The field code includes the field characters, field type, and instructions.)';
			sTemp=L_offieldcode_TEXT;
			break;
		case 'offileformat':
			L_offileformat_TEXT='(file format: The way in which information is stored in a file so that a program can open and save the file. A file\'s structure defines how it is stored and displayed. File format is indicated by a three-letter extension after the file name, such as .doc.)';
			sTemp=L_offileformat_TEXT;
			break;
		case 'offloatingtoolbar':
			L_offloatingtoolbar_TEXT='(floating toolbar: A toolbar that is not attached to the edge of the program window. You can change the shape of some floating toolbars.)';
			sTemp=L_offloatingtoolbar_TEXT;
			break;
		case 'offocus':
			L_offocus_TEXT='(focus: The ability to receive user input through mouse or keyboard actions or the <b>SetFocus</b> method. Focus can be set by the user or by the application. The object that has focus is usually indicated by a highlighted caption or title bar.)';
			sTemp=L_offocus_TEXT;
			break;
		case 'offollowedhyperlink':
			L_offollowedhyperlink_TEXT='(followed hyperlink: A hyperlink to a destination you have visited. Once you follow a hyperlink to its destination, the hyperlink changes color.)';
			sTemp=L_offollowedhyperlink_TEXT;
			break;
		case 'offont':
			L_offont_TEXT='(font: A graphic design applied to all numerals, symbols, and alphabetic characters. Also called type or typeface. Arial and Courier New are examples of fonts. Fonts usually come in different sizes, such as 10 point, and various styles, such as bold.)';
			sTemp=L_offont_TEXT;
			break;
		case 'offormattingtoolbar':
			L_offormattingtoolbar_TEXT='(Formatting toolbar: A toolbar with buttons and options used to apply text formatting. To display the toolbar, point to <b>Toolbars </b>on the <b>View </b>menu, and then click <b>Formatting</b>.)';
			sTemp=L_offormattingtoolbar_TEXT;
			break;
		case 'offramespage':
			L_offramespage_TEXT='(frames page: A Web page that divides a Web browser window into different scrollable areas that can independently display several Web pages. One window can remain unchanged, while the other windows change based on hyperlinks that the user selects.)';
			sTemp=L_offramespage_TEXT;
			break;
		case 'OfFreeform':
			L_OfFreeform_TEXT='(freeform: Any shape you draw by using the <b>Curve</b>, <b>Freeform</b>, and <b>Scribble </b>tools. Freeform shapes can include straight lines and freehand curves. They can be drawn opened or closed and can be edited.)';
			sTemp=L_OfFreeform_TEXT;
			break;
		case 'offtp':
			L_offtp_TEXT='(FTP: A communication protocol that makes it possible for a user to transfer files between remote locations on a network. This protocol also allows users to use FTP commands, such as listing files and folders, to work with files on a remote location.)';
			sTemp=L_offtp_TEXT;
			break;
		case 'ofFunctionProcedure':
			L_ofFunctionProcedure_TEXT='(Function procedure: A procedure that returns a value and that can be used in an expression. You declare a function with the <b>Function</b> statement and end it with the <b>End Function</b> statement.)';
			sTemp=L_ofFunctionProcedure_TEXT;
			break;
		case 'OfGainAdjustment':
			L_OfGainAdjustment_TEXT='(gain adjustment: A microphone feature that allows your input to be amplified so that it is made louder for use by the system.)';
			sTemp=L_OfGainAdjustment_TEXT;
			break;
		case 'OfGeneralDiscussion':
			L_OfGeneralDiscussion_TEXT='(general discussion: Discussion comments that are associated with a whole document, rather than any particular part of  the document. General discussions are displayed in the discussion pane.)';
			sTemp=L_OfGeneralDiscussion_TEXT;
			break;
		case 'ofglobal':
			L_ofglobal_TEXT='(global: Pertaining to an entire document, file, or program rather than to a restricted segment of it.)';
			sTemp=L_ofglobal_TEXT;
			break;
		case 'ofgopher':
			L_ofgopher_TEXT='(Gopher: An interface through which you can gain access to resources on the Internet. Gopher servers contain menus with categories of information; menus function the same as hyperlinks in World Wide Web documents. Gopher servers URLs begin with gopher:/.)';
			sTemp=L_ofgopher_TEXT;
			break;
		case 'ofgradient':
			L_ofgradient_TEXT='(gradient: A gradual progression of colors and shades, usually from one color to another color, or from one shade to another shade of the same color.)';
			sTemp=L_ofgradient_TEXT;
			break;
		case 'ofgrid':
			L_ofgrid_TEXT='(grid: A set of intersecting lines used to align objects.)';
			sTemp=L_ofgrid_TEXT;
			break;
		case 'OfGridlines':
			L_OfGridlines_TEXT='(gridlines: Lines you can add to a chart you make it easier to view and evaluate data. Gridlines extend from the tick marks on an axis across the plot area.)';
			sTemp=L_OfGridlines_TEXT;
			break;
		case 'ofgroup':
			L_ofgroup_TEXT='(group: A collection of objects that behave as one for the purpose of moving, resizing, or rotating them. A group can be composed of multiple sets of groups.)';
			sTemp=L_ofgroup_TEXT;
			break;
		case 'ofhandwriting':
			L_ofhandwriting_TEXT='(handwriting: Words that you write in ink. These words are not converted into typed text.)';
			sTemp=L_ofhandwriting_TEXT;
			break;
		case 'ofhangingindent':
			L_ofhangingindent_TEXT='(hanging indent: Paragraph formatting in which the second and subsequent lines of a paragraph are indented more than the first line. Common uses for the hanging indent are bulleted and numbered lists.)';
			sTemp=L_ofhangingindent_TEXT;
			break;
		case 'ofheaderandfooter':
			L_ofheaderandfooter_TEXT='(header and footer: A header, which can consist of text or graphics, appears at the top of every page in a section. A footer appears at the bottom of every page. Headers and footers often contain page numbers, chapter titles, dates, and author names.)';
			sTemp=L_ofheaderandfooter_TEXT;
			break;
		case 'ofhomepage':
			L_ofhomepage_TEXT='(home page: Main page of a Web site. Usually has hyperlinks to other pages, both within and outside of the site. One Web site can contain many home pages. For example, the Microsoft home page contains a Products home page, which contains other home pages.)';
			sTemp=L_ofhomepage_TEXT;
			break;
		case 'ofhotspot':
			L_ofhotspot_TEXT='(hot spot: An area on an object containing a hyperlink. An entire object can be a single hot spot, or an object can contain multiple hot spots. A picture with hot spots is called an image map.)';
			sTemp=L_ofhotspot_TEXT;
			break;
		case 'ofhowFileTransferProtocolFTP':
			L_ofhowFileTransferProtocolFTP_TEXT='(FTP: A communication protocol that makes it possible for a user to transfer files between remote locations on a network. This protocol also allows users to use FTP commands, such as listing files and folders, to work with files on a remote location.)';
			sTemp=L_ofhowFileTransferProtocolFTP_TEXT;
			break;
		case 'ofhowRootDirectory':
			L_ofhowRootDirectory_TEXT='(root folder: The folder on a drive from which all other folders branch. The root folder\'s name consists of a single backslash character (\\). For example, on drive C, this folder would be represented in the file system as C:\\.)';
			sTemp=L_ofhowRootDirectory_TEXT;
			break;
		case 'ofhtml':
			L_ofhtml_TEXT='(HTML: The standard markup language used for documents on the World Wide Web. HTML uses tags to indicate how Web browsers should display page elements such as text and graphics and how to respond to user actions.)';
			sTemp=L_ofhtml_TEXT;
			break;
		case 'ofhtmltag':
			L_ofhtmltag_TEXT='(HTML tag: A text string used in HTML to identify a page element\'s type, format, and appearance. FrontPage automatically creates HTML tags to represent each element on a page.)';
			sTemp=L_ofhtmltag_TEXT;
			break;
		case 'ofHTTP':
			L_ofHTTP_TEXT='(HTTP: Internet protocol that delivers information on the World Wide Web. Makes it possible for a user with a client program to enter a URL (or click a hyperlink) and retrieve text, graphics, sound, and other digital information from a Web server.)';
			sTemp=L_ofHTTP_TEXT;
			break;
		case 'ofHyperlink':
			L_ofHyperlink_TEXT='(hyperlink: Colored and underlined text or a graphic that you click to go to a file, a location in a file, a Web page on the World Wide Web, or a Web page on an intranet. Hyperlinks can also go to newsgroups and to Gopher, Telnet, and FTP sites.)';
			sTemp=L_ofHyperlink_TEXT;
			break;
		case 'ofHyperlinkAddress':
			L_ofHyperlinkAddress_TEXT='(address: The path to an object, document, file, page, or other destination. An address can be a URL (Web address) or a UNC path (network address), and can include a specific location within a file, such as a Word bookmark or an Excel cell range.)';
			sTemp=L_ofHyperlinkAddress_TEXT;
			break;
		case 'ofHyperlinkBase':
			L_ofHyperlinkBase_TEXT='(hyperlink base: When a relative link is based on a path you specify (the first part of the path that is shared by the file containing the hyperlink and the destination file), that path is the hyperlink base.)';
			sTemp=L_ofHyperlinkBase_TEXT;
			break;
		case 'ofhypertextreferencehref':
			L_ofhypertextreferencehref_TEXT='(hypertext reference (HREF): An attribute, in an HTML document, that defines a link to another location within a document, a document on the Web, or an e-mail address.)';
			sTemp=L_ofhypertextreferencehref_TEXT;
			break;
		case 'ofImagemap':
			L_ofImagemap_TEXT='(image map: A graphic containing one or more invisible regions, called hot spots, which are associated with hyperlinks. For example, a geographical map could be made into an image map by assigning hot spots to each region of interest on the map.)';
			sTemp=L_ofImagemap_TEXT;
			break;
		case 'ofImmediateWindow':
			L_ofImmediateWindow_TEXT='(Immediate window: A window in the Visual Basic Editor in which you can run individual lines of Visual Basic code, usually for the purpose of debugging. In the Immediate window, expressions are evaluated immediately.)';
			sTemp=L_ofImmediateWindow_TEXT;
			break;
		case 'OfInk':
			L_OfInk_TEXT='(ink: The writing or drawing strokes made with a tablet pen or mouse.)';
			sTemp=L_OfInk_TEXT;
			break;
		case 'OfInlineDiscussion':
			L_OfInlineDiscussion_TEXT='(inline discussion: Discussion comments that are associated with a particular paragraph, image or table. In Web browsers, inline discussions are displayed in the body of the document; in a Microsoft Word document, they are displayed in the discussion)';
			sTemp=L_OfInlineDiscussion_TEXT;
			break;
		case 'ofInnerJoin':
			L_ofInnerJoin_TEXT='(inner join: A join where records in two tables are combined in a query\'s results only if values in the joined fields meet a specified condition. In a query, the default join is an inner join that selects records only if values in the joined fields match.)';
			sTemp=L_ofInnerJoin_TEXT;
			break;
		case 'ofintegrateddevelopmentenvironmentide':
			L_ofintegrateddevelopmentenvironmentide_TEXT='(integrated development environment (IDE): A set of integrated tools for developing software. The tools are generally run from one user interface and consist of a compiler, an editor, and a debugger, among others.)';
			sTemp=L_ofintegrateddevelopmentenvironmentide_TEXT;
			break;
		case 'ofInternet':
			L_ofInternet_TEXT='(Internet: A worldwide network of thousands of smaller computer networks and millions of commercial, educational, government, and personal computers. The Internet is like an electronic city with virtual libraries, stores, art galleries, and so on.)';
			sTemp=L_ofInternet_TEXT;
			break;
		case 'ofInternetServiceProvider':
			L_ofInternetServiceProvider_TEXT='(ISP: A business that provides access to the Internet for such things as electronic mail, chat rooms, or use of the World Wide Web. Some ISPs are multinational, offering access in many locations, while others are limited to a specific region.)';
			sTemp=L_ofInternetServiceProvider_TEXT;
			break;
		case 'ofIntranet':
			L_ofIntranet_TEXT='(intranet: A network within an organization that uses Internet technologies (such as the HTTP or FTP protocol). By using hyperlinks, you can explore objects, documents, pages, and other destinations on the intranet.)';
			sTemp=L_ofIntranet_TEXT;
			break;
		case 'ofjoin':
			L_ofjoin_TEXT='(join: An association between a field in one table or query and a field of the same data type in another table or query. Joins tell the program how data is related. Records that don\'t match may be included or excluded, depending on the type of join.)';
			sTemp=L_ofjoin_TEXT;
			break;
		case 'ofjscript':
			L_ofjscript_TEXT='(JScript: An interpreted, object-based scripting language that borrows from C, C++, and Java. It is the Microsoft implementation of the ECMA 262 language specification.)';
			sTemp=L_ofjscript_TEXT;
			break;
		case 'ofkerning':
			L_ofkerning_TEXT='(kerning: The adjustment of the spacing between two characters to create the appearance of even spacing, fit text to a given space, and adjust line breaks.)';
			sTemp=L_ofkerning_TEXT;
			break;
		case 'ofKnowledgeBase':
			L_ofKnowledgeBase_TEXT='(KB: Primary source of product information for Microsoft support engineers and customers. This comprehensive collection of articles, updated daily, contains detailed how-to information, answers to technical-support questions, and known issues.)';
			sTemp=L_ofKnowledgeBase_TEXT;
			break;
		case 'OfLan':
			L_OfLan_TEXT='(LAN: A computer network technology designed to connect computers separated by a short distance. A local area network (LAN) can be connected to the Internet and can also be configured as an intranet.)';
			sTemp=L_OfLan_TEXT;
			break;
		case 'oflevel':
			L_oflevel_TEXT='(level: A part of an OLAP dimension. Within a dimension, data is organized into lower and higher levels of detail, such as Year, Quarter, Month, and Day levels in a Time dimension.)';
			sTemp=L_oflevel_TEXT;
			break;
		case 'OfLinkBar':
			L_OfLinkBar_TEXT='(link bar: A collection of graphic or text buttons representing hyperlinks to pages both within your Web site and to external sites.)';
			sTemp=L_OfLinkBar_TEXT;
			break;
		case 'oflinkedobject':
			L_oflinkedobject_TEXT='(linked object: An object that is created in a source file and inserted into a destination file, while maintaining a connection between the two files. The linked object in the destination file can be updated when the source file is updated.)';
			sTemp=L_oflinkedobject_TEXT;
			break;
		case 'OfListInteractiveList':
			L_OfListInteractiveList_TEXT='(list, interactive list: A Web site component that stores and displays information that users can add to by using their browsers. Requires a Web server that is running Microsoft Windows SharePoint Services.)';
			sTemp=L_OfListInteractiveList_TEXT;
			break;
		case 'OfMappedDataField':
			L_OfMappedDataField_TEXT='(mapped data field: A field that represents commonly used information, such as \"First Name.\" If a data source contains a \"First Name\" field or variation, such as \"FName,\" the data source field automatically maps to the corresponding mapped data field.)';
			sTemp=L_OfMappedDataField_TEXT;
			break;
		case 'ofmetadata':
			L_ofmetadata_TEXT='(metadata: Data that describes other data. For example, the words in a document are data; the word count is an example of metadata.)';
			sTemp=L_ofmetadata_TEXT;
			break;
		case 'ofmicrosoftdevelopernetworkmsdn':
			L_ofmicrosoftdevelopernetworkmsdn_TEXT='(MSDN: A Microsoft Web site (and subscription program) that provides developers with the latest tools as well as information, code samples, and training materials for Microsoft development tools. (http://msdn.microsoft.com))';
			sTemp=L_ofmicrosoftdevelopernetworkmsdn_TEXT;
			break;
		case 'ofmicrosoftofficedocumentimagingformatmdi':
			L_ofmicrosoftofficedocumentimagingformatmdi_TEXT='(Microsoft Office Document Imaging Format (MDI): A high resolution, tag-based graphics format, based on the Tagged Image File Format (TIFF) used for digital graphics.)';
			sTemp=L_ofmicrosoftofficedocumentimagingformatmdi_TEXT;
			break;
		case 'OfMicrosoftSqlServerDatabase':
			L_OfMicrosoftSqlServerDatabase_TEXT='(Microsoft SQL Server database: A database in Microsoft SQL Server, it consists of tables, views, indexes, stored procedures, functions, and triggers.)';
			sTemp=L_OfMicrosoftSqlServerDatabase_TEXT;
			break;
		case 'OfMIDI':
			L_OfMIDI_TEXT='(Musical Instrument Digital Interface (MIDI): A communications protocol that allows electronic musical instruments to interact with each other using digital signals.)';
			sTemp=L_OfMIDI_TEXT;
			break;
		case 'OfMPEG':
			L_OfMPEG_TEXT='(Motion Picture Experts Group (MPEG): A lossy compression system with two flavors of compression. MPEG 1 has a limit of 240 lines of horizontal resolution; MPEG 2 can provide a wide enough bandwidth for High Definition Television (HDTV).)';
			sTemp=L_OfMPEG_TEXT;
			break;
		case 'OfMultipurposeInternetMailExtensionsHtml':
			L_OfMultipurposeInternetMailExtensionsHtml_TEXT='(Single File Web Page (MHTML): An HTML document saved in MHTML format, which integrates inline graphics, applets, linked documents, and other supporting items referenced in the document.)';
			sTemp=L_OfMultipurposeInternetMailExtensionsHtml_TEXT;
			break;
		case 'OfNaturalLanguageSearching':
			L_OfNaturalLanguageSearching_TEXT='(natural language searching: A search method that lets you direct your search using conversational language. This enables you to give search instructions such as \"Find all appointments for today.\")';
			sTemp=L_OfNaturalLanguageSearching_TEXT;
			break;
		case 'OfNetworkPlaces':
			L_OfNetworkPlaces_TEXT='(Network Places: A folder on a network file server, Web server, or Exchange 2000 server. You can create a shortcut to a Network Place to work with files there. Some Network Places, such as document libraries, have features not available with local folders.)';
			sTemp=L_OfNetworkPlaces_TEXT;
			break;
		case 'OfNewFileTaskPane':
			L_OfNewFileTaskPane_TEXT='(<b>New <EM>File </EM></b>task pane: A pane in Office applications that provides commonly used commands for opening and creating files. The task pane title differs for each Office application. For example, you\'ll see \"New Document\" in Word.)';
			sTemp=L_OfNewFileTaskPane_TEXT;
			break;
		case 'ofobjectmodel':
			L_ofobjectmodel_TEXT='(object model: A hierarchical library of objects and collections that represents the content and functionality of an application. Objects and collections have properties, methods, and events that can be used to manipulate and interact with an application.)';
			sTemp=L_ofobjectmodel_TEXT;
			break;
		case 'ofobjectmodeldiagram':
			L_ofobjectmodeldiagram_TEXT='(object model diagram: A graphical representation of the objects and collections that are contained within a specified object model.)';
			sTemp=L_ofobjectmodeldiagram_TEXT;
			break;
		case 'ofocr':
			L_ofocr_TEXT='(OCR: Translates images of text, such as scanned documents, into actual text characters. Also known as text recognition.)';
			sTemp=L_ofocr_TEXT;
			break;
		case 'OfOfficeDataConnectionFile':
			L_OfOfficeDataConnectionFile_TEXT='(Office Data Connection (ODC) file: A file that stores information about a connection to a data source (such as an OLE DB data source) and the data associated with the connection.)';
			sTemp=L_OfOfficeDataConnectionFile_TEXT;
			break;
		case 'OfOfficeDesigner':
			L_OfOfficeDesigner_TEXT='(Microsoft Solution Designer: A development environment for creating and customizing team Web sites and other Web-based workgroup programs that run on Microsoft Exchange 2000 and Microsoft\'s SharePoint Portal Server.)';
			sTemp=L_OfOfficeDesigner_TEXT;
			break;
		case 'OfOleDb':
			L_OfOleDb_TEXT='(OLE DB: A component database architecture that implements efficient network and internet access to many types of data sources, including relational data, mail files, flat files, and spreadsheets.)';
			sTemp=L_OfOleDb_TEXT;
			break;
		case 'OfOrganizationChart':
			L_OfOrganizationChart_TEXT='(Organizational chart: A diagram that is used to show hierarchical relationships; for example, company management and employee structures.)';
			sTemp=L_OfOrganizationChart_TEXT;
			break;
		case 'ofparameter':
			L_ofparameter_TEXT='(parameter: A value that is assigned to a variable at the beginning of an operation or before an expression is evaluated by a program. A parameter can be text, a number, or an argument name assigned to another value.)';
			sTemp=L_ofparameter_TEXT;
			break;
		case 'ofpermissionpolicy':
			L_ofpermissionpolicy_TEXT='(permission policy: An approach to restricting permission for a given document, workbook, presentation, or message. The policy defines which Office features are available, which information can be accessed, and what level of editing is allowed.)';
			sTemp=L_ofpermissionpolicy_TEXT;
			break;
		case 'OfPicture':
			L_OfPicture_TEXT='(picture: A file (such as a metafile) that you can ungroup and manipulate as two or more objects or a file that stays as a single object (such as bitmaps).)';
			sTemp=L_OfPicture_TEXT;
			break;
		case 'OfPivottableList':
			L_OfPivottableList_TEXT='(PivotTable list: A Microsoft Office Web Component used to create an interactive list that summarizes and analyzes data, such as database records, from various sources. Users can view the list in a Web browser and change its layout.)';
			sTemp=L_OfPivottableList_TEXT;
			break;
		case 'OfPlaceholders':
			L_OfPlaceholders_TEXT='(placeholders: Boxes with dotted borders that are part of most slide layouts. These boxes hold title and body text or objects such as charts, tables, and pictures.)';
			sTemp=L_OfPlaceholders_TEXT;
			break;
		case 'OfPlacesBar':
			L_OfPlacesBar_TEXT='(Places bar: The bar on the left side of certain dialog boxes (such as Open, Save As, or Insert Picture) that contains shortcuts to the My Recent Documents, Desktop, My Documents, My Computer, and My Network Places folders.)';
			sTemp=L_OfPlacesBar_TEXT;
			break;
		case 'OfPlotArea':
			L_OfPlotArea_TEXT='(plot area: In a 2-D chart, the area bounded by the axes, including all data series. In a 3-D chart, the area bounded by the axes, including the data series, category names, tick-mark labels, and axis titles.)';
			sTemp=L_OfPlotArea_TEXT;
			break;
		case 'OfPrintLayoutView':
			L_OfPrintLayoutView_TEXT='(print layout view: A view of a document or other object as it will appear when you print it. For example, items such as headers, footnotes, columns, and text boxes appear in their actual positions.)';
			sTemp=L_OfPrintLayoutView_TEXT;
			break;
		case 'OfPyramidDiagram':
			L_OfPyramidDiagram_TEXT='(Pyramid diagram: A diagram that is used to show foundation-based relationships.)';
			sTemp=L_OfPyramidDiagram_TEXT;
			break;
		case 'OfRadialDiagram':
			L_OfRadialDiagram_TEXT='(Radial diagram: A diagram that is used to show relationships of elements to a core element.)';
			sTemp=L_OfRadialDiagram_TEXT;
			break;
		case 'ofrefAVI':
			L_ofrefAVI_TEXT='(AVI: A Microsoft Windows multimedia file format for sound and videos that uses the Microsoft Resource Interchange File Format (RIFF) specification.)';
			sTemp=L_ofrefAVI_TEXT;
			break;
		case 'ofrefChat':
			L_ofrefChat_TEXT='(Chat: A Microsoft NetMeeting feature that opens a separate window in which online meeting participants can type and send text messages to each other.)';
			sTemp=L_ofrefChat_TEXT;
			break;
		case 'ofrelativeurl':
			L_ofrelativeurl_TEXT='(relative URL: A form of URL in which the domain and some or all directory names are omitted, leaving only the document name and extension (and perhaps a partial list of directory names).)';
			sTemp=L_ofrelativeurl_TEXT;
			break;
		case 'ofResolution':
			L_ofResolution_TEXT='(resolution: The fineness of detail in an image or text produced by a monitor or printer.)';
			sTemp=L_ofResolution_TEXT;
			break;
		case 'ofResultSet':
			L_ofResultSet_TEXT='(result set: The set of records that results from running a query or applying a filter.)';
			sTemp=L_ofResultSet_TEXT;
			break;
		case 'ofRGB':
			L_ofRGB_TEXT='(RGB: A system that describes colors as a mixture of red (R), green (G), and blue (B). The color is defined as a set of three values (R,G,B). Using 0 (zero) percent of each color produces black; using 100 percent of all three colors produces white.)';
			sTemp=L_ofRGB_TEXT;
			break;
		case 'ofRGBColor':
			L_ofRGBColor_TEXT='(RGB color: A color code in HTML represented by its red, green, and blue values. These codes determine the colors for fonts, table borders, backgrounds, and hyperlinks.)';
			sTemp=L_ofRGBColor_TEXT;
			break;
		case 'ofRGBValue':
			L_ofRGBValue_TEXT='(RGB value: A value returned by the RGB function; specifies a color as a combination of red, green, and blue values as integers from 0 (zero) through 255.)';
			sTemp=L_ofRGBValue_TEXT;
			break;
		case 'ofRichTextFormat':
			L_ofRichTextFormat_TEXT='(rich text format (RTF): A file type used to transfer formatted text documents between applications, even those that run on different platforms, such as IBM and Macintosh.)';
			sTemp=L_ofRichTextFormat_TEXT;
			break;
		case 'ofRightToLeft':
			L_ofRightToLeft_TEXT='(right-to-left: Refers to keyboard settings, document views, user interface objects, and the direction in which text is displayed. Arabic and Hebrew are right-to-left languages.)';
			sTemp=L_ofRightToLeft_TEXT;
			break;
		case 'ofRow':
			L_ofRow_TEXT='(row: In a table, the horizontal arrangement of cells.)';
			sTemp=L_ofRow_TEXT;
			break;
		case 'ofRun':
			L_ofRun_TEXT='(run: A contiguous piece of text or string of characters sharing the same attributes. All characters in a run have the same directional properties.)';
			sTemp=L_ofRun_TEXT;
			break;
		case 'ofRunTime':
			L_ofRunTime_TEXT='(run time: The time during which an application is running. During run time, you can interact with an application. In contrast, during design time, you can create and modify the design of the objects and code in your application.)';
			sTemp=L_ofRunTime_TEXT;
			break;
		case 'ofRunTimeError':
			L_ofRunTimeError_TEXT='(run-time error: An error that can be detected only when an application is running.)';
			sTemp=L_ofRunTimeError_TEXT;
			break;
		case 'ofSaturation':
			L_ofSaturation_TEXT='(saturation: The amount of color in a specified hue.)';
			sTemp=L_ofSaturation_TEXT;
			break;
		case 'OfSchema':
			L_OfSchema_TEXT='(schema: A description of a database that defines the attributes of the database, such as tables, fields (columns), and properties.)';
			sTemp=L_OfSchema_TEXT;
			break;
		case 'ofScratchArea':
			L_ofScratchArea_TEXT='(scratch area: The gray area that appears outside the publication page in Publisher or the background in PhotoDraw. If you\'re not sure where you want to move something, you can drag it onto the scratch area.)';
			sTemp=L_ofScratchArea_TEXT;
			break;
		case 'OfScreenReviewUtilities':
			L_OfScreenReviewUtilities_TEXT='(screen review utilities: Accessibility aids for people who are blind or have learning disabilities, such as dyslexia. These aids make on-screen information available as synthesized speech or a refreshable Braille display.)';
			sTemp=L_OfScreenReviewUtilities_TEXT;
			break;
		case 'ofScript':
			L_ofScript_TEXT='(script: A type of computer code used to perform tasks on Web pages, such as incrementing a \"number of visitors\" counter each time there is a new visitor. Web scripts can be written in several script languages. Scripts do not need to be compiled to be run.)';
			sTemp=L_ofScript_TEXT;
			break;
		case 'ofscriptinglanguage':
			L_ofscriptinglanguage_TEXT='(scripting language: A simple programming language designed to perform special or limited tasks, sometimes associated with a particular application or function.)';
			sTemp=L_ofscriptinglanguage_TEXT;
			break;
		case 'ofSearchEngine':
			L_ofSearchEngine_TEXT='(search engine: On the Internet, a program that uses keywords supplied by users to search files and documents on the World Wide Web and other resources for information about a specific topic. A search engine can also be dedicated to a specific Web site.)';
			sTemp=L_ofSearchEngine_TEXT;
			break;
		case 'ofSearchPage':
			L_ofSearchPage_TEXT='(search page: A page from which you can find and go to other Internet sites or to documents on an intranet. Many search pages provide various ways to search, such as by topic, by keyword, or by matches to user queries.)';
			sTemp=L_ofSearchPage_TEXT;
			break;
		case 'OfSelected':
			L_OfSelected_TEXT='(selected: A toolbar button always has a border around it when it\'s selected, even when the pointer is not resting on the button.)';
			sTemp=L_OfSelected_TEXT;
			break;
		case 'ofSelectionRectangle':
			L_ofSelectionRectangle_TEXT='(selection rectangle: A rectangle with sizing handles that surrounds a selected object or objects.)';
			sTemp=L_ofSelectionRectangle_TEXT;
			break;
		case 'ofSelector':
			L_ofSelector_TEXT='(selector: In a cascading style sheet style definition (or style rule), the HTML element linked to a particular set of style properties and values.)';
			sTemp=L_ofSelector_TEXT;
			break;
		case 'ofSelfExtractingFile':
			L_ofSelfExtractingFile_TEXT='(self-extracting file: An executable file (.exe) that consists of a few smaller files. When you double-click this type of file to run it, it extracts from itself the other files it contains and copies them to the same folder that the .exe is in.)';
			sTemp=L_ofSelfExtractingFile_TEXT;
			break;
		case 'ofServerSideImageMap':
			L_ofServerSideImageMap_TEXT='(server-side image map: A graphic containing sensitive regions, or \"hot spots,\" that a user can click to follow a hyperlink. A server-side image map requires a script on a Web server that identifies the sensitive regions and their corresponding hyperlinks.)';
			sTemp=L_ofServerSideImageMap_TEXT;
			break;
		case 'ofShortcutKey':
			L_ofShortcutKey_TEXT='(shortcut key: A function key or key combination, such as F5 or CTRL+A, that you use to carry out a menu command. In contrast, an access key is a key combination, such as ALT+F, that moves the focus to a menu, command, or control.)';
			sTemp=L_ofShortcutKey_TEXT;
			break;
		case 'ofShortcutMenu':
			L_ofShortcutMenu_TEXT='(shortcut menu: A menu that shows a list of commands relevant to a particular item. To display a shortcut menu, right-click an item or press SHIFT+F10.)';
			sTemp=L_ofShortcutMenu_TEXT;
			break;
		case 'ofSideBar':
			L_ofSideBar_TEXT='(sidebar: A note alongside the main text that contains interesting or useful information. A sidebar relates to, but is not essential to understanding, the main text.)';
			sTemp=L_ofSideBar_TEXT;
			break;
		case 'ofSingleDataType':
			L_ofSingleDataType_TEXT='(Single data type: A data type that stores single-precision floating-point variables as 32-bit (4-byte) floating-point numbers ranging in value from -3.402823E38 to -1.401298E-45 for negative values and 1.401298E-45 to 3.402823E38 for positive values.)';
			sTemp=L_ofSingleDataType_TEXT;
			break;
		case 'ofSingleStepping':
			L_ofSingleStepping_TEXT='(single stepping: A debugging technique that enables you to run a macro one action at a time or run Visual Basic code one line at a time.)';
			sTemp=L_ofSingleStepping_TEXT;
			break;
		case 'ofSizingHandle':
			L_ofSizingHandle_TEXT='(sizing handle: One of the small circles or squares that appears at the corners and sides of a selected object. You drag these handles to change the size of the object.)';
			sTemp=L_ofSizingHandle_TEXT;
			break;
		case 'ofSLIP':
			L_ofSLIP_TEXT='(Serial Line Internet Protocol (SLIP): An Internet standard for transmitting data over serial links between computers.)';
			sTemp=L_ofSLIP_TEXT;
			break;
		case 'OfSmartTags':
			L_OfSmartTags_TEXT='(smart tags: Data recognized and labeled as a particular type. For example, a person\'s name or the name of a recent Microsoft Outlook e-mail message recipient is a type of data that can be recognized and labeled with a smart tag.)';
			sTemp=L_OfSmartTags_TEXT;
			break;
		case 'ofSortOrder':
			L_ofSortOrder_TEXT='(sort order: A way to arrange data based on value or data type. You can sort data alphabetically, numerically, or by date. Sort orders use an ascending (0 to 100, A to Z) or descending (100 to 0, Z to A) order.)';
			sTemp=L_ofSortOrder_TEXT;
			break;
		case 'ofSourceFile':
			L_ofSourceFile_TEXT='(source file: The file that contains information that was used to create a linked or embedded object. When you update the information in the source file, you can also update the linked object in the destination file.)';
			sTemp=L_ofSourceFile_TEXT;
			break;
		case 'ofSourceProgram':
			L_ofSourceProgram_TEXT='(source program: The program used to create a linked object or embedded object. To edit the object, you must have the source program installed on your computer.)';
			sTemp=L_ofSourceProgram_TEXT;
			break;
		case 'ofSpreadsheetComponent':
			L_ofSpreadsheetComponent_TEXT='(Spreadsheet Component: A Microsoft Office Web Component that provides the interactive functionality of a spreadsheet on a Web page.You can enter data, add formulas and functions, apply filters, change formatting, and recalculate.)';
			sTemp=L_ofSpreadsheetComponent_TEXT;
			break;
		case 'ofSQL':
			L_ofSQL_TEXT='(Structured Query Language (SQL): A database query and programming language widely used for accessing, querying, updating, and managing data in relational database systems.)';
			sTemp=L_ofSQL_TEXT;
			break;
		case 'ofStandardToolbar':
			L_ofStandardToolbar_TEXT='(Standard toolbar: A toolbar that performs some of the most common tasks in a Microsoft Office application, such as opening, saving, and printing files.)';
			sTemp=L_ofStandardToolbar_TEXT;
			break;
		case 'ofStartPage':
			L_ofStartPage_TEXT='(start page: The first page that appears when you start a Web browser. You can set this to a Web site or to a document on your computer\'s hard disk. A start page can contain hyperlinks to other documents on your computer, on a network, or on the Web.)';
			sTemp=L_ofStartPage_TEXT;
			break;
		case 'ofStatement':
			L_ofStatement_TEXT='(statement: A syntactically complete unit that expresses one specific kind of operation, declaration, or definition. A statement is usually on one line in a procedure or Declarations section, but two or more can be on a line separated by a colon (:).)';
			sTemp=L_ofStatement_TEXT;
			break;
		case 'ofStatusBar':
			L_ofStatusBar_TEXT='(status bar: A horizontal bar at the bottom of the screen that displays information about the current condition of the program, such as the status of items in the window, the progress of the current task, or information about the selected item.)';
			sTemp=L_ofStatusBar_TEXT;
			break;
		case 'ofStory':
			L_ofStory_TEXT='(story: Text that\'s contained within a single text box or a chain of linked text boxes.)';
			sTemp=L_ofStory_TEXT;
			break;
		case 'ofStreaming':
			L_ofStreaming_TEXT='(streaming: Playing sounds or video in real time as they are downloaded over the Internet as opposed to storing them on a computer first.)';
			sTemp=L_ofStreaming_TEXT;
			break;
		case 'ofString':
			L_ofString_TEXT='(string: A collection of characters that can include both numbers and text.)';
			sTemp=L_ofString_TEXT;
			break;
		case 'ofStringComparison':
			L_ofStringComparison_TEXT='(string comparison: The use of an operator to determine whether one string is greater than or equal to another string. Use the <b>Option Compare</b> statement to specify binary (case sensitive) or text (non-case sensitive) comparison.)';
			sTemp=L_ofStringComparison_TEXT;
			break;
		case 'ofStringDataType':
			L_ofStringDataType_TEXT='(String data type: A fundamental data type that holds characters, one character per 2 bytes. A fixed-length string can contain 1 to 64K characters; a variable-length string can contain 1 to 2 billion.)';
			sTemp=L_ofStringDataType_TEXT;
			break;
		case 'ofStringExpression':
			L_ofStringExpression_TEXT='(string expression: An expression that evaluates to a sequence of contiguous characters. Elements of the expression can be: functions that return a string or a string <B>Variant</B> (VarType 8); a string literal, constant, variable, or <B>Variant.</B>)';
			sTemp=L_ofStringExpression_TEXT;
			break;
		case 'ofStrongCharacters':
			L_ofStrongCharacters_TEXT='(strong characters: The character set that makes up a particular language, such as vowels and consonants. Punctuation and special characters are not considered to be strong characters.)';
			sTemp=L_ofStrongCharacters_TEXT;
			break;
		case 'ofstructuralediting':
			L_ofstructuralediting_TEXT='(structural editing: Editing that occurs within a structured document such as a well-formed XML document.)';
			sTemp=L_ofstructuralediting_TEXT;
			break;
		case 'ofStyle':
			L_ofStyle_TEXT='(style: A combination of formatting characteristics, such as font, font size, and indentation, that you name and store as a set. When you apply a style, all of the formatting instructions in that style are applied at one time.)';
			sTemp=L_ofStyle_TEXT;
			break;
		case 'ofSubmenu':
			L_ofSubmenu_TEXT='(submenu: A menu that appears when a user points to a command on a higher-level menu.)';
			sTemp=L_ofSubmenu_TEXT;
			break;
		case 'OfSubordinateShape':
			L_OfSubordinateShape_TEXT='(subordinate shape: In an organization chart, a shape that is placed below and connected to a superior (or manager) shape.)';
			sTemp=L_OfSubordinateShape_TEXT;
			break;
		case 'ofSubscript':
			L_ofSubscript_TEXT='(subscript: Describes text that is slightly lower than other text on a line. Subscripts are often used in scientific formulas.)';
			sTemp=L_ofSubscript_TEXT;
			break;
		case 'OfSuperiorShape':
			L_OfSuperiorShape_TEXT='(superior shape: In an organization chart, a shape that is placed above and connected to any other shape, such as an employee (subordinate or coworker shape) or assistant shape.)';
			sTemp=L_OfSuperiorShape_TEXT;
			break;
		case 'ofSuperscript':
			L_ofSuperscript_TEXT='(superscript: Describes text that is slightly higher than other text on a line, such as a footnote reference mark.)';
			sTemp=L_ofSuperscript_TEXT;
			break;
		case 'ofSVGA':
			L_ofSVGA_TEXT='(super video graphics adapter (SVGA): This standard can display a screen size of 800 by 600 pixels or more.)';
			sTemp=L_ofSVGA_TEXT;
			break;
		case 'ofSwapFile':
			L_ofSwapFile_TEXT='(swap file: A temporary storage space used by Windows. If you get frequent \"out of memory\" messages, you can try setting up a swap file. A swap file allows Windows to use space on your computer\'s hard disk as memory.)';
			sTemp=L_ofSwapFile_TEXT;
			break;
		case 'ofSyntaxError':
			L_ofSyntaxError_TEXT='(syntax error: An error in the grammatical structure of the code or expression. If syntax checking is enabled, errors are highlighted after you type a line and press ENTER.)';
			sTemp=L_ofSyntaxError_TEXT;
			break;
		case 'ofSystem':
			L_ofSystem_TEXT='(System: A setting for controls and other options that derives its value from the Microsoft Windows operating system.)';
			sTemp=L_ofSystem_TEXT;
			break;
		case 'ofSystemColors':
			L_ofSystemColors_TEXT='(system colors: Colors that are defined by the operating system for a specific type of monitor and video adapter. Each color is associated with a specific part of the user interface, such as a window title or a menu.)';
			sTemp=L_ofSystemColors_TEXT;
			break;
		case 'ofTableOfContents':
			L_ofTableOfContents_TEXT='(table of contents: A list of the specific headings in a document, along with the numbers of the pages the headings appear on.)';
			sTemp=L_ofTableOfContents_TEXT;
			break;
		case 'oftabletcomputer':
			L_oftabletcomputer_TEXT='(Tablet PC: A computer that runs Microsoft Windows XP Tablet PC Edition. With a Tablet PC, you can write directly on the screen by using a tablet pen and use the pen to perform mouse functions. Also known as a tablet computer.)';
			sTemp=L_oftabletcomputer_TEXT;
			break;
		case 'oftabletpen':
			L_oftabletpen_TEXT='(tablet pen: The pen that comes with a Tablet PC and is used to interact with the tablet screen.)';
			sTemp=L_oftabletpen_TEXT;
			break;
		case 'ofTabOrder':
			L_ofTabOrder_TEXT='(tab order: The order in which the focus moves in a form from one field or object to the next as you press TAB or SHIFT+TAB.)';
			sTemp=L_ofTabOrder_TEXT;
			break;
		case 'ofTabStop':
			L_ofTabStop_TEXT='(tab stop: A location on the horizontal ruler that indicates how far to indent text or where to begin a column of text.)';
			sTemp=L_ofTabStop_TEXT;
			break;
		case 'ofTag':
			L_ofTag_TEXT='(tag: A text string used in HTML to identify a page element\'s type, format, and appearance. Many elements have start and end tags that define where the element starts and stops.)';
			sTemp=L_ofTag_TEXT;
			break;
		case 'OfTargetDiagram':
			L_OfTargetDiagram_TEXT='(Target diagram: A diagram that is used to show steps toward a goal.)';
			sTemp=L_OfTargetDiagram_TEXT;
			break;
		case 'ofTargetFrame':
			L_ofTargetFrame_TEXT='(target frame: The name of a frame in which the target page of a hyperlink is displayed. Typically, a hyperlink from one frame of a frames page (or frameset) will supply as its target frame another frame of the frames page.)';
			sTemp=L_ofTargetFrame_TEXT;
			break;
		case 'OfTaskPane':
			L_OfTaskPane_TEXT='(task pane: A window within an Office application that provides commonly used commands. Its location and small size allow you to use these commands while still working on your files.)';
			sTemp=L_OfTaskPane_TEXT;
			break;
		case 'ofTCP':
			L_ofTCP_TEXT='(TCP: Internet networking software that controls the transmission of packets of data over the Internet. Computers must run TCP to communicate with Web servers.)';
			sTemp=L_ofTCP_TEXT;
			break;
		case 'OfTeamSites':
			L_OfTeamSites_TEXT='(team Web site: A customizable Web site with features that help a team work together. The default site has pages for document libraries, announcements, and team events. Only members, specified by the site creator, can use the site.)';
			sTemp=L_OfTeamSites_TEXT;
			break;
		case 'ofTemplate':
			L_ofTemplate_TEXT='(template: A file or files that contain the structure and tools for shaping such elements as the style and page layout of finished files. For example, Word templates can shape a single document, and FrontPage templates can shape an entire Web site.)';
			sTemp=L_ofTemplate_TEXT;
			break;
		case 'ofTextBox':
			L_ofTextBox_TEXT='(text box: A movable, resizable container for text or graphics. Use text boxes to position several blocks of text on a page or to give text a different orientation from other text in the document.)';
			sTemp=L_ofTextBox_TEXT;
			break;
		case 'ofTextFrame':
			L_ofTextFrame_TEXT='(text frame: The area within a shape that can contain text.)';
			sTemp=L_ofTextFrame_TEXT;
			break;
		case 'ofTextQueryKB':
			L_ofTextQueryKB_TEXT='(text query (Microsoft Knowledge Base): One or more phrases that tell the Knowledge Base what to search for. Queries can contain operators, quotation marks, wildcard characters, and parentheses to help focus the search.)';
			sTemp=L_ofTextQueryKB_TEXT;
			break;
		case 'ofTGA':
			L_ofTGA_TEXT='(TGA: A photorealistic graphics file format designed for systems with a TARGA Truevision display adapter.)';
			sTemp=L_ofTGA_TEXT;
			break;
		case 'ofTheme':
			L_ofTheme_TEXT='(theme: A set of unified design elements that provides a look for your document  by using color, fonts, and graphics.)';
			sTemp=L_ofTheme_TEXT;
			break;
		case 'ofThread':
			L_ofThread_TEXT='(thread: In e-mail and Internet newsgroups conversations, a series of messages and replies that are all related to a specific topic.)';
			sTemp=L_ofThread_TEXT;
			break;
		case 'ofThumbnail':
			L_ofThumbnail_TEXT='(thumbnail: A miniature representation of a picture on a Web page, usually containing a hyperlink to a full-size version of the graphic. Thumbnails are used to load pages rich in graphics or pictures more quickly in a Web browser.)';
			sTemp=L_ofThumbnail_TEXT;
			break;
		case 'OfThumbnailGeneric':
			L_OfThumbnailGeneric_TEXT='(thumbnail: A miniature representation of a picture.)';
			sTemp=L_OfThumbnailGeneric_TEXT;
			break;
		case 'ofTIFF':
			L_ofTIFF_TEXT='(Tagged Image File Format (TIFF): A high-resolution, tag-based graphics format. TIFF is used for the universal interchange of digital graphics.)';
			sTemp=L_ofTIFF_TEXT;
			break;
		case 'ofTint':
			L_ofTint_TEXT='(tint: A color mixed with white. A 10-percent tint is one part of the original color and nine parts white.)';
			sTemp=L_ofTint_TEXT;
			break;
		case 'ofTitleBar':
			L_ofTitleBar_TEXT='(title bar: A horizontal bar at the top of a window, dialog box, or toolbar that shows the name of the document, program, or toolbar.)';
			sTemp=L_ofTitleBar_TEXT;
			break;
		case 'ofTopic':
			L_ofTopic_TEXT='(topic: The subject of a dynamic data exchange (DDE) conversation between two applications. For most applications that use files, the topic is a file name.)';
			sTemp=L_ofTopic_TEXT;
			break;
		case 'ofTransition':
			L_ofTransition_TEXT='(transition: One of a set of transitional display effects that are available in some Microsoft Office applications. Transitions specify how the display changes (such as fading to black) as a user moves from one item (such as  slide or Web page) to another.)';
			sTemp=L_ofTransition_TEXT;
			break;
		case 'ofTransparency':
			L_ofTransparency_TEXT='(transparency: The quality that defines how much light passes through an object\'s pixels. If an object is 100 percent transparent, light passes through it completely and renders the object invisible; in other words, you can see through the object.)';
			sTemp=L_ofTransparency_TEXT;
			break;
		case 'ofTrueTypeFont':
			L_ofTrueTypeFont_TEXT='(TrueType font: A font (typeface) that appears on a printed document exactly the way it appears on the screen. TrueType fonts are scalable to any font size. Several of these fonts are installed automatically when you install Windows.)';
			sTemp=L_ofTrueTypeFont_TEXT;
			break;
		case 'ofTwip':
			L_ofTwip_TEXT='(twip: Unit of measurement that is equal to 1/20 of a point, or 1/1,440 of an inch. There are 567 twips in a centimeter.)';
			sTemp=L_ofTwip_TEXT;
			break;
		case 'oftypedtext':
			L_oftypedtext_TEXT='(typed text: Typewritten words that you enter by using the keyboard or convert from writing or speech.)';
			sTemp=L_oftypedtext_TEXT;
			break;
		case 'ofTypeLibrary':
			L_ofTypeLibrary_TEXT='(type library: A file (or component within another file) that contains Automation standard descriptions of exposed objects, properties, and methods. Object library (.olb) files contain type libraries (.tlb) that are shipped as stand-alone files.)';
			sTemp=L_ofTypeLibrary_TEXT;
			break;
		case 'ofUNC':
			L_ofUNC_TEXT='(universal naming convention (UNC): A naming convention for files that provides a machine-independent means of locating the file. Rather than specifying a drive letter and path, a UNC name uses the syntax \\\\server\\share\\path\\filename.)';
			sTemp=L_ofUNC_TEXT;
			break;
		case 'ofUnicode':
			L_ofUnicode_TEXT='(Unicode: A character encoding standard developed by the Unicode Consortium. By using more than one byte to represent each character, Unicode enables almost all of the written languages in the world to be represented by using a single character set.)';
			sTemp=L_ofUnicode_TEXT;
			break;
		case 'ofuniformresourceidentifieruri':
			L_ofuniformresourceidentifieruri_TEXT='(Uniform Resource Identifier (URI): A character string used to identify a resource on the Internet by type and location.)';
			sTemp=L_ofuniformresourceidentifieruri_TEXT;
			break;
		case 'ofuniformresourcenameurn':
			L_ofuniformresourcenameurn_TEXT='(Uniform Resource Name (URN): A scheme for uniquely identifying resources that may be available on the Internet by name, without regard to where they are located.)';
			sTemp=L_ofuniformresourcenameurn_TEXT;
			break;
		case 'ofUNIX':
			L_ofUNIX_TEXT='(UNIX: A multi-user, multitasking operating system that exists in various forms and implementations, typically used on proprietary computer workstations. Many Web servers run on UNIX systems.)';
			sTemp=L_ofUNIX_TEXT;
			break;
		case 'ofURL':
			L_ofURL_TEXT='(Uniform Resource Locator (URL): An address that specifies a protocol (such as HTTP or FTP) and a location of an object, document, World Wide Web page, or other destination on the Internet or an intranet, for example: http://www.microsoft.com/.)';
			sTemp=L_ofURL_TEXT;
			break;
		case 'ofUserInterfaceLanguage':
			L_ofUserInterfaceLanguage_TEXT='(user interface language: The language used in menus, toolbars, dialog boxes, and messages. If you have the Microsoft Office MultiLanguage Pack, you can view the user interface in languages other than the installed language of your version of Office.)';
			sTemp=L_ofUserInterfaceLanguage_TEXT;
			break;
		case 'ofVariable':
			L_ofVariable_TEXT='(variable: A named storage location capable of containing data that can be modified during program execution. Each variable has a name that uniquely identifies it within its level of scope. A data type can be specified or not.)';
			sTemp=L_ofVariable_TEXT;
			break;
		case 'ofVariantDataType':
			L_ofVariantDataType_TEXT='(Variant data type: The default data type for variables that don\'t have type-declaration characters when a <b>Def</b><i>type</i> statement isn\'t in effect. A <b>Variant</b> can store numeric, string, date/time, <b>Null</b>, or <b>Empty</b> data.)';
			sTemp=L_ofVariantDataType_TEXT;
			break;
		case 'ofVBA':
			L_ofVBA_TEXT='(VBA: A macro-language version of Microsoft Visual Basic that is used to program Windows applications and is included with several Microsoft applications.)';
			sTemp=L_ofVBA_TEXT;
			break;
		case 'ofVBScript':
			L_ofVBScript_TEXT='(Visual Basic Scripting Edition (VBScript): An interpreted, object-based scripting language that is a subset of the Microsoft Visual Basic programming language.)';
			sTemp=L_ofVBScript_TEXT;
			break;
		case 'OfVennDiagram':
			L_OfVennDiagram_TEXT='(Venn diagram: A diagram that is used to show areas of overlap between and among elements.)';
			sTemp=L_OfVennDiagram_TEXT;
			break;
		case 'ofVerb':
			L_ofVerb_TEXT='(verb: One of three operations, Edit, Open, or Play, that you activate by double-clicking an OLE object that is embedded in an object frame.)';
			sTemp=L_ofVerb_TEXT;
			break;
		case 'ofVertex':
			L_ofVertex_TEXT='(vertex: The highest point of a curve, the point where a curve ends, or the point where two line segments meet in a polygon or freeform.)';
			sTemp=L_ofVertex_TEXT;
			break;
		case 'ofVGA':
			L_ofVGA_TEXT='(video graphics adapter (VGA): A computer video standard that displays a screen size of 640 horizontal pixels by 480 vertical pixels.)';
			sTemp=L_ofVGA_TEXT;
			break;
		case 'ofVideoCaptureDevice':
			L_ofVideoCaptureDevice_TEXT='(video capture device: A device that converts analog images (for example, from a television or VCR) into digital images.)';
			sTemp=L_ofVideoCaptureDevice_TEXT;
			break;
		case 'OfView':
			L_OfView_TEXT='(view: A set of fields on a Web page that displays items in a list or document library. The view can display sorted or filtered items, a selection of fields, or a custom layout. Requires a Web server that is running Microsoft\'s SharePoint Team Services.)';
			sTemp=L_OfView_TEXT;
			break;
		case 'ofVirus':
			L_ofVirus_TEXT='(virus: A computer program or macro that \"infects\" computer files by inserting copies of itself into those files. When the infected file is loaded into memory, the virus can infect other files. Viruses often have harmful side effects.)';
			sTemp=L_ofVirus_TEXT;
			break;
		case 'ofVisual':
			L_ofVisual_TEXT='(visual: Used to describe insertion point movement and text selection when working with bidirectional text. Movement progresses within bidirectional text by moving to the next visually adjacent character.)';
			sTemp=L_ofVisual_TEXT;
			break;
		case 'ofVisualBasic':
			L_ofVisualBasic_TEXT='(Visual Basic: A high-level, visual-programming version of Basic. Visual Basic was developed by Microsoft for building Windows-based applications.)';
			sTemp=L_ofVisualBasic_TEXT;
			break;
		case 'ofVisualBasicEditor':
			L_ofVisualBasicEditor_TEXT='(Visual Basic Editor: An environment in which you write new and edit existing Visual Basic for Applications code and procedures. The Visual Basic Editor contains a complete debugging toolset for finding syntax, run-time, and logic problems in your code.)';
			sTemp=L_ofVisualBasicEditor_TEXT;
			break;
		case 'OfVisualBasicHelp':
			L_OfVisualBasicHelp_TEXT='(Visual Basic Help: To get Help for Visual Basic, point to <b>Macro </b>on the <b>Tools </b>menu, and then click <b>Visual Basic Editor</b>. On the <b>Help</b> menu, click <b>Microsoft Visual Basic Help</b>.)';
			sTemp=L_OfVisualBasicHelp_TEXT;
			break;
		case 'ofWAIS':
			L_ofWAIS_TEXT='(Wide Area Information Server (WAIS): A UNIX-based document search and retrieval system on the Internet that can be used to search over 400 WAIS libraries for indexed files that match a series of keywords.)';
			sTemp=L_ofWAIS_TEXT;
			break;
		case 'ofWAN':
			L_ofWAN_TEXT='(wide area network (WAN): A computer network that spans a long distance and uses specialized computers to connect smaller networks.)';
			sTemp=L_ofWAN_TEXT;
			break;
		case 'ofWatchExpression':
			L_ofWatchExpression_TEXT='(watch expression: An expression you define in the Watch pane of the Immediate window while debugging Visual Basic code. When execution of your code is suspended, you can observe the values of the watch expressions as you step through the code.)';
			sTemp=L_ofWatchExpression_TEXT;
			break;
		case 'ofWatchWindow':
			L_ofWatchWindow_TEXT='(Watch window: A window in the Visual Basic Editor used for debugging Visual Basic procedures. You can specify the variables from the procedure you want to inspect, and the Watch window displays the value of the variable as the procedure runs.)';
			sTemp=L_ofWatchWindow_TEXT;
			break;
		case 'ofWatermark':
			L_ofWatermark_TEXT='(watermark: A semi-transparent image often used for letters and business cards. In currency, a watermark is visible when you hold a bill up to the light.)';
			sTemp=L_ofWatermark_TEXT;
			break;
		case 'ofWebBrowser':
			L_ofWebBrowser_TEXT='(Web browser: Software that interprets HTML files, formats them into Web pages, and displays them. A Web browser, such as Microsoft Internet Explorer, can follow hyperlinks, transfer files, and play sound or video files that are embedded in Web pages.)';
			sTemp=L_ofWebBrowser_TEXT;
			break;
		case 'OfWebDiscussion':
			L_OfWebDiscussion_TEXT='(Web discussion: Comments that users attach to Web pages and documents. Also known as \"Web document discussion\" to differentiate it from discussion boards. Requires a Web server that is running Microsoft Windows SharePoint Services.)';
			sTemp=L_OfWebDiscussion_TEXT;
			break;
		case 'OfWebFolder':
			L_OfWebFolder_TEXT='(Web folder: A shortcut you use to save, open, copy, or delete files on a Web or FTP server. Some Web folders, such as document libraries, have functionality not available with local folders. You\'ll find Web folders in My Network Places or Web Folders.)';
			sTemp=L_OfWebFolder_TEXT;
			break;
		case 'OfWebPresenceProvider':
			L_OfWebPresenceProvider_TEXT='(Web Presence Provider (WPP): A Web hosting and Internet Service Provider who manages the Web server hardware and software required to make your Web site available on the Internet.)';
			sTemp=L_OfWebPresenceProvider_TEXT;
			break;
		case 'ofWebSite':
			L_ofWebSite_TEXT='(Web site: A group of related Web pages that is hosted by an HTTP server on the World Wide Web. The pages in a Web site generally cover one or more topics and are interconnected through hyperlinks. Most Web sites have a home page as their starting point.)';
			sTemp=L_ofWebSite_TEXT;
			break;
		case 'OfWebStorageSystem':
			L_OfWebStorageSystem_TEXT='(WSS: The storage component of Exchange 2000 server and SharePoint Team Services, which integrates Web server, database, file system, and workgroup functionality. The WSS lets you store and share many types of data in a single integrated system.)';
			sTemp=L_OfWebStorageSystem_TEXT;
			break;
		case 'ofwellformedxmldocument':
			L_ofwellformedxmldocument_TEXT='(well-formed XML document: XML file in which there is only one root element and all the elements, delimited by start- and end-tags, nest properly within each other.)';
			sTemp=L_ofwellformedxmldocument_TEXT;
			break;
		case 'ofWestern':
			L_ofWestern_TEXT='(Western calendar: Used to describe the Gregorian calendar that is used predominantly in Europe and English-speaking countries.)';
			sTemp=L_ofWestern_TEXT;
			break;
		case 'ofWhatsThisTip':
			L_ofWhatsThisTip_TEXT='(What\'s This tip: A tip that appears beside a control, screen region, menu command, or toolbar button.)';
			sTemp=L_ofWhatsThisTip_TEXT;
			break;
		case 'ofWhiteSpace':
			L_ofWhiteSpace_TEXT='(white space: The areas of blank space on a page that can be used in a design for balance, contrast, and visual appeal.)';
			sTemp=L_ofWhiteSpace_TEXT;
			break;
		case 'ofWindowsAPI':
			L_ofWindowsAPI_TEXT='(Windows API: The functions, messages, data structures, data types, and statements you can use in creating applications that run under Microsoft Windows 95 or later, including procedure declarations, user-defined type definitions, and constant declarations.)';
			sTemp=L_ofWindowsAPI_TEXT;
			break;
		case 'OfWindowsImageAcquisition':
			L_OfWindowsImageAcquisition_TEXT='(Windows Image Acquisition (WIA):&nbsp;A device-driver interface that supports still digital cameras and low- and high-end scanners, and allows retrieving of still images from IEEE 1394-based DV camcorders and USB-based \"Web cams.\")';
			sTemp=L_OfWindowsImageAcquisition_TEXT;
			break;
		case 'ofWizard':
			L_ofWizard_TEXT='(wizard: A feature that asks questions and then creates an item, such as a form or Web page, according to your answers.)';
			sTemp=L_ofWizard_TEXT;
			break;
		case 'ofWMF':
			L_ofWMF_TEXT='(Windows Metafile Format (WMF): A vector graphics format for Windows-compatiblle computers used mostly as a clip art format in word-processing documents.)';
			sTemp=L_ofWMF_TEXT;
			break;
		case 'OfWordart':
			L_OfWordart_TEXT='(WordArt: Text objects you create with ready-made effects to which you can apply additional formatting options.)';
			sTemp=L_OfWordart_TEXT;
			break;
		case 'ofWordArtWithRightToLeft':
			L_ofWordArtWithRightToLeft_TEXT='(WordArt with right-to-left features: WordArt provides right-to-left language support when Office is enabled with a right-to-left language. A WordArt object accepts text of only one language at a time, but you can prepare a WordArt object for each language.)';
			sTemp=L_ofWordArtWithRightToLeft_TEXT;
			break;
		case 'ofWorkingFolder':
			L_ofWorkingFolder_TEXT='(working folder: The folder in which your documents appear when you open or save them. If you select another folder when opening or saving, that folder becomes the working folder. You can set the startup location of this folder in most Office applications.)';
			sTemp=L_ofWorkingFolder_TEXT;
			break;
		case 'ofWorkpane':
			L_ofWorkpane_TEXT='(workpane: The area of the workspace that contains the options you select for a given task. Workpanes appear at certain times, such as when a document is opened, or when you click certain items on menus and toolbars.)';
			sTemp=L_ofWorkpane_TEXT;
			break;
		case 'ofWorldWideWebConsortium':
			L_ofWorldWideWebConsortium_TEXT='(World Wide Web Consortium (W3C): A consortium of commercial and educational institutions that oversees research and promotes standards in all areas related to the World Wide Web.)';
			sTemp=L_ofWorldWideWebConsortium_TEXT;
			break;
		case 'ofxmlexpansionpack':
			L_ofxmlexpansionpack_TEXT='(XML expansion pack: A collection of files, managed by a manifest.xml file, that add functionality to a Microsoft Word or Microsoft Excel document by specifying custom display or actions.)';
			sTemp=L_ofxmlexpansionpack_TEXT;
			break;
		case 'OfXmlSchemas':
			L_OfXmlSchemas_TEXT='(XML Schema: A formal specification, written in XML, that defines the structure of an XML document, including element names and rich data types, which elements can appear in combination, and which attributes are available for each element.)';
			sTemp=L_OfXmlSchemas_TEXT;
			break;
		case 'OfXmlStylesheet':
			L_OfXmlStylesheet_TEXT='(XML stylesheet: Contains formatting rules which are applied to an XML file that references the stylesheet. The standard set of rules for XML stylesheets is the Extensible Style Language (XSL).)';
			sTemp=L_OfXmlStylesheet_TEXT;
			break;
		case 'wddefbidiAlefLam':
			L_wddefbidiAlefLam_TEXT='(Alef Lam: Analogous to the English word \"the.\" Can be ignored when sorting text in tables in several Microsoft Office programs when enabled for right-to-left features.)';
			sTemp=L_wddefbidiAlefLam_TEXT;
			break;
		case 'wddefbidiComplexScript':
			L_wddefbidiComplexScript_TEXT='(complex scripts: Languages whose characters require ligation or shaping, such as the right-to-left languages (Arabic, Farsi, Hebrew, and Urdu) and several South Asian languages.)';
			sTemp=L_wddefbidiComplexScript_TEXT;
			break;
		case 'wddefbidiInstalledLanguage':
			L_wddefbidiInstalledLanguage_TEXT='(installed language: The base language used that governs how several language characteristics will behave, such as the language of the primary dictionary, and the direction and alignment of text (left-to-right or right-to-left).)';
			sTemp=L_wddefbidiInstalledLanguage_TEXT;
			break;
		case 'wddefbidiLunar':
			L_wddefbidiLunar_TEXT='(Lunar calendar: Predominant calendar that is used in Israel among Hebrew speakers.)';
			sTemp=L_wddefbidiLunar_TEXT;
			break;
		case 'xldefToolbarDock':
			L_xldefToolbarDock_TEXT='(docked toolbar: A toolbar that is attached to one edge of the program window. When you drag a toolbar below the program title bar or to the left, right, or bottom edge of the program window, the toolbar snaps into place on the edge of the program window.)';
			sTemp=L_xldefToolbarDock_TEXT;
			break;

		// Outlook

		case 'IDH_ofdefHistoryList':
			L_IDH_ofdefHistoryList_TEXT='(History list: A list of the last 10 files that you jumped to in the current program session by using hyperlinks.)';
			sTemp=L_IDH_ofdefHistoryList_TEXT;
			break;
		case 'IDH_oldefAttribute':
			L_IDH_oldefAttribute_TEXT='(attribute: A holder for a single piece of information, for example, the surname of a person. Each entry in an Internet Directory is made up of a list of attributes. Your Internet Directory site administrator determines the attributes relevant to you.)';
			sTemp=L_IDH_oldefAttribute_TEXT;
			break;
		case 'IDH_oldefDistinguishedName':
			L_IDH_oldefDistinguishedName_TEXT='(distinguished name: Uniquely identifies a person or group across all Internet directories. Consists of several descriptive attributes, such as Common Name, Organization, and Country. An example of a distinguished name is: cn=Jeff Hay, o=Microsoft, c=US.)';
			sTemp=L_IDH_oldefDistinguishedName_TEXT;
			break;
		case 'IDH_oldefFolderList':
			L_IDH_oldefFolderList_TEXT='(Folder List: Displays the folders available in your mailbox. To view subfolders, click the plus sign (+) next to the folder. If the Folder List is not visible, on the Go menu, click Folder List.)';
			sTemp=L_IDH_oldefFolderList_TEXT;
			break;
		case 'IDH_oldefInternetDirectory':
			L_IDH_oldefInternetDirectory_TEXT='(Internet Directory: Storage place for information such as names, organizations, departments, countries, and locations. Typically, Internet Directories are used to find e-mail addresses that are not in a local address book or a corporate-wide directory.)';
			sTemp=L_IDH_oldefInternetDirectory_TEXT;
			break;
		case 'IDH_oldefLDAP':
			L_IDH_oldefLDAP_TEXT='(Lightweight Directory Access Protocol (LDAP): A protocol that provides access to Internet Directories.)';
			sTemp=L_IDH_oldefLDAP_TEXT;
			break;
		case 'IDH_oldefOrganizationalUnit':
			L_IDH_oldefOrganizationalUnit_TEXT='(organizational unit: A type of entry that is used specifically for storing information about a section of an organization. It can represent a department or a group of people, for example, ou = Accounting Dept.)';
			sTemp=L_IDH_oldefOrganizationalUnit_TEXT;
			break;
		case 'IDH_oltipFolderHomePage':
			L_IDH_oltipFolderHomePage_TEXT='(folder home page: Internet Web page or intranet page that is associated with an Outlook folder. If a page has been associated with the folder and the option is set, the Web page appears in the Outlook window whenever you select the folder.)';
			sTemp=L_IDH_oltipFolderHomePage_TEXT;
			break;
		case 'IDH_redefAcceleratorKey':
			L_IDH_redefAcceleratorKey_TEXT='(accelerator key: A single character that is used as a shortcut for selecting an object. Also called keyboard accelerator, shortcut key, and keyboard shortcut.)';
			sTemp=L_IDH_redefAcceleratorKey_TEXT;
			break;
		case 'IDH_redefAddressBook':
			L_IDH_redefAddressBook_TEXT='(Address Book: The collection of address books that you can use to store names, e-mail addresses, fax numbers, and distribution lists. The Address Book may contain a Global Address List, an Outlook Address Book, and a Personal Address Book.)';
			sTemp=L_IDH_redefAddressBook_TEXT;
			break;
		case 'IDH_redefArchiving':
			L_IDH_redefArchiving_TEXT='(archive: To remove selected items to another location for storage and occasional future access.)';
			sTemp=L_IDH_redefArchiving_TEXT;
			break;
		case 'IDH_redefArgument':
			L_IDH_redefArgument_TEXT='(argument: The value of a field or an expression that is used in a function.)';
			sTemp=L_IDH_redefArgument_TEXT;
			break;
		case 'IDH_redefAssignedTask':
			L_IDH_redefAssignedTask_TEXT='(assigned task: A task that has been sent to someone as a task request in an e-mail message. When you assign a task, you give up ownership of it (unless the assignee declines it). The assigner can receive status reports for the task.)';
			sTemp=L_IDH_redefAssignedTask_TEXT;
			break;
		case 'IDH_redefAutoArchiving':
			L_IDH_redefAutoArchiving_TEXT='(AutoArchive: To automatically remove items to another folder periodically or delete them, based on the amount of time that they have been in the folder.)';
			sTemp=L_IDH_redefAutoArchiving_TEXT;
			break;
		case 'IDH_redefBackgroundColor':
			L_IDH_redefBackgroundColor_TEXT='(background color: The color of the client region of an empty window or display screen, on which all drawing and color display takes place.)';
			sTemp=L_IDH_redefBackgroundColor_TEXT;
			break;
		case 'IDH_redefBind':
			L_IDH_redefBind_TEXT='(bind: The only controls that you need to bind to fields are the controls for which you need to save information. When a control is bound to a field, the information from the control is saved in the field.)';
			sTemp=L_IDH_redefBind_TEXT;
			break;
		case 'IDH_redefBitwiseComparison':
			L_IDH_redefBitwiseComparison_TEXT='(bit-wise comparison: A bit-by-bit comparison of identically positioned bits in two numeric expressions.)';
			sTemp=L_IDH_redefBitwiseComparison_TEXT;
			break;
		case 'IDH_redefBoldDates':
			L_IDH_redefBoldDates_TEXT='(bold dates: Days that contain items in the small calendar (called the Date Navigator) are bold.)';
			sTemp=L_IDH_redefBoldDates_TEXT;
			break;
		case 'IDH_redefBound':
			L_IDH_redefBound_TEXT='(bound: A control whose contents are associated with a particular data source, such as a field in a Contacts folder.)';
			sTemp=L_IDH_redefBound_TEXT;
			break;
		case 'IDH_redefCaption':
			L_IDH_redefCaption_TEXT='(caption: Descriptive text that appears directly on or around a control.)';
			sTemp=L_IDH_redefCaption_TEXT;
			break;
		case 'IDH_redefCategory':
			L_IDH_redefCategory_TEXT='(category: A keyword or phrase that helps you keep track of items so you can easily find, sort, filter, or group them.)';
			sTemp=L_IDH_redefCategory_TEXT;
			break;
		case 'IDH_redefCharacter':
			L_IDH_redefCharacter_TEXT='(character code: A number that represents a particular character in a set, such as the ANSI character set.)';
			sTemp=L_IDH_redefCharacter_TEXT;
			break;
		case 'IDH_redefClassIdentifierCLSID':
			L_IDH_redefClassIdentifierCLSID_TEXT='(class identifier (CLSID): A unique identifier (UUID) that identifies an object. An object registers its CLSID in the system registration database so the object can be loaded and programmed by other applications.)';
			sTemp=L_IDH_redefClassIdentifierCLSID_TEXT;
			break;
		case 'IDH_redefClientRegion':
			L_IDH_redefClientRegion_TEXT='(client region: The portion of a window where an application displays output such as text or graphics.)';
			sTemp=L_IDH_redefClientRegion_TEXT;
			break;
		case 'IDH_redefClientScripts':
			L_IDH_redefClientScripts_TEXT='(client scripts: Statements that appear on the HTML page. Scripts are executed when a document is loaded or in response to an event such as a button click.)';
			sTemp=L_IDH_redefClientScripts_TEXT;
			break;
		case 'IDH_redefColumnHeading':
			L_IDH_redefColumnHeading_TEXT='(column heading: The horizontal bar at the top of one column in a table. There are multiple column headings in the column heading row.)';
			sTemp=L_IDH_redefColumnHeading_TEXT;
			break;
		case 'IDH_redefComparisonOperators':
			L_IDH_redefComparisonOperators_TEXT='(comparison operators: A character or symbol that indicates a relationship between two or more values or expressions, for example, <, >, and =.)';
			sTemp=L_IDH_redefComparisonOperators_TEXT;
			break;
		case 'IDH_redefContactAddressBook':
			L_IDH_redefContactAddressBook_TEXT='(Outlook Address Book: An address book that is automatically created from contacts in the Contacts folder. The contacts can be people inside and outside of your organization. When you update your contacts, the Outlook Address Book is updated as well.)';
			sTemp=L_IDH_redefContactAddressBook_TEXT;
			break;
		case 'IDH_redefContactList':
			L_IDH_redefContactList_TEXT='(contact list: In the Contacts folder, the list of people and organizations with whom you correspond.)';
			sTemp=L_IDH_redefContactList_TEXT;
			break;
		case 'IDH_redefContainer':
			L_IDH_redefContainer_TEXT='(container: An object that can contain other objects.)';
			sTemp=L_IDH_redefContainer_TEXT;
			break;
		case 'IDH_redefContextID':
			L_IDH_redefContextID_TEXT='(context ID: A unique number or string that corresponds to a specific object in an application. Context IDs are used to create links between the application and corresponding Help topics.)';
			sTemp=L_IDH_redefContextID_TEXT;
			break;
		case 'IDH_redefControlGroup':
			L_IDH_redefControlGroup_TEXT='(control group: A set of controls that are conceptually or logically related. Controls that are conceptually related are usually viewed together but do not necessarily affect each other. Controls that are logically related affect each other.)';
			sTemp=L_IDH_redefControlGroup_TEXT;
			break;
		case 'IDH_redefControlTip':
			L_IDH_redefControlTip_TEXT='(control tip: A brief phrase that describes a control, a page, or a tab. The control tip appears when the user briefly holds the mouse pointer over a control.)';
			sTemp=L_IDH_redefControlTip_TEXT;
			break;
		case 'IDH_redefCursor':
			L_IDH_redefCursor_TEXT='(cursor: A piece of software that returns rows of data to the application. A cursor on a result set indicates the current position in the result set.)';
			sTemp=L_IDH_redefCursor_TEXT;
			break;
		case 'IDH_redefCustomField':
			L_IDH_redefCustomField_TEXT='(custom field: A field that you can create. A custom field can be a blank, combination, or formula field.)';
			sTemp=L_IDH_redefCustomField_TEXT;
			break;
		case 'IDH_redefCycle':
			L_IDH_redefCycle_TEXT='(cycle: To move through a group of objects in a defined order.)';
			sTemp=L_IDH_redefCycle_TEXT;
			break;
		case 'IDH_redefDataSource':
			L_IDH_redefDataSource_TEXT='(data source: The location of data to which a control is bound. For example, a field in a Contacts folder.)';
			sTemp=L_IDH_redefDataSource_TEXT;
			break;
		case 'IDH_redefDateExpression':
			L_IDH_redefDateExpression_TEXT='(date expression: Any expression that can be interpreted as a date. This includes any combination of date literals, numbers that look like dates, strings that look like dates, and dates returned from functions.)';
			sTemp=L_IDH_redefDateExpression_TEXT;
			break;
		case 'IDH_redefDateLiteral':
			L_IDH_redefDateLiteral_TEXT='(date literal: Any sequence of characters with a valid format that is surrounded by number signs (#). Valid formats include the date format specified by the locale settings for your code or the universal date format.)';
			sTemp=L_IDH_redefDateLiteral_TEXT;
			break;
		case 'IDH_redefDateSeperators':
			L_IDH_redefDateSeperators_TEXT='(date separators: Characters that are used to separate the day, month, and year when date values are formatted. The characters are determined by system settings or by the Format function.)';
			sTemp=L_IDH_redefDateSeperators_TEXT;
			break;
		case 'IDH_redefDayNumber':
			L_IDH_redefDayNumber_TEXT='(day numbers: The numbers in the small calendar (called the Date Navigator) under the weekday columns. Days that contain items are bold.)';
			sTemp=L_IDH_redefDayNumber_TEXT;
			break;
		case 'IDH_redefDelegate':
			L_IDH_redefDelegate_TEXT='(delegate: Someone granted permission to open another person\'s folders, create items, and respond to requests for that person. The person granting delegate permission determines the folders the delegate can access and the changes the delegate can make.)';
			sTemp=L_IDH_redefDelegate_TEXT;
			break;
		case 'IDH_redefDialableFormat':
			L_IDH_redefDialableFormat_TEXT='(dialable format: A phone number format for dialing internal business extensions (for example, 2414), an operator or emergency service, or directory assistance. Calling cards cannot be used with this format.)';
			sTemp=L_IDH_redefDialableFormat_TEXT;
			break;
		case 'IDH_redefDomainNameSystemDNS':
			L_IDH_redefDomainNameSystemDNS_TEXT='(DNS: Internet service that translates a domain name representing a group of computers (for example, microsoft.com) into a numeric address. The Internet is based on numeric addresses, but domain names are used because they are easier to remember.)';
			sTemp=L_IDH_redefDomainNameSystemDNS_TEXT;
			break;
		case 'IDH_redefDominantControl':
			L_IDH_redefDominantControl_TEXT='(dominant control: The control to which other selected controls are aligned and sized. When aligning controls, selected controls align to the dominant control. When sizing controls, selected controls are assigned the dimensions of the dominant control.)';
			sTemp=L_IDH_redefDominantControl_TEXT;
			break;
		case 'IDH_redefDragHandles':
			L_IDH_redefDragHandles_TEXT='(move handle: The left border of an appointment, which you click to move the appointment. When viewing a single day in Calendar, click the left move handle and drag to move the appointment; click the top or bottom border to resize the appointment.)';
			sTemp=L_IDH_redefDragHandles_TEXT;
			break;
		case 'IDH_redefEmailSendBoxes':
			L_IDH_redefEmailSendBoxes_TEXT='(To, Cc, and Bcc boxes: A message is sent to the recipients in the To box. Recipients in the Cc (carbon copy) and Bcc (blind carbon copy) boxes also get the message; however, the names of the recipients in the Bcc box aren\'t visible to other recipients.)';
			sTemp=L_IDH_redefEmailSendBoxes_TEXT;
			break;
		case 'IDH_redefEmailServer':
			L_IDH_redefEmailServer_TEXT='(e-mail server: A computer that stores e-mail messages.)';
			sTemp=L_IDH_redefEmailServer_TEXT;
			break;
		case 'IDH_redefFavoriteWebPage':
			L_IDH_redefFavoriteWebPage_TEXT='(favorite Web page: A shortcut to a Web page that is saved in the Favorites folder.)';
			sTemp=L_IDH_redefFavoriteWebPage_TEXT;
			break;
		case 'IDH_redefFolderBar':
			L_IDH_redefFolderBar_TEXT='(Folder Banner: The horizontal bar just below the toolbars that shows the name of the current folder on the left and the icon for it on the right. To quickly view a temporary Folder List, click the name of the current folder on the Folder Banner.)';
			sTemp=L_IDH_redefFolderBar_TEXT;
			break;
		case 'IDH_redefForegroundColor':
			L_IDH_redefForegroundColor_TEXT='(foreground color: The color that is currently selected for drawing or displaying text on the screen. In monochrome displays, the foreground color is the color of a bitmap or other graphic.)';
			sTemp=L_IDH_redefForegroundColor_TEXT;
			break;
		case 'IDH_redefForm':
			L_IDH_redefForm_TEXT='(form: A way to distribute and collect information electronically. For example, a form can be available for anyone to order supplies or to post information in a public folder. All Outlook items, such as messages and appointments, are based on forms.)';
			sTemp=L_IDH_redefForm_TEXT;
			break;
		case 'IDH_redefFormat':
			L_IDH_redefFormat_TEXT='(data format: The structure or appearance of a unit of data, such as a field, or text in a message body.)';
			sTemp=L_IDH_redefFormat_TEXT;
			break;
		case 'IDH_redefFormsCache':
			L_IDH_redefFormsCache_TEXT='(forms cache: The folder located in C:\\Windows\\Forms that serves as a storage location for forms.)';
			sTemp=L_IDH_redefFormsCache_TEXT;
			break;
		case 'IDH_redefFree':
			L_IDH_redefFree_TEXT='(free: Free time appears with a clear availability indicator and is seen as available when others view your Calendar. An appointment of zero duration, while visible in the selected block of time when viewing days, shows as free time to others.)';
			sTemp=L_IDH_redefFree_TEXT;
			break;
		case 'IDH_redefFreeBusyBar':
			L_IDH_redefFreeBusyBar_TEXT='(free/busy time: In Calendar, time status and user defined labels are indicated by colors and patterns.)';
			sTemp=L_IDH_redefFreeBusyBar_TEXT;
			break;
		case 'IDH_redefFullName':
			L_IDH_redefFullName_TEXT='(full name: The first and last name for a contact, or the first and last name plus any middle name, title, and suffix (for example, Jr. or Dr.).)';
			sTemp=L_IDH_redefFullName_TEXT;
			break;
		case 'IDH_redefGateway':
			L_IDH_redefGateway_TEXT='(gateway: A device that connects different e-mail systems and transfers messages between them.)';
			sTemp=L_IDH_redefGateway_TEXT;
			break;
		case 'IDH_redefGlobalAddressList':
			L_IDH_redefGlobalAddressList_TEXT='(Global Address List: The address book that contains all user, group, and distribution list e-mail addresses in your organization. The administrator creates and maintains this address book. It may also contain public folder e-mail addresses.)';
			sTemp=L_IDH_redefGlobalAddressList_TEXT;
			break;
		case 'IDH_redefGridBlock':
			L_IDH_redefGridBlock_TEXT='(grid block: The space between two adjacent grid points.)';
			sTemp=L_IDH_redefGridBlock_TEXT;
			break;
		case 'IDH_redefGroup':
			L_IDH_redefGroup_TEXT='(group: A set of items with one common attribute; for example, priority or status. Also, to group is to combine items with a common attribute under a shared heading in a table or on a timeline.)';
			sTemp=L_IDH_redefGroup_TEXT;
			break;
		case 'IDH_redefInformationService':
			L_IDH_redefInformationService_TEXT='(information service: Settings that enable you to send, store, and receive e-mail, and that define how to store and use addresses. You can have multiple information services in one user profile.)';
			sTemp=L_IDH_redefInformationService_TEXT;
			break;
		case 'IDH_redefInternationalFormat':
			L_IDH_redefInternationalFormat_TEXT='(international format: A phone number format for dialing any call from any location or with a calling card. The format should appear this way: country code (area code) + local number. Don\'t include other punctuation, characters, or alphanumeric characters.)';
			sTemp=L_IDH_redefInternationalFormat_TEXT;
			break;
		case 'IDH_redefItem':
			L_IDH_redefItem_TEXT='(item: An item is the basic element that holds information in Outlook (similar to a file in other programs). Items include e-mail messages, appointments, contacts, tasks, journal entries, notes, posted items, and documents.)';
			sTemp=L_IDH_redefItem_TEXT;
			break;
		case 'IDH_redefJournalEntry':
			L_IDH_redefJournalEntry_TEXT='(journal entry: An item in the Journal folder that acts as a shortcut to an activity that has been recorded. You can distinguish a journal entry from other items by the clock that appears in the lower-left corner of the icon.)';
			sTemp=L_IDH_redefJournalEntry_TEXT;
			break;
		case 'IDH_redefKeyManagementServer':
			L_IDH_redefKeyManagementServer_TEXT='(Key Management server: The Microsoft Exchange Server that distributes and keeps track of private keys.)';
			sTemp=L_IDH_redefKeyManagementServer_TEXT;
			break;
		case 'IDH_redefLocale':
			L_IDH_redefLocale_TEXT='(locale: The set of information that corresponds to a given language and country. The code locale setting affects the language of terms, such as keywords, and defines locale-specific settings, such as the date formats and character sorting order.)';
			sTemp=L_IDH_redefLocale_TEXT;
			break;
		case 'IDH_redefMailbox':
			L_IDH_redefMailbox_TEXT='(mailbox: Location on a Microsoft Exchange server where your e-mail is delivered. Your administrator sets up a mailbox for each user. If you designate a personal folder file as your e-mail delivery location, messages are routed to it from your mailbox.)';
			sTemp=L_IDH_redefMailbox_TEXT;
			break;
		case 'IDH_redefMailDeliveryService':
			L_IDH_redefMailDeliveryService_TEXT='(mail delivery service: A type of information service used to configure Outlook (and other messaging programs) to send and receive e-mail. For example, with an Internet mail delivery service you send and receive messages over the Internet in Outlook.)';
			sTemp=L_IDH_redefMailDeliveryService_TEXT;
			break;
		case 'IDH_redefMailingAddress':
			L_IDH_redefMailingAddress_TEXT='(mailing address: When you create a contact, you can enter up to three addresses for it. You select one address as the mailing address, which becomes the primary address that appears in most views and which is used in mail merges in Microsoft Word.)';
			sTemp=L_IDH_redefMailingAddress_TEXT;
			break;
		case 'IDH_redefMasterCategoryList':
			L_IDH_redefMasterCategoryList_TEXT='(Master Category List: The list of categories that you can use to group items or to find items. This list contains general categories such as Business, Personal, and Phone Calls. You can add categories to and delete categories from this list.)';
			sTemp=L_IDH_redefMasterCategoryList_TEXT;
			break;
		case 'IDH_redefMessageClass':
			L_IDH_redefMessageClass_TEXT='(message class: Used by Microsoft Exchange to identify, locate, and open a form.)';
			sTemp=L_IDH_redefMessageClass_TEXT;
			break;
		case 'IDH_redefMessageHeader':
			L_IDH_redefMessageHeader_TEXT='(message header: Summary information that you download to your computer to determine whether to download, copy, or delete the entire message from the server. The header includes these fields: Subject, From, Received, Importance, Attachment, and Size.)';
			sTemp=L_IDH_redefMessageHeader_TEXT;
			break;
		case 'IDH_redefMessageList':
			L_IDH_redefMessageList_TEXT='(message list: The middle part of the main Outlook window that displays the contents of the selected folder.)';
			sTemp=L_IDH_redefMessageList_TEXT;
			break;
		case 'IDH_redefMessageTag':
			L_IDH_redefMessageTag_TEXT='(flag: A symbol that indicates there is a follow-up action needed from you or from someone else.)';
			sTemp=L_IDH_redefMessageTag_TEXT;
			break;
		case 'IDH_redefModeless':
			L_IDH_redefModeless_TEXT='(modeless: A window or dialog box that does not require the user to perform an action before the focus can be switched to another form or dialog box.)';
			sTemp=L_IDH_redefModeless_TEXT;
			break;
		case 'IDH_redefNamedExpression':
			L_IDH_redefNamedExpression_TEXT='(named argument: An argument that has a name that is predefined in a field. Instead of providing values for arguments in the order expected by the syntax, you can use named arguments to assign values in any order.)';
			sTemp=L_IDH_redefNamedExpression_TEXT;
			break;
		case 'IDH_redefNetMeeting':
			L_IDH_redefNetMeeting_TEXT='(NetMeeting: Microsoft conferencing software that you can use to communicate by both audio and video, work as a group in Windows-based programs, exchange graphics on an electronic whiteboard, transfer files, or chat by text.)';
			sTemp=L_IDH_redefNetMeeting_TEXT;
			break;
		case 'IDH_redefNewGroup':
			L_IDH_redefNewGroup_TEXT='(New group: A collection of names with a common attribute. For example, you might create a group of people with whom you discuss movies and a group of people with whom you discuss fishing.)';
			sTemp=L_IDH_redefNewGroup_TEXT;
			break;
		case 'IDH_redefNewsgroup':
			L_IDH_redefNewsgroup_TEXT='(newsgroup: A collection of messages posted by individuals to a news server, a computer maintained by a company, group, or individual. Some newsgroups are monitored, but most are not, and messages can be posted and read by anyone with access to the group.)';
			sTemp=L_IDH_redefNewsgroup_TEXT;
			break;
		case 'IDH_redefNewsServer':
			L_IDH_redefNewsServer_TEXT='(news server: A computer, maintained by a company, group, or individual, that can store messages for online discussion groups such as newsgroups or forums.)';
			sTemp=L_IDH_redefNewsServer_TEXT;
			break;
		case 'IDH_redefNNTP':
			L_IDH_redefNNTP_TEXT='(NNTP: Protocol for distributing, inquiring about, retrieving, and posting news articles, using reliable stream-based transmission of news. Designed to store articles in a central database, allowing subscribers to select only those they want to retrieve.)';
			sTemp=L_IDH_redefNNTP_TEXT;
			break;
		case 'IDH_redefNull':
			L_IDH_redefNull_TEXT='(null: A value indicating that a variable contains no valid data. Null is the result of an explicit assignment of Null to a variable or any operation between expressions that contain Null.)';
			sTemp=L_IDH_redefNull_TEXT;
			break;
		case 'IDH_redefOfflineFolderFile':
			L_IDH_redefOfflineFolderFile_TEXT='(Offline Folder file: The file on your hard disk that contains offline folders. The offline folder file has an .ost extension. You can create it automatically when you set up Outlook or when you first make a folder available offline.)';
			sTemp=L_IDH_redefOfflineFolderFile_TEXT;
			break;
		case 'IDH_redefOLEContainerControls':
			L_IDH_redefOLEContainerControls_TEXT='(OLE container control: A Visual Basic control that is used to link and embed objects from other applications in a Visual Basic application.)';
			sTemp=L_IDH_redefOLEContainerControls_TEXT;
			break;
		case 'IDH_redefOptional':
			L_IDH_redefOptional_TEXT='(optional: When an attendee is marked optional, the meeting request to that person conveys that the appointment is FYI (for your information). The person can delete the FYI appointment or view it in Calendar, but cannot accept or decline.)';
			sTemp=L_IDH_redefOptional_TEXT;
			break;
		case 'IDH_redefOutlookWebAccess':
			L_IDH_redefOutlookWebAccess_TEXT='(Outlook Web Access: If you are away from your computer, or if you share a computer with other people, you can use Outlook Web Access to gain access to your Microsoft Exchange server information securely from any browser.)';
			sTemp=L_IDH_redefOutlookWebAccess_TEXT;
			break;
		case 'IDH_redefOutOfOffice':
			L_IDH_redefOutOfOffice_TEXT='(out of office: Blocks of time marked out of office appear with a solid availability indicator and a shaded appointment background, and they are shown as unavailable when other people view your Calendar.)';
			sTemp=L_IDH_redefOutOfOffice_TEXT;
			break;
		case 'IDH_redefPersonalAddressBook':
			L_IDH_redefPersonalAddressBook_TEXT='(Personal Address Book: A customizable address book used to store personal e-mail addresses you use frequently. However, Contacts offers more advanced features for this function. Personal Address Book files have a .pab extension and can be copied to disk.)';
			sTemp=L_IDH_redefPersonalAddressBook_TEXT;
			break;
		case 'IDH_redefPersonalDistributionList':
			L_IDH_redefPersonalDistributionList_TEXT='(personal distribution list: A collection of e-mail addresses that you create and add to your Outlook Address Book as one e-mail alias. When you send a message to a distribution list, it goes to each e-mail address in the list.)';
			sTemp=L_IDH_redefPersonalDistributionList_TEXT;
			break;
		case 'IDH_redefPi':
			L_IDH_redefPi_TEXT='(pi: A mathematical constant equal to approximately 3.1415926535897932.)';
			sTemp=L_IDH_redefPi_TEXT;
			break;
		case 'IDH_redefPlaceholder':
			L_IDH_redefPlaceholder_TEXT='(placeholder: A character that masks or hides another character for security reasons. For example, when a user types a password, an asterisk is displayed on the screen to take the place of each character typed.)';
			sTemp=L_IDH_redefPlaceholder_TEXT;
			break;
		case 'IDH_redefPost':
			L_IDH_redefPost_TEXT='(post: Information that you send to a folder instead of to a person. Typically, you post information to a public folder to participate in online discussions.)';
			sTemp=L_IDH_redefPost_TEXT;
			break;
		case 'IDH_redefPostOfficeProtocolVersion3POP3':
			L_IDH_redefPostOfficeProtocolVersion3POP3_TEXT='(POP3: A common protocol that is used to retrieve e-mail messages from an Internet e-mail server.)';
			sTemp=L_IDH_redefPostOfficeProtocolVersion3POP3_TEXT;
			break;
		case 'IDH_redefPreviewPane':
			L_IDH_redefPreviewPane_TEXT='(preview pane: The area at the lower right of the Inbox where you can view the contents of the selected item without opening the item, if you have preview pane turned on.)';
			sTemp=L_IDH_redefPreviewPane_TEXT;
			break;
		case 'IDH_redefPrintStyle':
			L_IDH_redefPrintStyle_TEXT='(print style: A combination of paper and page settings that determines the way items print. Outlook provides built-in print styles, and you can create your own.)';
			sTemp=L_IDH_redefPrintStyle_TEXT;
			break;
		case 'IDH_redefPrivate':
			L_IDH_redefPrivate_TEXT='(private: Other people cannot see an item marked private, even if they have permission to access your folders.)';
			sTemp=L_IDH_redefPrivate_TEXT;
			break;
		case 'IDH_redefPropertyPage':
			L_IDH_redefPropertyPage_TEXT='(property page: A grouping of properties presented as a tabbed page of a property sheet.)';
			sTemp=L_IDH_redefPropertyPage_TEXT;
			break;
		case 'IDH_redefRecurring':
			L_IDH_redefRecurring_TEXT='(recurring: Items that occur repeatedly. For example, an appointment or task that occurs on a regular basis, such as a weekly status meeting or a monthly haircut, can be designated as recurring.)';
			sTemp=L_IDH_redefRecurring_TEXT;
			break;
		case 'IDH_redefReminders':
			L_IDH_redefReminders_TEXT='(reminder: A message that appears at a specified interval before an appointment, meeting, or task that announces when the activity is set to occur. Reminders appear any time Outlook is running, even if it isn\'t your active program.)';
			sTemp=L_IDH_redefReminders_TEXT;
			break;
		case 'IDH_redefResource':
			L_IDH_redefResource_TEXT='(resource: A room, computer, or any equipment needed at a meeting. You can look up a resource\'s availability, compare its schedule to yours, and block out time in its Calendar. You invite resources to your meetings the same way that you invite people.)';
			sTemp=L_IDH_redefResource_TEXT;
			break;
		case 'IDH_redefRule':
			L_IDH_redefRule_TEXT='(rule: One or more automatic actions taken on e-mail messages and meeting requests that meet certain conditions, along with any exceptions to those conditions. Rules are also referred to as filters.)';
			sTemp=L_IDH_redefRule_TEXT;
			break;
		case 'IDH_redefRuntimeError':
			L_IDH_redefRuntimeError_TEXT='(run-time error: An error that displays as #ERROR in a field. A run-time error results when a function attempts an operation that is not valid.)';
			sTemp=L_IDH_redefRuntimeError_TEXT;
			break;
		case 'IDH_redefSecurePasswordAuthentication':
			L_IDH_redefSecurePasswordAuthentication_TEXT='(Secure Password Authentication (SPA): A feature that allows a server to confirm the identity of the person logging on.)';
			sTemp=L_IDH_redefSecurePasswordAuthentication_TEXT;
			break;
		case 'IDH_redefSeed':
			L_IDH_redefSeed_TEXT='(seed: An initial value that is used to generate pseudorandom numbers.)';
			sTemp=L_IDH_redefSeed_TEXT;
			break;
		case 'IDH_redefServerScripts':
			L_IDH_redefServerScripts_TEXT='(server scripts: Statements embedded in an .asp file (Active Server Page). Scripts are executed by the Microsoft Internet Information Server (IIS) when a page is requested by the browser but before the content is sent to the browser.)';
			sTemp=L_IDH_redefServerScripts_TEXT;
			break;
		case 'IDH_redefSession':
			L_IDH_redefSession_TEXT='(session: A period of time during which a client uses the messaging system.)';
			sTemp=L_IDH_redefSession_TEXT;
			break;
		case 'IDH_redefShortcut':
			L_IDH_redefShortcut_TEXT='(shortcut: An icon and associated name in the Shortcuts pane in the Navigation Pane on the left side of the main Outlook window that offers quick access to a folder. You can create your own shortcuts and remove existing ones in each group.)';
			sTemp=L_IDH_redefShortcut_TEXT;
			break;
		case 'IDH_redefShortcutBar':
			L_IDH_redefShortcutBar_TEXT='(Outlook Bar: The column on the left side of the Outlook window that includes groups such as Other or Other Shortcuts and the shortcuts within each group. Click a group to show the shortcuts in the group. Click a shortcut to quickly access folders.)';
			sTemp=L_IDH_redefShortcutBar_TEXT;
			break;
		case 'IDH_redefSimpleMailTransferProtocolSMTP':
			L_IDH_redefSimpleMailTransferProtocolSMTP_TEXT='(Simple Mail Transfer Protocol (SMTP): A common protocol that is used to send e-mail messages across the Internet.)';
			sTemp=L_IDH_redefSimpleMailTransferProtocolSMTP_TEXT;
			break;
		case 'IDH_redefsRecurrence':
			L_IDH_redefsRecurrence_TEXT='(recurrence: Repeats an appointment or task at the interval that you specify.)';
			sTemp=L_IDH_redefsRecurrence_TEXT;
			break;
		case 'IDH_redefSubmitted':
			L_IDH_redefSubmitted_TEXT='(submitted: When a message is submitted, the store provider places the message in its outgoing queue, where it gets picked up by the spooler and handed to one or more transport providers for delivery.)';
			sTemp=L_IDH_redefSubmitted_TEXT;
			break;
		case 'IDH_redefTable':
			L_IDH_redefTable_TEXT='(table: A view type that displays a list of items (rows) and their attributes (columns). Use this view to display details about items. Table is the default view type for Inbox and Tasks.)';
			sTemp=L_IDH_redefTable_TEXT;
			break;
		case 'IDH_redefTarget':
			L_IDH_redefTarget_TEXT='(target: An object onto which the user drops the object being dragged.)';
			sTemp=L_IDH_redefTarget_TEXT;
			break;
		case 'IDH_redefTask':
			L_IDH_redefTask_TEXT='(task: A personal or work-related duty or errand that you want to track through completion.)';
			sTemp=L_IDH_redefTask_TEXT;
			break;
		case 'IDH_redefTaskList':
			L_IDH_redefTaskList_TEXT='(task list: A list of tasks that appears in the Tasks folder and in the TaskPad in Calendar.)';
			sTemp=L_IDH_redefTaskList_TEXT;
			break;
		case 'IDH_redefTaskPad':
			L_IDH_redefTaskPad_TEXT='(TaskPad: The list of tasks in Calendar.)';
			sTemp=L_IDH_redefTaskPad_TEXT;
			break;
		case 'IDH_redefTaskRequest':
			L_IDH_redefTaskRequest_TEXT='(task request: A request sent in an e-mail message asking the recipient to complete a task. If the recipient accepts the task, it is added to the recipient\'s task list, and the recipient becomes the new owner of the task.)';
			sTemp=L_IDH_redefTaskRequest_TEXT;
			break;
		case 'IDH_redefTenative':
			L_IDH_redefTenative_TEXT='(tentative: Blocks of time that are marked tentative appear with a striped availability indicator and are shown as available when other people view your Calendar.)';
			sTemp=L_IDH_redefTenative_TEXT;
			break;
		case 'IDH_redefTimeline':
			L_IDH_redefTimeline_TEXT='(timeline: A view type that displays items from left to right on a time scale. Use this view to display items in relation to time. Timeline is the default view type for Journal.)';
			sTemp=L_IDH_redefTimeline_TEXT;
			break;
		case 'IDH_redefUnbound':
			L_IDH_redefUnbound_TEXT='(unbound: A control that is not related to a field.)';
			sTemp=L_IDH_redefUnbound_TEXT;
			break;
		case 'IDH_redefUpdateList':
			L_IDH_redefUpdateList_TEXT='(update list: A list that includes the name of the person who originally sent a task request plus the names of everyone who received the task request, reassigned the task to someone else, or chose to keep an updated copy of the task in their task list.)';
			sTemp=L_IDH_redefUpdateList_TEXT;
			break;
		case 'IDH_redefVarientExpression':
			L_IDH_redefVarientExpression_TEXT='(variant expression: Any expression that can evaluate to numeric, string, or date data, as well as the special values Empty and Null.)';
			sTemp=L_IDH_redefVarientExpression_TEXT;
			break;
		case 'IDH_redefViews':
			L_IDH_redefViews_TEXT='(view: Views give you different ways to look at the same information in a folder by putting it in different arrangements and formats. There are standard views for each folder. You can also create custom views.)';
			sTemp=L_IDH_redefViews_TEXT;
			break;
		case 'IDH_redefViewType':
			L_IDH_redefViewType_TEXT='(view type: The basic structure of a view. When you create a view, you must first select one of five view types (table, timeline, day/week/month, card, or icon) to determine how information will be arranged and formatted in your new view.)';
			sTemp=L_IDH_redefViewType_TEXT;
			break;
		case 'IDH_redefWeekNumber':
			L_IDH_redefWeekNumber_TEXT='(week number: The weeks of the year are assigned a number from 1 to 52, called week numbers. When you turn on week numbers, they appear on the left side of the Date Navigator in Calendar.)';
			sTemp=L_IDH_redefWeekNumber_TEXT;
			break;
		case 'IDH_redefZorder':
			L_IDH_redefZorder_TEXT='(z-order: The visual layering of controls on a form along the z-axis (depth). The z-order determines which controls are in front of other controls.)';
			sTemp=L_IDH_redefZorder_TEXT;
			break;
		case 'olalternatecalendar':
			L_olalternatecalendar_TEXT='(alternate calendar: The calendar selected from within Outlook.)';
			sTemp=L_olalternatecalendar_TEXT;
			break;
		case 'olarrangement':
			L_olarrangement_TEXT='(arrangement: A predefined combination of grouped and sorted messages in table view.)';
			sTemp=L_olarrangement_TEXT;
			break;
		case 'olauthentication':
			L_olauthentication_TEXT='(authentication: The process for verifying that people are who they claim to be. For example, confirming the source and integrity of a sender\'s digital signature by verifying it with the issuing certificate authority (CA).)';
			sTemp=L_olauthentication_TEXT;
			break;
		case 'OlAvailabilityIndicator':
			L_OlAvailabilityIndicator_TEXT='(availability indicator: Appears to the left of a meeting or appointment (or all the way around the item when selected), indicating time status as free, tentative, busy, out of office, or no information available. Visible only in Day and Work Week view.)';
			sTemp=L_OlAvailabilityIndicator_TEXT;
			break;
		case 'OlBcc':
			L_OlBcc_TEXT='(Bcc: An abbreviation for blind carbon copy. If you add a recipient\'s name to this box in a message, a copy of the message is sent to that recipient, and the recipient\'s name is not visible to other recipients of the message.)';
			sTemp=L_OlBcc_TEXT;
			break;
		case 'olcer':
			L_olcer_TEXT='(.cer file: A file that contains a certificate with a public key but no private key. Import the .cer files into Contacts by clicking Import in the Certificates tab, and then use the certificate to send encrypted messages.)';
			sTemp=L_olcer_TEXT;
			break;
		case 'OlCertificate':
			L_OlCertificate_TEXT='(certificate: A digital means of proving your identity. When you send a digitally signed message you are sending your certificate and public key. Certificates are issued by a certification authority, and like a driver\'s license, can expire or be revoked.)';
			sTemp=L_OlCertificate_TEXT;
			break;
		case 'olcertificateauthority':
			L_olcertificateauthority_TEXT='(certificate authority (CA): An entity, similar to a notary public, that issues digital certificates, keeps track of who is assigned to a certificate, signs certificates to verify their validity, and tracks which certificates are revoked or expired.)';
			sTemp=L_olcertificateauthority_TEXT;
			break;
		case 'olcertificaterevocationchecking':
			L_olcertificaterevocationchecking_TEXT='(certificate revocation checking: A way to see if a certificate used to sign a message is valid. Outlook can check the status of the certificate from the issuing certification authority\'s database. Also known as the certificate revocation list (CRL).)';
			sTemp=L_olcertificaterevocationchecking_TEXT;
			break;
		case 'olcertificationhierarchy':
			L_olcertificationhierarchy_TEXT='(certification hierarchy: A structure whereby one certificate authority verifies another certification authority\'s certificates by digitally signing them. This establishes a \"chain of trust\" that increases confidence that a certificate is authentic.)';
			sTemp=L_olcertificationhierarchy_TEXT;
			break;
		case 'olconferenceresource':
			L_olconferenceresource_TEXT='(conference resource: A Microsoft Exchange mailbox that allocates a specific number of connections. The resource serves as a virtual room for your online meeting. You invite the resource to an online meeting just as you would reserve a room for a meeting.)';
			sTemp=L_olconferenceresource_TEXT;
			break;
		case 'OlContact':
			L_OlContact_TEXT='(contact: Person, inside or outside of your organization, about whom you can save several types of information, such as street and e-mail addresses, telephone and fax numbers, and Web page URLs.)';
			sTemp=L_OlContact_TEXT;
			break;
		case 'OlContactIndex':
			L_OlContactIndex_TEXT='(Contact Index: Set of buttons used to move through contact items displayed in Address Cards or Detailed Address Cards view. The Contact Index moves the focus to the first contact whose name begins with the selected character.)';
			sTemp=L_OlContactIndex_TEXT;
			break;
		case 'olcookie':
			L_olcookie_TEXT='(cookie: A block of data placed by a server on a client computer that identifies the client for future connections.)';
			sTemp=L_olcookie_TEXT;
			break;
		case 'oldecrypt':
			L_oldecrypt_TEXT='(decrypt: The process of converting cipher (scrambled) text back into plain, readable text. Recipients decrypt (unlocks) the e-mail messages sent to them using their private key.)';
			sTemp=L_oldecrypt_TEXT;
			break;
		case 'OlDefaultDataFile':
			L_OlDefaultDataFile_TEXT='(default data file: The Personal Folders file (.pst) data file that is used as the main delivery location for your e-mail messages.)';
			sTemp=L_OlDefaultDataFile_TEXT;
			break;
		case 'oldes':
			L_oldes_TEXT='(3DES: An encryption algorithm based on the Data Encryption Standard (DES). Triple DES (3DES) repeats DES three times. Consequently, 3DES runs slower than standard DES. However, it is more secure.)';
			sTemp=L_oldes_TEXT;
			break;
		case 'OlDigitalId':
			L_OlDigitalId_TEXT='(digital ID: Contains a private key that stays on the sender\'s computer and a certificate (with a public key). The certificate is sent with digitally signed messages. Recipients save the certificate and use the public key to encrypt messages to the sender.)';
			sTemp=L_OlDigitalId_TEXT;
			break;
		case 'oldigitalsignature':
			L_oldigitalsignature_TEXT='(digital signature: An application of an algorithm to the message data used to prove to the recipient that the message is from the sender (not an imposter) and that the message has not been altered. Includes the sender\'s certificate (with the public key).)';
			sTemp=L_oldigitalsignature_TEXT;
			break;
		case 'OlEmailAccount':
			L_OlEmailAccount_TEXT='(e-mail account: The server name, user name, password, and e-mail address used by Outlook to connect to an e-mail service. You create the e-mail account in Outlook by using information provided by your administrator or Internet service provider (ISP).)';
			sTemp=L_OlEmailAccount_TEXT;
			break;
		case 'olencrypt':
			L_olencrypt_TEXT='(encrypt: The process of converting plain, readable text into cipher (scrambled) text. The sender uses the recipient\'s public key to encrypt (lock) the e-mail message and attachments.)';
			sTemp=L_olencrypt_TEXT;
			break;
		case 'OlEncryption':
			L_OlEncryption_TEXT='(encryption: The process of encoding data to prevent unauthorized access. An encrypted message is unreadable to all but the recipient, who has a public key that will decrypt it because the key matches the private key that the sender used to encrypt it.)';
			sTemp=L_OlEncryption_TEXT;
			break;
		case 'olepf':
			L_olepf_TEXT='(.epf file: A file type that Outlook uses to import or export a digital ID (certificate and private keys) obtained from the Microsoft Exchange Key Management Server.)';
			sTemp=L_olepf_TEXT;
			break;
		case 'oleventaddress':
			L_oleventaddress_TEXT='(event address: An address similar to a URL that provides network access to a Microsoft Windows Media Services event, such as a live broadcast. Attendees go to this address to view the event from their computers.)';
			sTemp=L_oleventaddress_TEXT;
			break;
		case 'olhacker':
			L_olhacker_TEXT='(hacker: A term commonly used to refer to someone who illegally gains access to a computer system or network with the intent of causing damage.)';
			sTemp=L_olhacker_TEXT;
			break;
		case 'OlHttp':
			L_OlHttp_TEXT='(HTTP (Hypertext Transfer Protocol): Protocol that is used when you access Web pages from the Internet. Outlook uses HTTP as an e-mail protocol.)';
			sTemp=L_OlHttp_TEXT;
			break;
		case 'OlImap':
			L_OlImap_TEXT='(IMAP (Internet Message Access Protocol): Unlike Internet e-mail protocols such as POP3, IMAP creates folders on a server to store/organize messages for retrieval by other computers. You can read message headers only and select which messages to download.)';
			sTemp=L_OlImap_TEXT;
			break;
		case 'OlInfobar':
			L_OlInfobar_TEXT='(InfoBar: Banner near the top of an open e-mail message, appointment, contact, or task. Tells you if a message has been replied to or forwarded, along with the online status of a contact who is using Instant Messaging, and so on.)';
			sTemp=L_OlInfobar_TEXT;
			break;
		case 'olinvalid':
			L_olinvalid_TEXT='(invalid: Refers to a certificate with a status that Outlook has checked against a certificate authority\'s database and found to not be legitimate or not current. The certificate might also be expired or revoked.)';
			sTemp=L_olinvalid_TEXT;
			break;
		case 'oljunksenderslist':
			L_oljunksenderslist_TEXT='(Blocked Senders List: A list of domain names and e-mail addresses that you want to be blocked. E-mail addresses and domain names on this list are always treated as junk e-mail or spam.)';
			sTemp=L_oljunksenderslist_TEXT;
			break;
		case 'olkerberosprotocol':
			L_olkerberosprotocol_TEXT='(Kerberos protocol: A network security protocol that uses cryptography to provide a mutual authentication between a client and a server or between one server and another before a network connection is opened between them.)';
			sTemp=L_olkerberosprotocol_TEXT;
			break;
		case 'olnavigationpane':
			L_olnavigationpane_TEXT='(Navigation Pane: The column on the left side of the Outlook window that includes panes such as Shortcuts or Mail and the shortcuts or folders within each pane. Click a folder to show the items in the folder.)';
			sTemp=L_olnavigationpane_TEXT;
			break;
		case 'olnonrepudiation':
			L_olnonrepudiation_TEXT='(nonrepudiation: The inability of senders to deny responsibility for their e-mail message, and the inability of recipients to claim they never got the message. Both digital signatures and S/MIME receipts assist in nonrepudiation.)';
			sTemp=L_olnonrepudiation_TEXT;
			break;
		case 'OlOutlookUserProfile':
			L_OlOutlookUserProfile_TEXT='(Outlook user profile: A group of e-mail accounts and address books. Typically, a user needs only one but can create any number, each with a set of e-mail accounts and address books. Multiple profiles are useful if more than one person uses the computer.)';
			sTemp=L_OlOutlookUserProfile_TEXT;
			break;
		case 'OlOwnerPermission':
			L_OlOwnerPermission_TEXT='(Owner permission: With Owner permission you can create, read, modify, and delete all items and files and create subfolders. As folder owner, you can change the permission level that others have for the folder. This permission does not apply to delegates.)';
			sTemp=L_OlOwnerPermission_TEXT;
			break;
		case 'OlPersonalFoldersFile':
			L_OlPersonalFoldersFile_TEXT='(Personal Folders file (.pst): Data file that stores your messages and other items on your computer. You can assign a .pst file to be the default delivery location for e-mail messages. You can use a .pst to organize and back up items for safekeeping.)';
			sTemp=L_OlPersonalFoldersFile_TEXT;
			break;
		case 'olpfx':
			L_olpfx_TEXT='(.pfx file: A Personal Exchange File type that Outlook uses to import or export a digital ID (certificate and private keys) used in S\\MIME security.)';
			sTemp=L_olpfx_TEXT;
			break;
		case 'OlPrimaryCalendar':
			L_OlPrimaryCalendar_TEXT='(primary calendar: The calendar that is selected in the regional options in Control Panel or the system calendar.)';
			sTemp=L_OlPrimaryCalendar_TEXT;
			break;
		case 'olprivatekey':
			L_olprivatekey_TEXT='(private key: The secret key kept on the sender\'s computer that the sender uses to digitally sign messages to recipients and to decrypt (unlock) messages from recipients. Private keys should be password protected.)';
			sTemp=L_olprivatekey_TEXT;
			break;
		case 'olpublickey':
			L_olpublickey_TEXT='(public key: The key a sender gives to a recipient so that the recipient can verify the sender\'s signature and confirm that the message was not altered. Recipients also use the public key to encrypt (lock) e-mail messages to the sender.)';
			sTemp=L_olpublickey_TEXT;
			break;
		case 'olremoteprocedurecallrpc':
			L_olremoteprocedurecallrpc_TEXT='(remote procedure call (RPC): In programming, a request by one program to a second program on a remote system. The second program generally performs a task and returns the results of that task to the first program.)';
			sTemp=L_olremoteprocedurecallrpc_TEXT;
			break;
		case 'olrootauthority':
			L_olrootauthority_TEXT='(root authority: The certification authority (CA) at the top of a certification hierarchy (known as a \"chain of trust\") with several other certificate authorities; each verifying the authenticity of the next CA. The root CA has a self-signed certificate.)';
			sTemp=L_olrootauthority_TEXT;
			break;
		case 'olsearchfolders':
			L_olsearchfolders_TEXT='(Search Folders: Virtual folders that contain views of all e-mail items matching specific search criteria. The items remain stored in one or more Outlook folders.)';
			sTemp=L_olsearchfolders_TEXT;
			break;
		case 'OlSecondaryCalendar':
			L_OlSecondaryCalendar_TEXT='(secondary calendar: The alternate calendar that is selected from within Outlook. The secondary calendar appears when dual calendar support is enabled.)';
			sTemp=L_OlSecondaryCalendar_TEXT;
			break;
		case 'olsecuritylabel':
			L_olsecuritylabel_TEXT='(security label: A secure e-mail feature that lets you add sensitivity labels, such as Internal Use Only, to the message header. Security labels in your organization are controlled by security policies set up by your e-mail administrator.)';
			sTemp=L_olsecuritylabel_TEXT;
			break;
		case 'OlSendReceiveGroup':
			L_OlSendReceiveGroup_TEXT='(Send Receive group: E-mail accounts and folders that you can group and set common options for, such as download headers or messages, size limits on downloaded messages, behavior online vs. offline, and time interval for connecting to server.)';
			sTemp=L_OlSendReceiveGroup_TEXT;
			break;
		case 'OlShortcutGroup':
			L_OlShortcutGroup_TEXT='(shortcut group: One of the groups of shortcuts to folders that can be displayed in the Shortcuts pane.)';
			sTemp=L_OlShortcutGroup_TEXT;
			break;
		case 'olshortcutspane':
			L_olshortcutspane_TEXT='(Shortcuts pane: The area in the Navigation Pane that contains shortcuts and shortcut groups. It can be accessed by using the Shortcuts button at the bottom of the Navigation Pane. Click a group in the Shortcuts pane to show the shortcuts in the group.)';
			sTemp=L_olshortcutspane_TEXT;
			break;
		case 'olsmime':
			L_olsmime_TEXT='(S/MIME: Secure Multipurpose Internet Mail Extensions (S/MIME) is a specification for secure e-mail messages that uses the X.509 format for digital certificates and uses various encryption algorithms such as 3DES.)';
			sTemp=L_olsmime_TEXT;
			break;
		case 'olsmimereceipt':
			L_olsmimereceipt_TEXT='(S/MIME receipt: An e-mail security feature used to request confirmation that a message was received unaltered and information about who opened the message and when it was opened. This verification information is returned as a message to your Inbox.)';
			sTemp=L_olsmimereceipt_TEXT;
			break;
		case 'OlTemplate':
			L_OlTemplate_TEXT='(template: A special kind of document that can be used as a master document. Outlook templates have the file name extension of .oft.)';
			sTemp=L_OlTemplate_TEXT;
			break;
		case 'oltoken':
			L_oltoken_TEXT='(token: A special random text string issued to Outlook by the Microsoft Exchange server to facilitate enrollment in Key Management Service (KMS). Outlook then uses the token to send a secure response to the Exchange server to complete KMS enrollment.)';
			sTemp=L_oltoken_TEXT;
			break;
		case 'oltrust':
			L_oltrust_TEXT='(trust: Indicates whether you trust the individual or group to whom the certificate is issued. The default setting is Inherit Trust from Issuer, which means that the certificate is trusted because the issuer, usually a certificate authority, is trusted.)';
			sTemp=L_oltrust_TEXT;
			break;
		case 'oltrustedrecipientslist':
			L_oltrustedrecipientslist_TEXT='(Safe Recipients List: A list of mailing lists or other subscription domain names and e-mail addresses that you belong to and want to receive messages from. Messages sent to these addresses will not be treated as junk e-mail.)';
			sTemp=L_oltrustedrecipientslist_TEXT;
			break;
		case 'oltrustedsenderslist':
			L_oltrustedsenderslist_TEXT='(Safe Senders List: A list of domain names and e-mail addresses that you want to receive messages from. E-mail addresses in Contacts and in the Global Address Book are included in this list by default.)';
			sTemp=L_oltrustedsenderslist_TEXT;
			break;
		case 'olvalid':
			L_olvalid_TEXT='(valid: Refers to a certificate with a status that Outlook has checked against a certificate authority\'s database and found to be legitimate and current. The certificate is not expired or revoked.)';
			sTemp=L_olvalid_TEXT;
			break;
		case 'olvirtualprivatenetworkvpn':
			L_olvirtualprivatenetworkvpn_TEXT='(virtual private network (VPN): Extension of a private network encompassing encapsulated, encrypted, and authenticated links across shared or public networks. VPN connections provide remote access and connections to private networks over the Internet.)';
			sTemp=L_olvirtualprivatenetworkvpn_TEXT;
			break;
		case 'OlWebProtocolToConnect':
			L_OlWebProtocolToConnect_TEXT='(Web protocol to connect: To see if you are using this, on the Tools menu, click E-mail Accounts, click View or change existing e-mail accounts, and then click Next. In the list, it will say Web protocol next to Microsoft Exchange Server if you are.)';
			sTemp=L_OlWebProtocolToConnect_TEXT;
			break;
		case 'reBanner':
			L_reBanner_TEXT='(banner: Event or holiday name that appears at the top of the dates you specify in Calendar. A banner can span multiple days. Items in banners are marked as free time and are represented by the color white when you view your Calendar.)';
			sTemp=L_reBanner_TEXT;
			break;
		case 'reBusy':
			L_reBusy_TEXT='(busy: Blocks of time that are marked busy appear with a solid availability indicator and are shown as unavailable when other people view your Calendar.)';
			sTemp=L_reBusy_TEXT;
			break;
		case 'rehowPage':
			L_rehowPage_TEXT='(page: Another term for tab. The term page is used instead of tab in the Outlook Form design interface. For example, a form based on an e-mail message has a Message page.)';
			sTemp=L_rehowPage_TEXT;
			break;
		case 'rehowValidationFormula':
			L_rehowValidationFormula_TEXT='(validation formula: Checks the data in a field as it is entered. It sets limits or conditions on what can be entered.)';
			sTemp=L_rehowValidationFormula_TEXT;
			break;
		case 'rerefMeetingSelectionBars':
			L_rerefMeetingSelectionBars_TEXT='(meeting selection bars: The vertical bars that you drag to select a meeting time.)';
			sTemp=L_rerefMeetingSelectionBars_TEXT;
			break;
		case 'rnconDatepicker':
			L_rnconDatepicker_TEXT='(Date Navigator: The small calendar that displays the current month in Calendar. It provides a quick and easy way to move appointments and to view other dates.)';
			sTemp=L_rnconDatepicker_TEXT;
			break;

		// PowerPoint

		case 'IDH_ppdefAnimate':
			L_IDH_ppdefAnimate_TEXT='(animate: To add a special visual or sound effect to text or an object. For example, you can have your text bullet points fly in from the left, one word at a time, or hear the sound of applause when a picture is uncovered.)';
			sTemp=L_IDH_ppdefAnimate_TEXT;
			break;
		case 'IDH_ppdefBroadcast':
			L_IDH_ppdefBroadcast_TEXT='(presentation broadcast: A feature that allows you to run a presentation over the Web. The presentation is saved in HTML format and can contain audio and video. It can also be recorded and saved to be viewed later.)';
			sTemp=L_IDH_ppdefBroadcast_TEXT;
			break;
		case 'IDH_ppdefCustomShow':
			L_IDH_ppdefCustomShow_TEXT='(custom show: A presentation within a presentation in which you group slides in an existing presentation so that you can show that section of the presentation to a particular audience.)';
			sTemp=L_IDH_ppdefCustomShow_TEXT;
			break;
		case 'IDH_ppdefLobbyPage':
			L_IDH_ppdefLobbyPage_TEXT='(lobby page: A page of information about the broadcast that is displayed in the viewer\'s browser before the broadcast begins. It can contain a title, subject, host\'s name, information about the broadcast, and a countdown to the time of the broadcast.)';
			sTemp=L_IDH_ppdefLobbyPage_TEXT;
			break;
		case 'PPAnimationScheme':
			L_PPAnimationScheme_TEXT='(animation scheme: Adds preset visual effects to text on slides. Ranging from subtle to exciting, each scheme usually includes an effect for the slide title and an effect that is applied to bullets or paragraphs on a slide.)';
			sTemp=L_PPAnimationScheme_TEXT;
			break;
		case 'PPAntiAliasing':
			L_PPAntiAliasing_TEXT='(anti-aliasing: The smoothing of jagged edges in graphical elements and text. Anti-aliasing softens the roughness of jagged lines or curves by shading neighboring pixels.)';
			sTemp=L_PPAntiAliasing_TEXT;
			break;
		case 'PPChangeMarker':
			L_PPChangeMarker_TEXT='(change marker: An icon that designates a change made by a reviewer to a presentation.)';
			sTemp=L_PPChangeMarker_TEXT;
			break;
		case 'PPChartEffectOptions':
			L_PPChartEffectOptions_TEXT='(chart effect options: Animation enhancements that let you apply effects to a chart by series, category, or element in a series or category.)';
			sTemp=L_PPChartEffectOptions_TEXT;
			break;
		case 'PPCustomAnimationList':
			L_PPCustomAnimationList_TEXT='(Custom Animation list: The list of animation sequences for a slide. Items are listed in the order in which they are added, and include icons that indicate timing in relation to other animation events.)';
			sTemp=L_PPCustomAnimationList_TEXT;
			break;
		case 'ppdefActionButton':
			L_ppdefActionButton_TEXT='(action button: A ready-made button that you can insert into your presentation and define hyperlinks for.)';
			sTemp=L_ppdefActionButton_TEXT;
			break;
		case 'ppdefAutoLayout':
			L_ppdefAutoLayout_TEXT='(AutoLayout: An action that automatically adjusts the layout if you insert items that don\'t fit the original layout. You can undo it using the Automatic Layout Options button.)';
			sTemp=L_ppdefAutoLayout_TEXT;
			break;
		case 'ppdefAutoshape':
			L_ppdefAutoshape_TEXT='(AutoShapes: A group of ready-made shapes that includes such basic shapes as rectangles and circles, plus a variety of lines and connectors, block arrows, flowchart symbols, stars and banners, and callouts.)';
			sTemp=L_ppdefAutoshape_TEXT;
			break;
		case 'ppdefBackgroundColor':
			L_ppdefBackgroundColor_TEXT='(background color: The underlying color of a slide.)';
			sTemp=L_ppdefBackgroundColor_TEXT;
			break;
		case 'ppdefBackgroundGraphics':
			L_ppdefBackgroundGraphics_TEXT='(background graphics: Any graphics on a slide, including drawing objects, patterns in a background fill, and pictures.)';
			sTemp=L_ppdefBackgroundGraphics_TEXT;
			break;
		case 'ppdefBorder':
			L_ppdefBorder_TEXT='(border: The visible line around the edge of an object. For example, the four lines of a rectangle that comprise its border.)';
			sTemp=L_ppdefBorder_TEXT;
			break;
		case 'ppdefBoundingBox':
			L_ppdefBoundingBox_TEXT='(bounding box: The smallest rectangle that can enclose the text in a text frame. Knowing the position and dimensions of text bounding boxes allows you to overlap shapes on a slide without covering up any text.)';
			sTemp=L_ppdefBoundingBox_TEXT;
			break;
		case 'ppdefColorScheme':
			L_ppdefColorScheme_TEXT='(color scheme: A set of eight balanced colors that you can apply to slides, notes pages, or audience handouts. A color scheme consists of a background color, a color for lines and text, and six other colors selected to make slides easy to read.)';
			sTemp=L_ppdefColorScheme_TEXT;
			break;
		case 'ppdefContentTemplate':
			L_ppdefContentTemplate_TEXT='(content template: A design template that also contains text suggestions on each slide. You replace the text suggestions with the text that you want. A content template contains a slide master and an optional title master.)';
			sTemp=L_ppdefContentTemplate_TEXT;
			break;
		case 'ppdefDatasheet':
			L_ppdefDatasheet_TEXT='(datasheet: A table included with a chart that provides sample information showing where to type your own row and column labels and data.)';
			sTemp=L_ppdefDatasheet_TEXT;
			break;
		case 'ppdefDefaultShape':
			L_ppdefDefaultShape_TEXT='(default shape: A virtual shape that contains default formatting properties for new shapes. Each presentation contains one default shape.)';
			sTemp=L_ppdefDefaultShape_TEXT;
			break;
		case 'ppdefExtraColors':
			L_ppdefExtraColors_TEXT='(extra colors: Non-scheme colors that are used for special purposes. They appear in color palettes displayed by dialog box controls and toolbar buttons. Color scheme changes do not affect available extra colors or objects formatted with extra colors.)';
			sTemp=L_ppdefExtraColors_TEXT;
			break;
		case 'ppdefFreeform':
			L_ppdefFreeform_TEXT='(freeform: Any shape that you draw by using the Curve, Freeform, and Scribble tools. Freeform shapes can include straight lines and freehand curves. They can be drawn opened or closed and can be edited by using the drawing tools.)';
			sTemp=L_ppdefFreeform_TEXT;
			break;
		case 'ppdefGrid':
			L_ppdefGrid_TEXT='(grid: A set of intersecting lines used to align objects.)';
			sTemp=L_ppdefGrid_TEXT;
			break;
		case 'ppdefGuides':
			L_ppdefGuides_TEXT='(guides: Nonprinting straight lines, both horizontal and vertical, used to visually align objects.)';
			sTemp=L_ppdefGuides_TEXT;
			break;
		case 'ppdefHighContrast':
			L_ppdefHighContrast_TEXT='(high contrast: An accessibility setting that changes the appearance of displayed items on your screen by enlarging windows, toolbar buttons, and fonts, and displaying them in black and white.)';
			sTemp=L_ppdefHighContrast_TEXT;
			break;
		case 'ppdefInteractiveEffect':
			L_ppdefInteractiveEffect_TEXT='(animation trigger: An animation option that can be set so that the animation plays when a specified item is clicked.)';
			sTemp=L_ppdefInteractiveEffect_TEXT;
			break;
		case 'ppdefLayout':
			L_ppdefLayout_TEXT='(layout: The arrangement of elements, such as title and subtitle text, lists, pictures, tables, charts, AutoShapes, and movies, on a chart.)';
			sTemp=L_ppdefLayout_TEXT;
			break;
		case 'ppdefMaster':
			L_ppdefMaster_TEXT='(master: A slide view or page on which you define formatting for all slides or pages in your presentation. Each presentation has a master for each key component: slides, title slides, speaker\'s notes, and audience handouts.)';
			sTemp=L_ppdefMaster_TEXT;
			break;
		case 'ppdefMasterText':
			L_ppdefMasterText_TEXT='(master text: The slide text on the slide master. The master text determines the format of text on all slides as well as the shape of text placeholders and their placement on slides.)';
			sTemp=L_ppdefMasterText_TEXT;
			break;
		case 'ppdefNotesDatabase':
			L_ppdefNotesDatabase_TEXT='(Notes database: A collection of documents and their forms, views, and folders that is saved under one name.)';
			sTemp=L_ppdefNotesDatabase_TEXT;
			break;
		case 'ppdefNotesDocument':
			L_ppdefNotesDocument_TEXT='(Notes document: A document that consists of fields, text, numbers, graphics, and so on. Information may be entered by a user, imported from other applications, or linked to another application and dynamically updated.)';
			sTemp=L_ppdefNotesDocument_TEXT;
			break;
		case 'ppdefNotesForm':
			L_ppdefNotesForm_TEXT='(Notes form: A form that can contain fields, static text, graphics, and special objects, and that controls how you edit, display, and print documents.)';
			sTemp=L_ppdefNotesForm_TEXT;
			break;
		case 'ppdefNotesPages':
			L_ppdefNotesPages_TEXT='(notes pages: Printed pages that display author notes beneath the slide that the notes accompany.)';
			sTemp=L_ppdefNotesPages_TEXT;
			break;
		case 'ppdefNotesPane':
			L_ppdefNotesPane_TEXT='(notes pane: The pane in normal view in which you type notes that you want to accompany a slide. You print these notes as notes pages or have them display when you save a presentation as a Web page.)';
			sTemp=L_ppdefNotesPane_TEXT;
			break;
		case 'ppdefParagraph':
			L_ppdefParagraph_TEXT='(paragraph: Text that has a carriage return (hard return) at the end of it, such as when you press ENTER. Each item in a bulleted or numbered list is a paragraph; a title or subtitle is also a paragraph.)';
			sTemp=L_ppdefParagraph_TEXT;
			break;
		case 'ppdefPicture':
			L_ppdefPicture_TEXT='(picture: A file (such as a metafile) that you can ungroup and manipulate as two or more objects, or a file that stays as a single object (such as bitmaps).)';
			sTemp=L_ppdefPicture_TEXT;
			break;
		case 'ppdefPlaceholders':
			L_ppdefPlaceholders_TEXT='(placeholders: Boxes with dotted or hatch-marked borders that are part of most slide layouts. These boxes hold title and body text or objects such as charts, tables, and pictures.)';
			sTemp=L_ppdefPlaceholders_TEXT;
			break;
		case 'ppdefRuler':
			L_ppdefRuler_TEXT='(ruler: Vertical and horizontal guides, marked in inches, that can be turned on or off. The origin (or zero marker) changes based on what is selected on the slide (text, text box, or shape).)';
			sTemp=L_ppdefRuler_TEXT;
			break;
		case 'ppdefSlideMaster':
			L_ppdefSlideMaster_TEXT='(slide master: The slide that stores information about the design template applied, including font styles, placeholder sizes and positions, background design, and color schemes.)';
			sTemp=L_ppdefSlideMaster_TEXT;
			break;
		case 'ppdefSlideTitleMasterPair':
			L_ppdefSlideTitleMasterPair_TEXT='(slide-master title pair: The slide master and title master for a given design template that you have applied to a presentation.)';
			sTemp=L_ppdefSlideTitleMasterPair_TEXT;
			break;
		case 'ppdefTemplate':
			L_ppdefTemplate_TEXT='(design template: A file that contains the styles in a presentation, including the type and size of bullets and fonts; placeholder sizes and positions; background design and fill color schemes; and a slide master and optional title master.)';
			sTemp=L_ppdefTemplate_TEXT;
			break;
		case 'ppdefTextAttributes':
			L_ppdefTextAttributes_TEXT='(text attributes: Any characteristic of text, such as font, size, style, color, or effect such as subscript or superscript.)';
			sTemp=L_ppdefTextAttributes_TEXT;
			break;
		case 'ppdefTitleMaster':
			L_ppdefTitleMaster_TEXT='(title master: The slide that stores information from the design template pertaining to styles on title slides, including placeholder sizes and positions, background design, and color schemes.)';
			sTemp=L_ppdefTitleMaster_TEXT;
			break;
		case 'ppdefView':
			L_ppdefView_TEXT='(view: A way of displaying the contents of a presentation and providing the user with the means to interact with it.)';
			sTemp=L_ppdefView_TEXT;
			break;
		case 'ppdefWebArchive':
			L_ppdefWebArchive_TEXT='(Web archive: A presentation saved in MHTML format that integrates all supporting information, including graphics and other files, into a single file.)';
			sTemp=L_ppdefWebArchive_TEXT;
			break;
		case 'ppdefWebPage':
			L_ppdefWebPage_TEXT='(Web page: A presentation saved in HTML format. Supporting graphics and other related files are stored in an associated folder when a presentation is saved as a Web page.)';
			sTemp=L_ppdefWebPage_TEXT;
			break;
		case 'ppdefWordart':
			L_ppdefWordart_TEXT='(WordArt: Text objects you create with ready-made effects to which you can apply additional formatting options.)';
			sTemp=L_ppdefWordart_TEXT;
			break;
		case 'ppdefXYZAxes':
			L_ppdefXYZAxes_TEXT='(x, y, and z axes: The three mutually perpendicular lines that are used to locate a point in a Cartesian coordinate system. In the Microsoft Office drawing layer, x is horizontal, y is vertical, and z is perpendicular to the document plane.)';
			sTemp=L_ppdefXYZAxes_TEXT;
			break;
		case 'PPDiagramEffectOptions':
			L_PPDiagramEffectOptions_TEXT='(diagram effect options: Animation enhancements that let you apply effects to a diagram piece by piece; for example, from top to bottom of a pyramid diagram.)';
			sTemp=L_PPDiagramEffectOptions_TEXT;
			break;
		case 'PPHandout':
			L_PPHandout_TEXT='(handout: A printed version of a presentation that can include multiple slides per page and space for audience notes.)';
			sTemp=L_PPHandout_TEXT;
			break;
		case 'PPJustify':
			L_PPJustify_TEXT='(justify: To adjust horizontal spacing so that text is aligned evenly along both the left and right margins. Justifying text creates a smooth edge on both sides.)';
			sTemp=L_PPJustify_TEXT;
			break;
		case 'PPMicrosoftDirect3d':
			L_PPMicrosoftDirect3d_TEXT='(Microsoft Direct 3D: A component of Microsoft DirectX, which is a set of advanced multimedia system services that are built into the Microsoft Windows operating system.)';
			sTemp=L_PPMicrosoftDirect3d_TEXT;
			break;
		case 'PPMotionPath':
			L_PPMotionPath_TEXT='(motion path: The path that a specified object or text will follow as part of an animation sequence for a slide.)';
			sTemp=L_PPMotionPath_TEXT;
			break;
		case 'PPMultipleMasters':
			L_PPMultipleMasters_TEXT='(multiple masters: When you apply more than one design template to your presentation, you will have multiple masters, one for each template that you are using.)';
			sTemp=L_PPMultipleMasters_TEXT;
			break;
		case 'PPWindowsMediaEncoder':
			L_PPWindowsMediaEncoder_TEXT='(Windows Media encoder: A Microsoft Windows Media technology that allows content developers to convert both live and prerecorded audio, video, and computer screen images to Windows Media Format for live and on-demand delivery.)';
			sTemp=L_PPWindowsMediaEncoder_TEXT;
			break;
		case 'PPWindowsMediaServices':
			L_PPWindowsMediaServices_TEXT='(Windows Media Services: A digital media platform that runs on a server, such as Windows 2000, to support streaming media, such as video and audio.)';
			sTemp=L_PPWindowsMediaServices_TEXT;
			break;

		// Word

		case 'IDH_htdefDecreaseFontSize':
			L_IDH_htdefDecreaseFontSize_TEXT='(Decrease Font Size: Reduces the font size of the selected text to the next smaller size available in Web page authoring.)';
			sTemp=L_IDH_htdefDecreaseFontSize_TEXT;
			break;
		case 'IDH_htdefExitViewSource':
			L_IDH_htdefExitViewSource_TEXT='(Exit HTML Source: Switches the view from the display of HTML source code to the display of Web page content.)';
			sTemp=L_IDH_htdefExitViewSource_TEXT;
			break;
		case 'IDH_htdefHorizontalLine':
			L_IDH_htdefHorizontalLine_TEXT='(horizontal line: Inserts a horizontal line onto a Web page. Microsoft Word inserts the same line style as the one you last inserted.)';
			sTemp=L_IDH_htdefHorizontalLine_TEXT;
			break;
		case 'IDH_htdefIncreaseFontSize':
			L_IDH_htdefIncreaseFontSize_TEXT='(Increase Font Size: Increases the font size of the selected text to the next larger size available in Web page authoring.)';
			sTemp=L_IDH_htdefIncreaseFontSize_TEXT;
			break;
		case 'IDH_htdefInlineVideo':
			L_IDH_htdefInlineVideo_TEXT='(inline movie: A movie clip that plays when the user opens a Web page, or when the pointer rests on a movie image, or in both instances, depending on the object\'s settings. Not all Web browsers support inline movies.)';
			sTemp=L_IDH_htdefInlineVideo_TEXT;
			break;
		case 'IDH_htdefWebPagePreview':
			L_IDH_htdefWebPagePreview_TEXT='(Web page preview: Displays the Web page in a Web browser.)';
			sTemp=L_IDH_htdefWebPagePreview_TEXT;
			break;
		case 'IDH_wddefChangedLines':
			L_IDH_wddefChangedLines_TEXT='(changed lines: Vertical lines appearing next to text that has been added, deleted, or changed by using tracked changes. You can specify that changed lines appear to the left or right of text. You can also hide changed lines.)';
			sTemp=L_IDH_wddefChangedLines_TEXT;
			break;
		case 'IDH_wddefClickNTypePointerShapes':
			L_IDH_wddefClickNTypePointerShapes_TEXT='(Click and Type pointer shapes: Indicate which formatting will be applied when you double-click: a left-aligned, centered, or right-aligned tab stop; a left indent; or left or right text wrapping.)';
			sTemp=L_IDH_wddefClickNTypePointerShapes_TEXT;
			break;
		case 'IDH_wddefFileProperty':
			L_IDH_wddefFileProperty_TEXT='(file property: A detail about a file that helps identify it, such as a descriptive title, the author name, the subject, or a keyword that identifies topics or other important information in the file.)';
			sTemp=L_IDH_wddefFileProperty_TEXT;
			break;
		case 'IDH_wddefFloatingObject':
			L_IDH_wddefFloatingObject_TEXT='(floating object: A graphic or other object that is inserted in the drawing layer so that you can position it precisely on the page or in front of or behind text or other objects.)';
			sTemp=L_IDH_wddefFloatingObject_TEXT;
			break;
		case 'IDH_wddefGutterMargin':
			L_IDH_wddefGutterMargin_TEXT='(gutter margin: A margin setting that adds extra space to the side or top margin of a document you plan to bind. A gutter margin ensures that text isn\'t obscured by the binding.)';
			sTemp=L_IDH_wddefGutterMargin_TEXT;
			break;
		case 'IDH_wddefInline':
			L_IDH_wddefInline_TEXT='(Inline: A type of cascading style sheet, which defines the styles that control the way a Web page or part of a Web page appears in a Web browser. The inline styles exist within a Web page on the same line as the text the style is applied to.)';
			sTemp=L_IDH_wddefInline_TEXT;
			break;
		case 'IDH_wddefInlineObject':
			L_IDH_wddefInlineObject_TEXT='(inline object: A graphic or other object that is positioned directly in the text of a Microsoft Word document at the insertion point.)';
			sTemp=L_IDH_wddefInlineObject_TEXT;
			break;
		case 'IDH_wddefJustify':
			L_IDH_wddefJustify_TEXT='(justify: To adjust horizontal spacing so that text is aligned evenly along both the left and right margins. Justifying text creates a smooth edge on both sides.)';
			sTemp=L_IDH_wddefJustify_TEXT;
			break;
		case 'IDH_wddefLinked':
			L_IDH_wddefLinked_TEXT='(Linked: A type of cascading style sheet, which defines the styles that control the way a Web page or part of a Web page appears in a Web browser. The linked style sheet exists in a separate file and is referenced throughout one or more Web pages.)';
			sTemp=L_IDH_wddefLinked_TEXT;
			break;
		case 'IDH_wddefMirrorMargins':
			L_IDH_wddefMirrorMargins_TEXT='(mirror margins: Margins of the left page are a mirror image of those of the right page. That is, the inside margins are the same width, and the outside margins are the same width.)';
			sTemp=L_IDH_wddefMirrorMargins_TEXT;
			break;
		case 'IDH_wddefNormalTemplate':
			L_IDH_wddefNormalTemplate_TEXT='(Normal template: A global template that you can use for any type of document. You can modify this template to change the default document formatting or content.)';
			sTemp=L_IDH_wddefNormalTemplate_TEXT;
			break;
		case 'IDH_wddefOutlineNumberedList':
			L_IDH_wddefOutlineNumberedList_TEXT='(outline numbered list: A list created to apply a hierarchical structure to any list or document. A document can have up to nine levels, and Microsoft Word does not apply built-in heading styles to the items in the list.)';
			sTemp=L_IDH_wddefOutlineNumberedList_TEXT;
			break;
		case 'IDH_wddefRelativePath':
			L_IDH_wddefRelativePath_TEXT='(relative path: Includes only that portion of the path that is different from the path of the source object. For example, the relative path from c:\\animal\\mammal\\canine\\fido to c:\\animal\\mammal\\feline\\fluffy is ..\\ ..\\feline\\fluffy.)';
			sTemp=L_IDH_wddefRelativePath_TEXT;
			break;
		case 'IDH_wddefSeparatorCharacters':
			L_IDH_wddefSeparatorCharacters_TEXT='(separator characters: Characters you choose to indicate where you want text to separate when you convert a table to text, or where you want new rows or columns to begin when you convert text to a table.)';
			sTemp=L_IDH_wddefSeparatorCharacters_TEXT;
			break;
		case 'IDH_wddefShortMenu':
			L_IDH_wddefShortMenu_TEXT='(personalized menu: A menu that shows only basic commands and commands that you use often.)';
			sTemp=L_IDH_wddefShortMenu_TEXT;
			break;
		case 'IDH_wddefUsesForTextFrames':
			L_IDH_wddefUsesForTextFrames_TEXT='(uses for text frames: To position a graphic or text that contains comments, footnotes, endnotes, or certain fields, use a frame. For other types of text, use a text box.)';
			sTemp=L_IDH_wddefUsesForTextFrames_TEXT;
			break;
		case 'IDH_wodefCollapseMasterDocument':
			L_IDH_wodefCollapseMasterDocument_TEXT='(collapse a master document: Collapse a master document in outline view to hide the contents of subdocuments and display them as hyperlinks.)';
			sTemp=L_IDH_wodefCollapseMasterDocument_TEXT;
			break;
		case 'IDH_wodefCommentMark':
			L_IDH_wodefCommentMark_TEXT='(comment mark: Each time you add a comment to a document, Microsoft Word inserts a comment mark in the document. Comment marks appear when you click Markup on the View menu.)';
			sTemp=L_IDH_wodefCommentMark_TEXT;
			break;
		case 'IDH_wodefDocumentMap':
			L_IDH_wodefDocumentMap_TEXT='(Document Map: A vertical pane along the left edge of the document window that displays an outline of the document\'s headings. You can use the Document Map to quickly move through a document and to keep track of your location in it.)';
			sTemp=L_IDH_wodefDocumentMap_TEXT;
			break;
		case 'IDH_wodefExpandMasterDocument':
			L_IDH_wodefExpandMasterDocument_TEXT='(expand a master document: Display the contents of all subdocuments in outline view. Expanding a master document makes it easier to work on the master document as a whole: for example, in order to check spelling or create an index.)';
			sTemp=L_IDH_wodefExpandMasterDocument_TEXT;
			break;
		case 'IDH_wodefExternalDataSource':
			L_IDH_wodefExternalDataSource_TEXT='(external data source: A data source that contains the data a user wants to gain access to: for example, a Microsoft Excel list or a Microsoft Access database.)';
			sTemp=L_IDH_wodefExternalDataSource_TEXT;
			break;
		case 'IDH_wodefIndex':
			L_IDH_wodefIndex_TEXT='(index: A list of the words and phrases that are discussed in a printed document, along with the page numbers they appear on.)';
			sTemp=L_IDH_wodefIndex_TEXT;
			break;
		case 'IDH_wodefLeader':
			L_IDH_wodefLeader_TEXT='(leader: A line that draws the reader\'s eye from a callout to the appropriate part of the illustration.)';
			sTemp=L_IDH_wodefLeader_TEXT;
			break;
		case 'IDH_wodefOnlineLayoutView':
			L_IDH_wodefOnlineLayoutView_TEXT='(Web layout view: A view of a document as it will appear in a Web browser. For example, the document appears as one long page (without page breaks) and text and tables wrap to fit in the window.)';
			sTemp=L_IDH_wodefOnlineLayoutView_TEXT;
			break;
		case 'IDH_wodefOutlineLevel':
			L_IDH_wodefOutlineLevel_TEXT='(outline level: Paragraph formatting you can use to assign a hierarchical level (Level 1 through Level 9) to paragraphs in your document. For example, after you assign outline levels, you can work with the document in outline view or in the Document Map.)';
			sTemp=L_IDH_wodefOutlineLevel_TEXT;
			break;
		case 'IDH_wodefPan':
			L_IDH_wodefPan_TEXT='(pan: To scroll continuously through a document by using the Microsoft IntelliMouse pointing device or Microsoft IntelliMouse trackball.)';
			sTemp=L_IDH_wodefPan_TEXT;
			break;
		case 'IDH_wodefQuery':
			L_IDH_wodefQuery_TEXT='(query: A means of finding all the records stored in a data source that fit a set of criteria you name. Queries can contain operators, quotation marks, wildcard characters, and parentheses to help focus your search.)';
			sTemp=L_IDH_wodefQuery_TEXT;
			break;
		case 'IDH_wodefTableOfAuthorities':
			L_IDH_wodefTableOfAuthorities_TEXT='(table of authorities: A list of the references in a legal document, such as references to cases, statutes, and rules, along with the numbers of the pages the references appear on.)';
			sTemp=L_IDH_wodefTableOfAuthorities_TEXT;
			break;
		case 'IDH_wodefTableOfFigures':
			L_IDH_wodefTableOfFigures_TEXT='(table of figures: A list of the captions for pictures, charts, graphs, slides, or other illustrations in a document, along with the numbers of the pages the captions appear on.)';
			sTemp=L_IDH_wodefTableOfFigures_TEXT;
			break;
		case 'IDH_wodefWatermark':
			L_IDH_wodefWatermark_TEXT='(watermark: Any graphic or text, such as \"Confidential,\" that when printed appears either on top of or behind existing document text.)';
			sTemp=L_IDH_wodefWatermark_TEXT;
			break;
		case 'WdBalloonsformarkup':
			L_WdBalloonsformarkup_TEXT='(balloons: In print layout view or Web layout view, markup balloons show markup elements, such as comments and tracked changes, in the margins of your document. Use these balloons to easily see and respond to reviewers\' changes and comments.)';
			sTemp=L_WdBalloonsformarkup_TEXT;
			break;
		case 'WdBookfold':
			L_WdBookfold_TEXT='(book fold printing: Printing a document in one or more booklets so the printed pages can be folded and read as a book.)';
			sTemp=L_WdBookfold_TEXT;
			break;
		case 'WdConcordance':
			L_WdConcordance_TEXT='(concordance file: A list of words to include in an index. Use a concordance file in Microsoft Word to quickly mark index entries.)';
			sTemp=L_WdConcordance_TEXT;
			break;
		case 'wdconFrames':
			L_wdconFrames_TEXT='(frames: The named subwindow of a frames page. The frame appears in a Web browser as one of a number of window regions in which pages can be displayed. The frame can be scrollable and resizable, and it can have a border.)';
			sTemp=L_wdconFrames_TEXT;
			break;
		case 'WdFilteredhtml':
			L_WdFilteredhtml_TEXT='(filtered HTML: Saving in the Web Page, Filtered format removes Microsoft Office-specific tags. If you save in filtered HTML and then reopen the file in Office programs, text and general appearance will be preserved, but some features may work differently.)';
			sTemp=L_WdFilteredhtml_TEXT;
			break;
		case 'WdLinkbar':
			L_WdLinkbar_TEXT='(link bars: A collection of graphic or text buttons representing hyperlinks to pages within your Web site and to external sites.)';
			sTemp=L_WdLinkbar_TEXT;
			break;
		case 'WdMappeddatafield':
			L_WdMappeddatafield_TEXT='(mapped data field: A field that represents commonly used information, such as \"First Name.\" If a data source contains a \"First Name\" field or variation, such as \"FName,\" the data source field automatically maps to the corresponding mapped data field.)';
			sTemp=L_WdMappeddatafield_TEXT;
			break;
		case 'WdMarkup':
			L_WdMarkup_TEXT='(markup: Comments and tracked changes such as insertions, deletions, and formatting changes. View markup when you want to process tracked changes and comments. Print a document with markup to keep a record of changes made to a document.)';
			sTemp=L_WdMarkup_TEXT;
			break;
		case 'WdNestedTable':
			L_WdNestedTable_TEXT='(nested table: A table inserted within a table cell. If you use a table to lay out a page, and you want to use another table to arrange the information, you can insert a nested table.)';
			sTemp=L_WdNestedTable_TEXT;
			break;
		case 'WdOledb':
			L_WdOledb_TEXT='(OLE DB: A component database architecture that provides efficient network and Internet access to many types of data sources, including relational data, mail files, flat files, and spreadsheets.)';
			sTemp=L_WdOledb_TEXT;
			break;
		case 'wdreadinglayoutview':
			L_wdreadinglayoutview_TEXT='(reading layout view: A view that is designed for reading documents on a computer screen. The document is resized to fit the screen and most toolbars are removed, but commands are available for navigating, commenting, and looking up words.)';
			sTemp=L_wdreadinglayoutview_TEXT;
			break;
		case 'WdSmallCaps':
			L_WdSmallCaps_TEXT='(small caps: A format that makes lowercase text appear as capital letters in a reduced font size. Small caps formatting does not affect numbers, punctuation, nonalphabetic characters, or uppercase letters.)';
			sTemp=L_WdSmallCaps_TEXT;
			break;
		case 'WdTrackedchanges':
			L_WdTrackedchanges_TEXT='(tracked change: A mark that shows where a deletion, insertion, or other editing change has been made in a document.)';
			sTemp=L_WdTrackedchanges_TEXT;
			break;
		case 'wdxmlexpansionpack':
			L_wdxmlexpansionpack_TEXT='(XML expansion pack: A collection of files, managed by a manifest.xml file, that add functionality to a Microsoft Word or Microsoft Excel document by specifying custom display or actions.)';
			sTemp=L_wdxmlexpansionpack_TEXT;
			break;
		case 'wodefActiveDocument':
			L_wodefActiveDocument_TEXT='(active document: The document in which you\'re working. Text you type or graphics you insert in Microsoft Word appear in the active document. The title bar of the active document is highlighted.)';
			sTemp=L_wodefActiveDocument_TEXT;
			break;
		case 'wodefAnnotation':
			L_wodefAnnotation_TEXT='(comment: A note or annotation that an author or reviewer adds to a document. Microsoft Word displays the comment in a balloon in the margin of the document or in the Reviewing Pane.)';
			sTemp=L_wodefAnnotation_TEXT;
			break;
		case 'wodefAutoText':
			L_wodefAutoText_TEXT='(AutoText: A storage location for text or graphics you want to use again, such as a standard contract clause or a long distribution list. Each selection of text or graphics is recorded as an AutoText entry and is assigned a unique name.)';
			sTemp=L_wodefAutoText_TEXT;
			break;
		case 'wodefbaseStyle':
			L_wodefbaseStyle_TEXT='(base style: The underlying or original style on which other styles in a document are dependent. When you change a formatting element of the base style in a document, all other styles that originate from the base style will also reflect the change.)';
			sTemp=L_wodefbaseStyle_TEXT;
			break;
		case 'wodefBodyText':
			L_wodefBodyText_TEXT='(body text: Text that is not formatted with a built-in heading style (Heading 1 through Heading 9) or an outline-level paragraph format (Level 1 through Level 9). In outline view, Microsoft Word displays a symbol to the left of body text.)';
			sTemp=L_wodefBodyText_TEXT;
			break;
		case 'wodefcharacterStyle':
			L_wodefcharacterStyle_TEXT='(character style: A combination of any of the character formatting options identified by a style name.)';
			sTemp=L_wodefcharacterStyle_TEXT;
			break;
		case 'wodefCollapse':
			L_wodefCollapse_TEXT='(collapse an outline: Collapse an outline in outline view to hide body text and subheadings under headings. Collapsing a heading is the opposite of expanding. When you collapse body text and subheadings, you can focus on fewer details.)';
			sTemp=L_wodefCollapse_TEXT;
			break;
		case 'wodefdatafield':
			L_wodefdatafield_TEXT='(data field: A category of information that corresponds to one column of information in a data source. The name of each data field is listed in the first row (header row) of the data source. \"PostalCode\" and \"LastName\" are examples of data field names.)';
			sTemp=L_wodefdatafield_TEXT;
			break;
		case 'wodefdatarecord':
			L_wodefdatarecord_TEXT='(data record: A complete set of related information that corresponds to one row of information in the data source. All information about one client in a client mailing list is an example of a data record.)';
			sTemp=L_wodefdatarecord_TEXT;
			break;
		case 'wodefDemote':
			L_wodefDemote_TEXT='(demote: In an outline, to change a heading to body text or to a lower heading level: for example, to change from Heading 5 to Heading 6.)';
			sTemp=L_wodefDemote_TEXT;
			break;
		case 'wodefEmbed':
			L_wodefEmbed_TEXT='(embed: To insert information created in one program, such as a chart or an equation, into another program. After the object is embedded, the information becomes part of the document. Any changes you make to the object are reflected in the document.)';
			sTemp=L_wodefEmbed_TEXT;
			break;
		case 'wodefExcludeDictionary':
			L_wodefExcludeDictionary_TEXT='(exclude dictionary: A dictionary with words that the main dictionary recognizes as being spelled correctly, but that you want to verify during a spelling check. For example, if you prefer \"theatre\" to \"theater,\" add \"theater\" to the exclude dictionary.)';
			sTemp=L_wodefExcludeDictionary_TEXT;
			break;
		case 'wodefField':
			L_wodefField_TEXT='(field: A set of codes that instructs Microsoft Word to insert text, graphics, page numbers, and other material into a document automatically. For example, the DATE field inserts the current date.)';
			sTemp=L_wodefField_TEXT;
			break;
		case 'wodefFieldName':
			L_wodefFieldName_TEXT='(field name: The name of a category of information in a mail-merge data source. For example, \"City,\" \"State,\" and \"PostalCode\" are commonly used field names in an address list.)';
			sTemp=L_wodefFieldName_TEXT;
			break;
		case 'wodefFieldResult':
			L_wodefFieldResult_TEXT='(field results: Text or graphics inserted in a document when Microsoft Word carries out a field\'s instructions. When you print the document or hide field codes, the field results replace the field codes.)';
			sTemp=L_wodefFieldResult_TEXT;
			break;
		case 'wodefFieldType':
			L_wodefFieldType_TEXT='(field type: The name that identifies the action or effect the field has in the document. Examples of field types are AUTHOR, COMMENTS, and DATE.)';
			sTemp=L_wodefFieldType_TEXT;
			break;
		case 'wodefForm':
			L_wodefForm_TEXT='(form: A document that contains fill-in blanks, or form fields, in which you enter information. For example, you can create an online registration form in Microsoft Word that uses drop-down lists from which users can select entries.)';
			sTemp=L_wodefForm_TEXT;
			break;
		case 'wodefFormatSwitch':
			L_wodefFormatSwitch_TEXT='(format switch (\\*): A switch or instruction that specifies the capitalization, numeral style, and character formatting that Microsoft Word uses in a field result.)';
			sTemp=L_wodefFormatSwitch_TEXT;
			break;
		case 'wodefFormField':
			L_wodefFormField_TEXT='(form field: In a form, a location where a particular type of data, such as a name or address, is stored.)';
			sTemp=L_wodefFormField_TEXT;
			break;
		case 'wodefFrame':
			L_wodefFrame_TEXT='(frame: A container that you can resize and position anywhere on the page. To position text or graphics that contain comments, footnotes, endnotes, or certain fields, you must use a frame instead of a text box.)';
			sTemp=L_wodefFrame_TEXT;
			break;
		case 'wodefglobalTemplate':
			L_wodefglobalTemplate_TEXT='(global template: Stores macros, AutoText entries, and custom toolbar, menu, and shortcut key settings that you can use while you work with documents based on any template. By default, the Normal template is a global template.)';
			sTemp=L_wodefglobalTemplate_TEXT;
			break;
		case 'wodefGridlines':
			L_wodefGridlines_TEXT='(gridlines: Thin lines that indicate the cell boundaries in a table. Gridlines do not print when you print a document.)';
			sTemp=L_wodefGridlines_TEXT;
			break;
		case 'wodefHeaderRow':
			L_wodefHeaderRow_TEXT='(header row: The first row (or record) in a mail-merge data source. The header row contains the field names for the categories of information in the data source, for example, \"Name\" and \"City.\")';
			sTemp=L_wodefHeaderRow_TEXT;
			break;
		case 'wodefHeaderSource':
			L_wodefHeaderSource_TEXT='(header source: A document that contains the header row (or header record) to be used with the data source specified for a mail-merge main document.)';
			sTemp=L_wodefHeaderSource_TEXT;
			break;
		case 'wodefHeadingStyle':
			L_wodefHeadingStyle_TEXT='(heading style: Formatting applied to a heading. Microsoft Word has nine different built-in styles: Heading 1 through Heading 9.)';
			sTemp=L_wodefHeadingStyle_TEXT;
			break;
		case 'wodefHiddenText':
			L_wodefHiddenText_TEXT='(hidden text: Character formatting that allows you to show or hide specified text. Microsoft Word indicates hidden text by underlining it with a dotted line.)';
			sTemp=L_wodefHiddenText_TEXT;
			break;
		case 'wodefHorizontalRuler':
			L_wodefHorizontalRuler_TEXT='(horizontal ruler: A bar marked off in units of measure (such as inches) that is displayed across the top of the document window.)';
			sTemp=L_wodefHorizontalRuler_TEXT;
			break;
		case 'wodefHyperlinkDisplayText':
			L_wodefHyperlinkDisplayText_TEXT='(hyperlink display text: The part of a hyperlink in a document or Web page that appears as text on the screen.)';
			sTemp=L_wodefHyperlinkDisplayText_TEXT;
			break;
		case 'wodefIndexEntry':
			L_wodefIndexEntry_TEXT='(index entry: A field code that marks specific text for inclusion in an index. When you mark text as an index entry, Microsoft Word inserts an XE (Index Entry) field formatted as hidden text.)';
			sTemp=L_wodefIndexEntry_TEXT;
			break;
		case 'wodefLeaderCharacter':
			L_wodefLeaderCharacter_TEXT='(leader character: A solid, dotted, or dashed line that is used in a table of contents and that fills the space used by a tab character.)';
			sTemp=L_wodefLeaderCharacter_TEXT;
			break;
		case 'wodefLineSpacing':
			L_wodefLineSpacing_TEXT='(line spacing: The amount of space from the bottom of one line of text to the bottom of the next line. Microsoft Word adjusts the line spacing to accommodate the largest font or the tallest graphic in that line.)';
			sTemp=L_wodefLineSpacing_TEXT;
			break;
		case 'wodefLink':
			L_wodefLink_TEXT='(link: Used to insert a copy of information created in one program into a Microsoft Word document while maintaining a connection between the two files. When the information changes in the source file, the changes are reflected in the destination document.)';
			sTemp=L_wodefLink_TEXT;
			break;
		case 'wodefMasterDocument':
			L_wodefMasterDocument_TEXT='(master document: A \"container\" for a set of separate files (or subdocuments). You can use a master document to set up and manage a multipart document, such as a book with several chapters.)';
			sTemp=L_wodefMasterDocument_TEXT;
			break;
		case 'wodefNonbreakingHyphen':
			L_wodefNonbreakingHyphen_TEXT='(nonbreaking hyphen: A hyphen that\'s used to prevent a hyphenated word, number, or phrase from breaking if it falls at the end of a line. For example, you can prevent 555-0123 from breaking; instead, the entire item moves to the beginning of the next line.)';
			sTemp=L_wodefNonbreakingHyphen_TEXT;
			break;
		case 'wodefnormalStyle':
			L_wodefnormalStyle_TEXT='(Normal style: The default paragraph style used in documents based on the Normal template (Normal.dot).)';
			sTemp=L_wodefnormalStyle_TEXT;
			break;
		case 'wodefNormalView':
			L_wodefNormalView_TEXT='(normal view: A view that shows text formatting and a simplified page layout. Normal view is convenient for most editing and formatting tasks.)';
			sTemp=L_wodefNormalView_TEXT;
			break;
		case 'wodefNoteReferenceMark':
			L_wodefNoteReferenceMark_TEXT='(note reference mark: A number, character, or combination of characters that indicates that additional information is contained in a footnote or endnote.)';
			sTemp=L_wodefNoteReferenceMark_TEXT;
			break;
		case 'wodefNumericPictureSwitch':
			L_wodefNumericPictureSwitch_TEXT='(numeric picture switch (\\#): Specifies how Microsoft Word will display the numeric result of a field. This switch is called a \"picture switch\" because you use symbols to show how you want the field result to look.)';
			sTemp=L_wodefNumericPictureSwitch_TEXT;
			break;
		case 'wodefOptionalHyphen':
			L_wodefOptionalHyphen_TEXT='(optional hyphen: A hyphen that\'s used to control where a word or phrase breaks if it falls at the end of a line. For example, you can specify that the word \"nonprinting\" breaks as \"non-printing\" rather than \"nonprint-ing.\")';
			sTemp=L_wodefOptionalHyphen_TEXT;
			break;
		case 'wodefOutlineSymbols':
			L_wodefOutlineSymbols_TEXT='(outline symbols: Symbols that are displayed beside paragraphs in outline view. You can use the symbols to display or hide subordinate levels of text and to reorganize text quickly.)';
			sTemp=L_wodefOutlineSymbols_TEXT;
			break;
		case 'wodefOutlineView':
			L_wodefOutlineView_TEXT='(outline view: A view that shows the headings of a document indented to represent their level in the document\'s structure. You can also use outline view to work with master documents.)';
			sTemp=L_wodefOutlineView_TEXT;
			break;
		case 'wodefOvertype':
			L_wodefOvertype_TEXT='(overtype: The replacement of existing characters with newly typed characters. When overtype mode is turned on, OVR appears in the status bar.)';
			sTemp=L_wodefOvertype_TEXT;
			break;
		case 'wodefPageBreak':
			L_wodefPageBreak_TEXT='(page break: The point at which one page ends and another begins. Microsoft Word inserts an \"automatic\" (or soft) page break for you, or you can force a page break at a specific location by inserting a \"manual\" (or hard) page break.)';
			sTemp=L_wodefPageBreak_TEXT;
			break;
		case 'wodefParagraphFormatting':
			L_wodefParagraphFormatting_TEXT='(paragraph formatting: Formatting that controls the appearance of a paragraph. Examples include indentation, alignment, line spacing, and pagination.)';
			sTemp=L_wodefParagraphFormatting_TEXT;
			break;
		case 'wodefparagraphMark':
			L_wodefparagraphMark_TEXT='(paragraph mark: The nonprinting symbol that Microsoft Word inserts when you press ENTER to end a paragraph. The paragraph mark stores the formatting you apply to the paragraph.)';
			sTemp=L_wodefparagraphMark_TEXT;
			break;
		case 'wodefPenAnnotations':
			L_wodefPenAnnotations_TEXT='(pen comments: Comments created by using a stylus. Microsoft Word treats pen comments like any other drawing object. Pen comments don\'t appear in the Reviewing Pane, and Word doesn\'t insert comment marks in the document window.)';
			sTemp=L_wodefPenAnnotations_TEXT;
			break;
		case 'wodefPicturePlaceholder':
			L_wodefPicturePlaceholder_TEXT='(picture placeholder: A rectangle that represents an imported graphic in your document. You can increase scrolling speed by temporarily replacing graphics with picture placeholders.)';
			sTemp=L_wodefPicturePlaceholder_TEXT;
			break;
		case 'wodefPredefinedBookmark':
			L_wodefPredefinedBookmark_TEXT='(predefined bookmark: Bookmarks that Microsoft Word automatically sets in each document. For example, the \"\\Sel\" predefined bookmark refers to the current selection or the insertion point.)';
			sTemp=L_wodefPredefinedBookmark_TEXT;
			break;
		case 'wodefPromote':
			L_wodefPromote_TEXT='(promote: In an outline, to change body text to a heading, or to change a heading to a higher level heading: for example, from Heading 6 to Heading 5.)';
			sTemp=L_wodefPromote_TEXT;
			break;
		case 'wodefRevisionMark':
			L_wodefRevisionMark_TEXT='(revision mark: A mark that shows where a deletion, insertion, or other editing change has been made in a document.)';
			sTemp=L_wodefRevisionMark_TEXT;
			break;
		case 'wodefSection':
			L_wodefSection_TEXT='(section: A portion of a document in which you set certain page formatting options. You create a new section when you want to change such properties as line numbering, number of columns, or headers and footers.)';
			sTemp=L_wodefSection_TEXT;
			break;
		case 'wodefSectionBreak':
			L_wodefSectionBreak_TEXT='(section break: A mark you insert to show the end of a section. A section break stores the section formatting elements, such as the margins, page orientation, headers and footers, and sequence of page numbers.)';
			sTemp=L_wodefSectionBreak_TEXT;
			break;
		case 'wodefSpecialCharacter':
			L_wodefSpecialCharacter_TEXT='(special character: A character or symbol that doesn\'t appear on the keyboard but can be displayed on the screen and printed: for example, the copyright symbol.)';
			sTemp=L_wodefSpecialCharacter_TEXT;
			break;
		case 'wodefSpike':
			L_wodefSpike_TEXT='(Spike: A special AutoText entry that stores multiple deletions. Microsoft Word appends one item to another until you paste the contents as a group in a new location in your document. You can also use the Microsoft Office Clipboard to get the same result.)';
			sTemp=L_wodefSpike_TEXT;
			break;
		case 'wodefStory':
			L_wodefStory_TEXT='(story: A document area that contains a range of text distinct from other areas of text in a document. For example, if a document includes body text, footnotes, and headers, it contains a main text story, footnotes story, and headers story.)';
			sTemp=L_wodefStory_TEXT;
			break;
		case 'wodefStyleArea':
			L_wodefStyleArea_TEXT='(style area: A vertical area along the left edge of the document window that displays the name of the paragraph style that is applied to each paragraph.)';
			sTemp=L_wodefStyleArea_TEXT;
			break;
		case 'wodefSubentry':
			L_wodefSubentry_TEXT='(subentry: An index entry that falls under a more general heading. For example, the index entry \"planets\" could have the subentries \"Mars\" and \"Venus.\")';
			sTemp=L_wodefSubentry_TEXT;
			break;
		case 'wodefSwitch':
			L_wodefSwitch_TEXT='(switch: When working with fields, a special instruction that causes a specific action to occur. Generally, a switch is added to a field to modify a result.)';
			sTemp=L_wodefSwitch_TEXT;
			break;
		case 'wodefTable':
			L_wodefTable_TEXT='(table: One or more rows of cells commonly used to display numbers and other items for quick reference and analysis. Items in a table are organized into rows and columns.)';
			sTemp=L_wodefTable_TEXT;
			break;
		case 'wodeftextframe':
			L_wodeftextframe_TEXT='(text frame: The area within a shape that can contain text.)';
			sTemp=L_wodeftextframe_TEXT;
			break;
		case 'wodefVerticalRuler':
			L_wodefVerticalRuler_TEXT='(vertical ruler: A bar displayed along the left side of the document window. You can use the vertical ruler to adjust the top and bottom page margins and the row height in tables.)';
			sTemp=L_wodefVerticalRuler_TEXT;
			break;
		case 'wodefVoiceAnnotations':
			L_wodefVoiceAnnotations_TEXT='(voice comments: Recordings that are attached to your document.)';
			sTemp=L_wodefVoiceAnnotations_TEXT;
			break;
		case 'wodefWidowAndOrphan':
			L_wodefWidowAndOrphan_TEXT='(widow and orphan: A widow is the last line of a paragraph printed by itself at the top of a page. An orphan is the first line of a paragraph printed by itself at the bottom of a page.)';
			sTemp=L_wodefWidowAndOrphan_TEXT;
			break;
		case 'wodefWLL':
			L_wodefWLL_TEXT='(Word Add-in Library (WLL): A stand-alone, dynamic-link library that, when loaded, can add custom commands that extend the functionality of Microsoft Word. Commands and functions in a loaded WLL are also available to Microsoft Visual Basic projects.)';
			sTemp=L_wodefWLL_TEXT;
			break;
		case 'wodefWordPublication':
			L_wodefWordPublication_TEXT='(Word publication: A Microsoft Word document that contains hyperlinks to another location. You can use hyperlinks to go to another location in the same document or to another file on your hard disk, your network, an intranet, or the Internet.)';
			sTemp=L_wodefWordPublication_TEXT;
			break;

		// FrontPage

		case 'FpAccessControlList':
			L_FpAccessControlList_TEXT='(ACL: access control list. A list that indicates which users or groups have permission to access or modify a particular file on a Windows NT-based server.)';
			sTemp=L_FpAccessControlList_TEXT;
			break;
		case 'FpActiveServerPages':
			L_FpActiveServerPages_TEXT='(ASP: Active Server Pages. A server-side scripting technology that is used to create dynamic interactive Web applications. An ASP file is an HTML page containing scripts that are processed by a Web server before being sent to a browser.)';
			sTemp=L_FpActiveServerPages_TEXT;
			break;
		case 'FpAdministratorRole':
			L_FpAdministratorRole_TEXT='(Administrator role: A collection of rights that allows a user to modify all Web site content and manage site settings and accounts.)';
			sTemp=L_FpAdministratorRole_TEXT;
			break;
		case 'FpAdvanceAuthorRole':
			L_FpAdvanceAuthorRole_TEXT='(Advanced Author role: A collection of rights that allows the user to view, add, and change pages, documents in libraries, discussion boards, themes, and borders, as well as manage tasks and recalculate links. A default role.)';
			sTemp=L_FpAdvanceAuthorRole_TEXT;
			break;
		case 'fpanchor':
			L_fpanchor_TEXT='(anchor (also bookmark): A named location on a Web page that can be the target of a hyperlink. A bookmark can be applied to a string of characters, or it can exist on a page separately from any text. In a URL, a bookmark is preceded by the number sign (#).)';
			sTemp=L_fpanchor_TEXT;
			break;
		case 'fpAnonymousFTP':
			L_fpAnonymousFTP_TEXT='(anonymous FTP: The ability to access a remote computer system on which one does not have an account, via the Internet\'s File Transfer Protocol (FTP). Users have restricted access rights with anonymous FTP.)';
			sTemp=L_fpAnonymousFTP_TEXT;
			break;
		case 'FpAnonymousUserAccess':
			L_FpAnonymousUserAccess_TEXT='(anonymous user access: The ability to access a Web server on which one does not have an account. Usually, anonymous users have more restricted access rights than users with accounts.)';
			sTemp=L_FpAnonymousUserAccess_TEXT;
			break;
		case 'fpArticle':
			L_fpArticle_TEXT='(article: A message or posting in a discussion group or an Internet newsgroup. An article can be a response to a previous article.)';
			sTemp=L_fpArticle_TEXT;
			break;
		case 'fpAspectratio':
			L_fpAspectratio_TEXT='(aspect ratio: In computer displays and graphics, the ratio of the width of a picture or picture area to its height. For example, an aspect ratio of 2:1 indicates that the picture is twice as wide as it is high.)';
			sTemp=L_fpAspectratio_TEXT;
			break;
		case 'FpAuthorListRight':
			L_FpAuthorListRight_TEXT='(Author List right: A right that allows a user to add, modify, or remove items in a list, document library, discussion board, or survey.)';
			sTemp=L_FpAuthorListRight_TEXT;
			break;
		case 'FpAuthorRole':
			L_FpAuthorRole_TEXT='(Author role: A collection of rights that enables a user to view, add, and modify pages and items in a list, document library, discussion board, or survey.)';
			sTemp=L_FpAuthorRole_TEXT;
			break;
		case 'fpAutoThumbnail':
			L_fpAutoThumbnail_TEXT='(auto thumbnail: A tool that creates a thumbnail (a miniature version) of a picture or photograph and a hyperlink to the original picture.)';
			sTemp=L_fpAutoThumbnail_TEXT;
			break;
		case 'fpBackgroundsound':
			L_fpBackgroundsound_TEXT='(background sound: A sound clip that is associated with a Web page. When the page is displayed in a Web browser, the sound is played either continuously or a specified number of times.)';
			sTemp=L_fpBackgroundsound_TEXT;
			break;
		case 'fpBanner':
			L_fpBanner_TEXT='(banner: A section of a Web page containing a graphic element and text, such as the page title. Page banners are usually displayed at the top of Web pages.)';
			sTemp=L_fpBanner_TEXT;
			break;
		case 'fpBannerAdManager':
			L_fpBannerAdManager_TEXT='(banner ad manager: A component in FrontPage that shows each of a series of designated graphics for a specified number of seconds, then changes to the next graphic via a transition effect. Banner ads usually contain hyperlinks to an advertiser\'s Web site.)';
			sTemp=L_fpBannerAdManager_TEXT;
			break;
		case 'FpBaseline':
			L_FpBaseline_TEXT='(baseline: In printing and in the display of characters on a screen, an imaginary horizontal line with which the base of each character, excluding descenders, is aligned.)';
			sTemp=L_FpBaseline_TEXT;
			break;
		case 'fpBaselocationbaseURL':
			L_fpBaselocationbaseURL_TEXT='(base location, base URL: A URL that you can assign to a page to convert all relative URLs on that page to absolute URLs. A base URL should end with a document name part, such as .../sample.htm or a trailing slash.)';
			sTemp=L_fpBaselocationbaseURL_TEXT;
			break;
		case 'FpBrowserRole':
			L_FpBrowserRole_TEXT='(Browser role: A collection of rights that allows the user to view items in a list, document library, discussion board, or survey.)';
			sTemp=L_FpBrowserRole_TEXT;
			break;
		case 'Fpbuiltinstyle':
			L_Fpbuiltinstyle_TEXT='(built-in style: The formatting attributes that are available by default in the FrontPage style list.)';
			sTemp=L_Fpbuiltinstyle_TEXT;
			break;
		case 'fpCategory':
			L_fpCategory_TEXT='(category: A classification for labeling and grouping Web pages and files by common criteria such as page contents, file types, or a similar distinction.)';
			sTemp=L_fpCategory_TEXT;
			break;
		case 'fpCellpadding':
			L_fpCellpadding_TEXT='(cell padding: The space between the contents and the inside edges of a table cell.)';
			sTemp=L_fpCellpadding_TEXT;
			break;
		case 'fpCellspacing':
			L_fpCellspacing_TEXT='(cell spacing: The amount of space between cells in a table. Cell spacing is the thickness, in pixels, of the walls surrounding each cell.)';
			sTemp=L_fpCellspacing_TEXT;
			break;
		case 'fpCGI':
			L_fpCGI_TEXT='(CGI: Common Gateway Interface. A standard method of extending Web server functionality by executing programs or scripts on a Web server in response to Web browser requests, such as in form processing. Use of CGI can make a Web page more dynamic.)';
			sTemp=L_fpCGI_TEXT;
			break;
		case 'FpCharacterStyle':
			L_FpCharacterStyle_TEXT='(character style: A combination of any of the character-formatting options that are identified by a style name.)';
			sTemp=L_FpCharacterStyle_TEXT;
			break;
		case 'FpClassSelector':
			L_FpClassSelector_TEXT='(class selector: In cascading style sheets, a name identifying a user-defined style. Depending on how it\'s defined, a class selector can be used with a single type of tag or with any HTML tag inside the BODY element.)';
			sTemp=L_FpClassSelector_TEXT;
			break;
		case 'fpClient':
			L_fpClient_TEXT='(client: On a local area network (LAN) or the Internet, a computer that accesses shared network resources that are provided by another computer.)';
			sTemp=L_fpClient_TEXT;
			break;
		case 'fpClientsideimagemap':
			L_fpClientsideimagemap_TEXT='(client-side image map: An image map that encodes the destination URL of each hot spot directly on a Web page. These image maps don\'t require processing from a server to allow a site visitor to follow the hyperlinks on the image map.)';
			sTemp=L_fpClientsideimagemap_TEXT;
			break;
		case 'fpClientsideprogram':
			L_fpClientsideprogram_TEXT='(client-side program: On the Internet, a program that is run on a client computer rather than on a server computer.)';
			sTemp=L_fpClientsideprogram_TEXT;
			break;
		case 'fpcodec':
			L_fpcodec_TEXT='(codec: Short for compression/decompression. A software program that processes video through complex algorithms that compress the file for storage or transmittal and then decompress it for playback.)';
			sTemp=L_fpcodec_TEXT;
			break;
		case 'fpcodesnippet':
			L_fpcodesnippet_TEXT='(code snippet: One or more lines of HTML or other code that is frequently used. Instead of typing the code, you can insert the code snippet. Microsoft FrontPage includes several predefined code snippets. You can also create custom code snippets.)';
			sTemp=L_fpcodesnippet_TEXT;
			break;
		case 'fpColoraveragetool':
			L_fpColoraveragetool_TEXT='(color average tool: Tool that is used by dragging the eyedropper tool across a selection of graphics or various solid colors on a Web page and thereby determining the average color spectrum.)';
			sTemp=L_fpColoraveragetool_TEXT;
			break;
		case 'FpCommandTimeout':
			L_FpCommandTimeout_TEXT='(command timeout: The amount of time that is allotted for executing a command against a database. After the allotted amount of time, an error occurs.)';
			sTemp=L_FpCommandTimeout_TEXT;
			break;
		case 'fpComment':
			L_fpComment_TEXT='(comment: Text that can be viewed in Page view but not in a Web browser. Comment text is used to insert notes to other authors during construction of a page. Site visitors can view comments in the source HTML of the page.)';
			sTemp=L_fpComment_TEXT;
			break;
		case 'fpComponent':
			L_fpComponent_TEXT='(component: A built-in FrontPage object that is evaluated and executed when an author saves the page or, in some cases, when a site visitor goes to the page. Most components generate HTML. Components include search forms, and Save Results form handlers.)';
			sTemp=L_fpComponent_TEXT;
			break;
		case 'fpConfirmationFieldcomponent':
			L_fpConfirmationFieldcomponent_TEXT='(Confirmation Field component: A component in FrontPage that is replaced with the contents of a form field. It is useful on a form confirmation page, where it can display a site visitor\'s name or any other data entered into a field.)';
			sTemp=L_fpConfirmationFieldcomponent_TEXT;
			break;
		case 'fpConfirmationpage':
			L_fpConfirmationpage_TEXT='(confirmation page: A page that is displayed in a Web browser, confirming that data entered into a form has been successfully submitted.)';
			sTemp=L_fpConfirmationpage_TEXT;
			break;
		case 'FpConnectionTimeout':
			L_FpConnectionTimeout_TEXT='(connection timeout: The amount of time allotted for establishing a connection to a database. After the allotted amount of time, an error occurs.)';
			sTemp=L_FpConnectionTimeout_TEXT;
			break;
		case 'FpContributorRole':
			L_FpContributorRole_TEXT='(Contributor role: A collection of rights that enable the user to view pages and documents in a library and to contribute to discussions. This is a default role.)';
			sTemp=L_FpContributorRole_TEXT;
			break;
		case 'FpCss':
			L_FpCss_TEXT='(CSS: A cascading style sheet is a document containing style information that can be referenced by multiple Web pages. Styles define appearance and formatting of content on Web pages and allow authors more control over how content is displayed in browsers.)';
			sTemp=L_FpCss_TEXT;
			break;
		case 'FpDatabaseColumnValue':
			L_FpDatabaseColumnValue_TEXT='(database column value: The placeholder for a database field that is displayed inside a database results region.)';
			sTemp=L_FpDatabaseColumnValue_TEXT;
			break;
		case 'FpDatabaseConnection':
			L_FpDatabaseConnection_TEXT='(database connection: A connection that specifies the name, type, location, and optional information for a database.)';
			sTemp=L_FpDatabaseConnection_TEXT;
			break;
		case 'fpDatabaseresultsregion':
			L_fpDatabaseresultsregion_TEXT='(Database Results region: An area on an Active Server Page that can be dynamically populated by the results of a database query when the page is displayed in a Web browser.)';
			sTemp=L_fpDatabaseresultsregion_TEXT;
			break;
		case 'fpDatabaseResultsWizard':
			L_fpDatabaseResultsWizard_TEXT='(Database Results Wizard: A FrontPage wizard that guides you through creating a region on a page that displays information obtained from the records in a database. You can use an existing database to accomplish this or let the wizard create one for you.)';
			sTemp=L_fpDatabaseResultsWizard_TEXT;
			break;
		case 'FpDataSource':
			L_FpDataSource_TEXT='(data source: The database or file that isaccessed by a driver and identified by a data source name (DSN).)';
			sTemp=L_FpDataSource_TEXT;
			break;
		case 'fpDatavalidation':
			L_fpDatavalidation_TEXT='(data validation: A set of rules that you can apply to form fields to restrict the type of information that site visitors enter into forms. For example, you can set rules so that only letters, and not numbers, can be entered into a \"name\" field on a form.)';
			sTemp=L_fpDatavalidation_TEXT;
			break;
		case 'fpDefaulthyperlink':
			L_fpDefaulthyperlink_TEXT='(default hyperlink: In an image map, the hyperlink that site visitors follow when they click an area of a picture where there are no hot spots.)';
			sTemp=L_fpDefaulthyperlink_TEXT;
			break;
		case 'fpDesigntimecontrol':
			L_fpDesigntimecontrol_TEXT='(design-time control: An ActiveX control that is used while designing or editing a page.)';
			sTemp=L_fpDesigntimecontrol_TEXT;
			break;
		case 'fpDiscussionformhandler':
			L_fpDiscussionformhandler_TEXT='(Discussion form handler: In FrontPage, a form handler that allows site visitors to participate in an online discussion by using a form.)';
			sTemp=L_fpDiscussionformhandler_TEXT;
			break;
		case 'FpDiskbasedWebSite':
			L_FpDiskbasedWebSite_TEXT='(disk-based Web site: A Web site that is hosted on a local computer.)';
			sTemp=L_FpDiskbasedWebSite_TEXT;
			break;
		case 'fpDistributedPasswordAuthentication':
			L_fpDistributedPasswordAuthentication_TEXT='(DPA: Distributed password authentication. An advanced method of user authentication that allows a single user logon. Support is provided by the Microsoft Membership System and is optimized for the needs of Internet service providers and online services.)';
			sTemp=L_fpDistributedPasswordAuthentication_TEXT;
			break;
		case 'fpDomainname':
			L_fpDomainname_TEXT='(domain name: The address of a network location that identifies its owner in this specific format: server.organization.type. For example, www.whitehouse.gov identifies the Web server at the White House, which is part of the U.S. government.)';
			sTemp=L_fpDomainname_TEXT;
			break;
		case 'fpEditor':
			L_fpEditor_TEXT='(editor: A program that creates files or makes changes to existing files. FrontPage has editors for WYSIWYG, code, text, and CSS. You can also associate files with external editors.)';
			sTemp=L_fpEditor_TEXT;
			break;
		case 'fpEmail':
			L_fpEmail_TEXT='(e-mail: Abbreviation for electronic mail. A way to send text messages and file attachments over the Internet or a network.)';
			sTemp=L_fpEmail_TEXT;
			break;
		case 'FpEmbeddedCascadingStyleSheet':
			L_FpEmbeddedCascadingStyleSheet_TEXT='(embedded cascading style sheet: A cascading style sheet contained within the Web page to which it is applied.)';
			sTemp=L_FpEmbeddedCascadingStyleSheet_TEXT;
			break;
		case 'fpEmbeddedfiles':
			L_fpEmbeddedfiles_TEXT='(embedded files: In FrontPage, graphics, pictures, sounds, and video clips that you insert in a Web page from a file system or the clipboard. You are prompted to save embedded files when you save the page.)';
			sTemp=L_fpEmbeddedfiles_TEXT;
			break;
		case 'fpEPS':
			L_fpEPS_TEXT='(EPS: Encapsulated PostScript. An extension of the PostScript graphics file format developed by Adobe Systems. EPS enables PostScript graphics files to be incorporated into other documents.)';
			sTemp=L_fpEPS_TEXT;
			break;
		case 'fpExecutablefolder':
			L_fpExecutablefolder_TEXT='(executable folder: A folder in a FrontPage-based Web site from which scripts and executable programs can be run on a Web server. Server administrators may prohibit the use of executable folders.)';
			sTemp=L_fpExecutablefolder_TEXT;
			break;
		case 'FpExternalCascadingStyleSheet':
			L_FpExternalCascadingStyleSheet_TEXT='(external cascading style sheet: A cascading style sheet in a file with a .css file name extension. A .css file  is composed solely of style rules in valid .css syntax, without any surrounding HTML tags.)';
			sTemp=L_FpExternalCascadingStyleSheet_TEXT;
			break;
		case 'fpExternalhyperlink':
			L_fpExternalhyperlink_TEXT='(external hyperlink: A hyperlink pointing to a page or file that is outside of the current Web site.)';
			sTemp=L_fpExternalhyperlink_TEXT;
			break;
		case 'fpExternalstylesheet':
			L_fpExternalstylesheet_TEXT='(external style sheet: A cascading style sheet in a file with a .css file name extension. A .css file is composed solely of style rules in valid .css syntax, without any surrounding HTML tags. You can link one or more Web pages to an external style sheet.)';
			sTemp=L_fpExternalstylesheet_TEXT;
			break;
		case 'fpFAQ':
			L_fpFAQ_TEXT='(FAQ: Frequently Asked Questions. A document listing common questions and answers on a particular subject.)';
			sTemp=L_fpFAQ_TEXT;
			break;
		case 'FpFieldValue':
			L_FpFieldValue_TEXT='(field value: The contents of a database field displayed inside a database results region, as shown in a Web browser.)';
			sTemp=L_FpFieldValue_TEXT;
			break;
		case 'fpFile':
			L_fpFile_TEXT='(file: A named collection of information that is stored on a computer. Also, an Internet protocol that refers to files on a disk or local area network (LAN). In FrontPage, you can create hyperlinks to files (using file://) in Page view.)';
			sTemp=L_fpFile_TEXT;
			break;
		case 'FpFileDsn':
			L_FpFileDsn_TEXT='(file DSN: file Data Source Names. A file that stores information about a database connection. The file has a .dsn file name extension.)';
			sTemp=L_FpFileDsn_TEXT;
			break;
		case 'fpfiletransferprotocolftp':
			L_fpfiletransferprotocolftp_TEXT='(File Transfer Protocol (FTP): A protocol for copying files to and from remote computer systems on a network or the Internet. FTP sites are frequently used on the Internet for making files and folders publicly available.)';
			sTemp=L_fpfiletransferprotocolftp_TEXT;
			break;
		case 'fpFiletype':
			L_fpFiletype_TEXT='(file type: The format of a file, commonly indicated by its file name extension. Computer applications usually work on a limited set of file types.)';
			sTemp=L_fpFiletype_TEXT;
			break;
		case 'fpfilter':
			L_fpfilter_TEXT='(filter: A set of criteria that is applied to data in order to display a subset of the data or to sort the data.)';
			sTemp=L_fpfilter_TEXT;
			break;
		case 'fpFirewall':
			L_fpFirewall_TEXT='(firewall: A method of protecting the files and programs on one network from users on another network. A company will typically install a firewall to give users access to the Internet while protecting their internal information.)';
			sTemp=L_fpFirewall_TEXT;
			break;
		case 'fpFolder':
			L_fpFolder_TEXT='(folder: A named storage area on a computer containing files and other folders.)';
			sTemp=L_fpFolder_TEXT;
			break;
		case 'fpFoldersview':
			L_fpFoldersview_TEXT='(folders view: The view of a Web site that shows how the content of the site is organized. You can create, delete, copy, and move folders and files in Folders view.)';
			sTemp=L_fpFoldersview_TEXT;
			break;
		case 'fpForm':
			L_fpForm_TEXT='(form: A set of data-entry fields on a page that are processed on a Web server. The data is sent to the server when a site visitor submits the form by clicking a button or, in some cases, by clicking a graphic.)';
			sTemp=L_fpForm_TEXT;
			break;
		case 'fpFormfield':
			L_fpFormfield_TEXT='(form field: A data-entry field on a page. A site visitor supplies information in a field either by typing text or by selecting a value.)';
			sTemp=L_fpFormfield_TEXT;
			break;
		case 'fpFormhandler':
			L_fpFormhandler_TEXT='(form handler: A program on a server that is executed when a site visitor submits a form. A form in FrontPage is associated with a form handler.)';
			sTemp=L_fpFormhandler_TEXT;
			break;
		case 'fpFrame':
			L_fpFrame_TEXT='(frame: An area of a Web browser window that is defined by a frames page. You display a page in a frame by creating a hyperlink to the page and specifying the frame as part of the hyperlink.)';
			sTemp=L_fpFrame_TEXT;
			break;
		case 'fpFrameset':
			L_fpFrameset_TEXT='(frameset: A page that divides a Web browser window into different areas called frames that can independently display several Web pages.)';
			sTemp=L_fpFrameset_TEXT;
			break;
		case 'fpframespagehtmlbutton':
			L_fpframespagehtmlbutton_TEXT='(frames page HTML button: The tab in Page view in FrontPage that shows the HTML of the active frames page.)';
			sTemp=L_fpframespagehtmlbutton_TEXT;
			break;
		case 'fpFrontPageServerExtensions':
			L_fpFrontPageServerExtensions_TEXT='(FrontPage Server Extensions: A set of programs and scripts that support authoring in FrontPage and extend the functionality of a Web server.)';
			sTemp=L_fpFrontPageServerExtensions_TEXT;
			break;
		case 'fpfunction':
			L_fpfunction_TEXT='(function: An action or operation that is performed by a script. A function may return a value or other result.)';
			sTemp=L_fpfunction_TEXT;
			break;
		case 'fpGatewayscript':
			L_fpGatewayscript_TEXT='(gateway script: A standard method of extending Web server functionality by executing programs or scripts on a Web server in response to Web browser requests, such as in form processing. Use of a common gateway interface can make a web page more dynamic.)';
			sTemp=L_fpGatewayscript_TEXT;
			break;
		case 'fpHeading':
			L_fpHeading_TEXT='(heading: A paragraph style that is displayed in a typeface larger than body text. The size of a heading is related to its level: Heading 1 is largest, Heading 2 is slightly smaller, and so on. Headings provide titles for text paragraphs or entire pages.)';
			sTemp=L_fpHeading_TEXT;
			break;
		case 'FpHexadecimal':
			L_FpHexadecimal_TEXT='(hexadecimal: A base-16 number system represented by the digits 0 through 9 and the uppercase or lowercase letters A (equivalent to decimal 10) through F (equivalent to decimal 15). Hexadecimal values are commonly used in HTML code to identify colors..)';
			sTemp=L_FpHexadecimal_TEXT;
			break;
		case 'fpHiddenfield':
			L_fpHiddenfield_TEXT='(hidden field: A form field that is invisible to a site visitor but supplies data to a form handler. When a form is submitted, hidden fields are passed to the form handler along with name-value pairs for each visible form field.)';
			sTemp=L_fpHiddenfield_TEXT;
			break;
		case 'fpHiddenfolder':
			L_fpHiddenfolder_TEXT='(hidden folder: A folder in a Web site in FrontPage that has a name beginning with an underscore character, as in _hidden. By default, pages and files in hidden folders cannot be viewed in a Web browser.)';
			sTemp=L_fpHiddenfolder_TEXT;
			break;
		case 'fphit':
			L_fphit_TEXT='(hit: In Web site usage reports, a value that indicates that an individual file has been accessed. Hits are recorded for each file accessed, including graphics, animations, and other files that are inserted or embedded in a Web page.)';
			sTemp=L_fphit_TEXT;
			break;
		case 'fpHitCountercomponent':
			L_fpHitCountercomponent_TEXT='(Hit Counter component: A component in FrontPage that keeps track of the number of visitors to a World Wide Web site.)';
			sTemp=L_fpHitCountercomponent_TEXT;
			break;
		case 'fpHost':
			L_fpHost_TEXT='(host: A computer that offers services on a network. On the World Wide Web, a host is a computer that runs Web server software that responds to requests sent by using Internet protocols. Also called server.)';
			sTemp=L_fpHost_TEXT;
			break;
		case 'fpHostname':
			L_fpHostname_TEXT='(host name: In a URL, a unique name that identifies an Internet server. A host name has two or more parts, separated by periods, as in microsoft.com. Also called network location or Internet address.)';
			sTemp=L_fpHostname_TEXT;
			break;
		case 'fpHoverButtoncomponent':
			L_fpHoverButtoncomponent_TEXT='(Hover Button component: An animated button on a Web page that is activated when a mouse pointer is moved over the button or when the button is clicked.)';
			sTemp=L_fpHoverButtoncomponent_TEXT;
			break;
		case 'fpHTMLattribute':
			L_fpHTMLattribute_TEXT='(HTML attribute: A value within an HTML tag that assigns additional properties to the object being defined. FrontPage assigns some attributes automatically when you create an object such as a paragraph.)';
			sTemp=L_fpHTMLattribute_TEXT;
			break;
		case 'fpHyperlinksview':
			L_fpHyperlinksview_TEXT='(Hyperlinks view: A view in FrontPage that shows the status of the hyperlinks in a Web site. A list shows both internal and external hyperlinks, and graphically indicates whether the hyperlinks have been verified or whether they are broken.)';
			sTemp=L_fpHyperlinksview_TEXT;
			break;
		case 'fpHypertext':
			L_fpHypertext_TEXT='(hypertext: Originally, any textual information on a computer containing links to other information (called hyperlinks). On the World Wide Web, it\'s the main way to navigate among pages and Web sites by linking from text, pictures, graphics, or image maps.)';
			sTemp=L_fpHypertext_TEXT;
			break;
		case 'fpIDselector':
			L_fpIDselector_TEXT='(ID selector: In a cascading style sheet style definition (or style rule), a selector that is used to define a style for an individual page element, usually as an inline style.)';
			sTemp=L_fpIDselector_TEXT;
			break;
		case 'fpIIS':
			L_fpIIS_TEXT='(IIS: Internet Information Services. Microsoft Web server software that uses Hypertext Transfer Protocol to deliver World Wide Web documents. IIS incorporates various functions for security, allows for CGI programs, and also provides for FTP servers.)';
			sTemp=L_fpIIS_TEXT;
			break;
		case 'fpIncludePagecomponent':
			L_fpIncludePagecomponent_TEXT='(Include Page component: A component in FrontPage that is replaced with the contents of another page in the Web site. This lets you update parts of many pages in one step.)';
			sTemp=L_fpIncludePagecomponent_TEXT;
			break;
		case 'fpInitialpage':
			L_fpInitialpage_TEXT='(initial page: The page that is initially displayed in a frame when a site visitor browses to a frames page containing the frame. In FrontPage, you can assign the initial page to a frame in Page view.)';
			sTemp=L_fpInitialpage_TEXT;
			break;
		case 'FpInlineCascadingStyleSheet':
			L_FpInlineCascadingStyleSheet_TEXT='(inline cascading style sheet: A cascading style sheet that is applied to a single page element, or to a specified sequence of page elements.)';
			sTemp=L_FpInlineCascadingStyleSheet_TEXT;
			break;
		case 'fpInlinestyle':
			L_fpInlinestyle_TEXT='(inline style: A method of applying cascading style sheet properties and values to an element on a page, such as a table. You can use this method even if the page is not linked to an external style sheet or does not contain an embedded style sheet.)';
			sTemp=L_fpInlinestyle_TEXT;
			break;
		case 'fpInterlacedGIF':
			L_fpInterlacedGIF_TEXT='(interlaced GIF: A picture in GIF format that is gradually displayed in a Web browser, showing increasingly detailed versions of the picture until the entire file has finished downloading.)';
			sTemp=L_fpInterlacedGIF_TEXT;
			break;
		case 'fpInternalhyperlink':
			L_fpInternalhyperlink_TEXT='(internal hyperlink: A region in text or graphics that you click to access another page within the same Web site.)';
			sTemp=L_fpInternalhyperlink_TEXT;
			break;
		case 'fpInternetaddress':
			L_fpInternetaddress_TEXT='(Internet address: In a URL, a unique name that identifies an Internet server. An Internet address has two or more parts, separated by periods, as in microsoft.com. Also called host name or network location.)';
			sTemp=L_fpInternetaddress_TEXT;
			break;
		case 'fpIP':
			L_fpIP_TEXT='(IP: Internet Protocol. Internet software that divides data into packets for transmission over the Internet. Computers must run IP to communicate across the Internet.)';
			sTemp=L_fpIP_TEXT;
			break;
		case 'fpIPaddress':
			L_fpIPaddress_TEXT='(IP address: An assigned number used to identify a computer that is connected to the Internet, much in the same way a telephone number identifies a telephone on a telephone network. An IP address is four sets of numbers separated by periods.)';
			sTemp=L_fpIPaddress_TEXT;
			break;
		case 'fpIPaddressmask':
			L_fpIPaddressmask_TEXT='(IP address mask: A range of IP addresses that are defined so that only computers with IP addresses within the range are allowed access to an Internet service. To mask a portion of the IP address, replace it with the asterisk wild card character (*).)';
			sTemp=L_fpIPaddressmask_TEXT;
			break;
		case 'fpISAPI':
			L_fpISAPI_TEXT='(ISAPI: Internet Server Application Programming Interface. A Web server application-development interface, developed by Process Software and Microsoft, that can be used in place of CGI.)';
			sTemp=L_fpISAPI_TEXT;
			break;
		case 'fpJava':
			L_fpJava_TEXT='(Java: A programming language developed by Sun Microsystems, Inc. Applications written in Java are platform-independent, which means they can run on any type of computer, if the Java Virtual Machine is installed on that computer.)';
			sTemp=L_fpJava_TEXT;
			break;
		case 'fpLink':
			L_fpLink_TEXT='(link: Also called hyperlink. A pointer from text, from a picture or a graphic, or from an image map to a page or file on the World Wide Web. On the World Wide Web, hyperlinks are the primary way to browse between pages and among Web sites.)';
			sTemp=L_fpLink_TEXT;
			break;
		case 'FpLinkBar':
			L_FpLinkBar_TEXT='(link bar: A collection of graphic or text buttons representing hyperlinks to pages both within your Web site and to external sites.)';
			sTemp=L_FpLinkBar_TEXT;
			break;
		case 'FpListField':
			L_FpListField_TEXT='(list field: One of a set of elements that comprises an item in a list, document library, discussion board, or survey. On a form, list fields allow users to enter data; in a view, list fields display data.)';
			sTemp=L_FpListField_TEXT;
			break;
		case 'FpListForm':
			L_FpListForm_TEXT='(list form: A set of data-entry fields on a page that are processed on a Web server that is running Windows SharePoint Services. List forms enable users to add, modify, and remove items in lists, document libraries, and surveys.)';
			sTemp=L_FpListForm_TEXT;
			break;
		case 'fplistmembers':
			L_fplistmembers_TEXT='(list members: Valid code elements (properties, methods, events, and objects) for a specific object reference.)';
			sTemp=L_fplistmembers_TEXT;
			break;
		case 'fpLiveweb':
			L_fpLiveweb_TEXT='(live web: A Web site that has been published to a Web server and can be browsed by site visitors. Editing a live Web site with FrontPage lets site visitors immediately see all page updates and changes every time the page is saved.)';
			sTemp=L_fpLiveweb_TEXT;
			break;
		case 'FpLocalhost':
			L_FpLocalhost_TEXT='(localhost: The name that is used to represent the same computer on which a TCP/IP message originates. If you access a server-based Web site by using http://localhost, the request does not actually go out to the Internet.)';
			sTemp=L_FpLocalhost_TEXT;
			break;
		case 'FpManageListsRight':
			L_FpManageListsRight_TEXT='(Manage Lists right: A right that allows a user to add, modify, and remove lists, document libraries, discussion boards, and surveys.)';
			sTemp=L_FpManageListsRight_TEXT;
			break;
		case 'fpMarqueecomponent':
			L_fpMarqueecomponent_TEXT='(Marquee component: A region on a page that displays a horizontally scrolling text message.)';
			sTemp=L_fpMarqueecomponent_TEXT;
			break;
		case 'fpMIMEtype':
			L_fpMIMEtype_TEXT='(MIME type: Multipurpose Internet Mail Extensions type. A method used by Web browsers to associate files of a certain type with applications that display files of that type.)';
			sTemp=L_fpMIMEtype_TEXT;
			break;
		case 'fpMultihosting':
			L_fpMultihosting_TEXT='(multi-hosting: The ability of a Web server to support more than one Internet address and more than one home page. Also called multihoming.)';
			sTemp=L_fpMultihosting_TEXT;
			break;
		case 'fpNamevaluepair':
			L_fpNamevaluepair_TEXT='(name-value pair: The name of a form field and the value of the field at the time the form is submitted. Each field in a form can have one or more name-value pairs, and the form itself can have one or more name-value pairs.)';
			sTemp=L_fpNamevaluepair_TEXT;
			break;
		case 'fpNavigationview':
			L_fpNavigationview_TEXT='(Navigation view: The view in FrontPage that is used to create, display, print, and change the navigation structure of a Web site. Navigation view includes a folder-like view, from which you can drag and drop pages into your site structure.)';
			sTemp=L_fpNavigationview_TEXT;
			break;
		case 'fpNestedframespage':
			L_fpNestedframespage_TEXT='(nested frames page: A frames page containing another frames page inside one of its frames.)';
			sTemp=L_fpNestedframespage_TEXT;
			break;
		case 'fpNews':
			L_fpNews_TEXT='(news: The Internet protocol for retrieving files from an Internet newsgroup. You can create news hyperlinks (news://) in FrontPage.)';
			sTemp=L_fpNews_TEXT;
			break;
		case 'FpNsapi':
			L_FpNsapi_TEXT='(NSAPI: Netscape Server Application Programming Interface. A Web server application development interface developed by Netscape Communications Corporation.)';
			sTemp=L_FpNsapi_TEXT;
			break;
		case 'fpNTLM':
			L_fpNTLM_TEXT='(NTLM: NT LanMan. The Windows NT Challenge/Response authentication protocol. This protocol uses encryption to transmit passwords more securely.)';
			sTemp=L_fpNTLM_TEXT;
			break;
		case 'fpobject':
			L_fpobject_TEXT='(object: In object-oriented programming, a programming unit that includes both routines and data.)';
			sTemp=L_fpobject_TEXT;
			break;
		case 'fpOLE':
			L_fpOLE_TEXT='(OLE: Object Linking and Embedding. A technology for transferring and sharing information among applications. OLE lets an author invoke different editor components to create a compound document.)';
			sTemp=L_fpOLE_TEXT;
			break;
		case 'fpOnelinetextbox':
			L_fpOnelinetextbox_TEXT='(one-line text box: A labeled, single-line form field into which site visitors can type text.)';
			sTemp=L_fpOnelinetextbox_TEXT;
			break;
		case 'fpPage':
			L_fpPage_TEXT='(page: A single document in a Web site written in HTML. You can use FrontPage to create and modify pages without having to know HTML.)';
			sTemp=L_fpPage_TEXT;
			break;
		case 'fpPagebanner':
			L_fpPagebanner_TEXT='(page banner: A section of a Web page containing a graphic element and text, such as the page title. Page banners are usually displayed at the top of a Web page.)';
			sTemp=L_fpPagebanner_TEXT;
			break;
		case 'fpPagetemplate':
			L_fpPagetemplate_TEXT='(page template: A predesigned, generic Web page that you can use to create new custom pages. Some of the page templates in FrontPage provide typical page content, while others provide common page layouts.)';
			sTemp=L_fpPagetemplate_TEXT;
			break;
		case 'fpPagetitle':
			L_fpPagetitle_TEXT='(page title: A descriptive text string identifying a page.)';
			sTemp=L_fpPagetitle_TEXT;
			break;
		case 'fpPageview':
			L_fpPageview_TEXT='(Page view: In FrontPage, the view you use to create, edit, and preview Web pages.)';
			sTemp=L_fpPageview_TEXT;
			break;
		case 'fpParentpage':
			L_fpParentpage_TEXT='(parent page: In FrontPage, a page in a Web page that is part of the navigation structure of the Web page and is linked to one or more pages on the child level. A page on the child level is accessed from its parent page.)';
			sTemp=L_fpParentpage_TEXT;
			break;
		case 'fpParentweb':
			L_fpParentweb_TEXT='(parent web: In a hierarchical structure, the Web site immediately above the current Web site.)';
			sTemp=L_fpParentweb_TEXT;
			break;
		case 'fpPCD':
			L_fpPCD_TEXT='(PCD: A graphics file format developed by Eastman Kodak Company. FrontPage can import PCD files. Stands for Photo CD.)';
			sTemp=L_fpPCD_TEXT;
			break;
		case 'fpPCT':
			L_fpPCT_TEXT='(PCT: Personal Communications Technology. An enhanced version of Secure Sockets Layer (SSL), which is a protocol for transmitting information over the Internet more securely.)';
			sTemp=L_fpPCT_TEXT;
			break;
		case 'fpPCX':
			L_fpPCX_TEXT='(PCX: A graphics file format that compresses the graphic\'s data with RLE-type compression, used by early versions of Windows Paintbrush. FrontPage can import PCX files.)';
			sTemp=L_fpPCX_TEXT;
			break;
		case 'fpPicture':
			L_fpPicture_TEXT='(picture or image: A graphics file that can be inserted on a Web page and displayed in a browser. FrontPage lets you import several graphics formats. Imported graphics are converted to GIF format or JPEG format when the page is saved.)';
			sTemp=L_fpPicture_TEXT;
			break;
		case 'fpPlugin':
			L_fpPlugin_TEXT='(plug-in: One of a set of software modules that integrate into Web browsers to offer a range of interactive and multimedia capabilities.)';
			sTemp=L_fpPlugin_TEXT;
			break;
		case 'fpPort':
			L_fpPort_TEXT='(port: One of the network input/output channels of a computer running TCP/IP. On the World Wide Web, it usually refers to the port number a server is running on. One computer can have many Web servers running on it, but only one server can run on a port.)';
			sTemp=L_fpPort_TEXT;
			break;
		case 'FpPositionBox':
			L_FpPositionBox_TEXT='(position box: In Design view, a rectangle representing a page area with CSS positioning applied. The position box, which may contain any page elements, is visible only when Show All is selected on the Standard toolbar.)';
			sTemp=L_FpPositionBox_TEXT;
			break;
		case 'FpPositioning':
			L_FpPositioning_TEXT='(positioning: Positioning is another way to place elements, such as text and graphics, on a page. Positioning lets the page author control the exact location and layer order of a page element.)';
			sTemp=L_FpPositioning_TEXT;
			break;
		case 'fpPPP':
			L_fpPPP_TEXT='(PPP: Point-to-Point Protocol. An Internet standard for transmitting data over serial links between computers.)';
			sTemp=L_fpPPP_TEXT;
			break;
		case 'FpPrimaryKey':
			L_FpPrimaryKey_TEXT='(primary key: A field (column) that uniquely identifies each record in a table. A primary key cannot allow Null values and must always have a unique index. A primary key is used to relate a table to foreign keys in other tables.)';
			sTemp=L_FpPrimaryKey_TEXT;
			break;
		case 'FpProductionWebServer':
			L_FpProductionWebServer_TEXT='(production Web server: A Web server that hosts a live Web site. A production Web server can be browsed by an Internet or intranet audience.)';
			sTemp=L_FpProductionWebServer_TEXT;
			break;
		case 'fpProgressiveJPEG':
			L_fpProgressiveJPEG_TEXT='(progressive JPEG: An enhancement to the JPEG graphics file format that gradually displays a photo-realistic picture in a Web browser, showing increasingly detailed versions of the picture until the entire file has finished downloading.)';
			sTemp=L_fpProgressiveJPEG_TEXT;
			break;
		case 'fpProperties':
			L_fpProperties_TEXT='(properties: In FrontPage, the characteristics of an item in the active Web site, such as the title and URL of a site. You can also specify properties for page elements such as tables, graphics, and active elements.)';
			sTemp=L_fpProperties_TEXT;
			break;
		case 'fpProxyserver':
			L_fpProxyserver_TEXT='(proxy server: An Internet server that acts as a firewall, mediating traffic between a protected network and the Internet.)';
			sTemp=L_fpProxyserver_TEXT;
			break;
		case 'fpRAS':
			L_fpRAS_TEXT='(RAS: The raster graphics file format developed by Sun Microsystems. FrontPage can import RAS files.)';
			sTemp=L_fpRAS_TEXT;
			break;
		case 'fpreferringdomain':
			L_fpreferringdomain_TEXT='(referring domain: On the Internet and intranets, the address of a network location from which site visitors follow a hyperlink to your Web site.)';
			sTemp=L_fpreferringdomain_TEXT;
			break;
		case 'fpRegistereduser':
			L_fpRegistereduser_TEXT='(registered user: A visitor to a Web site whose name and password have been recorded within the site. In FrontPage, you can register site visitors for your Web site with the Registration form handler.)';
			sTemp=L_fpRegistereduser_TEXT;
			break;
		case 'fpRegistrationformhandler':
			L_fpRegistrationformhandler_TEXT='(Registration form handler: In FrontPage, a form handler that allows site visitors to automatically register themselves for access to a service implemented as a Web site.)';
			sTemp=L_fpRegistrationformhandler_TEXT;
			break;
		case 'fpRelativeURL':
			L_fpRelativeURL_TEXT='(relative URL: The Internet address of a page relative to the Internet address of the current page. For example, the relative URL Doc/Sample.htm refers to the page Sample.htm in the folder Doc, below the current folder.)';
			sTemp=L_fpRelativeURL_TEXT;
			break;
		case 'fpReportsview':
			L_fpReportsview_TEXT='(Reports view: The view in FrontPage that allows you to analyze the contents a Web site. You can calculate the total size of the files, show which files aren\'t linked to any other files, identify slow or outdated pages, and so on.)';
			sTemp=L_fpReportsview_TEXT;
			break;
		case 'fpResample':
			L_fpResample_TEXT='(resample: Changing the pixel dimensions (and therefore the physical file size) of a picture or a graphic. Graphics can be resampled down (the number of pixels decreased) or resampled up (the number of pixels increased).)';
			sTemp=L_fpResample_TEXT;
			break;
		case 'FpRights':
			L_FpRights_TEXT='(rights: Permission to perform specific actions with site content, such as viewing or modifying a page. Rights are enabled or disabled for a user site group. Users can perform only those actions allowed by the rights assigned to their site group.)';
			sTemp=L_FpRights_TEXT;
			break;
		case 'FpRule':
			L_FpRule_TEXT='(rule: A set of conditions, actions, and exceptions that run in a document library. For example, all documents older than a year (condition) can be set to a status of \"Expired\" (action), unless they were modified within the last month (exception).)';
			sTemp=L_FpRule_TEXT;
			break;
		case 'fpSaveResultsformhandler':
			L_fpSaveResultsformhandler_TEXT='(Save Results form handler: In FrontPage, a form handler that gathers information from a form. When a form is submitted, this form handler adds the information to a file on the server in the format you specify or sends it to an e-mail address.)';
			sTemp=L_fpSaveResultsformhandler_TEXT;
			break;
		case 'fpScheduledIncludePagecomponent':
			L_fpScheduledIncludePagecomponent_TEXT='(Scheduled Include Page component: A component in FrontPage that is replaced with the contents of a file in the current Web site for a specified time period. This is useful for information that has a limited lifetime, such as a new product release.)';
			sTemp=L_fpScheduledIncludePagecomponent_TEXT;
			break;
		case 'fpScheduledPicturecomponent':
			L_fpScheduledPicturecomponent_TEXT='(Scheduled Picture component: A component in FrontPage that is replaced on the page by a graphic for a specified time period. This is useful for information that has a limited lifetime, such as the announcement of a new product or service.)';
			sTemp=L_fpScheduledPicturecomponent_TEXT;
			break;
		case 'fpScrollingtextbox':
			L_fpScrollingtextbox_TEXT='(scrolling text box: A labeled, multiple-line form field in which site visitors can type one or more lines of text.)';
			sTemp=L_fpScrollingtextbox_TEXT;
			break;
		case 'fpSearchFormcomponent':
			L_fpSearchFormcomponent_TEXT='(Search Form component: A component in FrontPage that creates a form that provides full-text searching capability in your Web site.)';
			sTemp=L_fpSearchFormcomponent_TEXT;
			break;
		case 'FpServerbasedWebSite':
			L_FpServerbasedWebSite_TEXT='(server-based Web site: A Web site hosted by a Web server, such as Microsoft Internet Information Server (MIIS).)';
			sTemp=L_FpServerbasedWebSite_TEXT;
			break;
		case 'fpServersideinclude':
			L_fpServersideinclude_TEXT='(server-side include: A feature provided by some Web servers that automatically inserts text onto pages when they are fetched by a Web browser.)';
			sTemp=L_fpServersideinclude_TEXT;
			break;
		case 'fpSharedborders':
			L_fpSharedborders_TEXT='(shared borders: Page regions reserved for content that you want to appear consistently on all your Web pages. Shared borders usually contain link bars, which contain hyperlinks to the other pages and locations.)';
			sTemp=L_fpSharedborders_TEXT;
			break;
		case 'fpsitegroup':
			L_fpsitegroup_TEXT='(site group: A collection of rights that can be assigned to a user account. You can use the default site groups, modify them, or create your own custom site groups.)';
			sTemp=L_fpsitegroup_TEXT;
			break;
		case 'fpSiteSummaryreport':
			L_fpSiteSummaryreport_TEXT='(Site Summary report: In FrontPage, the default report displayed in Reports view. A site summary is a combination of several reports that identify unlinked files, slow pages, unverified hyperlinks, broken hyperlinks, page component errors, and so on.)';
			sTemp=L_fpSiteSummaryreport_TEXT;
			break;
		case 'fpSlowpages':
			L_fpSlowpages_TEXT='(slow pages: Pages that take a long time (30 seconds or more) to download in a Web browser. In FrontPage, you can identify slow pages in your Web site by using Reports view.)';
			sTemp=L_fpSlowpages_TEXT;
			break;
		case 'fpStagingweb':
			L_fpStagingweb_TEXT='(staging web: A local Web site maintained on a file system or local Web server that currently cannot be browsed by site visitors. These Web sites allow authors and workgroups to make changes or updates to Web sites before they are published.)';
			sTemp=L_fpStagingweb_TEXT;
			break;
		case 'FpStagingWebServer':
			L_FpStagingWebServer_TEXT='(staging Web server: A Web server where you publish and test your Web site before putting it on a production server. A staging Web server cannot be browsed by an Internet or intranet audience.)';
			sTemp=L_FpStagingWebServer_TEXT;
			break;
		case 'fpStyle':
			L_fpStyle_TEXT='(style: Styles are used to control the font, alignment, and spacing of text; appearance of background pages; and other HTML attributes. A collection of styles is called a style sheet.)';
			sTemp=L_fpStyle_TEXT;
			break;
		case 'fpsubsite':
			L_fpsubsite_TEXT='(subsite: A named subdirectory of a Web site that is also a complete site. A subsite can have unique administration, authoring, and browsing permissions.)';
			sTemp=L_fpsubsite_TEXT;
			break;
		case 'fpSubstitutioncomponent':
			L_fpSubstitutioncomponent_TEXT='(Substitution component: A component in FrontPage that is replaced by the value of a selected page or Web site variable.)';
			sTemp=L_fpSubstitutioncomponent_TEXT;
			break;
		case 'fpSubweb':
			L_fpSubweb_TEXT='(subsite (formally known as subweb): A named subdirectory of the top level site that is a complete FrontPage-based Web site. Each subsite can have independent administration, authoring and browsing permissions from the top level site and other subsites.)';
			sTemp=L_fpSubweb_TEXT;
			break;
		case 'FpSurvey':
			L_FpSurvey_TEXT='(survey: Enables users to respond to a set of questions specified by the creator of the survey. Results are tallied in a graphical summary. Requires a Web server that is running SharePoint Services.)';
			sTemp=L_FpSurvey_TEXT;
			break;
		case 'FpSystemDsn':
			L_FpSystemDsn_TEXT='(system DSN: A system data source name is specific to a local computer. The system or any user with privileges can use a data source that is set up with a system DSN.)';
			sTemp=L_FpSystemDsn_TEXT;
			break;
		case 'fpTable':
			L_fpTable_TEXT='(table: One or more rows of cells used to organize the layout of a page or to arrange data systematically. In FrontPage, you can place anything in a table cell, including text, graphics, and forms.)';
			sTemp=L_fpTable_TEXT;
			break;
		case 'fpTableofContentscomponent':
			L_fpTableofContentscomponent_TEXT='(Table of Contents component: A component in FrontPage that creates an outline of your Web site, with hyperlinks to each page. The Table of Contents component updates this outline each time the contents of the site changes.)';
			sTemp=L_fpTableofContentscomponent_TEXT;
			break;
		case 'fpTask':
			L_fpTask_TEXT='(task: An item associated with a Web site in FrontPage, representing an action you need to do to complete or maintain the site. Some tasks are automatically generated by wizards in FrontPage. You can also add your own tasks.)';
			sTemp=L_fpTask_TEXT;
			break;
		case 'fpTasksview':
			L_fpTasksview_TEXT='(Tasks view: The view in FrontPage that maintains a list of the tasks required to complete or maintain a Web site. Views in FrontPage provide different ways of looking at the information in your site, so that you can effectively manage your site.)';
			sTemp=L_fpTasksview_TEXT;
			break;
		case 'FpTcpip':
			L_FpTcpip_TEXT='(TCP/IP: Transmission Control Protocol/Internet Protocol; a protocol for communication between computers. This is the standard for communication over networks, including the Internet.)';
			sTemp=L_FpTcpip_TEXT;
			break;
		case 'fpTemplate':
			L_fpTemplate_TEXT='(template: A set of predesigned formats for text and graphics on which new Web pages and sites can be based. After a page or site is created using a template, you can customize it.)';
			sTemp=L_fpTemplate_TEXT;
			break;
		case 'fpTheme':
			L_fpTheme_TEXT='(theme: A theme applies a set of coordinated graphic elements to a document, page, or across all pages in a Web site. Themes can consist of designs and color schemes for fonts, link bars, and other page elements.)';
			sTemp=L_fpTheme_TEXT;
			break;
		case 'fptoplevelsite':
			L_fptoplevelsite_TEXT='(top level site: The uppermost folder in a hierarchy of Web site folders. A top level site can be hosted on a Web server, a virtual server network, or a local computer hard disk.)';
			sTemp=L_fptoplevelsite_TEXT;
			break;
		case 'FpUniversalDataLink':
			L_FpUniversalDataLink_TEXT='(UDL: A Universal Data Link contains OLE DB data source object definitions and allows management and loading of connections to OLE DB data sources. The file has the extension .udl.)';
			sTemp=L_FpUniversalDataLink_TEXT;
			break;
		case 'fpurl':
			L_fpurl_TEXT='(Uniform Resource Locator (URL): An address that specifies a protocol (such as HTTP or FTP) and a location of an object, document, World Wide Web page, or other destination on the Internet or an intranet. For example: http://www.example.com/.)';
			sTemp=L_fpurl_TEXT;
			break;
		case 'FpUsageAnalysis':
			L_FpUsageAnalysis_TEXT='(usage analysis: Data collected to evaluate how a Web site is being used, such as visitor user names, how often each page was visited, and the types of Web browsers used.)';
			sTemp=L_FpUsageAnalysis_TEXT;
			break;
		case 'Fpuserdefinedstyle':
			L_Fpuserdefinedstyle_TEXT='(user-defined style: A new style or a modification to a built-in style. User-defined styles always contain cascading style sheet formatting attributes.)';
			sTemp=L_Fpuserdefinedstyle_TEXT;
			break;
		case 'FpViewBar':
			L_FpViewBar_TEXT='(view bar: A region on a page that displays a list, or library that enables you  to select among different views.)';
			sTemp=L_FpViewBar_TEXT;
			break;
		case 'fpviewitemsright':
			L_fpviewitemsright_TEXT='(View Items right: A right that allows a user to view items in a list, document library, discussion board, or survey. They cannot add, modify, or remove the items.)';
			sTemp=L_fpviewitemsright_TEXT;
			break;
		case 'fpVirtualserver':
			L_fpVirtualserver_TEXT='(virtual server: One of multiple Web sites running on the same server, each with a unique domain name and IP address. A Web server that supports virtual servers is called a multihosting Web server.)';
			sTemp=L_fpVirtualserver_TEXT;
			break;
		case 'fpvisit':
			L_fpvisit_TEXT='(visit: In Web site usage reports, a value that indicates that a site visitor has accessed your Web site and viewed one or more files before following a hyperlink to another site or closing the browser.)';
			sTemp=L_fpvisit_TEXT;
			break;
		case 'fpWashout':
			L_fpWashout_TEXT='(wash out: A graphic-editing effect available in Page view in FrontPage that creates a low-resolution, high-contrast version of the graphic.)';
			sTemp=L_fpWashout_TEXT;
			break;
		case 'fpWatermark':
			L_fpWatermark_TEXT='(watermark: A graphic that appears on the backgrounds of pages in a Web site to identify the pages, but does not scroll as the page scrolls. Not all Web browsers support watermarks.)';
			sTemp=L_fpWatermark_TEXT;
			break;
		case 'fpWeb':
			L_fpWeb_TEXT='(Web: A home page and its associated pages, graphics, documents, multimedia, and other files stored on a Web server or on a computer hard drive. Same as Web site.)';
			sTemp=L_fpWeb_TEXT;
			break;
		case 'fpwebbaseddistributedauthoringandversioningwebdav':
			L_fpwebbaseddistributedauthoringandversioningwebdav_TEXT='(WebDAV: An application protocol for publishing and managing files on the World Wide Web. It provides support for storing information about a file, so authors can change a file and its properties without overwriting other changes to that file.)';
			sTemp=L_fpwebbaseddistributedauthoringandversioningwebdav_TEXT;
			break;
		case 'fpWebname':
			L_fpWebname_TEXT='(Web name: A Web name in FrontPage corresponds to a folder name on a Web server, and is subject to the length, character restrictions, and case sensitivity of that server.)';
			sTemp=L_fpWebname_TEXT;
			break;
		case 'fpWebstructure':
			L_fpWebstructure_TEXT='(Web site structure: The set of relationships among the pages in a FrontPage-based Web site as defined in Navigation view.  A well-defined structure gives a site visitor a sense of position in a Web site.)';
			sTemp=L_fpWebstructure_TEXT;
			break;
		case 'FpWebview':
			L_FpWebview_TEXT='(WebView: One of the views available in Open and Save dialog boxes. Displays a Web page with hyperlinks for opening and saving files in document libraries.)';
			sTemp=L_FpWebview_TEXT;
			break;
		case 'FpWinsock':
			L_FpWinsock_TEXT='(winsock: Short for Windows sockets. An application programming interface standard for software that provides a TCP/IP interface on computers running Windows.)';
			sTemp=L_FpWinsock_TEXT;
			break;
		case 'FpWysiwig':
			L_FpWysiwig_TEXT='(WYSIWYG: Acronym for What You See Is What You Get. Allows you to view a document as it will appear in the final product and to directly edit the text, graphics, and other elements within that view.)';
			sTemp=L_FpWysiwig_TEXT;
			break;

		// Publisher

		case 'ofCropmarks':
			L_ofCropmarks_TEXT='(crop marks: Marks that show where a publication page will be trimmed. Crop marks show only when the page has been printed to a paper size that is larger than the page.)';
			sTemp=L_ofCropmarks_TEXT;
			break;
		case 'pbascender':
			L_pbascender_TEXT='(ascender: the part of a lowercase Latin letter that extends above the main body, or x-height, of the letters b, d, f, h, k, l and t.)';
			sTemp=L_pbascender_TEXT;
			break;
		case 'pbascenderline':
			L_pbascenderline_TEXT='(ascender line: the invisible line that marks the typical height of the ascender of the lowercase Latin letters b, d, f, h, k, l, and t.)';
			sTemp=L_pbascenderline_TEXT;
			break;
		case 'PbAttributes':
			L_PbAttributes_TEXT='(attribute: An object or text feature, such as line fill or text color, that you can manipulate by using drawing tools and menu commands.)';
			sTemp=L_PbAttributes_TEXT;
			break;
		case 'pbautoflow':
			L_pbautoflow_TEXT='(autoflow: The automatic flowing of text from one frame to another.)';
			sTemp=L_pbautoflow_TEXT;
			break;
		case 'pbBaseline':
			L_pbBaseline_TEXT='(baseline: The invisible line on which a line of type rests.)';
			sTemp=L_pbBaseline_TEXT;
			break;
		case 'pbbaselineguides':
			L_pbbaselineguides_TEXT='(baseline guides: Guides to which lines of text can be aligned to provide a uniform appearance between columnsÂ  of text.)';
			sTemp=L_pbbaselineguides_TEXT;
			break;
		case 'PbBleeds':
			L_PbBleeds_TEXT='(bleed: the extent to which a picture runs off the printed page.)';
			sTemp=L_PbBleeds_TEXT;
			break;
		case 'pbBodytext':
			L_pbBodytext_TEXT='(body text: The text that forms the major content of a publication. Does not include titles, headlines, pull quotes, and captions, for example.)';
			sTemp=L_pbBodytext_TEXT;
			break;
		case 'pbBond':
			L_pbBond_TEXT='(bond: Lightweight paper commonly used for letterhead and other business publications.)';
			sTemp=L_pbBond_TEXT;
			break;
		case 'pbcapheight':
			L_pbcapheight_TEXT='(cap height: the typical height of an uppercase Latin letter.)';
			sTemp=L_pbcapheight_TEXT;
			break;
		case 'pbcapline':
			L_pbcapline_TEXT='(cap line: the invisible line that marks the typical height of an uppercase Latin letter.)';
			sTemp=L_pbcapline_TEXT;
			break;
		case 'pbcatalogmerge':
			L_pbcatalogmerge_TEXT='(catalog merge: The process of combining information from a data source with a template to create pages that display multiple records per page. You can add the merged pages to an existing publication or create a new publication. )';
			sTemp=L_pbcatalogmerge_TEXT;
			break;
		case 'pbcatalogmergearea':
			L_pbcatalogmergearea_TEXT='(catalog merge area: The area in a catalog merge template into which merge fields are inserted. When a merge is completed, data from a data source populates each field, and the catalog merge area will repeat and display multiple records on each page.)';
			sTemp=L_pbcatalogmergearea_TEXT;
			break;
		case 'pbcenterlinetrap':
			L_pbcenterlinetrap_TEXT='(centerline trap: The small overlap created where two differently colored objects that are close in luminance abut on a printed page.)';
			sTemp=L_pbcenterlinetrap_TEXT;
			break;
		case 'pbchoke':
			L_pbchoke_TEXT='(choke: A small overlap that decreases the knockout of the lower of two differently colored, abutting objects.)';
			sTemp=L_pbchoke_TEXT;
			break;
		case 'PbCmyk':
			L_PbCmyk_TEXT='(CMYK: A color model for commercial printing that produces a wide range of colors by mixing varying percentages of cyan, magenta, yellow, and black inks.)';
			sTemp=L_PbCmyk_TEXT;
			break;
		case 'PbColorModel':
			L_PbColorModel_TEXT='(color model: a way of defining color both for onscreen display and print. Colors can be described by using several different color models: HSV (hue, saturation, and value); CMY (cyan, magenta, and yellow); and RGB (red, green, and blue).)';
			sTemp=L_PbColorModel_TEXT;
			break;
		case 'pbColorpalette':
			L_pbColorpalette_TEXT='(color palette: A collection of colors that are available when you want to apply color to a fill, line, or text. The default Publisher color palette contains 40 colors, but will change as you add colors, apply color schemes, or change your color setup.)';
			sTemp=L_pbColorpalette_TEXT;
			break;
		case 'pbColorscheme':
			L_pbColorscheme_TEXT='(color scheme: A predefined set of harmonized colors that you can apply to text and objects. Text and objects with an applied scheme color will change automatically when you switch to a new color scheme or modify the current color scheme.)';
			sTemp=L_pbColorscheme_TEXT;
			break;
		case 'pbcolorseparation':
			L_pbcolorseparation_TEXT='(color separation: The process of separating the colors in a color image so that they are printed on separate press plates for each process ink (cyan, magenta, yellow, and black) and for any spot color inks used by a commercial printer.)';
			sTemp=L_pbcolorseparation_TEXT;
			break;
		case 'pbcolumnguides':
			L_pbcolumnguides_TEXT='(column guides: Vertical guides that are used to divide a publication page into two or more columns.)';
			sTemp=L_pbcolumnguides_TEXT;
			break;
		case 'pbcontinuednotice':
			L_pbcontinuednotice_TEXT='(Continued notice: A note at the beginning or end of a text box indicating that the text is continued from or continues on a different page.)';
			sTemp=L_pbcontinuednotice_TEXT;
			break;
		case 'pbCopyfitting':
			L_pbCopyfitting_TEXT='(copyfitting: The resizing of text to fit into an allotted amount of space.)';
			sTemp=L_pbCopyfitting_TEXT;
			break;
		case 'PbCyans':
			L_PbCyans_TEXT='(cyan: A color that is essential to the CMY color model and the CMYK color-mxing method. The CMY starts with white and subtracts percentages of cyan, magenta, and yellow to create different colors.)';
			sTemp=L_PbCyans_TEXT;
			break;
		case 'pbdatasource':
			L_pbdatasource_TEXT='(default text: Sample text for Web page visitors. This text will appear in the Web form control, assisting visitors in entering information.)';
			sTemp=L_pbdatasource_TEXT;
			break;
		case 'PbDataSources':
			L_PbDataSources_TEXT='(data source: A file that contains information that can be merged into a publication. For example, a list of names and addresses, or paths to pictures you want to use in a mail or catalog merge. You must connect to a data source to perform a merge.)';
			sTemp=L_PbDataSources_TEXT;
			break;
		case 'PbdefXYZAxes':
			L_PbdefXYZAxes_TEXT='(x, y, and z axes: The three mutually perpendicular lines that are used to locate a point in a Cartesian coordinate system. In a Microsoft Office drawing layer, x is horizontal, y is vertical, and z is perpendicular to the document plane.)';
			sTemp=L_PbdefXYZAxes_TEXT;
			break;
		case 'pbdescender':
			L_pbdescender_TEXT='(descender: The part of a lowercase letter in Latin text that extends below the baseline; for example, the lower part of the letters g, j, p, q, and y.)';
			sTemp=L_pbdescender_TEXT;
			break;
		case 'pbdescenderline':
			L_pbdescenderline_TEXT='(descender line: the invisible line that marks the extent below the baseline of the bottom part of the lowercase Latin letters g, j, p, q, and y.)';
			sTemp=L_pbdescenderline_TEXT;
			break;
		case 'pbDesignelement':
			L_pbDesignelement_TEXT='(design element: Any object in your publication that contributes to the visual impact of the design. The Design Gallery contains many premade elements.)';
			sTemp=L_pbDesignelement_TEXT;
			break;
		case 'PbDrawingObject':
			L_PbDrawingObject_TEXT='(drawing object: any graphic that you can draw or insert, and change and enhance. Drawing objects include Custom Shapes, curves, lines, and WordArt drawing objects.)';
			sTemp=L_PbDrawingObject_TEXT;
			break;
		case 'pbElectronicform':
			L_pbElectronicform_TEXT='(electronic form: An interactive form on a Web site that you fill out and send back to the owner of the Web site or a Web server.)';
			sTemp=L_pbElectronicform_TEXT;
			break;
		case 'pbembeddedpicture':
			L_pbembeddedpicture_TEXT='(embedded picture: A picture that is stored within a publication rather than being linked to a source file outside of the publication.)';
			sTemp=L_pbembeddedpicture_TEXT;
			break;
		case 'pbEmdash':
			L_pbEmdash_TEXT='(em dash: A punctuation mark (â€”), based on the width of an uppercase M, used primarily to set off sentence elements.)';
			sTemp=L_pbEmdash_TEXT;
			break;
		case 'pbencapsulatedpostscripteps':
			L_pbencapsulatedpostscripteps_TEXT='(EPS: A graphic file format that is created using the PostScript page description language. EPS graphics are meant to be printed to PostScript compatible printers.)';
			sTemp=L_pbencapsulatedpostscripteps_TEXT;
			break;
		case 'pbEndash':
			L_pbEndash_TEXT='(en dash: A punctuation mark (â€“), based on the width of an uppercase N, used primarily as a connecting element, especially with numbers.)';
			sTemp=L_pbEndash_TEXT;
			break;
		case 'pbExtension':
			L_pbExtension_TEXT='(extension: The last characters following a period in a file name. These characters usually indicate the kind of information that is stored in the file.)';
			sTemp=L_pbExtension_TEXT;
			break;
		case 'PbFieldCode':
			L_PbFieldCode_TEXT='(field code: a placeholder text in your publication where information from a data source (such as a name or address) is inserted. You can format, copy, move, or delete a field code.)';
			sTemp=L_PbFieldCode_TEXT;
			break;
		case 'PbFontEmbedding':
			L_PbFontEmbedding_TEXT='(font embedding: To insert a font into the publication. Once the font is embedded, the information becomes part of the publication.)';
			sTemp=L_PbFontEmbedding_TEXT;
			break;
		case 'pbFontmanager':
			L_pbFontmanager_TEXT='(font manager: A software program, also referred to as \"type manager,\" that helps you increase or decrease the sets of available fonts.)';
			sTemp=L_pbFontmanager_TEXT;
			break;
		case 'pbfontmetrics':
			L_pbfontmetrics_TEXT='(font metrics: the values that define the physical space occupied by a computer font character, on screen or paper, and its relation to other characters in a line of text.)';
			sTemp=L_pbfontmetrics_TEXT;
			break;
		case 'pbFontsubsetting':
			L_pbFontsubsetting_TEXT='(font subsetting: Embedding a limited number of characters specific to one font, reducing file size.)';
			sTemp=L_pbFontsubsetting_TEXT;
			break;
		case 'pbFontsubstitution':
			L_pbFontsubstitution_TEXT='(font substitution: A substitution that occurs when Windows or your printer uses a font similar to the one you used in your publication to display or print your publication.)';
			sTemp=L_pbFontsubstitution_TEXT;
			break;
		case 'pbFormcontrol':
			L_pbFormcontrol_TEXT='(form control: On a Web site, an individual box or button with which you enter information on an electronic form.)';
			sTemp=L_pbFormcontrol_TEXT;
			break;
		case 'pbFormdatafile':
			L_pbFormdatafile_TEXT='(form data file: The file in which information gathered from electronic forms is stored.)';
			sTemp=L_pbFormdatafile_TEXT;
			break;
		case 'pbFrame':
			L_pbFrame_TEXT='(frame: A space, shown onscreen as a box, that contains a particular element of your publication. Types of frames include text boxes, table frames, and picture frames.)';
			sTemp=L_pbFrame_TEXT;
			break;
		case 'pbgamut':
			L_pbgamut_TEXT='(gamut: The range of possible colors that can be produced by a particular color model, such as RGB or CMYK.)';
			sTemp=L_pbgamut_TEXT;
			break;
		case 'pbGraphic':
			L_pbGraphic_TEXT='(graphic: A nontext design element, such as a photograph, drawing, or shape.)';
			sTemp=L_pbGraphic_TEXT;
			break;
		case 'pbGraphicregion':
			L_pbGraphicregion_TEXT='(graphic region: The area on a Web page where graphics overlap.)';
			sTemp=L_pbGraphicregion_TEXT;
			break;
		case 'pbGraphicsfilter':
			L_pbGraphicsfilter_TEXT='(graphics filter: A program that transforms a picture stored in one file format to another format so that it can be displayed in a specific graphics program.)';
			sTemp=L_pbGraphicsfilter_TEXT;
			break;
		case 'pbGuides':
			L_pbGuides_TEXT='(guides: Nonprinting lines that are used to position objects precisely. Types of guides include margin guides, column guides, row guides, and ruler guides.)';
			sTemp=L_pbGuides_TEXT;
			break;
		case 'pbGutter':
			L_pbGutter_TEXT='(gutter: The blank area between two or more columns of text or between two facing pages in a publication.)';
			sTemp=L_pbGutter_TEXT;
			break;
		case 'pbhalftone':
			L_pbhalftone_TEXT='(halftone: a printed reproduction, typically of a photographic image, that uses a screen of dots whose size varies depending on the density of the image.)';
			sTemp=L_pbhalftone_TEXT;
			break;
		case 'pbHandle':
			L_pbHandle_TEXT='(handle: One of several small shapes displayed around an object when the object is selected. You can move or reshape an object by clicking on a handle and dragging.)';
			sTemp=L_pbHandle_TEXT;
			break;
		case 'pbHangingquotation':
			L_pbHangingquotation_TEXT='(hanging quotation: Giant quotation marks used to frame a pull quote.)';
			sTemp=L_pbHangingquotation_TEXT;
			break;
		case 'pbhsl':
			L_pbhsl_TEXT='(HSL: A color model that defines a color by three values: Hue, the color itself; Saturation, the purity of the color; and Luminance, the amount of light that is either reflected or absorbed by the color.)';
			sTemp=L_pbhsl_TEXT;
			break;
		case 'pbHTMLcodefragment':
			L_pbHTMLcodefragment_TEXT='(HTML code fragment: HTML code that you add to your Web page to create features such as a script, a counter, or a scrolling marquee.)';
			sTemp=L_pbHTMLcodefragment_TEXT;
			break;
		case 'pbImageColorMatching':
			L_pbImageColorMatching_TEXT='(ICM:  A program that runs on printers and computers to identify colors that most closely match on both systems. ICM give you a better idea of what the final colors in your publication will look like.)';
			sTemp=L_pbImageColorMatching_TEXT;
			break;
		case 'pbimagesetter':
			L_pbimagesetter_TEXT='(imagesetter: A high resolution output device that prints to paper or film, or directly to a press plate. Publications that will be commercially printed are usually output from an imagesetter as the first step toward going to press.)';
			sTemp=L_pbimagesetter_TEXT;
			break;
		case 'pbIndent':
			L_pbIndent_TEXT='(indent: Blank space added to the left of text in addition to what the left margin provide.)';
			sTemp=L_pbIndent_TEXT;
			break;
		case 'pbinlineobject':
			L_pbinlineobject_TEXT='(inline object: A picture or other object placed within a line of text that retains its place next to adjacent text when text is added or deleted. An inline object can move both horizontally and vertically with adjacent text, or just vertically.)';
			sTemp=L_pbinlineobject_TEXT;
			break;
		case 'pbInsertionpoint':
			L_pbInsertionpoint_TEXT='(insertion point: The place in your publication where the cursor appears after a mouse click.)';
			sTemp=L_pbInsertionpoint_TEXT;
			break;
		case 'pbKnockout':
			L_pbKnockout_TEXT='(knockout: The process of eliminating background color behind an object in the foreground.)';
			sTemp=L_pbKnockout_TEXT;
			break;
		case 'pbLayout':
			L_pbLayout_TEXT='(layout: The overall arrangement of text, graphics, and other objects on the pages of your publication.)';
			sTemp=L_pbLayout_TEXT;
			break;
		case 'pbLeading':
			L_pbLeading_TEXT='(leading: The space between lines of text measured from baseline to baseline.)';
			sTemp=L_pbLeading_TEXT;
			break;
		case 'pbLinebreak':
			L_pbLinebreak_TEXT='(line break: A nonprinting character that signifies the end of a line of text.)';
			sTemp=L_pbLinebreak_TEXT;
			break;
		case 'pblineperinchlpi':
			L_pblineperinchlpi_TEXT='(LPI: The measurement of the line screen frequency of a halftone screen that is used when printing a bitmap picture. For commercial printing, using higher lines per inch typically results in a more finely detailed picture.)';
			sTemp=L_pblineperinchlpi_TEXT;
			break;
		case 'pblinescreenangle':
			L_pblinescreenangle_TEXT='(line screen angle: The angle of the lines of dots for each of the halftone screens that are used in process color printing. The standard angles are 15 degrees for cyan, 75 degrees for magenta, 0 degrees for yellow, and 45 degrees for black.)';
			sTemp=L_pblinescreenangle_TEXT;
			break;
		case 'pblinescreenfrequency':
			L_pblinescreenfrequency_TEXT='(line screen frequency: The fineness or coarseness of a halftone screen represented by lines per inch (LPI). The higher the LPI, the finer the dots used in a halftone screen. A finer halftone screen shows greater picture detail.)';
			sTemp=L_pblinescreenfrequency_TEXT;
			break;
		case 'pblinespacing':
			L_pblinespacing_TEXT='(line spacing: The amount of space from the bottom of one line of text to the bottom of the next line. Also called leading.)';
			sTemp=L_pblinespacing_TEXT;
			break;
		case 'pbLink':
			L_pbLink_TEXT='(link: Used to insert a copy of information created in one program into a Word document while maintaining a connection between the two files. When the information changes in the source file, the changes are reflected in the destination document.)';
			sTemp=L_pbLink_TEXT;
			break;
		case 'pblinkedpicture':
			L_pblinkedpicture_TEXT='(linked picture: A picture that links to a high-resolution image file that is stored outside of the publication file. If the linked picture is changed in an image-editing program, you can update the linked picture in the publication file.)';
			sTemp=L_pblinkedpicture_TEXT;
			break;
		case 'pbMailmerge':
			L_pbMailmerge_TEXT='(mail merge: The process of combining information from a data source with a publication to print a batch of individually customized publications.)';
			sTemp=L_pbMailmerge_TEXT;
			break;
		case 'pbmappeddatafield':
			L_pbmappeddatafield_TEXT='(mapped data field: Field that represents commonly used information, such as \"First Name.\" If a data source contains a \"First Name\" field or a variation, such as \"FName,\" the data source field automatically maps to the corresponding mapped data field.)';
			sTemp=L_pbmappeddatafield_TEXT;
			break;
		case 'pbmarginguides':
			L_pbmarginguides_TEXT='(margin guides: Guides on the top, bottom, left, and right sides of a page that are used to define its margins. Most contents of a page are within the margin guides.)';
			sTemp=L_pbmarginguides_TEXT;
			break;
		case 'pbmasterpage':
			L_pbmasterpage_TEXT='(master page: A background page that can be applied to one or more pages of a publication. Master pages contain elements, such as headers, footers, margin guides, and column guides, that can be applied to multiple pages.)';
			sTemp=L_pbmasterpage_TEXT;
			break;
		case 'pbmergefield':
			L_pbmergefield_TEXT='(merge field: A placeholder for text or pictures that you insert into your publication. Information from a data source (such as a name, address, or image) is inserted in each merge field. You can format, copy, move, or delete a merge field.)';
			sTemp=L_pbmergefield_TEXT;
			break;
		case 'pbMirroredpagelayout':
			L_pbMirroredpagelayout_TEXT='(mirrored-page layout: A layout in which left and right facing pages are mirror images of each other.)';
			sTemp=L_pbMirroredpagelayout_TEXT;
			break;
		case 'pbmisregistration':
			L_pbmisregistration_TEXT='(misregistration: A gap caused when objects from different press plates do not line up correctly when printed. Misregistration is caused by shifting and stretching of the paper or the press plates.)';
			sTemp=L_pbmisregistration_TEXT;
			break;
		case 'pbMockup':
			L_pbMockup_TEXT='(mock-up: A sketch or representation that shows the layout of the publication that you plan to create.)';
			sTemp=L_pbMockup_TEXT;
			break;
		case 'pbNonbreakinghyphen':
			L_pbNonbreakinghyphen_TEXT='(nonbreaking hyphen: A type of hyphen that keeps the hyphenated words on the same line.)';
			sTemp=L_pbNonbreakinghyphen_TEXT;
			break;
		case 'pbNudge':
			L_pbNudge_TEXT='(nudge: To move an object one pixel at a time.)';
			sTemp=L_pbNudge_TEXT;
			break;
		case 'pbOpacity':
			L_pbOpacity_TEXT='(opacity: The quality that defines how much light passes through an object\'s pixels. If an object is 100 percent opaque, no light passes through it.)';
			sTemp=L_pbOpacity_TEXT;
			break;
		case 'pbOrientation':
			L_pbOrientation_TEXT='(orientation: The direction a publication will be printed on a sheet of paper. You can choose either portrait, which is the taller-than-wide orientation, or landscape, which is the wider-than-tall orientation .)';
			sTemp=L_pbOrientation_TEXT;
			break;
		case 'pboutcrop':
			L_pboutcrop_TEXT='(outcrop: To apply cropping to a picture by using negative cropping values. Instead of reducing the size of the picture, outcropping extends its frame beyond its edges.)';
			sTemp=L_pboutcrop_TEXT;
			break;
		case 'pboverflow':
			L_pboverflow_TEXT='(overflow: Text that does not fit within a text box. The text is hidden until it can be flowed into a new text box, or until the text box it overflows is resized to include it.)';
			sTemp=L_pboverflow_TEXT;
			break;
		case 'PbOverlap':
			L_PbOverlap_TEXT='(overlaps: Marks that indicate where to line up adjacent pages in a large publication, such as a poster or banner.)';
			sTemp=L_PbOverlap_TEXT;
			break;
		case 'pbOverprint':
			L_pbOverprint_TEXT='(overprint: To print an element of one color over one of another color without removing, or knocking out, the material underneath.)';
			sTemp=L_pbOverprint_TEXT;
			break;
		case 'PbPacks':
			L_PbPacks_TEXT='(pack: Package your publication files by using the Pack and Go Wizard.)';
			sTemp=L_PbPacks_TEXT;
			break;
		case 'pbpagesorter':
			L_pbpagesorter_TEXT='(page sorter: One or more paged-shaped controls, located in the lower left corner of the Publisher window, that represent each page of the publication and can be used to go to, rearrange, or work with publication pages.)';
			sTemp=L_pbpagesorter_TEXT;
			break;
		case 'pbpan':
			L_pbpan_TEXT='(pan: To use the mouse to move the current page within the workspace or to scroll quickly in any direction for a better view.)';
			sTemp=L_pbpan_TEXT;
			break;
		case 'pbPantone':
			L_pbPantone_TEXT='(Pantone: A widely-used color-matching system that defines hundreds of spot-color inks or process colors made up of CMYK inks.)';
			sTemp=L_pbPantone_TEXT;
			break;
		case 'pbParagraphmark':
			L_pbParagraphmark_TEXT='(paragraph mark: A nonprinting character that indicates the end of a paragraph.)';
			sTemp=L_pbParagraphmark_TEXT;
			break;
		case 'pbPattern':
			L_pbPattern_TEXT='(pattern: An effect created by simple, repeating designs such as vertical or horizontal lines.)';
			sTemp=L_pbPattern_TEXT;
			break;
		case 'pbpdf':
			L_pbpdf_TEXT='(PDF: Portable Document Format. A PostScript-based electronic file type. You can save most documents as PDF files and share them with other users on any computer.)';
			sTemp=L_pbpdf_TEXT;
			break;
		case 'pbPersonalinformation':
			L_pbPersonalinformation_TEXT='(personal information: Information about you or your organization, such as name, address, and organization  name that Publisher stores and reuses in subsequent publications you create.)';
			sTemp=L_pbPersonalinformation_TEXT;
			break;
		case 'pbPica':
			L_pbPica_TEXT='(pica: A typographical unit of measure that is equal to one sixth of an inch. A pica is divided into 12 points.)';
			sTemp=L_pbPica_TEXT;
			break;
		case 'pbPicture':
			L_pbPicture_TEXT='(picture: A bitmap or draw-type graphic that is brought into Publisher. Clip art is one type of picture.)';
			sTemp=L_pbPicture_TEXT;
			break;
		case 'pbpixel':
			L_pbpixel_TEXT='(pixel: The smallest element of a digital picture. Pixels are solid squares of color that vary in size depending on the resolution of the picture. Higher resolution pictures have smaller pixels and can show finer picture detail.)';
			sTemp=L_pbpixel_TEXT;
			break;
		case 'pbPlaceholdertext':
			L_pbPlaceholdertext_TEXT='(placeholder text: Text that appears in a publication that was created using one of Publisher\'s wizards, such as the Brochure Wizard. Placeholder text is replaced by your text.)';
			sTemp=L_pbPlaceholdertext_TEXT;
			break;
		case 'pbpoint':
			L_pbpoint_TEXT='(point: A typographical unit of measure that is equal to one seventy-second of an inch. Twelve points equals one pica.)';
			sTemp=L_pbpoint_TEXT;
			break;
		case 'pbpostscript':
			L_pbpostscript_TEXT='(PostScript: A page description language used by printers and imagesetters.)';
			sTemp=L_pbpostscript_TEXT;
			break;
		case 'PbPostscriptFont':
			L_PbPostscriptFont_TEXT='(PostScript font: A scaleable font that displays and prints smoothly at any point size. PostScript fonts are based on the PostScript page description language. Also called a Type 1 font.)';
			sTemp=L_PbPostscriptFont_TEXT;
			break;
		case 'pbPrinterdriver':
			L_pbPrinterdriver_TEXT='(printer driver: The device that communicates between your software program and your printer. The printer driver tells Publisher what the printer can do, and also tells the printer how to print the publication.)';
			sTemp=L_pbPrinterdriver_TEXT;
			break;
		case 'pbPrintersmarks':
			L_pbPrintersmarks_TEXT='(printer\'s marks: Marks printed outside the printable area on each page of your publication to help you or your commercial printing service trim, align, and control color in your publication.)';
			sTemp=L_pbPrintersmarks_TEXT;
			break;
		case 'pbPrintspooler':
			L_pbPrintspooler_TEXT='(print spooler: Software that stores print files in memory for a short time before sending them to the printer, so you can continue to work.)';
			sTemp=L_pbPrintspooler_TEXT;
			break;
		case 'pbprocesscolors':
			L_pbprocesscolors_TEXT='(process colors: The four transparent inks (cyan, magenta, yellow, and black) that are used in commercial printing to produce color photographic images and a wide range of solid colors.)';
			sTemp=L_pbprocesscolors_TEXT;
			break;
		case 'pbPullquote':
			L_pbPullquote_TEXT='(pull quote: An excerpt from the body of a story used to emphasize an idea, draw attention, or generate interest.)';
			sTemp=L_pbPullquote_TEXT;
			break;
		case 'pbPuretext':
			L_pbPuretext_TEXT='(pure text: Simply formatted text without borders, graphics, or cells. Important for Web publishing.)';
			sTemp=L_pbPuretext_TEXT;
			break;
		case 'pbrasterimageprocessorrip':
			L_pbrasterimageprocessorrip_TEXT='(RIP: The processor in an imagesetter or desktop printer that interprets the commands sent by a printer driver and converts them to a raster or bitmap grid to mark the paper or film.)';
			sTemp=L_pbrasterimageprocessorrip_TEXT;
			break;
		case 'PbResolutions':
			L_PbResolutions_TEXT='(resolution: The sharpness and detail in an image that is produced either on a computer screen or by a printer.)';
			sTemp=L_PbResolutions_TEXT;
			break;
		case 'pbrichblack':
			L_pbrichblack_TEXT='(rich black: A more saturated black color created by using 100% process black and some percentage of one or more of cyan, magenta, or yellow.)';
			sTemp=L_pbrichblack_TEXT;
			break;
		case 'pbrowguides':
			L_pbrowguides_TEXT='(row guides: Horizontal guides that are used to divide a page into two or more sections to help structure the layout of the page.)';
			sTemp=L_pbrowguides_TEXT;
			break;
		case 'pbrulerguide':
			L_pbrulerguide_TEXT='(ruler guide: A non-printing horizontal or vertical guide that you can align to any point on a ruler.)';
			sTemp=L_pbrulerguide_TEXT;
			break;
		case 'pbrulermark':
			L_pbrulermark_TEXT='(ruler mark: A mark on the vertical or horizontal ruler that shows a unit or subunit of the measurement unit that is used for the publication. )';
			sTemp=L_pbrulermark_TEXT;
			break;
		case 'pbrulerorigin':
			L_pbrulerorigin_TEXT='(ruler origin: the beginning or zero point of a horizontal or vertical ruler. By default the ruler origin is in the upper left corner of the publication page, but can be moved to any place on the page or scratch area.)';
			sTemp=L_pbrulerorigin_TEXT;
			break;
		case 'pbSchemecolor':
			L_pbSchemecolor_TEXT='(scheme color: One of the colors defined in a set of chosen colors. If you fill an object with a scheme color, the object\'s color changes whenever you choose another color scheme for that publication.)';
			sTemp=L_pbSchemecolor_TEXT;
			break;
		case 'pbscratcharea':
			L_pbscratcharea_TEXT='(scratch area: The area that surrounds a page in Publisher that is used to hold objects that are not currently on a page. Objects in the scratch area will not print and will not export as part of a Web page.)';
			sTemp=L_pbscratcharea_TEXT;
			break;
		case 'pbScreenfont':
			L_pbScreenfont_TEXT='(screen font: A font designed for displaying text on a computer monitor. A screen font may or may not print as it appears, depending on the printer fonts you have installed.)';
			sTemp=L_pbScreenfont_TEXT;
			break;
		case 'pbSeparator':
			L_pbSeparator_TEXT='(separator: A separator is a character, such as a punctuation mark, used in a list to separate the numbers or letters identifying the items from the text of the list.)';
			sTemp=L_pbSeparator_TEXT;
			break;
		case 'pbServicebureau':
			L_pbServicebureau_TEXT='(service bureau: Prepares a publication to be printed on a commercial printing press.)';
			sTemp=L_pbServicebureau_TEXT;
			break;
		case 'PbShade':
			L_PbShade_TEXT='(shade: A color that is mixed with black. A 10-percent shade is one part of the original color and nine parts black.)';
			sTemp=L_PbShade_TEXT;
			break;
		case 'pbShadow':
			L_pbShadow_TEXT='(shadow: A style applied to an object in which a gray outline is applied usually to the lower right portion. The effect gives the object something of a three-dimensional appearance.)';
			sTemp=L_pbShadow_TEXT;
			break;
		case 'PbSheets':
			L_PbSheets_TEXT='(sheet: The paper that a publication is printed on. In the commercial print trade, sheet size refers to the paper that is used for printing, whereas page size refers to the size of the finished publication.)';
			sTemp=L_PbSheets_TEXT;
			break;
		case 'pbSpecialcharacter':
			L_pbSpecialcharacter_TEXT='(special character: A nonprinting character, such as a tab or a paragraph mark.)';
			sTemp=L_pbSpecialcharacter_TEXT;
			break;
		case 'pbSpecialpaper':
			L_pbSpecialpaper_TEXT='(special paper: Paper that has colored, preprinted patterns or borders on it. You can use these papers to create a colorful and stylish look without a color printer or copier.)';
			sTemp=L_pbSpecialpaper_TEXT;
			break;
		case 'PbSpotColor':
			L_PbSpotColor_TEXT='(spot color: Premixed color matched to a standard color guide, such as PANTONE.)';
			sTemp=L_PbSpotColor_TEXT;
			break;
		case 'pbspread':
			L_pbspread_TEXT='(spread: A small overlap that extends the shape of the upper of two differently colored, abutting objects. A spread extends beyond the area that it knocks out.)';
			sTemp=L_pbspread_TEXT;
			break;
		case 'pbSwatchbook':
			L_pbSwatchbook_TEXT='(swatch book: A selection of printed colors to choose from when preparing publications for commercial printing.)';
			sTemp=L_pbSwatchbook_TEXT;
			break;
		case 'pbSynchronization':
			L_pbSynchronization_TEXT='(synchronization: When you change the formatting of certain objects â€” such as smart objects or repeated design elements â€” or when you change information in personal information components, Publisher makes the change to similar objects.)';
			sTemp=L_pbSynchronization_TEXT;
			break;
		case 'pbTagline':
			L_pbTagline_TEXT='(tag line: A brief, memorable statement that summarizes the purpose of an organization or emphasizes an important aspect of a product or service.)';
			sTemp=L_pbTagline_TEXT;
			break;
		case 'pbTentfoldcard':
			L_pbTentfoldcard_TEXT='(tent-fold card: A top-fold card with four pages. Page one becomes the front cover, pages two and three are the inside pages, and page four is the back of the card.)';
			sTemp=L_pbTentfoldcard_TEXT;
			break;
		case 'pbTextconverter':
			L_pbTextconverter_TEXT='(text converter: A file that converts word-processing and spreadsheet documents created in other programs into files that you can import into Publisher.)';
			sTemp=L_pbTextconverter_TEXT;
			break;
		case 'pbtilenoun':
			L_pbtilenoun_TEXT='(tile: One of a number of separately printed parts of an oversized publication, such as a banner or poster, that cannot be printed as a single sheet. Separate tiles can be assembled to recreate the whole publication.)';
			sTemp=L_pbtilenoun_TEXT;
			break;
		case 'pbtileverb':
			L_pbtileverb_TEXT='(tile: To print a document in overlapping pieces.)';
			sTemp=L_pbtileverb_TEXT;
			break;
		case 'pbTrap':
			L_pbTrap_TEXT='(trap: To create small overlaps where two differently colored objects abut on a printed page.)';
			sTemp=L_pbTrap_TEXT;
			break;
		case 'PbTruetypeFonts':
			L_PbTruetypeFonts_TEXT='(TrueType font: A scaleable font that displays and prints smoothly at any point size. TrueType fonts are directly supported by the Windows operating system and can be embedded in publications.)';
			sTemp=L_PbTruetypeFonts_TEXT;
			break;
		case 'pbxheight':
			L_pbxheight_TEXT='(x-height: The typical height of a lowercase Latin letter, such as the letters a, c, e, m, n, o, r s, u, v, w, x, and z.)';
			sTemp=L_pbxheight_TEXT;
			break;
		case 'pbxline':
			L_pbxline_TEXT='(x line: The invisible line that marks the typical height of a lowercase Latin letter, such as the height of the letters a, c, e, m, n, o, r s, u, v, w, x, and z.)';
			sTemp=L_pbxline_TEXT;
			break;
		case 'pbZeropoint':
			L_pbZeropoint_TEXT='(zero point: The position of \"0\" on the horizontal and vertical ruler.)';
			sTemp=L_pbZeropoint_TEXT;
			break;

		// PhotoDraw

		case 'IDH_pddef256Colors':
			L_IDH_pddef256Colors_TEXT='(8-bit color: A display setting that holds up to 256 specific color entries. Any color palette attached to a picture is by definition an 8-bit palette.)';
			sTemp=L_IDH_pddef256Colors_TEXT;
			break;
		case 'IDH_pddef3DLighting':
			L_IDH_pddef3DLighting_TEXT='(3-D lighting: In Microsoft PhotoDraw, the indirect and direct sources of light you can apply to 3-D objects. To modify 3-D lighting, you can apply a preset effect, change the lighting colors, or tilt lights.)';
			sTemp=L_IDH_pddef3DLighting_TEXT;
			break;
		case 'IDH_pddefActiveColor':
			L_IDH_pddefActiveColor_TEXT='(active color: The color displayed in the central square of the color box that appears in most workpanes. The active color is used when you create a new object and when you add fills and patterns to a selected object.)';
			sTemp=L_IDH_pddefActiveColor_TEXT;
			break;
		case 'IDH_pddefActiveColorPalette':
			L_IDH_pddefActiveColorPalette_TEXT='(active color palette: A subset of up to 256 of the colors in the True Color spectrum.)';
			sTemp=L_IDH_pddefActiveColorPalette_TEXT;
			break;
		case 'IDH_pddefActivePicture':
			L_IDH_pddefActivePicture_TEXT='(active picture: The picture that is currently open on the PhotoDraw workspace.)';
			sTemp=L_IDH_pddefActivePicture_TEXT;
			break;
		case 'IDH_pddefBitsPerPixel':
			L_IDH_pddefBitsPerPixel_TEXT='(bits per pixel: Also known as color depth or bit depth. The term refers to the number of bits (8, 16, 24, or 32) used to store and display the color data for a single pixel. The number of bits per pixel determines the range of color available to an image.)';
			sTemp=L_IDH_pddefBitsPerPixel_TEXT;
			break;
		case 'IDH_pddefBrightness':
			L_IDH_pddefBrightness_TEXT='(brightness: The relative lightness of a color. An object with 0 percent brightness would be black, while an object with 100 percent brightness would be white. A tint is a color with brightness, or white, added to it.)';
			sTemp=L_IDH_pddefBrightness_TEXT;
			break;
		case 'IDH_pddefbrush_strokes':
			L_IDH_pddefbrush_strokes_TEXT='(brush strokes: Line styles resembling natural media paint strokes or photorealistic images that you can apply to an object.)';
			sTemp=L_IDH_pddefbrush_strokes_TEXT;
			break;
		case 'IDH_pddefCMYK':
			L_IDH_pddefCMYK_TEXT='(CMYK: A method for mixing print colors that starts with white, subtracts percentages of cyan, magenta, and yellow, and then adds a black component to reduce the amount of ink used to print a particular color.)';
			sTemp=L_IDH_pddefCMYK_TEXT;
			break;
		case 'IDH_pddefColorBox':
			L_IDH_pddefColorBox_TEXT='(color box: A set of color choices located in a workpane.)';
			sTemp=L_IDH_pddefColorBox_TEXT;
			break;
		case 'IDH_pddefColorDepth':
			L_IDH_pddefColorDepth_TEXT='(color depth: The number of color values that can be assigned to a single pixel in an image. Also known as bit depth, color depth can range from I bit (black and white) to 32 bits (over 16.7 million colors).)';
			sTemp=L_IDH_pddefColorDepth_TEXT;
			break;
		case 'IDH_pddefColorList':
			L_IDH_pddefColorList_TEXT='(color list: A drop-down list of color choices that appears in certain workpanes.)';
			sTemp=L_IDH_pddefColorList_TEXT;
			break;
		case 'IDH_pddefColorMatrix':
			L_IDH_pddefColorMatrix_TEXT='(color matrix: A map that displays the range of True Colors you can choose in PhotoDraw. True Colors, as people see them, range from violet at the high-frequency end of the visible-light band to red at the low-frequency end.)';
			sTemp=L_IDH_pddefColorMatrix_TEXT;
			break;
		case 'IDH_pddefColorModel':
			L_IDH_pddefColorModel_TEXT='(color model: A way of defining color both for onscreen and print display. Colors can be described using several different color models: HSV (hue, saturation, and value); CMY (cyan, magenta, yellow); and RGB (red, green, and blue).)';
			sTemp=L_IDH_pddefColorModel_TEXT;
			break;
		case 'IDH_pddefColorPalette':
			L_IDH_pddefColorPalette_TEXT='(color palette: A set of specific colors that can be saved with a composition or as a separate .pal (palette) file.)';
			sTemp=L_IDH_pddefColorPalette_TEXT;
			break;
		case 'IDH_pddefColorRamp':
			L_IDH_pddefColorRamp_TEXT='(color ramp: A range of colors in which each color gradually blends into the next one. For example, a blue ramp gradually blends hues of blue from pure black to pure blue.)';
			sTemp=L_IDH_pddefColorRamp_TEXT;
			break;
		case 'IDH_pddefColorSpectrum':
			L_IDH_pddefColorSpectrum_TEXT='(color spectrum: Colors, as people see them, range from violet at the high-frequency end of the visible-light band to red at the low-frequency end. In PhotoDraw, the True Color spectrum is represented as a color matrix.)';
			sTemp=L_IDH_pddefColorSpectrum_TEXT;
			break;
		case 'IDH_pddefComplementaryColors':
			L_IDH_pddefComplementaryColors_TEXT='(complementary colors: Colors such as yellow and blue that are opposite each other on the color wheel.)';
			sTemp=L_IDH_pddefComplementaryColors_TEXT;
			break;
		case 'IDH_pddefCompression':
			L_IDH_pddefCompression_TEXT='(compression: A method for reducing a picture\'s file size that combines pixel information for similar colors and stores the information in a smaller space. Higher compression levels yield smaller file sizes and shorter download times.)';
			sTemp=L_IDH_pddefCompression_TEXT;
			break;
		case 'IDH_pddefCompressionLevel':
			L_IDH_pddefCompressionLevel_TEXT='(compression level: The amount by which an image\'s file size is reduced. Higher compression levels yield smaller file sizes and shorter download times.)';
			sTemp=L_IDH_pddefCompressionLevel_TEXT;
			break;
		case 'IDH_pddefContrast':
			L_IDH_pddefContrast_TEXT='(contrast: The difference between the lightest and darkest areas of an image.)';
			sTemp=L_IDH_pddefContrast_TEXT;
			break;
		case 'IDH_pddefCustomPalette':
			L_IDH_pddefCustomPalette_TEXT='(custom palette: A set of colors on a palette with up to 256 specific color entries.)';
			sTemp=L_IDH_pddefCustomPalette_TEXT;
			break;
		case 'IDH_pddefCutout':
			L_IDH_pddefCutout_TEXT='(cutout: A copy of a selected area of a PhotoDraw object. You can create cutouts by using the Edge Finder, by tracing the area manually, by dragging out the shape of the area you want to cut out, or by selecting specific colors in an object.)';
			sTemp=L_IDH_pddefCutout_TEXT;
			break;
		case 'IDH_pddefCyan':
			L_IDH_pddefCyan_TEXT='(Cyan: A color essential to the CMY color model and the CMYK color-mixing method. The CMY model starts with white and subtracts percentages of cyan, magenta, and yellow to create different colors.)';
			sTemp=L_IDH_pddefCyan_TEXT;
			break;
		case 'IDH_pddefDesignerClip':
			L_IDH_pddefDesignerClip_TEXT='(Designer clip: Clip art exclusive to PhotoDraw. A Designer clip looks especially good when you enhance its lines with artistic or photographic brush strokes or different line styles.)';
			sTemp=L_IDH_pddefDesignerClip_TEXT;
			break;
		case 'IDH_pddefDestination':
			L_IDH_pddefDestination_TEXT='(destination: The location where you intend to display your finished PhotoDraw picture. The printed page, a Web site, and an online newsletter are all considered destinations.)';
			sTemp=L_IDH_pddefDestination_TEXT;
			break;
		case 'IDH_pddefdigital_photo':
			L_IDH_pddefdigital_photo_TEXT='(digital photo: An image that has been captured electronically with a digital camera or scanner.)';
			sTemp=L_IDH_pddefdigital_photo_TEXT;
			break;
		case 'IDH_pddefDisplaySetting':
			L_IDH_pddefDisplaySetting_TEXT='(display setting: The number of colors that your computer display software supports.)';
			sTemp=L_IDH_pddefDisplaySetting_TEXT;
			break;
		case 'IDH_pddefDisplaySystem':
			L_IDH_pddefDisplaySystem_TEXT='(display system: The combination of monitor, video adapter, and display software.)';
			sTemp=L_IDH_pddefDisplaySystem_TEXT;
			break;
		case 'IDH_pddefDithering':
			L_IDH_pddefDithering_TEXT='(dithering: A method for approximating colors on a display system or in a file format that does not have the specified color available.)';
			sTemp=L_IDH_pddefDithering_TEXT;
			break;
		case 'IDH_pddefDotsPerInchDPI':
			L_IDH_pddefDotsPerInchDPI_TEXT='(dots per inch (DPI): The units often used to measure image resolution for print devices and onscreen display resolution.)';
			sTemp=L_IDH_pddefDotsPerInchDPI_TEXT;
			break;
		case 'IDH_pddefDownload':
			L_IDH_pddefDownload_TEXT='(download: The process of transferring a copy of a file from a device or computer to another computer.)';
			sTemp=L_IDH_pddefDownload_TEXT;
			break;
		case 'IDH_pddefdrop_shadow':
			L_IDH_pddefdrop_shadow_TEXT='(drop shadow: a shaded outline that appears behind an object and creates the illusion of depth.)';
			sTemp=L_IDH_pddefdrop_shadow_TEXT;
			break;
		case 'IDH_pddefEdgeFinderWidth':
			L_IDH_pddefEdgeFinderWidth_TEXT='(Edge Finder width: The area of an object that the Edge Finder searches to locate a traceable outline. If the area you\'re tracing contrasts sharply with the rest of the object, using a wider Edge Finder width will yield the best results.)';
			sTemp=L_IDH_pddefEdgeFinderWidth_TEXT;
			break;
		case 'IDH_pddefExtrusion':
			L_IDH_pddefExtrusion_TEXT='(extrusion: The depth or thickness of a three-dimensional object. Extrusion can also refer to the amount that a 3-D object\'s sides are pushed out.)';
			sTemp=L_IDH_pddefExtrusion_TEXT;
			break;
		case 'IDH_pddefEyedropperTool':
			L_IDH_pddefEyedropperTool_TEXT='(Eyedropper: A tool you can use to select a color from one object and apply it to another object.)';
			sTemp=L_IDH_pddefEyedropperTool_TEXT;
			break;
		case 'IDH_pddefFace':
			L_IDH_pddefFace_TEXT='(face: The front surface of a three-dimensional object. Typically, the face of a 3-D object is the two-dimensional object from which the 3-D object was generated.)';
			sTemp=L_IDH_pddefFace_TEXT;
			break;
		case 'IDH_pddeffidelity':
			L_IDH_pddeffidelity_TEXT='(fidelity: The accuracy with which an image is reproduced on your personal computer.)';
			sTemp=L_IDH_pddeffidelity_TEXT;
			break;
		case 'IDH_pddefFillN':
			L_IDH_pddefFillN_TEXT='(fill: The color, pattern, texture, or picture used to fill the inside of an object.)';
			sTemp=L_IDH_pddefFillN_TEXT;
			break;
		case 'IDH_pddefFineTuning':
			L_IDH_pddefFineTuning_TEXT='(Fine tuning and Bleed settings: Fine tuning settings shift all inserted images by the same amount to align them properly on a full sheet of labels or stickers. Bleed settings determine how much of an object can print beyond the edges of a label or sticker)';
			sTemp=L_IDH_pddefFineTuning_TEXT;
			break;
		case 'IDH_pddefFlatbedScan':
			L_IDH_pddefFlatbedScan_TEXT='(flatbed scanner: A scanner with a flat, transparent surface that holds the image to be scanned, generally a book or other document.)';
			sTemp=L_IDH_pddefFlatbedScan_TEXT;
			break;
		case 'IDH_pddefFlatFileFormat':
			L_IDH_pddefFlatFileFormat_TEXT='(flat file format: An image file format in which individual objects cannot be edited. Files stored in JPEG, GIF, and BMP formats are all flat files. The PhotoDraw MIX file format is not a flat file format.)';
			sTemp=L_IDH_pddefFlatFileFormat_TEXT;
			break;
		case 'IDH_pddefFlatten':
			L_IDH_pddefFlatten_TEXT='(flatten: To permanently combine a set of objects into one object. Flattening is similar to grouping in that both actions combine a set of objects. However, flattening is a permanent action, whereas a group of objects can be ungrouped.)';
			sTemp=L_IDH_pddefFlatten_TEXT;
			break;
		case 'IDH_pddefFlip':
			L_IDH_pddefFlip_TEXT='(flip: To change the orientation of a selected object horizontally, vertically, or in both directions.)';
			sTemp=L_IDH_pddefFlip_TEXT;
			break;
		case 'IDH_pddefFreeform':
			L_IDH_pddefFreeform_TEXT='(freeform: Any shape you create from scratch with PhotoDraw drawing tools. A puffy cloud, mountains, a lightening bolt, and your name in cursive are all freeforms.)';
			sTemp=L_IDH_pddefFreeform_TEXT;
			break;
		case 'IDH_pddefGallery':
			L_IDH_pddefGallery_TEXT='(gallery: A collection of predefined styles that you can apply to PhotoDraw objects. Galleries show previews of what the styles look like. Clicking an item in a gallery applies the style to the selection object(s).)';
			sTemp=L_IDH_pddefGallery_TEXT;
			break;
		case 'IDH_pddefGalleryList':
			L_IDH_pddefGalleryList_TEXT='(gallery list: A drop-down list that you use to select a gallery of style or effect previews. Gallery lists appear in many PhotoDraw workpanes.)';
			sTemp=L_IDH_pddefGalleryList_TEXT;
			break;
		case 'IDH_pddefGIF_animation':
			L_IDH_pddefGIF_animation_TEXT='(GIF animation: A file containing a series of graphics that are displayed in rapid sequence in a Web browser.)';
			sTemp=L_IDH_pddefGIF_animation_TEXT;
			break;
		case 'IDH_pddefgraphics_filters':
			L_IDH_pddefgraphics_filters_TEXT='(graphic filter: A program that transforms a picture stored in one file format to another format so that it can be displayed in a specific graphics program.)';
			sTemp=L_IDH_pddefgraphics_filters_TEXT;
			break;
		case 'IDH_pddefGroupV':
			L_IDH_pddefGroupV_TEXT='(group: To temporarily designate all currently selected objects as a single object within a composition. Grouped objects can be ungrouped.)';
			sTemp=L_IDH_pddefGroupV_TEXT;
			break;
		case 'IDH_pddefhhscanner':
			L_IDH_pddefhhscanner_TEXT='(hand-held scanner: An input device that users hold in their hands and move over the document to be scanned.)';
			sTemp=L_IDH_pddefhhscanner_TEXT;
			break;
		case 'IDH_pddefHighColor':
			L_IDH_pddefHighColor_TEXT='(HTML tag: A text string used in HTML to identify a page element\'s type, format, and appearance. FrontPage automatically creates HTML tags to represent each element on a page.)';
			sTemp=L_IDH_pddefHighColor_TEXT;
			break;
		case 'IDH_pddefHSV':
			L_IDH_pddefHSV_TEXT='(HSV: A model for defining colors that uses the attributes of hue, saturation, and value (brightness) to specify a color. In this model, setting the value to 0 produces black; setting the hue and saturation to 0 and setting the value to 100 produces white.)';
			sTemp=L_IDH_pddefHSV_TEXT;
			break;
		case 'IDH_pddefHue':
			L_IDH_pddefHue_TEXT='(hue: The color attribute that most readily distinguishes one color from other colors. A color\'s hue is also its name.)';
			sTemp=L_IDH_pddefHue_TEXT;
			break;
		case 'IDH_pddeflayers':
			L_IDH_pddeflayers_TEXT='(layers: A feature of Adobe Photoshop that lets you edit portions of your image without affecting other areas. Layers are laid over the background canvas, so that each object can occupy its own layer.)';
			sTemp=L_IDH_pddeflayers_TEXT;
			break;
		case 'IDH_pddefLineSeg':
			L_IDH_pddefLineSeg_TEXT='(line segment: The straight or curved line that connects two points in a drawing object.)';
			sTemp=L_IDH_pddefLineSeg_TEXT;
			break;
		case 'IDH_pddefLosslessCompression':
			L_IDH_pddefLosslessCompression_TEXT='(lossless compression: A method for reducing file size in which image quality is retained regardless of the compression level. GIF format uses lossless compression.)';
			sTemp=L_IDH_pddefLosslessCompression_TEXT;
			break;
		case 'IDH_pddefLossyCompression':
			L_IDH_pddefLossyCompression_TEXT='(lossy compression: A method for reducing file size in which image quality degrades as the file size decreases. JPEG format, which uses lossy compression, lets you control the level of compression to balance the picture quality and the file size.)';
			sTemp=L_IDH_pddefLossyCompression_TEXT;
			break;
		case 'IDH_pddefMIX':
			L_IDH_pddefMIX_TEXT='(MIX: The Microsoft PhotoDraw native file format. Saving a picture in MIX format maintains all the objects in the picture as separate objects, allowing you to edit the individual objects when you reopen the file.)';
			sTemp=L_IDH_pddefMIX_TEXT;
			break;
		case 'IDH_pddefMonochrome':
			L_IDH_pddefMonochrome_TEXT='(monochrome: A photograph or drawing that contains a single hue or color, typically black.)';
			sTemp=L_IDH_pddefMonochrome_TEXT;
			break;
		case 'IDH_pddefObjectList':
			L_IDH_pddefObjectList_TEXT='(object list: The list of objects in a PhotoDraw picture that appears to the left of the workspace. You can use the object list to select objects that are hidden in the workspace, as well as to change the order of objects in the picture.)';
			sTemp=L_IDH_pddefObjectList_TEXT;
			break;
		case 'IDH_pddefopaque':
			L_IDH_pddefopaque_TEXT='(opacity: The quality of an object that defines the ability of light to pass through it. If an object is completely opaque, light does not pass through it.)';
			sTemp=L_IDH_pddefopaque_TEXT;
			break;
		case 'IDH_pddefOptimizedPalette':
			L_IDH_pddefOptimizedPalette_TEXT='(optimized palette: A palette that you create and fill yourself. After you create an optimized palette, you can modify the colors in it or remove the palette altogether.)';
			sTemp=L_IDH_pddefOptimizedPalette_TEXT;
			break;
		case 'IDH_pddeforder':
			L_IDH_pddeforder_TEXT='(order: The front-to-back placement of an object relative to other objects in a picture.)';
			sTemp=L_IDH_pddeforder_TEXT;
			break;
		case 'IDH_pddefPan':
			L_IDH_pddefPan_TEXT='(pan: To move the view of a PhotoDraw picture up, down, left, or right. You can use the view finder in the Pan and Zoom window to shift your view of a picture shown in the workspace.)';
			sTemp=L_IDH_pddefPan_TEXT;
			break;
		case 'IDH_pddefPanZoomWindow':
			L_IDH_pddefPanZoomWindow_TEXT='(Pan and Zoom window: Contains the tools you use when you want to concentrate on a particular area of a picture.)';
			sTemp=L_IDH_pddefPanZoomWindow_TEXT;
			break;
		case 'IDH_pddefphoto_brush':
			L_IDH_pddefphoto_brush_TEXT='(photo brush: A line style created from a photographic image, such as a chain, a snake, etc.)';
			sTemp=L_IDH_pddefphoto_brush_TEXT;
			break;
		case 'IDH_pddefphoto_stamp':
			L_IDH_pddefphoto_stamp_TEXT='(photo stamp: A line style created from stamping an image, such as a daisy or a shoe, along a path that you draw.)';
			sTemp=L_IDH_pddefphoto_stamp_TEXT;
			break;
		case 'IDH_pddefPicture':
			L_IDH_pddefPicture_TEXT='(picture: A Microsoft PhotoDraw file is called a picture, and may be composed of one or more objects.)';
			sTemp=L_IDH_pddefPicture_TEXT;
			break;
		case 'IDH_pddefPictureArea':
			L_IDH_pddefPictureArea_TEXT='(background: The area defined by a white rectangle on the Microsoft PhotoDraw workspace. When you save in any format other than MIX, your picture is cropped to this rectangle.)';
			sTemp=L_IDH_pddefPictureArea_TEXT;
			break;
		case 'IDH_pddefPictureGuides':
			L_IDH_pddefPictureGuides_TEXT='(background handles: The handles used to resize the background. By default, background handles are hidden.)';
			sTemp=L_IDH_pddefPictureGuides_TEXT;
			break;
		case 'IDH_pddefPictureList':
			L_IDH_pddefPictureList_TEXT='(Picture List: The list of open pictures that appears to the left of the workspace. You can use the Picture List to switch between open pictures, to copy objects from one picture to another, and to select objects in a picture.)';
			sTemp=L_IDH_pddefPictureList_TEXT;
			break;
		case 'IDH_pddefPluginProgram':
			L_IDH_pddefPluginProgram_TEXT='(plug-in filter: Software programs that you install to enhance the Microsoft PhotoDraw program. PhotoDraw supports Adobe Photoshop-compatible filter plug-ins.)';
			sTemp=L_IDH_pddefPluginProgram_TEXT;
			break;
		case 'IDH_pddefPoints':
			L_IDH_pddefPoints_TEXT='(points: Also known as vertices. In PhotoDraw, the term point refers to the highest point of a curve, the point where a curve ends, or the point where two line segments meet in a polygon or freeform.)';
			sTemp=L_IDH_pddefPoints_TEXT;
			break;
		case 'IDH_pddefPPI':
			L_IDH_pddefPPI_TEXT='(pixels per inch (PPI): A measurement of the clarity or fineness of detail of an image displayed on a computer monitor.)';
			sTemp=L_IDH_pddefPPI_TEXT;
			break;
		case 'IDH_pddefPreview':
			L_IDH_pddefPreview_TEXT='(preview: A thumbnail representation that you click to open at full size or to apply as an effect or style.)';
			sTemp=L_IDH_pddefPreview_TEXT;
			break;
		case 'IDH_pddefPrintFile':
			L_IDH_pddefPrintFile_TEXT='(print file: A file that can be sent directly from a computer to a printer port without being opened first. PhotoDraw saves print files with a .prn file extension.)';
			sTemp=L_IDH_pddefPrintFile_TEXT;
			break;
		case 'IDH_pddefPrintQuality':
			L_IDH_pddefPrintQuality_TEXT='(print quality: The quality of your printed picture. Microsoft PhotoDraw offers three print qualities: Good, Better, and Best.)';
			sTemp=L_IDH_pddefPrintQuality_TEXT;
			break;
		case 'IDH_pddefPureBlack':
			L_IDH_pddefPureBlack_TEXT='(pure black: In the RGB model, the color that results from mixing zero amounts of red, green, and blue.)';
			sTemp=L_IDH_pddefPureBlack_TEXT;
			break;
		case 'IDH_pddefPureBlue':
			L_IDH_pddefPureBlue_TEXT='(pure blue: A primary color in the RGB and HSV color models. In the RGB model, varying amounts of red, green, and blue are combined to create different colors.)';
			sTemp=L_IDH_pddefPureBlue_TEXT;
			break;
		case 'IDH_pddefPureCyan':
			L_IDH_pddefPureCyan_TEXT='(pure cyan: A secondary color that, according to the RGB model, contains the maximum amounts of green and blue and zero amounts of red. In the CMYK color-mixing method, cyan is one of the colors subtracted from white to create other colors.)';
			sTemp=L_IDH_pddefPureCyan_TEXT;
			break;
		case 'IDH_pddefPureGreen':
			L_IDH_pddefPureGreen_TEXT='(pure green: A primary color in the RGB and HSV color models. In the RGB model, varying amounts of red, green, and blue are combined to create different colors.)';
			sTemp=L_IDH_pddefPureGreen_TEXT;
			break;
		case 'IDH_pddefPureMagenta':
			L_IDH_pddefPureMagenta_TEXT='(pure magenta: A secondary color that, according to the RGB model, contains the maximum amounts of red and blue and zero amounts of green. In the CMYK color-mixing method, magenta is one of the colors subtracted from white to create other colors.)';
			sTemp=L_IDH_pddefPureMagenta_TEXT;
			break;
		case 'IDH_pddefPureRed':
			L_IDH_pddefPureRed_TEXT='(pure red: A primary color in the RGB and HSV color models. In the RGB model, varying amounts of red, green, and blue are combined to create different colors.)';
			sTemp=L_IDH_pddefPureRed_TEXT;
			break;
		case 'IDH_pddefPureWhite':
			L_IDH_pddefPureWhite_TEXT='(pure white: In the RGB color model, the color that results from combining the maximum amounts of red, green, and blue.)';
			sTemp=L_IDH_pddefPureWhite_TEXT;
			break;
		case 'IDH_pddefPureYellow':
			L_IDH_pddefPureYellow_TEXT='(pure yellow: A secondary color that, according to the RGB model, contains the maximum amounts of red and green and zero amounts of blue)';
			sTemp=L_IDH_pddefPureYellow_TEXT;
			break;
		case 'IDH_pddefrepair_box':
			L_IDH_pddefrepair_box_TEXT='(repair box: The rectangle that temporarily appears around the points you click in a picture to remove a scratch.)';
			sTemp=L_IDH_pddefrepair_box_TEXT;
			break;
		case 'IDH_pddefRotate':
			L_IDH_pddefRotate_TEXT='(rotate: To turn an object about its center in a clockwise or counter-clockwise direction.)';
			sTemp=L_IDH_pddefRotate_TEXT;
			break;
		case 'IDH_pddefRotateHandle':
			L_IDH_pddefRotateHandle_TEXT='(rotate handle: The filled circle handle on a PhotoDraw object that you drag to rotate the object.)';
			sTemp=L_IDH_pddefRotateHandle_TEXT;
			break;
		case 'IDH_pddefroyalty_free':
			L_IDH_pddefroyalty_free_TEXT='(royalty-free: The absence of a requirement to pay proprietors for the right to use their pictures.)';
			sTemp=L_IDH_pddefroyalty_free_TEXT;
			break;
		case 'IDH_pddefscan':
			L_IDH_pddefscan_TEXT='(scan: To move a light across a surface such as a page of text so that it can be interpreted by a computer.)';
			sTemp=L_IDH_pddefscan_TEXT;
			break;
		case 'IDH_pddefScrollButtons':
			L_IDH_pddefScrollButtons_TEXT='(scroll buttons: Buttons located at the top and bottom of workpanes and the Picture List. You can use the scroll buttons to view more of a workpane or to scroll through thumbnails in the Picture List or the object list.)';
			sTemp=L_IDH_pddefScrollButtons_TEXT;
			break;
		case 'IDH_pddefSelect':
			L_IDH_pddefSelect_TEXT='(select: To specify an object by clicking it or by highlighting it with the TAB key.)';
			sTemp=L_IDH_pddefSelect_TEXT;
			break;
		case 'IDH_pddefSelectionOutline':
			L_IDH_pddefSelectionOutline_TEXT='(selection outline: The outline that surrounds and defines the area of a cutout.)';
			sTemp=L_IDH_pddefSelectionOutline_TEXT;
			break;
		case 'IDH_pddefShininess':
			L_IDH_pddefShininess_TEXT='(shininess: A property of three-dimensional objects that determines the highlighting of a surface. A low level of shininess diffuses the highlighting, while a high level sharpens it.)';
			sTemp=L_IDH_pddefShininess_TEXT;
			break;
		case 'IDH_pddefSkew':
			L_IDH_pddefSkew_TEXT='(shear: To distort an object by skewing its opposing sides in opposite directions around its center.)';
			sTemp=L_IDH_pddefSkew_TEXT;
			break;
		case 'IDH_pddefSkewHandle':
			L_IDH_pddefSkewHandle_TEXT='(shear handle: The handle on an object\'s selection rectangle that you drag to shear the object.)';
			sTemp=L_IDH_pddefSkewHandle_TEXT;
			break;
		case 'IDH_pddefslider':
			L_IDH_pddefslider_TEXT='(slider: A control that displays and sets values for picture attributes such as brightness, contrast, transparency, and tint.)';
			sTemp=L_IDH_pddefslider_TEXT;
			break;
		case 'IDH_pddefSmallIncrements':
			L_IDH_pddefSmallIncrements_TEXT='(small increments: Short distances along the edge of the area that you want to cut out or erase.)';
			sTemp=L_IDH_pddefSmallIncrements_TEXT;
			break;
		case 'IDH_pddefStackN':
			L_IDH_pddefStackN_TEXT='(stack: The order of objects, from front to back, in a picture.)';
			sTemp=L_IDH_pddefStackN_TEXT;
			break;
		case 'IDH_pddefsupported_file_format':
			L_IDH_pddefsupported_file_format_TEXT='(supported file format: one of the file formats that Microsoft PhotoDraw recognizes without requiring you to install third-party graphics filters.)';
			sTemp=L_IDH_pddefsupported_file_format_TEXT;
			break;
		case 'IDH_pddefTangent':
			L_IDH_pddefTangent_TEXT='(tangent: A line that extends through a vertex or point. Dragging the end point of the tangent changes the shape of the curve.)';
			sTemp=L_IDH_pddefTangent_TEXT;
			break;
		case 'IDH_pddefTemplate':
			L_IDH_pddefTemplate_TEXT='(template: A predefined design that you can use to create pictures for direct print or for another program. PhotoDraw templates include Web Graphics, Flyers, Cards, and Designer Clip Art.)';
			sTemp=L_IDH_pddefTemplate_TEXT;
			break;
		case 'IDH_pddefTextObject':
			L_IDH_pddefTextObject_TEXT='(text object: A string of text that appears in your pictures as a single object. A text object can range from one character to several sentences.)';
			sTemp=L_IDH_pddefTextObject_TEXT;
			break;
		case 'IDH_pddefTrueColor':
			L_IDH_pddefTrueColor_TEXT='(true color: In Microsoft PhotoDraw, the color specification that produces the maximum range of colors that can be differentiated by the human eye.)';
			sTemp=L_IDH_pddefTrueColor_TEXT;
			break;
		case 'IDH_pddefUndock':
			L_IDH_pddefUndock_TEXT='(undock: To move a menu or workpane from its default position on the workspace.)';
			sTemp=L_IDH_pddefUndock_TEXT;
			break;
		case 'IDH_pddefViewFinder':
			L_IDH_pddefViewFinder_TEXT='(view finder: The rectangular outline located inside the Pan and Zoom window that you drag to magnify a portion of an object or picture.)';
			sTemp=L_IDH_pddefViewFinder_TEXT;
			break;
		case 'IDH_pddefViewport':
			L_IDH_pddefViewport_TEXT='(viewport: A view into a document or graphical image that, unlike a window, cuts off portions outside the range of the viewport. A viewport can cover all of a screen or only a portion.)';
			sTemp=L_IDH_pddefViewport_TEXT;
			break;
		case 'IDH_pddefvisual_menu':
			L_IDH_pddefvisual_menu_TEXT='(visual menu: The bar located between the menu bar and toolbar that displays many tasks that you\'ll carry out in PhotoDraw.)';
			sTemp=L_IDH_pddefvisual_menu_TEXT;
			break;
		case 'IDH_pddefWorkspace':
			L_IDH_pddefWorkspace_TEXT='(workspace: The entire area that you can use when you create a picture in Microsoft PhotoDraw. The workspace includes the background and the surrounding scratch area.)';
			sTemp=L_IDH_pddefWorkspace_TEXT;
			break;
		case 'IDH_pddefZoom':
			L_IDH_pddefZoom_TEXT='(zoom: To change the display magnification level. When you zoom to a level higher than 100 percent, less of the workspace is visible and the images on it appear larger.)';
			sTemp=L_IDH_pddefZoom_TEXT;
			break;
		case 'pddefRollover':
			L_pddefRollover_TEXT='(rollover: An effect that changes the appearance of the selected object when you hover over or click it. Typically, rollover effects are used to indicate that an object is hyperlinked.)';
			sTemp=L_pddefRollover_TEXT;
			break;

		// EPaper

		case 'DvAdf':
			L_DvAdf_TEXT='(ADF: An attachment available on some scanners that allows automatic scanning of multiple pages.)';
			sTemp=L_DvAdf_TEXT;
			break;
		case 'dvannotation':
			L_dvannotation_TEXT='(annotation: An element that you can add to mark up your document, including text, highlighting, freeform text or shapes, or a picture.)';
			sTemp=L_dvannotation_TEXT;
			break;
		case 'dvmicrosoftdocumentimagingformatmdi':
			L_dvmicrosoftdocumentimagingformatmdi_TEXT='(Microsoft Document Imaging Format (MDI): A high resolution, tag-based graphics format, based on the Tagged Image File Format (TIFF) used for digital graphics.)';
			sTemp=L_dvmicrosoftdocumentimagingformatmdi_TEXT;
			break;
		case 'dvobject':
			L_dvobject_TEXT='(object: A combination of code and data that can be treated as a unit, for example, a control form, or application component.)';
			sTemp=L_dvobject_TEXT;
			break;
		case 'DvOcr':
			L_DvOcr_TEXT='(OCR: Translates images of text, such as scanned documents, into actual text characters. Also known as text recognition.)';
			sTemp=L_DvOcr_TEXT;
			break;
		case 'DvPagePane':
			L_DvPagePane_TEXT='(page pane: Displays the page that\'s selected in the thumbnail pane in a larger size, and enables portions of the page to be selected and copied.)';
			sTemp=L_DvPagePane_TEXT;
			break;
		case 'DvReadingView':
			L_DvReadingView_TEXT='(Reading view: Presents a full-screen view of a single page or portion of a page for easy on-screen reading.)';
			sTemp=L_DvReadingView_TEXT;
			break;
		case 'DvThumbnailPane':
			L_DvThumbnailPane_TEXT='(thumbnail pane: Presents the current scanned document as one or more small images.)';
			sTemp=L_DvThumbnailPane_TEXT;
			break;

		// Designer

		case 'OdContentClass':
			L_OdContentClass_TEXT='(content class: A Web Storage System content class defines the intent or purpose of an item along with the names of properties that are intended for items in this class.)';
			sTemp=L_OdContentClass_TEXT;
			break;
		case 'OdDesignElement':
			L_OdDesignElement_TEXT='(design element: A page, frameset, item type, form, view, or resource (such as a script file, text file, cascading style sheet, or image).)';
			sTemp=L_OdDesignElement_TEXT;
			break;
		case 'OdEcmascript':
			L_OdEcmascript_TEXT='(ECMAScript: A scripting language standard defined by the European Computer Manufacturers Association (ECMA) 262 specification. Microsoft implements ECMAScript as JScript, and Netscape implements ECMAScript as JavaScript.)';
			sTemp=L_OdEcmascript_TEXT;
			break;
		case 'OdFrameset':
			L_OdFrameset_TEXT='(frameset: A page that divides a Web browser window into different areas called frames that can each display a different Web page. Framesets are often used to display a page with navigation elements or a header in one frame and a page in another frame.)';
			sTemp=L_OdFrameset_TEXT;
			break;
		case 'OdItemType':
			L_OdItemType_TEXT='(item type: The data definition for a class of items stored in a Web application. An item type consists of its name and references to the default set of fields (properties) associated with items of that class.)';
			sTemp=L_OdItemType_TEXT;
			break;
		case 'OdLocalInformationStoreFile':
			L_OdLocalInformationStoreFile_TEXT='(Local Information Store file (.lis): Data file that caches your Outlook items, Web applications opened with Outlook, and Web applications under development online in Solution Designer. You can also create applications offline in an .lis file.)';
			sTemp=L_OdLocalInformationStoreFile_TEXT;
			break;
		case 'OdPrimary':
			L_OdPrimary_TEXT='(primary: A primary form, frameset, or page has no restrictions as to what client browsers or languages can access the form, frameset, or page.)';
			sTemp=L_OdPrimary_TEXT;
			break;
		case 'OdProjectItem':
			L_OdProjectItem_TEXT='(project item: A subfolder or a design element in a Solution Designer project, which can be a page, frameset, item type, form, view, or generic&nbsp;item (any item added to the project folder).)';
			sTemp=L_OdProjectItem_TEXT;
			break;
		case 'OdSchema':
			L_OdSchema_TEXT='(schema: The formal definition of the structure of a database. For the Web Storage System, the schema defines item types (also called content classes), which play a similar role to tables in other database systems, and fields (also called properties).)';
			sTemp=L_OdSchema_TEXT;
			break;
		case 'OdSimpleAction':
			L_OdSimpleAction_TEXT='(simple action: A button control for performing pre-scripted actions on forms and pages, such as saving an item or setting the value of a field. You can customize most simple action buttons by right-clicking the button, and then clicking Properties.)';
			sTemp=L_OdSimpleAction_TEXT;
			break;
		case 'OdSubstitute':
			L_OdSubstitute_TEXT='(substitute: A substitute form, frameset, or page is&nbsp;one that has been registered to be displayed for only certain client browsers and languages.)';
			sTemp=L_OdSubstitute_TEXT;
			break;
		case 'OdUniformResourceName':
			L_OdUniformResourceName_TEXT='(URN: An Internet standard for uniquely identifying a network resource. In Web applications, URNs are used to name item types and field definitions. The format of a URN uses a registered domain name. For example, urn:schemas-microsoft-com:datatypes#type.)';
			sTemp=L_OdUniformResourceName_TEXT;
			break;
		case 'OdView':
			L_OdView_TEXT='(view: An interactive list that displays the data in your application, typically in a table format. A view consists of a definition of what fields to display, which is hosted on a page by the View control to render the view and provide interactivity.)';
			sTemp=L_OdView_TEXT;
			break;
		case 'OdWebParts':
			L_OdWebParts_TEXT='(Web Parts: The components that make up a digital dashboard. Web Parts are reusable components that can contain any kind of Web-based information, including analytical, collaborative, and database information.)';
			sTemp=L_OdWebParts_TEXT;
			break;
		case 'OdWebStorageSystem':
			L_OdWebStorageSystem_TEXT='(WSS: The storage component of Exchange 2000 and SharePoint Portal servers, which integrates Web server, database, file system, and workgroup functionality. The WSS lets you store and share many types of data in a single integrated system.)';
			sTemp=L_OdWebStorageSystem_TEXT;
			break;

		// XDocs

		case 'xdactivefield':
			L_xdactivefield_TEXT='(active field: The field on a form in which the cursor is placed.)';
			sTemp=L_xdactivefield_TEXT;
			break;
		case 'xdattributefield':
			L_xdattributefield_TEXT='(attribute field: A field in the data source that can contain data and that is an attribute (instead of an element). Attribute fields cannot contain other fields.)';
			sTemp=L_xdattributefield_TEXT;
			break;
		case 'xdbind':
			L_xdbind_TEXT='(bind: To connect a control to a field or group in the data source so that data entered into the control is saved. When a control is unbound, it is not connected to a field or group, and so data entered into the control will not be saved.)';
			sTemp=L_xdbind_TEXT;
			break;
		case 'xdchildelement':
			L_xdchildelement_TEXT='(child element: In an XML tree structure, the element that is contained by the parent element.)';
			sTemp=L_xdchildelement_TEXT;
			break;
		case 'xdclosedcontentmodel':
			L_xdclosedcontentmodel_TEXT='(closed content model: A set of XML document rules that states that an element in an XML document cannot include any information that is not declared in the schema that the document references.)';
			sTemp=L_xdclosedcontentmodel_TEXT;
			break;
		case 'xdconditionalformatting':
			L_xdconditionalformatting_TEXT='(conditional formatting: Changing the appearance of a control, including its visibility, based on values entered into the form.)';
			sTemp=L_xdconditionalformatting_TEXT;
			break;
		case 'xdcssselector':
			L_xdcssselector_TEXT='(CSS (cascading style sheets) selector: The name of the element type to which the display information applies.)';
			sTemp=L_xdcssselector_TEXT;
			break;
		case 'xdcustominstalledform':
			L_xdcustominstalledform_TEXT='(custom installed form: A form that is installed with a custom setup program and that usually has access to files and settings on the computer.)';
			sTemp=L_xdcustominstalledform_TEXT;
			break;
		case 'xdcustomtaskpane':
			L_xdcustomtaskpane_TEXT='(custom task pane: An .html file whose content is displayed in a window next to a form. Custom task panes can provide form-specific commands and Help content.)';
			sTemp=L_xdcustomtaskpane_TEXT;
			break;
		case 'xddataadapter':
			L_xddataadapter_TEXT='(data adapter: An object used to submit data to and retrieve data from databases, Web services, and .xml files.)';
			sTemp=L_xddataadapter_TEXT;
			break;
		case 'xddatasource':
			L_xddatasource_TEXT='(data source: The collection of fields and groups that define and store the data for an InfoPath form. Controls in the form are bound to the fields and groups in the data source.)';
			sTemp=L_xddatasource_TEXT;
			break;
		case 'xddatatype':
			L_xddatatype_TEXT='(data type: Property of a field that defines the kinds of data the field can store. Data types include Text, Rich Text, Whole Number, Decimal, True/False, Hyperlink, Date, Time, Date and Time, and Picture.)';
			sTemp=L_xddatatype_TEXT;
			break;
		case 'xddatavalidation':
			L_xddatavalidation_TEXT='(data validation: The process of testing the accuracy of data; a set of rules you can apply to a control to specify the type and range of data that users can enter.)';
			sTemp=L_xddatavalidation_TEXT;
			break;
		case 'xddeclarativeprogramming':
			L_xddeclarativeprogramming_TEXT='(declarative programming: Rule-based programming in which each rule is independent and the order in which rules are declared or executed is not significant.)';
			sTemp=L_xddeclarativeprogramming_TEXT;
			break;
		case 'xddesignmode':
			L_xddesignmode_TEXT='(design mode: The InfoPath design environment in which you can create or modify a form template.)';
			sTemp=L_xddesignmode_TEXT;
			break;
		case 'xddialogboxalert':
			L_xddialogboxalert_TEXT='(dialog box alert: A data validation alert that opens a dialog box with a custom error message when invalid data is entered into a control.)';
			sTemp=L_xddialogboxalert_TEXT;
			break;
		case 'xddocumenttypedefinitiondtd':
			L_xddocumenttypedefinitiondtd_TEXT='(Document Type Definition (DTD): The predecessor of a schema definition file that specifies rules for XML document elements, attributes, and containment relationships.)';
			sTemp=L_xddocumenttypedefinitiondtd_TEXT;
			break;
		case 'xdeventhandler':
			L_xdeventhandler_TEXT='(event handler: The script function code in an InfoPath form that responds to a form event or data validation event.)';
			sTemp=L_xdeventhandler_TEXT;
			break;
		case 'xdexpressionbox':
			L_xdexpressionbox_TEXT='(expression box: A control on a form that displays read-only data as the result of a lookup or calculation against the data using an XPath expression.)';
			sTemp=L_xdexpressionbox_TEXT;
			break;
		case 'xdfield':
			L_xdfield_TEXT='(field: An element or attribute in the data source that can contain data. If the field is an element, it can contain attribute fields. Fields store the data that is entered into controls.)';
			sTemp=L_xdfield_TEXT;
			break;
		case 'xdform':
			L_xdform_TEXT='(form: In InfoPath, a document with a set of controls into which users can enter information. InfoPath forms can contain features such as rich text boxes, date pickers, optional and repeating sections, data validation, and conditional formatting.)';
			sTemp=L_xdform_TEXT;
			break;
		case 'xdformarea':
			L_xdformarea_TEXT='(form area: The area of the InfoPath workspace that displays the form you are working with.)';
			sTemp=L_xdformarea_TEXT;
			break;
		case 'xdformdefinitionfilexsf':
			L_xdformdefinitionfilexsf_TEXT='(form definition file: An XML file with an .xsf extension that contains information about all other files and components used within a form, including user interface customizations, XML Schemas, views, business logic, events, and deployment settings.)';
			sTemp=L_xdformdefinitionfilexsf_TEXT;
			break;
		case 'xdformfiles':
			L_xdformfiles_TEXT='(form files: A collection of files that are used to implement an InfoPath form. File types can include .html, .xml, .xsd, .xslt, script, and other file types that are necessary to support the functionality of the form.)';
			sTemp=L_xdformfiles_TEXT;
			break;
		case 'xdformlibrary':
			L_xdformlibrary_TEXT='(form library: A folder in which a collection of forms based on the same template is stored and shared. Each form in a form library is associated with user-defined information that is displayed in the content listing for that library.)';
			sTemp=L_xdformlibrary_TEXT;
			break;
		case 'xdformlibrarycolumns':
			L_xdformlibrarycolumns_TEXT='(form library columns: Information from forms displayed in columns in a Windows SharePoint Services form library. For every form in the library, columns display information entered into controls that the form designer designated as form library columns.)';
			sTemp=L_xdformlibrarycolumns_TEXT;
			break;
		case 'xdformtemplate':
			L_xdformtemplate_TEXT='(form template: In InfoPath, a file or set of files that defines the data structure, appearance, and behavior of a form.)';
			sTemp=L_xdformtemplate_TEXT;
			break;
		case 'xdgroup':
			L_xdgroup_TEXT='(group: An element in the data source that can contain fields and other groups. Controls that contain other controls, such as repeating tables and sections, are bound to groups.)';
			sTemp=L_xdgroup_TEXT;
			break;
		case 'xdinlinealert':
			L_xdinlinealert_TEXT='(inline alert: A data validation alert that marks controls that contain invalid data with a dashed red border. Users can right-click controls to display custom error messages.)';
			sTemp=L_xdinlinealert_TEXT;
			break;
		case 'xdlayouttable':
			L_xdlayouttable_TEXT='(layout table: A collection of cells used to arrange form content such as text or controls.)';
			sTemp=L_xdlayouttable_TEXT;
			break;
		case 'xdlistcontrol':
			L_xdlistcontrol_TEXT='(list control: A control on a form that can be formatted as a bulleted, numbered, or plain list. A user can enter text into a list control, which repeats as needed.)';
			sTemp=L_xdlistcontrol_TEXT;
			break;
		case 'xdmicrosoftscripteditormse':
			L_xdmicrosoftscripteditormse_TEXT='(Microsoft Script Editor (MSE): A programming environment used to create, edit, and debug Microsoft JScript or Microsoft VBScript code in an InfoPath form.)';
			sTemp=L_xdmicrosoftscripteditormse_TEXT;
			break;
		case 'xdmicrosoftwindowsinstallermsi':
			L_xdmicrosoftwindowsinstallermsi_TEXT='(Microsoft Windows Installer (MSI): A tool that is used to create installation packages for software that is to be deployed on Windows operating systems.)';
			sTemp=L_xdmicrosoftwindowsinstallermsi_TEXT;
			break;
		case 'xdnamespace':
			L_xdnamespace_TEXT='(namespace: A mechanism that uniquely qualifies element names and relationships to avoid name collisions on elements that have the same name but are coming from multiple sources.)';
			sTemp=L_xdnamespace_TEXT;
			break;
		case 'xdopencontentmodel':
			L_xdopencontentmodel_TEXT='(open content model: A set of XML document rules that states that an element in an XML document can have additional child elements and attributes that are not declared in the schema that the document references.)';
			sTemp=L_xdopencontentmodel_TEXT;
			break;
		case 'xdoptionalsection':
			L_xdoptionalsection_TEXT='(optional section: A control on a form that contains other controls and that usually does not appear by default. Users can insert and remove optional sections when filling out the form.)';
			sTemp=L_xdoptionalsection_TEXT;
			break;
		case 'xdparentelement':
			L_xdparentelement_TEXT='(parent element: In XML, the element of which a given element is a child.)';
			sTemp=L_xdparentelement_TEXT;
			break;
		case 'xdprocessinginstructions':
			L_xdprocessinginstructions_TEXT='(processing instructions: Information stored in the prologue of an XML document. This information is passed through the XML parser to any application that uses the XML document.)';
			sTemp=L_xdprocessinginstructions_TEXT;
			break;
		case 'xdpublish':
			L_xdpublish_TEXT='(publish: To make a form available for others to fill out. A published form template is saved to a shared location such as a Web server or a company intranet.)';
			sTemp=L_xdpublish_TEXT;
			break;
		case 'xdreferencefield':
			L_xdreferencefield_TEXT='(reference field: A field that is associated with another field so that their properties always match. If the properties in one field are changed, the properties in the other field are updated automatically.)';
			sTemp=L_xdreferencefield_TEXT;
			break;
		case 'xdreferencegroup':
			L_xdreferencegroup_TEXT='(reference group: A group that is associated with another group so that their properties and the properties of the groups and fields they contain always match. If the properties of one group are changed, the other group is updated automatically.)';
			sTemp=L_xdreferencegroup_TEXT;
			break;
		case 'xdrepeatingfield':
			L_xdrepeatingfield_TEXT='(repeating field: A field in the data source that can occur more than once. Controls such as bulleted, numbered, and plain lists; repeating sections; and repeating tables can be bound to repeating fields.)';
			sTemp=L_xdrepeatingfield_TEXT;
			break;
		case 'xdrepeatinggroup':
			L_xdrepeatinggroup_TEXT='(repeating group: A group in the data source that can occur more than once. Controls such as repeating sections and repeating tables are bound to repeating groups.)';
			sTemp=L_xdrepeatinggroup_TEXT;
			break;
		case 'xdrepeatingsection':
			L_xdrepeatingsection_TEXT='(repeating section: A control on a form that contains other controls and that repeats as needed. Users can insert multiple sections when filling out the form.)';
			sTemp=L_xdrepeatingsection_TEXT;
			break;
		case 'xdrepeatingtable':
			L_xdrepeatingtable_TEXT='(repeating table: A control on a form that contains other controls in a table format and that repeats as needed. Users can insert multiple rows when filling out the form.)';
			sTemp=L_xdrepeatingtable_TEXT;
			break;
		case 'xdresourcemanager':
			L_xdresourcemanager_TEXT='(Resource Manager: The interface for adding and removing resource files that support the functionality of a form.)';
			sTemp=L_xdresourcemanager_TEXT;
			break;
		case 'xdrootelement':
			L_xdrootelement_TEXT='(root element: The element in an XML document that contains all other elements. It is the top-level element of an XML document and must be the first element in the document.)';
			sTemp=L_xdrootelement_TEXT;
			break;
		case 'xdsecondarydatasource':
			L_xdsecondarydatasource_TEXT='(secondary data source: An XML data file, database, or Web service that is used by a form for the entries in a list box or for script actions.)';
			sTemp=L_xdsecondarydatasource_TEXT;
			break;
		case 'xdsection':
			L_xdsection_TEXT='(section: A control on a form that contains other controls.)';
			sTemp=L_xdsection_TEXT;
			break;
		case 'xdtable':
			L_xdtable_TEXT='(table: One or more rows of cells commonly used to display numbers and other items for quick reference and analysis. Items in a table are organized into rows and columns.)';
			sTemp=L_xdtable_TEXT;
			break;
		case 'xdtextbox':
			L_xdtextbox_TEXT='(text box: A control into which a user can enter text. Rich text boxes allow data entry with text formatting choices.)';
			sTemp=L_xdtextbox_TEXT;
			break;
		case 'xdvalid':
			L_xdvalid_TEXT='(valid: Error free, or acceptable according to an established set of rules or standards. For example, data entered into a form is valid if it meets the criteria set in the form\'s data validation rules.)';
			sTemp=L_xdvalid_TEXT;
			break;
		case 'xdvalidxml':
			L_xdvalidxml_TEXT='(valid XML: A well-formed XML document that conforms to a specific set of constraints, usually defined in an XML Schema.)';
			sTemp=L_xdvalidxml_TEXT;
			break;
		case 'xdview':
			L_xdview_TEXT='(view: A form-specific display setting that can be saved with a form template and applied to form data when the form is being filled out. Users can switch between views to choose the amount of data shown in the form.)';
			sTemp=L_xdview_TEXT;
			break;
		case 'xdwellformedxml':
			L_xdwellformedxml_TEXT='(well-formed XML: An XML document that meets the minimal criteria for a conforming XML document.)';
			sTemp=L_xdwellformedxml_TEXT;
			break;
		case 'xdxhtml':
			L_xdxhtml_TEXT='(Extensible Hypertext Markup Language (XHTML): A markup language that extends HTML and reformulates it as XML.)';
			sTemp=L_xdxhtml_TEXT;
			break;
		case 'xdxmlattribute':
			L_xdxmlattribute_TEXT='(XML attribute: An XML structural construct. A name-value pair, separated by an equal sign and included in a tagged element, that modifies features of an element. All attribute values are text strings and must be enclosed in quotation marks.)';
			sTemp=L_xdxmlattribute_TEXT;
			break;
		case 'xdxmldata':
			L_xdxmldata_TEXT='(XML data: Data that is saved in an XML format. InfoPath forms are saved as XML data files.)';
			sTemp=L_xdxmldata_TEXT;
			break;
		case 'xdxmlelement':
			L_xdxmlelement_TEXT='(XML element: An XML structure that consists of a start tag, an end tag, and the information between the tags. Elements can have attributes and can contain other elements.)';
			sTemp=L_xdxmlelement_TEXT;
			break;
		case 'xdxmlparser':
			L_xdxmlparser_TEXT='(XML parser: A software component used to process XML documents by validating their structure and producing views or transformations of their content.)';
			sTemp=L_xdxmlparser_TEXT;
			break;
		case 'xdxmlsignature':
			L_xdxmlsignature_TEXT='(XML Signature: An XML-based digital signature that can be used to help secure the data contained in XML documents. XML Signatures are a standard governed by the World Wide Web Consortium (W3C).)';
			sTemp=L_xdxmlsignature_TEXT;
			break;
		case 'xdxmltemplatefile':
			L_xdxmltemplatefile_TEXT='(XML template file: An XML file that contains the sample data that is displayed in the fields of a form before a user fills it out.)';
			sTemp=L_xdxmltemplatefile_TEXT;
			break;
		case 'xdxpath':
			L_xdxpath_TEXT='(XML Path Language (XPath): A language used to address parts of an XML document. XPath also provides basic facilities for manipulation of strings, numbers, and Booleans.)';
			sTemp=L_xdxpath_TEXT;
			break;
		case 'xdxsltransformationxslt':
			L_xdxsltransformationxslt_TEXT='(XSL Transformation (XSLT): A language that is used to transform XML documents into other types of documents, such as HTML or XML. It is designed for use as part of XSL.)';
			sTemp=L_xdxsltransformationxslt_TEXT;
			break;

		// Visio

		case 'Abstract_class':
			L_Abstract_class_TEXT='(abstract class: A class for which no instances may be created.)';
			sTemp=L_Abstract_class_TEXT;
			break;
		case 'Abstract_type':
			L_Abstract_type_TEXT='(abstract type: A type with members that belong to a subtype. In a conceptual model, you indicate an abstract type by showing its title in italics.)';
			sTemp=L_Abstract_type_TEXT;
			break;
		case 'Action':
			L_Action_TEXT='(action: (1) A user-defined menu item associated with a shape. When the shape is selected, the item appears on the shortcut menu and on the Actions submenu of the Shape menu. (2) A program or Visio command that runs in response to an event.)';
			sTemp=L_Action_TEXT;
			break;
		case 'Action_2':
			L_Action_2_TEXT='(action: In a state-chart diagram, the response an object in a particular state makes to an event without changing its state. Unlike activities, actions have negligible execution times and cannot be interrupted.)';
			sTemp=L_Action_2_TEXT;
			break;
		case 'Action_state':
			L_Action_state_TEXT='(action state: In an activity diagram, a type of state that has an internal action and at least one outgoing transition that involves the explicit events of completing the internal action.)';
			sTemp=L_Action_state_TEXT;
			break;
		case 'Activation':
			L_Activation_TEXT='(activation: In a sequence diagram, the time period during which an object or actor is performing an action. Activation is represented by a thin rectangle.)';
			sTemp=L_Activation_TEXT;
			break;
		case 'Active_document':
			L_Active_document_TEXT='(active document: The document that is currently available for editing in Visio.)';
			sTemp=L_Active_document_TEXT;
			break;
		case 'Active_object':
			L_Active_object_TEXT='(active object: In a collaboration diagram, an object role that can initiate control. Typical active objects include processes and tasks. In contrast, a passive object holds data and may send messages, but it does not initiate control.)';
			sTemp=L_Active_object_TEXT;
			break;
		case 'Active_page':
			L_Active_page_TEXT='(active page: The drawing page that is currently available for editing in a Visio document.)';
			sTemp=L_Active_page_TEXT;
			break;
		case 'Activity':
			L_Activity_TEXT='(activity: In a statechart diagram, the response an object in a particular state makes to an event without changing its state. Unlike actions, activities have non-negligible execution times and can be interrupted. The keyword \"do\" indicates an activity.)';
			sTemp=L_Activity_TEXT;
			break;
		case 'Activity_diagram':
			L_Activity_diagram_TEXT='(activity diagram: A special case of a statechart diagram in which all of the states are action states and the transitions are triggered by the completion of actions in the source state.)';
			sTemp=L_Activity_diagram_TEXT;
			break;
		case 'Actor':
			L_Actor_TEXT='(actor: In a use-case diagram, a representation of a role played by an outside object. One physical object, therefore, may be represented by several actors. A communicates relationship indicates how an actor participates in a use case.)';
			sTemp=L_Actor_TEXT;
			break;
		case 'Actor_Class':
			L_Actor_Class_TEXT='(actor class: The basic component of a ROOM structure diagram. The space inside the actor can contain actor references, behavior end ports, reference ports, bindings, and layer connections. The border can contain class relay ports and class end ports.)';
			sTemp=L_Actor_Class_TEXT;
			break;
		case 'Actor_Reference':
			L_Actor_Reference_TEXT='(actor reference: The actors that define components of your structure diagram. Actor references can appear only inside an actor class. An actor reference can have reference ports on its outside border.)';
			sTemp=L_Actor_Reference_TEXT;
			break;
		case 'Add_on':
			L_Add_on_TEXT='(add-on: A program that extends the Visio application through Automation references to Visio objects, methods, and properties.)';
			sTemp=L_Add_on_TEXT;
			break;
		case 'Aggregation':
			L_Aggregation_TEXT='(aggregation: Indicates that one element, such as a point, is part of another element, such as a polygon. In UML notation, indicate aggregation by attaching a hollow diamond to the class that is the aggregate.)';
			sTemp=L_Aggregation_TEXT;
			break;
		case 'Alignment_box':
			L_Alignment_box_TEXT='(alignment box: The rectangle that appears around shapes and objects from other applications as you move them.)';
			sTemp=L_Alignment_box_TEXT;
			break;
		case 'Anchor_point':
			L_Anchor_point_TEXT='(anchor point: A fixed point that anchors a \"rubber band\" line, whose other end is connected to a control handle. As you move the control handle, the rubber band line stretches and shrinks to show the original location of the handle.)';
			sTemp=L_Anchor_point_TEXT;
			break;
		case 'Angle_of_rotation':
			L_Angle_of_rotation_TEXT='(angle of rotation: The angle of the orientation of a shape\'s local coordinate system with respect to its parent coordinate system. The angle of rotation is specified in the Angle cell of the Shape Transform section in a ShapeSheet spreadsheet.)';
			sTemp=L_Angle_of_rotation_TEXT;
			break;
		case 'Angular_units':
			L_Angular_units_TEXT='(angular units: The units in which angles are expressed in ShapeSheet cells.)';
			sTemp=L_Angular_units_TEXT;
			break;
		case 'Animated_build':
			L_Animated_build_TEXT='(animated build: A method of building a PowerPoint slide using elements of a Visio drawing. In an animated build, you introduce elements of the Visio drawing into a slide one at a time.)';
			sTemp=L_Animated_build_TEXT;
			break;
		case 'Antiscaling':
			L_Antiscaling_TEXT='(antiscaling: Behavior in which a shape is not sized according to the drawing scale of a page. The Visio application automatically antiscales shapes when the drawing scale of the master exceeds the range of eight.)';
			sTemp=L_Antiscaling_TEXT;
			break;
		case 'Argument':
			L_Argument_TEXT='(argument: A representation of the actual values passed to a dispatched request and aggregated within an action.)';
			sTemp=L_Argument_TEXT;
			break;
		case 'aspect_ratio':
			L_aspect_ratio_TEXT='(aspect ratio: A ratio of one dimension to another. When the aspect ratio is locked, the shape can be sized only proportionally; it cannot be sized in a singe dimension.)';
			sTemp=L_aspect_ratio_TEXT;
			break;
		case 'Asset':
			L_Asset_TEXT='(asset: A person or object for which you want to track information.)';
			sTemp=L_Asset_TEXT;
			break;
		case 'Association':
			L_Association_TEXT='(association: A relationship between two or more classes (for example, a point is on a polygon; a company places an order). In UML notation, indicate an association with a solid line.)';
			sTemp=L_Association_TEXT;
			break;
		case 'Association_class':
			L_Association_class_TEXT='(association class: In a static structure diagram, a class used to add attributes, operations, and more properties to an association. Drawn as a class attached by a dashed line to an association, an association class is actually a single modeling element.)';
			sTemp=L_Association_class_TEXT;
			break;
		case 'Association_End':
			L_Association_End_TEXT='(association end: The end of a binary or other association where it connects to a class. By associating properties with an association end, you can indicate the role or direction.)';
			sTemp=L_Association_End_TEXT;
			break;
		case 'AssociationRole':
			L_AssociationRole_TEXT='(AssociationRole: A type of collaboration role that describes the relationship between two ClassifierRoles. It is represented by a path between two class role elements and can include the underlined name of the corresponding association.)';
			sTemp=L_AssociationRole_TEXT;
			break;
		case 'Attribute':
			L_Attribute_TEXT='(attribute: An individual formatting element, such as line color, fill color, or line weight, that you can apply to shapes. A style can have more than one attribute.)';
			sTemp=L_Attribute_TEXT;
			break;
		case 'Attribute_2':
			L_Attribute_2_TEXT='(attribute: A data definition held by a class. The structure of a class is described by its attributes. The default syntax for an attribute is:  visibility name : type-expression=initial value {property string})';
			sTemp=L_Attribute_2_TEXT;
			break;
		case 'attribute_database_2':
			L_attribute_database_2_TEXT='(attribute: In a relational model, a column of a table. In an entity relationship model, a property of an entity.)';
			sTemp=L_attribute_database_2_TEXT;
			break;
		case 'Automatic_layout':
			L_Automatic_layout_TEXT='(automatic layout: The positioning of shapes and the routing of connectors that occurs while you edit a connected drawing or when you choose the Lay Out Shapes command on the Shape menu.)';
			sTemp=L_Automatic_layout_TEXT;
			break;
		case 'Automation':
			L_Automation_TEXT='(Automation: A means by which an application can incorporate or extend the functionality of another application by using its objects. Formerly known as OLE Automation.)';
			sTemp=L_Automation_TEXT;
			break;
		case 'Background':
			L_Background_TEXT='(background: A page that you can assign to another page to create multiple layers in a drawing. You can see the shapes on a background when the page it is assigned to is displayed. You must display the background page to select or edit the background.)';
			sTemp=L_Background_TEXT;
			break;
		case 'Begin_point':
			L_Begin_point_TEXT='(begin point: The selection handle at the beginning of a one-dimensional (1-D) shape. The begin point is marked by an X.)';
			sTemp=L_Begin_point_TEXT;
			break;
		case 'Binary_Association':
			L_Binary_Association_TEXT='(binary association: In a static structure diagram, a relationship between exactly two classes. You can add name and stereotype properties to a binary association. The point where a binary association connects to a class is an association end or role.)';
			sTemp=L_Binary_Association_TEXT;
			break;
		case 'Binding':
			L_Binding_TEXT='(binding: A kind of dependency that indicates a binding of parameterized class, or template, parameters to actual values to create a bound, or nonparameterized, element.)';
			sTemp=L_Binding_TEXT;
			break;
		case 'Bindings':
			L_Bindings_TEXT='(bindings: A representation of the communication path between actors.)';
			sTemp=L_Bindings_TEXT;
			break;
		case 'Bitmap':
			L_Bitmap_TEXT='(bitmap: An image stored as a pattern of dots. A scanned photograph or graphic that you create in a paint program is usually stored as a bitmap.)';
			sTemp=L_Bitmap_TEXT;
			break;
		case 'Block':
			L_Block_TEXT='(block: In a CAD drawing, one or more entities grouped together to form a single entity.)';
			sTemp=L_Block_TEXT;
			break;
		case 'Bound_element':
			L_Bound_element_TEXT='(bound element: In a static structure diagram, a use of a parameterized class, or template, in which the parameters from the parameterized class are bound to actual values.)';
			sTemp=L_Bound_element_TEXT;
			break;
		case 'Bow':
			L_Bow_TEXT='(bow: The distance from the midpoint of a circular arc to the midpoint of the arc\'s chord.)';
			sTemp=L_Bow_TEXT;
			break;
		case 'CAD':
			L_CAD_TEXT='(CAD: Acronym for computer-aided design.)';
			sTemp=L_CAD_TEXT;
			break;
		case 'Call_Event':
			L_Call_Event_TEXT='(CallEvent: In a statechart or activity diagram, an indication that an object has received a call for an operation. A CallEvent is defined using the following format:event-name (comma-separated-parameter-list))';
			sTemp=L_Call_Event_TEXT;
			break;
		case 'CAPSIF':
			L_CAPSIF_TEXT='(CAPSIF: A standard file format used in specifying or ordering furniture from distributors.)';
			sTemp=L_CAPSIF_TEXT;
			break;
		case 'Category':
			L_Category_TEXT='(category: A classification of information tracked in a facilities plan. Categories include assets such as person, computer, printer, asset, and space, as well as organizational groupings such as company or department.)';
			sTemp=L_Category_TEXT;
			break;
		case 'Cell_reference':
			L_Cell_reference_TEXT='(cell reference: Used in formulas in a ShapeSheet spreadsheet to calculate the value of one cell on the basis of the value of another cell.)';
			sTemp=L_Cell_reference_TEXT;
			break;
		case 'Center_of_rotation':
			L_Center_of_rotation_TEXT='(center of rotation: The point around which a shape or text block rotates.)';
			sTemp=L_Center_of_rotation_TEXT;
			break;
		case 'Change_Event':
			L_Change_Event_TEXT='(ChangeEvent: In a statechart or activity diagram, an event in which a designated condition becomes true. A ChangeEvent is indicated by the keyword when followed by a Boolean expression in parentheses, for example: when (balance &lt; 0))';
			sTemp=L_Change_Event_TEXT;
			break;
		case 'Check_clause':
			L_Check_clause_TEXT='(check clause: Code that enforces constraints on a table or column.)';
			sTemp=L_Check_clause_TEXT;
			break;
		case 'Choicepoints':
			L_Choicepoints_TEXT='(choicepoints: The points at which  transitions split into multiple, mutually exclusive branches, each terminating at a different destination state. One of the branches must be a default branch.)';
			sTemp=L_Choicepoints_TEXT;
			break;
		case 'Chord':
			L_Chord_TEXT='(chord: A line that connects the endpoints of an arc.)';
			sTemp=L_Chord_TEXT;
			break;
		case 'Class':
			L_Class_TEXT='(class: In a static structure diagram, a set of objects with similar structure, behavior, and relationships. Classes are declared in class (static structure) diagrams and represent concepts in the systems being modeled.)';
			sTemp=L_Class_TEXT;
			break;
		case 'Class_module':
			L_Class_module_TEXT='(class module: In a Microsoft Visual Basic for Applications (VBA) or Visual Basic project, a module containing the definition of a class (its properties and methods).)';
			sTemp=L_Class_module_TEXT;
			break;
		case 'Classifier':
			L_Classifier_TEXT='(classifier: A superclass that includes class, data type, and interface subclasses. Because all classifier subclasses share the same syntax, they are all represented by the same rectangle model element.)';
			sTemp=L_Classifier_TEXT;
			break;
		case 'ClassifierRole':
			L_ClassifierRole_TEXT='(ClassifierRole: A type of collaboration role that is a slot for an object in a collaboration. It is represented by the class rectangle symbol with only the name compartment showing.)';
			sTemp=L_ClassifierRole_TEXT;
			break;
		case 'ClientSide_image_map':
			L_ClientSide_image_map_TEXT='(client-side image map: A graphic with different linked regions. All the information a Web browser needs to process a click on a linked region is stored in the HTML file with the image data.)';
			sTemp=L_ClientSide_image_map_TEXT;
			break;
		case 'Clipboard':
			L_Clipboard_TEXT='(Clipboard: A temporary storage area in Windows that is used to transfer data between documents and applications. You can use the Clipboard to copy shapes and text between drawings in the Visio program, and between programs.)';
			sTemp=L_Clipboard_TEXT;
			break;
		case 'closed_shape':
			L_closed_shape_TEXT='(closed shape: A shape that is surrounded by a continuous outline, such as a rectangle or circle. You can fill a closed shape with a color or a pattern.)';
			sTemp=L_closed_shape_TEXT;
			break;
		case 'Code_behind_events':
			L_Code_behind_events_TEXT='(code behind events: In a Microsoft Visual Basic for Applications (VBA) program, code that is executed when an event occurs. For example, a button on a user form usually has code behind the Click event.)';
			sTemp=L_Code_behind_events_TEXT;
			break;
		case 'Collaboration':
			L_Collaboration_TEXT='(collaboration: A collection of modeling elements that interact within a given context to perform an operation or a use case. The objects in a collaboration are roles describing types of objects rather than representations of the objects themselves.)';
			sTemp=L_Collaboration_TEXT;
			break;
		case 'Collaboration_diagram':
			L_Collaboration_diagram_TEXT='(collaboration diagram: An interaction diagram that shows, for one system event described by one use case, how a group of objects collaborate with one another.)';
			sTemp=L_Collaboration_diagram_TEXT;
			break;
		case 'Collaboration_role':
			L_Collaboration_role_TEXT='(collaboration role: A slot for an object in a collaboration that describes the type of objects that may play the role and its relationships to other roles. To show a collaboration role, use the notation for an object or a link.)';
			sTemp=L_Collaboration_role_TEXT;
			break;
		case 'Collection_type':
			L_Collection_type_TEXT='(collection type: Allows a collection; such as a set, list, or multiset; of objects of the same type to be stored in a single field.)';
			sTemp=L_Collection_type_TEXT;
			break;
		case 'Color_scheme':
			L_Color_scheme_TEXT='(color scheme: A set of colors you can assign to some drawing types. You can choose from preset color schemes, or you can create a new color scheme.)';
			sTemp=L_Color_scheme_TEXT;
			break;
		case 'Communicates_relationship':
			L_Communicates_relationship_TEXT='(communicates relationship: In a use case diagram, a relationship that defines how an actor participates in a use case. You can add an arrow to the relationship to indicate the direction the information flows.)';
			sTemp=L_Communicates_relationship_TEXT;
			break;
		case 'Complex_transition':
			L_Complex_transition_TEXT='(complex transition: In a statechart or activity diagram, a relationship between multiple source and/or target states or action states (a simple transition relates one source and one target state or activity).)';
			sTemp=L_Complex_transition_TEXT;
			break;
		case 'Component':
			L_Component_TEXT='(component: In component and deployment diagrams, a distributable unit of implementation in a system. For example, a component can represent a physical module of code (source, binary, or executable) or a business document in a human system.)';
			sTemp=L_Component_TEXT;
			break;
		case 'Component_1':
			L_Component_1_TEXT='(component: In the Process Engineering templates, a component represents a single physical object in the real world, such as a valve or a pipeline. In a process engineering diagram, each component is represented by a shape or multiple shapes.)';
			sTemp=L_Component_1_TEXT;
			break;
		case 'Component_diagram':
			L_Component_diagram_TEXT='(component diagram: An implementation diagram that shows the structure of the code itself. From a component diagram, you can learn about compiler and run-time dependencies between software components, such as source code files or DLLs.)';
			sTemp=L_Component_diagram_TEXT;
			break;
		case 'Composite_object':
			L_Composite_object_TEXT='(composite object: A high-level object made of tightly bound parts. A composite object is an instance of a composite class, which implies the composition aggregation between the class and its parts.)';
			sTemp=L_Composite_object_TEXT;
			break;
		case 'Composite_state':
			L_Composite_state_TEXT='(composite state: In a statechart diagram, a state that has been decomposed into concurrent (representing and relationships) or mutually exclusive (representing or relationships) substates.)';
			sTemp=L_Composite_state_TEXT;
			break;
		case 'Composition':
			L_Composition_TEXT='(composition: A form of aggregation that indicates that a part may belong to only one whole and that the lifetime of the whole determines the lifetime of the part. If the whole is deleted, so are its parts.)';
			sTemp=L_Composition_TEXT;
			break;
		case 'Conceptual_model':
			L_Conceptual_model_TEXT='(conceptual model: A tool used in the analysis phase of software development to help decompose a problem into individual concepts or objects and clarify the vocabulary of the domain.)';
			sTemp=L_Conceptual_model_TEXT;
			break;
		case 'configuration_context':
			L_configuration_context_TEXT='(configuration context: In the Active Directory solution, the configuration context stores information about the Active Directory forest. It contains a collection of sites, partitions, and subnets.)';
			sTemp=L_configuration_context_TEXT;
			break;
		case 'Connection_point':
			L_Connection_point_TEXT='(connection point: A point on a shape where a connection point can be glued. You can create new connection points inside, outside, or on the perimeter of a shape using the Connection Point tool. Each of a shape\'s connection points is marked with a blue X.)';
			sTemp=L_Connection_point_TEXT;
			break;
		case 'Connector':
			L_Connector_TEXT='(connector: Any one-dimensional (1-D) shape that can be glued between two shapes in a drawing to connect the shapes.)';
			sTemp=L_Connector_TEXT;
			break;
		case 'Constraint':
			L_Constraint_TEXT='(constraint: A specification for conditions and propositions that must be maintained as true for the system to be valid. Constraints are expressed as text within braces ({  }).)';
			sTemp=L_Constraint_TEXT;
			break;
		case 'Constraint_ORM':
			L_Constraint_ORM_TEXT='(constraint ORM: A rule that limits the instances allowed in one or more roles or that identifies a composite or nested object type. For example, an internal uniqueness constraint does not allow duplicate instances in the constrained role or roles.)';
			sTemp=L_Constraint_ORM_TEXT;
			break;
		case 'Container':
			L_Container_TEXT='(container: An OLE application in which you embed or link information. For example, if you insert a Visio drawing into a Word document, Word is the container application. A container application is also known as a client.)';
			sTemp=L_Container_TEXT;
			break;
		case 'Container_2':
			L_Container_2_TEXT='(container: An object that can have potential child or parent levels.)';
			sTemp=L_Container_2_TEXT;
			break;
		case 'Control':
			L_Control_TEXT='(control: An object you can place on a user form or a Visio drawing page that has its own set of properties, methods, and events, such as a toolbar button.)';
			sTemp=L_Control_TEXT;
			break;
		case 'Control_flow':
			L_Control_flow_TEXT='(control flow: A transition in an activity diagram. A control flow represents a relationship between two states or action states and indicates that an object in the first state will enter the second state and perform specified actions.)';
			sTemp=L_Control_flow_TEXT;
			break;
		case 'Control_handle':
			L_Control_handle_TEXT='(control handle: A handle that specifies unique behavior for certain shapes. For example, in some shapes you can use a control handle to reposition text on the drawing page. You can pause the pointer over a control handle to see what it does.)';
			sTemp=L_Control_handle_TEXT;
			break;
		case 'Control_point':
			L_Control_point_TEXT='(control point: (1) The circle that appears on a line segment or an arc segment when you select them with the pencil tool. Drag a control point to change the curve of an arc or ellipse. (2) A point that influences the curvature of a spline segment.)';
			sTemp=L_Control_point_TEXT;
			break;
		case 'Control_polygon':
			L_Control_polygon_TEXT='(control polygon: A series of straight line segments that connects all the control points of a single spline.)';
			sTemp=L_Control_polygon_TEXT;
			break;
		case 'Controller_application':
			L_Controller_application_TEXT='(controller application: In Automation, the application (such as your program) that uses the objects exposed by a provider application. The controller application creates instances of the objects and then sets their properties or invokes their methods.)';
			sTemp=L_Controller_application_TEXT;
			break;
		case 'Coordinates':
			L_Coordinates_TEXT='(coordinates: A pair of numbers that indicates the position of a point in relation to the origin of a shape, a group, or the page. The x-coordinate indicates the horizontal distance and the y-coordinate indicates the vertical distance of the point.)';
			sTemp=L_Coordinates_TEXT;
			break;
		case 'Creation_destruction_markers':
			L_Creation_destruction_markers_TEXT='(creation/destruction markers: In a collaboration diagram, markers used to indicate object roles and association roles, or links, that are created and destroyed during the operation.)';
			sTemp=L_Creation_destruction_markers_TEXT;
			break;
		case 'Crop':
			L_Crop_TEXT='(crop: To reduce an inserted object or picture. Although cropping appears to clip off parts of the object or picture, the clipped portions are retained in memory. Crop an object or picture by selecting it with the Crop tool and dragging one of its handles.)';
			sTemp=L_Crop_TEXT;
			break;
		case 'Crows_Foot':
			L_Crows_Foot_TEXT='(Crow\'s Foot: A specification language for describing data structures. You can use the Crow\'s Foot entity and relationship shapes to diagram the structure of databases.)';
			sTemp=L_Crows_Foot_TEXT;
			break;
		case 'Custom_color':
			L_Custom_color_TEXT='(custom color: A color in the Visio application that is stored with a shape as an RGB or HSL value rather than as an index to the document\'s color palette. A custom color is saved only with the shape to which it is applied.)';
			sTemp=L_Custom_color_TEXT;
			break;
		case 'Custom_property':
			L_Custom_property_TEXT='(custom property: Information about shapes in your drawings. Some Visio shapes come with custom properties already defined. You can edit or delete existing custom properties or create new ones.)';
			sTemp=L_Custom_property_TEXT;
			break;
		case 'Data_points':
			L_Data_points_TEXT='(data points: In the Charts And Graphs template. Control handles on the Line Graph shape that you can drag to change the values in the graph.)';
			sTemp=L_Data_points_TEXT;
			break;
		case 'Data_source':
			L_Data_source_TEXT='(data source: The information necessary to access a database, including the database location, the file name, and the name of the driver the database uses.)';
			sTemp=L_Data_source_TEXT;
			break;
		case 'Data_store_DFD_model':
			L_Data_store_DFD_model_TEXT='(data store. A repository of information. A line from a data store to a process indicates that data from the store is used by the process. A line from a process to a data store means that the process changes the information in the data store.)';
			sTemp=L_Data_store_DFD_model_TEXT;
			break;
		case 'Data_type':
			L_Data_type_TEXT='(data type: A description of the type or the number of characters that can be entered into a field. Restricting a field\'s data type reduces errors in your data entry.)';
			sTemp=L_Data_type_TEXT;
			break;
		case 'Data_type_2':
			L_Data_type_2_TEXT='(data type. An instance of the DataType metaclass defined in the UML metamodel. A data type declares a type of class attribute. That type is available as a string you can include when you define attributes for other elements in a model.)';
			sTemp=L_Data_type_2_TEXT;
			break;
		case 'Dataflow_DFD_model':
			L_Dataflow_DFD_model_TEXT='(dataflow: In a DFD model, an exchange of information between processes. Data flows represent discrete packets of data that flow into and out of processes.)';
			sTemp=L_Dataflow_DFD_model_TEXT;
			break;
		case 'Dataflow_diagram':
			L_Dataflow_diagram_TEXT='(dataflow diagram: A tool for functional analysis that shows the general flow of information through a system or program.)';
			sTemp=L_Dataflow_diagram_TEXT;
			break;
		case 'Decision':
			L_Decision_TEXT='(decision: In an activity diagram, a guard condition that indicates different possible transitions from an action state. If one of these transitions leads to another decision, that decision is represented with the traditional diamond shape.)';
			sTemp=L_Decision_TEXT;
			break;
		case 'Default_font':
			L_Default_font_TEXT='(default font: The font that the Visio program uses by default to display text included in a shape. The default font is displayed with angle brackets in the Font dialog box.)';
			sTemp=L_Default_font_TEXT;
			break;
		case 'Default_units':
			L_Default_units_TEXT='(default units: The units of measure used to display a value in a ShapeSheet cell if no units of measure are explicitly specified. Default drawing and page units are properties of a drawing page. Default angular and text units are application settings.)';
			sTemp=L_Default_units_TEXT;
			break;
		case 'Deferred_event':
			L_Deferred_event_TEXT='(deferred event: In a statechart or activity diagram, an event that must be deferred for later use while another activity is under way. You can show a deferred event for a state by including the event among the state\'s internal transitions.)';
			sTemp=L_Deferred_event_TEXT;
			break;
		case 'Dependency':
			L_Dependency_TEXT='(dependency: A relationship between two elements that indicates that changes to the target element may cause changes in the source element.)';
			sTemp=L_Dependency_TEXT;
			break;
		case 'Deployment_diagram':
			L_Deployment_diagram_TEXT='(deployment diagram: An implementation diagram that shows the structure of a run-time system. From it, you can learn about the physical relationships among software and hardware components and the distribution of components to processing nodes.)';
			sTemp=L_Deployment_diagram_TEXT;
			break;
		case 'Derived_element':
			L_Derived_element_TEXT='(derived element: An element, such as an attribute or association, that can be calculated or derived from other information. For example, an age attribute for the class Person can be derived if you know the Person\'s date of birth.)';
			sTemp=L_Derived_element_TEXT;
			break;
		case 'Destination_file':
			L_Destination_file_TEXT='(destination file: The file into which a linked or embedded object is inserted. The file that is used to create the object is the source file. When you change information in a destination file, the change is not made in the source file.)';
			sTemp=L_Destination_file_TEXT;
			break;
		case 'DGN':
			L_DGN_TEXT='(DGN: A format used by the Bentley MicroStation CAD program to store drawing files.)';
			sTemp=L_DGN_TEXT;
			break;
		case 'Digitally_signed':
			L_Digitally_signed_TEXT='(digitally signed: A digital signature is an electronic, encryption-based, security-enhanced stamp of authentication on a macro or document. This signature confirms that the macro or document originated from the signer and has not been altered.)';
			sTemp=L_Digitally_signed_TEXT;
			break;
		case 'Directory_Service':
			L_Directory_Service_TEXT='(Directory Service: An application that allows you to access a directory, which is a database of information about a network\'s resources, such as hardware, software, users, or policies.)';
			sTemp=L_Directory_Service_TEXT;
			break;
		case 'Discriminator':
			L_Discriminator_TEXT='(discriminator: A text label on a generalization path that indicates the name of a partition of the general class that the more specific class is in. The default discriminator is an empty string.)';
			sTemp=L_Discriminator_TEXT;
			break;
		case 'distribute':
			L_distribute_TEXT='(distribute: You can create an equal distance between the ends or centers of selected shapes. To do this, on the Shapes menu, point to Distribute Shapes. You also can align shapes to other shapes. On the Shapes menu, click Align Shapes.)';
			sTemp=L_distribute_TEXT;
			break;
		case 'Docked_stencil':
			L_Docked_stencil_TEXT='(docked stencil: A stencil that is attached to the side of the drawing window. By default, stencils are docked on the left side of the window. You can float stencils, or you can dock them on the right side, the top, or the bottom of the drawing window.)';
			sTemp=L_Docked_stencil_TEXT;
			break;
		case 'Document_library':
			L_Document_library_TEXT='(document library: A folder where a collection of files is shared and the files often use the same template. Each file in a library is associated with user-defined information that is displayed in the content listing for that library.)';
			sTemp=L_Document_library_TEXT;
			break;
		case 'Documentation_tab':
			L_Documentation_tab_TEXT='(Code tab: In the UML solution, a window that displays language-specific semantic errors associated with UML elements. Errors listed in the Code window are based on the language selected for code generation.)';
			sTemp=L_Documentation_tab_TEXT;
			break;
		case 'Domain_of_influence':
			L_Domain_of_influence_TEXT='(domain of influence: The portion of a spline, specified as a number of spline knots, whose curvature is influenced by a single control point.)';
			sTemp=L_Domain_of_influence_TEXT;
			break;
		case 'Drag_and_drop_drawing':
			L_Drag_and_drop_drawing_TEXT='(drag-and-drop drawing: Creating an instance of a master in a drawing by dragging the master from a stencil to the drawing.)';
			sTemp=L_Drag_and_drop_drawing_TEXT;
			break;
		case 'Drawing':
			L_Drawing_TEXT='(drawing: All the shapes on the foreground page together with all the shapes on optional background pages.)';
			sTemp=L_Drawing_TEXT;
			break;
		case 'Drawing_file':
			L_Drawing_file_TEXT='(drawing file: A Visio file with a .vsd extension that contains a drawing. To create a drawing file, on the File menu, point to New, and then click New Drawing, and start the drawing from scratch.)';
			sTemp=L_Drawing_file_TEXT;
			break;
		case 'Drawing_page':
			L_Drawing_page_TEXT='(drawing page: The page in a drawing window that contains a drawing. A page can be either a foreground or a background page. Each page has a size, which usually corresponds to a standard paper size, and it has a scale.)';
			sTemp=L_Drawing_page_TEXT;
			break;
		case 'Drawing_path':
			L_Drawing_path_TEXT='(Drawing path: The default location, which is the My Documents folder, where Visio drawings you create are stored.)';
			sTemp=L_Drawing_path_TEXT;
			break;
		case 'Drawing_scale':
			L_Drawing_scale_TEXT='(drawing scale: The ratio of distance on the printed page to distances in the real world. For example, a drawing scale of 1 cm = 1 m means that 1 centimeter on the printed page represents 1 meter in the real world.)';
			sTemp=L_Drawing_scale_TEXT;
			break;
		case 'Drawing_type':
			L_Drawing_type_TEXT='(drawing type: A Visio file (template) with a .vst extension that opens with the stencils, styles, and settings you need to create a particular type of drawing.)';
			sTemp=L_Drawing_type_TEXT;
			break;
		case 'Driver':
			L_Driver_TEXT='(driver: Software that enables the Facilities Management solution to communicate with data in the repository.)';
			sTemp=L_Driver_TEXT;
			break;
		case 'DWG':
			L_DWG_TEXT='(DWG: A standard format used by CAD programs (such as Autodesk AutoCAD) to store drawing files.)';
			sTemp=L_DWG_TEXT;
			break;
		case 'DXF':
			L_DXF_TEXT='(DXF: A standard ASCII or binary file format for importing and exporting files between most CAD programs. Acronym for Drawing Exchange Format.)';
			sTemp=L_DXF_TEXT;
			break;
		case 'Dynamic_Connector':
			L_Dynamic_Connector_TEXT='(dynamic connector: A one-dimensional (1-D) connector shape that changes its path to avoid crossing through two-dimensional (2-D) placeable shapes that lie between the two shapes the connector connects. (Also called a \"routable connector.\"))';
			sTemp=L_Dynamic_Connector_TEXT;
			break;
		case 'Dynamic_glue':
			L_Dynamic_glue_TEXT='(dynamic glue: A type of glue that allows the endpoint of a connector shape to move from one connection point to another as the connected shapes are moved.)';
			sTemp=L_Dynamic_glue_TEXT;
			break;
		case 'Eccentricity_handle':
			L_Eccentricity_handle_TEXT='(eccentricity handle: The circle that appears at each end of a dotted line when a control point of an elliptical arc is selected with the pencil tool. Drag to change the angle and magnitude of an arc\'s eccentricity.)';
			sTemp=L_Eccentricity_handle_TEXT;
			break;
		case 'Embed':
			L_Embed_TEXT='(embed: To insert a Visio drawing into another application\'s document (a container application) to establish a dynamic connection between the drawing and the other document.)';
			sTemp=L_Embed_TEXT;
			break;
		case 'Embedded_object':
			L_Embedded_object_TEXT='(embedded object: An object inserted into a destination file. Once embedded, the object becomes part of the destination file. When you double-click an embedded object, it opens in the program (source program) in which it was created.)';
			sTemp=L_Embedded_object_TEXT;
			break;
		case 'End_name':
			L_End_name_TEXT='(end name: A name that appears as a text string near the end of a binary association. It indicates the role played by the class attached to the association end, so each end can have its own end name. Also called role name.)';
			sTemp=L_End_name_TEXT;
			break;
		case 'End_Ports':
			L_End_Ports_TEXT='(end ports: A type of class port that defines the internal and external ports of an actor class. This symbol can appear only on the border of an actor class. An end port provides a link between structure and behavior.)';
			sTemp=L_End_Ports_TEXT;
			break;
		case 'Endpoint':
			L_Endpoint_TEXT='(endpoint: Either of the square handles that appear at the beginning or end of a selected line, arc, or other one-dimensional (1-D) shape.)';
			sTemp=L_Endpoint_TEXT;
			break;
		case 'Equivalence_at_boundaries':
			L_Equivalence_at_boundaries_TEXT='(equivalence of boundaries: The requirement that data flows are used consistently between top-level and detail pages. If you add a new data flow to a process that has a detail page, the new data flow must also be added to the detail page.)';
			sTemp=L_Equivalence_at_boundaries_TEXT;
			break;
		case 'Errors_tab':
			L_Errors_tab_TEXT='(Errors tab: In the UML solution, a window that displays semantic errors associated with UML elements. By double-clicking an error in the Errors tab, you can locate the icon or shape that represents the element containing the error.)';
			sTemp=L_Errors_tab_TEXT;
			break;
		case 'Event':
			L_Event_TEXT='(event: An occurrence in Visio, such as a change to a shape formula or the deletion of a page.)';
			sTemp=L_Event_TEXT;
			break;
		case 'Event_2':
			L_Event_2_TEXT='(event: In a statechart or activity diagram, an occurrence that triggers a transition. When in a given state or action state, an object waits for an event to go to a different state.)';
			sTemp=L_Event_2_TEXT;
			break;
		case 'Event_object':
			L_Event_object_TEXT='(Event object: A Visio object that you create from a stand-alone Microsoft Visual Basic, C, or C++ program to handle Visio events.)';
			sTemp=L_Event_object_TEXT;
			break;
		case 'Event_procedure':
			L_Event_procedure_TEXT='(event procedure: In a Microsoft Visual Basic program, code that is executed when an event occurs. For example, a button on a Visual Basic form usually has an event procedure to handle the Click event.)';
			sTemp=L_Event_procedure_TEXT;
			break;
		case 'Exception':
			L_Exception_TEXT='(Exception: A signal raised by behavioral features typically in case of execution faults. In the metamodel, Exception is derived from Signal.)';
			sTemp=L_Exception_TEXT;
			break;
		case 'Explicit_units':
			L_Explicit_units_TEXT='(explicit units: Units of measure specified as part of a number-unit pair so that the result is always displayed using the units specified. For example, the value \"3 mm\" always appears in a ShapeSheet window as \"3 mm.\")';
			sTemp=L_Explicit_units_TEXT;
			break;
		case 'Expression':
			L_Expression_TEXT='(expression: A combination of values, operators, functions, and sheet references that results in a value. A logical expression compares two values and yields a TRUE or FALSE result.)';
			sTemp=L_Expression_TEXT;
			break;
		case 'Extended_Property':
			L_Extended_Property_TEXT='(extended property: A property assigned to an object classified as user-defined. An extended property can be deleted from the object and does not need to contain values. Adding an extended property to an object does not affect all objects of the same type.)';
			sTemp=L_Extended_Property_TEXT;
			break;
		case 'Extends_relationship':
			L_Extends_relationship_TEXT='(Extends relationship: In a use case diagram, a relationship between two use cases that indicates that an instance of use case B, subject to conditions specified in the extension, may include the behavior specified by use case A.)';
			sTemp=L_Extends_relationship_TEXT;
			break;
		case 'Extensible':
			L_Extensible_TEXT='(extensible: An object to which you can add extended properties.)';
			sTemp=L_Extensible_TEXT;
			break;
		case 'Extension_points':
			L_Extension_points_TEXT='(extension points: A location within a use case at which an action sequence from another use case may be inserted. Within a use case, each extension point name must be unique. Extension points appear in a compartment at the bottom of the Use Case shape.)';
			sTemp=L_Extension_points_TEXT;
			break;
		case 'Facilities_data_source':
			L_Facilities_data_source_TEXT='(facilities data source: A data source file (.dsn) that points to a database, which is set up to contain organizational information and that has been successfully linked to a drawing by means of the Facilities Management Setup Wizard.)';
			sTemp=L_Facilities_data_source_TEXT;
			break;
		case 'Facilities_database':
			L_Facilities_database_TEXT='(facilities database: A database that Visio CAFM Explorer uses to track your asset information. Also called a repository.)';
			sTemp=L_Facilities_database_TEXT;
			break;
		case 'Field':
			L_Field_TEXT='(field: A placeholder in text that displays information such as dimensions, dates, and times. A field might display the date and time a drawing is printed, a shape\'s angle of rotation, or the result of a formula you write.)';
			sTemp=L_Field_TEXT;
			break;
		case 'Fill':
			L_Fill_TEXT='(fill: The color and pattern inside a closed shape. The default fill for Visio shapes is solid white.)';
			sTemp=L_Fill_TEXT;
			break;
		case 'Final_state':
			L_Final_state_TEXT='(final state: In a statechart or activity diagram, a representation of the completion of activity in the enclosing state or action state. The final state is indicated by a bull\'s eye. )';
			sTemp=L_Final_state_TEXT;
			break;
		case 'Fixed_grid':
			L_Fixed_grid_TEXT='(fixed grid: Grid lines on the drawing page that stay the same distance apart when you zoom in or zoom out of a drawing.)';
			sTemp=L_Fixed_grid_TEXT;
			break;
		case 'Floating_stencil':
			L_Floating_stencil_TEXT='(floating stencil: A stencil that appears in the size and location you choose. By default, stencils are docked on the left side of the drawing window. You can make stencils float, or you can dock them on the right side of the drawing window.)';
			sTemp=L_Floating_stencil_TEXT;
			break;
		case 'Foreground':
			L_Foreground_TEXT='(foreground: The top page of a drawing. Shapes on the foreground page appear in front of shapes on the background page and are not visible when you edit the background of the drawing.)';
			sTemp=L_Foreground_TEXT;
			break;
		case 'Forest':
			L_Forest_TEXT='(Forest: One or more Active Directory domains that are not necessariliy connected, but which share a common schema and configuration information.)';
			sTemp=L_Forest_TEXT;
			break;
		case 'Format':
			L_Format_TEXT='(format: The visual appearance of a shape (such as the thickness and color of its lines, the color and pattern inside the shape, and its font). You can change the format of a shape by applying a style or by changing its individual attributes.)';
			sTemp=L_Format_TEXT;
			break;
		case 'Format_picture':
			L_Format_picture_TEXT='(format picture: A set of symbols and abbreviations that Visio interprets and uses to format string output, such as in a custom text field formula.)';
			sTemp=L_Format_picture_TEXT;
			break;
		case 'Formula':
			L_Formula_TEXT='(formula: An expression that is entered in a ShapeSheet cell, which returns a value.)';
			sTemp=L_Formula_TEXT;
			break;
		case 'Formula_bar':
			L_Formula_bar_TEXT='(formula bar: The portion of the ShapeSheet window in which you enter a formula for the selected ShapeSheet cell. You can also enter formulas directly into a cell.)';
			sTemp=L_Formula_bar_TEXT;
			break;
		case 'freeform_curve':
			L_freeform_curve_TEXT='(freeform curve: A shape with curved segments. Also called a spline.)';
			sTemp=L_freeform_curve_TEXT;
			break;
		case 'Function':
			L_Function_TEXT='(function: A calculation tool used for a variety of purposes in a formula. Visio includes mathematical, trigonometric, geometric, event, date and time, color, logical, statistical, and other functions.)';
			sTemp=L_Function_TEXT;
			break;
		case 'Functional_Band_shape':
			L_Functional_Band_shape_TEXT='(Functional Band shape: Represents a functional unit, such as a department, in which process steps occur. You use either horizontal or vertical functional band shapes depending on the orientation you want for your diagram.)';
			sTemp=L_Functional_Band_shape_TEXT;
			break;
		case 'Generalization':
			L_Generalization_TEXT='(generalization: A relationship between a specific element and a general element, such that the specific element is fully consistent with the general element and includes additional information (such as attributes and associations).)';
			sTemp=L_Generalization_TEXT;
			break;
		case 'Geometry':
			L_Geometry_TEXT='(geometry: An arrangement of vertices and segments that define a path.)';
			sTemp=L_Geometry_TEXT;
			break;
		case 'Gesture_recognition':
			L_Gesture_recognition_TEXT='(gesture recognition: A feature of the Pencil tool. As you begin to move the mouse, Visio quickly calculates the path the mouse pointer travels. If the path of the mouse is straight, the Pencil tool draws a straight line segment.)';
			sTemp=L_Gesture_recognition_TEXT;
			break;
		case 'Glue':
			L_Glue_TEXT='(glue: A property of shapes that causes them to stay connected even when one of the shapes is moved. When you attach a connector to a shape, you glue the connector.)';
			sTemp=L_Glue_TEXT;
			break;
		case 'Grid':
			L_Grid_TEXT='(grid: Nonprinting horizontal and vertical lines that appear at regular intervals on the page.)';
			sTemp=L_Grid_TEXT;
			break;
		case 'Grid_lines':
			L_Grid_lines_TEXT='(grid lines: The faint vertical and horizontal lines that appear in the drawing window when the grid is turned on. You can use grid lines to help position shapes precisely.)';
			sTemp=L_Grid_lines_TEXT;
			break;
		case 'Grid_origin':
			L_Grid_origin_TEXT='(grid origin: The point that defines the layout of grid lines on the drawing page. A vertical grid line and a horizontal grid line pass through the grid origin, and all other grid lines are drawn at specified intervals from these reference lines.)';
			sTemp=L_Grid_origin_TEXT;
			break;
		case 'Group':
			L_Group_TEXT='(group: A shape composed of two or more shapes. You can move or size groups as a unit but group members retain their original appearance and properties.)';
			sTemp=L_Group_TEXT;
			break;
		case 'Group_Transition':
			L_Group_Transition_TEXT='(group transition: An outgoing transition segment with an outgoing arrow that begins on the state context and has no chained incoming transition.)';
			sTemp=L_Group_Transition_TEXT;
			break;
		case 'Group_window':
			L_Group_window_TEXT='(group window: A drawing window you can open to edit individual components of a group. The group appears unrotated in the group window even if it is rotated on the drawing page.)';
			sTemp=L_Group_window_TEXT;
			break;
		case 'Guard':
			L_Guard_TEXT='(guard: In a statechart or activity diagram, a condition that specifies when an event can take place. Whenever its event fires, a guard is evaluated only once.)';
			sTemp=L_Guard_TEXT;
			break;
		case 'Guide_guide_point':
			L_Guide_guide_point_TEXT='(guide, guide point: A reference line you can drag onto the drawing page to position shapes precisely. Drag guides from the rulers, and the guide point from the upper-left corner of the drawing window.)';
			sTemp=L_Guide_guide_point_TEXT;
			break;
		case 'Handle':
			L_Handle_TEXT='(handle: A control that appears when you select a shape. You can use handles to alter a shape. Handles vary with the type of shape and the tool you use to select it.)';
			sTemp=L_Handle_TEXT;
			break;
		case 'History_state_indicator':
			L_History_state_indicator_TEXT='(history state indicator: In a statechart diagram, a representation of the substate last visited. When a transition to the indicator fires, an object resumes the state it last had at the same level as the history indicator.)';
			sTemp=L_History_state_indicator_TEXT;
			break;
		case 'IDEF1X':
			L_IDEF1X_TEXT='(IDEF1X: A specification language for describing data structures. Visio includes an IDEF1X template. You can use the IDEF1X entity and relationship shapes to diagram the structure of databases.)';
			sTemp=L_IDEF1X_TEXT;
			break;
		case 'Image_map':
			L_Image_map_TEXT='(image map: A type of graphic used on the World Wide Web. An image map is divided into different regions, some of which are associated with links.)';
			sTemp=L_Image_map_TEXT;
			break;
		case 'Implementation_class':
			L_Implementation_class_TEXT='(implementation class: In a static structure diagram, a class that defines the physical data structures and procedures of an object as implemented in a traditional programming language, such as C++. An object may have only one implementation class.)';
			sTemp=L_Implementation_class_TEXT;
			break;
		case 'Implicit_units':
			L_Implicit_units_TEXT='(implicit units: Units of measure specified as part of a number-unit pair in which the result is displayed using a specified measurement system, which may not coincide with the units originally entered.)';
			sTemp=L_Implicit_units_TEXT;
			break;
		case 'In_place':
			L_In_place_TEXT='(in place: Running a program from inside another program. When you work in place, the source program\'s menus and toolbars appear and replace some of the current program\'s menus and toolbars.)';
			sTemp=L_In_place_TEXT;
			break;
		case 'Include_product_Enterprise':
			L_Include_product_Enterprise_TEXT='(Documentation tab. A window that displays documentation (in the form of a tagged value) for a selected UML element. You can add documentation to a UML element by selecting the shape that represents the element and typing in the Documentation window.)';
			sTemp=L_Include_product_Enterprise_TEXT;
			break;
		case 'Index':
			L_Index_TEXT='(index: A number corresponding to the position of a color in the Color dialog box. The index is displayed to the left of the color. Visio records a shape\'s color as the index for that color.)';
			sTemp=L_Index_TEXT;
			break;
		case 'Inherited_formula':
			L_Inherited_formula_TEXT='(inherited formula: A formula that is stored in a style or a master but used by an instance as if the formula were stored locally with the shape. A change to a formula in the style or master affects all shapes that inherit the formula.)';
			sTemp=L_Inherited_formula_TEXT;
			break;
		case 'Initial_state':
			L_Initial_state_TEXT='(initial state: In a statechart or activity diagram, a representation of the initial state of an object before any events included in the diagram have acted upon it. An initial state is indicated by a solid filled circle.)';
			sTemp=L_Initial_state_TEXT;
			break;
		case 'Insertion_point':
			L_Insertion_point_TEXT='(insertion point: The blinking vertical line that appears in text when you select a shape with the text tool and click the text with the mouse. Text you type appears at the insertion point.)';
			sTemp=L_Insertion_point_TEXT;
			break;
		case 'Installation_folder':
			L_Installation_folder_TEXT='(installation folder: The location where Visio is installed; the default folder location is Program Files\\Microsoft Office\\Visio11.)';
			sTemp=L_Installation_folder_TEXT;
			break;
		case 'Instance':
			L_Instance_TEXT='(instance: (1) A copy of a master, which you create by dragging the master from a stencil to a drawing. (2) A running image of a Windows application.)';
			sTemp=L_Instance_TEXT;
			break;
		case 'Instance_1':
			L_Instance_1_TEXT='(instance: A specific, concrete variation of a generic, abstract descriptor. For example, an object is an instance of a class, a link is an instance of an association, a value is an instance of a parameter, and a call is an instance of an operation.)';
			sTemp=L_Instance_1_TEXT;
			break;
		case 'Intelligent_tag':
			L_Intelligent_tag_TEXT='(intelligent tag: In the Process Engineering templates, a tag that contains information about a component, such as the line size of a pipeline.)';
			sTemp=L_Intelligent_tag_TEXT;
			break;
		case 'Interaction':
			L_Interaction_TEXT='(interaction: A pattern or sequence of message exchanges that accomplishes a purpose, such as performing an operation. Objects in a collaboration interact by exchanging messages. Messages can be signals or calls and can include conditions and time events.)';
			sTemp=L_Interaction_TEXT;
			break;
		case 'Interface':
			L_Interface_TEXT='(interface: Specifies the externally visible operations of a class, component, package, or other element without specifying internal structure. An interface has only operations but no attributes, states, or associations.)';
			sTemp=L_Interface_TEXT;
			break;
		case 'Interface_DFD_model':
			L_Interface_DFD_model_TEXT='(interface (DFD model): In a DFD model, an external user of the information system that can originate or receive data flows or data stores.)';
			sTemp=L_Interface_DFD_model_TEXT;
			break;
		case 'Internal_SelfTransition':
			L_Internal_SelfTransition_TEXT='(internal self-transition: A transition segment that begins and ends on the same state context, and that has neither a chained incoming transaction nor a chained outgoing transaction. This transition is a combination of the group and history transitions.)';
			sTemp=L_Internal_SelfTransition_TEXT;
			break;
		case 'Internal_units':
			L_Internal_units_TEXT='(internal units: The units of measure that Visio uses internally to store dimensional values. The Visio application\'s internal units are inches for linear measurements and radians for angular measurements.)';
			sTemp=L_Internal_units_TEXT;
			break;
		case 'Item':
			L_Item_TEXT='(item: A single object for which you can track properties. An item is represented in Visio CAFM Explorer by an icon inside a folder.)';
			sTemp=L_Item_TEXT;
			break;
		case 'Jump':
			L_Jump_TEXT='(jump: A hyperlink between a shape or drawing page and another page in the drawing file, a file in another program, or an Internet site. You can right-click the shape or drawing page to \"jump\" to the destination.)';
			sTemp=L_Jump_TEXT;
			break;
		case 'Junction_shape':
			L_Junction_shape_TEXT='(Junction shape: In Process Engineering, the shape used to connect pipelines when one pipeline is split by another pipeline. The default junction shape is Junction. However, you can specify any shape on the document stencil as a junction.)';
			sTemp=L_Junction_shape_TEXT;
			break;
		case 'Keyword':
			L_Keyword_TEXT='(keyword: A characteristic word, phrase, or code that is stored in a key field and is used to conduct sorting or searching operations on records. You type a keyword in the Find or Index box to locate specific information in a Help file.)';
			sTemp=L_Keyword_TEXT;
			break;
		case 'Layer':
			L_Layer_TEXT='(layer: A named category of shapes. You can organize shapes in your drawing by assigning them to layers. You can selectively view, edit, print, or lock shapes on layers.)';
			sTemp=L_Layer_TEXT;
			break;
		case 'Layer_Export_Connections':
			L_Layer_Export_Connections_TEXT='(layer/export connections: (1) A layer connection between one or more service access points (SAPs) or service provision points (SPPs); (2) An export connection in which an SPP is exported through a containing actor.)';
			sTemp=L_Layer_Export_Connections_TEXT;
			break;
		case 'Level':
			L_Level_TEXT='(level: A named category of shapes in a Bentley MicroStation .dgn file. You can insert MicroStation drawings in a Visio drawing and selectively view levels in the inserted drawing.)';
			sTemp=L_Level_TEXT;
			break;
		case 'Link':
			L_Link_TEXT='(link: To establish a dynamic connection between an object in a Visio drawing and another program\'s file. When the original file changes, you can update the linked file so that the most current version appears in the linked file.)';
			sTemp=L_Link_TEXT;
			break;
		case 'Link_2':
			L_Link_2_TEXT='(link: An instance of an association. A link represents references between objects. It can be binary, n-ary, or reflexive.)';
			sTemp=L_Link_2_TEXT;
			break;
		case 'Linked_object':
			L_Linked_object_TEXT='(linked object: Information that is created in one file (the source file) and inserted into another file (the destination file) while maintaining a connection between the two files. The linked object can be updated when the source file is updated.)';
			sTemp=L_Linked_object_TEXT;
			break;
		case 'Local_coordinates':
			L_Local_coordinates_TEXT='(local coordinates: The coordinate system whose origin is the lower-left corner of a shape\'s width-height box. The geometry of a shape is expressed in local coordinates.)';
			sTemp=L_Local_coordinates_TEXT;
			break;
		case 'Local_formatting':
			L_Local_formatting_TEXT='(local formatting: Individual formatting attributes such as line width, fill color, or font size, that you apply to a selected shape by using a command on the Format menu, such as Line, Fill, or Text.)';
			sTemp=L_Local_formatting_TEXT;
			break;
		case 'Local_formula':
			L_Local_formula_TEXT='(local formula: A formula that is stored in a cell of a shape instead of being inherited from a master or a style. A local formula overrides changes to the corresponding cell in the master of which the shape is an instance. Also called local override.)';
			sTemp=L_Local_formula_TEXT;
			break;
		case 'Local_stencil':
			L_Local_stencil_TEXT='(document stencil: A stencil stored in a drawing file, which contains an inventory of the masters used in all of the drawings in the file. Masters on the document stencil are linked to their instances in the drawings.)';
			sTemp=L_Local_stencil_TEXT;
			break;
		case 'Lock':
			L_Lock_TEXT='(lock: A setting that limits the ways that users can change a shape. For example, a lock on a selection handle prevents the user from resizing a shape using the selection handle.)';
			sTemp=L_Lock_TEXT;
			break;
		case 'Macro':
			L_Macro_TEXT='(macro: (1) A Visual Basic for Applications program that extends Visio through Automation;  (2) A procedure that takes no arguments and is contained in a module in a project in a Visio template, stencil, or drawing.)';
			sTemp=L_Macro_TEXT;
			break;
		case 'Mandatory_constraint':
			L_Mandatory_constraint_TEXT='(mandatory constraint: A constraint that requires every instance of an object type\'s population to play that role. With a disjunctive mandatory role constraint, each member of the object type\'s population must play at least one of the roles indicated.)';
			sTemp=L_Mandatory_constraint_TEXT;
			break;
		case 'Mandatory_Property':
			L_Mandatory_Property_TEXT='(mandatory property: A property that requires a value when it exists as an object in the Directory Navigator and in the diagram. Mandatory properties that are defined for a class cannot be deleted.)';
			sTemp=L_Mandatory_Property_TEXT;
			break;
		case 'Master_shape':
			L_Master_shape_TEXT='(master: A shape on a stencil that you use repeatedly to create drawings. When you drag a shape from a stencil onto the drawing page, the shape becomes an instance of that master.)';
			sTemp=L_Master_shape_TEXT;
			break;
		case 'Measurement_unit':
			L_Measurement_unit_TEXT='(measurement unit: Measurement units are sizes in the real world, and page units are sizes on the printed page. For example, in an architectural drawing that uses the scale 1 cm = 1 m, meter is the measurement unit and centimeter is the page unit.)';
			sTemp=L_Measurement_unit_TEXT;
			break;
		case 'Message_flow':
			L_Message_flow_TEXT='(message flow: In a collaboration diagram, a labeled arrow near the association role, or link, that connects two object roles indicates that a message is sent from one object to another.)';
			sTemp=L_Message_flow_TEXT;
			break;
		case 'Message_label':
			L_Message_label_TEXT='(message label: An arrow label that indicates the message sent, its arguments and return values, and the sequencing of the message within the larger interaction (including call nesting, iteration, branching, concurrency, and synchronization).)';
			sTemp=L_Message_label_TEXT;
			break;
		case 'Message_sequence_diagram':
			L_Message_sequence_diagram_TEXT='(message: In a sequence diagram, a communication between objects that conveys information and results in an action. A message is represented by a horizontal arrow.)';
			sTemp=L_Message_sequence_diagram_TEXT;
			break;
		case 'Metaclass':
			L_Metaclass_TEXT='(metaclass: In a static structure diagram, a class whose instances are classes. It is shown in UML notation as a class with the stereotype \"metaclass\".)';
			sTemp=L_Metaclass_TEXT;
			break;
		case 'Metafile':
			L_Metafile_TEXT='(metafile: A file that stores an image as graphical objects (lines, circles, polygons) rather than as pixels. Metafiles preserve an image more accurately than pixels when the image is resized. There are two types of metafiles, standard and enhanced.)';
			sTemp=L_Metafile_TEXT;
			break;
		case 'Mirror_file':
			L_Mirror_file_TEXT='(mirror file: A file separate from your database model diagram in which you can save the code from your model.)';
			sTemp=L_Mirror_file_TEXT;
			break;
		case 'Model':
			L_Model_TEXT='(model: An abstraction of a modeled system that specifies the modeled system from a certain viewpoint and at a certain level of abstraction.)';
			sTemp=L_Model_TEXT;
			break;
		case 'Model_space':
			L_Model_space_TEXT='(model space: In a CAD drawing, the primary drawing workspace in which a drafter creates a three-dimensional drawing.)';
			sTemp=L_Model_space_TEXT;
			break;
		case 'Modeless_activity':
			L_Modeless_activity_TEXT='(modeless activity: A program activity that does not terminate when control returns to the Visio program. For example, an add-on may open a modeless window, which remains open after the add-on terminates.)';
			sTemp=L_Modeless_activity_TEXT;
			break;
		case 'Modifed_Actor_Reference':
			L_Modifed_Actor_Reference_TEXT='(modified actor reference: An actor reference that is modified to indicate different properties.)';
			sTemp=L_Modifed_Actor_Reference_TEXT;
			break;
		case 'Module':
			L_Module_TEXT='(module: In a Microsoft Visual Basic or Viusal Basic for Applications (VBA) project, code that is a set of declarations followed by procedures. A standard module contains only procedure, type, and data declarations and definitions.)';
			sTemp=L_Module_TEXT;
			break;
		case 'Multi_object':
			L_Multi_object_TEXT='(multi-object: In a collaboration diagram, a set of object roles on the \"many\" end of an association role. Using a multi-object shows that an operation addresses an entire set rather than a single object within the set.)';
			sTemp=L_Multi_object_TEXT;
			break;
		case 'MultiLanguage_Pack':
			L_MultiLanguage_Pack_TEXT='(MultiLanguage Pack: Provides the translated text for the user interface and Help for Visio.)';
			sTemp=L_MultiLanguage_Pack_TEXT;
			break;
		case 'Multiplicity':
			L_Multiplicity_TEXT='(multiplicity: The number of times a spline knot is repeated.)';
			sTemp=L_Multiplicity_TEXT;
			break;
		case 'Multiplicity_2':
			L_Multiplicity_2_TEXT='(multiplicity: The number of objects that can participate in a particular relationship, expressed as a single number or a range from the lower to the upper limit. The most common multiplicities are 1, * (which means 0..infinity), and 0..1.)';
			sTemp=L_Multiplicity_2_TEXT;
			break;
		case 'Naming_properties':
			L_Naming_properties_TEXT='(naming properties: The property or properties used to determine how the values for an object\'s name are displayed in the Directory Navigator and in the directory diagram.)';
			sTemp=L_Naming_properties_TEXT;
			break;
		case 'NAry_Association':
			L_NAry_Association_TEXT='(n-ary association: In a static structure diagram, an association among three or more classes (a single class may appear more than once). Each instance of the association is an ordered set of values from the respective classes.)';
			sTemp=L_NAry_Association_TEXT;
			break;
		case 'Natural_language':
			L_Natural_language_TEXT='(natural language: A search method that lets you direct your search using conversational language. This allows you to give search instructions such as \"Find all appointments for today.\")';
			sTemp=L_Natural_language_TEXT;
			break;
		case 'Navigability':
			L_Navigability_TEXT='(navigability: From a polygon to a point, indicates that the polygon can tell you about all of its points, but the point cannot tell you about the polygon. On an association, navigability is indicated by an arrowhead.)';
			sTemp=L_Navigability_TEXT;
			break;
		case 'Network_place':
			L_Network_place_TEXT='(network place: A folder on a network file or Web server, or Microsoft Exchange 2000 server. Create a shortcut to a network place to work with files there. Some network places, such as document libraries, have features not available with local folders.)';
			sTemp=L_Network_place_TEXT;
			break;
		case 'Node':
			L_Node_TEXT='(node: In a deployment implementation diagram, a run-time physical object that represents a processing resource. Nodes are usually computing devices but can also represent human resources or mechanical processing resources.)';
			sTemp=L_Node_TEXT;
			break;
		case 'Nonperiodic_spline':
			L_Nonperiodic_spline_TEXT='(nonperiodic spline: A spline with defined endpoints. If a spline\'s begin point and end point coincide, the spline is closed.)';
			sTemp=L_Nonperiodic_spline_TEXT;
			break;
		case 'Note':
			L_Note_TEXT='(note: A diagram comment that has no semantic influence on the model elements. To add text to a Note shape, double-click the shape, and under Documentation, type the text you want, and then click OK.)';
			sTemp=L_Note_TEXT;
			break;
		case 'Nudge':
			L_Nudge_TEXT='(nudge: To move a shape a small amount using the arrow keys. Select the shape, and then click the up, down, right, or left arrow key. (Make sure that the SCROLL LOCK key is turned off.))';
			sTemp=L_Nudge_TEXT;
			break;
		case 'Number_unit_pair':
			L_Number_unit_pair_TEXT='(number unit pair: An expression that includes a number and a corresponding dimension. For example, \"1 cm\" is a number-unit pair.)';
			sTemp=L_Number_unit_pair_TEXT;
			break;
		case 'Object':
			L_Object_TEXT='(object: Information created in another application and imported, embedded, or linked in a Visio drawing. The term object is used to refer to objects from other applications and OLE objects.)';
			sTemp=L_Object_TEXT;
			break;
		case 'Object_2':
			L_Object_2_TEXT='(object: Represents a view of a directory service class. Objects represent specific network resources and have values assigned to their properties.)';
			sTemp=L_Object_2_TEXT;
			break;
		case 'Object_flow':
			L_Object_flow_TEXT='(object flow: In an activity diagram, a dashed arrow that indicates that an object is input or output by an action. An object flow arrow connects an object flow state either to a control flow arrow or to an action state.)';
			sTemp=L_Object_flow_TEXT;
			break;
		case 'Object_flow_state':
			L_Object_flow_state_TEXT='(object flow state: In an activity diagram, defines an object flow between actions. An object flow state signifies the availability of an instance of a classifier in a given state, usually as the result of an operation.)';
			sTemp=L_Object_flow_state_TEXT;
			break;
		case 'Object_in_state':
			L_Object_in_state_TEXT='(object in state: In an activity diagram, an object that is manipulated by a number of successive activities. Each appearance of the object indicates a different phase in its life.)';
			sTemp=L_Object_in_state_TEXT;
			break;
		case 'Object_lifeline':
			L_Object_lifeline_TEXT='(object lifeline: In a sequence diagram, a representation of the existence of an object at a particular time. If the object is created or destroyed during the time period the diagram represents, then the lifeline stops or starts at the appropriate point.)';
			sTemp=L_Object_lifeline_TEXT;
			break;
		case 'Object_linking_and_embedding_OLE':
			L_Object_linking_and_embedding_OLE_TEXT='(OLE: A Windows protocol that makes it possible to embed an object created in one Windows application into a document created in a different Windows application, or to link an object to a file that contains the original object.)';
			sTemp=L_Object_linking_and_embedding_OLE_TEXT;
			break;
		case 'Object_UML':
			L_Object_UML_TEXT='(object (UML): A representation of a particular instance of a class. An object has a name, which is underlined to indicate an instance-level element, and attributes. Objects usually appear in conceptual models where they represent real-world concepts.)';
			sTemp=L_Object_UML_TEXT;
			break;
		case 'ODBC_Open_Database_Connectivity':
			L_ODBC_Open_Database_Connectivity_TEXT='(ODBC: A standard interface that allows applications to access, view, and modify data from a variety of databases. Many database applications, including Access 7.0, Microsoft SQL Server, and Oracle SQL Server, are ODBC-compliant.)';
			sTemp=L_ODBC_Open_Database_Connectivity_TEXT;
			break;
		case 'OffPage_Reference_shape':
			L_OffPage_Reference_shape_TEXT='(Off-Page Reference shape: A 2-D shape that you can use in large flowchart diagrams to link to another page in the drawing.)';
			sTemp=L_OffPage_Reference_shape_TEXT;
			break;
		case 'Offset':
			L_Offset_TEXT='(offset: For a specified line or curve, the Visio program implements the offset as a pair of lines that are equidistant from the original line or curve.)';
			sTemp=L_Offset_TEXT;
			break;
		case 'One_dimensional_shape':
			L_One_dimensional_shape_TEXT='(1-D shape: Either a straight line you draw using Visio drawing tools or a shape that has a beginning point and ending point and can be glued between two shapes to connect them.)';
			sTemp=L_One_dimensional_shape_TEXT;
			break;
		case 'open_shape':
			L_open_shape_TEXT='(open shape: A shape such as a line, arc, or zigzag. You can format an open shape with line patterns and ends, such as by changing a solid line to a dashed line and adding an arrow to one end.)';
			sTemp=L_open_shape_TEXT;
			break;
		case 'Operation':
			L_Operation_TEXT='(operation: A service that an instance of a class may be requested to perform. The behavior of a class is represented by a set of operations. Each operation has a name and a list of arguments.)';
			sTemp=L_Operation_TEXT;
			break;
		case 'Optional_Property':
			L_Optional_Property_TEXT='(optional property: A property that does not require a value when the class it applies to exists as an object in the Directory Navigator and in the directory diagram. Optional properties defined for a class cannot be deleted.)';
			sTemp=L_Optional_Property_TEXT;
			break;
		case 'OR_constraint':
			L_OR_constraint_TEXT='(OR constraint: An indicator of a situation in which any instance of a class can participate in only one association at one time. The constraint is shown as a dashed line connecting two or more associations, which must have a class in common.)';
			sTemp=L_OR_constraint_TEXT;
			break;
		case 'Origin':
			L_Origin_TEXT='(origin: The lower-left corner of the selection rectangle of a shape, of a group, or of the drawing page. The x- and y-coordinates of the origin are always 0,0.)';
			sTemp=L_Origin_TEXT;
			break;
		case 'Orthogonal':
			L_Orthogonal_TEXT='(orthogonal: Intersecting or lying at right angles. You can rotate a Visio drawing page so that every shape in your drawing, regardless of the angle at which it is drawn, can be drawn orthogonally.)';
			sTemp=L_Orthogonal_TEXT;
			break;
		case 'Package':
			L_Package_TEXT='(package: A grouping of model elements represented in the UML by a symbol that resembles a manila file folder. Each element in a system can be owned by only one package, and one package can be nested in another.)';
			sTemp=L_Package_TEXT;
			break;
		case 'Page':
			L_Page_TEXT='(page: The printable area in a drawing window that contains a drawing. A page can be either a foreground or a background page. Each page has a size, which usually corresponds to a standard paper size, and a scale.)';
			sTemp=L_Page_TEXT;
			break;
		case 'Page_coordinates':
			L_Page_coordinates_TEXT='(page coordinates: The coordinate system whose origin is the lower-left corner of a drawing page.)';
			sTemp=L_Page_coordinates_TEXT;
			break;
		case 'Page_orientation':
			L_Page_orientation_TEXT='(page orientation: To print a drawing, you can choose a page orientation of portrait (vertical) or landscape (horizontal). In portrait mode, a document prints across the narrower dimension of a rectangular sheet of paper.)';
			sTemp=L_Page_orientation_TEXT;
			break;
		case 'Page_sheet':
			L_Page_sheet_TEXT='(page sheet: A ShapeSheet that represents a page.)';
			sTemp=L_Page_sheet_TEXT;
			break;
		case 'Page_units':
			L_Page_units_TEXT='(page units: Sizes or distances on the printed page.  For example, in an architectural drawing that uses the scale 1 cm = 1 m, centimeter is the page unit. The ratio of page units to measurement units is the drawing scale.)';
			sTemp=L_Page_units_TEXT;
			break;
		case 'Pan':
			L_Pan_TEXT='(pan: To move an OLE object with the crop tool by holding down the left mouse button and shifting the object within the object\'s border.)';
			sTemp=L_Pan_TEXT;
			break;
		case 'Paper_space':
			L_Paper_space_TEXT='(paper space: In a CAD drawing, a two-dimensional workspace analogous to a sheet of paper in which a drafter can arrange different views of a 3-D drawing.)';
			sTemp=L_Paper_space_TEXT;
			break;
		case 'Parameter':
			L_Parameter_TEXT='(parameter: An unbound variable that can be changed, passed, or returned. A parameter can include a name, type, and direction of communication. Parameters are used to specify operations, messages, events, templates, and more.)';
			sTemp=L_Parameter_TEXT;
			break;
		case 'Parameterized_class':
			L_Parameterized_class_TEXT='(parameterized class: In a static structure diagram, a template that describes a class with one or more unbound formal parameters. It defines a family of classes, each of which is specified by binding the parameters to actual values.)';
			sTemp=L_Parameterized_class_TEXT;
			break;
		case 'Parametric':
			L_Parametric_TEXT='(parametric: The ability of a Visio shape to adjust its geometry and other attributes according to the values of certain parameters.)';
			sTemp=L_Parametric_TEXT;
			break;
		case 'Parent':
			L_Parent_TEXT='(parent: The group that contains a shape is the shape\'s parent. If the shape is not in a group, its parent is the page.)';
			sTemp=L_Parent_TEXT;
			break;
		case 'Partition':
			L_Partition_TEXT='(partition: A distinct section of data in a Novell Directory Service (NDS) tree. It must contain at least one parent object and zero or more child objects in a hierarchical structure.)';
			sTemp=L_Partition_TEXT;
			break;
		case 'Paste':
			L_Paste_TEXT='(paste: To insert information from the Clipboard into a Visio drawing or another Windows application.)';
			sTemp=L_Paste_TEXT;
			break;
		case 'Pasteboard':
			L_Pasteboard_TEXT='(pasteboard: The area that surrounds a page in the drawing window. You can store shapes on the pasteboard. Each page has its own pasteboard.)';
			sTemp=L_Pasteboard_TEXT;
			break;
		case 'Path':
			L_Path_TEXT='(path: A series of contiguous line or arc segments in a shape. A shape can have more than one path.)';
			sTemp=L_Path_TEXT;
			break;
		case 'Patterns':
			L_Patterns_TEXT='(patterns: Principles that guide developers as they assign responsibilities to software classes and design system behavior. They are most useful when creating collaboration diagrams where messages imply responsibility.)';
			sTemp=L_Patterns_TEXT;
			break;
		case 'Periodic_spline':
			L_Periodic_spline_TEXT='(periodic spline: A closed spline with no defined endpoints.)';
			sTemp=L_Periodic_spline_TEXT;
			break;
		case 'Persistence':
			L_Persistence_TEXT='(persistence: The lifetime of a variable, procedure, or object. For example, an object can persist while the Visio application is running. An object that can store Event objects between Visio application sessions is said to persist events.)';
			sTemp=L_Persistence_TEXT;
			break;
		case 'Pin':
			L_Pin_TEXT='(pin: The point around which a shape or text block rotates, marked by a circle with a plus sign inside it.)';
			sTemp=L_Pin_TEXT;
			break;
		case 'Pixel':
			L_Pixel_TEXT='(pixel: An individual block of display information. The term pixel is derived from the phrase \"picture element.\")';
			sTemp=L_Pixel_TEXT;
			break;
		case 'Placeable_shape':
			L_Placeable_shape_TEXT='(placeable shape: A 2-D shape that is set to work with routable connectors and automatic layout. If a shape is set as placeable, a routable connector can detect and avoid crossing through it.)';
			sTemp=L_Placeable_shape_TEXT;
			break;
		case 'Point':
			L_Point_TEXT='(point: A single value that embodies a set of x- and y-coordinates for greater convenience in calculations.)';
			sTemp=L_Point_TEXT;
			break;
		case 'Point_to_point':
			L_Point_to_point_TEXT='(point-to-point:  A method of connecting shapes such that the actual point of connection stays the same no matter how you move the connected shapes.)';
			sTemp=L_Point_to_point_TEXT;
			break;
		case 'polygon':
			L_polygon_TEXT='(polygon: A 2-D, closed single shape with three or more line segments.)';
			sTemp=L_polygon_TEXT;
			break;
		case 'Polyline':
			L_Polyline_TEXT='(polyline: The type of line you create when you draw a sequence of line segments in one stroke without lifting your pen. A closed polyline is a polygon.)';
			sTemp=L_Polyline_TEXT;
			break;
		case 'Primary_selection':
			L_Primary_selection_TEXT='(primary selection: The first selected shape in a multiple selection, indicated on the drawing page by a thick magenta outline. When a multiple selection is combined, the formatting of the primary selection is applied to the new shape.)';
			sTemp=L_Primary_selection_TEXT;
			break;
		case 'Procedure':
			L_Procedure_TEXT='(procedure: A named sequence of statements executed as a unit. For example, Function, Property, and Sub are types of procedures.)';
			sTemp=L_Procedure_TEXT;
			break;
		case 'Procedure_template':
			L_Procedure_template_TEXT='(Procedure template: The beginning and ending statements that are automatically inserted in the Code window when you specify a Function, Property, or Sub procedure in the Insert Procedure dialog box.)';
			sTemp=L_Procedure_template_TEXT;
			break;
		case 'Process_DFD_model':
			L_Process_DFD_model_TEXT='(process (DFD model): In a DFD model, any activity that generates, uses, transforms, or destroys data.)';
			sTemp=L_Process_DFD_model_TEXT;
			break;
		case 'Project':
			L_Project_TEXT='(project: In Microsoft Visual Basic for Applications (VBA), the code that you write that is saved with a Visio file. You can create only one project for a Visio document, but that project can consist of any number of modules.)';
			sTemp=L_Project_TEXT;
			break;
		case 'Properties_tab':
			L_Properties_tab_TEXT='(Properties tab: A window that displays common properties associated with the selected UML element. You cannot edit the properties in this window; it\'s for viewing purposes only.)';
			sTemp=L_Properties_tab_TEXT;
			break;
		case 'Property':
			L_Property_TEXT='(property: The type of information tracked by a category. For example, the Person category might track the First Name, Last Name, Date Hired, and Title properties.)';
			sTemp=L_Property_TEXT;
			break;
		case 'Provider_application':
			L_Provider_application_TEXT='(provider application: An application that provides objects that can be controlled through Automation. A provider application makes the objects accessible to other applications and provides, or exposes, the properties and methods that control them.)';
			sTemp=L_Provider_application_TEXT;
			break;
		case 'Qualified_Name':
			L_Qualified_Name_TEXT='(Qualified Name: The naming property and the value for a directory service object. The Qualified Name syntax uses the naming property plus the value when displayed.)';
			sTemp=L_Qualified_Name_TEXT;
			break;
		case 'Qualifier':
			L_Qualifier_TEXT='(qualifier: One or more attributes of an association whose value(s) distinguish the set of objects at the far end of the association. A qualifier is indicated by a small rectangle at the source end of the association.)';
			sTemp=L_Qualifier_TEXT;
			break;
		case 'Range_of_eight':
			L_Range_of_eight_TEXT='(range of eight: A rule for handling instances whose scale is different from that of the drawing page. If the ratio of a master\'s drawing scale differs from that of the  page by less than a factor of eight, the instance is scaled  for the drawing page.)';
			sTemp=L_Range_of_eight_TEXT;
			break;
		case 'Realizes_relationship':
			L_Realizes_relationship_TEXT='(realizes relationship: A relationship that means the client at the tail of the arrow supports or inherits all the operations of the supplier at the arrowhead.)';
			sTemp=L_Realizes_relationship_TEXT;
			break;
		case 'Reception':
			L_Reception_TEXT='(reception: A declaration stating that a classifier is prepared to react to the receipt of a signal. The reception designates a signal and specifies the expected behavioral response. A reception is a summary of expected behavior.)';
			sTemp=L_Reception_TEXT;
			break;
		case 'Redlining':
			L_Redlining_TEXT='(redlining: To review and mark up or add comments to a drawing.)';
			sTemp=L_Redlining_TEXT;
			break;
		case 'Reference_mode':
			L_Reference_mode_TEXT='(reference mode: A word, number, or abbreviation used to identify a unique instance of an entity object type.)';
			sTemp=L_Reference_mode_TEXT;
			break;
		case 'Reference_Ports':
			L_Reference_Ports_TEXT='(reference ports: A port that defines the internal and external ports of an actor reference. Reference ports can be placed only on the outer border of an actor reference shape. They can be used as anchors for bindings.)';
			sTemp=L_Reference_Ports_TEXT;
			break;
		case 'Refinement':
			L_Refinement_TEXT='(refinement: A kind of dependency that indicates a historical or derivation relationship between two elements with a mapping between them. A description of the mapping may be attached to the dependency in a note.)';
			sTemp=L_Refinement_TEXT;
			break;
		case 'Related_to':
			L_Related_to_TEXT='(related to: Shares or associates the selected item with another folder. For example, if an Administrative Assistant is shared by two departments, you would relate that person to both departments.)';
			sTemp=L_Related_to_TEXT;
			break;
		case 'Relay_Ports':
			L_Relay_Ports_TEXT='(relay ports: A type of class port that defines the internal and external ports of an actor class. Can appear only on the border of an actor class. Relay ports relay incoming messages to a contained actor or outgoing messages from a contained actor.)';
			sTemp=L_Relay_Ports_TEXT;
			break;
		case 'Replication':
			L_Replication_TEXT='(replication: A connection between two data storage objects that allows synchronization between the two objects. Data storage objects are usually servers, databases, or domain controllers.)';
			sTemp=L_Replication_TEXT;
			break;
		case 'Report_definition':
			L_Report_definition_TEXT='(report definition: The definition of a property report that determines which shapes are used to generate the report, what custom properties are included, and how the information in the report is sorted.)';
			sTemp=L_Report_definition_TEXT;
			break;
		case 'Resize':
			L_Resize_TEXT='(resize: To change the dimensions of a shape.)';
			sTemp=L_Resize_TEXT;
			break;
		case 'Rotation_handle':
			L_Rotation_handle_TEXT='(rotation handle: The round handle that appears at the top of a 2-D shape\'s or text block\'s selection rectangle when you select the shape or text block using the Pointer tool or select a text block using the Text Block tool.)';
			sTemp=L_Rotation_handle_TEXT;
			break;
		case 'Routable_connector':
			L_Routable_connector_TEXT='(routable connector: A 1-D connector that automatically changes its path to avoid crossing through 2-D placeable shapes that lie between the two shapes the connector connects.)';
			sTemp=L_Routable_connector_TEXT;
			break;
		case 'Scale':
			L_Scale_TEXT='(scale: A measure of the relationship between actual distances and distances represented in a Visio drawing. For example, a floor plan might have a scale of one meter of actual distance to one centimeter in the drawing.)';
			sTemp=L_Scale_TEXT;
			break;
		case 'Scaled_drawing_page':
			L_Scaled_drawing_page_TEXT='(scaled drawing page: A drawing page with a drawing scale, such as 1/4\" = 1\' or 2 cm = 1 m.)';
			sTemp=L_Scaled_drawing_page_TEXT;
			break;
		case 'Schema':
			L_Schema_TEXT='(schema: A collection of classes and properties for a directory service. Classes and properties determine the types of information stored in the directory service and how they interact with each other.)';
			sTemp=L_Schema_TEXT;
			break;
		case 'Scope':
			L_Scope_TEXT='(scope: The extent to which a variable, procedure, or object persists in a running program. The scope of an item typically depends on where it is declared.)';
			sTemp=L_Scope_TEXT;
			break;
		case 'ScreenTips':
			L_ScreenTips_TEXT='(ScreenTips: Tips that appear when you pause the pointer over certain elements in the Visio program, including: masters on stencils, toolbar buttons, and the ruler.)';
			sTemp=L_ScreenTips_TEXT;
			break;
		case 'Segment':
			L_Segment_TEXT='(segment: A straight line or curve that is part of a more complex shape.)';
			sTemp=L_Segment_TEXT;
			break;
		case 'Selection':
			L_Selection_TEXT='(selection: Shapes in a drawing that you have selected and on which you can perform actions. A selected shape has selection handles. Multiple selected shapes have magenta outlines. Text selected in a text block is highlighted when it is editable.)';
			sTemp=L_Selection_TEXT;
			break;
		case 'Selection_handle':
			L_Selection_handle_TEXT='(selection handle: A square handle that appears on a shape selected with the Pointer tool. Selection handles indicate that you can move or size the shape.)';
			sTemp=L_Selection_handle_TEXT;
			break;
		case 'Selection_net':
			L_Selection_net_TEXT='(selection net: A means of selecting more than one shape at a time by dragging the Pointer tool to define an area that encloses all the shapes to be selected.)';
			sTemp=L_Selection_net_TEXT;
			break;
		case 'Selection_rectangle':
			L_Selection_rectangle_TEXT='(selection rectangle: The dotted line that surrounds selected shapes or objects from other applications.)';
			sTemp=L_Selection_rectangle_TEXT;
			break;
		case 'Sequence_diagram':
			L_Sequence_diagram_TEXT='(sequence diagram: An interaction diagram that shows the objects participating in a particular interaction and the messages they exchange arranged in a time sequence.)';
			sTemp=L_Sequence_diagram_TEXT;
			break;
		case 'Sequential_build':
			L_Sequential_build_TEXT='(sequential build: A method of building a PowerPoint slide using elements of a Visio drawing. In a sequential build, you bring in elements of a Visio drawing one by one onto successive slides.)';
			sTemp=L_Sequential_build_TEXT;
			break;
		case 'ServerSide_image_map':
			L_ServerSide_image_map_TEXT='(server-side image map: A World Wide Web graphic with different linked regions. A program on a Web server examines map data associated with the linked regions and processes the links.)';
			sTemp=L_ServerSide_image_map_TEXT;
			break;
		case 'Shape':
			L_Shape_TEXT='(shape: (1) An open or closed object created using Visio drawing tools or commands. (2) A grouped collection of shapes. (3) An instance of a master that is dragged from a stencil onto the drawing page.)';
			sTemp=L_Shape_TEXT;
			break;
		case 'Shape_to_shape':
			L_Shape_to_shape_TEXT='(shape-to-shape: A method of connecting shapes. The actual point of connection might change when you move the connected shapes. You make shape-to-shape connections by dragging a connector from the center of one shape to the center of another shape.)';
			sTemp=L_Shape_to_shape_TEXT;
			break;
		case 'ShapeSheet':
			L_ShapeSheet_TEXT='(ShapeSheet: The spreadsheet that contains information about a shape; for example, its dimensions, angle, and center of rotation and the styles that determine the shape\'s appearance.)';
			sTemp=L_ShapeSheet_TEXT;
			break;
		case 'Signal':
			L_Signal_TEXT='(signal: A generalizable element defined independently of the classes handling the signal. It specifies an asynchronous stimulus communicated between instances to which there is no reply. The receiving instance handles the signal by a state machine.)';
			sTemp=L_Signal_TEXT;
			break;
		case 'Signal_Event':
			L_Signal_Event_TEXT='(signal event: In a statechart or activity diagram, an indication that one object has received a signal from another. A signal can be declared by using the keyword \"signal\" on a class in a class diagram.)';
			sTemp=L_Signal_Event_TEXT;
			break;
		case 'Signal_receipt':
			L_Signal_receipt_TEXT='(signal receipt: In an activity diagram, an icon used to replace an event label on a transition. The event signature is shown inside the icon. Unlabeled transition arrows connect the icon to the previous and next action states.)';
			sTemp=L_Signal_receipt_TEXT;
			break;
		case 'Signal_send':
			L_Signal_send_TEXT='(signal send: In an activity diagram, an icon used to replace an event label on a transition. The event signature is shown inside the icon. Unlabeled transition arrows connect the icon to the previous and next action states.)';
			sTemp=L_Signal_send_TEXT;
			break;
		case 'Sink_object':
			L_Sink_object_TEXT='(sink object: In a Microsoft Visual Basic for Applications (VBA) program, a class that receives events fired by a particular kind of Visio object.)';
			sTemp=L_Sink_object_TEXT;
			break;
		case 'Site':
			L_Site_TEXT='(site: An area of good network connectivity. Often a LAN (local area network), but it may contain multiple LANs connected by a fast WAN (wide area network).)';
			sTemp=L_Site_TEXT;
			break;
		case 'Size':
			L_Size_TEXT='(size: To change the dimensions of a shape by dragging one of its handles after it has been selected with the pointer tool.)';
			sTemp=L_Size_TEXT;
			break;
		case 'SmartConnector_shape':
			L_SmartConnector_shape_TEXT='(SmartConnector shape: A 1-D shape that behaves intelligently when it\'s used to connect other shapes.)';
			sTemp=L_SmartConnector_shape_TEXT;
			break;
		case 'SmartShape_symbol':
			L_SmartShape_symbol_TEXT='(SmartShape symbol: A shape that is programmed to behave predictably when you move or size it.)';
			sTemp=L_SmartShape_symbol_TEXT;
			break;
		case 'Snap':
			L_Snap_TEXT='(snap: The ability of shapes, guides, grid lines, and other elements in the Visio program to pull shapes and other elements into position when they are moved and sized.)';
			sTemp=L_Snap_TEXT;
			break;
		case 'solution':
			L_solution_TEXT='(solution: The file folder that contains templates for particular drawing types. For example, the Project Schedule solution folder contains the Calendar, Gantt Chart, PERT Chart, and Timeline, templates that you use to create those drawing types.)';
			sTemp=L_solution_TEXT;
			break;
		case 'Source_file':
			L_Source_file_TEXT='(source file: The file that contains the information that was used to create a linked or embedded object. The object exists in the destination file. When you update the information in the source file, the information in the linked object is also updated.)';
			sTemp=L_Source_file_TEXT;
			break;
		case 'Space_identifier_1':
			L_Space_identifier_1_TEXT='(space identifier: A custom property assigned to a Space shape that uniquely identifies that space shape in a space plan drawing, such as an office number or room number. The custom property label is Space ID.)';
			sTemp=L_Space_identifier_1_TEXT;
			break;
		case 'space_plan':
			L_space_plan_TEXT='(space plan: A drawing that use Space shapes and resource shapes to track the approximate location of resources in a building.)';
			sTemp=L_space_plan_TEXT;
			break;
		case 'Spanning_Tree':
			L_Spanning_Tree_TEXT='(Spanning Tree: The Spanning Tree function is available for some switches and bridges. This function has the ability to enable backup loops between switches (in the case of either cable or port failure).)';
			sTemp=L_Spanning_Tree_TEXT;
			break;
		case 'Spline':
			L_Spline_TEXT='(spline: A freeform curve that is based on a polynomial equation.)';
			sTemp=L_Spline_TEXT;
			break;
		case 'Spline_knot':
			L_Spline_knot_TEXT='(spline knot: A real number that marks the boundary between polynomial pieces on a spline.)';
			sTemp=L_Spline_knot_TEXT;
			break;
		case 'Stacking_order':
			L_Stacking_order_TEXT='(stacking order: The order in which shapes overlap other shapes on the page and the order in which shapes are selected. You can change the stacking order of shapes by using commands on the Shape menu.)';
			sTemp=L_Stacking_order_TEXT;
			break;
		case 'Stamp':
			L_Stamp_TEXT='(stamp: To create an instance of a master with the Stamp tool. To stamp a master, select the master in the stencil, choose the Stamp tool, and click where you want the instance to appear.)';
			sTemp=L_Stamp_TEXT;
			break;
		case 'StandAlone_stencil':
			L_StandAlone_stencil_TEXT='(stand-alone stencil: A Visio file with a .vss file name extension that contains a collection of masters and is usually referred to simply as a stencil. A stand-alone stencil usually does not have an accompanying drawing.)';
			sTemp=L_StandAlone_stencil_TEXT;
			break;
		case 'State':
			L_State_TEXT='(state: The period of time during which an actor exhibits a particular behavior.)';
			sTemp=L_State_TEXT;
			break;
		case 'State_Context':
			L_State_Context_TEXT='(state context: A nested series of states, which represents the current state of a system.)';
			sTemp=L_State_Context_TEXT;
			break;
		case 'State_machine':
			L_State_machine_TEXT='(state machine: A graph of states and transitions that describes the response of an object of a given class to the receipt of outside stimuli. A state machine is attached to a class or method. A statechart diagram represents a state machine.)';
			sTemp=L_State_machine_TEXT;
			break;
		case 'State_UML':
			L_State_UML_TEXT='(state (UML): In a statechart or activity diagram, a condition during which an object satisfies a condition, performs an action, or waits for an event.)';
			sTemp=L_State_UML_TEXT;
			break;
		case 'Statechart_diagram':
			L_Statechart_diagram_TEXT='(statechart diagram: A representation of a state machine, attached to a class or method, that describes the response of the class to outside stimuli.)';
			sTemp=L_Statechart_diagram_TEXT;
			break;
		case 'Static_glue':
			L_Static_glue_TEXT='(static glue: A type of glue behavior in which the endpoint of a connector remains fixed to a particular connection point, no matter how the shape to which it is glued moves.)';
			sTemp=L_Static_glue_TEXT;
			break;
		case 'Static_structure_diagram':
			L_Static_structure_diagram_TEXT='(static structure diagram: A diagram that shows the static structure of a model; that is, the elements that exist (such as classes and types), the internal structure of the elements, and their relationships to one another.)';
			sTemp=L_Static_structure_diagram_TEXT;
			break;
		case 'Stencil':
			L_Stencil_TEXT='(stencil: A collection of masters associated with a particular Visio drawing type, or template. By default, stencils that open with a template are docked on the left side of the drawing window.)';
			sTemp=L_Stencil_TEXT;
			break;
		case 'Stencil_path':
			L_Stencil_path_TEXT='(stencil path: The folder or folders where Visio stencils are stored. To find your stencil path, on the Tools menu, click Options. On the File Paths tab, the Stencils box shows the stencil folder location. You can add folders to this path.)';
			sTemp=L_Stencil_path_TEXT;
			break;
		case 'Stereotype':
			L_Stereotype_TEXT='(stereotypes: A representation of a usage distinction. A stereotype is a subclass of an existing element with the same attributes and relationships as that element but with a different intent and possibly additional constraints.)';
			sTemp=L_Stereotype_TEXT;
			break;
		case 'Stored_procedure':
			L_Stored_procedure_TEXT='(stored procedure: A procedure created by analysts and stored in the data dictionary for repeated use by applications.)';
			sTemp=L_Stored_procedure_TEXT;
			break;
		case 'Stub':
			L_Stub_TEXT='(stub: In a statechart diagram, a small vertical line drawn inside the boundary of a composite state that indicates a transition connected to a suppressed nested state.)';
			sTemp=L_Stub_TEXT;
			break;
		case 'Style':
			L_Style_TEXT='(style: A collection of attributes that has a name and is saved with a template or drawing file.)';
			sTemp=L_Style_TEXT;
			break;
		case 'Subcategory':
			L_Subcategory_TEXT='(subcategory: A new category that is based on an existing category. For example, instead of tracking computers along with your other equipment, you might want to create a Computer subcategory from the Equipment category to track them as a separate group.)';
			sTemp=L_Subcategory_TEXT;
			break;
		case 'Subdivision':
			L_Subdivision_TEXT='(subdivision: The division between grid lines and between intervals of the ruler. This option is set using the Ruler &amp; Grid command. The choices are Fine, Normal, and Coarse.)';
			sTemp=L_Subdivision_TEXT;
			break;
		case 'Subselect':
			L_Subselect_TEXT='(subselect: To select individual shapes within a group.)';
			sTemp=L_Subselect_TEXT;
			break;
		case 'Subsystem':
			L_Subsystem_TEXT='(subsystem: A package that contains the contents of the entire system or an entire model within the system. Dropping a Subsystem shape onto a drawing page automatically creates a new static structure diagram drawing page.)';
			sTemp=L_Subsystem_TEXT;
			break;
		case 'Summary_task':
			L_Summary_task_TEXT='(summary task: A summary task has more than one subtask below it. Subtasks are indented below the summary task in the project frame. The summary task bar has special markers (inverted yellow triangles) to indicate that it has subtasks.)';
			sTemp=L_Summary_task_TEXT;
			break;
		case 'Swimlane':
			L_Swimlane_TEXT='(swimlane: In an activity diagram, a way of assigning responsibility to action states. Swimlanes are columns with solid vertical lines on each side. Each swimlane represents the responsible class, person, or organizational unit.)';
			sTemp=L_Swimlane_TEXT;
			break;
		case 'Synchronized_copy':
			L_Synchronized_copy_TEXT='(synchronized copy: A copy of a department that you create on a new page of a large organization chart, so that you can determine how your chart breaks across pages. When you create a synchronized copy, any changes you make appear in both)';
			sTemp=L_Synchronized_copy_TEXT;
			break;
		case 'System':
			L_System_TEXT='(system: Any application or process that you want to model. Examples of systems include a computer game, a process for assembling microchips, and a library information system.)';
			sTemp=L_System_TEXT;
			break;
		case 'System_boundary':
			L_System_boundary_TEXT='(system boundary: In a use case diagram, a boundary surrounding the use cases that indicates the system. You can resize the system boundary by dragging a selection handle on the System Boundary shape.)';
			sTemp=L_System_boundary_TEXT;
			break;
		case 'Tagged_value':
			L_Tagged_value_TEXT='(tagged value: A keyword-value pair that can be attached to any model element. The keyword is called a tag, and it represents a property applicable to one or many elements. Both the keyword and the value are strings.)';
			sTemp=L_Tagged_value_TEXT;
			break;
		case 'Template':
			L_Template_TEXT='(template: A Visio file (drawing type) with a .vst extension that opens with the stencils, styles, and settings you need to create a particular type of drawing.)';
			sTemp=L_Template_TEXT;
			break;
		case 'Text_block':
			L_Text_block_TEXT='(text block: The text area associated with a shape that appears when you click the shape with the text tool or select it with the pointer tool.)';
			sTemp=L_Text_block_TEXT;
			break;
		case 'Textual_Definition':
			L_Textual_Definition_TEXT='(textual definition: A definition used to list the textual declarations of extended state variables or the functions associated with a state context.)';
			sTemp=L_Textual_Definition_TEXT;
			break;
		case 'Tile':
			L_Tile_TEXT='(tile: (1) A printing technique used when oversized drawing pages are printed on multiple sheets of paper. (2) A command on the Visio Window menu that opens multiple drawings side by side in the main window.)';
			sTemp=L_Tile_TEXT;
			break;
		case 'Time_Event':
			L_Time_Event_TEXT='(time event: An event that occurs after a designated period of time or on the occurrence of a given date or time. A time event is indicated by the keyword \"after,\" followed by an expression that evaluates to an amount of time.)';
			sTemp=L_Time_Event_TEXT;
			break;
		case 'Tip':
			L_Tip_TEXT='(tip: Notes that appear when you pause the pointer over certain elements in the Visio program, including masters on stencils, toolbar buttons, and the ruler.)';
			sTemp=L_Tip_TEXT;
			break;
		case 'Toolbars':
			L_Toolbars_TEXT='(toolbars: The rows of boxes, buttons, and bars that appear below the menu bar. To choose which toolbars you want to display and to create custom toolbars, click View, and then point to Toolbars.)';
			sTemp=L_Toolbars_TEXT;
			break;
		case 'Trace':
			L_Trace_TEXT='(trace: A kind of dependency that indicates a historical relationship between two elements that represent the same concept at different semantic levels or from different points of view.)';
			sTemp=L_Trace_TEXT;
			break;
		case 'Transition':
			L_Transition_TEXT='(transition: An allowed path from one state to another.)';
			sTemp=L_Transition_TEXT;
			break;
		case 'Transition_Points':
			L_Transition_Points_TEXT='(transition points: The start or endpoint of a transition segment.)';
			sTemp=L_Transition_Points_TEXT;
			break;
		case 'Transition_To_History':
			L_Transition_To_History_TEXT='(transition to history: An incoming transition segment that ends on an outer state context and does not have a continuing transition segment within the context.)';
			sTemp=L_Transition_To_History_TEXT;
			break;
		case 'Transition_UML':
			L_Transition_UML_TEXT='(transition (UML): In a statechart or activity diagram, a relationship between two states or action states or between a state and itself (a complex transition has multiple source and/or target states).)';
			sTemp=L_Transition_UML_TEXT;
			break;
		case 'Transitive':
			L_Transitive_TEXT='(transitive: A trust relationship where one domain trusts all other domains. For example, if Site X has a trust relationship with Site Y, and Site Y has a trust relationship with Site Z, Site X does not necessarily have a trust relationship with Site Z.)';
			sTemp=L_Transitive_TEXT;
			break;
		case 'Tree_view':
			L_Tree_view_TEXT='(tree view: Displayed in a window in the UML Navigator, a hierarchy in which each UML element or view (diagram) is represented by an icon. The UML template automatically creates a tree view of your model.)';
			sTemp=L_Tree_view_TEXT;
			break;
		case 'Trigger':
			L_Trigger_TEXT='(trigger: An event-driven, stored procedure. A stored procedure is a procedure created by analysts and stored in the data dictionary for repeated use by applications.)';
			sTemp=L_Trigger_TEXT;
			break;
		case 'TWAIN':
			L_TWAIN_TEXT='(TWAIN: A cross-platform interface for acquiring electronic images that have been captured by scanners, digital cameras, and still-frame video capture boards.)';
			sTemp=L_TWAIN_TEXT;
			break;
		case 'Two_dimensional_shape':
			L_Two_dimensional_shape_TEXT='(2-D shape: A shape that has four selection handles that you can use to resize the shape proportionally.)';
			sTemp=L_Two_dimensional_shape_TEXT;
			break;
		case 'Two_element_constraint':
			L_Two_element_constraint_TEXT='(2-element contstraint: A constraint that applies to two elements, such as two classes or two associations. The constraint is shown as a dashed arrow from one element to the other, labeled by the constraint string in braces ({  }).)';
			sTemp=L_Two_element_constraint_TEXT;
			break;
		case 'Type':
			L_Type_TEXT='(type: A changeable role that an object may adopt and later abandon. A type is similar to a class in that it describes a set of objects with attributes and operations, but a type may not include methods.)';
			sTemp=L_Type_TEXT;
			break;
		case 'UML_Navigator':
			L_UML_Navigator_TEXT='(UML Navigator: In the UML solution, a window that contains the tree view of a UML system. You can open or close the UML Navigator, and you can dock or float it above your drawing page and stencils.)';
			sTemp=L_UML_Navigator_TEXT;
			break;
		case 'UML_Properties_dialog_boxes':
			L_UML_Properties_dialog_boxes_TEXT='(UML Properties dialog boxes: Used for editing a UML element\'s properties. By double-clicking a UML shape on the drawing page or an icon in the tree view, you can open an element\'s UML Properties dialog box and add values for the element\'s properties.)';
			sTemp=L_UML_Properties_dialog_boxes_TEXT;
			break;
		case 'UMLSysA':
			L_UMLSysA_TEXT='(UMLSysA: One UML drawing file represents the system you are modeling.)';
			sTemp=L_UMLSysA_TEXT;
			break;
		case 'UMLSysB':
			L_UMLSysB_TEXT='(UMLSysB: Each model in the system is an abstraction that reveals the system from a different perspective. Each diagram is a different view of a model. Each diagram type is represented by an icon (that resembles the icons pictured here).)';
			sTemp=L_UMLSysB_TEXT;
			break;
		case 'UMLSysC':
			L_UMLSysC_TEXT='(UMLSysC: Use case diagrams describe the external actors and how they use the system.)';
			sTemp=L_UMLSysC_TEXT;
			break;
		case 'UMLSysD':
			L_UMLSysD_TEXT='(UMLSysD: Conceptual models (object diagrams), a type of static structure diagram, decompose a system into related real-world objects.)';
			sTemp=L_UMLSysD_TEXT;
			break;
		case 'UMLSysE':
			L_UMLSysE_TEXT='(UMLSysE: System sequence diagrams show, for a particular use case, the system events that external actors generate.)';
			sTemp=L_UMLSysE_TEXT;
			break;
		case 'UMLSysF':
			L_UMLSysF_TEXT='(UMLSysF: Use packages to group related elements and partition a complex conceptual model into manageable subsets.)';
			sTemp=L_UMLSysF_TEXT;
			break;
		case 'UMLSysG':
			L_UMLSysG_TEXT='(UMLSysG: Collaboration diagrams show how objects involved in each system event interact via messages to fulfill tasks.)';
			sTemp=L_UMLSysG_TEXT;
			break;
		case 'UMLSysH':
			L_UMLSysH_TEXT='(UMLSysH: Class diagrams, a type of static structure diagram, translate real-world objects into software entities with associations, attributes, interfaces, methods, and dependencies.)';
			sTemp=L_UMLSysH_TEXT;
			break;
		case 'UMLSysI':
			L_UMLSysI_TEXT='(UMLSysI: For state-dependent objects, statechart diagrams describe how objects react to different events.)';
			sTemp=L_UMLSysI_TEXT;
			break;
		case 'UMLSysJ':
			L_UMLSysJ_TEXT='(UMLSysJ: Activity diagrams show the workflow related to individual objects.)';
			sTemp=L_UMLSysJ_TEXT;
			break;
		case 'UMLSysK':
			L_UMLSysK_TEXT='(UMLSysK: Deployment diagrams show the physical relationships among the software and hardware components.)';
			sTemp=L_UMLSysK_TEXT;
			break;
		case 'UMLSysL':
			L_UMLSysL_TEXT='(UMLSysL: Component diagrams show the structure of the code itself and the dependencies between components.)';
			sTemp=L_UMLSysL_TEXT;
			break;
		case 'Uniqueness_constraint':
			L_Uniqueness_constraint_TEXT='(uniqueness constraint: A constraint that prohibits repetition of individual data or combinations of data.)';
			sTemp=L_Uniqueness_constraint_TEXT;
			break;
		case 'Unitless_number':
			L_Unitless_number_TEXT='(unitless number: A number that is not associated with a unit of measure.)';
			sTemp=L_Unitless_number_TEXT;
			break;
		case 'Units_of_measure':
			L_Units_of_measure_TEXT='(units of measure: The type of measurement system used in a drawing. In formulas, used after a number to specify the unit of measure that the number represents.)';
			sTemp=L_Units_of_measure_TEXT;
			break;
		case 'Unqualified_Name':
			L_Unqualified_Name_TEXT='(Unqualified Name: A display of the value of the object without any naming properties. Multiple naming properties are separated by a plus sign (+).)';
			sTemp=L_Unqualified_Name_TEXT;
			break;
		case 'Unscaled_drawing_page':
			L_Unscaled_drawing_page_TEXT='(unscaled drawing page: A drawing page with a drawing scale of 1:1.)';
			sTemp=L_Unscaled_drawing_page_TEXT;
			break;
		case 'US_units':
			L_US_units_TEXT='(US units: Units used in the US measurement system, such as inches, feet, yards, and miles.)';
			sTemp=L_US_units_TEXT;
			break;
		case 'Usage':
			L_Usage_TEXT='(usage: A kind of dependency that indicates that one element requires the presence of another element for its correct implementation or functioning.)';
			sTemp=L_Usage_TEXT;
			break;
		case 'Use_case':
			L_Use_case_TEXT='(use case: In a use case diagram, a representation of a set of events that occurs when an actor uses a system to complete a process. Normally, a use case is a relatively large process, not an individual step or transaction.)';
			sTemp=L_Use_case_TEXT;
			break;
		case 'Use_case_diagram':
			L_Use_case_diagram_TEXT='(use case diagram: A diagram that shows the external actors who will interact with your system and how they will use it. The diagram consists of a system boundary, actors, use cases, and use case relationships (communicates, uses, and extends).)';
			sTemp=L_Use_case_diagram_TEXT;
			break;
		case 'User_form':
			L_User_form_TEXT='(user form: A file in a Microsoft Visual Basic or Visual Basic for Applications (VBA) project with the file extension .frm that contains user interface controls, such as command buttons and text boxes.)';
			sTemp=L_User_form_TEXT;
			break;
		case 'Uses_relationship':
			L_Uses_relationship_TEXT='(uses relationship: In a use case diagram, a relationship between two use cases that indicates that an instance of use case A will also include behavior specified by use case B. The arrowhead  points toward the use case being used.)';
			sTemp=L_Uses_relationship_TEXT;
			break;
		case 'Utility':
			L_Utility_TEXT='(utility: In a static structure diagram, a programming convenience rather than a fundamental construct. Attributes and operations you define for a utility become global variables and procedures.)';
			sTemp=L_Utility_TEXT;
			break;
		case 'Vanishing_point':
			L_Vanishing_point_TEXT='(vanishing point: A point that represents where the perspective recedes in your drawing. You can move the vanishing point to any location on the drawing page.)';
			sTemp=L_Vanishing_point_TEXT;
			break;
		case 'Variable_grid':
			L_Variable_grid_TEXT='(variable grid: Grid lines that change as you change the magnification of a drawing. When you zoom in, grid lines are closer together.  When you zoom out, grid lines are farther apart.)';
			sTemp=L_Variable_grid_TEXT;
			break;
		case 'Vertex_vertices':
			L_Vertex_vertices_TEXT='(vertex, vertices: One of the diamond-shaped handles that appears between two segments on  a multiple-segment shape, or at the end of a segment. You can reshape a shape or connector by dragging its vertices.)';
			sTemp=L_Vertex_vertices_TEXT;
			break;
		case 'viconvertedcaddrawing':
			L_viconvertedcaddrawing_TEXT='(converted CAD drawing: A CAD drawing that you can edit with Visio. When you convert a CAD drawing, the blocks and entities are mapped to the closest equivalent Visio shapes.)';
			sTemp=L_viconvertedcaddrawing_TEXT;
			break;
		case 'vidithered':
			L_vidithered_TEXT='(dithered: A method for approximating colors on a display system or in a file format that does not have the specified color available.)';
			sTemp=L_vidithered_TEXT;
			break;
		case 'View':
			L_View_TEXT='(view: A way to present data in a database for review by a user. Views are created from subsets of columns from one or more tables in a database.)';
			sTemp=L_View_TEXT;
			break;
		case 'viink':
			L_viink_TEXT='(Ink: Writing done with the hand.)';
			sTemp=L_viink_TEXT;
			break;
		case 'viinsertedcaddrawing':
			L_viinsertedcaddrawing_TEXT='(inserted CAD drawing: A CAD drawing that you can view with Visio. Before you can edit an inserted CAD drawing, you must convert it into a Visio drawing.)';
			sTemp=L_viinsertedcaddrawing_TEXT;
			break;
		case 'vimarkup':
			L_vimarkup_TEXT='(markup: Review comments, shapes, and ink added to a markup overlay. Open the Reviewing task pane to view markup.)';
			sTemp=L_vimarkup_TEXT;
			break;
		case 'vimarkupoverlay':
			L_vimarkupoverlay_TEXT='(markup overlay: Holds the review comments, shapes, and ink of a reviewer. The markup overlay is separate from the original drawing. View Markup to see reviewers\' markup overlays.)';
			sTemp=L_vimarkupoverlay_TEXT;
			break;
		case 'vimemorymodel':
			L_vimemorymodel_TEXT='(memory model: In a Web site map, the memory model contains information about every link discovered. Changing the memory model changes the map on the drawing page.)';
			sTemp=L_vimemorymodel_TEXT;
			break;
		case 'viresource':
			L_viresource_TEXT='(resource: In a space plan, a person, computer, printer, or asset.)';
			sTemp=L_viresource_TEXT;
			break;
		case 'virle':
			L_virle_TEXT='(run-length encoding (RLE) compression: A fast and highly efficient method of storing data in which patterns in the bits representing information are translated into codes rather than being stored literally bit by bit and character by character.)';
			sTemp=L_virle_TEXT;
			break;
		case 'Virtual':
			L_Virtual_TEXT='(virtual: A class for which you cannot create an instance. A Virtual/Abstract class can only act as a superclass to other classes. In a directory service schema, virtual/abstract classes are dimmed.)';
			sTemp=L_Virtual_TEXT;
			break;
		case 'Visibility':
			L_Visibility_TEXT='(visibility: The ability of one element to see or refer to another. For one element to send a message to another element, the latter must be visible to the former.)';
			sTemp=L_Visibility_TEXT;
			break;
		case 'Visio_library':
			L_Visio_library_TEXT='(Visio library: A special dynamic-link library (dll) that is loaded by the Visio application at run time and can implement one or more Visio add-ons. A Visio library has the filename extension .vsl.)';
			sTemp=L_Visio_library_TEXT;
			break;
		case 'Visio_type_library':
			L_Visio_type_library_TEXT='(Visio type library: A file that contains definitions of the objects, properties, methods, events, and constants that the Visio application exposes to Automation.)';
			sTemp=L_Visio_type_library_TEXT;
			break;
		case 'vispace':
			L_vispace_TEXT='(space: In a space plan, a space identifies the approximate location of one or more resources, such as a person, computer, printer, or asset.)';
			sTemp=L_vispace_TEXT;
			break;
		case 'VLAN_Domains':
			L_VLAN_Domains_TEXT='(VLAN domain: A set of connected switches that share the same subnet definitions. A VLAN domain propagates changes of the domain attributes (including subnet definition) to switches in the domain.)';
			sTemp=L_VLAN_Domains_TEXT;
			break;
		case 'VLANs':
			L_VLANs_TEXT='(Virtual LANs (VLANs): Provide some of the advantages of a routed network within a switched network, such as reducing network traffic by breaking the network into multiple broadcast domains.)';
			sTemp=L_VLANs_TEXT;
			break;
		case 'Wall_reference_line':
			L_Wall_reference_line_TEXT='(wall reference line: The line that extends from the wall begin point to the wall endpoint. Although the wall reference line is typically centered on the wall or aligned with one edge of the wall, you can locate it any distance you want from the wall.)';
			sTemp=L_Wall_reference_line_TEXT;
			break;
		case 'WIA':
			L_WIA_TEXT='(WIA: A device-driver interface that supports still digital cameras and low- and high-end scanners, and allows retrieving of still images from IEEE 1394-based DV camcorders and USB-based \"Web cams.\")';
			sTemp=L_WIA_TEXT;
			break;
		case 'Wizard':
			L_Wizard_TEXT='(wizard: A Visio tool that automates common tasks. For example, you can use the Org Chart Wizard to automate creating an organization chart.)';
			sTemp=L_Wizard_TEXT;
			break;
		case 'Workspace':
			L_Workspace_TEXT='(workspace: A Visio file that contains data about the size and position of drawings and stencils at the time you save the workspace. When you open a workspace, the Visio program recreates the arrangement of stencil and drawing windows for you.)';
			sTemp=L_Workspace_TEXT;
			break;
		case 'Zero_point':
			L_Zero_point_TEXT='(zero point: (1) The location of the 0 on the horizontal or vertical ruler. (2) The point in the drawing window where the zero points of each ruler intersect. By default, the zero point is the lower-left corner of the drawing page.)';
			sTemp=L_Zero_point_TEXT;
			break;
		case 'Zoom':
			L_Zoom_TEXT='(zoom: To increase or decrease the display size of a drawing in the drawing window. A display size of 100% (or Actual Size) displays the drawing at the same size it will be when it is printed, unless you change the printed output in Page Setup.)';
			sTemp=L_Zoom_TEXT;
			break;

		// Project

		case 'pjcommittedresource':
			L_pjcommittedresource_TEXT='(committed resource: A resource that is formally allocated to any task assignments they have within a project. This is the default booking type.)';
			sTemp=L_pjcommittedresource_TEXT;
			break;
		case 'pjdefAbsoluteReference':
			L_pjdefAbsoluteReference_TEXT='(absolute reference: A reference to a column or row that is independent of the active cell. The results of an absolute reference remain the same regardless of the active cell\'s location.)';
			sTemp=L_pjdefAbsoluteReference_TEXT;
			break;
		case 'pjdefaccessibility_aids':
			L_pjdefaccessibility_aids_TEXT='(accessibility aids: Utilities that make computers easier to use for people with disabilities. Examples of accessibility aids include screen readers, speech-recognition programs, and on-screen keyboards.)';
			sTemp=L_pjdefaccessibility_aids_TEXT;
			break;
		case 'pjdefaccessible':
			L_pjdefaccessible_TEXT='(accessible: The quality of a given system of hardware or software that makes it usable by people with one or more physical disabilities, such as restricted mobility, blindness, or deafness.)';
			sTemp=L_pjdefaccessible_TEXT;
			break;
		case 'pjdefAccrualMethod':
			L_pjdefAccrualMethod_TEXT='(accrual method: Determines when the cost for a resource is incurred and when actual costs are charged to a project. You can incur costs at the start [Start] or finish [End] of a task or prorate them [Prorated] during the task.)';
			sTemp=L_pjdefAccrualMethod_TEXT;
			break;
		case 'pjdefActiveXAddin':
			L_pjdefActiveXAddin_TEXT='(COM add-in: A supplemental program with the filename extension .dll or .exe that extends the capabilities of a program by adding custom commands and specialized features. COM add-ins can be designed to load and run in one or more Office programs.)';
			sTemp=L_pjdefActiveXAddin_TEXT;
			break;
		case 'pjdefActual':
			L_pjdefActual_TEXT='(actual: Information that shows what has actually occurred. For example, the actual start date for a task is the day that the task actually started.)';
			sTemp=L_pjdefActual_TEXT;
			break;
		case 'pjdefActualCost':
			L_pjdefActualCost_TEXT='(actual cost: The cost that has actually been incurred to date for a task, resource, or assignment. For example, if the only resource assigned to a task gets paid $20 per hour and has worked for two hours, the actual cost to date for the task is $40.)';
			sTemp=L_pjdefActualCost_TEXT;
			break;
		case 'pjdefActualDuration':
			L_pjdefActualDuration_TEXT='(actual duration: The amount of time a task has been in progress. When you enter the actual duration of a task, Project uses this value to calculate the remaining duration according to the formula Remaining Duration = Duration - Actual Duration.)';
			sTemp=L_pjdefActualDuration_TEXT;
			break;
		case 'pjdefActualWork':
			L_pjdefActualWork_TEXT='(actual work: The amount of work that has been performed on a task or assignment. When you enter actual work on a task, the remaining work is calculated using this formula: Remaining Work = Work - Actual Work. Actual work is often referred to as \"actuals.\")';
			sTemp=L_pjdefActualWork_TEXT;
			break;
		case 'pjdefACWP':
			L_pjdefACWP_TEXT='(ACWP: Shows actual costs incurred for work already performed by a resource on a task, up to the project status date or today\'s date.)';
			sTemp=L_pjdefACWP_TEXT;
			break;
		case 'pjdefAddress':
			L_pjdefAddress_TEXT='(address: The Address field is where Project stores the Universal Naming Convention [UNC] for a file or the Uniform Resource Locator [URL] address of a hyperlink that you have associated with a task, resource, or assignment.)';
			sTemp=L_pjdefAddress_TEXT;
			break;
		case 'pjdefAdminClosure':
			L_pjdefAdminClosure_TEXT='(administrative closure: The process of documenting and archiving a project in a timely manner, as well as formally accepting the project\'s product and lessons learned.)';
			sTemp=L_pjdefAdminClosure_TEXT;
			break;
		case 'pjdefadministrator':
			L_pjdefadministrator_TEXT='(administrator: Sets up and manages user accounts, assigns permissions, and helps users with network or server access issues. This person can also manage and customize various elements in Project Professional and in Project Server.)';
			sTemp=L_pjdefadministrator_TEXT;
			break;
		case 'pjdefAlef_Hamzas':
			L_pjdefAlef_Hamzas_TEXT='(Alef Hamzas: A single Arabic character that represents the two-character combination Alef plus Hamza.)';
			sTemp=L_pjdefAlef_Hamzas_TEXT;
			break;
		case 'pjdefAllocation':
			L_pjdefAllocation_TEXT='(allocation: The percentage of a resource\'s capacity that is designated for a specific assignment.)';
			sTemp=L_pjdefAllocation_TEXT;
			break;
		case 'pjdefApplication':
			L_pjdefApplication_TEXT='(application: A computer program that is used for a particular kind of work, such as managing projects or word processing. This term application is used interchangeably with program.)';
			sTemp=L_pjdefApplication_TEXT;
			break;
		case 'pjdefArgument':
			L_pjdefArgument_TEXT='(argument: In Visual Basic for Applications, a constant, variable, or expression that is passed to a procedure.)';
			sTemp=L_pjdefArgument_TEXT;
			break;
		case 'pjdefASCII':
			L_pjdefASCII_TEXT='(ASCII: American Standard Code for Information Interchange.)';
			sTemp=L_pjdefASCII_TEXT;
			break;
		case 'pjdefAssignment':
			L_pjdefAssignment_TEXT='(assignment: A specific resource that is assigned to a particular task.)';
			sTemp=L_pjdefAssignment_TEXT;
			break;
		case 'pjdefAssignmentDelay':
			L_pjdefAssignmentDelay_TEXT='(assignment delay: The amount of time between the scheduled start of a task and the time that the assigned resource is to start working on the task.)';
			sTemp=L_pjdefAssignmentDelay_TEXT;
			break;
		case 'pjdefAssignmentUnits':
			L_pjdefAssignmentUnits_TEXT='(assignment units: The percentage of a work resource\'s time, or units, that the resource is assigned to a task.)';
			sTemp=L_pjdefAssignmentUnits_TEXT;
			break;
		case 'pjdefAssignmentView':
			L_pjdefAssignmentView_TEXT='(assignment view: A view that shows the resources assigned to each task as well as the total and timephased work and cost information for each assignment. The two assignment views are the Task Usage and Resource Usage views.)';
			sTemp=L_pjdefAssignmentView_TEXT;
			break;
		case 'pjdefAuthentication':
			L_pjdefAuthentication_TEXT='(authentication: The process of identifying a specific user and confirming that the user has permission to access Project Server.)';
			sTemp=L_pjdefAuthentication_TEXT;
			break;
		case 'pjdefAutoFilter':
			L_pjdefAutoFilter_TEXT='(AutoFilter: A way to filter information in a field [column]. By default, AutoFilters are off, but you can turn them on by clicking <b>AutoFilter</b>. Selecting a filter does not delete any information from your project; it only filters it from your view.)';
			sTemp=L_pjdefAutoFilter_TEXT;
			break;
		case 'pjdefAutomation':
			L_pjdefAutomation_TEXT='(automation: A way to work with objects from another program or development tool. Formerly called OLE Automation, Automation is an industry standard and a feature of the Component Object Model [COM].)';
			sTemp=L_pjdefAutomation_TEXT;
			break;
		case 'pjdefAvailability':
			L_pjdefAvailability_TEXT='(availability: Indicates when and how much of a resource\'s time can be scheduled for assigned work. Availability is determined by project and resource calendars, resource start and finish dates, or the level at which the resource is available for work.)';
			sTemp=L_pjdefAvailability_TEXT;
			break;
		case 'pjdefBAC':
			L_pjdefBAC_TEXT='(BAC: An estimate of the total project cost.)';
			sTemp=L_pjdefBAC_TEXT;
			break;
		case 'pjdefBackwardPass':
			L_pjdefBackwardPass_TEXT='(backward pass: Calculation of late finish and late start dates for project activities, determined by working backward from the project\'s finish date.)';
			sTemp=L_pjdefBackwardPass_TEXT;
			break;
		case 'pjdefBaseCalendar':
			L_pjdefBaseCalendar_TEXT='(base calendar: A calendar that can be used as a project and task calendar that specifies default working and nonworking time for a set of resources. Differs from a resource calendar, which specifies working and nonworking time for an individual resource.)';
			sTemp=L_pjdefBaseCalendar_TEXT;
			break;
		case 'pjdefBaselineCost':
			L_pjdefBaselineCost_TEXT='(baseline cost: The original project, resource, and assignment cost as shown in the baseline plan. The baseline cost is a snapshot of the cost at the time when the baseline plan was saved.)';
			sTemp=L_pjdefBaselineCost_TEXT;
			break;
		case 'pjdefBaselinePlan':
			L_pjdefBaselinePlan_TEXT='(baseline plan: The original project plans [up to 11 per project] used to track progress on a project. The baseline plan is a snapshot of your schedule at the time that you save the baseline and includes information about tasks, resources, and assignments.)';
			sTemp=L_pjdefBaselinePlan_TEXT;
			break;
		case 'pjdefBCWP':
			L_pjdefBCWP_TEXT='(BCWP: The earned value field that indicates how much of the task\'s budget should have been spent, given the actual duration of the task. Note that Project calculates BCWP at the task level differently than at the assignment level.)';
			sTemp=L_pjdefBCWP_TEXT;
			break;
		case 'pjdefBCWS':
			L_pjdefBCWS_TEXT='(BCWS: The earned value field that shows how much of the budget should have been spent, in view of the baseline cost of the task, assignment, or resource. BCWS is calculated as the cumulative timephased baseline costs up to the status date or today\'s date.)';
			sTemp=L_pjdefBCWS_TEXT;
			break;
		case 'pjdefbidirectional':
			L_pjdefbidirectional_TEXT='(bidirectional: An environment in which attributes of right-to-left and left-to-right behavior are used together, such as Hebrew and English text that appear in the same sentence.)';
			sTemp=L_pjdefbidirectional_TEXT;
			break;
		case 'pjdefBinding':
			L_pjdefBinding_TEXT='(early and late binding: The verification process that VBA uses when an object variable in one program refers to an object supplied by another program. Binding can occur at run time (late binding) or at compile time (early binding).)';
			sTemp=L_pjdefBinding_TEXT;
			break;
		case 'pjdefBitmapGrid':
			L_pjdefBitmapGrid_TEXT='(bitmap grid: The enlarged view of a button image in which you can edit the individual color pixels of the image.)';
			sTemp=L_pjdefBitmapGrid_TEXT;
			break;
		case 'pjdefBottomUpEstimating':
			L_pjdefBottomUpEstimating_TEXT='(bottom-up estimating: An estimating method in which the base costs of individual work items or resources are calculated into task, resource, and project cost totals.)';
			sTemp=L_pjdefBottomUpEstimating_TEXT;
			break;
		case 'pjdefBreakMode':
			L_pjdefBreakMode_TEXT='(break mode: In Visual Basic for Applications, the temporary suspension of a running program or macro while in the development environment. In break mode, you can examine, debug, reset, step, or resume running the program or macro.)';
			sTemp=L_pjdefBreakMode_TEXT;
			break;
		case 'pjdefBrowser':
			L_pjdefBrowser_TEXT='(browser: A program that interprets the HTML delivered from Web servers, formats it, and displays it to the user.)';
			sTemp=L_pjdefBrowser_TEXT;
			break;
		case 'pjdefBudget':
			L_pjdefBudget_TEXT='(budget: The estimated cost of a project that you establish in Project with your baseline plan.)';
			sTemp=L_pjdefBudget_TEXT;
			break;
		case 'pjdefBuffer':
			L_pjdefBuffer_TEXT='(buffer: Additional time added to a task\'s or project\'s scheduled duration that accounts for possible increases in the actual time required to complete the task or project.)';
			sTemp=L_pjdefBuffer_TEXT;
			break;
		case 'pjdefCal':
			L_pjdefCal_TEXT='(calendar: The scheduling mechanism that determines working time for resources and tasks. Project uses four types of calendars: the base calendar, project calendar, resource calendar, and task calendar.)';
			sTemp=L_pjdefCal_TEXT;
			break;
		case 'pjdefCalcOrEnter':
			L_pjdefCalcOrEnter_TEXT='(calculated or entered field: A field in which the value is determined by Project based on information in other fields. Information that you enter in the field yourself overrides calculated values.)';
			sTemp=L_pjdefCalcOrEnter_TEXT;
			break;
		case 'pjdefCalculatedFields':
			L_pjdefCalculatedFields_TEXT='(calculated field: A field in which the value is determined by Project based on information in other fields. Project may recalculate the value automatically or when you specify, depending on your choice of calculation settings.)';
			sTemp=L_pjdefCalculatedFields_TEXT;
			break;
		case 'pjdefCalculatedFilter':
			L_pjdefCalculatedFilter_TEXT='(calculated filter: Compares the values in two fields of a task or resource. For example, the Cost Overbudget filter compares baseline costs to current costs and displays or highlights only tasks with current costs higher than their baseline costs.)';
			sTemp=L_pjdefCalculatedFilter_TEXT;
			break;
		case 'pjdefCalendar':
			L_pjdefCalendar_TEXT='(calendar view: A Project view that displays a project\'s tasks in a calendar format.)';
			sTemp=L_pjdefCalendar_TEXT;
			break;
		case 'pjdefCaseSensitive':
			L_pjdefCaseSensitive_TEXT='(case-sensitive: Respects the case of the characters. For example, a case-sensitive search for a specific character string that includes uppercase and lowercase characters will not find the same character string with all lowercase characters.)';
			sTemp=L_pjdefCaseSensitive_TEXT;
			break;
		case 'pjdefCategory':
			L_pjdefCategory_TEXT='(category: A mapping, within Project Server, of users to projects and views. Each category has a name and allows users in that category to access specific projects through a specific set of views.)';
			sTemp=L_pjdefCategory_TEXT;
			break;
		case 'pjdefChart':
			L_pjdefChart_TEXT='(chart: A view or part of a view that represents project information graphically. For example, the Gantt Chart view consists of a sheet and a chart pane where tasks are represented as horizontal bars.)';
			sTemp=L_pjdefChart_TEXT;
			break;
		case 'pjdefcheck_out':
			L_pjdefcheck_out_TEXT='(check out: The process of opening an enterprise project or an enterprise resource\'s record for editing.)';
			sTemp=L_pjdefcheck_out_TEXT;
			break;
		case 'pjdefClipboard':
			L_pjdefClipboard_TEXT='(clipboard: The holding place for information being copied or moved within Project or between Project and other programs.)';
			sTemp=L_pjdefClipboard_TEXT;
			break;
		case 'pjdefCode':
			L_pjdefCode_TEXT='(code: In Visual Basic for Applications, a series of one or more instructions in a macro.)';
			sTemp=L_pjdefCode_TEXT;
			break;
		case 'pjdefCodeMask':
			L_pjdefCodeMask_TEXT='(code mask: The format that you define for a work breakdown structure [WBS] code or a custom outline code. The mask specifies the sequence and number of letters or numbers required for each level and the symbol separating the levels.)';
			sTemp=L_pjdefCodeMask_TEXT;
			break;
		case 'pjdefCodePage':
			L_pjdefCodePage_TEXT='(code page: An internal table that the operating system uses to relate the keys on the keyboard to the characters displayed on the screen. Different code pages provide support for the character sets and keyboard layouts used in different countries/regions.)';
			sTemp=L_pjdefCodePage_TEXT;
			break;
		case 'pjdefCodePane':
			L_pjdefCodePane_TEXT='(code pane: In Visual Basic for Applications, the window that is used to display, edit, and write module-level and procedure code.)';
			sTemp=L_pjdefCodePane_TEXT;
			break;
		case 'pjdefCollapsing':
			L_pjdefCollapsing_TEXT='(collapsing: In an outline, hiding the tasks that are subordinate to summary tasks, leaving only the summary tasks visible; this shows only the major phases. Expand and collapse the outline in various usage views to show or hide resource assignments.)';
			sTemp=L_pjdefCollapsing_TEXT;
			break;
		case 'pjdefcolumn_or_row_of_pages':
			L_pjdefcolumn_or_row_of_pages_TEXT='(column or row of pages: A representation of pages in a preview. When you preview pages to be printed, Project maps the pages in columns [to represent the columns to be printed per page] and rows [to represent the rows to be printed per page].)';
			sTemp=L_pjdefcolumn_or_row_of_pages_TEXT;
			break;
		case 'pjdefCombinationView':
			L_pjdefCombinationView_TEXT='(combination view: A view containing two views. The bottom pane view shows detailed information about the tasks or resources in the top pane view. For example, the Gantt Chart view could be in the top pane and the Task Form view in the bottom pane.)';
			sTemp=L_pjdefCombinationView_TEXT;
			break;
		case 'pjdefConsolidatedFile':
			L_pjdefConsolidatedFile_TEXT='(consolidated project: A project containing one or more inserted projects [also known as subprojects]. These can retain links to their source projects and may be linked to one another. A consolidated project is also called a master project.)';
			sTemp=L_pjdefConsolidatedFile_TEXT;
			break;
		case 'pjdefConstraint':
			L_pjdefConstraint_TEXT='(constraint: A restriction set on the start or finish date of a task. You can specify that a task must start on or finish no later than a particular date. Constraints can be flexible [not tied to a specific date] or inflexible [tied to a specific date].)';
			sTemp=L_pjdefConstraint_TEXT;
			break;
		case 'pjdefContainer':
			L_pjdefContainer_TEXT='(container: The program or document in which an OLE object that was created in another program or document resides. OLE container refers to an OLE-aware program that can store embedded or linked objects provided by OLE servers.)';
			sTemp=L_pjdefContainer_TEXT;
			break;
		case 'pjdefContingencyPlan':
			L_pjdefContingencyPlan_TEXT='(contingency plan: A plan that identifies corrective steps to take if a risk event occurs.)';
			sTemp=L_pjdefContingencyPlan_TEXT;
			break;
		case 'pjdefContour':
			L_pjdefContour_TEXT='(contour: The shape of how scheduled work for an assignment is distributed across time. Use a contour to control how Project schedules the work of a resource. Contour examples include flat, back-loaded, front-loaded, bell, turtle, and more.)';
			sTemp=L_pjdefContour_TEXT;
			break;
		case 'pjdefContractCloseout':
			L_pjdefContractCloseout_TEXT='(contract closeout: The completion of the contract [such as fixed price or lump sum, cost reimbursable, unit price contracts]. Closeout includes resolving all outstanding issues and items, such as inspections or invoices.)';
			sTemp=L_pjdefContractCloseout_TEXT;
			break;
		case 'pjdefCost':
			L_pjdefCost_TEXT='(cost: The total scheduled cost for a task, resource, or assignment, or for an entire project. This is sometimes referred to as the current cost. In Project, baseline costs are usually referred to as \"budget.\")';
			sTemp=L_pjdefCost_TEXT;
			break;
		case 'pjdefCostRateTable':
			L_pjdefCostRateTable_TEXT='(cost rate table: A collection of information about a resource\'s rates, including the standard rate, overtime rate, any per-use cost, and the date when the pay rate takes effect. You can establish up to five different cost rate tables for each resource.)';
			sTemp=L_pjdefCostRateTable_TEXT;
			break;
		case 'pjdefCPI':
			L_pjdefCPI_TEXT='(CPI: Ratio of budgeted costs of work performed to actual costs of work performed [BCWP/ACWP]. The cumulative CPI [sum of the BCWP for all tasks divided by the sum of the ACWP for all tasks] can be used to predict whether a project will go over budget.)';
			sTemp=L_pjdefCPI_TEXT;
			break;
		case 'pjdefCPM':
			L_pjdefCPM_TEXT='(CPM: A project management method of calculating the total duration of a project based on individual task durations and their dependencies.)';
			sTemp=L_pjdefCPM_TEXT;
			break;
		case 'pjdefCrash':
			L_pjdefCrash_TEXT='(crash: To decrease a project\'s overall duration without changing task relationships. Crashing a project typically requires assigning additional resources to tasks.)';
			sTemp=L_pjdefCrash_TEXT;
			break;
		case 'pjdefCriteria':
			L_pjdefCriteria_TEXT='(criteria: In a filter, the instructions that specify which tasks or resources should be displayed when the filter is applied. For example, the criterion for the Completed Tasks filter is any task that is 100 percent complete.)';
			sTemp=L_pjdefCriteria_TEXT;
			break;
		case 'pjdefCriticalPath':
			L_pjdefCriticalPath_TEXT='(critical path: The series of tasks that must be completed on schedule for a project to finish on schedule. Each task on the critical path is a critical task.)';
			sTemp=L_pjdefCriticalPath_TEXT;
			break;
		case 'pjdefCriticalTask':
			L_pjdefCriticalTask_TEXT='(critical task: A task that must be completed on schedule for the project to finish on time. If a critical task is delayed, the project completion date might also be delayed. A series of critical tasks makes up a project\'s critical path.)';
			sTemp=L_pjdefCriticalTask_TEXT;
			break;
		case 'pjdefCrossProjectLinking':
			L_pjdefCrossProjectLinking_TEXT='(cross-project links: Dependencies between tasks in different Project files, also called external dependencies. Project plans do not need to have a master project-subproject relationship to include a cross-project link.)';
			sTemp=L_pjdefCrossProjectLinking_TEXT;
			break;
		case 'pjdefCrosstabReport':
			L_pjdefCrosstabReport_TEXT='(crosstab report: Printed information about tasks and resources over a specified time period. There are five predefined crosstab reports in Project: Cash Flow, Crosstab, Resource Usage, Task Usage, and Who Does What When.)';
			sTemp=L_pjdefCrosstabReport_TEXT;
			break;
		case 'pjdefCSV':
			L_pjdefCSV_TEXT='(CSV: The comma-separated values [CSV] file format is an ASCII, record-based text format in which each field is separated by a list-separator character, usually a comma or semicolon. Each task or resource record ends with a carriage return and linefeed.)';
			sTemp=L_pjdefCSV_TEXT;
			break;
		case 'pjdefCumCPI':
			L_pjdefCumCPI_TEXT='(CPI: In earned value, the sum of all the budgeted costs of work performed [BCWP] for all tasks divided by the sum of all the actual costs of work performed [ACWP]. CPI is often used to predict whether a project will go over budget, and by how much.)';
			sTemp=L_pjdefCumCPI_TEXT;
			break;
		case 'pjdefCurrencyField':
			L_pjdefCurrencyField_TEXT='(currency field: A type of field whose content is expressed as a cost. Examples include the Actual Cost and Fixed Cost fields. The maximum value allowed in this field is 999,999,999,999.99.)';
			sTemp=L_pjdefCurrencyField_TEXT;
			break;
		case 'pjdefCurrencyRateField':
			L_pjdefCurrencyRateField_TEXT='(currency rate field: A type of field whose content is a rate of pay [for example, $20 per hour]. Examples include the Standard Rate and Overtime Rate fields. The maximum value allowed in this field is 999,999,999.99.)';
			sTemp=L_pjdefCurrencyRateField_TEXT;
			break;
		case 'pjdefCurrentDateLine':
			L_pjdefCurrentDateLine_TEXT='(current date line: The dotted vertical line in the chart portion of a Gantt Chart or Resource Graph, indicating the current date.)';
			sTemp=L_pjdefCurrentDateLine_TEXT;
			break;
		case 'pjdefcustom_form':
			L_pjdefcustom_form_TEXT='(custom form: A form [a type of view that provides details about an individual task or resource] that you customize to better fit your needs.)';
			sTemp=L_pjdefcustom_form_TEXT;
			break;
		case 'pjdefCV':
			L_pjdefCV_TEXT='(CV: The difference between the budgeted cost of work performed [BCWP] on a task and the actual cost of work performed [ACWP]. If the CV is positive, the cost is currently under the budgeted amount; if the CV is negative, the task is currently over budget.)';
			sTemp=L_pjdefCV_TEXT;
			break;
		case 'pjdefdata_access_page':
			L_pjdefdata_access_page_TEXT='(data access page: A special type of Web page that is designed for viewing and working with data over the Internet or an intranet.)';
			sTemp=L_pjdefdata_access_page_TEXT;
			break;
		case 'pjdefDateField':
			L_pjdefDateField_TEXT='(date field: A type of field whose content is a date. Examples include the Baseline Start and Early Finish fields.)';
			sTemp=L_pjdefDateField_TEXT;
			break;
		case 'pjdefDDE':
			L_pjdefDDE_TEXT='(DDE: A protocol for the active exchange of data copied among documents. When the information changes in the source document, it can be updated in the copy automatically. Consult the documentation for your other programs to see whether they support DDE.)';
			sTemp=L_pjdefDDE_TEXT;
			break;
		case 'pjdefDeadline':
			L_pjdefDeadline_TEXT='(deadline: A target date indicating when you want a task to be completed. If the deadline date passes and the task is not completed, Project displays an indicator.)';
			sTemp=L_pjdefDeadline_TEXT;
			break;
		case 'pjdefDefaultValue':
			L_pjdefDefaultValue_TEXT='(default value: The value that Project assigns to a field automatically, if you do not supply your own value.)';
			sTemp=L_pjdefDefaultValue_TEXT;
			break;
		case 'pjdefDelay':
			L_pjdefDelay_TEXT='(delay: The amount of time between the scheduled start of a task and the time when work should actually begin on the task; it is often used to resolve resource overallocations. There are two types of delay: assignment delay and leveling delay.)';
			sTemp=L_pjdefDelay_TEXT;
			break;
		case 'pjdefDeliverable':
			L_pjdefDeliverable_TEXT='(deliverable: A tangible and measurable result, outcome, or item that must be produced to complete a project or part of a project. Typically, the project team and project stakeholders agree on project deliverables before the project begins.)';
			sTemp=L_pjdefDeliverable_TEXT;
			break;
		case 'pjdefDemoting':
			L_pjdefDemoting_TEXT='(indenting: Moving a task to a lower outline level [to the right] in the Task Name field. When you indent a task, it becomes a subtask of the nearest preceding task at a higher outline level.)';
			sTemp=L_pjdefDemoting_TEXT;
			break;
		case 'pjdefDesignMode':
			L_pjdefDesignMode_TEXT='(design and run modes: A mode in which you can design custom dialog boxes and controls and write code. Unlike run mode, you do not interact with your program the way a user would; events do not fire and event procedures do not automatically run.)';
			sTemp=L_pjdefDesignMode_TEXT;
			break;
		case 'pjdefDestination':
			L_pjdefDestination_TEXT='(destination: Where moved, copied, imported, or exported information is inserted; also a view, table, document, or another program. In OLE, the document or program where a linked object resides; also, the document that a hyperlink leads to.)';
			sTemp=L_pjdefDestination_TEXT;
			break;
		case 'pjdefDetails':
			L_pjdefDetails_TEXT='(details: Columns in the Task Usage and Resource Usage views, the Resource Graph view, and the form views that display useful information regarding a task, resource, or assignment.)';
			sTemp=L_pjdefDetails_TEXT;
			break;
		case 'pjdefDiacritics':
			L_pjdefDiacritics_TEXT='(diacritics: In right-to-left languages, markings that are printed above or below vowels that specify how to pronounce the vowels.)';
			sTemp=L_pjdefDiacritics_TEXT;
			break;
		case 'pjdefdigital_certificate':
			L_pjdefdigital_certificate_TEXT='(digital certificate: An attachment for a file, macro project, or e-mail message that vouches for its authenticity, provides secure encryption, or supplies a verifiable signature. To digitally sign macro projects, you must install a digital certificate.)';
			sTemp=L_pjdefdigital_certificate_TEXT;
			break;
		case 'pjdefdigitally_sign':
			L_pjdefdigitally_sign_TEXT='(digitally sign: To provide an electronic, encryption-based, secure stamp of authentication on a macro or file. This signature confirms that the macro or file originated from the signer and has not been altered.)';
			sTemp=L_pjdefdigitally_sign_TEXT;
			break;
		case 'pjdefDimmed':
			L_pjdefDimmed_TEXT='(dimmed: An item in a program that is unavailable. Sometimes an item is dimmed because it does not currently apply to the operation that you\'re trying to perform. Items are also dimmed when your program is not set up to run the dimmed item.)';
			sTemp=L_pjdefDimmed_TEXT;
			break;
		case 'pjdefdirection':
			L_pjdefdirection_TEXT='(direction: Specifies the reading order, alignment, and visual appearance of right-to-left text and documents, regardless of the keyboard language. Direction also describes how the user interface, controls, and other screen objects are oriented.)';
			sTemp=L_pjdefdirection_TEXT;
			break;
		case 'pjdefDividerBar':
			L_pjdefDividerBar_TEXT='(divider bar: The vertical bar that separates the chart from the table or legend in the Gantt Chart, Resource Graph, Resource Usage, and Task Usage views.)';
			sTemp=L_pjdefDividerBar_TEXT;
			break;
		case 'pjdefdocked_toolbar':
			L_pjdefdocked_toolbar_TEXT='(docked toolbar: A toolbar that is attached to one edge of the program window. When you drag a toolbar below the program title bar or to the left, right, or bottom edge of the program window, the toolbar snaps into place on the edge of the program window.)';
			sTemp=L_pjdefdocked_toolbar_TEXT;
			break;
		case 'pjdefdocument_library':
			L_pjdefdocument_library_TEXT='(document library: A folder in which a collection of files is shared and the files often use the same template. Each file in a library is associated with user-defined information that is displayed in the content listing for that library.)';
			sTemp=L_pjdefdocument_library_TEXT;
			break;
		case 'pjdefdriving_resource':
			L_pjdefdriving_resource_TEXT='(driving resource: The resource whose assignment to a task determines the finish date of the task.)';
			sTemp=L_pjdefdriving_resource_TEXT;
			break;
		case 'pjdefDuration':
			L_pjdefDuration_TEXT='(duration: The total span of active working time that is required to complete a task. This is generally the amount of working time from the start to finish of a task, as defined by the project and resource calendar.)';
			sTemp=L_pjdefDuration_TEXT;
			break;
		case 'pjdefDurationField':
			L_pjdefDurationField_TEXT='(duration field: A type of field whose content is expressed as a duration of time. Examples include the Work, Duration, and Delay fields. A duration field includes the duration unit, such as hour, day, or week.)';
			sTemp=L_pjdefDurationField_TEXT;
			break;
		case 'pjdefEAC':
			L_pjdefEAC_TEXT='(EAC: The expected total cost of a task or project, based on performance as of the status date. EAC is calculated as follows: EAC = ACWP + (BAC-BCWP)/CPI.)';
			sTemp=L_pjdefEAC_TEXT;
			break;
		case 'pjdefEarlyFinDate':
			L_pjdefEarlyFinDate_TEXT='(early finish date: The earliest date that a task could possibly finish, based on early finish dates of predecessor and successor tasks, other constraints, and any leveling delay.)';
			sTemp=L_pjdefEarlyFinDate_TEXT;
			break;
		case 'pjdefEarnedValue':
			L_pjdefEarnedValue_TEXT='(earned value: A measure of the cost of work performed up to the status date or current date. Earned value uses your original cost estimates saved with a baseline and your actual work to date to show whether the actual costs incurred are on budget.)';
			sTemp=L_pjdefEarnedValue_TEXT;
			break;
		case 'pjdefEffortdrivenScheduling':
			L_pjdefEffortdrivenScheduling_TEXT='(effort-driven scheduling: The default method of scheduling in Project; the duration of a task shortens or lengthens as resources are added or removed from a task, while the amount of effort necessary to complete a task remains unchanged.)';
			sTemp=L_pjdefEffortdrivenScheduling_TEXT;
			break;
		case 'pjdefElapsedDuration':
			L_pjdefElapsedDuration_TEXT='(elapsed duration: The amount of time that a task will take to finish, based on a 24-hour day and a 7-day week, including holidays and other nonworking days. For example: emin = elapsed minute, ehr = elapsed hour, eday = elapsed day, ewk = elapsed week.)';
			sTemp=L_pjdefElapsedDuration_TEXT;
			break;
		case 'pjdefe-mail_system':
			L_pjdefemail_system_TEXT='(e-mail system: A group of computers connected in a network capable of exchanging electronic mail messages. To exchange team collaboration messages, each computer in the network must have a MAPI-compliant, 32-bit e-mail system, such as Outlook.)';
			sTemp=L_pjdefemail_system_TEXT;
			break;
		case 'pjdefEmbed':
			L_pjdefEmbed_TEXT='(embedding: The placing of an OLE object into a container document. You can edit an embedded object from within the container document by using a program associated with the object.)';
			sTemp=L_pjdefEmbed_TEXT;
			break;
		case 'pjdefEmbeddedObject':
			L_pjdefEmbeddedObject_TEXT='(embedded object: Information [the object] inserted in a file [the destination file]. Once embedded, the object becomes part of the destination file. When you double-click an embedded object, it opens in the program it was created in [the source program].)';
			sTemp=L_pjdefEmbeddedObject_TEXT;
			break;
		case 'pjdefEmpty':
			L_pjdefEmpty_TEXT='(empty: Indicates that no beginning value has been assigned to a Variant variable. An empty variable is represented as 0 in a numeric context or a zero-length string [\"\"] in a string context.)';
			sTemp=L_pjdefEmpty_TEXT;
			break;
		case 'pjdefEntered':
			L_pjdefEntered_TEXT='(entered field: A field in which you may type or edit information. This is in contrast with a calculated field, in which Project calculates and enters information.)';
			sTemp=L_pjdefEntered_TEXT;
			break;
		case 'pjdefenterprise_global_template':
			L_pjdefenterprise_global_template_TEXT='(enterprise global template: A collection of default settings, such as views, tables, and fields, that are used by all projects across the organization. These settings exist within a special project in Project Server.)';
			sTemp=L_pjdefenterprise_global_template_TEXT;
			break;
		case 'pjdefenterprise_resources':
			L_pjdefenterprise_resources_TEXT='(enterprise resources: Resources that are part of an organization\'s entire list of resources. Enterprise resources can be shared across projects.)';
			sTemp=L_pjdefenterprise_resources_TEXT;
			break;
		case 'pjdefEnumField':
			L_pjdefEnumField_TEXT='(enumerated field: A type of field whose content is selected from a list of predefined choices. For example, in the Accrue At field you can select the way resource costs are accrued from a list that includes Start, Prorated, and End.)';
			sTemp=L_pjdefEnumField_TEXT;
			break;
		case 'pjdefEstimatedDuration':
			L_pjdefEstimatedDuration_TEXT='(estimated duration: A duration for which you have only enough information to determine a tentative value. So that its status is clearly visible, an estimated duration is clearly marked by a question mark immediately following the duration unit.)';
			sTemp=L_pjdefEstimatedDuration_TEXT;
			break;
		case 'pjdefException':
			L_pjdefException_TEXT='(exception: An instance in which a task or resource calendar differs from the project calendar. An example is a resource that must work on Saturdays, but for which the project calendar does not include working time to cover these instances.)';
			sTemp=L_pjdefException_TEXT;
			break;
		case 'pjdefExpanding':
			L_pjdefExpanding_TEXT='(expanding: In an outline, making visible the collapsed tasks that are immediately subordinate to summary tasks. You can also expand and collapse the outline in the Resource Usage view and the Task Usage view to hide or show resource assignments.)';
			sTemp=L_pjdefExpanding_TEXT;
			break;
		case 'pjdefExpectedDuration':
			L_pjdefExpectedDuration_TEXT='(expected duration: The total span of active working time expected for a task, that is, the amount of time from the expected start to the expected finish of a task.)';
			sTemp=L_pjdefExpectedDuration_TEXT;
			break;
		case 'pjdefExporting':
			L_pjdefExporting_TEXT='(exporting: Transferring data from Project to another program, such as Excel. When you export data, you choose or create a map that specifies the relationship between the fields in Project and the columns in the ouptut file.)';
			sTemp=L_pjdefExporting_TEXT;
			break;
		case 'pjdefExportMap':
			L_pjdefExportMap_TEXT='(export/import map: A set of instructions that maps out for Project exactly what types of data you want to export or import, in what order, and their field names in the destination format. Project comes with default export/import maps.)';
			sTemp=L_pjdefExportMap_TEXT;
			break;
		case 'pjdefExternalDependency':
			L_pjdefExternalDependency_TEXT='(external dependency: A relationship in which the start or finish date of a task depends on a task in another project.)';
			sTemp=L_pjdefExternalDependency_TEXT;
			break;
		case 'pjdefExternalPredecessors':
			L_pjdefExternalPredecessors_TEXT='(external predecessors: A predecessor to a task in the current project that resides in another project, represented by a task that appears dimmed in the task list.)';
			sTemp=L_pjdefExternalPredecessors_TEXT;
			break;
		case 'pjdefExternalSuccessors':
			L_pjdefExternalSuccessors_TEXT='(external successors: A successor to a task in the current project that resides in another project, represented by a task that appears dimmed in the task list.)';
			sTemp=L_pjdefExternalSuccessors_TEXT;
			break;
		case 'pjdefExternalTask':
			L_pjdefExternalTask_TEXT='(external task: A task that represents a linked task in another project, providing an easy way to review the attributes of linked tasks without switching between projects. An external task can be changed only in the source project.)';
			sTemp=L_pjdefExternalTask_TEXT;
			break;
		case 'pjdefField':
			L_pjdefField_TEXT='(field: A location in a sheet, form, or chart that contains a specific kind of information about a task, resource, or assignment. For example, in a sheet, each column is a field. In a form, a field is a named box or a place in a column.)';
			sTemp=L_pjdefField_TEXT;
			break;
		case 'pjdefFileFormat':
			L_pjdefFileFormat_TEXT='(file format: The particular way in which information is stored in a file. Different programs use different file formats and file name extensions to indicate the format.)';
			sTemp=L_pjdefFileFormat_TEXT;
			break;
		case 'pjdefFilename':
			L_pjdefFilename_TEXT='(file name: The name of a file. Valid names can contain up to 255 characters, can have any combination of letters or numbers, and can be followed by an extension [a period and one to three characters]. See Windows Help for other allowed characters.)';
			sTemp=L_pjdefFilename_TEXT;
			break;
		case 'pjdefFillHandle':
			L_pjdefFillHandle_TEXT='(fill handle: The small square in the corner of the selection in a sheet. When you point to the fill handle, the pointer changes to a black cross. To copy contents to adjacent fields or to repeat selected information, drag the fill handle.)';
			sTemp=L_pjdefFillHandle_TEXT;
			break;
		case 'pjdefFilter':
			L_pjdefFilter_TEXT='(filter: Specifies which task or resource information should be displayed or highlighted in a view. For example, when you apply the Critical filter, only critical tasks are displayed.)';
			sTemp=L_pjdefFilter_TEXT;
			break;
		case 'pjdefFinishDate':
			L_pjdefFinishDate_TEXT='(finish date: The date that a task is scheduled to be completed. This date is based on the task\'s start date, duration, calendars, predecessor dates, task dependencies, and constraints.)';
			sTemp=L_pjdefFinishDate_TEXT;
			break;
		case 'pjdeffirewall':
			L_pjdeffirewall_TEXT='(firewall: A combination of hardware and software that provides a security system, usually to prevent unauthorized access from outside to an internal network or intranet.)';
			sTemp=L_pjdeffirewall_TEXT;
			break;
		case 'pjdefFixedConsumptionRate':
			L_pjdefFixedConsumptionRate_TEXT='(fixed material consumption: Absolute quantity of a material resource to be used to complete an assignment. A fixed consumption rate indicates that the amount of material used will be constant, regardless of changes to task duration or assignment length.)';
			sTemp=L_pjdefFixedConsumptionRate_TEXT;
			break;
		case 'pjdefFixedCost':
			L_pjdefFixedCost_TEXT='(fixed cost: A set cost for a task that remains constant regardless of the task duration or the work performed by a resource.)';
			sTemp=L_pjdefFixedCost_TEXT;
			break;
		case 'pjdefFixedDate':
			L_pjdefFixedDate_TEXT='(fixed date: A date to which a task is tied either because the date was entered in the Actual Start or Actual Finish field or because the task is constrained by an inflexible constraint.)';
			sTemp=L_pjdefFixedDate_TEXT;
			break;
		case 'pjdefFixeddurationResource':
			L_pjdefFixeddurationResource_TEXT='(fixed-unit task: A task in which the assigned units [or resources] is a fixed value and any changes to the amount of work or the task\'s duration do not affect the task\'s units. This is calculated as follows: Duration x Units = Work.)';
			sTemp=L_pjdefFixeddurationResource_TEXT;
			break;
		case 'pjdefFixedDurationScheduling':
			L_pjdefFixedDurationScheduling_TEXT='(fixed-duration scheduling: A scheduling method in which the duration for a task remains the same regardless of the number of resources assigned to the task.)';
			sTemp=L_pjdefFixedDurationScheduling_TEXT;
			break;
		case 'pjdefFixeddurationTask':
			L_pjdefFixeddurationTask_TEXT='(fixed-duration task: A task in which the duration is a fixed value and any changes to the work or the assigned units [that is, resources] don\'t affect the task\'s duration. This is calculated as follows: Duration x Units = Work.)';
			sTemp=L_pjdefFixeddurationTask_TEXT;
			break;
		case 'pjdefFixedworkTask':
			L_pjdefFixedworkTask_TEXT='(fixed-work task: A task in which the amount of work is a fixed value and any changes to the task\'s duration or the number of assigned units [or resources] do not affect the task\'s work. This is calculated as follows: Duration x Units = Work.)';
			sTemp=L_pjdefFixedworkTask_TEXT;
			break;
		case 'pjdeffloating_toolbars':
			L_pjdeffloating_toolbars_TEXT='(floating toolbar: A toolbar that is not attached to the edge of the program window. You can change the shape of some floating toolbars.)';
			sTemp=L_pjdeffloating_toolbars_TEXT;
			break;
		case 'pjdefFooter':
			L_pjdefFooter_TEXT='(footer: Text that appears at the bottom of a printed page. A footer typically contains information such as page number, total page count, and date.)';
			sTemp=L_pjdefFooter_TEXT;
			break;
		case 'pjdefForm':
			L_pjdefForm_TEXT='(form: A type of view that gives you detailed information about an individual task or resource.)';
			sTemp=L_pjdefForm_TEXT;
			break;
		case 'pjdefFreeSlack':
			L_pjdefFreeSlack_TEXT='(free slack: The amount of time that a task can be delayed without delaying its successor tasks. For a task without successors, free slack is the amount of time that the task can be delayed without delaying the finish date of the project.)';
			sTemp=L_pjdefFreeSlack_TEXT;
			break;
		case 'pjdefgantt_bar_type':
			L_pjdefgantt_bar_type_TEXT='(Gantt bar type: A Gantt bar representing a specific kind of information, for example, summary or split tasks or progress on a task. A type is distinguished from other types by its appearance and can include associated text, such as start and finish dates.)';
			sTemp=L_pjdefgantt_bar_type_TEXT;
			break;
		case 'pjdefGanttBar':
			L_pjdefGanttBar_TEXT='(Gantt bar: A graphical element on the chart portion of the Gantt Chart view representing the duration of a task.)';
			sTemp=L_pjdefGanttBar_TEXT;
			break;
		case 'pjdefgeneral_alignment':
			L_pjdefgeneral_alignment_TEXT='(general alignment: A format that normally left aligns text and right aligns numbers. When right-to-left features are active, general alignment is extended to include Text mode [always available] and Interface mode [sometimes available].)';
			sTemp=L_pjdefgeneral_alignment_TEXT;
			break;
		case 'pjdefgeneric_resources':
			L_pjdefgeneric_resources_TEXT='(generic resources: Placeholder resources that are used to specify the skills required for a specific task.)';
			sTemp=L_pjdefgeneric_resources_TEXT;
			break;
		case 'pjdefGhostTask':
			L_pjdefGhostTask_TEXT='(ghost task: Also called an external task. Shown as a dimmed task bar in the chart portion and a dimmed row of task information in the task list of the Gantt Chart view to represent dependency to a task in another project.)';
			sTemp=L_pjdefGhostTask_TEXT;
			break;
		case 'pjdefGIFImageFile':
			L_pjdefGIFImageFile_TEXT='(GIF file: A compressed graphics file format that Web browsers can display as inline graphics. GIF is widely used for transmitting images across the Internet.)';
			sTemp=L_pjdefGIFImageFile_TEXT;
			break;
		case 'pjdefGlobalFile':
			L_pjdefGlobalFile_TEXT='(global file: A Project file [Global.mpt] that contains information you can use for different projects. Information in a global file can include views, calendars, forms, reports, tables, filters, toolbars, menu bars, macros, and options settings.)';
			sTemp=L_pjdefGlobalFile_TEXT;
			break;
		case 'pjdefGrade':
			L_pjdefGrade_TEXT='(grade: A rank or category assigned to a material resource that denotes functional use but not level of quality. A low-grade resource is not necessarily a low-quality resource.)';
			sTemp=L_pjdefGrade_TEXT;
			break;
		case 'pjdefGraph':
			L_pjdefGraph_TEXT='(graph: A view [such as the Resource Graph] that presents schedule information graphically.)';
			sTemp=L_pjdefGraph_TEXT;
			break;
		case 'pjdefGraphicArea':
			L_pjdefGraphicArea_TEXT='(graphics area: An area in Project that can display picture information from another document or program, including static pictures and embedded and linked objects.)';
			sTemp=L_pjdefGraphicArea_TEXT;
			break;
		case 'pjdefGridlines':
			L_pjdefGridlines_TEXT='(gridlines: The horizontal and vertical lines that appear in many Project views. You can change the patterns and colors of gridlines, and you can control the interval at which different patterns and colors occur.)';
			sTemp=L_pjdefGridlines_TEXT;
			break;
		case 'pjdefGrouped':
			L_pjdefGrouped_TEXT='(group: To combine or rearrange tasks or resources in a project according to specific criteria, for example, task duration, priority, resource overallocation, or finish date; do not confuse this with the Group field, which is a resource field.)';
			sTemp=L_pjdefGrouped_TEXT;
			break;
		case 'pjdefHardConstraint':
			L_pjdefHardConstraint_TEXT='(inflexible constraint: A constraint that is inflexible because it ties a task to a date. The inflexible constraints are Must Finish On, Must Start On, Finish No Earlier Than, Finish No Later Than, Start No Earlier Than, and Start No Later Than.)';
			sTemp=L_pjdefHardConstraint_TEXT;
			break;
		case 'pjdefHeader':
			L_pjdefHeader_TEXT='(header: Text that appears at the top of a printed page. A header typically contains information such as the project or company name and the project start and finish dates.)';
			sTemp=L_pjdefHeader_TEXT;
			break;
		case 'pjdefHelpWindow':
			L_pjdefHelpWindow_TEXT='(Help window: The area in which Project Help is displayed. The Help window remains open until you close it.)';
			sTemp=L_pjdefHelpWindow_TEXT;
			break;
		case 'pjdefHighlightingFilter':
			L_pjdefHighlightingFilter_TEXT='(highlighting filter: A filter that displays all tasks or resources and highlights the tasks or resources that match the filter criteria.)';
			sTemp=L_pjdefHighlightingFilter_TEXT;
			break;
		case 'pjdefHTML':
			L_pjdefHTML_TEXT='(HTML: An acronym for Hypertext Markup Language, which is a formatting convention for presenting text and graphics on the World Wide Web.)';
			sTemp=L_pjdefHTML_TEXT;
			break;
		case 'pjdefHyperlink':
			L_pjdefHyperlink_TEXT='(hyperlink: A portion of text, distinguished by a color, that contains a link to another file or a location within a file. When you click the hyperlink, a Web browser will search for and display the document that is associated with the hyperlink.)';
			sTemp=L_pjdefHyperlink_TEXT;
			break;
		case 'pjdefhyperlink_display_name':
			L_pjdefhyperlink_display_name_TEXT='(hyperlink display name: A descriptive phrase, rather than a URL address, that appears in an online document to better describe the hyperlink\'s destination. For example, an appropriate hyperlink display name for http://www.microsoft.com would be Microsoft.)';
			sTemp=L_pjdefhyperlink_display_name_TEXT;
			break;
		case 'pjdefHyperlinkAddress':
			L_pjdefHyperlinkAddress_TEXT='(hyperlink address: The address of a hyperlink\'s destination file, which is either a URL address or a UNC address. When you click the hyperlink, the destination file defined in the hyperlink address will open in your Web browser or program.)';
			sTemp=L_pjdefHyperlinkAddress_TEXT;
			break;
		case 'pjdefHyperlinkRepresentation':
			L_pjdefHyperlinkRepresentation_TEXT='(hyperlink representation: A descriptive phrase that you can type in the Hyperlink field to better describe the hyperlink\'s destination. A hyperlink representation, when clicked, will go to the destination file defined in the Hyperlink Address field.)';
			sTemp=L_pjdefHyperlinkRepresentation_TEXT;
			break;
		case 'pjdefHyperlinkSubAddress':
			L_pjdefHyperlinkSubAddress_TEXT='(hyperlink subaddress: A field located in the Hyperlink table where you can specify an exact location in the destination file. This location can be a Project view and ID number, a Word bookmark, an Excel cell definition, and so on.)';
			sTemp=L_pjdefHyperlinkSubAddress_TEXT;
			break;
		case 'pjdefID_numbers':
			L_pjdefID_numbers_TEXT='(ID number: The number that Project assigns to each task, resource, or assignment as you add them to the project.)';
			sTemp=L_pjdefID_numbers_TEXT;
			break;
		case 'pjdefIME':
			L_pjdefIME_TEXT='(IME: A program that enters Asian text [Traditional Chinese, Simplified Chinese, Japanese, or Korean] into programs by converting keystrokes into complex Asian characters. The IME [input method editor] is treated as an alternate type of keyboard layout.)';
			sTemp=L_pjdefIME_TEXT;
			break;
		case 'pjdefImporting':
			L_pjdefImporting_TEXT='(importing: Transferring data into Project from a source program, such as Excel. When you import data, you choose a map that defines how the data in the source program should be mapped to information in Project.)';
			sTemp=L_pjdefImporting_TEXT;
			break;
		case 'pjdefIndicatorField':
			L_pjdefIndicatorField_TEXT='(indicators field: A field containing a graphical indicator that provides information about the state of an assignment, resource, or task. For example, a check mark indicator shows that a task is completed.)';
			sTemp=L_pjdefIndicatorField_TEXT;
			break;
		case 'pjdefIndicatorFlag':
			L_pjdefIndicatorFlag_TEXT='(indicators: Small icons representing information for a task or resource that are displayed in the Indicators field. The Indicators field is located to the right of the ID field and appears in a number of tables.)';
			sTemp=L_pjdefIndicatorFlag_TEXT;
			break;
		case 'pjdefInsertedProject':
			L_pjdefInsertedProject_TEXT='(inserted project: A project file consolidated into another project file [the master project]. Also called a subproject. The inserted project appears as a summary task in the master project.)';
			sTemp=L_pjdefInsertedProject_TEXT;
			break;
		case 'pjdefIntegerField':
			L_pjdefIntegerField_TEXT='(integer field: A type of field whose content is a whole number. Examples include the ID and Unique ID fields.)';
			sTemp=L_pjdefIntegerField_TEXT;
			break;
		case 'pjdefIntegerListField':
			L_pjdefIntegerListField_TEXT='(integer list field: A type of field whose content is a list of whole numbers separated by the list separator character, typically a comma. Examples include the Predecessors and Successors fields.)';
			sTemp=L_pjdefIntegerListField_TEXT;
			break;
		case 'pjdefInteractiveFilter':
			L_pjdefInteractiveFilter_TEXT='(interactive filter: A filter that displays a dialog box for entering filter criteria each time that you apply the filter. For example, the Using Resource filter displays a dialog box in which you enter a resource name.)';
			sTemp=L_pjdefInteractiveFilter_TEXT;
			break;
		case 'pjdefInterimPlan':
			L_pjdefInterimPlan_TEXT='(interim plan: A set of task start and finish dates that you can save at certain stages of your project. You can compare an interim plan with the baseline plan or current plan to monitor project progress or slippage. You can save up to 10 interim plans.)';
			sTemp=L_pjdefInterimPlan_TEXT;
			break;
		case 'pjdefInternet':
			L_pjdefInternet_TEXT='(Internet: A worldwide network of thousands of smaller computer networks and millions of commercial, educational, government, and personal computers. Also known as the World Wide Web [WWW].)';
			sTemp=L_pjdefInternet_TEXT;
			break;
		case 'pjdefInternetServiceProvider':
			L_pjdefInternetServiceProvider_TEXT='(ISP: A company that provides other companies, organizations, or individuals with access to, or presence on, the Internet.)';
			sTemp=L_pjdefInternetServiceProvider_TEXT;
			break;
		case 'pjdefIntranet':
			L_pjdefIntranet_TEXT='(intranet: Any network that provides similar services within an organization to those provided by the Internet. An organization\'s intranet may or may not be connected to the Internet; its information might be distributed only within the company.)';
			sTemp=L_pjdefIntranet_TEXT;
			break;
		case 'pjdefItem':
			L_pjdefItem_TEXT='(item: The basic element that holds information in Outlook [similar to a file in other programs]. Items include e-mail messages, appointments, contacts, tasks, journal entries, and notes.)';
			sTemp=L_pjdefItem_TEXT;
			break;
		case 'pjdefKashidas':
			L_pjdefKashidas_TEXT='(Kashidas: Special characters that are used to extend the joiner between two Arabic characters. Used to improve the appearance of justified text by visually lengthening words rather than increasing the spacing between words.)';
			sTemp=L_pjdefKashidas_TEXT;
			break;
		case 'pjdefkeyword':
			L_pjdefkeyword_TEXT='(keyword: A word or phrase that identifies important information in a project file. You can use keywords to index files that you created in Project.)';
			sTemp=L_pjdefkeyword_TEXT;
			break;
		case 'pjdefLagTime':
			L_pjdefLagTime_TEXT='(lag time: A delay between tasks that have a dependency. For example, if you need a two-day delay between the finish of one task and the start of another, you can establish a finish-to-start dependency and specify a two-day lag time [has a positive value].)';
			sTemp=L_pjdefLagTime_TEXT;
			break;
		case 'pjdefLateFinDate':
			L_pjdefLateFinDate_TEXT='(late finish date: The latest date that a task can finish without delaying the finish of the project. It is based on the task\'s late start date, as well as the late start and late finish dates of predecessor and successor tasks, and other constraints.)';
			sTemp=L_pjdefLateFinDate_TEXT;
			break;
		case 'pjdefLeadTime':
			L_pjdefLeadTime_TEXT='(lead time: An overlap between tasks that have a dependency. For example, if a task can start when its predecessor is half-finished, you can specify a finish-to-start dependency with a lead time of 50 percent for its successor [has a negative lag value].)';
			sTemp=L_pjdefLeadTime_TEXT;
			break;
		case 'pjdefleft-to-right':
			L_pjdeflefttoright_TEXT='(left-to-right: Keyboard settings, document views, user interface objects, and the direction in which text is displayed. English and most European languages are left-to-right languages.)';
			sTemp=L_pjdeflefttoright_TEXT;
			break;
		case 'pjdefLegend':
			L_pjdefLegend_TEXT='(legend: The explanatory list of symbols printed on a chart or graph.)';
			sTemp=L_pjdefLegend_TEXT;
			break;
		case 'pjdefLessonsLearned':
			L_pjdefLessonsLearned_TEXT='(lessons learned: A review of best practices, project insights, and client information. As the project team disbands and new projects begin, reviewing the lessons learned lets you record information gathered and generated through the project.)';
			sTemp=L_pjdefLessonsLearned_TEXT;
			break;
		case 'pjdefLeveling':
			L_pjdefLeveling_TEXT='(leveling: Resolving resource conflicts or overallocations by delaying or splitting certain tasks. When Project levels a resource, its selected assignments are distributed and rescheduled.)';
			sTemp=L_pjdefLeveling_TEXT;
			break;
		case 'pjdefLevelingDelay':
			L_pjdefLevelingDelay_TEXT='(leveling delay: The amount of time that an assignment or task is to be delayed from the original scheduled start date as a result of resource leveling or of manually entering a leveling delay.)';
			sTemp=L_pjdefLevelingDelay_TEXT;
			break;
		case 'pjdefLinkedProject':
			L_pjdefLinkedProject_TEXT='(linked project: A project that contains task dependencies to and from tasks in other project files. A link to a task in another project is represented with a placeholder or ghost task.)';
			sTemp=L_pjdefLinkedProject_TEXT;
			break;
		case 'pjdefLinking':
			L_pjdefLinking_TEXT='(linking: In a project, establishing a dependency between tasks. Linking tasks defines a dependency between their start and finish dates. In OLE, establishing a connection between programs so that data in one document is updated when it changes in another.)';
			sTemp=L_pjdefLinking_TEXT;
			break;
		case 'pjdefLinkLine':
			L_pjdefLinkLine_TEXT='(link line: On the Gantt Chart and Network Diagram, the line that appears between two tasks to indicate a task dependency.)';
			sTemp=L_pjdefLinkLine_TEXT;
			break;
		case 'pjdefLinkType':
			L_pjdefLinkType_TEXT='(link type: The type of task dependency. The four dependency types are Finish-to-start [FS], Finish-to-finish [FF], Start-to-start [SS], and Start-to-finish [SF].)';
			sTemp=L_pjdefLinkType_TEXT;
			break;
		case 'pjdefListSeparatorCharacter':
			L_pjdefListSeparatorCharacter_TEXT='(list-separator character: A character, usually a comma or semicolon, that separates elements in a list.)';
			sTemp=L_pjdefListSeparatorCharacter_TEXT;
			break;
		case 'pjdefLogical':
			L_pjdefLogical_TEXT='(logical: Used to describe insertion point movement and text selection when working with bidirectional text. Movement progresses within bidirectional text according to the direction of the language encountered.)';
			sTemp=L_pjdefLogical_TEXT;
			break;
		case 'pjdefMacro':
			L_pjdefMacro_TEXT='(macro: An action or a set of actions that you can use to automate tasks. Macros are recorded in the Visual Basic for Applications programming language.)';
			sTemp=L_pjdefMacro_TEXT;
			break;
		case 'pjdefmacro_project':
			L_pjdefmacro_project_TEXT='(macro project: A collection of components, including forms, code, and class modules, that make up a macro. Macro projects created in Visual Basic for Applications can be included in add-ins and in Project.)';
			sTemp=L_pjdefmacro_project_TEXT;
			break;
		case 'pjdefMap':
			L_pjdefMap_TEXT='(map: A format that\'s used to transfer information between programs when importing or exporting data. A map helps ensure that information is placed into the proper fields in the destination file.)';
			sTemp=L_pjdefMap_TEXT;
			break;
		case 'pjdefMAPI':
			L_pjdefMAPI_TEXT='(MAPI: The acronym for Messaging Application Programming Interface, which is the standard programming interface proposed and supported by Microsoft for accessing electronic messaging.)';
			sTemp=L_pjdefMAPI_TEXT;
			break;
		case 'pjdefMasterProject':
			L_pjdefMasterProject_TEXT='(master project: A project containing other projects [known as inserted projects or subprojects]. Also called a consolidated project.)';
			sTemp=L_pjdefMasterProject_TEXT;
			break;
		case 'pjdefmaterial_label':
			L_pjdefmaterial_label_TEXT='(material label: The unit of measure for a material resource, such as tons, cubic yards, or board feet.)';
			sTemp=L_pjdefmaterial_label_TEXT;
			break;
		case 'pjdefmaterial_resources':
			L_pjdefmaterial_resources_TEXT='(material resources: Consumable materials or supplies, such as concrete, wood, or nails.)';
			sTemp=L_pjdefmaterial_resources_TEXT;
			break;
		case 'pjdefMaterialresource':
			L_pjdefMaterialresource_TEXT='(material resource: The supplies or other consumable items that are used to complete tasks in a project.)';
			sTemp=L_pjdefMaterialresource_TEXT;
			break;
		case 'pjdefMaxUnits':
			L_pjdefMaxUnits_TEXT='(maximum units: The maximum percentage or number of units that a resource is available to be scheduled for any tasks. The maximum units value indicates the highest capacity at which the resource is available for work; the default value is 100 percent.)';
			sTemp=L_pjdefMaxUnits_TEXT;
			break;
		case 'pjdefmenu':
			L_pjdefmenu_TEXT='(menu: A list of commands that is displayed when you click a menu name on a menu bar or other toolbar.)';
			sTemp=L_pjdefmenu_TEXT;
			break;
		case 'pjdefmenu_bar':
			L_pjdefmenu_bar_TEXT='(menu bar: The horizontal bar below the title bar that contains the names of menus. A menu bar can be the built-in menu bar or a custom menu bar.)';
			sTemp=L_pjdefmenu_bar_TEXT;
			break;
		case 'pjdefMessageRule':
			L_pjdefMessageRule_TEXT='(message rule: A set of criteria for updating a project file with the information in Project Server workgroup messages. For example, project managers can specify that updates from all workgroup members be automatically accepted.)';
			sTemp=L_pjdefMessageRule_TEXT;
			break;
		case 'pjdefMethod':
			L_pjdefMethod_TEXT='(method: An action that an object can perform on itself. For the list of methods that apply to a particular object in Project, search the Visual Basic Help topics for the name of the object, and then choose <b>Methods<b>.)';
			sTemp=L_pjdefMethod_TEXT;
			break;
		case 'pjdefMicrosoft_Active_Accessibility_MSAA':
			L_pjdefMicrosoft_Active_Accessibility_MSAA_TEXT='(MSAA: A technology that improves the way programs and the operating system work with accessibility aids, such as screen readers.)';
			sTemp=L_pjdefMicrosoft_Active_Accessibility_MSAA_TEXT;
			break;
		case 'pjdefMicrosoft_Project_Server':
			L_pjdefMicrosoft_Project_Server_TEXT='(Project Server: A Project companion product that enables collaborative planning and status reporting among workgroup members, project managers, and other stakeholders by working with and exchanging project information on a Web site.)';
			sTemp=L_pjdefMicrosoft_Project_Server_TEXT;
			break;
		case 'pjdefMicrosoft_Project_Web_Access':
			L_pjdefMicrosoft_Project_Web_Access_TEXT='(Project Web Access: The Web-based user interface that is used to access information in Project Server.)';
			sTemp=L_pjdefMicrosoft_Project_Web_Access_TEXT;
			break;
		case 'pjdefMilestone':
			L_pjdefMilestone_TEXT='(milestone: A reference point marking a major event in a project and used to monitor the project\'s progress. Any task with zero duration is automatically displayed as a milestone; you can also mark any other task of any duration as a milestone.)';
			sTemp=L_pjdefMilestone_TEXT;
			break;
		case 'pjdefModule':
			L_pjdefModule_TEXT='(module: The location in which macros are stored. Macros stored in modules in the Global.mpt file are available from any project and can be used to organize related modules.)';
			sTemp=L_pjdefModule_TEXT;
			break;
		case 'pjdefMPD':
			L_pjdefMPD_TEXT='(MPD file format: The Microsoft Project Database [MPD] file format is a record-based Access-compliant file format that you can use for saving an entire project. Files saved in this format have an .mpd extension.)';
			sTemp=L_pjdefMPD_TEXT;
			break;
		case 'pjdefMPW':
			L_pjdefMPW_TEXT='(Project Workspace file format: The file format associated with workspace files and characterized by the .mpw extension.)';
			sTemp=L_pjdefMPW_TEXT;
			break;
		case 'pjdefMPX':
			L_pjdefMPX_TEXT='(MPX file format: The Microsoft Project Exchange [MPX] file format is a record-based ASCII text format that is used to import data into Project.)';
			sTemp=L_pjdefMPX_TEXT;
			break;
		case 'pjdefMSProjectDatabase':
			L_pjdefMSProjectDatabase_TEXT='(Microsoft Project database: A file format [.mpd] that is used for storing all project information in a central location that is used for cross-project analysis and reporting, as well as for security purposes. Replaces the old MPX file format.)';
			sTemp=L_pjdefMSProjectDatabase_TEXT;
			break;
		case 'pjdefMSWindowsUserAccount':
			L_pjdefMSWindowsUserAccount_TEXT='(Windows user account: All the information that defines a user to the operating system, including the user name and any required password, membership in groups, and the rights and permissions that are associated with the user.)';
			sTemp=L_pjdefMSWindowsUserAccount_TEXT;
			break;
		case 'pjdefMultipleCriticalPaths':
			L_pjdefMultipleCriticalPaths_TEXT='(multiple critical paths: A series of tasks that must be completed on schedule for a project to finish on schedule. Identify and track multiple critical paths to be more effective in managing conditions that could affect your project\'s finish date.)';
			sTemp=L_pjdefMultipleCriticalPaths_TEXT;
			break;
		case 'pjdefMultipleProjects':
			L_pjdefMultipleProjects_TEXT='(multiple projects: Several project plans that may or may not be linked or consolidated. If you are working on several projects at one time, you can compare information about critical paths, resource sharing, or priorities among all of the projects.)';
			sTemp=L_pjdefMultipleProjects_TEXT;
			break;
		case 'pjdefnetwork_place':
			L_pjdefnetwork_place_TEXT='(Network Place: A folder on a network file server, Web server, or Exchange 2000 server. You can create a shortcut to a Network Place to work with files there. Some Network Places, such as document libraries, have features not available with local folders.)';
			sTemp=L_pjdefnetwork_place_TEXT;
			break;
		case 'pjdefNetworkChart':
			L_pjdefNetworkChart_TEXT='(Network Diagram: A diagram that shows dependencies between project tasks. Tasks are represented by boxes, or nodes, and task dependencies are represented by lines that connect the boxes. In Project, the Network Diagram view is a network diagram.)';
			sTemp=L_pjdefNetworkChart_TEXT;
			break;
		case 'pjdefNetworkGateway':
			L_pjdefNetworkGateway_TEXT='(network gateway: The mechanism through which two different networks are connected. The network gateway regulates the connections and ensures that they are efficiently used.)';
			sTemp=L_pjdefNetworkGateway_TEXT;
			break;
		case 'pjdefNonadjacentSelection':
			L_pjdefNonadjacentSelection_TEXT='(nonadjacent selection: A selection of fields that are not sequential. For example, in a task sheet you can select tasks 14, 7, and 10. You select nonadjacent fields by holding down CTRL as you select the fields.)';
			sTemp=L_pjdefNonadjacentSelection_TEXT;
			break;
		case 'pjdefNoncriticalTask':
			L_pjdefNoncriticalTask_TEXT='(noncritical task: A task with slack time that can be completed after its end date without delaying the project finish date. Slack is the amount of time that a task can slip before it affects another task\'s dates or the project finish date.)';
			sTemp=L_pjdefNoncriticalTask_TEXT;
			break;
		case 'pjdefNonworkingTime':
			L_pjdefNonworkingTime_TEXT='(nonworking time: Hours or days designated in a resource or project calendar when Project should not schedule tasks because work is not done. Nonworking time can include lunch breaks, weekends, and holidays, for example.)';
			sTemp=L_pjdefNonworkingTime_TEXT;
			break;
		case 'pjdefNotes':
			L_pjdefNotes_TEXT='(note: Explanatory text that you can attach to a task, resource, or assignment.)';
			sTemp=L_pjdefNotes_TEXT;
			break;
		case 'pjdefNull':
			L_pjdefNull_TEXT='(Null: In Visual Basic for Applications, a value indicating that a variable contains no valid data. Null is the result of either an explicit assignment of Null to a variable, or any operation between expressions that contain Null.)';
			sTemp=L_pjdefNull_TEXT;
			break;
		case 'pjdefNullField':
			L_pjdefNullField_TEXT='(Null field: A field that displays no actual information but that sets up the field for information elsewhere in the view, particularly in the Task Usage or Resource Usage view.)';
			sTemp=L_pjdefNullField_TEXT;
			break;
		case 'pjdefNumberField':
			L_pjdefNumberField_TEXT='(number field: A type of field whose content is a number. The maximum value allowed in this field is 999,999,999,999.99.)';
			sTemp=L_pjdefNumberField_TEXT;
			break;
		case 'pjdefObject':
			L_pjdefObject_TEXT='(object: In OLE, shared information, such as a chart, among different documents and different programs. The program used to create the object and the object type determines the programs that can be used to edit the object, as well as how it can be edited.)';
			sTemp=L_pjdefObject_TEXT;
			break;
		case 'pjdefObjective':
			L_pjdefObjective_TEXT='(objective: The quantifiable criteria that must be met for the project to be considered successful. Objectives must include, at least, cost, schedule, and quality measures. Unquantified objectives increase the risk that the project won\'t meet them.)';
			sTemp=L_pjdefObjective_TEXT;
			break;
		case 'pjdefObjectsBox':
			L_pjdefObjectsBox_TEXT='(objects box: An area that you can display on forms that holds linked or embedded objects.)';
			sTemp=L_pjdefObjectsBox_TEXT;
			break;
		case 'pjdefODBC':
			L_pjdefODBC_TEXT='(ODBC: A vendor-neutral interface, based on the SQL Access Group specifications announced by Microsoft. A developer can use ODBC to gain access to data in a heterogeneous environment of relational and nonrelational databases.)';
			sTemp=L_pjdefODBC_TEXT;
			break;
		case 'pjdefOfficeShortcutBar':
			L_pjdefOfficeShortcutBar_TEXT='(Office Shortcut Bar: If you use Office, you can use the Office Shortcut Bar for single-click access to the resources that you need most often. For more information about the Office Shortcut Bar, see Office Help.)';
			sTemp=L_pjdefOfficeShortcutBar_TEXT;
			break;
		case 'pjdefOLE':
			L_pjdefOLE_TEXT='(OLE: A program-integration technology that you can use to share information between programs. Project and all of the Office programs support OLE, so you can share information through linked and embedded objects.)';
			sTemp=L_pjdefOLE_TEXT;
			break;
		case 'pjdefOLEServer':
			L_pjdefOLEServer_TEXT='(OLE server: The program or document originating an OLE object that is used in another [container] program or document.)';
			sTemp=L_pjdefOLEServer_TEXT;
			break;
		case 'pjdefOperator':
			L_pjdefOperator_TEXT='(operator: A word that specifies a logical relationship between two or more criteria in a filter [AND, OR]. In a formula, an operator is a sign or symbol that specifies the type of calculation to perform within an expression.)';
			sTemp=L_pjdefOperator_TEXT;
			break;
		case 'pjdefOptimisticDuration':
			L_pjdefOptimisticDuration_TEXT='(optimistic duration: The best-case possibility for the total span of active working time expected for a task, that is, the amount of time from the optimistic start to optimistic finish of a task.)';
			sTemp=L_pjdefOptimisticDuration_TEXT;
			break;
		case 'pjdefOrganizer':
			L_pjdefOrganizer_TEXT='(Organizer: The tabbed dialog box in which you can copy custom views, tables, filters, grouping definitions, calendars, reports, forms, toolbars, maps, field attributes, and VBA modules to other documents and to other users.)';
			sTemp=L_pjdefOrganizer_TEXT;
			break;
		case 'pjdefOutline':
			L_pjdefOutline_TEXT='(outline: A hierarchical structure for a project that shows how some tasks fit within broader groupings. In Project, subtasks are indented under summary tasks.)';
			sTemp=L_pjdefOutline_TEXT;
			break;
		case 'pjdefOutlineCode':
			L_pjdefOutlineCode_TEXT='(outline codes: Custom tags you define for tasks or resources that allow you to show a hierarchy of the tasks in your project that is different from WBS codes or outline numbers. You can create up to 10 sets of custom outline codes in your project.)';
			sTemp=L_pjdefOutlineCode_TEXT;
			break;
		case 'pjdefOutlineLevel':
			L_pjdefOutlineLevel_TEXT='(outline level: The number of levels that a task is indented from the top level of the outline. You can indent tasks up to 65,000 levels in Project.)';
			sTemp=L_pjdefOutlineLevel_TEXT;
			break;
		case 'pjdefOutlineNumber':
			L_pjdefOutlineNumber_TEXT='(outline number: Numbers that indicate the exact position of a task in the outline. For example, a task with an outline number of 7.2 indicates that it\'s the second subtask under the seventh top-level summary task.)';
			sTemp=L_pjdefOutlineNumber_TEXT;
			break;
		case 'pjdefOutlookBar':
			L_pjdefOutlookBar_TEXT='(Outlook bar: The column on the left side of the program window that includes groups such as <b>Other</b> or <b>Other Shortcuts</b>, and the shortcuts available within each group. Click a shortcut to gain quick access to folders.)';
			sTemp=L_pjdefOutlookBar_TEXT;
			break;
		case 'pjdefOverallocation':
			L_pjdefOverallocation_TEXT='(overallocation: The result of assigning more tasks to a resource than the resource can accomplish in the working time available.)';
			sTemp=L_pjdefOverallocation_TEXT;
			break;
		case 'pjdefOvertime':
			L_pjdefOvertime_TEXT='(overtime: The amount of work on an assignment that is scheduled beyond the regular working hours of an assigned resource and charged at the overtime rate. Overtime work indicates the amount of the assignment\'s work that is specified as overtime work.)';
			sTemp=L_pjdefOvertime_TEXT;
			break;
		case 'pjdefPan':
			L_pjdefPan_TEXT='(pan: To scroll continuously through a project by using the IntelliMouse pointing device.)';
			sTemp=L_pjdefPan_TEXT;
			break;
		case 'pjdefPane':
			L_pjdefPane_TEXT='(pane: A section of a window that contains a view. A combination view consists of two panes, for example, the Gantt Chart view in the top pane and the Task Form view in the bottom pane.)';
			sTemp=L_pjdefPane_TEXT;
			break;
		case 'pjdefParametricModelingMethod':
			L_pjdefParametricModelingMethod_TEXT='(parametric modeling method: An estimating method that uses project characteristics [parameters] in a mathematical model to predict project costs.)';
			sTemp=L_pjdefParametricModelingMethod_TEXT;
			break;
		case 'pjdefParent':
			L_pjdefParent_TEXT='(parent: The object or collection that most closely contains another object or collection. For example, in Project, the <b>Application</b> object is the parent of the <b>ActiveSelection</b> object.)';
			sTemp=L_pjdefParent_TEXT;
			break;
		case 'pjdefPassword':
			L_pjdefPassword_TEXT='(password: A combination of characters that is used to authorize access to a project. In Project, passwords can have from 1 to 17 characters. Use strong passwords that combine upper- and lowercase letters, numbers, and symbols.)';
			sTemp=L_pjdefPassword_TEXT;
			break;
		case 'pjdefPathName':
			L_pjdefPathName_TEXT='(path: A sequence of all folder names from the root to a file\'s current folder, separated by backslash characters [\\] in Windows.)';
			sTemp=L_pjdefPathName_TEXT;
			break;
		case 'pjdefPathStatement':
			L_pjdefPathStatement_TEXT='(path statement: The location of a file, expressed by drive letter and directory. For example, C:\\Windows\\Favorites is the path statement to where Microsoft Project stores favorite Web sites that you have saved.)';
			sTemp=L_pjdefPathStatement_TEXT;
			break;
		case 'pjdefPeakUnits':
			L_pjdefPeakUnits_TEXT='(peak units: The highest level at which a resource is scheduled for all assigned tasks during a given period of time. Peak units are expressed as a percentage, number of units, or consumption rate.)';
			sTemp=L_pjdefPeakUnits_TEXT;
			break;
		case 'pjdefPercentComplete':
			L_pjdefPercentComplete_TEXT='(percent complete: A field that you use to enter or display how much of a task has been completed. This value is expressed as the percentage of the task duration that has been completed.)';
			sTemp=L_pjdefPercentComplete_TEXT;
			break;
		case 'pjdefPercentField':
			L_pjdefPercentField_TEXT='(percentage field: A type of field whose content is a percentage. Examples include the %Complete and %WorkComplete fields.)';
			sTemp=L_pjdefPercentField_TEXT;
			break;
		case 'pjdefPercentNumberField':
			L_pjdefPercentNumberField_TEXT='(percentage/number field: A type of field whose content is a value that can be expressed as either a percentage or a decimal number. For example, in the Assignment Units field, one full-time assigned resource can be expressed as 100% or as 1.00.)';
			sTemp=L_pjdefPercentNumberField_TEXT;
			break;
		case 'pjdefPercentWorkComplete':
			L_pjdefPercentWorkComplete_TEXT='(percent work complete: A percentage value that indicates the current status of a task, resource, or assignment, expressed as the percentage of work that has been completed.)';
			sTemp=L_pjdefPercentWorkComplete_TEXT;
			break;
		case 'pjdefPERTAnalysis':
			L_pjdefPERTAnalysis_TEXT='(PERT analysis: PERT [Program, Evaluation, and Review Technique] analysis is a process by which you evaluate a probable outcome based on three scenarios: best-case, expected-case, and worst-case.)';
			sTemp=L_pjdefPERTAnalysis_TEXT;
			break;
		case 'pjdefPerUseCost':
			L_pjdefPerUseCost_TEXT='(per-use cost: A set fee for the use of a resource that can be in place of, or in addition to, a variable. For work resources, a per-use cost accrues each time that the resource is used. For material resources, a per-use cost is accrued only once.)';
			sTemp=L_pjdefPerUseCost_TEXT;
			break;
		case 'pjdefPessimisticDuration':
			L_pjdefPessimisticDuration_TEXT='(pessimistic duration: The worst-case possibility for the total span of active working time expected for a task, that is, the amount of time from the pessimistic start to pessimistic finish of a task.)';
			sTemp=L_pjdefPessimisticDuration_TEXT;
			break;
		case 'pjdefPhase':
			L_pjdefPhase_TEXT='(phase: A group of related tasks that completes a major step in a project.)';
			sTemp=L_pjdefPhase_TEXT;
			break;
		case 'pjdefphysical_percent_complete':
			L_pjdefphysical_percent_complete_TEXT='(physical percent complete: An alternative value to Percent [%] Complete or Percent [%] Work Complete that you enter per task. This may be useful when analyzing project performance through such means as variance analysis or earned value analysis.)';
			sTemp=L_pjdefphysical_percent_complete_TEXT;
			break;
		case 'pjdefPivotChart':
			L_pjdefPivotChart_TEXT='(PivotChart: Provides a graphical representation of the data in a PivotTable report, an interactive, crosstabulated report that summarizes and analyzes data. Use the Portfolio Analyzer to select the data that you display in a PivotChart.)';
			sTemp=L_pjdefPivotChart_TEXT;
			break;
		case 'pjdefPivotTable':
			L_pjdefPivotTable_TEXT='(PivotTable: An interactive table that summarizes, or crosstabulates, large amounts of data. You can rotate its rows and columns to see different summaries of the source data, filter the data by displaying different pages, or display details.)';
			sTemp=L_pjdefPivotTable_TEXT;
			break;
		case 'pjdefPixel':
			L_pjdefPixel_TEXT='(pixel: One of many points of light [or picture elements] that makes up a computer image. One pixel is represented by a single square in a bitmap grid.)';
			sTemp=L_pjdefPixel_TEXT;
			break;
		case 'pjdefPlaceholderRes':
			L_pjdefPlaceholderRes_TEXT='(placeholder resource: A temporary resource name that is added to a project plan to help estimate the types and numbers of resources needed. With placeholder resource names, you can develop your project proposal and obtain approvals.)';
			sTemp=L_pjdefPlaceholderRes_TEXT;
			break;
		case 'pjdefPlacesBar':
			L_pjdefPlacesBar_TEXT='(Places bar: The bar on the left side of certain dialog boxes [such as <b>Open</b> or <b>Save As</b>] that contains shortcuts to the History, My Documents, Desktop, Favorites, and Web folders. Click a shortcut to show the contents of the folder.)';
			sTemp=L_pjdefPlacesBar_TEXT;
			break;
		case 'pjdefPlan':
			L_pjdefPlan_TEXT='(plan: A schedule of task start and finish dates and resource and cost data. A baseline plan is the original plan that you save and use to monitor progress. An interim plan is a set of dates you save during the project to compare to other interim plans.)';
			sTemp=L_pjdefPlan_TEXT;
			break;
		case 'pjdefPlannedCosts':
			L_pjdefPlannedCosts_TEXT='(planned costs: The latest cost of tasks, resources, assignments, and the entire project, which Project displays in the Cost field as cost or total cost.)';
			sTemp=L_pjdefPlannedCosts_TEXT;
			break;
		case 'pjdefPoints':
			L_pjdefPoints_TEXT='(point: A unit of measure originating in the typesetting industry. A point is 1/72 of an inch or about 1/28 of a centimeter. The height of fonts is usually expressed in points.)';
			sTemp=L_pjdefPoints_TEXT;
			break;
		case 'pjdefPredecessor':
			L_pjdefPredecessor_TEXT='(predecessor: A task that must start or finish before another task can start or finish.)';
			sTemp=L_pjdefPredecessor_TEXT;
			break;
		case 'pjdefPriority':
			L_pjdefPriority_TEXT='(priority: An indication of a task\'s importance and availability for leveling [that is, resolving resource conflicts or overallocations by delaying or splitting certain tasks]. Tasks with the lowest priority are delayed or split first.)';
			sTemp=L_pjdefPriority_TEXT;
			break;
		case 'pjdefprivileges':
			L_pjdefprivileges_TEXT='(privileges: These specify the items in a project that a user can either see or modify. For example, only someone with administrative privileges can modify outline codes to be used by all project managers within an organization.)';
			sTemp=L_pjdefprivileges_TEXT;
			break;
		case 'pjdefProcure':
			L_pjdefProcure_TEXT='(procure: To obtain the work and material resources required to complete a project.)';
			sTemp=L_pjdefProcure_TEXT;
			break;
		case 'pjdefprofile':
			L_pjdefprofile_TEXT='(profile: A collection of settings used to specify which Project Server your current project should connect to. You specify a profile in the <b>Microsoft Project Server Accounts</b> dialog box when you start Project.)';
			sTemp=L_pjdefprofile_TEXT;
			break;
		case 'pjdefProgressBar':
			L_pjdefProgressBar_TEXT='(progress bar: On the Gantt Chart, a bar that shows how much of a task has been completed. The progress bar is overlaid on all tasks that are in progress or that have been completed.)';
			sTemp=L_pjdefProgressBar_TEXT;
			break;
		case 'pjdefProgressLine':
			L_pjdefProgressLine_TEXT='(progress lines: Visually represent the progress of your project, displayed in the Gantt Chart view. Progress lines connect in-progress tasks, creating a graph on the Gantt Chart indicating work that is behind and peaks indicating work that is ahead.)';
			sTemp=L_pjdefProgressLine_TEXT;
			break;
		case 'pjdefProjectassumptions':
			L_pjdefProjectassumptions_TEXT='(project assumptions: Factors that, for planning purposes, are considered to be true, real, or certain. Assumptions generally involve a degree of risk.)';
			sTemp=L_pjdefProjectassumptions_TEXT;
			break;
		case 'pjdefProjectCalendar':
			L_pjdefProjectCalendar_TEXT='(project calendar: The base calendar used by a project.)';
			sTemp=L_pjdefProjectCalendar_TEXT;
			break;
		case 'pjdefProjectConstraint':
			L_pjdefProjectConstraint_TEXT='(project constraint: A factor that will limit the project management team\'s options. For example, a predefined budget is a constraint that may limit the team\'s scope, staffing, and schedule options.)';
			sTemp=L_pjdefProjectConstraint_TEXT;
			break;
		case 'pjdefProjectSummaryReport':
			L_pjdefProjectSummaryReport_TEXT='(project summary report: A one-page summary of significant project information, including the number of tasks and resources, task and schedule status, costs, start and finish dates, and so on.)';
			sTemp=L_pjdefProjectSummaryReport_TEXT;
			break;
		case 'pjdefProjectSummaryTask':
			L_pjdefProjectSummaryTask_TEXT='(project summary task: A task that summarizes the duration, work, and costs of all tasks in a project. The project summary task appears at the top of the project, its ID number is 0, and it presents the project\'s timeline from start to finish.)';
			sTemp=L_pjdefProjectSummaryTask_TEXT;
			break;
		case 'pjdefProjectTriangle':
			L_pjdefProjectTriangle_TEXT='(project triangle: The interrelationship of time, money, and scope. If you adjust any one of these elements, the other two are affected. For example, if you adjust the project plan to shorten the schedule, you might increase costs and decrease scope.)';
			sTemp=L_pjdefProjectTriangle_TEXT;
			break;
		case 'pjdefPromoting':
			L_pjdefPromoting_TEXT='(outdenting: Moving a task to a higher outline level [to the left] in the Task Name field.)';
			sTemp=L_pjdefPromoting_TEXT;
			break;
		case 'pjdefproperty':
			L_pjdefproperty_TEXT='(property: A named attribute of a control, a field, or an object that you set to define one of the object\'s characteristics [such as size, color, or screen location] or an aspect of its behavior [such as whether the object is hidden].)';
			sTemp=L_pjdefproperty_TEXT;
			break;
		case 'pjdefPublish_Assignments':
			L_pjdefPublish_Assignments_TEXT='(publish assignments: If you use Project Server as your team collaboration solution, you publish assignments to notify your resources of new and changed assignments to tasks.)';
			sTemp=L_pjdefPublish_Assignments_TEXT;
			break;
		case 'pjdefQuality':
			L_pjdefQuality_TEXT='(quality: The degree of excellence, or the desired standards, in a product, process, or project.)';
			sTemp=L_pjdefQuality_TEXT;
			break;
		case 'pjdefrate-based_cost':
			L_pjdefratebased_cost_TEXT='(rate-based cost: Costs that are based on a rate that you enter in the <b>Costs</b> tab of the <b>Resource Information</b> dialog box.)';
			sTemp=L_pjdefratebased_cost_TEXT;
			break;
		case 'pjdefReadOnly':
			L_pjdefReadOnly_TEXT='(read-only: An option you can set so that a file can be read but not changed. You can open and view a read-only project file, but you cannot save changes to it.)';
			sTemp=L_pjdefReadOnly_TEXT;
			break;
		case 'pjdefReadWrite':
			L_pjdefReadWrite_TEXT='(read/write: The typical option set for opening files so that a file can be read and edited, and changes can be saved.)';
			sTemp=L_pjdefReadWrite_TEXT;
			break;
		case 'pjdefRecurringTask':
			L_pjdefRecurringTask_TEXT='(recurring task: A task that occurs repeatedly during the course of a project. For example, you might define the weekly status meeting as a recurring task.)';
			sTemp=L_pjdefRecurringTask_TEXT;
			break;
		case 'pjdefRelativeReference':
			L_pjdefRelativeReference_TEXT='(relative reference: A reference to a column or row that is based on the active cell. The results of a relative reference change every time the location of the active cell changes.)';
			sTemp=L_pjdefRelativeReference_TEXT;
			break;
		case 'pjdefRemainingCost':
			L_pjdefRemainingCost_TEXT='(remaining cost: The estimated cost that is yet to be incurred for a task, resource, or assignment.)';
			sTemp=L_pjdefRemainingCost_TEXT;
			break;
		case 'pjdefRemainingDuration':
			L_pjdefRemainingDuration_TEXT='(remaining duration: The amount of time left to work on a task before the task is completed. This is calculated as follows: Remaining Duration = Duration - Actual Duration.)';
			sTemp=L_pjdefRemainingDuration_TEXT;
			break;
		case 'pjdefRemainingWork':
			L_pjdefRemainingWork_TEXT='(remaining work: The amount of work, in terms of a time unit such as hours or days, that is left to be completed on a task. This is calculated as follows: Remaining Work = Work - Actual Work.)';
			sTemp=L_pjdefRemainingWork_TEXT;
			break;
		case 'pjdefReport':
			L_pjdefReport_TEXT='(report: A format in which you can print schedule information that is appropriate for the intended recipients. You can use the predefined reports provided by Project or create custom reports.)';
			sTemp=L_pjdefReport_TEXT;
			break;
		case 'pjdefReportPeriod':
			L_pjdefReportPeriod_TEXT='(report period: The span of time during which you track and update a task that the workgroup manager has assigned to you. You can change the unit of time to days, weeks, or a single unit of time for the whole task.)';
			sTemp=L_pjdefReportPeriod_TEXT;
			break;
		case 'pjdefReportType':
			L_pjdefReportType_TEXT='(report type: A category of Project reports that all contain similar information. There are five report types: Overview, Current Activities, Costs, Assignments, and Workload.)';
			sTemp=L_pjdefReportType_TEXT;
			break;
		case 'pjdefresource_breakdown_structure':
			L_pjdefresource_breakdown_structure_TEXT='(RBS: The structure that describes an organization\'s hierarchy. The RBS code defines the hierarchical position that a resource holds in the organization.)';
			sTemp=L_pjdefresource_breakdown_structure_TEXT;
			break;
		case 'pjdefResourceAllocation':
			L_pjdefResourceAllocation_TEXT='(resource allocation: The assignment of resources to tasks in a project.)';
			sTemp=L_pjdefResourceAllocation_TEXT;
			break;
		case 'pjdefResourceCalendar':
			L_pjdefResourceCalendar_TEXT='(resource calendar: A calendar that specifies working and nonworking time for an individual resource. A resource calendar differs from a base calendar, which specifies working and nonworking time for more than one resource.)';
			sTemp=L_pjdefResourceCalendar_TEXT;
			break;
		case 'pjdefResourceDrivenScheduling':
			L_pjdefResourceDrivenScheduling_TEXT='(resource-driven scheduling: A scheduling method that bases a task\'s duration on the amount of work that the task requires and the number of resource units assigned to it.)';
			sTemp=L_pjdefResourceDrivenScheduling_TEXT;
			break;
		case 'pjdefResourceGroup':
			L_pjdefResourceGroup_TEXT='(resource group: Resources that share characteristics and are categorized by a group name. For example, you can categorize resources by job function and use a group name such as plumbers. Or, you can categorize resources by employment status.)';
			sTemp=L_pjdefResourceGroup_TEXT;
			break;
		case 'pjdefResourceInfo':
			L_pjdefResourceInfo_TEXT='(resource information: The categories of information shown in the Resource Sheet view that specify details about a resource, such as name, type, group, maximum units, and standard rate. Apply a different table to the view for other resource information.)';
			sTemp=L_pjdefResourceInfo_TEXT;
			break;
		case 'pjdefResourceList':
			L_pjdefResourceList_TEXT='(resource list: The resources that are available for assignments to tasks. The resource list may be stored in a single project file or shared with a resource pool.)';
			sTemp=L_pjdefResourceList_TEXT;
			break;
		case 'pjdefResourcePool':
			L_pjdefResourcePool_TEXT='(resource pool: A set of resources that is available for assignment to project tasks. A resource pool can be used exclusively by one project or can be shared by several projects.)';
			sTemp=L_pjdefResourcePool_TEXT;
			break;
		case 'pjdefResourceReport':
			L_pjdefResourceReport_TEXT='(resource reports: Printed information about a project\'s resources, which usually includes information about costs and the allocation of resources.)';
			sTemp=L_pjdefResourceReport_TEXT;
			break;
		case 'pjdefResources':
			L_pjdefResources_TEXT='(resources: The people, equipment, and material that are used to complete tasks in a project.)';
			sTemp=L_pjdefResources_TEXT;
			break;
		case 'pjdefResourceSharing':
			L_pjdefResourceSharing_TEXT='(resource sharing: Use of the same resources in more than one file. When one project borrows resources from another project, the file that is borrowing the resources is the sharing file, and the file contributing its resources is the resource pool.)';
			sTemp=L_pjdefResourceSharing_TEXT;
			break;
		case 'pjdefResourceType':
			L_pjdefResourceType_TEXT='(resource type: There are two resource types: work resources, such as people and equipment, which perform work to accomplish a task, and material resources, such as supplies, which are never associated with work but are consumed as a task is completed.)';
			sTemp=L_pjdefResourceType_TEXT;
			break;
		case 'pjdefResourceUsage':
			L_pjdefResourceUsage_TEXT='(resource usage: An account of how many hours a resource is scheduled to work within a given time period, and thus an indicator of a resources allocation within that time period.)';
			sTemp=L_pjdefResourceUsage_TEXT;
			break;
		case 'pjdefResourceView':
			L_pjdefResourceView_TEXT='(resource view: A view that displays resource information. Resource views include the Resource Sheet, the Resource Graph, the Resource Usage, and the resource forms views.)';
			sTemp=L_pjdefResourceView_TEXT;
			break;
		case 'pjdefright-to-left':
			L_pjdefrighttoleft_TEXT='(right-to-left: Keyboard settings, document views, user interface objects, and the direction in which text is displayed. Hebrew is a right-to-left language.)';
			sTemp=L_pjdefrighttoleft_TEXT;
			break;
		case 'pjdefRisk':
			L_pjdefRisk_TEXT='(risk: An event or situation that may negatively affect project scope, schedule, budget, or quality.)';
			sTemp=L_pjdefRisk_TEXT;
			break;
		case 'pjdefRiskManagementPlan':
			L_pjdefRiskManagementPlan_TEXT='(risk management plan: A document defining how risk will be managed throughout the project. It can include identified risks, probabilities, contingency plans and methods for implementing them, and a strategy for allocating resources if a risk event occurs.)';
			sTemp=L_pjdefRiskManagementPlan_TEXT;
			break;
		case 'pjdefRiskProbability':
			L_pjdefRiskProbability_TEXT='(risk probability: An estimate of the likelihood that a particular risk event will occur.)';
			sTemp=L_pjdefRiskProbability_TEXT;
			break;
		case 'pjdefRollup':
			L_pjdefRollup_TEXT='(roll up: On the Gantt Chart, to display symbols on a summary task bar that represent subtask dates. You can roll up dates from subtasks to make important dates easily visible on a summary task bar.)';
			sTemp=L_pjdefRollup_TEXT;
			break;
		case 'pjdefRow':
			L_pjdefRow_TEXT='(row: A horizontal series of side-by-side fields displaying a common category of information. A row in Project typically consists of information about a task, resource, assignment, or some such detail as work and cost.)';
			sTemp=L_pjdefRow_TEXT;
			break;
		case 'pjdefRtfField':
			L_pjdefRtfField_TEXT='(RTF field: A type of field whose content can consist of Rich Text Format [formatted] text. For example, a note can be formatted with bulleted lists and bold type.)';
			sTemp=L_pjdefRtfField_TEXT;
			break;
		case 'pjdefScale':
			L_pjdefScale_TEXT='(scale: A method for increasing or decreasing the image on a printed page. Decreasing the scale prints more of a view or report on each page; increasing the scale prints less of a view or report on each page.)';
			sTemp=L_pjdefScale_TEXT;
			break;
		case 'pjdefSchedorcurcost':
			L_pjdefSchedorcurcost_TEXT='(scheduled or current cost: The latest cost of tasks, resources, assignments, and the entire project, which is displayed in the cost field as cost or total cost. It is kept up to date with cost adjustments that you make and with the project\'s progress.)';
			sTemp=L_pjdefSchedorcurcost_TEXT;
			break;
		case 'pjdefSchedule':
			L_pjdefSchedule_TEXT='(schedule: The timing and sequence of tasks within a project. A schedule consists mainly of tasks, task dependencies, durations, constraints, and time-oriented project information.)';
			sTemp=L_pjdefSchedule_TEXT;
			break;
		case 'pjdefScheduled':
			L_pjdefScheduled_TEXT='(scheduled: The most current information about a project, including actual and remaining dates, durations, and costs for tasks that have started and the latest projected dates, durations, and costs for tasks that have not yet started.)';
			sTemp=L_pjdefScheduled_TEXT;
			break;
		case 'pjdefScope':
			L_pjdefScope_TEXT='(scope: The combination of all project goals and tasks, and the work required to accomplish them.)';
			sTemp=L_pjdefScope_TEXT;
			break;
		case 'pjdefScreenTips':
			L_pjdefScreenTips_TEXT='(ScreenTips: Notes that appear on the screen to provide information about toolbar buttons and other screen elements.)';
			sTemp=L_pjdefScreenTips_TEXT;
			break;
		case 'pjdefSCurveGraph':
			L_pjdefSCurveGraph_TEXT='(S-curve graph: A graph that can be plotted with Excel by using cumulative timephased data such as BCWP and cumulative cost from Project to show earned value information. It is plotted when you use the Analyze Timescaled Data Wizard.)';
			sTemp=L_pjdefSCurveGraph_TEXT;
			break;
		case 'pjdefsearch_page':
			L_pjdefsearch_page_TEXT='(search page: A page that you use to find and go to other Internet sites or to files on an intranet. Many search pages provide various ways to search, for example, by topic, by keyword, or by matches to user queries.)';
			sTemp=L_pjdefsearch_page_TEXT;
			break;
		case 'pjdefserver_administrator':
			L_pjdefserver_administrator_TEXT='(server administrator: An individual responsible for setting up fields, views, and reports for an organization and setting up and maintaining the server and server software.)';
			sTemp=L_pjdefserver_administrator_TEXT;
			break;
		case 'pjdefSharedRes':
			L_pjdefSharedRes_TEXT='(shared resource: A resource that is used by more than one project. One resource can be a part of individual resource lists for several different projects, or the resource can be a part of a single shared resource pool.)';
			sTemp=L_pjdefSharedRes_TEXT;
			break;
		case 'pjdefShareName':
			L_pjdefShareName_TEXT='(share name: A partition of disk space that is set aside on a server for a specific purpose. Often, the server space will be divided into a share name to service the needs of a specific group in an organization, and appropriate people will be given access.)';
			sTemp=L_pjdefShareName_TEXT;
			break;
		case 'pjdefSharingFiles':
			L_pjdefSharingFiles_TEXT='(sharer file: A file using resources from another file, which can be another project file or a file containing only resource information, called a resource pool.)';
			sTemp=L_pjdefSharingFiles_TEXT;
			break;
		case 'pjdefSheet':
			L_pjdefSheet_TEXT='(sheet: A spreadsheet-like representation [in rows and columns] of task or resource information. Each row specifies an individual task or resource. Each column [field] specifies a type of information, such as start dates or standard rates.)';
			sTemp=L_pjdefSheet_TEXT;
			break;
		case 'pjdefshortcut_key':
			L_pjdefshortcut_key_TEXT='(shortcut key: A function key or key combination, such as F5 or CTRL+A, that you use to carry out a menu command. In contrast, an access key is a key combination, such as ALT+F, that moves the focus to a menu, command, or control.)';
			sTemp=L_pjdefshortcut_key_TEXT;
			break;
		case 'pjdefShortcutMenu':
			L_pjdefShortcutMenu_TEXT='(shortcut menu: A menu that is accessed by pointing to a part of Project and clicking the right mouse button. Project has several shortcut menus. Use shortcut menus to save time and make it easier to work with project files.)';
			sTemp=L_pjdefShortcutMenu_TEXT;
			break;
		case 'pjdefside_pane':
			L_pjdefside_pane_TEXT='(side pane: A pane displayed on the left side of the Project and Project Web Access interfaces. In Project, the side pane contains Project Guide information; in Project Web Access, the side pane contains links.)';
			sTemp=L_pjdefside_pane_TEXT;
			break;
		case 'pjdefSinglePaneView':
			L_pjdefSinglePaneView_TEXT='(single-pane view: A window in which only one view appears, such as the Task Sheet, Network Diagram view, Resource Graph view, or Calendar view.)';
			sTemp=L_pjdefSinglePaneView_TEXT;
			break;
		case 'pjdefSizingHandle':
			L_pjdefSizingHandle_TEXT='(sizing handle: A square handle that appears at each corner and along the sides of the rectangle that surrounds a selected drawing object. You drag a sizing handle to size an object.)';
			sTemp=L_pjdefSizingHandle_TEXT;
			break;
		case 'pjdefskill_set':
			L_pjdefskill_set_TEXT='(skill set: A particular resource\'s skills.)';
			sTemp=L_pjdefskill_set_TEXT;
			break;
		case 'pjdefskills_codes':
			L_pjdefskills_codes_TEXT='(skill codes: Skill codes are a type of enterprise outline code that allows you to specify the skills that a resource has.)';
			sTemp=L_pjdefskills_codes_TEXT;
			break;
		case 'pjdefSlack':
			L_pjdefSlack_TEXT='(slack: The amount of time that a task can slip before it affects another task or the project\'s finish date. Free slack is how much a task can slip before it delays another task. Total slack is how much a task can slip before it delays the project.)';
			sTemp=L_pjdefSlack_TEXT;
			break;
		case 'pjdefSlippage':
			L_pjdefSlippage_TEXT='(slippage: The amount of time that a task has been delayed from its original baseline plan. The slippage is the difference between the scheduled start or finish date for a task and the baseline start or finish date.)';
			sTemp=L_pjdefSlippage_TEXT;
			break;
		case 'pjdefSlippageBar':
			L_pjdefSlippageBar_TEXT='(slippage bar: A bar on the Detail Gantt view that indicates the degree to which a task has slipped.)';
			sTemp=L_pjdefSlippageBar_TEXT;
			break;
		case 'pjdefSoftConstraint':
			L_pjdefSoftConstraint_TEXT='(flexible constraint: A constraint that is flexible and does not tie a task to a single date. Flexible constraints are As Soon As Possible, As Late As Possible, Finish No Earlier Than, Finish No Later Than, Start No Earlier Than, and Start No Later Than.)';
			sTemp=L_pjdefSoftConstraint_TEXT;
			break;
		case 'pjdefSort':
			L_pjdefSort_TEXT='(sorting: A method of controlling the order in which task, resource, and other information is displayed.)';
			sTemp=L_pjdefSort_TEXT;
			break;
		case 'pjdefSource':
			L_pjdefSource_TEXT='(source: The location where moved, copied, imported, or exported information originated; can be a view, table, document, or other program. In OLE, the document or program that furnishes information to a linked object in a destination, document, or program.)';
			sTemp=L_pjdefSource_TEXT;
			break;
		case 'pjdefSpecialSkills':
			L_pjdefSpecialSkills_TEXT='(special skills: Capabilities, knowledge, and aptitudes that are relatively rare.)';
			sTemp=L_pjdefSpecialSkills_TEXT;
			break;
		case 'pjdefSPI':
			L_pjdefSPI_TEXT='(SPI: The ratio of the budgeted cost of work performed [BCWP] to the budgeted cost of work scheduled (BCWS), which is often used to estimate the project completion date. This is calculated as follows: SPI = BCWP/BCWS.)';
			sTemp=L_pjdefSPI_TEXT;
			break;
		case 'pjdefSplitTask':
			L_pjdefSplitTask_TEXT='(split task: A task whose schedule is interrupted. For example, a two-day task that does not require contiguous work might be split so that the first day of work is scheduled for Monday, and the second day is scheduled for Thursday.)';
			sTemp=L_pjdefSplitTask_TEXT;
			break;
		case 'pjdefStakeholders':
			L_pjdefStakeholders_TEXT='(stakeholders: Individuals and organizations that are actively involved in the project or whose interests may be affected by the project.)';
			sTemp=L_pjdefStakeholders_TEXT;
			break;
		case 'pjdefStandardRate':
			L_pjdefStandardRate_TEXT='(standard rate: A base rate that you assign to resources [such as people, equipment, or material] and that Project uses to calculate resource cost totals.)';
			sTemp=L_pjdefStandardRate_TEXT;
			break;
		case 'pjdefstart_page':
			L_pjdefstart_page_TEXT='(start page: The first page that appears when you start a Web browser. You can set this to a Web site or to a file on your computer\'s hard disk. A start page can contain hyperlinks to other files on your computer, on a network, or on the Web.)';
			sTemp=L_pjdefstart_page_TEXT;
			break;
		case 'pjdefStartDate':
			L_pjdefStartDate_TEXT='(start date: The date when a task is scheduled to begin. This date is based on the duration, calendars, and constraints of predecessor and successor tasks. A task\'s start date is also based on its own calendars and constraints.)';
			sTemp=L_pjdefStartDate_TEXT;
			break;
		case 'pjdefStaticPicture':
			L_pjdefStaticPicture_TEXT='(static picture: A snapshot of information, often from another document or program, that is not linked to the document or program in which the information was created.)';
			sTemp=L_pjdefStaticPicture_TEXT;
			break;
		case 'pjdefStaticText':
			L_pjdefStaticText_TEXT='(static text: Text in a custom form or dialog box that cannot be edited.)';
			sTemp=L_pjdefStaticText_TEXT;
			break;
		case 'pjdefStatusBar':
			L_pjdefStatusBar_TEXT='(status bar: The area at the bottom of the Project window that displays information about the current activity.)';
			sTemp=L_pjdefStatusBar_TEXT;
			break;
		case 'pjdefStatusDate':
			L_pjdefStatusDate_TEXT='(status date: A date that you set [rather than the current date] for reporting the time, cost, or performance condition of a project.)';
			sTemp=L_pjdefStatusDate_TEXT;
			break;
		case 'pjdefStatusReport':
			L_pjdefStatusReport_TEXT='(status report: A description of the status of a member\'s project work and related work. Status reports are requested, filled out, and reviewed in Project Server and cannot be used to automatically update project information in Project.)';
			sTemp=L_pjdefStatusReport_TEXT;
			break;
		case 'pjdefsubmenu':
			L_pjdefsubmenu_TEXT='(submenu: A menu that appears when you point to a command on a higher-level menu.)';
			sTemp=L_pjdefsubmenu_TEXT;
			break;
		case 'pjdefSubordinateTask':
			L_pjdefSubordinateTask_TEXT='(subtask: A task that is part of a summary task. The subtask information is consolidated into the summary task. You can designate subtasks by using the Project outlining feature.)';
			sTemp=L_pjdefSubordinateTask_TEXT;
			break;
		case 'pjdefSubphase':
			L_pjdefSubphase_TEXT='(subphase: A summary task that is nested within another summary task. With the Project outlining features, you can designate subphases.)';
			sTemp=L_pjdefSubphase_TEXT;
			break;
		case 'pjdefSubproject':
			L_pjdefSubproject_TEXT='(subproject: A project that is inserted into another project. Use subprojects as a way to break complex projects into more manageable parts. Also known as an inserted project.)';
			sTemp=L_pjdefSubproject_TEXT;
			break;
		case 'pjdefSuccessor':
			L_pjdefSuccessor_TEXT='(successor: A task that cannot start or finish until another task starts or finishes.)';
			sTemp=L_pjdefSuccessor_TEXT;
			break;
		case 'pjdefSummaryTask':
			L_pjdefSummaryTask_TEXT='(summary task: A task that is made up of subtasks and summarizes those subtasks. Use outlining to create summary tasks. Project automatically determines summary task information [such as duration and cost] by using information from the subtasks.)';
			sTemp=L_pjdefSummaryTask_TEXT;
			break;
		case 'pjdefSumrecurringtask':
			L_pjdefSumrecurringtask_TEXT='(summary recurring task: The summary task of a group of tasks that occurs regularly. You might define a weekly status meeting as a recurring task, for example.)';
			sTemp=L_pjdefSumrecurringtask_TEXT;
			break;
		case 'pjdefSupplier':
			L_pjdefSupplier_TEXT='(supplier: A contractor, vendor, or other agency that supplies a material, product, or service that is required to complete a project.)';
			sTemp=L_pjdefSupplier_TEXT;
			break;
		case 'pjdefSV':
			L_pjdefSV_TEXT='(SV: The difference between the budgeted cost of work performed [BCWP] and the budgeted cost of work scheduled [BCWS]. This is calculated as follows: SV = Budgeted Cost of Work Performed - Budgeted Cost of Work Scheduled.)';
			sTemp=L_pjdefSV_TEXT;
			break;
		case 'pjdefTabdelimited':
			L_pjdefTabdelimited_TEXT='(tab delimited text format: A record-based ASCII text format in which each field of a task or resource record is separated by a list-separator character, usually a tab stop. Each task or resource record ends with a carriage return/line feed.)';
			sTemp=L_pjdefTabdelimited_TEXT;
			break;
		case 'pjdefTable':
			L_pjdefTable_TEXT='(table: A set of columns that shows specific information about tasks, resources, and assignments in a sheet view.)';
			sTemp=L_pjdefTable_TEXT;
			break;
		case 'pjdefTask':
			L_pjdefTask_TEXT='(task: An activity that has a beginning and an end. Project plans are made up of tasks.)';
			sTemp=L_pjdefTask_TEXT;
			break;
		case 'pjdeftask_pane':
			L_pjdeftask_pane_TEXT='(task pane: A window within Project that provides commonly used commands. Located on the left, it allows you to use these commands while still working in your project plan.)';
			sTemp=L_pjdeftask_pane_TEXT;
			break;
		case 'pjdefTaskCalendar':
			L_pjdefTaskCalendar_TEXT='(task calendar: The base calendar that you can apply to individual tasks to control their scheduling, usually independent of the project calendar or any assigned resources\' calendars. By default, all tasks use the project calendar.)';
			sTemp=L_pjdefTaskCalendar_TEXT;
			break;
		case 'pjdefTaskDelegation':
			L_pjdefTaskDelegation_TEXT='(task delegation: The process of one team member assigning a task to another team member in Project Server. When a task is delegated to another team member, that team member actually does the work on the task.)';
			sTemp=L_pjdefTaskDelegation_TEXT;
			break;
		case 'pjdefTaskDependencies':
			L_pjdefTaskDependencies_TEXT='(task dependencies: A relationship between two linked tasks; linked by a dependency between their finish and start dates. There are four kinds of task dependencies: Finish-to-start[FS], Start-to-start [SS], Finish-to-finish [FF], and Start-to-finish [SF].)';
			sTemp=L_pjdefTaskDependencies_TEXT;
			break;
		case 'pjdefTaskId':
			L_pjdefTaskId_TEXT='(task ID: A number that Project automatically assigns to a task as you add it to the project. The task ID indicates the position of the task with respect to the other tasks.)';
			sTemp=L_pjdefTaskId_TEXT;
			break;
		case 'pjdefTaskInfo':
			L_pjdefTaskInfo_TEXT='(task information: Information provided in Project about a specific task. You can see summarized task information in the <b>Task Information</b> dialog box [on the <b>Project</b> menu in a task view].)';
			sTemp=L_pjdefTaskInfo_TEXT;
			break;
		case 'pjdefTaskList':
			L_pjdefTaskList_TEXT='(task list: The categories of information shown in the sheet portion of the Gantt Chart view that specify details about a task, such as task name, duration, start and finish dates, predecessors, and resource names.)';
			sTemp=L_pjdefTaskList_TEXT;
			break;
		case 'pjdefTaskReport':
			L_pjdefTaskReport_TEXT='(task reports: Printed information about a project\'s tasks or activities. Task reports usually include information about start dates, work completed, and expected durations.)';
			sTemp=L_pjdefTaskReport_TEXT;
			break;
		case 'pjdefTaskType':
			L_pjdefTaskType_TEXT='(task type: A characterization of a task based on which aspect of the task is fixed and which aspects are variable. There are three task types: Fixed Units, Fixed Work, and Fixed Duration. The default task type in Project is Fixed Units.)';
			sTemp=L_pjdefTaskType_TEXT;
			break;
		case 'pjdefTaskView':
			L_pjdefTaskView_TEXT='(task view: A view that displays task information. Task views include three task forms; examples include Calendar, Detail Gantt, Gantt Chart, Milestone Rollup, PA_PERT Entry Sheet, Task Entry, Relationship Diagram, Task Sheet, and Task Usage.)';
			sTemp=L_pjdefTaskView_TEXT;
			break;
		case 'pjdefTCPI':
			L_pjdefTCPI_TEXT='(TCPI: The ratio of the work remaining to be done to funds remaining to be spent, as of the status date [BAC - BCWP]/[BAC - ACWP]. A TCPI value greater than one indicates a need for increased performance; less than one indicates performance can decrease.)';
			sTemp=L_pjdefTCPI_TEXT;
			break;
		case 'pjdefTemplate':
			L_pjdefTemplate_TEXT='(template: A Project file format [*.mpt] that lets you reuse existing schedules as the starting point for creating new schedules. Task and resource information, formatting, macros, and project-specific settings can all become part of a template.)';
			sTemp=L_pjdefTemplate_TEXT;
			break;
		case 'pjdefTextField':
			L_pjdefTextField_TEXT='(text field: A type of field whose content is text. Examples include the Task Name and Email Address fields. This field can contain up to 255 characters.)';
			sTemp=L_pjdefTextField_TEXT;
			break;
		case 'pjdefTextListField':
			L_pjdefTextListField_TEXT='(text list field: A type of field whose content is a list of text items separated by the list separator character, typically a comma. Examples include the Resource Group and Resource Names fields.)';
			sTemp=L_pjdefTextListField_TEXT;
			break;
		case 'pjdefTimephased':
			L_pjdefTimephased_TEXT='(timephased: Task, resource, or assignment information that is distributed over time. You can review timephased information in any available time period in the fields on the right side of the Task Usage and Resource Usage views.)';
			sTemp=L_pjdefTimephased_TEXT;
			break;
		case 'pjdefTimescale':
			L_pjdefTimescale_TEXT='(timescale: The time period indicator at the top of the Gantt views, the Resource Graph view, the Task Usage view, and the Resource Usage view. You can customize it to show up to three tiers that can display various time units: top, middle, and bottom.)';
			sTemp=L_pjdefTimescale_TEXT;
			break;
		case 'pjdefTimesheet':
			L_pjdefTimesheet_TEXT='(timesheet: In Project Web Access, the timesheet is a page where resources can record their progress on tasks and send updates to the project manager.)';
			sTemp=L_pjdefTimesheet_TEXT;
			break;
		case 'pjdefTimeUnit':
			L_pjdefTimeUnit_TEXT='(time unit abbreviation: Represents the unit of measure for the duration of working time or elapsed time. Example of working time abbreviations: hr = hour. Example of elapsed time abbreviations: ewk = elapsed weeks.)';
			sTemp=L_pjdefTimeUnit_TEXT;
			break;
		case 'pjdeftitle_bar':
			L_pjdeftitle_bar_TEXT='(title bar: A horizontal bar at the top of a window, dialog box, or toolbar that shows the name of the document, program, or toolbar.)';
			sTemp=L_pjdeftitle_bar_TEXT;
			break;
		case 'pjdeftoolbar':
			L_pjdeftoolbar_TEXT='(toolbar: A bar with buttons and options used to carry out commands. To display a toolbar, point to <b>Toolbars</b> on the <b>View</b> menu, and then click the toolbar you want. To see more buttons, click <b>Toolbar Options</b> at the end of the toolbar.)';
			sTemp=L_pjdeftoolbar_TEXT;
			break;
		case 'pjdefToolTip':
			L_pjdefToolTip_TEXT='(ToolTip: The word or short phrase that describes the function of a toolbar button or other tool. The ToolTip appears when you pause the pointer over a button or tool.)';
			sTemp=L_pjdefToolTip_TEXT;
			break;
		case 'pjdefTopDownEstimating':
			L_pjdefTopDownEstimating_TEXT='(top-down estimating: An estimating method that uses the actual costs of a previous, similar project as the basis for estimating cost totals of a current project. This method is often used when there is limited information about the project.)';
			sTemp=L_pjdefTopDownEstimating_TEXT;
			break;
		case 'pjdefTotalCost':
			L_pjdefTotalCost_TEXT='(total cost: The calculated cost of a project, task, resource, or assignment over the life of the project.)';
			sTemp=L_pjdefTotalCost_TEXT;
			break;
		case 'pjdefTotalSlack':
			L_pjdefTotalSlack_TEXT='(total slack: The amount of time that the finish date of a task can be delayed without delaying the finish date of the project.)';
			sTemp=L_pjdefTotalSlack_TEXT;
			break;
		case 'pjdefUNC':
			L_pjdefUNC_TEXT='(UNC: Universal Naming Convention addresses, which are used to identify the location of a file that resides on a network server. These addresses start with two backslash characters [\\\\] and supply the server name, share name, and full path to the file.)';
			sTemp=L_pjdefUNC_TEXT;
			break;
		case 'pjdefUnderallocation':
			L_pjdefUnderallocation_TEXT='(underallocation: Assigning a resource to work fewer hours than the resource has available.)';
			sTemp=L_pjdefUnderallocation_TEXT;
			break;
		case 'pjdefunicode':
			L_pjdefunicode_TEXT='(Unicode: A character-encoding standard developed by the Unicode Consortium. By using more than one byte to represent each character, Unicode enables almost all of the written languages in the world to be represented by using a single character set.)';
			sTemp=L_pjdefunicode_TEXT;
			break;
		case 'pjdefUniqueId':
			L_pjdefUniqueId_TEXT='(unique ID: A unique number that Project automatically assigns to a task, resource, or assignment. It will not change as other tasks or resources are added to or removed from the project.)';
			sTemp=L_pjdefUniqueId_TEXT;
			break;
		case 'pjdefUnitAvailability':
			L_pjdefUnitAvailability_TEXT='(unit availability: Amount of time, expressed as a percentage or a decimal number, that a resource can be scheduled for assigned work. It refers to the availability of a resource; for example, a resource may be available 50%, 100%, or 300% of full time.)';
			sTemp=L_pjdefUnitAvailability_TEXT;
			break;
		case 'pjdefUnits':
			L_pjdefUnits_TEXT='(units: The quantity of a resource assigned to a task. The maximum units is the maximum number of units available for the resource. For example, if you have three plumbers, the maximum units is 300 percent or three plumbers working full-time.)';
			sTemp=L_pjdefUnits_TEXT;
			break;
		case 'pjdefURL':
			L_pjdefURL_TEXT='(URL: Uniform Resource Locator, which is a standard for naming and locating an object on the Internet, such as a file or newsgroup. URLs are used extensively on the World Wide Web. They are used in HTML documents to specify the target of a hyperlink.)';
			sTemp=L_pjdefURL_TEXT;
			break;
		case 'pjdefVAC':
			L_pjdefVAC_TEXT='(VAC: The earned value field that shows the difference between the budget at completion [BAC] and the estimate at completion [EAC]. In Project, the EAC is the Total Cost field, and the BAC is the Baseline Cost field.)';
			sTemp=L_pjdefVAC_TEXT;
			break;
		case 'pjdefVariableConsumptionRate':
			L_pjdefVariableConsumptionRate_TEXT='(variable material consumption: The time-based quantity of material resource to be used in an assignment. A variable consumption indicates that the amount of material that is used changes if the task duration or assignment length changes.)';
			sTemp=L_pjdefVariableConsumptionRate_TEXT;
			break;
		case 'pjdefVariableCosts':
			L_pjdefVariableCosts_TEXT='(variable costs: Expenses that can change, depending on how much a resource actually works or how much of a material resource is consumed. Variable cost is typical for resources who bill their time hourly or for material resources.)';
			sTemp=L_pjdefVariableCosts_TEXT;
			break;
		case 'pjdefVariance':
			L_pjdefVariance_TEXT='(variance: The difference between baseline and scheduled task or resource information, they usually occur when you set a baseline plan and begin entering actual information into your schedule. Variances can occur in work, costs, and schedule.)';
			sTemp=L_pjdefVariance_TEXT;
			break;
		case 'pjdefversion':
			L_pjdefversion_TEXT='(version: The default version created when saving a project in Project Server is \"Published.\" Other version names may be defined by your organization. It is next to the project name in the <b>Open from Microsoft Project Server</b> dialog box.)';
			sTemp=L_pjdefversion_TEXT;
			break;
		case 'pjdefView':
			L_pjdefView_TEXT='(view: The combination of one or more views [Gantt Chart, Resource Sheet, and so on] and if applicable, a table and a filter. Use views to work with information in a variety of formats. There are three types of views: Charts or graphs, Sheets, and Forms.)';
			sTemp=L_pjdefView_TEXT;
			break;
		case 'pjdefViewBar':
			L_pjdefViewBar_TEXT='(View Bar: A screen element of Project that appears along the left edge of the Project window. The View Bar provides a convenient means of changing views by just clicking the icons that appear on the View Bar.)';
			sTemp=L_pjdefViewBar_TEXT;
			break;
		case 'pjdefVirus':
			L_pjdefVirus_TEXT='(virus: A computer program or macro that \"infects\" computer files by inserting copies of itself into those files and then executing when the host files are opened. A virus can spread the infection to other files, and can corrupt or delete files.)';
			sTemp=L_pjdefVirus_TEXT;
			break;
		case 'pjdefVisual':
			L_pjdefVisual_TEXT='(visual: Used to describe insertion point movement and text selection when working with bidirectional text. Movement progresses within bidirectional text by moving to the next visually-adjacent character.)';
			sTemp=L_pjdefVisual_TEXT;
			break;
		case 'pjdefVisual_Basic_Editor':
			L_pjdefVisual_Basic_Editor_TEXT='(Visual Basic Editor: A Visual Basic for Applications interface in which you can edit macros that you\'ve recorded and write new macros and programs. To open, on the <b>Tools</b> menu, point to <b>Macros</b>, and then click <b>Visual Basic Editor</b>.)';
			sTemp=L_pjdefVisual_Basic_Editor_TEXT;
			break;
		case 'pjdefVisualBasic':
			L_pjdefVisualBasic_TEXT='(VBA: A complete programming language you can use to automate tasks in Project and many other Microsoft programs.)';
			sTemp=L_pjdefVisualBasic_TEXT;
			break;
		case 'pjdefWebBrowser':
			L_pjdefWebBrowser_TEXT='(Web browser: A computer program that is capable of locating and displaying information on the World Wide Web.)';
			sTemp=L_pjdefWebBrowser_TEXT;
			break;
		case 'pjdefWebInbox':
			L_pjdefWebInbox_TEXT='(WebInbox: A message center in Project where a workgroup manager can view Web-based messages from workgroup members who are using Microsoft Project Central. The manager can update the project schedule based on the responses of workgroup members.)';
			sTemp=L_pjdefWebInbox_TEXT;
			break;
		case 'pjdefWebServer':
			L_pjdefWebServer_TEXT='(Web server: A computer and supporting software that connects a workgroup to Project Server, an intranet, or the World Wide Web.)';
			sTemp=L_pjdefWebServer_TEXT;
			break;
		case 'pjdefWebSite':
			L_pjdefWebSite_TEXT='(Web site: A Web page or collection of pages on an intranet or the World Wide Web that is formatted in HTML and is accessible from a Web browser.)';
			sTemp=L_pjdefWebSite_TEXT;
			break;
		case 'pjdefWeightedDuration':
			L_pjdefWeightedDuration_TEXT='(weighted duration: Weighted average of the expected, pessimistic, and optimistic dates and durations. By default, PERT analysis calculation gives heaviest weight to the expected duration, and lightest weight to the pessimistic and optimistic durations.)';
			sTemp=L_pjdefWeightedDuration_TEXT;
			break;
		case 'pjdefWhatIfScenario':
			L_pjdefWhatIfScenario_TEXT='(what-if scenario: A method that is used to forecast values based on information that you provide.)';
			sTemp=L_pjdefWhatIfScenario_TEXT;
			break;
		case 'pjdefWildcard':
			L_pjdefWildcard_TEXT='(wildcard: A character that is used in searching fields for text. Wildcards include: * [asterisk], used for any set of characters, and ? [question mark], used for any single character. You can use wildcards to search text fields, but not number fields.)';
			sTemp=L_pjdefWildcard_TEXT;
			break;
		case 'pjdefwizard':
			L_pjdefwizard_TEXT='(wizard: A feature that asks questions and then performs a set of actions according to your answers.)';
			sTemp=L_pjdefwizard_TEXT;
			break;
		case 'pjdefWork':
			L_pjdefWork_TEXT='(work: For tasks, the total labor required to complete a task. For assignments, the amount of work to which a resource is assigned. For resources, the total amount of work to which a resource is assigned for all tasks. Work is different from task duration.)';
			sTemp=L_pjdefWork_TEXT;
			break;
		case 'pjdefWorkBreakdownStructure':
			L_pjdefWorkBreakdownStructure_TEXT='(WBS: A hierarchical structure that is used to organize tasks for reporting schedules and tracking costs. With Project, you can represent the work breakdown structure by using task IDs or by assigning your own WBS code to each task.)';
			sTemp=L_pjdefWorkBreakdownStructure_TEXT;
			break;
		case 'pjdefWorkgroup':
			L_pjdefWorkgroup_TEXT='(workgroup: A group that is composed of a manager and members who are working on the same project. The manager assigns tasks to the members, who receive and respond to workgroup messages [through e-mail, an intranet, and the Web] from the manager.)';
			sTemp=L_pjdefWorkgroup_TEXT;
			break;
		case 'pjdefWorkgroupManager':
			L_pjdefWorkgroupManager_TEXT='(workgroup manager: In a workgroup, creates and maintains the project schedule and uses workgroup messages to assign tasks to the workgroup members; also uses the workgroup features to update tasks in the project as members reply.)';
			sTemp=L_pjdefWorkgroupManager_TEXT;
			break;
		case 'pjdefWorkgroupMembers':
			L_pjdefWorkgroupMembers_TEXT='(workgroup members: Receive workgroup messages from the workgroup manager; they can receive and reply to their messages by using either a 32-bit, MAPI-compliant e-mail system or by using their Web browsers to log on to Project Server.)';
			sTemp=L_pjdefWorkgroupMembers_TEXT;
			break;
		case 'pjdefWorkgroupMessages':
			L_pjdefWorkgroupMessages_TEXT='(workgroup messages: Messages that the workgroup manager and workgroup members send through Project Server or e-mail about the tasks of a project.)';
			sTemp=L_pjdefWorkgroupMessages_TEXT;
			break;
		case 'pjdefWorkingDaysReport':
			L_pjdefWorkingDaysReport_TEXT='(Working Days report: A summary of working and nonworking time for a project or set of resources. The report also includes exceptions to the standard times, if any exist.)';
			sTemp=L_pjdefWorkingDaysReport_TEXT;
			break;
		case 'pjdefWorkingTime':
			L_pjdefWorkingTime_TEXT='(working time: Hours designated in a resource or project calendar during which work can occur.)';
			sTemp=L_pjdefWorkingTime_TEXT;
			break;
		case 'pjdefWorkResource':
			L_pjdefWorkResource_TEXT='(work resource: People and equipment resources that perform work to accomplish a task. Work resources consume time [hours or days] to accomplish tasks.)';
			sTemp=L_pjdefWorkResource_TEXT;
			break;
		case 'pjdefWorkspace':
			L_pjdefWorkspace_TEXT='(workspace: Files and settings you can save and reopen by opening a single workspace file. Workspace files have the .mpw extension. When you create a workspace file, Project creates lists of the current settings, open projects, views, and so on.)';
			sTemp=L_pjdefWorkspace_TEXT;
			break;
		case 'pjdefWorldWideWeb':
			L_pjdefWorldWideWeb_TEXT='(WWW: A subset of the Internet that uses a graphical user interface as opposed to a text-based user interface. The pages or Web sites that display are formatted using by HTML. Web browsers make it possible for users to view Web sites.)';
			sTemp=L_pjdefWorldWideWeb_TEXT;
			break;
		case 'pjdefXLS':
			L_pjdefXLS_TEXT='(Excel Worksheet file format: The file format that is used by Excel and characterized by the .xls extension.)';
			sTemp=L_pjdefXLS_TEXT;
			break;
		case 'pjdefXML':
			L_pjdefXML_TEXT='(XML: Extensible Markup Language [XML] is a format for delivering rich, structured data from an application in a standard, consistent way. XML describes the content of a document, whereas HTML tags describe how the document looks.)';
			sTemp=L_pjdefXML_TEXT;
			break;
		case 'pjdefYesNoField':
			L_pjdefYesNoField_TEXT='(Yes/No field: A type of field with content set to either Yes or No; also known as a Boolean field or a True/False field. For example, the Recurring field indicates whether the task is a recurring task.)';
			sTemp=L_pjdefYesNoField_TEXT;
			break;
		case 'pjdefZoom':
			L_pjdefZoom_TEXT='(zoom: A method of increasing or decreasing the information displayed in a view. You can zoom in to view one week of information or zoom out to view the entire project.)';
			sTemp=L_pjdefZoom_TEXT;
			break;
		case 'pjenterpriseproject':
			L_pjenterpriseproject_TEXT='(enterprise project: A project that is stored in Project Server to ensure information integrity. To make changes to an enterprise project, users with access permissions are required to check it in and out from Project Server.)';
			sTemp=L_pjenterpriseproject_TEXT;
			break;
		case 'pjgroup':
			L_pjgroup_TEXT='(group: A collection of individual users who are assigned the same permissions.)';
			sTemp=L_pjgroup_TEXT;
			break;
		case 'pjnonprojecttime':
			L_pjnonprojecttime_TEXT='(nonproject time: Hours or days that are designated in a resource or project calendar when Project should not schedule tasks because work is not done. Nonproject time can include lunch breaks, weekends, and holidays, for example.)';
			sTemp=L_pjnonprojecttime_TEXT;
			break;
		case 'pjorganization':
			L_pjorganization_TEXT='(organization: A collection of projects, users, and data that has a one-to-one relationship with Project Server.)';
			sTemp=L_pjorganization_TEXT;
			break;
		case 'pjpayrate':
			L_pjpayrate_TEXT='(pay rate: Resource cost per hour. Project includes two types of pay rates: standard rates and overtime rates.)';
			sTemp=L_pjpayrate_TEXT;
			break;
		case 'pjportfolio':
			L_pjportfolio_TEXT='(portfolio: A list of projects within an organization that may share common management of scope, budget, or resources.)';
			sTemp=L_pjportfolio_TEXT;
			break;
		case 'pjproposedresource':
			L_pjproposedresource_TEXT='(proposed resource: A resource with a pending resource allocation to a task assignment that has not yet been authorized. This resource assignment does not detract from the availability of the resource to work on other projects.)';
			sTemp=L_pjproposedresource_TEXT;
			break;
		case 'pjsecuritytemplate':
			L_pjsecuritytemplate_TEXT='(security template: A predefined set of permissions.)';
			sTemp=L_pjsecuritytemplate_TEXT;
			break;
		case 'pjsoftbooking':
			L_pjsoftbooking_TEXT='(soft booking: A resource assignment type that can be used for planning purposes. A soft-booked resource is reserved for assignments at the project level, usually before it is known whether assignments or the project will actually proceed or not.)';
			sTemp=L_pjsoftbooking_TEXT;
			break;
		case 'pjtodolist':
			L_pjtodolist_TEXT='(to-do list: A list of tasks that are not associated with a project schedule.)';
			sTemp=L_pjtodolist_TEXT;
			break;
		case 'pjtracking':
			L_pjtracking_TEXT='(tracking: Viewing and updating of the actual progress of tasks so that you can see progress across time, evaluate slippage of tasks, compare scheduled or baseline data to actual data, and check the completion percentage of tasks and your project.)';
			sTemp=L_pjtracking_TEXT;
			break;
		case 'pjviewpwa':
			L_pjviewpwa_TEXT='(view: A list or report of projects or resources within Project Server. Views allow you to display and analyze project, task, and resource data.)';
			sTemp=L_pjviewpwa_TEXT;
			break;

		// Office Imaging Services

		case 'oiaspectratio':
			L_oiaspectratio_TEXT='(aspect ratio: The ratio between picture width and picture height. This ratio can be maintained even when resizing a picture.)';
			sTemp=L_oiaspectratio_TEXT;
			break;
		case 'oibrightness':
			L_oibrightness_TEXT='(brightness: The relative lightness of a color.)';
			sTemp=L_oibrightness_TEXT;
			break;
		case 'oicontrast':
			L_oicontrast_TEXT='(contrast: The difference between the darkest and lightest areas in a picture.)';
			sTemp=L_oicontrast_TEXT;
			break;
		case 'oihighlights':
			L_oihighlights_TEXT='(highlights: The brightest or lightest areas in a picture.)';
			sTemp=L_oihighlights_TEXT;
			break;
		case 'oihue':
			L_oihue_TEXT='(hue: The color attribute that most readily distinguishes one color from other colors. A color\'s hue is also its name.)';
			sTemp=L_oihue_TEXT;
			break;
		case 'oimidtones':
			L_oimidtones_TEXT='(midtones: Tones in a picture that are in the middle of the tonal range, between the lightest and darkest tones.)';
			sTemp=L_oimidtones_TEXT;
			break;
		case 'oisaturation':
			L_oisaturation_TEXT='(saturation: A measure of purity in a color, determined by its movement away from gray. More gray in a color means lower saturation; less gray in a color means higher saturation.)';
			sTemp=L_oisaturation_TEXT;
			break;
		case 'oishadows':
			L_oishadows_TEXT='(shadows: The darkest areas in a picture.)';
			sTemp=L_oishadows_TEXT;
			break;
		case 'oizoom':
			L_oizoom_TEXT='(zoom: To change the display magnification level. When you zoom to a level higher than 100 percent, less of the workspace is visible and the images on it appear larger.)';
			sTemp=L_oizoom_TEXT;
			break;
		default:
			sTemp=L_UNDEFINED_TEXT;
			break;
	}
	return sTemp;
}
