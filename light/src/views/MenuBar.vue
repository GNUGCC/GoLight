<template>
    <ion-img class="step-bar" :src="`/assets/images/step-${step}.png`" v-if="step"></ion-img>
    <ion-toolbar v-show="token">
        <ion-buttons>
            <ion-button class="button-4" router-link="/temple-list">
                <ion-img slot="start" src="/assets/images/icon1-1.png"/>
                點燈祈福
            </ion-button>
            <ion-button class="button-4" router-link="/member-info">
                <ion-img slot="start" src="/assets/images/icon1-2.png"/>
                會員資料
            </ion-button>
            <ion-button class="button-4" router-link="/order-list">
                <ion-img slot="start" src="/assets/images/icon1-3.png"/>
                購買資料
            </ion-button>
            <ion-button class="button-4" @click="logout">
                <ion-img slot="start" src="/assets/images/icon1-4.png"/>
                登出系統
            </ion-button>
        </ion-buttons>
    </ion-toolbar>
</template>

<script>
    import {
        logout
    } from "../api";

    import {
        IonButton,
        IonButtons,
        IonImg,
        IonToolbar
    } from "@ionic/vue";

    export default {
        components: {
            IonButton,
            IonButtons,
            IonImg,
            IonToolbar
        },
        computed: {
            token() {
                return this.$store.state.token;
            }
        },
        methods: {
            logout() {
                logout(() => {
                    this.$store.commit("logout");
                    if (this.$route.meta.requiresAuth) {
                        this.$router.push({name: "Home"});
                    }
                });
            }
        },
        props: {
            step: String
        }
    };
</script>

<style scoped>
    ion-button {
        font-size: 0.85rem;
    }
    .step-bar {
        background: #ece1a6;
    }
</style>
