(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62082fed"],{"00f5":function(t,e,c){"use strict";c("39ba")},"39ba":function(t,e,c){},"644d":function(t,e,c){},"8c1d":function(t,e,c){"use strict";c("644d")},bf4b:function(t,e,c){"use strict";c.r(e);var o=c("7a23");const n=Object(o["i"])("購買資料"),b=Object(o["i"])(" 尚無資料 ");function j(t,e,c,j,s,l){const u=Object(o["B"])("ion-back-button"),O=Object(o["B"])("ion-buttons"),i=Object(o["B"])("ion-title"),a=Object(o["B"])("ion-toolbar"),r=Object(o["B"])("ion-header"),d=Object(o["B"])("ion-col"),f=Object(o["B"])("ion-row"),I=Object(o["B"])("ion-text"),m=Object(o["B"])("ion-grid"),g=Object(o["B"])("ion-content"),_=Object(o["B"])("menu-bar"),B=Object(o["B"])("ion-footer"),H=Object(o["B"])("ion-page");return Object(o["u"])(),Object(o["e"])(H,null,{default:Object(o["H"])(()=>[Object(o["j"])(r,null,{default:Object(o["H"])(()=>[Object(o["j"])(a,null,{default:Object(o["H"])(()=>[Object(o["j"])(O,{slot:"start"},{default:Object(o["H"])(()=>[Object(o["j"])(u,{"default-href":"/home"})]),_:1}),Object(o["j"])(i,null,{default:Object(o["H"])(()=>[n]),_:1})]),_:1})]),_:1}),Object(o["j"])(g,{class:"order-list"},{default:Object(o["H"])(()=>[Object(o["j"])(m,null,{default:Object(o["H"])(()=>[s.list&&s.list.length?(Object(o["u"])(!0),Object(o["g"])(o["a"],{key:0},Object(o["A"])(s.list,t=>(Object(o["u"])(),Object(o["e"])(f,{class:"record ion-margin-bottom",key:t.id,"router-link":"/order/"+t.id},{default:Object(o["H"])(()=>[Object(o["j"])(d,{size:"8"},{default:Object(o["H"])(()=>[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(t.items,(e,c)=>(Object(o["u"])(),Object(o["e"])(f,{key:e.id},{default:Object(o["H"])(()=>[Object(o["j"])(d,null,{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(c?"":t.temple.title),1)]),_:2},1024),Object(o["j"])(d,null,{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(e.light.title),1)]),_:2},1024),Object(o["j"])(d,null,{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(e.name),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),Object(o["j"])(d,{class:"ion-align-self-center",size:"4"},{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(t.create_time.substring(0,10)),1)]),_:2},1024),2!=t.status?(Object(o["u"])(),Object(o["e"])(d,{key:0,class:"ion-text-center",size:"12"},{default:Object(o["H"])(()=>[Object(o["j"])(I,{color:"medium"},{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(t.statusDesc),1)]),_:2},1024)]),_:2},1024)):Object(o["f"])("",!0)]),_:2},1032,["router-link"]))),128)):s.list?(Object(o["u"])(),Object(o["e"])(f,{key:1,class:"ion-margin-bottom"},{default:Object(o["H"])(()=>[Object(o["j"])(d,null,{default:Object(o["H"])(()=>[b]),_:1})]),_:1})):Object(o["f"])("",!0)]),_:1})]),_:1}),Object(o["j"])(B,null,{default:Object(o["H"])(()=>[Object(o["j"])(_)]),_:1})]),_:1})}var s=c("d722"),l=c("d867"),u=c("e193"),O={components:{IonBackButton:l["IonBackButton"],IonButtons:l["IonButtons"],IonCol:l["IonCol"],IonContent:l["IonContent"],IonFooter:l["IonFooter"],IonGrid:l["IonGrid"],IonHeader:l["IonHeader"],IonPage:l["IonPage"],IonRow:l["IonRow"],IonText:l["IonText"],IonTitle:l["IonTitle"],IonToolbar:l["IonToolbar"],MenuBar:u["a"]},data(){return{list:!1}},methods:{query(){Object(s["queryOrderList"])(t=>{this.list=t.orders})}},mounted(){this.query()},watch:{$route(t){"OrderList"===t.name&&(this.list=!1,this.query())}}},i=(c("8c1d"),c("6b0d")),a=c.n(i);const r=a()(O,[["render",j],["__scopeId","data-v-2fd45cbd"]]);e["default"]=r},e193:function(t,e,c){"use strict";var o=c("7a23");const n=Object(o["i"])(" 點燈祈福 "),b=Object(o["i"])(" 會員資料 "),j=Object(o["i"])(" 購買資料 "),s=Object(o["i"])(" 登出系統 ");function l(t,e,c,l,u,O){const i=Object(o["B"])("ion-img"),a=Object(o["B"])("ion-button"),r=Object(o["B"])("ion-buttons"),d=Object(o["B"])("ion-toolbar");return Object(o["u"])(),Object(o["g"])(o["a"],null,[c.step?(Object(o["u"])(),Object(o["e"])(i,{key:0,class:"step-bar",src:`/assets/images/step-${c.step}.png`},null,8,["src"])):Object(o["f"])("",!0),Object(o["I"])(Object(o["j"])(d,null,{default:Object(o["H"])(()=>[Object(o["j"])(r,null,{default:Object(o["H"])(()=>[Object(o["j"])(a,{class:"button-4","router-link":"/temple-list"},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-1.png"}),n]),_:1}),Object(o["j"])(a,{class:"button-4","router-link":"/member-info"},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-2.png"}),b]),_:1}),Object(o["j"])(a,{class:"button-4","router-link":"/order-list"},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-3.png"}),j]),_:1}),Object(o["j"])(a,{class:"button-4",onClick:O.logout},{default:Object(o["H"])(()=>[Object(o["j"])(i,{slot:"start",src:"/assets/images/icon1-4.png"}),s]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[o["F"],O.token]])],64)}var u=c("d722"),O=c("d867"),i={components:{IonButton:O["IonButton"],IonButtons:O["IonButtons"],IonImg:O["IonImg"],IonToolbar:O["IonToolbar"]},computed:{token(){return this.$store.state.token}},methods:{logout(){Object(u["logout"])(()=>{this.$store.commit("logout"),this.$route.meta.requiresAuth&&this.$router.push({name:"Home"})})}},props:{step:String}},a=(c("00f5"),c("6b0d")),r=c.n(a);const d=r()(i,[["render",l],["__scopeId","data-v-f60f87d0"]]);e["a"]=d}}]);
//# sourceMappingURL=chunk-62082fed.ee1d4af7.js.map