<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<script>
    import {
        IonApp,
        IonRouterOutlet,
        useBackButton
    } from "@ionic/vue";

    import {
        Plugins
    } from "@capacitor/core";

    import {
        BleClient
    } from "@capacitor-community/bluetooth-le";

    import {
        useRoute
    } from "vue-router";

    import {
        useStore
    } from "vuex";

    import {
        queryLocationInfo,
        reportLocation
    } from "./api";

    import {
        getDistance,
        getLocation
    } from "./location";

    export default {
        components: {
            IonApp,
            IonRouterOutlet
        },
        setup() {
            const route = useRoute();
            const store = useStore();
            let temples = [];
            let monitors = [];
            async function scan(list) {
                await BleClient.initialize();
                await BleClient.requestLEScan({}, (result) => {
                    let token = result.device.deviceId.toUpperCase();
                    list.forEach((monitor) => {
                        if (monitor.token === token) {
                            reportLocation({monitor_id: monitor.id});
                        }
                    });
                });
                setTimeout(async () => {
                    await BleClient.stopLEScan();
                }, 5000);
            }
            function detect() {
                if (temples.length) {
                    if (store.state.token) {
                        getLocation((coords) => {
                            store.commit("setCoords", coords);
                            temples.forEach((temple) => {
                                let distance = getDistance(temple.longitude, temple.latitude, coords.longitude, coords.latitude);
                                if (distance < 0.5) {
                                    reportLocation({id: temple.id, distance});
                                }
                            });
                            setTimeout(detect, 180000); // 每3分鐘回報一次
                        });
                        if (monitors.length) {
                            scan(monitors);
                        }
                    } else {
                        setTimeout(detect, 60000); // 未登入者每分鐘重試一次
                    }
                } else {
                    // App 開啟後先查詢宮廟資料
                    queryLocationInfo((result) => {
                        temples = result.temples;
                        monitors = result.monitors;
                    }, true).then(() => {
                        setTimeout(detect, temples.length ? 1000 : 60000); // 成功查詢後馬上進行定位, 失敗則1分鐘後重試
                    });
                }
            }
            useBackButton(-1, () => {
                if (route.name === "Home") {
                    Plugins.App.exitApp();
                }
            });
            setTimeout(detect, 1000);
        }
    };
</script>
