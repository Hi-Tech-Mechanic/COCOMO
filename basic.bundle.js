(()=>{var e={776:()=>{const e=document.getElementsByClassName("background-video")[0],t=document.getElementById("light-bulb"),n=t.children[0],o=t.children[1];let r=!1;function i(e){return new Promise(((t,n)=>{const o=new Image;o.src=e,o.onload=()=>t(o),o.onerror=()=>n(new Error(`Failed to load image at ${e}`))}))}i("./images/light-bulb-2.png"),i("./images/active-light-bulb-2.png"),t.addEventListener("click",(function(){r?(n.style.display="none",o.src="./images/light-bulb-2.png",e.style.display="none"):(n.style.display="block",o.src="./images/active-light-bulb-2.png",e.style.display="block"),r=!r}))},484:()=>{const e=document.getElementById("KiloOfSourceLineOfCode");e.addEventListener("input",i);const t=document.getElementById("ProjectType");t.addEventListener("change",i);const n=document.getElementById("time-at-month"),o=document.getElementById("people-month"),r=document.getElementById("employees");function i(){let i;switch(t.value){case"Organic":i=function(e){const t=2.4*Math.pow(e,1.05);return{effort:t,time:2.5*Math.pow(t,.38)}}(e.value);break;case"Semidetached":i=function(e){const t=3*Math.pow(e,1.12);return{effort:t,time:2.5*Math.pow(t,.35)}}(e.value);break;case"Embedded":i=function(e){const t=3.6*Math.pow(e,1.2);return{effort:t,time:2.5*Math.pow(t,.32)}}(e.value)}n.textContent=Number(i.time.toFixed(2)),o.textContent=Number(i.effort.toFixed(2)),r.textContent=(i.effort/i.time).toFixed(2)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(484),n(776)})()})();