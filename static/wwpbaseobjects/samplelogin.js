gx.evt.autoSkip=!1;gx.define("wwpbaseobjects.samplelogin",!1,function(){var n,t;this.ServerClass="wwpbaseobjects.samplelogin";this.PackageName="com.chekin";this.ServerFullClass="com.chekin.wwpbaseobjects.samplelogin";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e12082_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14082_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,52,54,55,56,57,58,59,61,62];this.GXLastCtrlId=62;this.WWPUTILITIESContainer=gx.uc.getNew(this,63,36,"DVelop_WorkWithPlusUtilities","WWPUTILITIESContainer","Wwputilities","WWPUTILITIES");t=this.WWPUTILITIESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");t.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!0,"bool");t.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");t.setProp("EmpowerTabs","Empowertabs",!1,"bool");t.setProp("EnableUpdateRowSelectionStatus","Enableupdaterowselectionstatus",!1,"bool");t.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");t.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!0,"bool");t.setProp("AllowColumnResizing","Allowcolumnresizing",!1,"bool");t.setProp("AllowColumnReordering","Allowcolumnreordering",!1,"bool");t.setProp("AllowColumnDragging","Allowcolumndragging",!1,"bool");t.setProp("AllowColumnsRestore","Allowcolumnsrestore",!1,"bool");t.setProp("RestoreColumnsIconClass","Restorecolumnsiconclass","fas fa-undo","str");t.setProp("PagBarIncludeGoTo","Pagbarincludegoto",!1,"bool");t.setProp("UpdateButtonText","Updatebuttontext","WWP_ColumnsSelectorButton","str");t.setProp("AddNewOption","Addnewoption","WWP_AddNewOption","str");t.setProp("OnlySelectedValues","Onlyselectedvalues","WWP_OnlySelectedValues","str");t.setProp("MultipleValuesSeparator","Multiplevaluesseparator",", ","str");t.setProp("SelectAll","Selectall","WWP_SelectAll","str");t.setProp("SortASC","Sortasc","WWP_TSSortASC","str");t.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");t.setProp("AllowGroupText","Allowgrouptext","WWP_GroupByOption","str");t.setProp("FixLeftText","Fixlefttext","WWP_TSFixLeft","str");t.setProp("FixRightText","Fixrighttext","WWP_TSFixRight","str");t.setProp("LoadingData","Loadingdata","WWP_TSLoading","str");t.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");t.setProp("RangeFilterFrom","Rangefilterfrom","WWP_TSFrom","str");t.setProp("RangeFilterTo","Rangefilterto","WWP_TSTo","str");t.setProp("RangePickerInviteMessage","Rangepickerinvitemessage","WWP_TSRangePickerInviteMessage","str");t.setProp("NoResultsFound","Noresultsfound","WWP_TSNoResults","str");t.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");t.setProp("SearchMultipleValuesButtonText","Searchmultiplevaluesbuttontext","WWP_FilterSelected","str");t.setProp("ColumnSelectorFixedLeftCategory","Columnselectorfixedleftcategory","WWP_ColumnSelectorFixedLeftCategory","str");t.setProp("ColumnSelectorFixedRightCategory","Columnselectorfixedrightcategory","WWP_ColumnSelectorFixedRightCategory","str");t.setProp("ColumnSelectorNotFixedCategory","Columnselectornotfixedcategory","WWP_ColumnSelectorNotFixedCategory","str");t.setProp("ColumnSelectorNoCategoryText","Columnselectornocategorytext","WWP_ColumnSelectorNoCategoryText","str");t.setProp("ColumnSelectorFixedEmpty","Columnselectorfixedempty","WWP_ColumnSelectorFixedEmpty","str");t.setProp("ColumnSelectorRestoreTooltip","Columnselectorrestoretooltip","WWP_SelectColumns_RestoreDefault","str");t.setProp("PagBarGoToCaption","Pagbargotocaption","WWP_PaginationBarGoToCaption","str");t.setProp("PagBarGoToIconClass","Pagbargotoiconclass","fas fa-redo","str");t.setProp("PagBarGoToTooltip","Pagbargototooltip","WWP_PaginationBarGoToTooltip","str");t.setProp("PagBarEmptyFilteredGridCaption","Pagbaremptyfilteredgridcaption","WWP_PaginationBarEmptyFilteredGridCaption","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLECONTENT",grid:0};n[12]={id:12,fld:"LOGINLEFTCONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"UNNAMEDTABLE3",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"WELCOMETITLE",format:0,grid:0,ctrltype:"textblock"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"LOGINIMAGE",grid:0};n[23]={id:23,fld:"TABLELOGINCONTENT",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLELOGIN",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"LOGOLOGIN",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"UNNAMEDTABLE1",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECUSERNAME",gxz:"ZV7SecUserName",gxold:"OV7SecUserName",gxvar:"AV7SecUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7SecUserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7SecUserName=n)},v2c:function(){gx.fn.setControlValue("vSECUSERNAME",gx.O.AV7SecUserName,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7SecUserName=this.val())},val:function(){return gx.fn.getControlValue("vSECUSERNAME")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECUSERPASSWORD",gxz:"ZV8SecUserPassword",gxold:"OV8SecUserPassword",gxvar:"AV8SecUserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8SecUserPassword=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8SecUserPassword=n)},v2c:function(){gx.fn.setControlValue("vSECUSERPASSWORD",gx.O.AV8SecUserPassword,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8SecUserPassword=this.val())},val:function(){return gx.fn.getControlValue("vSECUSERPASSWORD")},nac:gx.falseFn};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"FORGOTPASSWORD",format:1,grid:0,ctrltype:"textblock"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"BTNENTER",grid:0,evt:"e12082_client",std:"ENTER"};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"UNNAMEDTABLE2",grid:0};n[52]={id:52,fld:"NOACCOUNT",format:0,grid:0,ctrltype:"textblock"};n[54]={id:54,fld:"REGISTERUSER",format:0,grid:0,ctrltype:"textblock"};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"TABLELOGINERROR",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};this.AV7SecUserName="";this.ZV7SecUserName="";this.OV7SecUserName="";this.AV8SecUserPassword="";this.ZV8SecUserPassword="";this.OV8SecUserPassword="";this.AV7SecUserName="";this.AV8SecUserPassword="";this.Events={e12082_client:["ENTER",!0],e14082_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[],[{av:'gx.fn.getCtrlProperty("TABLELOGINERROR","Visible")',ctrl:"TABLELOGINERROR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE","Class")',ctrl:"LAYOUTMAINTABLE",prop:"Class"}]];this.EvtParms.ENTER=[[],[{av:'gx.fn.getCtrlProperty("TABLELOGINERROR","Visible")',ctrl:"TABLELOGINERROR",prop:"Visible"}]];this.EnterCtrl=["BTNENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(this.wwpbaseobjects.samplelogin)})