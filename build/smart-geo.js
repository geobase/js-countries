var Geo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _CountryCountryRepository = __webpack_require__(1);

	var _CountryCountryRepository2 = _interopRequireDefault(_CountryCountryRepository);

	var _RegionRegionRepository = __webpack_require__(12);

	var _RegionRegionRepository2 = _interopRequireDefault(_RegionRegionRepository);

	var storage = {};
	storage['regions/regions.json'] = __webpack_require__(21);
	storage['regions/regions/YT.json'] = __webpack_require__(22);
	storage['regions/regions/WY.json'] = __webpack_require__(23);
	storage['regions/regions/WV.json'] = __webpack_require__(24);
	storage['regions/regions/WI.json'] = __webpack_require__(25);
	storage['regions/regions/WA.json'] = __webpack_require__(26);
	storage['regions/regions/VT.json'] = __webpack_require__(27);
	storage['regions/regions/VI.json'] = __webpack_require__(28);
	storage['regions/regions/VA.json'] = __webpack_require__(29);
	storage['regions/regions/UT.json'] = __webpack_require__(30);
	storage['regions/regions/TX.json'] = __webpack_require__(31);
	storage['regions/regions/TN.json'] = __webpack_require__(32);
	storage['regions/regions/SK.json'] = __webpack_require__(33);
	storage['regions/regions/SD.json'] = __webpack_require__(34);
	storage['regions/regions/SC.json'] = __webpack_require__(35);
	storage['regions/regions/RI.json'] = __webpack_require__(36);
	storage['regions/regions/QC.json'] = __webpack_require__(37);
	storage['regions/regions/PR.json'] = __webpack_require__(38);
	storage['regions/regions/PE.json'] = __webpack_require__(39);
	storage['regions/regions/PA.json'] = __webpack_require__(40);
	storage['regions/regions/OR.json'] = __webpack_require__(41);
	storage['regions/regions/ON.json'] = __webpack_require__(42);
	storage['regions/regions/OK.json'] = __webpack_require__(43);
	storage['regions/regions/OH.json'] = __webpack_require__(44);
	storage['regions/regions/NY.json'] = __webpack_require__(45);
	storage['regions/regions/NV.json'] = __webpack_require__(46);
	storage['regions/regions/NU.json'] = __webpack_require__(47);
	storage['regions/regions/NT.json'] = __webpack_require__(48);
	storage['regions/regions/NS.json'] = __webpack_require__(49);
	storage['regions/regions/NM.json'] = __webpack_require__(50);
	storage['regions/regions/NL.json'] = __webpack_require__(51);
	storage['regions/regions/NJ.json'] = __webpack_require__(52);
	storage['regions/regions/NH.json'] = __webpack_require__(53);
	storage['regions/regions/NE.json'] = __webpack_require__(54);
	storage['regions/regions/ND.json'] = __webpack_require__(55);
	storage['regions/regions/NC.json'] = __webpack_require__(56);
	storage['regions/regions/NB.json'] = __webpack_require__(57);
	storage['regions/regions/MT.json'] = __webpack_require__(58);
	storage['regions/regions/MS.json'] = __webpack_require__(59);
	storage['regions/regions/MP.json'] = __webpack_require__(60);
	storage['regions/regions/MO.json'] = __webpack_require__(61);
	storage['regions/regions/MN.json'] = __webpack_require__(62);
	storage['regions/regions/MI.json'] = __webpack_require__(63);
	storage['regions/regions/ME.json'] = __webpack_require__(64);
	storage['regions/regions/MD.json'] = __webpack_require__(65);
	storage['regions/regions/MB.json'] = __webpack_require__(66);
	storage['regions/regions/MA.json'] = __webpack_require__(67);
	storage['regions/regions/LA.json'] = __webpack_require__(68);
	storage['regions/regions/KY.json'] = __webpack_require__(69);
	storage['regions/regions/KS.json'] = __webpack_require__(70);
	storage['regions/regions/IN.json'] = __webpack_require__(71);
	storage['regions/regions/IL.json'] = __webpack_require__(72);
	storage['regions/regions/ID.json'] = __webpack_require__(73);
	storage['regions/regions/IA.json'] = __webpack_require__(74);
	storage['regions/regions/HI.json'] = __webpack_require__(75);
	storage['regions/regions/GU.json'] = __webpack_require__(76);
	storage['regions/regions/GA.json'] = __webpack_require__(77);
	storage['regions/regions/FL.json'] = __webpack_require__(78);
	storage['regions/regions/DE.json'] = __webpack_require__(79);
	storage['regions/regions/DC.json'] = __webpack_require__(80);
	storage['regions/regions/CT.json'] = __webpack_require__(81);
	storage['regions/regions/CO.json'] = __webpack_require__(82);
	storage['regions/regions/CA.json'] = __webpack_require__(83);
	storage['regions/regions/BC.json'] = __webpack_require__(84);
	storage['regions/regions/AZ.json'] = __webpack_require__(85);
	storage['regions/regions/AS.json'] = __webpack_require__(86);
	storage['regions/regions/AR.json'] = __webpack_require__(87);
	storage['regions/regions/AL.json'] = __webpack_require__(88);
	storage['regions/regions/AK.json'] = __webpack_require__(89);
	storage['regions/regions/AB.json'] = __webpack_require__(90);
	storage['countries/countries.json'] = __webpack_require__(91);
	storage['countries/countries/ZW.json'] = __webpack_require__(92);
	storage['countries/countries/ZM.json'] = __webpack_require__(93);
	storage['countries/countries/ZA.json'] = __webpack_require__(94);
	storage['countries/countries/YT.json'] = __webpack_require__(95);
	storage['countries/countries/YE.json'] = __webpack_require__(96);
	storage['countries/countries/XK.json'] = __webpack_require__(97);
	storage['countries/countries/WS.json'] = __webpack_require__(98);
	storage['countries/countries/WF.json'] = __webpack_require__(99);
	storage['countries/countries/VU.json'] = __webpack_require__(100);
	storage['countries/countries/VN.json'] = __webpack_require__(101);
	storage['countries/countries/VI.json'] = __webpack_require__(102);
	storage['countries/countries/VG.json'] = __webpack_require__(103);
	storage['countries/countries/VE.json'] = __webpack_require__(104);
	storage['countries/countries/VC.json'] = __webpack_require__(105);
	storage['countries/countries/VA.json'] = __webpack_require__(106);
	storage['countries/countries/UZ.json'] = __webpack_require__(107);
	storage['countries/countries/UY.json'] = __webpack_require__(108);
	storage['countries/countries/US.json'] = __webpack_require__(109);
	storage['countries/countries/UM.json'] = __webpack_require__(110);
	storage['countries/countries/UG.json'] = __webpack_require__(111);
	storage['countries/countries/UA.json'] = __webpack_require__(112);
	storage['countries/countries/TZ.json'] = __webpack_require__(113);
	storage['countries/countries/TW.json'] = __webpack_require__(114);
	storage['countries/countries/TV.json'] = __webpack_require__(115);
	storage['countries/countries/TT.json'] = __webpack_require__(116);
	storage['countries/countries/TR.json'] = __webpack_require__(117);
	storage['countries/countries/TO.json'] = __webpack_require__(118);
	storage['countries/countries/TN.json'] = __webpack_require__(119);
	storage['countries/countries/TM.json'] = __webpack_require__(120);
	storage['countries/countries/TL.json'] = __webpack_require__(121);
	storage['countries/countries/TK.json'] = __webpack_require__(122);
	storage['countries/countries/TJ.json'] = __webpack_require__(123);
	storage['countries/countries/TH.json'] = __webpack_require__(124);
	storage['countries/countries/TG.json'] = __webpack_require__(125);
	storage['countries/countries/TF.json'] = __webpack_require__(126);
	storage['countries/countries/TD.json'] = __webpack_require__(127);
	storage['countries/countries/TC.json'] = __webpack_require__(128);
	storage['countries/countries/SZ.json'] = __webpack_require__(129);
	storage['countries/countries/SY.json'] = __webpack_require__(130);
	storage['countries/countries/SX.json'] = __webpack_require__(131);
	storage['countries/countries/SV.json'] = __webpack_require__(132);
	storage['countries/countries/ST.json'] = __webpack_require__(133);
	storage['countries/countries/SS.json'] = __webpack_require__(134);
	storage['countries/countries/SR.json'] = __webpack_require__(135);
	storage['countries/countries/SO.json'] = __webpack_require__(136);
	storage['countries/countries/SN.json'] = __webpack_require__(137);
	storage['countries/countries/SM.json'] = __webpack_require__(138);
	storage['countries/countries/SL.json'] = __webpack_require__(139);
	storage['countries/countries/SK.json'] = __webpack_require__(140);
	storage['countries/countries/SJ.json'] = __webpack_require__(141);
	storage['countries/countries/SI.json'] = __webpack_require__(142);
	storage['countries/countries/SH.json'] = __webpack_require__(143);
	storage['countries/countries/SG.json'] = __webpack_require__(144);
	storage['countries/countries/SE.json'] = __webpack_require__(145);
	storage['countries/countries/SD.json'] = __webpack_require__(146);
	storage['countries/countries/SC.json'] = __webpack_require__(147);
	storage['countries/countries/SB.json'] = __webpack_require__(148);
	storage['countries/countries/SA.json'] = __webpack_require__(149);
	storage['countries/countries/RW.json'] = __webpack_require__(150);
	storage['countries/countries/RU.json'] = __webpack_require__(151);
	storage['countries/countries/RS.json'] = __webpack_require__(152);
	storage['countries/countries/RO.json'] = __webpack_require__(153);
	storage['countries/countries/RE.json'] = __webpack_require__(154);
	storage['countries/countries/QA.json'] = __webpack_require__(155);
	storage['countries/countries/PY.json'] = __webpack_require__(156);
	storage['countries/countries/PW.json'] = __webpack_require__(157);
	storage['countries/countries/PT.json'] = __webpack_require__(158);
	storage['countries/countries/PS.json'] = __webpack_require__(159);
	storage['countries/countries/PR.json'] = __webpack_require__(160);
	storage['countries/countries/PN.json'] = __webpack_require__(161);
	storage['countries/countries/PM.json'] = __webpack_require__(162);
	storage['countries/countries/PL.json'] = __webpack_require__(163);
	storage['countries/countries/PK.json'] = __webpack_require__(164);
	storage['countries/countries/PH.json'] = __webpack_require__(165);
	storage['countries/countries/PG.json'] = __webpack_require__(166);
	storage['countries/countries/PF.json'] = __webpack_require__(167);
	storage['countries/countries/PE.json'] = __webpack_require__(168);
	storage['countries/countries/PA.json'] = __webpack_require__(169);
	storage['countries/countries/OM.json'] = __webpack_require__(170);
	storage['countries/countries/NZ.json'] = __webpack_require__(171);
	storage['countries/countries/NU.json'] = __webpack_require__(172);
	storage['countries/countries/NR.json'] = __webpack_require__(173);
	storage['countries/countries/NP.json'] = __webpack_require__(174);
	storage['countries/countries/NO.json'] = __webpack_require__(175);
	storage['countries/countries/NL.json'] = __webpack_require__(176);
	storage['countries/countries/NI.json'] = __webpack_require__(177);
	storage['countries/countries/NG.json'] = __webpack_require__(178);
	storage['countries/countries/NF.json'] = __webpack_require__(179);
	storage['countries/countries/NE.json'] = __webpack_require__(180);
	storage['countries/countries/NC.json'] = __webpack_require__(181);
	storage['countries/countries/NA.json'] = __webpack_require__(182);
	storage['countries/countries/MZ.json'] = __webpack_require__(183);
	storage['countries/countries/MY.json'] = __webpack_require__(184);
	storage['countries/countries/MX.json'] = __webpack_require__(185);
	storage['countries/countries/MW.json'] = __webpack_require__(186);
	storage['countries/countries/MV.json'] = __webpack_require__(187);
	storage['countries/countries/MU.json'] = __webpack_require__(188);
	storage['countries/countries/MT.json'] = __webpack_require__(189);
	storage['countries/countries/MS.json'] = __webpack_require__(190);
	storage['countries/countries/MR.json'] = __webpack_require__(191);
	storage['countries/countries/MQ.json'] = __webpack_require__(192);
	storage['countries/countries/MP.json'] = __webpack_require__(193);
	storage['countries/countries/MO.json'] = __webpack_require__(194);
	storage['countries/countries/MN.json'] = __webpack_require__(195);
	storage['countries/countries/MM.json'] = __webpack_require__(196);
	storage['countries/countries/ML.json'] = __webpack_require__(197);
	storage['countries/countries/MK.json'] = __webpack_require__(198);
	storage['countries/countries/MH.json'] = __webpack_require__(199);
	storage['countries/countries/MG.json'] = __webpack_require__(200);
	storage['countries/countries/MF.json'] = __webpack_require__(201);
	storage['countries/countries/ME.json'] = __webpack_require__(202);
	storage['countries/countries/MD.json'] = __webpack_require__(203);
	storage['countries/countries/MC.json'] = __webpack_require__(204);
	storage['countries/countries/MA.json'] = __webpack_require__(205);
	storage['countries/countries/LY.json'] = __webpack_require__(206);
	storage['countries/countries/LV.json'] = __webpack_require__(207);
	storage['countries/countries/LU.json'] = __webpack_require__(208);
	storage['countries/countries/LT.json'] = __webpack_require__(209);
	storage['countries/countries/LS.json'] = __webpack_require__(210);
	storage['countries/countries/LR.json'] = __webpack_require__(211);
	storage['countries/countries/LK.json'] = __webpack_require__(212);
	storage['countries/countries/LI.json'] = __webpack_require__(213);
	storage['countries/countries/LC.json'] = __webpack_require__(214);
	storage['countries/countries/LB.json'] = __webpack_require__(215);
	storage['countries/countries/LA.json'] = __webpack_require__(216);
	storage['countries/countries/KZ.json'] = __webpack_require__(217);
	storage['countries/countries/KY.json'] = __webpack_require__(218);
	storage['countries/countries/KW.json'] = __webpack_require__(219);
	storage['countries/countries/KR.json'] = __webpack_require__(220);
	storage['countries/countries/KP.json'] = __webpack_require__(221);
	storage['countries/countries/KN.json'] = __webpack_require__(222);
	storage['countries/countries/KM.json'] = __webpack_require__(223);
	storage['countries/countries/KI.json'] = __webpack_require__(224);
	storage['countries/countries/KH.json'] = __webpack_require__(225);
	storage['countries/countries/KG.json'] = __webpack_require__(226);
	storage['countries/countries/KE.json'] = __webpack_require__(227);
	storage['countries/countries/JP.json'] = __webpack_require__(228);
	storage['countries/countries/JO.json'] = __webpack_require__(229);
	storage['countries/countries/JM.json'] = __webpack_require__(230);
	storage['countries/countries/JE.json'] = __webpack_require__(231);
	storage['countries/countries/IT.json'] = __webpack_require__(232);
	storage['countries/countries/IS.json'] = __webpack_require__(233);
	storage['countries/countries/IR.json'] = __webpack_require__(234);
	storage['countries/countries/IQ.json'] = __webpack_require__(235);
	storage['countries/countries/IO.json'] = __webpack_require__(236);
	storage['countries/countries/IN.json'] = __webpack_require__(237);
	storage['countries/countries/IM.json'] = __webpack_require__(238);
	storage['countries/countries/IL.json'] = __webpack_require__(239);
	storage['countries/countries/IE.json'] = __webpack_require__(240);
	storage['countries/countries/ID.json'] = __webpack_require__(241);
	storage['countries/countries/HU.json'] = __webpack_require__(242);
	storage['countries/countries/HT.json'] = __webpack_require__(243);
	storage['countries/countries/HR.json'] = __webpack_require__(244);
	storage['countries/countries/HN.json'] = __webpack_require__(245);
	storage['countries/countries/HM.json'] = __webpack_require__(246);
	storage['countries/countries/HK.json'] = __webpack_require__(247);
	storage['countries/countries/GY.json'] = __webpack_require__(248);
	storage['countries/countries/GW.json'] = __webpack_require__(249);
	storage['countries/countries/GU.json'] = __webpack_require__(250);
	storage['countries/countries/GT.json'] = __webpack_require__(251);
	storage['countries/countries/GS.json'] = __webpack_require__(252);
	storage['countries/countries/GR.json'] = __webpack_require__(253);
	storage['countries/countries/GQ.json'] = __webpack_require__(254);
	storage['countries/countries/GP.json'] = __webpack_require__(255);
	storage['countries/countries/GN.json'] = __webpack_require__(256);
	storage['countries/countries/GM.json'] = __webpack_require__(257);
	storage['countries/countries/GL.json'] = __webpack_require__(258);
	storage['countries/countries/GI.json'] = __webpack_require__(259);
	storage['countries/countries/GH.json'] = __webpack_require__(260);
	storage['countries/countries/GG.json'] = __webpack_require__(261);
	storage['countries/countries/GF.json'] = __webpack_require__(262);
	storage['countries/countries/GE.json'] = __webpack_require__(263);
	storage['countries/countries/GD.json'] = __webpack_require__(264);
	storage['countries/countries/GB.json'] = __webpack_require__(265);
	storage['countries/countries/GA.json'] = __webpack_require__(266);
	storage['countries/countries/FR.json'] = __webpack_require__(267);
	storage['countries/countries/FO.json'] = __webpack_require__(268);
	storage['countries/countries/FM.json'] = __webpack_require__(269);
	storage['countries/countries/FK.json'] = __webpack_require__(270);
	storage['countries/countries/FJ.json'] = __webpack_require__(271);
	storage['countries/countries/FI.json'] = __webpack_require__(272);
	storage['countries/countries/ET.json'] = __webpack_require__(273);
	storage['countries/countries/ES.json'] = __webpack_require__(274);
	storage['countries/countries/ER.json'] = __webpack_require__(275);
	storage['countries/countries/EH.json'] = __webpack_require__(276);
	storage['countries/countries/EG.json'] = __webpack_require__(277);
	storage['countries/countries/EE.json'] = __webpack_require__(278);
	storage['countries/countries/EC.json'] = __webpack_require__(279);
	storage['countries/countries/DZ.json'] = __webpack_require__(280);
	storage['countries/countries/DO.json'] = __webpack_require__(281);
	storage['countries/countries/DM.json'] = __webpack_require__(282);
	storage['countries/countries/DK.json'] = __webpack_require__(283);
	storage['countries/countries/DJ.json'] = __webpack_require__(284);
	storage['countries/countries/DE.json'] = __webpack_require__(285);
	storage['countries/countries/CZ.json'] = __webpack_require__(286);
	storage['countries/countries/CY.json'] = __webpack_require__(287);
	storage['countries/countries/CX.json'] = __webpack_require__(288);
	storage['countries/countries/CW.json'] = __webpack_require__(289);
	storage['countries/countries/CV.json'] = __webpack_require__(290);
	storage['countries/countries/CU.json'] = __webpack_require__(291);
	storage['countries/countries/CR.json'] = __webpack_require__(292);
	storage['countries/countries/CO.json'] = __webpack_require__(293);
	storage['countries/countries/CN.json'] = __webpack_require__(294);
	storage['countries/countries/CM.json'] = __webpack_require__(295);
	storage['countries/countries/CL.json'] = __webpack_require__(296);
	storage['countries/countries/CK.json'] = __webpack_require__(297);
	storage['countries/countries/CI.json'] = __webpack_require__(298);
	storage['countries/countries/CH.json'] = __webpack_require__(299);
	storage['countries/countries/CG.json'] = __webpack_require__(300);
	storage['countries/countries/CF.json'] = __webpack_require__(301);
	storage['countries/countries/CD.json'] = __webpack_require__(302);
	storage['countries/countries/CC.json'] = __webpack_require__(303);
	storage['countries/countries/CA.json'] = __webpack_require__(304);
	storage['countries/countries/BZ.json'] = __webpack_require__(305);
	storage['countries/countries/BY.json'] = __webpack_require__(306);
	storage['countries/countries/BW.json'] = __webpack_require__(307);
	storage['countries/countries/BV.json'] = __webpack_require__(308);
	storage['countries/countries/BT.json'] = __webpack_require__(309);
	storage['countries/countries/BS.json'] = __webpack_require__(310);
	storage['countries/countries/BR.json'] = __webpack_require__(311);
	storage['countries/countries/BQ.json'] = __webpack_require__(312);
	storage['countries/countries/BO.json'] = __webpack_require__(313);
	storage['countries/countries/BN.json'] = __webpack_require__(314);
	storage['countries/countries/BM.json'] = __webpack_require__(315);
	storage['countries/countries/BL.json'] = __webpack_require__(316);
	storage['countries/countries/BJ.json'] = __webpack_require__(317);
	storage['countries/countries/BI.json'] = __webpack_require__(318);
	storage['countries/countries/BH.json'] = __webpack_require__(319);
	storage['countries/countries/BG.json'] = __webpack_require__(320);
	storage['countries/countries/BF.json'] = __webpack_require__(321);
	storage['countries/countries/BE.json'] = __webpack_require__(322);
	storage['countries/countries/BD.json'] = __webpack_require__(323);
	storage['countries/countries/BB.json'] = __webpack_require__(324);
	storage['countries/countries/BA.json'] = __webpack_require__(325);
	storage['countries/countries/AZ.json'] = __webpack_require__(326);
	storage['countries/countries/AX.json'] = __webpack_require__(327);
	storage['countries/countries/AW.json'] = __webpack_require__(328);
	storage['countries/countries/AU.json'] = __webpack_require__(329);
	storage['countries/countries/AT.json'] = __webpack_require__(330);
	storage['countries/countries/AS.json'] = __webpack_require__(331);
	storage['countries/countries/AR.json'] = __webpack_require__(332);
	storage['countries/countries/AQ.json'] = __webpack_require__(333);
	storage['countries/countries/AO.json'] = __webpack_require__(334);
	storage['countries/countries/AM.json'] = __webpack_require__(335);
	storage['countries/countries/AL.json'] = __webpack_require__(336);
	storage['countries/countries/AI.json'] = __webpack_require__(337);
	storage['countries/countries/AG.json'] = __webpack_require__(338);
	storage['countries/countries/AF.json'] = __webpack_require__(339);
	storage['countries/countries/AE.json'] = __webpack_require__(340);
	storage['countries/countries/AD.json'] = __webpack_require__(341);
	exports['default'] = {
	  countryRepository: _CountryCountryRepository2['default'],
	  regionRepository: _RegionRegionRepository2['default'],
	  storage: storage
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _CountryLoader = __webpack_require__(2);

	var _CountryLoader2 = _interopRequireDefault(_CountryLoader);

	var _CountryMapper = __webpack_require__(10);

	var _CountryMapper2 = _interopRequireDefault(_CountryMapper);

	var CountryRepository = (function () {
	  function CountryRepository() {
	    _classCallCheck(this, CountryRepository);
	  }

	  _createClass(CountryRepository, null, [{
	    key: 'findAll',
	    value: function findAll() {
	      return _CountryMapper2['default'].mapArrayToCollection(_CountryLoader2['default'].loadAllCountries());
	    }
	  }, {
	    key: 'findByShortCode',
	    value: function findByShortCode(code) {
	      return _CountryMapper2['default'].mapArrayToEntity(_CountryLoader2['default'].loadCountry(code));
	    }
	  }]);

	  return CountryRepository;
	})();

	exports['default'] = CountryRepository;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var CountryLoader = (function () {
	  function CountryLoader() {
	    _classCallCheck(this, CountryLoader);
	  }

	  _createClass(CountryLoader, null, [{
	    key: 'loadAllCountries',
	    value: function loadAllCountries() {
	      if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
	        return window.Geo.storage[CountryLoader.allCountriesFile];
	      }
	      return __webpack_require__(3)("." + CountryLoader.storage + '/' + CountryLoader.allCountriesFile);
	    }
	  }, {
	    key: 'loadCountry',
	    value: function loadCountry(country) {
	      if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
	        return window.Geo.storage[CountryLoader.countryFile.replace('%s', country)];
	      }
	      var file = '.' + CountryLoader.storage + '/' + CountryLoader.countryFile;
	      return __webpack_require__(11)(file.replace('%s', country));
	    }
	  }, {
	    key: 'storage',
	    value: '/../../storage',
	    enumerable: true
	  }, {
	    key: 'allCountriesFile',
	    value: 'countries/countries.json',
	    enumerable: true
	  }, {
	    key: 'countryFile',
	    value: 'countries/countries/%s.json',
	    enumerable: true
	  }, {
	    key: 'countryPolygonFile',
	    value: 'countries/countries/%s/polygon.json',
	    enumerable: true
	  }]);

	  return CountryLoader;
	})();

	exports['default'] = CountryLoader;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Country": 4,
		"./Country.js": 4,
		"./CountryCollection": 9,
		"./CountryCollection.js": 9,
		"./CountryLoader": 2,
		"./CountryLoader.js": 2,
		"./CountryMapper": 10,
		"./CountryMapper.js": 10,
		"./CountryName/CountryName": 8,
		"./CountryName/CountryName.js": 8,
		"./CountryName/CountryNameCollection": 6,
		"./CountryName/CountryNameCollection.js": 6,
		"./CountryRepository": 1,
		"./CountryRepository.js": 1
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Model2 = __webpack_require__(5);

	var _Model3 = _interopRequireDefault(_Model2);

	var _CountryNameCountryNameCollection = __webpack_require__(6);

	var _CountryNameCountryNameCollection2 = _interopRequireDefault(_CountryNameCountryNameCollection);

	var Country = (function (_Model) {
	  _inherits(Country, _Model);

	  function Country(attributes) {
	    _classCallCheck(this, Country);

	    _get(Object.getPrototypeOf(Country.prototype), 'constructor', this).call(this);
	    this.model = {
	      names: _CountryNameCountryNameCollection2['default']
	    };
	    this.set(attributes);
	  }

	  return Country;
	})(_Model3['default']);

	exports['default'] = Country;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Model = (function () {
	  function Model() {
	    _classCallCheck(this, Model);
	  }

	  _createClass(Model, [{
	    key: 'set',
	    value: function set(attributes) {
	      var newAttributes = {};
	      for (var prop in attributes) {
	        if (attributes.hasOwnProperty(prop)) {
	          if (typeof this.model[prop] !== 'undefined') {
	            newAttributes[prop] = new this.model[prop]();
	            newAttributes[prop].add(attributes[prop]);
	          } else {
	            newAttributes[prop] = attributes[prop];
	          }
	        }
	      }
	      for (var prop in newAttributes) {
	        if (newAttributes.hasOwnProperty(prop)) {
	          this[prop] = newAttributes[prop];
	        }
	      }
	    }
	  }]);

	  return Model;
	})();

	exports['default'] = Model;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ArrayCollection2 = __webpack_require__(7);

	var _ArrayCollection3 = _interopRequireDefault(_ArrayCollection2);

	var _CountryName = __webpack_require__(8);

	var _CountryName2 = _interopRequireDefault(_CountryName);

	var CountryNameCollection = (function (_ArrayCollection) {
	  _inherits(CountryNameCollection, _ArrayCollection);

	  function CountryNameCollection() {
	    _classCallCheck(this, CountryNameCollection);

	    _get(Object.getPrototypeOf(CountryNameCollection.prototype), 'constructor', this).apply(this, arguments);

	    this.model = _CountryName2['default'];
	    this.key = 'language';
	  }

	  _createClass(CountryNameCollection, [{
	    key: 'add',
	    value: function add(items) {
	      for (var prop in items) {
	        if (items.hasOwnProperty(prop)) {
	          this.elements[prop] = new this.model({ language: prop, name: items[prop] });
	          this.push(this.elements[prop]);
	        }
	      }
	    }
	  }]);

	  return CountryNameCollection;
	})(_ArrayCollection3['default']);

	exports['default'] = CountryNameCollection;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArrayCollection = (function (_Array) {
	  _inherits(ArrayCollection, _Array);

	  function ArrayCollection(items) {
	    _classCallCheck(this, ArrayCollection);

	    _get(Object.getPrototypeOf(ArrayCollection.prototype), "constructor", this).call(this);
	    this.elements = {};
	    if (items !== undefined) {
	      this.add(items);
	    }
	  }

	  _createClass(ArrayCollection, [{
	    key: "get",
	    value: function get(key) {
	      return this.elements[key];
	    }
	  }, {
	    key: "add",
	    value: function add(items) {
	      if (items instanceof this.model) {
	        this.elements[items[this.key]] = items;
	        this.push(this.elements[items[this.key]]);
	        return this;
	      }

	      for (var prop in items) {
	        if (items.hasOwnProperty(prop)) {
	          if (items[prop] instanceof this.model) {
	            this.elements[prop] = items[prop];
	            this.push(items[prop]);
	          } else {
	            this.elements[prop] = new this.model(items[prop]);
	            this.push(this.elements[prop]);
	          }
	        }
	      }
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      while (this.length) {
	        this.pop();
	      }
	    }
	  }, {
	    key: "order",
	    value: function order(key) {
	      this.orderByChildCollection(key.split('.'));
	    }
	  }, {
	    key: "orderByChildCollection",
	    value: function orderByChildCollection(keys) {
	      var nonSorted = {};

	      for (var prop in this.elements) {
	        var newKeys = keys.slice(0);
	        if (this.elements.hasOwnProperty(prop)) {
	          var value = this.getChildValueRecursive(this.elements[prop], newKeys);
	          nonSorted[ArrayCollection.removeAccents(value)] = this.elements[prop];
	        }
	      }

	      var orderedKeys = [];
	      for (var key in nonSorted) {
	        if (nonSorted.hasOwnProperty(key)) {
	          orderedKeys.push(key);
	        }
	      }
	      orderedKeys.sort();

	      this.clear();
	      for (var i = 0, len = orderedKeys.length; i < len; ++i) {
	        this.add(nonSorted[orderedKeys[i]]);
	      }
	    }
	  }, {
	    key: "getChildValueRecursive",
	    value: function getChildValueRecursive(item, keys) {
	      var key = keys.shift();

	      var value = undefined;
	      if (item instanceof ArrayCollection) {
	        value = item.get(key);
	      } else {
	        value = item[key];
	      }

	      if (keys.length) {
	        return this.getChildValueRecursive(value, keys);
	      } else {
	        return value;
	      }
	    }
	  }], [{
	    key: "removeAccents",
	    value: function removeAccents(string) {
	      return string.toLowerCase().replace(/[åáàãâä]/gi, "a").replace(/[éèëê]/gi, "e").replace(/[íìïî]/gi, "i").replace(/[óòöôõø]/gi, "o").replace(/[úùüû]/gi, "u").replace(/[ç]/gi, "c").replace(/[ñ]/gi, "n");
	    }
	  }]);

	  return ArrayCollection;
	})(Array);

	exports["default"] = ArrayCollection;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Model2 = __webpack_require__(5);

	var _Model3 = _interopRequireDefault(_Model2);

	var CountryName = (function (_Model) {
	  _inherits(CountryName, _Model);

	  function CountryName(attributes) {
	    _classCallCheck(this, CountryName);

	    _get(Object.getPrototypeOf(CountryName.prototype), 'constructor', this).call(this);
	    this.set(attributes);
	  }

	  _createClass(CountryName, [{
	    key: 'set',
	    value: function set(attributes) {
	      for (var prop in attributes) {
	        if (attributes.hasOwnProperty(prop)) {
	          this[prop] = attributes[prop];
	        }
	      }
	    }
	  }]);

	  return CountryName;
	})(_Model3['default']);

	exports['default'] = CountryName;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ArrayCollection2 = __webpack_require__(7);

	var _ArrayCollection3 = _interopRequireDefault(_ArrayCollection2);

	var _Country = __webpack_require__(4);

	var _Country2 = _interopRequireDefault(_Country);

	var CountryCollection = (function (_ArrayCollection) {
	  _inherits(CountryCollection, _ArrayCollection);

	  function CountryCollection() {
	    _classCallCheck(this, CountryCollection);

	    _get(Object.getPrototypeOf(CountryCollection.prototype), 'constructor', this).apply(this, arguments);

	    this.model = _Country2['default'];
	    this.key = 'shortCode';
	  }

	  _createClass(CountryCollection, [{
	    key: 'orderByName',
	    value: function orderByName(language) {
	      language = language ? language : 'en';
	      this.order('names.' + language + '.name');
	    }
	  }]);

	  return CountryCollection;
	})(_ArrayCollection3['default']);

	exports['default'] = CountryCollection;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _CountryCollection = __webpack_require__(9);

	var _CountryCollection2 = _interopRequireDefault(_CountryCollection);

	var _Country = __webpack_require__(4);

	var _Country2 = _interopRequireDefault(_Country);

	var CountryMapper = (function () {
	  function CountryMapper() {
	    _classCallCheck(this, CountryMapper);
	  }

	  _createClass(CountryMapper, null, [{
	    key: 'mapArrayToCollection',
	    value: function mapArrayToCollection(data) {
	      var collection = new _CountryCollection2['default']();

	      for (var i = 0, len = data.length; i < len; ++i) {
	        var country = CountryMapper.mapArrayToEntity(data[i]);
	        if (country) {
	          collection.add(country);
	        }
	      }
	      return collection;
	    }
	  }, {
	    key: 'mapArrayToEntity',
	    value: function mapArrayToEntity(attributes) {
	      return new _Country2['default'](attributes);
	    }
	  }]);

	  return CountryMapper;
	})();

	exports['default'] = CountryMapper;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Country": 4,
		"./Country.js": 4,
		"./CountryCollection": 9,
		"./CountryCollection.js": 9,
		"./CountryLoader": 2,
		"./CountryLoader.js": 2,
		"./CountryMapper": 10,
		"./CountryMapper.js": 10,
		"./CountryName/CountryName": 8,
		"./CountryName/CountryName.js": 8,
		"./CountryName/CountryNameCollection": 6,
		"./CountryName/CountryNameCollection.js": 6,
		"./CountryRepository": 1,
		"./CountryRepository.js": 1
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 11;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _RegionLoader = __webpack_require__(13);

	var _RegionLoader2 = _interopRequireDefault(_RegionLoader);

	var _RegionMapper = __webpack_require__(19);

	var _RegionMapper2 = _interopRequireDefault(_RegionMapper);

	var RegionRepository = (function () {
	  function RegionRepository() {
	    _classCallCheck(this, RegionRepository);
	  }

	  _createClass(RegionRepository, null, [{
	    key: 'findAll',
	    value: function findAll() {
	      if (RegionRepository.allRegions !== undefined) {
	        return RegionRepository.allRegions;
	      }
	      return RegionRepository.allRegions = _RegionMapper2['default'].mapArrayToCollection(_RegionLoader2['default'].loadAllRegions());
	    }
	  }, {
	    key: 'findByCode',
	    value: function findByCode(code) {
	      if (RegionRepository.allRegions !== undefined) {
	        return RegionRepository.allRegions.get(code);
	      }
	      return _RegionMapper2['default'].mapArrayToEntity(_RegionLoader2['default'].loadRegion(code));
	    }
	  }, {
	    key: 'findByCountry',
	    value: function findByCountry(country) {
	      if (typeof country !== 'string') {
	        country = country.shortCode;
	      }

	      var returnValue = [];
	      var regions = RegionRepository.findAll();
	      for (var i = 0, len = regions.length; i < len; ++i) {
	        if (regions[i].country === country) {
	          returnValue.push(regions[i]);
	        }
	      }
	      return _RegionMapper2['default'].mapArrayToCollection(returnValue);
	    }
	  }]);

	  return RegionRepository;
	})();

	exports['default'] = RegionRepository;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var RegionLoader = (function () {
	  function RegionLoader() {
	    _classCallCheck(this, RegionLoader);
	  }

	  _createClass(RegionLoader, null, [{
	    key: 'loadAllRegions',
	    value: function loadAllRegions() {
	      if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
	        return window.Geo.storage[RegionLoader.allRegionsFile];
	      }
	      return __webpack_require__(14)("." + RegionLoader.storage + '/' + RegionLoader.allRegionsFile);
	    }
	  }, {
	    key: 'loadRegion',
	    value: function loadRegion(region) {
	      if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
	        return window.Geo.storage[RegionLoader.regionFile.replace('%s', region)];
	      }
	      var file = '.' + RegionLoader.storage + '/' + RegionLoader.regionFile;
	      return __webpack_require__(20)(file.replace('%s', region));
	    }
	  }, {
	    key: 'storage',
	    value: '/../../storage',
	    enumerable: true
	  }, {
	    key: 'allRegionsFile',
	    value: 'regions/regions.json',
	    enumerable: true
	  }, {
	    key: 'regionFile',
	    value: 'regions/regions/%s.json',
	    enumerable: true
	  }, {
	    key: 'regionPolygonFile',
	    value: 'regions/regions/%s/polygon.json',
	    enumerable: true
	  }]);

	  return RegionLoader;
	})();

	exports['default'] = RegionLoader;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Region": 15,
		"./Region.js": 15,
		"./RegionCollection": 18,
		"./RegionCollection.js": 18,
		"./RegionLoader": 13,
		"./RegionLoader.js": 13,
		"./RegionMapper": 19,
		"./RegionMapper.js": 19,
		"./RegionName/RegionName": 17,
		"./RegionName/RegionName.js": 17,
		"./RegionName/RegionNameCollection": 16,
		"./RegionName/RegionNameCollection.js": 16,
		"./RegionRepository": 12,
		"./RegionRepository.js": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Model2 = __webpack_require__(5);

	var _Model3 = _interopRequireDefault(_Model2);

	var _RegionNameRegionNameCollection = __webpack_require__(16);

	var _RegionNameRegionNameCollection2 = _interopRequireDefault(_RegionNameRegionNameCollection);

	var _CountryCountryRepository = __webpack_require__(1);

	var _CountryCountryRepository2 = _interopRequireDefault(_CountryCountryRepository);

	var Region = (function (_Model) {
	  _inherits(Region, _Model);

	  function Region(attributes) {
	    _classCallCheck(this, Region);

	    _get(Object.getPrototypeOf(Region.prototype), 'constructor', this).call(this);
	    this.model = {
	      names: _RegionNameRegionNameCollection2['default']
	    };
	    this.set(attributes);
	  }

	  _createClass(Region, [{
	    key: 'getCountry',
	    value: function getCountry() {
	      return _CountryCountryRepository2['default'].findByShortCode(this.country);
	    }
	  }]);

	  return Region;
	})(_Model3['default']);

	exports['default'] = Region;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ArrayCollection2 = __webpack_require__(7);

	var _ArrayCollection3 = _interopRequireDefault(_ArrayCollection2);

	var _RegionName = __webpack_require__(17);

	var _RegionName2 = _interopRequireDefault(_RegionName);

	var RegionNameCollection = (function (_ArrayCollection) {
	  _inherits(RegionNameCollection, _ArrayCollection);

	  function RegionNameCollection(items) {
	    _classCallCheck(this, RegionNameCollection);

	    _get(Object.getPrototypeOf(RegionNameCollection.prototype), 'constructor', this).call(this);
	    this.model = _RegionName2['default'];
	    this.key = 'language';
	    if (items !== undefined) {
	      this.add(items);
	    }
	  }

	  _createClass(RegionNameCollection, [{
	    key: 'add',
	    value: function add(items) {
	      for (var prop in items) {
	        if (items.hasOwnProperty(prop)) {
	          this.elements[prop] = new this.model({ language: prop, name: items[prop] });
	          this.push(this.elements[prop]);
	        }
	      }
	    }
	  }]);

	  return RegionNameCollection;
	})(_ArrayCollection3['default']);

	exports['default'] = RegionNameCollection;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Model2 = __webpack_require__(5);

	var _Model3 = _interopRequireDefault(_Model2);

	var RegionName = (function (_Model) {
	  _inherits(RegionName, _Model);

	  function RegionName(attributes) {
	    _classCallCheck(this, RegionName);

	    _get(Object.getPrototypeOf(RegionName.prototype), 'constructor', this).call(this);
	    this.set(attributes);
	  }

	  _createClass(RegionName, [{
	    key: 'set',
	    value: function set(attributes) {
	      for (var prop in attributes) {
	        if (attributes.hasOwnProperty(prop)) {
	          this[prop] = attributes[prop];
	        }
	      }
	    }
	  }]);

	  return RegionName;
	})(_Model3['default']);

	exports['default'] = RegionName;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ArrayCollection2 = __webpack_require__(7);

	var _ArrayCollection3 = _interopRequireDefault(_ArrayCollection2);

	var _Region = __webpack_require__(15);

	var _Region2 = _interopRequireDefault(_Region);

	var RegionCollection = (function (_ArrayCollection) {
	  _inherits(RegionCollection, _ArrayCollection);

	  function RegionCollection() {
	    _classCallCheck(this, RegionCollection);

	    _get(Object.getPrototypeOf(RegionCollection.prototype), 'constructor', this).apply(this, arguments);

	    this.model = _Region2['default'];
	    this.key = 'code';
	  }

	  return RegionCollection;
	})(_ArrayCollection3['default']);

	exports['default'] = RegionCollection;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _RegionCollection = __webpack_require__(18);

	var _RegionCollection2 = _interopRequireDefault(_RegionCollection);

	var _Region = __webpack_require__(15);

	var _Region2 = _interopRequireDefault(_Region);

	var RegionMapper = (function () {
	  function RegionMapper() {
	    _classCallCheck(this, RegionMapper);
	  }

	  _createClass(RegionMapper, null, [{
	    key: 'mapArrayToCollection',
	    value: function mapArrayToCollection(data) {
	      var collection = new _RegionCollection2['default']();

	      for (var i = 0, len = data.length; i < len; ++i) {
	        var country = RegionMapper.mapArrayToEntity(data[i]);
	        if (country) {
	          collection.add(country);
	        }
	      }
	      return collection;
	    }
	  }, {
	    key: 'mapArrayToEntity',
	    value: function mapArrayToEntity(attributes) {
	      return new _Region2['default'](attributes);
	    }
	  }]);

	  return RegionMapper;
	})();

	exports['default'] = RegionMapper;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Region": 15,
		"./Region.js": 15,
		"./RegionCollection": 18,
		"./RegionCollection.js": 18,
		"./RegionLoader": 13,
		"./RegionLoader.js": 13,
		"./RegionMapper": 19,
		"./RegionMapper.js": 19,
		"./RegionName/RegionName": 17,
		"./RegionName/RegionName.js": 17,
		"./RegionName/RegionNameCollection": 16,
		"./RegionName/RegionNameCollection.js": 16,
		"./RegionRepository": 12,
		"./RegionRepository.js": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 20;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	module.exports = [{
		"names": {
			"en": "Alabama",
			"fr": "Alabama",
			"de": "Alabama"
		},
		"code": "AL",
		"long_code": "US-AL",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "33.2588817",
		"longitude": "-86.8295337",
		"north": "35.0081121",
		"east": "-84.8882459",
		"south": "30.1375221",
		"west": "-88.4731354"
	}, {
		"names": {
			"en": "Alaska",
			"fr": "Alaska",
			"de": "Alaska"
		},
		"code": "AK",
		"long_code": "US-AK",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "64.4459613",
		"longitude": "-149.680909",
		"north": "71.6048217",
		"east": "180",
		"south": "51.0228712",
		"west": "-179.9999999"
	}, {
		"names": {
			"en": "Arizona",
			"fr": "Arizona",
			"de": "Arizona"
		},
		"code": "AZ",
		"long_code": "US-AZ",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "34.395342",
		"longitude": "-111.7632755",
		"north": "37.00426",
		"east": "-109.0452",
		"south": "31.332177",
		"west": "-114.8183583"
	}, {
		"names": {
			"en": "Arkansas",
			"fr": "Arkansas",
			"de": "Arkansas"
		},
		"code": "AR",
		"long_code": "US-AR",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "35.2048883",
		"longitude": "-92.4479108",
		"north": "36.4996",
		"east": "-89.6422485",
		"south": "33.004106",
		"west": "-94.6178119"
	}, {
		"names": {
			"en": "California",
			"fr": "Californie",
			"de": "Kalifornien"
		},
		"code": "CA",
		"long_code": "US-CA",
		"country": "US",
		"type": "State",
		"timezone": "America/Los_Angeles",
		"latitude": "36.7014631",
		"longitude": "-118.7559974",
		"north": "42.009499",
		"east": "-114.1307815",
		"south": "32.5295236",
		"west": "-124.4820029"
	}, {
		"names": {
			"en": "Colorado",
			"fr": "Colorado",
			"de": "Colorado"
		},
		"code": "CO",
		"long_code": "US-CO",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "38.7251776",
		"longitude": "-105.6077167",
		"north": "41.00236",
		"east": "-102.0415848",
		"south": "36.992426",
		"west": "-109.060256"
	}, {
		"names": {
			"en": "Connecticut",
			"fr": "Connecticut",
			"de": "Connecticut"
		},
		"code": "CT",
		"long_code": "US-CT",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "41.6500201",
		"longitude": "-72.7342163",
		"north": "42.050587",
		"east": "-71.7869939",
		"south": "40.9508815",
		"west": "-73.7277749"
	}, {
		"names": {
			"en": "Delaware",
			"fr": "Delaware",
			"de": "Delaware"
		},
		"code": "DE",
		"long_code": "US-DE",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "38.6920451",
		"longitude": "-75.4013315",
		"north": "39.8394337",
		"east": "-74.9849354",
		"south": "38.4511276",
		"west": "-75.7890401"
	}, {
		"names": {
			"en": "Florida",
			"fr": "Floride",
			"de": "Florida"
		},
		"code": "FL",
		"long_code": "US-FL",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "27.7567667",
		"longitude": "-81.4639835",
		"north": "31.000968",
		"east": "-79.9743059",
		"south": "24.396308",
		"west": "-87.6348959"
	}, {
		"names": {
			"en": "Georgia",
			"fr": "Géorgie",
			"de": "Georgia"
		},
		"code": "GA",
		"long_code": "US-GA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "32.3293809",
		"longitude": "-83.1137366",
		"north": "35.0008288",
		"east": "-80.751432",
		"south": "30.355757",
		"west": "-85.60512"
	}, {
		"names": {
			"en": "Hawaii",
			"fr": "Hawaï",
			"de": "Hawaii"
		},
		"code": "HI",
		"long_code": "US-HI",
		"country": "US",
		"type": "State",
		"timezone": "Pacific/Honolulu",
		"latitude": "21.2160437",
		"longitude": "-157.975203",
		"north": "28.517269",
		"east": "-154.757659",
		"south": "18.864031",
		"west": "-178.4435929"
	}, {
		"names": {
			"en": "Idaho",
			"fr": "Idaho",
			"de": "Idaho"
		},
		"code": "ID",
		"long_code": "US-ID",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "43.6447642",
		"longitude": "-114.0154071",
		"north": "49.0008447",
		"east": "-111.0435639",
		"south": "41.988057",
		"west": "-117.2430269"
	}, {
		"names": {
			"en": "Illinois",
			"fr": "Illinois",
			"de": "Illinois"
		},
		"code": "IL",
		"long_code": "US-IL",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "40.0796319",
		"longitude": "-89.4339809",
		"north": "42.5082426",
		"east": "-87.0199243",
		"south": "36.9701313",
		"west": "-91.5130517"
	}, {
		"names": {
			"en": "Indiana",
			"fr": "Indiana",
			"de": "Indiana"
		},
		"code": "IN",
		"long_code": "US-IN",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "40.3270127",
		"longitude": "-86.1746933",
		"north": "41.761368",
		"east": "-84.7846089",
		"south": "37.771742",
		"west": "-88.0997018"
	}, {
		"names": {
			"en": "Iowa",
			"fr": "Iowa",
			"de": "Iowa"
		},
		"code": "IA",
		"long_code": "US-IA",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "41.9216734",
		"longitude": "-93.3122705",
		"north": "43.5011333",
		"east": "-90.1400608",
		"south": "40.3756007",
		"west": "-96.6397161"
	}, {
		"names": {
			"en": "Kansas",
			"fr": "Kansas",
			"de": "Kansas"
		},
		"code": "KS",
		"long_code": "US-KS",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "38.27312",
		"longitude": "-98.5821872",
		"north": "40.003095",
		"east": "-94.5882048",
		"south": "36.993125",
		"west": "-102.0517562"
	}, {
		"names": {
			"en": "Kentucky",
			"fr": "Kentucky",
			"de": "Kentucky"
		},
		"code": "KY",
		"long_code": "US-KY",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "37.5726028",
		"longitude": "-85.1551411",
		"north": "39.1477997",
		"east": "-81.9645412",
		"south": "36.496719",
		"west": "-89.5715089"
	}, {
		"names": {
			"en": "Louisiana",
			"fr": "Louisiane",
			"de": "Louisiana"
		},
		"code": "LA",
		"long_code": "US-LA",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "30.8703881",
		"longitude": "-92.007126",
		"north": "33.0194557",
		"east": "-88.7583879",
		"south": "28.855127",
		"west": "-94.0431468"
	}, {
		"names": {
			"en": "Maine",
			"fr": "Maine",
			"de": "Maine"
		},
		"code": "ME",
		"long_code": "US-ME",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "45.709097",
		"longitude": "-68.8590201",
		"north": "47.4598397",
		"east": "-66.8854161",
		"south": "42.9222206",
		"west": "-71.0841693"
	}, {
		"names": {
			"en": "Maryland",
			"fr": "Maryland",
			"de": "Maryland"
		},
		"code": "MD",
		"long_code": "US-MD",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "39.5162234",
		"longitude": "-76.9382069",
		"north": "39.7229331",
		"east": "-74.9851722",
		"south": "37.8856427",
		"west": "-79.4871911"
	}, {
		"names": {
			"en": "Massachusetts",
			"fr": "Massachusetts",
			"de": "Massachusetts"
		},
		"code": "MA",
		"long_code": "US-MA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "42.3788774",
		"longitude": "-72.032366",
		"north": "42.8867135",
		"east": "-69.8601041",
		"south": "41.1888589",
		"west": "-73.5081419"
	}, {
		"names": {
			"en": "Michigan",
			"fr": "Michigan",
			"de": "Michigan"
		},
		"code": "MI",
		"long_code": "US-MI",
		"country": "US",
		"type": "State",
		"timezone": "America/Detroit",
		"latitude": "43.6211955",
		"longitude": "-84.6824346",
		"north": "48.306063",
		"east": "-82.1228055",
		"south": "41.6961536",
		"west": "-90.4186201"
	}, {
		"names": {
			"en": "Minnesota",
			"fr": "Minnesota",
			"de": "Minnesota"
		},
		"code": "MN",
		"long_code": "US-MN",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "45.9896587",
		"longitude": "-94.6113288",
		"north": "49.3844901",
		"east": "-89.4833849",
		"south": "43.4994288",
		"west": "-97.2392617"
	}, {
		"names": {
			"en": "Mississippi",
			"fr": "Mississippi",
			"de": "Mississippi"
		},
		"code": "MS",
		"long_code": "US-MS",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "32.9715645",
		"longitude": "-89.7348497",
		"north": "34.996052",
		"east": "-88.0976405",
		"south": "30.1477908",
		"west": "-91.6550089"
	}, {
		"names": {
			"en": "Missouri",
			"fr": "Missouri",
			"de": "Missouri"
		},
		"code": "MO",
		"long_code": "US-MO",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "38.7604815",
		"longitude": "-92.5617875",
		"north": "40.6136347",
		"east": "-89.0988429",
		"south": "35.995683",
		"west": "-95.7741439"
	}, {
		"names": {
			"en": "Montana",
			"fr": "Montana",
			"de": "Montana"
		},
		"code": "MT",
		"long_code": "US-MT",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "47.3752671",
		"longitude": "-109.6387579",
		"north": "49.0011094",
		"east": "-104.0395629",
		"south": "44.358221",
		"west": "-116.0500029"
	}, {
		"names": {
			"en": "Nebraska",
			"fr": "Nebraska",
			"de": "Nebraska"
		},
		"code": "NE",
		"long_code": "US-NE",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "41.7370229",
		"longitude": "-99.5873816",
		"north": "43.0016999",
		"east": "-95.3080543",
		"south": "39.9999986",
		"west": "-104.0535139"
	}, {
		"names": {
			"en": "Nevada",
			"fr": "Nevada",
			"de": "Nevada"
		},
		"code": "NV",
		"long_code": "US-NV",
		"country": "US",
		"type": "State",
		"timezone": "America/Los_Angeles",
		"latitude": "39.5158825",
		"longitude": "-116.8537227",
		"north": "42.002207",
		"east": "-114.0396479",
		"south": "35.0018757",
		"west": "-120.0057275"
	}, {
		"names": {
			"en": "New Hampshire",
			"fr": "New Hampshire",
			"de": "New Hampshire"
		},
		"code": "NH",
		"long_code": "US-NH",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "43.4849133",
		"longitude": "-71.6553992",
		"north": "45.3057789",
		"east": "-70.5613592",
		"south": "42.6970417",
		"west": "-72.5571232"
	}, {
		"names": {
			"en": "New Jersey",
			"fr": "New Jersey",
			"de": "New Jersey"
		},
		"code": "NJ",
		"long_code": "US-NJ",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "40.0757384",
		"longitude": "-74.4041622",
		"north": "41.357423",
		"east": "-73.8939789",
		"south": "38.7911303",
		"west": "-75.5633859"
	}, {
		"names": {
			"en": "New Mexico",
			"fr": "Nouveau-Mexique",
			"de": "Neumexiko"
		},
		"code": "NM",
		"long_code": "US-NM",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "34.5708167",
		"longitude": "-105.993007",
		"north": "37.0002064",
		"east": "-103.002248",
		"south": "31.332301",
		"west": "-109.0501729"
	}, {
		"names": {
			"en": "New York",
			"fr": "New York",
			"de": "New York"
		},
		"code": "NY",
		"long_code": "US-NY",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "43.1561681",
		"longitude": "-75.8449946",
		"north": "45.0158611",
		"east": "-71.7897328",
		"south": "40.477399",
		"west": "-79.7623534"
	}, {
		"names": {
			"en": "North Carolina",
			"fr": "Caroline du Nord",
			"de": "Nord-Carolina"
		},
		"code": "NC",
		"long_code": "US-NC",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "35.6729639",
		"longitude": "-79.0392919",
		"north": "36.5880363",
		"east": "-75.4001189",
		"south": "33.752878",
		"west": "-84.3218689"
	}, {
		"names": {
			"en": "North Dakota",
			"fr": "Dakota du Nord",
			"de": "Nord-Dakota"
		},
		"code": "ND",
		"long_code": "US-ND",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "47.6201461",
		"longitude": "-100.540737",
		"north": "49.0004918",
		"east": "-96.5543974",
		"south": "45.9350359",
		"west": "-104.0492649"
	}, {
		"names": {
			"en": "Ohio",
			"fr": "Ohio",
			"de": "Ohio"
		},
		"code": "OH",
		"long_code": "US-OH",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "40.2253569",
		"longitude": "-82.6881395",
		"north": "42.3232365",
		"east": "-80.5189909",
		"south": "38.4031419",
		"west": "-84.8203367"
	}, {
		"names": {
			"en": "Oklahoma",
			"fr": "Oklahoma",
			"de": "Oklahoma"
		},
		"code": "OK",
		"long_code": "US-OK",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "34.9550817",
		"longitude": "-97.2684063",
		"north": "37.002133",
		"east": "-94.4312148",
		"south": "33.6191955",
		"west": "-103.0024614"
	}, {
		"names": {
			"en": "Oregon",
			"fr": "Oregon",
			"de": "Oregon"
		},
		"code": "OR",
		"long_code": "US-OR",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "43.9792797",
		"longitude": "-120.737257",
		"north": "46.299099",
		"east": "-116.4635039",
		"south": "41.991794",
		"west": "-124.7035409"
	}, {
		"names": {
			"en": "Pennsylvania",
			"fr": "Pennsylvanie",
			"de": "Pennsylvanien"
		},
		"code": "PA",
		"long_code": "US-PA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "40.9699889",
		"longitude": "-77.7278831",
		"north": "42.5146891",
		"east": "-74.6895019",
		"south": "39.7197662",
		"west": "-80.5210832"
	}, {
		"names": {
			"en": "Rhode Island",
			"fr": "Rhode Island",
			"de": "Rhode Island"
		},
		"code": "RI",
		"long_code": "US-RI",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "41.7962409",
		"longitude": "-71.5992372",
		"north": "42.0188529",
		"east": "-71.0999606",
		"south": "41.0959868",
		"west": "-71.9074126"
	}, {
		"names": {
			"en": "South Carolina",
			"fr": "South Carolina",
			"de": "South Carolina"
		},
		"code": "SC",
		"long_code": "US-SC",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "33.6874388",
		"longitude": "-80.4363743",
		"north": "35.21554",
		"east": "-78.4993009",
		"south": "32.0333126",
		"west": "-83.3539978"
	}, {
		"names": {
			"en": "South Dakota",
			"fr": "Dakota du Sud",
			"de": "Süd-Dakota"
		},
		"code": "SD",
		"long_code": "US-SD",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "44.6471761",
		"longitude": "-100.348761",
		"north": "45.94545",
		"east": "-96.4363402",
		"south": "42.4798925",
		"west": "-104.0576979"
	}, {
		"names": {
			"en": "Tennessee",
			"fr": "Tennessee",
			"de": "Tennessee"
		},
		"code": "TN",
		"long_code": "US-TN",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "35.7730076",
		"longitude": "-86.2820081",
		"north": "36.678118",
		"east": "-81.6468999",
		"south": "34.9829822",
		"west": "-90.3102979"
	}, {
		"names": {
			"en": "Texas",
			"fr": "Texas",
			"de": "Texas"
		},
		"code": "TX",
		"long_code": "US-TX",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "31.8160381",
		"longitude": "-99.5120986",
		"north": "36.5004529",
		"east": "-93.5078216",
		"south": "25.83706",
		"west": "-106.6456459"
	}, {
		"names": {
			"en": "Utah",
			"fr": "Utah",
			"de": "Utah"
		},
		"code": "UT",
		"long_code": "US-UT",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "39.4225192",
		"longitude": "-111.7143584",
		"north": "42.0013862",
		"east": "-109.0410727",
		"south": "36.997968",
		"west": "-114.0539319"
	}, {
		"names": {
			"en": "Vermont",
			"fr": "Vermont",
			"de": "Vermont"
		},
		"code": "VT",
		"long_code": "US-VT",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "44.5990718",
		"longitude": "-72.5002608",
		"north": "45.016665",
		"east": "-71.4653565",
		"south": "42.7269329",
		"west": "-73.4377399"
	}, {
		"names": {
			"en": "Virginia",
			"fr": "Virginie",
			"de": "Virginia"
		},
		"code": "VA",
		"long_code": "US-VA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "37.1232245",
		"longitude": "-78.4927721",
		"north": "39.466012",
		"east": "-75.2312244",
		"south": "36.5407896",
		"west": "-83.6754129"
	}, {
		"names": {
			"en": "Washington",
			"fr": "Washington",
			"de": "Washington"
		},
		"code": "WA",
		"long_code": "US-WA",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "47.2868352",
		"longitude": "-120.2126139",
		"north": "49.0024392",
		"east": "-116.9174297",
		"south": "45.5437226",
		"west": "-124.8360915"
	}, {
		"names": {
			"en": "West Virginia",
			"fr": "Virginie-Occidentale",
			"de": "West Virginia"
		},
		"code": "WV",
		"long_code": "US-WV",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "38.4758406",
		"longitude": "-80.8408415",
		"north": "40.638801",
		"east": "-77.7190289",
		"south": "37.201483",
		"west": "-82.6447389"
	}, {
		"names": {
			"en": "Wisconsin",
			"fr": "Wisconsin",
			"de": "Wisconsin"
		},
		"code": "WI",
		"long_code": "US-WI",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "44.4308975",
		"longitude": "-89.6884637",
		"north": "47.3025",
		"east": "-86.2495479",
		"south": "42.4919436",
		"west": "-92.8881139"
	}, {
		"names": {
			"en": "Wyoming",
			"fr": "Wyoming",
			"de": "Wyoming"
		},
		"code": "WY",
		"long_code": "US-WY",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "43.1700264",
		"longitude": "-107.5685348",
		"north": "45.0034186",
		"east": "-104.0521599",
		"south": "40.994879",
		"west": "-111.0553309"
	}, {
		"names": {
			"en": "Washington, D.C.",
			"fr": "Washington, D.C.",
			"de": "Washington, D.C."
		},
		"code": "DC",
		"long_code": "US-DC",
		"country": "US",
		"type": "Federal District",
		"timezone": "America/New_York",
		"latitude": "38.89366125",
		"longitude": "-76.987883153882",
		"north": "38.9958524",
		"east": "-76.9093659",
		"south": "38.7916303",
		"west": "-77.1197662"
	}, {
		"names": {
			"en": "American Samoa",
			"fr": "Samoa américaines",
			"de": "American Samoa"
		},
		"code": "AS",
		"long_code": "US-AS",
		"country": "US",
		"type": "Territory",
		"timezone": null,
		"latitude": "-14.30063085",
		"longitude": "-170.695974691655",
		"north": "-10.8449745",
		"east": "-167.9322898",
		"south": "-14.7608357",
		"west": "-171.2951295"
	}, {
		"names": {
			"en": "Guam",
			"fr": "Guam",
			"de": "Guam"
		},
		"code": "GU",
		"long_code": "US-GU",
		"country": "US",
		"type": "Territory",
		"timezone": "Pacific/Guam",
		"latitude": "13.444138",
		"longitude": "144.733626445767",
		"north": "13.706179",
		"east": "145.009167",
		"south": "13.182335",
		"west": "144.563426"
	}, {
		"names": {
			"en": "Northern Mariana Islands",
			"fr": "Northern Mariana Islands",
			"de": "Northern Mariana Islands"
		},
		"code": "MP",
		"long_code": "US-MP",
		"country": "US",
		"type": "Territory",
		"timezone": "Pacific/Saipan",
		"latitude": "14.1490205",
		"longitude": "145.213452483189",
		"north": "20.616556",
		"east": "146.154418",
		"south": "14.036565",
		"west": "144.813338"
	}, {
		"names": {
			"en": "Puerto Rico",
			"fr": "Puerto Rico",
			"de": "Puerto Rico"
		},
		"code": "PR",
		"long_code": "US-PR",
		"country": "US",
		"type": "Territory",
		"timezone": null,
		"latitude": "18.2017809",
		"longitude": "-66.5841246",
		"north": "18.6663822",
		"east": "-65.0913906",
		"south": "17.7306659",
		"west": "-68.1109183"
	}, {
		"names": {
			"en": "United States Virgin Islands",
			"fr": "Îles Vierges des États-Unis",
			"de": "Amerikanische Jungferninseln"
		},
		"code": "VI",
		"long_code": "US-VI",
		"country": "US",
		"type": "Territory",
		"timezone": "America/St_Thomas",
		"latitude": "17.789187",
		"longitude": "-64.7080574",
		"north": "18.464984",
		"east": "-64.5126739",
		"south": "17.623468",
		"west": "-65.1590939"
	}, {
		"names": {
			"en": "Ontario",
			"fr": "Ontario",
			"de": "Ontario"
		},
		"code": "ON",
		"long_code": "CA-ON",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "50.0000002",
		"longitude": "-86.0000001",
		"north": "56.8593635",
		"east": "-74.3201061",
		"south": "41.6765556",
		"west": "-95.1537398"
	}, {
		"names": {
			"en": "Quebec",
			"fr": "Québec",
			"de": "Quebec"
		},
		"code": "QC",
		"long_code": "CA-QC",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "54",
		"longitude": "-72",
		"north": "62.5804863",
		"east": "-57.1054863",
		"south": "44.9913689",
		"west": "-79.7741349"
	}, {
		"names": {
			"en": "Nova Scotia",
			"fr": "Nouvelle-Écosse",
			"de": "Neuschottland"
		},
		"code": "NS",
		"long_code": "CA-NS",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Halifax",
		"latitude": "45.0000002",
		"longitude": "-62.9999999",
		"north": "47.2350807",
		"east": "-59.6188299",
		"south": "43.2517424",
		"west": "-66.4470814"
	}, {
		"names": {
			"en": "New Brunswick",
			"fr": "Nouveau-Brunswick",
			"de": "Neubraunschweig"
		},
		"code": "NB",
		"long_code": "CA-NB",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Moncton",
		"latitude": "46.5",
		"longitude": "-66.75",
		"north": "48.0893391",
		"east": "-63.6147115",
		"south": "44.5561189",
		"west": "-69.0534662"
	}, {
		"names": {
			"en": "Manitoba",
			"fr": "Manitoba",
			"de": "Manitoba"
		},
		"code": "MB",
		"long_code": "CA-MB",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Winnipeg",
		"latitude": "55.0000001",
		"longitude": "-97.0000001",
		"north": "59.99926",
		"east": "-88.990814",
		"south": "48.9989765",
		"west": "-102.0076114"
	}, {
		"names": {
			"en": "British Columbia",
			"fr": "Colombie-Britannique",
			"de": "Britisch-Kolumbien"
		},
		"code": "BC",
		"long_code": "CA-BC",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "55",
		"longitude": "-125",
		"north": "60.0023",
		"east": "-114.0538223",
		"south": "48.2245556",
		"west": "-139.0536705"
	}, {
		"names": {
			"en": "Prince Edward Island",
			"fr": "Île-du-Prince-Édouard",
			"de": "Prinz-Edward-Insel"
		},
		"code": "PE",
		"long_code": "CA-PE",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Halifax",
		"latitude": "46.3202067",
		"longitude": "-63.45941",
		"north": "47.0659678",
		"east": "-61.9648894",
		"south": "45.8580234",
		"west": "-64.446016"
	}, {
		"names": {
			"en": "Saskatchewan",
			"fr": "Saskatchewan",
			"de": "Saskatchewan"
		},
		"code": "SK",
		"long_code": "CA-SK",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "54",
		"longitude": "-106",
		"north": "59.99982",
		"east": "-101.3619075",
		"south": "48.9988056",
		"west": "-110.0063651"
	}, {
		"names": {
			"en": "Alberta",
			"fr": "Alberta",
			"de": "Alberta"
		},
		"code": "AB",
		"long_code": "CA-AB",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Edmonton",
		"latitude": "55",
		"longitude": "-114.9999999",
		"north": "60.0004216",
		"east": "-110.0047638",
		"south": "48.9966667",
		"west": "-120.0013834"
	}, {
		"names": {
			"en": "Newfoundland and Labrador",
			"fr": "Terre-Neuve et Labrador",
			"de": "Newfoundland and Labrador"
		},
		"code": "NL",
		"long_code": "CA-NL",
		"country": "CA",
		"type": "Province",
		"timezone": "America/St_Johns",
		"latitude": "52.0000002",
		"longitude": "-56.0000001",
		"north": "60.377744",
		"east": "-52.6127311",
		"south": "46.6148345",
		"west": "-67.8216852"
	}, {
		"names": {
			"en": "Northwest Territories",
			"fr": "Northwest Territories",
			"de": "Northwest Territories"
		},
		"code": "NT",
		"long_code": "CA-NT",
		"country": "CA",
		"type": "Territory",
		"timezone": null,
		"latitude": "65.0000004",
		"longitude": "-118",
		"north": "79.1299817",
		"east": "-102.0004756",
		"south": "59.99812",
		"west": "-136.5880009"
	}, {
		"names": {
			"en": "Yukon",
			"fr": "Yukon",
			"de": "Yukon"
		},
		"code": "YT",
		"long_code": "CA-YT",
		"country": "CA",
		"type": "Territory",
		"timezone": "America/Whitehorse",
		"latitude": "63.0000001",
		"longitude": "-136.0000001",
		"north": "69.84588",
		"east": "-123.811471",
		"south": "59.9948369",
		"west": "-141.0027499"
	}, {
		"names": {
			"en": "Nunavut",
			"fr": "Nunavut",
			"de": "Nunavut"
		},
		"code": "NU",
		"long_code": "CA-NU",
		"country": "CA",
		"type": "Territory",
		"timezone": null,
		"latitude": "70.0000073",
		"longitude": "-90",
		"north": "83.3362128",
		"east": "-59.6136766",
		"south": "51.1566468",
		"west": "-120.6830208"
	}];

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Yukon",
			"fr": "Yukon",
			"de": "Yukon"
		},
		"code": "YT",
		"long_code": "CA-YT",
		"country": "CA",
		"type": "Territory",
		"timezone": "America/Whitehorse",
		"latitude": "63.0000001",
		"longitude": "-136.0000001",
		"north": "69.84588",
		"east": "-123.811471",
		"south": "59.9948369",
		"west": "-141.0027499"
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Wyoming",
			"fr": "Wyoming",
			"de": "Wyoming"
		},
		"code": "WY",
		"long_code": "US-WY",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "43.1700264",
		"longitude": "-107.5685348",
		"north": "45.0034186",
		"east": "-104.0521599",
		"south": "40.994879",
		"west": "-111.0553309"
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "West Virginia",
			"fr": "Virginie-Occidentale",
			"de": "West Virginia"
		},
		"code": "WV",
		"long_code": "US-WV",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "38.4758406",
		"longitude": "-80.8408415",
		"north": "40.638801",
		"east": "-77.7190289",
		"south": "37.201483",
		"west": "-82.6447389"
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Wisconsin",
			"fr": "Wisconsin",
			"de": "Wisconsin"
		},
		"code": "WI",
		"long_code": "US-WI",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "44.4308975",
		"longitude": "-89.6884637",
		"north": "47.3025",
		"east": "-86.2495479",
		"south": "42.4919436",
		"west": "-92.8881139"
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Washington",
			"fr": "Washington",
			"de": "Washington"
		},
		"code": "WA",
		"long_code": "US-WA",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "47.2868352",
		"longitude": "-120.2126139",
		"north": "49.0024392",
		"east": "-116.9174297",
		"south": "45.5437226",
		"west": "-124.8360915"
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Vermont",
			"fr": "Vermont",
			"de": "Vermont"
		},
		"code": "VT",
		"long_code": "US-VT",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "44.5990718",
		"longitude": "-72.5002608",
		"north": "45.016665",
		"east": "-71.4653565",
		"south": "42.7269329",
		"west": "-73.4377399"
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "United States Virgin Islands",
			"fr": "Îles Vierges des États-Unis",
			"de": "Amerikanische Jungferninseln"
		},
		"code": "VI",
		"long_code": "US-VI",
		"country": "US",
		"type": "Territory",
		"timezone": "America/St_Thomas",
		"latitude": "17.789187",
		"longitude": "-64.7080574",
		"north": "18.464984",
		"east": "-64.5126739",
		"south": "17.623468",
		"west": "-65.1590939"
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Virginia",
			"fr": "Virginie",
			"de": "Virginia"
		},
		"code": "VA",
		"long_code": "US-VA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "37.1232245",
		"longitude": "-78.4927721",
		"north": "39.466012",
		"east": "-75.2312244",
		"south": "36.5407896",
		"west": "-83.6754129"
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Utah",
			"fr": "Utah",
			"de": "Utah"
		},
		"code": "UT",
		"long_code": "US-UT",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "39.4225192",
		"longitude": "-111.7143584",
		"north": "42.0013862",
		"east": "-109.0410727",
		"south": "36.997968",
		"west": "-114.0539319"
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Texas",
			"fr": "Texas",
			"de": "Texas"
		},
		"code": "TX",
		"long_code": "US-TX",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "31.8160381",
		"longitude": "-99.5120986",
		"north": "36.5004529",
		"east": "-93.5078216",
		"south": "25.83706",
		"west": "-106.6456459"
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Tennessee",
			"fr": "Tennessee",
			"de": "Tennessee"
		},
		"code": "TN",
		"long_code": "US-TN",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "35.7730076",
		"longitude": "-86.2820081",
		"north": "36.678118",
		"east": "-81.6468999",
		"south": "34.9829822",
		"west": "-90.3102979"
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Saskatchewan",
			"fr": "Saskatchewan",
			"de": "Saskatchewan"
		},
		"code": "SK",
		"long_code": "CA-SK",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "54",
		"longitude": "-106",
		"north": "59.99982",
		"east": "-101.3619075",
		"south": "48.9988056",
		"west": "-110.0063651"
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "South Dakota",
			"fr": "Dakota du Sud",
			"de": "Süd-Dakota"
		},
		"code": "SD",
		"long_code": "US-SD",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "44.6471761",
		"longitude": "-100.348761",
		"north": "45.94545",
		"east": "-96.4363402",
		"south": "42.4798925",
		"west": "-104.0576979"
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "South Carolina",
			"fr": "South Carolina",
			"de": "South Carolina"
		},
		"code": "SC",
		"long_code": "US-SC",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "33.6874388",
		"longitude": "-80.4363743",
		"north": "35.21554",
		"east": "-78.4993009",
		"south": "32.0333126",
		"west": "-83.3539978"
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Rhode Island",
			"fr": "Rhode Island",
			"de": "Rhode Island"
		},
		"code": "RI",
		"long_code": "US-RI",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "41.7962409",
		"longitude": "-71.5992372",
		"north": "42.0188529",
		"east": "-71.0999606",
		"south": "41.0959868",
		"west": "-71.9074126"
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Quebec",
			"fr": "Québec",
			"de": "Quebec"
		},
		"code": "QC",
		"long_code": "CA-QC",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "54",
		"longitude": "-72",
		"north": "62.5804863",
		"east": "-57.1054863",
		"south": "44.9913689",
		"west": "-79.7741349"
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Puerto Rico",
			"fr": "Puerto Rico",
			"de": "Puerto Rico"
		},
		"code": "PR",
		"long_code": "US-PR",
		"country": "US",
		"type": "Territory",
		"timezone": null,
		"latitude": "18.2017809",
		"longitude": "-66.5841246",
		"north": "18.6663822",
		"east": "-65.0913906",
		"south": "17.7306659",
		"west": "-68.1109183"
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Prince Edward Island",
			"fr": "Île-du-Prince-Édouard",
			"de": "Prinz-Edward-Insel"
		},
		"code": "PE",
		"long_code": "CA-PE",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Halifax",
		"latitude": "46.3202067",
		"longitude": "-63.45941",
		"north": "47.0659678",
		"east": "-61.9648894",
		"south": "45.8580234",
		"west": "-64.446016"
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Pennsylvania",
			"fr": "Pennsylvanie",
			"de": "Pennsylvanien"
		},
		"code": "PA",
		"long_code": "US-PA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "40.9699889",
		"longitude": "-77.7278831",
		"north": "42.5146891",
		"east": "-74.6895019",
		"south": "39.7197662",
		"west": "-80.5210832"
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Oregon",
			"fr": "Oregon",
			"de": "Oregon"
		},
		"code": "OR",
		"long_code": "US-OR",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "43.9792797",
		"longitude": "-120.737257",
		"north": "46.299099",
		"east": "-116.4635039",
		"south": "41.991794",
		"west": "-124.7035409"
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Ontario",
			"fr": "Ontario",
			"de": "Ontario"
		},
		"code": "ON",
		"long_code": "CA-ON",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "50.0000002",
		"longitude": "-86.0000001",
		"north": "56.8593635",
		"east": "-74.3201061",
		"south": "41.6765556",
		"west": "-95.1537398"
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Oklahoma",
			"fr": "Oklahoma",
			"de": "Oklahoma"
		},
		"code": "OK",
		"long_code": "US-OK",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "34.9550817",
		"longitude": "-97.2684063",
		"north": "37.002133",
		"east": "-94.4312148",
		"south": "33.6191955",
		"west": "-103.0024614"
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Ohio",
			"fr": "Ohio",
			"de": "Ohio"
		},
		"code": "OH",
		"long_code": "US-OH",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "40.2253569",
		"longitude": "-82.6881395",
		"north": "42.3232365",
		"east": "-80.5189909",
		"south": "38.4031419",
		"west": "-84.8203367"
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "New York",
			"fr": "New York",
			"de": "New York"
		},
		"code": "NY",
		"long_code": "US-NY",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "43.1561681",
		"longitude": "-75.8449946",
		"north": "45.0158611",
		"east": "-71.7897328",
		"south": "40.477399",
		"west": "-79.7623534"
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Nevada",
			"fr": "Nevada",
			"de": "Nevada"
		},
		"code": "NV",
		"long_code": "US-NV",
		"country": "US",
		"type": "State",
		"timezone": "America/Los_Angeles",
		"latitude": "39.5158825",
		"longitude": "-116.8537227",
		"north": "42.002207",
		"east": "-114.0396479",
		"south": "35.0018757",
		"west": "-120.0057275"
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Nunavut",
			"fr": "Nunavut",
			"de": "Nunavut"
		},
		"code": "NU",
		"long_code": "CA-NU",
		"country": "CA",
		"type": "Territory",
		"timezone": null,
		"latitude": "70.0000073",
		"longitude": "-90",
		"north": "83.3362128",
		"east": "-59.6136766",
		"south": "51.1566468",
		"west": "-120.6830208"
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Northwest Territories",
			"fr": "Northwest Territories",
			"de": "Northwest Territories"
		},
		"code": "NT",
		"long_code": "CA-NT",
		"country": "CA",
		"type": "Territory",
		"timezone": null,
		"latitude": "65.0000004",
		"longitude": "-118",
		"north": "79.1299817",
		"east": "-102.0004756",
		"south": "59.99812",
		"west": "-136.5880009"
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Nova Scotia",
			"fr": "Nouvelle-Écosse",
			"de": "Neuschottland"
		},
		"code": "NS",
		"long_code": "CA-NS",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Halifax",
		"latitude": "45.0000002",
		"longitude": "-62.9999999",
		"north": "47.2350807",
		"east": "-59.6188299",
		"south": "43.2517424",
		"west": "-66.4470814"
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "New Mexico",
			"fr": "Nouveau-Mexique",
			"de": "Neumexiko"
		},
		"code": "NM",
		"long_code": "US-NM",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "34.5708167",
		"longitude": "-105.993007",
		"north": "37.0002064",
		"east": "-103.002248",
		"south": "31.332301",
		"west": "-109.0501729"
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Newfoundland and Labrador",
			"fr": "Terre-Neuve et Labrador",
			"de": "Newfoundland and Labrador"
		},
		"code": "NL",
		"long_code": "CA-NL",
		"country": "CA",
		"type": "Province",
		"timezone": "America/St_Johns",
		"latitude": "52.0000002",
		"longitude": "-56.0000001",
		"north": "60.377744",
		"east": "-52.6127311",
		"south": "46.6148345",
		"west": "-67.8216852"
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "New Jersey",
			"fr": "New Jersey",
			"de": "New Jersey"
		},
		"code": "NJ",
		"long_code": "US-NJ",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "40.0757384",
		"longitude": "-74.4041622",
		"north": "41.357423",
		"east": "-73.8939789",
		"south": "38.7911303",
		"west": "-75.5633859"
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "New Hampshire",
			"fr": "New Hampshire",
			"de": "New Hampshire"
		},
		"code": "NH",
		"long_code": "US-NH",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "43.4849133",
		"longitude": "-71.6553992",
		"north": "45.3057789",
		"east": "-70.5613592",
		"south": "42.6970417",
		"west": "-72.5571232"
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Nebraska",
			"fr": "Nebraska",
			"de": "Nebraska"
		},
		"code": "NE",
		"long_code": "US-NE",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "41.7370229",
		"longitude": "-99.5873816",
		"north": "43.0016999",
		"east": "-95.3080543",
		"south": "39.9999986",
		"west": "-104.0535139"
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "North Dakota",
			"fr": "Dakota du Nord",
			"de": "Nord-Dakota"
		},
		"code": "ND",
		"long_code": "US-ND",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "47.6201461",
		"longitude": "-100.540737",
		"north": "49.0004918",
		"east": "-96.5543974",
		"south": "45.9350359",
		"west": "-104.0492649"
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "North Carolina",
			"fr": "Caroline du Nord",
			"de": "Nord-Carolina"
		},
		"code": "NC",
		"long_code": "US-NC",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "35.6729639",
		"longitude": "-79.0392919",
		"north": "36.5880363",
		"east": "-75.4001189",
		"south": "33.752878",
		"west": "-84.3218689"
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "New Brunswick",
			"fr": "Nouveau-Brunswick",
			"de": "Neubraunschweig"
		},
		"code": "NB",
		"long_code": "CA-NB",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Moncton",
		"latitude": "46.5",
		"longitude": "-66.75",
		"north": "48.0893391",
		"east": "-63.6147115",
		"south": "44.5561189",
		"west": "-69.0534662"
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Montana",
			"fr": "Montana",
			"de": "Montana"
		},
		"code": "MT",
		"long_code": "US-MT",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "47.3752671",
		"longitude": "-109.6387579",
		"north": "49.0011094",
		"east": "-104.0395629",
		"south": "44.358221",
		"west": "-116.0500029"
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Mississippi",
			"fr": "Mississippi",
			"de": "Mississippi"
		},
		"code": "MS",
		"long_code": "US-MS",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "32.9715645",
		"longitude": "-89.7348497",
		"north": "34.996052",
		"east": "-88.0976405",
		"south": "30.1477908",
		"west": "-91.6550089"
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Northern Mariana Islands",
			"fr": "Northern Mariana Islands",
			"de": "Northern Mariana Islands"
		},
		"code": "MP",
		"long_code": "US-MP",
		"country": "US",
		"type": "Territory",
		"timezone": "Pacific/Saipan",
		"latitude": "14.1490205",
		"longitude": "145.213452483189",
		"north": "20.616556",
		"east": "146.154418",
		"south": "14.036565",
		"west": "144.813338"
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Missouri",
			"fr": "Missouri",
			"de": "Missouri"
		},
		"code": "MO",
		"long_code": "US-MO",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "38.7604815",
		"longitude": "-92.5617875",
		"north": "40.6136347",
		"east": "-89.0988429",
		"south": "35.995683",
		"west": "-95.7741439"
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Minnesota",
			"fr": "Minnesota",
			"de": "Minnesota"
		},
		"code": "MN",
		"long_code": "US-MN",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "45.9896587",
		"longitude": "-94.6113288",
		"north": "49.3844901",
		"east": "-89.4833849",
		"south": "43.4994288",
		"west": "-97.2392617"
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Michigan",
			"fr": "Michigan",
			"de": "Michigan"
		},
		"code": "MI",
		"long_code": "US-MI",
		"country": "US",
		"type": "State",
		"timezone": "America/Detroit",
		"latitude": "43.6211955",
		"longitude": "-84.6824346",
		"north": "48.306063",
		"east": "-82.1228055",
		"south": "41.6961536",
		"west": "-90.4186201"
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Maine",
			"fr": "Maine",
			"de": "Maine"
		},
		"code": "ME",
		"long_code": "US-ME",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "45.709097",
		"longitude": "-68.8590201",
		"north": "47.4598397",
		"east": "-66.8854161",
		"south": "42.9222206",
		"west": "-71.0841693"
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Maryland",
			"fr": "Maryland",
			"de": "Maryland"
		},
		"code": "MD",
		"long_code": "US-MD",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "39.5162234",
		"longitude": "-76.9382069",
		"north": "39.7229331",
		"east": "-74.9851722",
		"south": "37.8856427",
		"west": "-79.4871911"
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Manitoba",
			"fr": "Manitoba",
			"de": "Manitoba"
		},
		"code": "MB",
		"long_code": "CA-MB",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Winnipeg",
		"latitude": "55.0000001",
		"longitude": "-97.0000001",
		"north": "59.99926",
		"east": "-88.990814",
		"south": "48.9989765",
		"west": "-102.0076114"
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Massachusetts",
			"fr": "Massachusetts",
			"de": "Massachusetts"
		},
		"code": "MA",
		"long_code": "US-MA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "42.3788774",
		"longitude": "-72.032366",
		"north": "42.8867135",
		"east": "-69.8601041",
		"south": "41.1888589",
		"west": "-73.5081419"
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Louisiana",
			"fr": "Louisiane",
			"de": "Louisiana"
		},
		"code": "LA",
		"long_code": "US-LA",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "30.8703881",
		"longitude": "-92.007126",
		"north": "33.0194557",
		"east": "-88.7583879",
		"south": "28.855127",
		"west": "-94.0431468"
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Kentucky",
			"fr": "Kentucky",
			"de": "Kentucky"
		},
		"code": "KY",
		"long_code": "US-KY",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "37.5726028",
		"longitude": "-85.1551411",
		"north": "39.1477997",
		"east": "-81.9645412",
		"south": "36.496719",
		"west": "-89.5715089"
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Kansas",
			"fr": "Kansas",
			"de": "Kansas"
		},
		"code": "KS",
		"long_code": "US-KS",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "38.27312",
		"longitude": "-98.5821872",
		"north": "40.003095",
		"east": "-94.5882048",
		"south": "36.993125",
		"west": "-102.0517562"
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Indiana",
			"fr": "Indiana",
			"de": "Indiana"
		},
		"code": "IN",
		"long_code": "US-IN",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "40.3270127",
		"longitude": "-86.1746933",
		"north": "41.761368",
		"east": "-84.7846089",
		"south": "37.771742",
		"west": "-88.0997018"
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Illinois",
			"fr": "Illinois",
			"de": "Illinois"
		},
		"code": "IL",
		"long_code": "US-IL",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "40.0796319",
		"longitude": "-89.4339809",
		"north": "42.5082426",
		"east": "-87.0199243",
		"south": "36.9701313",
		"west": "-91.5130517"
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Idaho",
			"fr": "Idaho",
			"de": "Idaho"
		},
		"code": "ID",
		"long_code": "US-ID",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "43.6447642",
		"longitude": "-114.0154071",
		"north": "49.0008447",
		"east": "-111.0435639",
		"south": "41.988057",
		"west": "-117.2430269"
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Iowa",
			"fr": "Iowa",
			"de": "Iowa"
		},
		"code": "IA",
		"long_code": "US-IA",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "41.9216734",
		"longitude": "-93.3122705",
		"north": "43.5011333",
		"east": "-90.1400608",
		"south": "40.3756007",
		"west": "-96.6397161"
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Hawaii",
			"fr": "Hawaï",
			"de": "Hawaii"
		},
		"code": "HI",
		"long_code": "US-HI",
		"country": "US",
		"type": "State",
		"timezone": "Pacific/Honolulu",
		"latitude": "21.2160437",
		"longitude": "-157.975203",
		"north": "28.517269",
		"east": "-154.757659",
		"south": "18.864031",
		"west": "-178.4435929"
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Guam",
			"fr": "Guam",
			"de": "Guam"
		},
		"code": "GU",
		"long_code": "US-GU",
		"country": "US",
		"type": "Territory",
		"timezone": "Pacific/Guam",
		"latitude": "13.444138",
		"longitude": "144.733626445767",
		"north": "13.706179",
		"east": "145.009167",
		"south": "13.182335",
		"west": "144.563426"
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Georgia",
			"fr": "Géorgie",
			"de": "Georgia"
		},
		"code": "GA",
		"long_code": "US-GA",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "32.3293809",
		"longitude": "-83.1137366",
		"north": "35.0008288",
		"east": "-80.751432",
		"south": "30.355757",
		"west": "-85.60512"
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Florida",
			"fr": "Floride",
			"de": "Florida"
		},
		"code": "FL",
		"long_code": "US-FL",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "27.7567667",
		"longitude": "-81.4639835",
		"north": "31.000968",
		"east": "-79.9743059",
		"south": "24.396308",
		"west": "-87.6348959"
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Delaware",
			"fr": "Delaware",
			"de": "Delaware"
		},
		"code": "DE",
		"long_code": "US-DE",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "38.6920451",
		"longitude": "-75.4013315",
		"north": "39.8394337",
		"east": "-74.9849354",
		"south": "38.4511276",
		"west": "-75.7890401"
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Washington, D.C.",
			"fr": "Washington, D.C.",
			"de": "Washington, D.C."
		},
		"code": "DC",
		"long_code": "US-DC",
		"country": "US",
		"type": "Federal District",
		"timezone": "America/New_York",
		"latitude": "38.89366125",
		"longitude": "-76.987883153882",
		"north": "38.9958524",
		"east": "-76.9093659",
		"south": "38.7916303",
		"west": "-77.1197662"
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Connecticut",
			"fr": "Connecticut",
			"de": "Connecticut"
		},
		"code": "CT",
		"long_code": "US-CT",
		"country": "US",
		"type": "State",
		"timezone": "America/New_York",
		"latitude": "41.6500201",
		"longitude": "-72.7342163",
		"north": "42.050587",
		"east": "-71.7869939",
		"south": "40.9508815",
		"west": "-73.7277749"
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Colorado",
			"fr": "Colorado",
			"de": "Colorado"
		},
		"code": "CO",
		"long_code": "US-CO",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "38.7251776",
		"longitude": "-105.6077167",
		"north": "41.00236",
		"east": "-102.0415848",
		"south": "36.992426",
		"west": "-109.060256"
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "California",
			"fr": "Californie",
			"de": "Kalifornien"
		},
		"code": "CA",
		"long_code": "US-CA",
		"country": "US",
		"type": "State",
		"timezone": "America/Los_Angeles",
		"latitude": "36.7014631",
		"longitude": "-118.7559974",
		"north": "42.009499",
		"east": "-114.1307815",
		"south": "32.5295236",
		"west": "-124.4820029"
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "British Columbia",
			"fr": "Colombie-Britannique",
			"de": "Britisch-Kolumbien"
		},
		"code": "BC",
		"long_code": "CA-BC",
		"country": "CA",
		"type": "Province",
		"timezone": null,
		"latitude": "55",
		"longitude": "-125",
		"north": "60.0023",
		"east": "-114.0538223",
		"south": "48.2245556",
		"west": "-139.0536705"
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Arizona",
			"fr": "Arizona",
			"de": "Arizona"
		},
		"code": "AZ",
		"long_code": "US-AZ",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "34.395342",
		"longitude": "-111.7632755",
		"north": "37.00426",
		"east": "-109.0452",
		"south": "31.332177",
		"west": "-114.8183583"
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "American Samoa",
			"fr": "Samoa américaines",
			"de": "American Samoa"
		},
		"code": "AS",
		"long_code": "US-AS",
		"country": "US",
		"type": "Territory",
		"timezone": null,
		"latitude": "-14.30063085",
		"longitude": "-170.695974691655",
		"north": "-10.8449745",
		"east": "-167.9322898",
		"south": "-14.7608357",
		"west": "-171.2951295"
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Arkansas",
			"fr": "Arkansas",
			"de": "Arkansas"
		},
		"code": "AR",
		"long_code": "US-AR",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "35.2048883",
		"longitude": "-92.4479108",
		"north": "36.4996",
		"east": "-89.6422485",
		"south": "33.004106",
		"west": "-94.6178119"
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Alabama",
			"fr": "Alabama",
			"de": "Alabama"
		},
		"code": "AL",
		"long_code": "US-AL",
		"country": "US",
		"type": "State",
		"timezone": "America/Chicago",
		"latitude": "33.2588817",
		"longitude": "-86.8295337",
		"north": "35.0081121",
		"east": "-84.8882459",
		"south": "30.1375221",
		"west": "-88.4731354"
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Alaska",
			"fr": "Alaska",
			"de": "Alaska"
		},
		"code": "AK",
		"long_code": "US-AK",
		"country": "US",
		"type": "State",
		"timezone": null,
		"latitude": "64.4459613",
		"longitude": "-149.680909",
		"north": "71.6048217",
		"east": "180",
		"south": "51.0228712",
		"west": "-179.9999999"
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"names": {
			"en": "Alberta",
			"fr": "Alberta",
			"de": "Alberta"
		},
		"code": "AB",
		"long_code": "CA-AB",
		"country": "CA",
		"type": "Province",
		"timezone": "America/Edmonton",
		"latitude": "55",
		"longitude": "-114.9999999",
		"north": "60.0004216",
		"east": "-110.0047638",
		"south": "48.9966667",
		"west": "-120.0013834"
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";module.exports = [{"shortCode":"AD","code":"AND","names":{"en":"Andorra","fr":"Andorre","de":"Andorra"},"currency":"EUR","continent":"EU","population":"84000","area":"468.0","capital":"Andorra la Vella","latitude":"42.5407167","longitude":"1.5732033","north":"42.6560438963","east":"1.786542777832","south":"42.428492598768","west":"1.4071867141113","timezone":"Europe/Andorra"},{"shortCode":"AE","code":"ARE","names":{"en":"United Arab Emirates","fr":"Émirats Arabes Unis","de":"Vereinigte Arabische Emirate"},"currency":"AED","continent":"AS","population":"4975593","area":"82880.0","capital":"Abu Dhabi","latitude":"24.0002488","longitude":"53.9994829","north":"26.084159851074","east":"56.381660461426","south":"22.633329391479","west":"51.58332824707","timezone":"Asia/Dubai"},{"shortCode":"AF","code":"AFG","names":{"en":"Afghanistan","fr":"Afghanistan","de":"Afghanistan"},"currency":"AFN","continent":"AS","population":"29121286","area":"647500.0","capital":"Kabul","latitude":"33.0000866","longitude":"64.9998468","north":"38.483418","east":"74.879448","south":"29.377472","west":"60.478443","timezone":"Asia/Kabul"},{"shortCode":"AG","code":"ATG","names":{"en":"Antigua and Barbuda","fr":"Antigua et Barbuda","de":"Antigua und Barbuda"},"currency":"XCD","continent":"NA","population":"86754","area":"443.0","capital":"St. John's","latitude":"17.079128","longitude":"-61.8222516","north":"17.729387","east":"-61.672421","south":"16.996979","west":"-61.906425","timezone":"America/Antigua"},{"shortCode":"AI","code":"AIA","names":{"en":"Anguilla","fr":"Anguilla","de":"Anguilla"},"currency":"XCD","continent":"NA","population":"13254","area":"102.0","capital":"The Valley","latitude":"18.1954947","longitude":"-63.0750234","north":"18.283424","east":"-62.971359","south":"18.166815","west":"-63.172901","timezone":null},{"shortCode":"AL","code":"ALB","names":{"en":"Albania","fr":"Albanie","de":"Albanien"},"currency":"ALL","continent":"EU","population":"2986952","area":"28748.0","capital":"Tirana","latitude":"41.000028","longitude":"19.9999619","north":"42.665611","east":"21.068472","south":"39.648361","west":"19.293972","timezone":"Europe/Tirane"},{"shortCode":"AM","code":"ARM","names":{"en":"Armenia","fr":"Arménie","de":"Armenien"},"currency":"AMD","continent":"AS","population":"2968000","area":"29800.0","capital":"Yerevan","latitude":"40.7696272","longitude":"44.6736646","north":"41.301834","east":"46.77243504516","south":"38.830528","west":"43.44978","timezone":"Asia/Yerevan"},{"shortCode":"AO","code":"AGO","names":{"en":"Angola","fr":"Angola","de":"Angola"},"currency":"AOA","continent":"AF","population":"13068161","area":"1246700.0","capital":"Luanda","latitude":"-11.8775768","longitude":"17.5691241","north":"-4.376826","east":"24.082119","south":"-18.042076","west":"11.679219","timezone":"Africa/Luanda"},{"shortCode":"AQ","code":"ATA","names":{"en":"Antarctica","fr":"Antarctique","de":"Antarktis"},"currency":"","continent":"AN","population":"0","area":"1.4E7","capital":"","latitude":null,"longitude":null,"north":"-60.515533","east":"179.9999","south":"-89.9999","west":"-179.9999","timezone":null},{"shortCode":"AR","code":"ARG","names":{"en":"Argentina","fr":"Argentine","de":"Argentinien"},"currency":"ARS","continent":"SA","population":"41343201","area":"2766890.0","capital":"Buenos Aires","latitude":"-35.0039032","longitude":"-65.2699754","north":"-21.781277","east":"-53.591835","south":"-55.061314","west":"-73.58297","timezone":null},{"shortCode":"AS","code":"ASM","names":{"en":"American Samoa","fr":"Samoa américaines","de":"Amerikanisch-Samoa"},"currency":"USD","continent":"OC","population":"57881","area":"199.0","capital":"Pago Pago","latitude":null,"longitude":null,"north":"-11.0497","east":"-169.416077","south":"-14.382478","west":"-171.091888","timezone":null},{"shortCode":"AT","code":"AUT","names":{"en":"Austria","fr":"Autriche","de":"Österreich"},"currency":"EUR","continent":"EU","population":"8205000","area":"83858.0","capital":"Vienna","latitude":"47.2000338","longitude":"13.199959","north":"49.021162769139","east":"17.16206856526","south":"46.372652021624","west":"9.5309523724083","timezone":"Europe/Vienna"},{"shortCode":"AU","code":"AUS","names":{"en":"Australia","fr":"Australie","de":"Australien"},"currency":"AUD","continent":"OC","population":"21515754","area":"7686850.0","capital":"Canberra","latitude":"-24.7761086","longitude":"134.755","north":"-10.062805","east":"153.639252","south":"-43.64397","west":"112.911057","timezone":null},{"shortCode":"AW","code":"ABW","names":{"en":"Aruba","fr":"Aruba","de":"Aruba"},"currency":"AWG","continent":"NA","population":"71566","area":"193.0","capital":"Oranjestad","latitude":null,"longitude":null,"north":"12.623718127153","east":"-69.86575120105","south":"12.411707706191","west":"-70.064473719605","timezone":null},{"shortCode":"AX","code":"ALA","names":{"en":"Åland","fr":"Îles Åland","de":"Alandinseln"},"currency":"EUR","continent":"EU","population":"26711","area":"","capital":"Mariehamn","latitude":null,"longitude":null,"north":"60.488861","east":"21.011862","south":"59.90675","west":"19.317694","timezone":null},{"shortCode":"AZ","code":"AZE","names":{"en":"Azerbaijan","fr":"Azerbaïdjan","de":"Aserbaidschan"},"currency":"AZN","continent":"AS","population":"8303512","area":"86600.0","capital":"Baku","latitude":"40.1636668","longitude":"47.8207429","north":"41.90564","east":"50.370083","south":"38.389152526855","west":"44.774113","timezone":"Asia/Baku"},{"shortCode":"BA","code":"BIH","names":{"en":"Bosnia and Herzegovina","fr":"Bosnie-Herzégovine","de":"Bosnien und Herzegowina"},"currency":"BAM","continent":"EU","population":"4590000","area":"51129.0","capital":"Sarajevo","latitude":"44.3092405","longitude":"17.5859673","north":"45.239193","east":"19.622223","south":"42.546112","west":"15.718945","timezone":"Europe/Sarajevo"},{"shortCode":"BB","code":"BRB","names":{"en":"Barbados","fr":"Barbade","de":"Barbados"},"currency":"BBD","continent":"NA","population":"285653","area":"431.0","capital":"Bridgetown","latitude":"13.1500331","longitude":"-59.5250305","north":"13.327257","east":"-59.420376","south":"13.039844","west":"-59.648922","timezone":"America/Barbados"},{"shortCode":"BD","code":"BGD","names":{"en":"Bangladesh","fr":"Bangladesh","de":"Bangladesch"},"currency":"BDT","continent":"AS","population":"156118464","area":"144000.0","capital":"Dhaka","latitude":"24.4768783","longitude":"90.2932426","north":"26.631945","east":"92.673668","south":"20.743334","west":"88.028336","timezone":"Asia/Dhaka"},{"shortCode":"BE","code":"BEL","names":{"en":"Belgium","fr":"Belgique","de":"Belgien"},"currency":"EUR","continent":"EU","population":"10403000","area":"30510.0","capital":"Brussels","latitude":"50.6407351","longitude":"4.66696","north":"51.505444","east":"6.403861","south":"49.49361","west":"2.546944","timezone":"Europe/Brussels"},{"shortCode":"BF","code":"BFA","names":{"en":"Burkina Faso","fr":"Burkina Faso","de":"Burkina Faso"},"currency":"XOF","continent":"AF","population":"16241811","area":"274200.0","capital":"Ouagadougou","latitude":"12.0753083","longitude":"-1.6880314","north":"15.082593","east":"2.405395","south":"9.401108","west":"-5.518916","timezone":"Africa/Ouagadougou"},{"shortCode":"BG","code":"BGR","names":{"en":"Bulgaria","fr":"Bulgarie","de":"Bulgarien"},"currency":"BGN","continent":"EU","population":"7148785","area":"110910.0","capital":"Sofia","latitude":"42.6073975","longitude":"25.4856617","north":"44.21764","east":"28.612167","south":"41.242084","west":"22.371166","timezone":"Europe/Sofia"},{"shortCode":"BH","code":"BHR","names":{"en":"Bahrain","fr":"Bahreïn","de":"Bahrain"},"currency":"BHD","continent":"AS","population":"738004","area":"665.0","capital":"Manama","latitude":"26.1551249","longitude":"50.5344606","north":"26.282583","east":"50.664471","south":"25.796862","west":"50.45414","timezone":"Asia/Bahrain"},{"shortCode":"BI","code":"BDI","names":{"en":"Burundi","fr":"Burundi","de":"Burundi"},"currency":"BIF","continent":"AF","population":"9863117","area":"27830.0","capital":"Bujumbura","latitude":"-3.3634357","longitude":"29.8870575","north":"-2.310123","east":"30.847729","south":"-4.465713","west":"28.993061","timezone":"Africa/Bujumbura"},{"shortCode":"BJ","code":"BEN","names":{"en":"Benin","fr":"Bénin","de":"Benin"},"currency":"XOF","continent":"AF","population":"9056010","area":"112620.0","capital":"Porto-Novo","latitude":"9.5293472","longitude":"2.2584408","north":"12.418347","east":"3.851701","south":"6.225748","west":"0.774575","timezone":"Africa/Porto-Novo"},{"shortCode":"BL","code":"BLM","names":{"en":"Saint Barthélemy","fr":"Saint-Barthélémy","de":"St. Barthélemy"},"currency":"EUR","continent":"NA","population":"8450","area":"21.0","capital":"Gustavia","latitude":null,"longitude":null,"north":"17.928808791949","east":"-62.788983372986","south":"17.878183227406","west":"-62.873911825378","timezone":null},{"shortCode":"BM","code":"BMU","names":{"en":"Bermuda","fr":"Bermudes","de":"Bermuda"},"currency":"BMD","continent":"NA","population":"65365","area":"53.0","capital":"Hamilton","latitude":"32.3018217","longitude":"-64.7603583","north":"32.393833","east":"-64.651993","south":"32.246639","west":"-64.89605","timezone":"Atlantic/Bermuda"},{"shortCode":"BN","code":"BRN","names":{"en":"Brunei","fr":"Brunéi Darussalam","de":"Brunei"},"currency":"BND","continent":"AS","population":"395027","area":"5770.0","capital":"Bandar Seri Begawan","latitude":"4.4137155","longitude":"114.5653908","north":"5.047167","east":"115.359444","south":"4.003083","west":"114.071442","timezone":"Asia/Brunei"},{"shortCode":"BO","code":"BOL","names":{"en":"Bolivia","fr":"Bolivie","de":"Bolivien"},"currency":"BOB","continent":"SA","population":"9947418","area":"1098580.0","capital":"Sucre","latitude":"-17.0568696","longitude":"-64.9912286","north":"-9.680567","east":"-57.458096","south":"-22.896133","west":"-69.640762","timezone":"America/La_Paz"},{"shortCode":"BQ","code":"BES","names":{"en":"Bonaire","fr":"Bonaire, Saint-Eustache et Saba","de":"Bonaire"},"currency":"USD","continent":"NA","population":"18012","area":"","capital":"","latitude":null,"longitude":null,"north":"12.304535","east":"-68.192307","south":"12.017149","west":"-68.416458","timezone":null},{"shortCode":"BR","code":"BRA","names":{"en":"Brazil","fr":"Brésil","de":"Brasilien"},"currency":"BRL","continent":"SA","population":"201103330","area":"8511965.0","capital":"Brasília","latitude":"-10.3333333","longitude":"-53.2","north":"5.264877","east":"-32.392998","south":"-33.750706","west":"-73.985535","timezone":null},{"shortCode":"BS","code":"BHS","names":{"en":"Bahamas","fr":"Bahamas","de":"Bahamas"},"currency":"BSD","continent":"NA","population":"301790","area":"13940.0","capital":"Nassau","latitude":"24.7736546","longitude":"-78.0000547","north":"26.919243","east":"-74.423874","south":"22.852743","west":"-78.995911","timezone":"America/Nassau"},{"shortCode":"BT","code":"BTN","names":{"en":"Bhutan","fr":"Bhutan","de":"Bhutan"},"currency":"BTN","continent":"AS","population":"699847","area":"47000.0","capital":"Thimphu","latitude":"27.549511","longitude":"90.5119273","north":"28.323778","east":"92.125191","south":"26.70764","west":"88.75972","timezone":"Asia/Thimphu"},{"shortCode":"BV","code":"BVT","names":{"en":"Bouvet Island","fr":"Île Bouvet","de":"Bouvetinsel"},"currency":"NOK","continent":"AN","population":"0","area":"","capital":"","latitude":null,"longitude":null,"north":"-54.400322","east":"3.487976","south":"-54.462383","west":"3.335499","timezone":null},{"shortCode":"BW","code":"BWA","names":{"en":"Botswana","fr":"Botswana","de":"Botsuana"},"currency":"BWP","continent":"AF","population":"2029307","area":"600370.0","capital":"Gaborone","latitude":"-23.1681782","longitude":"24.5928742","north":"-17.780813","east":"29.360781","south":"-26.907246","west":"19.999535","timezone":"Africa/Gaborone"},{"shortCode":"BY","code":"BLR","names":{"en":"Belarus","fr":"Biélorussie","de":"Weißrussland"},"currency":"BYR","continent":"EU","population":"9685000","area":"207600.0","capital":"Minsk","latitude":"53.4250605","longitude":"27.6971358","north":"56.165806","east":"32.770805","south":"51.256416","west":"23.176889","timezone":"Europe/Minsk"},{"shortCode":"BZ","code":"BLZ","names":{"en":"Belize","fr":"Belize","de":"Belize"},"currency":"BZD","continent":"NA","population":"314522","area":"22966.0","capital":"Belmopan","latitude":"16.8259793","longitude":"-88.7600927","north":"18.496557","east":"-87.776985","south":"15.8893","west":"-89.224815","timezone":"America/Belize"},{"shortCode":"CA","code":"CAN","names":{"en":"Canada","fr":"Canada","de":"Kanada"},"currency":"CAD","continent":"NA","population":"33679000","area":"9984670.0","capital":"Ottawa","latitude":"61.0666922","longitude":"-107.9917071","north":"83.110626","east":"-52.636291","south":"41.67598","west":"-141","timezone":null},{"shortCode":"CC","code":"CCK","names":{"en":"Cocos [Keeling] Islands","fr":"Îles Cocos","de":"Kokosinseln"},"currency":"AUD","continent":"AS","population":"628","area":"14.0","capital":"West Island","latitude":null,"longitude":null,"north":"-12.072459094","east":"96.929489344","south":"-12.208725839","west":"96.816941408","timezone":null},{"shortCode":"CD","code":"COD","names":{"en":"Democratic Republic of the Congo","fr":"RDC","de":"Demokratische Republik Kongo"},"currency":"CDF","continent":"AF","population":"70916439","area":"2345410.0","capital":"Kinshasa","latitude":"-2.9814344","longitude":"23.8222636","north":"5.386098","east":"31.305912","south":"-13.455675","west":"12.204144","timezone":null},{"shortCode":"CF","code":"CAF","names":{"en":"Central African Republic","fr":"Centrafrique","de":"Zentralafrikanische Republik"},"currency":"XAF","continent":"AF","population":"4844927","area":"622984.0","capital":"Bangui","latitude":"7.0323598","longitude":"19.9981227","north":"11.007569","east":"27.463421","south":"2.220514","west":"14.420097","timezone":"Africa/Bangui"},{"shortCode":"CG","code":"COG","names":{"en":"Republic of the Congo","fr":"Congo-Brazzaville","de":"Kongo (Republik Kongo)"},"currency":"XAF","continent":"AF","population":"3039126","area":"342000.0","capital":"Brazzaville","latitude":"-0.7264327","longitude":"15.6419155","north":"3.703082","east":"18.649839","south":"-5.027223","west":"11.205009","timezone":"Africa/Brazzaville"},{"shortCode":"CH","code":"CHE","names":{"en":"Switzerland","fr":"Suisse","de":"Schweiz"},"currency":"CHF","continent":"EU","population":"7581000","area":"41290.0","capital":"Berne","latitude":"46.7985624","longitude":"8.2319736","north":"47.805332","east":"10.491472","south":"45.825695","west":"5.957472","timezone":"Europe/Zurich"},{"shortCode":"CI","code":"CIV","names":{"en":"Ivory Coast","fr":"Côte d'Ivoire","de":"Elfenbeinküste"},"currency":"XOF","continent":"AF","population":"21058798","area":"322460.0","capital":"Yamoussoukro","latitude":"7.9897371","longitude":"-5.5679458","north":"10.736642","east":"-2.494897","south":"4.357067","west":"-8.599302","timezone":"Africa/Abidjan"},{"shortCode":"CK","code":"COK","names":{"en":"Cook Islands","fr":"Îles Cook","de":"Cookinseln"},"currency":"NZD","continent":"OC","population":"21388","area":"240.0","capital":"Avarua","latitude":"-16.0492781","longitude":"-160.3554851","north":"-10.023114","east":"-157.312134","south":"-21.944164","west":"-161.093658","timezone":null},{"shortCode":"CL","code":"CHL","names":{"en":"Chile","fr":"Chili","de":"Chile"},"currency":"CLP","continent":"SA","population":"16746491","area":"756950.0","capital":"Santiago","latitude":"-31.7613365","longitude":"-71.3187697","north":"-17.507553","east":"-66.417557","south":"-55.925622510922","west":"-80.785851","timezone":"America/Santiago"},{"shortCode":"CM","code":"CMR","names":{"en":"Cameroon","fr":"Cameroun","de":"Kamerun"},"currency":"XAF","continent":"AF","population":"19294149","area":"475440.0","capital":"Yaoundé","latitude":"4.6125522","longitude":"13.1535811","north":"13.078056","east":"16.192116","south":"1.652548","west":"8.494763","timezone":"Africa/Douala"},{"shortCode":"CN","code":"CHN","names":{"en":"China","fr":"Chine","de":"China"},"currency":"CNY","continent":"AS","population":"1330044000","area":"9596960.0","capital":"Beijing","latitude":"35.000074","longitude":"104.999927","north":"53.56086","east":"134.773911","south":"15.775416","west":"73.557693","timezone":null},{"shortCode":"CO","code":"COL","names":{"en":"Colombia","fr":"Colombie","de":"Kolumbien"},"currency":"COP","continent":"SA","population":"47790000","area":"1138910.0","capital":"Bogotá","latitude":"2.8930783","longitude":"-73.7845072","north":"13.380502","east":"-66.869835","south":"-4.225869","west":"-81.728111","timezone":"America/Bogota"},{"shortCode":"CR","code":"CRI","names":{"en":"Costa Rica","fr":"Costa Rica","de":"Costa Rica"},"currency":"CRC","continent":"NA","population":"4516220","area":"51100.0","capital":"San José","latitude":"10.2735633","longitude":"-84.0739102","north":"11.216819","east":"-82.555992","south":"8.032975","west":"-85.950623","timezone":"America/Costa_Rica"},{"shortCode":"CU","code":"CUB","names":{"en":"Cuba","fr":"Cuba","de":"Kuba"},"currency":"CUP","continent":"NA","population":"11423000","area":"110860.0","capital":"Havana","latitude":"23.0131338","longitude":"-80.8328748","north":"23.226042","east":"-74.131775","south":"19.828083","west":"-84.957428","timezone":"America/Havana"},{"shortCode":"CV","code":"CPV","names":{"en":"Cape Verde","fr":"Cap-Vert","de":"Kap Verde"},"currency":"CVE","continent":"AF","population":"508659","area":"4033.0","capital":"Praia","latitude":"16.0000552","longitude":"-24.0083947","north":"17.197178","east":"-22.669443","south":"14.808022","west":"-25.358747","timezone":"Atlantic/Cape_Verde"},{"shortCode":"CW","code":"CUW","names":{"en":"Curacao","fr":"Curaçao","de":"Curaçao"},"currency":"ANG","continent":"NA","population":"141766","area":"","capital":"Willemstad","latitude":null,"longitude":null,"north":"12.385672","east":"-68.733948","south":"12.032745","west":"-69.157204","timezone":null},{"shortCode":"CX","code":"CXR","names":{"en":"Christmas Island","fr":"Île Christmas","de":"Weihnachtsinsel"},"currency":"AUD","continent":"AS","population":"1500","area":"135.0","capital":"The Settlement","latitude":null,"longitude":null,"north":"-10.412356007","east":"105.712596992","south":"-10.5704829995","west":"105.533276992","timezone":null},{"shortCode":"CY","code":"CYP","names":{"en":"Cyprus","fr":"Chypre","de":"Zypern"},"currency":"EUR","continent":"EU","population":"1102677","area":"9250.0","capital":"Nicosia","latitude":"35.1695632","longitude":"33.1396402839342","north":"35.701527","east":"34.597916","south":"34.633284672291","west":"32.273083","timezone":"Asia/Nicosia"},{"shortCode":"CZ","code":"CZE","names":{"en":"Czech Republic","fr":"Tchéquie","de":"Tschechien"},"currency":"CZK","continent":"EU","population":"10476000","area":"78866.0","capital":"Prague","latitude":"49.8167003","longitude":"15.4749544","north":"51.058887","east":"18.860111","south":"48.542915","west":"12.096194","timezone":"Europe/Prague"},{"shortCode":"DE","code":"DEU","names":{"en":"Germany","fr":"Allemagne","de":"Deutschland"},"currency":"EUR","continent":"EU","population":"81802257","area":"357021.0","capital":"Berlin","latitude":"51.0834196","longitude":"10.4234469","north":"55.055637","east":"15.039889","south":"47.275776","west":"5.865639","timezone":"Europe/Berlin"},{"shortCode":"DJ","code":"DJI","names":{"en":"Djibouti","fr":"Djibouti","de":"Dschibuti"},"currency":"DJF","continent":"AF","population":"740528","area":"23000.0","capital":"Djibouti","latitude":"11.85270615","longitude":"42.7377044381366","north":"12.706833","east":"43.416973","south":"10.909917","west":"41.773472","timezone":"Africa/Djibouti"},{"shortCode":"DK","code":"DNK","names":{"en":"Denmark","fr":"Danemark","de":"Dänemark"},"currency":"DKK","continent":"EU","population":"5484000","area":"43094.0","capital":"Copenhagen","latitude":"55.670249","longitude":"10.3333283","north":"57.748417","east":"15.158834","south":"54.562389","west":"8.075611","timezone":"Europe/Copenhagen"},{"shortCode":"DM","code":"DMA","names":{"en":"Dominica","fr":"Dominique","de":"Dominica"},"currency":"XCD","continent":"NA","population":"72813","area":"754.0","capital":"Roseau","latitude":"15.4113138","longitude":"-61.3653618","north":"15.631809","east":"-61.244152","south":"15.20169","west":"-61.484108","timezone":"America/Dominica"},{"shortCode":"DO","code":"DOM","names":{"en":"Dominican Republic","fr":"République Dominicaine","de":"Dominikanische Republik"},"currency":"DOP","continent":"NA","population":"9823821","area":"48730.0","capital":"Santo Domingo","latitude":"19.094175","longitude":"-70.3012705","north":"19.929859","east":"-68.32","south":"17.543159","west":"-72.003487","timezone":"America/Santo_Domingo"},{"shortCode":"DZ","code":"DZA","names":{"en":"Algeria","fr":"Algérie","de":"Algerien"},"currency":"DZD","continent":"AF","population":"34586184","area":"2381740.0","capital":"Algiers","latitude":"28.0000272","longitude":"2.9999825","north":"37.093723","east":"11.979548","south":"18.960028","west":"-8.673868","timezone":"Africa/Algiers"},{"shortCode":"EC","code":"ECU","names":{"en":"Ecuador","fr":"Équateur","de":"Ecuador"},"currency":"USD","continent":"SA","population":"14790608","area":"283560.0","capital":"Quito","latitude":"-1.3397668","longitude":"-79.3666965","north":"1.43902","east":"-75.184586","south":"-4.998823","west":"-81.078598","timezone":"America/Guayaquil"},{"shortCode":"EE","code":"EST","names":{"en":"Estonia","fr":"Estonie","de":"Estland"},"currency":"EUR","continent":"EU","population":"1291170","area":"45226.0","capital":"Tallinn","latitude":"58.7523778","longitude":"25.3319078","north":"59.676224","east":"28.209972","south":"57.516193","west":"21.837584","timezone":"Europe/Tallinn"},{"shortCode":"EG","code":"EGY","names":{"en":"Egypt","fr":"Égypte","de":"Ägypten"},"currency":"EGP","continent":"AF","population":"80471869","area":"1001450.0","capital":"Cairo","latitude":"26.2540493","longitude":"29.2675469","north":"31.667334","east":"36.898330688477","south":"21.725389","west":"24.698111","timezone":"Africa/Cairo"},{"shortCode":"EH","code":"ESH","names":{"en":"Western Sahara","fr":"Sahara Occidental","de":"Westsahara"},"currency":"MAD","continent":"AF","population":"273008","area":"266000.0","capital":"El Aaiún","latitude":"24.026249","longitude":"-12.8745953","north":"27.669674","east":"-8.670276","south":"20.774158","west":"-17.103182","timezone":null},{"shortCode":"ER","code":"ERI","names":{"en":"Eritrea","fr":"Érythrée","de":"Eritrea"},"currency":"ERN","continent":"AF","population":"5792984","area":"121320.0","capital":"Asmara","latitude":"15.9500319","longitude":"37.9999668","north":"18.003084","east":"43.13464","south":"12.359555","west":"36.438778","timezone":"Africa/Asmara"},{"shortCode":"ES","code":"ESP","names":{"en":"Spain","fr":"Espagne","de":"Spanien"},"currency":"EUR","continent":"EU","population":"46505963","area":"504782.0","capital":"Madrid","latitude":"40.0028028","longitude":"-4.003104","north":"43.791356591377","east":"4.3277847304396","south":"36.000104426055","west":"-9.301515672319","timezone":"Europe/Madrid"},{"shortCode":"ET","code":"ETH","names":{"en":"Ethiopia","fr":"Éthiopie","de":"Äthiopien"},"currency":"ETB","continent":"AF","population":"88013491","area":"1127127.0","capital":"Addis Ababa","latitude":"10.2116702","longitude":"38.6521203","north":"14.89375","east":"47.986179","south":"3.402422","west":"32.999939","timezone":"Africa/Addis_Ababa"},{"shortCode":"FI","code":"FIN","names":{"en":"Finland","fr":"Finlande","de":"Finnland"},"currency":"EUR","continent":"EU","population":"5244000","area":"337030.0","capital":"Helsinki","latitude":"63.2467777","longitude":"25.9209164","north":"70.096054","east":"31.580944","south":"59.808777","west":"20.556944","timezone":"Europe/Helsinki"},{"shortCode":"FJ","code":"FJI","names":{"en":"Fiji","fr":"Fidji","de":"Fidschi"},"currency":"FJD","continent":"OC","population":"875983","area":"18270.0","capital":"Suva","latitude":"-18.1239696","longitude":"179.0122737","north":"-12.480111","east":"-178.424438","south":"-20.67597","west":"177.129334","timezone":"Pacific/Fiji"},{"shortCode":"FK","code":"FLK","names":{"en":"Falkland Islands","fr":"Îles Malouines","de":"Falklandinseln"},"currency":"FKP","continent":"SA","population":"2638","area":"12173.0","capital":"Stanley","latitude":"-51.9666424","longitude":"-59.5500387","north":"-51.24065","east":"-57.712486","south":"-52.360512","west":"-61.345192","timezone":"Atlantic/Stanley"},{"shortCode":"FM","code":"FSM","names":{"en":"Micronesia","fr":"Micronésie","de":"Mikronesien"},"currency":"USD","continent":"OC","population":"107708","area":"702.0","capital":"Palikir","latitude":"5.5600565","longitude":"150.1982846","north":"10.08904","east":"163.03717","south":"1.02629","west":"137.33648","timezone":null},{"shortCode":"FO","code":"FRO","names":{"en":"Faroe Islands","fr":"Îles Féroé","de":"Färöer-Inseln"},"currency":"DKK","continent":"EU","population":"48228","area":"1399.0","capital":"Tórshavn","latitude":"62.0448724","longitude":"-7.0322972","north":"62.400749","east":"-6.399583","south":"61.394943","west":"-7.458","timezone":"Atlantic/Faroe"},{"shortCode":"FR","code":"FRA","names":{"en":"France","fr":"France","de":"Frankreich"},"currency":"EUR","continent":"EU","population":"64768389","area":"547030.0","capital":"Paris","latitude":"46.603354","longitude":"1.8883335","north":"51.092804","east":"9.561556","south":"41.371582","west":"-5.142222","timezone":null},{"shortCode":"GA","code":"GAB","names":{"en":"Gabon","fr":"Gabon","de":"Gabun"},"currency":"XAF","continent":"AF","population":"1545255","area":"267667.0","capital":"Libreville","latitude":"-0.8999695","longitude":"11.6899699","north":"2.322612","east":"14.502347","south":"-3.978806","west":"8.695471","timezone":"Africa/Libreville"},{"shortCode":"GB","code":"GBR","names":{"en":"United Kingdom","fr":"Royaume-Uni","de":"Vereinigtes Königreich"},"currency":"GBP","continent":"EU","population":"62348447","area":"244820.0","capital":"London","latitude":"54.7023545","longitude":"-3.2765753","north":"59.360249","east":"1.759","south":"49.906193","west":"-8.623555","timezone":"Europe/London"},{"shortCode":"GD","code":"GRD","names":{"en":"Grenada","fr":"Grenade","de":"Grenada"},"currency":"XCD","continent":"NA","population":"107818","area":"344.0","capital":"St. George's","latitude":"12.1360374","longitude":"-61.6904045","north":"12.318283928171","east":"-61.57676970108","south":"11.986893","west":"-61.802344","timezone":"America/Grenada"},{"shortCode":"GE","code":"GEO","names":{"en":"Georgia","fr":"Géorgie","de":"Georgien"},"currency":"GEL","continent":"AS","population":"4630000","area":"69700.0","capital":"Tbilisi","latitude":"41.6809707","longitude":"44.0287382","north":"43.586498","east":"46.725971","south":"41.053196","west":"40.010139","timezone":"Asia/Tbilisi"},{"shortCode":"GF","code":"GUF","names":{"en":"French Guiana","fr":"Guyane","de":"Französisch-Guayana"},"currency":"EUR","continent":"SA","population":"195506","area":"91000.0","capital":"Cayenne","latitude":null,"longitude":null,"north":"5.776496","east":"-51.613949","south":"2.127094","west":"-54.542511","timezone":null},{"shortCode":"GG","code":"GGY","names":{"en":"Guernsey","fr":"Guernesey","de":"Guernsey"},"currency":"GBP","continent":"EU","population":"65228","area":"78.0","capital":"St Peter Port","latitude":"49.580437","longitude":"-2.484854","north":"49.731727816705","east":"-2.1577152112246","south":"49.407641568769","west":"-2.6731945934761","timezone":"Europe/Guernsey"},{"shortCode":"GH","code":"GHA","names":{"en":"Ghana","fr":"Ghana","de":"Ghana"},"currency":"GHS","continent":"AF","population":"24339838","area":"239460.0","capital":"Accra","latitude":"8.0300284","longitude":"-1.0800271","north":"11.173301","east":"1.191781","south":"4.736723","west":"-3.25542","timezone":"Africa/Accra"},{"shortCode":"GI","code":"GIB","names":{"en":"Gibraltar","fr":"Gibraltar","de":"Gibraltar"},"currency":"GIP","continent":"EU","population":"27884","area":"6.5","capital":"Gibraltar","latitude":"36.1316601","longitude":"-5.35172472573552","north":"36.155439135671","east":"-5.3382851640015","south":"36.109030701402","west":"-5.3662614974365","timezone":"Europe/Gibraltar"},{"shortCode":"GL","code":"GRL","names":{"en":"Greenland","fr":"Groenland","de":"Grönland"},"currency":"DKK","continent":"NA","population":"56375","area":"2166086.0","capital":"Nuuk","latitude":"77.6192349","longitude":"-42.8125967","north":"83.627357","east":"-11.312319","south":"59.777401","west":"-73.04203","timezone":null},{"shortCode":"GM","code":"GMB","names":{"en":"Gambia","fr":"Gambie","de":"Gambia"},"currency":"GMD","continent":"AF","population":"1593256","area":"11300.0","capital":"Banjul","latitude":"13.470062","longitude":"-15.4900464","north":"13.826571","east":"-13.797793","south":"13.064252","west":"-16.825079","timezone":"Africa/Banjul"},{"shortCode":"GN","code":"GIN","names":{"en":"Guinea","fr":"Guinée","de":"Guinea"},"currency":"GNF","continent":"AF","population":"10324025","area":"245857.0","capital":"Conakry","latitude":"10.7226226","longitude":"-10.7083587","north":"12.67622","east":"-7.641071","south":"7.193553","west":"-14.926619","timezone":"Africa/Conakry"},{"shortCode":"GP","code":"GLP","names":{"en":"Guadeloupe","fr":"Guadeloupe","de":"Guadeloupe"},"currency":"EUR","continent":"NA","population":"443000","area":"1780.0","capital":"Basse-Terre","latitude":null,"longitude":null,"north":"16.516848","east":"-61","south":"15.867565","west":"-61.544765","timezone":null},{"shortCode":"GQ","code":"GNQ","names":{"en":"Equatorial Guinea","fr":"Guinée équatoriale","de":"Äquatorialguinea"},"currency":"XAF","continent":"AF","population":"1014999","area":"28051.0","capital":"Malabo","latitude":"1.613172","longitude":"10.5170357","north":"2.346989","east":"11.335724","south":"0.92086","west":"9.346865","timezone":"Africa/Malabo"},{"shortCode":"GR","code":"GRC","names":{"en":"Greece","fr":"Grèce","de":"Griechenland"},"currency":"EUR","continent":"EU","population":"11000000","area":"131940.0","capital":"Athens","latitude":"39.000041","longitude":"21.9999569","north":"41.748499984964","east":"28.247083171435","south":"34.802066339147","west":"19.373603562413","timezone":"Europe/Athens"},{"shortCode":"GS","code":"SGS","names":{"en":"South Georgia and the South Sandwich Islands","fr":"Géorgie du Sud et les îles Sandwich du Sud","de":"Südgeorgien und die Südlichen Sandwichinseln"},"currency":"GBP","continent":"AN","population":"30","area":"3903.0","capital":"Grytviken","latitude":"-54.8432857","longitude":"-35.8090698","north":"-53.970467","east":"-26.229326","south":"-59.479259","west":"-38.021175","timezone":null},{"shortCode":"GT","code":"GTM","names":{"en":"Guatemala","fr":"Guatemala","de":"Guatemala"},"currency":"GTQ","continent":"NA","population":"13550440","area":"108890.0","capital":"Guatemala City","latitude":"15.6356088","longitude":"-89.8988087","north":"17.81522","east":"-88.223198","south":"13.737302","west":"-92.23629","timezone":"America/Guatemala"},{"shortCode":"GU","code":"GUM","names":{"en":"Guam","fr":"Guam","de":"Guam"},"currency":"USD","continent":"OC","population":"159358","area":"549.0","capital":"Hagåtña","latitude":null,"longitude":null,"north":"13.654402","east":"144.956894","south":"13.23376","west":"144.61806","timezone":null},{"shortCode":"GW","code":"GNB","names":{"en":"Guinea-Bissau","fr":"Guinée-Bissau","de":"Guinea-Bissau"},"currency":"XOF","continent":"AF","population":"1565126","area":"36120.0","capital":"Bissau","latitude":"12.100035","longitude":"-14.9000214","north":"12.680789","east":"-13.636522","south":"10.924265","west":"-16.717535","timezone":"Africa/Bissau"},{"shortCode":"GY","code":"GUY","names":{"en":"Guyana","fr":"Guyana","de":"Guyana"},"currency":"GYD","continent":"SA","population":"748486","area":"214970.0","capital":"Georgetown","latitude":"4.8417097","longitude":"-58.6416891","north":"8.557567","east":"-56.480251","south":"1.17508","west":"-61.384762","timezone":"America/Guyana"},{"shortCode":"HK","code":"HKG","names":{"en":"Hong Kong","fr":"Hong Kong","de":"Hongkong"},"currency":"HKD","continent":"AS","population":"6898686","area":"1092.0","capital":"Hong Kong","latitude":null,"longitude":null,"north":"22.559778","east":"114.434753","south":"22.15325","west":"113.837753","timezone":null},{"shortCode":"HM","code":"HMD","names":{"en":"Heard Island and McDonald Islands","fr":"Île Heard et îles McDonald","de":"Heard- und McDonald-Inseln"},"currency":"AUD","continent":"AN","population":"0","area":"412.0","capital":"","latitude":null,"longitude":null,"north":"-52.909416","east":"73.859146","south":"-53.192001","west":"72.596535","timezone":null},{"shortCode":"HN","code":"HND","names":{"en":"Honduras","fr":"Honduras","de":"Honduras"},"currency":"HNL","continent":"NA","population":"7989415","area":"112090.0","capital":"Tegucigalpa","latitude":"15.0610686","longitude":"-84.5978534","north":"16.510256","east":"-83.155403","south":"12.982411","west":"-89.350792","timezone":"America/Tegucigalpa"},{"shortCode":"HR","code":"HRV","names":{"en":"Croatia","fr":"Croatie","de":"Kroatien"},"currency":"HRK","continent":"EU","population":"4491000","area":"56542.0","capital":"Zagreb","latitude":"45.5643442","longitude":"17.0118954","north":"46.53875","east":"19.427389","south":"42.43589","west":"13.493222","timezone":"Europe/Zagreb"},{"shortCode":"HT","code":"HTI","names":{"en":"Haiti","fr":"Haïti","de":"Haiti"},"currency":"HTG","continent":"NA","population":"9648924","area":"27750.0","capital":"Port-au-Prince","latitude":"19.1399952","longitude":"-72.3570972","north":"20.08782","east":"-71.613358","south":"18.021032","west":"-74.478584","timezone":"America/Port-au-Prince"},{"shortCode":"HU","code":"HUN","names":{"en":"Hungary","fr":"Hongrie","de":"Ungarn"},"currency":"HUF","continent":"EU","population":"9982000","area":"93030.0","capital":"Budapest","latitude":"47.1817585","longitude":"19.5060937","north":"48.585667","east":"22.906","south":"45.74361","west":"16.111889","timezone":"Europe/Budapest"},{"shortCode":"ID","code":"IDN","names":{"en":"Indonesia","fr":"Indonésie","de":"Indonesien"},"currency":"IDR","continent":"AS","population":"242968342","area":"1919440.0","capital":"Jakarta","latitude":"-4.7993356","longitude":"114.5632032","north":"5.904417","east":"141.021805","south":"-10.941861","west":"95.009331","timezone":null},{"shortCode":"IE","code":"IRL","names":{"en":"Ireland","fr":"Irlande","de":"Irland"},"currency":"EUR","continent":"EU","population":"4622917","area":"70280.0","capital":"Dublin","latitude":"52.865196","longitude":"-7.9794599","north":"55.387917","east":"-6.002389","south":"51.451584","west":"-10.478556","timezone":"Europe/Dublin"},{"shortCode":"IL","code":"ISR","names":{"en":"Israel","fr":"Israël","de":"Israel"},"currency":"ILS","continent":"AS","population":"7353985","area":"20770.0","capital":"","latitude":"30.8760272","longitude":"35.0015196","north":"33.340137","east":"35.876804","south":"29.496639","west":"34.270278754419","timezone":"Asia/Jerusalem"},{"shortCode":"IM","code":"IMN","names":{"en":"Isle of Man","fr":"Île de Man","de":"Insel Man"},"currency":"GBP","continent":"EU","population":"75049","area":"572.0","capital":"Douglas","latitude":"54.1936805","longitude":"-4.5591148","north":"54.419724","east":"-4.3115","south":"54.055916","west":"-4.798722","timezone":"Europe/Isle_of_Man"},{"shortCode":"IN","code":"IND","names":{"en":"India","fr":"Inde","de":"Indien"},"currency":"INR","continent":"AS","population":"1173108018","area":"3287590.0","capital":"New Delhi","latitude":"22.3511148","longitude":"78.6677428","north":"35.504223","east":"97.403305","south":"6.747139","west":"68.186691","timezone":"Asia/Kolkata"},{"shortCode":"IO","code":"IOT","names":{"en":"British Indian Ocean Territory","fr":"Territoire britannique de l'océan Indien","de":"Britisches Territorium im Indischen Ozean"},"currency":"USD","continent":"AS","population":"4000","area":"60.0","capital":"","latitude":"-6.1666356","longitude":"71.4249683","north":"-5.268333","east":"72.493164","south":"-7.438028","west":"71.259972","timezone":null},{"shortCode":"IQ","code":"IRQ","names":{"en":"Iraq","fr":"Irak","de":"Irak"},"currency":"IQD","continent":"AS","population":"29671605","area":"437072.0","capital":"Baghdad","latitude":"33.0955793","longitude":"44.1749775","north":"37.378029","east":"48.575916","south":"29.069445","west":"38.795887","timezone":"Asia/Baghdad"},{"shortCode":"IR","code":"IRN","names":{"en":"Iran","fr":"Iran","de":"Iran (Islamische Republik)"},"currency":"IRR","continent":"AS","population":"76923300","area":"1648000.0","capital":"Tehran","latitude":"32.9407496","longitude":"52.9471344","north":"39.777222","east":"63.317471","south":"25.064083","west":"44.047279","timezone":"Asia/Tehran"},{"shortCode":"IS","code":"ISL","names":{"en":"Iceland","fr":"Islande","de":"Island"},"currency":"ISK","continent":"EU","population":"308910","area":"103000.0","capital":"Reykjavik","latitude":"64.9841821","longitude":"-18.1059013","north":"66.53463","east":"-13.495815","south":"63.393253","west":"-24.546524","timezone":"Atlantic/Reykjavik"},{"shortCode":"IT","code":"ITA","names":{"en":"Italy","fr":"Italie","de":"Italien"},"currency":"EUR","continent":"EU","population":"60340328","area":"301230.0","capital":"Rome","latitude":"42.6384261","longitude":"12.674297","north":"47.095196","east":"18.513445","south":"36.652779","west":"6.614889","timezone":"Europe/Rome"},{"shortCode":"JE","code":"JEY","names":{"en":"Jersey","fr":"Jersey","de":"Jersey"},"currency":"GBP","continent":"EU","population":"90812","area":"116.0","capital":"Saint Helier","latitude":"49.2214561","longitude":"-2.1358386","north":"49.265057","east":"-2.022083","south":"49.169834","west":"-2.260028","timezone":"Europe/Jersey"},{"shortCode":"JM","code":"JAM","names":{"en":"Jamaica","fr":"Jamaïque","de":"Jamaika"},"currency":"JMD","continent":"NA","population":"2847232","area":"10991.0","capital":"Kingston","latitude":"18.1850507","longitude":"-77.3947693","north":"18.526976","east":"-76.180321","south":"17.703554","west":"-78.366638","timezone":"America/Jamaica"},{"shortCode":"JO","code":"JOR","names":{"en":"Jordan","fr":"Jordanie","de":"Jordanien"},"currency":"JOD","continent":"AS","population":"6407085","area":"92300.0","capital":"Amman","latitude":"31.1667049","longitude":"36.941628","north":"33.367668","east":"39.301167","south":"29.185888","west":"34.959999","timezone":"Asia/Amman"},{"shortCode":"JP","code":"JPN","names":{"en":"Japan","fr":"Japon","de":"Japan"},"currency":"JPY","continent":"AS","population":"127288000","area":"377835.0","capital":"Tokyo","latitude":"36.5748441","longitude":"139.2394179","north":"45.52314","east":"145.820892","south":"24.249472","west":"122.93853","timezone":"Asia/Tokyo"},{"shortCode":"KE","code":"KEN","names":{"en":"Kenya","fr":"Kenya","de":"Kenia"},"currency":"KES","continent":"AF","population":"40046566","area":"582650.0","capital":"Nairobi","latitude":"1.4419683","longitude":"38.4313975","north":"5.019938","east":"41.899078","south":"-4.678047","west":"33.908859","timezone":"Africa/Nairobi"},{"shortCode":"KG","code":"KGZ","names":{"en":"Kyrgyzstan","fr":"Kirghizistan","de":"Kirgistan"},"currency":"KGS","continent":"AS","population":"5508626","area":"198500.0","capital":"Bishkek","latitude":"41.5089324","longitude":"74.724091","north":"43.238224","east":"80.283165","south":"39.172832","west":"69.276611","timezone":"Asia/Bishkek"},{"shortCode":"KH","code":"KHM","names":{"en":"Cambodia","fr":"Cambodge","de":"Kambodscha"},"currency":"KHR","continent":"AS","population":"14453680","area":"181040.0","capital":"Phnom Penh","latitude":"13.5066394","longitude":"104.869423","north":"14.686417","east":"107.627724","south":"10.409083","west":"102.339996","timezone":"Asia/Phnom_Penh"},{"shortCode":"KI","code":"KIR","names":{"en":"Kiribati","fr":"Kiribati","de":"Kiribati"},"currency":"AUD","continent":"OC","population":"92533","area":"811.0","capital":"Tarawa","latitude":"0.306","longitude":"173.664834025","north":"4.71957","east":"-150.215347","south":"-11.446881150187","west":"169.556137","timezone":null},{"shortCode":"KM","code":"COM","names":{"en":"Comoros","fr":"Comores","de":"Komoren"},"currency":"KMF","continent":"AF","population":"773407","area":"2170.0","capital":"Moroni","latitude":"-12.2045176","longitude":"44.2832964","north":"-11.362381","east":"44.538223","south":"-12.387857","west":"43.21579","timezone":"Indian/Comoro"},{"shortCode":"KN","code":"KNA","names":{"en":"Saint Kitts and Nevis","fr":"Saint-Christophe-et-Niévès","de":"Saint Kitts und Nevis"},"currency":"XCD","continent":"NA","population":"51134","area":"261.0","capital":"Basseterre","latitude":"17.3462278","longitude":"-62.7687277","north":"17.420118","east":"-62.543266","south":"17.095343","west":"-62.86956","timezone":"America/St_Kitts"},{"shortCode":"KP","code":"PRK","names":{"en":"North Korea","fr":"Corée du Nord","de":"Nordkorea"},"currency":"KPW","continent":"AS","population":"22912177","area":"120540.0","capital":"Pyongyang","latitude":"40.3123959","longitude":"127.399971","north":"43.006054","east":"130.674866","south":"37.673332","west":"124.315887","timezone":"Asia/Pyongyang"},{"shortCode":"KR","code":"KOR","names":{"en":"South Korea","fr":"Corée du Sud","de":"Südkorea"},"currency":"KRW","continent":"AS","population":"48422644","area":"98480.0","capital":"Seoul","latitude":"35.3985008","longitude":"127.937111","north":"38.612446","east":"129.584671","south":"33.190945","west":"125.887108","timezone":"Asia/Seoul"},{"shortCode":"KW","code":"KWT","names":{"en":"Kuwait","fr":"Koweït","de":"Kuwait"},"currency":"KWD","continent":"AS","population":"2789132","area":"17820.0","capital":"Kuwait City","latitude":"29.2733964","longitude":"47.4979476","north":"30.095945","east":"48.431473","south":"28.524611","west":"46.555557","timezone":"Asia/Kuwait"},{"shortCode":"KY","code":"CYM","names":{"en":"Cayman Islands","fr":"Îles Caïmans","de":"Kaimaninseln"},"currency":"KYD","continent":"NA","population":"44270","area":"262.0","capital":"George Town","latitude":"19.5417212","longitude":"-80.5667132","north":"19.7617","east":"-79.727272","south":"19.263029","west":"-81.432777","timezone":null},{"shortCode":"KZ","code":"KAZ","names":{"en":"Kazakhstan","fr":"Kazakhstan","de":"Kasachstan"},"currency":"KZT","continent":"AS","population":"15340000","area":"2717300.0","capital":"Astana","latitude":"48.0242079","longitude":"66.3232605345084","north":"55.451195","east":"87.312668","south":"40.936333","west":"46.491859","timezone":null},{"shortCode":"LA","code":"LAO","names":{"en":"Laos","fr":"Laos","de":"Laos"},"currency":"LAK","continent":"AS","population":"6368162","area":"236800.0","capital":"Vientiane","latitude":"20.0171109","longitude":"103.378253","north":"22.500389","east":"107.697029","south":"13.910027","west":"100.093056","timezone":"Asia/Vientiane"},{"shortCode":"LB","code":"LBN","names":{"en":"Lebanon","fr":"Liban","de":"Libanon"},"currency":"LBP","continent":"AS","population":"4125247","area":"10400.0","capital":"Beirut","latitude":"33.8750629","longitude":"35.843409","north":"34.691418","east":"36.639194","south":"33.05386","west":"35.114277","timezone":"Asia/Beirut"},{"shortCode":"LC","code":"LCA","names":{"en":"Saint Lucia","fr":"Sainte-Lucie","de":"St. Lucia"},"currency":"XCD","continent":"NA","population":"160922","area":"616.0","capital":"Castries","latitude":"13.8250489","longitude":"-60.975036","north":"14.103245","east":"-60.874203","south":"13.704778","west":"-61.07415","timezone":"America/St_Lucia"},{"shortCode":"LI","code":"LIE","names":{"en":"Liechtenstein","fr":"Liechtenstein","de":"Liechtenstein"},"currency":"CHF","continent":"EU","population":"35000","area":"160.0","capital":"Vaduz","latitude":"47.15934115","longitude":"9.54693948514429","north":"47.270625138696","east":"9.635642811368","south":"47.048428412347","west":"9.4716735978201","timezone":"Europe/Vaduz"},{"shortCode":"LK","code":"LKA","names":{"en":"Sri Lanka","fr":"Sri Lanka","de":"Sri Lanka"},"currency":"LKR","continent":"AS","population":"21513990","area":"65610.0","capital":"Colombo","latitude":"7.878","longitude":"80.7038245875","north":"9.831361","east":"81.881279","south":"5.916833","west":"79.652916","timezone":"Asia/Colombo"},{"shortCode":"LR","code":"LBR","names":{"en":"Liberia","fr":"Liberia","de":"Liberia"},"currency":"LRD","continent":"AF","population":"3685076","area":"111370.0","capital":"Monrovia","latitude":"5.7499721","longitude":"-9.3658524","north":"8.551791","east":"-7.365113","south":"4.353057","west":"-11.492083","timezone":"Africa/Monrovia"},{"shortCode":"LS","code":"LSO","names":{"en":"Lesotho","fr":"Lesotho","de":"Lesotho"},"currency":"LSL","continent":"AF","population":"1919552","area":"30355.0","capital":"Maseru","latitude":"-29.628684","longitude":"28.23347","north":"-28.572058","east":"29.465761","south":"-30.668964","west":"27.029068","timezone":"Africa/Maseru"},{"shortCode":"LT","code":"LTU","names":{"en":"Lithuania","fr":"Lituanie","de":"Litauen"},"currency":"LTL","continent":"EU","population":"2944459","area":"65200.0","capital":"Vilnius","latitude":"55.3500003","longitude":"23.7499998","north":"56.446918","east":"26.871944","south":"53.901306","west":"20.941528","timezone":"Europe/Vilnius"},{"shortCode":"LU","code":"LUX","names":{"en":"Luxembourg","fr":"Luxembourg","de":"Luxemburg"},"currency":"EUR","continent":"EU","population":"497538","area":"2586.0","capital":"Luxembourg","latitude":"49.8158683","longitude":"6.1296751","north":"50.184944","east":"6.528472","south":"49.446583","west":"5.734556","timezone":"Europe/Luxembourg"},{"shortCode":"LV","code":"LVA","names":{"en":"Latvia","fr":"Lettonie","de":"Lettland"},"currency":"EUR","continent":"EU","population":"2217969","area":"64589.0","capital":"Riga","latitude":"56.8666904","longitude":"24.5999717","north":"58.082306","east":"28.241167","south":"55.668861","west":"20.974277","timezone":"Europe/Riga"},{"shortCode":"LY","code":"LBY","names":{"en":"Libya","fr":"Libye","de":"Libysch-Arabische Dschamahirija"},"currency":"LYD","continent":"AF","population":"6461454","area":"1759540.0","capital":"Tripoli","latitude":"26.8234472","longitude":"18.1236723","north":"33.168999","east":"25.150612","south":"19.508045","west":"9.38702","timezone":"Africa/Tripoli"},{"shortCode":"MA","code":"MAR","names":{"en":"Morocco","fr":"Maroc","de":"Marokko"},"currency":"MAD","continent":"AF","population":"31627428","area":"446550.0","capital":"Rabat","latitude":"31.1728192","longitude":"-7.3366043","north":"35.922496698538","east":"-0.99175000000003","south":"27.662115","west":"-13.168586","timezone":"Africa/Rabat"},{"shortCode":"MC","code":"MCO","names":{"en":"Monaco","fr":"Monaco","de":"Monaco"},"currency":"EUR","continent":"EU","population":"32965","area":"1.95","capital":"Monaco","latitude":"43.7312454","longitude":"7.4197441","north":"43.751967170372","east":"7.4399392604828","south":"43.724728398694","west":"7.4089622497559","timezone":"Europe/Monaco"},{"shortCode":"MD","code":"MDA","names":{"en":"Moldova","fr":"Moldavie","de":"Moldau (Republik Moldau)"},"currency":"MDL","continent":"EU","population":"4324000","area":"33843.0","capital":"Chişinău","latitude":"47.286747","longitude":"28.5110236","north":"48.490166","east":"30.135445","south":"45.468887","west":"26.618944","timezone":"Europe/Chisinau"},{"shortCode":"ME","code":"MNE","names":{"en":"Montenegro","fr":"Monténégro","de":"Montenegro"},"currency":"EUR","continent":"EU","population":"666730","area":"14026.0","capital":"Podgorica","latitude":"43.0285558","longitude":"19.291739","north":"43.570137","east":"20.358833","south":"41.850166","west":"18.461306","timezone":"Europe/Podgorica"},{"shortCode":"MF","code":"MAF","names":{"en":"Saint Martin","fr":"Saint-Martin","de":"St. Martin"},"currency":"EUR","continent":"NA","population":"35925","area":"53.0","capital":"Marigot","latitude":null,"longitude":null,"north":"18.130354","east":"-63.012993","south":"18.052231","west":"-63.152767","timezone":null},{"shortCode":"MG","code":"MDG","names":{"en":"Madagascar","fr":"Madagascar","de":"Madagaskar"},"currency":"MGA","continent":"AF","population":"21281844","area":"587040.0","capital":"Antananarivo","latitude":"-18.9249604","longitude":"46.4416422","north":"-11.945433","east":"50.48378","south":"-25.608952","west":"43.224876","timezone":"Indian/Antananarivo"},{"shortCode":"MH","code":"MHL","names":{"en":"Marshall Islands","fr":"Îles Marshall","de":"Marshall-Inseln"},"currency":"USD","continent":"OC","population":"65859","area":"181.3","capital":"Majuro","latitude":"11.299","longitude":"166.917397391667","north":"14.62","east":"171.931808","south":"5.587639","west":"165.524918","timezone":null},{"shortCode":"MK","code":"MKD","names":{"en":"Macedonia","fr":"Macédoine","de":"Ehemalige jugoslawische Republik Mazedonien"},"currency":"MKD","continent":"EU","population":"2062294","area":"25333.0","capital":"Skopje","latitude":"41.6171214","longitude":"21.7168387","north":"42.361805","east":"23.038139","south":"40.860195","west":"20.464695","timezone":"Europe/Skopje"},{"shortCode":"ML","code":"MLI","names":{"en":"Mali","fr":"Mali","de":"Mali"},"currency":"XOF","continent":"AF","population":"13796354","area":"1240000.0","capital":"Bamako","latitude":"16.3700359","longitude":"-2.2900239","north":"25.000002","east":"4.244968","south":"10.159513","west":"-12.242614","timezone":"Africa/Bamako"},{"shortCode":"MM","code":"MMR","names":{"en":"Myanmar [Burma]","fr":"Myanmar","de":"Birma (Myanmar)"},"currency":"MMK","continent":"AS","population":"53414374","area":"678500.0","capital":"Nay Pyi Taw","latitude":"17.1750495","longitude":"95.9999652","north":"28.543249","east":"101.176781","south":"9.784583","west":"92.189278","timezone":"Asia/Rangoon"},{"shortCode":"MN","code":"MNG","names":{"en":"Mongolia","fr":"Mongolie","de":"Mongolei"},"currency":"MNT","continent":"AS","population":"3086918","area":"1565000.0","capital":"Ulan Bator","latitude":"46.8250388","longitude":"103.8499736","north":"52.154251","east":"119.924309","south":"41.567638","west":"87.749664","timezone":null},{"shortCode":"MO","code":"MAC","names":{"en":"Macao","fr":"Macao","de":"Macau"},"currency":"MOP","continent":"AS","population":"449198","area":"254.0","capital":"Macao","latitude":null,"longitude":null,"north":"22.222334","east":"113.565834","south":"22.180389","west":"113.528946","timezone":null},{"shortCode":"MP","code":"MNP","names":{"en":"Northern Mariana Islands","fr":"Îles Mariannes du Nord","de":"Nördliche Marianen"},"currency":"USD","continent":"OC","population":"53883","area":"477.0","capital":"Saipan","latitude":null,"longitude":null,"north":"20.55344","east":"146.06528","south":"14.11023","west":"144.88626","timezone":null},{"shortCode":"MQ","code":"MTQ","names":{"en":"Martinique","fr":"Martinique","de":"Martinique"},"currency":"EUR","continent":"NA","population":"432900","area":"1100.0","capital":"Fort-de-France","latitude":null,"longitude":null,"north":"14.878819","east":"-60.81551","south":"14.392262","west":"-61.230118","timezone":null},{"shortCode":"MR","code":"MRT","names":{"en":"Mauritania","fr":"Mauritanie","de":"Mauretanien"},"currency":"MRO","continent":"AF","population":"3205060","area":"1030700.0","capital":"Nouakchott","latitude":"20.2540382","longitude":"-9.2399263","north":"27.298073","east":"-4.827674","south":"14.715547","west":"-17.066521","timezone":"Africa/Nouakchott"},{"shortCode":"MS","code":"MSR","names":{"en":"Montserrat","fr":"Montserrat","de":"Montserrat"},"currency":"XCD","continent":"NA","population":"9341","area":"102.0","capital":"Plymouth","latitude":"16.7417041","longitude":"-62.1916844","north":"16.824060205313","east":"-62.144100129608","south":"16.674768935442","west":"-62.241382370361","timezone":"America/Montserrat"},{"shortCode":"MT","code":"MLT","names":{"en":"Malta","fr":"Malte","de":"Malta"},"currency":"EUR","continent":"EU","population":"403000","area":"316.0","capital":"Valletta","latitude":"35.9446731","longitude":"14.3836306158583","north":"36.082153099546","east":"14.5764915","south":"35.8061835","west":"14.1834251","timezone":"Europe/Malta"},{"shortCode":"MU","code":"MUS","names":{"en":"Mauritius","fr":"Maurice","de":"Mauritius"},"currency":"MUR","continent":"AF","population":"1294104","area":"2040.0","capital":"Port Louis","latitude":"-20.2759451","longitude":"57.5703566","north":"-10.319255","east":"63.500179","south":"-20.525717","west":"56.512718","timezone":"Indian/Mauritius"},{"shortCode":"MV","code":"MDV","names":{"en":"Maldives","fr":"Maldives","de":"Malediven"},"currency":"MVR","continent":"AS","population":"395650","area":"300.0","capital":"Malé","latitude":"4.2218417","longitude":"73.4867968","north":"7.0915874954148","east":"73.637276","south":"-0.692694","west":"72.693222","timezone":"Indian/Maldives"},{"shortCode":"MW","code":"MWI","names":{"en":"Malawi","fr":"Malawi","de":"Malawi"},"currency":"MWK","continent":"AF","population":"15447500","area":"118480.0","capital":"Lilongwe","latitude":"-13.2687204","longitude":"33.9301963","north":"-9.367541","east":"35.916821","south":"-17.125","west":"32.67395","timezone":"Africa/Blantyre"},{"shortCode":"MX","code":"MEX","names":{"en":"Mexico","fr":"Mexique","de":"Mexiko"},"currency":"MXN","continent":"NA","population":"112468855","area":"1972550.0","capital":"Mexico City","latitude":"22.5000485","longitude":"-100.0000375","north":"32.716759","east":"-86.703392","south":"14.532866","west":"-118.453949","timezone":"America/Mexico_City"},{"shortCode":"MY","code":"MYS","names":{"en":"Malaysia","fr":"Malaisie","de":"Malaysien"},"currency":"MYR","continent":"AS","population":"28274729","area":"329750.0","capital":"Kuala Lumpur","latitude":"4.5693754","longitude":"102.2656823","north":"7.363417","east":"119.267502","south":"0.855222","west":"99.643448","timezone":null},{"shortCode":"MZ","code":"MOZ","names":{"en":"Mozambique","fr":"Mozambique","de":"Mosambik"},"currency":"MZN","continent":"AF","population":"22061451","area":"801590.0","capital":"Maputo","latitude":"-19.302233","longitude":"34.9144977","north":"-10.471883","east":"40.842995","south":"-26.868685","west":"30.217319","timezone":"Africa/Maputo"},{"shortCode":"NA","code":"NAM","names":{"en":"Namibia","fr":"Namibie","de":"Namibia"},"currency":"NAD","continent":"AF","population":"2128471","area":"825418.0","capital":"Windhoek","latitude":"-23.2335499","longitude":"17.3231107","north":"-16.959894","east":"25.256701","south":"-28.97143","west":"11.71563","timezone":"Africa/Windhoek"},{"shortCode":"NC","code":"NCL","names":{"en":"New Caledonia","fr":"Nouvelle-Calédonie","de":"Neukaledonien"},"currency":"XPF","continent":"OC","population":"216494","area":"19060.0","capital":"Noumea","latitude":null,"longitude":null,"north":"-19.549778","east":"168.129135","south":"-22.698","west":"163.564667","timezone":null},{"shortCode":"NE","code":"NER","names":{"en":"Niger","fr":"Niger","de":"Niger"},"currency":"XOF","continent":"AF","population":"15878271","area":"1267000.0","capital":"Niamey","latitude":"17.7356214","longitude":"9.3238432","north":"23.525026","east":"15.995643","south":"11.696975","west":"0.16625","timezone":"Africa/Niamey"},{"shortCode":"NF","code":"NFK","names":{"en":"Norfolk Island","fr":"Île Norfolk","de":"Norfolkinsel"},"currency":"AUD","continent":"OC","population":"1828","area":"34.6","capital":"Kingston","latitude":null,"longitude":null,"north":"-28.995170686948","east":"167.9977374021","south":"-29.063076742955","west":"167.91543230151","timezone":null},{"shortCode":"NG","code":"NGA","names":{"en":"Nigeria","fr":"Nigeria","de":"Nigeria"},"currency":"NGN","continent":"AF","population":"154000000","area":"923768.0","capital":"Abuja","latitude":"9.6000359","longitude":"7.9999721","north":"13.892007","east":"14.680073","south":"4.277144","west":"2.668432","timezone":"Africa/Lagos"},{"shortCode":"NI","code":"NIC","names":{"en":"Nicaragua","fr":"Nicaragua","de":"Nikaragua"},"currency":"NIO","continent":"NA","population":"5995928","area":"129494.0","capital":"Managua","latitude":"12.3724928","longitude":"-84.8700308","north":"15.025909","east":"-82.738289","south":"10.707543","west":"-87.690308","timezone":"America/Managua"},{"shortCode":"NL","code":"NLD","names":{"en":"Netherlands","fr":"Pays-Bas","de":"Niederlande"},"currency":"EUR","continent":"EU","population":"16645000","area":"41526.0","capital":"Amsterdam","latitude":"52.5001698","longitude":"5.7480821","north":"53.512196","east":"7.227944","south":"50.753918","west":"3.362556","timezone":null},{"shortCode":"NO","code":"NOR","names":{"en":"Norway","fr":"Norvège","de":"Norwegen"},"currency":"NOK","continent":"EU","population":"5009150","area":"324220.0","capital":"Oslo","latitude":"60.5000209","longitude":"9.0999715","north":"71.18811","east":"31.078052520752","south":"57.977917","west":"4.650167","timezone":null},{"shortCode":"NP","code":"NPL","names":{"en":"Nepal","fr":"Népal","de":"Nepal"},"currency":"NPR","continent":"AS","population":"28951852","area":"140800.0","capital":"Kathmandu","latitude":"28.1083178","longitude":"84.0916787","north":"30.43339","east":"88.199333","south":"26.356722","west":"80.056274","timezone":"Asia/Kathmandu"},{"shortCode":"NR","code":"NRU","names":{"en":"Nauru","fr":"Nauru","de":"Nauru"},"currency":"AUD","continent":"OC","population":"10065","area":"21.0","capital":"","latitude":"-0.5249624","longitude":"166.9333009","north":"-0.504306","east":"166.945282","south":"-0.552333","west":"166.899033","timezone":"Pacific/Nauru"},{"shortCode":"NU","code":"NIU","names":{"en":"Niue","fr":"Nioué","de":"Niue"},"currency":"NZD","continent":"OC","population":"2166","area":"260.0","capital":"Alofi","latitude":"-19.0536414","longitude":"-169.8613411","north":"-18.951069","east":"-169.775177","south":"-19.152193","west":"-169.951004","timezone":"Pacific/Niue"},{"shortCode":"NZ","code":"NZL","names":{"en":"New Zealand","fr":"Nouvelle-Zélande","de":"Neuseeland"},"currency":"NZD","continent":"OC","population":"4252277","area":"268680.0","capital":"Wellington","latitude":"-41.5000831","longitude":"172.8344077","north":"-34.389668","east":"-180","south":"-47.286026","west":"166.7155","timezone":"Pacific/Auckland"},{"shortCode":"OM","code":"OMN","names":{"en":"Oman","fr":"Oman","de":"Oman"},"currency":"OMR","continent":"AS","population":"2967717","area":"212460.0","capital":"Muscat","latitude":"21.0000287","longitude":"57.0036901","north":"26.387972","east":"59.836582","south":"16.64575","west":"51.882","timezone":"Asia/Muscat"},{"shortCode":"PA","code":"PAN","names":{"en":"Panama","fr":"Panama","de":"Panama"},"currency":"PAB","continent":"NA","population":"3410676","area":"78200.0","capital":"Panama City","latitude":"8.3096067","longitude":"-81.3066246","north":"9.637514","east":"-77.17411","south":"7.197906","west":"-83.051445","timezone":"America/Panama"},{"shortCode":"PE","code":"PER","names":{"en":"Peru","fr":"Pérou","de":"Peru"},"currency":"PEN","continent":"SA","population":"29907003","area":"1285220.0","capital":"Lima","latitude":"-6.8699697","longitude":"-75.0458515","north":"-0.012977","east":"-68.677986","south":"-18.349728","west":"-81.326744","timezone":"America/Lima"},{"shortCode":"PF","code":"PYF","names":{"en":"French Polynesia","fr":"Polynésie Française","de":"Französisch-Polynesien"},"currency":"XPF","continent":"OC","population":"270485","area":"4167.0","capital":"Papeete","latitude":null,"longitude":null,"north":"-7.903573","east":"-134.929825","south":"-27.653572","west":"-152.877167","timezone":null},{"shortCode":"PG","code":"PNG","names":{"en":"Papua New Guinea","fr":"Papouasie-Nouvelle Guinée","de":"Papua-Neuguinea"},"currency":"PGK","continent":"OC","population":"6064515","area":"462840.0","capital":"Port Moresby","latitude":"-5.6816069","longitude":"144.2489081","north":"-1.318639","east":"155.96344","south":"-11.657861","west":"140.842865","timezone":"Pacific/Port_Moresby"},{"shortCode":"PH","code":"PHL","names":{"en":"Philippines","fr":"Philippines","de":"Philippinen"},"currency":"PHP","continent":"AS","population":"99900177","area":"300000.0","capital":"Manila","latitude":"12.7503486","longitude":"122.7312101","north":"21.120611","east":"126.601524","south":"4.643306","west":"116.931557","timezone":"Asia/Manila"},{"shortCode":"PK","code":"PAK","names":{"en":"Pakistan","fr":"Pakistan","de":"Pakistan"},"currency":"PKR","continent":"AS","population":"184404791","area":"803940.0","capital":"Islamabad","latitude":"30.3308401","longitude":"71.247499","north":"37.097","east":"77.840919","south":"23.786722","west":"60.878613","timezone":"Asia/Karachi"},{"shortCode":"PL","code":"POL","names":{"en":"Poland","fr":"Pologne","de":"Polen"},"currency":"PLN","continent":"EU","population":"38500000","area":"312685.0","capital":"Warsaw","latitude":"52.0977181","longitude":"19.0258159","north":"54.839138","east":"24.150749","south":"49.006363","west":"14.123","timezone":"Europe/Warsaw"},{"shortCode":"PM","code":"SPM","names":{"en":"Saint Pierre and Miquelon","fr":"Saint-Pierre et Miquelon","de":"St. Pierre und Miquelon"},"currency":"EUR","continent":"NA","population":"7012","area":"242.0","capital":"Saint-Pierre","latitude":null,"longitude":null,"north":"47.146286","east":"-56.252991","south":"46.786041","west":"-56.420658","timezone":null},{"shortCode":"PN","code":"PCN","names":{"en":"Pitcairn Islands","fr":"Pitcairn","de":"Pitcairn"},"currency":"NZD","continent":"OC","population":"46","area":"47.0","capital":"Adamstown","latitude":"-25.0657719","longitude":"-130.1017823","north":"-24.315865","east":"-124.77285","south":"-24.672565","west":"-128.346436","timezone":null},{"shortCode":"PR","code":"PRI","names":{"en":"Puerto Rico","fr":"Porto Rico","de":"Puerto Rico"},"currency":"USD","continent":"NA","population":"3916632","area":"9104.0","capital":"San Juan","latitude":null,"longitude":null,"north":"18.520166","east":"-65.242737","south":"17.926405","west":"-67.942726","timezone":null},{"shortCode":"PS","code":"PSE","names":{"en":"Palestine","fr":"Territoire palestinien","de":"Palästinensische Autonomiegebiete"},"currency":"ILS","continent":"AS","population":"3800000","area":"5970.0","capital":"","latitude":"31.649741","longitude":"35.162072","north":"32.54638671875","east":"35.573295593262","south":"31.216541290283","west":"34.216659545898","timezone":"Asia/Gaza"},{"shortCode":"PT","code":"PRT","names":{"en":"Portugal","fr":"Portugal","de":"Portugal"},"currency":"EUR","continent":"EU","population":"10676000","area":"92391.0","capital":"Lisbon","latitude":"40.033265","longitude":"-7.8896263","north":"42.154311127408","east":"-6.1891593074829","south":"36.96125","west":"-9.5005266071659","timezone":"Europe/Lisbon"},{"shortCode":"PW","code":"PLW","names":{"en":"Palau","fr":"Palaos","de":"Palau"},"currency":"USD","continent":"OC","population":"19907","area":"458.0","capital":"Melekeok - Palau State Capital","latitude":"6.097367","longitude":"133.313631","north":"8.46966","east":"134.72307","south":"2.8036","west":"131.11788","timezone":"Pacific/Palau"},{"shortCode":"PY","code":"PRY","names":{"en":"Paraguay","fr":"Paraguay","de":"Paraguay"},"currency":"PYG","continent":"SA","population":"6375830","area":"406750.0","capital":"Asunción","latitude":"-23.3165935","longitude":"-58.1693445","north":"-19.294041","east":"-54.259354","south":"-27.608738","west":"-62.647076","timezone":"America/Asuncion"},{"shortCode":"QA","code":"QAT","names":{"en":"Qatar","fr":"Qatar","de":"Katar"},"currency":"QAR","continent":"AS","population":"840926","area":"11437.0","capital":"Doha","latitude":"25.3336984","longitude":"51.2295295","north":"26.154722","east":"51.636639","south":"24.482944","west":"50.757221","timezone":"Asia/Qatar"},{"shortCode":"RE","code":"REU","names":{"en":"Réunion","fr":"Réunion","de":"Réunion"},"currency":"EUR","continent":"AF","population":"776948","area":"2517.0","capital":"Saint-Denis","latitude":null,"longitude":null,"north":"-20.868391324577","east":"55.83819390193","south":"-21.383747301469","west":"55.212192247927","timezone":null},{"shortCode":"RO","code":"ROU","names":{"en":"Romania","fr":"Roumanie","de":"Rumänien"},"currency":"RON","continent":"EU","population":"21959278","area":"237500.0","capital":"Bucharest","latitude":"45.9852129","longitude":"24.6859225","north":"48.266945","east":"29.691055","south":"43.627304","west":"20.269972","timezone":"Europe/Bucharest"},{"shortCode":"RS","code":"SRB","names":{"en":"Serbia","fr":"Serbie","de":"Serbien"},"currency":"RSD","continent":"EU","population":"7344847","area":"88361.0","capital":"Belgrade","latitude":"44.1534121","longitude":"20.55144","north":"46.18138885498","east":"23.004997253418","south":"42.232215881348","west":"18.81702041626","timezone":"Europe/Belgrade"},{"shortCode":"RU","code":"RUS","names":{"en":"Russia","fr":"Russie","de":"Russland"},"currency":"RUB","continent":"EU","population":"140702000","area":"1.71E7","capital":"Moscow","latitude":"64.6863136","longitude":"97.7453061","north":"81.857361","east":"-169.05","south":"41.188862","west":"19.25","timezone":null},{"shortCode":"RW","code":"RWA","names":{"en":"Rwanda","fr":"Rwanda","de":"Ruanda"},"currency":"RWF","continent":"AF","population":"11055976","area":"26338.0","capital":"Kigali","latitude":"-1.9646631","longitude":"30.0644358","north":"-1.053481","east":"30.895958","south":"-2.840679","west":"28.856794","timezone":"Africa/Kigali"},{"shortCode":"SA","code":"SAU","names":{"en":"Saudi Arabia","fr":"Arabie saoudite","de":"Saudi-Arabien"},"currency":"SAR","continent":"AS","population":"25731776","area":"1960582.0","capital":"Riyadh","latitude":"25.6242618","longitude":"42.3528328","north":"32.158333","east":"55.666584","south":"15.61425","west":"34.495693","timezone":"Asia/Riyadh"},{"shortCode":"SB","code":"SLB","names":{"en":"Solomon Islands","fr":"Îles Salomon","de":"Solomon-Inseln"},"currency":"SBD","continent":"OC","population":"559198","area":"28450.0","capital":"Honiara","latitude":"-9.7354344","longitude":"162.8288542","north":"-6.589611","east":"166.980865","south":"-11.850555","west":"155.508606","timezone":"Pacific/Guadalcanal"},{"shortCode":"SC","code":"SYC","names":{"en":"Seychelles","fr":"Seychelles","de":"Seychellen"},"currency":"SCR","continent":"AF","population":"88340","area":"455.0","capital":"Victoria","latitude":"-4.6574977","longitude":"55.4540146","north":"-4.283717","east":"56.297702879373","south":"-9.753867","west":"46.204769","timezone":"Indian/Mahe"},{"shortCode":"SD","code":"SDN","names":{"en":"Sudan","fr":"Soudan","de":"Sudan"},"currency":"SDG","continent":"AF","population":"35000000","area":"1861484.0","capital":"Khartoum","latitude":"15.79125","longitude":"30.3714240785933","north":"22.232219696045","east":"38.607498168945","south":"8.684720993042","west":"21.827774047852","timezone":"Africa/Khartoum"},{"shortCode":"SE","code":"SWE","names":{"en":"Sweden","fr":"Suède","de":"Schweden"},"currency":"SEK","continent":"EU","population":"9555893","area":"449964.0","capital":"Stockholm","latitude":"59.6749712","longitude":"14.5208584","north":"69.0625","east":"24.156292483918","south":"55.337112","west":"11.118694","timezone":"Europe/Stockholm"},{"shortCode":"SG","code":"SGP","names":{"en":"Singapore","fr":"Singapour","de":"Singapur"},"currency":"SGD","continent":"AS","population":"4701069","area":"692.7","capital":"Singapore","latitude":"1.357107","longitude":"103.8194992","north":"1.471278","east":"104.007469","south":"1.258556","west":"103.638275","timezone":"Asia/Singapore"},{"shortCode":"SH","code":"SHN","names":{"en":"Saint Helena","fr":"Sainte-Hélène","de":"St. Helena"},"currency":"SHP","continent":"AF","population":"7460","area":"410.0","capital":"Jamestown","latitude":"-16.6754836","longitude":"-4.9721717","north":"-7.887815","east":"-5.638753","south":"-16.019543","west":"-14.42123","timezone":"Atlantic/St_Helena"},{"shortCode":"SI","code":"SVN","names":{"en":"Slovenia","fr":"Slovénie","de":"Slowenien"},"currency":"EUR","continent":"EU","population":"2007000","area":"20273.0","capital":"Ljubljana","latitude":"45.8133113","longitude":"14.4808369","north":"46.87662755182","east":"16.6106311807","south":"45.421812998164","west":"13.375334206471","timezone":"Europe/Ljubljana"},{"shortCode":"SJ","code":"SJM","names":{"en":"Svalbard and Jan Mayen","fr":"Svalbard et Île Jan Mayen","de":"Svalbard und Jan Mayen"},"currency":"NOK","continent":"EU","population":"2550","area":"62049.0","capital":"Longyearbyen","latitude":null,"longitude":null,"north":"80.762085","east":"33.287334","south":"79.220306","west":"17.699389","timezone":null},{"shortCode":"SK","code":"SVK","names":{"en":"Slovakia","fr":"Slovaquie","de":"Slowakei (Slowakische Republik)"},"currency":"EUR","continent":"EU","population":"5455000","area":"48845.0","capital":"Bratislava","latitude":"48.7411522","longitude":"19.4528646","north":"49.603168","east":"22.570444","south":"47.728111","west":"16.84775","timezone":"Europe/Bratislava"},{"shortCode":"SL","code":"SLE","names":{"en":"Sierra Leone","fr":"Sierra Leone","de":"Sierra Leone"},"currency":"SLL","continent":"AF","population":"5245695","area":"71740.0","capital":"Freetown","latitude":"8.6400349","longitude":"-11.8400269","north":"10","east":"-10.284238","south":"6.929611","west":"-13.307631","timezone":"Africa/Freetown"},{"shortCode":"SM","code":"SMR","names":{"en":"San Marino","fr":"Saint-Marin","de":"San Marino"},"currency":"EUR","continent":"EU","population":"31477","area":"61.2","capital":"San Marino","latitude":"43.9458623","longitude":"12.458306","north":"43.992237308517","east":"12.516531867798","south":"43.893709217143","west":"12.403538978821","timezone":"Europe/San_Marino"},{"shortCode":"SN","code":"SEN","names":{"en":"Senegal","fr":"Sénégal","de":"Senegal"},"currency":"XOF","continent":"AF","population":"12323252","area":"196190.0","capital":"Dakar","latitude":"14.4750607","longitude":"-14.4529612","north":"16.691633","east":"-11.355887","south":"12.307275","west":"-17.535236","timezone":"Africa/Dakar"},{"shortCode":"SO","code":"SOM","names":{"en":"Somalia","fr":"Somalie","de":"Somalia"},"currency":"SOS","continent":"AF","population":"10112453","area":"637657.0","capital":"Mogadishu","latitude":"8.3676771","longitude":"49.083416","north":"11.979166","east":"51.412636","south":"-1.674868","west":"40.986595","timezone":"Africa/Mogadishu"},{"shortCode":"SR","code":"SUR","names":{"en":"Suriname","fr":"Surinam","de":"Suriname"},"currency":"SRD","continent":"SA","population":"492829","area":"163270.0","capital":"Paramaribo","latitude":"4.1413025","longitude":"-56.0771187","north":"6.004546","east":"-53.977493","south":"1.831145","west":"-58.086563","timezone":"America/Paramaribo"},{"shortCode":"SS","code":"SSD","names":{"en":"South Sudan","fr":"Sud-Soudan","de":"Südsudan"},"currency":"SSP","continent":"AF","population":"8260490","area":"644329.0","capital":"Juba","latitude":"7.2653861","longitude":"30.05489","north":"12.219148635864","east":"35.940551757812","south":"3.4933943748474","west":"24.140274047852","timezone":"Africa/Juba"},{"shortCode":"ST","code":"STP","names":{"en":"São Tomé and Príncipe","fr":"São Tomé-et-Príncipe","de":"Sao Tomé und Principe"},"currency":"STD","continent":"AF","population":"175808","area":"1001.0","capital":"São Tomé","latitude":"0.231437","longitude":"6.613745","north":"1.701323","east":"7.466374","south":"0.024766","west":"6.47017","timezone":"Africa/Sao_Tome"},{"shortCode":"SV","code":"SLV","names":{"en":"El Salvador","fr":"Salvador","de":"El Salvador"},"currency":"USD","continent":"NA","population":"6052064","area":"21040.0","capital":"San Salvador","latitude":"13.8000382","longitude":"-88.9140683","north":"14.445067","east":"-87.692162","south":"13.148679","west":"-90.128662","timezone":"America/El_Salvador"},{"shortCode":"SX","code":"SXM","names":{"en":"Sint Maarten","fr":"Saint-Martin","de":"Sint Maarten"},"currency":"ANG","continent":"NA","population":"37429","area":"","capital":"Philipsburg","latitude":null,"longitude":null,"north":"18.070248","east":"-63.012993","south":"18.011692","west":"-63.144039","timezone":null},{"shortCode":"SY","code":"SYR","names":{"en":"Syria","fr":"Syrie","de":"Syrien"},"currency":"SYP","continent":"AS","population":"22198110","area":"185180.0","capital":"Damascus","latitude":"34.6401861","longitude":"39.0494106","north":"37.319138","east":"42.385029","south":"32.310665","west":"35.727222","timezone":"Asia/Damascus"},{"shortCode":"SZ","code":"SWZ","names":{"en":"Swaziland","fr":"Swaziland","de":"Swasiland"},"currency":"SZL","continent":"AF","population":"1354051","area":"17363.0","capital":"Mbabane","latitude":"-26.5624806","longitude":"31.3991317","north":"-25.719648","east":"32.13726","south":"-27.317101","west":"30.794107","timezone":"Africa/Mbabane"},{"shortCode":"TC","code":"TCA","names":{"en":"Turks and Caicos Islands","fr":"Îles Turques-et-Caïques","de":"Turks- und Caicosinseln"},"currency":"USD","continent":"NA","population":"20556","area":"430.0","capital":"Cockburn Town","latitude":"21.7214683","longitude":"-71.6201783","north":"21.961878","east":"-71.123642","south":"21.422626","west":"-72.483871","timezone":"America/Grand_Turk"},{"shortCode":"TD","code":"TCD","names":{"en":"Chad","fr":"Tchad","de":"Tschad"},"currency":"XAF","continent":"AF","population":"10543464","area":"1284000.0","capital":"N'Djamena","latitude":"15.6134137","longitude":"19.0156172","north":"23.450369","east":"24.002661","south":"7.441068","west":"13.473475","timezone":"Africa/Ndjamena"},{"shortCode":"TF","code":"ATF","names":{"en":"French Southern Territories","fr":"Terres australes françaises","de":"Französische Süd- und Antarktisgebiete"},"currency":"EUR","continent":"AN","population":"140","area":"7829.0","capital":"Port-aux-Français","latitude":null,"longitude":null,"north":"-37.790722","east":"77.598808","south":"-49.735184","west":"50.170258","timezone":null},{"shortCode":"TG","code":"TGO","names":{"en":"Togo","fr":"République Togolaise","de":"Togo"},"currency":"XOF","continent":"AF","population":"6587239","area":"56785.0","capital":"Lomé","latitude":"8.7800265","longitude":"1.0199765","north":"11.138977","east":"1.806693","south":"6.104417","west":"-0.147324","timezone":"Africa/Lome"},{"shortCode":"TH","code":"THA","names":{"en":"Thailand","fr":"Thaïlande","de":"Thailand"},"currency":"THB","continent":"AS","population":"67089500","area":"514000.0","capital":"Bangkok","latitude":"14.8971921","longitude":"100.83273","north":"20.463194","east":"105.639389","south":"5.61","west":"97.345642","timezone":"Asia/Bangkok"},{"shortCode":"TJ","code":"TJK","names":{"en":"Tajikistan","fr":"Tadjikistan","de":"Tadschikistan"},"currency":"TJS","continent":"AS","population":"7487489","area":"143100.0","capital":"Dushanbe","latitude":"38.6281733","longitude":"70.8156541","north":"41.042252","east":"75.137222","south":"36.674137","west":"67.387138","timezone":"Asia/Dushanbe"},{"shortCode":"TK","code":"TKL","names":{"en":"Tokelau","fr":"Tokelau","de":"Tokelau"},"currency":"NZD","continent":"OC","population":"1466","area":"10.0","capital":"","latitude":"-9.1676396","longitude":"-171.8196878","north":"-8.5536136627197","east":"-171.21142578125","south":"-9.3811111450195","west":"-172.50033569336","timezone":null},{"shortCode":"TL","code":"TLS","names":{"en":"East Timor","fr":"Timor Oriental","de":"Timor-Leste"},"currency":"USD","continent":"OC","population":"1154625","area":"15007.0","capital":"Dili","latitude":"-8.5151979","longitude":"125.8375756","north":"-8.1358337402344","east":"127.30859375","south":"-9.4636268615723","west":"124.04609680176","timezone":"Asia/Dili"},{"shortCode":"TM","code":"TKM","names":{"en":"Turkmenistan","fr":"Turkménistan","de":"Turkmenistan"},"currency":"TMT","continent":"AS","population":"4940916","area":"488100.0","capital":"Ashgabat","latitude":"39.3763807","longitude":"59.3924609","north":"42.795555","east":"66.684303","south":"35.141083","west":"52.441444","timezone":"Asia/Ashgabat"},{"shortCode":"TN","code":"TUN","names":{"en":"Tunisia","fr":"Tunisie","de":"Tunesien"},"currency":"TND","continent":"AF","population":"10589025","area":"163610.0","capital":"Tunis","latitude":"34.00353685","longitude":"9.36077214013382","north":"37.543915","east":"11.598278","south":"30.240417","west":"7.524833","timezone":"Africa/Tunis"},{"shortCode":"TO","code":"TON","names":{"en":"Tonga","fr":"Tonga","de":"Tonga"},"currency":"TOP","continent":"OC","population":"122580","area":"748.0","capital":"Nuku'alofa","latitude":"-19.9160819","longitude":"-175.2026424","north":"-15.562988","east":"-173.907578","south":"-21.455057","west":"-175.682266","timezone":null},{"shortCode":"TR","code":"TUR","names":{"en":"Turkey","fr":"Turquie","de":"Türkei"},"currency":"TRY","continent":"AS","population":"77804122","area":"780580.0","capital":"Ankara","latitude":"38.9597594","longitude":"34.9249653","north":"42.107613","east":"44.834999","south":"35.815418","west":"25.668501","timezone":"Europe/Istanbul"},{"shortCode":"TT","code":"TTO","names":{"en":"Trinidad and Tobago","fr":"Trinidad et Tobago","de":"Trinidad und Tobago"},"currency":"TTD","continent":"NA","population":"1228691","area":"5128.0","capital":"Port of Spain","latitude":"10.8677845","longitude":"-60.9821067","north":"11.338342","east":"-60.517933","south":"10.036105","west":"-61.923771","timezone":"America/Port_of_Spain"},{"shortCode":"TV","code":"TUV","names":{"en":"Tuvalu","fr":"Tuvalu","de":"Tuwalu"},"currency":"AUD","continent":"OC","population":"10472","area":"26.0","capital":"Funafuti","latitude":"-7.768959","longitude":"178.1167698","north":"-5.641972","east":"179.863281","south":"-10.801169","west":"176.064865","timezone":null},{"shortCode":"TW","code":"TWN","names":{"en":"Taiwan","fr":"Taïwan","de":"Republik China"},"currency":"TWD","continent":"AS","population":"22894384","area":"35980.0","capital":"Taipei","latitude":"23.9739374","longitude":"120.9820179","north":"25.300289903618","east":"122.00673982332","south":"21.896606934717","west":"119.534691","timezone":"Asia/Taipei"},{"shortCode":"TZ","code":"TZA","names":{"en":"Tanzania","fr":"Tanzanie","de":"Tansania"},"currency":"TZS","continent":"AF","population":"41892895","area":"945087.0","capital":"Dodoma","latitude":"-6.5247123","longitude":"35.7878438","north":"-0.990736","east":"40.443222","south":"-11.745696","west":"29.327168","timezone":"Africa/Dar_es_Salaam"},{"shortCode":"UA","code":"UKR","names":{"en":"Ukraine","fr":"Ukraine","de":"Ukraine"},"currency":"UAH","continent":"EU","population":"45415596","area":"603700.0","capital":"Kyiv","latitude":"49.4871968","longitude":"31.2718321","north":"52.369362","east":"40.20739","south":"44.390415","west":"22.128889","timezone":null},{"shortCode":"UG","code":"UGA","names":{"en":"Uganda","fr":"Ouganda","de":"Uganda"},"currency":"UGX","continent":"AF","population":"33398682","area":"236040.0","capital":"Kampala","latitude":"1.5333554","longitude":"32.2166578","north":"4.214427","east":"35.036049","south":"-1.48405","west":"29.573252","timezone":"Africa/Kampala"},{"shortCode":"UM","code":"UMI","names":{"en":"U.S. Minor Outlying Islands","fr":"Îles mineures éloignées des États-Unis","de":"Amerikanisch-Ozeanien"},"currency":"USD","continent":"OC","population":"0","area":"0.0","capital":"","latitude":null,"longitude":null,"north":"28.219814","east":"166.654526","south":"-0.389006","west":"-177.392029","timezone":null},{"shortCode":"US","code":"USA","names":{"en":"United States","fr":"États-Unis","de":"USA"},"currency":"USD","continent":"NA","population":"310232863","area":"9629091.0","capital":"Washington","latitude":"39.7837304","longitude":"-100.4458825","north":"49.388611","east":"-66.954811","south":"24.544245","west":"-124.733253","timezone":null},{"shortCode":"UY","code":"URY","names":{"en":"Uruguay","fr":"Uruguay","de":"Uruguay"},"currency":"UYU","continent":"SA","population":"3477000","area":"176220.0","capital":"Montevideo","latitude":"-32.8755548","longitude":"-56.0201525","north":"-30.082224","east":"-53.073933","south":"-34.980816","west":"-58.442722","timezone":"America/Montevideo"},{"shortCode":"UZ","code":"UZB","names":{"en":"Uzbekistan","fr":"Ouzbékistan","de":"Usbekistan"},"currency":"UZS","continent":"AS","population":"27865738","area":"447400.0","capital":"Tashkent","latitude":"41.32373","longitude":"63.9528098","north":"45.575001","east":"73.132278","south":"37.184444","west":"55.996639","timezone":"Asia/Tashkent"},{"shortCode":"VA","code":"VAT","names":{"en":"Vatican City","fr":"Vatican","de":"Staat der Vatikanstadt"},"currency":"EUR","continent":"EU","population":"921","area":"0.44","capital":"Vatican","latitude":"41.9034912","longitude":"12.4528349","north":"41.907438308856","east":"12.458375466295","south":"41.900279603069","west":"12.445706781692","timezone":"Europe/Vatican"},{"shortCode":"VC","code":"VCT","names":{"en":"Saint Vincent and the Grenadines","fr":"Saint-Vincent-et-les Grenadines","de":"St. Vincent und die Grenadinen"},"currency":"XCD","continent":"NA","population":"104217","area":"389.0","capital":"Kingstown","latitude":"12.90447","longitude":"-61.2765569","north":"13.377834","east":"-61.11388","south":"12.583984810969","west":"-61.460903177277","timezone":"America/St_Vincent"},{"shortCode":"VE","code":"VEN","names":{"en":"Venezuela","fr":"Vénézuéla","de":"Venezuela"},"currency":"VEF","continent":"SA","population":"27223228","area":"912050.0","capital":"Caracas","latitude":"8.0018709","longitude":"-66.1109318","north":"12.201903","east":"-59.80378","south":"0.626311","west":"-73.354073","timezone":"America/Caracas"},{"shortCode":"VG","code":"VGB","names":{"en":"British Virgin Islands","fr":"Îles Vierges","de":"Britische Jungferninseln"},"currency":"USD","continent":"NA","population":"21730","area":"153.0","capital":"Road Town","latitude":"18.4024395","longitude":"-64.5661642","north":"18.757221","east":"-64.268768","south":"18.383710898211","west":"-64.713127527304","timezone":"America/Tortola"},{"shortCode":"VI","code":"VIR","names":{"en":"U.S. Virgin Islands","fr":"Îles Vierges des États-Unis","de":"Amerikanische Jungferninseln"},"currency":"USD","continent":"NA","population":"108708","area":"352.0","capital":"Charlotte Amalie","latitude":null,"longitude":null,"north":"18.415382","east":"-64.565193","south":"17.673931","west":"-65.101333","timezone":null},{"shortCode":"VN","code":"VNM","names":{"en":"Vietnam","fr":"Vietnam","de":"Vietnam"},"currency":"VND","continent":"AS","population":"89571130","area":"329560.0","capital":"Hanoi","latitude":"13.2904027","longitude":"108.4265113","north":"23.388834","east":"109.464638","south":"8.559611","west":"102.148224","timezone":"Asia/Ho_Chi_Minh"},{"shortCode":"VU","code":"VUT","names":{"en":"Vanuatu","fr":"Vanuatu","de":"Vanuatu"},"currency":"VUV","continent":"OC","population":"221552","area":"12200.0","capital":"Port Vila","latitude":"-16.5255069","longitude":"168.1069154","north":"-13.073444","east":"169.904785","south":"-20.248945","west":"166.524979","timezone":null},{"shortCode":"WF","code":"WLF","names":{"en":"Wallis and Futuna","fr":"Wallis-et-Futuna","de":"Wallis und Futuna"},"currency":"XPF","continent":"OC","population":"16025","area":"274.0","capital":"Mata-Utu","latitude":null,"longitude":null,"north":"-13.216758181061","east":"-176.16174317718","south":"-14.314559989821","west":"-178.18481128964","timezone":null},{"shortCode":"WS","code":"WSM","names":{"en":"Samoa","fr":"Samoa","de":"Samoa"},"currency":"WST","continent":"OC","population":"192001","area":"2944.0","capital":"Apia","latitude":"-13.7693895","longitude":"-172.1200508","north":"-13.432207","east":"-171.415741","south":"-14.040939","west":"-172.798599","timezone":"Pacific/Apia"},{"shortCode":"XK","code":"XKX","names":{"en":"Kosovo","fr":"Kosovo","de":"Kosovo"},"currency":"EUR","continent":"EU","population":"1800000","area":"","capital":"Pristina","latitude":null,"longitude":null,"north":"43.268249580795","east":"21.803350886949","south":"41.85636960186","west":"19.977481504493","timezone":null},{"shortCode":"YE","code":"YEM","names":{"en":"Yemen","fr":"Yémen","de":"Jemen"},"currency":"YER","continent":"AS","population":"23495361","area":"527970.0","capital":"Sanaa","latitude":"16.3471243","longitude":"47.8915271","north":"18.999998903101","east":"54.530538816328","south":"12.111091026446","west":"42.532539431423","timezone":"Asia/Aden"},{"shortCode":"YT","code":"MYT","names":{"en":"Mayotte","fr":"Mayotte","de":"Mayotte"},"currency":"EUR","continent":"AF","population":"159042","area":"374.0","capital":"Mamoutzou","latitude":null,"longitude":null,"north":"-12.648891","east":"45.29295","south":"-13.000132","west":"45.03796","timezone":null},{"shortCode":"ZA","code":"ZAF","names":{"en":"South Africa","fr":"Afrique du Sud","de":"Republik Südafrika"},"currency":"ZAR","continent":"AF","population":"49000000","area":"1219912.0","capital":"Pretoria","latitude":"-28.8166236","longitude":"24.991639","north":"-22.126612","east":"32.895973","south":"-34.839828","west":"16.458021","timezone":"Africa/Johannesburg"},{"shortCode":"ZM","code":"ZMB","names":{"en":"Zambia","fr":"Zambie","de":"Sambia"},"currency":"ZMW","continent":"AF","population":"13460305","area":"752614.0","capital":"Lusaka","latitude":"-14.5186239","longitude":"27.5599164","north":"-8.22436","east":"33.705704","south":"-18.079473","west":"21.999371","timezone":"Africa/Lusaka"},{"shortCode":"ZW","code":"ZWE","names":{"en":"Zimbabwe","fr":"Zimbabwe","de":"Simbabwe"},"currency":"ZWL","continent":"AF","population":"11651858","area":"390580.0","capital":"Harare","latitude":"-18.4554963","longitude":"29.7468414","north":"-15.608835","east":"33.056305","south":"-22.417738","west":"25.237028","timezone":"Africa/Harare"}];

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ZW",
		"code": "ZWE",
		"names": {
			"en": "Zimbabwe",
			"fr": "Zimbabwe",
			"de": "Simbabwe"
		},
		"currency": "ZWL",
		"continent": "AF",
		"population": "11651858",
		"area": "390580.0",
		"capital": "Harare",
		"latitude": "-18.4554963",
		"longitude": "29.7468414",
		"north": "-15.608835",
		"east": "33.056305",
		"south": "-22.417738",
		"west": "25.237028",
		"timezone": "Africa/Harare"
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ZM",
		"code": "ZMB",
		"names": {
			"en": "Zambia",
			"fr": "Zambie",
			"de": "Sambia"
		},
		"currency": "ZMW",
		"continent": "AF",
		"population": "13460305",
		"area": "752614.0",
		"capital": "Lusaka",
		"latitude": "-14.5186239",
		"longitude": "27.5599164",
		"north": "-8.22436",
		"east": "33.705704",
		"south": "-18.079473",
		"west": "21.999371",
		"timezone": "Africa/Lusaka"
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ZA",
		"code": "ZAF",
		"names": {
			"en": "South Africa",
			"fr": "Afrique du Sud",
			"de": "Republik Südafrika"
		},
		"currency": "ZAR",
		"continent": "AF",
		"population": "49000000",
		"area": "1219912.0",
		"capital": "Pretoria",
		"latitude": "-28.8166236",
		"longitude": "24.991639",
		"north": "-22.126612",
		"east": "32.895973",
		"south": "-34.839828",
		"west": "16.458021",
		"timezone": "Africa/Johannesburg"
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "YT",
		"code": "MYT",
		"names": {
			"en": "Mayotte",
			"fr": "Mayotte",
			"de": "Mayotte"
		},
		"currency": "EUR",
		"continent": "AF",
		"population": "159042",
		"area": "374.0",
		"capital": "Mamoutzou",
		"latitude": null,
		"longitude": null,
		"north": "-12.648891",
		"east": "45.29295",
		"south": "-13.000132",
		"west": "45.03796",
		"timezone": null
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "YE",
		"code": "YEM",
		"names": {
			"en": "Yemen",
			"fr": "Yémen",
			"de": "Jemen"
		},
		"currency": "YER",
		"continent": "AS",
		"population": "23495361",
		"area": "527970.0",
		"capital": "Sanaa",
		"latitude": "16.3471243",
		"longitude": "47.8915271",
		"north": "18.999998903101",
		"east": "54.530538816328",
		"south": "12.111091026446",
		"west": "42.532539431423",
		"timezone": "Asia/Aden"
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "XK",
		"code": "XKX",
		"names": {
			"en": "Kosovo",
			"fr": "Kosovo",
			"de": "Kosovo"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "1800000",
		"area": "",
		"capital": "Pristina",
		"latitude": null,
		"longitude": null,
		"north": "43.268249580795",
		"east": "21.803350886949",
		"south": "41.85636960186",
		"west": "19.977481504493",
		"timezone": null
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "WS",
		"code": "WSM",
		"names": {
			"en": "Samoa",
			"fr": "Samoa",
			"de": "Samoa"
		},
		"currency": "WST",
		"continent": "OC",
		"population": "192001",
		"area": "2944.0",
		"capital": "Apia",
		"latitude": "-13.7693895",
		"longitude": "-172.1200508",
		"north": "-13.432207",
		"east": "-171.415741",
		"south": "-14.040939",
		"west": "-172.798599",
		"timezone": "Pacific/Apia"
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "WF",
		"code": "WLF",
		"names": {
			"en": "Wallis and Futuna",
			"fr": "Wallis-et-Futuna",
			"de": "Wallis und Futuna"
		},
		"currency": "XPF",
		"continent": "OC",
		"population": "16025",
		"area": "274.0",
		"capital": "Mata-Utu",
		"latitude": null,
		"longitude": null,
		"north": "-13.216758181061",
		"east": "-176.16174317718",
		"south": "-14.314559989821",
		"west": "-178.18481128964",
		"timezone": null
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VU",
		"code": "VUT",
		"names": {
			"en": "Vanuatu",
			"fr": "Vanuatu",
			"de": "Vanuatu"
		},
		"currency": "VUV",
		"continent": "OC",
		"population": "221552",
		"area": "12200.0",
		"capital": "Port Vila",
		"latitude": "-16.5255069",
		"longitude": "168.1069154",
		"north": "-13.073444",
		"east": "169.904785",
		"south": "-20.248945",
		"west": "166.524979",
		"timezone": null
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VN",
		"code": "VNM",
		"names": {
			"en": "Vietnam",
			"fr": "Vietnam",
			"de": "Vietnam"
		},
		"currency": "VND",
		"continent": "AS",
		"population": "89571130",
		"area": "329560.0",
		"capital": "Hanoi",
		"latitude": "13.2904027",
		"longitude": "108.4265113",
		"north": "23.388834",
		"east": "109.464638",
		"south": "8.559611",
		"west": "102.148224",
		"timezone": "Asia/Ho_Chi_Minh"
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VI",
		"code": "VIR",
		"names": {
			"en": "U.S. Virgin Islands",
			"fr": "Îles Vierges des États-Unis",
			"de": "Amerikanische Jungferninseln"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "108708",
		"area": "352.0",
		"capital": "Charlotte Amalie",
		"latitude": null,
		"longitude": null,
		"north": "18.415382",
		"east": "-64.565193",
		"south": "17.673931",
		"west": "-65.101333",
		"timezone": null
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VG",
		"code": "VGB",
		"names": {
			"en": "British Virgin Islands",
			"fr": "Îles Vierges",
			"de": "Britische Jungferninseln"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "21730",
		"area": "153.0",
		"capital": "Road Town",
		"latitude": "18.4024395",
		"longitude": "-64.5661642",
		"north": "18.757221",
		"east": "-64.268768",
		"south": "18.383710898211",
		"west": "-64.713127527304",
		"timezone": "America/Tortola"
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VE",
		"code": "VEN",
		"names": {
			"en": "Venezuela",
			"fr": "Vénézuéla",
			"de": "Venezuela"
		},
		"currency": "VEF",
		"continent": "SA",
		"population": "27223228",
		"area": "912050.0",
		"capital": "Caracas",
		"latitude": "8.0018709",
		"longitude": "-66.1109318",
		"north": "12.201903",
		"east": "-59.80378",
		"south": "0.626311",
		"west": "-73.354073",
		"timezone": "America/Caracas"
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VC",
		"code": "VCT",
		"names": {
			"en": "Saint Vincent and the Grenadines",
			"fr": "Saint-Vincent-et-les Grenadines",
			"de": "St. Vincent und die Grenadinen"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "104217",
		"area": "389.0",
		"capital": "Kingstown",
		"latitude": "12.90447",
		"longitude": "-61.2765569",
		"north": "13.377834",
		"east": "-61.11388",
		"south": "12.583984810969",
		"west": "-61.460903177277",
		"timezone": "America/St_Vincent"
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "VA",
		"code": "VAT",
		"names": {
			"en": "Vatican City",
			"fr": "Vatican",
			"de": "Staat der Vatikanstadt"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "921",
		"area": "0.44",
		"capital": "Vatican",
		"latitude": "41.9034912",
		"longitude": "12.4528349",
		"north": "41.907438308856",
		"east": "12.458375466295",
		"south": "41.900279603069",
		"west": "12.445706781692",
		"timezone": "Europe/Vatican"
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "UZ",
		"code": "UZB",
		"names": {
			"en": "Uzbekistan",
			"fr": "Ouzbékistan",
			"de": "Usbekistan"
		},
		"currency": "UZS",
		"continent": "AS",
		"population": "27865738",
		"area": "447400.0",
		"capital": "Tashkent",
		"latitude": "41.32373",
		"longitude": "63.9528098",
		"north": "45.575001",
		"east": "73.132278",
		"south": "37.184444",
		"west": "55.996639",
		"timezone": "Asia/Tashkent"
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "UY",
		"code": "URY",
		"names": {
			"en": "Uruguay",
			"fr": "Uruguay",
			"de": "Uruguay"
		},
		"currency": "UYU",
		"continent": "SA",
		"population": "3477000",
		"area": "176220.0",
		"capital": "Montevideo",
		"latitude": "-32.8755548",
		"longitude": "-56.0201525",
		"north": "-30.082224",
		"east": "-53.073933",
		"south": "-34.980816",
		"west": "-58.442722",
		"timezone": "America/Montevideo"
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "US",
		"code": "USA",
		"names": {
			"en": "United States",
			"fr": "États-Unis",
			"de": "USA"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "310232863",
		"area": "9629091.0",
		"capital": "Washington",
		"latitude": "39.7837304",
		"longitude": "-100.4458825",
		"north": "49.388611",
		"east": "-66.954811",
		"south": "24.544245",
		"west": "-124.733253",
		"timezone": null
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "UM",
		"code": "UMI",
		"names": {
			"en": "U.S. Minor Outlying Islands",
			"fr": "Îles mineures éloignées des États-Unis",
			"de": "Amerikanisch-Ozeanien"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "0",
		"area": "0.0",
		"capital": "",
		"latitude": null,
		"longitude": null,
		"north": "28.219814",
		"east": "166.654526",
		"south": "-0.389006",
		"west": "-177.392029",
		"timezone": null
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "UG",
		"code": "UGA",
		"names": {
			"en": "Uganda",
			"fr": "Ouganda",
			"de": "Uganda"
		},
		"currency": "UGX",
		"continent": "AF",
		"population": "33398682",
		"area": "236040.0",
		"capital": "Kampala",
		"latitude": "1.5333554",
		"longitude": "32.2166578",
		"north": "4.214427",
		"east": "35.036049",
		"south": "-1.48405",
		"west": "29.573252",
		"timezone": "Africa/Kampala"
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "UA",
		"code": "UKR",
		"names": {
			"en": "Ukraine",
			"fr": "Ukraine",
			"de": "Ukraine"
		},
		"currency": "UAH",
		"continent": "EU",
		"population": "45415596",
		"area": "603700.0",
		"capital": "Kyiv",
		"latitude": "49.4871968",
		"longitude": "31.2718321",
		"north": "52.369362",
		"east": "40.20739",
		"south": "44.390415",
		"west": "22.128889",
		"timezone": null
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TZ",
		"code": "TZA",
		"names": {
			"en": "Tanzania",
			"fr": "Tanzanie",
			"de": "Tansania"
		},
		"currency": "TZS",
		"continent": "AF",
		"population": "41892895",
		"area": "945087.0",
		"capital": "Dodoma",
		"latitude": "-6.5247123",
		"longitude": "35.7878438",
		"north": "-0.990736",
		"east": "40.443222",
		"south": "-11.745696",
		"west": "29.327168",
		"timezone": "Africa/Dar_es_Salaam"
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TW",
		"code": "TWN",
		"names": {
			"en": "Taiwan",
			"fr": "Taïwan",
			"de": "Republik China"
		},
		"currency": "TWD",
		"continent": "AS",
		"population": "22894384",
		"area": "35980.0",
		"capital": "Taipei",
		"latitude": "23.9739374",
		"longitude": "120.9820179",
		"north": "25.300289903618",
		"east": "122.00673982332",
		"south": "21.896606934717",
		"west": "119.534691",
		"timezone": "Asia/Taipei"
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TV",
		"code": "TUV",
		"names": {
			"en": "Tuvalu",
			"fr": "Tuvalu",
			"de": "Tuwalu"
		},
		"currency": "AUD",
		"continent": "OC",
		"population": "10472",
		"area": "26.0",
		"capital": "Funafuti",
		"latitude": "-7.768959",
		"longitude": "178.1167698",
		"north": "-5.641972",
		"east": "179.863281",
		"south": "-10.801169",
		"west": "176.064865",
		"timezone": null
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TT",
		"code": "TTO",
		"names": {
			"en": "Trinidad and Tobago",
			"fr": "Trinidad et Tobago",
			"de": "Trinidad und Tobago"
		},
		"currency": "TTD",
		"continent": "NA",
		"population": "1228691",
		"area": "5128.0",
		"capital": "Port of Spain",
		"latitude": "10.8677845",
		"longitude": "-60.9821067",
		"north": "11.338342",
		"east": "-60.517933",
		"south": "10.036105",
		"west": "-61.923771",
		"timezone": "America/Port_of_Spain"
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TR",
		"code": "TUR",
		"names": {
			"en": "Turkey",
			"fr": "Turquie",
			"de": "Türkei"
		},
		"currency": "TRY",
		"continent": "AS",
		"population": "77804122",
		"area": "780580.0",
		"capital": "Ankara",
		"latitude": "38.9597594",
		"longitude": "34.9249653",
		"north": "42.107613",
		"east": "44.834999",
		"south": "35.815418",
		"west": "25.668501",
		"timezone": "Europe/Istanbul"
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TO",
		"code": "TON",
		"names": {
			"en": "Tonga",
			"fr": "Tonga",
			"de": "Tonga"
		},
		"currency": "TOP",
		"continent": "OC",
		"population": "122580",
		"area": "748.0",
		"capital": "Nuku'alofa",
		"latitude": "-19.9160819",
		"longitude": "-175.2026424",
		"north": "-15.562988",
		"east": "-173.907578",
		"south": "-21.455057",
		"west": "-175.682266",
		"timezone": null
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TN",
		"code": "TUN",
		"names": {
			"en": "Tunisia",
			"fr": "Tunisie",
			"de": "Tunesien"
		},
		"currency": "TND",
		"continent": "AF",
		"population": "10589025",
		"area": "163610.0",
		"capital": "Tunis",
		"latitude": "34.00353685",
		"longitude": "9.36077214013382",
		"north": "37.543915",
		"east": "11.598278",
		"south": "30.240417",
		"west": "7.524833",
		"timezone": "Africa/Tunis"
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TM",
		"code": "TKM",
		"names": {
			"en": "Turkmenistan",
			"fr": "Turkménistan",
			"de": "Turkmenistan"
		},
		"currency": "TMT",
		"continent": "AS",
		"population": "4940916",
		"area": "488100.0",
		"capital": "Ashgabat",
		"latitude": "39.3763807",
		"longitude": "59.3924609",
		"north": "42.795555",
		"east": "66.684303",
		"south": "35.141083",
		"west": "52.441444",
		"timezone": "Asia/Ashgabat"
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TL",
		"code": "TLS",
		"names": {
			"en": "East Timor",
			"fr": "Timor Oriental",
			"de": "Timor-Leste"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "1154625",
		"area": "15007.0",
		"capital": "Dili",
		"latitude": "-8.5151979",
		"longitude": "125.8375756",
		"north": "-8.1358337402344",
		"east": "127.30859375",
		"south": "-9.4636268615723",
		"west": "124.04609680176",
		"timezone": "Asia/Dili"
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TK",
		"code": "TKL",
		"names": {
			"en": "Tokelau",
			"fr": "Tokelau",
			"de": "Tokelau"
		},
		"currency": "NZD",
		"continent": "OC",
		"population": "1466",
		"area": "10.0",
		"capital": "",
		"latitude": "-9.1676396",
		"longitude": "-171.8196878",
		"north": "-8.5536136627197",
		"east": "-171.21142578125",
		"south": "-9.3811111450195",
		"west": "-172.50033569336",
		"timezone": null
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TJ",
		"code": "TJK",
		"names": {
			"en": "Tajikistan",
			"fr": "Tadjikistan",
			"de": "Tadschikistan"
		},
		"currency": "TJS",
		"continent": "AS",
		"population": "7487489",
		"area": "143100.0",
		"capital": "Dushanbe",
		"latitude": "38.6281733",
		"longitude": "70.8156541",
		"north": "41.042252",
		"east": "75.137222",
		"south": "36.674137",
		"west": "67.387138",
		"timezone": "Asia/Dushanbe"
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TH",
		"code": "THA",
		"names": {
			"en": "Thailand",
			"fr": "Thaïlande",
			"de": "Thailand"
		},
		"currency": "THB",
		"continent": "AS",
		"population": "67089500",
		"area": "514000.0",
		"capital": "Bangkok",
		"latitude": "14.8971921",
		"longitude": "100.83273",
		"north": "20.463194",
		"east": "105.639389",
		"south": "5.61",
		"west": "97.345642",
		"timezone": "Asia/Bangkok"
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TG",
		"code": "TGO",
		"names": {
			"en": "Togo",
			"fr": "République Togolaise",
			"de": "Togo"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "6587239",
		"area": "56785.0",
		"capital": "Lomé",
		"latitude": "8.7800265",
		"longitude": "1.0199765",
		"north": "11.138977",
		"east": "1.806693",
		"south": "6.104417",
		"west": "-0.147324",
		"timezone": "Africa/Lome"
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TF",
		"code": "ATF",
		"names": {
			"en": "French Southern Territories",
			"fr": "Terres australes françaises",
			"de": "Französische Süd- und Antarktisgebiete"
		},
		"currency": "EUR",
		"continent": "AN",
		"population": "140",
		"area": "7829.0",
		"capital": "Port-aux-Français",
		"latitude": null,
		"longitude": null,
		"north": "-37.790722",
		"east": "77.598808",
		"south": "-49.735184",
		"west": "50.170258",
		"timezone": null
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TD",
		"code": "TCD",
		"names": {
			"en": "Chad",
			"fr": "Tchad",
			"de": "Tschad"
		},
		"currency": "XAF",
		"continent": "AF",
		"population": "10543464",
		"area": "1284000.0",
		"capital": "N'Djamena",
		"latitude": "15.6134137",
		"longitude": "19.0156172",
		"north": "23.450369",
		"east": "24.002661",
		"south": "7.441068",
		"west": "13.473475",
		"timezone": "Africa/Ndjamena"
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "TC",
		"code": "TCA",
		"names": {
			"en": "Turks and Caicos Islands",
			"fr": "Îles Turques-et-Caïques",
			"de": "Turks- und Caicosinseln"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "20556",
		"area": "430.0",
		"capital": "Cockburn Town",
		"latitude": "21.7214683",
		"longitude": "-71.6201783",
		"north": "21.961878",
		"east": "-71.123642",
		"south": "21.422626",
		"west": "-72.483871",
		"timezone": "America/Grand_Turk"
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SZ",
		"code": "SWZ",
		"names": {
			"en": "Swaziland",
			"fr": "Swaziland",
			"de": "Swasiland"
		},
		"currency": "SZL",
		"continent": "AF",
		"population": "1354051",
		"area": "17363.0",
		"capital": "Mbabane",
		"latitude": "-26.5624806",
		"longitude": "31.3991317",
		"north": "-25.719648",
		"east": "32.13726",
		"south": "-27.317101",
		"west": "30.794107",
		"timezone": "Africa/Mbabane"
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SY",
		"code": "SYR",
		"names": {
			"en": "Syria",
			"fr": "Syrie",
			"de": "Syrien"
		},
		"currency": "SYP",
		"continent": "AS",
		"population": "22198110",
		"area": "185180.0",
		"capital": "Damascus",
		"latitude": "34.6401861",
		"longitude": "39.0494106",
		"north": "37.319138",
		"east": "42.385029",
		"south": "32.310665",
		"west": "35.727222",
		"timezone": "Asia/Damascus"
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SX",
		"code": "SXM",
		"names": {
			"en": "Sint Maarten",
			"fr": "Saint-Martin",
			"de": "Sint Maarten"
		},
		"currency": "ANG",
		"continent": "NA",
		"population": "37429",
		"area": "",
		"capital": "Philipsburg",
		"latitude": null,
		"longitude": null,
		"north": "18.070248",
		"east": "-63.012993",
		"south": "18.011692",
		"west": "-63.144039",
		"timezone": null
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SV",
		"code": "SLV",
		"names": {
			"en": "El Salvador",
			"fr": "Salvador",
			"de": "El Salvador"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "6052064",
		"area": "21040.0",
		"capital": "San Salvador",
		"latitude": "13.8000382",
		"longitude": "-88.9140683",
		"north": "14.445067",
		"east": "-87.692162",
		"south": "13.148679",
		"west": "-90.128662",
		"timezone": "America/El_Salvador"
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ST",
		"code": "STP",
		"names": {
			"en": "São Tomé and Príncipe",
			"fr": "São Tomé-et-Príncipe",
			"de": "Sao Tomé und Principe"
		},
		"currency": "STD",
		"continent": "AF",
		"population": "175808",
		"area": "1001.0",
		"capital": "São Tomé",
		"latitude": "0.231437",
		"longitude": "6.613745",
		"north": "1.701323",
		"east": "7.466374",
		"south": "0.024766",
		"west": "6.47017",
		"timezone": "Africa/Sao_Tome"
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SS",
		"code": "SSD",
		"names": {
			"en": "South Sudan",
			"fr": "Sud-Soudan",
			"de": "Südsudan"
		},
		"currency": "SSP",
		"continent": "AF",
		"population": "8260490",
		"area": "644329.0",
		"capital": "Juba",
		"latitude": "7.2653861",
		"longitude": "30.05489",
		"north": "12.219148635864",
		"east": "35.940551757812",
		"south": "3.4933943748474",
		"west": "24.140274047852",
		"timezone": "Africa/Juba"
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SR",
		"code": "SUR",
		"names": {
			"en": "Suriname",
			"fr": "Surinam",
			"de": "Suriname"
		},
		"currency": "SRD",
		"continent": "SA",
		"population": "492829",
		"area": "163270.0",
		"capital": "Paramaribo",
		"latitude": "4.1413025",
		"longitude": "-56.0771187",
		"north": "6.004546",
		"east": "-53.977493",
		"south": "1.831145",
		"west": "-58.086563",
		"timezone": "America/Paramaribo"
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SO",
		"code": "SOM",
		"names": {
			"en": "Somalia",
			"fr": "Somalie",
			"de": "Somalia"
		},
		"currency": "SOS",
		"continent": "AF",
		"population": "10112453",
		"area": "637657.0",
		"capital": "Mogadishu",
		"latitude": "8.3676771",
		"longitude": "49.083416",
		"north": "11.979166",
		"east": "51.412636",
		"south": "-1.674868",
		"west": "40.986595",
		"timezone": "Africa/Mogadishu"
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SN",
		"code": "SEN",
		"names": {
			"en": "Senegal",
			"fr": "Sénégal",
			"de": "Senegal"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "12323252",
		"area": "196190.0",
		"capital": "Dakar",
		"latitude": "14.4750607",
		"longitude": "-14.4529612",
		"north": "16.691633",
		"east": "-11.355887",
		"south": "12.307275",
		"west": "-17.535236",
		"timezone": "Africa/Dakar"
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SM",
		"code": "SMR",
		"names": {
			"en": "San Marino",
			"fr": "Saint-Marin",
			"de": "San Marino"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "31477",
		"area": "61.2",
		"capital": "San Marino",
		"latitude": "43.9458623",
		"longitude": "12.458306",
		"north": "43.992237308517",
		"east": "12.516531867798",
		"south": "43.893709217143",
		"west": "12.403538978821",
		"timezone": "Europe/San_Marino"
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SL",
		"code": "SLE",
		"names": {
			"en": "Sierra Leone",
			"fr": "Sierra Leone",
			"de": "Sierra Leone"
		},
		"currency": "SLL",
		"continent": "AF",
		"population": "5245695",
		"area": "71740.0",
		"capital": "Freetown",
		"latitude": "8.6400349",
		"longitude": "-11.8400269",
		"north": "10",
		"east": "-10.284238",
		"south": "6.929611",
		"west": "-13.307631",
		"timezone": "Africa/Freetown"
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SK",
		"code": "SVK",
		"names": {
			"en": "Slovakia",
			"fr": "Slovaquie",
			"de": "Slowakei (Slowakische Republik)"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "5455000",
		"area": "48845.0",
		"capital": "Bratislava",
		"latitude": "48.7411522",
		"longitude": "19.4528646",
		"north": "49.603168",
		"east": "22.570444",
		"south": "47.728111",
		"west": "16.84775",
		"timezone": "Europe/Bratislava"
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SJ",
		"code": "SJM",
		"names": {
			"en": "Svalbard and Jan Mayen",
			"fr": "Svalbard et Île Jan Mayen",
			"de": "Svalbard und Jan Mayen"
		},
		"currency": "NOK",
		"continent": "EU",
		"population": "2550",
		"area": "62049.0",
		"capital": "Longyearbyen",
		"latitude": null,
		"longitude": null,
		"north": "80.762085",
		"east": "33.287334",
		"south": "79.220306",
		"west": "17.699389",
		"timezone": null
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SI",
		"code": "SVN",
		"names": {
			"en": "Slovenia",
			"fr": "Slovénie",
			"de": "Slowenien"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "2007000",
		"area": "20273.0",
		"capital": "Ljubljana",
		"latitude": "45.8133113",
		"longitude": "14.4808369",
		"north": "46.87662755182",
		"east": "16.6106311807",
		"south": "45.421812998164",
		"west": "13.375334206471",
		"timezone": "Europe/Ljubljana"
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SH",
		"code": "SHN",
		"names": {
			"en": "Saint Helena",
			"fr": "Sainte-Hélène",
			"de": "St. Helena"
		},
		"currency": "SHP",
		"continent": "AF",
		"population": "7460",
		"area": "410.0",
		"capital": "Jamestown",
		"latitude": "-16.6754836",
		"longitude": "-4.9721717",
		"north": "-7.887815",
		"east": "-5.638753",
		"south": "-16.019543",
		"west": "-14.42123",
		"timezone": "Atlantic/St_Helena"
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SG",
		"code": "SGP",
		"names": {
			"en": "Singapore",
			"fr": "Singapour",
			"de": "Singapur"
		},
		"currency": "SGD",
		"continent": "AS",
		"population": "4701069",
		"area": "692.7",
		"capital": "Singapore",
		"latitude": "1.357107",
		"longitude": "103.8194992",
		"north": "1.471278",
		"east": "104.007469",
		"south": "1.258556",
		"west": "103.638275",
		"timezone": "Asia/Singapore"
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SE",
		"code": "SWE",
		"names": {
			"en": "Sweden",
			"fr": "Suède",
			"de": "Schweden"
		},
		"currency": "SEK",
		"continent": "EU",
		"population": "9555893",
		"area": "449964.0",
		"capital": "Stockholm",
		"latitude": "59.6749712",
		"longitude": "14.5208584",
		"north": "69.0625",
		"east": "24.156292483918",
		"south": "55.337112",
		"west": "11.118694",
		"timezone": "Europe/Stockholm"
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SD",
		"code": "SDN",
		"names": {
			"en": "Sudan",
			"fr": "Soudan",
			"de": "Sudan"
		},
		"currency": "SDG",
		"continent": "AF",
		"population": "35000000",
		"area": "1861484.0",
		"capital": "Khartoum",
		"latitude": "15.79125",
		"longitude": "30.3714240785933",
		"north": "22.232219696045",
		"east": "38.607498168945",
		"south": "8.684720993042",
		"west": "21.827774047852",
		"timezone": "Africa/Khartoum"
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SC",
		"code": "SYC",
		"names": {
			"en": "Seychelles",
			"fr": "Seychelles",
			"de": "Seychellen"
		},
		"currency": "SCR",
		"continent": "AF",
		"population": "88340",
		"area": "455.0",
		"capital": "Victoria",
		"latitude": "-4.6574977",
		"longitude": "55.4540146",
		"north": "-4.283717",
		"east": "56.297702879373",
		"south": "-9.753867",
		"west": "46.204769",
		"timezone": "Indian/Mahe"
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SB",
		"code": "SLB",
		"names": {
			"en": "Solomon Islands",
			"fr": "Îles Salomon",
			"de": "Solomon-Inseln"
		},
		"currency": "SBD",
		"continent": "OC",
		"population": "559198",
		"area": "28450.0",
		"capital": "Honiara",
		"latitude": "-9.7354344",
		"longitude": "162.8288542",
		"north": "-6.589611",
		"east": "166.980865",
		"south": "-11.850555",
		"west": "155.508606",
		"timezone": "Pacific/Guadalcanal"
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "SA",
		"code": "SAU",
		"names": {
			"en": "Saudi Arabia",
			"fr": "Arabie saoudite",
			"de": "Saudi-Arabien"
		},
		"currency": "SAR",
		"continent": "AS",
		"population": "25731776",
		"area": "1960582.0",
		"capital": "Riyadh",
		"latitude": "25.6242618",
		"longitude": "42.3528328",
		"north": "32.158333",
		"east": "55.666584",
		"south": "15.61425",
		"west": "34.495693",
		"timezone": "Asia/Riyadh"
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "RW",
		"code": "RWA",
		"names": {
			"en": "Rwanda",
			"fr": "Rwanda",
			"de": "Ruanda"
		},
		"currency": "RWF",
		"continent": "AF",
		"population": "11055976",
		"area": "26338.0",
		"capital": "Kigali",
		"latitude": "-1.9646631",
		"longitude": "30.0644358",
		"north": "-1.053481",
		"east": "30.895958",
		"south": "-2.840679",
		"west": "28.856794",
		"timezone": "Africa/Kigali"
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "RU",
		"code": "RUS",
		"names": {
			"en": "Russia",
			"fr": "Russie",
			"de": "Russland"
		},
		"currency": "RUB",
		"continent": "EU",
		"population": "140702000",
		"area": "1.71E7",
		"capital": "Moscow",
		"latitude": "64.6863136",
		"longitude": "97.7453061",
		"north": "81.857361",
		"east": "-169.05",
		"south": "41.188862",
		"west": "19.25",
		"timezone": null
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "RS",
		"code": "SRB",
		"names": {
			"en": "Serbia",
			"fr": "Serbie",
			"de": "Serbien"
		},
		"currency": "RSD",
		"continent": "EU",
		"population": "7344847",
		"area": "88361.0",
		"capital": "Belgrade",
		"latitude": "44.1534121",
		"longitude": "20.55144",
		"north": "46.18138885498",
		"east": "23.004997253418",
		"south": "42.232215881348",
		"west": "18.81702041626",
		"timezone": "Europe/Belgrade"
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "RO",
		"code": "ROU",
		"names": {
			"en": "Romania",
			"fr": "Roumanie",
			"de": "Rumänien"
		},
		"currency": "RON",
		"continent": "EU",
		"population": "21959278",
		"area": "237500.0",
		"capital": "Bucharest",
		"latitude": "45.9852129",
		"longitude": "24.6859225",
		"north": "48.266945",
		"east": "29.691055",
		"south": "43.627304",
		"west": "20.269972",
		"timezone": "Europe/Bucharest"
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "RE",
		"code": "REU",
		"names": {
			"en": "Réunion",
			"fr": "Réunion",
			"de": "Réunion"
		},
		"currency": "EUR",
		"continent": "AF",
		"population": "776948",
		"area": "2517.0",
		"capital": "Saint-Denis",
		"latitude": null,
		"longitude": null,
		"north": "-20.868391324577",
		"east": "55.83819390193",
		"south": "-21.383747301469",
		"west": "55.212192247927",
		"timezone": null
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "QA",
		"code": "QAT",
		"names": {
			"en": "Qatar",
			"fr": "Qatar",
			"de": "Katar"
		},
		"currency": "QAR",
		"continent": "AS",
		"population": "840926",
		"area": "11437.0",
		"capital": "Doha",
		"latitude": "25.3336984",
		"longitude": "51.2295295",
		"north": "26.154722",
		"east": "51.636639",
		"south": "24.482944",
		"west": "50.757221",
		"timezone": "Asia/Qatar"
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PY",
		"code": "PRY",
		"names": {
			"en": "Paraguay",
			"fr": "Paraguay",
			"de": "Paraguay"
		},
		"currency": "PYG",
		"continent": "SA",
		"population": "6375830",
		"area": "406750.0",
		"capital": "Asunción",
		"latitude": "-23.3165935",
		"longitude": "-58.1693445",
		"north": "-19.294041",
		"east": "-54.259354",
		"south": "-27.608738",
		"west": "-62.647076",
		"timezone": "America/Asuncion"
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PW",
		"code": "PLW",
		"names": {
			"en": "Palau",
			"fr": "Palaos",
			"de": "Palau"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "19907",
		"area": "458.0",
		"capital": "Melekeok - Palau State Capital",
		"latitude": "6.097367",
		"longitude": "133.313631",
		"north": "8.46966",
		"east": "134.72307",
		"south": "2.8036",
		"west": "131.11788",
		"timezone": "Pacific/Palau"
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PT",
		"code": "PRT",
		"names": {
			"en": "Portugal",
			"fr": "Portugal",
			"de": "Portugal"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "10676000",
		"area": "92391.0",
		"capital": "Lisbon",
		"latitude": "40.033265",
		"longitude": "-7.8896263",
		"north": "42.154311127408",
		"east": "-6.1891593074829",
		"south": "36.96125",
		"west": "-9.5005266071659",
		"timezone": "Europe/Lisbon"
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PS",
		"code": "PSE",
		"names": {
			"en": "Palestine",
			"fr": "Territoire palestinien",
			"de": "Palästinensische Autonomiegebiete"
		},
		"currency": "ILS",
		"continent": "AS",
		"population": "3800000",
		"area": "5970.0",
		"capital": "",
		"latitude": "31.649741",
		"longitude": "35.162072",
		"north": "32.54638671875",
		"east": "35.573295593262",
		"south": "31.216541290283",
		"west": "34.216659545898",
		"timezone": "Asia/Gaza"
	};

/***/ },
/* 160 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PR",
		"code": "PRI",
		"names": {
			"en": "Puerto Rico",
			"fr": "Porto Rico",
			"de": "Puerto Rico"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "3916632",
		"area": "9104.0",
		"capital": "San Juan",
		"latitude": null,
		"longitude": null,
		"north": "18.520166",
		"east": "-65.242737",
		"south": "17.926405",
		"west": "-67.942726",
		"timezone": null
	};

/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PN",
		"code": "PCN",
		"names": {
			"en": "Pitcairn Islands",
			"fr": "Pitcairn",
			"de": "Pitcairn"
		},
		"currency": "NZD",
		"continent": "OC",
		"population": "46",
		"area": "47.0",
		"capital": "Adamstown",
		"latitude": "-25.0657719",
		"longitude": "-130.1017823",
		"north": "-24.315865",
		"east": "-124.77285",
		"south": "-24.672565",
		"west": "-128.346436",
		"timezone": null
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PM",
		"code": "SPM",
		"names": {
			"en": "Saint Pierre and Miquelon",
			"fr": "Saint-Pierre et Miquelon",
			"de": "St. Pierre und Miquelon"
		},
		"currency": "EUR",
		"continent": "NA",
		"population": "7012",
		"area": "242.0",
		"capital": "Saint-Pierre",
		"latitude": null,
		"longitude": null,
		"north": "47.146286",
		"east": "-56.252991",
		"south": "46.786041",
		"west": "-56.420658",
		"timezone": null
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PL",
		"code": "POL",
		"names": {
			"en": "Poland",
			"fr": "Pologne",
			"de": "Polen"
		},
		"currency": "PLN",
		"continent": "EU",
		"population": "38500000",
		"area": "312685.0",
		"capital": "Warsaw",
		"latitude": "52.0977181",
		"longitude": "19.0258159",
		"north": "54.839138",
		"east": "24.150749",
		"south": "49.006363",
		"west": "14.123",
		"timezone": "Europe/Warsaw"
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PK",
		"code": "PAK",
		"names": {
			"en": "Pakistan",
			"fr": "Pakistan",
			"de": "Pakistan"
		},
		"currency": "PKR",
		"continent": "AS",
		"population": "184404791",
		"area": "803940.0",
		"capital": "Islamabad",
		"latitude": "30.3308401",
		"longitude": "71.247499",
		"north": "37.097",
		"east": "77.840919",
		"south": "23.786722",
		"west": "60.878613",
		"timezone": "Asia/Karachi"
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PH",
		"code": "PHL",
		"names": {
			"en": "Philippines",
			"fr": "Philippines",
			"de": "Philippinen"
		},
		"currency": "PHP",
		"continent": "AS",
		"population": "99900177",
		"area": "300000.0",
		"capital": "Manila",
		"latitude": "12.7503486",
		"longitude": "122.7312101",
		"north": "21.120611",
		"east": "126.601524",
		"south": "4.643306",
		"west": "116.931557",
		"timezone": "Asia/Manila"
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PG",
		"code": "PNG",
		"names": {
			"en": "Papua New Guinea",
			"fr": "Papouasie-Nouvelle Guinée",
			"de": "Papua-Neuguinea"
		},
		"currency": "PGK",
		"continent": "OC",
		"population": "6064515",
		"area": "462840.0",
		"capital": "Port Moresby",
		"latitude": "-5.6816069",
		"longitude": "144.2489081",
		"north": "-1.318639",
		"east": "155.96344",
		"south": "-11.657861",
		"west": "140.842865",
		"timezone": "Pacific/Port_Moresby"
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PF",
		"code": "PYF",
		"names": {
			"en": "French Polynesia",
			"fr": "Polynésie Française",
			"de": "Französisch-Polynesien"
		},
		"currency": "XPF",
		"continent": "OC",
		"population": "270485",
		"area": "4167.0",
		"capital": "Papeete",
		"latitude": null,
		"longitude": null,
		"north": "-7.903573",
		"east": "-134.929825",
		"south": "-27.653572",
		"west": "-152.877167",
		"timezone": null
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PE",
		"code": "PER",
		"names": {
			"en": "Peru",
			"fr": "Pérou",
			"de": "Peru"
		},
		"currency": "PEN",
		"continent": "SA",
		"population": "29907003",
		"area": "1285220.0",
		"capital": "Lima",
		"latitude": "-6.8699697",
		"longitude": "-75.0458515",
		"north": "-0.012977",
		"east": "-68.677986",
		"south": "-18.349728",
		"west": "-81.326744",
		"timezone": "America/Lima"
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "PA",
		"code": "PAN",
		"names": {
			"en": "Panama",
			"fr": "Panama",
			"de": "Panama"
		},
		"currency": "PAB",
		"continent": "NA",
		"population": "3410676",
		"area": "78200.0",
		"capital": "Panama City",
		"latitude": "8.3096067",
		"longitude": "-81.3066246",
		"north": "9.637514",
		"east": "-77.17411",
		"south": "7.197906",
		"west": "-83.051445",
		"timezone": "America/Panama"
	};

/***/ },
/* 170 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "OM",
		"code": "OMN",
		"names": {
			"en": "Oman",
			"fr": "Oman",
			"de": "Oman"
		},
		"currency": "OMR",
		"continent": "AS",
		"population": "2967717",
		"area": "212460.0",
		"capital": "Muscat",
		"latitude": "21.0000287",
		"longitude": "57.0036901",
		"north": "26.387972",
		"east": "59.836582",
		"south": "16.64575",
		"west": "51.882",
		"timezone": "Asia/Muscat"
	};

/***/ },
/* 171 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NZ",
		"code": "NZL",
		"names": {
			"en": "New Zealand",
			"fr": "Nouvelle-Zélande",
			"de": "Neuseeland"
		},
		"currency": "NZD",
		"continent": "OC",
		"population": "4252277",
		"area": "268680.0",
		"capital": "Wellington",
		"latitude": "-41.5000831",
		"longitude": "172.8344077",
		"north": "-34.389668",
		"east": "-180",
		"south": "-47.286026",
		"west": "166.7155",
		"timezone": "Pacific/Auckland"
	};

/***/ },
/* 172 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NU",
		"code": "NIU",
		"names": {
			"en": "Niue",
			"fr": "Nioué",
			"de": "Niue"
		},
		"currency": "NZD",
		"continent": "OC",
		"population": "2166",
		"area": "260.0",
		"capital": "Alofi",
		"latitude": "-19.0536414",
		"longitude": "-169.8613411",
		"north": "-18.951069",
		"east": "-169.775177",
		"south": "-19.152193",
		"west": "-169.951004",
		"timezone": "Pacific/Niue"
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NR",
		"code": "NRU",
		"names": {
			"en": "Nauru",
			"fr": "Nauru",
			"de": "Nauru"
		},
		"currency": "AUD",
		"continent": "OC",
		"population": "10065",
		"area": "21.0",
		"capital": "",
		"latitude": "-0.5249624",
		"longitude": "166.9333009",
		"north": "-0.504306",
		"east": "166.945282",
		"south": "-0.552333",
		"west": "166.899033",
		"timezone": "Pacific/Nauru"
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NP",
		"code": "NPL",
		"names": {
			"en": "Nepal",
			"fr": "Népal",
			"de": "Nepal"
		},
		"currency": "NPR",
		"continent": "AS",
		"population": "28951852",
		"area": "140800.0",
		"capital": "Kathmandu",
		"latitude": "28.1083178",
		"longitude": "84.0916787",
		"north": "30.43339",
		"east": "88.199333",
		"south": "26.356722",
		"west": "80.056274",
		"timezone": "Asia/Kathmandu"
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NO",
		"code": "NOR",
		"names": {
			"en": "Norway",
			"fr": "Norvège",
			"de": "Norwegen"
		},
		"currency": "NOK",
		"continent": "EU",
		"population": "5009150",
		"area": "324220.0",
		"capital": "Oslo",
		"latitude": "60.5000209",
		"longitude": "9.0999715",
		"north": "71.18811",
		"east": "31.078052520752",
		"south": "57.977917",
		"west": "4.650167",
		"timezone": null
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NL",
		"code": "NLD",
		"names": {
			"en": "Netherlands",
			"fr": "Pays-Bas",
			"de": "Niederlande"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "16645000",
		"area": "41526.0",
		"capital": "Amsterdam",
		"latitude": "52.5001698",
		"longitude": "5.7480821",
		"north": "53.512196",
		"east": "7.227944",
		"south": "50.753918",
		"west": "3.362556",
		"timezone": null
	};

/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NI",
		"code": "NIC",
		"names": {
			"en": "Nicaragua",
			"fr": "Nicaragua",
			"de": "Nikaragua"
		},
		"currency": "NIO",
		"continent": "NA",
		"population": "5995928",
		"area": "129494.0",
		"capital": "Managua",
		"latitude": "12.3724928",
		"longitude": "-84.8700308",
		"north": "15.025909",
		"east": "-82.738289",
		"south": "10.707543",
		"west": "-87.690308",
		"timezone": "America/Managua"
	};

/***/ },
/* 178 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NG",
		"code": "NGA",
		"names": {
			"en": "Nigeria",
			"fr": "Nigeria",
			"de": "Nigeria"
		},
		"currency": "NGN",
		"continent": "AF",
		"population": "154000000",
		"area": "923768.0",
		"capital": "Abuja",
		"latitude": "9.6000359",
		"longitude": "7.9999721",
		"north": "13.892007",
		"east": "14.680073",
		"south": "4.277144",
		"west": "2.668432",
		"timezone": "Africa/Lagos"
	};

/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NF",
		"code": "NFK",
		"names": {
			"en": "Norfolk Island",
			"fr": "Île Norfolk",
			"de": "Norfolkinsel"
		},
		"currency": "AUD",
		"continent": "OC",
		"population": "1828",
		"area": "34.6",
		"capital": "Kingston",
		"latitude": null,
		"longitude": null,
		"north": "-28.995170686948",
		"east": "167.9977374021",
		"south": "-29.063076742955",
		"west": "167.91543230151",
		"timezone": null
	};

/***/ },
/* 180 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NE",
		"code": "NER",
		"names": {
			"en": "Niger",
			"fr": "Niger",
			"de": "Niger"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "15878271",
		"area": "1267000.0",
		"capital": "Niamey",
		"latitude": "17.7356214",
		"longitude": "9.3238432",
		"north": "23.525026",
		"east": "15.995643",
		"south": "11.696975",
		"west": "0.16625",
		"timezone": "Africa/Niamey"
	};

/***/ },
/* 181 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NC",
		"code": "NCL",
		"names": {
			"en": "New Caledonia",
			"fr": "Nouvelle-Calédonie",
			"de": "Neukaledonien"
		},
		"currency": "XPF",
		"continent": "OC",
		"population": "216494",
		"area": "19060.0",
		"capital": "Noumea",
		"latitude": null,
		"longitude": null,
		"north": "-19.549778",
		"east": "168.129135",
		"south": "-22.698",
		"west": "163.564667",
		"timezone": null
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "NA",
		"code": "NAM",
		"names": {
			"en": "Namibia",
			"fr": "Namibie",
			"de": "Namibia"
		},
		"currency": "NAD",
		"continent": "AF",
		"population": "2128471",
		"area": "825418.0",
		"capital": "Windhoek",
		"latitude": "-23.2335499",
		"longitude": "17.3231107",
		"north": "-16.959894",
		"east": "25.256701",
		"south": "-28.97143",
		"west": "11.71563",
		"timezone": "Africa/Windhoek"
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MZ",
		"code": "MOZ",
		"names": {
			"en": "Mozambique",
			"fr": "Mozambique",
			"de": "Mosambik"
		},
		"currency": "MZN",
		"continent": "AF",
		"population": "22061451",
		"area": "801590.0",
		"capital": "Maputo",
		"latitude": "-19.302233",
		"longitude": "34.9144977",
		"north": "-10.471883",
		"east": "40.842995",
		"south": "-26.868685",
		"west": "30.217319",
		"timezone": "Africa/Maputo"
	};

/***/ },
/* 184 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MY",
		"code": "MYS",
		"names": {
			"en": "Malaysia",
			"fr": "Malaisie",
			"de": "Malaysien"
		},
		"currency": "MYR",
		"continent": "AS",
		"population": "28274729",
		"area": "329750.0",
		"capital": "Kuala Lumpur",
		"latitude": "4.5693754",
		"longitude": "102.2656823",
		"north": "7.363417",
		"east": "119.267502",
		"south": "0.855222",
		"west": "99.643448",
		"timezone": null
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MX",
		"code": "MEX",
		"names": {
			"en": "Mexico",
			"fr": "Mexique",
			"de": "Mexiko"
		},
		"currency": "MXN",
		"continent": "NA",
		"population": "112468855",
		"area": "1972550.0",
		"capital": "Mexico City",
		"latitude": "22.5000485",
		"longitude": "-100.0000375",
		"north": "32.716759",
		"east": "-86.703392",
		"south": "14.532866",
		"west": "-118.453949",
		"timezone": "America/Mexico_City"
	};

/***/ },
/* 186 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MW",
		"code": "MWI",
		"names": {
			"en": "Malawi",
			"fr": "Malawi",
			"de": "Malawi"
		},
		"currency": "MWK",
		"continent": "AF",
		"population": "15447500",
		"area": "118480.0",
		"capital": "Lilongwe",
		"latitude": "-13.2687204",
		"longitude": "33.9301963",
		"north": "-9.367541",
		"east": "35.916821",
		"south": "-17.125",
		"west": "32.67395",
		"timezone": "Africa/Blantyre"
	};

/***/ },
/* 187 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MV",
		"code": "MDV",
		"names": {
			"en": "Maldives",
			"fr": "Maldives",
			"de": "Malediven"
		},
		"currency": "MVR",
		"continent": "AS",
		"population": "395650",
		"area": "300.0",
		"capital": "Malé",
		"latitude": "4.2218417",
		"longitude": "73.4867968",
		"north": "7.0915874954148",
		"east": "73.637276",
		"south": "-0.692694",
		"west": "72.693222",
		"timezone": "Indian/Maldives"
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MU",
		"code": "MUS",
		"names": {
			"en": "Mauritius",
			"fr": "Maurice",
			"de": "Mauritius"
		},
		"currency": "MUR",
		"continent": "AF",
		"population": "1294104",
		"area": "2040.0",
		"capital": "Port Louis",
		"latitude": "-20.2759451",
		"longitude": "57.5703566",
		"north": "-10.319255",
		"east": "63.500179",
		"south": "-20.525717",
		"west": "56.512718",
		"timezone": "Indian/Mauritius"
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MT",
		"code": "MLT",
		"names": {
			"en": "Malta",
			"fr": "Malte",
			"de": "Malta"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "403000",
		"area": "316.0",
		"capital": "Valletta",
		"latitude": "35.9446731",
		"longitude": "14.3836306158583",
		"north": "36.082153099546",
		"east": "14.5764915",
		"south": "35.8061835",
		"west": "14.1834251",
		"timezone": "Europe/Malta"
	};

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MS",
		"code": "MSR",
		"names": {
			"en": "Montserrat",
			"fr": "Montserrat",
			"de": "Montserrat"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "9341",
		"area": "102.0",
		"capital": "Plymouth",
		"latitude": "16.7417041",
		"longitude": "-62.1916844",
		"north": "16.824060205313",
		"east": "-62.144100129608",
		"south": "16.674768935442",
		"west": "-62.241382370361",
		"timezone": "America/Montserrat"
	};

/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MR",
		"code": "MRT",
		"names": {
			"en": "Mauritania",
			"fr": "Mauritanie",
			"de": "Mauretanien"
		},
		"currency": "MRO",
		"continent": "AF",
		"population": "3205060",
		"area": "1030700.0",
		"capital": "Nouakchott",
		"latitude": "20.2540382",
		"longitude": "-9.2399263",
		"north": "27.298073",
		"east": "-4.827674",
		"south": "14.715547",
		"west": "-17.066521",
		"timezone": "Africa/Nouakchott"
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MQ",
		"code": "MTQ",
		"names": {
			"en": "Martinique",
			"fr": "Martinique",
			"de": "Martinique"
		},
		"currency": "EUR",
		"continent": "NA",
		"population": "432900",
		"area": "1100.0",
		"capital": "Fort-de-France",
		"latitude": null,
		"longitude": null,
		"north": "14.878819",
		"east": "-60.81551",
		"south": "14.392262",
		"west": "-61.230118",
		"timezone": null
	};

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MP",
		"code": "MNP",
		"names": {
			"en": "Northern Mariana Islands",
			"fr": "Îles Mariannes du Nord",
			"de": "Nördliche Marianen"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "53883",
		"area": "477.0",
		"capital": "Saipan",
		"latitude": null,
		"longitude": null,
		"north": "20.55344",
		"east": "146.06528",
		"south": "14.11023",
		"west": "144.88626",
		"timezone": null
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MO",
		"code": "MAC",
		"names": {
			"en": "Macao",
			"fr": "Macao",
			"de": "Macau"
		},
		"currency": "MOP",
		"continent": "AS",
		"population": "449198",
		"area": "254.0",
		"capital": "Macao",
		"latitude": null,
		"longitude": null,
		"north": "22.222334",
		"east": "113.565834",
		"south": "22.180389",
		"west": "113.528946",
		"timezone": null
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MN",
		"code": "MNG",
		"names": {
			"en": "Mongolia",
			"fr": "Mongolie",
			"de": "Mongolei"
		},
		"currency": "MNT",
		"continent": "AS",
		"population": "3086918",
		"area": "1565000.0",
		"capital": "Ulan Bator",
		"latitude": "46.8250388",
		"longitude": "103.8499736",
		"north": "52.154251",
		"east": "119.924309",
		"south": "41.567638",
		"west": "87.749664",
		"timezone": null
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MM",
		"code": "MMR",
		"names": {
			"en": "Myanmar [Burma]",
			"fr": "Myanmar",
			"de": "Birma (Myanmar)"
		},
		"currency": "MMK",
		"continent": "AS",
		"population": "53414374",
		"area": "678500.0",
		"capital": "Nay Pyi Taw",
		"latitude": "17.1750495",
		"longitude": "95.9999652",
		"north": "28.543249",
		"east": "101.176781",
		"south": "9.784583",
		"west": "92.189278",
		"timezone": "Asia/Rangoon"
	};

/***/ },
/* 197 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ML",
		"code": "MLI",
		"names": {
			"en": "Mali",
			"fr": "Mali",
			"de": "Mali"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "13796354",
		"area": "1240000.0",
		"capital": "Bamako",
		"latitude": "16.3700359",
		"longitude": "-2.2900239",
		"north": "25.000002",
		"east": "4.244968",
		"south": "10.159513",
		"west": "-12.242614",
		"timezone": "Africa/Bamako"
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MK",
		"code": "MKD",
		"names": {
			"en": "Macedonia",
			"fr": "Macédoine",
			"de": "Ehemalige jugoslawische Republik Mazedonien"
		},
		"currency": "MKD",
		"continent": "EU",
		"population": "2062294",
		"area": "25333.0",
		"capital": "Skopje",
		"latitude": "41.6171214",
		"longitude": "21.7168387",
		"north": "42.361805",
		"east": "23.038139",
		"south": "40.860195",
		"west": "20.464695",
		"timezone": "Europe/Skopje"
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MH",
		"code": "MHL",
		"names": {
			"en": "Marshall Islands",
			"fr": "Îles Marshall",
			"de": "Marshall-Inseln"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "65859",
		"area": "181.3",
		"capital": "Majuro",
		"latitude": "11.299",
		"longitude": "166.917397391667",
		"north": "14.62",
		"east": "171.931808",
		"south": "5.587639",
		"west": "165.524918",
		"timezone": null
	};

/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MG",
		"code": "MDG",
		"names": {
			"en": "Madagascar",
			"fr": "Madagascar",
			"de": "Madagaskar"
		},
		"currency": "MGA",
		"continent": "AF",
		"population": "21281844",
		"area": "587040.0",
		"capital": "Antananarivo",
		"latitude": "-18.9249604",
		"longitude": "46.4416422",
		"north": "-11.945433",
		"east": "50.48378",
		"south": "-25.608952",
		"west": "43.224876",
		"timezone": "Indian/Antananarivo"
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MF",
		"code": "MAF",
		"names": {
			"en": "Saint Martin",
			"fr": "Saint-Martin",
			"de": "St. Martin"
		},
		"currency": "EUR",
		"continent": "NA",
		"population": "35925",
		"area": "53.0",
		"capital": "Marigot",
		"latitude": null,
		"longitude": null,
		"north": "18.130354",
		"east": "-63.012993",
		"south": "18.052231",
		"west": "-63.152767",
		"timezone": null
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ME",
		"code": "MNE",
		"names": {
			"en": "Montenegro",
			"fr": "Monténégro",
			"de": "Montenegro"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "666730",
		"area": "14026.0",
		"capital": "Podgorica",
		"latitude": "43.0285558",
		"longitude": "19.291739",
		"north": "43.570137",
		"east": "20.358833",
		"south": "41.850166",
		"west": "18.461306",
		"timezone": "Europe/Podgorica"
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MD",
		"code": "MDA",
		"names": {
			"en": "Moldova",
			"fr": "Moldavie",
			"de": "Moldau (Republik Moldau)"
		},
		"currency": "MDL",
		"continent": "EU",
		"population": "4324000",
		"area": "33843.0",
		"capital": "Chişinău",
		"latitude": "47.286747",
		"longitude": "28.5110236",
		"north": "48.490166",
		"east": "30.135445",
		"south": "45.468887",
		"west": "26.618944",
		"timezone": "Europe/Chisinau"
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MC",
		"code": "MCO",
		"names": {
			"en": "Monaco",
			"fr": "Monaco",
			"de": "Monaco"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "32965",
		"area": "1.95",
		"capital": "Monaco",
		"latitude": "43.7312454",
		"longitude": "7.4197441",
		"north": "43.751967170372",
		"east": "7.4399392604828",
		"south": "43.724728398694",
		"west": "7.4089622497559",
		"timezone": "Europe/Monaco"
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "MA",
		"code": "MAR",
		"names": {
			"en": "Morocco",
			"fr": "Maroc",
			"de": "Marokko"
		},
		"currency": "MAD",
		"continent": "AF",
		"population": "31627428",
		"area": "446550.0",
		"capital": "Rabat",
		"latitude": "31.1728192",
		"longitude": "-7.3366043",
		"north": "35.922496698538",
		"east": "-0.99175000000003",
		"south": "27.662115",
		"west": "-13.168586",
		"timezone": "Africa/Rabat"
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LY",
		"code": "LBY",
		"names": {
			"en": "Libya",
			"fr": "Libye",
			"de": "Libysch-Arabische Dschamahirija"
		},
		"currency": "LYD",
		"continent": "AF",
		"population": "6461454",
		"area": "1759540.0",
		"capital": "Tripoli",
		"latitude": "26.8234472",
		"longitude": "18.1236723",
		"north": "33.168999",
		"east": "25.150612",
		"south": "19.508045",
		"west": "9.38702",
		"timezone": "Africa/Tripoli"
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LV",
		"code": "LVA",
		"names": {
			"en": "Latvia",
			"fr": "Lettonie",
			"de": "Lettland"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "2217969",
		"area": "64589.0",
		"capital": "Riga",
		"latitude": "56.8666904",
		"longitude": "24.5999717",
		"north": "58.082306",
		"east": "28.241167",
		"south": "55.668861",
		"west": "20.974277",
		"timezone": "Europe/Riga"
	};

/***/ },
/* 208 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LU",
		"code": "LUX",
		"names": {
			"en": "Luxembourg",
			"fr": "Luxembourg",
			"de": "Luxemburg"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "497538",
		"area": "2586.0",
		"capital": "Luxembourg",
		"latitude": "49.8158683",
		"longitude": "6.1296751",
		"north": "50.184944",
		"east": "6.528472",
		"south": "49.446583",
		"west": "5.734556",
		"timezone": "Europe/Luxembourg"
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LT",
		"code": "LTU",
		"names": {
			"en": "Lithuania",
			"fr": "Lituanie",
			"de": "Litauen"
		},
		"currency": "LTL",
		"continent": "EU",
		"population": "2944459",
		"area": "65200.0",
		"capital": "Vilnius",
		"latitude": "55.3500003",
		"longitude": "23.7499998",
		"north": "56.446918",
		"east": "26.871944",
		"south": "53.901306",
		"west": "20.941528",
		"timezone": "Europe/Vilnius"
	};

/***/ },
/* 210 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LS",
		"code": "LSO",
		"names": {
			"en": "Lesotho",
			"fr": "Lesotho",
			"de": "Lesotho"
		},
		"currency": "LSL",
		"continent": "AF",
		"population": "1919552",
		"area": "30355.0",
		"capital": "Maseru",
		"latitude": "-29.628684",
		"longitude": "28.23347",
		"north": "-28.572058",
		"east": "29.465761",
		"south": "-30.668964",
		"west": "27.029068",
		"timezone": "Africa/Maseru"
	};

/***/ },
/* 211 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LR",
		"code": "LBR",
		"names": {
			"en": "Liberia",
			"fr": "Liberia",
			"de": "Liberia"
		},
		"currency": "LRD",
		"continent": "AF",
		"population": "3685076",
		"area": "111370.0",
		"capital": "Monrovia",
		"latitude": "5.7499721",
		"longitude": "-9.3658524",
		"north": "8.551791",
		"east": "-7.365113",
		"south": "4.353057",
		"west": "-11.492083",
		"timezone": "Africa/Monrovia"
	};

/***/ },
/* 212 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LK",
		"code": "LKA",
		"names": {
			"en": "Sri Lanka",
			"fr": "Sri Lanka",
			"de": "Sri Lanka"
		},
		"currency": "LKR",
		"continent": "AS",
		"population": "21513990",
		"area": "65610.0",
		"capital": "Colombo",
		"latitude": "7.878",
		"longitude": "80.7038245875",
		"north": "9.831361",
		"east": "81.881279",
		"south": "5.916833",
		"west": "79.652916",
		"timezone": "Asia/Colombo"
	};

/***/ },
/* 213 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LI",
		"code": "LIE",
		"names": {
			"en": "Liechtenstein",
			"fr": "Liechtenstein",
			"de": "Liechtenstein"
		},
		"currency": "CHF",
		"continent": "EU",
		"population": "35000",
		"area": "160.0",
		"capital": "Vaduz",
		"latitude": "47.15934115",
		"longitude": "9.54693948514429",
		"north": "47.270625138696",
		"east": "9.635642811368",
		"south": "47.048428412347",
		"west": "9.4716735978201",
		"timezone": "Europe/Vaduz"
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LC",
		"code": "LCA",
		"names": {
			"en": "Saint Lucia",
			"fr": "Sainte-Lucie",
			"de": "St. Lucia"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "160922",
		"area": "616.0",
		"capital": "Castries",
		"latitude": "13.8250489",
		"longitude": "-60.975036",
		"north": "14.103245",
		"east": "-60.874203",
		"south": "13.704778",
		"west": "-61.07415",
		"timezone": "America/St_Lucia"
	};

/***/ },
/* 215 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LB",
		"code": "LBN",
		"names": {
			"en": "Lebanon",
			"fr": "Liban",
			"de": "Libanon"
		},
		"currency": "LBP",
		"continent": "AS",
		"population": "4125247",
		"area": "10400.0",
		"capital": "Beirut",
		"latitude": "33.8750629",
		"longitude": "35.843409",
		"north": "34.691418",
		"east": "36.639194",
		"south": "33.05386",
		"west": "35.114277",
		"timezone": "Asia/Beirut"
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "LA",
		"code": "LAO",
		"names": {
			"en": "Laos",
			"fr": "Laos",
			"de": "Laos"
		},
		"currency": "LAK",
		"continent": "AS",
		"population": "6368162",
		"area": "236800.0",
		"capital": "Vientiane",
		"latitude": "20.0171109",
		"longitude": "103.378253",
		"north": "22.500389",
		"east": "107.697029",
		"south": "13.910027",
		"west": "100.093056",
		"timezone": "Asia/Vientiane"
	};

/***/ },
/* 217 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KZ",
		"code": "KAZ",
		"names": {
			"en": "Kazakhstan",
			"fr": "Kazakhstan",
			"de": "Kasachstan"
		},
		"currency": "KZT",
		"continent": "AS",
		"population": "15340000",
		"area": "2717300.0",
		"capital": "Astana",
		"latitude": "48.0242079",
		"longitude": "66.3232605345084",
		"north": "55.451195",
		"east": "87.312668",
		"south": "40.936333",
		"west": "46.491859",
		"timezone": null
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KY",
		"code": "CYM",
		"names": {
			"en": "Cayman Islands",
			"fr": "Îles Caïmans",
			"de": "Kaimaninseln"
		},
		"currency": "KYD",
		"continent": "NA",
		"population": "44270",
		"area": "262.0",
		"capital": "George Town",
		"latitude": "19.5417212",
		"longitude": "-80.5667132",
		"north": "19.7617",
		"east": "-79.727272",
		"south": "19.263029",
		"west": "-81.432777",
		"timezone": null
	};

/***/ },
/* 219 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KW",
		"code": "KWT",
		"names": {
			"en": "Kuwait",
			"fr": "Koweït",
			"de": "Kuwait"
		},
		"currency": "KWD",
		"continent": "AS",
		"population": "2789132",
		"area": "17820.0",
		"capital": "Kuwait City",
		"latitude": "29.2733964",
		"longitude": "47.4979476",
		"north": "30.095945",
		"east": "48.431473",
		"south": "28.524611",
		"west": "46.555557",
		"timezone": "Asia/Kuwait"
	};

/***/ },
/* 220 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KR",
		"code": "KOR",
		"names": {
			"en": "South Korea",
			"fr": "Corée du Sud",
			"de": "Südkorea"
		},
		"currency": "KRW",
		"continent": "AS",
		"population": "48422644",
		"area": "98480.0",
		"capital": "Seoul",
		"latitude": "35.3985008",
		"longitude": "127.937111",
		"north": "38.612446",
		"east": "129.584671",
		"south": "33.190945",
		"west": "125.887108",
		"timezone": "Asia/Seoul"
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KP",
		"code": "PRK",
		"names": {
			"en": "North Korea",
			"fr": "Corée du Nord",
			"de": "Nordkorea"
		},
		"currency": "KPW",
		"continent": "AS",
		"population": "22912177",
		"area": "120540.0",
		"capital": "Pyongyang",
		"latitude": "40.3123959",
		"longitude": "127.399971",
		"north": "43.006054",
		"east": "130.674866",
		"south": "37.673332",
		"west": "124.315887",
		"timezone": "Asia/Pyongyang"
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KN",
		"code": "KNA",
		"names": {
			"en": "Saint Kitts and Nevis",
			"fr": "Saint-Christophe-et-Niévès",
			"de": "Saint Kitts und Nevis"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "51134",
		"area": "261.0",
		"capital": "Basseterre",
		"latitude": "17.3462278",
		"longitude": "-62.7687277",
		"north": "17.420118",
		"east": "-62.543266",
		"south": "17.095343",
		"west": "-62.86956",
		"timezone": "America/St_Kitts"
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KM",
		"code": "COM",
		"names": {
			"en": "Comoros",
			"fr": "Comores",
			"de": "Komoren"
		},
		"currency": "KMF",
		"continent": "AF",
		"population": "773407",
		"area": "2170.0",
		"capital": "Moroni",
		"latitude": "-12.2045176",
		"longitude": "44.2832964",
		"north": "-11.362381",
		"east": "44.538223",
		"south": "-12.387857",
		"west": "43.21579",
		"timezone": "Indian/Comoro"
	};

/***/ },
/* 224 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KI",
		"code": "KIR",
		"names": {
			"en": "Kiribati",
			"fr": "Kiribati",
			"de": "Kiribati"
		},
		"currency": "AUD",
		"continent": "OC",
		"population": "92533",
		"area": "811.0",
		"capital": "Tarawa",
		"latitude": "0.306",
		"longitude": "173.664834025",
		"north": "4.71957",
		"east": "-150.215347",
		"south": "-11.446881150187",
		"west": "169.556137",
		"timezone": null
	};

/***/ },
/* 225 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KH",
		"code": "KHM",
		"names": {
			"en": "Cambodia",
			"fr": "Cambodge",
			"de": "Kambodscha"
		},
		"currency": "KHR",
		"continent": "AS",
		"population": "14453680",
		"area": "181040.0",
		"capital": "Phnom Penh",
		"latitude": "13.5066394",
		"longitude": "104.869423",
		"north": "14.686417",
		"east": "107.627724",
		"south": "10.409083",
		"west": "102.339996",
		"timezone": "Asia/Phnom_Penh"
	};

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KG",
		"code": "KGZ",
		"names": {
			"en": "Kyrgyzstan",
			"fr": "Kirghizistan",
			"de": "Kirgistan"
		},
		"currency": "KGS",
		"continent": "AS",
		"population": "5508626",
		"area": "198500.0",
		"capital": "Bishkek",
		"latitude": "41.5089324",
		"longitude": "74.724091",
		"north": "43.238224",
		"east": "80.283165",
		"south": "39.172832",
		"west": "69.276611",
		"timezone": "Asia/Bishkek"
	};

/***/ },
/* 227 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "KE",
		"code": "KEN",
		"names": {
			"en": "Kenya",
			"fr": "Kenya",
			"de": "Kenia"
		},
		"currency": "KES",
		"continent": "AF",
		"population": "40046566",
		"area": "582650.0",
		"capital": "Nairobi",
		"latitude": "1.4419683",
		"longitude": "38.4313975",
		"north": "5.019938",
		"east": "41.899078",
		"south": "-4.678047",
		"west": "33.908859",
		"timezone": "Africa/Nairobi"
	};

/***/ },
/* 228 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "JP",
		"code": "JPN",
		"names": {
			"en": "Japan",
			"fr": "Japon",
			"de": "Japan"
		},
		"currency": "JPY",
		"continent": "AS",
		"population": "127288000",
		"area": "377835.0",
		"capital": "Tokyo",
		"latitude": "36.5748441",
		"longitude": "139.2394179",
		"north": "45.52314",
		"east": "145.820892",
		"south": "24.249472",
		"west": "122.93853",
		"timezone": "Asia/Tokyo"
	};

/***/ },
/* 229 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "JO",
		"code": "JOR",
		"names": {
			"en": "Jordan",
			"fr": "Jordanie",
			"de": "Jordanien"
		},
		"currency": "JOD",
		"continent": "AS",
		"population": "6407085",
		"area": "92300.0",
		"capital": "Amman",
		"latitude": "31.1667049",
		"longitude": "36.941628",
		"north": "33.367668",
		"east": "39.301167",
		"south": "29.185888",
		"west": "34.959999",
		"timezone": "Asia/Amman"
	};

/***/ },
/* 230 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "JM",
		"code": "JAM",
		"names": {
			"en": "Jamaica",
			"fr": "Jamaïque",
			"de": "Jamaika"
		},
		"currency": "JMD",
		"continent": "NA",
		"population": "2847232",
		"area": "10991.0",
		"capital": "Kingston",
		"latitude": "18.1850507",
		"longitude": "-77.3947693",
		"north": "18.526976",
		"east": "-76.180321",
		"south": "17.703554",
		"west": "-78.366638",
		"timezone": "America/Jamaica"
	};

/***/ },
/* 231 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "JE",
		"code": "JEY",
		"names": {
			"en": "Jersey",
			"fr": "Jersey",
			"de": "Jersey"
		},
		"currency": "GBP",
		"continent": "EU",
		"population": "90812",
		"area": "116.0",
		"capital": "Saint Helier",
		"latitude": "49.2214561",
		"longitude": "-2.1358386",
		"north": "49.265057",
		"east": "-2.022083",
		"south": "49.169834",
		"west": "-2.260028",
		"timezone": "Europe/Jersey"
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IT",
		"code": "ITA",
		"names": {
			"en": "Italy",
			"fr": "Italie",
			"de": "Italien"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "60340328",
		"area": "301230.0",
		"capital": "Rome",
		"latitude": "42.6384261",
		"longitude": "12.674297",
		"north": "47.095196",
		"east": "18.513445",
		"south": "36.652779",
		"west": "6.614889",
		"timezone": "Europe/Rome"
	};

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IS",
		"code": "ISL",
		"names": {
			"en": "Iceland",
			"fr": "Islande",
			"de": "Island"
		},
		"currency": "ISK",
		"continent": "EU",
		"population": "308910",
		"area": "103000.0",
		"capital": "Reykjavik",
		"latitude": "64.9841821",
		"longitude": "-18.1059013",
		"north": "66.53463",
		"east": "-13.495815",
		"south": "63.393253",
		"west": "-24.546524",
		"timezone": "Atlantic/Reykjavik"
	};

/***/ },
/* 234 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IR",
		"code": "IRN",
		"names": {
			"en": "Iran",
			"fr": "Iran",
			"de": "Iran (Islamische Republik)"
		},
		"currency": "IRR",
		"continent": "AS",
		"population": "76923300",
		"area": "1648000.0",
		"capital": "Tehran",
		"latitude": "32.9407496",
		"longitude": "52.9471344",
		"north": "39.777222",
		"east": "63.317471",
		"south": "25.064083",
		"west": "44.047279",
		"timezone": "Asia/Tehran"
	};

/***/ },
/* 235 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IQ",
		"code": "IRQ",
		"names": {
			"en": "Iraq",
			"fr": "Irak",
			"de": "Irak"
		},
		"currency": "IQD",
		"continent": "AS",
		"population": "29671605",
		"area": "437072.0",
		"capital": "Baghdad",
		"latitude": "33.0955793",
		"longitude": "44.1749775",
		"north": "37.378029",
		"east": "48.575916",
		"south": "29.069445",
		"west": "38.795887",
		"timezone": "Asia/Baghdad"
	};

/***/ },
/* 236 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IO",
		"code": "IOT",
		"names": {
			"en": "British Indian Ocean Territory",
			"fr": "Territoire britannique de l'océan Indien",
			"de": "Britisches Territorium im Indischen Ozean"
		},
		"currency": "USD",
		"continent": "AS",
		"population": "4000",
		"area": "60.0",
		"capital": "",
		"latitude": "-6.1666356",
		"longitude": "71.4249683",
		"north": "-5.268333",
		"east": "72.493164",
		"south": "-7.438028",
		"west": "71.259972",
		"timezone": null
	};

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IN",
		"code": "IND",
		"names": {
			"en": "India",
			"fr": "Inde",
			"de": "Indien"
		},
		"currency": "INR",
		"continent": "AS",
		"population": "1173108018",
		"area": "3287590.0",
		"capital": "New Delhi",
		"latitude": "22.3511148",
		"longitude": "78.6677428",
		"north": "35.504223",
		"east": "97.403305",
		"south": "6.747139",
		"west": "68.186691",
		"timezone": "Asia/Kolkata"
	};

/***/ },
/* 238 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IM",
		"code": "IMN",
		"names": {
			"en": "Isle of Man",
			"fr": "Île de Man",
			"de": "Insel Man"
		},
		"currency": "GBP",
		"continent": "EU",
		"population": "75049",
		"area": "572.0",
		"capital": "Douglas",
		"latitude": "54.1936805",
		"longitude": "-4.5591148",
		"north": "54.419724",
		"east": "-4.3115",
		"south": "54.055916",
		"west": "-4.798722",
		"timezone": "Europe/Isle_of_Man"
	};

/***/ },
/* 239 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IL",
		"code": "ISR",
		"names": {
			"en": "Israel",
			"fr": "Israël",
			"de": "Israel"
		},
		"currency": "ILS",
		"continent": "AS",
		"population": "7353985",
		"area": "20770.0",
		"capital": "",
		"latitude": "30.8760272",
		"longitude": "35.0015196",
		"north": "33.340137",
		"east": "35.876804",
		"south": "29.496639",
		"west": "34.270278754419",
		"timezone": "Asia/Jerusalem"
	};

/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "IE",
		"code": "IRL",
		"names": {
			"en": "Ireland",
			"fr": "Irlande",
			"de": "Irland"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "4622917",
		"area": "70280.0",
		"capital": "Dublin",
		"latitude": "52.865196",
		"longitude": "-7.9794599",
		"north": "55.387917",
		"east": "-6.002389",
		"south": "51.451584",
		"west": "-10.478556",
		"timezone": "Europe/Dublin"
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ID",
		"code": "IDN",
		"names": {
			"en": "Indonesia",
			"fr": "Indonésie",
			"de": "Indonesien"
		},
		"currency": "IDR",
		"continent": "AS",
		"population": "242968342",
		"area": "1919440.0",
		"capital": "Jakarta",
		"latitude": "-4.7993356",
		"longitude": "114.5632032",
		"north": "5.904417",
		"east": "141.021805",
		"south": "-10.941861",
		"west": "95.009331",
		"timezone": null
	};

/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "HU",
		"code": "HUN",
		"names": {
			"en": "Hungary",
			"fr": "Hongrie",
			"de": "Ungarn"
		},
		"currency": "HUF",
		"continent": "EU",
		"population": "9982000",
		"area": "93030.0",
		"capital": "Budapest",
		"latitude": "47.1817585",
		"longitude": "19.5060937",
		"north": "48.585667",
		"east": "22.906",
		"south": "45.74361",
		"west": "16.111889",
		"timezone": "Europe/Budapest"
	};

/***/ },
/* 243 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "HT",
		"code": "HTI",
		"names": {
			"en": "Haiti",
			"fr": "Haïti",
			"de": "Haiti"
		},
		"currency": "HTG",
		"continent": "NA",
		"population": "9648924",
		"area": "27750.0",
		"capital": "Port-au-Prince",
		"latitude": "19.1399952",
		"longitude": "-72.3570972",
		"north": "20.08782",
		"east": "-71.613358",
		"south": "18.021032",
		"west": "-74.478584",
		"timezone": "America/Port-au-Prince"
	};

/***/ },
/* 244 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "HR",
		"code": "HRV",
		"names": {
			"en": "Croatia",
			"fr": "Croatie",
			"de": "Kroatien"
		},
		"currency": "HRK",
		"continent": "EU",
		"population": "4491000",
		"area": "56542.0",
		"capital": "Zagreb",
		"latitude": "45.5643442",
		"longitude": "17.0118954",
		"north": "46.53875",
		"east": "19.427389",
		"south": "42.43589",
		"west": "13.493222",
		"timezone": "Europe/Zagreb"
	};

/***/ },
/* 245 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "HN",
		"code": "HND",
		"names": {
			"en": "Honduras",
			"fr": "Honduras",
			"de": "Honduras"
		},
		"currency": "HNL",
		"continent": "NA",
		"population": "7989415",
		"area": "112090.0",
		"capital": "Tegucigalpa",
		"latitude": "15.0610686",
		"longitude": "-84.5978534",
		"north": "16.510256",
		"east": "-83.155403",
		"south": "12.982411",
		"west": "-89.350792",
		"timezone": "America/Tegucigalpa"
	};

/***/ },
/* 246 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "HM",
		"code": "HMD",
		"names": {
			"en": "Heard Island and McDonald Islands",
			"fr": "Île Heard et îles McDonald",
			"de": "Heard- und McDonald-Inseln"
		},
		"currency": "AUD",
		"continent": "AN",
		"population": "0",
		"area": "412.0",
		"capital": "",
		"latitude": null,
		"longitude": null,
		"north": "-52.909416",
		"east": "73.859146",
		"south": "-53.192001",
		"west": "72.596535",
		"timezone": null
	};

/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "HK",
		"code": "HKG",
		"names": {
			"en": "Hong Kong",
			"fr": "Hong Kong",
			"de": "Hongkong"
		},
		"currency": "HKD",
		"continent": "AS",
		"population": "6898686",
		"area": "1092.0",
		"capital": "Hong Kong",
		"latitude": null,
		"longitude": null,
		"north": "22.559778",
		"east": "114.434753",
		"south": "22.15325",
		"west": "113.837753",
		"timezone": null
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GY",
		"code": "GUY",
		"names": {
			"en": "Guyana",
			"fr": "Guyana",
			"de": "Guyana"
		},
		"currency": "GYD",
		"continent": "SA",
		"population": "748486",
		"area": "214970.0",
		"capital": "Georgetown",
		"latitude": "4.8417097",
		"longitude": "-58.6416891",
		"north": "8.557567",
		"east": "-56.480251",
		"south": "1.17508",
		"west": "-61.384762",
		"timezone": "America/Guyana"
	};

/***/ },
/* 249 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GW",
		"code": "GNB",
		"names": {
			"en": "Guinea-Bissau",
			"fr": "Guinée-Bissau",
			"de": "Guinea-Bissau"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "1565126",
		"area": "36120.0",
		"capital": "Bissau",
		"latitude": "12.100035",
		"longitude": "-14.9000214",
		"north": "12.680789",
		"east": "-13.636522",
		"south": "10.924265",
		"west": "-16.717535",
		"timezone": "Africa/Bissau"
	};

/***/ },
/* 250 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GU",
		"code": "GUM",
		"names": {
			"en": "Guam",
			"fr": "Guam",
			"de": "Guam"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "159358",
		"area": "549.0",
		"capital": "Hagåtña",
		"latitude": null,
		"longitude": null,
		"north": "13.654402",
		"east": "144.956894",
		"south": "13.23376",
		"west": "144.61806",
		"timezone": null
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GT",
		"code": "GTM",
		"names": {
			"en": "Guatemala",
			"fr": "Guatemala",
			"de": "Guatemala"
		},
		"currency": "GTQ",
		"continent": "NA",
		"population": "13550440",
		"area": "108890.0",
		"capital": "Guatemala City",
		"latitude": "15.6356088",
		"longitude": "-89.8988087",
		"north": "17.81522",
		"east": "-88.223198",
		"south": "13.737302",
		"west": "-92.23629",
		"timezone": "America/Guatemala"
	};

/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GS",
		"code": "SGS",
		"names": {
			"en": "South Georgia and the South Sandwich Islands",
			"fr": "Géorgie du Sud et les îles Sandwich du Sud",
			"de": "Südgeorgien und die Südlichen Sandwichinseln"
		},
		"currency": "GBP",
		"continent": "AN",
		"population": "30",
		"area": "3903.0",
		"capital": "Grytviken",
		"latitude": "-54.8432857",
		"longitude": "-35.8090698",
		"north": "-53.970467",
		"east": "-26.229326",
		"south": "-59.479259",
		"west": "-38.021175",
		"timezone": null
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GR",
		"code": "GRC",
		"names": {
			"en": "Greece",
			"fr": "Grèce",
			"de": "Griechenland"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "11000000",
		"area": "131940.0",
		"capital": "Athens",
		"latitude": "39.000041",
		"longitude": "21.9999569",
		"north": "41.748499984964",
		"east": "28.247083171435",
		"south": "34.802066339147",
		"west": "19.373603562413",
		"timezone": "Europe/Athens"
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GQ",
		"code": "GNQ",
		"names": {
			"en": "Equatorial Guinea",
			"fr": "Guinée équatoriale",
			"de": "Äquatorialguinea"
		},
		"currency": "XAF",
		"continent": "AF",
		"population": "1014999",
		"area": "28051.0",
		"capital": "Malabo",
		"latitude": "1.613172",
		"longitude": "10.5170357",
		"north": "2.346989",
		"east": "11.335724",
		"south": "0.92086",
		"west": "9.346865",
		"timezone": "Africa/Malabo"
	};

/***/ },
/* 255 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GP",
		"code": "GLP",
		"names": {
			"en": "Guadeloupe",
			"fr": "Guadeloupe",
			"de": "Guadeloupe"
		},
		"currency": "EUR",
		"continent": "NA",
		"population": "443000",
		"area": "1780.0",
		"capital": "Basse-Terre",
		"latitude": null,
		"longitude": null,
		"north": "16.516848",
		"east": "-61",
		"south": "15.867565",
		"west": "-61.544765",
		"timezone": null
	};

/***/ },
/* 256 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GN",
		"code": "GIN",
		"names": {
			"en": "Guinea",
			"fr": "Guinée",
			"de": "Guinea"
		},
		"currency": "GNF",
		"continent": "AF",
		"population": "10324025",
		"area": "245857.0",
		"capital": "Conakry",
		"latitude": "10.7226226",
		"longitude": "-10.7083587",
		"north": "12.67622",
		"east": "-7.641071",
		"south": "7.193553",
		"west": "-14.926619",
		"timezone": "Africa/Conakry"
	};

/***/ },
/* 257 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GM",
		"code": "GMB",
		"names": {
			"en": "Gambia",
			"fr": "Gambie",
			"de": "Gambia"
		},
		"currency": "GMD",
		"continent": "AF",
		"population": "1593256",
		"area": "11300.0",
		"capital": "Banjul",
		"latitude": "13.470062",
		"longitude": "-15.4900464",
		"north": "13.826571",
		"east": "-13.797793",
		"south": "13.064252",
		"west": "-16.825079",
		"timezone": "Africa/Banjul"
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GL",
		"code": "GRL",
		"names": {
			"en": "Greenland",
			"fr": "Groenland",
			"de": "Grönland"
		},
		"currency": "DKK",
		"continent": "NA",
		"population": "56375",
		"area": "2166086.0",
		"capital": "Nuuk",
		"latitude": "77.6192349",
		"longitude": "-42.8125967",
		"north": "83.627357",
		"east": "-11.312319",
		"south": "59.777401",
		"west": "-73.04203",
		"timezone": null
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GI",
		"code": "GIB",
		"names": {
			"en": "Gibraltar",
			"fr": "Gibraltar",
			"de": "Gibraltar"
		},
		"currency": "GIP",
		"continent": "EU",
		"population": "27884",
		"area": "6.5",
		"capital": "Gibraltar",
		"latitude": "36.1316601",
		"longitude": "-5.35172472573552",
		"north": "36.155439135671",
		"east": "-5.3382851640015",
		"south": "36.109030701402",
		"west": "-5.3662614974365",
		"timezone": "Europe/Gibraltar"
	};

/***/ },
/* 260 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GH",
		"code": "GHA",
		"names": {
			"en": "Ghana",
			"fr": "Ghana",
			"de": "Ghana"
		},
		"currency": "GHS",
		"continent": "AF",
		"population": "24339838",
		"area": "239460.0",
		"capital": "Accra",
		"latitude": "8.0300284",
		"longitude": "-1.0800271",
		"north": "11.173301",
		"east": "1.191781",
		"south": "4.736723",
		"west": "-3.25542",
		"timezone": "Africa/Accra"
	};

/***/ },
/* 261 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GG",
		"code": "GGY",
		"names": {
			"en": "Guernsey",
			"fr": "Guernesey",
			"de": "Guernsey"
		},
		"currency": "GBP",
		"continent": "EU",
		"population": "65228",
		"area": "78.0",
		"capital": "St Peter Port",
		"latitude": "49.580437",
		"longitude": "-2.484854",
		"north": "49.731727816705",
		"east": "-2.1577152112246",
		"south": "49.407641568769",
		"west": "-2.6731945934761",
		"timezone": "Europe/Guernsey"
	};

/***/ },
/* 262 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GF",
		"code": "GUF",
		"names": {
			"en": "French Guiana",
			"fr": "Guyane",
			"de": "Französisch-Guayana"
		},
		"currency": "EUR",
		"continent": "SA",
		"population": "195506",
		"area": "91000.0",
		"capital": "Cayenne",
		"latitude": null,
		"longitude": null,
		"north": "5.776496",
		"east": "-51.613949",
		"south": "2.127094",
		"west": "-54.542511",
		"timezone": null
	};

/***/ },
/* 263 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GE",
		"code": "GEO",
		"names": {
			"en": "Georgia",
			"fr": "Géorgie",
			"de": "Georgien"
		},
		"currency": "GEL",
		"continent": "AS",
		"population": "4630000",
		"area": "69700.0",
		"capital": "Tbilisi",
		"latitude": "41.6809707",
		"longitude": "44.0287382",
		"north": "43.586498",
		"east": "46.725971",
		"south": "41.053196",
		"west": "40.010139",
		"timezone": "Asia/Tbilisi"
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GD",
		"code": "GRD",
		"names": {
			"en": "Grenada",
			"fr": "Grenade",
			"de": "Grenada"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "107818",
		"area": "344.0",
		"capital": "St. George's",
		"latitude": "12.1360374",
		"longitude": "-61.6904045",
		"north": "12.318283928171",
		"east": "-61.57676970108",
		"south": "11.986893",
		"west": "-61.802344",
		"timezone": "America/Grenada"
	};

/***/ },
/* 265 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GB",
		"code": "GBR",
		"names": {
			"en": "United Kingdom",
			"fr": "Royaume-Uni",
			"de": "Vereinigtes Königreich"
		},
		"currency": "GBP",
		"continent": "EU",
		"population": "62348447",
		"area": "244820.0",
		"capital": "London",
		"latitude": "54.7023545",
		"longitude": "-3.2765753",
		"north": "59.360249",
		"east": "1.759",
		"south": "49.906193",
		"west": "-8.623555",
		"timezone": "Europe/London"
	};

/***/ },
/* 266 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "GA",
		"code": "GAB",
		"names": {
			"en": "Gabon",
			"fr": "Gabon",
			"de": "Gabun"
		},
		"currency": "XAF",
		"continent": "AF",
		"population": "1545255",
		"area": "267667.0",
		"capital": "Libreville",
		"latitude": "-0.8999695",
		"longitude": "11.6899699",
		"north": "2.322612",
		"east": "14.502347",
		"south": "-3.978806",
		"west": "8.695471",
		"timezone": "Africa/Libreville"
	};

/***/ },
/* 267 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "FR",
		"code": "FRA",
		"names": {
			"en": "France",
			"fr": "France",
			"de": "Frankreich"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "64768389",
		"area": "547030.0",
		"capital": "Paris",
		"latitude": "46.603354",
		"longitude": "1.8883335",
		"north": "51.092804",
		"east": "9.561556",
		"south": "41.371582",
		"west": "-5.142222",
		"timezone": null
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "FO",
		"code": "FRO",
		"names": {
			"en": "Faroe Islands",
			"fr": "Îles Féroé",
			"de": "Färöer-Inseln"
		},
		"currency": "DKK",
		"continent": "EU",
		"population": "48228",
		"area": "1399.0",
		"capital": "Tórshavn",
		"latitude": "62.0448724",
		"longitude": "-7.0322972",
		"north": "62.400749",
		"east": "-6.399583",
		"south": "61.394943",
		"west": "-7.458",
		"timezone": "Atlantic/Faroe"
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "FM",
		"code": "FSM",
		"names": {
			"en": "Micronesia",
			"fr": "Micronésie",
			"de": "Mikronesien"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "107708",
		"area": "702.0",
		"capital": "Palikir",
		"latitude": "5.5600565",
		"longitude": "150.1982846",
		"north": "10.08904",
		"east": "163.03717",
		"south": "1.02629",
		"west": "137.33648",
		"timezone": null
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "FK",
		"code": "FLK",
		"names": {
			"en": "Falkland Islands",
			"fr": "Îles Malouines",
			"de": "Falklandinseln"
		},
		"currency": "FKP",
		"continent": "SA",
		"population": "2638",
		"area": "12173.0",
		"capital": "Stanley",
		"latitude": "-51.9666424",
		"longitude": "-59.5500387",
		"north": "-51.24065",
		"east": "-57.712486",
		"south": "-52.360512",
		"west": "-61.345192",
		"timezone": "Atlantic/Stanley"
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "FJ",
		"code": "FJI",
		"names": {
			"en": "Fiji",
			"fr": "Fidji",
			"de": "Fidschi"
		},
		"currency": "FJD",
		"continent": "OC",
		"population": "875983",
		"area": "18270.0",
		"capital": "Suva",
		"latitude": "-18.1239696",
		"longitude": "179.0122737",
		"north": "-12.480111",
		"east": "-178.424438",
		"south": "-20.67597",
		"west": "177.129334",
		"timezone": "Pacific/Fiji"
	};

/***/ },
/* 272 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "FI",
		"code": "FIN",
		"names": {
			"en": "Finland",
			"fr": "Finlande",
			"de": "Finnland"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "5244000",
		"area": "337030.0",
		"capital": "Helsinki",
		"latitude": "63.2467777",
		"longitude": "25.9209164",
		"north": "70.096054",
		"east": "31.580944",
		"south": "59.808777",
		"west": "20.556944",
		"timezone": "Europe/Helsinki"
	};

/***/ },
/* 273 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ET",
		"code": "ETH",
		"names": {
			"en": "Ethiopia",
			"fr": "Éthiopie",
			"de": "Äthiopien"
		},
		"currency": "ETB",
		"continent": "AF",
		"population": "88013491",
		"area": "1127127.0",
		"capital": "Addis Ababa",
		"latitude": "10.2116702",
		"longitude": "38.6521203",
		"north": "14.89375",
		"east": "47.986179",
		"south": "3.402422",
		"west": "32.999939",
		"timezone": "Africa/Addis_Ababa"
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ES",
		"code": "ESP",
		"names": {
			"en": "Spain",
			"fr": "Espagne",
			"de": "Spanien"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "46505963",
		"area": "504782.0",
		"capital": "Madrid",
		"latitude": "40.0028028",
		"longitude": "-4.003104",
		"north": "43.791356591377",
		"east": "4.3277847304396",
		"south": "36.000104426055",
		"west": "-9.301515672319",
		"timezone": "Europe/Madrid"
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "ER",
		"code": "ERI",
		"names": {
			"en": "Eritrea",
			"fr": "Érythrée",
			"de": "Eritrea"
		},
		"currency": "ERN",
		"continent": "AF",
		"population": "5792984",
		"area": "121320.0",
		"capital": "Asmara",
		"latitude": "15.9500319",
		"longitude": "37.9999668",
		"north": "18.003084",
		"east": "43.13464",
		"south": "12.359555",
		"west": "36.438778",
		"timezone": "Africa/Asmara"
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "EH",
		"code": "ESH",
		"names": {
			"en": "Western Sahara",
			"fr": "Sahara Occidental",
			"de": "Westsahara"
		},
		"currency": "MAD",
		"continent": "AF",
		"population": "273008",
		"area": "266000.0",
		"capital": "El Aaiún",
		"latitude": "24.026249",
		"longitude": "-12.8745953",
		"north": "27.669674",
		"east": "-8.670276",
		"south": "20.774158",
		"west": "-17.103182",
		"timezone": null
	};

/***/ },
/* 277 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "EG",
		"code": "EGY",
		"names": {
			"en": "Egypt",
			"fr": "Égypte",
			"de": "Ägypten"
		},
		"currency": "EGP",
		"continent": "AF",
		"population": "80471869",
		"area": "1001450.0",
		"capital": "Cairo",
		"latitude": "26.2540493",
		"longitude": "29.2675469",
		"north": "31.667334",
		"east": "36.898330688477",
		"south": "21.725389",
		"west": "24.698111",
		"timezone": "Africa/Cairo"
	};

/***/ },
/* 278 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "EE",
		"code": "EST",
		"names": {
			"en": "Estonia",
			"fr": "Estonie",
			"de": "Estland"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "1291170",
		"area": "45226.0",
		"capital": "Tallinn",
		"latitude": "58.7523778",
		"longitude": "25.3319078",
		"north": "59.676224",
		"east": "28.209972",
		"south": "57.516193",
		"west": "21.837584",
		"timezone": "Europe/Tallinn"
	};

/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "EC",
		"code": "ECU",
		"names": {
			"en": "Ecuador",
			"fr": "Équateur",
			"de": "Ecuador"
		},
		"currency": "USD",
		"continent": "SA",
		"population": "14790608",
		"area": "283560.0",
		"capital": "Quito",
		"latitude": "-1.3397668",
		"longitude": "-79.3666965",
		"north": "1.43902",
		"east": "-75.184586",
		"south": "-4.998823",
		"west": "-81.078598",
		"timezone": "America/Guayaquil"
	};

/***/ },
/* 280 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "DZ",
		"code": "DZA",
		"names": {
			"en": "Algeria",
			"fr": "Algérie",
			"de": "Algerien"
		},
		"currency": "DZD",
		"continent": "AF",
		"population": "34586184",
		"area": "2381740.0",
		"capital": "Algiers",
		"latitude": "28.0000272",
		"longitude": "2.9999825",
		"north": "37.093723",
		"east": "11.979548",
		"south": "18.960028",
		"west": "-8.673868",
		"timezone": "Africa/Algiers"
	};

/***/ },
/* 281 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "DO",
		"code": "DOM",
		"names": {
			"en": "Dominican Republic",
			"fr": "République Dominicaine",
			"de": "Dominikanische Republik"
		},
		"currency": "DOP",
		"continent": "NA",
		"population": "9823821",
		"area": "48730.0",
		"capital": "Santo Domingo",
		"latitude": "19.094175",
		"longitude": "-70.3012705",
		"north": "19.929859",
		"east": "-68.32",
		"south": "17.543159",
		"west": "-72.003487",
		"timezone": "America/Santo_Domingo"
	};

/***/ },
/* 282 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "DM",
		"code": "DMA",
		"names": {
			"en": "Dominica",
			"fr": "Dominique",
			"de": "Dominica"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "72813",
		"area": "754.0",
		"capital": "Roseau",
		"latitude": "15.4113138",
		"longitude": "-61.3653618",
		"north": "15.631809",
		"east": "-61.244152",
		"south": "15.20169",
		"west": "-61.484108",
		"timezone": "America/Dominica"
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "DK",
		"code": "DNK",
		"names": {
			"en": "Denmark",
			"fr": "Danemark",
			"de": "Dänemark"
		},
		"currency": "DKK",
		"continent": "EU",
		"population": "5484000",
		"area": "43094.0",
		"capital": "Copenhagen",
		"latitude": "55.670249",
		"longitude": "10.3333283",
		"north": "57.748417",
		"east": "15.158834",
		"south": "54.562389",
		"west": "8.075611",
		"timezone": "Europe/Copenhagen"
	};

/***/ },
/* 284 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "DJ",
		"code": "DJI",
		"names": {
			"en": "Djibouti",
			"fr": "Djibouti",
			"de": "Dschibuti"
		},
		"currency": "DJF",
		"continent": "AF",
		"population": "740528",
		"area": "23000.0",
		"capital": "Djibouti",
		"latitude": "11.85270615",
		"longitude": "42.7377044381366",
		"north": "12.706833",
		"east": "43.416973",
		"south": "10.909917",
		"west": "41.773472",
		"timezone": "Africa/Djibouti"
	};

/***/ },
/* 285 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "DE",
		"code": "DEU",
		"names": {
			"en": "Germany",
			"fr": "Allemagne",
			"de": "Deutschland"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "81802257",
		"area": "357021.0",
		"capital": "Berlin",
		"latitude": "51.0834196",
		"longitude": "10.4234469",
		"north": "55.055637",
		"east": "15.039889",
		"south": "47.275776",
		"west": "5.865639",
		"timezone": "Europe/Berlin"
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CZ",
		"code": "CZE",
		"names": {
			"en": "Czech Republic",
			"fr": "Tchéquie",
			"de": "Tschechien"
		},
		"currency": "CZK",
		"continent": "EU",
		"population": "10476000",
		"area": "78866.0",
		"capital": "Prague",
		"latitude": "49.8167003",
		"longitude": "15.4749544",
		"north": "51.058887",
		"east": "18.860111",
		"south": "48.542915",
		"west": "12.096194",
		"timezone": "Europe/Prague"
	};

/***/ },
/* 287 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CY",
		"code": "CYP",
		"names": {
			"en": "Cyprus",
			"fr": "Chypre",
			"de": "Zypern"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "1102677",
		"area": "9250.0",
		"capital": "Nicosia",
		"latitude": "35.1695632",
		"longitude": "33.1396402839342",
		"north": "35.701527",
		"east": "34.597916",
		"south": "34.633284672291",
		"west": "32.273083",
		"timezone": "Asia/Nicosia"
	};

/***/ },
/* 288 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CX",
		"code": "CXR",
		"names": {
			"en": "Christmas Island",
			"fr": "Île Christmas",
			"de": "Weihnachtsinsel"
		},
		"currency": "AUD",
		"continent": "AS",
		"population": "1500",
		"area": "135.0",
		"capital": "The Settlement",
		"latitude": null,
		"longitude": null,
		"north": "-10.412356007",
		"east": "105.712596992",
		"south": "-10.5704829995",
		"west": "105.533276992",
		"timezone": null
	};

/***/ },
/* 289 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CW",
		"code": "CUW",
		"names": {
			"en": "Curacao",
			"fr": "Curaçao",
			"de": "Curaçao"
		},
		"currency": "ANG",
		"continent": "NA",
		"population": "141766",
		"area": "",
		"capital": "Willemstad",
		"latitude": null,
		"longitude": null,
		"north": "12.385672",
		"east": "-68.733948",
		"south": "12.032745",
		"west": "-69.157204",
		"timezone": null
	};

/***/ },
/* 290 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CV",
		"code": "CPV",
		"names": {
			"en": "Cape Verde",
			"fr": "Cap-Vert",
			"de": "Kap Verde"
		},
		"currency": "CVE",
		"continent": "AF",
		"population": "508659",
		"area": "4033.0",
		"capital": "Praia",
		"latitude": "16.0000552",
		"longitude": "-24.0083947",
		"north": "17.197178",
		"east": "-22.669443",
		"south": "14.808022",
		"west": "-25.358747",
		"timezone": "Atlantic/Cape_Verde"
	};

/***/ },
/* 291 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CU",
		"code": "CUB",
		"names": {
			"en": "Cuba",
			"fr": "Cuba",
			"de": "Kuba"
		},
		"currency": "CUP",
		"continent": "NA",
		"population": "11423000",
		"area": "110860.0",
		"capital": "Havana",
		"latitude": "23.0131338",
		"longitude": "-80.8328748",
		"north": "23.226042",
		"east": "-74.131775",
		"south": "19.828083",
		"west": "-84.957428",
		"timezone": "America/Havana"
	};

/***/ },
/* 292 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CR",
		"code": "CRI",
		"names": {
			"en": "Costa Rica",
			"fr": "Costa Rica",
			"de": "Costa Rica"
		},
		"currency": "CRC",
		"continent": "NA",
		"population": "4516220",
		"area": "51100.0",
		"capital": "San José",
		"latitude": "10.2735633",
		"longitude": "-84.0739102",
		"north": "11.216819",
		"east": "-82.555992",
		"south": "8.032975",
		"west": "-85.950623",
		"timezone": "America/Costa_Rica"
	};

/***/ },
/* 293 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CO",
		"code": "COL",
		"names": {
			"en": "Colombia",
			"fr": "Colombie",
			"de": "Kolumbien"
		},
		"currency": "COP",
		"continent": "SA",
		"population": "47790000",
		"area": "1138910.0",
		"capital": "Bogotá",
		"latitude": "2.8930783",
		"longitude": "-73.7845072",
		"north": "13.380502",
		"east": "-66.869835",
		"south": "-4.225869",
		"west": "-81.728111",
		"timezone": "America/Bogota"
	};

/***/ },
/* 294 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CN",
		"code": "CHN",
		"names": {
			"en": "China",
			"fr": "Chine",
			"de": "China"
		},
		"currency": "CNY",
		"continent": "AS",
		"population": "1330044000",
		"area": "9596960.0",
		"capital": "Beijing",
		"latitude": "35.000074",
		"longitude": "104.999927",
		"north": "53.56086",
		"east": "134.773911",
		"south": "15.775416",
		"west": "73.557693",
		"timezone": null
	};

/***/ },
/* 295 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CM",
		"code": "CMR",
		"names": {
			"en": "Cameroon",
			"fr": "Cameroun",
			"de": "Kamerun"
		},
		"currency": "XAF",
		"continent": "AF",
		"population": "19294149",
		"area": "475440.0",
		"capital": "Yaoundé",
		"latitude": "4.6125522",
		"longitude": "13.1535811",
		"north": "13.078056",
		"east": "16.192116",
		"south": "1.652548",
		"west": "8.494763",
		"timezone": "Africa/Douala"
	};

/***/ },
/* 296 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CL",
		"code": "CHL",
		"names": {
			"en": "Chile",
			"fr": "Chili",
			"de": "Chile"
		},
		"currency": "CLP",
		"continent": "SA",
		"population": "16746491",
		"area": "756950.0",
		"capital": "Santiago",
		"latitude": "-31.7613365",
		"longitude": "-71.3187697",
		"north": "-17.507553",
		"east": "-66.417557",
		"south": "-55.925622510922",
		"west": "-80.785851",
		"timezone": "America/Santiago"
	};

/***/ },
/* 297 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CK",
		"code": "COK",
		"names": {
			"en": "Cook Islands",
			"fr": "Îles Cook",
			"de": "Cookinseln"
		},
		"currency": "NZD",
		"continent": "OC",
		"population": "21388",
		"area": "240.0",
		"capital": "Avarua",
		"latitude": "-16.0492781",
		"longitude": "-160.3554851",
		"north": "-10.023114",
		"east": "-157.312134",
		"south": "-21.944164",
		"west": "-161.093658",
		"timezone": null
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CI",
		"code": "CIV",
		"names": {
			"en": "Ivory Coast",
			"fr": "Côte d'Ivoire",
			"de": "Elfenbeinküste"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "21058798",
		"area": "322460.0",
		"capital": "Yamoussoukro",
		"latitude": "7.9897371",
		"longitude": "-5.5679458",
		"north": "10.736642",
		"east": "-2.494897",
		"south": "4.357067",
		"west": "-8.599302",
		"timezone": "Africa/Abidjan"
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CH",
		"code": "CHE",
		"names": {
			"en": "Switzerland",
			"fr": "Suisse",
			"de": "Schweiz"
		},
		"currency": "CHF",
		"continent": "EU",
		"population": "7581000",
		"area": "41290.0",
		"capital": "Berne",
		"latitude": "46.7985624",
		"longitude": "8.2319736",
		"north": "47.805332",
		"east": "10.491472",
		"south": "45.825695",
		"west": "5.957472",
		"timezone": "Europe/Zurich"
	};

/***/ },
/* 300 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CG",
		"code": "COG",
		"names": {
			"en": "Republic of the Congo",
			"fr": "Congo-Brazzaville",
			"de": "Kongo (Republik Kongo)"
		},
		"currency": "XAF",
		"continent": "AF",
		"population": "3039126",
		"area": "342000.0",
		"capital": "Brazzaville",
		"latitude": "-0.7264327",
		"longitude": "15.6419155",
		"north": "3.703082",
		"east": "18.649839",
		"south": "-5.027223",
		"west": "11.205009",
		"timezone": "Africa/Brazzaville"
	};

/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CF",
		"code": "CAF",
		"names": {
			"en": "Central African Republic",
			"fr": "Centrafrique",
			"de": "Zentralafrikanische Republik"
		},
		"currency": "XAF",
		"continent": "AF",
		"population": "4844927",
		"area": "622984.0",
		"capital": "Bangui",
		"latitude": "7.0323598",
		"longitude": "19.9981227",
		"north": "11.007569",
		"east": "27.463421",
		"south": "2.220514",
		"west": "14.420097",
		"timezone": "Africa/Bangui"
	};

/***/ },
/* 302 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CD",
		"code": "COD",
		"names": {
			"en": "Democratic Republic of the Congo",
			"fr": "RDC",
			"de": "Demokratische Republik Kongo"
		},
		"currency": "CDF",
		"continent": "AF",
		"population": "70916439",
		"area": "2345410.0",
		"capital": "Kinshasa",
		"latitude": "-2.9814344",
		"longitude": "23.8222636",
		"north": "5.386098",
		"east": "31.305912",
		"south": "-13.455675",
		"west": "12.204144",
		"timezone": null
	};

/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CC",
		"code": "CCK",
		"names": {
			"en": "Cocos [Keeling] Islands",
			"fr": "Îles Cocos",
			"de": "Kokosinseln"
		},
		"currency": "AUD",
		"continent": "AS",
		"population": "628",
		"area": "14.0",
		"capital": "West Island",
		"latitude": null,
		"longitude": null,
		"north": "-12.072459094",
		"east": "96.929489344",
		"south": "-12.208725839",
		"west": "96.816941408",
		"timezone": null
	};

/***/ },
/* 304 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "CA",
		"code": "CAN",
		"names": {
			"en": "Canada",
			"fr": "Canada",
			"de": "Kanada"
		},
		"currency": "CAD",
		"continent": "NA",
		"population": "33679000",
		"area": "9984670.0",
		"capital": "Ottawa",
		"latitude": "61.0666922",
		"longitude": "-107.9917071",
		"north": "83.110626",
		"east": "-52.636291",
		"south": "41.67598",
		"west": "-141",
		"timezone": null
	};

/***/ },
/* 305 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BZ",
		"code": "BLZ",
		"names": {
			"en": "Belize",
			"fr": "Belize",
			"de": "Belize"
		},
		"currency": "BZD",
		"continent": "NA",
		"population": "314522",
		"area": "22966.0",
		"capital": "Belmopan",
		"latitude": "16.8259793",
		"longitude": "-88.7600927",
		"north": "18.496557",
		"east": "-87.776985",
		"south": "15.8893",
		"west": "-89.224815",
		"timezone": "America/Belize"
	};

/***/ },
/* 306 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BY",
		"code": "BLR",
		"names": {
			"en": "Belarus",
			"fr": "Biélorussie",
			"de": "Weißrussland"
		},
		"currency": "BYR",
		"continent": "EU",
		"population": "9685000",
		"area": "207600.0",
		"capital": "Minsk",
		"latitude": "53.4250605",
		"longitude": "27.6971358",
		"north": "56.165806",
		"east": "32.770805",
		"south": "51.256416",
		"west": "23.176889",
		"timezone": "Europe/Minsk"
	};

/***/ },
/* 307 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BW",
		"code": "BWA",
		"names": {
			"en": "Botswana",
			"fr": "Botswana",
			"de": "Botsuana"
		},
		"currency": "BWP",
		"continent": "AF",
		"population": "2029307",
		"area": "600370.0",
		"capital": "Gaborone",
		"latitude": "-23.1681782",
		"longitude": "24.5928742",
		"north": "-17.780813",
		"east": "29.360781",
		"south": "-26.907246",
		"west": "19.999535",
		"timezone": "Africa/Gaborone"
	};

/***/ },
/* 308 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BV",
		"code": "BVT",
		"names": {
			"en": "Bouvet Island",
			"fr": "Île Bouvet",
			"de": "Bouvetinsel"
		},
		"currency": "NOK",
		"continent": "AN",
		"population": "0",
		"area": "",
		"capital": "",
		"latitude": null,
		"longitude": null,
		"north": "-54.400322",
		"east": "3.487976",
		"south": "-54.462383",
		"west": "3.335499",
		"timezone": null
	};

/***/ },
/* 309 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BT",
		"code": "BTN",
		"names": {
			"en": "Bhutan",
			"fr": "Bhutan",
			"de": "Bhutan"
		},
		"currency": "BTN",
		"continent": "AS",
		"population": "699847",
		"area": "47000.0",
		"capital": "Thimphu",
		"latitude": "27.549511",
		"longitude": "90.5119273",
		"north": "28.323778",
		"east": "92.125191",
		"south": "26.70764",
		"west": "88.75972",
		"timezone": "Asia/Thimphu"
	};

/***/ },
/* 310 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BS",
		"code": "BHS",
		"names": {
			"en": "Bahamas",
			"fr": "Bahamas",
			"de": "Bahamas"
		},
		"currency": "BSD",
		"continent": "NA",
		"population": "301790",
		"area": "13940.0",
		"capital": "Nassau",
		"latitude": "24.7736546",
		"longitude": "-78.0000547",
		"north": "26.919243",
		"east": "-74.423874",
		"south": "22.852743",
		"west": "-78.995911",
		"timezone": "America/Nassau"
	};

/***/ },
/* 311 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BR",
		"code": "BRA",
		"names": {
			"en": "Brazil",
			"fr": "Brésil",
			"de": "Brasilien"
		},
		"currency": "BRL",
		"continent": "SA",
		"population": "201103330",
		"area": "8511965.0",
		"capital": "Brasília",
		"latitude": "-10.3333333",
		"longitude": "-53.2",
		"north": "5.264877",
		"east": "-32.392998",
		"south": "-33.750706",
		"west": "-73.985535",
		"timezone": null
	};

/***/ },
/* 312 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BQ",
		"code": "BES",
		"names": {
			"en": "Bonaire",
			"fr": "Bonaire, Saint-Eustache et Saba",
			"de": "Bonaire"
		},
		"currency": "USD",
		"continent": "NA",
		"population": "18012",
		"area": "",
		"capital": "",
		"latitude": null,
		"longitude": null,
		"north": "12.304535",
		"east": "-68.192307",
		"south": "12.017149",
		"west": "-68.416458",
		"timezone": null
	};

/***/ },
/* 313 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BO",
		"code": "BOL",
		"names": {
			"en": "Bolivia",
			"fr": "Bolivie",
			"de": "Bolivien"
		},
		"currency": "BOB",
		"continent": "SA",
		"population": "9947418",
		"area": "1098580.0",
		"capital": "Sucre",
		"latitude": "-17.0568696",
		"longitude": "-64.9912286",
		"north": "-9.680567",
		"east": "-57.458096",
		"south": "-22.896133",
		"west": "-69.640762",
		"timezone": "America/La_Paz"
	};

/***/ },
/* 314 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BN",
		"code": "BRN",
		"names": {
			"en": "Brunei",
			"fr": "Brunéi Darussalam",
			"de": "Brunei"
		},
		"currency": "BND",
		"continent": "AS",
		"population": "395027",
		"area": "5770.0",
		"capital": "Bandar Seri Begawan",
		"latitude": "4.4137155",
		"longitude": "114.5653908",
		"north": "5.047167",
		"east": "115.359444",
		"south": "4.003083",
		"west": "114.071442",
		"timezone": "Asia/Brunei"
	};

/***/ },
/* 315 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BM",
		"code": "BMU",
		"names": {
			"en": "Bermuda",
			"fr": "Bermudes",
			"de": "Bermuda"
		},
		"currency": "BMD",
		"continent": "NA",
		"population": "65365",
		"area": "53.0",
		"capital": "Hamilton",
		"latitude": "32.3018217",
		"longitude": "-64.7603583",
		"north": "32.393833",
		"east": "-64.651993",
		"south": "32.246639",
		"west": "-64.89605",
		"timezone": "Atlantic/Bermuda"
	};

/***/ },
/* 316 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BL",
		"code": "BLM",
		"names": {
			"en": "Saint Barthélemy",
			"fr": "Saint-Barthélémy",
			"de": "St. Barthélemy"
		},
		"currency": "EUR",
		"continent": "NA",
		"population": "8450",
		"area": "21.0",
		"capital": "Gustavia",
		"latitude": null,
		"longitude": null,
		"north": "17.928808791949",
		"east": "-62.788983372986",
		"south": "17.878183227406",
		"west": "-62.873911825378",
		"timezone": null
	};

/***/ },
/* 317 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BJ",
		"code": "BEN",
		"names": {
			"en": "Benin",
			"fr": "Bénin",
			"de": "Benin"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "9056010",
		"area": "112620.0",
		"capital": "Porto-Novo",
		"latitude": "9.5293472",
		"longitude": "2.2584408",
		"north": "12.418347",
		"east": "3.851701",
		"south": "6.225748",
		"west": "0.774575",
		"timezone": "Africa/Porto-Novo"
	};

/***/ },
/* 318 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BI",
		"code": "BDI",
		"names": {
			"en": "Burundi",
			"fr": "Burundi",
			"de": "Burundi"
		},
		"currency": "BIF",
		"continent": "AF",
		"population": "9863117",
		"area": "27830.0",
		"capital": "Bujumbura",
		"latitude": "-3.3634357",
		"longitude": "29.8870575",
		"north": "-2.310123",
		"east": "30.847729",
		"south": "-4.465713",
		"west": "28.993061",
		"timezone": "Africa/Bujumbura"
	};

/***/ },
/* 319 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BH",
		"code": "BHR",
		"names": {
			"en": "Bahrain",
			"fr": "Bahreïn",
			"de": "Bahrain"
		},
		"currency": "BHD",
		"continent": "AS",
		"population": "738004",
		"area": "665.0",
		"capital": "Manama",
		"latitude": "26.1551249",
		"longitude": "50.5344606",
		"north": "26.282583",
		"east": "50.664471",
		"south": "25.796862",
		"west": "50.45414",
		"timezone": "Asia/Bahrain"
	};

/***/ },
/* 320 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BG",
		"code": "BGR",
		"names": {
			"en": "Bulgaria",
			"fr": "Bulgarie",
			"de": "Bulgarien"
		},
		"currency": "BGN",
		"continent": "EU",
		"population": "7148785",
		"area": "110910.0",
		"capital": "Sofia",
		"latitude": "42.6073975",
		"longitude": "25.4856617",
		"north": "44.21764",
		"east": "28.612167",
		"south": "41.242084",
		"west": "22.371166",
		"timezone": "Europe/Sofia"
	};

/***/ },
/* 321 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BF",
		"code": "BFA",
		"names": {
			"en": "Burkina Faso",
			"fr": "Burkina Faso",
			"de": "Burkina Faso"
		},
		"currency": "XOF",
		"continent": "AF",
		"population": "16241811",
		"area": "274200.0",
		"capital": "Ouagadougou",
		"latitude": "12.0753083",
		"longitude": "-1.6880314",
		"north": "15.082593",
		"east": "2.405395",
		"south": "9.401108",
		"west": "-5.518916",
		"timezone": "Africa/Ouagadougou"
	};

/***/ },
/* 322 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BE",
		"code": "BEL",
		"names": {
			"en": "Belgium",
			"fr": "Belgique",
			"de": "Belgien"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "10403000",
		"area": "30510.0",
		"capital": "Brussels",
		"latitude": "50.6407351",
		"longitude": "4.66696",
		"north": "51.505444",
		"east": "6.403861",
		"south": "49.49361",
		"west": "2.546944",
		"timezone": "Europe/Brussels"
	};

/***/ },
/* 323 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BD",
		"code": "BGD",
		"names": {
			"en": "Bangladesh",
			"fr": "Bangladesh",
			"de": "Bangladesch"
		},
		"currency": "BDT",
		"continent": "AS",
		"population": "156118464",
		"area": "144000.0",
		"capital": "Dhaka",
		"latitude": "24.4768783",
		"longitude": "90.2932426",
		"north": "26.631945",
		"east": "92.673668",
		"south": "20.743334",
		"west": "88.028336",
		"timezone": "Asia/Dhaka"
	};

/***/ },
/* 324 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BB",
		"code": "BRB",
		"names": {
			"en": "Barbados",
			"fr": "Barbade",
			"de": "Barbados"
		},
		"currency": "BBD",
		"continent": "NA",
		"population": "285653",
		"area": "431.0",
		"capital": "Bridgetown",
		"latitude": "13.1500331",
		"longitude": "-59.5250305",
		"north": "13.327257",
		"east": "-59.420376",
		"south": "13.039844",
		"west": "-59.648922",
		"timezone": "America/Barbados"
	};

/***/ },
/* 325 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "BA",
		"code": "BIH",
		"names": {
			"en": "Bosnia and Herzegovina",
			"fr": "Bosnie-Herzégovine",
			"de": "Bosnien und Herzegowina"
		},
		"currency": "BAM",
		"continent": "EU",
		"population": "4590000",
		"area": "51129.0",
		"capital": "Sarajevo",
		"latitude": "44.3092405",
		"longitude": "17.5859673",
		"north": "45.239193",
		"east": "19.622223",
		"south": "42.546112",
		"west": "15.718945",
		"timezone": "Europe/Sarajevo"
	};

/***/ },
/* 326 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AZ",
		"code": "AZE",
		"names": {
			"en": "Azerbaijan",
			"fr": "Azerbaïdjan",
			"de": "Aserbaidschan"
		},
		"currency": "AZN",
		"continent": "AS",
		"population": "8303512",
		"area": "86600.0",
		"capital": "Baku",
		"latitude": "40.1636668",
		"longitude": "47.8207429",
		"north": "41.90564",
		"east": "50.370083",
		"south": "38.389152526855",
		"west": "44.774113",
		"timezone": "Asia/Baku"
	};

/***/ },
/* 327 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AX",
		"code": "ALA",
		"names": {
			"en": "Åland",
			"fr": "Îles Åland",
			"de": "Alandinseln"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "26711",
		"area": "",
		"capital": "Mariehamn",
		"latitude": null,
		"longitude": null,
		"north": "60.488861",
		"east": "21.011862",
		"south": "59.90675",
		"west": "19.317694",
		"timezone": null
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AW",
		"code": "ABW",
		"names": {
			"en": "Aruba",
			"fr": "Aruba",
			"de": "Aruba"
		},
		"currency": "AWG",
		"continent": "NA",
		"population": "71566",
		"area": "193.0",
		"capital": "Oranjestad",
		"latitude": null,
		"longitude": null,
		"north": "12.623718127153",
		"east": "-69.86575120105",
		"south": "12.411707706191",
		"west": "-70.064473719605",
		"timezone": null
	};

/***/ },
/* 329 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AU",
		"code": "AUS",
		"names": {
			"en": "Australia",
			"fr": "Australie",
			"de": "Australien"
		},
		"currency": "AUD",
		"continent": "OC",
		"population": "21515754",
		"area": "7686850.0",
		"capital": "Canberra",
		"latitude": "-24.7761086",
		"longitude": "134.755",
		"north": "-10.062805",
		"east": "153.639252",
		"south": "-43.64397",
		"west": "112.911057",
		"timezone": null
	};

/***/ },
/* 330 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AT",
		"code": "AUT",
		"names": {
			"en": "Austria",
			"fr": "Autriche",
			"de": "Österreich"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "8205000",
		"area": "83858.0",
		"capital": "Vienna",
		"latitude": "47.2000338",
		"longitude": "13.199959",
		"north": "49.021162769139",
		"east": "17.16206856526",
		"south": "46.372652021624",
		"west": "9.5309523724083",
		"timezone": "Europe/Vienna"
	};

/***/ },
/* 331 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AS",
		"code": "ASM",
		"names": {
			"en": "American Samoa",
			"fr": "Samoa américaines",
			"de": "Amerikanisch-Samoa"
		},
		"currency": "USD",
		"continent": "OC",
		"population": "57881",
		"area": "199.0",
		"capital": "Pago Pago",
		"latitude": null,
		"longitude": null,
		"north": "-11.0497",
		"east": "-169.416077",
		"south": "-14.382478",
		"west": "-171.091888",
		"timezone": null
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AR",
		"code": "ARG",
		"names": {
			"en": "Argentina",
			"fr": "Argentine",
			"de": "Argentinien"
		},
		"currency": "ARS",
		"continent": "SA",
		"population": "41343201",
		"area": "2766890.0",
		"capital": "Buenos Aires",
		"latitude": "-35.0039032",
		"longitude": "-65.2699754",
		"north": "-21.781277",
		"east": "-53.591835",
		"south": "-55.061314",
		"west": "-73.58297",
		"timezone": null
	};

/***/ },
/* 333 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AQ",
		"code": "ATA",
		"names": {
			"en": "Antarctica",
			"fr": "Antarctique",
			"de": "Antarktis"
		},
		"currency": "",
		"continent": "AN",
		"population": "0",
		"area": "1.4E7",
		"capital": "",
		"latitude": null,
		"longitude": null,
		"north": "-60.515533",
		"east": "179.9999",
		"south": "-89.9999",
		"west": "-179.9999",
		"timezone": null
	};

/***/ },
/* 334 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AO",
		"code": "AGO",
		"names": {
			"en": "Angola",
			"fr": "Angola",
			"de": "Angola"
		},
		"currency": "AOA",
		"continent": "AF",
		"population": "13068161",
		"area": "1246700.0",
		"capital": "Luanda",
		"latitude": "-11.8775768",
		"longitude": "17.5691241",
		"north": "-4.376826",
		"east": "24.082119",
		"south": "-18.042076",
		"west": "11.679219",
		"timezone": "Africa/Luanda"
	};

/***/ },
/* 335 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AM",
		"code": "ARM",
		"names": {
			"en": "Armenia",
			"fr": "Arménie",
			"de": "Armenien"
		},
		"currency": "AMD",
		"continent": "AS",
		"population": "2968000",
		"area": "29800.0",
		"capital": "Yerevan",
		"latitude": "40.7696272",
		"longitude": "44.6736646",
		"north": "41.301834",
		"east": "46.77243504516",
		"south": "38.830528",
		"west": "43.44978",
		"timezone": "Asia/Yerevan"
	};

/***/ },
/* 336 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AL",
		"code": "ALB",
		"names": {
			"en": "Albania",
			"fr": "Albanie",
			"de": "Albanien"
		},
		"currency": "ALL",
		"continent": "EU",
		"population": "2986952",
		"area": "28748.0",
		"capital": "Tirana",
		"latitude": "41.000028",
		"longitude": "19.9999619",
		"north": "42.665611",
		"east": "21.068472",
		"south": "39.648361",
		"west": "19.293972",
		"timezone": "Europe/Tirane"
	};

/***/ },
/* 337 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AI",
		"code": "AIA",
		"names": {
			"en": "Anguilla",
			"fr": "Anguilla",
			"de": "Anguilla"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "13254",
		"area": "102.0",
		"capital": "The Valley",
		"latitude": "18.1954947",
		"longitude": "-63.0750234",
		"north": "18.283424",
		"east": "-62.971359",
		"south": "18.166815",
		"west": "-63.172901",
		"timezone": null
	};

/***/ },
/* 338 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AG",
		"code": "ATG",
		"names": {
			"en": "Antigua and Barbuda",
			"fr": "Antigua et Barbuda",
			"de": "Antigua und Barbuda"
		},
		"currency": "XCD",
		"continent": "NA",
		"population": "86754",
		"area": "443.0",
		"capital": "St. John's",
		"latitude": "17.079128",
		"longitude": "-61.8222516",
		"north": "17.729387",
		"east": "-61.672421",
		"south": "16.996979",
		"west": "-61.906425",
		"timezone": "America/Antigua"
	};

/***/ },
/* 339 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AF",
		"code": "AFG",
		"names": {
			"en": "Afghanistan",
			"fr": "Afghanistan",
			"de": "Afghanistan"
		},
		"currency": "AFN",
		"continent": "AS",
		"population": "29121286",
		"area": "647500.0",
		"capital": "Kabul",
		"latitude": "33.0000866",
		"longitude": "64.9998468",
		"north": "38.483418",
		"east": "74.879448",
		"south": "29.377472",
		"west": "60.478443",
		"timezone": "Asia/Kabul"
	};

/***/ },
/* 340 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AE",
		"code": "ARE",
		"names": {
			"en": "United Arab Emirates",
			"fr": "Émirats Arabes Unis",
			"de": "Vereinigte Arabische Emirate"
		},
		"currency": "AED",
		"continent": "AS",
		"population": "4975593",
		"area": "82880.0",
		"capital": "Abu Dhabi",
		"latitude": "24.0002488",
		"longitude": "53.9994829",
		"north": "26.084159851074",
		"east": "56.381660461426",
		"south": "22.633329391479",
		"west": "51.58332824707",
		"timezone": "Asia/Dubai"
	};

/***/ },
/* 341 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"shortCode": "AD",
		"code": "AND",
		"names": {
			"en": "Andorra",
			"fr": "Andorre",
			"de": "Andorra"
		},
		"currency": "EUR",
		"continent": "EU",
		"population": "84000",
		"area": "468.0",
		"capital": "Andorra la Vella",
		"latitude": "42.5407167",
		"longitude": "1.5732033",
		"north": "42.6560438963",
		"east": "1.786542777832",
		"south": "42.428492598768",
		"west": "1.4071867141113",
		"timezone": "Europe/Andorra"
	};

/***/ }
/******/ ]);