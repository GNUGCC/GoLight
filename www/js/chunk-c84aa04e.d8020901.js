(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c84aa04e"],{"00f5":function(t,e,n){"use strict";n("39ba")},"39ba":function(t,e,n){},"443c":function(t,e,n){},"448a":function(t,e,n){"use strict";var o=n("7a23");function c(t,e,n,c,s,b){const j=Object(o["B"])("ion-img");return Object(o["u"])(),Object(o["e"])(j,{src:b.url},null,8,["src"])}var s=n("d722"),b=n("d867"),j={components:{IonImg:b["IonImg"]},computed:{url(){return`${s["baseUrl"]}/files/${this.path}`}},data(){return{}},props:{path:String}},l=n("6b0d"),u=n.n(l);const a=u()(j,[["render",c]]);e["a"]=a},a072:function(t,e,n){"use strict";n("443c")},c005:function(t,e,n){"use strict";n.r(e);var o=n("7a23");const c=t=>(Object(o["x"])("data-v-ab3d64dc"),t=t(),Object(o["v"])(),t),s=c(()=>Object(o["h"])("br",null,null,-1)),b=Object(o["i"])("查無最新消息");function j(t,e,n,c,j,l){const u=Object(o["B"])("ion-back-button"),a=Object(o["B"])("ion-buttons"),i=Object(o["B"])("ion-title"),r=Object(o["B"])("ion-toolbar"),O=Object(o["B"])("ion-header"),d=Object(o["B"])("remote-img"),f=Object(o["B"])("ion-col"),I=Object(o["B"])("ion-text"),m=Object(o["B"])("ion-row"),p=Object(o["B"])("ion-grid"),g=Object(o["B"])("ion-content"),B=Object(o["B"])("menu-bar"),h=Object(o["B"])("ion-footer"),_=Object(o["B"])("ion-page");return Object(o["u"])(),Object(o["e"])(_,null,{default:Object(o["H"])(()=>[Object(o["j"])(O,null,{default:Object(o["H"])(()=>[Object(o["j"])(r,null,{default:Object(o["H"])(()=>[Object(o["j"])(a,{slot:"start"},{default:Object(o["H"])(()=>[Object(o["j"])(u,{"default-href":"/temple/"+j.id},null,8,["default-href"])]),_:1}),Object(o["j"])(i,null,{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(j.title)+" 最新消息",1)]),_:1})]),_:1})]),_:1}),Object(o["j"])(g,{class:"news-list"},{default:Object(o["H"])(()=>[Object(o["j"])(p,null,{default:Object(o["H"])(()=>[j.list.length?(Object(o["u"])(!0),Object(o["g"])(o["a"],{key:0},Object(o["A"])(j.list,t=>(Object(o["u"])(),Object(o["e"])(m,{key:t.id,"router-link":"/news/"+t.id},{default:Object(o["H"])(()=>[Object(o["j"])(f,{size:"4"},{default:Object(o["H"])(()=>[Object(o["j"])(d,{path:t.image,"router-link":"/news/"+t.id},null,8,["path","router-link"])]),_:2},1024),Object(o["j"])(f,{size:"8"},{default:Object(o["H"])(()=>[Object(o["j"])(I,null,{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(t.title),1)]),_:2},1024),s,Object(o["j"])(I,{style:{"font-size":"0.8rem"}},{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(t.the_date),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["router-link"]))),128)):(Object(o["u"])(),Object(o["e"])(m,{key:1},{default:Object(o["H"])(()=>[Object(o["j"])(f,null,{default:Object(o["H"])(()=>[Object(o["j"])(I,{style:{"font-size":"2rem"}},{default:Object(o["H"])(()=>[b]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1}),Object(o["j"])(h,null,{default:Object(o["H"])(()=>[Object(o["j"])(B)]),_:1})]),_:1})}var l=n("d722"),u=n("d867"),a=n("e193"),i=n("448a"),r={components:{IonBackButton:u["IonBackButton"],IonButtons:u["IonButtons"],IonCol:u["IonCol"],IonContent:u["IonContent"],IonFooter:u["IonFooter"],IonGrid:u["IonGrid"],IonHeader:u["IonHeader"],IonPage:u["IonPage"],IonRow:u["IonRow"],IonText:u["IonText"],IonTitle:u["IonTitle"],IonToolbar:u["IonToolbar"],MenuBar:a["a"],RemoteImg:i["a"]},data(){return{id:this.$route.params.id,list:[],title:""}},methods:{query(){Object(l["queryNewsList"])(this.id,t=>{this.list=t.list,this.title=t.temple.title})}},mounted(){this.query()},watch:{$route(t){"NewsList"===t.name&&(this.id=t.params.id,this.query())}}},O=(n("a072"),n("6b0d")),d=n.n(O);const f=d()(r,[["render",j],["__scopeId","data-v-ab3d64dc"]]);e["default"]=f},e193:function(t,e,n){"use strict";var o=n("7a23");const c=Object(o["i"])(" 點燈祈福 "),s=Object(o["i"])(" 會員資料8資料 "),b=Object(o["i"])(" 購買資料 "),j=Object(o["i"])(" 登出系統 ");function l(t,e,n,l,u,a){const i=Object(o["B"])("ion-img"),r=Object(o["B"])("ion-button"),O=Object(o["B"])("ion-buttons"),d=Object(o["B"])("ion-toolbar");return Object(o["u"])(),Object(o["g"])(o["a"],null,[n.step?(Object(o["u"])(),Object(o["e"])(i,{key:0,class:"step-bar",src:`/assets/images/step-${n.step}.png`},null,8,["src"])):Object(o["f"])("",!0),Object(o["I"])(Object(o["j"])(d,null,{default:Object(o["H"])(()=>[Object(o["j"])(O,null,{default:Object(o["H"])(()=>[Object(o["j"])(r,{class:"button-4","router-link":"/temple-list"},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-1.png"}),c]),_:1}),Object(o["j"])(r,{class:"button-4","router-link":"/member-info"},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-2.png"}),s]),_:1}),Object(o["j"])(r,{class:"button-4","router-link":"/order-list"},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-3.png"}),b]),_:1}),Object(o["j"])(r,{class:"button-4",onClick:a.logout},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-4.png"}),j]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[o["F"],a.token]])],64)}var u=n("d722"),a=n("d867"),i={components:{IonButton:a["IonButton"],IonButtons:a["IonButtons"],IonImg:a["IonImg"],IonToolbar:a["IonToolbar"]},computed:{token(){return this.$store.state.token}},methods:{logout(){Object(u["logout"])(()=>{this.$store.commit("logout"),this.$route.meta.requiresAuth&&this.$router.push({name:"Home"})})}},props:{step:String}},r=(n("00f5"),n("6b0d")),O=n.n(r);const d=O()(i,[["render",l],["__scopeId","data-v-f60f87d0"]]);e["a"]=d}}]);
//# sourceMappingURL=chunk-c84aa04e.d8020901.js.map