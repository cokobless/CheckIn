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
	echarts.registerMap('countries/es/es-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Andalusia",
				"iso-code":"ES-AN"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KGWBR^RNJADG@QMI"],
					["@@TS\\eVKP[VI\\ORJNdORONeh]DK^O"],
					["@@TIA[HSKMKT_R^b"],
					["@@NLHc@UWPB^"],
					["@@POlBfOt[MbJV@BeII@UQQO]NQ~CRDXeVCpLRGPFXC`FhIPH~B`[Za\\[GQEcJKVANNhBdKEFStDKJCRPVL@bXQRRHPEnBpSnBTkAUHM^UVATOVKLMnG|ELOZKfHZBPMCMXGPDXRZFn|HX@vX\\AND\\MVBXNBNIZjPdGPFN^DDNTXEVcRDdffZN^DFnFHdFLVTD\\GJHbFLEnVlI^\\\\F`WVBHMRF@UcMXY[SKOaFSUJUFynMbFrfDNlbZZ¤MARXVNETDRXRAArD`fNG^DTCdKLHRWRMT@VQVC\\YLIPHtDjeRB^FH\\z^XnTXRLBTOPDHPPAHfXDphTALRRANXELXLCP`LBZ^LNbXBlMXD`EAbRJPXXBVT`H@NTB`\\ZDPfrO@``DIVCZKLEX^IbFVEpFdQtTP@jX^GRBNMRGLMB[OtIj@JH@RICKFWA_JOGOPerKZUnCTDnUZAPKzQVDPUASlKd@HKfQNMRAL_T[jOHNtUDMdHHS^ORBNMJW\\IFKZOR_TSdBLK^EPSXH_SVQZEZK^FKtGJDZTP\\FLEtAM\\KfEXJXCJIbFbCRGfFGlOVDGZFBPjCpdCNFZlRNA`JjAvURVfQÄWvSnJZNAzFdb@^IVARWAeTMdAVGT@\\KjDfPPA`dP@ZTZLGLJ|vFnHnEPQPARQzCKE~ShAZT¬|ºÁH@R\\GbHL`H\\bNEfNvMLD`]TBBNVN\\H@HfJzf^L^FALRNHT\\M^GLOtSJE~I|VvLb@hS\\YKEGWR_GiIGAYNUTADOB`QnDFKUiNcNICqGI@cFMOJELgQ[BiUiNE@oaUUaKEemSCYmaS[YJIrSdCp]TFZIvORS~EhO^@dFdWtW@WfwXSRGLS`W~WnYZ]bFVLjF^SRW`IXT\\C[bXT@NM\\IGQUMMWGeFGI[O}FINHSWOIgD[C]Ta^ULQF]\\aTGDYlq¾×XU\\qkEf`BbKGveos_II[eBOIW[e[QSW[QGMSIGMomSAO[i£BeUMIO_A}Y_IWQGG]DOUKAYWQD{DOS[QCcJQIUS[qaDUSCMOGDUGSTSKKCQcA]O_[UMAuY_@EWWCCaYEaBcOeA[JGNcdvsZRSA]OOgGsb_LUCKKWGm@QKyEmk[cKWE[Siig]WoKsU[DsAiGgPWV_L[B]ESMYFil_^k\\OF_@wUWCYLcE]LAOAJq@UMYHUEOJuBOIRYAkOqOUHmEQK]aUG_A}aBSCWHofgPYEUM}RijmEJ__wH_C_G_TYEGKSRQDMNNGWOaDsE]oNaNwJQCLeGcaSE¡IcI_@E[CHUC@YJJaKOBC_[AiKGcek{S]aOaY_DyOm_OWYuSYmB_Gm[}E[EkF¥XyJ_H]BE]KO@g[mOeODkAmU]DQCuaYI_A_WSCSFQIW[SOOSSOYwYSAWSM[KM_UES[e«Go_HGNYJUBGVa@mGUQQYRMAc^F@YU@IOKgFM^GBKMM_OGMYIoHUIeWkKgS_M]EkAQXmnSNgLaRMB_QUB]N_Hi`[BKOMCQXKBKVKBapUXsnjOPeIQFQO@uPaDQKKXUPsSlWdeb]FWCOVqªU\\[NQPARJRO\\L`PLKJU_ASQCUl]^QjoOb[DENPHpYL]XWOUZi`IhFLHLTZL\\IBfCVPJKRY@a_UFYM[JSVATnIPvDdENQRSBiKUhUX[NSAILyHUKCKuXWPFNKbKH_vYdO^EbVRX@V^VBVJnXLIJoGsPWvO^Odgcp[T½nr^±|`gLeFKNXI@iZ{nKBOZBP|LPjfLNXNPNF@DF@LAHCDKHYUUe]amcmoKFKZCZOj@PRZMNSyHOQKMFKCEOQKAKZGR]V[JS\\WEI¿|uR£PiAaFCNKrHxEr@XK¡Fs@yCėGcEuKcuI]LKCMRKxBVOdWP@ZT`QVSlBrI`LND\\GpKP]RDNXBDHWTAZDPSZETFfcPKPAXkP@XU`FL\\AAROFZPJZK\\\\AHT^X@V^VJZNJGVJ^GRPRHXHDLZARPDEVRJHP^CVRPT~ntZXdNHJbPHTbCjPBL\\\\VERRnAZYTb^^@tNJJ^AZS^B`P^@B|VBRRTFPIzWAMVAPIhVdGR\\GPDNTJFjC`F\\JAXPCHZfBpUHPbPRh`FN"]
				],
				"encodeOffsets": [
					[
						[-7021, 38173]
					],
					[
						[-7066, 38047]
					],
					[
						[-7151, 38142]
					],
					[
						[-7139, 38140]
					],
					[
						[-7097, 39126]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aragon",
				"iso-code":"ES-AR"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@OXjRMXHT\\[pFdOtL^_f_fOzG\\\\\\ILHTK|Qfo[GbLJRz@hQZBhGVNHTVT\\HDPKNXJPh`jTTDLVTp^DTSZDP@[jA\\hLpINFPFbETeXGTBTbp@VTnQZ`ZPXpp^LRTOd]EQRb|DbvttPPNRdC\\WFCr`jPZ[PN`@CfFVfXFkPBNVDXKFlA`AtBlGjBZF@`PVObVFFNjCJZRNAT\\HRdTf@AbLFhIVJdnENSLRRKv@\\`LHRn^GZ@XdNd\\~FXIfAUGB_^Y\\CTIPHjMJWZSZCb]dMF]CUVG\\LPAHQKOFSbEP`\\CNPCZh`LANSRALMtIROrTVD^QVD@LfTT\\hPXGX^HMVG^APQfSdA@Q~UVEROXCTJZDAORQEMXE|EOJIhAHE^@No~G^KfBpbpMlPNV\\F`MxLLLpLXLTDnMjWpBTCR_KOTEna`PTDL^APnRZT^SdAFWRK^CFEFXNTC`Mh@PRbBrKhAJTdM¦MXSJShY@KPWIWTQRAjMNDpIQoCcQYBEmgKSAUbIokOPOOAYX]EQJ]`QT]CWZ_Y[UKpQfAKOeUFU`AJEQSBGWOA_IGBYKiSQQ]DIQ]BOUs`QeWBoJKC_GOSMOeSY@WIQM@GcTUOYOGQQKMWWHqmK[UOMLMOq^KCOuM@YmFIIB[Q]gD]COMGM_KQ[ImICaDSG}CQEGeUFWaGSuc[]CgLEl}OOHmGTEvTPcKM@YRQN[UQQUOIiuUIaCiDWKLKGQPQPIWaLOKYqimde@M[ISUJOXEJKIUHO`cQcDIGWSKAWKCcLOOSDSyMUEkWOeOY@SSCQ}BaINSO[BehEEcXSJQIKXIJN`]DaRcPK@UZIQMG[QKDOMOMAMQ@YEUS[^QIcNOFSd][UMYo[IeaAmaYJC]IOQUcGiFULY}o_HCZHLYTALcDiAQOcJ_@^[FaRilDVgFKCuC[cCQWGM_AWOSLQGUDM]@YMaGweSDI\\MFwE]IUUVUQwRSVD`InOTRd@BiKeFYLO@OMYG]HWZDTUIQRSmU_CyQM]Xa`OTOLW`WJYeW]GeaOAAWa_kEi[bcA]ioQS@SH_IOIMHQA_Le\\GMQAWKWOOCOHUAOOMAQOOgEku^}SCGNQQS@eagMeDaOYFaEIPQIAUIkmgSDaScEMSJMS]NKDePat]NUaO]CUQcMUQWJQ@m`CNJXPLORKdV\\Ob[VkHkViN]BoONyIMOYNOC[SELYFIbaVCVhNTCZLJ\\HZ^@Ra`odkHCNYVSB¥K_L[C[RJNAR}rORCVSdFNcEKIK[@[LMEeaGeYM@CR[D[K}PWE_LNZD_GgSfWCSQOCulIBkp_L~[RMZ]NSPUCS]BWSGOXC^RTpHopiRuURWJ[DF`NFPGRbz\\R^CLC~IfXtEVNDXZPSEJG~[bPvbVRghT`LbVVCpJL_fO\\CfLZ`TGPHZ@XIp]^W@c^IPSNchIhTRPhSbcRebMR[L|kfOBERUNDN[XoXOVkJcN]B[LS`UTUDiAUHazULoMIGiIk@cGGKubCPuHREKlCdMrSJLrEN\\fMd\\BfZLBLVA\\J^AbJRRLDL®WXMBmQOJOTIhDPP\\DLLXAbP`AAV]LJJGbAbYb]PHTCPHXEVVhKXifBrPLRGdDMTX@N\\VDJhRJE^pANHEjRX\\FDdTPYRUAUHN^e^IZ[RYBRddZNVCjFFIZSCOZDZejCpHHC|", "@@jIzGrGJP[XIZeRFPWFSOm", "@@HGtRHJHdLJOJSSiOFMOY"],
				"encodeOffsets": [
					[-1901, 42974],
					[-1156, 43466],
					[-1216, 43423]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Balearic Islands",
				"iso-code":"ES-IB"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\VVADKX@CTXLTVHS`]T@VWBS^YfUfMHHv^R@Z[D[_YDORq^_LgF]AKIK[SCUY_SQ@CNJfMvRPGZKJ"],
					["@@RNNQUGIL"],
					["@@LVBTRFP\\cXGPbT\\C~HPHXKXJQJCPWPVX@\\GJlh\\JPNNCHTfXDUTCVbZE^FZ\\^WXb^FRLLIRHLMXJCTfDNFVCIQPC\\W^JhCVMGIBUSBEUHQbY@[YKCOS@EYKWqDeW@[GQ@YOCUFI[]GWWQIULYGSY[FWYQcJKKgDaUPQDEOWBBLSh_TiOQJYFINsDIAem[b[NHRQLGP"],
					["@@NXJ]WF"],
					["@@IGAUwNCLSBHVfGXTDV\\GNOCKY@FQ"],
					["@@MLHNTDM]"],
					["@@JT`TFKOS_G"],
					["@@XJPPXlNFFRGrNRSZDDJ^LHKbJVOVCbPfEjPLOZGnN\\dLQJeRJrH[kDKfJAjGVfBLIJeISXSjAREG[lSxHVKFSGaXQZcMM\\cCMREHUNAJadGcK@R\\LSRCXYFgKMBM_iaKTWRSBuT]V}^[HuVg\\@HbqTSCmRqFELWIUDaGWMMDIHUEATDhPRCPDVE^{HKFBVIJ"],
					["@@FNPHHNTR^@bDL\\PxP\\VPRVLHNlTTPXEhHdXNDVTFNp^\\dHGt^CJLXRL\\@FNTHNNpXZ@^JZNAVNLPC\\H\\AhLTAPZbDdVDHbNXAfNJRXJdOdBZZXXKdFGOdCfZxGVPDL\\RbLCAUYM]Eq[_JQGCOgUcLSQC_Zk^OhJJLVGzXbPHP^E_MCgRG]_OIO@mGKL]IK]HcZejccVE]`ENLRAjdHTVA^ZLviVIh@\\[RBTOjDBYKMFIf@@USBMKBaI[DiWFKQE_OAkHMMYFS`MQG_BKSDMuaOCKSQI}wCWWeGeIKE[]@MSa_euOWAK_]O{ACOSGUAQUia_aQG]@O^WFYXBT_\\OGQFCPLF@RKPe^WH_DgEUKmTUEg@]DYQUFYPcGCLYROTMDYXK^PnM^UTO\\\\RBPVLHNOX]ZSJOA]VOR¡`WEMakDWaSEa@kMAYMOFG@YSYIaiFCNkRETHJYHSTV\\AL_ZmSIReA@QcKDX_DVNWFKVUFEjQR"]
				],
				"encodeOffsets": [
					[
						[1414, 39648]
					],
					[
						[1451, 39717]
					],
					[
						[1243, 39836]
					],
					[
						[1236, 39920]
					],
					[
						[3031, 40079]
					],
					[
						[3035, 40116]
					],
					[
						[2359, 40523]
					],
					[
						[3882, 40977]
					],
					[
						[2401, 40538]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Basque Country",
				"iso-code":"ES-PV"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TCbFNMPHFXLFpO]X@LSTMRRIJFPSLDJ[RGLNJjHfRNPRHLTjCJJQXRRFGJIhFdCHFrAHLXNPAbJPNHUZe^AFO^ANUXGNR`CbLTICOVOTGbHVOZA^JTSBKTEZHj@T[X@HKXKZ_IBMxGi^H\\KhBnGRXPhIdO`STBdJ^ExVRpFbP`ArIRTTFTTXGDZZh`tJ\\JJGOOFUVSSQ^INKdABO^GGYZikE]Me@SSC}WOW@MU]GQ@IKYA@R[AL]YHEMYHOMIWKKCOP]I[`MFQ[MOY_MQUeEW[QUOJWCMiaB[VcSc[IAQEQm[OWEwFSK[DSTQHWCIYaIKU@sUBIGXMDqNcESc[]OCGB[WUJQTmKQQUHM_V_CML}ZLNQB[IGUDyMYWFHLGPYPuH_]gM@W_cJT{fDTCRiTP^nPTTMZCAQHQLSKD[LYcAYGAYFSe@SNoGQIDKN\\bMNMUe[JYkB[VSW[@HMYACJTZ]TKM]@IK[MIHKdkRDT{K\\rJfDxJNwLWLWXeLMIOHS_DSOceKCM_BGYc`GVdNLTKFH\\]K[RJZ]PUBiTMLGXJZQNBP_HWVuD}CCVeHYdiCOTAb[IYFQK]T_OEXRPhYXePXVALR`NBJX`XPfOPYHq}QG]@cZesYKbUWAgXa^{nGTTD@^zVFXTR@VVL\\KJFtCXIrIK_VKN@NSdDHJ`WfJVCNJVRNP@LPVJ]\\kBEPkRDNMXi`SHYMLi@oPQLNPxAINNr@TaJTX\\XM\\UMcLYVjn@VjVMTiHcQeJeCYT]^wCCKcKYUoMQBQWgEeWcEUGIfS`GrF\\U`I^N@XLXAXTPINNDTNPdJLEhLEbXLTORJdFHSX@VJ^BPPlJBYLSREHNZPFLLDZIlBX"],
				"encodeOffsets": [
					[-3229, 44394]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canary Islands",
				"iso-code":"ES-CN"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DXLBD\\GXj^ZAFMZKpEZ@~RdVPTbPRTFNGX^Nb`\\@FJbFPAfWJYVU@QKGQ[KCOYBI]qCSIGa@QSAqQSI]DmOQQAQFELWFSXBHQXWTULiHY@]HuJkC]\\"],
					["@@XdLdKPRHhB\\NhjpTNRVNZfAVF^GNTTG\\NNSLbZRM^KZPLAVPPI^eZG`DNED`R^QPDNITAJMNDVU\\BRH\\\\AXSLHN\\NfDHKEgIDMQSB@iZ_HYK[FQK]NOEMTQhUBUX[AIPKWQK_NiJUWSCiO]RgBQIOQDIOUCQaDYCMOM_IYA]I]AiWQBu]aGOYA[{Ck\\UESJgLUCGIY^ENQAINUPSHOTSFW\\[DSVSLGXOPOhKLK^_b@ZHTBdKj"],
					["@@HrHPIXBRLJT~PLFVTAPJNAZJLN\\ADG^QDGjBbIZBPSDMPGRHDQhUTCtcCOTKEKDgLO_SGSSC[QEQQAQUeMIMYE@G{FaMYN]AEP_LALgNS^@RIJSDMXOJ"],
					["@@JDAXLJ|HbVV@VXbLvaPBLGxDZIXT^GDNRD\\CTTVELVb@LIRFvI^@JLVARLhRHJXFFG`@ZDRJN\\P@\\HJNGJ^HFTZR^ZHZVjpjXJZAXFTNXF@PHTXDDOTFRITDHLXB^O^DdKLnZ\\HjKDKRILiMICSSIIUYDUIUOOASYMF_SaESYAQO]YA]_UMEM[WSIaGYY[O@QO[@UN[FYE_OI[[@QGY[aCOmHGMWDIOsRIKQOBGQi[BMysCQSEGQ]SIOaWBSD_EGBoSOAKSWIIHaBYScFOHGNF`I\\IP_DMHHP@TK`UJ]dGAUTUfGDYpCXSJ_nE^MTB`J\\GRcVWpSH@ROJalYHQ@"],
					["@@FrNJDPN@RNT\\DTRFb\\NCVPFLRHREDQdK|OTFR@`FNAbLjGP_@KV]D_^sPGRoK[eYQWAUQQ@OZiCOPgIOBiMWBWU[]WUsWaQOMcMUESUAYJUZAVMTAZB^IhGRQPK^MDIX]TDZCNWfCPOTcbDPUORATOHGVMHMV"],
					["@@HNXHNLERPNAV\\l\\WZ@TWGKUIEW_gOBUM[DMCGN"],
					["@@P`\\JZERUGM]UQDMGMFCT"],
					["@@PXRHAjFNTUZHPEh@°XdLZNzXhXNPfVf^fZHNh\\NVDjJ\\@TIdN\\ERLfvfL`RL@lNJEXN\\BVptVJb\\PbJ\\ZfPxzJTIdBPVdDR^vEjIDA`ZJdTXVLGrZX@VPPIXFFH`FRGHOPDAY`MLBN[BKN]GeHW@sNwEMHUOcHMESFKUSDeQ[BOYIMIIYR[DkKMJ[JAH]S]OmSaGeOYM@BUGCI]LUKQMGG][cQOYK{BSAOS[QYBiOe@MGMS@oQYAaOy@QMaIYe]scWcmcYgo[IYLS@WJMCmLM@oNkRuHoIOI"],
					["@@nZDOIg]FIX"],
					["@@RR`FBPVXLBX\\KRDRArHLERFhXfBNdTDL\\PJLZDPX\\FlN`KLV\\DVXbRDVbBHMPARVTBPPhEtcTDTL`fDvRTb\\N^XBQRChOJOVCFM@gKSCaeQU[MK@WRWLCDYYyKKFSKWLSKQMA@QWYO@YMWW_GGKWOsGKBgOOWkKOM_EeFKcSWCY{[]OW_QCXMN]@_JUOMLa@SKIRDXMT"]
				],
				"encodeOffsets": [
					[
						[-18596, 28383]
					],
					[
						[-16214, 28642]
					],
					[
						[-17765, 28774]
					],
					[
						[-17332, 29023]
					],
					[
						[-18439, 29449]
					],
					[
						[-13873, 29928]
					],
					[
						[-13856, 30101]
					],
					[
						[-14857, 28742]
					],
					[
						[-14167, 29442]
					],
					[
						[-14215, 29579]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cantabria",
				"iso-code":"ES-CB"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DJrHRHlMCUOSSIBWEILUeM]NLZGVFXYX"],
					["@@nCPPJnMbBJRC^PNGJVPDPW`DHdJJJZCbHfGlTd\\jXPKfGdAHGCYdC\\RF`AjMZHV]LNbjhCZdJNIXDNGrNVG`JlCZIXBfV`D@QVKBZGVLLZIVLPCjLLGTLlNdB\\HdRFL\\CjDZHXAfXZOhHrX^\\TATJ J\\C^\\HvIAQV[UK_@WWIc^Ka]Z@tTMVRB`Z`LCJhHRZdN`GPDRP^H\\RXCjD`^dARGrALGDSlBDYbSMHDdILe[MUALU`UF~KbH\\@PYVNVAdKr@QJ[LKV@RQ|]PDAWJkCYKKEYOGMQFKTAZkIOO]AUIW@GTcEQISPWKFagKKFcIMOCSMMOJWSWBWKM@J]V_E[HqT_Je_AJoE[BZcDqJeIQhcHkPESWQgsagWG[QuIKOFMUIOD]GgP[KkDKEJQZMAKw]wAiu]KkIUO]mgZYFKEVSNJFV`RbBHpbBHJx]TYQU[FM_OIJLaU_QGCO^@jQVLIJA\\V^xWVSOabaEOHaKUYUA{dO_OCAe_DGJeOaQ[@ETcBHdAbGNBTGXOASUN[S@QIBOWIMQHYsMSBGVQBKXDNqFwIofSDCNNTZDRRVQddDVYDSNALm[QBe[S@SLMPFNA`MlRP]LCNCkR_@YHQEaFF]ZW\\@PWTETQRWJiLYV[B]KIYg@sRu]L_A_TMKaKQM[Hk@QJcBqQYFKVV`SPq@@hMHZsXE\\_RRPCZLBHXGP[LVR"]
				],
				"encodeOffsets": [
					[
						[-3385, 44292]
					],
					[
						[-4957, 44218]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Castile and León",
				"iso-code":"ES-CL"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@nI~WFQIObBNVRLddVChNtDzBVKbLJORDrCfI\\@HPxRjQHRRJtB`PKLP`cDoHGfMTVTKbTCfJF\\AFRKXpHZb~]FWIRRTK\\[jE`GZdGVNfMHI\\G\\Y~RbRKVLPETZNZOb@\\EbOpJPP^EL]ASTUFU\\InWNSlGFSpD`[tBdEbFXCfLK\\NZRNDXZJBVNTN@z\\JBYNM`EpB|EJSX@dIdRbDZOZn@T\\ChHE`IXDL^Nr@FS^K\\LnMR@\\TzBRG\\@tTFLlFHL`LNWdClBNLGPPbEV`dN`ZCLR~DXK^GBVb^NBPTZFNTtFNThBlSXSEKT_\\MCQUQ\\KHOGWKADYQO`QF[tWYNG@gr@TOU_LUZErRdARIl@\\GRNbLNL`S`B^KvtQh@JZ^L\\AZUjKXIRQFSXS@OX[^YEbERFZG`@lQDDM^KQONkB_EMNOTKT@f\\RAn\\BKTMZCCUccURQQYCMSDMTCpexJrECMLWRAHUTAtNGZNRXJAPRJT@M\\TVPBHWASHMBaGcdAFS\\@bRfPHI`CBfPDP`|cVBZLVGbFPabPbUTwXU]B[JIUKiR]@DPRHV`KbIPJN`\\ERVSZw^GIaAGoaA_QEUMIUTFELYZh^nVPlJ^LjvxBx^BLYNIRLFlC\\LhO^HPCVJENLPvJ\\RXHbhhtXRFTlOdGRgfJrIdCY\\ApFI`BVHdFfXhFRXRApNZVdLDLxD^]ZSfDfIdRjGNSiU@UimZUdKVNN[[WSWbI@SMqJMwBMORKpOj@KZNTGj_NWCMlQFOlA^[UIKOO@QMIUMUDeI_XGIcCMTM@ULL`qJWJsDIE[LUK@USQEWyU@]SCHS|mb]hWXBaVZLftdY^@RHr~ZGPOOe_WIWMAQ_BKWUfOZWOgWQF`P^SRLZE\\JBaPSjDZcfGDU~DvCXU`GAORMIYHWNKjSVAMIWCMMSFWA@KgBSZYJoDUKSN[DmM[F{A]DFSIG`KL_B]mQHQKM[OCIUEgQRSdGPPVDdUIMD[KQYMHYNIRDTIFQ^cWUIQLOM[V}YBCL]bHfWHUEJWQeTEVDV[VQGOiEk@C[^WU[HGNk@QNKQSTc[YFOIWqYFOTIBQZMZYAUJ]hA\\]dVFjKZHZGdBtJj©F_jINOXH^TBLZLlLPGbVFbKhRPBdTJNTTB\\MLNV@zeGSDSuuGU[YEYR_hNl@j]XC\\NdC`F~IbIHTVPZPRR@j^O\\JRHpfCXMXR\\BXbRJD\\F²H^A[FQEYXkVAl^\\G`NXEtFEPI@aOKuONgbUTUXGBUPQGKYAT^KRB^K^HbIPOTX^YXCFOdWhBNN\\ChRN@PX`D\\Jj\\D{GGDofiCYPYTDJYEEDiMUcYQcZA\\QJYf]M]VGVBZQSOCc[EQWFiMGB]oIFgQCI[U@MSWNcCQHOKAqjeLWUgFUGWDOGS^OZaBaHaII^KBU_BaOWBKK[COOgCSJIPRPAnWN­XCKQKIQBaI]B[KUKAeY[ANc[eFMKqTINqDcLkFQvGDOvaBkYYFOKQRWRKOQ_FIRYTOBiVUVOFM[qOOWTSH{iESLQKkQMVeVKRyYeWeCcVGNw@@XYxwDCZKL@Ve\\MUsKOKgVDNRJNbsVaK@ZfATRHTIVqIMJY@DPiR[GoNcRGPE`[G{BKCUYCKsHaBgRUDaNFNCTMNJ^ORLGKWEWKS_SKYDQWJYMSVKGQPaFJqRe@OKU@YUBOakgDI\\USAKYASHW@WOgF[HqEG[OQFO@[]FOCeBaqSMoMMD[_YFYCc@WI]BOKQ@[KEI_SCQUKKY}m[AeSKOUGQOGSYauw_OBgKSASOQHaOGOQEGWKCIY_EBW_kTKGme}F[KSUWBYWCaDYKoDINmFQIASc]@aeKUcYWIa[G]YAYHEDcKaXK]MeGiOyEeHSnaCCcXIIQKiK]QG[PKEa@JSgwCU`WSQcJ[KU@uHgIec@aIEGNOCYB[KQL[riKPWDaPeYKWSCYYMFcLEA[IIYAaYBUI[BQRoHE`DTMJNR]PN`ER_ABIgIQHYUOEaHKJgJ]gTi[I@OeWmKYMEOOBwcUEL]MgKCQwKaKOBNjSbAVaCQKe@QC_[CU[FGQoacUHaKURB\\IFBaDWCeBIEcB_NCRgpGVMFFlEdHHK^VRBJ^]@EIc@cO_JeESeoUO__CYMSFkMeFf_AQRJRS\\sFURFXeTcZ}A]FMKiOyLQTRHXX[k@}oMH[@QKOBSQDKWaa]c@GHoNEC]RQB[L]dHdiD_A^LLVDCbVHILZNSN{XWA[LT^yFOTCRWDcR]`U@eHQA__QBMUaEMKGUICKe_D]YMcASFaEKO]SDO]EUDWEeO]oeI[RUC[[W_OSBcKgAOF{IMYSG_JM^OFaWMA[S@OmNGHi@BMaBaHKPMAc`FRCdpbnX\\@\\TEnZNGLQFaZELQJafW^pZPL\\LR`LCVMRARHVkPWLUDRfCPdf^nNnJLSLFVKhKVDRgtATL`@dRX@TMV@^TTVHB^OnSCeRUZBnWt_TUXGR[RKTWFS^@ZbRZIMDrPBRfX`hJX^`ahFX\\J\\R\\^`NTTZhENXZRHVVPDJXhIPJtJR@@SLG|PHX~bHS^@hTYTDJjXVGRDXL@TJL^JORV\\pDZL[\\F^\\FX@ZQVDvTIV[LNTbF``U^TVRJF\\\\PLXZFMVlRhnL`n`YhQJgJKFevnYL«^gEiHUHgC_JWEI]W@gQSA[J_\\iVIN@RVAK\\KFGdMbTNALXhDjT`VGJTVCLgBNTZF^XjE\\s`]FS]Q@SOeBÁQ]JWAqNaCRaJY@YHBoWowEiL_QuHB[rkJICO\\X^\\pDTQLC`gGY@[RSFEX\\RbHBRVFDnPXZCHJ`CVLJpX\\BXXGLLN~Z\\B\\C\\ItEWdP\\NJjFD`X^ZVLlKRN~qROEO\\[HFENSFSVXFXC^VNDP[l_HUOUDaViJcL]T}CKIOgO@oVqMGNgHkCJXRXAPSB\\fD^lZSJMRJLCzdI^aVERUVRLPTf\\jFLQ^XGPJTXPT[VAjV`pVHJEXZNDNVJ@TOFQ\\YrTI^UPGRrB", "@@JSfJDTCFTWXeLuWYU"],
					["@@^RFHE`^ZH`TUPHrH¤CXDnUNBTKZDXO^@DIbEVLnGXQDMZIkSa[W[DOSAS^Kb_TGhCRfdEAgLU@OmOcXOIgN_A[GYFQCaZCTMDeEgL_KGOa@[Hg@EVOTKZUA_R]DEV_JENSNWD"],
					["@@LVfQAeWKORHLOP"],
					["@@VTXYaMKT"],
					["@@LF\\EDO[AOR"]
				],
				"encodeOffsets": [
					[
						[-6987, 43946],
						[-4428, 41634]
					],
					[
						[-2937, 43766]
					],
					[
						[-4211, 43845]
					],
					[
						[-3015, 43627]
					],
					[
						[-4282, 43849]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Castile-La Mancha",
				"iso-code":"ES-CM"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@`MdAJFfAXDbCAJEA[VQbLVGdpbHR\\EDV`\\RDf@RLbDBUTaMiPAbLxLDRLNhK^VFxdPAFPZNnLfX@P\\JSj^hhILIbGPFZVRGhJAJ`BFQM_^OMQNICSF_pGRQ\\AVJZAbHSO`DF\\jLpVtBXL@jTFdXVVZLBfPPfMA_BoZcH[^KLMTNJWTETR`JT`HVX^dBrKC\\FNXPXG`ohKM]VIRHVIbCbXNZTChYtC@[hc\\Q`Fd@NCGWRIRRRBZWpEdDVE^SCQdOz`PE^WZovM^VZHJInSN@LNXETUxOlQIOROOYW@CMFe]GAQWQOHSI@Ic[eFecYaWCLU`E]KUDI[WECZeIEQoL_WAQM@AV[EoSNYKGLOpCVEh[RDdXTXjRZZBP\\FhV\\Oj^`Jv@HFMh`FZN`FHXJj@RPJ`XLAHK^NNQf@HRPC`URBATh\\INHT^@tLPC`UR_dAVIFLT@PJVIbFrVXTDLTFFJTBLkjMlC~TxhPRIZWVOVgRAVRTXK@`QhNbGLF\\MLE\\S\\HPab]K_[aSUUGUQRYH@TZXGTLZ@jf`RHTvST^RIVRFJ^WNQ^IZm@iFCHBpHRKdFPCVaPYTsV_MYBKIOL`^MLJLARYD[JgdDXNFKRSJ\\JF\\eOKLiLFNS^ARWLORMAIkSDKRMQ]Lg^CJZ\\ZVFVMJETDZKVc\\e@YHNhRNLVEVRPMLRHIVvZFV]^\\LIHFTZ`APfCVpZENqfM\\QFJfPZGTeCw^YCGLG`]leFWVHTEHZDZE\\`NCpNTNbrfAPD^E@\\EPPRH\\rF\\GhEXPX@TGZBBLVTJ[hCblAPZVV@PLf@rQIbEROLHUTZNXIRZCTLT`XLXFHLKPQI]NMDSEMbMVChQbAtGDLVZLD|A\\HF_HOdQpM\\HjQCOZ@NIrJJUGSSQeB@YbLtUMaQICMhUPLtLNVf[@ULKDYxCZw@Wx@HMdUfDfXzZLQfUNUlRRLTKjF|TG SPXrPN\\PEVUjUPAZSJQ`EPRQLQXLREPZZAlHLdHl@jJJHpNVKbyVGjBVCVST_\\K^AdMlIPUpW\\WCMVMFQPAle{\\KNQfadQTaOgSQJgdgTMJOd]X@^]Jo@WGYHO_SKYDeP[`eIKDoUUKaS_hgUQuaaO}\\IHFOTWYMCFUWsJeD}DK][QyQaOHMEE_\\CXIVQvjQpooGQSD]PWTHAXT^VDTO^MNY\\Q}`KloJAvkPDTRXDehT`HCMYQSBG\\[\\GlYYONW`eHSV]NmXG|JNGInSdETFJPAfRPADUbUJaUO«aEgPIJSGi@UkAeGUKKYi_SuJO@cR]ciWKkCYFaPuRq[UeuScMgS]]OwIBW]AbaI]AWPOW]FOIM@WUC@[`UTcVECMPIPPNOSMTGJTTCQeZABUhPLNRCXWfEHSX@`aTBLKPPTB|QPKRJfMSPRZWHDbAZIDGEWQ_EBaIeUaE]_caUG]So]O@kUQDOEaPSNCZQ\\KdgNYRIfi\\Y\\sALxFLEpJ^VlMdDBaPaTWbOOYB_IOJuLKOYAaJUiOWALaRa^mHYZU]_o{CcHcEaL{jULpAjELÃd[K}GkM[Qim{YaY]ImvaIeOg[MQgeJYImG_KiYUTaNsDoHgCsFYGSEc]aKSSMqYeB}IFBH]VQfRDDZKLgLIMkTQNUOcJ@[u@ZQuIU]kC[KWUk[cK±UgKcDibQAgN]QY]Mc_]_YqKiE_IUSwWQe@KO]__IQ@UU_waMc[]FGcE]@gP}FQTuPYJSEo^cDqTIJ\\ZbTZnTDfnLFVbbV@pMFVjAjR\\KhIFPEN@dHJDrMJMdVjELmC_RACPSBMVBZJHHjQ`HXLF[ZgTa@uK{U}JIFsTKP]H[NGSQMBK]E]KyeeI@G[GUMAMSA_^KCuNeMMF[a_GGKHaQ[G@¹Â«{YSgB}TFLyDQROBORmFmGuEI{HKYKYSO@_cOBeOiC[LS@UHcBSNBfQXUB]Ja@EcByYMmIuTÃXeRQUuViB_IMBkQEYDMociDOAYEHUCkPHeEQHaDaEIJWDWIeF[LNsBKF[ESOCYHILs]EYLYFURT`WGOT]FKLcASTQ`YPEL[JIXMNQA]PGTcGCNsVGMiPS\\K`QBMNeRGLc@kLBTOVUCyROLYBmVSCmDYVqLOfHPIPB`EXDLQJ@IGi@sJPA\\KNQHMNQA]HRJpDXE\\NNXTTJ\\P`DhJhRdBNb``nlKrB`KLXAXXePs@YJGPYFWK_dElQ\\KlO^EZxEnQTMdMrCX\\bBLdQNoN]fHdZRAXHPBVPR^JCRXLVfSJzMexIAR[NgZITgNDJIZEdeVm²MTvLzBGfLfVRNj`hDVQVOLGVm_gW]QIMDoAsQWQ[BUKEMUHKCoPURWDCN[E{l}h}CJeb_EOFkfg\\mxSJOR|GPZP`dJTVPEHZ^FNOLJl\\hMVsjGR`HCXWx{@KCqkYQ@IYQR[AMXJ`ITHdAPN\\VPXZQRCR_LAL_LGqQMLLXnFV`ATFjEpOjL|A\\TPpN"],
					["@@VVPIKUYJ"]
				],
				"encodeOffsets": [
					[
						[-5463, 41078]
					],
					[
						[-3463, 41605]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Catalonia",
				"iso-code":"ES-CT"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@`@APRT[VVHQNWnYATdMbRXTJGVJXOHAVbPBP\\@bNvOJIlKFGhG`J`E`QxE\\SP@x[dWR@NNjRbURQhHLEzAHK~DJLRSlO@IVEZYEILUCMdQ`UXJNZPdILQnHFGfJZCbNT@FKfDKc\\OXB\\SAYXQFKTEFiHUPGBQ\\Ya_LOXGEO_KUcFIrPVIFWZaq]cEQU\\BTOBgHOAKPIGhGTFvBPtR@ZQHVXNREdBPCtJLL@dNZXST@ZIPF^TLS`F^OTBhEZJZONHXKXYZKLH^KHSbA`GbRTSC]dKE]JK@SHWPQNCNQZM\\EVFFVNVCLTvVAVNDN`hPnFTIhCrTnFVT_`JXUjCHQpK`ARIfE^DNMAWlYTC^ifFvSb@RPFXtJ~UrEb@VG\\DBXKPSJ@XQLhFDZLN\\@t^HLMfKJJbDJZTPXA\\hbI\\\\XMND`I\\A\\d`N\\OLOnRZCVIfPTALaVWREFM`S\\AVVz@NEfF@QNW]OROSIJSIMXSGQlSBIXUJVvLVCF[RAhHTCNKjGXIMSmMD[GQUET_SWWBQIRS_DIR[IYYk^]ACZ]N]IUO]aSaIiFD]PeZCBSCPEF_M@MOGcDcLgT_VCTOCWHG_OBUCY[wMDYKOi]M_CAScGWHUEYYi[Sq]UGKYIoE[SYCQKcc@GgW@IIQMcEk@[OUBWIa_U@]m]WM­aS½kiGeWKoKYKWSw]WO_SU]okAI_sIcg]XAUuW_kIWKqQSqGoC©@iEkKQI{O]QsFmEaQwKS@qGiOQBsScI]@KW@§I{I§Y³qQOaBSMHaBiAkQOM_CQUYIOFaUSNOOWaFIWUudqDSiDaE{W]OU@s][U]]MWaGe[_[EKaOIW}yOYSK[[GQkOKMYISaWWeKUOBMNU\\ONQrMb@ZVQFVCJrBVE`]VYtqVMf@DOXERNBaOcWQWM¥muSi]mq_eWYkYeMcGeAUHWRK\\TCRDNPnG\\HJL\\DXGrDHPeHYAKaMmEC¯£SKEUY]Oe«^]JUNCdNZS@u`ENYJ{AaDwL[PSD[NCLUPD^NXNFVX_VMNcDUGKHcziQMNQEWJJPD^ZInbbBJfp\\NZ\\Vc^ETMPJd]RT\\FV@ZNRNBNPCPRLH\\RNYJ@VOLQdCb_^IMWJJLIRWTFdgFAfP\\MTbJ~ADRTTZ@fPXPFlNVTzTCPPdKLDBXTLHXCJRd_dGPJVILWFIPTV\\J@NcfnrjLZKPXbOJORHRKLXLjCbDVJjvPJRVVRM\\QR@ZLNOduSSFHGnPPk~KFDh\\^vdHTXbVEHfRF~DTHbCJDJnR\\`LHNPN^DhCR^A\\JJnE@ZvNDP]LPrKNPNVL\\rnXGNXRLHRPPZSVHdN@JR@XTZPfTNHPD`ILApfX_RVtAPR^CJR^TRLjAZJHB`XPAHRTIF_BEVfVLPeBoRVLZ\\Y`DXS^_RI^FRW^BZPPPOplaJBVLTnhAFRZDdRpoJMCiNQBSRJXOX@LgZITWT"],
					["@@Lj^NFTTCFQI_HMfMFK{EoNGJ"]
				],
				"encodeOffsets": [
					[
						[676, 43716]
					],
					[
						[2004, 43478]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ceuta",
				"iso-code":"ES-CE"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@dJbSX[XFNKUYIBSQYF_PK^@TIN"],
					["@@VDbZXGQQgMUJ"]
				],
				"encodeOffsets": [
					[
						[-5511, 36775]
					],
					[
						[-5445, 36751]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Community of Madrid",
				"iso-code":"ES-MD"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ZBJJB\\KFEdZNDZXTZLOfCbOXjL\\qRK\\LADZMPFHbJ@fdhJvGV@\\LdITR_XDVhxIT@FbOLH\\^RjLLJRWJDdbDTmfGzFjPfH^NWLLbCdGFBZ^Z\\HJbZXVdfL@bd^BTRJnEJMpCZLbCXDAZVXLTE\\f~HnSL`lAX`FJZLDHXRFHPbPRGTPTBhLPA`vxZbHTRPVHLPfT\\B~nLZVLDR`TFJ\\LR@PL^AXJd@FGGSXUfE^kH_HKZDx]fDHSOYIeREN[reFMoYDUeBOY_ESJG[K^]EUuYJUQGNKQOFUKUQMMgZGf@d[LUCYFSNIEUYUY[DIh]^KNRLQTCJlNBPQXKBQT]EMjKLKfPE[[ITILQMECWhc\\IZCBQIKNK_]PKLJZA`NtUZSbODUEOLcGQAoDGjEn@JYR]XMI]QEJU]QTSSuQGe_@iKYHSYW@SZGRQHVVVbT`\\^LbaGOT[F[NKE[HKMaRg@_WLQSBUhQPUXUJYOQwg}SkDiNKlSAEISECKWSqUaEUJOIS@EKUJcBQ`_VODsK]@GSJMg[BSQA_VODGQe@MR]MGLBWKI_QOi@IGW_EYM_ENgGEu@_Ii][PgU[EAOYYiQSWcWQCg\\UFoDKPLHMZpT\\FBUN@BR`XpKFRfJDYXFJ\\VC^L_FKVXDZbfdfEd\\@JTJPGXRBR^HEfDNX@PZQPJPkRwPSVWFKMM@mTIJYG]UuNYp]XOFy_cPDR]TUFcCoFYXQAQQQJHXMDc@_E[Rgd@\\sDgZSDMYaWaDUJQGUJN^gL_pWHWOEMD[qLcAW]GUS__ISQSFIXSMKN]LG\\YdApB`eNOOAeYKUUcWSE@iWKsAoUiKE[_CPGT", "@@ZILVOJUU"],
					["@@ZVvXfKXWESSDCeIIT"]
				],
				"encodeOffsets": [
					[
						[-4688, 41183],
						[-3463, 41605]
					],
					[
						[-4428, 41634]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Comunidad Foral de Navarra",
				"iso-code":"ES-NC"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@`HTRRFTE`L`CTKRDVEDKO]Pk\\YRFfAZHXlORRHpDv@^YT@hQrKVBXLRCxiCKJUOYHMIMDceWCoYKNKI]SEEO_MDEmSSWDO~òeVvAfHPKT\\dXJLR@meWaIUHIdGbQNUbCfZdK~abFjWD]VVKbEEQ\\IzCfERFVMT[`INM\\E^Mj@XV^EBKnATGjBRFvEhXZBVJ`CjPaeBWJ}Ec[cM@WHYm]GQ_K@[LuQQTKFMcmUIgJKEBae@cSGQS[MBYQIiDEMUEPaOU@_YEiAkHsABB_EkWLUCAMlOWEeEUDe_@OM\\OY_iDqXED[QcOMsOusCaa{RQ^FPcQS]KooOW_YRYSm@UaoASHSfWFSEaEOJMKogB[\\i@COTYCSo]USCKSS_iOgWILMCO[GUSGSUMgHYAgRy@IQaKH\\ep{RSLKG[J[[yHePe`]`sKcPoE[\\OKSZME]`_DEhITP^TZzjHPh\\D\\bXhMFIdGbZtA^OJQ`L^RVH]NM^HNdPgLUbDsROKKRmAcRD^UEcXSKaFGNPNFTK\\SEYHgTLLWTFPOFQGOXyHJJQVkTWEWPUKaGKOeOiH@RXV]RLPmVKLV`WHoBcScESVUBYISV]@OJDVuRWEETOHUEeJQLUIJM]IK\\QEUF@LyB_fIAETBZZHdBKZC\\TLKGRBRYDSNOS]mSOQjSDeCS|dIX`N@^h`vGZOHOGKEZXzNVCJHA\\MRYKK~DNU`N`VGRLRSnIRXVA\\DH^Pd\\FTMdCrWNJHVA@tLVbJJZXDRGTS\\CTLxEXF\\PRnRFB\\JTdUdA\\jbDNIXVPRX\\fFRV`NPZ\\NER_NJ\\O^DPLLJXPNZGFNZGK^\\B@QZBJLR@^HNVX@XPD~TTf@^NlF"],
					["@@nTPXEEOfQJY\\WIOqHyHiJ"],
					["@@PZENjPTTPIKIGcGIsQGH"]
				],
				"encodeOffsets": [
					[
						[-1770, 44336]
					],
					[
						[-1156, 43466]
					],
					[
						[-1216, 43423]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Extremadura",
				"iso-code":"ES-EX"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@d_NBLObGbAANj@HGnM@P\\TNBbXPEN]`ITHNZ|JPEhBdLTA`P\\XD\\QVJ\\pf^fPXFVC^FCP^TLPbFTEdBZNC^f`DLVJHNLbFNVRA``RBfGV@^_dQXCDQPSzES]\\KXB|WTMYMJKUGDaUCKK]`BjCGc^c\\KRA^QFDpMHGd@b^XbCLTRPARL\\@NG~pl@\\WWQGRSzKjPNL^E~BdYfSEWVQtET[IQRQ`BefElNTEZN`DP`pVTffF`IdPd@FJ^@]AIUQL]GGFcEkNEHUhoDQoMSOB[K{PiFoEiBS_EUWmKNKrRH`KBK`KDQRQWYUOM[BOGcJSI_NW\\BQZR@JZRrlLD|@XwDW_GHQtiNU[gIkPKEMY]FGUOIS_cYOHO{PQTInwh[lePE`FfaDI~~g|k\\FDMXCVQpOLDVGFNVL\\AXRtRpBNCRJX^hn`HUPKRUCU_gMiUQKeHeyAuKNSn±fUFcJYCIhMJShY\\MBQwJfyNITUeWKDQ]IOQAUGOBWYQGc^epMRMKcaAW[qDcNSNmRwFFYP]LkR[Fk`cXLZEHOZIt@fOWBWKW_LqAkL_ma_AMQcIgCgO_I[SSMW[MWFoCQIiWO@sScRoEUFaE]JFWLKDYJU_C@_qPOeYC_[SA@M_GUSWAOWQIBa_FWCkNWAMa]KAY_KDOWKFKMWQBKQSBogWCGeOBGOOCSPKAWQmS]W[yEGA]fQCiGsJOZKD[RU@UNSXQGQLKDcCSH]eMC_BqQBQWSCMFWUBQ£NYYkaCMqeaEmNEzIVTVbELP\\TWZdN@VQEGNUA_X[E][kJmUKFaEIG[HSCKUcEEGEm]CYMeeCcdQFUSWCM]CEMHOOcYiMJAWMUA[NMC[BuWW@{GmYEWQOCWHDNONYAeGYLKP{FmHKNULSPUB]VGNBVSlmAoTmAOFQGRQaWK@OUDQLIsCETFcLgAMMUBILFdHR[\\Yb_\\}AOGgJ_EWDOEQHoKUDWfQC}DMRP^RR@VJJAfU@aINs\\ePkAOPUT]A__OT_Oa@IWWS]JQOKPSQaQIROBS\\Ufa`Q\\CTDVYdI@]T_hWjWZIB[`_XinKPSpMBu`SAEL`HBTXNNVKNUQODATJTBfXLDNCbdhDZNAZZJbAJ^fkBKTFT@dH`ENDXR^CRPN^NT@t`LZ\\NlT\\fn^|Bz^H\\NN\\OLBPY^hXNLH\\RVvxn\\Zc`R^k]X[JeXsDsQmIGITKZLLHpP\\ENWBgRSAoLkNMP[PDTKPHbKV`rvBJohSFOTHTGdY\\ZbRpOPH`VVKNgNIJgFWLkJALWRDNA^URuA_VSfOJOTWDSPUJAPMPEXUPMRFPE\\[NPHCnEj@^GpS`ERHbBSZPvNRLJKdD¨SPB^RrD`A`KdDfLlJP\\DdLXX^KF@VNX@TTRSt@ZLTVJXAVHHPRFH\\NLTBVXD`GHNXATMXJNTFNNB^GTPRKLV\\D^AbOTBP_XUZSDEhUPCPSBWX]AcHY@OLWfJ^OTLR[PBNRJDVRjVPhLLGVDVftBfIbLPA`LFL"],
				"encodeOffsets": [
					[-7029, 41237]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Galicia",
				"iso-code":"ES-GA"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@`LDQ\\DHSGQYCITQJIN"],
					["@@^KMOO\\"],
					["@@N@TQIGWZ"],
					["@@PNIZh\\OeGeUH"],
					["@@DTVIPSWKQV"],
					["@@KDaQWWBKSMCYOBiKYPSCSFWCBWIGRSUMD_vEXHXUGSFMGO@_bMXiZIX@LLTIEkIWTqXKPSR@Z[HPPBP_RBLK`DN]aoPaPAP[XERNdDd\\bDAP`fRALSbKFS^[KgmKSmBkeOP_BYMBM_OHQG]IMWJWSEMRGJUdYRNI\\NnRCLkfS\\W^C\\HTG}D]O]NWXAqAHQVOJ]SZqR[PE@SUICMYMFWGIoUU_iUBS\\WOISHO]WKRiEe[OSQKVUFQbUJ]cDyIKNQTIkYC][eTABOQWIWlDhGHMrNpUP@PhLJ~D^SdKjIbUVCVP`G\\kCOUMD]WWETUTEFME\\GP[PFrQM}LQKkYUW]C_iEMIO[XcsF[J[D[A}YKMHKWW[AoWKIDUI_DGWYOCmUEAQaG[QFWTE\\QZ@hHD_RKCS[oW]P[]SOW}@KHWKmFUl\\mHoW_@MSJcIGF]V]QKEaW_W@qYWB[Es[c@[SuD]GOZuUO_USgQFTIHDV_NI\\FJMNGMVUCUOPU_Q[GKOEsHYGENFVfnTRqBULMIyBqXSRaLcMUQWBQJSB_WoIAF_OGaEKYQTUHHLHpEfHVIRe@EI@]WuwUWJ[@]OK[WMK[{QaQOUHuEoRS@FIDE\\q@KEC^[VC^ZZN\\RP\\PZj@NlLV^`BlPNHHXChWrmVgMWHSGUQWCGP@tKdC\\LNOXUMWEOI[L[ECQOMUH}ieCEYKKUB]L[CUWoH]OS@URWB¡GeBSMDQiSCSJuI_IkkBOG]_WSA]O]E{_EIBaQS{_KOUssgKUXBVNPETOVBTGNH`GT@fLpInJ\\OVK^DzMfjAxXZQfCDRAjOLcBGPZBXENNHVA^fN\\PPVCP`VVH\\MJVlFDRNTVE^NR^lXfK\\XI^NIFiIMIPKBKiOIQPSGQYCeSWFUMGV_@IU{ceJI]_DKLkIGJkJQ[KLR`CNJVD\\qD`ERJLSlKLVHnBPWTBxZRbBPNTN@LV^P\\BVTnda@GFE\\OAe_IB]QO@OUM@IO{BQJ]@SGBKWCeT[\\QFATJRANW`WHeBUSQFOTJH@TZ@bErZOL`JX@LMB]acLWjRtD@TQbLTNETNONE\\QDBjYRTTA`NFbCFH\\LRTTEH\\SN\\fpd[C]H[WmAaTPTCLYFKTccOalOAK]B[keNFTRHKRiDAKcSCK_WJSTC@QWEkBM]cCSGAQNSCMgS[UoDBbXNAPO^OPWHcMW@XfCRXBJNBVXRPVHZMLD^PHJdCNNTVBJPAR^HHX^DJChVXbALXTfPVQRNIHBdPLWLMECa]KMHY@WgWC@NSJ[[KHiDHXQLm[oEXcGO_AMKF[WAAN[VUL]pUXSNxH^TBjSRiHUphILQCcF]zAJc@R]B[gDSTI\\_AA]QD[GOUJSUoUTLbQ\\WDHdTFCZdVNTC^HLIZW@OXC\\ITUJPRLU^CZLRpKbxAPCCfTKTBTMVCCVdDHbNH_VKBK[SCWP@ZSRFLXEDJVBPNDbn@JT@HOjHPQPL\\C\\LXV@V^FNRVH@SPC`ZAEMbAAT_ZAVUX[EOHC`TJXBXJ^EbJRLAjbCnFdALPDTRLTGBS\\MPFH[~[TFRMKTfFTJ`D\\PTAhLnQ^ChH`XTBVhaRf@REZ@HJ^FAPdZfGRQRHOVHJ`CAULK]EbYDKGWPRHENTxSF@ThN\\@XFPMBYrBNGJYZKG[TKXALSVG@UOUX@NfKBHVOZH\\QFFTORNPR^HENiNSKQBUPW@OS[LgXaAWVIPZAdLZE\\RPI`F\\EdARJVbPGXbF\\]EESaIMYi@UHaIQ\\GaMKSBSKSCeTEG_OOFAVbTPbS^NXhBJLAR_LBLUDDVZHJQPGZDhCpHZ^HTNANXHRCpLP^vNx^DShACN^AEV]BAdRtVNZFrCTOXLX`XERlCLF^hHNNTSUsBO\\KLKGOcEOMCYQIhECQaLSK^QT[VU`RHf@JSXGVRWFIRjNIPhFCN^AVJbHHJZA\\JT`xTBVT@^S]QBKUIIMFSYEAcZKSd`CPPFRdANL^@FQ@inQMOPWMID_`AARhVQbNH\\E^N@\\bAVPj]XLhE@QKOlQbADGzI\\UdEX@TQPgZSAKZG`UDQVMDOnMPKZELMWMFOWUHEjRGfnI|G\\@NI`EzFXJTAfKZA\\JvMDEEaOGQw@_LQOI"]
				],
				"encodeOffsets": [
					[
						[-9105, 43591]
					],
					[
						[-9126, 43219]
					],
					[
						[-9132, 43265]
					],
					[
						[-9162, 43378]
					],
					[
						[-9236, 43494]
					],
					[
						[-7225, 44516]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Melilla",
				"iso-code":"ES-ML"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JdJTPHPIEIVWA]TUUKWAGNWRGN"],
				"encodeOffsets": [
					[-3041, 36136]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Principality of Asturias",
				"iso-code":"ES-AS"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TJAPJR@^P`rDHJaHMTLFDRhBHErF`HEtFFMVJtOdJNIZHdIPOtDZXVI`FZAVQhNjGfNrFTANJNSlS~HVKZHNQXHVE\\HXC\\J@RHP_TEXLVCPFOpRbHRCVPJV@RLLRZGLQ\\FJQZOlHVGjAJKlGVJNhXMrCZFdC^RBLdIFyJAGxJHWRZVAT`PZGvX@XLTZ@ZaNFrObYSQhUXav[lEbFISNaZGAXVRCXNRMhE^F~@VCbHnOnNApJZIEMRCFYucPCjNLPMRXFjIJHC\\DTMhQISVMTAJKjURQZBtAJhHLOXCPF^ExShI\\DfEzFzATElChOX@TMnBZHHKVGVBPIbBHG`@fMNMTDKPIVB^ERIZDvMDXKfHHHMDYigMa^KGUNYBiE_[QcDDZGHcBeHOLiWc[kSeHaGYDIIcICGX_COUOHIOMD]IQaAmNOIOmDDR[NS`FLWTkTgAMSsEMSYEOSMAa]AU]HWL}CKQYDM__cFUOaHOMKkAcDMX_KGKkEEKsS[@QHyA[SQ@mN[K]LETq@]MKWC_JFgG[D@SYmYPaCcQcJW@IT{FoA_FMNZIAy[M@MSAUYICWQMMYL[eKWDaEcFsA_\\oCETkHMTmX[JEVSVBTK^]FOOoIaP[Fa@YPYMFSKOLUaQ}Q[Z[HGJeNUMcHY_HiF[\\SLQQJEX}^YaoGLWEQ[BIEDeaSSLSUNHepGdCO_LK_OsAQIGQiRwQGO[@eJqDQCIPaKULyAsCgMUDccQKMUaAJPER}XmJWBMXP^C^~SH[G]D[XeTKlQDMmJ[QMcZIVQHFNXTXIJNH^GR`PANZN`APOlfnALTnLh]\\ETaLKTQB_eBOaCc[cCQMWFO\\OBObbpM^_CKLQAO`OAGOY\\Q@OTWLSrJXFlSJKKW@YJWjaN@`HPENHTWVWGuFC`VNQTJHAXXDTETDZOjLPADZTNALXXbRLC"],
				"encodeOffsets": [
					[-7225, 44516]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Región de Murcia",
				"iso-code":"ES-MC"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Lj@sRoXmUNG^M\\A\\GD"],
					["@@XBLKOOSZ"],
					["@@F_PIH{VO]MkS[Zukmqeo]WERQEw@HkvA|McH[\\aH]AiSaUawkuSOLm@eNgbmRGdm^aR_pwZslixkvILKbQfFHm@ONkSH[hmQKYF]wwYEKKI_QULSZYfqna\\KxQfSXD\\`Zieo{OgAYEKM]AeWmLoCWQeImU[JeAgDhPKLS@URJVEHY@HUkAIUQ@UJ]@UFSCOHcSEK[BUOKOB_FUTLLWRiPeDuBk_gCHUMKBo[OUgOYeWBOIcGqc_yEaLOYMMBITa@WSUEKOmGOKWB]OOM]OGItpufHaL_AFel[rWV½ØkrCZSH[bE^KR]VSbD^C\\JhXPGTMEJP~J\\EHHfNXVNHR[JMNS@aW\\[DWS_JQX]TiEUKaEY^mZ}X_XKTQHWTex@XsXcXEH^d\\bNxV`@VJR``P^@LRfxXVT`JjFrL`Z`^NdZ^^RhMRBjadChL²VdLl\\XV\\LlDV^vJYRv@@\\dIVPRMlSJNhKLKCYQCRe^UAGE~JfArZTNLTbd^TFHEZDtGhCpMtSbVjZ`LHJnIZhfNRh\\fPbJnu^JbZ|Zjn\\RlN~H\\LÄcFKBioVK|ibK"]
				],
				"encodeOffsets": [
					[
						[-763, 38612]
					],
					[
						[-776, 38687]
					],
					[
						[-1051, 39584]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rioja",
				"iso-code":"ES-RI"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^OIY\\Q^LG[LEKScMHUd_HZ`ADNfLPdCTT`PGNJfKXWXKxKIMCwIe[q|LCSlQLcJG\\NJL^@LN^SSYDIZBGN\\@TX\\UlAIZf\\NVNM[aLMCRJpHTMf@JB`ezA@KVERFL[^JINVJRKfIVFPGFSXFvQCUPI^@TUZJVATUdFdTpAXGU_LKnUKO^QWU@QjGfPLPbHVLXOXFlSRUIIzGPWRHPEEOXSKKhSZGTFL[ESOMHMbETLdWVFC]dQnBLQPLtQCVahKcOGMN]^MUG]Q_KIR]PsBaYcHEJgNaWC[g[GOyiSYO]JSFg`C^_NFTYPLGSNWiQPWi[[I_COWM@gQ[DMMgAcXEPWD]ZSWOPaJ]G]LQA]LSZBHLORAVWHSVaVMhvPPL@bOJFsEWF_M[Hk]UBWlFZER\\]B±G[ECQIWa[AWQWNeDGoIQP[i]Q@OQYUOGSaJ}J_EcD[MWDi^k@gMQ`FZ\\ZHVvvCTHTyfU@KM[NSAMSSIAcQOLgEaaUOHkKYKAK]SWGMPiJE`iªsIcAYHYGiLUEc[^gBI^BVYZYNARSJEPrZJXEP\\ZSdRTML@RMlGHV\\]XD\\l@jFHPURU\\UCSFRfIXVFXGGe^aDKZAU~N\\KPJRXV]dERSJQCMJGZZNLRC\\JNcVUCOOcHQThRVFDJ\\PLNGRnRA^K`_LJHET^C|B\\EnN\\CTMVLpCZITYhA@LXBTENNXDNJ", "@@LSbNWZUS"],
				"encodeOffsets": [
					[-2926, 43662],
					[-3015, 43627]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Valencian Community",
				"iso-code":"ES-VC"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ZEFK\\TPDZMNPzJMpP^AjMlUlG\\UPaU[LcPQOKIWDMn_R@XIVRdNVR^DbPMVs^ObCfMLT^INNTdFbTTCnhJlBVRJJObFZEbPfChNfbT@RRHMTD]~lvhFPPBRPNBPGVDPPPLXBXRHNf[`KRBNGPJ`JTGT@pRjB^adj\\lFb`BXPBfb^HfXIZ_XKXSP_PWbN^zR`DnVQTJRSVYCGXH^NZ@PKPEZLfAjc@SQmP_JUCQTRxUVVV^JxFNEJ[TCxfbHZN^@CNHVKRPTBXN`XHDR\\dvDLDhECUjkbQ\\E]`@dIRPjBdCBKZSGKDY`G~pZVKjEdHRVXIRFNMjRdyLGVHdCNM`UUWMEMWC]VODK\\MTC\\OxKbC|BZIFMv_T@MYDcVM^I¬]Oc_aKWeaU_OKWmc_[AMWQGSka]aAS_MIYgWMQOAc[MeQcQKmGm]KAkoau_GYY]YWkK[B[SeQMOK]KMK_IkMDM]HWUFA[QkKQkWuqgQSQYgeeasIEScaakQmEiMYMQQ_XKEGmNa]WaMsO[w}ScI]BFQVUMISBTaAM[JGURT{n¡ãpLU_AKO@sJ]j`{`o ¿hg}ha}TGKXGfFvMdEZMb[nCxedINM[ECWV[`W\\BFcNBC[{AscQEGQOGAUsA[U]CWQWUM]gF_KISiLaCu]QYcaI[`Q_[GKyiYJCJuF]C_UEMG[KO@QKMkMy[sgK[_ASUMGUM¡]DaRgOs_KSUBQUKk@yH{PkCaOQ_KFY@eI]WiyIYOICq@_JIMaSS[IOFYSIWC[YGG_MOYIQWGqOS@_eEaRKLuJwlkjYtoxQ`]bcnQHanMh@fKnTPlvbxVTbBjG^[bG\\d{NuBGl@FxQRXFp^rflnYvT\\NlP^UG|OJE`dFdG|Dp^`YVGZ]nQbKbXBjPIVBbPZKLIvJPA`PZaPSXObAbcCkN]UoIKFwEKB[t[ZejQJMZch[LYRMDOTFbCPVR@l^PTpH^bV`dF^VbJfAbFR`FXCHYJaBGCYXOQTeNQIOL{RSAOOKLSA_bW@GTeFWXQDKMgOAVYBRfSDISSHTNMPOOOJDNUFSd_V@\\VD@XJNEPX^OPBXJ^ab^BAXxJ^PT^NhTdfv\\VrvQbOZElDXLdjQ^@dIPv`TZjLLHVBfVl@HjITOJFh¬bVP"],
					["@@`KXF~O\\L\\CDQN@fZbHFfKN@\\L\\LJdFEMTcDUPQ~qBQIM\\Q\\D`K¦LTAZUDMlGpcb_@QY][GKIYSDgMOBeQOBISEcFmTJMH{IWHMnU^GT_fMXZPkZ[H[\\AHRT"]
				],
				"encodeOffsets": [
					[
						[-1169, 40932]
					],
					[
						[-1483, 41109]
					]
				]
			}
		}],
		"UTF8Encoding": true},
{"Canary Islands":{"left":-10,"top":32, "width":5},
"Balearic Islands":{"left":-3,"top":32,"width":5}
});}));