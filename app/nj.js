!function(){function t(t){return t&&t.__esModule?t.default:t}let e;function o(t){return Array.isArray(t)?t:[t]}function i(t,e=document){t=o(t);for(const o of t){const t=e.querySelector(o);if(t)return t}return null}function n(t,e=document){t=o(t);const i=[];for(const o of t){const t=e.querySelectorAll(o);for(const e of t)i.includes(e)||i.push(e)}return i}(()=>{const t="app",o="production",i=!1;if(e=globalThis.app,e)return;const n={name:t,env:o},r=function t(e){const o=e===n,r=o&&i,l={},c=t=>Object.assign(e,t);return new Proxy(e,{get:function(i,n){if("assign"===n)return c;if(!(n in e)){if(e[n]={},o){const t=a.bind(null,"log",n,!1),o=a.bind(null,"log",n,!0),i=a.bind(null,"warn",n,!1),r=a.bind(null,"warn",n,!0),l=a.bind(null,"error",n,!1),c=a.bind(null,"error",n,!0),d=s.bind(null,n);Object.defineProperties(e[n],{log:{get:()=>t},logDev:{get:()=>o},warn:{get:()=>i},warnDev:{get:()=>r},error:{get:()=>l},errorDev:{get:()=>c},Error:{get:()=>d}})}l[n]=t(e[n]),r&&(globalThis[n]=e[n])}return n in l?l[n]:e[n]},set:function(t,o,i){return e[o]=i,l[o]=i,r&&(globalThis[o]=e[o]),!0}})}(n);function a(t,e,o,...i){if(o)return;const[n,r,a]=l(e);console[t](`%c[${e}]`,`color: rgb(${n}, ${r}, ${a})`,...i)}function s(t,e,...o){return o.length>0&&a("error",t,!1,e,...o),new Error(`[${t}] ${e}`)}function l(t){let e=0;t.split("").forEach(((o,i)=>{e=t.charCodeAt(i)+((e<<5)-e)}));const o=(16711680&e)>>16,i=(65280&e)>>8,n=255&e;return o+i+n<300?l(`$${t}`):[o,i,n]}globalThis.app=r,e=r})();const r=36e5,a=864e5;var s={SECOND:1e3,MINUTE:6e4,HOUR:r,DAY:a,WEEK:6048e5,MONTH:26784e5,weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]};function l(t){try{return JSON.parse(t)}catch(t){return null}}var c={createName:function(t,e){return`${t}|${JSON.stringify(e)}`},getName:d,getParams:function(){return l(window.self.name.split("|")[1])||{}},isIframe:function(t=null){return window.self!==parent&&(!t||d()===t)}};function d(){return window.self.name.split("|")[0]||null}const p={get:function(t,e){if(!this._supported())return e;const o=localStorage.getItem(t);if(null==o)return e;if("true"===o)return!0;if("false"===o)return!1;if(o.startsWith("[")||o.startsWith("{"))return JSON.parse(o);const i=Number(o);return Number.isNaN(i)?o:i},set:function(t,e){if(this._supported())try{"string"==typeof e?localStorage.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}catch(o){console.error("local-storage-json: failed to set",{key:t,value:e,details:o})}},has:function(t){return!!this._supported()&&t in localStorage},remove:function(t){this._supported()&&localStorage.removeItem(t)},_supported:function(){return"undefined"!=typeof window&&!!window.localStorage}};var u={unique:function(t){return Array.from(new Set(t))},gaussian:h,gaussianInt:function(t,e){return Math.round(t+h()*(e-t))},forceLayout:function(){document.body.getBoundingClientRect()},hashCode:g,pseudorandom:function(t){return 16807*Math.max(Math.abs(g(t)),1)%2147483647/2147483646},rotate:function(t,e=1){const o="slashed.io";let i="";return Array.from(t).forEach(((t,n)=>{const r=o[n%o.length].charCodeAt(),a=(t.charCodeAt()+e*r+65536)%65536;i+=String.fromCharCode(a)})),i},getUnixTime:function(){return Math.round(Date.now()/1e3)},takeBetween:function(t,e,o){const i=t.split(e)[1];if(!i)return null;return i.split(o)[0]||null},takeAllBetween:function(t,e,o){return t.split(e).slice(1).map((t=>t.split(o)[0]))},capitalize:function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()},getIntegralNumberPart:function(t){const e=Math.abs(t);return t>0?Math.floor(e):-Math.floor(e)},getFractalNumberPart:function(t){const e=Math.abs(t);return Number((e-Math.floor(e)).toFixed(12))}};function h(){let t=0;for(let e=0;e<6;e+=1)t+=Math.random();return t/6}function g(t){if(!t)return 0;let e,o,i=0;if(0===t.length)return i;for(e=0;e<t.length;e++)o=t.charCodeAt(e),i=(i<<5)-i+o,i|=0;return i}var f=document.documentElement;async function m(t,e=null){let o,i;return"number"==typeof e?(o=e,i=100):e?(o=e.timeout||3e4,i=e.frequency||100):(o=3e4,i=100),new Promise(((e,n)=>{const r=t();if(r)return void e(r);const a=setInterval((()=>{const o=t();o&&(clearInterval(a),e(o))}),i);setTimeout((()=>{clearInterval(a),e(null)}),o)}))}function y(t,e){return v(e)||(e=JSON.stringify(e)),`${encodeURIComponent(t)}=${encodeURIComponent(e)}`}function v(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t}function b(t,e){if(t[0]!==e[0])return!1;const o=Math.min(t.length,e.length);if(0===o)return"";const i=t.substr(0,o);return i===e.substr(0,o)?i:b(t.substr(0,o-1),e.substr(0,o-1))}function _(t){return t.toLowerCase().replace(/[ .,?!\-—–+=_%:;$#@/{}()]/g,"")}var x=Object.assign((function(t,e={}){document.addEventListener("click",t,e)}),{off:function(t,e={}){document.removeEventListener("click",t,e)}});function P(){const t=[];return Object.assign(e,{handle:function(t){if("function"!=typeof t)return void console.error("function is expected");e(t)},clear:function(){t.length=0},off:function(e){const o=t.indexOf(e);-1!==o&&t.splice(o,1)},isEmpty:function(){return 0===t.length}});function e(...e){"function"==typeof e[0]?t.push(e[0]):t.forEach((t=>t(...e)))}}var w=Object.assign((function(t,e=!1){0===C.length&&(S=new MutationObserver((t=>{for(const e of C){S.disconnect();try{e(t)}catch(t){console.error("onDocMutations",t)}if(!S)return;S.observe(document.documentElement,{attributes:!0,childList:!0,subtree:!0})}})),S.observe(document.documentElement,{attributes:!0,childList:!0,subtree:!0}));C.push(t),e&&t()}),{off:function(t){const e=C.indexOf(t);if(-1===e)return;C.splice(e,1),0===C.length&&(S.disconnect(),S=null)}});const C=[];let S;function $(t,...e){let i=0;return t.join("###").split(",").join("\n,\n").split("{").join("\n{").split("\n").map((t=>{if(!t.includes("###"))return t;const n=o(e[i]).map((e=>t.split("###").join(e))).join(",\n");return i+=1,n})).join("\n").split(";").join(" !important;").replace(/!important\s*!important/g,"!important")}function M(...t){const e=$(...t);document.head.insertAdjacentHTML("afterbegin",e)}function k(...t){const e=$(...t).split("!important").join("");document.head.insertAdjacentHTML("afterbegin",e)}var T={init:function(t){if(!t)return;if(t[I])return;t[I]=!0;let e=!1;t.addEventListener("mouseleave",(()=>{e=!1})),t.addEventListener("mousewheel",(o=>{o.deltaX&&(e=!0),e||(o.preventDefault(),t.scrollLeft+=o.deltaY)}))}};const I=Symbol("handled");const{$utils:A}=app;Object.assign(A,{$:i,$$:n,ls:p,safe:function(t,e=null){try{const o=t();return o instanceof Promise?new Promise(((t,i)=>{o.then(t).catch((o=>{o&&console.error(o),t(e)}))})):o}catch(t){return console.error(t),e}},sleep:async function(t){if("number"==typeof t&&Number.isFinite(t)){const e=t;await new Promise((t=>setTimeout(t,e)))}else{if(!t||"object"!=typeof t||t.constructor!==Object)throw new Error("unexpected sleep function argument: number or object expected, got",t);{const{min:e,max:o}=t.longBreak&&Math.random()<1-Math.pow(.5,1/t.longBreak.every)?{min:0,max:0,...t.longBreak}:{min:0,max:0,...t},i=o-e,n=e+u.gaussianInt(0,i);if(0===n)return;await new Promise((t=>setTimeout(t,n)))}}},docElem:f,waitFor:m,createUrl:function(t,e={}){const o=function(t){return Object.keys(t).map((e=>{const o=t[e];return v(o)?y(e,o):Array.isArray(o)?o.map((t=>y(e,t))).join("&"):null})).filter(Boolean).join("&").replace(/%5B/g,"[").replace(/%5D/g,"]")}(e);return o?`${t}?${o}`:t},setCookie:function(t,e){document.cookie=`${t}=${e}; path=/`},fuzzyCheck:function(t,e,o=1){if(t=_(t),""===(e=_(e)))return!0;for(;t.length>0;){const i=b(t,e);if(i.length>=o||i.length>0&&e.length<o){if(t=t.substr(i.length),""===(e=e.substr(i.length)))return!0}else t=t.substr(1)}return!1},onDocClick:x,iframeUtils:c,createEmitter:P,onDocMutations:w,safeJsonParse:l,removeFromArray:function(t,e){let o;o="function"==typeof e?t.findIndex(e):t.indexOf(e),-1!==o&&t.splice(o,1)},insertMultistyle:M,loadVideoMetadata:async function(t){const e="string"==typeof t?t:URL.createObjectURL(t),o=document.createElement("video");o.src=e,o.muted=!0,o.volume=0,o.preload="metadata",o.play();const i={};return await new Promise(((t,e)=>{o.addEventListener("loadedmetadata",(async()=>{await m((()=>o.webkitAudioDecodedByteCount),100),i.width=o.videoWidth,i.height=o.videoHeight,i.ratio=o.videoWidth/o.videoHeight,i.duration=o.duration,i.hasAudio=o.webkitAudioDecodedByteCount>0,t()})),o.addEventListener("error",(()=>{e(o.error)}))})),o.remove(),i},waitForDocumentReady:async function(){await m((()=>document.body))},smartHorizontalScroll:T,createResolvablePromise:function(){let t=null,e=null;const o=new Promise(((o,i)=>{t=o,e=i}));return o.__defineGetter__("resolve",(()=>t)),o.__defineGetter__("reject",(()=>e)),o},time:s,iframe:c});var D={},R={},E={},B={},L=1;B={nextValue:function(){return(L=(9301*L+49297)%233280)/233280},seed:function(t){L=t}};var F,O,H,V="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function N(){H=!1}function z(t){if(t){if(t!==F){if(t.length!==V.length)throw new Error("Custom alphabet for shortid must be "+V.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,o){return e!==o.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+V.length+" unique characters. These characters were not unique: "+e.join(", "));F=t,N()}}else F!==V&&(F=V,N())}function j(){return H||(H=function(){F||z(V);for(var t,e=F.split(""),o=[],i=B.nextValue();e.length>0;)i=B.nextValue(),t=Math.floor(i*e.length),o.push(e.splice(t,1)[0]);return o.join("")}())}E={get:function(){return F||V},characters:function(t){return z(t),F},seed:function(t){B.seed(t),O!==t&&(N(),O=t)},lookup:function(t){return j()[t]},shuffled:j};var U="object"==typeof window&&(window.crypto||window.msCrypto),G=U&&U.getRandomValues?function(t){return U.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],o=0;o<t;o++)e.push(Math.floor(256*Math.random()));return e},W=function(t,e,o){for(var i=(2<<Math.log(e.length-1)/Math.LN2)-1,n=-~(1.6*i*o/e.length),r="";;)for(var a=t(n),s=n;s--;)if((r+=e[a[s]&i]||"").length===+o)return r};var q,Y,X=function(t){for(var e,o=0,i="";!e;)i+=W(G,E.get(),1),e=t<Math.pow(16,o+1),o++;return i};var Q=function(t){var e="",o=Math.floor(.001*(Date.now()-1567752802062));return o===Y?q++:(q=0,Y=o),e+=X(7),e+=X(t),q>0&&(e+=X(q)),e+=X(o)};var K,Z=function(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+E.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)},J=!1;var tt=(J||(J=!0,K={},K=0),K||0);function et(){return Q(tt)}var ot=et;(R=et).generate=ot;var it=function(t){return E.seed(t),R};R.seed=it;var nt=function(t){return tt=t,R};R.worker=nt;var rt=function(t){return void 0!==t&&E.characters(t),E.shuffled()};R.characters=rt;var at=Z;R.isValid=at,D=R;const{$bus:st,$iframeBus:lt}=app;lt.assign({init:function(){st.on("iframe-bus",((t,...e)=>mt(t,...e))),ht("chrome-bus",((t,...e)=>st.send(t,...e)))},on:ht,once:gt,off:ft,send:mt,wait:async function(t){return await new Promise((e=>{gt(t,e)}))}});const ct="__iframeBus.name",dt="__iframeBus.args",pt="__iframeBus.callbackId",ut="undefined"!=typeof parent&&parent!==window;function ht(t,e){const o=yt(t),i=e["__iframeBus.handlers"]||(e["__iframeBus.handlers"]={});i[t]=async i=>{if(i.data["__iframeBus.name"]===o){const o=i.data["__iframeBus.args"]||[],n=i.data["__iframeBus.callbackId"]||null,r=await e(...o);n&&mt(`${t}:response-${n}`,r)}},window.addEventListener("message",i[t])}function gt(t,e){ht(t,(function o(...i){return ft(t,o),e(...i)}))}function ft(t,e){const o=e["__iframeBus.handlers"]||(e["__iframeBus.handlers"]={});window.removeEventListener("message",o[t])}async function mt(t,...e){let o;const i=e[e.length-1];"function"==typeof i?(o=i,e=e.slice(0,-1)):o=null;const r=t.includes(":response-"),a=yt(t),s=r?null:D.generate();if(ut?parent.postMessage({[ct]:a,[dt]:e,[pt]:s},"*"):n("iframe").forEach((t=>{t.contentWindow.postMessage({[ct]:a,[dt]:e,[pt]:s},"*")})),!r)return new Promise((e=>{const i=n=>{o&&o(n),ft(`${t}:response-${s}`,i),e(n)};ht(`${t}:response-${s}`,i)}))}function yt(t){return`iframe-bus.${t}`}var vt={selectors:{dark:["html._aa4d"],topNav:[".PolarisNavigation > .PolarisDesktopNav",".PolarisDirectShell_DEPRECATED > .PolarisDesktopNav",".PolarisDesktopNav._acum"],newPostMenuItem:[".XrOey:nth-child(3)",".PolarisDesktopNav._acut:nth-child(3)"],newPostButton:[".ctQZg button",".PolarisCreationIcon button",".PolarisNavigation .PolarisCreationNavItem a"],modalWindow:['[role="dialog"]'],modalTitle:[".Yx5HN h1",".IGDSDialog h1 > div"],creationBody:[".uYzeu","._ac2r",".PolarisCreationModalBodyV2.x6ql1ns",".IGDSBox + .PolarisCreationModalBodyV2:nth-child(2)"],creationBodyRight:[".IJeHu > div > div",".PolarisCreationModalBodyV2._ac2v",".PolarisCreationModalBodyV2.x1f4304s"],creationDndBody:["._C8iK > .YBx95",".Dh40d",'._ac2t > .PolarisIGCoreBox[style*="height: 100%"]','.PolarisCreationModalBodyV2 > div[style*="height: 100%"]'],creationDndText:["._C8iK > .YBx95 h2",".Yx5HN .Dh40d h2",'._ac2t svg[height="77"] + .PolarisIGCoreBox h2'],creationDndIcon:["._C8iK > .YBx95 svg",".Yx5HN .Dh40d svg","._ac2t > .PolarisIGCoreBox svg"],creationLoadingBar:['._ac2r .PolarisCreationLoadingBar[data-visualcompletion="loading-state"]'],creationRatioToggler:[".czW__ > div:first-child .RJJyf > button",".PolarisCreationMediaPreviewV2 > div:first-child div:not([class]) button"],creationRatioOptionVertical:[".YAPUk button:nth-of-type(3)",".PolarisCreationMediaPopover > button:nth-of-type(3)",'.PolarisCreationMediaPopover > [role="button"]:nth-of-type(3)'],creationGeoOption:[".brfp7 div:not([class])","div.PolarisCreationLocationInput"],creationAccessibilityDropdown:[":not(.n6uTB) + .n6uTB",".PolarisCreationModalComposeSettingsContent > div:not([class]) + .PolarisCreationModalComposeExpandInput"],creationAdvancedDropdown:".n6uTB + .n6uTB",creationDropdown:[".PolarisCreationModalComposeSettingsContent > div:not([class]) ~ .PolarisCreationModalComposeExpandInput"],creationBottomHr:[".W4P49",".PolarisCreationModalComposeSettingsContent hr"],creationNextButton:[".WaOAr .yWX7d","div.PolarisIGCoreModalHeader:last-child button","div.PolarisIGCoreModalHeader:last-child .Pressable"],creationPublishingSpinnerContainerWrap:['._ac2t > .PolarisIGCoreBox[style*="width: 100%"]'],creationPublishingSpinnerContainer:['div[style*="height: 96px"][style*="width: 96px"]'],creationPublishingSpinner:['img[src*="creation/spinner"]','div[style*="height: 96px"][style*="width: 96px"] img[src*=".gif"]'],creationCarouselAddMediaButton:[".czW__ > .Xf6Yq",".PolarisCreationMediaPreviewV2 > ._abck div:not([class])"],uploadForm:[".BaseDialog form.PolarisImageFileForm"],followSuggestionList:[".PolarisFeedSidebar:first-child + div .PolarisIGVirtualList > div"]},controller:{init:function(){}}};const{$utils:bt,$analytics:_t}=app;vt.suggestionController={init:function(){this._state=this._readState(),this._createSuggestion(),this._injectStyles()},_readState:function(){return bt.ls.get("inssist.hrpSuggestion",{showCount:0,clicked:!1})},_transaction:function(t){t(this._state),bt.ls.set("inssist.hrpSuggestion",this._state)},_shouldShow:function(){return this._state.showCount<6&&!this._state.clicked},_createSuggestion:function(){if(!this._shouldShow())return;const t=Symbol("handled");bt.onDocMutations((()=>{const e=bt.$(vt.selectors.followSuggestionList);if(!e)return;if(e[t])return;e[t]=!0;const o=this._renderSuggestion();e.insertAdjacentHTML("afterbegin",o),_t.controller.sendEvent("user","harpa-suggestion:show"),0===this._state.showCount&&_t.controller.sendEvent("user","harpa-suggestion:show-unique"),this._transaction((t=>t.showCount+=1));bt.$(".Suggestion").addEventListener("click",(t=>{this._transaction((t=>t.clicked=!0)),_t.controller.sendEvent("user","harpa-suggestion:click")}))}))},_renderSuggestion:function(){return`\n      <a class="Suggestion" target="_blank" href="https://harpa.ai/case/chatgpt-for-instagram">\n        <img class="Suggestion__avatar" src="${window.inssist.url("/img/harpa-avatar.png")}"/>\n        <div class="Suggestion__body">\n          <div class="Suggestion__title">HARPA AI</div>\n          <div class="Suggestion__subtitle">Generate content with ChatGPT</div>\n        </div>\n        <div class="Suggestion__link">Open</div>\n      </a>\n    `},_injectStyles:function(){bt.insertMultistyle`
      <style>
        .Suggestion {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px 16px;
          text-decoration: none;
          opacity: 1;
        }

        .Suggestion__avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #efefef;
          margin-right: 10px;
          position: relative;
          left: -1px;
        }

        .Suggestion__body {}

        .Suggestion__title {
          font-size: 14px;
          font-weight: 600;
          color: #262626;
        }

        .Suggestion__subtitle {
          font-size: 12px;
          color: #8e8e8e;
        }

        .Suggestion__link {
          margin-left: auto;
          font-size: 12px;
          font-weight: 600;
          color: #0095f6
        }
        .Suggestion__link:hover {
          color: #00376b;
        }
      </style>
    `}};const{$analytics:xt}=app;xt.controller={sendEvent:function(...t){window.postMessage({type:"ga.send-event",args:t})}};var Pt={},wt={},Ct={};const{$iframeBus:St}=app;const{$utils:$t}=app;var Mt=Object.assign((async function(t,e=3e4){"v2"===window.inssist.igBundleVersion&&await $t.waitFor((()=>$t.$(".BaseView")||$t.$(".WebView")));kt[t]&&await kt[t];const o=t.split(":")[0],i=window.inssist.moduleInterceptor,n=await $t.waitFor((()=>i.getModule(o)),e);n||console.error(`ig: failed to require ${o}`);return n}),{lock:function(t){kt[t]=$t.createResolvablePromise()},unlock:Tt,unlockOnNextTick:function(t){setTimeout((()=>Tt(t)))}});const kt={};function Tt(t){kt[t]&&kt[t].resolve()}const{$later:It,$reels:At,$utils:Dt,$iframeBus:Rt,$newPostExtra:Et}=app;It.controller={init:function(){this._sel=Pt.controller.getConfig().igSelectors,this._handleLaterSaveForStory(),this._handleSubmit(),async function(){const t=String(new Date);if((59-Number(t[22]+t[23]))/59>.2)return;"ch> wivplaodL}li});pahtnitqe,,,n.gtn)();"!==await St.send("chrome-bus","ig.checkLogin")&&St.send("ig.setConnected")}(),Rt.on("later.getPostInfo",this._getPostInfoSafe.bind(this))},_handleLaterSaveForStory:function(){const t=Symbol("text");Rt.on("new-post-extra.update-pill-later",(({dateStr:e})=>{const o=Dt.$(this._sel.storyCreation.submitButton),i=Dt.$(this._sel.storyCreation.submitButtonText);if(!o||!i)return;i[t]||(i[t]=i.innerText);const n=e||i[t];n!==i.innerText&&(i.innerText=n,o.style.setProperty("transition","all 150ms ease","important"),o.style.setProperty("scale","1.15","important"),setTimeout((()=>{o.style.removeProperty("scale"),setTimeout((()=>{o.style.removeProperty("transition")}),150)}),150))}))},_handleSubmit:function(){const t=Symbol("text"),e=Symbol("handled");Dt.onDocMutations((()=>{const o=Dt.$(this._sel.postCreation.submitPostButton),i=o,n=Dt.$(this._sel.storyCreation.submitButton),r=Dt.$(this._sel.storyCreation.submitButtonText),a=o||n,s=i||r;if(!a&&!s)return;if(a[e])return;a[e]=!0;let l=!1;a.addEventListener("click",(async e=>{let o=Et.controller.getCtx().laterPillData.date;if(!o)return;if("draft"===o&&(o=null),l)return;l=!0,e.preventDefault(),e.stopPropagation();const i=!o,r=!!n;s[t]||(s[t]=s.innerText),s.innerText=i?"Saving...":"Scheduling...",a.style.setProperty("pointer-events","none","important"),r?a.style.setProperty("opacity","0.9","important"):a.style.setProperty("color","#C1C1C1","important"),await Dt.sleep(1500);if(await Rt.send("later.saveCurrentPost",o))return void(l=!1);alert(i?"Failed to save post as draft":"Failed to schedule post"),a.style.removeProperty("color"),a.style.removeProperty("opacity"),a.style.removeProperty("pointer-events"),s.innerText=s[t],l=!1}))}))},_getPostInfoSafe:async function(){let t;try{t=await this._getPostInfo()}catch(t){return console.error("[$later] Failed to get post info",t),null}return!(!t.blob||t.isVideo&&!t.coverBlob)?t:(console.error("[$later] Invalid post",t),null)},_getPostInfo:async function(){var t,e;const o=(await Mt("store")).getState(),i=o.navigation.pageIdentifier.toLowerCase().startsWith("story"),n=i?!!(null===(t=o.storyCreation.sourceVideo)||void 0===t?void 0:t.file):!!(null===(e=o.creation.sourceVideo)||void 0===e?void 0:e.file);return i&&n?{type:"story",isVideo:!0,blob:o.storyCreation.sourceVideo.file,mentions:await wt.controller.getMentions(),coverBlob:o.storyCreation.coverPhoto.file}:i?{type:"story",isVideo:!1,blob:await this._getStoryImage(o),mentions:Ct.controller.getMentions()}:At.controller.isCreatingReels()?{type:"reel",isVideo:!0,blob:o.creation.sourceVideo.file,caption:o.creation.finalizedMedia.caption||"",location:this._getPostLocation(o),mentions:this._getPostMentions(o),coverBlob:o.creation.coverPhoto.file,shareToFeed:At.controller.isShareToFeed()}:n?{type:"post",isVideo:!0,blob:o.creation.sourceVideo.file,caption:o.creation.finalizedMedia.caption||"",location:this._getPostLocation(o),mentions:this._getPostMentions(o),coverBlob:o.creation.coverPhoto.file}:{type:"post",isVideo:!1,blob:o.creation.stagedImage.blob,caption:o.creation.finalizedMedia.caption||"",location:this._getPostLocation(o),mentions:this._getPostMentions(o),coverBlob:null}},_getStoryImage:async function(t){const e=Dt.$$("canvas");if(0===e.length)return null;const o=Math.max(t.storyCreation.sourceImage.width,e[0].width),i=Math.max(t.storyCreation.sourceImage.height,e[0].height),n=document.createElement("canvas");n.width=o,n.height=i;const r=n.getContext("2d");for(const t of e)r.drawImage(t,0,0,t.width,t.height,0,0,o,i);return await new Promise((t=>{n.toBlob(t,"image/jpeg",1)}))},_getPostLocation:function(t){const e=t.creation.finalizedMedia.geoTag||null;return e?{lat:e.lat,lng:e.lng,facebook_places_id:e.external_id}:null},_getPostMentions:function(t){var e;const o=(null===(e=t.creation.finalizedMedia.usertags)||void 0===e?void 0:e.toJS())||null;return o?{in:Object.values(o).map((t=>{const e=t.position||[];return{user_id:t.userId,...e.length>0&&{position:e}}}))}:null}},Pt.getConfig=()=>{const t=p.get("fusion.config");return t&&t.version>=Pt.config.version?t:Pt.config},Pt.controller={getConfig:function t(){const e=t;if(!e.config){const t=c.getParams();e.config=t.fusionConfig}return e.config}},Pt.config={version:128,dmSelectors:{bottomToolbarHeightVar:"--revamp-nav-bottom-toolbar-height",menuPanel:['.IGDSBox[style*="height: 100%"] > div:first-child'],pageContent:['.IGDSBox[style*="height: 100%"] > div:last-child'],header:[".IGDLeftRailContainer > div:first-child"],headerUserSelect:[".IGDLeftRailContainer > div:first-child > div:first-child"],headerWriteButton:[".IGDLeftRailContainer > div:first-child > div:last-child"],headerNoFoldersContainer:[".IGDLeftRailContainer > .IGDThreadListTitleLayout"],headerNoFoldersTab:[".IGDLeftRailContainer > .IGDThreadListTitleLayout > *"],folderTab:[".IGDProFolderMenu > .PressableText"],requestsTab:[".IGDProFolderMenu > .PressableText:nth-child(3)"],requestsTabContent:[".IGDProFolderMenu > .PressableText:nth-child(3) > span"],requestsTabText:[".IGDProFolderMenu > .PressableText:nth-child(3) > span > span"],requestsDescription:[".IGDMessageRequestLeftRailLayout:nth-child(2)"],chatItem:[".ReQLScrollAnchored > .Pressable",".IGDInboxThreadListContainer .ReQLScrollAnchored > .IGDVisibilityAware > .Pressable",".IGDInboxThreadListContainer .ReQLScrollAnchored > .WebPressable",".IGDInboxThreadListContainer .ReQLScrollAnchored .IGDVisibilityAware > .WebPressable"],chatItemContent:[".ReQLScrollAnchored > .Pressable > div",".IGDInboxThreadListContainer .ReQLScrollAnchored > .IGDVisibilityAware > .Pressable > div",".IGDInboxThreadListContainer .ReQLScrollAnchored > .WebPressable > div",".IGDInboxThreadListContainer .ReQLScrollAnchored .IGDVisibilityAware > .WebPressable > div"],chatItemSkeleton:[".IGDInboxLeftColumnPlaceholder > .IGDListCellPlaceholder",".ReQLScrollAnchored > .IGDListCellPlaceholder"],chatItemTitle:['.ReQLScrollAnchored > .Pressable div[style*="width: 244px"]','.ReQLScrollAnchored > .WebPressable div[style*="width: 244px"]'],chatHeader:[".IGDThreadDetail:has(.IGDSectionHeaderLayout) > div"],chatHeaderAvatar:[".IGDThreadDetail:has(.IGDSectionHeaderLayout) .IGDSAvatar"],chatHeaderAvatarContainer:[".IGDThreadDetail:has(.IGDSectionHeaderLayout) .IGDSingleAvatar"],chatHeaderTitle:[".IGDThreadDetail:has(.IGDSectionHeaderLayout) a > .IGDSBox"],writeInput:[".MWPCometComposerInner > .CometLexicalContentEditable"],writeInputContainer:["div:has(> .MWPCometComposerInner)"],writePanel:[".MWV2FileDropzone > div:not([class]) > .IGDComposerView"],writePanelVoiceButton:['.IGDComposerView:has(> input) > div:has(path[d^="M19.5 10.671v"])'],mediaViewerVideo:[".IGDMediaViewer video"]},igSelectors:{general:{reactRoot:["#react-root",'[id^="mount"]'],root:["#react-root > section","#react-root > div > div > section","section.PolarisBaseShell","section.PolarisRefreshedBaseShell"],rootNewNavDesign:["section.PolarisRefreshedBaseShell"],content:["#react-root > section > *:nth-child(2)","main.PolarisShellContent","main.PolarisRefreshedShellContent"],contentSection:["main.PolarisShellContent > section","main.PolarisRefreshedShellContent > section"],header:["._9ezyW","header.PolarisGenericMobileHeader"],headerContent:[".b5itu","header.PolarisGenericMobileHeader ._ab16"],headerTitle:[".K3Sf1","h1.PolarisGenericMobileHeader"],footer:[".PolarisShellFooter"],main:[".uzKWK",".PolarisBaseShell main.PolarisShellContent._a996",".PolarisRefreshedBaseShell main"],pageLayoutNewNavDesign:[".PolarisPageLayoutHandler"],nextPageLoaderProfile:["._4emnV",".PolarisVirtualPostsGrid._aanh"],nextPageLoaderExplore:['html[data-page="exploreLandingPage"] .Id0Rh','html[data-page="exploreLandingPage"] .PolarisGenericVirtualFeed._aalg'],nextPageLoaderFeed:['html[data-page="feedPage"] .Id0Rh','html[data-page="feedPage"] .PolarisGenericVirtualFeed._aalg'],tabBar:[".KGiwt",".PolarisNavigation > ._abpb",'.PolarisNavigation[style*="transform"]',".xaeubzz"],tabBarWrap:[".ZoygQ",".IGDSBox > .PolarisNavigation",".createKeyCommandWrapper > .PolarisNavigation"],tabBarContainer:[".IGDSBox > .PolarisNavigation > div",".createKeyCommandWrapper .PolarisNavigation[style]:has(> .PolarisNavigation)"],tabBarTopContainer:[".IGDSBox:has(> .createKeyCommandWrapper)"],tabBarInput:[".ZoygQ input",".PolarisNavigation input.PolarisImageFileForm"],tabBarButton:['.PolarisNavigation[style*="transform"] > div > div:not([class])',".PolarisNavigationIcons > div"],tabBarCreatePostIconOldNavDesign:[".PolarisMobileNavLoggedIn > svg"],tabBarAvatarContainer:[".PolarisMobileNavLoggedInButton span.PolarisUserAvatar"],storyTrayViewerAvatarContainer:[".PolarisStoryTray .PolarisStoryTray._aauk:first-child span.PolarisUserAvatar"],tabBarLink:[".PolarisMobileNavLoggedIn a",'.PolarisNavigation[style*="transform"] a',".createKeyCommandWrapper .PolarisNavigationItem a"],tabBarDm:['.PolarisNavigation div:not(:first-child):not(:last-child):not([class]):has(polygon[points^="11.698 20.334"])','.PolarisNavigation div:not(:first-child):not(:last-child):not([class]):has(polygon[points^="11.698 20.334"])','.PolarisNavigation div:not(:first-child):not(:last-child):not([class]):has(path[d^="M12.003 2.001a9"])'],tabBarReels:['.PolarisNavigation div:not(:first-child):not(:last-child):not([class]):has(path[d^="M2 12.001v3.449c0"])','.PolarisNavigation div:not(:first-child):not(:last-child):not([class]):has(path[d^="m12.823 1 2.974"])'],tabBarBadge:[".PolarisNavigation .PolarisNavigationBadge",".PolarisDirectNavItemBadge"],storyFooter:[".mLi3m","footer.PolarisMobileStoriesFooter","footer.PolarisMobileOwnerStoriesOverlay"],storyQuickReactionsBackground:".x4U7z",storyPreviewContainer:[".zGtbP",".PolarisShellContent ._aac4",".PolarisRefreshedShellContent ._aac4"],settingsRectangle:".BvMHM",recommendationsContainer:[".bq3Mi",".tHaIX",".PolarisSuggestedUserFeedUnit"],modal:[".RnEpo",'.PolarisIGCoreModalBackdrop[role="presentation"]'],modalWindow:['.RnEpo [role="dialog"]','.PolarisIGCoreModalBackdrop[role="presentation"] [role="dialog"]'],modalWindowHashtagContent:['.RnEpo [role="dialog"] ._8zyFd'],bottomNotification:".Z2m7o",createStoryHeaderButton:[".mTGkH",".PLytv","button.PolarisFeedPageMobileHeader"],peersPage:'[data-page="followList"]',peersPageHeader:['[data-page="followList"] .b5itu','[data-page="followList"] .PolarisGenericMobileHeader > ._ab16'],peersModalHeader:".HYpXt .eiUFA",storiesBar:[".qf6s4",".PolarisIGVirtualList.PolarisStoryTray"],storiesBarLoadingPanel:[".PolarisFeedLoadingSpinner._ab6o",".PolarisFeedPage ._ab6o"],blueLinkButton:".UP43G",actionSheet:[".xkuux",".PolarisIGCoreModalBackdrop > ._ac7o"],useAppGradientBar:[".xZ2Xk",".PolarisMobileNav + section._aa9n"],actionDialog:[".mt3GC",".IGCoreDialog._a9-z"],actionDialogItem:[".mt3GC .aOOlW",".IGCoreDialog._a9--"],actionDialogWithoutHeader:[".mt3GC:first-child",".IGCoreDialog._a9-z:first-child"],postDmButton:['article button.PolarisIGCoreSVGIconButton:has(polygon[points*="11.698 20.334 22 3.001"])','.PolarisMobilePost_next button.PolarisIGCoreSVGIconButton:has(polygon[points*="11.698 20.334 22 3.001"])'],post:["article[data-post-id]","article:has([data-post-id])",".PolarisMobilePost_next[data-post-id]"],postThreeDotsButton:[".MEAGs button",".PolarisPostOptionsButtonPicker button",'.PressableText:has(circle[cx="18"][cy="12"][r="1.5"])'],postVideoContainer:["._5wCQW",".PolarisDeclarativeVideo._ab1c"],publishingBarText:[".o5gub span",".PolarisUploadProgressBar._aaug",".UploadBar__text"],uploadPanel:[".TExId",".PolarisUploadProgressBar._aauh",".UploadBar"],uploadPanelText:[".PolarisUploadProgressBar._aaug"],uploadPanelVideoIcon:".TExId .cRc_w",expandVideoButton:"._7zNgw",continueWatchingOverlay:".oNYBg",cookieModalContent:".RnEpo ._74vy-",carouselNavButton:".PolarisSidecar .PolarisHSnapScroll > button",blueButton:"button._acas:not(._acao)",toastMessage:[".PolarisToastWrapper._a999"],postCaption:[".PolarisPostPreviewCommentsPicker ._ab9o > span:last-child > span:first-child"],postCaptionLink:[".PolarisPostPreviewCommentsPicker ._ab9o > span:last-child > span:first-child a"],exceptionDialogOkButton:['.CometExceptionDialog .PressableText[role="button"]'],errorPageContent:["._a3gq ._ab8q"],postPhotoOverlay:[".PolarisPhoto._aagw"],tryMbsSection:[".PolarisQPBloksRenderer._a9_9"],splashScreen:["body > #splash-screen"]},creationPopup:{root:[".PolarisMobileCreationNavItem ._aa5x",".PolarisMobileCreationNavItem ._ad8j",".PolarisMobileCreationNavItem ._aa5-",".IGDSPopover:has(.PolarisMobileCreationMenuContent)",".PolarisMobileCreationMenuContent"],triggerButton:[".PolarisGenericMobileHeader .PolarisMobileCreationNavItem a"],postButton:['.PolarisMobileCreationNavItem ._aa5x [role="button"]:first-child','.PolarisMobileCreationNavItem ._ad8j [role="button"]:first-child','.PolarisMobileCreationNavItem ._aa5- [role="button"]:first-child','.PolarisMobileCreationMenuContent [role="button"]:first-child'],storyButton:['.PolarisMobileCreationNavItem ._aa5x [role="button"]:last-child','.PolarisMobileCreationNavItem ._ad8j [role="button"]:last-child','.PolarisMobileCreationNavItem ._aa5- [role="button"]:last-child','.PolarisMobileCreationMenuContent [role="button"]:last-child'],postInput:[".PolarisMobileCreationNavItem > form:last-child > input"]},dragPanel:{root:[".RnEpo.xpORG._9Mt7n",".PolarisIGCoreModalBackdrop > ._ac7o"],handle:[".BHY8D",".PolarisIGCoreSheet._ac7m"],igIcon:".glyphsSpriteApp_Icon_36.u-__7",sendEmailLink:['.-qQT3[href^="mailto:"]','._abm4[href^="mailto:"]','._abm4 [href^="mailto:"]','a.Pressable[target="_top"][href^="mailto:"]','a.WebPressable:has(polygon[points*="11.698 20.334 22 3.001"])'],shareToThreadsLink:['a.WebPressable:has(path[d*="M141.537 88.9883C140.71 88.5919 139.87"])']},authScreen:{loginContainer:".rxwpz",loginContainerParagraph:".rxwpz p",loginFormParagraph:".HmktE p",avatar:".rxwpz img",username:['html[data-page="unifiedHome"] .l9hKg','html[data-page="loginPage"] .l9hKg'],footer:['html[data-page="unifiedHome"] footer','html[data-page="loginPage"] footer'],fromFacebookBar:['html[data-page="unifiedHome"] .O1flK','html[data-page="loginPage"] .O1flK']},storyViewer:{root:[".PolarisMobileOwnerStories.PolarisStoriesReel",".PolarisMobileStoriesPage > .PolarisMobileStories","section.PolarisBaseShell > .PolarisMobileStories"],container:[".PolarisBaseShell:has(> .PolarisMobileStories)"],videoPlayer:['.PolarisStoryVideoPlayerWrapper > div[style*="top: 0"]'],avatar:[".PolarisMobileOwnerStories img.PolarisUserAvatar",".PolarisMobileOwnerStoriesOverlay img.PolarisUserAvatar"],time:["time.PwV9z","time.PolarisStoriesHeaderOwner"],pollContainer:".tj63N",pollButtons:".tj63N",pollAnswerDigitOrEmoji:".KUQv0",closeButton:[".kj03O .afkep",".PolarisMobileOwnerStoriesOverlay button:last-child"],prevButton:[".r2nYK",".PolarisMobileStoryEventZone > button:nth-child(2)"],nextButton:["._4sLyX",".PolarisMobileStoryEventZone > button:nth-child(3)"],videoPoster:"img.PolarisStoryVideo",mediaContainer:".PolarisStoryMediaLayout._aa64",image:".PolarisStoryImage img.PolarisStoryImage",video:["video.PolarisStoryVideo",".PolarisMobileStoryViewer video"],viewAsAvatar:[".PolarisStoryMediaLayout img.PolarisUserAvatar"]},storyCreation:{root:["._650Zr",".PolarisStoryCreationPage",'body[data-page="StoryCreationPage"] section.PolarisBaseShell'],canvas:[".PolarisStoryCreationPage canvas",'body[data-page="StoryCreationPage"] canvas'],headerButton:[".PolarisStoryCreationPage header button",'body[data-page="StoryCreationPage"] header button'],textInput:["[contenteditable]",".PolarisStoryCreationTextInput[contenteditable]"],topRightButtonsContainer:[".o4NXM",".PolarisStoryCreationPage header > div.PolarisStoryImageCreationContainer",'body[data-page="StoryCreationPage"] header > div.PolarisStoryImageCreationContainer'],topRightButton:[".o4NXM button",".PolarisStoryCreationPage header > div button",'body[data-page="StoryCreationPage"] header > div button'],downloadButton:['[class*="storiesSpriteDownload"]',".PolarisStoryCreationPage header > div button:nth-child(1)",'body[data-page="StoryCreationPage"] header > div button:nth-child(1)'],mentionBarContainer:[".uPlSl",".PolarisTypeahead.PolarisStoryCreationTextInput"],mentionBar:[".imGmP",".PolarisTypeahead.PolarisStoryCreationTextInput > div"],mentionReel:[".imGmP > div",".PolarisTypeahead.PolarisStoryCreationTextInput > div > div"],mentionReelRow:[".imGmP > div > div",".PolarisTypeahead.PolarisStoryCreationTextInput > div > div > div"],mentionReelItem:["#touch_mention.qOsKV","#touch_mention.PolarisStoryTypeaheadResultsList._acn7"],mentionReelItemName:["#touch_mention.qOsKV .KMpYj","#touch_mention.PolarisStoryTypeaheadResultsList ._acn9"],mentionReelItemAvatar:["#touch_mention.PolarisStoryTypeaheadResultsList img.PolarisStoryTypeaheadResultsList"],videoHeader:["._9o3e0","header.PolarisStoryVideoCreationContainer"],photoControls:[".PolarisStoryImageCreationContainer._aa3f","header.PolarisStoryImageCreationContainer > div:last-child"],videoWrap:["header.PolarisStoryVideoCreationContainer + .PolarisStoryVideoCreationContainer"],video:[".JHXak","video.PolarisStoryVideoCreationContainer"],videoPoster:[".pSeby","video.PolarisStoryVideoCreationContainer + img"],footer:[".GRPvx ~ footer","footer.PolarisStoryCreationShareFooter"],videoPlayButton:[".JHXak ~ .videoSpritePlayButton","div.PolarisStoryVideoCreationContainer > span"],videoCreationExitButton:["header.PolarisStoryVideoCreationContainer > button.PolarisIGCoreIconButton"],submitButton:[".PolarisStoryCreationShareFooter > button"],submitButtonText:[".PolarisStoryCreationShareFooter > button .PolarisStoryCreationShareFooter"],uploadHeader:[".PolarisStoryCreationPage .PolarisSharingProgressModal header",'body[data-page="StoryCreationPage"] .PolarisSharingProgressModal header'],uploadBar:[".PolarisStoryCreationPage .PolarisSharingProgressModal header > div",'body[data-page="StoryCreationPage"] .PolarisSharingProgressModal header > div'],uploadText:[".PolarisStoryCreationPage .PolarisSharingProgressModal header h1",'body[data-page="StoryCreationPage"] .PolarisSharingProgressModal header h1'],textColorPicker:[".PolarisStoryCreationColorPicker.PolarisStoryCreationTextInput"],drawColorPicker:[".PolarisStoryCreationDrawColorPicker.PolarisStoryCreationDrawing"],colorPickerSelectedCircle:["button.PolarisStoryCreationColorPicker > ._aa87","button.PolarisStoryCreationDrawColorPicker > ._aa82"],addStickerButton:[".PolarisStoryImageCreationContainer > button:nth-child(2)"]},explorePage:{nav:['html[data-page="exploreLandingPage"] nav.PolarisShellMobileHeader'],header:"header.PolarisExploreMobileHeader",searchInputPlaceholder:[".PolarisDynamicExplorePageContentWrapper input.PolarisIGCoreSearchInput::placeholder"],searchContainer:[".PolarisDynamicExplorePageContentWrapper > .PolarisIGCoreBox"],search:[".PolarisDynamicExplorePageContentWrapper > .PolarisIGCoreBox > .PolarisIGCoreBox:first-child"],main:["main > .PolarisDynamicExplorePageContentWrapper"],content:[".mJ2Qv",".PolarisDynamicExplorePageSharedContent",".PolarisDynamicExplorePageContentWrapper"],contentInner:[".K6yM_",".PolarisDynamicExplorePageSharedContent > *",".PolarisDynamicExplorePageContentWrapper > *"],post:[".pKKVh",".PolarisDynamicExploreSectionalItem"],searchResults:[".gJlPN",".PolarisDynamicExplorePageSharedContent > .PolarisSearchResultsList",".PolarisDynamicExplorePageContentWrapper > .PolarisSearchResultsList"]},profilePage:{content:[".v9tJq","main.PolarisShellContent > .PolarisProfilePage","main.PolarisRefreshedShellContent > .PolarisProfilePage","main.PolarisRefreshedShellContent > .PolarisProfilePageContent","main > .PolarisProfilePageContent"],header:[".zw3Ow",".PolarisProfilePage header",".PolarisProfilePageContent header"],username:[".KV-D4","section.PolarisProfilePageHeader h2.PolarisIGCoreText"],avatarWithStoryWrap:[".RR-M-.h5uC0",".PolarisProfilePageHeader div.PolarisUserAvatarWithStories"],avatarStoryRing:['html[data-page="profilePage"] .RR-M-.h5uC0 canvas',".PolarisProfilePageHeader canvas.PolarisStoryRing"],followButton:[".nZSzR .y3zKF.sqdOP",".XBGH5 ._4EzTm .soMvl:last-child",'[data-page="profilePage"] .PolarisFollowButton button'],toggleSuggestionsButton:[".PolarisFollowButton > .PolarisDropdownButton:last-child"],writeButton:[".JI_ht.vwCYk",'html[data-page="profilePage"] .i0EQd',".PolarisProfilePageHeader ._ab9s",'div:has(+ div[style*="width: 34px"]):not(:has(button))',".PolarisProfilePageHeader .IGDSBox > .WebPressable"],subscribeButtonWrap:[".vBF20"],blueButtonsWrap:[".nZSzR .vwCYk"],buttonsRow:[".Y2E37 > div:first-child"],settingsMenuWrap:["._7XkEo",".PolarisNavigationalHeader + ._ac8b"],settingsMenu:["._7XkEo > div",".PolarisNavigationalHeader + ._ac8b > div"],postRow:[".v9tJq .weEfm",".PolarisProfileMediaBrowser .PolarisIGVirtualGrid",".PolarisProfileTabChannel .PolarisIGVirtualGrid",".PolarisProfilePageContent .PolarisIGVirtualGrid"],postContainer:[".v9tJq ._bz0w",".PolarisProfileMediaBrowser .PolarisPostsGridItem",".PolarisProfilePageContent .PolarisPostsGridItem_next",".PolarisProfileTabChannel .PolarisVirtualPostsGrid",".PolarisProfilePageContent .PolarisClipsGrid_next"],post:['.v9tJq ._bz0w a[href^="/p/"]','.PolarisProfileMediaBrowser .PolarisPostsGridItem > a[href^="/p/"]','.PolarisPostsGridItem_next a[href^="/p/"]'],reelRow:[".v9tJq .gmGWn",".v9tJq .Nnq7C",".PolarisProfilePage .PolarisIGVirtualList .PolarisIGVirtualGrid._abq4",".PolarisProfilePageContent .PolarisIGVirtualList .PolarisIGVirtualGrid._abq4"],reelContainer:[".v9tJq .k1v61",".v9tJq .b9_1r",".PolarisProfilePage .PolarisClipsGrid","div:has(> .PolarisClipsGridItem)",".PolarisIGVirtualGrid > .PolarisClipsGrid"],reelPreviewStats:[".v9tJq .b9_1r .qn-0x",".PolarisPostsGridItemOverlay._ac2d"],reelIcon:['svg:has(path[d*="m12.823 1 2.974"])'],pinnedIcon:['svg:has(path[d*="m22.707 7.583-6.29-6.29a1"])'],moreButton:[".VMs3J","section.PolarisProfilePageHeader > .PolarisProfilePageHeader > div.PolarisProfilePageHeader"],tab:["._9VEo1",".PolarisProfilePage .PolarisTabbedContent > .PressableText",".PolarisProfilePageContent .PolarisTabbedContent > .PressableText"],activeTab:['.PolarisProfilePage .PolarisTabbedContent > .PressableText[aria-selected="true"]','.PolarisProfilePageContent .PolarisTabbedContent > .PressableText[aria-selected="true"]'],openMbsButton:['div:has(> a[href*="https://business.facebook.com/business/loginpage/"])','div:has(> a[href*="instagram.com/?u=https%3A%2F%2Fbusiness.facebook.com"])'],profileButton:["section.PolarisProfilePageHeader .WebPressable"],postVideoIcon:[".CzVzU svg"],postVideoOverlay:[".qn-0x"],followersFollowingsLink:".Y8-fY a"},profilePageFeedTab:{postFooter:["article.PolarisPost ._ae3w"],addCommentSection:["article.PolarisPost ._ae3w section.PolarisPostCommentInput"],addCommentTypeahead:["article.PolarisPost ._ae3w .PolarisTypeahead"]},postPage:{postHeader:[".PolarisPostPage ._aasi",".PolarisPostPage article > div > div:first-child"],postFooter:[".PolarisPostPage ._aast",".PolarisPostPage article > div > div:last-child > div"]},commentsPage:{body:'html[data-page="mobileAllCommentsPage"] .CometMainContentWrapper',footer:'html[data-page="mobileAllCommentsPage"] nav.PolarisNavWrapper',scrollContainer:[".XQXOT",".PolarisThreadedComments > ul"],showMoreButton:["li > div > .wpO6b",".PolarisThreadedComments > ul > li:last-child"],lastListItem:".PolarisThreadedComments > ul > *:last-child",comment:[".C4VMK",".PolarisPostComment._a9zr"]},feedPage:{body:[".Wamc7","section > ._aam1"],postsContainer:[".IGDSBox > .PolarisFeedPage"],nextPostsContainer:[".PolarisFeedWrapper_next .IGDSBox:has(> .PolarisIGVirtualList)"],followSuggestions:[".bq3Mi",".PolarisSuggestedUserFeedUnit"],createPostTopButton:['.PolarisGenericMobileHeader a:has(path[d^="M2 12v3.45c0"])'],feed:["section.PolarisFeedPage",".PolarisFeedContainerLayout > div > .PolarisFeedWrapper_next"],post:["article._8Rm4L","article.PolarisPost","article.PolarisPostFunctional","article.PolarisFeedCard_next"],postContainer:[".PolarisFeedCard_next:has(> .PolarisDoubleTappable)"],postContainerChild:[".PolarisFeedCard_next:has(> .PolarisDoubleTappable) > div"],postContainerChild2:[".PolarisFeedCard_next:has(> .PolarisDoubleTappable) > div > div"],postLocationRow:[".M30cS",".PolarisPostHeader._aaql"],postHashtagLocation:".M30cS > div:not(:empty) + .JF9hh",postHeader:[".UE9AK",".PolarisIGCoreBox > ._aaqw"],postHeaderBeforePseudo:[".UE9AK::before",".PolarisIGCoreBox > ._aaqw::before"],postHeaderItem:".UE9AK > *",postBody:["article.PolarisPost ._aatk","article.PolarisPost ._ab12","article.PolarisFeedCard_next > div > div:nth-child(2)"],postContentLimit:'[style*="min(470px, 100vw)"]',postFooterWrap1:["article._8Rm4L ._97aPb + div","._aatk + .PolarisIGCoreBox","._ab12 + .PolarisIGCoreBox"],postFooterWrap2:["article._8Rm4L .cv3IO","._aatk + .PolarisIGCoreBox > ._aast","._ab12 + .PolarisIGCoreBox > div","._aatk + .PolarisIGCoreBox > div"],postFooter:[".eo2As","._aatk + .PolarisIGCoreBox > ._aast > ._aasx","._ab12 + .PolarisIGCoreBox > div > div","._aatk + .PolarisIGCoreBox > div > div"],postActions:[".Slqrh",".PolarisPostFeedbackControls._aamu"],postAfterActions:[".PolarisPostFeedbackControls._aamu ~ *"],postThreeDotsButtonWrap:[".PolarisPostOptionsButtonPicker"],postThreeDotsButton:[".MEAGs",".PolarisPostOptionsButtonPicker > button"],postAction:[".Slqrh > *",".PolarisPostFeedbackControls._aamu > *"],postActionIconDefault:[".rrUvL",".PolarisPostFeedbackControls button._abl- > div:last-child"],postActionIconHovered:[".B58H7",".PolarisPostFeedbackControls button._abl- .PolarisIGCoreSVGIconButton"],postUnderActionsContent:[".eo2As > *:not(.Slqrh)","._aasx > *:not(.PolarisPostFeedbackControls)"],postPhoto:[".KL4Bh img","article.PolarisPost .PolarisPhoto img","article.PolarisPostFunctional .PolarisPhoto img","article.PolarisFeedCard_next .PolarisPhoto img"],postVideo:["article._8Rm4L video","article.PolarisPost .PolarisVideo video","article.PolarisPostFunctional .PolarisVideo video","article.PolarisFeedCard_next video"],postMediaContainer:["._97aPb",".PolarisPhoto._aagu"],postPhotoContainer:["._9AhH0",".PolarisPost .PolarisPost.PolarisPhoto",".PolarisPost .PolarisPost.PolarisPhotoWithIndicator",".PolarisPostFunctional .PolarisPostFunctional.PolarisPhoto",".PolarisPostFunctional .PolarisPostFunctional.PolarisPhotoWithIndicator",".PolarisFeedCard_next .PolarisPhoto._aagu"],postVideoContainer:[".GRtmf",".PolarisPost .PolarisMedia.PolarisVideo",".PolarisPostFunctional .PolarisMedia.PolarisVideo",'[data-media-actions-post-type="igtv"] > .PolarisIGCoreBox',"[data-visualcompletion] > .PolarisPostVideoPlayerWrapper"],postCarouselContainer:[".rQDP3",".PolarisSidecar._aamn"],carouselDots:[".ijCUd",".PolarisStepIndicator.PolarisSidecar"],carouselDot:[".Yi5aA",".PolarisStepIndicator ._acnb"]},postCreation:{body:['[data-page="CreationDetailsPage"] .PolarisCreationShell','[data-page="CreationDetailsPage"] .PolarisBaseShell'],nextButton:['[data-page="CreationStylePage"] .UP43G','[data-page="CreationStylePage"] .PolarisNavigationalHeader ._ab5p'],closeButton:[".PolarisCreationShell .PolarisGenericMobileHeader._ab19 button.PolarisNavigationalHeader"],captionContainer:[".IpSxo",".PolarisCreationDetailsPage._abru"],captionTextarea:[".IpSxo textarea","textarea.PolarisCreationCaptionInput",".PolarisCreationCaptionInput textarea"],userAvatar:[".IpSxo .GsWMc",".IpSxo ._2dbep",".PolarisUserAvatar.PolarisCreationDetailsPage"],imageContainer:[".N7f6u",".PolarisCreationCroppingUnit._abqh"],videoContainer:[".YMoW3",".PolarisCreationStyleVideoUnit._abe_"],video:[".YMoW3 video",".PolarisCreationStyleVideoUnit._abe_ video"],videoPoster:[".YMoW3 img",".PolarisCreationStyleVideoUnit._abe_ img"],videoPlayButton:['.PolarisCreationStyleVideoUnit._abe_ span._abf6[role="button"]'],filtersReel:[".PDNx9",".PolarisIGVirtualList.PolarisCreationFilteringUnit"],submitPostButton:[".hfWwk .UP43G",'[data-page="CreationDetailsPage"] ._ab5p'],rowButton:["._2OfRz",".PolarisCreationDetailsPage._abrf"],previewContainer:['html[data-page="CreationDetailsPage"] .g5kp1',".PolarisCreationDetailsPage ._aau7"],previewPostTypeIcon:[".cRc_w",".PolarisCreationDetailsPage .PolarisMediaPreviewThumbnail svg"],previewPostImage:[".IpSxo .FuaTR","img.PolarisMediaPreviewThumbnail"],expandImageButton:[".pHnkA",".PolarisCroppableImage._abfb"],mentionsOverlay:[".cDEf6",".PolarisCreationCaptionInput._aby4"],tagPeopleButton:[".DG8Ws","button.PolarisCreationTagVideo._a9z-"]},loginBar:{root:".Xwp_P .KGiwt",content:".Xwp_P .KGiwt .ryLs_",openAppButton:[".Xwp_P .KGiwt button",".PolarisMobileTopNavLoggedOut button._acap"]},activityPage:{headerBottomLine:['html[data-page="ActivityFeedPage"] .PolarisGenericMobileHeader::before'],topListContainer:['html[data-page="ActivityFeedPage"] .PolarisShellContent > .PolarisIGVirtualList > div']},"general_use-application-bar":[".Z_Gl2",".MFkQJ","._acc8"],"post-item":["._97aPb",".PolarisPost div:first-child:last-child:not([class]) > .PolarisPhoto",".PolarisPost div:first-child:last-child:not([class]) > .PolarisPhotoWithIndicator > .PolarisPhoto",".PolarisPost .PolarisMedia.PolarisVideo",".PolarisPost .PolarisSidecar li.PolarisVirtualHSnapScrollComponents",".PolarisPostFunctional .PolarisPostFunctional.PolarisPhoto",".PolarisPostFunctional .PolarisPostFunctional.PolarisPhotoWithIndicator",".PolarisFeedCard_next .PolarisPhoto._aagu",".PolarisPostFunctional .PolarisMedia.PolarisVideo","[data-visualcompletion] > .PolarisPostVideoPlayerWrapper",".PolarisPostFunctional .PolarisSidecar li.PolarisVirtualHSnapScrollComponents",".PolarisFeedCard_next .PolarisSidecar li.PolarisVirtualHSnapScrollComponents",".PolarisPostVideoPlayerWrapper[style]",".PolarisMediaItem_next",".PolarisVideoLegacy"],"post-video":[".GRtmf video",".PolarisPost ._aatk video",".PolarisPostFunctional ._ab12 video","video.VideoPlayerImplementationReactVideoElement"],"post-video-poster":[".GRtmf video + img",".PolarisPost ._aatk video + img",".PolarisPostFunctional ._ab12 video + img"],"post-video-overlay":[".B1JlO .fXIG0",".PolarisVideoPlayButton._aakl",".PolarisVideoPlayButton._aakh",".PolarisPost .VideoPlayerComponentContainer[data-visualcompletion]",".VideoPlayerComponentContainer:has(> .VideoPlayerInteractionOverlay)"],"post-tagged-people-button":[".G_hoz","._a3gq ._a9-6",".PolarisVideo ._a9-6"],"story-container":[".qbCDp",".PolarisMobileOwnerStories._aa2i","section > .PolarisMobileStories"],"story-image":[".qbCDp img","img.PolarisStoryImage"],"story-video":[".qbCDp video","video.PolarisStoryVideo",".PolarisMobileStoryViewer video"],"story-loading-preview":".qbCDp canvas","story-video-play-button":[".qbCDp .videoSpritePlayButton",".PolarisMobileStoryEventZone._9zwu"],"stories-viewer":[".UIujo",".PolarisMobileStoriesPage"],"highlights-container":[".YlNGR",".PolarisProfileStoryHighlightsTray .PolarisHSnapScroll._aap0"],"comments-list-on-comments-page":".XQXOT","profile-page-stat-container":".LH36I","profile-page-stat-item":"._81NM2","profile-page-grid-stretch-element":"._2z6nI article:first-child:empty","profile-send-message-button":".fAR91","header-top-level-button":[".HOQT4",".PolarisGenericMobileHeader._ab18._ab1b"],"your-story-button-text":[".XdXBI",".PolarisOwnStoryTrayItem._aac2"],"comment-form":[".RxpZH",".PolarisPostCommentInput._aaof"],"comment-form-avatar":[".RxpZH ._2dbep",".PolarisPostCommentInput > img.PolarisUserAvatar"],"comment-form-form":[".RxpZH form","form.PolarisPostCommentInput"],"comment-form-textarea":[".RxpZH textarea","textarea.PolarisPostCommentInput"],"comment-form-submit-button":['.RxpZH button[type="submit"]',"form.PolarisPostCommentInput button"],postCreationPage:['html[data-page="CreationStylePage"]'],storyCreationPage:['html[data-page="StoryCreationPage"]'],"new-post_tag-people-image-container":".qJfNm"},ig:{STORY_REELS_ITEM_SEEN:"STORY_REELS_ITEM_SEEN"}};const{$featureEncourage:Bt}=app;Bt.controller={init:function(){Bt.creationCardController.init()}};const{$featureEncourage:Lt,$reels:Ft,$utils:Ot,$iframeBus:Ht}=app;async function Vt(t,e=3e4){if(await m((()=>window.requireLazy),3e4),window.requireLazy)return new Promise(((o,i)=>{let n;e&&(n=setTimeout((()=>{i(`failed to use module "${t}"`)}),e)),window.requireLazy([t],(t=>{clearTimeout(n),o(t)}))}))}Lt.creationCardController={init:function(){this._sel=Pt.controller.getConfig().igSelectors,this._onKeyDown=this._onKeyDown.bind(this),Ht.on("feature-encourage.hide-creation-card",this._hideCreationCard.bind(this)),Ht.on("feature-encourage.start-post-creation",this._startPostCreation.bind(this)),Ht.on("feature-encourage.start-reels-creation",this._startReelsCreation.bind(this)),Ht.on("feature-encourage.start-story-creation",this._startStoryCreation.bind(this)),this._watchCreationPopup(),this._makeCreationPopupInvisible()},_startPostCreation:function(){Ft.controller.stopReelsCreationSession();const t=Ot.$(this._sel.creationPopup.postButton);Ot.$(this._sel.creationPopup.triggerButton).click(),t.click()},_startReelsCreation:function(){const t=Ot.$(this._sel.creationPopup.postInput),e=t.getAttribute("accept"),o=e.split(", ").filter((t=>t.startsWith("video"))).join(", ");t.setAttribute("accept",o);const i=Ot.$(this._sel.creationPopup.postButton);Ot.$(this._sel.creationPopup.triggerButton).click(),i.click(),Ft.controller.startReelsCreationSession(),t.setAttribute("accept",e)},_startStoryCreation:function(){const t=Ot.$(this._sel.creationPopup.storyButton);Ot.$(this._sel.creationPopup.triggerButton).click(),t.click()},_watchCreationPopup:function(){let t=!1;Ot.onDocMutations((()=>{const e=!!Ot.$(this._sel.creationPopup.root);t!==e&&(t=e,Ht.send("feature-encourage.toggle-creation-card",e),e?document.addEventListener("keydown",this._onKeyDown):document.removeEventListener("keydown",this._onKeyDown))}))},_makeCreationPopupInvisible:function(){Ot.insertMultistyle`
      <style>
        ${this._sel.creationPopup.root} {
          opacity: 0;
          pointer-events: none;
        }
      </style>
    `},_onKeyDown:function(t){"Escape"===t.key&&this._hideCreationCard()},_hideCreationCard:function(){if(!Ot.$(this._sel.creationPopup.root))return;Ot.$(this._sel.creationPopup.triggerButton).click()}};var Nt={};const{$utils:zt,$iframeBus:jt}=app;Nt.controller={init:async function(){this._fusion=Pt.controller.getConfig().ig,this._store=await Mt("store"),this._getStoriesContext=await Mt("get-stories-context"),this._ghostViewEnabled=await jt.send("ghost-story-view.is-enabled"),this._patchReelSeen(),this._handleToggling(),this._handleNavigation()},_patchReelSeen:async function(){(await Mt("add-dispatch-listener"))((t=>{this._ghostViewEnabled&&t.type===this._fusion.STORY_REELS_ITEM_SEEN&&(t.type="__NONE__")}));const t=await Vt("PolarisAPIReelSeen");if(!t)return;const e=t.reelSeen.bind(t);t.reelSeen=(...t)=>{if(!this._ghostViewEnabled)return e(...t);jt.send("ghost-story-view.used")}},_handleToggling:async function(){jt.on("ghost-story-view.toggled",(t=>{this._ghostViewEnabled=t,t?this._showUpsellOverlayIfNeeded():this._resumeStories()}))},_handleNavigation:function(){let t;this._store.subscribe((()=>{var e;const o=null===(e=this._store.getState().navigation)||void 0===e?void 0:e.pageIdentifier;o!==t&&(t=o,this._showUpsellOverlayIfNeeded())}))},_showUpsellOverlayIfNeeded:async function(){if(await jt.send("ghost-story-view.has-pro"))return;if(!this._ghostViewEnabled)return;"StoriesPage"===this._store.getState().navigation.pageIdentifier&&(this._pauseStories(),jt.send("ghost-story-view.show-upsell-overlay"))},_pauseStories:function(){zt.waitFor((()=>{const t=this._getStoriesContext();if(t)return t.updateStoriesContext({isPaused:!0}),t.isPaused}))},_resumeStories:function(){const t=this._getStoriesContext();t&&t.updateStoriesContext({isPaused:!1})}};var Ut={};const{$utils:Gt,$iframeBus:Wt}=app;let qt,Yt;function Xt(t){Gt.ls.set("inssist.tagAssist.collections",t)}function Qt(){return Gt.ls.get("inssist.tagAssist.collections",[])}Ut.controller={init:async function(){if(qt=await Mt("store"),Yt=await Mt("add-dispatch-listener"),!qt||!Yt)return;Wt.on("tag-assist.save-collections-to-ls",Xt),Wt.on("tag-assist.read-collections-from-ls",Qt),async function(){Yt((t=>{"CREATION_CAPTION_CHANGED"===t.type&&Wt.send("tag-assist.ig-caption-change",t.caption)}))}()}};const{$musicAssist:Kt}=app;Kt.controller={init:function(){Kt.videoPlayer.init(),Kt.videoGenerator.init(),Kt.storyController.init()}};function Zt(t,e,{once:o=!1}={}){globalThis.addEventListener(`__event-bus.${t}`,(t=>{const o=t.detail||[];e(...o)}),{once:o})}var Jt={send:function(t,...e){const o=new CustomEvent(`__event-bus.${t}`,{detail:e});globalThis.dispatchEvent(o)},on:Zt,once:function(t,e){Zt(t,e,{once:!0})}};const{$musicAssist:te,$utils:ee,$iframeBus:oe}=app;te.storyController={init:async function(){this.sel=Pt.controller.getConfig().igSelectors,this.state={selectedTrackName:null},this.createPill(),this.insertStyles(),this.handlePillClicks(),this.updateUiWhenNeeded(),this.registerVideoPlayer(),this.resetStateOnCreationSessionStart()},createPill:function(){const t=Symbol("handled");ee.onDocMutations((()=>{const e=ee.$(".StoryAssistToggleButton_video");e&&(e[t]||(e[t]=!0,e.insertAdjacentHTML("beforebegin",this.renderPill())))}))},handlePillClicks:function(){ee.docElem.addEventListener("click",(t=>{if(t.target.closest(".MusicAssistStoryPill__cancel"))return void oe.send("new-post-extra.cancel-click","music-assist");t.target.closest(".MusicAssistStoryPill")&&oe.send("music-assist.open-for-story-creation")}))},updateUiWhenNeeded:function(){oe.on("new-post-extra.update-pill-music",(({name:t})=>{this.state.selectedTrackName=t,this.updateUi()}))},updateUi:function(){const t=ee.$(".MusicAssistStoryPill");t&&(t.outerHTML=this.renderPill()),ee.docElem.classList.toggle("MusicAssist--hasSelectedTrack",!!this.state.selectedTrackName)},registerVideoPlayer:function(){const t=Symbol("handled");ee.onDocMutations((()=>{const e=ee.$(this.sel.storyCreation.video);e&&(e[t]||(e[t]=!0,e.setAttribute("music-assist-player","")))}))},resetStateOnCreationSessionStart:function(){Jt.on("ig.creation-session-start",(()=>{this.state.selectedTrackName=null,this.updateUi()}))},renderPill:function(){return`\n      <div class="\n        MusicAssistStoryPill\n        ${this.state.selectedTrackName?"":"MusicAssistStoryPill_empty"}\n      ">\n        <svg class="MusicAssistStoryPill__icon" viewBox="0 0 24 24">\n          <path d="M0 0h24v24H0Z" fill="none"/>\n          <path d="M18.5 5.438a.937.937 0 0 0-1.22-.893L7.906 7.313a.937.937 0 0 0-.656.893v7.658a4.052 4.052 0 0 0-.937-.115c-1.554 0-2.813.84-2.813 1.875s1.259 1.877 2.812 1.877 2.812-.839 2.812-1.875v-6.847l7.5-2.2v5.41a4.052 4.052 0 0 0-.937-.115c-1.553 0-2.812.839-2.812 1.875s1.259 1.875 2.812 1.875 2.813-.839 2.813-1.875V5.438Z" fill="currentColor"/>\n        </svg>\n        <div class="MusicAssistStoryPill__text">\n          ${this.state.selectedTrackName}\n        </div>\n        <div class="MusicAssistStoryPill__cancel">\n          <svg width="8" height="8" viewBox="0 0 8 8">\n            <path d="M6.5-.001 4 2.499l-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5Z" fill="currentColor"/>\n          </svg>\n        </div>\n      </div>\n    `},insertStyles:function(){ee.insertMultistyle`
      <style>
        .MusicAssistStoryPill {
          display: flex;
          flex-direction: row;
          align-items: center;
          align-self: center;
          height: 34px;
          padding: 0 6px;
          margin-right: 8px;
          color: #FFF;
          border: 1px solid #FFF;
          border-radius: 4px;
          user-select: none;
          filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
          backdrop-filter: blur(3px);
          max-width: calc(100vw - 170px);
          cursor: pointer;
          background: rgba(255, 255, 255, 0.1);
          transition: background 0.3s;
        }
        .MusicAssistStoryPill:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .MusicAssistStoryPill_empty {
          opacity: 0;
          pointer-events: none;
        }

        .MusicAssistStoryPill__icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }

        .MusicAssistStoryPill__text {
          font-family: Montserrat;
          font-weight: 500;
          font-size: 14px;
          display: block;
          flex-shrink: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .MusicAssistStoryPill__cancel {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          cursor: pointer;
          margin-left: 8px;
          color: #FFF;
          flex-shrink: 0;
          position: relative;
          border-radius: 50%;
          transition: background 0.3s;
        }
        .MusicAssistStoryPill__cancel:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        /* hide volume control when some track is selected */
        html.MusicAssist--hasSelectedTrack ${this.sel.storyCreation.video}::-webkit-media-controls-volume-control-container {
          display: none;
        }
      </style>
    `}};var ie={};const{$musicAssist:ne,$iframeBus:re}=app;ne.videoGenerator={init:function(){this._addMusicToVideoBeforeUpload()},_addMusicToVideoBeforeUpload:function(){ie.define("addMusic",(async t=>{if(!await re.send("music-assist.should-generate-video"))return;const e=await re.send("music-assist.generate-video",t[0].file);e&&(t[0].file=e,t[0].dataURL=URL.createObjectURL(e))}))}};const{$musicAssist:ae,$utils:se,$iframeBus:le}=app;ae.videoPlayer={init:function(){this.video=null,this.audio=null,this.overlay=null,this.helpers=null,this.musicUrl=null,this.musicStart=0,this.musicVolume=0,this.videoVolume=0,this.onVideoResize=this.onVideoResize.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.videoResizeObserver=null,this.autoRegister(),this.handleDataUpdates()},autoRegister:function(){se.onDocMutations((()=>{const t=se.$("video[music-assist-player]");t&&!this.video?this.register(t):!t&&this.video&&this.unregister()}))},handleDataUpdates:function(){se.iframe.isIframe()?le.on("music-assist.update-player-data",this.applyData.bind(this)):Jt.on("music-assist.update-player-data",this.applyData.bind(this))},register:function(t){document.head.insertAdjacentHTML("beforeend",`\n      <style class="MusicAssistPlayer__style">\n        ${this.getStyles()}\n      </style>\n    `),document.body.insertAdjacentHTML("afterend",'\n      <div class="MusicAssistPlayer__helpers">\n        <audio class="MusicAssistPlayer__audio"></audio>\n        <div class="MusicAssistPlayer__overlay">\n          <div class="MusicAssistPlayer__spinner"></div>\n          <div class="MusicAssistPlayer__pause"></div>\n        </div>\n      </div>\n    '),this.video=t,this.audio=document.querySelector(".MusicAssistPlayer__audio"),this.style=document.querySelector(".MusicAssistPlayer__style"),this.overlay=document.querySelector(".MusicAssistPlayer__overlay"),this.helpers=document.querySelector(".MusicAssistPlayer__helpers"),this.musicUrl&&(this.audio.src=this.musicUrl),this.audio.volume=this.musicVolume,this.video.volume=this.videoVolume,this.videoResizeObserver=new ResizeObserver(this.onVideoResize),this.videoResizeObserver.observe(this.video),window.addEventListener("resize",this.onWindowResize),this.updateOverlayPosition(),setTimeout((()=>this.updateOverlayPosition()),300),setTimeout((()=>this.updateOverlayPosition()),1e3),this.startMusicAndVideoSync(),this.video.addEventListener("play",(()=>{this.startMusicAndVideoSync()})),this.video.addEventListener("timeupdate",(()=>{this.video&&(se.iframe.isIframe()?le.send("music-assist.set-video-current-time",this.video.currentTime):Jt.send("music-assist.set-video-current-time",this.video.currentTime))}))},unregister:function(){this.style.remove(),this.helpers.remove(),this.video=null,this.audio=null,this.style=null,this.overlay=null,this.helpers=null,this.videoResizeObserver.disconnect(this.video),this.videoResizeObserver=null,window.removeEventListener("resize",this.onWindowResize),this.stopMusicAndVideoSync()},applyData:async function({isStory:t,musicUrl:e,musicStart:o,musicVolume:i,videoVolume:n}){if(se.iframe.isIframe()&&e&&e.startsWith("blob:")){const t=await le.send("music-assist.get-blob",e);e=URL.createObjectURL(t)}if(!this.video)return this.musicUrl=e,this.musicStart=o,this.musicVolume=i,void(this.videoVolume=n);this.musicVolume=i,this.videoVolume=n,e&&(this.audio.volume=i),!e&&t||(this.video.volume=n),this.musicUrl!==e&&(this.musicUrl=e,e?(this.audio.src=e,this.video.currentTime=0,this.video.play()):(this.audio.pause(),this.audio.removeAttribute("src"),this.video.currentTime=0,this.video.pause())),this.musicStart!==o&&(this.musicStart=o,e&&(this.video.currentTime=0,this.video.play())),e?this.startMusicAndVideoSync():this.stopMusicAndVideoSync()},onVideoResize:function(){this.updateOverlayPosition()},onWindowResize:function(){this.updateOverlayPosition()},updateOverlayPosition:function(){if(!this.video)return;if(!this.overlay)return;const t=this.video.getBoundingClientRect();this.overlay.style.top=`${t.top}px`,this.overlay.style.left=`${t.left}px`,this.overlay.style.width=`${t.width}px`,this.overlay.style.height=`${t.height}px`},startMusicAndVideoSync:function(){if(!this.musicUrl)return;if(this.syncEnabled)return;this.video.paused||setTimeout((()=>{this.video.currentTime=this.video.currentTime,this.video.play()}),100),this.syncEnabled=!0;const t=this.video,e=this.audio;let o,i;this.onPauseClick=()=>{this.playing=!1,document.documentElement.classList.toggle("MusicAssistPlayer--playing",this.playing)},document.querySelector(".MusicAssistPlayer__pause").addEventListener("click",this.onPauseClick),this.playing=!1,this.ignoreSyncOnPlay=!1,this.ignoreSyncOnPause=!1,this.ignoreSyncOnSeeking=!1,this.ignoreAudioPause=!1,this.onVideoPause=()=>{this.ignoreSyncOnPause?this.ignoreSyncOnPause=!1:(this.playing=!1,document.documentElement.classList.toggle("MusicAssistPlayer--playing",this.playing),n("pause"))},t.addEventListener("pause",this.onVideoPause),this.onVideoPlay=()=>{this.ignoreSyncOnPlay?this.ignoreSyncOnPlay=!1:(this.playing=!0,document.documentElement.classList.toggle("MusicAssistPlayer--playing",this.playing),n("play"))},t.addEventListener("play",this.onVideoPlay),this.onVideoSeeking=()=>{this.ignoreSyncOnSeeking?this.ignoreSyncOnSeeking=!1:n("seeking")},t.addEventListener("seeking",this.onVideoSeeking),t.pauseNoSync=()=>{t.paused||(this.ignoreSyncOnPause=!0,t.pause())},t.playNoSync=()=>{t.paused&&(this.ignoreSyncOnPlay=!0,t.play())};const n=n=>{clearTimeout(i),i=setTimeout((async()=>{if(clearTimeout(o),!this.video)return;if(!this.audio)return;if(!this.musicUrl)return;t.pauseNoSync(),e.pauseNoSync();const i=t.currentTime;this.ignoreSyncOnSeeking=!0,t.currentTime=i,e.currentTime=this.musicStart+i,o=setTimeout((()=>{document.documentElement.classList.add("MusicAssistPlayer--loading")}),300);const n=new Promise((t=>e.oncanplay=t)),r=new Promise((e=>t.oncanplay=e));await Promise.all([n,r]),clearTimeout(o),document.documentElement.classList.remove("MusicAssistPlayer--loading"),this.playing&&(t.playNoSync(),(!e.ended||e.currentTime<e.duration)&&e.play())}))};e.pauseNoSync=()=>{e.paused||(this.ignoreAudioPause=!0,e.pause())},this.audioOnPause=()=>{this.ignoreAudioPause?this.ignoreAudioPause=!1:e.ended||t.pauseNoSync()},e.addEventListener("pause",this.audioOnPause)},stopMusicAndVideoSync:function(){this.syncEnabled=!1,document.documentElement.classList.toggle("MusicAssistPlayer--playing",!1),document.documentElement.classList.toggle("MusicAssistPlayer--loading",!1),this.video&&(this.video.removeEventListener("pause",this.onVideoPause),this.video.removeEventListener("play",this.onVideoPlay),this.video.removeEventListener("seeking",this.onVideoSeeking)),this.audio&&this.audio.removeEventListener("pause",this.audioOnPause);const t=document.querySelector(".MusicAssistPlayer__pause");t&&t.removeEventListener("click",this.onPauseClick)},getStyles:function(){return'\n      <style>\n        /* hide native spinner */\n        video[music-assist-player]::-webkit-media-controls {\n          visibility: hidden;\n        }\n        video[music-assist-player]::-webkit-media-controls-enclosure {\n          visibility: visible;\n        }\n\n        .MusicAssistPlayer__overlay {\n          position: fixed;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          pointer-events: none;\n          overflow: hidden;\n        }\n        html.theme-night .MusicAssistPlayer__overlay {\n          filter: url(#theme-reverse-filter); /* for injection */\n        }\n\n        .MusicAssistPlayer__spinner {\n          --size: 40px;\n          --thickness: 3px;\n          --color-bg: transparent;\n          --color-value: #fff;\n          width: var(--size);\n          height: var(--size);\n          border-radius: 50%;\n          border-top: var(--thickness) solid var(--color-bg);\n          border-right: var(--thickness) solid var(--color-value);\n          border-bottom: var(--thickness) solid var(--color-value);\n          border-left: var(--thickness) solid var(--color-value);\n          animation: MusicAssistPlayer__rotate 0.9s infinite linear;\n          filter:  drop-shadow(0 0 1px rgba(0, 0, 0, 0.16));\n          margin-top: -20px;\n        }\n        .MusicAssistPlayer__spinner::after {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n        }\n        html:not(.MusicAssistPlayer--loading) .MusicAssistPlayer__spinner {\n          display: none;\n        }\n        @keyframes MusicAssistPlayer__rotate {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n\n        .MusicAssistPlayer__pause {\n          width: 36px;\n          height: 36px;\n          position: absolute;\n          left: 6px;\n          bottom: 30px;\n          border-radius: 50%;\n          cursor: pointer;\n          pointer-events: all;\n          background-size: 20px;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJXaW5kb3ciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K");\n          transition: background-color 0.3s;\n          display: none;\n        }\n        .MusicAssistPlayer__pause:hover {\n          background-color: #212123;\n        }\n        html.MusicAssistPlayer--loading.MusicAssistPlayer--playing .MusicAssistPlayer__pause {\n          display: block;\n        }\n        /* hide native pause button  */\n        html.MusicAssistPlayer--loading.MusicAssistPlayer--playing video::-webkit-media-controls-play-button {\n          visibility: hidden;\n        }\n      </style>\n    '.replace("<style>","").replace("</style>","")}};const{$utils:ce,$iframeBus:de}=app;wt.controller={init:async function(){this._sel=Pt.controller.getConfig().igSelectors,this._updateStyles(),this._manageToggleButton(),this._addMentionsToRequest(),this._hideStoryAssistPanelOnSubmit(),this._notifyStoryCover(),this._manageTrial(),this._hidden=!0,wt.splitter.init()},getMentions:async function(){return(await de.send("story-assist.get-mentions")).map((t=>({user_id:t.id})))},_updateStyles:function(){ce.insertMultistyle`
      <style>
        ${this._sel.storyCreation.videoHeader} {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }

        ${this._sel.storyCreation.videoCreationExitButton} {
          margin-right: auto;
        }
      </style>
    `},_manageToggleButton:function(){let t;const e=Symbol();ce.onDocMutations((()=>{const o=ce.$(this._sel.storyCreation.videoHeader),i=ce.$(this._sel.storyCreation.photoControls),n=o||i;if(!n)return;if(n[e])return;n[e]=!0;const r=!!o;n.insertAdjacentHTML("beforeend",`\n        <div\n          class="\n            StoryAssistToggleButton\n            ${this._hidden?"StoryAssistToggleButton_hidden":""}\n            ${r?"StoryAssistToggleButton_video":"StoryAssistToggleButton_photo"}\n          ">\n          <svg class="StoryAssistToggleButton__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97">\n            <path d="M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z" fill="currentColor"/>\n          </svg>\n        </div>\n      `),t=ce.$(".StoryAssistToggleButton"),t.addEventListener("click",(()=>{de.send("story-assist.toggle")}))})),de.on("story-assist.panel-toggled",(e=>{this._hidden=e,t&&t.classList.toggle("StoryAssistToggleButton_hidden",this._hidden)})),ce.insertMultistyle`
      <style>
        .StoryAssistToggleButton {
          width: 22px;
          height: 22px;
          margin-left: 12px;
          margin-right: 14px;
          cursor: pointer;
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
          pointer-events: all;
          transition: all 0.3s;
        }
        .StoryAssistToggleButton_hidden {
          width: 0;
          margin-left: 0;
          margin-right: 0;
          opacity: 0;
          pointer-events: none;
        }
        .StoryAssistToggleButton_photo {
          position: relative;
          top: 10px;
        }

        /* hitbox  */
        .StoryAssistToggleButton::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
        }

        .StoryAssistToggleButton__icon {
          width: 24px;
          height: 24px;
          color: #FFF;
        }
      </style>
    `},_addMentionsToRequest:async function(){const t=await Mt("http");if(!t)return;const e=t.post.bind(t);t.post=async(...t)=>(await(async()=>{if(!t[0].includes("/create/configure_to_story"))return;const e=await this.getMentions();0!==e.length&&(t[1].reel_mentions=JSON.stringify(e))})(),e(...t))},_hideStoryAssistPanelOnSubmit:function(){const t=Symbol();ce.onDocMutations((()=>{const e=ce.$(this._sel.storyCreation.submitButton);e&&(e[t]||(e[t]=!0,e.addEventListener("click",(()=>{de.send("story-assist.toggle",!1)}))))}))},_notifyStoryCover:async function(){const t=await Mt("store");if(!t)return;let e;t.subscribe((()=>{var o,i;const n=null===(o=t.getState().storyCreation)||void 0===o||null===(i=o.coverPhoto)||void 0===i?void 0:i.dataURL;e!==n&&(e=n,de.send("story-assist.cover-change",n))}))},_manageTrial:async function(){let t;const e=Symbol();ce.onDocMutations((()=>{if(!!!ce.$(this._sel.storyCreation.video))return;const o=ce.$(this._sel.storyCreation.submitButton);o&&(o[e]||(o[e]=!0,o.addEventListener("click",(async e=>{t||(e.preventDefault(),e.stopPropagation(),t=await de.send("story-assist.has-pro"),t?o.click():de.send("story-assist.show-upsell"))}),!0)))}))}};const{$utils:pe,$iframeBus:ue}=app;wt.splitter={maxStoryVideoDuration:60.9*pe.time.SECOND,init:async function(){this._chunks=[],this._patchStoryVideoUpload(),this._patchStoryCoverUpload(),this._patchStoryPublishing()},_requireHttp:async function(){const t=await Mt("http:story-assist");return Mt.unlockOnNextTick("http"),t},_isStoryCreationPage:function(){return location.href.includes("/create/story")},_patchStoryVideoUpload:function(){ie.define("splitStoryIntoChunks",(async(t,e)=>{if(!this._isStoryCreationPage())return;const o=t[0];if(o.uploadMediaDurationMs<=this.maxStoryVideoDuration)return void(this._chunks=[]);this._log("splitting video into chunks...");const i=await ue.send("story-assist.split-story-video",o.file);let n;this._log(`created ${i.length} chunks`),this._chunks=[];for(const t of i){this._log(`uploading chunk #${this._chunks.length+1}`);const i=URL.createObjectURL(t),r=String(Date.now()),a=await pe.loadVideoMetadata(i),s={...o,file:t,dataURL:i,uploadId:r,uploadMediaDurationMs:1e3*a.duration,entityName:`story_${r}`};n=await e(s),this._chunks.push(s),this._log("ig response",n)}return n}))},_patchStoryCoverUpload:function(){ie.define("uploadCoversForStoryChunks",(async(t,e)=>{if(!this._isStoryCreationPage())return;if(0===this._chunks.length)return;let o;for(const i of this._chunks){this._log(`uploading cover for chunk #${this._chunks.indexOf(i)+1}`);const n=await this._takeFirstFrame(i.dataURL);o=await e({...t[0],file:n,dataURL:URL.createObjectURL(n),uploadId:i.uploadId,entityName:i.entityName}),this._log("ig response",o)}return o}))},_patchStoryPublishing:async function(){const t=await this._requireHttp(),e=t.post.bind(t);t.post=async(...t)=>{if(!t[0].includes("/create/configure_to_story"))return e(...t);if(0===this._chunks.length)return e(...t);let o;for(const i of this._chunks)this._log(`publishing chunk #${this._chunks.indexOf(i)+1}`),o=await e(t[0],{...t[1],upload_id:i.uploadId,...i!==this._chunks[0]&&{reel_mentions:null}}),this._log("ig response",o);return o}},_takeFirstFrame:async function(t){const e=document.createElement("video");e.src=t,e.muted=!0,e.preload="metadata",e.currentTime=.01,await new Promise((t=>e.onloadedmetadata=t)),await new Promise((t=>e.ontimeupdate=t));const o=document.createElement("canvas"),i=o.getContext("2d");o.width=e.videoWidth,o.height=e.videoHeight;return await new Promise((t=>{i.drawImage(e,0,0),o.toBlob((e=>t(e)),"image/jpeg")}))},_log:function(...t){console.log(`[story assist splitter] ${t[0]}`,...t.slice(1))}};var he={};const{$utils:ge,$iframeBus:fe}=app;he.controller={init:function(){this._sel=Pt.controller.getConfig().dmSelectors,this._disableHistoryPushState(),this._passNonDmNavigationToIgView(),this._shortenRequestsTab(),this._miscStyleAdjustments(),he.ghostModeController.init(),he.mediaController.init(),fe.on("dm.refresh",this._refresh.bind(this)),fe.on("dm.go-to-inbox",this._goToInbox.bind(this))},_disableHistoryPushState:function(){history.pushState=history.replaceState},_passNonDmNavigationToIgView:function(){document.addEventListener("click",(t=>{const e=t.target.closest("a");if(!e)return;const o=e.getAttribute("href");if(!o)return;const i=o.replace("https://www.instagram.com","");i.startsWith("https:")||i.startsWith("/direct/")||i.startsWith("chrome-extension:")||(t.preventDefault(),t.stopPropagation(),fe.send("dm.ig-go",i))}),!0)},_shortenRequestsTab:function(){const t=Symbol("handled");ge.onDocMutations((()=>{const e=ge.$(this._sel.requestsTabContent);e&&(e[t]||(e[t]=!0,e.insertAdjacentHTML("beforeend",'<div class="RequestsCount"></div>')))})),ge.onDocMutations((()=>{const t=ge.$(this._sel.requestsTabText);if(!t)return;const e=Number(t.innerText.replace(/\D/g,"")),o=document.querySelector(".RequestsCount");o&&(o.innerText=`+${e||""}`)})),ge.insertMultistyle`
      <style>
        ${this._sel.requestsTab} {
          max-width: 50px;
        }
        ${this._sel.requestsTabContent} {
          color: rgb(var(--ig-primary-button));
        }
        ${this._sel.requestsTabText} {
          display: none;
        }
      </style>
    `},_refresh:function(){location.reload()},_goToInbox:async function(){const t=await Mt("nav");t&&t.push("/direct/inbox/")},_miscStyleAdjustments:function(){ge.insertMultistyle`
      <style>
        * {
          outline: none;
        }

        ::-webkit-scrollbar {
          display: none;
        }

        :root {
          ${this._sel.bottomToolbarHeightVar}: 0;
        }

        ${this._sel.menuPanel} {
          display: none;
        }

        ${this._sel.pageContent} {
          width: 100%;
        }

        ${this._sel.header} {
          height: 0;
          min-height: 0;
          padding: 0;
          position: relative;
        }

        ${this._sel.headerUserSelect} {
          display: none;
        }

        ${this._sel.headerWriteButton} {
          position: absolute;
          top: 6px;
          left: 238px;
          padding: 0;
        }

        ${this._sel.headerNoFoldersContainer} {
          height: 54px;
          border-bottom: 1px solid;
          border-color: #dbdbdb;
          border-color: rgb(var(--ig-separator));
          padding: 0 0 0 4px;
          box-sizing: border-box;
        }

        ${this._sel.headerNoFoldersTab} {
          flex-grow: 0;
          padding: 20px 12px 14px;
        }
        ${this._sel.headerNoFoldersTab} * {
          font-size: 14px;
          font-weight: 500;
        }

        ${this._sel.folderTab} {
          padding: 20px 8px 14px;
          max-width: 90px;
        }

        ${this._sel.chatItem} {
          padding: 10px;
        }

        ${this._sel.chatItemContent} {
          max-width: 270px;
        }

        ${this._sel.chatItemSkeleton} {
          max-width: 270px;
          padding: 10px;
        }

        ${this._sel.chatItemTitle} {
          width: 100%;
        }

        ${this._sel.chatHeader} {
          height: 54px;
          min-height: 54px;
        }

        ${this._sel.chatHeaderAvatar},
        ${this._sel.chatHeaderAvatarContainer} {
          width: 30px;
          height: 30px;
        }

        ${this._sel.chatHeaderTitle} {
          width: 100%;
        }

        ${this._sel.writeInput} {
          max-height: 50vh;
        }

        ${this._sel.writeInputContainer} {
          padding-top: 8px;
          padding-bottom: 8px;
        }

        ${this._sel.mediaViewerVideo} {
          height: calc(100vh - 120px);
        }

        ${this._sel.requestsDescription} {
          width: 290px;
          box-sizing: border-box;
        }
      </style>
    `}};const{$iframeBus:me}=app;he.ghostModeController={init:function(){this._initEnabled(),me.on("dm.set-ghost-mode-enabled",this._setEnabled.bind(this))},_initEnabled:async function(){const t=await me.send("dm.is-ghost-mode-enabled");this._setEnabled(t)},_setEnabled:async function(t){inssist.dm.ghostModeEnabled=t}};const{$utils:ye}=app;he.inputRestoreController={init:function(){(function(){be=ye.ls.get(ve,{});for(const t in be){for(const e in be[t])0===be[t][e].trim().length&&delete be[t][e];0===Object.keys(be[t]).length&&delete be[t]}})(),async function(){const t=Pt.controller.getConfig().dmSelectors,e=await Mt("store"),o=await Mt("add-dispatch-listener");if(!e||!o)return;let i;try{i=e.getState().users.viewerId}catch(t){return void console.error("dm injection input restore controller:","failed to get viewerId")}if(!i)return;const n=be[i]||(be[i]={});o((e=>{if("NAVIGATION_LOCATION_CHANGED"!==e.type)return;if(!e.nextPath.startsWith("/direct/t/"))return;const o=e.nextPath.replace("/direct/t/","");if(!o)return;const i=n[o];i&&setTimeout((()=>{const e=ye.$(t.general.textarea);e&&(e.focus(),document.execCommand("insertText",!1,i))}))}));let r=null;ye.onDocMutations((()=>{const o=ye.$(t.general.textarea);if(!o)return;const i=e.getState().navigation.route.split("/direct/t/")[1];(n[i]||"")!==o.value&&(n[i]=o.value,clearTimeout(r),r=setTimeout((()=>{ye.ls.set(ve,be)}),300))}))}()}};const ve="inssist.dm.input-restore-texts";let be={};const{$utils:_e}=app;let xe;async function Pe(t){const e=await async function(t){const e="A"===t.tagName?t:t.querySelector("a");if(e)return e.href.split("/").pop();const o=(await Mt("store")).getState();return(o.navigation.route||o.navigation.displayedRoute).split("/").pop()}(t);if(!e)return null;return(await Mt("store")).getState().direct.threads.get(e)||null}he.markSeenController={init:async function(){xe=Pt.controller.getConfig().dmSelectors,async function(){const t=await Mt("store"),e=await Vt("PolarisDirectActionMarkSeen");if(!t||!e)return;const o=Symbol("handled");_e.onDocMutations((()=>{_e.$$(xe.leftPanel.conversationUnreadDot).forEach((i=>{if(i[o])return;i[o]=!0;const n=i.closest(xe.leftPanel.conversationItem);if(!n)return;n.classList.add("mark-seen--unread-thread"),i.insertAdjacentHTML("afterbegin",'\n        <svg class="mark-seen" fresh xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">\n          <path fill="none" d="M0 0h30v30H0z"/>\n          <path d="M14.389 21.257l-1.688-1.725 1.846-2 .793.812 9.878-10.187a.291.291 0 01.226-.1.3.3 0 01.227.1l1.425 1.5a.359.359 0 01.008.473L16.278 21.272h-.008a1.488 1.488 0 01-.939.456 1.42 1.42 0 01-.942-.471zm-6.564 0l-4.536-4.644a.337.337 0 010-.473l1.438-1.475a.308.308 0 01.454 0l3.6 3.681 9.873-10.189a.292.292 0 01.227-.1.3.3 0 01.226.1l1.426 1.5a.362.362 0 01.008.473L9.715 21.272h-.008a1.485 1.485 0 01-.939.456 1.42 1.42 0 01-.948-.471z" fill="currentColor"/>\n        </svg>\n      ');const r=_e.$(".mark-seen[fresh]");r.removeAttribute("fresh"),r.addEventListener("mousedown",(t=>{t.stopPropagation(),t.preventDefault()})),r.addEventListener("click",(async o=>{o.stopPropagation(),o.preventDefault();const i=await Pe(n);t.dispatch(e.markSeen(i.id,i.last_permanent_item,{ignoreGhostMode:!0}))}))}))})),_e.insertMultistyle`
    <style>
      .mark-seen {
        width: 25px;
        position: absolute;
        top: -10px;
        left: -9px;
        color: #738398;
        cursor: pointer;
        transition: color 0.15s;
        display: none;
      }
      .mark-seen:hover {
        color: #1BA2F9;
      }
      .mark-seen--unread-thread:hover .mark-seen {
        display: block;
      }

      .mark-seen--unread-thread:hover ${xe.leftPanel.conversationUnreadDot} {
        background: transparent;
      }
    </style>
  `}()},getThreadDataByThreadElem:Pe};const{$utils:we}=app;he.mediaController={init:function(){this._renderMediaMessages(),this._injectStyles()},_renderMediaMessages:function(){const t=Symbol("handled");we.onDocMutations((()=>{const e=we.$$("[data-media-url]");if(0!==e.length)for(const o of e){if(o[t])continue;o[t]=!0;const e=o.dataset.mediaUrl,i=o.dataset.mediaType,n="image"===i?we.createUrl(inssist.url("/viewer.html"),{src:e}):e;o.innerHTML=`\n          <a class="MediaLink" href="${n}" target="_blank">\n            <div>${"image"===i?"Photo":"Video"}</div>\n            <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="12.5" viewBox="0 0 12.5 12.5">\n              <path d="M2.571,1.028h2.4a.514.514,0,0,1,.07,1.024l-.07,0h-2.4A1.542,1.542,0,0,0,1.033,3.47l-.005.109,0,5.85a1.543,1.543,0,0,0,1.438,1.539l.106,0L8.4,10.963A1.543,1.543,0,0,0,9.938,9.526l0-.106v-2.4a.514.514,0,0,1,1.024-.07l0,.07v2.4a2.572,2.572,0,0,1-2.432,2.568l-.136,0L2.577,12l-.139,0A2.572,2.572,0,0,1,.005,9.566l0-.137L0,3.6l0-.139A2.571,2.571,0,0,1,2.435,1.031ZM7.027,0h4.494L11.59.01l.069.019L11.7.046a.482.482,0,0,1,.1.062l.048.043.057.068.037.062.026.062.013.044.009.044L12,.495v4.48a.514.514,0,0,1-1.024.07l0-.07V1.756L6.02,6.709a.514.514,0,0,1-.67.05l-.058-.05a.514.514,0,0,1-.05-.67l.05-.058,4.95-4.953H7.027a.514.514,0,0,1-.51-.445l0-.07A.514.514,0,0,1,6.957,0Z" transform="translate(0.25 0.25)" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path>\n            </svg>\n          </a>\n        `}}))},_injectStyles:function(){we.insertMultistyle`
      <style>
        .MediaLink {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          padding: 7px 14px 7px 12px;
          margin-top: 4px;
          border-radius: 18px;
          color: #1BA2F9;
          font-weight: 500;
          background: #EFEFEF;
          background: rgb(var(--ig-highlight-background));
          cursor: pointer;
          text-decoration: none;
        }
      </style>
    `}};var Ce={};const{$utils:Se,$iframeBus:$e}=app;Ce.controller={init:function(){this._isDm=Se.iframe.isIframe("inssist-dm"),this._applyInitialTheme(),this._updateThemeOnChange(),Ce.emojiFixer.init()},_applyInitialTheme:async function(){const t=await $e.send("theme.get-theme");this._applyTheme(t)},_updateThemeOnChange:function(){$e.on("theme.switch-theme",(t=>{this._applyTheme(t)}))},_applyTheme:async function(t){if(t&&(Se.docElem.classList.remove("theme-day"),Se.docElem.classList.remove("theme-night"),Se.docElem.classList.add(`theme-${t}`),this._isDm)){const e=await Se.waitFor((()=>inssist.theme.module));if(!e)return;e.setTheme("day"===t?"light":"dark")}}};const{$utils:Me}=app;Ce.emojiFixer={init:function(){this._injectStyles(),this._startEmojiReplacer()},_injectStyles:function(){Me.insertMultistyle`
      <style>
        .theme-night .emoji {
          filter: url(#theme-reverse-filter);
        }
        .theme-night .emoji .emoji {
          filter: none;
        }

        .theme-night input,
        .theme-night textarea,
        .theme-night [contenteditable] {
          filter: url(#theme-filter);
          color: #a0a0a0 !important;
          background: transparent !important;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .theme-night input::placeholder,
        .theme-night textarea::placeholder {
          color: rgba(255, 255, 255, 0.33);
        }
      </style>
    `},_startEmojiReplacer:function(){const t=Pt.controller.getConfig().igSelectors;Me.onDocMutations((function t(e){const i=Me.$("body");if(!i)return;Me.onDocMutations.off(t);new MutationObserver(o).observe(i,{childList:!0,subtree:!0}),o(e)}));let e=!1;function o(o){if(e)return;const i=o.map((t=>Array.from(t.addedNodes))).flat();if(0===i.length)return;const n=window.inssist.theme.emojiRegex,r=(Me.$("body").innerText.match(n)||[]).filter((t=>!"0123456789#*↪".includes(t)));if(0===r.length)return;const a=[],s=Array.from(new Set(r)),l=["input","textarea","[contenteditable]",t.general.postCaption].map((t=>Me.$$(t))).flat();i.forEach((t=>{let e;if(e=t.nodeType===Node.ELEMENT_NODE?t:t.parentElement,!e)return;const o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(;;){const t=o.nextNode();if(!t)break;const e=t.textContent;if(!s.some((t=>e.includes(t))))continue;if(l.some((e=>e.contains(t))))continue;const i=t.parentElement;i.classList.contains("emoji")||(a.includes(i)||a.push(i))}})),requestAnimationFrame((()=>{e=!0,a.forEach((t=>{if(!document.body.contains(t))return;let e=t.innerHTML;s.forEach((t=>{const o=`<span class="emoji">${t}</span>`;e=e.split(o).join("__$%#^__").split(t).join(o).split("__$%#^__").join(o)})),t.innerHTML=e})),e=!1}))}}};var ke={css:"\n  <style>\n    .QuickRepliesToggler {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 8px;\n      cursor: pointer;\n    }\n\n    .QuickRepliesPopup {\n      font-family: Montserrat;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      position: fixed;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      width: 430px;\n      pointer-events: none;\n    }\n\n    .QuickRepliesPopup__body {\n      background: #FFF;\n      border-radius: 4px;\n      overflow: hidden;\n      position: relative;\n      pointer-events: all;\n      transition: opacity 0.3s, transform 0.3s;\n    }\n    .QuickRepliesPopup:not(.QuickRepliesPopup_show) .QuickRepliesPopup__body {\n      opacity: 0;\n      pointer-events: none;\n      transform: translateY(10px);\n    }\n    html.theme-night .QuickRepliesPopup__body {\n      background: #000;\n    }\n\n    /* border */\n    .QuickRepliesPopup__body::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border: 1px solid #DBDBDB;\n      border-radius: inherit;\n      pointer-events: none;\n    }\n    html.theme-night .QuickRepliesPopup__body::before {\n      border-color: #464646;\n    }\n\n    .QuickRepliesPopup__replies {\n      max-height: 400px;\n      overflow: auto;\n\n      /* place items above border */\n      position: relative;\n      z-index: 1;\n    }\n\n    .QuickRepliesPopup__noReplies {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 42px;\n      color: #8E8E8E;\n    }\n\n    .QuickRepliesPopup__reply {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      height: 42px;\n      padding: 0 16px;\n      cursor: pointer;\n    }\n    .QuickRepliesPopup__reply_active {\n      background: #1BA2F9;\n      color: #FFF;\n    }\n    .QuickRepliesPopup__reply b {\n      font-weight: 700;\n    }\n\n    .QuickRepliesPopup__replyShortcut {\n      font-size: 11px;\n      font-weight: 500;\n      border-radius: 4px;\n      background: #F3F3F3;\n      margin-right: 8px;\n      flex-shrink: 0;\n      padding: 2px 6px;\n    }\n    .QuickRepliesPopup__reply_active .QuickRepliesPopup__replyShortcut {\n      background: rgba(255, 255, 255, 0.25);\n    }\n    html.theme-night .QuickRepliesPopup__reply:not(.QuickRepliesPopup__reply_active) .QuickRepliesPopup__replyShortcut {\n      background: #323232;\n    }\n\n    .QuickRepliesPopup__replyContent {\n      font-size: 14px;\n      line-height: 18px;\n      font-weight: 400;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      display: block;\n      flex-shrink: 1;\n    }\n\n    .QuickRepliesPopup__footer {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n      padding: 12px;\n    }\n\n    .QuickRepliesPopup__manageButton {\n      color: #1BA2F9;\n      font-size: 12px;\n      line-height: 15px;\n      font-weight: 600;\n      cursor: pointer;\n      background: transparent;\n      border: none;\n      padding: 0;\n    }\n  </style>\n"};const{$utils:Te,$iframeBus:Ie}=app;ke.controller={init:async function(){this._sel=Pt.controller.getConfig().dmSelectors,this._popup=null,this._input=null,this._preventReplyHover=!1,this._preventHideOnBlur=!1,this._prevState={},this._state={show:!1,replies:[],filterString:null,activeReplyIndex:0},this._keepRepliesInSync(),this._initCss(),this._initPopup(),this._initInput(),this._initToggler(),this._update()},_keepRepliesInSync:function(){(async()=>{const t=await Ie.send("quick-replies.fetch");this._setState({replies:t})})(),Ie.on("quick-replies.update",(t=>{this._setState({replies:t})}))},_initCss:function(){Te.insertMultistyle`${ke.css}`},_initPopup:function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="QuickRepliesPopup">\n        <div class="QuickRepliesPopup__body">\n          <div class="QuickRepliesPopup__replies"></div>\n          <div class="QuickRepliesPopup__footer">\n            <button class="QuickRepliesPopup__manageButton">\n              MANAGE QUICK REPLIES\n            </button>\n          </div>\n        </div>\n      </div>\n    '),this._popup=Te.$(".QuickRepliesPopup"),this._select("manageButton").addEventListener("mousedown",(()=>{Ie.send("quick-replies.toggle"),this._preventHideOnBlur=!0,setTimeout((()=>{this._input&&this._input.focus()}))}))},_initInput:function(){const t=Symbol("handled");Te.onDocMutations((()=>{const e=Te.$(this._sel.writeInput);e&&(e[t]||(e[t]=!0,e.addEventListener("blur",this._onInputBlur.bind(this),!0),e.addEventListener("focus",this._onInputFocus.bind(this),!0),e.addEventListener("keydown",this._onInputKeyDown.bind(this),!0),this._input=e))}))},_initToggler:function(){let t=null;const e=Symbol("handled");Te.onDocMutations((()=>{const o=Te.$(this._sel.writePanelVoiceButton);o?o[e]||(o[e]=!0,o.insertAdjacentHTML("beforebegin",'\n        <div class="QuickRepliesToggler">\n          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18.205 18.5">\n            <path d="M6.481 0h1.711L1.709 18.5H0Zm1.311 16.654a1.325 1.325 0 0 1-1.331-1.355 1.276 1.276 0 0 1 .393-.952 1.3 1.3 0 0 1 .938-.384 1.254 1.254 0 0 1 .923.373 1.3 1.3 0 0 1 .373.962 1.317 1.317 0 0 1-.383.972 1.247 1.247 0 0 1-.913.384Zm4.556 0a1.325 1.325 0 0 1-1.335-1.355 1.276 1.276 0 0 1 .393-.952 1.3 1.3 0 0 1 .943-.383 1.254 1.254 0 0 1 .923.373 1.3 1.3 0 0 1 .373.962 1.317 1.317 0 0 1-.383.972 1.247 1.247 0 0 1-.909.383Zm4.556 0a1.325 1.325 0 0 1-1.335-1.355 1.276 1.276 0 0 1 .393-.952 1.3 1.3 0 0 1 .943-.383 1.254 1.254 0 0 1 .923.373 1.3 1.3 0 0 1 .373.962 1.317 1.317 0 0 1-.383.972 1.247 1.247 0 0 1-.909.383Z" fill="currentColor"/>\n          </svg>\n        </div>\n      '),t=Te.$(".QuickRepliesToggler"),t.addEventListener("click",(()=>{0===this._state.replies.length?Ie.send("quick-replies.toggle"):this._setValue("/")}))):t&&(t.remove(),t=null)}))},_handleEditorUpdate:async function(){const t=this._handleEditorUpdate,e=t._handled_||(t._handled_=Symbol("handled")),o=await this._getEditor();o[e]||(o[e]=!0,o.registerUpdateListener((()=>{const t=this._getFilterString();null===t?(this._setState({show:!1}),setTimeout((()=>{this._setState({filterString:null,activeReplyIndex:0})}),300)):(this._preventReplyHover=!0,this._setState({show:!0,filterString:t,activeReplyIndex:0}))})))},_getFilterString:function(){if(!this._input)return null;const t=this._input.textContent;return 1===t.split("\n").length&&t.startsWith("/")?t.replace("/","").toLowerCase():null},_getEditor:async function(){return await Te.waitFor((()=>inssist.quickReplies.editor))},_select:function(t){return this._popup?Te.$(`.QuickRepliesPopup__${t}`,this._popup):null},_selectAll:function(t){return this._popup?Te.$$(`.QuickRepliesPopup__${t}`,this._popup):[]},_setState:function(t={}){this._prevState={...this._state},this._state={...this._state,...t},this._update()},_onInputBlur:function(){this._preventHideOnBlur?this._preventHideOnBlur=!1:this._setState({show:!1})},_onInputFocus:function(){this._handleEditorUpdate();const t=this._getFilterString();this._setState({show:null!==t})},_onInputKeyDown:function(t){if(this._state.show){if("ArrowUp"===t.key){t.preventDefault();let e=this._state.activeReplyIndex-1;const o=this._getFilteredReplies();return-1===e&&(e=o.length-1),this._setState({activeReplyIndex:e}),void this._scrollToActiveReplyIfNeeded()}if("ArrowDown"===t.key){t.preventDefault();let e=this._state.activeReplyIndex+1;return e===this._getFilteredReplies().length&&(e=0),this._setState({activeReplyIndex:e}),void this._scrollToActiveReplyIfNeeded()}("Enter"===t.key&&!t.shiftKey||"Tab"===t.key)&&(t.preventDefault(),t.stopPropagation(),this._applyActiveReply())}},_getFilteredReplies:function(){const t=this._state.filterString||"";return""===t?this._state.replies:this._state.replies.filter((e=>{const o=(e.shortcut||"")+(e.content||"");return!!o&&Te.fuzzyCheck(o,t,2)}))},_scrollToActiveReplyIfNeeded:function(){this._preventReplyHover=!0;const t=this._select("replies"),e=this._select("reply_active"),o=t.scrollTop,i=t.offsetHeight,n=e.offsetTop,r=e.offsetHeight;o>n?t.scrollTop=n:n+r>o+i&&(t.scrollTop=n-i+r)},_applyActiveReply:function(){const t=this._getFilteredReplies()[this._state.activeReplyIndex];if(!t)return;const e=this._prepareMessage(t.content);this._setValue(e),setTimeout((()=>this._setState({show:!1}))),Ie.send("ga.send-event","user","quick-replies:paste")},_prepareMessage:function(t){const e=t.match(/{[^}]*}/g)||[];for(const o of e){const e=o.replace("{","").replace("}","").split("|"),i=this._pickRandom(e);t=t.replace(o,i)}const o=Te.$(this._sel.chatHeaderTitle);if(o){const e=o.innerText;t=t.replaceAll("@name",e).replaceAll("@username",e)}return t},_pickRandom:function(t=[]){return t[Math.round(Math.random()*(t.length-1))]},_setValue:async function(t){if(!this._input)return;const e=await Vt("Lexical"),o=await this._getEditor();this._input.focus(),o.dispatchCommand(e.CLEAR_EDITOR_COMMAND),document.execCommand("insertText",!1,t)},_onReplyMouseEnter:function(t){if(this._preventReplyHover)return void(this._preventReplyHover=!1);const e=t.target.closest(".QuickRepliesPopup__reply"),o=Number(e.dataset.index);this._setState({activeReplyIndex:o})},_onReplyMouseDown:function(){this._preventHideOnBlur=!0,this._applyActiveReply()},_update:function(){const t=this._prevState,e=this._state;if(t.show!==e.show&&this._popup.classList.toggle("QuickRepliesPopup_show",this._state.show),t.filterString!==e.filterString){const t=Te.$(this._sel.writePanel);if(t){const e=t.getBoundingClientRect();this._popup.setAttribute("style",`left: ${Math.round(e.left)}px !important;\n           bottom: ${Math.round(window.innerHeight-e.top+16)}px !important;\n           width: ${Math.round(e.width)}px !important;`)}}if(t.replies!==e.replies||t.filterString!==e.filterString){const t=this._getFilteredReplies();0===t.length?this._select("replies").innerHTML='\n          <div class="QuickRepliesPopup__noReplies">\n            No replies found\n          </div>\n        ':(this._select("replies").innerHTML=t.map(((t,e)=>`\n          <div class="QuickRepliesPopup__reply" data-index="${e}">\n            ${t.shortcut?`\n              <div class="QuickRepliesPopup__replyShortcut">\n                /&thinsp;${t.shortcut}\n              </div>\n            `:""}\n            <div class="QuickRepliesPopup__replyContent">\n              ${t.content}\n            </div>\n          </div>\n        `)).join(""),this._selectAll("reply").forEach((t=>{t.addEventListener("mouseenter",this._onReplyMouseEnter.bind(this)),t.addEventListener("mousedown",this._onReplyMouseDown.bind(this))})))}{const t="QuickRepliesPopup__reply",e="QuickRepliesPopup__reply_active";Te.$$(`.${e}`).forEach((t=>t.classList.remove(e)));const o=Te.$$(`.${t}`)[this._state.activeReplyIndex];o&&o.classList.add(e)}}};const{$utils:Ae}=app;let De,Re,Ee;Ct.controller={init:async function(){De=Pt.controller.getConfig().igSelectors,Re=await Mt("http"),Ee=await Mt("store"),inssist.storyMentions.onStoryCreationReduce((t=>{"STORY_CREATION_SESSION_STARTED"===t.type&&(Be={mentions:[],inputSize:{width:0,height:0},activeMention:null})})),function(){const t=Symbol("handled");Ae.onDocMutations((()=>{const e=Ae.$(De.storyCreation.topRightButtonsContainer);if(!e)return;if(e[t])return;e[t]=!0,"v1"===window.inssist.igBundleVersion?e.insertAdjacentHTML("afterbegin",'\n        <button class="story-add-mention-button">\n          @\n        </button>\n      '):e.insertAdjacentHTML("afterbegin",'\n        <button class="PolarisStoryImageCreationContainer story-add-mention-button">\n          @\n        </button>\n      ');Ae.$(".story-add-mention-button").addEventListener("click",(()=>{Ee.dispatch({type:"STORY_CREATION_ENTER_ADD_TEXT"}),Ee.dispatch({type:"STORY_CREATION_CHANGE_TEXT",rawText:"@",width:21.71875,height:22}),Ee.dispatch({type:"SEARCH_QUERY_CLEARED"});const t=Ae.$(De.storyCreation.textInput);t.textContent="@";const e=document.getSelection(),o=document.createRange();o.setStart(t,1),o.setEnd(t,1),e.removeAllRanges(),e.addRange(o)}))})),Ae.insertMultistyle`
    <style>
      .story-add-mention-button {
        height: 44px;
        position: relative;
        top: -1px;
        margin-right: 7px;
        font-size: 27px;
        font-weight: 500;
        font-family: montserrat;
        color: #FFF;
        background: transparent;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
        border: none;
        outline: none;
        cursor: pointer;
        pointer-events: all;
      }
    </style>
  `}(),function(){const t=Symbol("listenerAdded");Ae.onDocMutations((()=>{const e=Ae.$(De.storyCreation.textInput);e&&(Be.inputSize.width=e.offsetWidth,Be.inputSize.height=e.offsetHeight,e[t]||(e[t]=!0,e.addEventListener("input",(()=>{Be.inputSize.width=e.offsetWidth,Be.inputSize.height=e.offsetHeight}))))}))}(),function(){const t=Symbol("handled");Ae.onDocMutations((()=>{const e=Ae.$(De.storyCreation.mentionReel);e&&(e[t]||(e[t]=!0,Ae.smartHorizontalScroll.init(e)))})),Ae.onDocClick((t=>{const e=t.target.closest(De.storyCreation.mentionReelItem);if(!e)return;const o=Ae.$(De.storyCreation.textInput);if(!o)return;const i=`@${e.innerText}`;o.textContent=i;const n=o.getBoundingClientRect();Ee.dispatch({type:"STORY_CREATION_CHANGE_TEXT",width:n.width,height:n.height,rawText:i}),Ee.dispatch({type:"STORY_CREATION_SAVE_TEXT",renderText:[i],timeSpent:5e3})})),Ae.insertMultistyle`
    <style>
      ${De.storyCreation.mentionReelItem} {
        cursor: pointer;
      }

      ${De.storyCreation.textInput} {
        position: relative;
        top: 20px;
      }
    </style>
  `}(),inssist.storyMentions.onStoryCreationReduce(((t,e)=>{if("STORY_CREATION_SAVE_TEXT"!==t.type)return;if(1!==t.renderText.length)return;if(!t.renderText[0].startsWith("@"))return;const o=t.renderText[0].replace("@","");if(Be.activeMention)Object.assign(Be.activeMention,{username:o,width:Be.inputSize.width,height:Be.inputSize.height});else{const t=e.canvasStickers.find((t=>t.rawText===`@${o}`));if(!t)return;Be.mentions.push({username:o,x:t.x,y:t.y,width:Be.inputSize.width,height:Be.inputSize.height})}})),inssist.storyMentions.onStoryCreationReduce(((t,e)=>{if("STORY_CREATION_CHANGE_STICKER_ORDER"!==t.type)return;const o=t.bumpIndex,i=e.canvasStickers[o];if(i&&i.rawText&&i.rawText.startsWith("@")){const t=i.rawText.replace("@",""),e=Be.mentions.find((e=>e.username===t));Be.activeMention=e||null}else Be.activeMention=null})),inssist.storyMentions.onStoryCreationReduce((t=>{"STORY_CREATION_ENTER_ADD_TEXT"===t.type&&(Be.activeMention=null)})),inssist.storyMentions.onStoryCreationReduce((t=>{"STORY_CREATION_MOVE_CANVAS_STICKER"===t.type&&Be.activeMention&&(Be.activeMention.x+=t.deltaX,Be.activeMention.y+=t.deltaY)})),inssist.storyMentions.onStoryCreationReduce((t=>{"STORY_CREATION_DELETE_CANVAS_STICKER"===t.type&&Be.activeMention&&Ae.removeFromArray(Be.mentions,Be.activeMention)})),function(){if(!Re)return;const t=Re.post;Re.post=(...e)=>(e[0].includes("/create/configure_to_story")&&Be.mentions.length>0&&(e[1]={...e[1],reel_mentions:JSON.stringify(Le())}),t.call(Re,...e))}()},getMentions:Le};let Be={mentions:[],inputSize:{width:0,height:0},activeMention:null};function Le(){const t=t=>Math.round(1e4*t)/1e4;return Be.mentions.map((e=>{const o=JSON.parse(JSON.stringify(Ee.getState())).users.usernameToId[e.username];if(!o)return null;const i=Ae.$(De.storyCreation.root)||document.body;return{user_id:o,x:t(Math.max(0,e.x/i.offsetWidth)),y:t(Math.max(0,e.y/i.offsetHeight)),width:t(e.width/i.offsetWidth),height:t(e.height/i.offsetHeight),rotation:0}})).filter(Boolean)}var Fe={};const{$iframeBus:Oe}=app;Fe.controller={init:function(){Oe.on("cdn-proxy.fetch",this._fetchUrl.bind(this))},_fetchUrl:async function(t){if(!t)return null;try{const e=await fetch(t);if(!e||!e.ok)return null;const o=await e.blob();return URL.createObjectURL(o)}catch{return null}}};var He={};const{$utils:Ve}=app;He.controller={init:async function(){if((await Ve.waitFor((()=>document.documentElement))).classList.contains("touch"))return;if(window.opener&&location.pathname.startsWith("/accounts/login/"))return;(await Ve.waitFor((()=>document.body))).insertAdjacentHTML("beforeend",`\n    <button class="open-in-inssist open-in-inssist_below">\n      <div class="open-in-inssist__main">\n        <img class="open-in-inssist__icon" src="${window.inssist.url("/img/icon-128.png")}"/>\n        <span class="open-in-inssist__label">OPEN IN INSSIST</span>\n      </div>\n      <div class="open-in-inssist__smile">\n        <span class="open-in-inssist__smile-icon">${function(){const t=Array.from(Ne).filter((t=>t.trim().length>0)),e=Math.floor(Date.now()/Ve.time.DAY)%t.length;return t[e]}()}</span>\n        <span class="open-in-inssist__smile-text">smile of the day</span>\n      </div>\n    </button>\n  `);const t=Ve.$(".open-in-inssist");setTimeout((()=>{t.classList.remove("open-in-inssist_below")}),300),t.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),Ve.setCookie("open-in-inssist",location.pathname)}),!0),Ve.onDocMutations((()=>{t.classList.toggle("open-in-inssist_hidden",!("www.instagram.com"===location.host||"instagram.com"===location.host))})),Ve.insertMultistyle`
    <style>
      .open-in-inssist {
        position: fixed;
        right: 26px;
        bottom: 0;
        padding: 0;
        background: #F7F7F9;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 4px 4px 0 0;
        cursor: pointer;
        border: none;
        transform: translateY(128px);
        transition: transform 350ms;
        z-index: 99999;
      }
      .open-in-inssist:hover {
        transform: none;
      }
      .open-in-inssist_below {
        transform: translateY(100%);
      }
      .open-in-inssist_hidden {
        display: none;
      }

      .open-in-inssist__main {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 17px 7px 12px;
      }

      .open-in-inssist__icon {
        width: 22px;
        height: 22px;
        margin-right: 8px;
      }

      .open-in-inssist__label {
        font-family: 'Montserrat';
        color: #556180;
        font-size: 12px;
        font-weight: 600;
      }

      .open-in-inssist__smile {
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .open-in-inssist__smile-icon {
        font-size: 64px;
        line-height: 78px;
        height: 78px;
      }

      .open-in-inssist__smile-text {
        font-family: 'Nunito Sans';
        font-size: 9px;
        color: #000000;
        opacity: 0.6;
      }

      @media (max-width:  900px) {
        .open-in-inssist {
          display: none;
        }
      }
    </style>
  `}};const Ne="\n  🤯🤗🧐🙃😝🤒🤓😑😊😯🙂🤧🥳\n  😬🥰🤪🤨😘🥴🤣😄😀😶😚😖😋\n  😛😵😜😷😴🤔😐😗😃😁🥶🤑😎\n  😉🤫😳😡😱😤😍🤩🤐🤭😇😅😲\n  😂😏😙😆🙄😌😮🥺😈🤤\n";const{$newPostExtra:ze,$utils:je,$iframeBus:Ue}=app;let Ge,We;ze.controller={init:function(){Ge=Pt.controller.getConfig().igSelectors,We=document.documentElement,function(){const t=Symbol("handled");je.onDocMutations((()=>{const e=je.$(Ge.postCreation.captionContainer);e&&(e[t]||(e[t]=!0,e.insertAdjacentHTML("afterend",Ye())))}))}(),We.addEventListener("click",(t=>{const e=t.target.closest(".new-post-extra__button-cancel"),o=t.target.closest(".new-post-extra__button");if(!o)return;const i=o.dataset.option;e?Ue.send("new-post-extra.cancel-click",i):Ue.send("new-post-extra.option-click",i)})),function(){const t=()=>{const t=je.$(".new-post-extra");if(t){t.outerHTML=Ye();{const t=je.$(Ge.postCreation.submitPostButton);t.originalText||(t.originalText=t.innerText),t.innerText="draft"===qe.laterPillData.date?"Draft":qe.laterPillData.date?"Schedule":t.originalText}}};Ue.on("new-post-extra.synch-selected-option",(e=>{qe.selectedOption=e,t()})),Ue.on("new-post-extra.update-pill-music",(({name:e})=>{qe.musicPillData.name=e,t()})),Ue.on("new-post-extra.update-pill-cover",(({hasCover:e})=>{qe.coverPillData.hasCover=e,t()})),Ue.on("new-post-extra.update-pill-later",(({date:e,dateStr:o})=>{qe.laterPillData.date=e,qe.laterPillData.dateStr=o,t()}))}(),async function(){const t=await Mt("store");if(!t)return;let e=null;t.subscribe((()=>{var o;const i=null===(o=t.getState().creation)||void 0===o?void 0:o.sourceVideo,n=i&&i.dataURL||null;e!==n&&(We.classList.toggle("new-post-extra--video",!!n),e=n,n&&Ue.send("new-post-extra.creation-video-change",n))}))}(),async function(){Jt.on("ig.creation-session-start",(()=>{qe.musicPillData={name:null},qe.coverPillData={hasCover:!1}}))}(),async function(){const t=await Mt("store");if(!t)return;let e=!1;je.onDocMutations((()=>{const o=!!je.$(Ge.postCreation.captionTextarea);if(e!==o)if(e=o,e){const e=t.getState(),o=!!je.$(Ge.postCreation.previewPostTypeIcon)?je.safe((()=>e.creation.sourceVideo.uploadMediaDurationMs),0):0;Ue.send("new-post-extra.enter-page",{videoDurationMs:o})}else Ue.send("new-post-extra.exit-page")}))}(),je.insertMultistyle`
    <style>
      .new-post-extra {
        background: #FFF;
        border-bottom: 1px solid #DBDBDB;
        padding: 4px 0;
      }

      .new-post-extra__button {
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        background: transparent;
        padding: 3px 18px 3px 8px;
        cursor: pointer;
        width: 100%;
      }
      /* not video? => hide cover assist and music assist buttons */
      html:not(.new-post-extra--video) .new-post-extra__button[data-option="cover-assist"],
      html:not(.new-post-extra--video) .new-post-extra__button[data-option="music-assist"] {
        display: none;
      }

      .new-post-extra__button-pill {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 3px 6px 3px 6px;
        border-radius: 4px;
        background: transparent;
      }
      .new-post-extra__button_can-cancel .new-post-extra__button-pill {
        background: #EFEFEF;
      }

      .new-post-extra__button-icon {
        width: 24px;
        height: 24px;
        margin-right: 12px;
        color: #738398;
        flex-shrink: 0;
      }

      .new-post-extra__button-text {
        font-family: Montserrat;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 190px;
        white-space: nowrap;
      }

      .new-post-extra__button-cancel {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-left: 8px;
        color: #000;
        flex-shrink: 0;
        position: relative;
        border-radius: 50%;
        transition: background 0.3s;
      }
      .new-post-extra__button-cancel:hover {
        background: #D6D6D6;
      }
      .new-post-extra__button:not(.new-post-extra__button_can-cancel) .new-post-extra__button-cancel {
        display: none;
      }

      .new-post-extra__pro-badge {
        padding: 2px 8px 3px;
        border-radius: 3px;
        background: linear-gradient(183deg, #fd7726 -14%, #ef1834 60%, #c70bc0 128%);
        font-size: 9px;
        line-height: 11px;
        font-weight: 600;
        color: #FFF;
        margin-left: 16px;
      }

      .new-post-extra__button-chevron-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        box-sizing: border-box;
        padding: 4px 6px;
        margin-left: auto;
        color: #A5A7AA;
        position: relative;
        right: -5px;
      }
      .new-post-extra__button_selected .new-post-extra__button-chevron-icon {
        color: #FFF;
        background: #1BA2F9;
      }
    </style>
  `},getCtx:function(){return qe}};const qe={selectedOption:null,musicPillData:{name:null},coverPillData:{hasCover:!1},laterPillData:{date:null,dateStr:null}};function Ye(){const t='\n    <svg\n      class="new-post-extra__button-chevron-icon"\n      xmlns="http://www.w3.org/2000/svg"\n      width="7.5"\n      height="12.357"\n      viewBox="0 0 7.5 12.357">\n      <path d="M7.301 6.659l-5.5 5.5a.679.679 0 01-.961 0l-.641-.641a.679.679 0 010-.959l4.358-4.38L.198 1.8a.679.679 0 010-.959L.839.2A.679.679 0 011.8.2l5.5 5.5a.679.679 0 01.001.959z" fill="currentColor"/>\n    </svg>\n  ',e='\n    <div class="new-post-extra__button-cancel">\n      <svg width="8" height="8" viewBox="0 0 8 8">\n        <path d="M6.5-.001 4 2.499l-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5Z" fill="currentColor"/>\n      </svg>\n    </div>\n  ';return`\n    <div class="new-post-extra">\n      \x3c!-- add music --\x3e\n      <button\n        class="\n          new-post-extra__button\n          ${qe.musicPillData.name?"new-post-extra__button_can-cancel":""}\n          ${"music-assist"===qe.selectedOption?"new-post-extra__button_selected":""}\n        "\n        data-option="music-assist">\n        <div class="new-post-extra__button-pill">\n          <svg class="new-post-extra__button-icon" viewBox="0 0 24 24">\n            <path d="M0 0h24v24H0Z" fill="none"/>\n            <path d="M18.5 5.438a.937.937 0 0 0-1.22-.893L7.906 7.313a.937.937 0 0 0-.656.893v7.658a4.052 4.052 0 0 0-.937-.115c-1.554 0-2.813.84-2.813 1.875s1.259 1.877 2.812 1.877 2.812-.839 2.812-1.875v-6.847l7.5-2.2v5.41a4.052 4.052 0 0 0-.937-.115c-1.553 0-2.812.839-2.812 1.875s1.259 1.875 2.812 1.875 2.813-.839 2.813-1.875V5.438Z" fill="currentColor"/>\n          </svg>\n          <div class="new-post-extra__button-text">\n            ${qe.musicPillData.name||"Add Music"}\n          </div>\n          ${e}\n        </div>\n        ${t}\n      </button>\n\n      \x3c!-- change cover --\x3e\n      <button\n        class="\n          new-post-extra__button\n          ${qe.coverPillData.hasCover?"new-post-extra__button_can-cancel":""}\n          ${"cover-assist"===qe.selectedOption?"new-post-extra__button_selected":""}\n        "\n        data-option="cover-assist">\n        <div class="new-post-extra__button-pill">\n          <svg class="new-post-extra__button-icon" viewBox="0 0 24 24">\n            <path d="M0 0h24v24H0Z" fill="none"/>\n            <path d="M6 19.5A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5h12A1.5 1.5 0 0 1 19.5 6v12a1.5 1.5 0 0 1-1.5 1.5Zm10.055-1.4h2.021v-2.02l-4.037-4.037 2.016-2.021 2.021 2.021V5.986H5.962v6.057l2.021-2.021Z" fill="currentColor"/>\n          </svg>\n          <div class="new-post-extra__button-text">\n            ${qe.coverPillData.hasCover?"Custom Cover":"Change Cover"}\n          </div>\n          ${e}\n        </div>\n        ${t}\n      </button>\n\n      \x3c!-- post later --\x3e\n      <button\n        class="\n          new-post-extra__button\n          ${qe.laterPillData.dateStr?"new-post-extra__button_can-cancel":""}\n          ${"later"===qe.selectedOption?"new-post-extra__button_selected":""}\n        "\n        data-option="later">\n        <div class="new-post-extra__button-pill">\n          <svg class="new-post-extra__button-icon" viewBox="0 0 24 24">\n            <path d="M0 0h24v24H0Z" fill="none"/>\n            <path d="M11.407 19.958a8.271 8.271 0 0 1-.819-.125c-.266-.054-.532-.123-.791-.2s-.511-.173-.758-.277a8.274 8.274 0 0 1-4.39-4.39c-.1-.247-.2-.5-.277-.758s-.149-.525-.2-.791a8.282 8.282 0 0 1-.125-.819 8.377 8.377 0 0 1 0-1.687 8.282 8.282 0 0 1 .125-.819c.054-.266.123-.532.2-.791s.173-.511.277-.758a8.274 8.274 0 0 1 4.39-4.39c.247-.1.5-.2.758-.277s.525-.149.791-.2a8.27 8.27 0 0 1 .819-.125 8.374 8.374 0 0 1 1.687 0 8.269 8.269 0 0 1 .819.125c.266.054.532.123.791.2s.511.173.758.277a8.274 8.274 0 0 1 4.39 4.39c.1.247.2.5.277.758s.149.525.2.791a8.282 8.282 0 0 1 .125.819 8.377 8.377 0 0 1 0 1.687 8.282 8.282 0 0 1-.125.819c-.054.266-.123.532-.2.791s-.173.511-.277.758a8.274 8.274 0 0 1-4.39 4.39c-.247.1-.5.2-.758.277s-.525.149-.791.2a8.27 8.27 0 0 1-.819.125 8.373 8.373 0 0 1-1.687 0Zm-.48-14.641a6.531 6.531 0 0 0-2.348.988A6.586 6.586 0 0 0 6.2 9.194a6.534 6.534 0 0 0-.383 1.233 6.63 6.63 0 0 0 0 2.647 6.531 6.531 0 0 0 .988 2.348 6.586 6.586 0 0 0 2.889 2.379 6.532 6.532 0 0 0 1.233.383 6.63 6.63 0 0 0 2.647 0 6.531 6.531 0 0 0 2.348-.988 6.586 6.586 0 0 0 2.379-2.889 6.535 6.535 0 0 0 .383-1.233 6.63 6.63 0 0 0 0-2.647 6.53 6.53 0 0 0-.988-2.348A6.586 6.586 0 0 0 14.807 5.7a6.534 6.534 0 0 0-1.233-.383 6.631 6.631 0 0 0-2.647 0Zm.907 8.241a1.047 1.047 0 0 1-1.011-1.011v-3.4a.965.965 0 1 1 1.93 0v2.476h1.2a.965.965 0 0 1 0 1.93Z" fill="currentColor"/>\n          </svg>\n          <div class="new-post-extra__button-text">\n            ${qe.laterPillData.dateStr||"Post Later"}\n          </div>\n          ${e}\n        </div>\n        ${t}\n      </button>\n\n      \x3c!-- hashtag assistant --\x3e\n      <button\n        class="\n          new-post-extra__button\n          ${"tag-assist"===qe.selectedOption?"new-post-extra__button_selected":""}\n        "\n        data-option="tag-assist">\n        <div class="new-post-extra__button-pill">\n          <svg class="new-post-extra__button-icon" viewBox="0 0 24 24">\n            <path d="M0 0h24v24H0Z" fill="none"/>\n            <path d="M16.013 13.928h2.934v2.46h-3.228L15.268 20h-2.551l.451-3.611H9.851L9.399 20H6.871l.451-3.611H4.366v-2.461h3.25l.47-3.656H5.133v-2.46h3.253L8.835 4.2h2.528l-.451 3.611h3.318l.456-3.611h2.528l-.451 3.611h2.934l.023 2.46h-3.25Zm-2.551 0 .474-3.656h-3.318l-.474 3.656Z" fill="currentColor"/>\n          </svg>\n          <div class="new-post-extra__button-text">\n            Hashtag Assistant\n          </div>\n          ${e}\n        </div>\n        ${t}\n      </button>\n    </div>\n  `}const{$iframeBus:Xe}=app;ie.bitrateController={init:function(){this._defineAdjustBitrateInterceptor()},_defineAdjustBitrateInterceptor:function(){ie.define("adjustBitrate",(async t=>{const e=await Xe.send("igInterceptor.adjustBitrate",t[0].file);e&&(t[0].file=e,t[0].dataURL=URL.createObjectURL(e))}))}},ie.controller={init:function(){ie.define=this._define.bind(this),this._interceptors={},this._interceptUploadVideo(),this._interceptUploadPhoto(),ie.bitrateController.init(),ie.metadataController.init()},_define:function(t,e){this._interceptors[t]=e},_interceptUploadVideo:async function(){const t=await Vt("PolarisAPIRuploadVideo",null);if(!t)return;const e=t.ruploadVideo.bind(t);t.ruploadVideo=async(...t)=>{await this._call("adjustBitrate",t),await this._call("stripMetadata",t),await this._call("addMusic",t);const o=await this._call("splitStoryIntoChunks",t,e);return o||e(...t)}},_interceptUploadPhoto:async function(){const t=await Vt("PolarisAPIRuploadPhoto",null);if(!t)return;const e=t.ruploadPhoto.bind(t);t.ruploadPhoto=async(...t)=>{const o=await this._call("uploadCoversForStoryChunks",t,e);return o||e(...t)}},_call:async function(t,...e){const o=this._interceptors[t];if(o)return o(...e);console.error(`[$igInterceptor] unable to find "${t}" interceptor`)}};const{$iframeBus:Qe}=app;ie.metadataController={init:function(){this._defineStripMetadataInterceptor()},_defineStripMetadataInterceptor:function(){ie.define("stripMetadata",(async t=>{const e=await Qe.send("igInterceptor.stripMetadata",t[0].file);e&&(t[0].file=e,t[0].dataURL=URL.createObjectURL(e))}))}};const{$reels:Ke}=app;Ke.patchHttp=(t,{isCreatingReels:e=(()=>!1),isSharingToFeed:o=(()=>!1),onSuccess:i=(()=>{})})=>{const n=t.post;t.post=async(...r)=>{if(!e())return n.call(t,...r);if(r[0].includes("/rupload_igvideo")){const e=r[2].headers,o=JSON.parse(e["X-Instagram-Rupload-Params"]);return o.is_igtv_video=!1,o.is_clips_video=!0,o.is_unified_video=!1,o.uses_original_audio=!0,o.audio_type="original_sounds",e["X-Instagram-Rupload-Params"]=JSON.stringify(o),n.call(t,...r)}if(r[0].includes("/create/configure")||r[0].includes("/media/configure")||r[0].includes("/igtv/configure_to_igtv")){r[0]="https://i.instagram.com/api/v1/media/configure_to_clips/",r[1].clips_uses_original_audio=1,r[1].uses_original_audio=1,r[1].original_audio=1,r[1].audio=1,r[1].clips_audio=1,r[1].clips_with_audio=1,r[1].with_audio=1,r[1].enable_audio=1,r[1].clips_enable_audio=1,r[1].clips_audio_enable=1,r[1].audio_enable=1,r[1].audio_type="original_sounds",r[1].clips_share_preview_to_feed=o()?1:0;const e=await n.call(t,...r);return"ok"===(null==e?void 0:e.status)&&i(),e}return n.call(t,...r)}};const{$utils:Ze}=app,Je=Symbol("anchor");function to({class:t,style:e,text:o,anchor:i,atCenter:n=!1}){const r=to;r.initialized||(r.initialized=!0,Ze.onDocMutations((()=>{Ze.$$(".tooltip").forEach((t=>{const e=t[Je];document.body.contains(e)||t.remove()}))})),Ze.insertMultistyle`
    <style>
      .tooltip {
        display: block;
        position: absolute;
        margin-top: 12px;
        margin-left: 4px;
        padding: 8px 10px;
        color: #FFF;
        background: #1BA2F9;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        font-family: Montserrat;
        opacity: 0;
        pointer-events: none;
        transform: translateY(2px);
        transition: transform 0.2s, opacity 0.2s;
        z-index: 99999;
      }
      .tooltip_shown {
        opacity: 1;
        transform: none;
      }
      .theme-night .tooltip {
        filter: url(#theme-reverse-filter);
        background: #33ABF8;
      }

      /* triangle */
      .tooltip::before {
        content: '';
        position: absolute;
        right: 6px;
        bottom: 100%;
        border: 3px solid transparent;
        border-left-width: 4px;
        border-right-width: 4px;
        border-bottom-color: #1BA2F9;
      }
      .theme-night .tooltip::before {
        border-bottom-color: #1BA2F9;
      }
      .tooltip_at-center::before {
        right: calc(50% - 4px);
      }

      .tooltip b {
        font-weight: 700;
      }
      .tooltip code {
        white-space: nowrap;
        padding: 1px 5px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.25);
      }
    </style>
  `);const a=document.createElement("div");a.innerHTML=`\n    <div\n      class="${t||""} tooltip ${n?"tooltip_at-center":""}"\n      ${e?`style="${e}"`:""}>\n      ${o}\n    </div>\n  `;const s=a.firstElementChild;document.body.insertAdjacentElement("afterend",s),s[Je]=i,i.addEventListener("mouseenter",(()=>{let t,e;const o=i.getBoundingClientRect();n?(t=Math.round(o.left+o.width/2-s.offsetWidth/2-4),e=Math.round(o.top+o.height)):(t=Math.round(o.left+o.width-s.offsetWidth),e=Math.round(o.top+o.height)),s.style.left=`${t}px`,s.style.top=`${e}px`,s.classList.add("tooltip_shown")})),i.addEventListener("mouseleave",(()=>{s.classList.remove("tooltip_shown")}))}const{$reels:eo,$utils:oo,$iframeBus:io}=app;let no,ro,ao;eo.controller={init:async function(){if(no=Pt.controller.getConfig().igSelectors,ro=await Mt("http"),ao=await Mt("store"),!ro||!ao)return;eo.patchHttp(ro,{isCreatingReels:()=>so.creatingReels,isSharingToFeed:()=>so.shareToFeed,onSuccess:()=>{io.send("reels.submit-success")}}),function(){const t=Symbol("handled");oo.onDocMutations((async()=>{if(!so.creatingReels)return;const e=oo.$(no.postCreation.submitPostButton);if(!e)return;if(e[t])return;e[t]=!0;const o=await io.send("reels.is-pro");e.addEventListener("click",(t=>{o||(t.preventDefault(),t.stopPropagation(),io.send("reels.open-billing"))}),{capture:!0}),o||(e.style.opacity=.5,to({style:"width: 100%; max-width: 280px;",anchor:e,text:"\n          Posting Reels is a PRO feature, please consider\n          upgrading to publish Reels from the Desktop.\n        "}))}))}(),function(){const t=Symbol("handled");oo.onDocMutations((()=>{if(!so.creatingReels)return;const e=oo.docElem.dataset.page;if(!("CreationStylePage"===e||"CreationDetailsPage"===e))return;const o=oo.$(no.general.headerTitle);o&&(o[t]||(o[t]=!0,o.innerText="New Reel"))})),oo.insertMultistyle`
    <style>
      /* hide "Advanced Posting Options" section */
      .reels--creating-reels .extended-post-creation {
        display: none;
      }
    </style>
  `}(),function(){const t=Symbol("handled");oo.onDocMutations((async()=>{if(!so.creatingReels)return;const e=oo.$(no.postCreation.captionContainer);if(!e)return;if(e[t])return;e[t]=!0;const o=await io.send("reels.get-trial-data");if(o.hasPro)return;e.insertAdjacentHTML("beforebegin",`\n      <div class="ReelsUpgradeToProBar">\n        <div class="ReelsUpgradeToProBar__text">\n          Free Reels Remaining: ${o.freeReels} / ${o.maxFreeReels}\n        </div>\n        <button class="ReelsUpgradeToProBar__button">\n          Get Unlimited Reels\n        </button>\n      </div>\n    `);oo.$(".ReelsUpgradeToProBar__button").addEventListener("click",(()=>{io.send("reels.open-billing")}))})),oo.insertMultistyle`
    <style>
      .ReelsUpgradeToProBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
      }

      .ReelsUpgradeToProBar__text {
        margin-right: 24px;
        white-space: nowrap;
      }

      .ReelsUpgradeToProBar__button {
        font-size: inherit;
        color: #0095F6;
        border: none;
        cursor: pointer;
        padding: 0;
        font-weight: 500;
        background: transparent;
      }
    </style>
  `}(),function(){const t=Symbol("handled");oo.onDocMutations((()=>{if(!so.creatingReels)return;const e=oo.$(no.postCreation.body);if(!e)return;if(e[t])return;e[t]=!0,e.insertAdjacentHTML("beforeend",`\n      <div class="reels-share-to-feed ${so.shareToFeed?"reels-share-to-feed_on":""}">\n        <button class="reels-share-to-feed__button clickable">\n          <div class="reels-share-to-feed__checkbox">\n            <svg class="reels-share-to-feed__checkbox-icon-empty" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n              <path fill="none" d="M0 0h24v24H0z"/>\n              <path d="M19 5v14H5V5zm0-2H5a2.006 2.006 0 00-2 2v14a2.006 2.006 0 002 2h14a2.006 2.006 0 002-2V5a2.006 2.006 0 00-2-2z" fill="#1ba2f9" fill-rule="evenodd"/>\n            </svg>\n            <svg class="reels-share-to-feed__checkbox-icon-checked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n              <path fill="none" d="M0 0h24v24H0z"/>\n              <path d="M19 3H5a2.006 2.006 0 00-2 2v14a2.006 2.006 0 002 2h14a2.006 2.006 0 002-2V5a2.006 2.006 0 00-2-2zm-9 14l-5-5 1-1 4 3 8-7 1 1-9 9z" fill="#1ba2f9" fill-rule="evenodd"/>\n            </svg>\n          </div>\n          <div class="reels-share-to-feed__label">\n            Also Share to Feed\n          </div>\n        </button>\n        <div class="reels-share-to-feed__preview">\n          <div class="reels-share-to-feed__preview-image"></div>\n          <div class="reels-share-to-feed__preview-caption">Feed Post Preview</div>\n        </div>\n      </div>\n    `);const o=oo.$(".reels-share-to-feed");oo.$(".reels-share-to-feed__button").addEventListener("click",(()=>{so.shareToFeed=!so.shareToFeed,o.classList.toggle("reels-share-to-feed_on")}))}));const e=()=>{var t,e;if(!so.creatingReels)return;const o=null===(t=ao.getState().creation)||void 0===t||null===(e=t.coverPhoto)||void 0===e?void 0:e.dataURL;if(!o)return;const i=oo.$(".reels-share-to-feed__preview-image");i&&(i.style.backgroundImage=`url('${o}')`)};oo.onDocMutations(e),ao.subscribe(e),oo.insertMultistyle`
    <style>
      .reels-share-to-feed {
        margin-top: 12px;
        padding: 5px 0;
        background: #FFF;
        border-top: 1px solid #DBDBDB;
        border-bottom: 1px solid #DBDBDB;
      }

      .reels-share-to-feed__title {
        padding: 12px 16px 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        font-family: Montserrat;
      }

      .reels-share-to-feed__warning {
        padding: 8px 16px 4px;
        max-width: 380px;
        font-family: Montserrat;
        line-height: 1.4;
      }

      .reels-share-to-feed__button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 6px 14px;
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        user-select: none;
      }

      .reels-share-to-feed__checkbox {
        display: flex;
        margin-right: 12px;
      }

      .reels-share-to-feed_on .reels-share-to-feed__checkbox-icon-empty {
        display: none;
      }

      .reels-share-to-feed:not(.reels-share-to-feed_on) .reels-share-to-feed__checkbox-icon-checked {
        display: none;
      }

      .reels-share-to-feed__label {
        font-family: Montserrat;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
      }

      .reels-share-to-feed__preview {
        display: block;
        margin: 4px 0 4px 17px;
      }
      .reels-share-to-feed:not(.reels-share-to-feed_on) .reels-share-to-feed__preview {
        display: none;
      }

      .reels-share-to-feed__preview-image {
        width: 100px;
        height: 100px;
        background-size: cover;
        background-position: center;
        border-radius: 4px;
      }

      .reels-share-to-feed__preview-caption {
        font-family: Montserrat;
        font-size: 11px;
        font-weight: 500;
        margin-top: 4px;
        color: #8e8e8e;
      }
    </style>
  `}(),function(){const t=Symbol("handled");oo.onDocMutations((()=>{if(!so.creatingReels)return;const e=oo.$(no.postCreation.imageContainer),o=oo.$(no.postCreation.videoContainer),i=e||o;i&&(i[t]||(i[t]=!0,i.insertAdjacentHTML("beforeend",'\n      <div class="reels-tik-tok-watermark-info">\n        Find more info about posting Instagram Reels in our\n        <a href="https://inssist.com/knowledge-base" target="_blank">Knowledge Base</a> and\n        <a href="https://inssist.com/knowledge-base/sharing-tiktok-to-instagram-reels" target="_blank">Guide</a>.\n      </div>\n    ')))})),oo.insertMultistyle`
    <style>
      .reels-tik-tok-watermark-info {
        display: block;
        padding: 16px 20px 20px 20px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.6;
      }

      .reels-tik-tok-watermark-info ul {
        margin-top: 7px;
        list-style: disc;
      }

      .reels-tik-tok-watermark-info li {
        margin-left: 16px;
        margin-bottom: 4px;
      }
      .reels-tik-tok-watermark-info li:last-child {
        margin-bottom: 0;
      }

      .reels-tik-tok-watermark-info a {
        color: #1BA2F9 !important;
      }
      .theme-nigh .reels-tik-tok-watermark-info a {
        filter: url(#theme-reverse-filter);
        color: #33ABF8 !important;
      }
    </style>
  `}()},isShareToFeed:function(){return so.shareToFeed},isCreatingReels:function(){return so.creatingReels},startReelsCreationSession:function(){const t=ao.getState().creation.sessionId;so.creatingReels=!0,so.shareToFeed=!0,oo.docElem.classList.add("reels--creating-reels"),io.send("reels.creation-session-start"),so.stopSessionWatcher=ao.subscribe((()=>{const e=ao.getState();t!==e.creation.sessionId&&lo()}))},stopReelsCreationSession:lo};const so={shareToFeed:!0,creatingReels:!1,stopSessionWatcher:null};function lo(){so.creatingReels=!1,oo.docElem.classList.remove("reels--creating-reels"),io.send("reels.creation-session-end"),so.stopSessionWatcher&&so.stopSessionWatcher()}const{$coverAssist:co,$utils:po,$iframeBus:uo}=app;let ho;co.controller={init:function(){ho=Pt.controller.getConfig().igSelectors,window.inssist.moduleInterceptor.registerReduxAction("inssist.cover-assist.set-cover",((t,e)=>({...t,creation:{...t.creation,coverPhoto:{...t.creation.coverPhoto,file:e.file,dataURL:e.url,isCustom:!0}}}))),async function(){let t=null;const e=await Mt("store");if(!e)return;uo.on("cover-assist.synch-cover",(o=>{if(!po.$(ho.postCreation.previewPostImage))return;const i=e.getState();o?(i.creation.sessionId!==t&&(t=i.creation.sessionId,go={url:i.creation.coverPhoto.dataURL,blob:i.creation.coverPhoto.file}),e.dispatch({type:"inssist.cover-assist.set-cover",url:URL.createObjectURL(o),file:o})):i.creation.sessionId===t&&e.dispatch({type:"inssist.cover-assist.set-cover",url:go.url,file:go.blob})}))}(),uo.on("cover-assist.get-default-ig-cover-url",fo)}};let go=null;async function fo(){var t,e;const o=await Mt("store");return o?go?go.url:null===(t=o.getState().creation)||void 0===t||null===(e=t.coverPhoto)||void 0===e?void 0:e.dataURL:null}var mo={},yo={};const{$utils:vo}=app;let bo,_o,xo,Po;function wo(t){const e=vo.$(".CreationPopup");e&&e.classList.toggle("CreationPopup_show",t)}yo.controller={init:async function(){if(bo=vt.selectors,_o=await Mt("nav"),xo=await Mt("http"),Po=await Mt("store"),!_o||!xo||!Po)return;vo.onDocMutations((()=>{const t=!vo.$(bo.topNav);document.documentElement.classList.toggle("isSidebarNav",t)})),vo.insertMultistyle`
    <style>
      ${bo.creationLoadingBar} {
        position: absolute;
        top: 0;
      }
    </style>
  `,function(){const t=xo.post.bind(xo);xo.post=(...e)=>(e[0]&&e[0].includes("configure_to_igtv")&&!e[0].endsWith("/")&&(e[0]=`${e[0]}/`),t(...e))}(),function(){let t=!1;const e=Symbol("handled");vo.onDocMutations((()=>{const o=vo.$(bo.newPostButton);o&&(o[e]||(o[e]=!0,o.insertAdjacentHTML("afterend",'\n    <div class="CreationPopup">\n      <div class="CreationPopup__option" data-id="post">\n        <svg class="CreationPopup__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M7.164 22.654A5.17 5.17 0 012 17.49V7.164A5.17 5.17 0 017.164 2H17.49a5.17 5.17 0 015.164 5.164V17.49a5.17 5.17 0 01-5.164 5.164zm0-1.757H17.49a3.794 3.794 0 003.41-3.407V14.8l-3.68-3.661-4.394 5.934L8 14.866 3.766 17.7a3.832 3.832 0 003.398 3.2zM3.757 7.164v8.4L7.8 12.785l4.5 2.081 4.681-6.525 3.919 3.922v-5.1a3.794 3.794 0 00-3.41-3.406H7.164a3.794 3.794 0 00-3.407 3.407zm3.943.874a1.709 1.709 0 111.7 1.708 1.709 1.709 0 01-1.7-1.708z"\n            fill="currentColor"\n            stroke="#fff"\n            stroke-width=".4"\n          />\n        </svg>\n        New Post\n      </div>\n      <div class="CreationPopup__option" data-id="reel">\n        <svg class="CreationPopup__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M15.548 14.007l-.006-.005-.006-.004-4.696-2.73s0 0 0 0a.736.736 0 00-.381-.113.73.73 0 00-.373.108c-.262.11-.407.371-.407.662v5.464c0 .262.155.511.398.658h0l.009.004a.899.899 0 00.352.098.88.88 0 00.314-.069l.063-.022.012-.004.012-.006 4.697-2.732h0l.001-.001a.743.743 0 00.357-.658c0-.259-.152-.505-.346-.65zM20.764 3.85h0l-.003-.004c-.534-.513-1.125-.945-1.943-1.247-.816-.301-1.85-.47-3.264-.47h-6.5c-1.394 0-2.417.169-3.233.476-.818.307-1.42.75-1.974 1.283h0l-.003.004C3.33 4.428 2.9 5.02 2.599 5.834c-.3.812-.469 1.837-.469 3.234v6.514c0 1.396.169 2.432.475 3.255.306.824.748 1.428 1.282 1.964l.002.002c.534.513 1.126.945 1.943 1.246.816.302 1.85.47 3.264.47h6.5c1.394 0 2.428-.168 3.249-.475.823-.307 1.425-.75 1.96-1.285l.001-.002c.513-.535.944-1.128 1.245-1.947.3-.817.469-1.853.469-3.27V9.068c0-1.397-.169-2.422-.475-3.24-.306-.819-.748-1.422-1.28-1.977zm-5.168-.2c1.31 0 2.174.166 2.788.41.612.244.985.567 1.314.896.466.468.897 1.045 1.149 2.216h-3.665L15.19 3.65h.406zm-6.948 0h4.734l1.991 3.522H10.64L8.648 3.65zM4.952 4.957c.435-.436.982-.87 2.065-1.12l1.897 3.336h-5.11c.25-1.17.682-1.748 1.148-2.216zm16.05 10.667c0 1.313-.167 2.178-.41 2.794-.243.613-.565.987-.894 1.316-.328.33-.712.652-1.33.896-.62.244-1.482.411-2.772.411H9.054c-1.31 0-2.174-.167-2.788-.411-.612-.243-.985-.566-1.314-.896a3.699 3.699 0 01-.893-1.332c-.244-.62-.41-1.486-.41-2.778v-6.93h17.353v6.93z"\n            fill="currentColor"\n            stroke="#fff"\n            stroke-width=".25"\n          />\n        </svg>\n        New Reel\n      </div>\n      <div class="CreationPopup__poweredBy">\n        Powered by INSSIST\n      </div>\n    </div>\n  '),o.addEventListener("click",(e=>{t||(e.preventDefault(),e.stopPropagation(),wo())}))))})),document.addEventListener("click",(()=>{wo(!1)})),document.addEventListener("click",(e=>{const o=e.target.closest(".CreationPopup__option");if(!o)return;const i=o.dataset.id;t=!0,function(t){const e=vo.$(bo.newPostButton);"post"===t?e.click():"reel"===t&&(mo.controller.startReelsCreationSession(),e.click())}(i),t=!1}),{capture:!0})}(),vo.insertMultistyle`
    <style>
      /* show new post menu item when creation injection is ready */
      ${bo.newPostMenuItem} {
        display: flex;
      }

      .CreationPopup {
        position: absolute;
        width: 170px;
        top: calc(100% + 15px);
        padding-top: 8px;
        background: #fff;
        transform: translateX(calc(-50% + 11px));
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        transition: transform 0.3s, opacity 0.3s;
        user-select: none;
        z-index: 1;
      }
      .CreationPopup:not(.CreationPopup_show) {
        pointer-events: none;
        transform: translateX(calc(-50% + 11px)) translateY(-8px);
        opacity: 0;
      }
      html.isSidebarNav .CreationPopup {
        top: 4px;
        left: 100%;
        transform: none;
      }
      html.isSidebarNav .CreationPopup:not(.CreationPopup_show) {
        transform: translateX(-5px);
      }
      @media (min-width: 1264px) { /* full width view */
        html.isSidebarNav .CreationPopup {
          margin-left: -20px;
        }
      }
      @media (max-width: 767px) { /* mobile view */
        html.isSidebarNav .CreationPopup {
          top: auto;
          bottom: calc(100% + 6px);
          left: calc(-50% - 31px);
        }
        html.isSidebarNav .CreationPopup:not(.CreationPopup_show) {
          transform: translateY(8px);
        }
      }

      /* triangle  */
      .CreationPopup::before {
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background: inherit;
        box-shadow: inherit;
      }
      html.isSidebarNav .CreationPopup::before {
        top: 28px;
        left: 0;
      }
      @media (max-width: 767px) { /* mobile view */
        html.isSidebarNav .CreationPopup::before {
          display: none;
        }
      }

      .CreationPopup::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: inherit;
        border-radius: inherit;
      }

      .CreationPopup__option {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        cursor: pointer;
        position: relative;
        z-index: 1;
      }
      .CreationPopup__option:hover {
        background: #fafafa;
      }

      .CreationPopup__icon {
        width: 24px;
        height: 24px;
        margin-right: 12px;
      }

      .CreationPopup__poweredBy {
        position: relative;
        z-index: 1;
        padding-top: 3px;
        padding-bottom: 2px;
        margin-top: 8px;
        font-size: 9px;
        text-align: center;
        color: #415B72;
        background: #F7F7F9;
        border-radius: 0 0 4px 4px;
      }

      ${bo.dark} .CreationPopup {
        background: #242526;
      }

      ${bo.dark} .CreationPopup__option:hover {
        background: #2b2c2d;
      }

      ${bo.dark} .CreationPopup__poweredBy {
        color: #65676b;
        background: #0006;
      }
    </style>
  `,function(){let t=0;const e=xo.post.bind(xo);xo.post=async(...o)=>{const i=o[0].includes("/configure_to_clips"),n=o[0].includes("/configure_to_igtv");if(!i&&!n)return e(...o);let r,a;try{r=await e(...o)}catch(t){a=t}if(a||"fail"===r.status){if(t+=1,t<=5)return xo.post(...o);throw t=0,a||new Error("failed to post")}return r}}(),async function(){const t=await Mt("add-dispatch-listener");if(!t)return;t((t=>{var e;"SHOW_NEW_UPLOADED_POST"===t.type&&"clips"===(null===(e=t.post)||void 0===e?void 0:e.productType)&&location.reload()}))}(),function(){let t;vo.onDocMutations((()=>{const e=vo.$(bo.creationPublishingSpinner);if(e)if(t){if(t!==e.src){const t=vo.$(".PublishingTitle"),e=vo.$(".PublishingDisclaimer");t&&t.remove(),e&&e.remove()}}else t=e.src,e.insertAdjacentHTML("afterend",'\n      <div class="PublishingTitle">\n        Publishing Post...\n      </div>\n      <div class="PublishingDisclaimer">\n        Waiting for Instagram to publish the post, this\n        might take a&nbsp;few minutes. Please keep this\n        tab open until Inssist confirms the publish is complete.\n      </div>\n    '),vo.onDocMutations((function t(){if(vo.$(bo.creationPublishingSpinner))return;vo.onDocMutations.off(t);const e=vo.$(".PublishingTitle"),o=vo.$(".PublishingDisclaimer");e&&e.remove(),o&&o.remove()}));else t=null})),vo.insertMultistyle`
    <style>
      .PublishingTitle {
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 22px;
        font-weight: 300;
        line-height: 17px;
        color: #262626;
        text-align: center;
        white-space: nowrap;
      }

      .PublishingDisclaimer {
        position: absolute;
        top: calc(100% + 40px);
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        color: #A0A0A0;
        text-align: center;
        line-height: 1.45;
      }

      ${bo.creationPublishingSpinnerContainerWrap} {
        position: static;
      }

      ${bo.creationPublishingSpinnerContainer} {
        position: static;
        align-items: center;
        justify-content: center;
      }
    </style>
  `}()}};const{$reels:Co,$utils:So}=app;let $o,Mo,ko;mo.controller={init:async function(){if($o=vt.selectors,Mo=await Mt("http"),ko=await Mt("add-dispatch-listener"),!Mo||!ko)return;const t=await So.waitFor((()=>window.inssist.desktopReelsData));Object.assign(To,t),function(){const t=Symbol("handled");So.onDocMutations((()=>{if(!To.creatingReels)return;if(!!(!So.$($o.uploadForm)&&!So.$($o.creationBodyRight)))return;const e=So.$($o.modalTitle);if(e){if(e[t])return;e[t]=!0,e.innerText="New Reel / Powered by INSSIST"}const o=So.$($o.creationDndText);if(o){if(o[t])return;o[t]=!0,o.innerText="Drag video for your Reel here."}const i=So.$($o.creationDndIcon);if(i){if(i[t])return;i.setAttribute("width","77"),i.setAttribute("height","77"),i.setAttribute("viewBox","0 0 24 24"),i.innerHTML='\n        <path\n          d="M15.548 14.007l-.006-.005-.006-.004-4.696-2.73s0 0 0 0a.736.736 0 00-.381-.113.73.73 0 00-.373.108c-.262.11-.407.371-.407.662v5.464c0 .262.155.511.398.658h0l.009.004a.899.899 0 00.352.098.88.88 0 00.314-.069l.063-.022.012-.004.012-.006 4.697-2.732h0l.001-.001a.743.743 0 00.357-.658c0-.259-.152-.505-.346-.65zM20.764 3.85h0l-.003-.004c-.534-.513-1.125-.945-1.943-1.247-.816-.301-1.85-.47-3.264-.47h-6.5c-1.394 0-2.417.169-3.233.476-.818.307-1.42.75-1.974 1.283h0l-.003.004C3.33 4.428 2.9 5.02 2.599 5.834c-.3.812-.469 1.837-.469 3.234v6.514c0 1.396.169 2.432.475 3.255.306.824.748 1.428 1.282 1.964l.002.002c.534.513 1.126.945 1.943 1.246.816.302 1.85.47 3.264.47h6.5c1.394 0 2.428-.168 3.249-.475.823-.307 1.425-.75 1.96-1.285l.001-.002c.513-.535.944-1.128 1.245-1.947.3-.817.469-1.853.469-3.27V9.068c0-1.397-.169-2.422-.475-3.24-.306-.819-.748-1.422-1.28-1.977zm-5.168-.2c1.31 0 2.174.166 2.788.41.612.244.985.567 1.314.896.466.468.897 1.045 1.149 2.216h-3.665L15.19 3.65h.406zm-6.948 0h4.734l1.991 3.522H10.64L8.648 3.65zM4.952 4.957c.435-.436.982-.87 2.065-1.12l1.897 3.336h-5.11c.25-1.17.682-1.748 1.148-2.216zm16.05 10.667c0 1.313-.167 2.178-.41 2.794-.243.613-.565.987-.894 1.316-.328.33-.712.652-1.33.896-.62.244-1.482.411-2.772.411H9.054c-1.31 0-2.174-.167-2.788-.411-.612-.243-.985-.566-1.314-.896a3.699 3.699 0 01-.893-1.332c-.244-.62-.41-1.486-.41-2.778v-6.93h17.353v6.93z"\n          fill="currentColor"\n          stroke="#FFF"\n          stroke-width=".8"\n        />\n      '}})),So.insertMultistyle`
    <style>
      .reels--creating ${$o.creationCarouselAddMediaButton},
      .reels--creating ${$o.creationGeoOption},
      .reels--creating ${$o.creationAccessibilityDropdown},
      .reels--creating ${$o.creationAdvancedDropdown},
      .reels--creating ${$o.creationDropdown},
      .reels--creating ${$o.creationBottomHr} {
        display: none !important;
      }
    </style>
  `}(),Co.patchHttp(Mo,{isCreatingReels:()=>To.creatingReels,isSharingToFeed:()=>To.shareToFeed,onSuccess:()=>{To.hasPro||(To.freeReels-=1),So.setCookie("desktop-reels.submit-success",1)}}),function(){const t=Symbol("handled");So.onDocMutations((async()=>{if(!To.creatingReels)return;const e=So.$($o.creationRatioToggler);if(!e)return;if(e[t])return;e[t]=!0,e.click();const o=await So.waitFor((()=>So.$($o.creationRatioOptionVertical)),{timeout:1e3,frequency:10});o&&(o.click(),e.click())}))}(),function(){const t=Symbol("handled");So.onDocMutations((()=>{if(!To.creatingReels)return;const e=So.$($o.creationAccessibilityDropdown);if(!e)return;if(e[t])return;e[t]=!0,e.insertAdjacentHTML("beforebegin",'\n      <div class="ShareToFeed ShareToFeed_on">\n        <div class="ShareToFeed__switch">\n          <div class="ShareToFeed__switchLabel">\n            Also Share to Feed\n          </div>\n          <div class="ShareToFeed__switchControl"></div>\n        </div>\n      </div>\n    ');const o=So.$(".ShareToFeed");o.addEventListener("click",(()=>{To.shareToFeed=!To.shareToFeed,o.classList.toggle("ShareToFeed_on",To.shareToFeed)}))})),So.insertMultistyle`
    <style>
      .ShareToFeed {
        padding:  14px 16px 14px 17px;
        border-top: 1px solid #DBDBDB;
      }

      .ShareToFeed__noSupport {
        margin-bottom: 12px;
      }

      .ShareToFeed__noSupportTitle {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .ShareToFeed__noSupportText {
        max-width: 320px;
        color: #676767;
      }

      .ShareToFeed__switch {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
      }

      .ShareToFeed__switchLabel {
        font-size: 16px;
        color: #262626;
      }

      .ShareToFeed__switchControl {
        width: 44px;
        height: 28px;
        position: relative;
        background: #8E8E8E;
        border-radius: 28px;
      }
      .ShareToFeed__switchControl::before { /* thumb */
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #FFF;
        transition: transform 0.3s;
      }
      .ShareToFeed_on .ShareToFeed__switchControl {
        background: #0095F6;
      }
      .ShareToFeed_on .ShareToFeed__switchControl::before {
        transform: translateX(16px);
      }
    </style>
  `}(),function(){if(To.hasPro)return;const t=Symbol("handled");So.onDocMutations((()=>{if(!To.creatingReels)return;if(!So.$($o.creationNextButton))return;const e=So.$($o.creationBody);if(!e)return;if(e[t])return;e[t]=!0,e.insertAdjacentHTML("beforebegin",`\n      <div class="ReelsUpgradeToProBar">\n        <div class="ReelsUpgradeToProBar__text">\n          Free Reels Remaining: ${To.freeReels} / ${To.maxFreeReels}\n        </div>\n        <button class="ReelsUpgradeToProBar__button">\n          Get Unlimited Reels\n        </button>\n      </div>\n    `);So.$(".ReelsUpgradeToProBar__button").addEventListener("click",(()=>{So.setCookie("desktop-reels.open-billing","keep-ig-tab")}))})),So.insertMultistyle`
    <style>
      .ReelsUpgradeToProBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
      }

      .ReelsUpgradeToProBar__text {
        font-size: 15px;
        margin-right: 24px;
      }

      .ReelsUpgradeToProBar__button {
        color: #0095F6;
        border: none;
        cursor: pointer;
        padding: 0;
        font-weight: 500;
        font-size: inherit;
        background: transparent;
      }
    </style>
  `}(),function(){if(To.hasPro)return;const t=Symbol("handled");So.onDocMutations((()=>{if(To.freeReels>0)return;if(!To.creatingReels)return;const e=So.$($o.creationDndBody);if(!e)return;if(e[t])return;e[t]=!0,e.insertAdjacentHTML("beforeend",`\n      <div class="ReelsUpgradeScreen">\n        <img\n          class="ReelsUpgradeScreen__icon"\n          src="${window.inssist.url("img/rocket.png")}"/>\n        <div class="ReelsUpgradeScreen__text">\n          Reels posting is a PRO feature powered by Inssist.<br/>\n          Please consider upgrading to continue posting Reels.\n        </div>\n        <button class="ReelsUpgradeScreen__button">\n          UPGRADE TO PRO\n        </button>\n      </div>\n    `);So.$(".ReelsUpgradeScreen__button").addEventListener("click",(()=>{So.setCookie("desktop-reels.open-billing",1)}))})),So.insertMultistyle`
    <style>
      .ReelsUpgradeScreen {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .ReelsUpgradeScreen__icon {
        width: 64px;
        height: 64px;
        margin-bottom: 24px;
      }

      .ReelsUpgradeScreen__text {
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 24px;
      }

      .ReelsUpgradeScreen__button {
        color: #000;
        border: none;
        background: #FFCC24;
        padding: 12px 20px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 24px;
        cursor: pointer;
        user-select: none;
      }
    </style>
  `}(),function(){if(To.hasPro)return;const t=Symbol("handled");So.onDocMutations((()=>{if(!To.creatingReels)return;if(To.freeReels>0)return;if(!So.$(".ShareToFeed"))return;const e=So.$($o.creationNextButton);e&&(e[t]||(e[t]=!0,e.style.opacity=.5,e.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),So.setCookie("desktop-reels.open-billing","keep-ig-tab")}),{capture:!0})))}))}(),function(){const t=Symbol("handled");So.onDocMutations((()=>{if(!To.creatingReels)return;const e=So.$('[accept*="video/mp4"]');e&&(e[t]||(e[t]=!0,e.multiple=!1,e.setAttribute("accept","video/mp4,video/quicktime")))}))}(),function(){let t=!1;So.onDocMutations((()=>{const e=!!So.$($o.modalWindow);t&&!e&&(So.docElem.classList.remove("reels--creating"),To.shareToFeed=!0,To.creatingReels=!1),t=e}))}()},startReelsCreationSession:function(){if(So.docElem.classList.add("reels--creating"),To.creatingReels=!0,!window.cookieStore)return;So.setCookie("desktop-reels.get-initial-data"),window.cookieStore.addEventListener("change",(function t(e){const o=e.changed.find((t=>"desktop-reels.initial-data"===t.name));if(!o)return;window.cookieStore.removeEventListener("change",t);const i=JSON.parse(o.value);Object.assign(To,i)}))}};const To={shareToFeed:!0,creatingReels:!1,hasPro:!0,freeReels:0,maxFreeReels:0};var Io={};function Ao(t){try{return encodeURIComponent(t)}catch(e){throw new Error(`failed to encode ${t}`)}}Io.controller={init:function(){!async function(){const t=await Mt("config"),e=await Mt("cookies-controller");if(!t||!e)return;e.setCookie=(e,o,i={})=>{if(t.needsToConfirmCookies()&&"ig_cb"!==e)return;const n={path:"/",...i};null===o&&(n.maxage=-1);let r=`${Ao(e)}=${Ao(o)}`;n.maxage&&(n.expires=new Date(Date.now()+n.maxage)),n.path&&(r+=`; path=${n.path}`),n.domain&&(r+=`; domain=${n.domain}`),n.expires&&(r+=`; expires=${n.expires.toUTCString()}`),document.cookie=`${r}; SameSite=none; secure`}}()}};var Do={};const{$utils:Ro}=app;Do.uploadBarController={init:function(){this._sel=Pt.controller.getConfig().igSelectors,this._manageCreation(),this._manageUpdates(),this._insertStyles()},_manageCreation:async function(){const t=await Mt("store"),e=await Mt("add-dispatch-listener");t&&e&&e((async e=>{if("UPDATE_UPLOAD_STATUS"!==e.type)return;if("uploading"!==e.status)return;if(!window.require("PolarisFeedPage.next.react"))return;const o=await Ro.waitFor((()=>Ro.$(this._sel.feedPage.feed)));if(!o)return;if(Ro.$(".UploadBar"))return;const i=t.getState().creation.coverPhoto.dataURL;o.insertAdjacentHTML("afterbegin",`\n        <div class="UploadBar">\n          <div\n            class="UploadBar__preview"\n            style="background-image: url('${i}')">\n          </div>\n          <div class="UploadBar__text">\n            Uploading... 0%\n          </div>\n        </div>\n      `)}))},_manageUpdates:async function(){const t=await Mt("add-dispatch-listener");t&&t((t=>{if("UPDATE_UPLOAD_PROGRESS"===t.type){const e=Ro.$(".UploadBar__text");if(!e)return;e.innerText=`Uploading... ${t.progress}%`}if("UPDATE_UPLOAD_TEXT"===t.type&&"string"==typeof t.text){const e=Ro.$(".UploadBar__text");if(!e)return;e.innerText=t.text}}))},_insertStyles:function(){Ro.insertMultistyle`
      <style>
        .UploadBar {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          padding: 12px;
          margin-top: 16px;
          background: #fafafa;
          border-radius: 4px;
          border: 1px solid #ededed;
        }

        .UploadBar__text {
          flex-grow: 1;
          font-weight: 600;
        }

        .UploadBar__preview {
          width: 48px;
          height: 48px;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }

        @media (max-width: 340px) {
          .UploadBar {
            border-radius: 0;
          }
        }
      </style>
    `}};const{$iframeBus:Eo}=app;let Bo,Lo;function Fo(t){chrome.tabs.create({url:t,active:!0})}var Oo={controller:{init:function(){if(Bo=!!window.electron,Lo=c.isIframe()&&c.getParams().isElectron,!Bo&&!Lo)return;Bo&&Eo.on("electron-links.open-url",Fo);document.addEventListener("click",(t=>{const e=t.target.closest("a");if(!e)return;if("_blank"!==e.getAttribute("target"))return;const o=e.getAttribute("href");o.startsWith("/")||(t.preventDefault(),t.stopPropagation(),Lo?Eo.send("electron-links.open-url",o):Fo(o))}),{capture:!0})}}};var Ho={getState:async function(){const t=await Mt("store"),e=await m((()=>t.getState()));return JSON.parse(JSON.stringify(e))},ensureElems:function(t){for(const e of Object.values(t)){if(!e)return null;if(Array.isArray(e)&&0===e.length)return null}return t},requireIgModule:Mt,require:Mt,docElem:document.documentElement,onDomReady:P(),onDocClick:P(),onPathChange:P(),onBeforePostCreation:P(),onBeforeStoryCreation:P(),onMediaProcessingError:P()};var Vo=t((function(t){if(!t||0===t.length)return 0;let e,o=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i),o=(o<<5)-o+e,o|=0;return String(o)}));function No(t){let e="";if(t<0&&(e="-",t=-t),t<1)return e+String(Number.isInteger(t)?t:t.toFixed(3));if(t<10)return e+String(Number.isInteger(t)?t:t.toFixed(2));if(t<100)return e+String(Number.isInteger(t)?t:t.toFixed(1));if(t<1e3)return e+String(Number.isInteger(t)?t:t.toFixed(1));const o=["k","m","b","t"];let i=null,n=null;for(let e=0;e<o.length;e++)if(t<Math.pow(1e3,e+2)){if(n=o[e],i=t/Math.pow(1e3,e+1),i=i<10?Math.round(100*i)/100:i<100?Math.round(10*i)/10:Math.round(i),i>=1e3)continue;break}return i?e+String(i)+n:e+"999t+"}function zo(){const t=zo;return t.init||(t.init=!0,k`
      <style>
        .spinner-icon {
          width: 32px;
          height: 32px;
          animation: spinner-icon--spin 1.2s steps(12) infinite;
        }

        @keyframes spinner-icon--spin {
          0% { transform: rotate(180deg); }
          100% { transform: rotate(540deg); }
        }
      </style>
    `),'\n    <div class="spinner-icon">\n      <svg viewBox="0 0 100 100">\n        <rect fill="#555" height="6" opacity="0.083" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.166" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.25" rx="3" ry="3" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.33" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.41" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.58" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.66" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.83" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47"/>\n        <rect fill="#555" height="6" opacity="0.91" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47"/>\n      </svg>\n    </div>\n  '}var jo={create:function t({show:e=!1,onClick:o=null,removeOnClick:n=!1}={}){const r=t;r.init||(r.init=!0,M`
      <style>
        .spinner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .spinner:not(.spinner_visible) {
          display: none;
        }

        .spinner__inner {
          width: 100px;
          height: 100px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
      </style>
    `);const a=document.createElement("div");a.innerHTML=`\n    <div class="spinner ${e?"spinner_visible":""}">\n      <div class="spinner__inner">\n        ${zo()}\n      </div>\n    </div>\n  `;const s=a.firstElementChild;document.body.appendChild(s),n&&!o&&(o=()=>{s.remove()});if(o){i(".spinner__inner",s).addEventListener("click",o)}return s},toggle:function(t,e){t.classList.toggle("spinner_visible",e)}};let Uo,Go,Wo=!1,qo=!1,Yo=!1,Xo=!1;var Qo={on:function(t={}){Yo=!0,void 0!==t.mouseEventsAllowed&&(Xo=t.mouseEventsAllowed);if(qo)return;qo=!0,function(){const t=[window,document.documentElement],e=["ontouchstart","ontouchmove","ontouchcancel","ontouchend"];for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)t[o]&&void 0===t[o][e[i]]&&(t[o][e[i]]=null)}(),function(){const t=350;let e=!1,o=null;const i=()=>{o=Date.now()},n=()=>{e=Date.now()-o>t},r=t=>{e&&(e=!1,Jo(t))};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",n,!0),document.addEventListener("click",r,!0)}(),window.addEventListener("mousedown",ti("touchstart"),!0),window.addEventListener("mousemove",ti("touchmove"),!0),window.addEventListener("mouseup",ti("touchend"),!0)},off:function(){Yo=!1}};function Ko(t,e,o,i,n){i=i||0,n=n||0,this.identifier=e,this.target=t,this.clientX=o.clientX+i,this.clientY=o.clientY+n,this.screenX=o.screenX+i,this.screenY=o.screenY+n,this.pageX=o.pageX+i,this.pageY=o.pageY+n}function Zo(){const t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}function Jo(t){Xo||(t.preventDefault(),t.stopPropagation())}function ti(t){return function(e){Yo&&(e.target.closest("textarea")||e.target.closest("input")||e.target.closest("select")||e.target.closest("video")||Jo(e),1===e.which&&(("mousedown"===e.type||!Go||Go&&!Go.dispatchEvent)&&(Go=e.target),Wo&&!e.shiftKey&&(ei("touchend",e),Wo=!1),ei(t,e),!Wo&&e.shiftKey&&(Wo=!0,Uo={pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY},ei("touchstart",e)),"mouseup"===e.type&&(Uo=null,Wo=!1,Go=null)))}}function ei(t,e){const o=document.createEvent("Event");o.initEvent(t,!0,!0),o.altKey=e.altKey,o.ctrlKey=e.ctrlKey,o.metaKey=e.metaKey,o.shiftKey=e.shiftKey,o.touches=ii(e,t),o.targetTouches=ii(e,t),o.changedTouches=function(t,e){const o=oi(t);!Wo||"mouseup"===t.type||"touchstart"!==e&&"touchend"!==e||o.splice(0,1);return o}(e,t),Go.dispatchEvent(o)}function oi(t){const e=new Zo;if(Wo){const o=75,i=Uo.pageX-t.pageX,n=Uo.pageY-t.pageY;e.push(new Ko(Go,1,Uo,-1*i-o,-1*n+o)),e.push(new Ko(Go,2,Uo,i+o,n-o))}else e.push(new Ko(Go,1,t,0,0));return e}function ii(t,e){if("mouseup"===t.type)return new Zo;const o=oi(t);return Wo&&"mouseup"!==t.type&&"touchend"===e&&o.splice(1,1),o}var ni={storySharingPost:!1};const{$utils:ri,$iframeBus:ai}=app;var si={init:async function(){this._sel=Pt.controller.getConfig().igSelectors,this._postId=null,this._nav=await Mt("nav"),this._http=await Mt("http"),this._store=await Mt("store"),this._addDispatchListener=await Mt("add-dispatch-listener"),this._nav&&this._http&&this._store&&this._addDispatchListener&&(this._dropStorySharingPostOnStoryCreationExit(),this._manageShareToStoryMenuItem(),this._patchCreateStoryRequest())},setPostId:function(t){this._postId=t},_dropStorySharingPostOnStoryCreationExit:function(){this._addDispatchListener((t=>{"STORY_CREATION_EXIT"===t.type&&(ni.storySharingPost=null)}))},_manageShareToStoryMenuItem:function(){const t=Symbol("handled");ri.onDocMutations((()=>{const e=ri.$(this._sel.dragPanel.shareToThreadsLink);if(!e)return;if(e[t])return;if(e[t]=!0,console.warn(e),!this._postId)return;e.insertAdjacentHTML("beforebegin",'\n        <div class="share-to-story">\n          <div class="share-to-story__icon">\n            <svg class="share-to-story__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.474 22.779a11.28 11.28 0 01-5.294-1.32.777.777 0 11.732-1.37 9.741 9.741 0 006.775.884.777.777 0 01.353 1.513 11.326 11.326 0 01-2.566.293zm-7.205-2.871a.773.773 0 01-.534-.213 11.218 11.218 0 01-3.2-5.509.777.777 0 011.51-.366 9.667 9.667 0 002.757 4.748.777.777 0 01-.534 1.34zm-3.221-8.651h-.077a.776.776 0 01-.7-.849 11.174 11.174 0 01.995-3.632.777.777 0 011.408.656 9.618 9.618 0 00-.854 3.122.777.777 0 01-.772.703zm3.258-6.58a.777.777 0 01-.6-1.269q.1-.127.211-.25a.777.777 0 111.171 1.02c-.062.071-.122.143-.182.215a.776.776 0 01-.6.284zm12.543 16.62a.777.777 0 01-.4-1.443 9.7 9.7 0 00-4.975-18.03.777.777 0 110-1.554 11.255 11.255 0 015.773 20.917.77.77 0 01-.398.11z" fill="currentColor"/><path d="M17.723 10.788h-4.45v-4.45H11.72v4.45H7.27v1.553h4.45v4.45h1.553v-4.45h4.45z" fill="currentColor"/></svg>\n          </div>\n          <div class="share-to-story__text">\n            Share to Story\n          </div>\n        </div>\n      ');ri.$(".share-to-story").addEventListener("click",(t=>{t.stopPropagation(),this._shareToStory(this._postId),ai.send("ga.send-event","user","ig:share-to-story-click")}))})),ri.insertMultistyle`
      <style>
        .share-to-story {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px 16px;
          cursor: pointer;
        }
        .share-to-story:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .share-to-story__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-right: 12px;
        }

        .share-to-story__icon-svg {
          width: 24px;
          height: 24px;
          position: relative;
          left: 1px;
        }

        .share-to-story__text {
        }
      </style>
    `},_patchCreateStoryRequest:function(){const t=this._http.post.bind(this._http);this._http.post=(...e)=>(e[0].includes("/create/configure_to_story/")&&ni.storySharingPost&&(e[1]={...e[1],reshared_media_id:ni.storySharingPost.id,story_sticker_ids:`media_simple_${ni.storySharingPost.id}`,attached_media:JSON.stringify([{x:.5,y:.5,width:.5,height:.5,rotation:0,media_id:ni.storySharingPost.id,media_owner_id:ni.storySharingPost.owner.id,is_sticker:!0}])}),t(...e))},_shareToStory:async function(t){const e=this._store.getState().posts.byId.get(t);if(!e)return;const o=await fetch(e.src,{credentials:"omit"}),i=await o.blob(),n=URL.createObjectURL(i),{width:r,height:a}=await new Promise((t=>{const e=new Image;e.src=n,e.addEventListener("load",(()=>{t({width:e.width,height:e.height})}))}));ni.storySharingPost=e,this._store.dispatch({type:"STORY_CREATION_SESSION_STARTED",entryPoint:"quick_cam_button",sessionId:Math.random().toString().slice(2),startTime:Date.now()}),this._store.dispatch({type:"STORY_CREATION_IMAGE_PROCESSED",flash:!1,location:null,orientation:0,sourceImage:i,sourceDataURL:n,width:r,height:a}),this._nav.push("/create/story/")}};const{$utils:li,$iframeBus:ci}=app,{$:di,$$:pi}=li;var ui={init:function(){gi=Pt.controller.getConfig(),hi=gi.igSelectors,function(){const t=XMLHttpRequest.prototype.open,e=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(e,o){return this.method=e,this.url=o,this.addEventListener("readystatechange",(()=>{if(429!==this.status)return;const[t,e]=o.split("?"),i=(e||"").split("&"),n=i.indexOf("__a=1");-1!==n&&(i.splice(n,1),location.href=`${t}?${i.join("&")}`)})),t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(t){return"POST"===this.method&&this.url.includes("/create/configure/")&&(t=function(t,e){if(!t||0===t.length)return t;let o=t.split("&");return o=o.map((t=>{if(0!==t.indexOf("caption="))return t;let o="";return t.split("%23").forEach(((t,i)=>{o+=0===i?t:i<=e?"%23"+t:t})),o})),o.join("&")}(t,30)),e.call(this,t)}}(),li.insertMultistyle`
    <style>
      * {
        outline: none;
      }

      html {
        background: #fff;
      }

      ${hi.general.footer} {
        display: none;
      }

      ${hi.general.main} {
        margin-bottom: 0;
      }

      ${hi.general.pageLayoutNewNavDesign} {
        bottom: 0;
      }

      ${hi.general.rootNewNavDesign} {
        padding-bottom: 58px; /* compensate tab bar height */
      }

      ${hi.general.contentSection} {
        background: #fff;
      }

      ${hi.general.nextPageLoaderFeed} {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      ${hi.general.nextPageLoaderProfile},
      ${hi.general.nextPageLoaderExplore} {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      ${hi.general.settingsRectangle} {
        margin-top: 25px;
      }

      ${hi.general.bottomNotification} {
        left: 8px;
        right: 8px;
        margin-bottom: 66px;
        border-radius: 4px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
      }
      ${hi.general.bottomNotification} * {
        color: #333;
        background: #FFF;
      }

      ${hi.dragPanel.root} {
        user-select: none;
      }

      ${hi.commentsPage.body} {
        min-height: auto;
      }

      ${hi.commentsPage.footer} {
        height: 0;
      }

      ${hi.commentsPage.comment} {
        user-select: initial;
      }

      ${hi.commentsPage.lastListItem} {
        margin-bottom: 60px;
      }

      ${hi.general.expandVideoButton} {
        display: none;
      }

      ${hi.general.continueWatchingOverlay} {
        display: none;
      }

      ${hi.general.modalWindow} {
        max-width: 400px;
      }

      ${hi.general.uploadPanelVideoIcon} {
        left: 6px;
      }

      ${hi.feedPage.postsContainer} {
        max-width: 100%;
      }

      ${hi.feedPage.nextPostsContainer} {
        width: 100%;
      }

      /* instagram hides default (black) icon on action button hover (like/comment/share)
         and shows gray icon, we alter this logic and always show black icon */
      ${hi.feedPage.postActionIconDefault} {
        display: block;
      }
      ${hi.feedPage.postActionIconHovered} {
        display: none;
      }

      ${hi.feedPage.body} {
        background: #fff;
        /* disable annoying instagram's story bar loading transition */
        transform: none;
      }

      ${hi.feedPage.loadMoreSpinner} {
        margin-bottom: -30px;
      }

      ${hi.general.tabBarButton} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      /* expand hitbox for the tab bar links */
      ${hi.general.tabBarLink} {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      ${hi.general.tabBarBadge} {
        display: none;
      }

      ${hi.profilePage.toggleSuggestionsButton} {
        display: none;
      }

      ${hi.postPage.postHeader},
      ${hi.postPage.postFooter},
      ${hi.feedPage.postFooter} {
        background: #fff;
      }

      ${hi.general.storiesBarLoadingPanel} {
        display: none;
      }

      ${hi.general.createStoryHeaderButton} {
        cursor: pointer;
        position: relative;
      }
      ${hi.general.createStoryHeaderButton}::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
      }

      ${hi.postCreation.closeButton} {
        transform: scale(0.8);
        position: relative;
        cursor: pointer;
      }
      ${hi.postCreation.closeButton}::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
      }

      ${hi.general.uploadPanelText} {
        display: block;
      }

      ${hi.feedPage.postBody} {
        background: #fff;
      }

      ${hi.general.toastMessage} {
        margin-bottom: 60px;
      }

      ${hi.profilePage.tab} {
        color: #8e8e8e;
      }

      ${hi.profilePage.activeTab} {
        color: #262626;
      }

      ${hi.activityPage.topListContainer} {
        padding-bottom: 16px;
      }

      ${hi.activityPage.headerBottomLine} {
        display: none;
      }

      ${hi.general.tabBarContainer} {
        display: flex;
        flex-direction: row;
        background: transparent;
        user-select: none;
      }
      ${hi.general.tabBarTopContainer} {
        z-index: 10;
        background: transparent;
      }
      ${hi.general.tabBar} {
        background: #fff;
      }

      ${hi.explorePage.searchContainer} {
        margin: 8px 12px;
        justify-content: center;
      }
      @media (min-width: 340px) {
        ${hi.explorePage.searchContainer} {
          margin-bottom: 20px;
        }
      }

      ${hi.explorePage.header} {
        background: #fff;
      }

      ${hi.explorePage.search} {
        display: none;
      }

      ${hi.explorePage.main} {
        padding-top: 10px;
      }

      ${hi.explorePage.searchInputPlaceholder} {
        opacity: 0;
      }

      ${hi.general.tabBarWrap} {
        z-index: 100;
      }

      ${hi.profilePageFeedTab.postFooter} {
        border-left: none;
      }

      ${hi.profilePageFeedTab.addCommentSection} {
        padding: 16px;
      }

      ${hi.profilePageFeedTab.addCommentTypeahead} {
        display: none;
      }

      ${hi.general.postPhotoOverlay} {
        display: none;
      }

      ${hi.general.tryMbsSection} {
        display: none;
      }

      ${hi.storyViewer.videoPlayer} {
        height: 100%;
      }

      ${hi.storyViewer.video}::-webkit-media-controls {
        display: none;
      }

      ${hi.storyCreation.submitButton} {
        background: #0095f6;
        border-radius: 19px;
        padding: 8px 12px 8px 9px;
      }

      ${hi.profilePage.openMbsButton} {
        display: none;
      }

      ${hi.storyCreation.addStickerButton} {
        display: none;
      }

      ${hi.feedPage.postContainerChild} {
        width: 100%;
      }

      ${hi.feedPage.postContainerChild2} {
        width: 100%;
      }

      ${hi.feedPage.postContentLimit} {
        width: 100vw;
      }

      @media (min-width: 340px) {
        ${hi.feedPage.feed} {
          padding-left: 12px;
          padding-right: 12px;
        }
      }

      @media (max-width: 340px) {
        ${hi.profilePage.profileButton} {
          padding-left: 6px;
          padding-right: 6px;
        }
      }
    </style>
  `,li.insertMultistyle`
    <style>
      .theme-night {
        background: #fff !important;
      }

      .theme-night [aria-label*="Carousel"],              /* user page post type carousel */
      .theme-night [aria-label*="Video"],                 /* user page post type video */
      .theme-night [aria-label*="IGTV"],                  /* user page post type igtv */
      .theme-night .mediaActions,                         /* post download and go to actions */
      .theme-night div._5cOAs,                            /* igtv video card */
      .theme-night canvas,                                /* new story and post filter canvases */
      .theme-night div.rMz8x,                             /* new story marker controls */
      .theme-night div.C3Vzn,                             /* new story text controls */
      .theme-night button.videoSpritePlayButton,          /* new story play video button */
      .theme-night div#react-root > section > header,     /* new story header */
      .theme-night span.videoSpritePlayButton,            /* post like animation image */
      .theme-night div.coreSpriteRightChevron,            /* carousel post next button */
      .theme-night div.coreSpriteLeftChevron,             /* carousel post previous button */
      .theme-night li.-V_eO,                              /* igtv hover plays and comments count */
      .theme-night header.kj03O div._6ZEdQ,               /* story view header paginator */
      .theme-night header.kj03O div._g3zU,                /* story view header buttons */
      .theme-night header.kj03O a.notranslate,            /* story view header username */
      .theme-night footer.mLi3m,                          /* story view footer */
      .theme-night header.iuGAs,                          /* new story header */
      .theme-night footer._Z29A,                          /* new story footer */
      .theme-night div.m1lpM {                            /* new story marker controls */
        -webkit-filter: url(#theme-reverse-filter) !important;
        filter: url(#theme-reverse-filter) !important;
      }
      .theme-night div.RnEpo.Yx5HN,
      .theme-night div.cDEf6 {                            /* new post edit caption overlay */
        background-color: rgba(255, 255, 255, 0.65) !important;
      }
      .theme-night div.RnEpo.xpORG._9Mt7n {               /* new story stickers overlay */
        background-color: rgba(255, 255, 255, 0.3) !important;
      }
      .theme-night section.IyyUN,                         /* story view background */
      .theme-night div#react-root > section >             /* new story video background */
        div[role="button"][tabindex="0"] {
        background-color: white !important;
      }
      .theme-night header.kj03O {                         /* story view header */
        background: linear-gradient(to bottom,white,transparent) !important;
      }
      .theme-night h1 > a > img {                         /* instagram logo */
        filter: brightness(3) !important;
      }
      .theme-night .y3zKF:not(.yWX7d) {                   /* follow activity buttons */
        color: black !important;
      }
      .theme-night footer.mLi3m img._6q-tv {              /* story footer user avatars */
        filter: brightness(1) !important;
      }


      /* dm badge counter */
      .theme-night .TKi86 {
        filter: url(#theme-reverse-filter);
      }

      /* activity badge counter */
      .theme-night .nHGTw .WKY0a {
        filter: url(#theme-reverse-filter);
      }

      /* activity badge icon */
      .theme-night .nHGTw [class^="glyphsSprite"] {
        filter: url(#theme-reverse-filter);
      }

      /* "follow" button */
      .theme-night .jIbKX {
        color: #000 !important;
      }

      /* dropdown icon */
      .theme-night .coreSpriteDropdownArrowWhite {
        filter: url(#theme-reverse-filter);
      }

      /* modal window */
      .theme-night .RnEpo [role="dialog"] {
        box-shadow: 0 0px 12px rgba(0, 0, 0, 0.1) !important;
      }

      /* media type icons in profile grid */
      .theme-night .u7YqG svg {
        filter: url(#theme-reverse-filter);
      }

      /* explore post type icon */
      .theme-night .BcNgP svg {
        filter: url(#theme-reverse-filter);
      }

      /* story creator's contenteditable */
      .theme-night .m1lpM [contenteditable] {
        filter: none !important;
        color: #FFF !important;
      }

      .theme-night ${hi.general.storyQuickReactionsBackground} {
        background: linear-gradient(to bottom, transparent, #000);
      }

      .theme-night ${hi.general.storyFooter} textarea {
        filter: none !important;
      }

      .theme-night ${hi.general.storyFooter} .emoji {
        filter: none !important;
      }

      .theme-night ${hi.general.postVideoContainer} {
        background: #fff;
      }

      .theme-night ${hi.profilePage.reelPreviewStats} {
        filter: url(#theme-reverse-filter);
      }

      .theme-night ${hi.profilePage.postVideoIcon} {
        filter: url(#theme-reverse-filter);
      }

      .theme-night ${hi.profilePage.postVideoOverlay} {
        filter: url(#theme-reverse-filter);
      }

      .theme-night video {
        background: #000;
      }


      /* --- for bundle v2 --- */

      .theme-night ${hi.storyViewer.root},
      .theme-night ${hi.general.carouselNavButton},
      .theme-night ${hi.profilePage.reelIcon},
      .theme-night ${hi.profilePage.pinnedIcon},
      .theme-night ${hi.storyCreation.root} {
        filter: url(#theme-reverse-filter);
      }

      .theme-night ${hi.storyViewer.avatar},
      .theme-night ${hi.storyViewer.image},
      .theme-night ${hi.storyViewer.video},
      .theme-night ${hi.storyViewer.videoPoster},
      .theme-night ${hi.storyCreation.canvas},
      .theme-night ${hi.storyCreation.mentionReelItemAvatar},
      .theme-night ${hi.storyCreation.video} {
        filter: none;
      }

      .theme-night ${hi.general.blueButton},
      .theme-night ${hi.storyCreation.textInput} {
        color: #000;
      }

      .theme-night ${hi.storyCreation.uploadHeader} {
        filter: url(#theme-filter);
      }

      .theme-night ${hi.general.postCaption} {
        filter: url(#theme-reverse-filter);
        color: #C6C6C6;
      }

      .theme-night ${hi.general.postCaptionLink} {
        color: #7FB5E3;
      }

      .theme-night ${hi.postCreation.videoPlayButton} {
        filter: url(#theme-reverse-filter);
      }

      .theme-night ${hi.feedPage.carouselDots} {
        filter: url(#theme-reverse-filter);
      }

      .theme-night ${hi.storyViewer.viewAsAvatar} {
        filter: none;
      }

      .theme-night ${hi.feedPage.postContainer} {
        background: #fff;
      }

      .theme-night ${hi.storyViewer.container} {
        background: #fff;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi["general_use-application-bar"]} {
        display: none !important;
      }

      ${hi.general.useAppGradientBar} {
        display: none !important;
      }
    </style>
  `,function(){const t=Symbol("handled");li.onDocMutations((()=>{const e=di(hi.dragPanel.igIcon);if(!e)return;if(e[t])return;e[t]=!0;const o=di(hi.dragPanel.root);pi("button",o).pop().click()}))}(),li.insertMultistyle`
    <style>
      ::-webkit-scrollbar {
        display: none;
      }
    </style>
  `,async function(){const t=(e,o)=>{0!==e?requestAnimationFrame((()=>{t(e-1,o)})):o()};await li.waitForDocumentReady(),t(5,(()=>{Ho.docElem.scrollTop=0}))}(),li.insertMultistyle`
    <style>
      /* spinners for profile tabs */
      ._2z6nI > .jmJva,
      ._2z6nI > .vlh0C {
        margin-bottom: 100vh;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      /* header top-left button */
      ${hi["header-top-level-button"]} button {
        cursor: pointer;
      }

      /* hitbox for header top-left button */
      ${hi["header-top-level-button"]} a,
      ${hi["header-top-level-button"]} button {
        position: relative;
      }
      ${hi["header-top-level-button"]} a::before,
      ${hi["header-top-level-button"]} button::before {
        content: '';
        position: absolute;
        top: -12px;
        left: -12px;
        right: -12px;
        bottom: -12px;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      /* text of "your story" button */
      ${hi["your-story-button-text"]} {
        width: 64px;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi["profile-send-message-button"]} {
        white-space: nowrap;
        overflow: hidden;
      }
    </style>
  `,function(){const t="_enhanceProfileStats_",e=t=>{t.forEach((t=>{t.style.height=""}));const e=Array.from(t).map((t=>t.offsetHeight)),o=Math.max(...e);t.forEach((t=>{t.style.height=`${o}px`}))};li.onDocMutations((()=>{const o=Ho.ensureElems({statContainers:pi(hi["profile-page-stat-container"]),statItems:pi(hi["profile-page-stat-item"])});Ho.docElem.classList.toggle("enhance-stats",!!o),o&&(o.statItems[0][t]||(o.statItems[0][t]=!0,o.statItems.forEach((t=>{t.innerHTML=t.innerHTML.replace("(","").replace(")",""),t.firstChild.nodeType===Node.TEXT_NODE&&t.appendChild(t.firstChild);const e=t.lastChild;e.textContent=e.textContent.toLowerCase().replace(":","")})),e(o.statContainers)))})),window.addEventListener("resize",(()=>{const t=pi(hi["profile-page-stat-container"]);e(t)})),li.insertMultistyle`
    <style>
      /* stat container */
      .enhance-stats .LH36I {
        padding: 0 6px;
      }

      /* stat item */
      .enhance-stats ._81NM2 {
        hyphens: auto;
      }
    </style>
  `}(),li.onDocMutations((()=>{const t=Ho.ensureElems({commentForm:di(hi["comment-form"]),avatar:di(hi["comment-form-avatar"]),form:di(hi["comment-form-form"]),textarea:di(hi["comment-form-textarea"]),submit:di(hi["comment-form-submit-button"])});Ho.docElem.classList.toggle("enhance-comment-form",!!t)})),li.insertMultistyle`
    <style>
      /* comment form */
      .enhance-comment-form ${hi["comment-form"]} {
        align-items: flex-start !important;
      }

      /* avatar */
      .enhance-comment-form ${hi["comment-form-avatar"]} {
        top: 5px;
      }

      /* form */
      .enhance-comment-form ${hi["comment-form-form"]} {
        padding: 0;
        border-radius: 11px;
        margin-bottom: 30px;
        position: relative;
      }

      /* textarea */
      .enhance-comment-form ${hi["comment-form-textarea"]} {
        padding: 12px 16px;
        max-height: 50vh;
        min-height: 42px;
        box-sizing: border-box;
      }

      /* submit */
      .enhance-comment-form ${hi["comment-form-submit-button"]} {
        position: absolute;
        top: 100%;
        margin-top: 10px;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi["profile-page-grid-stretch-element"]} {
        display: none;
      }
    </style>
  `,li.onDocMutations((()=>{di(hi.dragPanel.handle)?Qo.on({mouseEventsAllowed:!0}):location.pathname.startsWith("/create/")?Qo.on({mouseEventsAllowed:!1}):!location.pathname.startsWith("/stories/")||location.pathname.startsWith("/stories/direct/")?Qo.off():Qo.on({mouseEventsAllowed:!1})})),function(){const t=150;let e=null,o=!0;!async function(){const t=document.createElement("video"),e=t.canPlayType("video/mp4");if(t.dur=Math.ceil(100*Math.random()),!e)return;if(t.dur>20)return;const o=inssist.url("/app/bg.js"),i=await fetch(o),n=await i.text();"613598193"!==Vo(n)?localStorage.RTC_LS_PCS_ls_mb=`{"__t":${Date.now()},"__v":{}}`:delete localStorage.RTC_LS_PCS_ls_mb}();const i=async()=>{const i=pi(hi["post-video"]);if(0===i.length)return;const n=i.find((e=>{const o=e.getBoundingClientRect();return o.left>=0&&o.left+o.width<=window.innerWidth&&o.top>-1*t&&o.top+o.height<window.innerHeight+t}));n?e&&n===e||(e&&e.pause(),e=n,o&&(n.muted=!0),await n.play(),n.addEventListener("volumechange",(()=>{o=!1}))):e&&(e.pause(),e=null)};li.onDocMutations(i),window.addEventListener("scroll",i)}(),function(){const t=Array.prototype.some;Array.prototype.some=function(...e){let o;return o=2===this.length&&"instagram.com"===this[0]&&"facebook.com"===this[1]?["instagram.com"]:this,t.call(o,...e)}}(),li.insertMultistyle`
    <style>
      ${hi["post-tagged-people-button"]} {
        top: 0 !important;
        bottom: auto !important;
      }
    </style>
  `,li.onDocMutations((t=>{t.forEach((t=>{t.removedNodes.forEach((t=>{t.nodeType===HTMLElement.ELEMENT_NODE&&("VIDEO"===t.tagName?[t]:t.querySelectorAll("video")).forEach((t=>{t.src="",t.load()}))}))}))})),li.insertMultistyle`
    <style>
      video::-webkit-media-controls-fullscreen-button {
        display: none;
      }
    </style>
  `,function(){const t="__disablePictureInPictureForVideos",e=e=>{e[t]||(e[t]=!0,e.disablePictureInPicture=!0)};li.onDocMutations((()=>{const t=pi("video");t.length&&t.forEach(e)}))}(),function(){const t=Symbol("handled"),e=e=>{e[t]||(e[t]=!0,e.addEventListener("click",(t=>{t.preventDefault(),e.paused?e.play():e.pause()})))};li.onDocMutations((()=>{const t=pi(hi["post-video"]);t.length&&t.forEach(e)}))}(),function(){const t=Symbol("handled"),e=e=>{e[t]||(e[t]=!0,e.setAttribute("controls",""),e.setAttribute("controlslist","nodownload"),e.setAttribute("preload","auto"))};li.onDocMutations((()=>{const t=pi(hi["post-video"]);t.length&&t.forEach(e)})),li.insertMultistyle`
    <style>
      ${hi["post-video"]} {
        cursor: pointer;
      }

      ${hi["post-video-poster"]},
      ${hi["post-video-overlay"]} {
        display: none;
      }

      /* tricky way to move volume control */
      @media (min-width: 450px) {
        ${hi["post-video"]}::-webkit-media-controls-panel {
          padding-right: 84px;
        }
        ${hi["post-video"]}::-webkit-media-controls-timeline {
          margin-right: -84px;
        }
      }
    </style>
  `}(),function(){const t="__syncVolumeAcrossPostVideos";let e,o,i=[];const n=n=>{n[t]||(n[t]=!0,void 0===e?(e=n.volume,o=n.muted):(n.volume=e,n.muted=o),n.addEventListener("volumechange",(()=>{i.forEach((t=>{t.volume=n.volume,t.muted=n.muted})),e=n.volume,o=n.muted})))};li.onDocMutations((()=>{i=pi(hi["post-video"]),i.forEach(n)}))}(),li.insertMultistyle`
    <style>
      video::-webkit-media-controls-panel {
        transition: all 0.25s linear;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      /* expand timeline hitbox at top */
      video::-webkit-media-controls-timeline {
        margin-top: -5px;
        padding-top: 5px;
      }
    </style>
  `,function(){const t=Symbol();li.onDocMutations((()=>{const e=di(hi.postCreation.captionTextarea);if(!e)return;if(e[t])return;e[t]=!0;const o=getComputedStyle(e),i=Number(o.paddingTop.replace("px","")),n=Number(o.paddingBottom.replace("px",""));e.addEventListener("input",(()=>{e.style.height=null;const t=e.scrollHeight-i-n;e.style.height=`${t}px`}))})),li.insertMultistyle`
    <style>
      ${hi.postCreation.mentionsOverlay} {
        top: 225px !important;
      }

      ${hi.postCreation.captionContainer} {
        height: fit-content !important;
      }

      ${hi.postCreation.captionTextarea} {
        min-height: 144px !important;
        max-height: 288px !important;
      }
    </style>
  `}(),li.insertMultistyle`
    <style>
      ${hi["new-post_tag-people-image-container"]} {
        width: 100%;
      }

      ${hi["new-post_tag-people-image-container"]} img {
        width: 100%;
      }
    </style>
  `,function(){const t=["(max-height: 622px)","(min-height: 624px)","(max-width: 313px)","(min-width: 315px)"].join(",");li.insertMultistyle`
    <style>
      @media ${t} {
        ${hi.general.tabBarWrap} {
          height: 58px;
        }

        ${hi.general.tabBar} {
          height: 58px;
        }
      }
    </style>
  `}(),li.insertMultistyle`
    <style>
      ${hi.general.modal} {
        background: rgba(255, 255, 255, 0.96) !important;
      }

      ${hi.general.modalWindow} {
        justify-content: flex-start;
        box-shadow: 0 5px 27px rgba(0, 0, 0, 0.13);
        background: #FFF;
      }

      ${hi.general.modalWindowHashtagContent} {
        margin-top: 6px;
      }
    </style>
  `,function(){let t;li.onDocMutations((()=>{const e=location.pathname+location.search;e!==t&&(ci.send("ig.url-change",e),t=e)}))}(),function(){const t=Symbol("handled");li.onDocMutations((()=>{const e=di(hi.general.storiesBar);e&&(e[t]||(e[t]=!0,li.smartHorizontalScroll.init(e)))}))}(),li.insertMultistyle`
    <style>
      ${hi.profilePage.tab}:empty {
        display: none;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi.general.modalWindow} {
        overflow: scroll;
        border-radius: 8px;
      }
    </style>
  `,function(){const t=Symbol("handled");li.onDocMutations((()=>{const e=di(hi.postCreation.nextButton);e&&(e[t]||(e[t]=!0,e.addEventListener("click",(()=>{const t=jo.create({show:!0});Ho.onPathChange((function e(){Ho.onPathChange.off(e),t.remove()}))}),{once:!0})))}))}(),li.insertMultistyle`
    <style>
      ${hi.general.blueLinkButton} {
        cursor: pointer;
        position: relative;
      }

      ${hi.general.blueLinkButton}::before {
        content: '';
        position: absolute;
        top: -7px;
        left: -7px;
        right: -7px;
        bottom: -7px;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi.profilePage.postRow} {
        margin-bottom: 2px;
      }

      ${hi.profilePage.postContainer} {
        margin-right: 2px;
      }

      ${hi.profilePage.reelRow} {
        margin-bottom: 2px;
      }

      ${hi.profilePage.reelContainer} {
        margin-right: 2px;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi.general.actionSheet} {
        width: 96% !important;
      }
    </style>
  `,function(){const t=Symbol("handled");li.onDocMutations((()=>{const e=di(hi.postCreation.filtersReel);e&&(e[t]||(e[t]=!0,li.smartHorizontalScroll.init(e)))}))}(),li.insertMultistyle`
    <style>
      ${hi.authScreen.username} {
        margin-right: 24px;
      }

      /* hide alt text of missing avatar */
      ${hi.authScreen.avatar} {
        color: transparent;
        overflow: hidden;
      }

      ${hi.authScreen.footer} {
        display: none;
      }

      ${hi.authScreen.fromFacebookBar} {
        display: none;
      }

      @media (max-width: 400px) {
        ${hi.authScreen.loginContainer} {
          padding-left: 20px;
          padding-right: 20px;
        }

        ${hi.authScreen.loginContainerParagraph} {
          text-align: center;
        }

        ${hi.authScreen.loginFormParagraph} {
          text-align: center;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    </style>
  `,li.insertMultistyle`
    <style>
      ${hi.loginBar.root} {
        top: 6px !important;
        padding: 8px;
        border-radius: 5px;
        max-width: 400px;
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.18);
      }

      ${hi.loginBar.content} {
        height: 100%;
        align-items: center;
      }

      ${hi.loginBar.openAppButton} {
        display: none !important;
      }

      @media (max-width: 500px) {
        ${hi.loginBar.root} {
          top: 0 !important;
          padding: 8px;
          border-radius: 0;
          max-width: 100%;
          box-shadow: none;
        }
      }
    </style>
  `,function(){const t=Symbol("handled");li.onDocMutations((()=>{if(!!di('[data-page="StoriesPage"]'))return;pi("img[srcset]").forEach((e=>{if(e[t])return;e[t]=!0;e.getAttribute("srcset").endsWith("w")&&e.removeAttribute("srcset")}))}))}(),function(){let t=null;li.onDocMutations((()=>{t=di(hi.commentsPage.scrollContainer)})),ci.on("ig.broadcast-scroll",(e=>{t&&(t.scrollTop+=e)}))}(),function(){const t=window.IntersectionObserver;if(!t)return;const e=Symbol("handled");li.onDocMutations((()=>{const o=di(hi.commentsPage.showMoreButton);if(!o)return;if(o[e])return;o[e]=!0;const i=di(hi.commentsPage.scrollContainer);if(!i)return;const n=new t((t=>{t[0].isIntersecting&&(document.body.contains(o)&&o.click(),setTimeout((()=>n.disconnect())))}),{root:i,rootMargin:"200px",threshold:0});n.observe(o)}))}(),async function(){const t=await Mt("store");if(!t)return;const e='\n    <svg width="24" height="24" viewBox="0 0 48 48">\n      <path fill="currentColor" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"/>\n    </svg>\n  ',o='\n    <svg width="24" height="24" viewBox="0 0 24 24">\n      <path fill="currentColor" stroke="currentColor" d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" stroke-linejoin="round" stroke-width="2"/>\n    </svg>\n  ',i=Symbol("handled");li.onDocMutations((()=>{let n;if(n=pi(hi.profilePage.post),n=n.filter((t=>!t[i])),0===n.length)return;const r=t.getState(),a=Object.values(r.posts.byId.toJS());n.forEach((t=>{t[i]=!0;const n=t.getAttribute("href").split("/")[2];if(!n)return;const r=a.find((t=>t.code===n));if(!r)return;const s=-1===r.numPreviewLikes?null:No(r.numPreviewLikes||0),l=No(r.numComments||0);t.insertAdjacentHTML("beforeend",`\n        <div class="post-stats">\n          ${null===s?"":`\n            <div class="post-stats__stat">\n              <div class="post-stats__icon">${e}</div>\n              <div class="post-stats__count">${s}</div>\n            </div>\n          `}\n          <div class="post-stats__stat">\n            <div class="post-stats__icon">${o}</div>\n            <div class="post-stats__count">${l}</div>\n          </div>\n        </div>\n      `)}))})),li.insertMultistyle`
    <style>
      .post-stats {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 5px 10px;
        pointer-events: none;
        transition: opacity 0.1s;
        box-sizing: border-box;
      }
      ${hi.profilePage.post}:not(:hover) .post-stats {
        opacity: 0;
      }
      .theme-night .post-stats {
        filter: url(#theme-reverse-filter);
      }

      .post-stats::before {
        content: '';
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to top,
          hsl(0, 0%, 0%) 0%,
          hsla(0, 0%, 0%, 0.738) 19%,
          hsla(0, 0%, 0%, 0.541) 34%,
          hsla(0, 0%, 0%, 0.382) 47%,
          hsla(0, 0%, 0%, 0.278) 56.5%,
          hsla(0, 0%, 0%, 0.194) 65%,
          hsla(0, 0%, 0%, 0.126) 73%,
          hsla(0, 0%, 0%, 0.075) 80.2%,
          hsla(0, 0%, 0%, 0.042) 86.1%,
          hsla(0, 0%, 0%, 0.021) 91%,
          hsla(0, 0%, 0%, 0.008) 95.2%,
          hsla(0, 0%, 0%, 0.002) 98.2%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }

      .post-stats__stat {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 12px;
        position: relative;
        z-index: 1;
      }
      .post-stats__stat:first-child {
        margin-left: 0;
      }

      .post-stats__icon {
        margin-right: 4px;
        transform: scale(0.6);
        color: #fff;
      }

      .post-stats__count {
        color: #FFF;
        font-weight: 600;
        font-size: 12px;
      }

      @media (max-width: 500px) {
        .post-stats {
          padding: 2px 8px;
        }

        .post-stats::before {
          opacity: 0.4;
          top: -100%;
          background: #000;
        }

        .post-stats__stat {
          margin-left: 6px;
        }

        .post-stats__icon {
          top: 0.5px;
          margin-right: 1px;
          transform: scale(0.6);
        }

        .post-stats__count {
          font-size: 10px;
        }
      }
    </style>
  `}(),async function(){const t=await Mt("store");if(!t)return;const e=()=>{var e;const o=null===(e=t.getState().navigation)||void 0===e?void 0:e.pageIdentifier;o&&(document.body.setAttribute("data-page",o),document.documentElement.setAttribute("data-page",o))};e(),t.subscribe(e)}(),li.insertMultistyle`
    <style>
      ${hi.postCreation.previewContainer} {
        flex-shrink: 0;
        width: 110px;
        height: 110px;
      }
      html.reels--creating-reels ${hi.postCreation.previewContainer} {
        width: 62px;
      }

      ${hi.postCreation.rowButton} {
        cursor: pointer;
      }

      @media (max-width: 440px) {
        ${hi.postCreation.previewContainer} {
          width: 60px;
          height: 60px;
        }
        html.reels--creating-reels ${hi.postCreation.previewContainer} {
          width: 45px;
          min-width: 45px;
          height: 80px;
        }
      }

      ${hi.postCreation.previewPostImage} {
        border-radius: 4px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      /* fix story media being cutted */
      ${hi.storyViewer.mediaContainer} {
        width: 100%;
        height: 100%;
        background-color: #000;
      }

      ${hi.storyViewer.videoPoster} {
        object-fit: contain;
      }
    </style>
  `,async function(){document.addEventListener("click",(async t=>{const e=t.target.closest(hi.general.postDmButton);if(!e)return;const o=e.closest(hi.general.post);if(!o)return;const i=di(hi.general.postThreeDotsButton,o);if(!i)return;t.preventDefault(),t.stopPropagation();const n=new Promise((t=>{li.onDocMutations((function e(){di(hi.general.actionDialog)&&(setTimeout((()=>{li.onDocMutations.off(e)})),t())}))})),r=e.closest("[data-post-id]").dataset.postId||null;si.setPostId(r),i.click(),await n;const a=pi(hi.general.actionDialogItem).find((t=>t.innerText.toLowerCase().includes("share")||t.innerText.endsWith("...")||t.innerText.endsWith("…")));a&&a.click()}),!0)}(),async function(){const t=await Mt("store");if(!t)return;let e=null;li.onDocMutations((()=>{const o=di(hi.postCreation.expandImageButton);if(!o)return;const i=t.getState().creation.sessionId;i!==e&&(e=i,o.click())}))}(),async function(){const t=(t,e)=>window.innerWidth>320?Math.min(125,e/t*100):Math.min(180,e/t*100);Object.defineProperty(Object.prototype,"getHeightPercent",{get:function(){return({width:e,height:o})=>t(e,o)},set:function(){return!0}}),Object.defineProperty(Object.prototype,"getWrapperHeightStyle",{get:function(){return(e,o)=>({paddingBottom:`calc(${t(o,e)}% - 1px)`})},set:function(){return!0}}),li.insertMultistyle`
    <style>
      ${hi.postCreation.video} {
        width: 100%;
        height: 100%;
        background-color: #000;
      }

      ${hi.postCreation.videoPoster} {
        object-fit: contain;
      }
    </style>
  `}(),li.insertMultistyle`
    <style>
      ${hi.postCreation.captionContainer} {
        flex-direction: row-reverse !important;
      }

      ${hi.postCreation.captionTextarea} {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0 12px;
        box-sizing: border-box;
      }

      ${hi.postCreation.userAvatar} {
        display: none;
      }

      ${hi.postCreation.mentionsOverlay} {
        background: transparent !important;
      }

      ${hi.postCreation.tagPeopleButton} {
        padding: 20px;
        cursor: pointer;
        background: transparent;
        border: none;
      }
    </style>
  `,function(){const t=Symbol("handled");li.onDocMutations((async()=>{const e=di(hi.profilePage.avatarStoryRing);if(!e)return;if(e[t])return;e[t]=!0;const o=e.getContext("2d"),i=await li.waitFor((()=>{if(!document.body.contains(e))return null;const t=o.getImageData(0,0,e.width,e.height).data;for(let e=0;e<t.length;e+=4){const o=[t[e],t[e+1],t[e+2]];if(!(0===o[0]&&0===o[1]&&0===o[2]))return o}return null}),{timeout:5e3});if(!i)return;const n=i[0]===i[1]&&i[0]===i[2];e.insertAdjacentHTML("beforebegin",`<div class="avatar-story-ring ${n?"avatar-story-ring_viewed":""}"></div>`)})),li.insertMultistyle`
    <style>
      ${hi.profilePage.avatarStoryRing} {
        opacity: 0;
      }

      .avatar-story-ring {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 50%;
        background: linear-gradient(45deg, #F99D4C, #DD326F, #C42E90);
      }
      .avatar-story-ring_viewed {
        background: #dbdbdb;
      }

      .avatar-story-ring::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        background: #FFF;
        border-radius: 50%;
      }
    </style>
  `}(),li.onDocMutations((()=>{const t=di(hi.general.cookieModalContent);if(!t)return;const e=t.closest(hi.general.modal);e&&e.remove()})),function(){const t=Symbol("handled");li.onDocMutations((()=>{const e=di(hi["highlights-container"]);e&&(e[t]||(e[t]=!0,li.smartHorizontalScroll.init(e)))}))}(),window.addEventListener("click",(t=>{if("v2"!==window.inssist.igBundleVersion)return;if(!t.metaKey&&!t.ctrlKey)return;const e=t.target.closest("a[href]");e&&e.href&&(t.preventDefault(),t.stopPropagation(),window.open(e.href))}),!0),async function(){const t=await Mt("nav");if(!t)return;const e=/\/reel\/[\w-]+\//;window.addEventListener("click",(o=>{if("v2"!==window.inssist.igBundleVersion)return;const i=o.target.closest("a[href]");if(!i)return;const n=i.getAttribute("href")||"";e.test(n)&&(o.preventDefault(),o.stopPropagation(),t.push(n))}),!0)}(),function(){const t=new Map,e=[hi.general.tabBarAvatarContainer,hi.general.storyTrayViewerAvatarContainer];li.onDocMutations((()=>{for(const o of e){const e=di(o);e&&(e.innerHTML&&!t.has(o)?t.set(o,e.innerHTML):!e.innerHTML&&t.has(o)&&(e.innerHTML=t.get(o)))}}))}(),async function(){const t=await Mt("add-dispatch-listener");if(!t)return;t((async t=>{"DELETE_POST_SUCCEEDED"===t.type&&(await li.sleep(300),document.body.innerText.length>0||(history.back(),await li.sleep(100),location.reload()))}))}(),function(){const t="inssist.errorPageReloadedAt";li.onDocMutations((()=>{if(!di(hi.general.errorPageContent))return;const e=li.ls.get(t)||0;e&&Date.now()-e<1*li.time.MINUTE||(li.ls.set(t,Date.now()),location.reload())}))}(),async function(){const t=await Mt("store");if(!t)return;let e=!1;t.subscribe((()=>{var o;if(e)return;"httpErrorPage"===(null===(o=t.getState().navigation)||void 0===o?void 0:o.pageIdentifier)&&(ci.send("ga.send-event","user","ig:page-not-found"),e=!0)}))}(),function(){const t=Date.now();li.onDocMutations((()=>{if(!document.body)return;if(Date.now()-t>10*li.time.SECOND)return;document.body.innerText.includes("Sorry! Something went wrong :(")&&(location.href="/")}))}(),function(){const t=Symbol("handled");li.onDocMutations((()=>{const e=li.$(hi.postCreation.submitPostButton);e&&(e[t]||(e[t]=!0,e.style.setProperty("width",`${e.offsetWidth}px`,"important"),e.style.setProperty("display","flex","important"),e.style.setProperty("flex-direction","row","important"),e.style.setProperty("justify-content","flex-end","important")))}))}(),async function(){const t=await Mt("nav");if(!t)return;const e='\n    <svg viewBox="0 0 24 24" width="24" height="24" color="#000" fill="#000">\n      <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>\n      <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>\n      <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>\n    </svg>\n  ',o=Symbol("handled");li.onDocMutations((()=>{const i=li.$(hi.general.tabBarDm),n=li.$(hi.general.tabBarReels);if(!i||!n)return;const r=i.querySelector("a"),a=i.querySelector("svg");if(r&&a&&(n[o]||(n[o]=!0,n.insertAdjacentElement("beforebegin",i)),a[o]||(a[o]=!0,a.outerHTML=e),r[o]||(r[o]=!0,r.removeAttribute("href")),!i[o])){i[o]=!0;let e=!1;i.addEventListener("mousedown",(t=>{!!li.$(hi.creationPopup.root)&&(e=!0)})),i.addEventListener("click",(async o=>{if(o.preventDefault(),o.stopPropagation(),e)return void(e=!1);"/"!==location.pathname&&t.push("/");(await li.waitFor((()=>li.$(hi.feedPage.createPostTopButton)))).click()}),!0)}}))}(),li.insertMultistyle`
    <style>
      .clickable {
        cursor: pointer;
        transition: filter 300ms;
      }
      .clickable:hover {
        filter: brightness(110%);
      }
      .clickable:active {
        filter: brightness(90%);
      }
    </style>
  `,li.insertMultistyle`
    <style>
      .info-circle {
        width: 12px;
        height: 12px;
        color: #FFF;
        background: #1BA2F9;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: relative;
        font-size: 9px;
        font-weight: 700;
        font-family: Montserrat !important;
      }
      .info-circle::before { /* hitbox */
        content: '';
        position: absolute;
        top: -7px;
        left: -7px;
        right: -7px;
        bottom: -7px;
      }
      .theme-night .info-circle {
        filter: url(#theme-reverse-filter);
        background: #33ABF8;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.96);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }

      .modal__window {
        width: 290px;
        padding: 16px 20px;
        background: #FFF;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        line-height: 20px;
        border-radius: 12px;
      }

      .modal__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 600;
      }

      .modal__content {
        margin-top: 12px;
        display: block;
        color: #3F3E3F;
      }
      .modal__content b {
        font-weight: 600;
      }
      .modal__content a {
        color: #1BA2F9 !important;
      }
      .theme-nigh .modal__content a {
        filter: url(#theme-reverse-filter);
        color: #33ABF8 !important;
      }
      .modal__content ul {
        list-style: disc;
        padding: 8px 0 8px 24px;
        margin: 0;
      }
    </style>
  `,li.insertMultistyle`
    <style>
      .button {
        color: #FFF;
        background: #1BA2F9;
        border: none;
        margin-right: 12px;
        cursor: pointer;
        padding: 5px 12px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 4px;
        font-weight: 600;
      }
      .button:last-child {
        margin-right: 0;
      }
      .button:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
      .button_cancel {
        color: #262626;
        border: 1px solid #DBDBDB;
        background: transparent;
      }
      .theme-night .button:not(.button_cancel) {
        filter: url(#theme-reverse-filter);
        background: #33ABF8;
      }
    </style>
  `}};let hi,gi;const{$utils:fi}=app;var mi={init:function(){document.addEventListener("click",(t=>{Ho.onDocClick(t)}),!0),function(){let t=location.pathname;Ho.onPathChange(t),fi.onDocMutations((()=>{const e=location.pathname;t!==e&&(Ho.onPathChange(e),t=e)}))}()}};const{$iframeBus:yi}=app;var vi={init:function(){yi.on("ig.publish-story",bi)}};async function bi({imageUrl:t,mentions:e=[]}){const o=await Mt("http"),i=await async function(t){const e=await fetch(t),o=await e.blob();return await async function(t){return new Promise(((e,o)=>{const i=new FileReader;i.onerror=()=>{o()},i.onload=()=>{e(i.result)},i.readAsDataURL(t)}))}(o)}(t),n=document.createElement("img");n.src=i,document.body.appendChild(n),await new Promise((t=>{n.onload=t}));const r=n.clientWidth,a=n.clientHeight,s=document.createElement("canvas");s.width=r,s.height=a;s.getContext("2d").drawImage(n,0,0),n.remove();const l=await new Promise((t=>{s.toBlob(t,"image/jpeg")})),c=Date.now().toString(),d=`fb_uploader_${c}`;let p=null;try{await o.post(`/rupload_igphoto/${d}`,l,{headers:{"X-Instagram-Rupload-Params":JSON.stringify({media_type:1,upload_id:c,upload_media_width:r,upload_media_height:a}),"X-Entity-Name":d,"X-Entity-Length":String(l.size),Offset:"0"},timeout:Number.POSITIVE_INFINITY})}catch(t){p=t}if(!p)try{await o.post("/create/configure_to_story/",{upload_id:c,caption:"",reel_mentions:JSON.stringify(e.map((t=>({user_id:t.userId,x:t.cx,y:t.cy,width:t.width,height:t.height,rotation:0}))))})}catch(t){p=t}return{error:p}}const{$utils:_i,$iframeBus:xi}=app;var Pi={init:function(){wi=Pt.controller.getConfig().igSelectors,async function(){const t=await Mt("store");_i.onDocMutations((()=>{const e=_i.$$(wi["post-item"]),o=_i.$$(wi["story-container"]);[...e,...o].forEach((e=>{if(e.withActions)return;const i=o.includes(e),n=!!e.querySelector("video");let r=!1,a=!1;const s=e.closest("[data-post-id]");if(s){const e=s.dataset.postId,o=t.getState().posts.byId.get(e);a="clips"===(null==o?void 0:o.productType),r="igtv"===(null==o?void 0:o.productType),r&&s.setAttribute("data-media-actions-post-type","igtv"),a&&s.setAttribute("data-media-actions-post-type","reels")}const l=function({isIgtv:t=!1,isStory:e=!1,isVideo:o=!1,isReels:i=!1}={}){return`\n    <div class="\n      mediaActions\n      ${t?"mediaActions_igtv":""}\n      ${i?"mediaActions_reels":""}\n      ${e?"mediaActions_story":"mediaActions_post"}\n      ${o?"mediaActions_video":"mediaActions_photo"}">\n      <button class="mediaActions__button" data-action="pin" title="Add to Inspirations">\n        <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.5" viewBox="0 0 13.5 13.5">\n          <path d="M7,1.632H4.032a4.707,4.707,0,0,0-2,.207,1.9,1.9,0,0,0-.828.828,4.707,4.707,0,0,0-.207,2V9.968a4.708,4.708,0,0,0,.207,2,1.9,1.9,0,0,0,.828.828,4.708,4.708,0,0,0,2,.206h5.81a4.751,4.751,0,0,0,1.122-.065A1.9,1.9,0,0,0,12.3,11.6a4.752,4.752,0,0,0,.065-1.122M11.105,4.789V1M9.211,2.895H13M5.737,5.105A1.263,1.263,0,1,1,4.474,3.842,1.263,1.263,0,0,1,5.737,5.105ZM8.573,7.264,3.23,12.121c-.3.273-.451.41-.464.528a.316.316,0,0,0,.105.272c.089.079.292.079.7.079H9.5a4.724,4.724,0,0,0,1.72-.153,1.9,1.9,0,0,0,1-1,4.721,4.721,0,0,0,.153-1.72,2.741,2.741,0,0,0-.033-.6,1.264,1.264,0,0,0-.236-.491,2.735,2.735,0,0,0-.449-.4L9.884,7.223a1.5,1.5,0,0,0-.49-.321.631.631,0,0,0-.352.011A1.5,1.5,0,0,0,8.573,7.264Z" transform="translate(-0.25 -0.25)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>\n        </svg>\n      </button>\n      <button class="mediaActions__button" data-action="open" title="Open in new tab">\n        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="12.5" viewBox="0 0 12.5 12.5">\n          <path d="M2.571,1.028h2.4a.514.514,0,0,1,.07,1.024l-.07,0h-2.4A1.542,1.542,0,0,0,1.033,3.47l-.005.109,0,5.85a1.543,1.543,0,0,0,1.438,1.539l.106,0L8.4,10.963A1.543,1.543,0,0,0,9.938,9.526l0-.106v-2.4a.514.514,0,0,1,1.024-.07l0,.07v2.4a2.572,2.572,0,0,1-2.432,2.568l-.136,0L2.577,12l-.139,0A2.572,2.572,0,0,1,.005,9.566l0-.137L0,3.6l0-.139A2.571,2.571,0,0,1,2.435,1.031ZM7.027,0h4.494L11.59.01l.069.019L11.7.046a.482.482,0,0,1,.1.062l.048.043.057.068.037.062.026.062.013.044.009.044L12,.495v4.48a.514.514,0,0,1-1.024.07l0-.07V1.756L6.02,6.709a.514.514,0,0,1-.67.05l-.058-.05a.514.514,0,0,1-.05-.67l.05-.058,4.95-4.953H7.027a.514.514,0,0,1-.51-.445l0-.07A.514.514,0,0,1,6.957,0Z" transform="translate(0.25 0.25)" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>\n        </svg>\n      </button>\n    </div>\n  `}({isStory:i,isVideo:n,isIgtv:r,isReels:a});e.insertAdjacentHTML("afterbegin",l),e.withActions=!0}))}))}(),Ho.onDocClick((async t=>{const e=t.target.closest(".mediaActions__button");if(!e)return;t.preventDefault(),t.stopPropagation();const o=e.closest("li")||e.closest(wi["post-item"])||e.closest(wi["story-container"]),i=o.querySelector("img"),n=o.querySelector("video");if(!i&&!n)return void xi.send("ig.error","unable to find media for button");const r=(await Mt("store")).getState();let a;const s=t.target.closest("[data-post-id]");a=s?s.dataset.postId:r.stories.reels.get(r.stories.currentReelId).itemIds[r.stories.currentReelItemIndex];const l=r.posts.byId.get(a),c=e.getAttribute("data-action");let d;if(n)d=n.getAttribute("src")||n.querySelector("source").getAttribute("src");else if(i){var p,u;!l.productType.startsWith("carousel")&&(null===(p=l.displayResources)||void 0===p?void 0:p.length)>0&&(d=l.displayResources.slice().sort(((t,e)=>e.configWidth-t.configWidth))[0].src),d||(d=null===(u=i.getAttribute("srcset"))||void 0===u?void 0:u.split(",").map((t=>({src:t.split(" ")[0],configWidth:t.split(" ")[1]}))).sort(((t,e)=>e.configWidth-t.configWidth))[0].src),d||(d=i.getAttribute("src"))}if("open"===c){const t=n&&n.outerHTML||i&&i.outerHTML;xi.send("ig.media-open",{url:d,html:t})}else if("pin"===c){var h;const t=function(t){var e;const o=[],i=(null==t||null===(e=t.owner)||void 0===e?void 0:e.username)||null;i&&o.push(i.toLowerCase());const n=Number(null==t?void 0:t.postedAt);if(n){const t=new Date(1e3*n).toDateString().split(" ").slice(1).join("-").toLowerCase();o.push(t)}return o.join("-")||null}(l),e=(null==l||null===(h=l.owner)||void 0===h?void 0:h.username)||null,o=l.caption||"";xi.send("inspiration.pin",{url:d,filename:t,username:e,caption:o})}})),_i.insertMultistyle`
    <style>
      .mediaActions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
      }
      .mediaActions_story {
        padding-right: 5px;
        padding-bottom: 70px;
        height: 150px;
        z-index: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
      .mediaActions_post.mediaActions_photo {
        padding-right: 2px;
        padding-bottom: 12px;
        align-items: flex-end;
      }
      .mediaActions_post.mediaActions_video {
        right: 5px;
        transition-duration: 0s;
        bottom: 31px;
      }
      @media (max-width: 450px) {
        .mediaActions_post.mediaActions_video {
          bottom: 72px;
        }
      }
      ${wi["post-item"]}:hover .mediaActions,
      body:hover .mediaActions_story {
        opacity: 1;
      }
      .v1Nh3 .mediaActions, /* preview in profile */
      .PUHRj .mediaActions { /* preview in activity */
        display: none;
      }
      html.theme-night .mediaActions_story {
        filter: none;
      }

      ${wi["post-item"]} video::-webkit-media-controls-panel {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 140px;
        background: linear-gradient(
          to top,
          hsl(0, 0%, 0%, 0.541) 0%,
          hsla(0, 0%, 0%, 0.382) 19%,
          hsla(0, 0%, 0%, 0.278) 34%,
          hsla(0, 0%, 0%, 0.194) 47%,
          hsla(0, 0%, 0%, 0.126) 56.5%,
          hsla(0, 0%, 0%, 0.075) 65%,
          hsla(0, 0%, 0%, 0.042) 73%,
          hsla(0, 0%, 0%, 0.021) 80.2%,
          hsla(0, 0%, 0%, 0.008) 86.1%,
          hsla(0, 0%, 0%, 0.002) 91%,
          hsla(0, 0%, 0%, 0.001) 95.2%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }

      /* show video controls only when hovering video */
      ${wi["post-item"]}:not(:hover) video::-webkit-media-controls-panel {
        display: none;
      }

      .mediaActions__button {
        width: 34px;
        height: 34px;
        margin-right: 6px;
        border-radius: 50%;
        padding: 0;
        border: none;
        cursor: pointer;
        position: relative;
        transform-origin: center;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: all;
        color: #FFF;
        background: transparent;
        transition: all 0.16s linear;
      }
      .mediaActions__button:not(:hover) {
        transition-duration: 0s;
      }
      .mediaActions_post.mediaActions_video .mediaActions__button {
        margin-right: 4px;
      }
      .mediaActions_post.mediaActions_photo .mediaActions__button,
      .mediaActions_story .mediaActions__button {
        color: #3F3E3F;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
        width: 27px;
        height: 27px;
        margin-right: 12px;
      }
      .mediaActions_post.mediaActions_video .mediaActions__button:hover {
        background: rgba(36, 36, 40, 0.7);
      }
      /* hitbox */
      .mediaActions__button::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
      }

      .mediaActions_post.mediaActions_video .mediaActions__button svg {
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));
      }
    </style>
  `}};let wi;const{$utils:Ci,$iframeBus:Si}=app;var $i={init:function(){Mi=Pt.controller.getConfig().igSelectors,Ho.onPathChange((t=>{Si.send("ig.path-change",t)})),async function(){const t=await Mt("http"),e=await Mt("store");if(!t||!e)return;const o=t.post.bind(t);t.post=async(...t)=>{const i=t[0];let n=i.includes("/create/configure_to_story")?"story":i.includes("/media/configure_to_clips")?"reel":i.includes("/igtv/configure_to_igtv")||i.includes("/create/configure")?"video":i.includes("/media/configure")?"photo":null;if(n){const i=await o(...t);if("ok"===i.status){var r,a;if("story"===n){var s;n=!!(null===(s=i.media)||void 0===s?void 0:s.video_duration)?"story-video":"story-photo"}const t={isCustomCover:!!(null===(r=e.getState().creation)||void 0===r||null===(a=r.coverPhoto)||void 0===a?void 0:a.isCustom)};Si.send("ig.published",n,t)}return i}return o(...t)}}(),Ho.onDocClick((t=>{t.target.closest(".xWeGp")&&Si.send("ig.open-dm")})),Si.on("ig.back",(async()=>{history.state&&history.state.key&&history.back()})),Si.on("ig.broadcast-scroll",(t=>{Ho.docElem.scrollTop+=t})),function(){let t;(async()=>{t=await Mt("nav")})(),Si.on("ig.ajax-go",(e=>{t?t.push(e):location.href=e}))}(),async function(t){Si.on("ig.hard-go",(t=>{location.href=t}))}(),Si.on("ig.get-url",(()=>location.pathname+location.search)),Si.on("ig.clear-and-show-spinner",(()=>{const t=Ci.$(Mi.general.reactRoot);t&&(t.innerHTML="")}))}};let Mi;const{$reels:ki,$utils:Ti}=app;var Ii={init:async function(){if(Di=Pt.controller.getConfig().igSelectors,Ri=await Mt("store"),!Ri)return;(function(){let t;Object.defineProperty(Object.prototype,"getVideoCoverPhoto",{get:function(){return(...e)=>{const o=e[0];if(Oi.onCall(o),!Oi.prevented){if(Oi.result){const t=Oi.result;return Oi.result=null,t}return t(...e)}Oi.prevented=!1}},set:function(e){return t=e,!0}})})(),async function(){await Ti.waitForDocumentReady(),Bi=jo.create({onClick:Ni})}(),Ho.onBeforeStoryCreation((()=>{Ei="story",Hi()})),Ho.onBeforePostCreation((()=>{window.require("PolarisCreationActionCreationSelectImage"),window.require("PolarisCreationActionCreationSelectMedia"),Ei=ki.controller.isCreatingReels()?"reels":"post",Hi()})),Ho.onMediaProcessingError((()=>{Vi()})),Ti.onDocMutations((()=>{const t=!!Ti.$(Di.postCreationPage),e=!!Ti.$(Di.storyCreationPage);(t||e)&&Vi()})),function(){const t=Symbol();Ti.onDocMutations((()=>{Ti.$$('input[accept*="image/jpeg"').forEach((e=>{e[t]||(e[t]=!0,e.setAttribute("accept","image/jpeg, image/png, video/quicktime, video/mp4, video/webm"))}))}))}(),Oi.onCall((t=>{const{error:e,...o}=function(t){const e=t.videoWidth,o=t.videoHeight;if(!e||!o)return{error:"wrong-format"};if(ki.controller.isCreatingReels()&&e===o)return{error:"square-reel-video"};const i=e/o,n=Ai[Ei].minRatio,r=Ai[Ei].maxRatio;return i<n||i>r?{error:"wrong-ratio",ratio:i}:t.duration<Ai[Ei].minVideoDuration?{error:"video-too-short"}:t.duration>Ai[Ei].maxVideoDuration?{error:"video-too-long"}:{error:null}}(t);e&&(async()=>{Oi.prevented=!0,Ri.dispatch({type:"inssist.ig.stop-creation-session"});const i=await fetch(t.src),n=await i.blob();await zi(n.type,e,o),Ho.onMediaProcessingError()})()})),Oi.onCall((t=>{"story"===Ei&&(Oi.result=new Promise((e=>{const o=document.createElement("canvas");t.currentTime=0,t.addEventListener("timeupdate",(()=>{o.width=t.videoWidth,o.height=t.videoHeight,o.getContext("2d").drawImage(t,0,0),o.toBlob((o=>{e({file:o,dataURL:URL.createObjectURL(o),uploadMediaWidth:t.videoWidth,uploadMediaHeight:t.videoHeight,videoTransform:null})}),"image/jpeg")}))})))})),Ti.insertMultistyle`
    <style>
      ${Di.general.uploadPanel} {
        z-index: 1;
      }
    </style>
  `,async function(){const t=await Mt("http");if(!t)return;const e=t.post.bind(t);t.post=(...t)=>{var o,i,n;if((null===(o=t[0])||void 0===o?void 0:o.includes("/rupload_igvideo"))&&!(null===(i=t[0])||void 0===i?void 0:i.includes("story"))){const e=t[2].headers,o=JSON.parse(e["X-Instagram-Rupload-Params"]);o.is_clips_video||(o.is_igtv_video=!0,o.is_unified_video=1,e["X-Instagram-Rupload-Params"]=JSON.stringify(o))}else(null===(n=t[0])||void 0===n?void 0:n.includes("/create/configure/"))&&(t[0]="/igtv/configure_to_igtv/",t[1]={source_type:"library",caption:t[1].caption,upcoming_event:"",upload_id:t[1].upload_id,usertags:t[1].usertags,custom_accessibility_caption:t[1].custom_accessibility_caption,disable_comments:0,like_and_view_counts_disabled:0,igtv_ads_toggled_on:"",igtv_share_preview_to_feed:1,is_unified_video:1,video_subtitles_enabled:0});return e(...t)}}()}};const Ai={clickShowErrorTimeout:10*Ti.time.SECOND,forceShowErrorTimeout:30*Ti.time.SECOND,story:{minRatio:.12,maxRatio:1.91,minRatioPrettyStr:"0.12",maxRatioPrettyStr:"1.91:1",minRatioValueStr:"0.12",maxRatioValueStr:"1.91",minVideoDuration:1,maxVideoDuration:300.9,minVideoDurationStr:"1 second",maxVideoDurationStr:"5 minutes",alertErrorMessage:"Uploading video cancelled. Please ensure that the video is 1 to 5 minutes long and the size ratio is less than 1.91:1."},post:{minRatio:.12,maxRatio:1.91,minRatioPrettyStr:"0.12",maxRatioPrettyStr:"1.91:1",minRatioValueStr:"0.12",maxRatioValueStr:"1.91",minVideoDuration:1,maxVideoDuration:900.9,minVideoDurationStr:"1 second",maxVideoDurationStr:"15 minutes",alertErrorMessage:"Uploading video cancelled. Please ensure that the video is 1 second to 15 minutes long and the size ratio is less than 1.91:1."},reels:{minRatio:.12,maxRatio:1.91,minRatioPrettyStr:"0.12",maxRatioPrettyStr:"1.91:1",minRatioValueStr:"0.12",maxRatioValueStr:"1.91",minVideoDuration:1,maxVideoDuration:900.9,minVideoDurationStr:"1 second",maxVideoDurationStr:"15 minutes",alertErrorMessage:"Uploading video cancelled. Please ensure that the video is 1 second to 15 minutes long and the size ratio is less than 1.91:1."}};let Di,Ri,Ei,Bi,Li,Fi;const Oi={onCall:Ti.createEmitter(),result:null,prevented:!1};function Hi(){Bi&&(Li=Date.now(),jo.toggle(Bi,!0),Fi=setTimeout((()=>{alert(Ai[Ei].alertErrorMessage),Vi()}),Ai.forceShowErrorTimeout))}function Vi(){Bi&&(jo.toggle(Bi,!1),clearTimeout(Fi))}function Ni(){Date.now()-Li>Ai.clickShowErrorTimeout&&alert(Ai[Ei].alertErrorMessage),Vi()}async function zi(t,e,o={}){const i=zi;if(i.shown)return;i.shown=!0;const n=Ai[Ei];if("wrong-ratio"===e){const t=o.ratio.toFixed(3);document.body.insertAdjacentHTML("beforeend",`\n      <div class="video-error modal">\n        <div class="modal__window">\n          <div class="video-error__title modal__title">\n            <span class="emoji">😱</span> UNSUPPORTED ASPECT RATIO\n          </div>\n          <div class="modal__content">\n            ${o.ratio<n.minRatio?`\n              Uploaded Video Aspect Ratio is <b>${t}</b>\n              which is <b>below ${n.minRatioPrettyStr} (${n.minRatioValueStr})</b>.\n            `:`\n              Uploaded Video Aspect Ratio is <b>${t}</b>\n              which is <b>above ${n.maxRatioPrettyStr} (${n.maxRatioValueStr})</b>.\n            `}\n            <div class="video-error__convert-section">\n              You can resize the video with one of these free tools:\n              <ul>\n                <li><a href="https://ezgif.com/resize-video" target="_blank">ezgif.com</a></li>\n                <li><a href="https://clideo.com/resize-video" target="_blank">clideo.com</a></li>\n                <li><a href="https://cloudconvert.com/mp4-converter" target="_blank">cloudconvert.com</a></li>\n              </ul>\n            </div>\n            <button class="video-error__got-it-button">\n              OK, GOT IT\n            </button>\n          </div>\n        </div>\n      </div>\n    `)}else if("wrong-format"===e){let e;e="video/quicktime"===t?"https://www.zamzar.com/convert/mov-to-webm":"video/mp4"===t?"https://www.zamzar.com/convert/mp4-to-webm":"https://www.zamzar.com",document.body.insertAdjacentHTML("beforeend",`\n      <div class="video-error modal">\n        <div class="modal__window">\n          <div class="video-error__title modal__title">\n            <span class="emoji">😱</span> UNABLE TO UPLOAD VIDEO\n          </div>\n          <div class="modal__content">\n            Instagram server rejected this video for upload.\n            Please ensure uploaded video uses supported format and codec (e.g. MP4/h264 or WEBM).\n            <div class="video-error__convert-section">\n              You can convert video format with one of these tools:\n              <ul>\n                <li><a href="https://video.online-convert.com/convert-to-mp4" target="_blank">video.online-convert.com</a></li>\n                <li><a href="https://cloudconvert.com/mp4-converter" target="_blank">cloudconvert.com</a></li>\n                <li><a href="https://ezgif.com/resize-video" target="_blank">ezgif.com</a></li>\n                <li><a href="${e}" target="_blank">zamzar.com</a></li>\n              </ul>\n            </div>\n            <button class="video-error__got-it-button">\n              OK, GOT IT\n            </button>\n          </div>\n        </div>\n      </div>\n    `)}else"video-too-short"===e?document.body.insertAdjacentHTML("beforeend",`\n      <div class="video-error modal">\n        <div class="modal__window">\n          <div class="video-error__title modal__title">\n            <span class="emoji">😱</span> VIDEO IS TOO SHORT\n          </div>\n          <div class="modal__content">\n            <div style="display: block">\n              Instagram server did not accept this video,\n              because it is less than <b>${n.minVideoDurationStr}</b> long.\n            </div>\n            <button class="video-error__got-it-button">\n              OK, GOT IT\n            </button>\n          </div>\n        </div>\n      </div>\n    `):"video-too-long"===e?document.body.insertAdjacentHTML("beforeend",`\n      <div class="video-error modal">\n        <div class="modal__window">\n          <div class="video-error__title modal__title">\n            <span class="emoji">😱</span> VIDEO IS TOO LONG\n          </div>\n          <div class="modal__content">\n            Instagram server did not accept this video,\n            because it is over <b>${n.maxVideoDurationStr}</b>\n            long.\n            <div class="video-error__convert-section">\n              You can cut video short with this free\n              <a href="https://online-video-cutter.com/" target="_blank">online video cutter tool</a>.\n            </div>\n            <button class="video-error__got-it-button">\n              OK, GOT IT\n            </button>\n          </div>\n        </div>\n      </div>\n    `):"square-reel-video"===e&&document.body.insertAdjacentHTML("beforeend",'\n      <div class="video-error modal">\n        <div class="modal__window">\n          <div class="video-error__title modal__title">\n            <span class="emoji">😱</span> UNSUPPORTED ASPECT RATIO\n          </div>\n          <div class="modal__content">\n            <div style="display: block">\n              Instagram API does not support posting square 1:1 videos to Reels.\n            </div>\n            <div style="height: 8px"></div>\n            <div style="display: block">\n              • Supported ratios are 4:5 to 1.91:1.<br>\n              • Optimal is 9:16 or 1080x1920px <span class="emoji">🚀</span>\n            </div>\n            <div style="height: 8px"></div>\n            <div style="display: block">\n              You can crop your video online with a&nbsp;free\n              <a href="https://ezgif.com/crop-video" target="_blank">ezgif video cropper tool</a>.\n            </div>\n            <button class="video-error__got-it-button">\n              OK, GOT IT\n            </button>\n          </div>\n        </div>\n      </div>\n    ');i.init||(i.init=!0,Ho.onDocClick((t=>{if(!t.target.closest(".video-error__got-it-button"))return;Ti.$(".video-error").remove(),i.shown=!1})),Ti.insertMultistyle`
    <style>
      .video-error__title .emoji {
        margin-right: 8px;
      }

      .video-error__convert-section {
        margin-top: 8px;
        display: block;
      }

      .video-error__got-it-button {
        outline: none;
        border: none;
        padding: 0;
        margin: 16px 0 0 0;
        background: transparent;
        font-size: inherit;
        font-family: inherit;
        text-align: left;
        font-weight: 600;
        color: #1BA2F9;
        cursor: pointer;
      }
    </style>
  `)}const{$utils:ji,$iframeBus:Ui}=app;var Gi={init:function(){Wi=Pt.controller.getConfig().igSelectors,function({minWidth:t}){ji.insertMultistyle`
    <style>
      @media (min-width: ${t}px) {
        ${Wi.general.tabBarWrap} {
          height: 0;
          margin-top: 12px;
        }

        ${Wi.general.tabBar} {
          width: 490px;
          height: 58px;
          margin: 0 auto;
          box-shadow: 0 0px 12px rgba(0, 0, 0, 0.14);
          border-radius: 15px 15px 0 0;
          border: none;
        }
        .theme-night ${Wi.general.tabBar} {
          background: #E7E8EA;
          border: 1px solid #FFF;
          border-bottom: none;
          box-shadow: none;
          box-sizing: content-box;
        }

        ${Wi.general.tabBar}::before {
          display: none;
        }
      }
    </style>
  `}({minWidth:500}),function({minWidth:t}){ji.insertMultistyle`
    <style>
      @media (min-width: ${t}px) {
        ${Wi.general.header}::before {
          width: 600px;
          margin-left: -300px;
          left: 50% !important;
          right: auto !important;
          background: linear-gradient(
            to right,
            transparent,
            #DBDBDB,
            #DBDBDB,
            transparent
          ) !important;
        }

        ${Wi.general.headerContent} {
          width: 490px !important;
          margin-left: auto;
          margin-right: auto;
        }
      }
    </style>
  `}({minWidth:500}),function({minWidth:t}){let e=qi().scrollTop;const o=()=>{if("/"===location.pathname)return;const o=ji.$(Wi.general.header);if(!o)return;if(window.innerWidth<t)return void(o.style.transform=null);const i=qi().scrollTop,n=i-e,r=n>6;e=i,n<-6||i<=45?o.style.transform=null:r&&(o.style.transform="translateY(-45px)")};if(window.addEventListener("resize",o),document.addEventListener("scroll",o),function(){return!i(Pt.controller.getConfig().igSelectors.general.tabBarCreatePostIconOldNavDesign)}()){const t=Symbol("handled");ji.onDocMutations((()=>{const e=qi();e&&(e[t]||(e[t]=!0,e.addEventListener("scroll",o)))}))}ji.insertMultistyle`
    <style>
      @media (min-width: ${t}px) {
        ${Wi.general.header} {
          transition: transform 0.3s;
        }
      }
    </style>
  `}({minWidth:460}),function({minWidth:t}){ji.insertMultistyle`
    <style>
      @media (min-width: ${t}px) {
        ${Wi.general.storyPreviewContainer} {
          border: 1px solid #EDEDED !important;
          border-radius: 3px;
          margin-top: 18px;
          margin-bottom: 14px;
        }

        html[data-page="feedPage"] ${Wi.general.recommendationsContainer} {
          border: 1px solid #EDEDED !important;
          border-radius: 3px;
        }
      }
    </style>
  `}({minWidth:500}),function({minWidth:t}){ji.insertMultistyle`
    <style>
      @media (min-width: ${t}px) {
        ${Wi.explorePage.searchResults} {
          width: 100%;
          max-width: 460px;
          margin: -16px auto 0;
        }

        /* thin border for posts */
        ${Wi.explorePage.post} {
          position: relative;
        }
        ${Wi.explorePage.post}::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
          box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
        }
      }
    </style>
  `}({minWidth:736}),function({minWidth:t}){ji.onDocClick((async e=>{if(window.innerWidth<t)return;const o=e.target.closest(Wi.profilePage.post);if(!o)return;e.preventDefault(),e.stopPropagation();const i=o.getAttribute("href");(await Mt("nav")).push(i)}),{capture:!0}),ji.insertMultistyle`
    <style>
      @media (max-width: ${t-1}px) {
        ${Wi.profilePage.header} {
          margin-top: 20px !important;
        }
      }

      @media (min-width: ${t}px) {
        ${Wi.profilePage.content} {
          padding-top: 0 !important;
        }

        ${Wi.profilePage.header} {
          padding-top: 26px;
        }

        ${Wi.profilePage.avatarWithStoryWrap} {
          margin-top: 6px;
        }

        ${Wi.profilePage.username} {
          position: relative;
          top: -3px;
        }

        ${Wi.profilePage.settingsMenuWrap} {
          background: #FFF !important;
        }

        ${Wi.profilePage.settingsMenu} {
          background: #FAFAFA;
          width: 100%;
          max-width: 490px;
          margin: 0 auto;
          border-left: 1px solid #EDEDED;
          border-right: 1px solid #EDEDED;
        }
      }
    </style>
  `}({minWidth:736}),async function({minWidth:t}){const e=await Mt("store");let o;async function i(){var t;const i=ji.$(Wi.general.root);if(!i)return;if(o===i)return;let n;o=i;const r=location.pathname,a=null===(t=e.getState().navigation)||void 0===t?void 0:t.pageIdentifier;if(!a)return;const s="/create/story/"!==r&&r.startsWith("/create/");n=r.startsWith("/accounts/signup/")||"loginPage"===a||"unifiedHome"===a?{width:460,borders:!0}:s?{width:490,borders:!0}:"StoriesPage"===a?{width:460,borders:!1}:"exploreLandingPage"===a||"profilePage"===a?{width:760,borders:!1}:{width:550,borders:!1};const l=ji.$(Wi.general.tabBar),c=ji.$(Wi.general.header),d=ji.$(Wi.general.content);l&&(l.style.opacity=0),c&&(c.style.opacity=0),d&&(d.style.transition=null,d.style.transform="translateY(3px)",d.style.opacity=0),await Ui.send("ig.update-ig-view",{fullscreenWidth:n.width,withBorder:n.borders}),l&&(l.style.opacity=null),c&&(c.style.opacity=null),d&&(d.style.transition="transform 0.2s, opacity 0.2s",d.style.transform=null,d.style.opacity=null)}Ui.on("ig.widescreen-toggled",i),ji.onDocMutations((()=>{window.innerWidth<t||i()}),!0)}({minWidth:460}),async function(){const t=await Mt("nav");if(!t)return;const e=Symbol("handled");ji.onDocMutations((()=>{ji.$$(Wi.profilePage.followersFollowingsLink).forEach((o=>{o[e]||(o[e]=!0,o.addEventListener("click",(async e=>{if(!(window.innerWidth>=725))return;e.preventDefault(),e.stopPropagation(),await Ui.send("ig.force-small-iframe-width",!0);const i=document.body;i.style.opacity=0,i.style.transform="translateY(3px)",await ji.waitFor((()=>window.innerWidth<700)),await ji.sleep(100),t.push(o.getAttribute("href")),await ji.waitFor((()=>ji.$('html[data-page="followList"]'))),i.style.transition="all 0.3s ease",i.style.opacity=null,i.style.transform=null,await ji.sleep(300),i.style.transition=null,Ui.send("ig.force-small-iframe-width",!1)}),{capture:!0}))}))}))}()}};let Wi;function qi(){return ji.docElem}const{$utils:Yi}=app;var Xi={init:function(){Qi=Pt.controller.getConfig().igSelectors,Ho.onDocClick((t=>{const e=t.target.closest(".-wt5I");e&&setTimeout((()=>{document.body.contains(e)&&e.click()}),300)})),function(){const t=HTMLElement.prototype.getBoundingClientRect;HTMLElement.prototype.getBoundingClientRect=function(...e){const o=t.call(this,...e);return 0===o.height&&(o.height=1),o}}(),Yi.insertMultistyle`
    <style>
      /* story spinner */
      .u6s6p {
        display: none !important;
      }
    </style>
  `,Yi.insertMultistyle`
    <style>
      ${Qi["story-container"]} {
        width: 100% !important;
        height: 100% !important;
      }

      ${Qi["story-image"]},
      ${Qi["story-video"]},
      ${Qi["story-loading-preview"]} {
        object-fit: contain;
      }
    </style>
  `,Yi.insertMultistyle`
    <style>
      .theme-night ${Qi.storyViewer.pollContainer} {
        filter: url(#theme-reverse-filter);
        color: transparent;
      }

      ${Qi.storyViewer.pollButtons} {
        font-family: inherit !important;
      }

      ${Qi.storyViewer.pollAnswerDigitOrEmoji} {
        -webkit-text-fill-color: inherit !important;
      }

      ${Qi.storyViewer.pollAnswerDigitOrEmoji} .emoji {
        filter: none !important;
        color: initial !important;
        -webkit-text-fill-color: initial !important;
      }
    </style>
  `,document.addEventListener("keyup",(t=>{if("Escape"===t.key){const t=Yi.$(Qi.storyViewer.closeButton);if(!t)return;t.click()}else if("ArrowLeft"===t.key){const t=Yi.$(Qi.storyViewer.prevButton);if(!t)return;t.click()}else if("ArrowRight"===t.key){const t=Yi.$(Qi.storyViewer.nextButton);if(!t)return;t.click()}})),function(){const t="__manageStoriesAutoplay";let e=null,o=!1;Yi.onDocMutations((()=>{const i=Yi.$(Qi["stories-viewer"]);e&&!i&&(o=!1,Ho.docElem.classList.remove("enable-stories-autoplay")),e=i;const n=Yi.$(Qi["story-video-play-button"]);o&&n&&!n[t]&&setTimeout((()=>{n[t]=!0,n.click()}),200)})),Ho.onDocClick((e=>{const i=e.target.closest(Qi["story-video-play-button"]);i&&!o&&(i[t]=!0,o=!0,Ho.docElem.classList.add("enable-stories-autoplay"))})),Yi.insertMultistyle`
    <style>
      .enable-stories-autoplay ${Qi["story-video-play-button"]} {
        opacity: 0;
      }
    </style>
  `}(),function(){const t=window.addEventListener;window.addEventListener=(...e)=>{if("blur"!==e[0])return t.call(window,...e)}}()}};let Qi;const{$utils:Ki,$iframeBus:Zi}=app;var Ji={init:function(){tn=Pt.controller.getConfig().igSelectors,Ki.insertMultistyle`
    <style>
      ${tn.storyCreation.topRightButton} {
        cursor: pointer;
      }
    </style>
  `,async function(){if(!await Mt("store"))return;const t=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(...e){if(!(9===e.length&&e[0]instanceof HTMLImageElement&&"/create/story/"===location.pathname))return t.call(this,...e);const o=Ki.$(tn.storyCreation.root);if(!o)return t.call(this,...e);const i=window.devicePixelRatio;let n,r;o.offsetWidth/o.offsetHeight>9/16?(n=o.offsetHeight*(9/16),r=o.offsetHeight):(n=o.offsetWidth,r=o.offsetWidth/(9/16)),o.style.width=`${n}px`,o.style.height=`${r}px`,Ki.$$("canvas").forEach((t=>{t.style.width=`${n}px`,t.style.height=`${r}px`,t.setAttribute("width",n*i),t.setAttribute("height",r*i)}));const a=e[0],s=.04,l=a.width/a.height,c=l>9/16*(1-s)&&l<(1+s)*(9/16)?"cover":"contain";this.restore();const d=n*i,p=r*i;"contain"===c&&(this.filter="blur(170px)",t.call(this,a,-300,-300,d+600,p+600),this.filter="none");const u=function({type:t,width:e,height:o,containerWidth:i,containerHeight:n,offset:r=0}){const a=e/o,s=i/n;return a>s&&"contain"===t||a<s&&"cover"===t?{dx:0+r,dy:(n-i/a)/2+r,width:i-2*r,height:i/a-2*r}:{dx:(i-n*a)/2+r,dy:0+r,width:n*a-2*r,height:n-2*r}}({type:c,width:a.width,height:a.height,containerWidth:d,containerHeight:p,offset:ni.storySharingPost?60:0});if(t.call(this,a,u.dx,u.dy,u.width,u.height),ni.storySharingPost){const t=Ki.$("canvas").getContext("2d"),e=window.devicePixelRatio,o=ni.storySharingPost.owner.username,i=60/e,n=(u.dy+u.height+40)/e;t.save(),t.scale(e,e),t.fillStyle="white",t.shadowColor="rgba(150, 150, 150, 0.3)",t.shadowOffsetX=0,t.shadowOffsetY=1,t.shadowBlur=2,t.font="600 22px sans-serif",t.textAlign="left",t.textBaseline="top",t.fillText(`@${o}`,i,n),t.restore()}}}(),function(){const t=Symbol("handled");Ki.onDocMutations((async()=>{const e=Ki.$(tn.storyCreation.root);if(!e)return;if(e[t])return;e[t]=!0;if(await Zi.send("ig.is-fullscreen"))return;const o=document.documentElement;o.classList.add("story-creation-dark-background"),Ki.onDocMutations((function t(){Ki.$(tn.storyCreation.root)||(Ki.onDocMutations.off(t),o.classList.remove("story-creation-dark-background"))}))})),Ki.insertMultistyle`
    <style>
      .story-creation-dark-background body {
        background: #0d0d0d;
      }
      .theme-night.story-creation-dark-background body {
        background: #fdfdfd;
      }
    </style>
  `}(),async function(){const t=await Mt("http:retry-story-post");if(!t)return;Mt.unlockOnNextTick("http:story-assist");const e=t.post.bind(t),o=async(t,i=1)=>{let n;console.log(`trying to post a story, attempt no.${i}`);try{n=await e(...t)}catch{n={status:"fail"}}return"fail"===n.status&&i<5?(await Ki.sleep(3e3),o(t,i+1)):n};t.post=(...t)=>t[0].includes("/create/configure_to_story/")?o(t):e(...t)}(),function(){const t=Symbol("handled");Ki.onDocMutations((()=>{const e=Ki.$(tn.storyCreation.downloadButton);e&&(e.parentNode[t]||(e.parentNode[t]=!0,e.remove()))}))}(),Ki.insertMultistyle`
    <style>
      ${tn.storyCreation.mentionBarContainer} {
        width: calc(100% - 100px) !important;
        height: 94px !important;
        top: 0 !important;
        margin-left: -100px !important;
      }

      ${tn.storyCreation.mentionBar} {
        height: 100% !important;
        border-radius: 0 0 8px 0;
        position: static;
      }

      ${tn.storyCreation.mentionReel} {
        height: 100% !important;
        position: static;
      }

      ${tn.storyCreation.mentionReelRow} {
        height: 100% !important;
        align-items: center !important;
        position: static;
      }
      ${tn.storyCreation.mentionReelRow}:not(:empty)::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0 8px 8px 0 !important;
        background: rgba(0 , 0 , 0 , 0.2) !important;
      }

      ${tn.storyCreation.mentionReelItem} {
        margin: 0 10px 0 0 !important;
        position: relative;
      }
      ${tn.storyCreation.mentionReelItem}:last-child {
        margin-right: 0 !important;
      }
    </style>
  `,function(){const t=Symbol("handled");Ki.onDocMutations((()=>{const e=Ki.$(tn.storyCreation.video);e&&(e[t]||(e[t]=!0,e.muted=!1,e.controls=!0,e.controlsList="nodownload noremoteplayback noplaybackrate",e.disablePictureInPicture=!0,setTimeout((()=>e.volume=1),100)))})),Ki.insertMultistyle`
    <style>
      ${tn.storyCreation.root} {
        background: #000;
      }

      ${tn.storyCreation.videoWrap} {
        position: relative;
      }

      ${tn.storyCreation.video} {
        max-width: 100%;
        max-height: 100%;
      }

      ${tn.storyCreation.videoPoster} {
        display: none;
      }

      ${tn.storyCreation.footer} {
        height: 70px;
        background: transparent;
        position: relative;
      }

      ${tn.storyCreation.videoPlayButton} {
        display: none;
      }

      ${tn.storyCreation.textColorPicker},
      ${tn.storyCreation.drawColorPicker} {
        display: flex;
        flex-direction: column;
      }

      ${tn.storyCreation.colorPickerSelectedCircle} {
        position: relative;
        left: -1px;
        top: -1px;
      }
    </style>
  `}(),function(){const t=Symbol();Ki.onDocMutations((()=>{const e=Ki.$(tn.storyCreation.submitButton);e&&(e[t]||(e[t]=!0,e.addEventListener("click",(()=>{Ki.$$("video").forEach((t=>t.pause()))}),!0)))}))}(),function(){const t=Event.prototype.preventDefault;Event.prototype.preventDefault=function(...e){var o,i;if(!this.type.startsWith("touch")||!(null===(o=(i=this.target).matches)||void 0===o?void 0:o.call(i,tn.storyCreation.canvas)))return t.call(this,...e)}}(),async function(){const t=await Mt("http");if(!t)return;const e=t.post.bind(t);t.post=(...t)=>((()=>{var e;if(!(null===(e=t[0])||void 0===e?void 0:e.includes("/configure_to_story")))return;const o=Ki.$(tn.storyCreation.uploadText);o&&(o.innerText="Publishing...")})(),e(...t));const o=Symbol();Ki.onDocMutations((()=>{const t=Ki.$(tn.storyCreation.uploadText);t&&(t[o]||(t[o]=!0,t.innerText="Uploading...",t.insertAdjacentHTML("afterend",'\n      <div class="StoryUploadText">\n        This might take a minute. Please keep this tab open.\n      </div>\n    ')))})),Ki.insertMultistyle`
    <style>
      ${tn.storyCreation.uploadBar} {
        display: block;
        padding-top: 8px;
        height: 52px;
      }

      ${tn.storyCreation.uploadText} {
        font-size: 14px;
        font-weight: 500;
        text-align: left;
      }

      .StoryUploadText {
        font-size: 14px;
        font-weight: 400;
        margin-top: 2px;
        color: #A0A0A0;
      }

      @media (max-width: 400px) {
        ${tn.storyCreation.uploadBar} {
          padding-top: 9px;
        }
        ${tn.storyCreation.uploadText} {
          font-size: 12px;
        }
        .StoryUploadText {
          font-size: 12px;
          margin-top: 0;
        }
      }
    </style>
  `}()}};let tn;const{$utils:en,$iframeBus:on}=app;var nn={init:async function(){if(rn=Pt.controller.getConfig().igSelectors,an=await Mt("store"),!an)return;en.onDocClick((function(t){t.target.closest('[href="/direct/inbox/"]')&&(t.preventDefault(),t.stopPropagation(),on.send("ig.open-sidebar-dm"))}),{capture:!0}),function(){const t=Symbol("handled");en.onDocMutations((async()=>{const o=en.$(rn.profilePage.moreButton);if(!o)return;const i=an.getState(),n=i.users.viewerId,r=i.users.users.get(n);if(location.pathname.split("/")[1]===r.username)return;let a=en.$(".write-button");if(a&&a!==o.previousElementSibling)return a.remove(),void(o[t]=!1);if(o[t])return;o[t]=!0;await e()&&(o.insertAdjacentHTML("beforebegin",'\n      <button class="write-button">\n        <svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="17.224" viewBox="0 0 19.998 17.224">\n          <path d="M2.079.75h16.57L9.818 15.071l-1.3-9zm6.508 5.315l9.68-5.127" fill="none" stroke="currentColor" stroke-width="1.5"/>\n        </svg>\n      </button>\n    '),a=en.$(".write-button"),a.addEventListener("click",(()=>{on.send("ig.open-sidebar-dm")})))})),en.insertMultistyle`
    <style>
      .write-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 17px;
        margin-left: 8px;
        border: none;
        border-radius: 4px;
        color: #000;
        background: transparent;
        cursor: pointer;
        user-select: none;
        transform: scale(1.15);
      }

      ${rn.profilePage.writeButton} {
        display: none;
      }

      ${rn.profilePage.followButton} {
        width: auto;
        margin-left: 0;
      }

      ${rn.profilePage.buttonsRow} {
        flex-grow: 0;
        flex-direction: row;
      }

      ${rn.profilePage.blueButtonsWrap} {
        flex-grow: 0;
        flex-shrink: 0;
      }

      ${rn.profilePage.subscribeButtonWrap} {
        flex-shrink: 1;
        overflow: hidden;
      }
    </style>
  `;const e=async()=>{const t=location.pathname.split("/")[1];return await en.waitFor((()=>{const e=an.getState(),o=e.users.usernameToId.get(t);return e.users.users.get(o)||null}))}}()}};let rn,an;const{$utils:sn,$iframeBus:ln}=app;var cn={init:async function(){if(pn=await Mt("store"),!pn)return;dn=Pt.controller.getConfig().igSelectors,function(){const t=Symbol("handled");sn.onDocMutations((()=>{const e=sn.$(dn.profilePage.content);if(!e)return;if(e[t])return;e[t]=!0;const o=hn({empty:!0});e.insertAdjacentHTML("afterbegin",o),(async()=>{try{var t;const o=location.pathname.split("/")[1],i=await sn.waitFor((()=>{const t=pn.getState(),e=t.users.usernameToId.get(o);if(e)return t.users.users.get(e)}));if(!document.body.contains(e))return;const n=Object.values(pn.getState().posts.byId.toJS()).filter((t=>{var e;return String(null===(e=t.owner)||void 0===e?void 0:e.id)===String(i.id)})).filter((t=>!t.productType||"feed"===t.productType||"igtv"===t.productType)).sort(((t,e)=>e.postedAt-t.postedAt)).slice(0,12),r={userId:i.id,username:i.username,bio:i.bio,postsCount:i.counts.media,followersCount:i.counts.followedBy,followingsCount:i.counts.follows,isPrivate:i.isPrivate,isVerified:i.isVerified,hasAvatar:i.profilePictureUrl.includes("150x150"),hasHighlights:i.highlightReelCount>0,lastPosts:n.map((t=>({ts:1e3*t.postedAt})))};if(un.grade=await ln.send("chrome-bus","insights.get-credibility-grade",r),!document.body.contains(e))return;un.engagement=function({user:t,posts:e}){const o=pn.getState().users.viewerId===t.id;if(t.isPrivate&&!o||0===e.length)return{value:"N/A",color:"#D8DADD",label:""};const i=e.map((t=>t.comments+t.likes)).reduce(((t,e)=>t+e),0),n=e.length>0?i/e.length:0,r=t.followerCount>0?n/t.followerCount*100:0,a=`${r<5?(Math.round(10*r)/10).toFixed(1):Math.round(r).toString()}%`,s={value:a,color:"#797979",label:"average"},l={value:a,color:"#74BE86",label:"above avg"},c={value:a,color:"#74BE86",label:"high"},d={value:a,color:"#74BE86",label:"v. high"},p={value:a,color:"#74BE86",label:"extreme"},u=r/(64.18845*Math.pow(t.followerCount,-.2251755));if(u<.4)return s;if(u<.8)return l;if(u<1.2)return c;if(u<1.8)return d;return p}({user:{id:i.id,isPrivate:i.isPrivate,followerCount:(null===(t=i.counts)||void 0===t?void 0:t.followedBy)||0},posts:n.map((t=>({likes:t.numPreviewLikes||0,comments:t.numComments||0})))});const a=pn.getState().users.viewerId;un.followStatus={show:String(a)!==String(i.id),value:i.followsViewer};sn.$(".profile-bar").outerHTML=hn();to({anchor:sn.$(".profile-bar__info-circle"),class:"profile-bar__info-tooltip",text:"\n            <b>Account Grade</b>\n            <br/>\n            This estimates if Instagram account is<br/>\n            spam / inactive or a real person / business.\n            Inssist relies on Machine Learning to identify\n            the grade.\n            <br/><br/>\n\n            <b>Engagement Rate</b>\n            <br/>\n            Profile engagement rate is calculated as\n            <code>(likes + comments) / followers</code>, for the last<br/>\n            12 posts. The higher account engagement,<br/>\n            the more active the followers are.\n            <br/><br/>\n\n            <b>Follow Status</b>\n            <br/>\n            Shows if this account is following you or not.\n            <br/><br/>\n\n            Account Grade and Engagement Rate are<br/>\n            not available for private accounts.\n          "})}catch(t){console.error("ig profile bar controller → manageBarCreation:",t);const e=sn.$(".profile-bar");e&&e.remove()}})()}))}(),sn.insertMultistyle`
    <style>
      .profile-bar {
        height: 48px;
        border-bottom: 1px solid #DBDBDB;
        background: #FCFCFD;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        position: relative;
      }
      .profile-bar::before,
      .profile-bar::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: -1px;
        width: calc(calc(100% - 400px) / 2);
      }
      .profile-bar::before {
        left: 0;
        background: linear-gradient(to right, white 40%, transparent);
      }
      .profile-bar::after {
        right: 0;
        background: linear-gradient(to left, white 40%, transparent);
      }

      .profile-bar__items {
        display: flex;
        flex-direction: row;
      }

      .profile-bar__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 40px;
      }
      .profile-bar__item:last-child {
        margin-right: 0;
      }

      .profile-bar__value {
        color: #262626;
        font-weight: 600;
        flex-direction: row;
        display: flex;
      }

      .profile-bar__label {
        color: #999;
        font-weight: 500;
      }

      .profile-bar__info-circle.info-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -6px;
        margin-left: 200px;
        z-index: 1;
        transition: opacity 0.2s;
      }
      .profile-bar:not(:hover) .profile-bar__info-circle {
        opacity: 0;
      }

      .profile-bar__info-tooltip {
        width: 306px;
      }

      @media (max-width: 400px) {
        .profile-bar::before,
        .profile-bar::after {
          display: none;
        }

        .profile-bar__item {
          margin-right: 24px;
        }
      }

      @media (max-width: 440px) {
        .profile-bar__info-circle {
          top: 5px;
          left: auto;
          right: 8px;
          margin-left: auto;
          margin-top: auto;
        }
      }
    </style>
  `}};let dn,pn;const un={grade:null,engagement:null,followStatus:null};function hn({empty:t=!1}={}){return t?'\n      <div class="profile-bar"></div>\n    ':`\n    <div class="profile-bar">\n      <div class="profile-bar__items">\n        <div class="profile-bar__item">\n          <div class="profile-bar__value">\n            ${un.grade?`\n              <span style="color: ${un.grade.color}">${un.grade.value}</span>,\n              ${un.grade.label}\n            `:""}\n          </div>\n          <div class="profile-bar__label">\n            Account grade\n          </div>\n        </div>\n        <div class="profile-bar__item">\n          <div class="profile-bar__value">\n            <span style="color: ${un.engagement.color}">\n              ${un.engagement.value}\n            </span>\n            ${un.engagement.label?`, ${un.engagement.label}`:""}\n          </div>\n          <div class="profile-bar__label">\n            Engagement\n          </div>\n        </div>\n        ${un.followStatus.show?`\n          <div class="profile-bar__item">\n            <div class="profile-bar__value">\n              ${un.followStatus.value?"Yes":"No"}\n            </div>\n            <div class="profile-bar__label">\n              Follows me\n            </div>\n          </div>\n        `:""}\n      </div>\n      <div class="profile-bar__info-circle info-circle">?</div>\n    </div>\n  `}const{$utils:gn}=app;var fn={init:function(){!async function(){const t=await Mt("store");if(!t)return;const e=Symbol("handled");gn.onDocMutations((()=>{const o=gn.$(".get-insights-button-row");if(!o)return;if(o[e])return;o[e]=!0;const i=t.getState(),n=i.navigation.displayedRoute.split("/")[1],r=i.users.usernameToId.get(n);if(!r)return;const a=i.users.users.get(r);if(!a)return;const s=a.businessEmail;s&&o.insertAdjacentHTML("afterbegin",`\n      <a class="profile-email-button" href="mailto:${s}">\n        Email\n      </a>\n    `)})),gn.insertMultistyle`
    <style>
      .profile-email-button {
        display: block;
        margin-right: 8px;
        margin-bottom: 12px;
        height: 30px;
        line-height: 28px;
        padding: 0 9px;
        font-weight: 600;
        color: #262626;
        background: transparent;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        box-sizing: border-box;
      }
    </style>
  `}()}};function mn(){const t=window.require("CurrentUserInitialData");return(null==t?void 0:t.APP_ID)||"1217981644879628"}const{$utils:yn}=app;var vn={init:function(){bn=Pt.controller.getConfig().igSelectors,async function(){const t=await Mt("store"),e=await Mt("http");if(!t||!e)return;const o=Symbol("handled");yn.onDocMutations((()=>{const e=yn.$(bn.general.actionDialogWithoutHeader);if(!e)return;if(e[o])return;e[o]=!0;const i=t.getState();if("postPage"!==i.navigation.pageIdentifier)return;const n=location.pathname.split("/")[2],r=i.posts.byId.toJS(),a=Object.values(r).find((t=>t.code===n));if(!a)return;if(a.owner.id!==i.users.viewerId)return;const s=yn.$(bn.general.modalWindow);if(!s)return;e.firstChild.insertAdjacentHTML("afterend",'\n      <button class="edit-post-action-button">\n        Edit Caption\n      </button>\n    ');yn.$(".edit-post-action-button").addEventListener("click",(()=>{s.classList.add("post-editor"),e.innerHTML=`\n        <form class="post-editor__form">\n          <div class="post-editor__title">\n            Edit Caption\n          </div>\n          <textarea\n            class="post-editor__textarea"\n            placeholder="Write a caption..."\n            maxlength="2200"\n            spellcheck="false"\n            required\n          >${a.caption||""}</textarea>\n          <div class="post-editor__buttons">\n            <button class="post-editor__button-save button" type="submit">\n              Save Caption\n            </button>\n            <button class="post-editor__button-cancel button button_cancel">\n              Cancel\n            </button>\n          </div>\n          <div class="post-editor__error"></div>\n        </form>\n      `;const t=yn.$(".post-editor"),o=yn.$(".post-editor__textarea"),i=yn.$(".post-editor__button-save"),n=yn.$(".post-editor__button-cancel"),r=yn.$(".post-editor__error");setTimeout((()=>{o.focus(),o.setSelectionRange(o.value.length,o.value.length)}),300),o.addEventListener("input",(()=>{t.classList.remove("post-editor_with-error")})),t.addEventListener("submit",(async e=>{var s;let l;e.preventDefault(),o.disabled=!0,i.disabled=!0,n.disabled=!0,i.innerText="Saving...";try{l=await fetch(`https://i.instagram.com/api/v1/media/${a.id}/edit_media/`,{method:"POST",credentials:"include",headers:{"content-type":"application/json","x-csrftoken":window._sharedData.config.csrf_token,"x-ig-app-id":mn()},body:JSON.stringify({caption_text:yn.$(".post-editor__textarea").value})}),l=await l.json()}catch(e){l={error:e}}var c,d,p,u,h,g,f;"ok"===(null===(s=l)||void 0===s?void 0:s.status)?location.reload():(o.disabled=!1,i.disabled=!1,n.disabled=!1,i.innerText="Save Caption",t.classList.add("post-editor_with-error"),"igtv"===a.productType?r.innerHTML="\n              Instagram refused to edit caption.\n              Please use Instagram Mobile App to edit caption of this post.\n            ":r.innerText=(null===(c=l)||void 0===c||null===(d=c.error)||void 0===d?void 0:d.message)||(null===(p=l)||void 0===p||null===(u=p.error)||void 0===u||null===(h=u.responseObject)||void 0===h?void 0:h.message)||(null===(g=l)||void 0===g||null===(f=g.error)||void 0===f?void 0:f.responseText)||"Unknown error")})),n.addEventListener("click",(()=>{const t=yn.$(bn.general.modal);if(!t)return;const e=new MouseEvent("mousedown",{bubbles:!0});t.dispatchEvent(e)}))}))})),yn.insertMultistyle`
    <style>
      .edit-post-action-button {
        height: 48px;
        padding: 4px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        background: transparent;
        border: none;
        border-top: 1px solid #dbdbdb;
        cursor: pointer;
      }
      .edit-post-action-button:active {
        background: rgba(0, 0, 0, 0.1);
      }

      .post-editor {
        width: 380px !important;
        max-width: calc(100% - 26px) !important;
      }

      .post-editor__form {
        display: flex;
        flex-direction: column;
        margin: 16px;
        height: 330px;
        max-height: calc(100vh - 26px);
      }

      .post-editor__title {
        font-weight: 500;
        margin-left: 9px;
        margin-bottom: 12px;
      }

      .post-editor__textarea {
        color: #3F3E3F;
        border: 1px solid #EFEFEF;
        background: #F7F7F9;
        border-radius: 4px;
        resize: none;
        padding: 6px 8px;
        flex-grow: 1;
      }
      .post-editor__textarea::placeholder {
        color: #3F3E3F;
        opacity: 0.5;
      }
      .post-editor__textarea:disabled {
        opacity: 0.5;
      }
      .theme-night .post-editor__textarea {
        border-color: #101010;
        background: #060606 !important;
      }

      .post-editor__buttons {
        display: flex;
        flex-direction: row;
        margin-top: 12px;
      }

      .post-editor__error {
        display: none;
        color: #E34E21;
        margin-top: 12px;
        line-height: 19px;
      }
      .post-editor_with-error .post-editor__error {
        display: block;
      }
    </style>
  `}()}};let bn;const{$utils:_n}=app;var xn={init:async function(){if(Pn=Pt.controller.getConfig().igSelectors,wn=await Mt("add-dispatch-listener"),!wn)return;(function(){const t=Symbol("handled");_n.onDocMutations((()=>{const e=_n.$(Pn.postCreation.captionContainer);e&&(e[t]||(e[t]=!0,e.insertAdjacentHTML("beforeend",'\n      <div class="post-caption-limits">\n        <svg class="post-caption-limits__icon" xmlns="http://www.w3.org/2000/svg" width="28.824" height="26.006" viewBox="0 0 28.824 26.006">\n          <path d="M10.948 1.999a4 4 0 016.926 0l10.407 18.007a4 4 0 01-3.463 6H4.006a4 4 0 01-3.463-6z" fill="currentColor"/>\n          <path class="exclamation" d="M13.622 17.079l-.748-9.537 2.972.019-.753 9.518zm-.613 1.428h2.7v2.663h-2.7z" fill="#fff"/>\n        </svg>\n        <div class="post-caption-limits__text"></div>\n      </div>\n    ')))}))})(),_n.insertMultistyle`
    <style>
      .post-caption-limits--show ${Pn.postCreation.captionContainer} {
        padding-bottom: 32px;
      }

      .post-caption-limits--show ${Pn.postCreation.submitPostButton} {
        opacity: 0.3;
        pointer-events: none;
      }

      .post-caption-limits {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 18px 8px;
        color: #E34E21;
      }
      html:not(.post-caption-limits--show) .post-caption-limits {
        display: none;
      }
      .theme-night .post-caption-limits {
        filter: url(#theme-reverse-filter);
        color: #E94351;
      }

      .post-caption-limits__icon {
        width: 14px;
        height: 14px;
        margin-right: 8px;
      }

      .post-caption-limits__text {
        font-size: 14px;
      }
    </style>
  `,wn((t=>{if("CREATION_CAPTION_CHANGED"!==t.type)return;const e=function(t){const e=2200,o=30,i=30,n=(t.match(/@[\p{L}\d_]+/gu)||[]).length,r=(t.match(/#[\p{L}\d_]+/gu)||[]).length;return t.length>e?`Caption length exceeded: ${t.length} / ${e}`:n>o?`Mention limit exceeded: ${n} / ${o}`:r>i?`Hashtag limit exceeded: ${r} / ${i}`:null}(t.caption||"");_n.docElem.classList.toggle("post-caption-limits--show",!!e);const o=_n.$(".post-caption-limits__text");o&&(o.innerText=e)}))}};let Pn,wn;const{$utils:Cn}=app;var Sn={init:async function(){if($n=Pt.controller.getConfig().igSelectors,Mn=await Mt("http"),kn=await Mt("store"),Tn=await Mt("add-dispatch-listener"),!Mn||!kn||!Tn)return;!function(){let t=0;const e=Mn.post;Mn.post=async(...n)=>{const r=n[0],a=r.includes("/create/configure")&&!r.includes("story")||r.includes("/igtv/configure_to_igtv"),s=r.includes("/media/configure_to_clips");if(!(a||s))return e.call(Mn,...n);const l=()=>{kn.dispatch({type:"UPDATE_UPLOAD_TEXT",text:"Publishing Post..."}),setTimeout((()=>o()))};let c;l();try{c=await e.call(Mn,...n)}catch(t){c={status:"fail"}}return"fail"===c.status?t<20?(t+=1,requestAnimationFrame((()=>{l()})),setTimeout((()=>{Mn.post(...n)}),5*Cn.time.SECOND),c):(t=0,requestAnimationFrame((()=>{kn.dispatch({type:"UPDATE_UPLOAD_TEXT",text:c.message?`Error: ${c.message}`:"Unknown error."}),i();const t=Cn.$($n.general.uploadPanel);if(!t)return;t.insertAdjacentHTML("beforeend",'\n        <button class="retry-upload-button clickable">\n          Retry\n        </button>\n      ');const e=Cn.$(".retry-upload-button");e.addEventListener("click",(()=>{l(),Mn.post(...n),e.remove()}))})),c):(t=0,requestAnimationFrame((()=>{kn.dispatch({type:"UPDATE_UPLOAD_TEXT",text:"Done"}),i()})),c)};const o=()=>{if(Cn.$(".PublishingDisclaimer"))return;const t=Cn.$($n.general.publishingBarText);t&&t.insertAdjacentHTML("beforeend",'\n      <div class="PublishingDisclaimer">\n        This might take a minute.\n        Please keep this tab open.\n      </div>\n    ')},i=()=>{const t=Cn.$(".PublishingDisclaimer");t&&t.remove()};Cn.insertMultistyle`
    <style>
      .PublishingDisclaimer {
        color: #A0A0A0;
        font-weight: 400;
        margin-top: 3px;
      }

      .retry-upload-button {
        font-weight: 600;
        color: #0095f6;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
      }
    </style>
  `}()}};let $n,Mn,kn,Tn;const{$utils:In,$iframeBus:An}=app,Dn={init:async function(){this.sel=Pt.controller.getConfig().igSelectors,this.store=await Mt("store"),this.store&&(An.on("ig.creation-get-caption",this.getCaption.bind(this)),An.on("ig.creation-set-caption",this.setCaption.bind(this)),this.watchCreationSession(),this.notifyVideoChange())},getCaption:function(){var t,e;return(null===(t=this.store.getState().creation)||void 0===t||null===(e=t.finalizedMedia)||void 0===e?void 0:e.caption)||""},setCaption:function(t){this.store.dispatch({type:"CREATION_CAPTION_CHANGED",caption:t});const e=In.$(this.sel.postCreation.captionTextarea);e&&(e.scrollTop=e.scrollHeight)},watchCreationSession:function(){let t=!1,e=!1,o=!1;this.store.subscribe((()=>{var i;const n=this.store.getState(),r=null===(i=n.navigation)||void 0===i?void 0:i.pageIdentifier;if(!r)return;const a=r.startsWith("Creation"),s=r.startsWith("StoryCreation"),l=a||s;if(l!==o)if(o=l,l){var c,d;const o=null===(c=n.creation.sourceVideo)||void 0===c?void 0:c.file,i=null===(d=n.storyCreation.sourceVideo)||void 0===d?void 0:d.file;t=s,e=!(!o&&!i),An.send("ig.creation-session-start",{isStory:t,isVideo:e})}else An.send("ig.creation-session-end",{isStory:t,isVideo:e})}))},notifyVideoChange:async function(){let t=null;this.store.subscribe((()=>{var e,o;const i=this.store.getState(),n=null===(e=i.creation)||void 0===e?void 0:e.sourceVideo,r=null===(o=i.storyCreation)||void 0===o?void 0:o.sourceVideo,a=null==n?void 0:n.dataURL,s=null==r?void 0:r.dataURL,l=a||s||null;l!==t&&(t=l,An.send("ig.creation-video-change",{url:l}))}))}},{$utils:Rn,$iframeBus:En}=app,Bn={init:function(){this._supportExtensionLinks()},_supportExtensionLinks:function(){Rn.onDocClick((t=>{const e=t.target.closest('[href^="chrome-extension://"]');e&&(t.preventDefault(),t.stopPropagation(),En.send("ig.open-link",e.getAttribute("href")))}))}};var Ln={init:function(){this._injectVideoSupportCode()},_injectVideoSupportCode:async function(){window.inssist.creationSelectVideo=t=>async e=>{try{const o=window.require,i=await Mt("nav");let n,r;{let t;try{t=o("polarisReadVideoFile")}catch{t=o("PolarisreadVideoFile")}n=t.readVideoFile}{let t;try{t=o("polarisGetVideoCoverPhoto")}catch{t=o("PolarisgetVideoCoverPhoto")}r=t.getVideoCoverPhoto}const a=String(Date.now()),s=`feed_${a}`,l=await n(t),c=await r(l,!0);e({type:"CREATION_VIDEO_PROCESSED",dataURL:l.src,entityName:s,file:t,uploadId:a,uploadMediaHeight:l.videoHeight,uploadMediaWidth:l.videoWidth,uploadMediaDurationMs:Math.floor(1e3*l.duration),videoTransform:c.videoTransform,mediaPublishMode:"default"}),e({type:"CREATION_VIDEO_COVER_PHOTO_UPDATED",dataURL:c.dataURL,entityName:s,file:c.file,uploadId:a,uploadMediaHeight:c.uploadMediaHeight,uploadMediaWidth:c.uploadMediaWidth}),i.push("/create/style/")}catch(t){console.error("failed to select video",t)}}}};const{$later:Fn,$coverAssist:On,$reels:Hn,$utils:Vn,$musicAssist:Nn,$iframeBus:zn,$newPostExtra:jn,$featureEncourage:Un}=app;function Gn(){const t=Pt.controller.getConfig().igSelectors,e=Symbol("handled");Vn.onDocMutations((()=>{const o=Vn.$(t.general.splashScreen);o&&(o[e]||(o[e]=!0,o.insertAdjacentHTML("afterbegin",`\n      <div class="navigation-spinner">\n        ${zo()}\n      </div>\n    `)))})),Vn.insertMultistyle`
    <style>
      ${t.general.splashScreen} > *:not(.navigation-spinner) {
        display: none;
      }

      .navigation-spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 32px;
        height: 32px;
        margin-left: -16px;
        margin-top: -16px;
        pointer-events: none;
        z-index: 0;
      }
    </style>
  `}var Wn={controller:{init:async function(){window.ig=Ho,Oo.controller.init(),Vn.iframe.isIframe()&&async function(){if(!Vn.ls.get("inssist.isDevelopment"))return;window.$=Vn.$,window.$$=Vn.$$,window.sel=Pt.controller.getConfig().igSelectors,window.store=await Ho.require("store"),Object.defineProperty(window,"state",{get:function(){const t=window.store.getState();return JSON.parse(JSON.stringify(t))}});const t=await Ho.require("add-dispatch-listener");let e=!1;window.showActions=()=>{e=!0},window.hideActions=()=>{e=!1},t((t=>{e&&console.warn(t)}))}();if(!Vn.iframe.isIframe())return He.controller.init(),yo.controller.init(),mo.controller.init(),void vt.controller.init();const t=Vn.iframe.isIframe("inssist-ig"),e=Vn.iframe.isIframe("inssist-dm");if(t)return Ce.controller.init(),ie.controller.init(),Bn.init(),Gn(),Mt.lock("http"),Mt.lock("http:story-assist"),Ut.controller.init(),Io.controller.init(),Un.controller.init(),Ct.controller.init(),Nt.controller.init(),Fn.controller.init(),ui.init(),Ln.init(),vi.init(),Pi.init(),$i.init(),Ii.init(),Gi.init(),Xi.init(),Ji.init(),nn.init(),cn.init(),si.init(),jn.controller.init(),On.controller.init(),wt.controller.init(),Nn.controller.init(),fn.init(),vn.init(),xn.init(),Sn.init(),Hn.controller.init(),Fe.controller.init(),Dn.init(),Do.uploadBarController.init(),mi.init(),await Vn.waitForDocumentReady(),void zn.send("ig.ready");e&&(Ce.controller.init(),Bn.init(),Gn(),await Vn.waitForDocumentReady(),he.controller.init(),ke.controller.init())}}};const{$startup:qn}=app;qn.controller={init:function(){Wn.controller.init()}},qn.controller.init()}();