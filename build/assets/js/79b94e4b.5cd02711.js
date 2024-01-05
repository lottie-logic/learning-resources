"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6949],{4266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var r=n(5893),s=n(1151),a=n(8955);function o(e){return(0,r.jsx)(r.Fragment,{})}function i(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o()}function l(e){const t={a:"a",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://qwik.builder.io/docs/",children:"Qwik Documentation"})}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}const c={},d="Qwik \u26a1\ufe0f\u26a1\ufe0f\u26a1\ufe0f",h={id:"Topics/Qwik/Qwik",title:"Qwik \u26a1\ufe0f\u26a1\ufe0f\u26a1\ufe0f",description:"honestly think this is the next React as it is astronomically faster and loading speed = money online.",source:"@site/docs/Topics/Qwik/Qwik.mdx",sourceDirName:"Topics/Qwik",slug:"/Topics/Qwik/",permalink:"/docs/Topics/Qwik/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"NextJS",permalink:"/docs/Topics/NextJS/"},next:{title:"Animations",permalink:"/docs/Topics/HTML-CSS/CSS/Animations/"}},p={},f=[];function m(e){const t={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"qwik-\ufe0f\ufe0f\ufe0f",children:"Qwik \u26a1\ufe0f\u26a1\ufe0f\u26a1\ufe0f"}),"\n",(0,r.jsxs)(t.p,{children:["honestly think this is the next React as it is astronomically faster and ",(0,r.jsx)(t.code,{children:"loading speed = money"})," online.\nQwik absolishes hydration, creates instantly loading and most importantly instantly interactive and clickable sites."]}),"\n",(0,r.jsx)("div",{class:"beginner",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://frontendmasters.com/courses/qwik/",children:"Qwik for Instant-Loading Websites & Apps"})}),"\n"]})}),"\n",(0,r.jsx)("div",{class:"intermediate"}),"\n",(0,r.jsx)("div",{class:"expert"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(a.f,{Questions:(0,r.jsx)(i,{}),Resources:(0,r.jsx)(u,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8955:(e,t,n)=>{n.d(t,{f:()=>V});var r=n(7294),s=n(6010),a=n(2466),o=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(w,{...e,...t}),(0,x.jsx)(k,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(t))}const y="tabItem_Ymn6";function T(e){let{children:t,hidden:n,className:r}=e;return(0,x.jsx)("div",{role:"tabpanel",className:(0,s.Z)(y,r),hidden:n,children:t})}const V=e=>{let{Resources:t,Questions:n,Books:r}=e;return(0,x.jsxs)(j,{defaultValue:"questions",values:[{label:"Questions",value:"questions"},{label:"Resources",value:"resources"}],children:[(0,x.jsxs)(T,{value:"questions",children:[" ",n]}),(0,x.jsxs)(T,{value:"resources",children:[" ",t]})]})}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);