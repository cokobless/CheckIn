gx.evt.autoSkip=!1;gx.define("trn.tdevices",!1,function(){var n,t;this.ServerClass="trn.tdevices";this.PackageName="com.chekin";this.ServerFullClass="com.chekin.trn.tdevices";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ClientID=gx.fn.getControlValue("vCLIENTID");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Clientid=function(){return this.validCliEvt("Valid_Clientid",0,function(){try{var n=gx.util.balloon.getNew("CLIENTID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12022_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e13022_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14022_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];this.GXLastCtrlId=36;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelCard_GrayTitle","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"char",len:64,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Clientid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTID",gxz:"Z6ClientID",gxold:"O6ClientID",gxvar:"A6ClientID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A6ClientID=n)},v2z:function(n){n!==undefined&&(gx.O.Z6ClientID=n)},v2c:function(){gx.fn.setControlValue("CLIENTID",gx.O.A6ClientID,0)},c2v:function(){this.val()!==undefined&&(gx.O.A6ClientID=this.val())},val:function(){return gx.fn.getControlValue("CLIENTID")},nac:function(){return!(gx.text.compare("",this.AV7ClientID)==0)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"char",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTNAME",gxz:"Z7ClientName",gxold:"O7ClientName",gxvar:"A7ClientName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A7ClientName=n)},v2z:function(n){n!==undefined&&(gx.O.Z7ClientName=n)},v2c:function(){gx.fn.setControlValue("CLIENTNAME",gx.O.A7ClientName,0)},c2v:function(){this.val()!==undefined&&(gx.O.A7ClientName=this.val())},val:function(){return gx.fn.getControlValue("CLIENTNAME")},nac:gx.falseFn};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"BTNTRN_ENTER",grid:0,evt:"e13022_client",std:"ENTER"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"BTNTRN_CANCEL",grid:0,evt:"e14022_client"};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"BTNTRN_DELETE",grid:0,evt:"e15022_client",std:"DELETE"};this.A6ClientID="";this.Z6ClientID="";this.O6ClientID="";this.A7ClientName="";this.Z7ClientName="";this.O7ClientName="";this.AV8WWPContext={UserId:0,UserName:""};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7ClientID="";this.AV10WebSession={};this.A6ClientID="";this.A7ClientName="";this.Gx_mode="";this.Events={e12022_client:["AFTER TRN",!0],e13022_client:["ENTER",!0],e14022_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ClientID",fld:"vCLIENTID",pic:"",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ClientID",fld:"vCLIENTID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV7ClientID",fld:"vCLIENTID",pic:"",hsh:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ClientID",fld:"vCLIENTID",pic:"",hsh:!0}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_CLIENTID=[[],[]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ClientID","vCLIENTID",0,"char",64,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(this.trn.tdevices)})