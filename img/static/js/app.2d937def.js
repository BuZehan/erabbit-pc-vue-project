(function(){var e={588:function(e,t,n){"use strict";n.d(t,{Gh:function(){return o},Sm:function(){return c},qu:function(){return i},vt:function(){return r}});var a=n(4471);const r=()=>(0,a.Z)("/home/category/head","get"),o=e=>(0,a.Z)("/category","get",{id:e}),i=e=>(0,a.Z)("/category/sub/filter","get",{id:e}),c=e=>(0,a.Z)("/category/goods/temporary","post",e)},4516:function(e,t,n){"use strict";var a=n(9242),r=n(3396);function o(e,t,n,a,o,i){const c=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c)])}var i={name:"App"},c=n(89);const s=(0,c.Z)(i,[["render",o]]);var u=s,l=n(1120),d=n(6359),f=n.p+"static/img/logo.31ccc2b6.png",p=n(1179);const v=document.createElement("div");v.setAttribute("class","xtx-message-container"),document.body.appendChild(v);let g=null;var m=({type:e,text:t})=>{const n=(0,r.Wm)(p["default"],{type:e,text:t});(0,a.sY)(n,v),clearTimeout(g),g=setTimeout((()=>{(0,a.sY)(null,v)}),3200)},h={install(e){const t=n(7098);t.keys().forEach((n=>{const a=t(n).default;e.component(a.name,a)})),y(e),e.config.globalProperties.$message=m}};const y=e=>{e.directive("lazy",{mounted(e,t){const n=new IntersectionObserver((([{isIntersecting:a}])=>{a&&(n.unobserve(e),t.value||(e.src=f,console.log("加载默认图片")),t.value&&(console.log("图片加载完毕"),e.src=t.value))}),{threshold:.01});n.observe(e)}})};(0,a.ri)(u).use(d.Z).use(l.Z).use(h).mount("#app")},1120:function(e,t,n){"use strict";var a=n(2483);const r=()=>n.e(262).then(n.bind(n,6262)),o=()=>n.e(836).then(n.bind(n,8836)),i=()=>n.e(789).then(n.bind(n,3789)),c=()=>n.e(23).then(n.bind(n,6023)),s=()=>n.e(62).then(n.bind(n,4062)),u=()=>n.e(271).then(n.bind(n,206)),l=[{path:"/",component:r,children:[{path:"/",component:o},{path:"/category/:id",component:i},{path:"/category/sub/:id",component:c},{path:"/product/:id",component:s}]},{path:"/login",component:u}],d=(0,a.p7)({history:(0,a.r5)(),routes:l,scrollBehavior(){return{top:0,left:0}}});t["Z"]=d},6359:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(65),r=n(2415),o={namespaced:!0,state:()=>({profile:{account:"",id:"",avatar:"",nickname:"",account:"666",mobile:"",token:""}}),getters:{},mutations:{setUser(e,t){e.profile=t}},actions:{}},i={namespaced:!0,state:()=>({list:[]})};const c=["居家","美食","服饰","母婴","个护","严选","数码","运动","杂货"];var s=n(588),u={namespaced:!0,state:()=>({list:c.map((e=>({name:e})))}),mutations:{setList(e,t){e.list=t},Show(e,t){let n=e.list.find((e=>e.id===t.id));n.open=!0},Hide(e,t){let n=e.list.find((e=>e.id===t.id));n.open=!1}},actions:{async getList(e){let t=await(0,s.vt)();t.result.forEach((e=>{e.open=!1})),e.commit("setList",t.result)}}},l=(0,a.MT)({modules:{user:o,cart:i,category:u},plugins:[(0,r.Z)({key:"erabbit-client-pc-store",paths:["user","cart"]})]})},4471:function(e,t,n){"use strict";n(7658);var a=n(4311),r=n(6359),o=n(1120);const i="http://pcapi-xiaotuxian-front-devtest.itheima.net/",c=a.Z.create({baseURL:i,timeout:5e3});c.interceptors.request.use((e=>{const{profile:t}=r.Z.state.user;return t.token&&(e.headers.Authorization=`Bearer ${t.token}`),e}),(e=>Promise.reject(e))),c.interceptors.response.use((e=>e.data),(e=>{if(e.response&&401===e.response.status){r.Z.commit("user/setUser",{});const e=encodeURIComponent(o.Z.currentRoute.value.fullPath);o.Z.push("/login?redirectUrl="+e)}return Promise.reject(e)})),t["Z"]=(e,t,n)=>c({url:e,method:t,["get"===t.toLowerCase()?"params":"data"]:n})},1365:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(3396);const r={class:"xtx-bread-item"},o={key:1};function i(e,t,n,i,c,s){const u=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",r,[n.to?((0,a.wg)(),(0,a.j4)(u,{key:0,to:n.to},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3},8,["to"])):((0,a.wg)(),(0,a.iD)("span",o,[(0,a.WI)(e.$slots,"default")]))])}var c={name:"XtxBreadItem",props:{to:{type:[String,Object],default:""}}},s=n(89);const u=(0,s.Z)(c,[["render",i]]);var l=u},7764:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});n(7658);var a=n(3396),r={name:"XtxBread",props:{to:{type:[String,Object],default:""}},render(){const e=this.$slots.default(),t=[];return e.forEach(((n,r)=>{t.push(n),r<e.length-1&&t.push((0,a.h)("i",{class:"iconfont  icon-xiangyoujiantou"}))})),(0,a.h)("div",{class:"xtx-bread"},t)}};const o=r;var i=o},1851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(3396),r=n(7139);function o(e,t,n,o,i,c){return(0,a.wg)(),(0,a.iD)("button",{class:(0,r.C_)(["xtx-button ellipsis",[n.size,n.type]])},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],2)}var i={name:"XtxButton",props:{size:{type:String,default:"middle"},type:{type:String,default:"default"}}},c=n(89);const s=(0,c.Z)(i,[["render",o],["__scopeId","data-v-2d3d3baa"]]);var u=s},6706:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var a=n(3396),r=n(7139);const o=e=>((0,a.dD)("data-v-0dd34031"),e=e(),(0,a.Cn)(),e),i={class:"carousel-body"},c=["src"],s={key:1,class:"slider"},u=["src"],l={class:"name ellipsis"},d={class:"price"},f=o((()=>(0,a._)("i",{class:"iconfont icon-angle-left"},"-",-1))),p=[f],v=o((()=>(0,a._)("i",{class:"iconfont icon-angle-right"},"+",-1))),g=[v],m={class:"carousel-indicator"},h=["onClick"];function y(e,t,n,o,f,v){const y=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",{class:"xtx-carousel",onMouseenter:t[2]||(t[2]=(...e)=>o.stop&&o.stop(...e)),onMouseleave:t[3]||(t[3]=(...e)=>o.start&&o.start(...e))},[(0,a._)("ul",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.sliders,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,r.C_)(["carousel-item",{fade:t===o.index}]),key:t},[e.imgUrl?((0,a.wg)(),(0,a.j4)(y,{key:0,to:"/"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.imgUrl,alt:""},null,8,c)])),_:2},1024)):((0,a.wg)(),(0,a.iD)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,(e=>((0,a.wg)(),(0,a.j4)(y,{key:e.id,to:`/product/${e.id}`},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.picture,alt:""},null,8,u),(0,a._)("p",l,(0,r.zw)(e.name),1),(0,a._)("p",d,"¥"+(0,r.zw)(e.price),1)])),_:2},1032,["to"])))),128))]))],2)))),128))]),(0,a._)("a",{href:"javascript:;",class:"carousel-btn prev",onClick:t[0]||(t[0]=e=>o.toggle(-1))},p),(0,a._)("a",{href:"javascript:;",class:"carousel-btn next",onClick:t[1]||(t[1]=e=>o.toggle(1))},g),(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.sliders,((e,t)=>((0,a.wg)(),(0,a.iD)("span",{key:t,onClick:e=>o.index=t,class:(0,r.C_)({active:t===o.index})},null,10,h)))),128))])],32)}var b=n(4870),x={name:"XtxCarousel",props:{sliders:{type:Array,default:()=>[]},autoPlay:{type:Boolean,default:!1},duration:{type:Number,default:3e3}},setup(e){let t=(0,b.iH)(0),n=null,r=()=>{clearInterval(n),n=setInterval((()=>{t.value++,t.value>=e.sliders.length&&(t.value=0)}),e.duration)};(0,a.YP)((()=>e.sliders),(()=>{e.sliders.length&&e.autoPlay&&(t.value=0,r())}),{immediate:!0});let o=()=>{n&&clearInterval(n)},i=()=>{e.sliders.length&&e.autoPlay&&r()},c=n=>{console.log("click",n);let a=t.value+n;a>=e.sliders.length?t.value=0:t.value=a<0?e.sliders.length-1:a};return(0,a.Ah)((()=>{clearInterval(n)})),{index:t,stop:o,start:i,toggle:c}}},k=n(89);const w=(0,k.Z)(x,[["render",y],["__scopeId","data-v-0dd34031"]]);var C=w},5107:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(3396);const r={key:0,class:"iconfont icon-CheckboxChecked"},o={key:1,class:"iconfont icon-checkbox-unchecked"},i={key:2};function c(e,t,n,c,s,u){return(0,a.wg)(),(0,a.iD)("div",{class:"xtx-checkbox",onClick:t[0]||(t[0]=e=>c.changeChecked())},[c.checked?((0,a.wg)(),(0,a.iD)("i",r)):((0,a.wg)(),(0,a.iD)("i",o)),e.$slots.default?((0,a.wg)(),(0,a.iD)("span",i,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])):(0,a.kq)("",!0)])}var s=n(8401),u={name:"XtxCheckbox",props:{modelValue:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=(0,s.NC)(e,"modelValue",t),a=()=>{const e=!n.value;n.value=e,t("change",e)};return{checked:n,changeChecked:a}}},l=n(89);const d=(0,l.Z)(u,[["render",c],["__scopeId","data-v-5a956976"]]);var f=d},991:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(3396),r=n(7139);const o=e=>((0,a.dD)("data-v-5fa7ff94"),e=e(),(0,a.Cn)(),e),i={class:"xtx-city",ref:"target"},c={key:0,class:"placeholder"},s={key:1,class:"value"},u=o((()=>(0,a._)("i",{class:"iconfont icon-angle-down"},null,-1))),l={key:0,class:"option"},d=["onClick"];function f(e,t,n,o,f,p){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",{class:(0,r.C_)(["select",{active:o.visiable}]),onClick:t[0]||(t[0]=(...e)=>o.toggleDialog&&o.toggleDialog(...e))},[n.fullLocation?((0,a.wg)(),(0,a.iD)("span",s,(0,r.zw)(n.fullLocation),1)):((0,a.wg)(),(0,a.iD)("span",c,"请选择配送地址")),u],2),o.visiable?((0,a.wg)(),(0,a.iD)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.currentCityList,(e=>((0,a.wg)(),(0,a.iD)("span",{class:"ellipsis",onClick:t=>o.changeItem(e),key:e.code},(0,r.zw)(e.name),9,d)))),128))])):(0,a.kq)("",!0)],512)}var p=n(4870),v=n(8401),g=n(4311),m={name:"XtxCity",props:{fullLocation:{type:String,default:""}},setup(e,{emit:t}){const n=(0,p.iH)(null),r=(0,p.iH)(!1),o=(0,p.iH)(null),i=(0,p.iH)([]),c=()=>{r.value=!0,n.value=!0,h().then((e=>{i.value=e,n.value=!1}));for(const e in l)l[e]=""},s=()=>{r.value=!1},u=()=>{r.value?s():c()};(0,v.i9)(o,(e=>{s()}));const l=(0,p.qj)({provinceCode:"",provinceName:"",cityCode:"",cityName:"",countyCode:"",countyName:"",fullLocation:""}),d=(0,a.Fl)((()=>{let e=i.value;return l.provinceCode&&(e=e.find((e=>e.code===l.provinceCode)).areaList),l.cityCode&&(e=e.find((e=>e.code===l.cityCode)).areaList),e})),f=e=>{0===e.level&&(l.provinceCode=e.code,l.provinceName=e.name),1===e.level&&(l.cityCode=e.code,l.cityName=e.name),2===e.level&&(l.countyCode=e.code,l.countyName=e.name,l.fullLocation=`${l.provinceName} ${l.cityName} ${l.countyName}`,t("change",l),s())};return{toggleDialog:u,visiable:r,target:o,loading:n,allCityData:i,changeItem:f,currentCityList:d}}};const h=()=>new Promise(((e,t)=>{if(window.cityData)e(window.cityData);else{const t="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json";g.Z.get(t).then((t=>{window.cityData=t.data,e(window.cityData)}))}}));var y=n(89);const b=(0,y.Z)(m,[["render",f],["__scopeId","data-v-5fa7ff94"]]);var x=b},3812:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(3396);const r=e=>((0,a.dD)("data-v-402d0b09"),e=e(),(0,a.Cn)(),e),o={ref:"container",class:"container"},i=r((()=>(0,a._)("div",{class:"box"},"0",-1))),c=[i];function s(e,t,n,r,i,s){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",o,c,512),(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>r.add&&r.add(...e))},"增加")])}var u=n(4870),l={name:"XtxFlip",setup(){const e=(0,u.iH)(null),t=(0,u.iH)(1),n=()=>{const n=document.createElement("div");n.setAttribute("class","box"),n.innerHTML=t.value,t.value++,e.value.insertBefore(n,e.value.children[0])},a=()=>{Array.prototype.map.call(e.value.children,(e=>{const{x:t,y:n}=e.getBoundingClientRect();e._left=t,e._top=n}))},r=()=>{Array.prototype.map.call(e.value.children,(e=>{const{x:t,y:n}=e.getBoundingClientRect();if(e._left){const a=e._left-t,r=e._top-n;e.animate([{transform:"translate("+a+"px,"+r+"px)"},{transform:""}],{duration:1e3})}}))},o=()=>{a(),n(),r()};return{container:e,add:o}}},d=n(89);const f=(0,d.Z)(l,[["render",s],["__scopeId","data-v-402d0b09"]]);var p=f},7136:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(3396);const r=e=>((0,a.dD)("data-v-185e3934"),e=e(),(0,a.Cn)(),e),o={class:"xtx-infinite-loading",ref:"container"},i={key:0,class:"loading"},c=r((()=>(0,a._)("span",{class:"img"},"🙄🙄🙄🙄🙄🙄🙄",-1))),s=r((()=>(0,a._)("span",{class:"text"},"正在加载...",-1))),u=[c,s],l={key:1,class:"none"},d=r((()=>(0,a._)("span",{class:"img"},"🥰🥰🥰🥰🥰🥰🥰",-1))),f=r((()=>(0,a._)("span",{class:"text"},"亲，没有更多了",-1))),p=[d,f];function v(e,t,n,r,c,s){return(0,a.wg)(),(0,a.iD)("div",o,[n.loading?((0,a.wg)(),(0,a.iD)("div",i,u)):(0,a.kq)("",!0),n.finished?((0,a.wg)(),(0,a.iD)("div",l,p)):(0,a.kq)("",!0)],512)}var g=n(8401),m=n(4870),h={name:"XtxInfiniteLoading",props:{loading:{type:Boolean,default:!1},finished:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=(0,m.iH)(null);return(0,g.S1)(n,(([{isIntersecting:n}])=>{n&&!1===e.loading&&!1===e.finished&&t("infinite")}),{threshold:0}),{container:n}}},y=n(89);const b=(0,y.Z)(h,[["render",v],["__scopeId","data-v-185e3934"]]);var x=b},1179:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(3396),r=n(9242),o=n(7139);const i={class:"text"};function c(e,t,n,c,s,u){return(0,a.wg)(),(0,a.j4)(r.uT,{name:"down",mode:"in-out"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",{class:"xtx-message",style:(0,o.j5)(c.style[n.type])},[(0,a._)("i",{class:(0,o.C_)(["iconfont",[c.style[n.type].icon]])},null,2),(0,a._)("span",i,(0,o.zw)(n.text),1)],4),[[r.F8,c.visible]])])),_:1})}var s=n(4870),u={name:"XtxMessage",props:{text:{type:String,default:""},type:{type:String,default:"warn"}},setup(){const e={warn:{icon:"icon-warning",color:"#E6A23C",backgroundColor:"rgb(253, 246, 236)",borderColor:"rgb(250, 236, 216)"},error:{icon:"icon-shanchu",color:"#F56C6C",backgroundColor:"rgb(254, 240, 240)",borderColor:"rgb(253, 226, 226)"},success:{icon:"icon-queren2",color:"#67C23A",backgroundColor:"rgb(240, 249, 235)",borderColor:"rgb(225, 243, 216)"}};let t=null;const n=(0,s.iH)(!1);return(0,a.bv)((()=>{clearTimeout(t),n.value=!0,t=setTimeout((()=>{n.value=!1}),3e3)})),{style:e,visible:n}}},l=n(89);const d=(0,l.Z)(u,[["render",c],["__scopeId","data-v-03794f42"]]);var f=d},493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(3396);const r=e=>((0,a.dD)("data-v-517f17a2"),e=e(),(0,a.Cn)(),e),o=r((()=>(0,a._)("span",null,"查看全部",-1))),i=r((()=>(0,a._)("i",{class:"iconfont icon-xiangyoujiantou"},null,-1)));function c(e,t,n,r,c,s){const u=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(u,{to:n.path,class:"xtx-more"},{default:(0,a.w5)((()=>[o,i])),_:1},8,["to"])}var s={name:"XtxMore",props:{path:{type:String,default:"/"}}},u=n(89);const l=(0,u.Z)(s,[["render",c],["__scopeId","data-v-517f17a2"]]);var d=l},8347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(3396),r=n(7139);const o={class:"xtx-numbox"},i={class:"label"},c={class:"numbox"},s=["value"];function u(e,t,n,u,l,d){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,(0,r.zw)(n.label),1),(0,a._)("div",c,[(0,a._)("a",{onClick:t[0]||(t[0]=e=>u.changeValue(-1)),href:"javascript:;"},"-"),(0,a._)("input",{type:"text",value:n.modelValue,readonly:""},null,8,s),(0,a._)("a",{onClick:t[1]||(t[1]=e=>u.changeValue(1)),href:"javascript:;"},"+")])])}var l=n(8401),d={name:"XtxNumbox",props:{label:{type:String,default:""},modelValue:{type:Number,default:1},max:{type:Number,default:10},min:{type:Number,default:1}},setup(e,{emit:t}){const n=(0,l.NC)(e,"modelValue",t),a=a=>{const r=n.value+a;r<e.min||r>e.max||(n.value=r,t("change",r))};return{changeValue:a}}},f=n(89);const p=(0,f.Z)(d,[["render",u],["__scopeId","data-v-3cde727d"]]);var v=p},142:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(3396),r=n(7139);const o={key:0,class:"xtx-pagination"},i={key:0,href:"javascript:;",class:"disabled"},c={key:2},s=["onClick"],u={key:3},l={key:4,href:"javascript:;",class:"disabled"};function d(e,t,n,d,f,p){return n.total>0?((0,a.wg)(),(0,a.iD)("div",o,[d.myCurrentPage<=1?((0,a.wg)(),(0,a.iD)("a",i,"上一页")):((0,a.wg)(),(0,a.iD)("a",{key:1,href:"javascript:;",onClick:t[0]||(t[0]=e=>d.changePage(d.myCurrentPage-1))},"上一页")),d.pager.start>1?((0,a.wg)(),(0,a.iD)("span",c,"...")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.pager.btnArr,(e=>((0,a.wg)(),(0,a.iD)("a",{href:"javascript:;",onClick:t=>d.changePage(e),class:(0,r.C_)({active:e===d.myCurrentPage}),key:e},(0,r.zw)(e),11,s)))),128)),d.pager.end<d.pager.totalPage?((0,a.wg)(),(0,a.iD)("span",u,"...")):(0,a.kq)("",!0),d.myCurrentPage>=d.pager.totalPage?((0,a.wg)(),(0,a.iD)("a",l,"下一页")):((0,a.wg)(),(0,a.iD)("a",{key:5,href:"javascript:;",onClick:t[1]||(t[1]=e=>d.changePage(d.myCurrentPage+1))},"下一页"))])):(0,a.kq)("",!0)}n(7658);var f=n(4870),p={name:"XtxPagination",props:{total:{type:Number,default:100},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10}},setup(e,{emit:t}){const n=(0,f.iH)(1),r=(0,f.iH)(100),o=(0,f.iH)(10),i=5,c=(0,a.Fl)((()=>{const e=Math.ceil(r.value/o.value),t=Math.floor(i/2);let a=n.value-t,c=a+i-1;a<1&&(a=1,c=a+i-1>e?e:a+i-1),c>e&&(c=e,a=c-i+1<1?1:c-i+1);const s=[];for(let n=a;n<=c;n++)s.push(n);return{start:a,end:c,totalPage:e,btnArr:s}})),s=e=>{n.value!==e&&(n.value=e,t("current-change",e))};return(0,a.YP)(e,(()=>{r.value=e.total,o.value=e.pageSize,n.value=e.currentPage}),{immediate:!0}),{myCurrentPage:n,pager:c,changePage:s}}},v=n(89);const g=(0,v.Z)(p,[["render",d],["__scopeId","data-v-562f7e8d"]]);var m=g},1184:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(3396),r=n(7139);function o(e,t,n,o,i,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["xtx-skeleton",{shan:n.animated}]),style:(0,r.j5)({width:n.width,height:n.height})},[(0,a._)("div",{class:"block",style:(0,r.j5)({backgroundColor:n.bg})},null,4)],6)}var i={name:"XtxSkeleton",props:{bg:{type:String,default:"#efefef"},width:{type:String,default:"100px"},height:{type:String,default:"100px"},animated:{type:Boolean,default:!1}}},c=n(89);const s=(0,c.Z)(i,[["render",o],["__scopeId","data-v-3310e5d2"]]);var u=s},7098:function(e,t,n){var a={"./xtx-bread-item.vue":1365,"./xtx-bread.vue":7764,"./xtx-button.vue":1851,"./xtx-carousel.vue":6706,"./xtx-checkbox.vue":5107,"./xtx-city.vue":991,"./xtx-flip.vue":3812,"./xtx-infinite-loading.vue":7136,"./xtx-message.vue":1179,"./xtx-more.vue":493,"./xtx-numbox.vue":8347,"./xtx-pagination.vue":142,"./xtx-skeleton.vue":1184};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=7098}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{23:"761c8d1f",62:"0deba12b",262:"093aa777",271:"bcac1d4d",789:"7aebcde0",836:"b36532e3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+"."+{23:"aba7fd3a",62:"f954e214",262:"40a6d71d",271:"66c1809e",789:"575348cf",836:"3b194ed4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="erabbit-pc-vue-project:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var c,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=a),e[a]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),c=n.p+i;if(t(i,c))return r();e(a,c,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={23:1,62:1,262:1,271:1,789:1,836:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),c=new Error,s=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],c=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var l=s(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkerabbit_pc_vue_project"]=self["webpackChunkerabbit_pc_vue_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4516)}));a=n.O(a)})();