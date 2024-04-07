<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="'/temple/' + id"></ion-back-button>
        </ion-buttons>
        <ion-title>點燈祈福</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="new-order">
      <ion-grid v-if="$store.state.items.length">
        <ion-row>
          <ion-col size="12" style="font-size:1.3rem;">
            已選燈列表
          </ion-col>
        </ion-row>
        <ion-row class="record ion-margin-top" :key="item.timestamp" v-for="item in $store.state.items">
          <ion-col size="4">
            {{ item.light.title }}
          </ion-col>
          <ion-col size="4">
            {{ item.name }}
          </ion-col>
          <ion-col class="ion-text-right" size="2">
            <ion-text :router-link="'/new-order-item/' + id + '/' + item.timestamp">修改</ion-text>
          </ion-col>
          <ion-col class="ion-text-right" size="2">
            <ion-text @click="remove(item)">刪除</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid v-else>
        <ion-row>
          <ion-col size="12" style="font-size:1.3rem;">
            已選燈列表
          </ion-col>
        </ion-row>
        <ion-row class="record ion-margin-top">
          <ion-col>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row class="ion-margin-bottom ion-padding-bottom">
          <ion-col size="12">
            <ion-button class="button-3" :router-link="'/new-order-item/' + id">+&nbsp;&nbsp;&nbsp;新增</ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-margin-top ion-padding-top">
          <ion-col size="6">
            <ion-button class="button-1" :router-link="'/coupon-list/' + id">使用BLESS序號</ion-button>
          </ion-col>
          <ion-col size="2">
            <ion-img @click="help" src="/assets/images/icon3.png" style="width:45px;"/>
          </ion-col>
          <ion-col size="4">
            <ion-text style="font-size:0.8rem" v-show="discount">總折抵{{ discount }}元</ion-text>
          </ion-col>
          <ion-col size="12">
            <ion-item class="input">
              <ion-label>　　總金額　　</ion-label>
              <ion-input readonly :value="amount"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item class="input select">
              <ion-label>　　付款方式　　</ion-label>
              <ion-select interface="popover" placeholder="請選擇" v-model="method">
                <ion-select-option value="1">信用卡</ion-select-option>
                <ion-select-option value="2">銀行轉帳</ion-select-option>
                <ion-select-option value="3">超商代收</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-button @click="submit" class="button-3">付款</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <menu-bar :step="$store.state.items.length ? '4' : '2'"></menu-bar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  createOrder,
  queryOrder,
  //   passpay,
} from "../api";

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  alertController
} from "@ionic/vue";

import {
  InAppBrowser
} from "@awesome-cordova-plugins/in-app-browser";

import MenuBar from "@/views/MenuBar.vue";

export default {
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTitle,
    IonToolbar,
    MenuBar
  },
  computed: {
    amount() {
      let amount = 0 - this.discount;
      this.$store.state.items.forEach((item) => {
        amount += item.light.price;
      });
      return amount > 0 ? amount : 0;
    },
    discount() {
      let discount = 0;
      this.$store.state.coupons.forEach((coupon) => {
        if (coupon.checked) {
          discount += parseInt(coupon.discount);
        }
      });
      return discount;
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      method: ""
    };
  },
  methods: {
    async help() {
      const alert = await alertController.create({
        header: "BLESS序號說明",
        message: "1) 點選BLESS序號按鈕，可進入BLESS序號輸入頁面，輸入序號則可折抵金額。<br>2) 多張序號可一併使用，要使用的序號，請在欄位前方點選選取，按下使用則開始使用。<br>3) 一個序號只能使用一次。<br>4) 序號無法兌換現金或找零，一個序號請一次使用完畢。",
        buttons: ["OK"]
      });
      await alert.present();
    },
    remove(item) {
      if (confirm(`確定要刪除${item.name}的${item.light.title}嗎？`)) {
        this.$store.commit("remove", item);
      }
    },
    submit() {
      if (!this.$store.state.items.length) {
        alert("請新增燈種");
        return;
      }
      if (this.method === "") {
        alert("請選擇付款方式");
        return;
      }
      if (confirm(`確定要送出訂單嗎？`)) {
        let coupons = [];
        this.$store.state.coupons.forEach((coupon) => {
          if (coupon.checked) {
            coupons.push(coupon.code);
          }
        });
        //pay
        createOrder({
          items: JSON.parse(JSON.stringify(this.$store.state.items)),
          coupons,
          method: this.method
        }, (result) => {
          this.$store.commit("purge");
          if(result.order && result.order.id) {
            this.$router.push({name: "OrderCompleted", params: {id: result.order.id}});
            return
          }
          let closed;
          let browser = InAppBrowser.create(result.url, "_blank", {
            hardwareback: "no",
            hidenavigationbuttons: "yes",
            location: "no",
            usewkwebview: "yes"
          });
          browser.on("exit").subscribe(() => {
            if (!closed) {
              this.$router.push({name: "Order", params: {id: result.order_id}});
            }
          });
          browser.on("loadstop").subscribe((event) => {
            if (event.url.startsWith(result.return_url)) {
              closed = true;
              browser.close();
              queryOrder(result.order_id, (res) => {

                if (res.order.status == 2) {
                  this.$router.push({name: "OrderCompleted", params: {id: result.order_id}});
                } else {
                  this.$router.push({name: "Order", params: {id: result.order_id}});
                }
              });
            }
          });
        });
        //pass pay
        // createOrder({
        //   items: JSON.parse(JSON.stringify(this.$store.state.items)),
        //   coupons,
        //   method: this.method
        // }, (result) => {
        //   let orderId = result.order_id
        //   if(!orderId) {
        //     orderId = result.order.id
        //   }
        //   passpay({
        //     orderId: orderId,
        //   }, result => {
        //     this.$router.push({name: "OrderCompleted", params: {id: result.orderId}});
        //   })
        // });
      }
    }
  }
};
</script>

<style scoped>
ion-col {
  color: #333;
}

ion-grid {
  margin: 20px 20px 0 20px;
}

.button-1 {
  --border-radius: 10px;
}

.record {
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
ion-select {
  --placeholder-opacity: 1;
}
</style>
