import{r as l,t as T,a as D,_ as te,g as $,d as re,c as ae,e as M}from"./helpers-a0fc2773.js";import{I as k}from"./index-eea9e710.js";function ne(n,t){l(2,arguments);var e=T(n).getTime(),r=D(t);return new Date(e+r)}function G(n){l(1,arguments);var t=T(n);return t.setHours(0,0,0,0),t}function We(n,t){l(2,arguments);var e=G(n),r=G(t);return e.getTime()===r.getTime()}function oe(n){return l(1,arguments),n instanceof Date||te(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ie(n){if(l(1,arguments),!oe(n)&&typeof n!="number")return!1;var t=T(n);return!isNaN(Number(t))}function ue(n,t){l(2,arguments);var e=D(t);return ne(n,-e)}var se=864e5;function de(n){l(1,arguments);var t=T(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=e-r;return Math.floor(a/se)+1}function P(n){l(1,arguments);var t=1,e=T(n),r=e.getUTCDay(),a=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function A(n){l(1,arguments);var t=T(n),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var a=P(r),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var i=P(o);return t.getTime()>=a.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function ce(n){l(1,arguments);var t=A(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=P(e);return r}var le=6048e5;function fe(n){l(1,arguments);var t=T(n),e=P(t).getTime()-ce(t).getTime();return Math.round(e/le)+1}function W(n,t){var e,r,a,o,i,s,d,f;l(1,arguments);var m=$(),c=D((e=(r=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:m.weekStartsOn)!==null&&r!==void 0?r:(d=m.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=T(n),v=g.getUTCDay(),w=(v<c?7:0)+v-c;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function K(n,t){var e,r,a,o,i,s,d,f;l(1,arguments);var m=T(n),c=m.getUTCFullYear(),g=$(),v=D((e=(r=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&r!==void 0?r:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(c+1,0,v),w.setUTCHours(0,0,0,0);var x=W(w,t),O=new Date(0);O.setUTCFullYear(c,0,v),O.setUTCHours(0,0,0,0);var _=W(O,t);return m.getTime()>=x.getTime()?c+1:m.getTime()>=_.getTime()?c:c-1}function ve(n,t){var e,r,a,o,i,s,d,f;l(1,arguments);var m=$(),c=D((e=(r=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:m.firstWeekContainsDate)!==null&&r!==void 0?r:(d=m.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&e!==void 0?e:1),g=K(n,t),v=new Date(0);v.setUTCFullYear(g,0,c),v.setUTCHours(0,0,0,0);var w=W(v,t);return w}var ge=6048e5;function me(n,t){l(1,arguments);var e=T(n),r=W(e,t).getTime()-ve(e,t).getTime();return Math.round(r/ge)+1}function u(n,t){for(var e=n<0?"-":"",r=Math.abs(n).toString();r.length<t;)r="0"+r;return e+r}var he={y:function(t,e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return u(e==="yy"?a%100:a,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):u(r+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,a=t.getUTCMilliseconds(),o=Math.floor(a*Math.pow(10,r-3));return u(o,e.length)}};const y=he;var p={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},we={G:function(t,e,r){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var a=t.getUTCFullYear(),o=a>0?a:1-a;return r.ordinalNumber(o,{unit:"year"})}return y.y(t,e)},Y:function(t,e,r,a){var o=K(t,a),i=o>0?o:1-o;if(e==="YY"){var s=i%100;return u(s,2)}return e==="Yo"?r.ordinalNumber(i,{unit:"year"}):u(i,e.length)},R:function(t,e){var r=A(t);return u(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return u(r,e.length)},Q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,r){var a=t.getUTCMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,r){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,r,a){var o=me(t,a);return e==="wo"?r.ordinalNumber(o,{unit:"week"}):u(o,e.length)},I:function(t,e,r){var a=fe(t);return e==="Io"?r.ordinalNumber(a,{unit:"week"}):u(a,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,r){var a=de(t);return e==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):u(a,e.length)},E:function(t,e,r){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,r,a){var o=t.getUTCDay(),i=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return u(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,r,a){var o=t.getUTCDay(),i=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return u(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,r){var a=t.getUTCDay(),o=a===0?7:a;switch(e){case"i":return String(o);case"ii":return u(o,e.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,r){var a=t.getUTCHours(),o=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,r){var a=t.getUTCHours(),o;switch(a===12?o=p.noon:a===0?o=p.midnight:o=a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,r){var a=t.getUTCHours(),o;switch(a>=17?o=p.evening:a>=12?o=p.afternoon:a>=4?o=p.morning:o=p.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return y.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,r){var a=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(t,e,r){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,r,a){var o=a._originalDate||t,i=o.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return I(i);case"XXXX":case"XX":return C(i);case"XXXXX":case"XXX":default:return C(i,":")}},x:function(t,e,r,a){var o=a._originalDate||t,i=o.getTimezoneOffset();switch(e){case"x":return I(i);case"xxxx":case"xx":return C(i);case"xxxxx":case"xxx":default:return C(i,":")}},O:function(t,e,r,a){var o=a._originalDate||t,i=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(i,":");case"OOOO":default:return"GMT"+C(i,":")}},z:function(t,e,r,a){var o=a._originalDate||t,i=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(i,":");case"zzzz":default:return"GMT"+C(i,":")}},t:function(t,e,r,a){var o=a._originalDate||t,i=Math.floor(o.getTime()/1e3);return u(i,e.length)},T:function(t,e,r,a){var o=a._originalDate||t,i=o.getTime();return u(i,e.length)}};function F(n,t){var e=n>0?"-":"+",r=Math.abs(n),a=Math.floor(r/60),o=r%60;if(o===0)return e+String(a);var i=t||"";return e+String(a)+i+u(o,2)}function I(n,t){if(n%60===0){var e=n>0?"-":"+";return e+u(Math.abs(n)/60,2)}return C(n,t)}function C(n,t){var e=t||"",r=n>0?"-":"+",a=Math.abs(n),o=u(Math.floor(a/60),2),i=u(a%60,2);return r+o+e+i}const Te=we;var R=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},j=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},be=function(t,e){var r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return R(t,e);var i;switch(a){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",R(a,e)).replace("{{time}}",j(o,e))},ye={p:j,P:be};const Oe=ye;var Ce=["D","DD"],De=["YY","YYYY"];function ke(n){return Ce.indexOf(n)!==-1}function pe(n){return De.indexOf(n)!==-1}function Q(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var xe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_e=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ue=/^'([^]*?)'?$/,Ee=/''/g,Ye=/[a-zA-Z]/;function $e(n,t,e){var r,a,o,i,s,d,f,m,c,g,v,w,x,O,_,q,N,L;l(2,arguments);var V=String(t),U=$(),E=(r=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:U.locale)!==null&&r!==void 0?r:re,B=D((o=(i=(s=(d=e==null?void 0:e.firstWeekContainsDate)!==null&&d!==void 0?d:e==null||(f=e.locale)===null||f===void 0||(m=f.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&s!==void 0?s:U.firstWeekContainsDate)!==null&&i!==void 0?i:(c=U.locale)===null||c===void 0||(g=c.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(B>=1&&B<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var H=D((v=(w=(x=(O=e==null?void 0:e.weekStartsOn)!==null&&O!==void 0?O:e==null||(_=e.locale)===null||_===void 0||(q=_.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&x!==void 0?x:U.weekStartsOn)!==null&&w!==void 0?w:(N=U.locale)===null||N===void 0||(L=N.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&v!==void 0?v:0);if(!(H>=0&&H<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var Y=T(n);if(!ie(Y))throw new RangeError("Invalid time value");var Z=ae(Y),J=ue(Y,Z),z={firstWeekContainsDate:B,weekStartsOn:H,locale:E,_originalDate:Y},ee=V.match(_e).map(function(h){var b=h[0];if(b==="p"||b==="P"){var S=Oe[b];return S(h,E.formatLong)}return h}).join("").match(xe).map(function(h){if(h==="''")return"'";var b=h[0];if(b==="'")return Se(h);var S=Te[b];if(S)return!(e!=null&&e.useAdditionalWeekYearTokens)&&pe(h)&&Q(h,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&ke(h)&&Q(h,t,String(n)),S(J,h,E.localize,z);if(b.match(Ye))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return h}).join("");return ee}function Se(n){var t=n.match(Ue);return t?t[1].replace(Ee,"'"):n}const X=10;async function qe({filter:n,sortBy:t,page:e}){let r=k.from("bookings").select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",{count:"exact"});if(n&&(r=r[n.method||"eq"](n.field,n.value)),t&&(r=r.order(t.field,{ascending:t.direction==="asc"})),e){const s=(e-1)*X,d=s+X-1;r=r.range(s,d)}const{data:a,error:o,count:i}=await r;if(o)throw console.error(o),new Error("Bookings could not be loaded");return{data:a,count:i}}async function Ne(n){const{data:t,error:e}=await k.from("bookings").select("*, cabins(*), guests(*)").eq("id",n).single();if(e)throw console.error(e),new Error("Booking not found");return t}async function Le(n){const{data:t,error:e}=await k.from("bookings").select("created_at, totalPrice, extrasPrice").gte("created_at",n).lte("created_at",M({end:!0}));if(e)throw console.error(e),new Error("Bookings could not get loaded");return t}async function Be(n){const{data:t,error:e}=await k.from("bookings").select("*, guests(fullName)").gte("startDate",n).lte("startDate",M());if(e)throw console.error(e),new Error("Bookings could not get loaded");return t}async function He(){const{data:n,error:t}=await k.from("bookings").select("*, guests(fullName, nationality, countryFlag)").or(`and(status.eq.unconfirmed,startDate.eq.${M()}),and(status.eq.checked-in,endDate.eq.${M()})`).order("created_at");if(t)throw console.error(t),new Error("Bookings could not get loaded");return n}async function Ge(n,t){const{data:e,error:r}=await k.from("bookings").update(t).eq("id",n).select().single();if(r)throw console.error(r),new Error("Booking could not be updated");return e}async function Fe(n){const{data:t,error:e}=await k.from("bookings").delete().eq("id",n);if(e)throw console.error(e),new Error("Booking could not be deleted");return t}export{X as P,Le as a,He as b,qe as c,Fe as d,Ne as e,$e as f,Be as g,We as i,Ge as u};
