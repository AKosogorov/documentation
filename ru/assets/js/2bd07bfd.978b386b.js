"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5532],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||c;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2253:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(6600),a=(n(9496),n(9613)),c=n(1480);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,(0,r.Z)({},n,{mdxType:"NavCard"})))}i.isMDXComponent=!0},7861:(e,t,n)=>{n.d(t,{ga:()=>r});var r={};n.r(r),n.d(r,{CATEGORIES:()=>c,sendEvent:()=>a});const a=e=>{let{category:t,action:n,label:r,value:a}=e;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:r,eventValue:a})},c={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},1480:(e,t,n)=>{n.d(t,{J:()=>s,Z:()=>d});var r=n(9496),a=n(1626),c=n(2484),o=n(7861);const i={root:"root_GfON",rootDisabled:"rootDisabled_SFUB",details:"details_xxkR",detailsTags:"detailsTags_uTQx",icon:"icon_ciqP",title:"title_pSH5",description:"description__Fep",miniTheme:"miniTheme_ePfp",primaryTheme:"primaryTheme_CilO",defaultTheme:"defaultTheme_j3I8"},s=e=>{const{title:t,description:n,to:s,Icon:d,tags:u,className:m,disabled:p,theme:f="default"}=e,v=(0,r.useCallback)((()=>{o.ga.sendEvent({category:o.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return r.createElement(c.Z,{className:(0,a.Z)(i.root,m,p&&i.rootDisabled,i[`${f}Theme`]),to:s,onClick:v},r.createElement(l,{Icon:d}),r.createElement("div",{className:i.details},r.createElement("div",{className:i.detailsMain},r.createElement("span",{className:i.title},t),r.createElement("p",{className:i.description},n)),u&&r.createElement("div",{className:i.detailsTags},u.join(" \u2022 "))))},l=e=>{let{Icon:t}=e;return t?"string"==typeof t?r.createElement("span",{className:i.icon},t):r.createElement(t,{className:i.icon}):null},d=s},8594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>T,frontMatter:()=>g,metadata:()=>b,toc:()=>O});var r=n(6600),a=n(9496),c=n(9613),o=n(2253);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2-.4.2-.7.3-.9.4-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00136 874.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248zM511 507c-95 0-172-77-172-172s77-172 172-172 172 77 172 172-77 172-172 172zm105 221h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1a8.1 8.1 0 001.7-4.9c0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8.1 17.7 14.4 32 32.1 32zm240 64H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1a8.1 8.1 0 00-1.7 4.9c0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8-.1-17.7-14.4-32-32.1-32z"}}]},name:"user-switch",theme:"outlined"};var s=n(750),l=function(e,t){return a.createElement(s.Z,Object.assign({},e,{ref:t,icon:i}))};l.displayName="UserSwitchOutlined";const d=a.forwardRef(l);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"}}]},name:"layout",theme:"outlined"};var m=function(e,t){return a.createElement(s.Z,Object.assign({},e,{ref:t,icon:u}))};m.displayName="LayoutOutlined";const p=a.forwardRef(m);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"}}]},name:"font-size",theme:"outlined"};var v=function(e,t){return a.createElement(s.Z,Object.assign({},e,{ref:t,icon:f}))};v.displayName="FontSizeOutlined";const h=a.forwardRef(v),g={hide_table_of_contents:!0},y="\u041f\u0440\u0438\u043c\u0435\u0440\u044b",b={unversionedId:"guides/examples/index",id:"guides/examples/index",title:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",description:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/examples/index.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/",permalink:"/ru/docs/guides/examples/",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/guides/examples/index.mdx",tags:[],version:"current",lastUpdatedAt:1689753204,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{hide_table_of_contents:!0},sidebar:"guidesSidebar",previous:{title:"\ud83c\udfaf \u0413\u0430\u0439\u0434\u044b",permalink:"/ru/docs/guides/"},next:{title:"Auth",permalink:"/ru/docs/guides/examples/auth"}},x={},O=[{value:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435",id:"main",level:2}],w={toc:O};function T(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,c.kt)("p",{class:"summary"},"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"),(0,c.kt)("h2",{id:"main"},"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"),(0,c.kt)(o.ZP,{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",description:"\u0414\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043b\u043e\u0433\u0438\u043a\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",to:"/docs/guides/examples/auth",Icon:d,tags:["Viewer","AuthForm","ProfilePage","AuthProvider","AuthToken"],mdxType:"NavCard"}),(0,c.kt)(o.ZP,{title:"PageLayout",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0435\u0439\u0441\u044b \u0441 \u043b\u0435\u0439\u0430\u0443\u0442\u043d\u044b\u043c\u0438 \u0432\u0438\u0434\u0436\u0435\u0442\u0430\u043c\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",to:"/docs/guides/examples/page-layout",Icon:p,tags:["Header","Sidebar"],mdxType:"NavCard"}),(0,c.kt)(o.ZP,{title:"\u0422\u0438\u043f\u044b",description:"\u0413\u0434\u0435 \u0441\u0442\u043e\u0438\u0442 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c \u0442\u0438\u043f\u044b? \u041a\u0430\u043a\u0438\u0445 \u0432\u0438\u0434\u043e\u0432 \u043e\u043d\u0438 \u0431\u044b\u0432\u0430\u044e\u0442 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 FSD?",to:"/docs/guides/examples/types",Icon:h,mdxType:"NavCard"}))}T.isMDXComponent=!0}}]);