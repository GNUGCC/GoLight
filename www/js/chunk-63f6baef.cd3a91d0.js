(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f6baef"],{"0224":function(t,e,n){"use strict";n("03e6")},"03e6":function(t,e,n){},"448a":function(t,e,n){"use strict";var o=n("7a23");function c(t,e,n,c,a,s){const i=Object(o["B"])("ion-img");return Object(o["u"])(),Object(o["e"])(i,{src:s.url},null,8,["src"])}var a=n("d722"),s=n("d867"),i={components:{IonImg:s["IonImg"]},computed:{url(){return`${a["baseUrl"]}/files/${this.path}`}},data(){return{}},props:{path:String}},r=n("6b0d"),b=n.n(r);const j=b()(i,[["render",c]]);e["a"]=j},"6f13":function(t,e,n){"use strict";n.r(e);var o=n("7a23");const c=Object(o["i"])("點燈完成"),a={class:"content"};function s(t,e,n,s,i,r){const b=Object(o["B"])("ion-back-button"),j=Object(o["B"])("ion-buttons"),l=Object(o["B"])("ion-title"),u=Object(o["B"])("ion-icon"),d=Object(o["B"])("ion-button"),O=Object(o["B"])("ion-toolbar"),h=Object(o["B"])("ion-header"),I=Object(o["B"])("ion-text"),g=Object(o["B"])("remote-img"),m=Object(o["B"])("ion-col"),f=Object(o["B"])("ion-row"),p=Object(o["B"])("ion-grid"),B=Object(o["B"])("ion-content"),_=Object(o["B"])("ion-img"),H=Object(o["B"])("ion-footer"),k=Object(o["B"])("ion-page");return Object(o["u"])(),Object(o["e"])(k,null,{default:Object(o["H"])(()=>[Object(o["j"])(h,null,{default:Object(o["H"])(()=>[Object(o["j"])(O,null,{default:Object(o["H"])(()=>[Object(o["j"])(j,{slot:"start"},{default:Object(o["H"])(()=>[Object(o["j"])(b,{"default-href":"/order-list"})]),_:1}),Object(o["j"])(l,null,{default:Object(o["H"])(()=>[c]),_:1}),Object(o["I"])(Object(o["j"])(j,{slot:"end"},{default:Object(o["H"])(()=>[Object(o["j"])(d,{"router-link":"/home"},{default:Object(o["H"])(()=>[Object(o["j"])(u,{slot:"icon-only",src:i.home},null,8,["src"])]),_:1})]),_:1},512),[[o["F"],7==i.stage]])]),_:1})]),_:1}),Object(o["j"])(B,{class:"order-completed"},{default:Object(o["H"])(()=>[Object(o["h"])("div",{class:"bg",style:Object(o["q"])(r.flash)},[Object(o["h"])("div",a,[i.order?(Object(o["u"])(),Object(o["e"])(p,{key:0},{default:Object(o["H"])(()=>[Object(o["j"])(f,{class:"ion-justify-content-around"},{default:Object(o["H"])(()=>[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(i.order.items,t=>(Object(o["u"])(),Object(o["e"])(m,{class:"ion-text-center",key:t.id,size:"4"},{default:Object(o["H"])(()=>[Object(o["j"])(I,null,{default:Object(o["H"])(()=>[Object(o["i"])(Object(o["D"])(t.name),1)]),_:2},1024),Object(o["j"])(g,{path:t.pet_image&&""!==t.pet_image?t.pet_image:t.icon,"router-link":"/completed-item/"+i.id+"/"+t.id},null,8,["path","router-link"])]),_:2},1024))),128))]),_:1})]),_:1})):Object(o["f"])("",!0)])],4)]),_:1}),Object(o["j"])(H,null,{default:Object(o["H"])(()=>[Object(o["j"])(_,{class:"step-bar",src:`/assets/images/step-${7==i.stage?"6":"5"}.png`},null,8,["src"])]),_:1})]),_:1})}var i=n("d722"),r=n("d867"),b=n("ff79"),j=n("448a"),l={components:{IonBackButton:r["IonBackButton"],IonButton:r["IonButton"],IonButtons:r["IonButtons"],IonCol:r["IonCol"],IonContent:r["IonContent"],IonFooter:r["IonFooter"],IonGrid:r["IonGrid"],IonHeader:r["IonHeader"],IonIcon:r["IonIcon"],IonImg:r["IonImg"],IonPage:r["IonPage"],IonRow:r["IonRow"],IonText:r["IonText"],IonTitle:r["IonTitle"],IonToolbar:r["IonToolbar"],RemoteImg:j["a"]},computed:{flash(){let t=5;return 2===this.stage||4===this.stage||6===this.stage?t=6:7===this.stage&&(t=7),{backgroundImage:`url(/assets/images/bg${t}.png)`,transition:"background-image 0.75s ease-in-out"}}},data(){return{id:this.$route.params.id,order:!1,stage:1,handle:!1,home:b["h"]}},methods:{change(){this.stage<7?this.handle=setTimeout(()=>{this.stage+=1,this.change()},1500):this.handle=!1},query(){Object(i["queryOrder"])(this.id,t=>{this.order=t.order,this.change()})}},mounted(){this.query()},watch:{$route(t){"OrderCompleted"===t.name?(this.id=t.params.id,this.stage=1,this.query()):this.handle&&(clearTimeout(this.handle),this.handle=!1)}}},u=(n("0224"),n("6b0d")),d=n.n(u);const O=d()(l,[["render",s],["__scopeId","data-v-68d8fca1"]]);e["default"]=O}}]);
//# sourceMappingURL=chunk-63f6baef.cd3a91d0.js.map