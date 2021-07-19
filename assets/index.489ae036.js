var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&r(e,a,t[a]);return e};import{H as i,d as c,p as u,a as d,o as p,c as m,w as h,b as v,e as f,u as g,r as y,f as b,t as _,g as x,h as k,i as w,j as A,k as C,_ as P,l as N,m as O,n as E,q as L,s as j,F as T,v as V,x as I,y as S}from"./vendor.083311e5.js";let D;const M={};var $=c({name:"Home"});const q=h("data-v-ef532574");u("data-v-ef532574");const R={class:"home-container page-container"},H=v("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:"./assets/logo.5041849f.png"},null,-1),F=v("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1);d();const U=q(((e,t,a,n,o,s)=>(p(),m("div",R,[H,F]))));$.render=U,$.__scopeId="data-v-ef532574";const B=f({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),z=Symbol("vue-store");var W=c({name:"Vuex",setup(){const e=g(z),n=y({text:b((()=>e.state.text)),count:b((()=>e.state.numFactoryModule.count))});return o=l({},_(n)),t(o,a({double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}}));var o}});const G={class:"vuex-container page-container"},J=v("div",{class:"page-title"},"Vuex Test Page",-1),K=A("double");W.render=function(e,t,a,n,o,s){const r=x("el-button");return p(),m("div",G,[J,v("p",null,"store Root is: "+k(e.text),1),v("p",null,"store doubleCount is: "+k(e.count),1),v(r,{type:"primary",onClick:e.double},{default:w((()=>[K])),_:1},8,["onClick"])])};var Q=c({name:"About"});const X=h("data-v-553781ac");u("data-v-553781ac");const Y={class:"test-container page-container"},Z=v("div",{class:"page-title"},"This is an about page",-1);d();const ee=X(((e,t,a,n,o,s)=>(p(),m("div",Y,[Z]))));Q.render=ee,Q.__scopeId="data-v-553781ac";const te=C.create({baseURL:"https://api-yuque.dreamer2q.wang/api/v2",timeout:2e4});function ae(e){function t(a){const n={label:a.title,data:a,children:[]};return e.filter((e=>e.parent_uuid===a.uuid)).forEach((e=>{var a;null==(a=n.children)||a.push(t(e))})),n}const a=[];return e.filter((e=>""===e.parent_uuid)).forEach((e=>{var n;null==(n=a)||n.push(t(e))})),a}console.log("https://api-yuque.dreamer2q.wang/api/v2"),te.interceptors.request.use((e=>e),(e=>Promise.reject(e))),te.interceptors.response.use((e=>e),(e=>{if(e.response&&e.response.data){const t=e.response.status,a=e.response.data.message;P.error(`Code: ${t}, Message: ${a}`),console.error("[Axios Error]",e.response)}else P.error(`${e}`);return Promise.reject(e)}));const ne={name:"DocTree",emits:["nodeClick"],data:()=>({tree:[],defaultProps:{children:"children",label:"label"}}),async mounted(){const{data:e}=await te.get("/repos/hduer/guide/toc"),t=ae(e.data);this.$data.tree=t},methods:{handleNodeClick(e){this.$emit("nodeClick",e.data)}}},oe={class:"catalog"};ne.render=function(e,t,a,n,o,s){const r=x("el-tree");return p(),m("div",oe,[v(r,{data:o.tree,props:o.defaultProps,onNodeClick:s.handleNodeClick,span:5},null,8,["data","props","onNodeClick"])])};const se={name:"DocView",props:["slug"],data:()=>({title:"",body_html:"<h1>loading...</h1>"}),async mounted(){const{data:e}=await te.get(`/repos/hduer/guide/docs/${this.slug}`);this.title=e.data.title,this.body_html=e.data.body_html},watch:{async slug(e){const{data:t}=await te.get(`/repos/hduer/guide/docs/${e}`);this.title=t.data.title,this.body_html=t.data.body_html}}},re={class:"articles_title"};se.render=function(e,t,a,n,o,s){const r=x("el-container");return p(),m(r,{class:"articles"},{default:w((()=>[v("h1",re,k(o.title),1),v("div",{innerHTML:o.body_html},null,8,["innerHTML"])])),_:1})};const le={components:{DocTree:ne,DocView:se},name:"Articles",setup(){},methods:{onNodeClick(e){this.currSlug=e.slug}},data:()=>({currSlug:"readme"})};le.render=function(e,t,a,n,o,s){const r=x("DocTree"),l=x("el-col"),i=x("DocView"),c=x("el-row");return p(),m(c,{justify:"start"},{default:w((()=>[v(l,{span:5},{default:w((()=>[v(r,{onNodeClick:s.onNodeClick},null,8,["onNodeClick"])])),_:1}),v(l,{span:19},{default:w((()=>[v(i,{slug:o.currSlug},null,8,["slug"])])),_:1})])),_:1})};const ie=[{path:"/",name:"Home",component:$},{path:"/articles",name:"Articles",component:le,meta:{referrer:"no-referrer"}},{path:"/vuex",name:"Vuex",component:W},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t||0===t.length)return e();if(void 0===D){const e=document.createElement("link").relList;D=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in M)return;M[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":D,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Axios.a5162f8d.js")),["./assets/Axios.a5162f8d.js","./assets/Axios.5549fe29.css","./assets/vendor.083311e5.js"])},{path:"/about",name:"About",component:Q}],ce=N({history:O(),routes:ie});var ue={name:"Nav",setup(){const e=E(),t=y({navList:[{name:"Home",isActive:!0,path:"/"},{name:"Articles",isActive:!1,path:"/articles"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"About",isActive:!1,path:"/about"}],currentIndex:"0",navClick(t){e.push(t.path)},handleNav(a){e.push(t.navList[a])}}),a=e=>{t.navList.forEach((t=>{const a=t;return a.isActive=a.path===e,a})),t.currentIndex=t.navList.findIndex((e=>!0===e.isActive)).toString(),console.log(t.currentIndex)};return L((()=>e.currentRoute.value),(e=>{a(e.path)})),j((()=>{e.isReady().then((()=>{a(e.currentRoute.value.path)}))})),l({},_(t))}};const de=h("data-v-680b5872"),pe=de(((e,t,a,n,o,s)=>{const r=x("el-menu-item"),l=x("el-menu");return p(),m(l,{mode:"horizontal","default-active":e.currentIndex,onSelect:e.handleNav},{default:de((()=>[(p(!0),m(T,null,V(e.navList,((e,t)=>(p(),m(r,{index:t.toString(),key:t,keyPath:e.path},{default:de((()=>[A(k(e.name),1)])),_:2},1032,["index","keyPath"])))),128))])),_:1},8,["default-active","onSelect"])}));ue.render=pe,ue.__scopeId="data-v-680b5872";var me=c({name:"Main",components:{Nav:ue}});const he=h("data-v-3dbf2a03");u("data-v-3dbf2a03");const ve={class:"main-container",style:{"overflow-y":"hidden"}};d();const fe=he(((e,t,a,n,o,s)=>{const r=x("Nav"),l=x("el-container"),i=x("el-header"),c=x("router-view"),u=x("el-main");return p(),m("div",ve,[v(l,null,{default:he((()=>[v(i,null,{default:he((()=>[v(l,null,{default:he((()=>[v(r)])),_:1})])),_:1}),v(u,{style:{"overflow-y":"hidden"}},{default:he((()=>[v(c)])),_:1})])),_:1})])}));me.render=fe,me.__scopeId="data-v-3dbf2a03";var ge=c({name:"App",components:{Main:me}});ge.render=function(e,t,a,n,o,s){const r=x("Main");return p(),m(r)};const ye=I(ge),be=S();var _e;(_e=ye,_e.use(i),_e).use(be).use(ce).use(B,z).mount("#app");export{te as a};
