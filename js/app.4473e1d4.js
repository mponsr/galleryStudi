(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-18dd1bf4":"89290db1","chunk-2d215d02":"04d7d52c","chunk-88941e0e":"d44aca3c"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gallery-studio/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"05f5":function(t,e,n){},"0ebd":function(t,e,n){"use strict";n("05f5")},1135:function(t,e,n){t.exports=n.p+"img/CART.57aab288.jpg"},"269e":function(t,e,n){t.exports=n.p+"img/RT.61268702.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var a=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(r["a"]);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("Menu"),t._v(" "),n("Home"),n("router-view"),n("Footer")],1)])},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"Dark"}},[a("b-navbar-brand",{attrs:{id:"box"}}),a("b-img",{attrs:{alt:"logo",src:n("6e11"),width:"90px",height:"60px"}}),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-container",[a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Home"}},[t._v("Home")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Gallery Collage"}},[t._v("Gallery Collage")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Visit"}},[t._v("Visit")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Contacto"}},[t._v("Contact")])],1)],1)],1)],1)},l=[],c={},u=c,d=(n("0ebd"),n("2877")),p=Object(d["a"])(u,s,l,!1,null,"6fa2603c",null),f=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-alert",{attrs:{show:"",type:"light",variant:"Dark"}},[a("b-img",{attrs:{alt:"logo",src:n("6e11"),width:"100px",height:"70px",align:"center"}}),a("p",{attrs:{align:"center"}},[t._v(" Gallery Studio | Alenjandra Retto y Marta Pons")])],1)},v=[],b={},g=b,h=Object(d["a"])(g,m,v,!1,null,"d311c92a",null),y=h.exports,x={name:"App",components:{Menu:f,Footer:y}},_=x,w=(n("034f"),Object(d["a"])(_,o,i,!1,null,null,null)),j=w.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("b-img",{attrs:{alt:"logo",src:n("6e11"),width:"450px",height:"300px"}}),a("br"),a("br"),a("h1",[t._v("Sea usted bienvenido a la inauguración de Gallery Studio.")]),a("p",[t._v("Una de las nuevas galerias modernas donde se veran expuestas algunas de las obras de Alejandra Retto y Marta Pons mientras estaban cursando en la Universidad de Lleida. ")]),a("p",[t._v("Consulta "),a("b-link",{attrs:{href:"https://www.instagram.com/gallery_studio_/"}},[t._v("Instagram")]),t._v(" para ver más información sobre horarios y fechas. ")],1),a("br"),a("br"),a("br"),a("Diapos"),a("br"),a("br"),a("h1",[t._v("Eventos")]),a("div",[a("br"),a("br"),a("h1",{staticClass:"pb-2"},[a("icons",{attrs:{icon:["fas","award"]}}),t._v(" Próximos Eventos y Exposiciones "),a("icons",{attrs:{icon:["fas","award"]}})],1),a("br"),a("br"),a("p",[t._v(" Noticias e información ")]),a("div",{staticClass:"container-md"},[a("b-card-group",{attrs:{columns:""}},t._l(t.eventos1,(function(t){return a("div",{key:t.id,attrs:{columns:""}},[a("Cards",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])],1)},O=[],P=n("1da1"),S=(n("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[a("b-carousel-slide",{attrs:{caption:"Inauguración Gallery Studio","img-src":n("1135")}}),a("b-carousel-slide",{attrs:{caption:"La nueva marca Gallery Studio","img-src":n("269e")}}),a("b-carousel-slide",{attrs:{caption:"Nueva Línea de Papelería","img-src":n("9d8a")}})],1)],1)}),E=[],G={},M=Object(d["a"])(G,S,E,!1,null,null,null),H=M.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"evento"}},[n("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del evento",variant:"dark",href:t.url}},[t._v("Más información")])],1)],1)},R=[],$={props:["id","autor","titulo","srcimg","alt","texto","url"]},D=$,A=Object(d["a"])(D,T,R,!1,null,"ea192d5e",null),L=A.exports,I="../eventos.json",U={name:"Home",components:{Diapos:H,Cards:L},props:{name:{type:String,default:"Home"}},data:function(){return{eventos1:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(I);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.eventos1=a,console.log(a);case 8:case"end":return e.stop()}}),e)})))()}}},V=U,N=Object(d["a"])(V,k,O,!1,null,null,null),F=N.exports;a["default"].use(C["a"]);var J=[{path:"/",name:"Home",component:F},{path:"/Home",name:"Home",component:F},{path:"/Gallery Collage",name:"Gallery Collage",component:function(){return n.e("chunk-88941e0e").then(n.bind(null,"e560"))}},{path:"/Visit",name:"Visit",component:function(){return n.e("chunk-18dd1bf4").then(n.bind(null,"2f1e"))}},{path:"/Contacto",name:"Contact",component:function(){return n.e("chunk-2d215d02").then(n.bind(null,"c098"))}}],q=new C["a"]({mode:"history",base:"/gallery studio/",routes:J}),z=q,B=n("a584");a["default"].config.productionTip=!1,new a["default"]({router:z,render:function(t){return t(j)}}).$mount("#app"),a["default"].use(B["a"],{config:{id:"G-300707818"}})},"6e11":function(t,e,n){t.exports=n.p+"img/IMG_0387.1b5f7fe9.jpg"},"85ec":function(t,e,n){},"9d8a":function(t,e,n){t.exports=n.p+"img/RTUU.a7b8cc08.jpg"}});
//# sourceMappingURL=app.4473e1d4.js.map