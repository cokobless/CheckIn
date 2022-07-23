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
	echarts.registerMap('countries/gq/gq-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Región Continental"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@wZFSM"],
					["@@^qE\\[fjNtaæo\\RxWH\\SbȪBɌ@˾ADC̠BIYQ˟F̡HϿ͛BȷAɃ@˟@ʍ@­AU~]fw^JÁYu[AO]zov­PÏqNs¢efxTb~VºxPfd\\HGjxrÌFf|tiHlrxdxnTntZvAX|`ND|SĘ|°BÔI¤Y²V^\\"]
				],
				"encodeOffsets": [
					[
						[9555, 909]
					],
					[
						[10059, 2406]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Región Insular"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@[nG¾j®frhRÜ[hPX|WrHĖz|¬TxrZfÜE®HjR|]lHWicÃo«wCu]aw[NO«­Y}msl^wK¡bcAµrEp"]
				],
				"encodeOffsets": [
					[
						[8640, 3383]
					]
				]
			}
		}],
		"UTF8Encoding": true},
{"Región Insular":{"left":10,"top":0.4, "width":0.3}
	});
}));