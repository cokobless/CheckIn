gx.evt.autoSkip=!1;gx.define("wwpbaseobjects.homeprogressbarcirclewc",!0,function(n){var i,t;this.ServerClass="wwpbaseobjects.homeprogressbarcirclewc";this.PackageName="com.chekin";this.ServerFullClass="com.chekin.wwpbaseobjects.homeprogressbarcirclewc";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6Percentage=gx.fn.getIntegerValue("vPERCENTAGE",".")};this.e130k2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140k2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13];this.GXLastCtrlId=13;this.UCPBContainer=gx.uc.getNew(this,9,0,"DVProgressIndicator",this.CmpContext+"UCPBContainer","Ucpb","UCPB");t=this.UCPBContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Type","Type","Circle","str");t.setProp("CircleCaptionType","Circlecaptiontype","Caption","str");t.setDynProp("Caption","Caption","45%","str");t.setProp("Subtitle","Subtitle","","char");t.setProp("RawHTML","Rawhtml","","char");t.setProp("Cls","Cls","CardsMenuProgressIndicatorCircle","str");t.setDynProp("Percentage","Percentage",45,"num");t.setProp("BarWidth","Barwidth","","char");t.setProp("CircleWidth","Circlewidth",46,"num");t.setProp("CircleProgressWidth","Circleprogresswidth",3,"num");t.setProp("AnimateOnStart","Animateonstart",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEMAIN",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[12]={id:12,fld:"",grid:0};i[13]={id:13,lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONTITLE",gxz:"ZV5OptionTitle",gxold:"OV5OptionTitle",gxvar:"AV5OptionTitle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5OptionTitle=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5OptionTitle=n)},v2c:function(){gx.fn.setControlValue("vOPTIONTITLE",gx.O.AV5OptionTitle,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5OptionTitle=this.val())},val:function(){return gx.fn.getControlValue("vOPTIONTITLE")},nac:gx.falseFn};this.AV5OptionTitle="";this.AV6Percentage=0;this.Events={e130k2_client:["ENTER",!0],e140k2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{av:"AV6Percentage",fld:"vPERCENTAGE",pic:"ZZZ9"}],[{av:"this.UCPBContainer.Percentage",ctrl:"UCPB",prop:"Percentage"},{av:"this.UCPBContainer.Caption",ctrl:"UCPB",prop:"Caption"}]];this.setVCMap("AV6Percentage","vPERCENTAGE",0,"int",4,0);this.Initialize()})