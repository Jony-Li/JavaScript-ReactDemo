/* */ 
"format cjs";
/**
 * UAParser.js v0.7.17
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */
!function(i,s){"use strict";var e="0.7.17",o="",r="?",n="function",a="undefined",d="object",t="string",l="major",w="model",u="name",c="type",m="vendor",b="version",p="architecture",g="console",f="mobile",h="tablet",v="smarttv",x="wearable",k="embedded",y={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2===0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&s.toLowerCase().indexOf(i.toLowerCase())!==-1},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===t?i.replace(/[^\d\.]/g,"").split(".")[0]:s},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},T={rgx:function(i,e){for(var o,r,a,t,l,w,u=0;u<e.length&&!l;){var c=e[u],m=e[u+1];for(o=r=0;o<c.length&&!l;)if(l=c[o++].exec(i))for(a=0;a<m.length;a++)w=l[++r],t=m[a],typeof t===d&&t.length>0?2==t.length?typeof t[1]==n?this[t[0]]=t[1].call(this,w):this[t[0]]=t[1]:3==t.length?typeof t[1]!==n||t[1].exec&&t[1].test?this[t[0]]=w?w.replace(t[1],t[2]):s:this[t[0]]=w?t[1].call(this,w,t[2]):s:4==t.length&&(this[t[0]]=w?t[3].call(this,w.replace(t[1],t[2])):s):this[t]=w?w:s;u+=2}},str:function(i,e){for(var o in e)if(typeof e[o]===d&&e[o].length>0){for(var n=0;n<e[o].length;n++)if(y.has(e[o][n],i))return o===r?s:o}else if(y.has(e[o],i))return o===r?s:o;return i}},S={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},A={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,b],[/(opios)[\/\s]+([\w\.]+)/i],[[u,"Opera Mini"],b],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],b],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[u,b],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[u,"IE"],b],[/(edge)\/((\d+)?[\w\.]+)/i],[u,b],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],b],[/(puffin)\/([\w\.]+)/i],[[u,"Puffin"],b],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[u,"UCBrowser"],b],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],b],[/(micromessenger)\/([\w\.]+)/i],[[u,"WeChat"],b],[/(QQ)\/([\d\.]+)/i],[u,b],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[u,b],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[b,[u,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[b,[u,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[b,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,/(.+)/,"$1 WebView"],b],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[u,/(.+(?:g|us))(.+)/,"$1 $2"],b],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[b,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,b],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],b],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],b],[/(coast)\/([\w\.]+)/i],[[u,"Opera Coast"],b],[/fxios\/([\w\.-]+)/i],[b,[u,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[b,[u,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[b,u],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[u,"GSA"],b],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[b,T.str,S.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[u,b],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],b],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,b]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[p,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,m,[c,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[m,"Apple"],[c,h]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,w,[c,h]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[w,[m,"Amazon"],[c,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[w,T.str,S.device.amazon.model],[m,"Amazon"],[c,f]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,m,[c,f]],[/\((ip[honed|\s\w*]+);/i],[w,[m,"Apple"],[c,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,w,[c,f]],[/\(bb10;\s(\w+)/i],[w,[m,"BlackBerry"],[c,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[m,"Asus"],[c,h]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[w,"Xperia Tablet"],[c,h]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[m,"Sony"],[c,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,w,[c,g]],[/android.+;\s(shield)\sbuild/i],[w,[m,"Nvidia"],[c,g]],[/(playstation\s[34portablevi]+)/i],[w,[m,"Sony"],[c,g]],[/(sprint\s(\w+))/i],[[m,T.str,S.device.sprint.vendor],[w,T.str,S.device.sprint.model],[c,f]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,w,[c,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[w,/_/g," "],[c,f]],[/(nexus\s9)/i],[w,[m,"HTC"],[c,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[m,"Huawei"],[c,f]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,w,[c,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[m,"Microsoft"],[c,g]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[m,"Microsoft"],[c,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[m,"Motorola"],[c,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[m,"Motorola"],[c,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,y.trim],[w,y.trim],[c,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[m,"Samsung"],[c,v]],[/\(dtv[\);].+(aquos)/i],[w,[m,"Sharp"],[c,v]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],w,[c,h]],[/smart-tv.+(samsung)/i],[m,[c,v],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],w,[c,f]],[/sie-(\w+)*/i],[w,[m,"Siemens"],[c,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],w,[c,f]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[m,"Acer"],[c,h]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[m,"LG"],[c,h]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],w,[c,h]],[/(lg) netcast\.tv/i],[m,w,[c,v]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[m,"LG"],[c,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[m,"Lenovo"],[c,h]],[/linux;.+((jolla));/i],[m,w,[c,f]],[/((pebble))app\/[\d\.]+\s/i],[m,w,[c,x]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,w,[c,f]],[/crkey/i],[[w,"Chromecast"],[m,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[m,"Google"],[c,x]],[/android.+;\s(pixel c)\s/i],[w,[m,"Google"],[c,h]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[m,"Google"],[c,f]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[w,/_/g," "],[m,"Xiaomi"],[c,f]],[/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[w,/_/g," "],[m,"Xiaomi"],[c,h]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[m,"Meizu"],[c,h]],[/android.+a000(1)\s+build/i],[w,[m,"OnePlus"],[c,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[m,"RCA"],[c,h]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[w,[m,"Dell"],[c,h]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[m,"Verizon"],[c,h]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[m,"Barnes & Noble"],w,[c,h]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[m,"NuVision"],[c,h]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[m,"ZTE"],w,[c,h]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[m,"Swiss"],[c,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[m,"Swiss"],[c,h]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[m,"Zeki"],[c,h]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[m,"Dragon Touch"],w,[c,h]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[w,[m,"Insignia"],[c,h]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[w,[m,"NextBook"],[c,h]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],w,[c,f]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[m,"LvTel"],w,[c,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[m,"Envizen"],[c,h]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[m,w,[c,h]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[m,"MachSpeed"],[c,h]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,w,[c,h]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[m,"Rotor"],[c,h]],[/android.+(KS(.+))\s+build/i],[w,[m,"Amazon"],[c,h]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[m,w,[c,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,y.lowerize],m,w],[/(android.+)[;\/].+build/i],[w,[m,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[b,[u,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,b],[/rv\:([\w\.]+).*(gecko)/i],[b,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,b],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[b,T.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[b,T.str,S.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],b],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[u,b],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[u,"Symbian"],b],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],b],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[u,b],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],b],[/(sunos)\s?([\w\.]+\d)*/i],[[u,"Solaris"],b],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[u,b],[/(haiku)\s(\w+)/i],[u,b],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[b,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[b,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[u,b]]},E=function(e,r){if("object"==typeof e&&(r=e,e=s),!(this instanceof E))return new E(e,r).getResult();var n=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:o),a=r?y.extend(A,r):A;return this.getBrowser=function(){var i={name:s,version:s};return T.rgx.call(i,n,a.browser),i.major=y.major(i.version),i},this.getCPU=function(){var i={architecture:s};return T.rgx.call(i,n,a.cpu),i},this.getDevice=function(){var i={vendor:s,model:s,type:s};return T.rgx.call(i,n,a.device),i},this.getEngine=function(){var i={name:s,version:s};return T.rgx.call(i,n,a.engine),i},this.getOS=function(){var i={name:s,version:s};return T.rgx.call(i,n,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(i){return n=i,this},this};E.VERSION=e,E.BROWSER={NAME:u,MAJOR:l,VERSION:b},E.CPU={ARCHITECTURE:p},E.DEVICE={MODEL:w,VENDOR:m,TYPE:c,CONSOLE:g,MOBILE:f,SMARTTV:v,TABLET:h,WEARABLE:x,EMBEDDED:k},E.ENGINE={NAME:u,VERSION:b},E.OS={NAME:u,VERSION:b},typeof exports!==a?(typeof module!==a&&module.exports&&(exports=module.exports=E),exports.UAParser=E):typeof define===n&&define.amd?define(function(){return E}):i&&(i.UAParser=E);var N=i&&(i.jQuery||i.Zepto);if(typeof N!==a){var z=new E;N.ua=z.getResult(),N.ua.get=function(){return z.getUA()},N.ua.set=function(i){z.setUA(i);var s=z.getResult();for(var e in s)N.ua[e]=s[e]}}}("object"==typeof window?window:this);