(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95dae1c2"],{"262c":function(t,e,o){},3047:function(t,e,o){"use strict";o.r(e);var n=o("7a23");const c=Object(n["i"])("簡訊號碼驗證"),b=Object(n["i"])("　簡訊驗證碼　"),j=Object(n["i"])("重新發送驗證碼"),l=Object(n["i"])("進行驗證"),u=Object(n["i"])("* 重新發送簡訊驗證碼需間隔 1 分鐘。");function i(t,e,o,i,a,O){const d=Object(n["B"])("ion-back-button"),r=Object(n["B"])("ion-buttons"),s=Object(n["B"])("ion-title"),I=Object(n["B"])("ion-toolbar"),f=Object(n["B"])("ion-header"),B=Object(n["B"])("ion-label"),H=Object(n["B"])("ion-input"),_=Object(n["B"])("ion-item"),k=Object(n["B"])("ion-col"),m=Object(n["B"])("ion-button"),p=Object(n["B"])("ion-text"),h=Object(n["B"])("ion-row"),w=Object(n["B"])("ion-grid"),g=Object(n["B"])("ion-content"),C=Object(n["B"])("ion-page");return Object(n["u"])(),Object(n["e"])(C,null,{default:Object(n["H"])(()=>[Object(n["j"])(f,null,{default:Object(n["H"])(()=>[Object(n["j"])(I,null,{default:Object(n["H"])(()=>[Object(n["j"])(r,{slot:"start"},{default:Object(n["H"])(()=>[Object(n["j"])(d,{"default-href":"/home"})]),_:1}),Object(n["j"])(s,null,{default:Object(n["H"])(()=>[c]),_:1})]),_:1})]),_:1}),Object(n["j"])(g,{class:"verify-register-form"},{default:Object(n["H"])(()=>[Object(n["j"])(w,null,{default:Object(n["H"])(()=>[Object(n["j"])(h,null,{default:Object(n["H"])(()=>[Object(n["j"])(k,{size:"12"},{default:Object(n["H"])(()=>[Object(n["j"])(_,{class:"input"},{default:Object(n["H"])(()=>[Object(n["j"])(B,null,{default:Object(n["H"])(()=>[b]),_:1}),Object(n["j"])(H,{type:"tel",modelValue:a.code,"onUpdate:modelValue":e[0]||(e[0]=t=>a.code=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})]),_:1}),Object(n["j"])(k,{size:"6"},{default:Object(n["H"])(()=>[Object(n["j"])(m,{class:"button-2",onClick:O.retry},{default:Object(n["H"])(()=>[j]),_:1},8,["onClick"])]),_:1}),Object(n["j"])(k,{size:"6"},{default:Object(n["H"])(()=>[Object(n["j"])(m,{class:"button-1",onClick:O.submit},{default:Object(n["H"])(()=>[l]),_:1},8,["onClick"])]),_:1}),Object(n["j"])(k,{size:"12"},{default:Object(n["H"])(()=>[Object(n["j"])(p,null,{default:Object(n["H"])(()=>[u]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var a=o("d722"),O=o("d867"),d={components:{IonBackButton:O["IonBackButton"],IonButton:O["IonButton"],IonButtons:O["IonButtons"],IonCol:O["IonCol"],IonContent:O["IonContent"],IonGrid:O["IonGrid"],IonHeader:O["IonHeader"],IonInput:O["IonInput"],IonItem:O["IonItem"],IonLabel:O["IonLabel"],IonPage:O["IonPage"],IonRow:O["IonRow"],IonText:O["IonText"],IonTitle:O["IonTitle"],IonToolbar:O["IonToolbar"]},data(){return{code:"",token:this.$route.params.token}},methods:{retry(){Object(a["registerSms"])({token:this.token},()=>{alert("驗證碼重發成功")})},submit(){Object(a["verifyRegister"])({code:this.code,token:this.token},()=>{alert("帳號註冊成功"),this.$router.go(-1)})}}},r=(o("3a1b"),o("6b0d")),s=o.n(r);const I=s()(d,[["render",i],["__scopeId","data-v-87029fc4"]]);e["default"]=I},"3a1b":function(t,e,o){"use strict";o("262c")}}]);
//# sourceMappingURL=chunk-95dae1c2.7206583e.js.map