<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/temple-list"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="temple">
            <div class="ion-padding temple-image" :style="style">
                <ion-item class="search">
                    <ion-img slot="start" src="/assets/images/icon2.png"/>
                    <ion-input placeholder="在這裏搜尋宮廟名稱" @search="search" type="search" v-model.trim="keyword"></ion-input>
                </ion-item>
            </div>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center" offset="4" size="4">
                        <ion-img @click="light" src="/assets/images/btn3-1.png"></ion-img>
                        <ion-text style="font-size: 1.2rem;">點燈祈福</ion-text>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-padding-end ion-padding-start ion-margin-end ion-margin-start">
                    <ion-col class="ion-text-center" size="4">
                        <ion-img src="/assets/images/btn3-2.png" :router-link="'/news-list/' + id"></ion-img>
                        <ion-text>最新消息</ion-text>
                    </ion-col>
                    <ion-col class="ion-text-center" size="4" v-if="website_url">
                        <ion-img @click="openWebsite" src="/assets/images/btn3-3.png"></ion-img>
                        <ion-text>宮廟連結</ion-text>
                    </ion-col>
<!--                    <ion-col class="ion-text-center" size="4">-->
<!--                        <ion-img @click="find" src="/assets/images/btn3-4.png"></ion-img>-->
<!--                        <ion-text>快速尋燈</ion-text>-->
<!--                    </ion-col>-->
                    <ion-col class="ion-text-center" size="4" v-if="store_url">
                        <ion-img @click="openStore" src="/assets/images/btn3-5.png"></ion-img>
                        <ion-text>禮物小舖</ion-text>
                    </ion-col>
                    <ion-col class="ion-text-center" size="4">
                        <ion-img src="/assets/images/btn3-6.png" :router-link="'/attraction-list/' + id"></ion-img>
                        <ion-text>旅遊景點</ion-text>
                    </ion-col>
                    <ion-col class="ion-text-center" size="4" v-if="video_url">
                        <ion-img @click="openYoutube" src="/assets/images/btn3-7.png"></ion-img>
                        <ion-text>多媒體影片</ion-text>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
        <ion-footer>
            <menu-bar step="1"></menu-bar>
        </ion-footer>
    </ion-page>
</template>

<script>
    import {
        baseUrl,
        queryTemple,
        searchLight
    } from "../api";

    import {
        IonBackButton,
        IonButtons,
        IonCol,
        IonContent,
        IonFooter,
        IonGrid,
        IonHeader,
        IonImg,
        IonInput,
        IonItem,
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
            IonButtons,
            IonCol,
            IonContent,
            IonFooter,
            IonGrid,
            IonHeader,
            IonImg,
            IonInput,
            IonItem,
            IonPage,
            IonRow,
            IonText,
            IonTitle,
            IonToolbar,
            MenuBar
        },
        computed: {
            style() {
                let style = {};
                if (this.image) {
                    style.backgroundImage = `url(${baseUrl}/files/${this.image})`;
                }
                return style;
            }
        },
        data() {
            return {
                id: this.$route.params.id,
                keyword: "",
                title: "",
                image: "",
                website_url: "",
                store_url: "",
                video_url: ""
            };
        },
        methods: {
            find() {
                searchLight({
                    id: this.id,
                    longitude: this.$store.state.coords.longitude,
                    latitude: this.$store.state.coords.latitude
                }, (result) => {
                    alert(result.message);
                });
            },
            light() {
                if (this.$store.state.token || confirm("您尚未登入，登入後才可使用此功能。")) {
                    this.$router.push({name: "NewOrder", params: {id: this.id}});
                }
            },
            openStore() {
                window.open(this.store_url, "_system");
            },
            openWebsite() {
                window.open(this.website_url, "_system");
            },
            openYoutube() {
                window.open(this.video_url, "_system");
            },
            query() {
                queryTemple(this.id, (result) => {
                    let temple = result.temple;
                    this.title = temple.title;
                    this.image = temple.image;
                    this.website_url = temple.website_url;
                    this.store_url = temple.store_url;
                    this.video_url = temple.video_url;
                });
            },
            search() {
                if (this.keyword) {
                    this.$router.push({name: "TempleList", params: {keyword: this.keyword}});
                }
            }
        },
        mounted() {
            this.query();
        },
        watch: {
            $route(to) {
                if (to.name === "Temple") {
                    this.id = to.params.id;
                    this.query();
                }
            }
        }
    };
</script>

<style scoped>
    ion-grid {
        margin: 10px 20px 0 20px;
    }
    ion-text {
        color: #664e11;
        font-size: 0.8rem;
    }
    .temple-image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 35%;
    }
</style>
