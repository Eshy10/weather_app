!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){},function(t,e,n){"use strict";t.exports=function(t){var e,n,i,a;i=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame,a=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame,i&&a?(e=function(t,e){var n={value:null};return function e(){n.value=i(e),t()}(),n},n=function(t){a(t.value)}):(e=setInterval,n=clearInterval);var o=2*Math.PI,r=2/Math.sqrt(2);function s(t,e,n,i,a){t.beginPath(),t.moveTo(e,n),t.lineTo(i,a),t.stroke()}function c(t,e,n,i,a,r,s,c){var l=Math.cos(e*o);!function(t,e,n,i){t.beginPath(),t.arc(e,n,i,0,o,!1),t.fill()}(t,n-Math.sin(e*o)*a,i+l*r+.5*(c-=s),s+(1-.5*l)*c)}function l(t,e,n,i,a,o,r,s){var l;for(l=5;l--;)c(t,e+l/5,n,i,a,o,r,s)}function u(t,e,n,i,a,o,r){e/=3e4;var s=.21*a,c=.12*a,u=.24*a,d=.28*a;t.fillStyle=r,l(t,e,n,i,s,c,u,d),t.globalCompositeOperation="destination-out",l(t,e,n,i,s,c,u-o,d-o),t.globalCompositeOperation="source-over"}function d(t,e,n,i,a,r,c){e/=12e4;var l,u,d,h,m=.25*a-.5*r,p=.32*a+.5*r,f=.5*a-.5*r;for(t.strokeStyle=c,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.arc(n,i,m,0,o,!1),t.stroke(),l=8;l--;)u=(e+l/8)*o,s(t,n+(d=Math.cos(u))*p,i+(h=Math.sin(u))*p,n+d*f,i+h*f)}function h(t,e,n,i,a,s,c){e/=15e3;var l=.29*a-.5*s,u=.05*a,d=Math.cos(e*o),h=d*o/-16;t.strokeStyle=c,t.lineWidth=s,t.lineCap="round",t.lineJoin="round",n+=d*u,t.beginPath(),t.arc(n,i,l,h+o/8,h+7*o/8,!1),t.arc(n+Math.cos(h)*l*r,i+Math.sin(h)*l*r,l,h+5*o/8,h+3*o/8,!0),t.closePath(),t.stroke()}var m=[[-.75,-.18,-.7219,-.1527,-.6971,-.1225,-.6739,-.091,-.6516,-.0588,-.6298,-.0262,-.6083,.0065,-.5868,.0396,-.5643,.0731,-.5372,.1041,-.5033,.1259,-.4662,.1406,-.4275,.1493,-.3881,.153,-.3487,.1526,-.3095,.1488,-.2708,.1421,-.2319,.1342,-.1943,.1217,-.16,.1025,-.129,.0785,-.1012,.0509,-.0764,.0206,-.0547,-.012,-.0378,-.0472,-.0324,-.0857,-.0389,-.1241,-.0546,-.1599,-.0814,-.1876,-.1193,-.1964,-.1582,-.1935,-.1931,-.1769,-.2157,-.1453,-.229,-.1085,-.2327,-.0697,-.224,-.0317,-.2064,.0033,-.1853,.0362,-.1613,.0672,-.135,.0961,-.1051,.1213,-.0706,.1397,-.0332,.1512,.0053,.158,.0442,.1624,.0833,.1636,.1224,.1615,.1613,.1565,.1999,.15,.2378,.1402,.2749,.1279,.3118,.1147,.3487,.1015,.3858,.0892,.4236,.0787,.4621,.0715,.5012,.0702,.5398,.0766,.5768,.089,.6123,.1055,.6466,.1244,.6805,.144,.7147,.163,.75,.18],[-.75,0,-.7033,.0195,-.6569,.0399,-.6104,.06,-.5634,.0789,-.5155,.0954,-.4667,.1089,-.4174,.1206,-.3676,.1299,-.3174,.1365,-.2669,.1398,-.2162,.1391,-.1658,.1347,-.1157,.1271,-.0661,.1169,-.017,.1046,.0316,.0903,.0791,.0728,.1259,.0534,.1723,.0331,.2188,.0129,.2656,-.0064,.3122,-.0263,.3586,-.0466,.4052,-.0665,.4525,-.0847,.5007,-.1002,.5497,-.113,.5991,-.124,.6491,-.1325,.6994,-.138,.75,-.14]],p=[{start:.36,end:.11},{start:.56,end:.16}];function f(t,e,n,i,a,r,s,c,l){var u,d,h,f,v=m[s],y=((e/=2500)+s-p[s].start)%c,g=(e+s-p[s].end)%c,b=(e+s)%c;if(t.strokeStyle=l,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",y<1){if(t.beginPath(),y*=v.length/2-1,y-=u=Math.floor(y),u*=2,u+=2,t.moveTo(n+(v[u-2]*(1-y)+v[u]*y)*a,i+(v[u-1]*(1-y)+v[u+1]*y)*a),g<1){for(g*=v.length/2-1,g-=d=Math.floor(g),d*=2,d+=2,f=u;f!==d;f+=2)t.lineTo(n+v[f]*a,i+v[f+1]*a);t.lineTo(n+(v[d-2]*(1-g)+v[d]*g)*a,i+(v[d-1]*(1-g)+v[d+1]*g)*a)}else for(f=u;f!==v.length;f+=2)t.lineTo(n+v[f]*a,i+v[f+1]*a);t.stroke()}else if(g<1){for(t.beginPath(),g*=v.length/2-1,g-=d=Math.floor(g),d*=2,d+=2,t.moveTo(n+v[0]*a,i+v[1]*a),f=2;f!==d;f+=2)t.lineTo(n+v[f]*a,i+v[f+1]*a);t.lineTo(n+(v[d-2]*(1-g)+v[d]*g)*a,i+(v[d-1]*(1-g)+v[d+1]*g)*a),t.stroke()}b<1&&(b*=v.length/2-1,b-=h=Math.floor(b),h*=2,function(t,e,n,i,a,r,s){var c=a/8,l=c/3,u=2*l,d=e%1*o,h=Math.cos(d),m=Math.sin(d);t.fillStyle=s,t.strokeStyle=s,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.arc(n,i,c,d,d+Math.PI,!1),t.arc(n-l*h,i-l*m,u,d+Math.PI,d,!1),t.arc(n+u*h,i+u*m,l,d+Math.PI,d,!0),t.globalCompositeOperation="destination-out",t.fill(),t.globalCompositeOperation="source-over",t.stroke()}(t,e,n+(v[(h+=2)-2]*(1-b)+v[h]*b)*a,i+(v[h-1]*(1-b)+v[h+1]*b)*a,a,r,l))}var v=function(t){this.list=[],this.interval=null,this.color=t&&t.color?t.color:"black",this.resizeClear=!(!t||!t.resizeClear)};return v.CLEAR_DAY=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);d(t,e,.5*i,.5*a,o,.08*o,n)},v.CLEAR_NIGHT=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);h(t,e,.5*i,.5*a,o,.08*o,n)},v.PARTLY_CLOUDY_DAY=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);d(t,e,.625*i,.375*a,.75*o,.08*o,n),u(t,e,.375*i,.625*a,.75*o,.08*o,n)},v.PARTLY_CLOUDY_NIGHT=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);h(t,e,.667*i,.375*a,.75*o,.08*o,n),u(t,e,.375*i,.625*a,.75*o,.08*o,n)},v.CLOUDY=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);u(t,e,.5*i,.5*a,o,.08*o,n)},v.RAIN=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,r=Math.min(i,a);!function(t,e,n,i,a,r,s){e/=1350;var c,l,u,d,h=.16*a,m=11*o/12,p=7*o/12;for(t.fillStyle=s,c=4;c--;)u=n+(c-1.5)/1.5*(1===c||2===c?-1:1)*h,d=i+(l=(e+c/4)%1)*l*a,t.beginPath(),t.moveTo(u,d-1.5*r),t.arc(u,d,.75*r,m,p,!1),t.fill()}(t,e,.5*i,.37*a,.9*r,.08*r,n),u(t,e,.5*i,.37*a,.9*r,.08*r,n)},v.SLEET=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);!function(t,e,n,i,a,o,r){e/=750;var c,l,u,d,h=.1875*a;for(t.strokeStyle=r,t.lineWidth=.5*o,t.lineCap="round",t.lineJoin="round",c=4;c--;)l=(e+c/4)%1,s(t,u=Math.floor(n+(c-1.5)/1.5*(1===c||2===c?-1:1)*h)+.5,(d=i+l*a)-1.5*o,u,d+1.5*o)}(t,e,.5*i,.37*a,.9*o,.08*o,n),u(t,e,.5*i,.37*a,.9*o,.08*o,n)},v.SNOW=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,r=Math.min(i,a);!function(t,e,n,i,a,r,c){var l,u,d,h,m=.16*a,p=.75*r,f=(e/=3e3)*o*.7,v=Math.cos(f)*p,y=Math.sin(f)*p,g=f+o/3,b=Math.cos(g)*p,w=Math.sin(g)*p,M=f+2*o/3,C=Math.cos(M)*p,S=Math.sin(M)*p;for(t.strokeStyle=c,t.lineWidth=.5*r,t.lineCap="round",t.lineJoin="round",l=4;l--;)u=(e+l/4)%1,s(t,(d=n+Math.sin((u+l/4)*o)*m)-v,(h=i+u*a)-y,d+v,h+y),s(t,d-b,h-w,d+b,h+w),s(t,d-C,h-S,d+C,h+S)}(t,e,.5*i,.37*a,.9*r,.08*r,n),u(t,e,.5*i,.37*a,.9*r,.08*r,n)},v.WIND=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,o=Math.min(i,a);f(t,e,.5*i,.5*a,o,.08*o,0,2,n),f(t,e,.5*i,.5*a,o,.08*o,1,2,n)},v.FOG=function(t,e,n){var i=t.canvas.width,a=t.canvas.height,r=Math.min(i,a),c=.08*r;!function(t,e,n,i,a,o,r){e/=3e4;var s=.21*a,c=.06*a,u=.21*a,d=.28*a;t.fillStyle=r,l(t,e,n,i,s,c,u,d),t.globalCompositeOperation="destination-out",l(t,e,n,i,s,c,u-o,d-o),t.globalCompositeOperation="source-over"}(t,e,.5*i,.32*a,.75*r,c,n),e/=5e3;var u=Math.cos(e*o)*r*.02,d=Math.cos((e+.25)*o)*r*.02,h=Math.cos((e+.5)*o)*r*.02,m=Math.cos((e+.75)*o)*r*.02,p=.936*a,f=Math.floor(p-.5*c)+.5,v=Math.floor(p-2.5*c)+.5;t.strokeStyle=n,t.lineWidth=c,t.lineCap="round",t.lineJoin="round",s(t,u+.2*i+.5*c,f,d+.8*i-.5*c,f),s(t,h+.2*i+.5*c,v,m+.8*i-.5*c,v)},v.prototype={_determineDrawingFunction:function(t){return"string"==typeof t&&(t=v[t.toUpperCase().replace(/-/g,"_")]||null),t},add:function(t,e){var n;"string"==typeof t&&(t=document.getElementById(t)),null!==t&&"function"==typeof(e=this._determineDrawingFunction(e))&&(n={element:t,context:t.getContext("2d"),drawing:e},this.list.push(n),this.draw(n,500))},set:function(t,e){var n;for("string"==typeof t&&(t=document.getElementById(t)),n=this.list.length;n--;)if(this.list[n].element===t)return this.list[n].drawing=this._determineDrawingFunction(e),void this.draw(this.list[n],500);this.add(t,e)},remove:function(t){var e;for("string"==typeof t&&(t=document.getElementById(t)),e=this.list.length;e--;)if(this.list[e].element===t)return void this.list.splice(e,1)},draw:function(t,e){var n=t.context.canvas;this.resizeClear?n.width=n.width:t.context.clearRect(0,0,n.width,n.height),t.drawing(t.context,e,this.color)},play:function(){var t=this;this.pause(),this.interval=e((function(){var e,n=Date.now();for(e=t.list.length;e--;)t.draw(t.list[e],n)}),1e3/60)},pause:function(){this.interval&&(n(this.interval),this.interval=null)}},v}},,function(t,e,n){"use strict";n.r(e),n.d(e,"weather",(function(){return c}));n(0);var i=(()=>{const t=document.createElement("nav"),e=document.createElement("ul");return e.classList.add("nav-items"),e.innerHTML='\n<li class="logo">Weather App</li>\n<li class="dark-mode-switch">\n        <label class="switch-label" for="dark-mode-switch">Dark mode</label>\n        <label class="switch">\n            <input type="checkbox" id="dark-mode-switch">\n            <span class="slider round"></span>\n</li>\n',t.appendChild(e),t})();var a=(()=>{const t=document.createElement("form");t.classList.add("form");const e=document.createElement("input");e.setAttribute("class","form__input"),e.setAttribute("type","text"),e.setAttribute("placeholder","Enter City...");const n=document.createElement("button");return n.setAttribute("class","button"),n.setAttribute("type","submit"),n.textContent="SEARCH",t.appendChild(e),t.appendChild(n),t})();var o=(()=>{const t=document.createElement("div");t.classList.add("tabcontent");const e=document.createElement("div");e.classList.add("icon");const n=document.createElement("canvas");n.setAttribute("id","icon"),n.setAttribute("width","100"),n.setAttribute("height","100"),e.appendChild(n);const i=document.createElement("div");return i.classList.add("weather-info"),t.appendChild(e),t.appendChild(i),t})();const r=n(1)(window),s=document.querySelector("#container");s.appendChild(i),s.appendChild(a),s.appendChild(o);const c={temperature:{unit:"celsius"}},l=document.querySelector("#dark-mode-switch"),u=document.querySelector(".form__input"),d=document.querySelector(".form"),h=document.querySelector(".weather-info"),m=new r({color:"#21268b"});m.set("icon","clear_day"),m.play(),d.addEventListener("submit",t=>{t.preventDefault();let e=u.value;if(!e)return;!async function(t){try{const e=await fetch(t),n=await e.json();c.temperature.value=Math.floor(n.main.temp),c.description=n.weather[0].description,c.iconId=n.weather[0].icon,c.city=n.name,c.country=n.sys.country,p(n)}catch(t){h.style.display="block",h.innerHTML="Please enter a valid city 🙄"}}(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=3c8e19a35c7b3df5adebf12517690280&units=metric`),d.reset(),h.innerHTML=""});const p=t=>{h.style.display="block",h.innerHTML=`\n    <h3 class="temperature">${c.temperature.value}<span>C</span></h3>\n    <h5 class="description">${c.description}</h5>\n    <p class="city">${c.city}, ${c.country}</p>\n    `,(()=>{const t=document.querySelector(".temperature");t.addEventListener("click",(function(){if("celsius"==c.temperature.unit){let e=9*c.temperature.value/5+32;e=Math.floor(e),t.innerHTML=e+"°<span>F</span>",c.temperature.unit="fahrenheit"}else t.innerHTML=c.temperature.value+"°<span>C</span>",c.temperature.unit="celsius"}))})(),"Clouds"===t.weather[0].main?(m.set("icon","cloudy"),m.play()):"Rain"===t.weather[0].main?(m.set("icon","rain"),m.play()):"01n"===t.weather[0].icon?(m.set("icon","clear_night"),m.play()):"01d"===t.weather[0].icon?(m.set("icon","clear_day"),m.play()):"Snow"===t.weather[0].main?(m.set("icon","snow"),m.play()):"Wind"===t.weather[0].icon?(m.set("icon","wind"),m.play()):(m.set("icon","clear_day"),m.play())};l.addEventListener("change",()=>{document.querySelector("body").classList.toggle("darkmode"),localStorage.setItem("jstabs-darkmode",JSON.stringify(f))});let f=JSON.parse(localStorage.getItem("jstabs-darkmode"));f&&(document.querySelector("body").classList.add("darkmode"),document.querySelector("#dark-mode-switch").checked="checked")}]);