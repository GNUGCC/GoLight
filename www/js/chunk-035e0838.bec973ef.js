(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-035e0838"],{"448a":function(t,e,o){"use strict";var n=o("7a23");function c(t,e,o,c,j,i){const b=Object(n["B"])("ion-img");return Object(n["u"])(),Object(n["e"])(b,{src:i.url},null,8,["src"])}var j=o("d722"),i=o("d867"),b={components:{IonImg:i["IonImg"]},computed:{url(){return`${j["baseUrl"]}/files/${this.path}`}},data(){return{}},props:{path:String}},a=o("6b0d"),r=o.n(a);const d=r()(b,[["render",c]]);e["a"]=d},"7deb":function(t,e,o){},"8cb3":function(t,e,o){"use strict";o("7deb")},a3b9:function(t,e,o){"use strict";o.r(e);var n=o("7a23");const c=Object(n["i"])(" 已為您完成點燈儀式 "),j=Object(n["i"])(" 正在祈福中 "),i={class:"content"};function b(t,e,o,b,a,r){const d=Object(n["B"])("ion-back-button"),l=Object(n["B"])("ion-buttons"),u=Object(n["B"])("ion-title"),O=Object(n["B"])("ion-icon"),s=Object(n["B"])("ion-button"),I=Object(n["B"])("ion-toolbar"),m=Object(n["B"])("ion-header"),f=Object(n["B"])("ion-col"),p=Object(n["B"])("ion-row"),h=Object(n["B"])("ion-grid"),B=Object(n["B"])("ion-text"),_=Object(n["B"])("remote-img"),H=Object(n["B"])("ion-content"),g=Object(n["B"])("ion-footer"),w=Object(n["B"])("ion-page");return Object(n["u"])(),Object(n["e"])(w,null,{default:Object(n["H"])(()=>[Object(n["j"])(m,null,{default:Object(n["H"])(()=>[Object(n["j"])(I,null,{default:Object(n["H"])(()=>[Object(n["j"])(l,{slot:"start"},{default:Object(n["H"])(()=>[Object(n["j"])(d,{"default-href":"/order-completed/"+a.order_id},null,8,["default-href"])]),_:1}),Object(n["j"])(u),Object(n["j"])(l,{slot:"end"},{default:Object(n["H"])(()=>[Object(n["j"])(s,{"router-link":"/home"},{default:Object(n["H"])(()=>[Object(n["j"])(O,{slot:"icon-only",src:a.home},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1}),Object(n["j"])(H,{class:"completed-item"},{default:Object(n["H"])(()=>[a.item?(Object(n["u"])(),Object(n["g"])(n["a"],{key:0},[Object(n["j"])(h,{class:"ion-margin-top ion-padding-top"},{default:Object(n["H"])(()=>[Object(n["j"])(p,null,{default:Object(n["H"])(()=>[Object(n["j"])(f,{class:"desc ion-text-center"},{default:Object(n["H"])(()=>[c]),_:1})]),_:1}),Object(n["j"])(p,null,{default:Object(n["H"])(()=>[Object(n["j"])(f,{class:"desc ion-text-center"},{default:Object(n["H"])(()=>[j]),_:1})]),_:1})]),_:1}),Object(n["h"])("div",i,[Object(n["j"])(h,null,{default:Object(n["H"])(()=>[Object(n["j"])(p,null,{default:Object(n["H"])(()=>[Object(n["j"])(f,{class:"ion-text-center",offset:"4",size:"4"},{default:Object(n["H"])(()=>[Object(n["j"])(B,{class:"desc"},{default:Object(n["H"])(()=>[Object(n["i"])(Object(n["D"])(a.item.name),1)]),_:1}),Object(n["j"])(_,{class:"ion-margin-top ion-padding-top",path:a.item.icon},null,8,["path"]),Object(n["j"])(B,{class:"title"},{default:Object(n["H"])(()=>[Object(n["i"])(Object(n["D"])(a.item.title),1)]),_:1})]),_:1})]),_:1})]),_:1})])],64)):Object(n["f"])("",!0)]),_:1}),Object(n["j"])(g)]),_:1})}var a=o("d722"),r=o("d867"),d=o("ff79"),l=o("448a"),u={components:{IonBackButton:r["IonBackButton"],IonButton:r["IonButton"],IonButtons:r["IonButtons"],IonCol:r["IonCol"],IonContent:r["IonContent"],IonFooter:r["IonFooter"],IonGrid:r["IonGrid"],IonHeader:r["IonHeader"],IonIcon:r["IonIcon"],IonPage:r["IonPage"],IonRow:r["IonRow"],IonText:r["IonText"],IonTitle:r["IonTitle"],IonToolbar:r["IonToolbar"],RemoteImg:l["a"]},data(){return{order_id:this.$route.params.order_id,id:this.$route.params.id,item:!1,home:d["h"]}},methods:{query(){Object(a["queryOrderItem"])(this.id,t=>{this.item=t.item})}},mounted(){this.query()},watch:{$route(t){"CompletedItem"===t.name&&(this.order_id=t.params.order_id,this.id=t.params.id,this.item=!1,this.query())}}},O=(o("8cb3"),o("6b0d")),s=o.n(O);const I=s()(u,[["render",b],["__scopeId","data-v-17872aa4"]]);e["default"]=I}}]);
//# sourceMappingURL=chunk-035e0838.bec973ef.js.map