"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8855],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7658:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(6600),i=r(9496),a=r(9613),o=r(2484),l=r(4643);const c=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return i.createElement("div",null,i.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),i.createElement(o.Z,{to:r},(0,l.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),i.createElement(o.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),i.createElement(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s={toc:[]};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"WIP",type:"caution"},(0,a.kt)(c,{ticket:r.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},7579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(6600),i=(r(9496),r(9613)),a=r(7658);const o={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},l="Decouple entities",c={unversionedId:"reference/isolation/decouple-entities",id:"reference/isolation/decouple-entities",title:"Decouple entities",description:"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u044b \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/decouple-entities.mdx",sourceDirName:"reference/isolation",slug:"/reference/isolation/decouple-entities",permalink:"/ru/docs/reference/isolation/decouple-entities",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/decouple-entities.mdx",tags:[],version:"current",lastUpdatedAt:1689322263,formattedLastUpdatedAt:"14 \u0438\u044e\u043b. 2023 \u0433.",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"referenceSidebar",previous:{title:"Low Coupling & High Cohesion",permalink:"/ru/docs/reference/isolation/coupling-cohesion"}},s={},u=[{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decouple-entities"},"Decouple entities"),(0,i.kt)(a.ZP,{ticket:"202",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u044b \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u043e \u043c\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 absolutely-decoupled entities")),(0,i.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3633"},"(\u0422\u0440\u0435\u0434) \u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u0440\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043f\u043e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u0438 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u044f\u0432\u043d\u044b\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3316"},'(\u0422\u0440\u0435\u0434) \u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0434\u043b\u044f "\u0441\u0432\u044f\u0437\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439" (users/pets/friends)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4276"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432/\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432 \u0432 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u0445")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4521"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0444\u0438\u0447"))))}d.isMDXComponent=!0}}]);