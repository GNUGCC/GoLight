<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/member-info"></ion-back-button>
        </ion-buttons>
        <ion-title>寵物名冊</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="family-list">
      <ion-grid>
        <template v-if="list.length">
          <ion-row class="family ion-margin-bottom" :key="item.id" v-for="item in list">
            <ion-col size="4">
              {{ item.name }}
            </ion-col>
            <ion-col size="4">
              {{ item.birthday }}
            </ion-col>
            <ion-col class="ion-text-right" size="2">
              <ion-text :router-link="'/family/' + item.id">修改</ion-text>
            </ion-col>
            <ion-col class="ion-text-right" size="2">
              <ion-text @click="remove(item)">刪除</ion-text>
            </ion-col>
          </ion-row>
        </template>
        <ion-row class="ion-margin-bottom" v-else>
          <ion-col>
            尚無資料
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-button class="button-3" router-link="/new-family">新增寵物</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <menu-bar></menu-bar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  queryFamilyList,
  removeFamily,
  getImgSrc,
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
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

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
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    MenuBar
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    getImgSrc,
    query() {
      queryFamilyList((result) => {
        this.list = result.list;
      });
    },
    remove(family) {
      if (confirm(`確定要刪除 "${family.name}" 嗎？`)) {
        removeFamily(family.id, () => {
          this.list = this.list.filter(item => item.id !== family.id);
        });
      }
    }
  },
  mounted() {
    this.query();
  },
  watch: {
    $route(to) {
      if (to.name === "FamilyList") {
        this.query();
      }
    }
  }
};
</script>

<style scoped>
ion-grid {
  margin: 20px 20px 0 20px;
}

ion-col {
  color: #333;
}

.family {
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
</style>
