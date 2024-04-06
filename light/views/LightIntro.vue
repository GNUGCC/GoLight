<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-button @click="close">關閉</ion-button>
            </ion-buttons>
            <ion-title>光明燈介紹</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="order-item">
        <ion-grid>
            <ion-row>
                <ion-col offset="4" size="4">
                    <remote-img :path="icon"></remote-img>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col class="ion-text-center" offset="4" size="4">
                    {{ title }}
                </ion-col>
            </ion-row>
            <ion-row class="ion-margin-top">
                <ion-col size="12" v-html="introduction"></ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>

<script>
    import {
        IonButton,
        IonButtons,
        IonCol,
        IonContent,
        IonGrid,
        IonHeader,
        IonRow,
        IonTitle,
        IonToolbar,
        modalController
    } from "@ionic/vue";

    import RemoteImg from "@/views/RemoteImg.vue";

    export default {
        components: {
            IonButton,
            IonButtons,
            IonCol,
            IonContent,
            IonGrid,
            IonHeader,
            IonRow,
            IonTitle,
            IonToolbar,
            RemoteImg
        },
        methods: {
            close() {
                modalController.dismiss();
            }
        },
        props: {
            icon: String,
            introduction: String,
            title: String
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
</style>
