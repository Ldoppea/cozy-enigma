!function(e){function n(n){for(var a,l,r=n[0],s=n[1],d=n[2],u=0,_=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&_.push(i[l][0]),i[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(c&&c(n);_.length;)_.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var s=t[r];0!==i[s]&&(a=!1)}a&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},i={1:0},o=[];function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=n,r=r.slice();for(var d=0;d<r.length;d++)n(r[d]);var c=s;o.push([1,0]),t()}({"/KVF":function(e,n,t){var a={"./en":"7dT6","./en.json":"7dT6","./fr":"9pOX","./fr.json":"9pOX"};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="/KVF"},"/kYV":function(e,n,t){},1:function(e,n,t){t("7NIr"),t("55Il"),e.exports=t("LiWt")},2:function(e,n){},"7dT6":function(e){e.exports=JSON.parse("{}")},"9pOX":function(e){e.exports=JSON.parse("{}")},"G0/2":function(e,n,t){var a={"./en.json":"6wRk","./fr.json":"wNxD"};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="G0/2"},LiWt:function(e,n,t){"use strict";t.r(n);t("/8/d"),t("llna"),t("/kYV");var a=t("q1tI"),i=t.n(a),o=t("EbEg"),l=t("44Ds"),r=t.n(l),s=t("QCzH"),d=t("SH7X"),c=t.n(d),u=t("pZg0"),_=t.n(u),p=function(e,n){return/^\{\{\..*\}\}$/.test(e)?n:e},m=function(e){var n=e.app,a=e.locale,i={appIconDefault:t("ZAKO"),appNamePrefixDefault:_.a.name_prefix,appNameDefault:_.a.name,appLocaleDefault:"en"};return{appName:p(n.name,i.appNameDefault),appNamePrefix:p(n.prefix,i.appNamePrefixDefault),iconPath:p(n.icon,i.appIconDefault),lang:p(a,i.appLocaleDefault)}},f=t("mgfL"),b=t.n(f),x=r()((function(){var e,n,a,i,o=document.querySelector("[role=application]"),l=m(JSON.parse(o.dataset.cozy)),r=l.lang,d=l.appName,u=Object(s.a)(r,(function(e){return t("/KVF")("./".concat(e))})),p=(e=document.querySelector("[role=application]"),n=JSON.parse(e.dataset.cozy),a=window.location.protocol,i="".concat(a,"//").concat(n.domain),new c.a({uri:i,token:n.token,appMetadata:{slug:_.a.name,version:_.a.version},store:!1}));return p.registerPlugin(b.a.plugin),function(e){var n=e.client,t=e.container,a=e.lang,i=e.appName,o=m(JSON.parse(t.dataset.cozy)),l=o.appNamePrefix,r=o.iconPath;cozy.bar.init({appName:i,appNamePrefix:l,cozyClient:n,iconPath:r,lang:a,replaceTitleOnMobile:!1})}({client:p,container:o,lang:r,appName:d}),{container:o,client:p,lang:r,polyglot:u}})),j=t("PRV4"),v=t("o8Rm"),g=t("buk/"),w=t("xIbs"),y=t("1I/2"),h=Object(j.a)({disableGlobal:!0}),E=function(e){var n=e.client,t=e.lang,a=e.polyglot,o=e.children;return i.a.createElement(v.b,{generateClassName:h},i.a.createElement(d.CozyProvider,{client:n},i.a.createElement(g.b,{lang:t,polyglot:a},i.a.createElement(w.a,null,i.a.createElement(y.a,null,o)))))},k=t("CodD"),O=t("QS0n"),N=t("jDpt"),C=t("le8I"),q=t("67rm"),z=function(){var e=Object(g.d)().t;return i.a.createElement(N.b,null,i.a.createElement(N.c,null,i.a.createElement(N.a,null,i.a.createElement(k.b,null))),i.a.createElement(q.a,{t:e}),i.a.createElement(C.a,null))},D=t("J4zp"),P=t.n(D),L=t("aR52"),S=t("zA8p"),T=t("c8ah"),M=t("e5eR"),A=[{type:"question",text:["C'est le jour de ton Cozyversaire ! Afin de fêter ça tu te rends dans le très populaire village de le Cloud pour célébrer avec tes amis qui t'ont préparé un délicieux gâteau. Cependant, les choses ne se déroulent pas comme prévu... Arrivée dans le village, tu t’aperçois que tous les villagois ont été paralysés ! Tu dois donc mener l'enquête afin de les sauver, et surtout pouvoir déguster ta juste récompense… ","Afin de démarrer ton enquête, il te vient à l’esprit que ce village, certes très touristique, n’a en réalité que 4 habitants officiellement déclarés !","Trouve ces l’initiale de ces habitants, et par ordre d’ancienneté, la suite te sera révélée…"],textColor:"black",answers:["JJBA"]},{type:"question",text:["Félicitations, tu es à la hauteur de ta réputation !","Les initiales ainsi trouvées, t’envoient sur la piste d’un Cloud, où l’on travaille certes, mais avant tout chaleureux.","Dans ce Cloud se trouve une Note, qui te permettra de découvrir ce qui a provoqué la paralysie des habitants."],textColor:"black",answers:["chocolat"]},{type:"question",text:["Habile ! Le composant qui a paralysé les pauvres habitants est donc la théobromine, que l’on retrouve principalement dans le chocolat… Tu comprends alors que pour les sauver, il te faudra inverser le processus en leur fournissant un chocolat ayant des molécules de théobromines préservées…","Afin de poursuivre ta quête, la solution de cette charade t’indiquera un lieu où flottent des drapeaux jour et nuit :","- Mon 1er est le surnom du fondateur d’un Cloud personnel","- Mon 2nd est mot tiré d’une expression désignant la supposée dernière fois","- Mon tout est le nom d’un robot d’une célèbre série"],textColor:"black",answers:["bender"]},{type:"question",text:["C’est bien ça ! Rend toi sur bender et découvre ce que les drapeaux te réservent…"],textColor:"black",answers:["avion en papier","avions en papier","avion papier","avions papier","avion de papier","avions de papier","avion","papier","quand les avions en papier ne partent plus au vent"]},{type:"lore",text:["Des avions en papiers, n’est-ce pas… Il semblerait donc que l’auteur de ce forfait inqualifiable aurait pris ce moyen de transport, au demeurant fort polluant ! Le gredin !","Si seulement tu avais un moyen de retrouver de tels déplacement très peu recommandés par l’ADEME… Cela te donnerait certainement l’indication finale pour trouver de quoi sauver les habitants et enfin festoyer pour ton Cozyversaire !"],textColor:"black"},{type:"end"}],R=function(e){var n=e.enigma,t=e.goToNext,o=Object(a.useRef)(),l=Object(a.useState)(!1),r=P()(l,2),s=r[0],d=r[1];return i.a.createElement("div",{style:{backgroundImage:n.background?"url('".concat(n.background,"')"):"",backgroundSize:"cover",backgroundPosition:"center",flex:1}},i.a.createElement("div",{className:"u-flex u-flex-column u-flex-items-center u-m-3"},n.text.map((function(e,t){return i.a.createElement(T.a,{key:t,class:"u-maw-8",style:{color:n.textColor}},e)})),i.a.createElement(S.a,{ref:o,class:"u-m-1",placeholder:"Réponse de l'énigme"}),i.a.createElement(L.a,{label:"Valider",onClick:function(){var e=o.current.value;n.answers.some((function(n){return n.toLowerCase()===e.toLowerCase()}))?(o.current.value="",t()):d(!0)}}),s&&i.a.createElement(M.a,{open:!0,onClose:function(){return d(!1)},title:"Nope",content:'La réponse "'.concat(o.current.value,"\" n'est pas valide")})))},U=function(e){var n=e.enigma;return i.a.createElement("div",{style:{background:n.background?"url(".concat(n.background,")"):"",backgroundSize:"cover",backgroundPosition:"center",flex:1}},i.a.createElement("div",{className:"u-flex u-flex-column u-flex-items-center u-m-3"},n.text.map((function(e,t){return i.a.createElement(T.a,{key:t,class:"u-maw-8",style:{color:n.textColor}},e)}))))},F=function(){var e=Object(a.useState)(0),n=P()(e,2),t=n[0],o=n[1],l=Object(a.useState)(A[0]),r=P()(l,2),s=r[0],d=r[1],c=function(){var e=t+1,n=A[e];o(e),d(n)};return"question"===s.type?i.a.createElement(R,{enigma:s,goToNext:c}):"lore"===s.type?i.a.createElement(U,{enigma:s,goToNext:c}):"end"===s.type?i.a.createElement("div",{className:"u-flex u-flex-column u-flex-items-center u-m-3"},"FIN"):void 0},J=i.a.memo(F),I=function(e){var n=e.Component;return i.a.createElement(i.a.Fragment,null,i.a.createElement(n,null),i.a.createElement(k.b,null))},B=function(){return i.a.createElement(O.a,null,i.a.createElement(k.e,null,i.a.createElement(k.c,{path:"/",element:i.a.createElement(z,null)},i.a.createElement(k.c,{path:"engima",element:i.a.createElement(I,{Component:J})}),i.a.createElement(k.c,{path:"/",element:i.a.createElement(k.a,{replace:!0,to:"/engima"})}),i.a.createElement(k.c,{path:"*",element:i.a.createElement(k.a,{replace:!0,to:"/engima"})}))))};document.addEventListener("DOMContentLoaded",(function(){var e,n,t,a,l;e=x(),n=e.container,t=e.client,a=e.lang,l=e.polyglot,Object(o.createRoot)(n).render(i.a.createElement(E,{client:t,lang:a,polyglot:l},i.a.createElement(B,null)))}))},ZAKO:function(e,n){e.exports="/img/icon.dae5bcb1034f263cb8ee0068fe07ae42.svg"},nw0P:function(e,n,t){var a={"./_lib/build_formatting_tokens_reg_exp/index.js":"kOWh","./ar/build_distance_in_words_locale/index.js":"XxX6","./ar/build_format_locale/index.js":"alis","./ar/index.js":"EDRf","./be/build_distance_in_words_locale/index.js":"LQ09","./be/build_format_locale/index.js":"kj7F","./be/index.js":"YEhR","./bg/build_distance_in_words_locale/index.js":"7K3h","./bg/build_format_locale/index.js":"RrdL","./bg/index.js":"isx8","./ca/build_distance_in_words_locale/index.js":"wqqj","./ca/build_format_locale/index.js":"qcV0","./ca/index.js":"Vwa+","./cs/build_distance_in_words_locale/index.js":"ZKDM","./cs/build_format_locale/index.js":"ipyF","./cs/index.js":"dvhP","./da/build_distance_in_words_locale/index.js":"2Mgc","./da/build_format_locale/index.js":"Gned","./da/index.js":"7ur/","./de/build_distance_in_words_locale/index.js":"5IWf","./de/build_format_locale/index.js":"THCn","./de/index.js":"bgw5","./el/build_distance_in_words_locale/index.js":"o/GB","./el/build_format_locale/index.js":"8T9h","./el/index.js":"dH0v","./en/build_distance_in_words_locale/index.js":"LZbM","./en/build_format_locale/index.js":"6DAA","./en/index.js":"Us+F","./eo/build_distance_in_words_locale/index.js":"qrnn","./eo/build_format_locale/index.js":"Bl15","./eo/index.js":"UB7v","./es/build_distance_in_words_locale/index.js":"GEfZ","./es/build_format_locale/index.js":"O+zC","./es/index.js":"/S0t","./fi/build_distance_in_words_locale/index.js":"VHtQ","./fi/build_format_locale/index.js":"Oydx","./fi/index.js":"ndVD","./fil/build_distance_in_words_locale/index.js":"uq4p","./fil/build_format_locale/index.js":"d7hw","./fil/index.js":"pNfm","./fr/build_distance_in_words_locale/index.js":"IzMR","./fr/build_format_locale/index.js":"I3Zg","./fr/index.js":"LKA2","./hr/build_distance_in_words_locale/index.js":"DPvn","./hr/build_format_locale/index.js":"puw3","./hr/index.js":"L9Jq","./hu/build_distance_in_words_locale/index.js":"w2RQ","./hu/build_format_locale/index.js":"/0iD","./hu/index.js":"Nm+E","./id/build_distance_in_words_locale/index.js":"JbvB","./id/build_format_locale/index.js":"0wlw","./id/index.js":"A6C3","./is/build_distance_in_words_locale/index.js":"qzMC","./is/build_format_locale/index.js":"S3yD","./is/index.js":"N4bE","./it/build_distance_in_words_locale/index.js":"MDEp","./it/build_format_locale/index.js":"aUJd","./it/index.js":"hmb4","./ja/build_distance_in_words_locale/index.js":"nNvt","./ja/build_format_locale/index.js":"buui","./ja/index.js":"uAXs","./ko/build_distance_in_words_locale/index.js":"oEw+","./ko/build_format_locale/index.js":"9SQf","./ko/index.js":"iW8+","./mk/build_distance_in_words_locale/index.js":"nmwZ","./mk/build_format_locale/index.js":"htxJ","./mk/index.js":"GzBU","./nb/build_distance_in_words_locale/index.js":"SL1f","./nb/build_format_locale/index.js":"CJ5F","./nb/index.js":"73vv","./nl/build_distance_in_words_locale/index.js":"Uyu0","./nl/build_format_locale/index.js":"doCD","./nl/index.js":"hCQt","./pl/build_distance_in_words_locale/index.js":"FUBD","./pl/build_format_locale/index.js":"nOYf","./pl/index.js":"B6yL","./pt/build_distance_in_words_locale/index.js":"aTPA","./pt/build_format_locale/index.js":"TTT0","./pt/index.js":"gdks","./ro/build_distance_in_words_locale/index.js":"gI+A","./ro/build_format_locale/index.js":"njjO","./ro/index.js":"r2yp","./ru/build_distance_in_words_locale/index.js":"KmPx","./ru/build_format_locale/index.js":"UUBw","./ru/index.js":"nz/o","./sk/build_distance_in_words_locale/index.js":"q2Bs","./sk/build_format_locale/index.js":"9sxn","./sk/index.js":"Wqan","./sl/build_distance_in_words_locale/index.js":"mlv2","./sl/build_format_locale/index.js":"vHkZ","./sl/index.js":"KYSo","./sr/build_distance_in_words_locale/index.js":"LlkS","./sr/build_format_locale/index.js":"RhjJ","./sr/index.js":"7mU3","./sv/build_distance_in_words_locale/index.js":"UNBN","./sv/build_format_locale/index.js":"zTNB","./sv/index.js":"hxgj","./th/build_distance_in_words_locale/index.js":"XAGa","./th/build_format_locale/index.js":"We2s","./th/index.js":"Pk+z","./tr/build_distance_in_words_locale/index.js":"aFZF","./tr/build_format_locale/index.js":"jh7A","./tr/index.js":"3ZWG","./zh_cn/build_distance_in_words_locale/index.js":"KdB7","./zh_cn/build_format_locale/index.js":"l4EP","./zh_cn/index.js":"8tMq","./zh_tw/build_distance_in_words_locale/index.js":"vyyr","./zh_tw/build_format_locale/index.js":"uYH7","./zh_tw/index.js":"QPlQ"};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="nw0P"},pZg0:function(e,n){e.exports={name:"Enigma",name_prefix:"Cozy",slug:"enigma",icon:"icon.svg",categories:["cozy","konnectors"],type:"webapp",source:"git://github.com/ldoppea/cozy-enigma.git",editor:"Ldoppea",developer:{name:"Ldoppea",url:"https://github.com/Ldoppea"},version:"0.0.1",licence:"AGPL-3.0",permissions:{apps:{description:"Required by the cozy-bar to display the icons of the apps",type:"io.cozy.apps",verbs:["GET","POST","PUT"]},settings:{description:"Required by the cozy-bar to display Claudy and know which applications are coming soon",type:"io.cozy.settings",verbs:["GET"]}},routes:{"/":{folder:"/",index:"index.html",public:!1}},intents:[],services:{}}}});