(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded');
		return;
	}
	echarts.registerMap('countries/mu/mu-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Black River"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BMmgAuD{LMOTUMId]@OiJOUEc`}PBLYIO]PaQU@imUH[SRgWSGM_BcvwARhrGVR^lBhNRaNBP\\NYTJlXZUNGdD^hGNZtRB@`f\\VZP@zTJU"],
				"encodeOffsets": [
					[58852, -20659]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Flacq"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fLPRĔTcEU[OPSraDe`]\\iAW]ERwMKD_WA@oo@aOMQ{IkRiDUEb¸xz_V"],
				"encodeOffsets": [
					[59001, -20650]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Grand Port"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@à¾dCRLZGZRVFjClQ|JNRbPp@UMLgSSiMU_cMMRUqzASOQ[Issy[eMUBG\\]hqfBNWZMjOCP"],
				"encodeOffsets": [
					[58903, -20886]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Moka"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PJ`F\\YlQV@ZRZKzrjL`Uywa·YQYHQKcDoRkLepJPSfOnkFeTMh@BER@H@b"],
				"encodeOffsets": [
					[58854, -20670]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pamplemousses"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EeWO¤wi]`OQeKiKyqYLGUb_GMJ[AS^N\\VLIXFdNTNjfTFVTPI\\fD@W"],
				"encodeOffsets": [
					[58952, -20495]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Plaines Wilhems"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BG@a@GFQ@ANgfSlEPmTeIOfolKpQß½UCSRcUCeeCJPKZOA_~FdPVjI@Pc^NJSVPKNC|Bvnh"],
				"encodeOffsets": [
					[58853, -20666]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Port Louis"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\BNI`HVaHYQU@kR[Z_EOIAHAN^zVRPE"],
				"encodeOffsets": [
					[58886, -20624]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rivière du Rempart"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ē_j^£xXPFfPAF^hbRDpQdW~KLyC[To`[@US"],
				"encodeOffsets": [
					[59134, -20591]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Savanne"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XTQh\\TVGjnV@bR^OfDDfdVTQVDOPDNiXYAMre^gH[gMcWcGYBsQ}P]CdOMqGhEZ"],
				"encodeOffsets": [
					[58751, -20971]
				]
			}
		}],
		"UTF8Encoding": true},
{"Rodrigues":{"left":57,"top":15 ,"width":0.3}}
	);
}));