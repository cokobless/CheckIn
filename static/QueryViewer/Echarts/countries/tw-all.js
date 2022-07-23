(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodename !== 'string') {
		// CommonJS
		factory(exports, require('echarts'));
	} else {
		// Browser globals
		factory({}, root.echarts);
	}
}(this, function (exports, echarts) {
	var log = function (msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	}
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded')
		return;
	}
	echarts.registerMap('countries/tw/tw-all',
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Taipei City","name_traditional_chinese":"台北市","cartodb_id":3,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:15Z","name_taiwanese":"Tâi-pak chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.559147,25.209356],[121.582303,25.193635],[121.576989,25.169828],[121.606978,25.128952],[121.59521,25.11368],[121.628236,25.085381],[121.615709,25.06382],[121.646078,25.028783],[121.59521,25.005875],[121.600525,24.960058],[121.561045,24.96455],[121.52688,24.989704],[121.519667,25.018452],[121.493095,25.009019],[121.486261,25.032377],[121.506761,25.06921],[121.4874,25.09706],[121.457791,25.106493],[121.465003,25.130749],[121.501446,25.16893],[121.559147,25.209356]]]]}},{"type":"Feature","properties":{"name":"Taoyuan County","name_traditional_chinese":"桃園縣","cartodb_id":5,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:29Z","name_taiwanese":"Thô-hn̂g koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.283169,25.117273],[121.346944,25.070109],[121.388322,25.060676],[121.409959,25.020698],[121.374656,24.980271],[121.326824,24.974881],[121.326445,24.895375],[121.352258,24.876509],[121.345046,24.845515],[121.373517,24.832938],[121.410719,24.838328],[121.44906,24.786223],[121.424764,24.760619],[121.44906,24.706717],[121.479808,24.673477],[121.449439,24.661798],[121.427801,24.60565],[121.402367,24.591725],[121.365924,24.598463],[121.353397,24.667188],[121.301011,24.692792],[121.305566,24.752085],[121.246726,24.7988],[121.207247,24.806436],[121.15486,24.841473],[121.151823,24.879654],[121.058439,24.907054],[121.036801,24.945235],[120.985933,24.938946],[121.025033,25.011265],[121.04743,25.037318],[121.101714,25.067414],[121.173081,25.085381],[121.211802,25.108739],[121.283169,25.117273]]]]}},{"type":"Feature","properties":{"name":"Taichung City","name_traditional_chinese":"台中市","cartodb_id":7,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:04Z","name_taiwanese":"Tâi-tiong chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.532296,24.315026],[120.531917,24.314128],[120.531157,24.314128],[120.530778,24.314128],[120.532296,24.315026]],[[120.530778,24.314128],[120.531157,24.314128],[120.531917,24.314128],[120.532296,24.315026],[120.530778,24.314128]]],[[[120.621125,24.440349],[120.711094,24.356351],[120.767276,24.324459],[120.805617,24.315026],[120.833329,24.289872],[120.91001,24.293016],[120.921019,24.337486],[121.009089,24.325807],[121.048569,24.295711],[121.072105,24.322663],[121.093363,24.319518],[121.140435,24.359496],[121.162832,24.360843],[121.208765,24.39588],[121.225468,24.382853],[121.259253,24.42867],[121.316195,24.441248],[121.331,24.397677],[121.372378,24.36803],[121.420209,24.381057],[121.450578,24.364886],[121.433116,24.321764],[121.386044,24.284482],[121.384525,24.264268],[121.342388,24.223842],[121.283169,24.231029],[121.257735,24.244953],[121.24255,24.222045],[121.188266,24.215307],[121.167008,24.225638],[121.13512,24.196441],[121.102094,24.196441],[121.051985,24.155116],[121.016681,24.157811],[120.992006,24.120978],[120.94949,24.127266],[120.921019,24.108401],[120.835606,24.114689],[120.828394,24.072915],[120.751332,24.002393],[120.678067,24.013622],[120.625681,24.035183],[120.612015,24.102561],[120.553175,24.112443],[120.529639,24.130411],[120.504205,24.191051],[120.485224,24.19734],[120.467003,24.214409],[120.502307,24.272803],[120.497751,24.294813],[120.545583,24.307839],[120.564943,24.363988],[120.621125,24.440349]]]]}},{"type":"Feature","properties":{"name":"Tainan City","name_traditional_chinese":"台南市","cartodb_id":8,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:10Z","name_taiwanese":"Tâi-lâm chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.653392,23.224402],[120.63631,23.176788],[120.610876,23.155676],[120.568359,23.083357],[120.454096,22.989028],[120.415755,22.915811],[120.380451,22.918955],[120.351601,22.887512],[120.277197,22.903234],[120.258216,22.895597],[120.192164,22.920303],[120.174322,22.911319],[120.156101,22.978248],[120.035384,23.068534],[120.057781,23.137709],[120.099538,23.295373],[120.11738,23.339394],[120.184951,23.289983],[120.212663,23.291331],[120.26467,23.350623],[120.350842,23.400483],[120.433977,23.411263],[120.460549,23.403627],[120.509899,23.36365],[120.507242,23.342538],[120.536092,23.325469],[120.522426,23.312442],[120.530778,23.251802],[120.51901,23.239225],[120.578988,23.217215],[120.653392,23.224402]]]]}},{"type":"Feature","properties":{"name":"Keelung City","name_traditional_chinese":"基隆市","cartodb_id":9,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:25Z","name_taiwanese":"Ke-lâng chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.737565,25.160395],[121.779322,25.150962],[121.7816,25.150962],[121.802858,25.135241],[121.797543,25.114129],[121.755786,25.108289],[121.773248,25.072355],[121.728454,25.053489],[121.652532,25.09706],[121.63431,25.143775],[121.708335,25.175218],[121.737565,25.160395]]]]}},{"type":"Feature","properties":{"name":"Nantou County","name_traditional_chinese":"南投縣","cartodb_id":11,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:47Z","name_taiwanese":"Lâm-tâu koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.342388,24.223842],[121.339352,24.198687],[121.292659,24.177126],[121.285067,24.134453],[121.326824,24.114689],[121.317334,24.079204],[121.288484,24.058541],[121.260772,23.98712],[121.274438,23.9705],[121.274438,23.906716],[121.206108,23.767917],[121.232681,23.747704],[121.240273,23.709523],[121.22319,23.622381],[121.209524,23.598125],[121.157138,23.585098],[121.13512,23.515025],[121.072105,23.517271],[121.039078,23.472802],[121.046671,23.450343],[121.014404,23.434621],[121.007191,23.462021],[120.957082,23.468759],[120.831431,23.475946],[120.807895,23.542875],[120.822699,23.587344],[120.7631,23.612499],[120.730833,23.610702],[120.720204,23.625525],[120.672753,23.609355],[120.628718,23.629568],[120.642763,23.66685],[120.640486,23.724346],[120.654152,23.742314],[120.639726,23.785885],[120.668197,23.794419],[120.673512,23.819574],[120.639726,23.820472],[120.618468,23.84383],[120.632893,23.895935],[120.632134,23.952533],[120.64618,23.964212],[120.63631,24.000147],[120.678067,24.013622],[120.751332,24.002393],[120.828394,24.072915],[120.835606,24.114689],[120.921019,24.108401],[120.94949,24.127266],[120.992006,24.120978],[121.016681,24.157811],[121.051985,24.155116],[121.102094,24.196441],[121.13512,24.196441],[121.167008,24.225638],[121.188266,24.215307],[121.24255,24.222045],[121.257735,24.244953],[121.283169,24.231028],[121.342388,24.223842]]]]}},{"type":"Feature","properties":{"name":"Yilan County","name_traditional_chinese":"宜蘭縣","cartodb_id":2,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:34Z","name_taiwanese":"Gî-lân koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.873086,24.534678],[121.861318,24.527492],[121.860559,24.527492],[121.843097,24.520754],[121.850689,24.48392],[121.798682,24.430916],[121.770591,24.334341],[121.772869,24.314128],[121.706816,24.328053],[121.623681,24.367132],[121.632412,24.338384],[121.59521,24.328951],[121.601664,24.31323],[121.549657,24.334341],[121.490437,24.343774],[121.450578,24.364886],[121.420209,24.381057],[121.372378,24.36803],[121.331,24.397677],[121.316195,24.441248],[121.346185,24.48392],[121.400469,24.530187],[121.402367,24.591725],[121.427801,24.60565],[121.449439,24.661798],[121.479808,24.673477],[121.532195,24.687402],[121.596349,24.726481],[121.594071,24.778587],[121.627857,24.807335],[121.688974,24.819912],[121.733389,24.855847],[121.759203,24.856296],[121.783877,24.889985],[121.853726,24.925021],[121.846513,24.960058],[121.915982,24.979373],[121.965712,24.982517],[121.964952,24.982517],[121.964573,24.981619],[121.941416,24.972635],[121.921297,24.960058],[121.919019,24.954668],[121.919019,24.953769],[121.91826,24.95332],[121.90839,24.948379],[121.904214,24.945235],[121.904214,24.944336],[121.904214,24.942091],[121.904214,24.941192],[121.904214,24.940743],[121.884854,24.917834],[121.884854,24.917385],[121.884095,24.916487],[121.882956,24.915589],[121.882577,24.915589],[121.857522,24.893129],[121.857143,24.893129],[121.857143,24.892231],[121.856004,24.892231],[121.855244,24.891782],[121.854106,24.891332],[121.852967,24.891332],[121.84955,24.885942],[121.848791,24.885493],[121.848791,24.884595],[121.848411,24.884595],[121.832468,24.862585],[121.817663,24.781731],[121.84006,24.6609],[121.860559,24.613286],[121.883715,24.600709],[121.873086,24.534678]]]]}},{"type":"Feature","properties":{"name":"Chiayi City","name_traditional_chinese":"嘉義市","cartodb_id":14,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:11:55Z","name_taiwanese":"Ka-gī chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.428282,23.508737],[120.453337,23.515025],[120.500029,23.489871],[120.495853,23.454834],[120.473456,23.461123],[120.438152,23.440011],[120.396775,23.462021],[120.389182,23.495261],[120.428282,23.508737]]]]}},{"type":"Feature","properties":{"name":"Miaoli County","name_traditional_chinese":"苗栗縣","cartodb_id":13,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:42Z","name_taiwanese":"Biâu-le̍k koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.259253,24.428671],[121.225468,24.382853],[121.208765,24.39588],[121.162832,24.360843],[121.140435,24.359496],[121.093363,24.319518],[121.072105,24.322663],[121.048569,24.295711],[121.009089,24.325807],[120.921019,24.337486],[120.91001,24.293016],[120.833329,24.289872],[120.805617,24.315026],[120.767276,24.324459],[120.711093,24.356351],[120.621125,24.440349],[120.661744,24.47853],[120.661744,24.479429],[120.722861,24.60565],[120.75323,24.613286],[120.785497,24.661798],[120.819663,24.668536],[120.859901,24.704471],[120.878123,24.735016],[120.906973,24.740406],[120.934685,24.712107],[120.974165,24.71076],[120.964674,24.684258],[121.080456,24.587682],[121.061096,24.55579],[121.078178,24.530187],[121.071345,24.50099],[121.144611,24.511321],[121.163591,24.502786],[121.217116,24.513567],[121.218255,24.497845],[121.261911,24.455172],[121.259253,24.428671]]]]}},{"type":"Feature","properties":{"name":"Kaohsiung City","name_traditional_chinese":"高雄市","cartodb_id":18,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:20Z","name_taiwanese":"Ko-hiông chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.174322,22.911319],[120.192164,22.920303],[120.258216,22.895597],[120.277197,22.903234],[120.351601,22.887512],[120.380451,22.918955],[120.415755,22.915811],[120.454096,22.989028],[120.568359,23.083357],[120.610876,23.155676],[120.63631,23.176788],[120.653392,23.224402],[120.640865,23.262583],[120.648078,23.294475],[120.701224,23.28594],[120.703501,23.299865],[120.824977,23.372184],[120.849272,23.419798],[120.90052,23.453487],[120.957082,23.468759],[121.007191,23.462021],[121.014404,23.434621],[121.026172,23.41306],[120.986692,23.360505],[121.039078,23.328613],[121.02807,23.296721],[120.982896,23.280999],[120.911529,23.228894],[120.911149,23.182178],[120.876225,23.151184],[120.885335,23.088748],[120.859901,23.007894],[120.824977,22.966569],[120.821561,22.940067],[120.838643,22.886165],[120.860281,22.876732],[120.864457,22.842593],[120.818524,22.861908],[120.781322,22.836305],[120.727796,22.87763],[120.702362,22.878528],[120.674651,22.856518],[120.642763,22.883919],[120.597969,22.865951],[120.558489,22.832262],[120.473077,22.835406],[120.453337,22.755451],[120.455235,22.71772],[120.437014,22.665614],[120.435115,22.610364],[120.446883,22.587006],[120.423347,22.520078],[120.423347,22.476507],[120.399812,22.478752],[120.310603,22.545681],[120.2548,22.618899],[120.250624,22.659325],[120.273021,22.688972],[120.191025,22.841695],[120.174322,22.911319]]]]}},{"type":"Feature","properties":{"name":"Hsinchu City","name_traditional_chinese":"新竹市","cartodb_id":22,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:06Z","name_taiwanese":"Sin-tek chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.933546,24.852702],[121.019718,24.803292],[121.026172,24.757475],[120.991247,24.778587],[120.946453,24.743999],[120.934685,24.712107],[120.906973,24.740406],[120.878123,24.735016],[120.917603,24.850906],[120.933546,24.852702]]]]}},{"type":"Feature","properties":{"name":"Hsinchu County","name_traditional_chinese":"新竹縣","cartodb_id":15,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:10Z","name_taiwanese":"Sin-tek koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.985933,24.938946],[121.036801,24.945235],[121.058439,24.907054],[121.151823,24.879654],[121.15486,24.841473],[121.207247,24.806436],[121.246726,24.7988],[121.305566,24.752085],[121.301011,24.692792],[121.353397,24.667188],[121.365924,24.598463],[121.402367,24.591725],[121.400469,24.530187],[121.346185,24.48392],[121.316195,24.441248],[121.259253,24.42867],[121.261911,24.455172],[121.218255,24.497845],[121.217116,24.513567],[121.163591,24.502786],[121.144611,24.511321],[121.071345,24.50099],[121.078178,24.530187],[121.061096,24.55579],[121.080456,24.587682],[120.964674,24.684258],[120.974165,24.71076],[120.934685,24.712107],[120.946453,24.743999],[120.991247,24.778587],[121.026172,24.757475],[121.019718,24.803292],[120.933546,24.852702],[120.967711,24.920979],[120.985933,24.938946]]]]}},{"type":"Feature","properties":{"name":"Kinmen County","name_traditional_chinese":"金門縣","cartodb_id":21,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:30Z","name_taiwanese":"Kim-mn̂g koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[118.364331,24.427772],[118.323713,24.385998],[118.281955,24.409355],[118.308908,24.430467],[118.288409,24.470894],[118.31688,24.487963],[118.369646,24.460563],[118.393941,24.505032],[118.423551,24.526144],[118.467206,24.478081],[118.461892,24.431815],[118.437217,24.408457],[118.389765,24.434959],[118.364331,24.427772]]],[[[118.262975,24.425077],[118.22843,24.407559],[118.237161,24.448884],[118.262975,24.425077]]]]}},{"type":"Feature","properties":{"name":"Changhua County","name_traditional_chinese":"彰化縣","cartodb_id":19,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:11:49Z","name_taiwanese":"Chiong-hoà koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.639726,23.785885],[120.550138,23.800708],[120.510658,23.79936],[120.425625,23.829456],[120.307945,23.819574],[120.241893,23.842033],[120.26467,23.865391],[120.265808,23.866289],[120.265808,23.867188],[120.271882,23.867637],[120.287067,23.873925],[120.318954,23.935464],[120.304909,23.941752],[120.329204,23.98712],[120.348564,23.990714],[120.383109,24.079653],[120.432838,24.089086],[120.436254,24.120978],[120.379692,24.093577],[120.439291,24.15826],[120.463586,24.160506],[120.485224,24.19734],[120.504205,24.191051],[120.529639,24.130411],[120.553175,24.112443],[120.612015,24.102561],[120.625681,24.035183],[120.678067,24.013622],[120.63631,24.000147],[120.64618,23.964212],[120.632134,23.952533],[120.632893,23.895935],[120.618468,23.84383],[120.639726,23.820472],[120.673512,23.819574],[120.668197,23.794419],[120.639726,23.785885]]]]}},{"type":"Feature","properties":{"name":"Penghu County","name_traditional_chinese":"澎湖縣","cartodb_id":12,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:56Z","name_taiwanese":"Phêⁿ-ô͘ koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[119.596552,23.795318],[119.596552,23.796216],[119.596932,23.795318],[119.596552,23.795318]]],[[[119.59883,23.79397],[119.59883,23.793072],[119.59845,23.792173],[119.59883,23.79397]]],[[[119.601867,23.785885],[119.603006,23.785885],[119.602246,23.784986],[119.601867,23.785885]]],[[[119.604904,23.781393],[119.606043,23.782291],[119.606043,23.781393],[119.605283,23.781393],[119.604904,23.781393]]],[[[119.606043,23.779596],[119.606043,23.780495],[119.606422,23.781393],[119.607181,23.781393],[119.607181,23.779596],[119.607181,23.779147],[119.607181,23.779596],[119.606043,23.779596]]],[[[119.610598,23.779596],[119.611357,23.779596],[119.611357,23.778249],[119.610598,23.77735],[119.610598,23.779596]]],[[[119.611357,23.778249],[119.611737,23.77735],[119.611357,23.77735],[119.610598,23.77735],[119.611357,23.778249]]],[[[119.611357,23.776003],[119.611357,23.776452],[119.611737,23.776452],[119.611737,23.776003],[119.611357,23.776003]]],[[[119.602246,23.767468],[119.603006,23.767468],[119.601867,23.76657],[119.602246,23.767468]],[[119.603006,23.767468],[119.602246,23.767468],[119.601867,23.76657],[119.603006,23.767468]]],[[[119.611357,23.736025],[119.610218,23.736923],[119.610598,23.736923],[119.610218,23.737822],[119.611357,23.736025]]],[[[119.610218,23.736923],[119.610218,23.737822],[119.610598,23.736923],[119.610218,23.736923]]],[[[119.609079,23.712667],[119.609459,23.710421],[119.60832,23.710421],[119.609079,23.712667]]],[[[119.321713,23.324121],[119.322852,23.323223],[119.322093,23.323223],[119.321713,23.324121]]],[[[119.693733,23.5568],[119.643624,23.558597],[119.612496,23.536586],[119.605283,23.507838],[119.574535,23.50694],[119.599969,23.549164],[119.562387,23.549164],[119.563526,23.581056],[119.596932,23.574318],[119.604904,23.595879],[119.604144,23.595879],[119.610218,23.609355],[119.580609,23.656519],[119.54986,23.652027],[119.518732,23.623729],[119.511519,23.563987],[119.49102,23.598125],[119.508482,23.640348],[119.533537,23.638102],[119.555175,23.668198],[119.584025,23.676283],[119.624264,23.57881],[119.655392,23.607558],[119.693733,23.5568]]]]}},{"type":"Feature","properties":{"name":"New Taipei City","name_traditional_chinese":"新北市","cartodb_id":16,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:51Z","name_taiwanese":"Sin-pak chhī"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.479808,24.673477],[121.44906,24.706717],[121.424764,24.760619],[121.44906,24.786223],[121.410719,24.838328],[121.373517,24.832938],[121.345046,24.845515],[121.352258,24.876509],[121.326445,24.895375],[121.326824,24.974881],[121.374656,24.980271],[121.409959,25.020698],[121.388322,25.060676],[121.346944,25.070109],[121.283169,25.117273],[121.367063,25.137037],[121.412237,25.167133],[121.411858,25.188245],[121.447161,25.245291],[121.509797,25.290659],[121.509797,25.291108],[121.535611,25.299643],[121.53637,25.299643],[121.53675,25.299643],[121.537889,25.299194],[121.539787,25.298295],[121.539787,25.297397],[121.582303,25.295151],[121.628236,25.265505],[121.635829,25.235858],[121.677966,25.202169],[121.678345,25.202169],[121.696187,25.211602],[121.696187,25.212501],[121.696567,25.214297],[121.697326,25.214297],[121.697326,25.214747],[121.700742,25.214747],[121.694289,25.202169],[121.692391,25.199923],[121.707955,25.175218],[121.630514,25.142428],[121.660124,25.090771],[121.745157,25.05259],[121.768693,25.062023],[121.754647,25.109637],[121.798303,25.115926],[121.802858,25.135241],[121.844615,25.126706],[121.85942,25.12446],[121.861318,25.125808],[121.874225,25.12446],[121.920158,25.120418],[121.91788,25.094814],[121.915982,25.09167],[121.929648,25.064269],[121.92851,25.039564],[121.953184,25.021597],[122.003293,25.014859],[122.004432,25.015308],[122.00633,25.010816],[122.00633,25.009918],[121.991146,24.99734],[121.985831,24.994196],[121.983933,24.991052],[121.965712,24.982517],[121.915982,24.979373],[121.846513,24.960058],[121.853726,24.925021],[121.783877,24.889985],[121.759203,24.856296],[121.733389,24.855847],[121.688974,24.819912],[121.627857,24.807335],[121.594071,24.778587],[121.596349,24.726481],[121.532195,24.687402],[121.479808,24.673477]],[[121.52688,24.98656],[121.567119,24.964101],[121.601664,24.975779],[121.603562,25.018452],[121.664679,25.024741],[121.619505,25.04181],[121.621783,25.09706],[121.595969,25.114129],[121.603941,25.131647],[121.580405,25.164887],[121.583442,25.192287],[121.562943,25.206212],[121.505622,25.170277],[121.457791,25.106493],[121.503724,25.079991],[121.491956,25.009918],[121.518149,25.019351],[121.52688,24.98656]]]]}},{"type":"Feature","properties":{"name":"Chiayi County","name_traditional_chinese":"嘉義縣","cartodb_id":20,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:02Z","name_taiwanese":"Ka-gī koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.653392,23.224402],[120.578988,23.217215],[120.51901,23.239225],[120.530778,23.251802],[120.522426,23.312442],[120.536092,23.325469],[120.507242,23.342538],[120.509899,23.36365],[120.460549,23.403627],[120.433977,23.411263],[120.350842,23.400483],[120.26467,23.350623],[120.212663,23.291331],[120.184951,23.289983],[120.11738,23.339394],[120.15686,23.382515],[120.134842,23.447198],[120.157239,23.494812],[120.123834,23.488523],[120.120797,23.518619],[120.145092,23.520416],[120.222912,23.503796],[120.246448,23.514127],[120.243032,23.542875],[120.269984,23.529849],[120.307186,23.574318],[120.355017,23.593633],[120.402089,23.626424],[120.422209,23.618338],[120.4894,23.634958],[120.522426,23.606659],[120.566841,23.587344],[120.648078,23.58959],[120.678826,23.571174],[120.73425,23.574767],[120.730833,23.610702],[120.7631,23.612499],[120.822699,23.587344],[120.807895,23.542875],[120.831431,23.475946],[120.957082,23.468759],[120.90052,23.453487],[120.849272,23.419798],[120.824977,23.372184],[120.703501,23.299865],[120.701224,23.28594],[120.648078,23.294475],[120.640865,23.262583],[120.653392,23.224402]],[[120.393738,23.462021],[120.428662,23.460225],[120.446883,23.443156],[120.4894,23.45169],[120.507621,23.471454],[120.481808,23.504694],[120.451059,23.516373],[120.389182,23.49616],[120.393738,23.462021]]]]}},{"type":"Feature","properties":{"name":"Pingtung County","name_traditional_chinese":"屏東縣","cartodb_id":6,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:00Z","name_taiwanese":"Pîn-tong koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.358434,22.321537],[120.361471,22.343098],[120.388423,22.349387],[120.358434,22.321537]]],[[[120.70464,22.054271],[120.71413,22.089757],[120.685659,22.206995],[120.650356,22.252812],[120.642763,22.300425],[120.56798,22.383525],[120.452198,22.445063],[120.423347,22.476507],[120.423347,22.520078],[120.446883,22.587006],[120.435115,22.610364],[120.437014,22.665614],[120.455235,22.71772],[120.453337,22.755451],[120.473077,22.835406],[120.558489,22.832262],[120.597969,22.865951],[120.642763,22.883919],[120.674651,22.856518],[120.702362,22.878528],[120.727796,22.87763],[120.781322,22.836305],[120.818524,22.861908],[120.864457,22.842593],[120.867873,22.816091],[120.902798,22.799022],[120.894446,22.738382],[120.878123,22.715474],[120.850791,22.716372],[120.796127,22.68987],[120.760823,22.629679],[120.738805,22.551071],[120.764239,22.494923],[120.752471,22.467074],[120.785497,22.426647],[120.755508,22.402391],[120.744879,22.3696],[120.784738,22.343997],[120.777146,22.297281],[120.796127,22.268982],[120.864077,22.233497],[120.895965,22.245625],[120.892928,22.152194],[120.90052,22.034058],[120.843958,21.9833],[120.840921,21.950509],[120.864457,21.898404],[120.82194,21.934339],[120.755888,21.956798],[120.724,21.919515],[120.715269,21.974765],[120.687558,22.03316],[120.70464,22.054271]]]]}},{"type":"Feature","properties":{"name":"Yunlin County","name_traditional_chinese":"雲林縣","cartodb_id":4,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:40Z","name_taiwanese":"Hûn-lîm koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.059679,23.489422],[120.024755,23.471904],[120.018301,23.444054],[119.996284,23.465166],[120.076002,23.521763],[120.059679,23.489422]]],[[[120.730833,23.610702],[120.73425,23.574767],[120.678826,23.571174],[120.648078,23.58959],[120.566841,23.587344],[120.522426,23.606659],[120.4894,23.634958],[120.422209,23.618338],[120.402089,23.626424],[120.355017,23.593633],[120.307186,23.574318],[120.269984,23.529849],[120.243032,23.542875],[120.246448,23.514127],[120.222912,23.503796],[120.145092,23.520416],[120.134463,23.619237],[120.148508,23.658316],[120.181535,23.702785],[120.169007,23.707277],[120.169007,23.758035],[120.183812,23.797564],[120.163313,23.791275],[120.227468,23.846076],[120.241893,23.842033],[120.307945,23.819574],[120.425625,23.829456],[120.510658,23.79936],[120.550138,23.800708],[120.639726,23.785885],[120.654152,23.742314],[120.640486,23.724346],[120.642763,23.66685],[120.628718,23.629568],[120.672753,23.609355],[120.720204,23.625525],[120.730833,23.610702]]]]}},{"type":"Feature","properties":{"name":"Hualien County","name_traditional_chinese":"花蓮縣","cartodb_id":17,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:15Z","name_taiwanese":"Hoa-liân koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.02807,23.296721],[121.039078,23.328613],[120.986692,23.360505],[121.026172,23.41306],[121.014404,23.434621],[121.046671,23.450343],[121.039078,23.472802],[121.072105,23.517271],[121.13512,23.515025],[121.157138,23.585098],[121.209524,23.598125],[121.22319,23.622381],[121.240273,23.709523],[121.232681,23.747704],[121.206108,23.767917],[121.274438,23.906716],[121.274438,23.9705],[121.260772,23.98712],[121.288484,24.058541],[121.317334,24.079204],[121.326824,24.114689],[121.285067,24.134453],[121.292659,24.177126],[121.339352,24.198687],[121.342388,24.223842],[121.384525,24.264268],[121.386044,24.284482],[121.433116,24.321764],[121.450578,24.364886],[121.490437,24.343774],[121.549657,24.334341],[121.601664,24.31323],[121.59521,24.328951],[121.632412,24.338384],[121.623681,24.367132],[121.706816,24.328053],[121.772869,24.314128],[121.73263,24.250344],[121.663161,24.195094],[121.657846,24.127266],[121.617607,24.083695],[121.617228,24.057193],[121.646458,24.010478],[121.605839,23.955228],[121.610774,23.936362],[121.597488,23.862246],[121.572433,23.801606],[121.5656,23.742314],[121.550416,23.718058],[121.524602,23.574767],[121.510936,23.553206],[121.509038,23.490769],[121.509038,23.491668],[121.511316,23.491668],[121.511316,23.490769],[121.512075,23.490769],[121.495752,23.434621],[121.443745,23.437765],[121.39933,23.38566],[121.422487,23.359158],[121.377692,23.300764],[121.335176,23.18128],[121.318093,23.161965],[121.32151,23.126928],[121.27254,23.097282],[121.255457,23.126928],[121.211422,23.146243],[121.190544,23.201044],[121.140435,23.201044],[121.129806,23.220359],[121.078178,23.232936],[121.039078,23.299865],[121.02807,23.296721]]]]}},{"type":"Feature","properties":{"name":"Lienchiang County","name_traditional_chinese":"連江縣","cartodb_id":10,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:12:35Z","name_taiwanese":"Liân-kang koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[119.969331,26.162979],[119.964396,26.155792],[119.964017,26.154894],[119.96098,26.149503],[119.9606,26.149054],[119.959841,26.149054],[119.95111,26.145012],[119.929852,26.136477],[119.929092,26.136477],[119.925676,26.172861],[119.942759,26.153546],[119.97047,26.164327],[119.97047,26.163428],[119.969711,26.163428],[119.97047,26.163428],[119.969711,26.163428],[119.969331,26.162979]]],[[[119.975785,26.159835],[119.976164,26.159835],[119.976924,26.158936],[119.975785,26.159835]]],[[[119.978062,26.162979],[119.978062,26.162081],[119.977683,26.162081],[119.976164,26.159835],[119.975785,26.159835],[119.977683,26.167471],[119.978062,26.167471],[119.978062,26.166123],[119.978062,26.165225],[119.978062,26.162979]]],[[[119.964396,26.155792],[119.964396,26.154894],[119.964017,26.154894],[119.964396,26.155792]]],[[[120.47953,26.381733],[120.47953,26.381284],[120.478771,26.381733],[120.47953,26.381733]]],[[[120.49889,26.355231],[120.490539,26.353883],[120.47953,26.381284],[120.47953,26.381733],[120.47991,26.381733],[120.47991,26.381284],[120.504205,26.361519],[120.49889,26.355231]]],[[[119.99059,25.96354],[119.990969,25.96354],[119.98983,25.962642],[119.99059,25.96354]]],[[[119.97047,25.974321],[119.97085,25.974321],[119.97085,25.973872],[119.97047,25.974321]]],[[[119.969711,25.970278],[119.969711,25.972075],[119.97047,25.972075],[119.97047,25.972973],[119.97085,25.973422],[119.971609,25.973422],[119.972368,25.972075],[119.969711,25.970278]]],[[[119.971609,25.973872],[119.971609,25.973422],[119.97085,25.973872],[119.97085,25.974321],[119.971609,25.973872]]],[[[119.983377,25.954107],[119.983377,25.955006],[119.984136,25.955006],[119.983377,25.954107]]],[[[119.994765,25.968931],[119.994006,25.968032],[119.990969,25.96354],[119.99059,25.96354],[119.98983,25.962642],[119.989451,25.962642],[119.983377,25.95815],[119.983377,25.957252],[119.983377,25.956803],[119.984136,25.955006],[119.983377,25.955006],[119.983377,25.954107],[119.981479,25.973422],[119.982238,25.973422],[119.994765,25.968931]]],[[[120.23468,26.345349],[120.233921,26.34445],[120.233921,26.345349],[120.23468,26.345349]]],[[[120.232782,26.342204],[120.232403,26.342204],[120.231264,26.340408],[120.230505,26.340408],[120.230505,26.33906],[120.228227,26.337263],[120.228227,26.336814],[120.233541,26.34445],[120.233921,26.34445],[120.232782,26.342204]]],[[[120.003496,26.280666],[120.003496,26.281115],[120.003876,26.281115],[120.004635,26.281115],[120.003876,26.281115],[120.003876,26.280666],[120.003496,26.280666]]],[[[120.003496,26.281115],[120.003876,26.281115],[120.003496,26.280666],[120.003496,26.281115]]],[[[119.972748,26.192625],[119.972368,26.191727],[119.972748,26.218229],[120.00046,26.236196],[120.016403,26.215983],[120.017163,26.214186],[120.017163,26.213737],[119.978062,26.207898],[119.972748,26.192625]]],[[[119.948453,25.980609],[119.949971,25.980609],[119.952249,25.975219],[119.95149,25.975219],[119.948453,25.980609]]]]}},{"type":"Feature","properties":{"name":"Taitung County\n","name_traditional_chinese":"台東縣","cartodb_id":1,"created_at":"2014-02-09T21:49:08Z","updated_at":"2014-02-09T22:13:25Z","name_taiwanese":"Tâi-tang koān"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.258494,22.89964],[121.259633,22.903234],[121.260772,22.904132],[121.261531,22.90548],[121.258494,22.89964]]],[[[121.191682,22.825524],[121.191303,22.825524],[121.191303,22.825974],[121.191682,22.825524]]],[[[121.503724,22.640909],[121.504483,22.640909],[121.463105,22.671903],[121.490817,22.67909],[121.510936,22.668758],[121.512834,22.666512],[121.510936,22.664716],[121.506761,22.658876],[121.507899,22.654834],[121.503724,22.640909]]],[[[121.418311,23.224402],[121.417552,23.223503],[121.417172,23.223503],[121.397812,23.207782],[121.400469,23.130073],[121.418311,23.122886],[121.401228,23.113004],[121.400469,23.113004],[121.393636,23.111207],[121.390599,23.108063],[121.38984,23.107613],[121.383007,23.096384],[121.383007,23.095935],[121.383007,23.095036],[121.382248,23.095036],[121.357573,23.085603],[121.357573,23.082459],[121.310881,22.973307],[121.27216,22.920303],[121.261531,22.90548],[121.260772,22.904132],[121.259633,22.901886],[121.259253,22.900988],[121.258494,22.89964],[121.231542,22.864154],[121.189405,22.847984],[121.191303,22.825974],[121.191303,22.825524],[121.191682,22.825524],[121.193581,22.789589],[121.163971,22.75051],[121.119936,22.714126],[121.03718,22.668758],[121.00795,22.587006],[120.981757,22.564547],[120.945314,22.454496],[120.894446,22.333665],[120.895965,22.245625],[120.864077,22.233497],[120.796127,22.268982],[120.777146,22.297281],[120.784738,22.343997],[120.744879,22.3696],[120.755508,22.402391],[120.785497,22.426647],[120.752471,22.467074],[120.764239,22.494923],[120.738805,22.551071],[120.760823,22.629679],[120.796127,22.68987],[120.850791,22.716372],[120.878123,22.715474],[120.894446,22.738382],[120.902798,22.799022],[120.867873,22.816091],[120.864457,22.842593],[120.860281,22.876732],[120.838643,22.886165],[120.821561,22.940067],[120.824977,22.966569],[120.859901,23.007894],[120.885335,23.088748],[120.876225,23.151184],[120.911149,23.182178],[120.911529,23.228894],[120.982896,23.280999],[121.02807,23.296721],[121.039078,23.299865],[121.078178,23.232936],[121.129806,23.220359],[121.140435,23.201044],[121.190544,23.201044],[121.211422,23.146243],[121.255457,23.126928],[121.27254,23.097282],[121.32151,23.126928],[121.318093,23.161965],[121.335176,23.18128],[121.377692,23.300764],[121.422487,23.359158],[121.39933,23.38566],[121.443745,23.437765],[121.495752,23.434621],[121.473734,23.383863],[121.463105,23.317833],[121.431218,23.287288],[121.418311,23.224402]]],[[[121.510177,22.082121],[121.510936,22.081223],[121.568637,22.083918],[121.569397,22.069095],[121.569397,22.068196],[121.56636,22.056517],[121.56636,22.055619],[121.600525,22.019684],[121.600525,22.019235],[121.600525,22.018336],[121.600525,22.017438],[121.590655,22.001267],[121.543963,22.024625],[121.543203,22.024625],[121.538648,22.023727],[121.537889,22.023727],[121.509038,22.047983],[121.510177,22.082121]]]]}}]}
)

}));