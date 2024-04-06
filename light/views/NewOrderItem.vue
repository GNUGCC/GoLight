<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="'/new-order/' + id"></ion-back-button>
        </ion-buttons>
        <ion-title>新增燈種</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="order-item">
      <ion-grid>
        <ion-row class="ion-margin-bottom ion-justify-content-around" v-show="lights.length">
          <ion-col class="ion-text-center" :key="item.id" size="4" v-for="item in lights">
            <remote-img @click="pick(item)" :path="item.picked ? item.icon : item.icon2"></remote-img>
            <ion-text>{{ item.title }}</ion-text>
            <ion-img @click="intro(item)" src="/assets/images/icon4.png" style="margin:0 auto;width:60px;"></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="1" v-if="false">
            <ion-item class="input-2">
              <ion-checkbox v-model="checked"></ion-checkbox>
              <ion-label style="margin-left:8px;">同會員資料</ion-label>
            </ion-item>
          </ion-col>
          <ion-col size="12" v-show="list.length">
            <ion-item class="input select">
              <ion-select :disabled="checked" interface="popover" placeholder="寵物名冊" slot="end" v-model="family">
                <ion-select-option :key="item.id" :value="item.id" v-for="item in list">
                  {{ item.name }}
                </ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-item class="input">
              <ion-label>　　寵物名稱　　</ion-label>
              <ion-input :readonly="checked" v-model.trim="name"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item class="input select">
              <ion-label>　　寵物生日　　</ion-label>
              <ion-datetime displayFormat="YYYY-MM-DD" placeholder="請選擇" :readonly="checked"
                            v-model="birthday"></ion-datetime>
            </ion-item>
          </ion-col>
          <!--                    <ion-col size="6">-->
          <!--                        <ion-item class="input">-->
          <!--                            <ion-label>　　主人電話　　</ion-label>-->
          <!--                            <ion-input :readonly="checked" v-model.trim="phone"></ion-input>-->
          <!--                        </ion-item>-->
          <!--                    </ion-col>-->
          <ion-col size="12" style="display: flex;justify-content: center">
            <ion-img style="width: auto;height: 128px;max-width: 100%" :src="petImageUrl" alt="寵物照片"></ion-img>
          </ion-col>
          <ion-col size="12">
            <ion-item class="input">
              <ion-label>　　照片　　</ion-label>
              <ion-input type="file" accept="image/*" @change="imgFileChange" />
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item class="input">
              <ion-label>　　地址　　</ion-label>
              <ion-input :readonly="checked" v-model.trim="address"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item class="input">
              <ion-label>　　金額　　</ion-label>
              <ion-input readonly v-model="amount"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-button @click="save" class="button-3">儲存點燈</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <menu-bar step="3"></menu-bar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  queryLightList,
  getImgSrc,
} from "../api";

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonDatetime,
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
  modalController
} from "@ionic/vue";

import LightIntro from "@/views/LightIntro.vue";

import MenuBar from "@/views/MenuBar.vue";

import RemoteImg from "@/views/RemoteImg.vue";

export default {
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCheckbox,
    IonCol,
    IonContent,
    IonDatetime,
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
    MenuBar,
    RemoteImg
  },
  data() {
    return {
      id: this.$route.params.id,
      checked: false,
      family: "",
      name: "",
      birthday: "",
      phone: "",
      address: "",
      amount: 0,
      timestamp: this.$route.params.timestamp,
      lights: [],
      list: [],
      member: {},
      pet_image: '',
      petImageUrl: '',
    };
  },
  methods: {
    async intro(light) {
      const modal = await modalController.create({
        component: LightIntro,
        componentProps: {
          icon: light.icon,
          introduction: light.introduction,
          title: light.title
        }
      });
      await modal.present();
    },
    pick(light) {
      this.lights.forEach((other) => {
        other.picked = false
      });
      light.picked = true;
      this.amount = light.price;
    },
    query() {
      queryLightList(this.id, (result) => {
        this.lights = result.lights;
        this.list = result.list;
        this.member = result.member;
        if (this.timestamp) {
          let curr = this.$store.state.items.find(item => item.timestamp == this.timestamp);
          if (curr) {
            let light = this.lights.find(item => item.id === curr.light.id);
            if (light) {
              light.picked = true;
              this.amount = light.price;
            }
            this.checked = curr.checked;
            this.name = curr.name;
            this.birthday = curr.birthday;
            this.phone = curr.phone;
            this.address = curr.address;
            this.pet_image = curr.pet_image
          }
        }
      });
    },
    save() {
      let lights = this.lights.filter(light => light.picked);
      if (!lights.length) {
        alert("請選擇燈種");
        return;
      }
      let data = {
        // checked: this.checked,
        checked: false,
        light: lights[0],
        temple_id: this.id,
        timestamp: this.timestamp || Date.now()
      };
      if (this.name === "") {
        alert("請輸入姓名");
        return;
      }
      if (this.birthday === "") {
        alert("請輸入生日");
        return;
      }
      if (this.phone === "") {
        this.phone = this.member.username;
      }
      if (this.address === "") {
        alert("請輸入地址");
        return;
      }
      if(this.pet_image === '') {
        alert("請上傳寵物照片");
        return;
      }
      data.name = this.name;
      data.birthday = this.birthday.split("T")[0];
      data.phone = this.phone;
      data.address = this.address;
      data.pet_image = this.pet_image;
      this.$store.commit("add", data);
      this.$router.go(-1);
    },
    imgFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.pet_image = reader.result;
      };
    },
  },
  mounted() {
    this.query();
  },
  watch: {
    checked(value) {
      if (value) {
        this.family = "";
        this.name = this.member.name;
        this.birthday = this.member.birthday;
        this.phone = this.member.username;
        this.address = this.member.address;
      }
    },
    family(value) {
      if (value) {
        this.list.forEach((family) => {
          if (value == family.id) {
            this.name = family.name;
            this.birthday = family.birthday;
            this.pet_image = family.image;
          }
        });
      }
    },
    $route(to) {
      if (to.name === "NewOrderItem") {
        this.id = to.params.id;
        this.timestamp = to.params.timestamp;
        this.query();
      }
    },
    pet_image() {
      this.petImageUrl = getImgSrc(this.pet_image)
    },
  }
};
</script>

<style scoped>
ion-grid {
  margin: 20px 20px 0 20px;
}

ion-text {
  color: #333;
}

.input-2 {
  --background: transparent;
  --color: #333;
  --inner-border-width: 0;
}

.input-2 ion-checkbox {
  --background: #fff;
  --border-color: #000;
}
ion-select {
  --placeholder-opacity: 1;
}
</style>
