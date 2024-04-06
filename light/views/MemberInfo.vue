<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>會員資料</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="member-info">
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-item class="input">
                            <ion-label>　　姓名　　</ion-label>
                            <ion-input v-model.trim="name"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input select">
                            <ion-label>　　性別　　</ion-label>
                            <ion-select interface="popover" v-model="gender">
                                <ion-select-option value="1">男</ion-select-option>
                                <ion-select-option value="2">女</ion-select-option>
                            </ion-select>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input select">
                            <ion-label>　　生日　　</ion-label>
                            <ion-datetime displayFormat="YYYY-MM-DD" v-model="birthday"></ion-datetime>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input">
                            <ion-label>　　地址　　</ion-label>
                            <ion-input v-model.trim="address"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input">
                            <ion-label>　　電話　　</ion-label>
                            <ion-input readonly v-model.trim="username"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input">
                            <ion-label>　原始密碼　</ion-label>
                            <ion-input type="password" v-model.trim="password"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input">
                            <ion-label>　修改密碼　</ion-label>
                            <ion-input type="password" v-model.trim="new_password"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item class="input">
                            <ion-label>　確認密碼　</ion-label>
                            <ion-input type="password" v-model="confirm"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="6">
                        <ion-button class="button-1" router-link="/family-list">寵物名冊</ion-button>
                    </ion-col>
                    <ion-col size="6">
                        <ion-button class="button-3" @click="save">送出</ion-button>
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
        queryInfo,
        saveInfo
    } from "../api";

    import {
        IonBackButton,
        IonButton,
        IonButtons,
        IonCol,
        IonContent,
        IonDatetime,
        IonFooter,
        IonGrid,
        IonHeader,
        IonInput,
        IonItem,
        IonLabel,
        IonPage,
        IonRow,
        IonSelect,
        IonSelectOption,
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
            IonDatetime,
            IonFooter,
            IonGrid,
            IonHeader,
            IonInput,
            IonItem,
            IonLabel,
            IonPage,
            IonRow,
            IonSelect,
            IonSelectOption,
            IonTitle,
            IonToolbar,
            MenuBar
        },
        data() {
            return {
                name: "",
                gender: "",
                birthday: "",
                address: "",
                username: "",
                password: "",
                new_password: "",
                confirm: ""
            };
        },
        methods: {
            query() {
                queryInfo((result) => {
                    let info = result.info;
                    this.name = info.name;
                    this.gender = `${info.gender}`;
                    this.birthday = info.birthday;
                    this.address = info.address;
                    this.username = info.username;
                    this.password = "";
                    this.new_password = "";
                    this.confirm = "";
                });
            },
            save() {
                saveInfo({
                    name: this.name,
                    gender: this.gender,
                    birthday: this.birthday.split("T")[0],
                    address: this.address,
                    username: this.username,
                    password: this.password,
                    new_password: this.new_password,
                    confirm: this.confirm
                }, () => {
                    this.password = "";
                    this.new_password = "";
                    this.confirm = "";
                    alert("資料儲存成功");
                });
            }
        },
        mounted() {
            this.query();
        },
        watch: {
            $route(to) {
                if (to.name === "MemberInfo") {
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
</style>
