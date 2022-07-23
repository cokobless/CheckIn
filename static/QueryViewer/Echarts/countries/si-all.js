(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('countries/si/si-all', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Goriška"},"geometry":{"type":"Polygon","coordinates":["@@M[HGfNbFnTXWfEaBilUSWOeSSE]HUk_XeRETYZA`StWvAlSEXHTAFXJB`ODYEOUCQqJSXG\\FPE`FM@S{GQUKQUCWPW¤kLWPMRHJ_faf@SocEPuQGASYOFgh]HcJQeOOY­Wjq[[EaUkqXSKoX]FYPQAcLILs^W^qIcFORgPWQeCcPKNcR}DE[YSYAOes@[H@Q`[PZzART^ZHRbjlIVTSL_IwLWKU_gDEIcD[ZY@ajIVbJXdDR[L@ThHtVBPRbPJPnXVVTDXdAPXXMTuPGcGOHEbaPFGLaHaCkDDYoG[N^hcRWnCba`xD`LERTP^@TXYhVRjCdT\\@zdTRVPl^Rd@PLMl@PE"],"encodeOffsets":[[14013,47552]]}},{"type":"Feature","properties":{"name":"Jugovzhodna Slovenija"},"geometry":{"type":"Polygon","coordinates":["@@DHzAjT^E|Jb\\dC\\]eJQf_r_cf`WXkNQ`AXLVZDbKd@JXBxWVEVZBrCDV]`DZZ\\IfRVERxB@NbTZB@TXHbMdAVM^BFR`NBZIX|@DRtAHTZETYhM@MdA^NA[WMfmm^GfHXPPVZSZdlQNTrIBSdOQQDySQ`G^D^KCMXciK\\_M[LWfMJ[YGUS{KcQSKMgM_]VeVFNIB[TEHT`qRBObb\\HR`@JMEQNMWOVK^C\\QH[VG_YTW][DgCIONS_C_SlcF¡ZKDSTCRUdMTMnKqY[icGNgNYkyH[OmJ_d]Fe`gLA^mJQNUM]C_XsAOFpWLUAOSF[IK@aSIKKa@AVUPCbaVgBvaBEQSBKRHdTRUjUNuFqlYFeVNNATN\\SVeESPQBAfQfQ\\I^VHXS\\PQZN\\EV]@ONfL"],"encodeOffsets":[[14915,46891]]}},{"type":"Feature","properties":{"name":"Koroška"},"geometry":{"type":"Polygon","coordinates":["@@RdTIJXXLJf`OPXVKVNd@PIlPZDAZNPC\\`^GJT\\nj@NhRhOdCE^VCrb`QPm`ZBPjhzVn@`MNNlP\\KjLlKbD^SMvL^AbPd@TGPJZCBfD|eFaRYSMGSTSBW]GyfoFQILUCMYGCM[[BSy{BgCUb[SMs@mG_c@YqiFGE_HPd]DOEi@[LK\\uPKSiRsDmHOC\\SBGQ[EIMAaYq@qESLsCLsOQ^YVUJC_F"],"encodeOffsets":[[15027,47566]]}},{"type":"Feature","properties":{"name":"Notranjsko-kraška"},"geometry":{"type":"Polygon","coordinates":["@@VlFb\\\\ir®XPZfPlPNKPbUPB`W^@JQjHTClRV\\@b[ZBLUdL^aPCR`RA\\W^DVTb@dVXYIehiNELW`CN_ZMeKPM^@FUM[RY[OWTUGJ]R[ReBeRAGkaiKQcYqCL[CWKMCaFSWYYEi[YEKKkAWKSUSUDk[QBETUE]JILmOejQD[GagBYuRwFUKqLZRObYDKPWDVjCRTLBdg@ATHZXLJT[HMrKT[TNRAbWDXvbAJLKde`yJIP"],"encodeOffsets":[[14380,46860]]}},{"type":"Feature","properties":{"name":"Obalno-kraška"},"geometry":{"type":"Polygon","coordinates":["@@@\\Gt@PfZBZTF\\~CdQLMdOfDXRhOPQdErJX]t]JKdKRBZO^EpWTLrWJOzIf_LcIKaBWuXCBaMQ\\SLSNq\\GISWKGYBSh@AcSKDQUiXCLOZCPaYQwBiFk\\K@lqSYJWQFSfMZcWGDS_U]PCk_KWDGHqFUAEPSFJVkViBMIaAQKHw[s\\yNYBcTB^OTR\\iDMNPPzE@V^FZKr@RR|LfCTGVVTjyV@RJ[|G|DXDHRVHFXTFzZXRsXjY`WL@jm`Wd]PgDELaAUPqVm^WHMNWBE}VBX"],"encodeOffsets":[[13924,46920]]}},{"type":"Feature","properties":{"name":"Osrednjeslovenska"},"geometry":{"type":"Polygon","coordinates":["@@RJPVb@FRl\\\\hG^NX^RjB\\T°U\\@J^QJBZfNJP\\Nd@XNxT[\\AP`FhE`FTZjEdFDPzX^dn^QLGVqvLTZTaTRZBTYLHLnBFHnYTJdCpLAjabGFaGSTClFBMSURSCXIDZF¦I\\OVCPMfE^YUUOGD_][aFWIEDQTWPEQUFQrFz@F^C~CfLLPxX^eGQWEJYKezInTzLBWTYVA@OV[YFGSsBCQ{@JWAY_MEQ]AUNcBaNWG@SYAaS@MwAFQQUJeY[CY^_CUqDYAFUXUAwIWc@aLYCKUBWR_lMXWe_dq`e`IRf[^cDa[{I]FiSyBCGYNM`_DKXMFgjJfWZcUa@US]C[XQBQ_OD]bcKKVYAa\\[@QUkSDiGIR]@_XOAaVOMLkOIRGdg^EhZPBTRHOvdFTp"],"encodeOffsets":[[14480,47109]]}},{"type":"Feature","properties":{"name":"Podravska"},"geometry":{"type":"Polygon","coordinates":["@@lA`YdACQTO@O\\CTPrGh\\XDPPDXM`ZHRRhHPLxUVDFRdFGZrBhMxG`H@`P^WXJZWKKdKHK¦MBOMWjM^F\\GcYIa\\YhM|EAWQQFMyJWPO^E^DpUPFnC^DRUjMlb^k^STXVQLVTJbDTO^}@YTgkKgCeH_PUBR_Hu^cE[}LOWncJaqYaDa_DOiMqJSYqQsIIH[EOgCkICmI_T[CYP[EoDeL_AgFUVeGML]I[FSQ_VFNEhSnAZoGSDAR]GHGPW@edB\\OD^t_N_Bi`]CWHDRSbgJAhz|AT\\\\DNZHDNKVRJpEze^HAXSTHTTNQZEb{f"],"encodeOffsets":[[15772,47774]]}},{"type":"Feature","properties":{"name":"Pomurska"},"geometry":{"type":"Polygon","coordinates":["@@dRvJBS`M|cGfOJS~UH~]hvOjJJAhJbAVJNW`VRVIjV~E\\^vPXP^KDK~ERLXCLNjJXA`N|E@NSTKVAVWfGOwMAgd@Uo\\KbaN_^LRSUOZMl@tGOgA]U@YJUUNijKZ]jCNSRGngAWdGPFVW@c\\GQWRKQQpUnM^USK[NmCGJe@DRQLaDkh@DR_LYGs\\U@HVSFGQgGGWeCSGQWDBSsM@QaCSIKUURSW]T]lkaiNQV]CmDOEoV]C]FOPIXzENRRBX{FgN[ZJbdZ[H]EiNNXAP¥NGLcLLLYXWI]X"],"encodeOffsets":[[16166,47829]]}},{"type":"Feature","properties":{"name":"Savinjska"},"geometry":{"type":"Polygon","coordinates":["@@`EDVIZUR]tPKtDTKrFr@bZBJN\\FHRTA[PDnGtCjQLTvOL[\\Kj@PF^COc`GFEHrj@Z`dnHt@TNa\\DVhITaCQXG^Dj_`A`M]sPCA[fcX@HOG^HBQTCpHBYTmFgEM`UTR\\E^JNKfHVUhE`BfKpC\\FZO\\D`SnJTaMKAUOScOcDFRqFw@wJSKcIIKLKEcc[iMCKRO[GEKbSK_BQ\\gTKTHZEFWnAZQxO]E_OYFYCO]Q@c[UqKCLbV@\\sIcBMtSBOZYFOMaTYHkI_FSGw@]P[IUJwAYDkMcB[dcQeB[RSKUJ[O\\MPWAULG\\B\\SIGuMORL{JsMYDUBSZAXbD^bRNbIb@XHALcRfFdOX`ATUZ[JDPWRgAHPmlQFoOuLSJSEsN]EOFW[@SRWHARVV]ZeFONUD[P¥JYECWJDQTTVANkESDHTEbaHibBoKcDSImZ@J\\JRdBhC^nTnBzJ^L"],"encodeOffsets":[[15027,47566]]}},{"type":"Feature","properties":{"name":"Spodnjeposavska"},"geometry":{"type":"Polygon","coordinates":["@@ZCtN|IKPQvNJH[T[AKHBVOX[N\\PVITL\\QfAdR\\cdAlNZCxBVI\\J^Ox@TH`ElJZGbSPNZEPYTANsdAtJ@[aUDKrL\\VdR@P^ZDZE`P^FZU]MK]AgOML@{UagSJcEKDc`KVWKeSOS[XUBSNsNUNSSqFBUWYuCQT[GOU@YJK[IQDB_GI\\eNKXN\\[`jLWdDN]L]C_HTRCzRRcPATqJMSkRYcYTOUWOeG]HnenXNB\\]McB@NgNSZU\\@P"],"encodeOffsets":[[15451,47146]]}},{"type":"Feature","properties":{"name":"Upper Carniola"},"geometry":{"type":"Polygon","coordinates":["@@TNJZIX`\\KF@bZLC`pK`BvK\\MdBdVvExR\\G`D`M`Ev]hGdW\\@jXKnCxO\\e@OzaZ@`R`G\\FVQX@V`IRQrDZJpF\\AxPh@DY`YfBxSf\\VEdWFO^eAMRK@IEGmAGKZKASQYbSYSKSruHURKm]]cyWCOcEiFSY_EgF_EBO\\[wSWMc@[MIOeMAYRII][@¯V[SiA]QMWH][gk[EQa@OUQIe@ebI`QGONKX£lOXDXRVVLHR|@TN_EOF[EWHITRrVDFPCZ_PAWIESBWGFkTuBsX_TYBSZQFWfl`GVF^TfTPTXkVAjbeFWXmSaEeMGHN\\"],"encodeOffsets":[[14013,47552]]}},{"type":"Feature","properties":{"name":"Zasavska"},"geometry":{"type":"Polygon","coordinates":["@@BQXGTQ\\@XPE^FtMTFTIvKpPREnkGOhBXQCO\\IVYBSW_cPeEdQBKWGa@aJQM]aaCyKmSyJLfIZXFHR]fwWKOeK}D]DEy@qEERRVOFSXCRFXJbE^\\C`PH"],"encodeOffsets":[[15267,47317]]}}],"UTF8Encoding":true});}));