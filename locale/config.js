// source: https://unpkg.com/dayjs@v1.10.4/locale/is.js
// see: https://github.com/iamkun/dayjs/blob/v1.10.4/src/locale/is.js

!function(e,_){"object"==typeof exports&&"undefined"!=typeof module?module.exports=_(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],_):e.dayjs_locale_is=_(e.dayjs)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var _={name:"is",weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"}};return e.locale(_,null,!0),_});

dayjs.locale('is');
