<template>
    <ion-page>
        <ion-content :class="records.length ? 'home2' : 'home'">
            <ion-grid v-if="token">
                <ion-row>
                    <ion-col class="ion-padding" offset="1" size="5">
                        <ion-img src="/assets/images/btn2-1.png" router-link="/member-info"></ion-img>
                    </ion-col>
                    <ion-col class="ion-padding" size="5">
                        <ion-img src="/assets/images/btn2-2.png" router-link="/temple-list"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-padding" offset="1" size="5">
                        <ion-img src="/assets/images/btn2-3.png" router-link="/order-list"></ion-img>
                    </ion-col>
                    <ion-col class="ion-padding" size="5">
                        <ion-img @click="logout" src="/assets/images/btn2-4.png"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-around" style="margin:0 30px;" v-show="records.length">
                    <ion-col class="ion-text-center" :key="item.id" size="4" v-for="item in records">
                        <ion-text>{{ item.name }}</ion-text>
                        <remote-img :path="item.pet_image && item.pet_image !== '' ? item.pet_image : item.icon"></remote-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid v-else>
                <ion-row>
                    <ion-col offset="4" size="4">
                        <ion-img src="/assets/images/btn1-1.png" router-link="/temple-list"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col offset="4" size="4">
                        <ion-img src="/assets/images/btn1-2.png" router-link="/login-form"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col offset="4" size="4">
                        <ion-img src="/assets/images/btn1-3.png" router-link="/register-form"></ion-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import {
        logout,
        queryLightRecordList
    } from "../api";

    import {
        IonCol,
        IonContent,
        IonGrid,
        IonImg,
        IonPage,
        IonRow,
        IonText
    } from "@ionic/vue";

    import RemoteImg from "@/views/RemoteImg.vue";

    export default {
        components: {
            IonCol,
            IonContent,
            IonGrid,
            IonImg,
            IonPage,
            IonRow,
            IonText,
            RemoteImg
        },
        computed: {
            token() {
                return this.$store.state.token;
            }
        },
        data() {
            return {
                records: []
            };
        },
        methods: {
            logout() {
                logout(() => {
                    this.$store.commit("logout");
                    this.records = [];
                });
            },
            query() {
                if (this.token) {
                    queryLightRecordList((result) => {
                        this.records = result.records;
                    });
                } else {
                    this.records = [];
                }
            }
        },
        mounted() {
            this.query();
        },
        watch: {
            $route(to) {
                if (to.name === "Home") {
                    this.query();
                }
            }
        }
    };
</script>

<style scoped>
    ion-grid {
        margin-top: 20%;
    }
</style>
