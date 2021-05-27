(this["webpackJsonppalette-contrast-checker"]=this["webpackJsonppalette-contrast-checker"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(9),s=a.n(c),o=(a(15),a(16),a(3)),i=a(4),l=(a(17),a(1));var u=function(e){var t=e.heading,a=e.name,n=e.options,r=e.disabled,c=e.selected,s=e.setState,o=function(e){s(e.target.value)},i=r?"disabled":"clickable";return Object(l.jsx)("form",{className:"radio-button-group radio-button-group--".concat(i),children:Object(l.jsxs)("section",{className:"radio-button-group__container",role:"radiogroup","aria-labelledby":a,children:[Object(l.jsx)("h1",{className:"radio-button-group__heading",id:a,children:t}),n.map((function(e){var t=e===c?" radio-button-group__label--selected":"";return Object(l.jsxs)("label",{htmlFor:e,className:"radio-button-group__label".concat(t),children:[Object(l.jsx)("input",{className:"radio-button-group__input",type:"radio",name:a,id:e,value:e,onChange:o,checked:e===c,disabled:r}),Object(l.jsx)("span",{className:"radio-button-group__label-text",children:e})]},e)}))]})})};a(19);var h=function(e){var t=e.heading,a=e.name,n=e.optionLabels,r=e.showLabels,c=e.disabled,s=e.state,o=e.setState,i=c?"disabled":"clickable";return Object(l.jsx)("form",{className:"toggle-switch toggle-switch--".concat(s," toggle-switch--").concat(i),children:Object(l.jsxs)("label",{htmlFor:a,className:"toggle-switch__label",children:[Object(l.jsx)("h1",{className:"toggle-switch__heading",children:t}),Object(l.jsx)("input",{className:"toggle-switch__input",type:"checkbox",name:a,id:a,value:s?n.false:n.true,onChange:function(e){o(e.target.value===n.true)},checked:s,disabled:c}),Object(l.jsx)("div",{className:"toggle-switch__container",children:Object(l.jsxs)("div",{className:"toggle-switch__sliding-container",children:[Object(l.jsx)("div",{className:"toggle-switch__text-container",children:Object(l.jsx)("span",{className:"toggle-switch__text-true",children:r&&n.true})}),Object(l.jsx)("div",{className:"toggle-switch__circle"}),Object(l.jsx)("div",{className:"toggle-switch__text-container",children:Object(l.jsx)("span",{className:"toggle-switch__text-false",children:r&&n.false})})]})})]})})},d=a(0);a(20);var b=function(e){var t=e.heading,a=e.name,n=e.icon,r=e.disableOnClick,c=e.state,s=e.setState,o=r&&c?"disabled":"clickable";return Object(l.jsxs)("button",{className:"icon-button icon-button--".concat(o),type:"button",name:a,onClick:function(){s()},onMouseDown:function(e){e.preventDefault()},disabled:r&&c,children:[Object(l.jsx)(d.b.Provider,{value:{className:"icon-button__icon"},children:n}),Object(l.jsx)("h1",{className:"icon-button__heading",children:t})]})},j=a(5);var p=function(e){var t=e.contrastStandard,a=e.setContrastStandard,n=e.grayscale,r=e.setGrayscale,c=e.setPreviousGrayscale,s=e.theme,o=e.setTheme,d=e.setPreviousTheme,p=e.noDarkColors,g=e.noLightColors,f=e.showPaletteInput,m=e.setShowPaletteInput,O={heading:"WCAG \n standard",name:"contrast-standard",options:["aa","aaa"],disabled:f,selected:t,setState:a},v={heading:"Theme",name:"theme",options:["dark","both","light"],disabled:f||p||g,selected:s,setState:o},x={heading:"Grayscale \n mode",name:"grayscale-mode",optionLabels:{true:"on",false:"off"},showLabels:!0,disabled:f,state:n,setState:r},_={heading:"Edit \n palette",name:"edit-palette",icon:Object(l.jsx)(j.a,{}),disableOnClick:!0,state:f,setState:function(){c(n),d(s),m(!0)}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,Object(i.a)({},O)),Object(l.jsx)(u,Object(i.a)({},v)),Object(l.jsx)(h,Object(i.a)({},x)),Object(l.jsx)(b,Object(i.a)({},_))]})};a(21);var g=function(e){var t=e.rawPalette,a=e.handleInputChange,n=e.handleInputSubmit,r=e.disableSubmit,c=e.clearInputProps,s=e.pastePaletteProps,o=r?"disabled":"clickable";return Object(l.jsx)("section",{className:"palette-input",children:Object(l.jsxs)("form",{"aria-label":"form",onSubmit:n,children:[Object(l.jsxs)("section",{className:"palette-input__top-controls",children:[Object(l.jsx)("label",{className:"palette-input__heading",htmlFor:"palette-input",children:"Add palette"}),Object(l.jsx)("input",{className:"palette-input__submit-button palette-input__submit-button--".concat(o),type:"submit",value:"+",disabled:r})]}),Object(l.jsx)("textarea",{className:"palette-input__text-area",type:"textarea",name:"palette-input",id:"palette-input","aria-multiline":"true",placeholder:"Enter a color palette",rows:12,cols:36,value:t,onChange:a,spellCheck:"false"}),Object(l.jsxs)("section",{className:"palette-input__bottom-controls",children:[Object(l.jsx)(b,Object(i.a)({},c)),Object(l.jsx)(b,Object(i.a)({},s))]})]})})};function f(e,t){if(e===t)return!1;if(e.length!==t.length)return!0;for(var a=e.length-1;a>=0;a--)if(e[a].hex!==t[a].hex)return!0;return!1}function m(e){for(var t=function(e){var t={};e.forEach((function(a){t[a.hex]={},e.forEach((function(e){e.hex!==a.hex&&(t[a.hex][e.hex]={})}))}));for(var a=e.length-1,n=e.length,r=0;r<a;r++)for(var c=r+1;c<n;c++){var s=e[r],o=e[c],i=s.hex,l=o.hex;v(t,i,l,"grayscaleEquivalent",o.grayscaleEquivalent,s.grayscaleEquivalent);var u=O(s.luminance,o.luminance);u=Math.round(10*(u+Number.EPSILON))/10,v(t,i,l,"contrast",u),u>=7?(v(t,i,l,"aa","Any"),v(t,i,l,"aaa","Any")):u>=4.5?(v(t,i,l,"aa","Any"),v(t,i,l,"aaa","Large")):u>=3&&v(t,i,l,"aa","Large")}return t}(e),a={},n=0,r=0,c=Object.entries(t);r<c.length;r++){var s=Object(o.a)(c[r],2),i=s[0],l=x(s[1]),u=Object(o.a)(l,2),h=u[0],d=u[1];a[i]={},a[i].aa=h,a[i].aaa=d;var b=h.length;a[i].aaPairsCount=b,a[i].aaaPairsCount=d.length,b>n&&(n=b)}return[a,n]}function O(e,t){return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)}function v(e,t,a,n,r,c){e[t][a][n]=r,e[a][t][n]=c||r}function x(e){var t=function(e){var t=[];return Object.entries(e).forEach((function(e){t.push(Object.assign({},{hex:e[0]},e[1]))})),t.sort((function(e,t){return t.contrast-e.contrast})),t}(e).filter((function(e){return"aa"in e})),a=t.filter((function(e){return"aaa"in e}));return[t,a]}function _(e,t){return!e.some((function(e){return Object.values(e).includes(t)}))}var P=a(7);function S(e){var t=e.match(/(\d{1,3})/gi);if(t)return[t[0],t[1],t[2]]}function y(e){return e.some((function(e){return e>255}))?e.map((function(e){return e>255?255:e})):e}function C(e){return e[0]>360||e[1]>100||e[2]>100?e.map((function(e,t){var a=0===t?360:100;return e>a?a:e})):e}function N(e){var t=/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e);if(t)return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}function w(e){var t="";return e.forEach((function(e){var a=Number(e).toString(16);1===a.length&&(a="0"+a),t+=a})),t}function k(e){var t=e[0],a=e[1]/100,n=e[2]/100,r=a*Math.min(n,1-n),c=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+t/30)%12;return Math.round(255*(n-r*Math.max(-1,Math.min(a-3,9-a,1))))};return[c(0),c(8),c(4)]}function I(e,t,a){var n={hex:e,rgb:t};a.some((function(e){return e.hex===n.hex}))||a.push(n)}var E=(-.1+Math.sqrt(.21))/2;function L(e){var t=[];return e.forEach((function(e){var a=function(e){var t=[];return e.forEach((function(e,a){var n=e/255;t[a]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)})),.2126*t[0]+.7152*t[1]+.0722*t[2]}(e.rgb),n=function(e){var t=.2126*e[0]+.7152*e[1]+.0722*e[2],a=Math.round(t).toString(16);1===a.length&&(a="0"+a);return a.repeat(3)}(e.rgb),r=a>=E?"light":"dark",c={hex:e.hex,grayscaleEquivalent:n,luminance:a,theme:r};t.push(c)})),t}function q(e){var t=document.getElementById("palette-input");Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set.call(t,e),t.dispatchEvent(new Event("change",{bubbles:!0}))}var D=function(e){var t=e.showPaletteInput,a=e.setPaletteData,r=e.handleInputSubmit,c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],h=Object(n.useState)(!1),d=Object(o.a)(h,2),b=d[0],p=d[1],m=Object(n.useState)(b),O=Object(o.a)(m,2),v=O[0],x=O[1],_=Object(n.useState)(0),E=Object(o.a)(_,2),D=E[0],G=E[1];Object(n.useEffect)((function(){b&&f(b,v)&&(x(b),a(L(b)),G(b.length))}),[b,v,a]);var M={heading:"Clear palette",name:"clear-palette",icon:Object(l.jsx)(j.c,{}),disableOnClick:!0,state:""===i,setState:function(){q("")}},T={heading:"Paste clipboard",name:"paste-palette",icon:Object(l.jsx)(j.b,{}),disableOnClick:!1,state:!1,setState:function(){navigator.clipboard.readText().then((function(e){q(e)}))}};return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsx)(g,{rawPalette:i,handleInputChange:function(e){var t=e.target.value;p(function(e){var t=[];if(!e)return t;var a=e.match(/([a-f\d]{6})/gi);if(a){var n,r=Object(P.a)(a);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(t.length>=20)break;var s=N(c);I(c.toLowerCase(),s,t)}}catch(f){r.e(f)}finally{r.f()}}var o=e.match(/(rgba?\(\d{1,3},?\s*\d{1,3},?\s*\d{1,3}(,?\s*\d?\.?\d*)?\))/gi);if(o){var i,l=Object(P.a)(o);try{for(l.s();!(i=l.n()).done;){var u=i.value;if(t.length>=20)break;var h=y(S(u));I(w(h),h,t)}}catch(f){l.e(f)}finally{l.f()}}var d=e.match(/(hsla?\(\d{1,3}(deg)?,?\s*\d{1,3}%,?\s*\d{1,3}%,?\s*(,?\s*\d?\.?\d*)?\))/gi);if(d){var b,j=Object(P.a)(d);try{for(j.s();!(b=j.n()).done;){var p=b.value;if(t.length>=20)break;var g=k(C(S(p)));I(w(g),g,t)}}catch(f){j.e(f)}finally{j.f()}}return t}(e.target.value)),u(t)},handleInputSubmit:r,disableSubmit:D<2,clearInputProps:M,pastePaletteProps:T})})},G=a(10);a(22);var M=function(e){var t=e.pairColor,a=e.pairGrayscaleEquivalent,n=e.contrast,r=e.hoverGrowClass,c=e.textSize,s=e.hidePairs,o=e.grayscale;return Object(l.jsxs)("article",{className:"color-pair".concat(s).concat(r),style:{color:"#".concat(o?a:t)},"data-testid":"color-pair",children:[Object(l.jsxs)("p",{className:"color-pair__contrast",children:[Math.round(10*(n+Number.EPSILON))/10," : 1"]}),Object(l.jsx)("h1",{className:"color-pair__heading",children:t}),Object(l.jsx)(d.b.Provider,{value:{className:"color-pair__heart"},children:Object(l.jsx)(G.a,{})}),Object(l.jsxs)("p",{className:"color-pair__text-size color-pair__text-size--".concat(c),children:[c," font"]})]})};a(23);var T=function(e){var t=e.stripeColor,a=e.grayscaleEquivalent,n=e.filteredColorPairs,r=e.maxPairsCount,c=e.placeholdersRequired,s=e.hoverGrowClass,o=e.hidePairs,i=e.contrastStandard,u=e.grayscale,h=e.stripeTheme;return Object(l.jsxs)("section",{className:"color-stripe",style:{backgroundColor:"#".concat(u?a:t)},"data-testid":"color-stripe",children:[Object(l.jsxs)("section",{className:"color-stripe__pairs-container",style:{minHeight:"".concat(4*r+12,"em")},children:[n&&n.map((function(e){return Object(l.jsx)(M,{pairColor:e.hex,pairGrayscaleEquivalent:e.grayscaleEquivalent,contrast:e.contrast,hoverGrowClass:s,textSize:e[i],hidePairs:o,grayscale:u},e.hex)})),c>0&&Object(l.jsx)("div",{className:"color-stripe__placeholder",style:{flex:"".concat(c," ").concat(c," ").concat(c,"em")}})]}),Object(l.jsxs)("h1",{className:"color-stripe__heading color-stripe__heading--theme-".concat(h," color-stripe__heading--").concat(t),children:[t,Object(l.jsx)("style",{children:".color-stripe__heading--".concat(t," {\n            background: linear-gradient(to top, #").concat(t,", 60%, transparent 105%);\n          }")})]})]})};var F=function(e){var t,a=e.color,n=e.colorPairs,r=e.maxPairsCount,c=e.showPaletteInput,s=e.contrastStandard,o=e.grayscale,i=e.theme;t="both"===i||i===a.theme;var u=c?" color-pair--hide":"",h={};n&&(h.aa=r-n.aaPairsCount,h.aaa=r-n.aaaPairsCount);var d=r>5?" color-pair--enable-hover-grow":"";return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsx)(T,{stripeColor:a.hex,grayscaleEquivalent:a.grayscaleEquivalent,filteredColorPairs:n&&n[s],maxPairsCount:r,placeholdersRequired:n&&h[s],hoverGrowClass:d,hidePairs:u,contrastStandard:s,grayscale:o,stripeTheme:a.theme})})};a(24);var A=function(e){var t=e.paletteData,a=e.allColorPairs,n=e.maxPairsCount,r=e.showPaletteInput,c=e.contrastStandard,s=e.grayscale,o=e.theme;return Object(l.jsx)("section",{className:"palette-display",children:t.map((function(e){return Object(l.jsx)(F,{color:e,colorPairs:a[e.hex],maxPairsCount:n,showPaletteInput:r,contrastStandard:c,grayscale:s,theme:o},e.hex)}))})};var z=function(e){var t=e.contrastStandard,a=e.grayscale,r=e.theme,c=e.setNoDarkColors,s=e.setNoLightColors,i=e.showPaletteInput,u=e.setShowPaletteInput,h=Object(n.useState)([]),d=Object(o.a)(h,2),b=d[0],j=d[1],p=Object(n.useState)(b),g=Object(o.a)(p,2),O=g[0],v=g[1],x=Object(n.useState)({}),P=Object(o.a)(x,2),S=P[0],y=P[1],C=Object(n.useState)(0),N=Object(o.a)(C,2),w=N[0],k=N[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(D,{showPaletteInput:i,setPaletteData:j,handleInputSubmit:function(e){if(e.preventDefault(),f(b,O)){v(b);var t=m(b),a=Object(o.a)(t,2),n=a[0],r=a[1];y(n),k(r),c(_(b,"dark")),s(_(b,"light"))}u(!1)}}),Object(l.jsx)(A,{paletteData:b,allColorPairs:S,maxPairsCount:w,showPaletteInput:i,contrastStandard:t,grayscale:a,theme:r})]})};a(25);var B=function(){var e=Object(n.useState)("aa"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],h=Object(n.useState)(i),d=Object(o.a)(h,2),b=d[0],j=d[1],g=Object(n.useState)("both"),f=Object(o.a)(g,2),m=f[0],O=f[1],v=Object(n.useState)(m),x=Object(o.a)(v,2),_=x[0],P=x[1],S=Object(n.useState)(!1),y=Object(o.a)(S,2),C=y[0],N=y[1],w=Object(n.useState)(!1),k=Object(o.a)(w,2),I=k[0],E=k[1],L=Object(n.useState)(!0),q=Object(o.a)(L,2),D=q[0],G=q[1];return Object(n.useEffect)((function(){D?(u(!1),O("both"),(C||I)&&P("both")):(u(b),O(C||I?C?"light":"dark":_))}),[D,C,I,b,_]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("nav",{className:"app__settings-bar",children:Object(l.jsx)(p,{contrastStandard:a,setContrastStandard:r,grayscale:i,setGrayscale:u,setPreviousGrayscale:j,theme:m,setTheme:O,setPreviousTheme:P,noDarkColors:C,noLightColors:I,showPaletteInput:D,setShowPaletteInput:G})}),Object(l.jsx)("main",{className:"app__main",children:Object(l.jsx)(z,{contrastStandard:a,grayscale:i,theme:m,setNoDarkColors:N,setNoLightColors:E,showPaletteInput:D,setShowPaletteInput:G})})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),H()}],[[26,1,2]]]);
//# sourceMappingURL=main.21f76cf8.chunk.js.map