import {IonicVue} from "@ionic/vue";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@ionic/vue/css/core.css";
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";
import "./theme/variables.css";
import "./theme/custom.css";

import "../node_modules/croppie/croppie.css";

const app = createApp(App).use(IonicVue).use(router).use(store);

router.beforeEach((to) => {
    if (!store.state.token && to.matched.some(rule => rule.meta.requiresAuth)) {
        return {name: "LoginForm"};
    }

    return true;
});

router.isReady().then(() => {
    app.mount("#app");
});

window.screen.orientation.lock("portrait");
