(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46dc6002"],{3047:function(t,e,o){"use strict";o.r(e);var n=o("7a23");const c=Object(n["i"])("簡訊號碼驗證"),j=Object(n["i"])("　簡訊驗證碼　"),b=Object(n["i"])("重新發送驗證碼"),l=Object(n["i"])("進行驗證"),u=Object(n["i"])("* 重新發送簡訊驗證碼需間隔 1 分鐘。");function i(t,e,o,i,O,a){const d=Object(n["B"])("ion-back-button"),s=Object(n["B"])("ion-buttons"),r=Object(n["B"])("ion-title"),I=Object(n["B"])("ion-toolbar"),f=Object(n["B"])("ion-header"),B=Object(n["B"])("ion-label"),H=Object(n["B"])("ion-input"),_=Object(n["B"])("ion-item"),m=Object(n["B"])("ion-col"),k=Object(n["B"])("ion-button"),p=Object(n["B"])("ion-text"),h=Object(n["B"])("ion-row"),w=Object(n["B"])("ion-grid"),C=Object(n["B"])("ion-content"),g=Object(n["B"])("ion-page");return Object(n["u"])(),Object(n["e"])(g,null,{default:Object(n["H"])(()=>[Object(n["j"])(f,null,{default:Object(n["H"])(()=>[Object(n["j"])(I,null,{default:Object(n["H"])(()=>[Object(n["j"])(s,{slot:"start"},{default:Object(n["H"])(()=>[Object(n["j"])(d,{"default-href":"/home"})]),_:1}),Object(n["j"])(r,null,{default:Object(n["H"])(()=>[c]),_:1})]),_:1})]),_:1}),Object(n["j"])(C,{class:"verify-register-form"},{default:Object(n["H"])(()=>[Object(n["j"])(w,null,{default:Object(n["H"])(()=>[Object(n["j"])(h,null,{default:Object(n["H"])(()=>[Object(n["j"])(m,{size:"12"},{default:Object(n["H"])(()=>[Object(n["j"])(_,{class:"input"},{default:Object(n["H"])(()=>[Object(n["j"])(B,null,{default:Object(n["H"])(()=>[j]),_:1}),Object(n["j"])(H,{type:"tel",modelValue:O.code,"onUpdate:modelValue":e[0]||(e[0]=t=>O.code=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})]),_:1}),Object(n["j"])(m,{size:"6"},{default:Object(n["H"])(()=>[Object(n["j"])(k,{class:"button-2",onClick:a.retry},{default:Object(n["H"])(()=>[b]),_:1},8,["onClick"])]),_:1}),Object(n["j"])(m,{size:"6"},{default:Object(n["H"])(()=>[Object(n["j"])(k,{class:"button-1",onClick:a.submit},{default:Object(n["H"])(()=>[l]),_:1},8,["onClick"])]),_:1}),Object(n["j"])(m,{size:"12"},{default:Object(n["H"])(()=>[Object(n["j"])(p,null,{default:Object(n["H"])(()=>[u]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var O=o("d722"),a=o("d867"),d={components:{IonBackButton:a["IonBackButton"],IonButton:a["IonButton"],IonButtons:a["IonButtons"],IonCol:a["IonCol"],IonContent:a["IonContent"],IonGrid:a["IonGrid"],IonHeader:a["IonHeader"],IonInput:a["IonInput"],IonItem:a["IonItem"],IonLabel:a["IonLabel"],IonPage:a["IonPage"],IonRow:a["IonRow"],IonText:a["IonText"],IonTitle:a["IonTitle"],IonToolbar:a["IonToolbar"]},data(){return{code:"",token:this.$route.params.token}},methods:{retry(){Object(O["registerSms"])({token:this.token},()=>{alert("驗證碼重發成功")})},submit(){Object(O["verifyRegister"])({code:this.code,token:this.token},()=>{alert("帳號註冊成功"),this.$router.push({name:"Home"})})}}},s=(o("6716"),o("6b0d")),r=o.n(s);const I=r()(d,[["render",i],["__scopeId","data-v-5cc64998"]]);e["default"]=I},"40ff":function(t,e,o){},6716:function(t,e,o){"use strict";o("40ff")}}]);
//# sourceMappingURL=chunk-46dc6002.6bf089c1.js.map