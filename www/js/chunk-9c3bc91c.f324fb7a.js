(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c3bc91c"],{"4e31":function(e,t,n){},e382:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o=Object(c["i"])("新增寵物資料"),l={ref:"imgEditor"},a=Object(c["i"])("　　寵物圖片　　"),i=Object(c["i"])("　　寵物名稱　　"),j=Object(c["i"])("　　曆別　　"),b=Object(c["i"])("國曆"),u=Object(c["i"])("農曆"),O=Object(c["i"])("　　寵物生日　　"),d=Object(c["i"])("儲存");function s(e,t,n,s,r,f){const p=Object(c["B"])("ion-back-button"),I=Object(c["B"])("ion-buttons"),m=Object(c["B"])("ion-title"),h=Object(c["B"])("ion-toolbar"),_=Object(c["B"])("ion-header"),H=Object(c["B"])("ion-col"),B=Object(c["B"])("ion-row"),g=Object(c["B"])("ion-label"),y=Object(c["B"])("ion-input"),w=Object(c["B"])("ion-item"),v=Object(c["B"])("ion-select-option"),C=Object(c["B"])("ion-select"),V=Object(c["B"])("ion-datetime"),k=Object(c["B"])("ion-button"),F=Object(c["B"])("ion-grid"),z=Object(c["B"])("ion-content"),D=Object(c["B"])("menu-bar"),T=Object(c["B"])("ion-footer"),M=Object(c["B"])("ion-page");return Object(c["u"])(),Object(c["e"])(M,null,{default:Object(c["H"])(()=>[Object(c["j"])(_,null,{default:Object(c["H"])(()=>[Object(c["j"])(h,null,{default:Object(c["H"])(()=>[Object(c["j"])(I,{slot:"start"},{default:Object(c["H"])(()=>[Object(c["j"])(p,{"default-href":"/family-list"})]),_:1}),Object(c["j"])(m,null,{default:Object(c["H"])(()=>[o]),_:1})]),_:1})]),_:1}),Object(c["j"])(z,{class:"family-list"},{default:Object(c["H"])(()=>[Object(c["j"])(F,null,{default:Object(c["H"])(()=>[Object(c["j"])(B,{style:{"justify-content":"center"}},{default:Object(c["H"])(()=>[Object(c["j"])(H,{size:"12"},{default:Object(c["H"])(()=>[Object(c["h"])("div",l,null,512)]),_:1})]),_:1}),Object(c["j"])(B,null,{default:Object(c["H"])(()=>[Object(c["j"])(H,{size:"12"},{default:Object(c["H"])(()=>[Object(c["j"])(w,{class:"input"},{default:Object(c["H"])(()=>[Object(c["j"])(g,null,{default:Object(c["H"])(()=>[a]),_:1}),Object(c["j"])(y,{accept:"image/*",onChange:f.imgFileChange,type:"file"},null,8,["onChange"])]),_:1})]),_:1}),Object(c["j"])(H,{size:"12"},{default:Object(c["H"])(()=>[Object(c["j"])(w,{class:"input"},{default:Object(c["H"])(()=>[Object(c["j"])(g,null,{default:Object(c["H"])(()=>[i]),_:1}),Object(c["j"])(y,{modelValue:r.name,"onUpdate:modelValue":t[0]||(t[0]=e=>r.name=e),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})]),_:1}),Object(c["j"])(H,{size:"12"},{default:Object(c["H"])(()=>[Object(c["j"])(w,{class:"input select"},{default:Object(c["H"])(()=>[Object(c["j"])(g,null,{default:Object(c["H"])(()=>[j]),_:1}),Object(c["j"])(C,{interface:"popover",modelValue:r.calendar_type,"onUpdate:modelValue":t[1]||(t[1]=e=>r.calendar_type=e)},{default:Object(c["H"])(()=>[Object(c["j"])(v,{value:"1"},{default:Object(c["H"])(()=>[b]),_:1}),Object(c["j"])(v,{value:"2"},{default:Object(c["H"])(()=>[u]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),Object(c["j"])(H,{size:"12"},{default:Object(c["H"])(()=>[Object(c["j"])(w,{class:"input select"},{default:Object(c["H"])(()=>[Object(c["j"])(g,null,{default:Object(c["H"])(()=>[O]),_:1}),Object(c["j"])(V,{displayFormat:"YYYY-MM-DD",placeholder:"請選擇",modelValue:r.birthday,"onUpdate:modelValue":t[2]||(t[2]=e=>r.birthday=e)},null,8,["modelValue"])]),_:1})]),_:1}),Object(c["j"])(H,{size:"12"},{default:Object(c["H"])(()=>[Object(c["j"])(k,{class:"button-3",onClick:f.save},{default:Object(c["H"])(()=>[d]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1}),Object(c["j"])(T,null,{default:Object(c["H"])(()=>[Object(c["j"])(D)]),_:1})]),_:1})}var r=n("d722"),f=n("2ff6"),p=n.n(f),I=n("d867"),m=n("e193"),h={components:{IonBackButton:I["IonBackButton"],IonButton:I["IonButton"],IonButtons:I["IonButtons"],IonCol:I["IonCol"],IonContent:I["IonContent"],IonDatetime:I["IonDatetime"],IonFooter:I["IonFooter"],IonGrid:I["IonGrid"],IonHeader:I["IonHeader"],IonInput:I["IonInput"],IonItem:I["IonItem"],IonLabel:I["IonLabel"],IonPage:I["IonPage"],IonRow:I["IonRow"],IonSelect:I["IonSelect"],IonSelectOption:I["IonSelectOption"],IonTitle:I["IonTitle"],IonToolbar:I["IonToolbar"],MenuBar:m["a"]},data(){return{name:"",calendar_type:"1",birthday:"",image:"",croppieIns:null}},methods:{async save(){let e=null;e=null!==this.croppieIns?await this.croppieIns.result("base64"):this.image,Object(r["saveFamily"])({name:this.name,calendar_type:this.calendar_type,birthday:this.birthday.split("T")[0],image:e},()=>{this.$router.go(-1)})},imgFileChange(e){const t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onload=()=>{this.image=n.result}}},watch:{image(){if(!this.$refs.imgEditor)return;null!==this.croppieIns&&(this.croppieIns.destroy(),this.croppieIns=null);const e=new p.a(this.$refs.imgEditor,{viewport:{width:150,height:150,type:"circle"},boundary:{width:300,height:300}});e.bind({url:this.image}),this.croppieIns=e}},mounted(){}},_=(n("f52a"),n("6b0d")),H=n.n(_);const B=H()(h,[["render",s],["__scopeId","data-v-553a6282"]]);t["default"]=B},f52a:function(e,t,n){"use strict";n("4e31")}}]);
//# sourceMappingURL=chunk-9c3bc91c.f324fb7a.js.map