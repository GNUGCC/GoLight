(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-237e4d24"],{"00f5":function(t,e,o){"use strict";o("39ba")},"39ba":function(t,e,o){},"715b":function(t,e,o){"use strict";o("d5a5")},"83e3":function(t,e,o){"use strict";o.r(e);var n=o("7a23");const s=Object(n["i"])("點燈祈福"),c=Object(n["i"])("最新消息"),i=Object(n["i"])("宮廟連結"),l=Object(n["i"])("禮物小舖"),a=Object(n["i"])("旅遊景點"),b=Object(n["i"])("多媒體影片");function r(t,e,o,r,j,u){const O=Object(n["B"])("ion-back-button"),d=Object(n["B"])("ion-buttons"),m=Object(n["B"])("ion-title"),p=Object(n["B"])("ion-toolbar"),g=Object(n["B"])("ion-header"),f=Object(n["B"])("ion-img"),h=Object(n["B"])("ion-input"),_=Object(n["B"])("ion-item"),I=Object(n["B"])("ion-text"),k=Object(n["B"])("ion-col"),H=Object(n["B"])("ion-row"),B=Object(n["B"])("ion-grid"),w=Object(n["B"])("ion-content"),y=Object(n["B"])("menu-bar"),C=Object(n["B"])("ion-footer"),$=Object(n["B"])("ion-page");return Object(n["u"])(),Object(n["e"])($,null,{default:Object(n["H"])(()=>[Object(n["j"])(g,null,{default:Object(n["H"])(()=>[Object(n["j"])(p,null,{default:Object(n["H"])(()=>[Object(n["j"])(d,{slot:"start"},{default:Object(n["H"])(()=>[Object(n["j"])(O,{"default-href":"/temple-list"})]),_:1}),Object(n["j"])(m,null,{default:Object(n["H"])(()=>[Object(n["i"])(Object(n["D"])(j.title),1)]),_:1})]),_:1})]),_:1}),Object(n["j"])(w,{class:"temple"},{default:Object(n["H"])(()=>[Object(n["h"])("div",{class:"ion-padding temple-image",style:Object(n["q"])(u.style)},[Object(n["j"])(_,{class:"search"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{slot:"start",src:"/assets/images/icon2.png"}),Object(n["j"])(h,{placeholder:"在這裏搜尋宮廟名稱",onSearch:u.search,type:"search",modelValue:j.keyword,"onUpdate:modelValue":e[0]||(e[0]=t=>j.keyword=t),modelModifiers:{trim:!0}},null,8,["onSearch","modelValue"])]),_:1})],4),Object(n["j"])(B,null,{default:Object(n["H"])(()=>[Object(n["j"])(H,null,{default:Object(n["H"])(()=>[Object(n["j"])(k,{class:"ion-text-center",offset:"4",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{onClick:u.light,src:"/assets/images/btn3-1.png"},null,8,["onClick"]),Object(n["j"])(I,{style:{"font-size":"1.2rem"}},{default:Object(n["H"])(()=>[s]),_:1})]),_:1})]),_:1}),Object(n["j"])(H,{class:"ion-padding-end ion-padding-start ion-margin-end ion-margin-start"},{default:Object(n["H"])(()=>[Object(n["j"])(k,{class:"ion-text-center",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{src:"/assets/images/btn3-2.png","router-link":"/news-list/"+j.id},null,8,["router-link"]),Object(n["j"])(I,null,{default:Object(n["H"])(()=>[c]),_:1})]),_:1}),j.website_url?(Object(n["u"])(),Object(n["e"])(k,{key:0,class:"ion-text-center",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{onClick:u.openWebsite,src:"/assets/images/btn3-3.png"},null,8,["onClick"]),Object(n["j"])(I,null,{default:Object(n["H"])(()=>[i]),_:1})]),_:1})):Object(n["f"])("",!0),j.store_url?(Object(n["u"])(),Object(n["e"])(k,{key:1,class:"ion-text-center",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{onClick:u.openStore,src:"/assets/images/btn3-5.png"},null,8,["onClick"]),Object(n["j"])(I,null,{default:Object(n["H"])(()=>[l]),_:1})]),_:1})):Object(n["f"])("",!0),Object(n["j"])(k,{class:"ion-text-center",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{src:"/assets/images/btn3-6.png","router-link":"/attraction-list/"+j.id},null,8,["router-link"]),Object(n["j"])(I,null,{default:Object(n["H"])(()=>[a]),_:1})]),_:1}),j.video_url?(Object(n["u"])(),Object(n["e"])(k,{key:2,class:"ion-text-center",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(f,{onClick:u.openYoutube,src:"/assets/images/btn3-7.png"},null,8,["onClick"]),Object(n["j"])(I,null,{default:Object(n["H"])(()=>[b]),_:1})]),_:1})):Object(n["f"])("",!0)]),_:1})]),_:1})]),_:1}),Object(n["j"])(C,null,{default:Object(n["H"])(()=>[Object(n["j"])(y,{step:"1"})]),_:1})]),_:1})}var j=o("d722"),u=o("d867"),O=o("e193"),d={components:{IonBackButton:u["IonBackButton"],IonButtons:u["IonButtons"],IonCol:u["IonCol"],IonContent:u["IonContent"],IonFooter:u["IonFooter"],IonGrid:u["IonGrid"],IonHeader:u["IonHeader"],IonImg:u["IonImg"],IonInput:u["IonInput"],IonItem:u["IonItem"],IonPage:u["IonPage"],IonRow:u["IonRow"],IonText:u["IonText"],IonTitle:u["IonTitle"],IonToolbar:u["IonToolbar"],MenuBar:O["a"]},computed:{style(){let t={};return this.image&&(t.backgroundImage=`url(${j["baseUrl"]}/files/${this.image})`),t}},data(){return{id:this.$route.params.id,keyword:"",title:"",image:"",website_url:"",store_url:"",video_url:""}},methods:{find(){Object(j["searchLight"])({id:this.id,longitude:this.$store.state.coords.longitude,latitude:this.$store.state.coords.latitude},t=>{alert(t.message)})},light(){(this.$store.state.token||confirm("您尚未登入，登入後才可使用此功能。"))&&this.$router.push({name:"NewOrder",params:{id:this.id}})},openStore(){window.open(this.store_url,"_system")},openWebsite(){window.open(this.website_url,"_system")},openYoutube(){window.open(this.video_url,"_system")},query(){Object(j["queryTemple"])(this.id,t=>{let e=t.temple;this.title=e.title,this.image=e.image,this.website_url=e.website_url,this.store_url=e.store_url,this.video_url=e.video_url})},search(){this.keyword&&this.$router.push({name:"TempleList",params:{keyword:this.keyword}})}},mounted(){this.query()},watch:{$route(t){"Temple"===t.name&&(this.id=t.params.id,this.query())}}},m=(o("715b"),o("6b0d")),p=o.n(m);const g=p()(d,[["render",r],["__scopeId","data-v-4063132e"]]);e["default"]=g},d5a5:function(t,e,o){},e193:function(t,e,o){"use strict";var n=o("7a23");const s=Object(n["i"])(" 點燈祈福 "),c=Object(n["i"])(" 會員資料資料 "),i=Object(n["i"])(" 購買資料 "),l=Object(n["i"])(" 登出系統 ");function a(t,e,o,a,b,r){const j=Object(n["B"])("ion-img"),u=Object(n["B"])("ion-button"),O=Object(n["B"])("ion-buttons"),d=Object(n["B"])("ion-toolbar");return Object(n["u"])(),Object(n["g"])(n["a"],null,[o.step?(Object(n["u"])(),Object(n["e"])(j,{key:0,class:"step-bar",src:`/assets/images/step-${o.step}.png`},null,8,["src"])):Object(n["f"])("",!0),Object(n["I"])(Object(n["j"])(d,null,{default:Object(n["H"])(()=>[Object(n["j"])(O,null,{default:Object(n["H"])(()=>[Object(n["j"])(u,{class:"button-4","router-link":"/temple-list"},{default:Object(n["H"])(()=>[Object(n["j"])(j,{slot:"start",src:"/assets/images/icon1-1.png"}),s]),_:1}),Object(n["j"])(u,{class:"button-4","router-link":"/member-info"},{default:Object(n["H"])(()=>[Object(n["j"])(j,{slot:"start",src:"/assets/images/icon1-2.png"}),c]),_:1}),Object(n["j"])(u,{class:"button-4","router-link":"/order-list"},{default:Object(n["H"])(()=>[Object(n["j"])(j,{slot:"start",src:"/assets/images/icon1-3.png"}),i]),_:1}),Object(n["j"])(u,{class:"button-4",onClick:r.logout},{default:Object(n["H"])(()=>[Object(n["j"])(j,{slot:"start",src:"/assets/images/icon1-4.png"}),l]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[n["F"],r.token]])],64)}var b=o("d722"),r=o("d867"),j={components:{IonButton:r["IonButton"],IonButtons:r["IonButtons"],IonImg:r["IonImg"],IonToolbar:r["IonToolbar"]},computed:{token(){return this.$store.state.token}},methods:{logout(){Object(b["logout"])(()=>{this.$store.commit("logout"),this.$route.meta.requiresAuth&&this.$router.push({name:"Home"})})}},props:{step:String}},u=(o("00f5"),o("6b0d")),O=o.n(u);const d=O()(j,[["render",a],["__scopeId","data-v-f60f87d0"]]);e["a"]=d}}]);
//# sourceMappingURL=chunk-237e4d24.45089e70.js.map