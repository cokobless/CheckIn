gx.evt.autoSkip=!1;gx.define("checkin",!1,function(){var n,t;this.ServerClass="checkin";this.PackageName="com.chekin";this.ServerFullClass="com.chekin.checkin";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_date=gx.fn.getDateValue("vTODAY");this.Gx_time=gx.fn.getControlValue("vTIME");this.AV12errMessage=gx.fn.getControlValue("vERRMESSAGE");this.AV11ErrCode=gx.fn.getIntegerValue("vERRCODE",".");this.AV8GeoLocationInfo=gx.fn.getControlValue("vGEOLOCATIONINFO");this.AV13LocationRequestOptions=gx.fn.getControlValue("vLOCATIONREQUESTOPTIONS");this.AV13LocationRequestOptions=gx.fn.getControlValue("vLOCATIONREQUESTOPTIONS");this.AV8GeoLocationInfo=gx.fn.getControlValue("vGEOLOCATIONINFO");this.AV12errMessage=gx.fn.getControlValue("vERRMESSAGE")};this.e11071_client=function(){return this.clearMessages(),this.UCGEOContainer.getCurrentPosition(),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e12071_client=function(){return this.clearMessages(),gx.extensions.web.geolocation.requestLocation(),this.addMessage("get ejecutado"),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e17071_client=function(){return this.setEventParameters([["ErrCode","vERRCODE","AV11ErrCode"],["errMessage","vERRMESSAGE","AV12errMessage"]],arguments[2]),this.clearMessages(),this.addMessage("Geolocation Error: "+this.AV12errMessage),this.AV14JSON=this.AV12errMessage,this.refreshOutputs([{av:"AV14JSON",fld:"vJSON",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e18071_client=function(){return this.setEventParameters([["GeneXusCommonGeolocationInfo","vGEOLOCATIONINFO","AV8GeoLocationInfo"]],arguments[2]),this.clearMessages(),this.addMessage("Geolocation success: "+gx.json.serializeSDTJson(this.AV8GeoLocationInfo,"GeneXus\\\\Common\\\\GeolocationInfo")),this.AV14JSON=gx.json.serializeSDTJson(this.AV8GeoLocationInfo,"GeneXus\\\\Common\\\\GeolocationInfo"),this.refreshOutputs([{av:"AV14JSON",fld:"vJSON",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e19072_client=function(){return this.clearMessages(),gx.extensions.web.geolocation.requestLocation(this.AV13LocationRequestOptions),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e14072_client=function(){return this.executeServerEvent("UCGEO.GEOCOORDSERROR",!1,null,!0,!0)};this.e13072_client=function(){return this.executeServerEvent("UCGEO.GEOCOORDSSUCCESS",!1,null,!0,!0)};this.e20072_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e21072_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];this.GXLastCtrlId=30;this.UCGEOContainer=gx.uc.getNew(this,31,17,"GeoLocation","UCGEOContainer","Ucgeo","UCGEO");t=this.UCGEOContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("enableHighAccuracy","Enablehighaccuracy",!0,"bool");t.setProp("timeout","Timeout",1e4,"num");t.setProp("maximumAge","Maximumage",1e3,"num");t.setProp("status","Status","0","str");t.setProp("statusMessage","Statusmessage","","char");t.setProp("Latitude","Latitude","","char");t.setProp("Longitude","Longitude","","char");t.setProp("Altitude","Altitude","","char");t.setProp("Heading","Heading","","char");t.setProp("Speed","Speed","","char");t.setProp("Accuracy","Accuracy","","char");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("GeoCoordsSuccess",this.e13072_client);t.addEventHandler("GeoCoordsError",this.e14072_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,lvl:0,type:"char",len:64,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTID",gxz:"ZV5ClientID",gxold:"OV5ClientID",gxvar:"AV5ClientID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5ClientID=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5ClientID=n)},v2c:function(){gx.fn.setControlValue("vCLIENTID",gx.O.AV5ClientID,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5ClientID=this.val())},val:function(){return gx.fn.getControlValue("vCLIENTID")},nac:gx.falseFn};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTNCHECKIN",grid:0,evt:"e11071_client"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNGETMYLOCATION",grid:0,evt:"e12071_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vJSON",gxz:"ZV14JSON",gxold:"OV14JSON",gxvar:"AV14JSON",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14JSON=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14JSON=n)},v2c:function(){gx.fn.setControlValue("vJSON",gx.O.AV14JSON,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14JSON=this.val())},val:function(){return gx.fn.getControlValue("vJSON")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};this.AV5ClientID="";this.ZV5ClientID="";this.OV5ClientID="";this.AV14JSON="";this.ZV14JSON="";this.OV14JSON="";this.AV5ClientID="";this.AV14JSON="";this.Gx_date=gx.date.nullDate();this.Gx_time="";this.AV12errMessage="";this.AV11ErrCode=0;this.AV8GeoLocationInfo={Location:"",Description:"",Time:gx.date.nullDate(),Precision:0,RestrictedAccuracy:!1,Heading:0,Speed:0};this.AV13LocationRequestOptions={maximumAge:0,timeout:0,enableHighAccuracy:!1};this.Events={e14072_client:["UCGEO.GEOCOORDSERROR",!0],e13072_client:["UCGEO.GEOCOORDSSUCCESS",!0],e20072_client:["ENTER",!0],e21072_client:["CANCEL",!0],e11071_client:["'DOCHECKIN'",!1],e12071_client:["'DOGETMYLOCATION'",!1],e17071_client:["GX.EXTENSIONS.WEB.GEOLOCATION.ONERROR",!1],e18071_client:["GX.EXTENSIONS.WEB.GEOLOCATION.ONLOCATIONCHANGED",!1],e19072_client:["'GETLOCATIONWITHOPTIONS'",!1]};this.EvtParms.REFRESH=[[{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"Gx_time",fld:"vTIME",pic:"",hsh:!0},{av:"AV13LocationRequestOptions",fld:"vLOCATIONREQUESTOPTIONS",pic:"",hsh:!0},{av:"AV5ClientID",fld:"vCLIENTID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV5ClientID",fld:"vCLIENTID",pic:"",hsh:!0}]];this.EvtParms["'DOCHECKIN'"]=[[],[]];this.EvtParms["'DOGETMYLOCATION'"]=[[],[]];this.EvtParms["UCGEO.GEOCOORDSERROR"]=[[],[]];this.EvtParms["UCGEO.GEOCOORDSSUCCESS"]=[[{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"Gx_time",fld:"vTIME",pic:"",hsh:!0},{av:"AV5ClientID",fld:"vCLIENTID",pic:"",hsh:!0}],[]];this.EvtParms["GX.EXTENSIONS.WEB.GEOLOCATION.ONERROR"]=[[{av:"AV12errMessage",fld:"vERRMESSAGE",pic:""},{av:"AV11ErrCode",fld:"vERRCODE",pic:"ZZZ9"}],[{av:"AV14JSON",fld:"vJSON",pic:""}]];this.addExoEventHandler("extensions.web.geolocation.onError",this.e17071_client);this.EvtParms["GX.EXTENSIONS.WEB.GEOLOCATION.ONLOCATIONCHANGED"]=[[{av:"AV8GeoLocationInfo",fld:"vGEOLOCATIONINFO",pic:""}],[{av:"AV14JSON",fld:"vJSON",pic:""}]];this.addExoEventHandler("extensions.web.geolocation.onLocationChanged",this.e18071_client);this.EvtParms["'GETLOCATIONWITHOPTIONS'"]=[[{av:"AV13LocationRequestOptions",fld:"vLOCATIONREQUESTOPTIONS",pic:"",hsh:!0}],[]];this.setVCMap("Gx_date","vTODAY",0,"date",8,0);this.setVCMap("Gx_time","vTIME",0,"char",8,0);this.setVCMap("AV12errMessage","vERRMESSAGE",0,"char",200,0);this.setVCMap("AV11ErrCode","vERRCODE",0,"int",4,0);this.setVCMap("AV8GeoLocationInfo","vGEOLOCATIONINFO",0,"GeneXusCommonGeolocationInfo",0,0);this.setVCMap("AV13LocationRequestOptions","vLOCATIONREQUESTOPTIONS",0,"ExtensionsWebLocationRequestOptions",0,0);this.setVCMap("AV13LocationRequestOptions","vLOCATIONREQUESTOPTIONS",0,"ExtensionsWebLocationRequestOptions",0,0);this.setVCMap("AV8GeoLocationInfo","vGEOLOCATIONINFO",0,"GeneXusCommonGeolocationInfo",0,0);this.setVCMap("AV12errMessage","vERRMESSAGE",0,"char",200,0);this.Initialize()});gx.wi(function(){gx.createParentObj(this.checkin)})